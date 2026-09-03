/**
 * ElektroDict Project Lab Module
 * AI Powered Arduino Project Generation and Wokwi Integration.
 */

let currentAIProject = null;

function _escHtml(s){ return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function _sanitizeWokwiId(raw){
  if(!raw) return '';
  const str = String(raw).trim();
  // if numeric directly
  if(/^\d{5,}$/.test(str)) return str;
  const m = str.match(/projects\/(\d{5,})/);
  if(m) return m[1];
  // fallback: extract any long digit sequence
  const digits = str.match(/\d{5,}/);
  return digits ? digits[0] : '';
}

const ElektroProject = {
  init() {
    // Dynamic project hub initialization
  },

  async generate() {
    const input = document.getElementById('prj-idea-input');
    if (!input) return;
    const idea = input.value.trim();

    if (!idea) {
      this.showToast("Eits, jangan dikosongin dong! 😅 Tulis dulu proyek Arduino apa yang mau kamu buat.", 'warn');
      input.focus();
      return;
    }

    const btn = document.getElementById('prj-gen-btn');
    const loading = document.getElementById('prj-loading');
    if (!btn || !loading) return;
    
    const origBtnLabel = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '🛠️ Sabar ya, lagi ngerakit kabel virtual buat kamu...';
    loading.classList.remove('hide');
    
    try {
      if (!window.ElektroAPI) throw new Error("API Layer not loaded");
      const board = document.querySelector('.prj-board-opt.on')?.dataset.board || 'uno';
      const data = await window.ElektroAPI.generateProject(idea, board);
      let rawContent = data.result;
      let cleanContent = rawContent.replace(/```json/ig, '').replace(/```/g, '').trim();

      try {
        const prj = JSON.parse(cleanContent);
        const rawSlug = String(prj.title || 'proyek').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,20) || 'proyek';
        const uniq = Date.now().toString(36).slice(-4);
        prj.id = 'ai-' + rawSlug + '-' + uniq;

        // Normalize schema
        if (!prj.bom && prj.components) prj.bom = prj.components;
        if (!prj.wiring_guide && prj.wiring_table) prj.wiring_guide = prj.wiring_table;
        if (!prj.cpp_code && prj.code) {
          prj.cpp_code = Array.isArray(prj.code) ? prj.code.join('\n') : String(prj.code || '');
        }
        if (!prj.difficulty) prj.difficulty = 'Menengah';

        currentAIProject = prj;
        this.renderDetail(prj);

      } catch (parseError) {
        console.error("JSON Parsing Error:", parseError);
        this.showToast("Aduh, ElektroBot lagi agak pusing! 😵‍💫 Gagal nge-generate. Coba kasih instruksi yang lebih simpel atau klik ulang.", 'error');
      }

    } catch (err) {
      console.error("Generate Error:", err);
      const isLimit = err?.isRateLimit ||
        err?.status === 429 ||
        err?.httpStatus === 429 ||
        (err?.message || '').includes('429') ||
        (err?.message || '').includes('RATE_LIMIT');
      if (isLimit) {
        this.showToast("Waduh, trafik lagi padat banget! 🚦 Kuota AI kita lagi istirahat bentar. Coba lagi dalam 1-2 menit ya!", 'warn');
      } else {
        this.showToast("Aduh, ElektroBot lagi agak pusing! 😵‍💫 Gagal nge-generate. Coba kasih instruksi yang lebih simpel atau klik ulang.", 'error');
      }
    } finally {
      btn.disabled = false;
      btn.innerHTML = origBtnLabel;
      loading.classList.add('hide');
    }
  },

  showToast(message, type = 'info') {
    document.getElementById('prj-toast')?.remove();
    const colors = {
      warn:  { bg: 'rgba(250,176,5,.12)',  border: 'rgba(250,176,5,.4)',   text: '#fbbf24' },
      error: { bg: 'rgba(239,68,68,.10)',  border: 'rgba(239,68,68,.35)',  text: '#f87171' },
      info:  { bg: 'rgba(99,102,241,.10)', border: 'rgba(99,102,241,.35)', text: 'var(--accent)' }
    };
    const c = colors[type] || colors.info;
    const toast = document.createElement('div');
    toast.id = 'prj-toast';
    toast.style.cssText = `background:${c.bg};border:1px solid ${c.border};border-radius:10px;padding:12px 16px;font-size:13px;color:${c.text};line-height:1.6;margin-bottom:14px;animation:fadeIn .25s ease;font-weight:500;`;
    toast.textContent = message;
    const btn = document.getElementById('prj-gen-btn');
    btn?.parentNode?.insertBefore(toast, btn);
    setTimeout(() => toast.remove(), 6000);
  },

  renderDetail(prj) {
    const content = document.getElementById('project-detail-content');
    if(!content) return;
    
    window.currentPrjForExport = prj;
    let progress = [];
    try { const raw = localStorage.getItem(`ed_prj_progress_${prj.id}`); progress = raw ? JSON.parse(raw) : []; if(!Array.isArray(progress)) progress=[]; } catch(e){ progress=[]; }

    const disclaimerHtml = `<div class="pd-disclaimer"><div class="pd-disclaimer-icon">⚠️</div><div class="pd-disclaimer-text">Catatan: Panduan proyek ini di-generate oleh AI. Harap periksa kembali skema rangkaian, datasheet komponen, dan batas tegangan sebelum merakit.</div></div>`;

    const componentList = prj.bom || prj.components || [];
    const bomHtml = componentList.length ? `<div class="pd-section"><h3 class="pd-section-h">📦 Bill of Materials (BOM)</h3><div class="pd-components"><ul class="pd-comp-list">${componentList.map(c => `<li class="pd-comp-item">${_escHtml(c)}</li>`).join('')}</ul></div></div>` : '';

    const wiringData = prj.wiring_guide || prj.wiring_table || prj.wiring || [];
    const wiringHtml = wiringData.length ? `<div class="pd-section"><h3 class="pd-section-h">🔌 Tabel Koneksi Kabel (Wiring Guide)</h3><div class="pd-table-wrap"><table class="pd-table"><thead><tr><th>Komponen</th><th>Pin Komponen</th><th>Koneksi ke Board</th></tr></thead><tbody>${wiringData.map(w => `<tr><td><b>${_escHtml(w.komponen||'-')}</b></td><td><code>${_escHtml(w.pin_komponen || w.koneksi_pin || '-')}</code></td><td><code>${_escHtml(w.koneksi_arduino || w.koneksi_board || '-')}</code></td></tr>`).join('')}</tbody></table></div></div>` : '';

    const cppCode = String(prj.cpp_code || (Array.isArray(prj.code) ? prj.code.join('\n') : (typeof prj.code === 'string' ? prj.code : '')))
      .replace(/\r\n/g, '\n').replace(/\\n/g, '\n');
    const safeCode = cppCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const codeHtml = `<div class="pd-section"><h3 class="pd-section-h">💻 Sketch C++ (Arduino IDE)</h3><div class="pd-code-wrap"><div class="pd-code-header"><div class="pd-code-lang">C++ / Arduino</div><button class="pd-code-copy" onclick="ElektroProject.copyCode(this, 'cpp')">📋 Copy Code</button></div><pre class="pd-code-pre"><code id="code-content-cpp">${safeCode}</code></pre></div></div>`;

    const wokwiRaw = prj.wokwi_diagram || '';
    let wokwiPretty = '';
    if (wokwiRaw) {
      try {
        const parsed = typeof wokwiRaw === 'string' ? JSON.parse(wokwiRaw) : wokwiRaw;
        wokwiPretty = JSON.stringify(parsed, null, 2);
      } catch(e) { wokwiPretty = String(wokwiRaw); }
    }
    const safeWokwi = wokwiPretty.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // === OPSI A: Wokwi Embed Project ID — base editable ===
    const DEFAULT_WOKWI_ID = "473338591560793089";
    const isEsp32Board = (prj.board && String(prj.board).toLowerCase().includes('esp32')) || document.querySelector('.prj-board-opt.on')?.dataset.board === 'esp32';
    const boardSlug = isEsp32Board ? 'esp32' : 'arduino-uno';
    const rawWokwiId = prj.wokwi_id || prj.wokwi_url || '';
    const wokwiId = _sanitizeWokwiId(rawWokwiId);
    const hasWokwiId = !!wokwiId && /^\d{5,}$/.test(wokwiId);
    const effectiveWokwiId = hasWokwiId ? wokwiId : DEFAULT_WOKWI_ID;
    const wokwiEmbedUrl = `https://wokwi.com/projects/${effectiveWokwiId}?embed=1`;
    const wokwiExternalUrl = `https://wokwi.com/projects/${effectiveWokwiId}`;

    const stepsData = prj.steps || [];
    const safePrjId = _escHtml(prj.id);
    const safePrjIdAttr = safePrjId.replace(/'/g,'&#39;');
    const stepsHtml = stepsData.length ? `<div class="pd-section"><h3 class="pd-section-h">📝 Langkah Perakitan</h3><div class="pd-table-wrap"><table class="pd-table"><thead><tr><th style="width: 50px;">Check</th><th>Alur Perakitan</th></tr></thead><tbody>${stepsData.map((step, i) => `<tr id="step-${_escHtml(prj.id)}-${i}" class="${progress.includes(i) ? 'completed' : ''}"><td class="pd-check"><input type="checkbox" class="pd-check-input" ${progress.includes(i) ? 'checked' : ''} onchange="ElektroProject.toggleStep('${safePrjIdAttr}', ${i})"></td><td><span class="pd-step-txt">${_escHtml(step.alur_perakitan || step)}</span></td></tr>`).join('')}</tbody></table></div></div>` : '';

    // === Simulator Lokal Otomatis (Wokwi Elements) + Cloud iframe ===
    let localPreviewHtml = '';
    try {
      const diagObj = wokwiRaw ? (typeof wokwiRaw==='string'? JSON.parse(wokwiRaw): wokwiRaw) : null;
      if(diagObj && Array.isArray(diagObj.parts) && diagObj.parts.length){
        const partsHtml = diagObj.parts.map(p=>{
          const attrs = p.attrs ? Object.entries(p.attrs).map(([k,v])=> `${_escHtml(k)}="${_escHtml(String(v))}"`).join(' ') : '';
          const tag = _escHtml(p.type);
          return `<div style="display:flex; flex-direction:column; align-items:center; gap:6px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:12px 10px; min-width:90px;"><${tag} ${attrs}></${tag}><span style="font-size:10px; font-family:var(--mono); color:var(--text3); text-align:center;">${_escHtml(p.id)}<br><span style="color:var(--accent)">${_escHtml(p.type)}</span></span></div>`;
        }).join('');
        const connCount = Array.isArray(diagObj.connections)? diagObj.connections.length:0;
        localPreviewHtml = `
          <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25); border-radius:10px; padding:12px 16px; margin-bottom:14px; font-size:12.5px; color:var(--text2); line-height:1.5;">
            ✅ <b>Auto-Load Lokal:</b> ${diagObj.parts.length} komponen & ${connCount} koneksi terdeteksi otomatis dari <code>diagram.json</code>. Preview hardware di bawah dirender via <code>@wokwi/elements</code> — <b>tanpa paste manual</b>. Untuk eksekusi kode, gunakan tab <b>Wokwi Cloud</b> atau <b>🚀 1-Klik Salin & Buka</b>.
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center; background:#0c0e13; border:1px solid var(--line2); border-radius:12px; padding:20px; min-height:180px; align-items:center;">
            ${partsHtml}
          </div>
          <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap; justify-content:center; align-items:center;">
            <button class="pd-code-copy" onclick="ElektroProject.copyAllAndOpen()" style="background:linear-gradient(135deg,#10b981,#059669); color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:700; cursor:pointer;">🚀 1-Klik Salin & Buka Wokwi</button>
            <span style="font-size:11px; color:var(--text3); font-family:var(--mono);">otomatis salin sketch + diagram ke clipboard</span>
          </div>
        `;
      } else {
        localPreviewHtml = `<div style="background:rgba(250,176,5,0.08); border:1px solid rgba(250,176,5,0.25); border-radius:10px; padding:14px; color:var(--text3); font-size:13px; text-align:center;">Diagram belum tersedia — preview lokal tidak bisa dirender. Gunakan tab Wokwi Cloud.</div>`;
      }
    } catch(e){
      localPreviewHtml = `<div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:10px; padding:14px; color:var(--text3); font-size:12px;">Gagal parse diagram.json: ${_escHtml(e.message)}</div>`;
    }

    // Komponen Simulator Live ditaruh di PALING BAWAH (di bawah Langkah Perakitan) — sesuai coba2.md poin 1 & 3
    const simulatorHtml = `
      <div class="pd-section pd-simulator-section" style="margin-top:28px;">
        <div class="pd-section-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
          <h3 class="pd-section-h" style="margin:0; display:flex; align-items:center; gap:8px;">
            <span style="background:var(--accent); color:#fff; width:26px; height:26px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:13px; font-weight:800;">⚡</span>
            Simulasi Interaktif
          </h3>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="pd-code-copy" onclick="ElektroProject.copyCode(this, 'cpp')" style="padding:6px 12px; font-size:12px;">📋 Copy Sketch</button>
            <button class="pd-code-copy" onclick="ElektroProject.copyCode(this, 'wokwi')" style="padding:6px 12px; font-size:12px;">📋 Copy Wiring JSON</button>
            <a href="${_escHtml(wokwiExternalUrl)}" target="_blank" rel="noopener" class="pdf-btn" style="text-decoration:none; padding:6px 14px; font-size:12px; display:inline-flex; align-items:center; gap:4px; background:var(--accent); color:#fff; border-radius:8px; font-weight:700;">↗ Buka Tab Baru</a>
          </div>
        </div>

        <div class="pd-sim-tabbar" style="display:flex; gap:8px; margin-bottom:14px; background:var(--bg3); padding:6px; border-radius:10px; border:1px solid var(--line);">
          <button class="pd-sim-tab on" id="tab-local" onclick="ElektroProject.switchSimTab('local')" style="flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--accent); background:var(--accent); color:#fff; font-weight:700; cursor:pointer; font-size:13px;">⚡ Lokal Otomatis</button>
          <button class="pd-sim-tab" id="tab-cloud" onclick="ElektroProject.switchSimTab('cloud')" style="flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--line); background:var(--bg2); color:var(--text2); font-weight:600; cursor:pointer; font-size:13px;">☁️ Wokwi Cloud</button>
        </div>

        <div id="wk-local-pane">
          ${localPreviewHtml}
          <div style="margin-top:14px; background:rgba(99,102,241,.06); border:1px dashed rgba(99,102,241,.25); border-radius:10px; padding:10px 14px; font-size:11.5px; color:var(--text3); font-family:var(--mono);">
            ℹ️ <b>Catatan:</b> Preview lokal pakai <code>@wokwi/elements</code> hanya untuk visual hardware (auto-load). Eksekusi kode Arduino/ESP32 tetap via Wokwi Cloud (tab sebelah) karena butuh compiler & simulator penuh. Klik <b>🚀 1-Klik Salin & Buka</b> akan menyalin <code>sketch.ino</code> + <code>diagram.json</code> sekaligus ke clipboard dan membuka Wokwi di tab baru — tinggal <b>Paste</b> 2 file lalu ▶ Play.
          </div>
        </div>

        <div id="wk-cloud-pane" style="display:none;">
          <div style="background:rgba(99,102,241,.06); border:1px solid rgba(99,102,241,.2); border-radius:10px; padding:12px 16px; margin-bottom:14px; font-size:12.5px; color:var(--text2); line-height:1.5;">
            ${hasWokwiId ?
              '▶ <b>Instruksi:</b> Hapus dulu isi <code>sketch.ino</code> dan <code>diagram.json</code> di simulator, ganti dengan sketch dan rangkaian terbaru dari proyek ini, lalu tekan tombol <b>▶ Play (Segitiga Hijau)</b> untuk memulai simulasi interaktif.' :
              '▶ <b>Instruksi:</b> Hapus dulu isi <code>sketch.ino</code> dan <code>diagram.json</code> pada base simulasi <code>473338591560793089</code>, ganti dengan sketch dan rangkaian di atas, lalu tekan <b>▶ Play (Segitiga Hijau)</b> untuk menjalankan. Base bisa diganti via <code>wokwi_id</code> di <code>js/data.js</code>.'}
          </div>

          <div class="wokwi-iframe-container" style="position:relative; width:100%; height:540px; border-radius:12px; overflow:hidden; border:1px solid var(--line2); background:#0c0e13; box-shadow:0 8px 30px rgba(0,0,0,0.35);">
            <iframe
              id="wokwi-simulator-frame"
              src="${_escHtml(wokwiEmbedUrl)}"
              data-wokwi-src="${_escHtml(wokwiEmbedUrl)}"
              style="width:100%; height:100%; border:none;"
              title="Wokwi Simulator"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals"
              allow="accelerometer; camera; microphone; vr; clipboard-read; clipboard-write">
            </iframe>
          </div>
        </div>
        ${wokwiPretty ? `<div class="pd-code-wrap" style="margin-top:14px;"><div class="pd-code-header"><div class="pd-code-lang">diagram.json — Preview</div><button class="pd-code-copy" onclick="ElektroProject.copyCode(this,'wokwi')">📋 Salin</button></div><pre class="pd-code-pre" style="max-height:220px;"><code id="code-content-wokwi">${safeWokwi}</code></pre></div>` : ''}
      </div>`;

    const diffLabel = _escHtml(prj.difficulty || 'AI Generated');
    const diffClass = diffLabel.toLowerCase().replace(/\s+/g, '-');

    content.innerHTML = `
      <div class="pd-header"><div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:12px;"><h1 class="pd-title" style="margin:0">${_escHtml(prj.title)}</h1><button class="pdf-btn" onclick="ElektroProject.exportToPdf()" style="background:var(--accent); color:white; border:none; padding:8px 16px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; flex-shrink:0;">📄 Export PDF</button></div><div class="pd-meta"><div class="prj-card-diff diff-${diffClass}">${diffLabel}</div><div style="font-size: 12px; color: var(--text2); font-family: var(--mono);">${_escHtml(prj.id)}</div></div></div>
      <div class="pd-section"><h3 class="pd-section-h">📖 Deskripsi</h3><p style="color:var(--text2); font-size:14px; line-height:1.6;">${_escHtml(prj.description)}</p></div>
      ${bomHtml}${disclaimerHtml}${wiringHtml}${codeHtml}${stepsHtml}${simulatorHtml}`;

    if(wokwiPretty) content.dataset.wokwi = wokwiPretty;
    if(cppCode) content.dataset.cppCode = cppCode;

    if (typeof switchTab === 'function') switchTab('project-detail');
  },

  _renderStep(num, title, content) {
    return `<div style="display:flex;gap:14px;align-items:flex-start;"><div style="background:var(--accent);color:#fff;font-weight:700;font-size:13px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${num}</div><div style="flex:1;"><div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:6px;">${title}</div>${content}</div></div>`;
  },

  copyCode(btn, type) {
    const content = document.getElementById('project-detail-content');
    let text = type === 'wokwi' ? (content?.dataset.wokwi || document.getElementById('code-content-wokwi')?.textContent || '') : (content?.dataset.cppCode || document.getElementById('code-content-cpp')?.textContent || '');
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const old = btn.innerHTML;
      btn.innerHTML = '✅ Copied!';
      setTimeout(() => { btn.innerHTML = old; }, 2000);
    });
  },

  toggleStep(id, idx) {
    const safeId = String(id||'').replace(/[^a-z0-9\-_]/gi,'-');
    const row = document.getElementById(`step-${safeId}-${idx}`);
    if(!row) return;
    const isChecked = row.querySelector('input').checked;
    isChecked ? row.classList.add('completed') : row.classList.remove('completed');
    let progress = [];
    try { const raw=localStorage.getItem(`ed_prj_progress_${safeId}`); progress = raw?JSON.parse(raw):[]; if(!Array.isArray(progress)) progress=[]; }catch(e){ progress=[]; }
    if(isChecked){ if(!progress.includes(idx)) progress.push(idx); } else { progress = progress.filter(i => i !== idx); }
    try { localStorage.setItem(`ed_prj_progress_${safeId}`, JSON.stringify(progress)); } catch(e){}
  },

  switchSimTab(tab){
    const localPane = document.getElementById('wk-local-pane');
    const cloudPane = document.getElementById('wk-cloud-pane');
    const tabLocal = document.getElementById('tab-local');
    const tabCloud = document.getElementById('tab-cloud');
    if(!localPane || !cloudPane || !tabLocal || !tabCloud) return;
    if(tab==='local'){
      localPane.style.display='block'; cloudPane.style.display='none';
      tabLocal.className='pd-sim-tab on'; tabLocal.style.cssText='flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--accent); background:var(--accent); color:#fff; font-weight:700; cursor:pointer; font-size:13px;';
      tabCloud.className='pd-sim-tab'; tabCloud.style.cssText='flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--line); background:var(--bg2); color:var(--text2); font-weight:600; cursor:pointer; font-size:13px;';
    } else {
      localPane.style.display='none'; cloudPane.style.display='block';
      tabCloud.className='pd-sim-tab on'; tabCloud.style.cssText='flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--accent); background:var(--accent); color:#fff; font-weight:700; cursor:pointer; font-size:13px;';
      tabLocal.className='pd-sim-tab'; tabLocal.style.cssText='flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--line); background:var(--bg2); color:var(--text2); font-weight:600; cursor:pointer; font-size:13px;';
    }
  },

  copyAllAndOpen(){
    const content = document.getElementById('project-detail-content');
    const cpp = content?.dataset.cppCode || document.getElementById('code-content-cpp')?.textContent || '';
    const wokwi = content?.dataset.wokwi || document.getElementById('code-content-wokwi')?.textContent || '';
    const combined = `// ===== sketch.ino =====\n${cpp}\n\n// ===== diagram.json =====\n${wokwi}\n`;
    const btn = event?.target;
    const doOpen = () => {
      const extUrl = content?.querySelector?.('a.pdf-btn[href*="wokwi.com"]')?.href || `https://wokwi.com/projects/${"473338591560793089"}`;
      window.open(extUrl, '_blank', 'noopener');
    };
    if(navigator.clipboard && combined.trim()){
      navigator.clipboard.writeText(combined).then(()=>{
        if(btn){ const old=btn.innerHTML; btn.innerHTML='✅ Tersalin & Membuka...'; setTimeout(()=>btn.innerHTML=old,2500); }
        doOpen();
      }).catch(()=> doOpen());
    } else {
      doOpen();
    }
  },

  exportToPdf() {
    if (typeof exportProjectToPdf === 'function') exportProjectToPdf();
  }
};

window.ElektroProject = ElektroProject;

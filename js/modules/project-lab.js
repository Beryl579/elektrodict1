/**
 * ElektroDict Project Lab Module
 * AI Powered Arduino Project Generation and Wokwi Integration.
 */

let currentAIProject = null;

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
        prj.id = 'ai-' + (prj.title || 'proyek').toLowerCase().replace(/\s+/g, '-').slice(0, 20);

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
    const progress = JSON.parse(localStorage.getItem(`ed_prj_progress_${prj.id}`) || '[]');

    const disclaimerHtml = `<div class="pd-disclaimer"><div class="pd-disclaimer-icon">⚠️</div><div class="pd-disclaimer-text">Catatan: Panduan proyek ini di-generate oleh AI. Harap periksa kembali skema rangkaian, datasheet komponen, dan batas tegangan sebelum merakit.</div></div>`;

    const componentList = prj.bom || prj.components || [];
    const bomHtml = componentList.length ? `<div class="pd-section"><h3 class="pd-section-h">📦 Bill of Materials (BOM)</h3><div class="pd-components"><ul class="pd-comp-list">${componentList.map(c => `<li class="pd-comp-item">${c}</li>`).join('')}</ul></div></div>` : '';

    const wiringData = prj.wiring_guide || prj.wiring_table || prj.wiring || [];
    const wiringHtml = wiringData.length ? `<div class="pd-section"><h3 class="pd-section-h">🔌 Tabel Koneksi Kabel (Wiring Guide)</h3><div class="pd-table-wrap"><table class="pd-table"><thead><tr><th>Komponen</th><th>Pin Komponen</th><th>Koneksi ke Board</th></tr></thead><tbody>${wiringData.map(w => `<tr><td><b>${w.komponen}</b></td><td><code>${w.pin_komponen || w.koneksi_pin || '-'}</code></td><td><code>${w.koneksi_arduino || w.koneksi_board || '-'}</code></td></tr>`).join('')}</tbody></table></div></div>` : '';

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
    // Base simulation milik user (screenshot Image 1 pakai .py, diganti jadi base Arduino/Wokwi ini)
    const DEFAULT_WOKWI_ID = "473338591560793089";
    // Deteksi board untuk fallback jika prj tidak punya wokwi_id (tetap pakai DEFAULT base)
    const isEsp32Board = (prj.board && String(prj.board).toLowerCase().includes('esp32')) || document.querySelector('.prj-board-opt.on')?.dataset.board === 'esp32';
    const boardSlug = isEsp32Board ? 'esp32' : 'arduino-uno';
    // Jika template sudah memiliki wokwi_id khusus (dari WOKWI_TEMPLATES) atau prj hasil AI sudah di-assign, pakai ID tsb; fallback ke DEFAULT base yang bisa diubah-ubah
    const rawWokwiId = prj.wokwi_id || prj.wokwi_url || '';
    // Ekstrak ID jika berisi URL lengkap
    let wokwiId = '';
    if (rawWokwiId) {
      const m = String(rawWokwiId).match(/projects\/([^?\/]+)/);
      wokwiId = m ? m[1] : String(rawWokwiId).trim();
      // Normalisasi: jika masih mengandung non-ID, bersihkan
      if (wokwiId.length < 5) wokwiId = String(rawWokwiId).trim();
    }
    const hasWokwiId = !!wokwiId;
    const effectiveWokwiId = hasWokwiId ? wokwiId : DEFAULT_WOKWI_ID;
    const wokwiEmbedUrl = `https://wokwi.com/projects/${effectiveWokwiId}?embed=1`;
    const wokwiExternalUrl = `https://wokwi.com/projects/${effectiveWokwiId}`;

    const stepsData = prj.steps || [];
    const stepsHtml = stepsData.length ? `<div class="pd-section"><h3 class="pd-section-h">📝 Langkah Perakitan</h3><div class="pd-table-wrap"><table class="pd-table"><thead><tr><th style="width: 50px;">Check</th><th>Alur Perakitan</th></tr></thead><tbody>${stepsData.map((step, i) => `<tr id="step-${prj.id}-${i}" class="${progress.includes(i) ? 'completed' : ''}"><td class="pd-check"><input type="checkbox" class="pd-check-input" ${progress.includes(i) ? 'checked' : ''} onchange="ElektroProject.toggleStep('${prj.id}', ${i})"></td><td><span class="pd-step-txt">${step.alur_perakitan || step}</span></td></tr>`).join('')}</tbody></table></div></div>` : '';

    // Komponen Simulator Live ditaruh di PALING BAWAH (di bawah Langkah Perakitan) — sesuai coba2.md poin 1 & 3
    const simulatorHtml = `
      <div class="pd-section pd-simulator-section" style="margin-top:28px;">
        <div class="pd-section-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
          <h3 class="pd-section-h" style="margin:0; display:flex; align-items:center; gap:8px;">
            <span style="background:var(--accent); color:#fff; width:26px; height:26px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:13px; font-weight:800;">⚡</span>
            Simulasi Interaktif (Wokwi Live)
          </h3>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="pd-code-copy" onclick="ElektroProject.copyCode(this, 'cpp')" style="padding:6px 12px; font-size:12px;">📋 Copy Sketch</button>
            <button class="pd-code-copy" onclick="ElektroProject.copyCode(this, 'wokwi')" style="padding:6px 12px; font-size:12px;">📋 Copy Wiring JSON</button>
            <a href="${wokwiExternalUrl}" target="_blank" rel="noopener" class="pdf-btn" style="text-decoration:none; padding:6px 14px; font-size:12px; display:inline-flex; align-items:center; gap:4px; background:var(--accent); color:#fff; border-radius:8px; font-weight:700;">↗ Buka Tab Baru</a>
          </div>
        </div>

        <div style="background:rgba(99,102,241,.06); border:1px solid rgba(99,102,241,.2); border-radius:10px; padding:12px 16px; margin-bottom:14px; font-size:12.5px; color:var(--text2); line-height:1.5;">
          ${hasWokwiId ?
            '▶ <b>Instruksi:</b> Hapus dulu isi <code>sketch.ino</code> dan <code>diagram.json</code> di simulator, ganti dengan sketch dan rangkaian terbaru dari proyek ini, lalu tekan tombol <b>▶ Play (Segitiga Hijau)</b> untuk memulai simulasi interaktif.' :
            '▶ <b>Instruksi:</b> Hapus dulu isi <code>sketch.ino</code> dan <code>diagram.json</code> pada base simulasi <code>473338591560793089</code>, ganti dengan sketch dan rangkaian di atas, lalu tekan <b>▶ Play (Segitiga Hijau)</b> untuk menjalankan. Base bisa diganti via <code>wokwi_id</code> di <code>js/data.js</code>.'}
        </div>

        <div class="wokwi-iframe-container" style="position:relative; width:100%; height:540px; border-radius:12px; overflow:hidden; border:1px solid var(--line2); background:#0c0e13; box-shadow:0 8px 30px rgba(0,0,0,0.35);">
          <iframe
            id="wokwi-simulator-frame"
            src="${wokwiEmbedUrl}"
            style="width:100%; height:100%; border:none;"
            title="Wokwi Simulator"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
            allow="accelerometer; camera; microphone; vr">
          </iframe>
        </div>
        ${wokwiPretty ? `<div class="pd-code-wrap" style="margin-top:14px;"><div class="pd-code-header"><div class="pd-code-lang">diagram.json — Preview</div><button class="pd-code-copy" onclick="ElektroProject.copyCode(this,'wokwi')">📋 Salin</button></div><pre class="pd-code-pre" style="max-height:220px;"><code id="code-content-wokwi">${safeWokwi}</code></pre></div>` : ''}
      </div>`;

    const diffLabel = prj.difficulty || 'AI Generated';
    const diffClass = diffLabel.toLowerCase().replace(/\s+/g, '-');

    content.innerHTML = `
      <div class="pd-header"><div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:12px;"><h1 class="pd-title" style="margin:0">${prj.title}</h1><button class="pdf-btn" onclick="ElektroProject.exportToPdf()" style="background:var(--accent); color:white; border:none; padding:8px 16px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; flex-shrink:0;">📄 Export PDF</button></div><div class="pd-meta"><div class="prj-card-diff diff-${diffClass}">${diffLabel}</div><div style="font-size: 12px; color: var(--text2); font-family: var(--mono);">${prj.id}</div></div></div>
      <div class="pd-section"><h3 class="pd-section-h">📖 Deskripsi</h3><p style="color:var(--text2); font-size:14px; line-height:1.6;">${prj.description}</p></div>
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
    const row = document.getElementById(`step-${id}-${idx}`);
    if(!row) return;
    const isChecked = row.querySelector('input').checked;
    isChecked ? row.classList.add('completed') : row.classList.remove('completed');
    let progress = JSON.parse(localStorage.getItem(`ed_prj_progress_${id}`) || '[]');
    isChecked ? (!progress.includes(idx) && progress.push(idx)) : (progress = progress.filter(i => i !== idx));
    localStorage.setItem(`ed_prj_progress_${id}`, JSON.stringify(progress));
  },

  exportToPdf() {
    if (typeof exportProjectToPdf === 'function') exportProjectToPdf();
  }
};

window.ElektroProject = ElektroProject;

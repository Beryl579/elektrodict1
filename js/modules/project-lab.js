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
      const data = await window.ElektroAPI.generateProject(idea);
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
      const isLimit = err?.status === 'limit_reached' || err?.httpStatus === 429 || (err?.message || '').includes('429');
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

    const cppCode = prj.cpp_code || (Array.isArray(prj.code) ? prj.code.join('\n') : (typeof prj.code === 'string' ? prj.code.replace(/\\n/g, '\n') : ''));
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

    const wokwiSectionHtml = wokwiPretty ? `
      <div class="pd-section">
        <h3 class="pd-section-h">🛠️ Jalankan di Simulator</h3>
        <div style="border:1px solid rgba(99,102,241,.25);border-radius:12px;padding:18px;background:rgba(99,102,241,.04);display:flex;flex-direction:column;gap:14px;">
          ${this._renderStep(1, "Persiapkan Simulator", `<a href="https://wokwi.com/projects/new/arduino-uno" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(135deg,#4ade80,#16a34a);color:#fff;border-radius:7px;text-decoration:none;font-weight:600;font-size:12px;box-shadow:0 3px 12px rgba(22,163,74,.3);">🌐 Buka Wokwi (Uno)</a>`)}
          <div style="height:1px;background:var(--line2);opacity:.5;"></div>
          ${this._renderStep(2, "Pasang Komponen (Wiring)", `<button class="pd-code-copy" onclick="ElektroProject.copyCode(this,'wokwi')">📋 Salin Data Wiring (JSON)</button><p style="font-size:11px;color:var(--text3);margin-top:7px;">Buka file <b>diagram.json</b>, hapus isinya, lalu <b>PASTE</b>.</p>`)}
          <div style="height:1px;background:var(--line2);opacity:.5;"></div>
          ${this._renderStep(3, "Masukkan Program (Sketch)", `<button class="pd-code-copy" onclick="ElektroProject.copyCode(this,'cpp')">📋 Salin Kode Program (INO)</button><p style="font-size:11px;color:var(--text3);margin-top:7px;">Buka file <b>sketch.ino</b>, hapus isinya, lalu <b>PASTE</b>.</p>`)}
          <div style="background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:10px 14px;font-size:12px;color:var(--text2);line-height:1.6;">⚠️ Pastikan menghapus kode bawaan Wokwi sebelum mem-paste data.</div>
        </div>
        <div class="pd-code-wrap" style="margin-top:14px;"><div class="pd-code-header"><div class="pd-code-lang">diagram.json — Preview</div><button class="pd-code-copy" onclick="ElektroProject.copyCode(this,'wokwi')">📋 Salin</button></div><pre class="pd-code-pre" style="max-height:220px;"><code id="code-content-wokwi">${safeWokwi}</code></pre></div>
      </div>` : '';

    const stepsData = prj.steps || [];
    const stepsHtml = stepsData.length ? `<div class="pd-section"><h3 class="pd-section-h">📝 Langkah Perakitan</h3><div class="pd-table-wrap"><table class="pd-table"><thead><tr><th style="width: 50px;">Check</th><th>Alur Perakitan</th></tr></thead><tbody>${stepsData.map((step, i) => `<tr id="step-${prj.id}-${i}" class="${progress.includes(i) ? 'completed' : ''}"><td class="pd-check"><input type="checkbox" class="pd-check-input" ${progress.includes(i) ? 'checked' : ''} onchange="ElektroProject.toggleStep('${prj.id}', ${i})"></td><td><span class="pd-step-txt">${step.alur_perakitan || step}</span></td></tr>`).join('')}</tbody></table></div></div>` : '';

    const diffLabel = prj.difficulty || 'AI Generated';
    const diffClass = diffLabel.toLowerCase().replace(/\s+/g, '-');

    content.innerHTML = `
      <div class="pd-header"><div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:12px;"><h1 class="pd-title" style="margin:0">${prj.title}</h1><button class="pdf-btn" onclick="ElektroProject.exportToPdf()" style="background:var(--accent); color:white; border:none; padding:8px 16px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; flex-shrink:0;">📄 Export PDF</button></div><div class="pd-meta"><div class="prj-card-diff diff-${diffClass}">${diffLabel}</div><div style="font-size: 12px; color: var(--text2); font-family: var(--mono);">${prj.id}</div></div></div>
      <div class="pd-section"><h3 class="pd-section-h">📖 Deskripsi</h3><p style="color:var(--text2); font-size:14px; line-height:1.6;">${prj.description}</p></div>
      ${bomHtml}${disclaimerHtml}${wiringHtml}${codeHtml}${wokwiSectionHtml}${stepsHtml}`;

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

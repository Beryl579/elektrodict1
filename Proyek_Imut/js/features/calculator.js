/**
 * Calculator & Resistor Module
 * Menangani logika perhitungan hukum ohm, RLC, daya, dan kode warna resistor.
 */

const ElektroCalc = {
  /**
   * Inisialisasi kalkulator (render list di UI)
   */
  init() {
    const area = document.getElementById('calc-msgarea');
    if (!area) return;
    area.innerHTML = CALCS.map(c => {
      const fieldsHtml = c.fields.map(f => `
        <div class="cf-row">
          <span class="cf-lbl">${f.label}</span>
          ${f.type === 'select'
            ? `<select class="cf-sel" id="${f.id}">${f.opts.map(o => `<option>${o}</option>`).join('')}</select>`
            : `<input class="cf-inp" id="${f.id}" type="text" inputmode="decimal" placeholder="${f.placeholder}">`}
          <span class="cf-unit">${f.unit}</span>
        </div>`).join('');

      return `
        <div class="calc-msg">
          <div class="cmsg-ava" style="background:${c.iconBg};border-color:${c.color}33">${c.icon}</div>
          <div class="cmsg-right">
            <span class="cmsg-name" style="color:${c.color}">${c.title}</span>
            <div class="cmsg-bubble">
              <div class="cb-subtitle">${c.sub}</div>
              <div class="cc-formula" id="ccf-${c.id}"></div>
              <div class="cc-fields">${fieldsHtml}</div>
              <button class="cc-calc-btn" onclick="ElektroCalc.doCalc('${c.id}')">⚡ Hitung</button>
            </div>
            <div class="cmsg-result-bubble" id="ccr-${c.id}">
              <div id="ccr-inner-${c.id}"></div>
            </div>
          </div>
        </div>`;
    }).join('');

    // Render KaTeX formulas
    CALCS.forEach(c => {
      const el = document.getElementById(`ccf-${c.id}`);
      if (el && typeof katex !== 'undefined') {
        try { katex.render(c.formula, el, { throwOnError: false, displayMode: false }); }
        catch (e) { el.textContent = c.formula; }
      }
    });
  },

  /**
   * Jalankan perhitungan untuk kalkulator tertentu
   */
  doCalc(id) {
    const c = CALCS.find(x => x.id === id);
    const vals = c.fields.map(f => {
      const el = document.getElementById(f.id);
      return el.tagName === 'SELECT' ? el.value : el.value.trim();
    });
    const result = c.calc(vals);
    const bubble = document.getElementById(`ccr-${id}`);
    const inner = document.getElementById(`ccr-inner-${id}`);
    
    if (!bubble || !inner) return;

    bubble.className = 'cmsg-result-bubble show' + (result.err ? ' err' : '');

    if (result.err) {
      inner.innerHTML = `<div class="crb-err">⚠ ${result.err}</div>`;
    } else if (result.multi) {
      inner.innerHTML = `<div class="crb-multi">${result.multi.map(r => `
        <div class="crb-row">
          <span class="crb-row-lbl">${r.label}</span>
          <span class="crb-row-val">${r.val}${r.unit ? ' <span style="font-size:11px;font-weight:400;color:var(--text3)">' + r.unit + '</span>' : ''}</span>
        </div>`).join('')}</div>`;
    } else {
      inner.innerHTML = `
        <div class="crb-label">${result.label}</div>
        <div class="crb-val">${result.val}</div>
        <div class="crb-unit">${result.unit}</div>`;
    }
    
    setTimeout(() => bubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  }
};

/**
 * Resistor Module Logic
 */
let resistMode = 4;
let resistSel = [1, 0, 2, 10]; // Default: Coklat (1), Hitam (0), Merah (x100), Emas (5%) = 1k Ohm

const ElektroResistor = {
  init() {
    this.render();
  },

  setMode(btn, mode) {
    resistMode = mode;
    document.querySelectorAll('.rmode-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    resistSel = mode === 4 ? [1, 0, 2, 10] : [1, 0, 0, 1, 10];
    this.render();
  },

  updateBand(idx, colorIdx) {
    resistSel[idx] = colorIdx;
    this.render();
  },

  render() {
    this.renderSVG();
    this.renderBands();
    this.calculate();
  },

  renderSVG() {
    const colors = resistSel.map(i => RCOLORS[i].hex);
    const bPos = resistMode === 4 ? [78, 96, 116, 134] : [72, 88, 104, 122, 138];

    let bandsSVG = colors.map((c, i) =>
      `<rect x="${bPos[i]}" y="28" width="10" height="44" fill="${c}" rx="1"/>`
    ).join('');

    const container = document.getElementById('resist-svg-wrap');
    if (!container) return;

    container.innerHTML = `
      <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" style="max-height:100px">
        <line x1="0" y1="50" x2="55" y2="50" stroke="#aaa" stroke-width="3" stroke-linecap="round"/>
        <line x1="165" y1="50" x2="220" y2="50" stroke="#aaa" stroke-width="3" stroke-linecap="round"/>
        <rect x="55" y="25" width="110" height="50" rx="10" fill="#f5e6c8" stroke="#c8a870" stroke-width="2"/>
        ${bandsSVG}
        <text x="110" y="88" font-size="9" fill="var(--text3)" text-anchor="middle" font-family="monospace" id="rsvg-label"></text>
      </svg>`;
  },

  renderBands() {
    const labels = resistMode === 4
      ? ['Gelang 1', 'Gelang 2', 'Pengali', 'Toleransi']
      : ['Gelang 1', 'Gelang 2', 'Gelang 3', 'Pengali', 'Toleransi'];
    const types = resistMode === 4 ? ['digit', 'digit', 'mult', 'tol'] : ['digit', 'digit', 'digit', 'mult', 'tol'];

    const container = document.getElementById('resist-bands');
    if (!container) return;

    container.innerHTML = labels.map((lbl, i) => {
      const type = types[i];
      const opts = type === 'tol'
        ? RCOLORS.filter(c => c.tol).map((c) => `<option value="${RCOLORS.indexOf(c)}" ${resistSel[i] === RCOLORS.indexOf(c) ? 'selected' : ''}>${c.name} (${c.tol})</option>`).join('')
        : type === 'mult'
        ? RCOLORS.map((c, ci) => `<option value="${ci}" ${resistSel[i] === ci ? 'selected' : ''}>${c.name} (×${this.formatMult(c.mult)})</option>`).join('')
        : RCOLORS.filter(c => c.digit !== null).map((c) => `<option value="${RCOLORS.indexOf(c)}" ${resistSel[i] === RCOLORS.indexOf(c) ? 'selected' : ''}>${c.name} (${c.digit})</option>`).join('');
      
      return `<div class="rband-row">
        <span class="rband-lbl">${lbl}</span>
        <select class="rband-sel" onchange="ElektroResistor.updateBand(${i},parseInt(this.value))">${opts}</select>
        <div class="rband-swatch" style="background:${RCOLORS[resistSel[i]].hex}"></div>
      </div>`;
    }).join('');
  },

  formatMult(m) {
    if (m >= 1e9) return '1G';
    if (m >= 1e6) return m / 1e6 + 'M';
    if (m >= 1e3) return m / 1e3 + 'k';
    return m;
  },

  calculate() {
    let value, tol;
    if (resistMode === 4) {
      const [b1, b2, bm, bt] = resistSel;
      const d1 = RCOLORS[b1].digit, d2 = RCOLORS[b2].digit;
      if (d1 === null || d2 === null) return;
      value = (d1 * 10 + d2) * RCOLORS[bm].mult;
      tol = RCOLORS[bt].tol || '—';
    } else {
      const [b1, b2, b3, bm, bt] = resistSel;
      const d1 = RCOLORS[b1].digit, d2 = RCOLORS[b2].digit, d3 = RCOLORS[b3].digit;
      if (d1 === null || d2 === null || d3 === null) return;
      value = (d1 * 100 + d2 * 10 + d3) * RCOLORS[bm].mult;
      tol = RCOLORS[bt].tol || '—';
    }

    const fmt = this.formatOhm(value);
    const tolPct = tol === '—' ? 0 : parseFloat(tol.replace('±', '').replace('%', '')) / 100;
    const lo = this.formatOhm(value * (1 - tolPct));
    const hi = this.formatOhm(value * (1 + tolPct));
    const range = tol !== '—' ? `Range: ${lo} ~ ${hi}` : '';
    
    document.getElementById('rr-val').textContent = fmt;
    document.getElementById('rr-tol').textContent = `Toleransi ${tol}`;
    document.getElementById('rr-range').textContent = range;

    const lbl = document.getElementById('rsvg-label');
    if (lbl) lbl.textContent = fmt + (tol !== '—' ? ' ' + tol : '');
  },

  formatOhm(v) {
    if (v >= 1e9) return (v / 1e9).toPrecision(4) + ' GΩ';
    if (v >= 1e6) return (v / 1e6).toPrecision(4) + ' MΩ';
    if (v >= 1e3) return (v / 1e3).toPrecision(4) + ' kΩ';
    return v.toPrecision(4) + ' Ω';
  }
};

window.ElektroCalc = ElektroCalc;
window.ElektroResistor = ElektroResistor;

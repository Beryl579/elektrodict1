/**
 * ElektroDict Resistor Module
 * Handles Resistor Color Code SVG rendering and calculations.
 */

const RCOLORS = [
  {name:'Hitam', hex:'#1a1a1a', digit:0, mult:1,        tol:null},
  {name:'Coklat', hex:'#7b3f00', digit:1, mult:10,       tol:'±1%'},
  {name:'Merah',  hex:'#cc0000', digit:2, mult:100,      tol:'±2%'},
  {name:'Oranye', hex:'#ff6600', digit:3, mult:1000,     tol:null},
  {name:'Kuning', hex:'#ffcc00', digit:4, mult:10000,    tol:null},
  {name:'Hijau',  hex:'#009900', digit:5, mult:100000,   tol:'±0.5%'},
  {name:'Biru',   hex:'#0066cc', digit:6, mult:1000000,  tol:'±0.25%'},
  {name:'Ungu',   hex:'#6600cc', digit:7, mult:10000000, tol:'±0.1%'},
  {name:'Abu-abu',hex:'#888888', digit:8, mult:100000000,tol:'±0.05%'},
  {name:'Putih',  hex:'#e0e0e0', digit:9, mult:1000000000,tol:null},
  {name:'Emas',   hex:'#ccaa00', digit:null, mult:0.1,   tol:'±5%'},
  {name:'Perak',  hex:'#aaaaaa', digit:null, mult:0.01,  tol:'±10%'},
];

let resistMode = 4;
let resistSel = [0,0,10,11]; // default 4-band

const ElektroResistor = {
  init() {
    this.render();
  },

  setMode(btn, mode) {
    resistMode = mode;
    document.querySelectorAll('.rmode-btn').forEach(b=>b.classList.remove('on'));
    if (btn) btn.classList.add('on');
    // 4-band: 1kΩ ±5% | 5-band: 10kΩ ±5%
    resistSel = mode===4 ? [1,0,2,10] : [1,0,0,2,10];
    this.render();
  },

  render() {
    this.renderSVG();
    this.renderBands();
    this.calculate();
  },

  renderSVG() {
    const colors = resistSel.map(i=>RCOLORS[i].hex);
    const bPos = resistMode===4
      ? [78,96,116,134]
      : [72,88,104,122,138];

    let bandsSVG = colors.map((c,i)=>
      `<rect x="${bPos[i]}" y="28" width="10" height="44" fill="${c}" rx="1"/>`
    ).join('');

    const wrap = document.getElementById('resist-svg-wrap');
    if (!wrap) return;
    wrap.innerHTML = `
      <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" style="max-height:100px">
        <line x1="0" y1="50" x2="55" y2="50" stroke="#aaa" stroke-width="3" stroke-linecap="round"/>
        <line x1="165" y1="50" x2="220" y2="50" stroke="#aaa" stroke-width="3" stroke-linecap="round"/>
        <rect x="55" y="25" width="110" height="50" rx="10" fill="#f5e6c8" stroke="#c8a870" stroke-width="2"/>
        ${bandsSVG}
        <text x="110" y="88" font-size="9" fill="var(--text3)" text-anchor="middle" font-family="monospace" id="rsvg-label"></text>
      </svg>`;
  },

  renderBands() {
    const labels = resistMode===4
      ? ['Gelang 1','Gelang 2','Pengali','Toleransi']
      : ['Gelang 1','Gelang 2','Gelang 3','Pengali','Toleransi'];
    const types = resistMode===4
      ? ['digit','digit','mult','tol']
      : ['digit','digit','digit','mult','tol'];

    const bandsContainer = document.getElementById('resist-bands');
    if (!bandsContainer) return;
    bandsContainer.innerHTML = labels.map((lbl,i)=>{
      const type = types[i];
      const opts = type==='tol'
        ? RCOLORS.filter(c=>c.tol).map((c,ci)=>`<option value="${RCOLORS.indexOf(c)}" ${resistSel[i]===RCOLORS.indexOf(c)?'selected':''}>${c.name} (${c.tol})</option>`).join('')
        : type==='mult'
        ? RCOLORS.map((c,ci)=>`<option value="${ci}" ${resistSel[i]===ci?'selected':''}>${c.name} (×${this.formatMult(c.mult)})</option>`).join('')
        : RCOLORS.filter(c=>c.digit!==null).map((c)=>`<option value="${RCOLORS.indexOf(c)}" ${resistSel[i]===RCOLORS.indexOf(c)?'selected':''}>${c.name} (${c.digit})</option>`).join('');
      
      return `<div class="rband-row">
        <span class="rband-lbl">${lbl}</span>
        <select class="rband-sel" onchange="ElektroResistor.updateBand(${i},parseInt(this.value))">${opts}</select>
        <div class="rband-swatch" style="background:${RCOLORS[resistSel[i]].hex}"></div>
      </div>`;
    }).join('');
  },

  formatMult(m) {
    if(m>=1e9) return '1G';
    if(m>=1e6) return m/1e6+'M';
    if(m>=1e3) return m/1e3+'k';
    return m;
  },

  updateBand(idx, colorIdx) {
    resistSel[idx] = colorIdx;
    this.renderSVG();
    this.calculate();
    // Update individual swatch efficiently
    const swatches = document.querySelectorAll('.rband-swatch');
    if(swatches[idx]) swatches[idx].style.background = RCOLORS[colorIdx].hex;
  },

  calculate() {
    let value, tol;
    if(resistMode===4){
      const [b1,b2,bm,bt] = resistSel;
      const d1 = RCOLORS[b1].digit, d2 = RCOLORS[b2].digit;
      if(d1===null||d2===null){ this.setResult('—','—',''); return; }
      value = (d1*10+d2) * RCOLORS[bm].mult;
      tol   = RCOLORS[bt].tol || '—';
    } else {
      const [b1,b2,b3,bm,bt] = resistSel;
      const d1=RCOLORS[b1].digit,d2=RCOLORS[b2].digit,d3=RCOLORS[b3].digit;
      if(d1===null||d2===null||d3===null){ this.setResult('—','—',''); return; }
      value = (d1*100+d2*10+d3) * RCOLORS[bm].mult;
      tol   = RCOLORS[bt].tol || '—';
    }

    const fmt = this.formatOhm(value);
    const tolPct = tol==='—' ? 0 : parseFloat(tol.replace('±','').replace('%',''))/100;
    const lo = this.formatOhm(value*(1-tolPct));
    const hi = this.formatOhm(value*(1+tolPct));
    const range = tol!=='—' ? `Range: ${lo} ~ ${hi}` : '';
    
    this.setResult(fmt, `Toleransi ${tol}`, range);

    const lbl = document.getElementById('rsvg-label');
    if(lbl) lbl.textContent = fmt + (tol!=='—'?' '+tol:'');
  },

  formatOhm(v) {
    if(v>=1e9) return (v/1e9).toPrecision(4)+' GΩ';
    if(v>=1e6) return (v/1e6).toPrecision(4)+' MΩ';
    if(v>=1e3) return (v/1e3).toPrecision(4)+' kΩ';
    return v.toPrecision(4)+' Ω';
  },

  setResult(val, tol, range) {
    const valEl = document.getElementById('rr-val');
    const tolEl = document.getElementById('rr-tol');
    const rangeEl = document.getElementById('rr-range');
    if (valEl) valEl.textContent = val;
    if (tolEl) tolEl.textContent = tol;
    if (rangeEl) rangeEl.textContent = range;
  }
};

window.ElektroResistor = ElektroResistor;

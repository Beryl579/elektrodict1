/**
 * ElektroDict Timeline Module
 * Historical timeline of electrical engineering milestones.
 */

const TL_ERAS = {
  semua: {label:'Semua', color:'var(--accent)'},
  kuno: {label:'Pra-1800', color:'var(--amber)'},
  modern: {label:'1800–1945', color:'var(--green)'},
  digital: {label:'1945–1990', color:'var(--purple)'},
  kontemporer: {label:'1990–Kini', color:'var(--teal)'},
};

let tlEra = 'semua';

const ElektroTimeline = {
  init() {
    const eraContainer = document.getElementById('tl-eras');
    if (!eraContainer) return;
    eraContainer.innerHTML = Object.entries(TL_ERAS).map(([k,v])=>
      `<button class="tl-era-btn${k===tlEra?' on':''}" onclick="ElektroTimeline.setEra(this,'${k}')" style="${k===tlEra?`background:${v.color}22;border-color:${v.color}66;color:${v.color}`:''}">
        ${v.label}
      </button>`
    ).join('');
    this.render();
  },

  setEra(btn, era) {
    tlEra = era;
    document.querySelectorAll('.tl-era-btn').forEach((b,i)=>{
      b.classList.remove('on');
      b.style.cssText='';
    });
    if (btn) {
      btn.classList.add('on');
      const c = TL_ERAS[era].color;
      btn.style.cssText = `background:${c}22;border-color:${c}66;color:${c}`;
    }
    this.render();
  },

  render() {
    const listEl = document.getElementById('tl-list');
    if (!listEl) return;
    
    // TIMELINE data provided from data.js
    if (typeof TIMELINE === 'undefined') return;
    
    const data = tlEra==='semua' ? TIMELINE : TIMELINE.filter(e=>e.era===tlEra);
    listEl.innerHTML = data.map((e,i)=>`
      <div class="tl-item" id="tli${i}" style="animation-delay:${i*0.04}s">
        <div class="tl-card" onclick="ElektroTimeline.toggle(${i})">
          <div class="tl-top">
            <div class="tl-top-row">
              <span class="tl-year">${e.year}</span>
              <span class="tl-title">${e.title}</span>
              <span class="tl-chev">▼</span>
            </div>
            <div class="tl-person">👤 ${e.person}</div>
          </div>
          <div class="tl-body" id="tlb${i}">
            <div class="tl-body-inner">
              <span class="tl-era-tag era-${e.era}">${TL_ERAS[e.era].label}</span>
              <div class="tl-desc">${e.desc}</div>
              <span class="tl-impact">⚡ ${e.impact}</span>
            </div>
          </div>
        </div>
      </div>`).join('');
  },

  toggle(i) {
    const item = document.getElementById(`tli${i}`);
    if (!item) return;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.tl-item.open').forEach(x=>x.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  }
};

window.ElektroTimeline = ElektroTimeline;

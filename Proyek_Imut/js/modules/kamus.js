/**
 * ElektroDict Kamus Module
 * Handles Dictionary rendering, search, and categorization.
 */

let kat='Semua';

const CORE_IDS = ['tegangan', 'arus', 'ohm', 'daya', 'kapasitor', 'resistor', 'transistor', 'induktor'];
const CORE_ICONS = {
  tegangan: '⚡', arus: '🌊', ohm: '♎', daya: '💡', 
  kapasitor: '🔋', resistor: '〰️', transistor: '⏀', induktor: '🌀'
};

const ElektroKamus = {
  init() {
    this.renderChips();
    this.onSearch('');
  },

  renderChips() {
    const fbar = document.getElementById('fbar');
    if (!fbar) return;
    fbar.innerHTML = KAT.map(k =>
      `<button class="chip${k===kat?' on':''}" onclick="ElektroKamus.setKat('${k}')">${k==='Semua'?'Semua':k.charAt(0).toUpperCase()+k.slice(1)}</button>`
    ).join('');
  },

  setKat(k) {
    kat = k;
    this.renderChips();
    const searchInp = document.getElementById('searchInput');
    this.onSearch(searchInp ? searchInp.value : '');
  },

  onSearch(q) {
    const sx = document.getElementById('sx');
    if (sx) sx.style.display = q ? 'block' : 'none';
    
    let res = KAMUS;
    if (kat !== 'Semua') res = res.filter(i => i.kat === kat);
    
    if (q.trim()) {
      const ql = q.toLowerCase();
      res = res.filter(i => 
        i.en.toLowerCase().includes(ql) || 
        i.id.toLowerCase().includes(ql) || 
        i.desc.toLowerCase().includes(ql) || 
        (i.tags && i.tags.some(t => t.toLowerCase().includes(ql)))
      );
    }

    const slabel = document.getElementById('slabel');
    const scount = document.getElementById('scount');
    if (slabel) slabel.textContent = q ? `Hasil: "${q}"` : kat === 'Semua' ? 'Semua Istilah' : 'Kategori: ' + kat;
    if (scount) scount.textContent = res.length + ' istilah';
    
    this.renderGrid(res);
  },

  clearSearch() {
    const searchInp = document.getElementById('searchInput');
    if (searchInp) searchInp.value = '';
    this.onSearch('');
  },

  renderGrid(data) {
    const g = document.getElementById('grid');
    const e = document.getElementById('empty');
    if (!g) return;

    if (!data.length) {
      g.innerHTML = '';
      if (e) e.style.display = 'block';
      return;
    }
    if (e) e.style.display = 'none';

    const core = data.filter(d => CORE_IDS.includes(d.id?.toLowerCase()));
    const regular = data.filter(d => !CORE_IDS.includes(d.id?.toLowerCase()));

    let html = '';
    if (core.length > 0) {
      html += `<div class="slabel" style="margin-bottom:12px;">Konsep Utama (Core)</div>`;
      html += `<div class="feature-grid">` + core.map((d, i) => this.renderCard(d, i, true)).join('') + `</div>`;
    }

    if (regular.length > 0) {
      if (core.length > 0) html += `<div class="slabel" style="margin-top:24px;margin-bottom:12px;">Istilah Lainnya</div>`;
      html += `<div class="compact-list">` + regular.map((d, i) => this.renderCard(d, i + core.length, false)).join('') + `</div>`;
    }

    g.innerHTML = html;

    // render KaTeX formulas
    data.forEach((d, i) => {
      if (!d.formula) return;
      const el = document.getElementById(`ef${i}`);
      if (!el) return;
      if (typeof renderMath === 'function') {
        renderMath(el);
      }
    });
  },

  renderCard(d, i, isFeature) {
    const icon = isFeature ? (CORE_ICONS[d.id?.toLowerCase()] || '⚡') : '';
    
    if (isFeature) {
      return `
      <div class="card core-card" id="c${i}" onclick="ElektroKamus.tog(${i})" style="animation-delay:${i * 0.03}s">
        <div class="ccore-body">
          <div class="ccore-icon">${icon}</div>
          <div class="ccore-content">
            <div class="ccore-title">${d.en}</div>
            <div class="ccore-sub">${d.id}</div>
          </div>
          <div class="ctag t-${d.kat}">${d.kat}</div>
        </div>
        <div class="cexp" id="cx${i}">
          <div class="expbody">
            <div class="elabel">PENJELASAN</div>
            <div class="etext">${d.detail}</div>
            ${d.formula?`<div class="elabel">RUMUS</div><div class="eformula" id="ef${i}" data-latex="${d.formula.replace(/"/g,'&quot;')}"></div>`:''}
            <div class="etags">${(d.tags||[]).map(t=>`<span class="etag">#${t}</span>`).join('')}</div>
            <button class="eask" onclick="ElektroKamus.askCard(event,'${d.en.replace(/'/g,'\\\'').replace(/"/g,'')}','${d.id.replace(/'/g,'\\\'').replace(/"/g,'')}')"><span>💬</span> Tanya ElektroBot</button>
          </div>
        </div>
      </div>`;
    }

    return `
      <div class="card" id="c${i}" onclick="ElektroKamus.tog(${i})" style="animation-delay:${i * 0.03}s">
        <div class="ctop">
          <div class="cleft"><div class="cen">${d.en}</div><div class="cid">${d.id}</div></div>
          <div class="ctag t-${d.kat}">${d.kat}</div>
        </div>
        <div class="cdesc">${d.desc}</div>
        <div class="cexp" id="cx${i}">
          <div class="expbody">
            <div class="elabel">PENJELASAN</div>
            <div class="etext">${d.detail}</div>
            ${d.formula?`<div class="elabel">RUMUS</div><div class="eformula" id="ef${i}" data-latex="${d.formula.replace(/"/g,'&quot;')}"></div>`:''}
            <div class="etags">${(d.tags||[]).map(t=>`<span class="etag">#${t}</span>`).join('')}</div>
            <button class="eask" onclick="ElektroKamus.askCard(event,'${d.en.replace(/'/g,'\\\'').replace(/"/g,'')}','${d.id.replace(/'/g,'\\\'').replace(/"/g,'')}')"><span>💬</span> Tanya ElektroBot</button>
          </div>
        </div>
        <div class="cchev">▼</div>
      </div>`;
  },

  tog(i) {
    const c = document.getElementById(`c${i}`);
    if (!c) return;
    const isOpen = c.classList.contains('open');
    document.querySelectorAll('.card.open').forEach(x => x.classList.remove('open'));
    if (!isOpen) {
      c.classList.add('open');
      setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
  },

  askCard(e, en, id) {
    e.stopPropagation();
    const q = `Jelaskan lebih detail tentang ${id} (${en}) dalam teknik elektro, termasuk aplikasi praktisnya.`;
    // These functions should be in app.js or vision.js
    if (typeof openM === 'function' && typeof send === 'function') {
      const mob = window.innerWidth < 860;
      if (mob) {
        if (typeof mOpen === 'undefined' || !mOpen) openM();
        setTimeout(() => {
          const inpM = document.getElementById('inpM');
          if (inpM) { inpM.value = q; send('M'); }
        }, 300);
      } else {
        const inpD = document.getElementById('inpD');
        if (inpD) { inpD.value = q; send('D'); }
      }
    }
  }
};

window.ElektroKamus = ElektroKamus;

/**
 * ElektroDict — Dashboard Landing Module (Neobrutalism)
 * Halaman pertama saat buka app. Data localStorage, SVG icons, varied colors.
 */
(function(){
  'use strict';

  const LS = {
    score: 'ed_stat_quiz_score',
    streak: 'ed_stat_streak',
    terms: 'ed_stat_terms_viewed',
    done: 'ed_stat_quiz_done',
    recent: 'ed_recent_tabs'
  };

  const DASH_FORMULAS = [
    { title: 'Hukum Ohm', formula: 'V = I \\cdot R', desc: 'Tegangan = Arus × Hambatan. Dasar semua rangkaian.' },
    { title: 'Daya Listrik', formula: 'P = V \\cdot I = I^2 R', desc: 'Daya aktif yang dipakai beban, satuan Watt.' },
    { title: 'Hukum Kirchhoff Arus', formula: '\\sum I_{masuk} = \\sum I_{keluar}', desc: 'Kekekalan muatan di setiap simpul.' },
    { title: 'Hukum Kirchhoff Tegangan', formula: '\\sum V = 0', desc: 'Jumlah tegangan loop tertutup = 0.' },
    { title: 'Reaktansi', formula: 'X_L = \\omega L,\\; X_C = \\frac{1}{\\omega C}', desc: 'Hambatan AC dari L dan C.' },
    { title: 'Resonansi RLC', formula: 'f_r = \\frac{1}{2\\pi\\sqrt{LC}}', desc: 'Frekuensi di mana XL = XC.' },
    { title: 'Energi Listrik', formula: 'W = P \\cdot t', desc: 'Konsumsi energi, tagihan PLN (kWh).' },
    { title: 'Faktor Daya', formula: 'PF = \\cos\\varphi = \\frac{P}{S}', desc: 'Efisiensi daya AC, ideal = 1.' },
    { title: 'Pembagi Tegangan', formula: 'V_{out}=V_{in}\\cdot\\frac{R_2}{R_1+R_2}', desc: 'Dua resistor seri membagi tegangan.' },
    { title: 'Transformator Ideal', formula: '\\frac{V_s}{V_p}=\\frac{N_s}{N_p}', desc: 'Rasio tegangan = rasio lilitan.' }
  ];

  const QUICK_ITEMS = [
    {
      id:'kamus', label:'Kamus', action:"switchTab('kamus')",
      svg:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
    },
    {
      id:'quiz', label:'Latihan Soal', action:"switchTab('quiz')",
      svg:'<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
    },
    {
      id:'materi', label:'Materi', action:"switchTab('materi')",
      svg:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'
    },
    {
      id:'kalk', label:'Kalkulator', action:"switchTab('kalk')",
      svg:'<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>'
    },
    {
      id:'konversi', label:'Konversi', action:"switchTab('konversi')",
      svg:'<path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h14"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H3"/>'
    },
    {
      id:'resistor', label:'Resistor', action:"switchTab('resistor')",
      svg:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'
    },
    {
      id:'projects', label:'Lab Proyek', action:"switchTab('projects')",
      svg:'<path d="M6 3h12"/><path d="M8 3v11a4 4 0 0 1 8 0V3"/><path d="M9 3h6"/><path d="M11 11h2"/><path d="M12 18v2"/><path d="M12 22h.01"/>'
    },
    {
      id:'ai', label:'Tanya AI', action:"openGlobalChat()",
      svg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h6"/>'
    }
  ];

  const TAB_LABELS = {
    dashboard:'Dashboard', kamus:'Kamus', quiz:'Latihan', materi:'Materi', kalk:'Kalkulator',
    konversi:'Konversi', resistor:'Resistor', projects:'Lab Proyek', aivision:'AI Vision',
    timeline:'Timeline', logika:'Logika', news:'Video', standards:'Standar & K3', about:'Tentang',
    iot:'IoT Firebase', 'project-detail':'Detail Proyek'
  };

  function todayStr(){
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }
  function yesterdayStr(){
    const d = new Date(); d.setDate(d.getDate()-1);
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  function getNum(key){
    const v = localStorage.getItem(key);
    const n = v===null ? 0 : parseInt(v,10);
    return isNaN(n)?0:n;
  }
  function setNum(key,val){ localStorage.setItem(key, String(val)); }

  // ── API publik ──
  function updateStreak(){
    const raw = localStorage.getItem(LS.streak);
    let data = null;
    try{ data = raw ? JSON.parse(raw) : null; }catch{ data=null; }
    const today = todayStr();
    if(!data || !data.lastDate){
      data = { count:1, lastDate:today };
    } else if(data.lastDate === today){
      // already counted today
    } else if(data.lastDate === yesterdayStr()){
      data.count = (parseInt(data.count,10)||0) + 1;
      data.lastDate = today;
    } else {
      data.count = 1;
      data.lastDate = today;
    }
    localStorage.setItem(LS.streak, JSON.stringify(data));
    return data;
  }
  function addQuizScore(pct){
    const cur = getNum(LS.score);
    setNum(LS.score, cur + (parseInt(pct,10)||0));
  }
  function addTermView(){
    const cur = getNum(LS.terms);
    setNum(LS.terms, cur + 1);
  }
  function addQuizDone(){
    const cur = getNum(LS.done);
    setNum(LS.done, cur + 1);
  }

  function getDailyTerm(){
    const entries = (typeof KAMUS !== 'undefined' ? KAMUS : (window.KAMUS || window.ENTRIES || []));
    if(!entries || !entries.length) return null;
    const today = todayStr();
    // simple hash: sum char codes
    let hash = 0;
    for(let i=0;i<today.length;i++) hash = (hash*31 + today.charCodeAt(i)) >>>0;
    // add also day of year for distribution
    const idx = hash % entries.length;
    return entries[idx];
  }

  function svgIcon(path, size){
    const s = size||20;
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:${s}px;height:${s}px;flex-shrink:0">${path}</svg>`;
  }

  function renderHero(){
    const pills = [
      'Kamus 300+ istilah',
      'AI ElektroBot',
      'Latihan Soal AI',
      'Materi Interaktif',
      'Lab Proyek Wokwi',
      'Kalkulator & Konversi',
      'Resistor & PUIL'
    ];
    return `
    <div class="dash-hero">
      <div class="dash-hero-top">
        <div class="dash-hero-logo"><img src="logo.png" alt="ElektroDict" style="width:100%;height:100%;object-fit:cover;display:block"></div>
        <div class="dash-hero-title">Elektro<span>Dict</span></div>
      </div>
      <div class="dash-hero-tagline">Kamus, Materi & Lab Teknik Elektro — Belajar dari Nol hingga Mahir</div>
      <div class="dash-hero-desc">
        Platform kamus teknik elektro terlengkap untuk mahasiswa & pelajar SMK. Dilengkapi <b>300+ istilah</b> dengan rumus LaTeX, <b>materi visual</b>, <b>latihan soal AI</b> yang beda tiap sesi, dan <b>Lab Proyek Wokwi</b> untuk simulasi Arduino & ESP32 langsung di browser.
      </div>
      <div class="dash-feature-pills">
        ${pills.map(p=>`<span class="dash-pill">${p}</span>`).join('')}
      </div>
      <button class="dash-cta" onclick="switchTab('materi')">
        <span>Mulai Belajar</span>
        ${svgIcon('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',16)}
      </button>
    </div>`;
  }

  function renderStats(){
    const streakData = (()=>{ try{return JSON.parse(localStorage.getItem(LS.streak)||'{"count":0}')}catch{return {count:0}} })();
    const stats = [
      { num: getNum(LS.score), label:'Total Skor Kuis', sub:'akumulasi %', icon:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v9a6 6 0 0 0 6 6 6 6 0 0 0 6-6V2z"/>', cls:'dash-stat-1' },
      { num: (streakData.count||0), label:'Streak Hari', sub:'hari berturut-turut', icon:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>', cls:'dash-stat-2' },
      { num: getNum(LS.terms), label:'Istilah Dilihat', sub:'detail dibuka', icon:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>', cls:'dash-stat-3' },
      { num: getNum(LS.done), label:'Kuis Selesai', sub:'sesi tuntas', icon:'<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>', cls:'dash-stat-4' }
    ];
    return `
    <div class="dash-stats">
      ${stats.map(s=>`
        <div class="dash-stat-card ${s.cls}">
          <div class="dash-stat-icon">${svgIcon(s.icon,22)}</div>
          <div class="dash-stat-num">${s.num}</div>
          <div class="dash-stat-label">${s.label}</div>
          <div class="dash-stat-sub">${s.sub}</div>
        </div>
      `).join('')}
    </div>`;
  }

  function renderWord(){
    const term = getDailyTerm();
    if(!term) return '<div class="dash-section-title">Istilah Hari Ini</div><div class="dash-word-card">Belum ada data kamus.</div>';
    const shortDesc = (term.desc||'').length > 140 ? term.desc.slice(0,140)+'…' : term.desc;
    const catCls = 't-' + (term.kat||'dasar');
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<path d="M12 7v14"/><path d="M16 7h.01"/><path d="M2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',18)}</span>
      Istilah Hari Ini
      <span class="dash-section-sub">berubah tiap hari</span>
    </div>
    <div class="dash-word-card">
      <div class="dash-word-top">
        <div class="dash-word-name">${term.en}</div>
        <div class="dash-word-cat ${catCls}">${term.kat}</div>
      </div>
      <div class="dash-word-id">${term.id}</div>
      <div class="dash-word-def">${shortDesc}</div>
      <button class="dash-word-btn" onclick="ElektroDash.openTerm('${String(term.id).replace(/'/g,"\\'")}')">
        ${svgIcon('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',14)}
        Lihat Detail
      </button>
    </div>`;
  }

  function renderQuick(){
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/>',18)}</span>
      Akses Cepat
    </div>
    <div class="dash-quick-grid">
      ${QUICK_ITEMS.map(it=>`
        <button class="dash-quick-item dash-qi-${it.id}" onclick="${it.action}">
          <span class="dash-qi-icon">${svgIcon(it.svg,22)}</span>
          <span class="dash-qi-label">${it.label}</span>
        </button>
      `).join('')}
    </div>`;
  }

  function renderRecent(){
    let recent = [];
    try{ recent = JSON.parse(localStorage.getItem(LS.recent)||'[]'); }catch{ recent=[]; }
    if(!recent.length) return '';
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',18)}</span>
      Terakhir Dibuka
    </div>
    <div class="dash-recent">
      ${recent.map(t=>`
        <button class="dash-recent-chip" onclick="switchTab('${t}')">
          ${svgIcon('<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',12)}
          ${TAB_LABELS[t]||t}
        </button>
      `).join('')}
    </div>`;
  }

  function renderFormulas(){
    // pick 3 random (shuffle)
    const shuffled = [...DASH_FORMULAS].sort(()=>0.5 - Math.random());
    const pick = shuffled.slice(0,3);
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 12V8a1 1 0 0 1 1-1h8"/><path d="M4 12v8a1 1 0 0 0 1 1h8"/><path d="M14 12v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4"/>',18)}</span>
      Rumus Populer
      <span class="dash-section-sub">acak tiap buka</span>
    </div>
    <div class="dash-formula-grid">
      ${pick.map((f,i)=>`
        <div class="dash-formula-card dash-fm-${i+1}">
          <div class="dash-formula-title">${f.title}</div>
          <div class="dash-formula-math" data-latex="${f.formula.replace(/"/g,'&quot;')}">${f.formula}</div>
          <div class="dash-formula-desc">${f.desc}</div>
        </div>
      `).join('')}
    </div>`;
  }

  function openTerm(id){
    if(typeof switchTab !== 'function') return;
    switchTab('kamus');
    setTimeout(()=>{
      const entries = (typeof KAMUS !== 'undefined' ? KAMUS : (window.KAMUS||[]));
      const idx = entries.findIndex(e=> String(e.id).toLowerCase() === String(id).toLowerCase());
      if(idx !== -1 && typeof tog === 'function'){
        const el = document.getElementById('c'+idx);
        if(el){ el.scrollIntoView({behavior:'smooth', block:'center'}); setTimeout(()=>tog(idx), 350); }
        // also highlight search
        const inp = document.getElementById('searchInput');
        if(inp){ inp.value = entries[idx].en; if(typeof onSearch==='function') onSearch(inp.value); }
      }
    }, 400);
  }

  function initDashboard(){
    const container = document.getElementById('page-dashboard');
    if(!container) return;
    // update streak first
    updateStreak();
    const html = `
      <div class="dash-wrap">
        ${renderHero()}
        ${renderStats()}
        ${renderWord()}
        ${renderQuick()}
        ${renderRecent()}
        ${renderFormulas()}
        <div class="dash-foot">by Beryl Nathaniel Sinaga — ElektroDict v79</div>
      </div>
    `;
    container.innerHTML = html;
    // render KaTeX untuk rumus populer
    container.querySelectorAll('.dash-formula-math[data-latex]').forEach(el=>{
      const latex = el.getAttribute('data-latex');
      if(!latex) return;
      if(window.katex){
        try{ window.katex.render(latex, el, {throwOnError:false, displayMode:false}); }catch{ el.textContent = latex; }
      } else if(typeof pendingMathEls !== 'undefined'){
        pendingMathEls.push({el, latex});
      }
    });
  }

  window.ElektroDash = {
    init: initDashboard,
    updateStreak,
    addQuizScore,
    addTermView,
    addQuizDone,
    openTerm,
    getDailyTerm
  };

  // auto-update streak on load
  document.addEventListener('DOMContentLoaded', ()=>{ try{ updateStreak(); }catch(e){} });

})();
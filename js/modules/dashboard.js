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
    recent: 'ed_recent_tabs',
    materiDone: 'ed_materi_done'
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

  const FUN_FACT_POOL = [
    { text: 'Tegangan PLN Indonesia 220V AC adalah nilai RMS — nilai puncaknya mencapai 311V!', src: 'Fun Fact' },
    { text: 'Satu chip modern berisi lebih dari 10 miliar transistor — tahun 1971 Intel 4004 hanya 2.300.', src: 'Fun Fact' },
    { text: 'Efek kulit membuat arus AC frekuensi tinggi hanya mengalir di permukaan konduktor.', src: 'Fun Fact' },
    { text: 'Faraday menemukan induksi elektromagnetik tanpa gelar sarjana — jadi fondasi generator modern.', src: 'Fun Fact' },
    { text: 'Kapasitor elektrolit terbalik polaritasnya bisa meledak — perhatikan kaki panjang = positif.', src: 'Tips' },
    { text: 'MOSFET dikontrol tegangan, bukan arus — jauh lebih efisien untuk switching daya tinggi.', src: 'Fun Fact' },
    { text: 'Frekuensi 50 Hz berarti arus AC PLN berubah arah 100 kali per detik.', src: 'Fun Fact' },
    { text: 'Transistor sekecil kuku menggantikan tabung vakum sebesar lengan — revolusi miniaturisasi.', src: 'Fun Fact' },
    { text: 'Hukum Ohm hanya berlaku pada suhu konstan — resistor panas hambatannya berubah.', src: 'Fun Fact' },
    { text: 'Ground bukan berarti nol mutlak — beda potensial ground antar titik bisa picu noise.', src: 'Tips' }
  ];

  const QUICK_ITEMS = [
    { id:'kamus', label:'Kamus', action:"switchTab('kamus')", svg:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>' },
    { id:'quiz', label:'Latihan Soal', action:"switchTab('quiz')", svg:'<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { id:'materi', label:'Materi', action:"switchTab('materi')", svg:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>' },
    { id:'kalk', label:'Kalkulator', action:"switchTab('kalk')", svg:'<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>' },
    { id:'konversi', label:'Konversi', action:"switchTab('konversi')", svg:'<path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h14"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H3"/>' },
    { id:'resistor', label:'Resistor', action:"switchTab('resistor')", svg:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
    { id:'projects', label:'Lab Proyek', action:"switchTab('projects')", svg:'<path d="M6 3h12"/><path d="M8 3v11a4 4 0 0 1 8 0V3"/><path d="M9 3h6"/><path d="M11 11h2"/><path d="M12 18v2"/><path d="M12 22h.01"/>' },
    { id:'ai', label:'Tanya AI', action:"openGlobalChat()", svg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h6"/>' }
  ];

  const KAT_SVG = {
    dasar:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    komponen:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    rangkaian:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    daya:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h2a4 4 0 0 1 0 8H2"/><rect width="12" height="12" x="6" y="6" rx="2"/>',
    elektronika:'<rect width="18" height="14" x="3" y="3" rx="2"/><path d="M3 8h18"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    pengukuran:'<path d="M3 7v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M12 12v.01"/><path d="M16 12v.01"/><path d="M8 12v.01"/>',
    digital:'<rect width="14" height="8" x="5" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M10 6h.01"/><path d="M14 6h.01"/><path d="M18 6h.01"/>',
    sinyal:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.48 12H2"/>',
    terbarukan:'<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7"/><path d="M14.5 9.4c-1.1.8-1.8 2.2-2.3 3.7"/>',
    instalasi:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    mesin:'<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 0-1.42 1.42"/><path d="M4.93 19.07a10 10 0 0 0 1.42-1.42"/><path d="M4.93 4.93a10 10 0 0 1 1.42 1.42"/><path d="M19.07 19.07a10 10 0 0 1-1.42-1.42"/>',
    kontrol:'<line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="14" y2="14"/><path d="M9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="M15 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>',
    komunikasi:'<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19.1"/>',
    distribusi:'<rect width="16" height="16" x="4" y="4" rx="2"/><path d="M4 8h16"/><path d="M8 4v16"/><path d="M16 12h.01"/><path d="M12 16h.01"/><path d="M8 12h.01"/>'
  };

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

  function getMateriDone(){
    try{
      const raw = localStorage.getItem(LS.materiDone);
      if(raw){
        const arr = JSON.parse(raw);
        if(Array.isArray(arr)) return arr;
      }
    }catch{}
    // fallback dari ed_materi_progress (object)
    try{
      const prog = JSON.parse(localStorage.getItem('ed_materi_progress')||'{}');
      const ids = Object.keys(prog).filter(k=> prog[k] && prog[k].done);
      if(ids.length) return ids;
    }catch{}
    return [];
  }
  function addMateriDone(id){
    if(!id) return;
    const arr = getMateriDone();
    if(!arr.includes(id)){
      arr.push(id);
      localStorage.setItem(LS.materiDone, JSON.stringify(arr));
    }
  }

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
    let hash = 0;
    for(let i=0;i<today.length;i++) hash = (hash*31 + today.charCodeAt(i)) >>>0;
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

  function renderMateriProgress(){
    const total = (typeof MATERI_MODULES !== 'undefined' ? MATERI_MODULES.length : (window.MATERI_MODULES?window.MATERI_MODULES.length:0)) || 0;
    const doneArr = getMateriDone();
    const n = doneArr.length;
    const pct = total ? Math.round(n/total*100) : 0;
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M8 12h6"/><path d="M12 16h6"/>',18)}</span>
      Progress Materi
      <span class="dash-section-sub">${n} / ${total} modul</span>
    </div>
    <div class="dash-materi-card">
      <div class="dash-materi-head">
        <div class="dash-materi-label">${n} / ${total} modul dipelajari</div>
        <div class="dash-materi-pct">${pct}%</div>
      </div>
      <div class="dash-materi-bar"><div class="dash-materi-fill" style="width:${pct}%"></div></div>
      <button class="dash-word-btn" onclick="switchTab('materi')" style="margin-top:12px">
        ${svgIcon('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',14)}
        Lanjut Belajar
        ${svgIcon('<path d="M12 7v4M12 17v.01M8 11h8M8 15h8"/>',14)}
      </button>
    </div>`;
  }

  function renderFunFact(){
    // placeholder, akan diisi AI atau pool
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.99.5 2.94 1.5 3.5.8.6 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',18)}</span>
      Fun Fact Elektro
      <span class="dash-section-sub">AI random</span>
    </div>
    <div class="dash-funfact-card" id="dash-funfact">
      <div class="dash-funfact-loading"><span class="dash-ff-dot"></span><span class="dash-ff-dot"></span><span class="dash-ff-dot"></span> Memuat fun fact...</div>
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

  function renderKategori(){
    const entries = (typeof KAMUS !== 'undefined' ? KAMUS : (window.KAMUS||[]));
    let KAT = [];
    try{
      if(typeof window.KAT !== 'undefined' && Array.isArray(window.KAT)) KAT = window.KAT;
      else if(typeof KAT !== 'undefined' && Array.isArray(KAT)) KAT = KAT;
    }catch{}
    // fallback: derive dari KAMUS
    if(!KAT.length){
      const cats = [...new Set(entries.map(e=>e.kat))];
      KAT = ['Semua', ...cats];
    }
    const cats = KAT.filter(k=>k!=='Semua');
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<path d="M12 7v14"/><path d="M4 7a2 2 0 0 0 2 2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 0-2 2"/><path d="M20 7H4a2 2 0 0 0-2 2"/>',18)}</span>
      Kategori Kamus
      <span class="dash-section-sub">${cats.length} kategori</span>
    </div>
    <div class="dash-kat-grid">
      ${cats.map(k=>{
        const count = entries.filter(e=>e.kat===k).length;
        const svg = KAT_SVG[k] || '<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4z"/><path d="M20 12a2 2 0 0 0-2 2v4H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2z"/>';
        return `
        <button class="dash-kat-card" onclick="ElektroDash.openKategori('${k.replace(/'/g,"\\'")}')">
          <span class="dash-kat-icon">${svgIcon(svg,18)}</span>
          <span class="dash-kat-info">
            <span class="dash-kat-name">${k.charAt(0).toUpperCase()+k.slice(1)}</span>
            <span class="dash-kat-count">${count} istilah</span>
          </span>
        </button>`;
      }).join('')}
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

  function renderTips(){
    const tips = [
      { t:'Mulai dari Hukum Ohm', d:'Semua rangkaian DC bermuara pada <b>V = IR</b>. Pahami ini dan sisanya lebih mudah.', svg:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>' },
      { t:'Praktek dulu, teori belakangan', d:'Coba Lab Proyek Wokwi sebelum baca datasheet penuh — pengalaman visual lebih nempel.', svg:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' },
      { t:'Manfaatkan ElektroBot', d:'Tanya apapun soal elektro, tersedia 24/7 tanpa batas kuota — pakai fitur Tanya AI di setiap halaman.', svg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h6"/>' }
    ];
    return `
    <div class="dash-section-title">
      <span class="dash-section-icon">${svgIcon('<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>',18)}</span>
      Tips Belajar Elektro
    </div>
    <div class="dash-tips">
      ${tips.map((tip,i)=>`
        <div class="dash-tip-card dash-tip-${i+1}">
          <div class="dash-tip-icon">${svgIcon(tip.svg,20)}</div>
          <div class="dash-tip-info">
            <div class="dash-tip-title">${tip.t}</div>
            <div class="dash-tip-desc">${tip.d}</div>
          </div>
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
        const inp = document.getElementById('searchInput');
        if(inp){ inp.value = entries[idx].en; if(typeof onSearch==='function') onSearch(inp.value); }
      }
    }, 400);
  }

  function openKategori(k){
    if(typeof switchTab !== 'function') return;
    switchTab('kamus');
    setTimeout(()=>{
      if(typeof setKat === 'function') setKat(k);
      else if(window.setKat) window.setKat(k);
    }, 350);
  }

  async function loadFunFact(){
    const el = document.getElementById('dash-funfact');
    if(!el) return;
    // coba AI dulu
    const prompt = 'Berikan satu fun fact elektro yang singkat (1 kalimat, maks 20 kata), gaya santai tapi akurat, tanpa emoji, tanpa tanda kutip. Langsung teksnya saja.';
    try{
      if(window.ElektroAPI && window.ElektroAPI.chat){
        const data = await window.ElektroAPI.chat([{role:'user', content:prompt}], {max_tokens:80, temperature:0.9});
        const raw = (data.choices?.[0]?.message?.content || '').replace(/<think>[\s\S]*?<\/think>/gi,'').trim().replace(/^["“”]+|["“”]+$/g,'');
        if(raw && raw.length>10){
          el.innerHTML = `<div class="dash-funfact-text">"${raw}"</div><div class="dash-funfact-src">— ElektroBot AI</div>`;
          return;
        }
      }
    }catch(e){}
    // fallback pool
    const pick = FUN_FACT_POOL[Math.floor(Math.random()*FUN_FACT_POOL.length)];
    el.innerHTML = `<div class="dash-funfact-text">"${pick.text}"</div><div class="dash-funfact-src">— ${pick.src}</div>`;
  }

  function initDashboard(){
    const container = document.getElementById('page-dashboard');
    if(!container) return;
    updateStreak();
    const html = `
      <div class="dash-wrap">
        ${renderHero()}
        ${renderMateriProgress()}
        ${renderStats()}
        ${renderWord()}
        ${renderFunFact()}
        ${renderQuick()}
        ${renderKategori()}
        ${renderRecent()}
        ${renderFormulas()}
        ${renderTips()}
        <div class="dash-foot">by Beryl Nathaniel Sinaga — ElektroDict v83</div>
      </div>
    `;
    container.innerHTML = html;
    container.querySelectorAll('.dash-formula-math[data-latex]').forEach(el=>{
      const latex = el.getAttribute('data-latex');
      if(!latex) return;
      if(window.katex){
        try{ window.katex.render(latex, el, {throwOnError:false, displayMode:false}); }catch{ el.textContent = latex; }
      } else if(typeof pendingMathEls !== 'undefined'){
        pendingMathEls.push({el, latex});
      }
    });
    // load fun fact async
    loadFunFact();
  }

  window.ElektroDash = {
    init: initDashboard,
    updateStreak,
    addQuizScore,
    addTermView,
    addQuizDone,
    addMateriDone,
    getMateriDone,
    openTerm,
    openKategori,
    getDailyTerm
  };

  document.addEventListener('DOMContentLoaded', ()=>{ try{ updateStreak(); }catch(e){} });

})();
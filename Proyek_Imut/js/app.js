// ═══════════════════════════════════════════════════════════
// CONFIG — PRODUCTION SECURE MODE (Vercel Functions)
// ═══════════════════════════════════════════════════════════

// Konstanta diambil dari ElektroAPI di js/api.js jika tersedia
const API_MODEL = (window.ElektroAPI && window.ElektroAPI.MODEL_TEXT) || "llama-3.3-70b-versatile";
const VERCEL_URL = (window.ElektroAPI && window.ElektroAPI.VERCEL_URL) || "/api/chat";

/** 
 * ElektroDict Unified API Wrapper 
 * Menggunakan window.ElektroAPI dari /js/api.js 
 */
async function callAI(payload) {
  if (!window.ElektroAPI) {
    console.warn("[ElektroDict] ElektroAPI not loaded! Falling back to raw fetch.");
    try {
      const r = await fetch("/api/chat", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return await r.json();
    } catch(e) {
      return { error: { message: "Gagal terhubung ke API. Cek koneksi atau status deploy." } };
    }
  }

  try {
    // Gunakan fungsi chat dari API layer (sudah ada timeout & error handling)
    return await window.ElektroAPI.chat(payload.messages, {
      model: payload.model,
      temperature: payload.temperature,
      max_tokens: payload.max_tokens
    });
  } catch (e) {
    console.error("[ElektroDict] API Error:", e);
    // Re-throw rate limit errors so the UI can handle them gracefully
    if (e.isRateLimit) throw e;
    return { error: { message: e.message || "Gagal terhubung ke AI." } };
  }
}
const SYS = `ROLE: 
You are ElektroBot Mini, a friendly and helpful guide for the ElektroDict application. Your purpose is to provide quick help, welcome new users, and help them navigate features like the Dictionary, Quiz, AI Vision, and Calculators.

PERSONALITY & TONE:
- Tone: Extremely friendly, casual, and encouraging (use 'Sob', 'Bro', 'Suhu').
- Style: Rapid, brief, and helpful. Keep responses concise.

KNOWLEDGE BASE:
- Features: Dictionary, AI Quiz, AI Vision, Resistance Color Code, Unit Conversion, and Circuits.
- Navigation: Guide users to tabs like 📖 Kamus, 🧠 Latihan, 🔬 AI Vision, 🔢 Kalkulator.`;

window.addEventListener('load',()=>{
  setTimeout(()=>{
    const s=document.getElementById('splash-screen');
    if(s)s.classList.add('fade-out');
  },1500);
});
// katexLoaded is handled below
// pendingMathEls stores either: DOM element (for auto-render) or {el, latex} object (for katex.render)
const pendingMathEls = [];
function renderPendingMath() {
  katexLoaded = true;
  // Drain pending queue — handle both raw elements and {el,latex} objects
  pendingMathEls.forEach(item => {
    if (item && item.el && item.latex) {
      // {el, latex} object — use katex.render directly
      try { katex.render(item.latex, item.el, {throwOnError:false, displayMode:false}); }
      catch(e) { item.el.textContent = item.latex; }
    } else if (item instanceof Element) {
      // plain DOM element — use auto-render
      doRenderMath(item);
    }
  });
  pendingMathEls.length = 0;
  // Also render any .eformula[data-latex] already in DOM (from renderGrid before KaTeX loaded)
  document.querySelectorAll('.eformula[data-latex]').forEach(el => {
    try { katex.render(el.dataset.latex, el, {throwOnError:false, displayMode:false}); } catch(e){}
  });
}
function renderMath(el) {
  if (katexLoaded && typeof renderMathInElement === 'function') {
    doRenderMath(el);
  } else {
    pendingMathEls.push(el);
  }
}
function doRenderMath(el) {
  if (typeof renderMathInElement !== 'function') return;
  renderMathInElement(el, {
    delimiters:[
      {left:"$$",right:"$$",display:true},
      {left:"\\(",right:"\\)",display:false},
      {left:"\\[",right:"\\]",display:true}
    ],
    throwOnError:false
  });
}

// ═══════════════════════════════════════════════════════════
// KAMUS DATA — 100 ISTILAH
// ═══════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════
// QUIZ — AI GENERATED (kategori saja, soal dari Groq)
// ═══════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════
// KALKULATOR DATA
// ═══════════════════════════════════════════════════════════
const CALCS = [
  {
    id:"ohm", title:"Hukum Ohm", sub:"Cari V, I, atau R",
    icon:"⚡", color:"#4f9cf9", iconBg:"#152a4a",
    formula:"V = IR",
    fields:[
      {id:"ohm_v",label:"Tegangan (V)",unit:"V",placeholder:"kosongkan untuk dihitung"},
      {id:"ohm_i",label:"Arus (I)",unit:"A",placeholder:"kosongkan untuk dihitung"},
      {id:"ohm_r",label:"Hambatan (R)",unit:"Ω",placeholder:"kosongkan untuk dihitung"},
    ],
    calc(v){
      const vals = v.map(x=>x===''?null:parseFloat(x));
      const nulls = vals.filter(x=>x===null).length;
      if(nulls!==1) return {err:"Kosongkan tepat satu field untuk dihitung."};
      const [V,I,R] = vals;
      if(V===null) return {val:(I*R).toFixed(4),unit:"V",label:"Tegangan"};
      if(I===null) return {val:(V/R).toFixed(4),unit:"A",label:"Arus"};
      if(R===null) return {val:(V/I).toFixed(4),unit:"Ω",label:"Hambatan"};
    }
  },
  {
    id:"power", title:"Daya Listrik", sub:"Hitung P, V, I, atau R",
    icon:"🔋", color:"#f5a623", iconBg:"#2a1e0a",
    formula:"P = VI = I^2R = V^2/R",
    fields:[
      {id:"pw_p",label:"Daya (P)",unit:"W",placeholder:"kosongkan untuk dihitung"},
      {id:"pw_v",label:"Tegangan (V)",unit:"V",placeholder:"opsional"},
      {id:"pw_i",label:"Arus (I)",unit:"A",placeholder:"opsional"},
      {id:"pw_r",label:"Hambatan (R)",unit:"Ω",placeholder:"opsional"},
    ],
    calc(v){
      const [P,V,I,R] = v.map(x=>x===''?null:parseFloat(x));
      if(P===null){
        if(V!==null&&I!==null) return {val:(V*I).toFixed(4),unit:"W",label:"Daya"};
        if(I!==null&&R!==null) return {val:(I*I*R).toFixed(4),unit:"W",label:"Daya"};
        if(V!==null&&R!==null) return {val:(V*V/R).toFixed(4),unit:"W",label:"Daya"};
        return {err:"Isi dua dari: V, I, atau R untuk hitung P."};
      }
      if(V===null&&I!==null) return {val:(P/I).toFixed(4),unit:"V",label:"Tegangan"};
      if(I===null&&V!==null) return {val:(P/V).toFixed(4),unit:"A",label:"Arus"};
      if(R===null&&I!==null) return {val:(P/(I*I)).toFixed(4),unit:"Ω",label:"Hambatan"};
      if(R===null&&V!==null) return {val:(V*V/P).toFixed(4),unit:"Ω",label:"Hambatan"};
      return {err:"Kombinasi input tidak valid."};
    }
  },
  {
    id:"rc", title:"Konstanta RC", sub:"Hitung τ, frekuensi cutoff, waktu charge",
    icon:"⏱", color:"#3ecf8e", iconBg:"#0a2018",
    formula:"\\tau = RC \\;\\; f_c = 1/(2\\pi RC)",
    fields:[
      {id:"rc_r",label:"Resistansi (R)",unit:"Ω",placeholder:"contoh: 1000"},
      {id:"rc_c",label:"Kapasitansi (C)",unit:"μF",placeholder:"contoh: 10"},
    ],
    calc(v){
      const [R,C] = v.map(x=>parseFloat(x));
      if(isNaN(R)||isNaN(C)||R<=0||C<=0) return {err:"Masukkan nilai R dan C yang valid (> 0)."};
      const Cf = C*1e-6;
      const tau = R*Cf;
      const fc = 1/(2*Math.PI*R*Cf);
      return {
        multi:[
          {val:tau<0.001?`${(tau*1000).toFixed(3)} ms`:tau<1?`${(tau*1000).toFixed(2)} ms`:`${tau.toFixed(4)} s`,label:"Konstanta Waktu τ"},
          {val:fc>1000?`${(fc/1000).toFixed(3)} kHz`:`${fc.toFixed(2)} Hz`,label:"Frekuensi Cutoff"},
          {val:`${(5*tau*1000).toFixed(2)} ms`,label:"Waktu Charge Penuh (5τ)"},
        ]
      };
    }
  },
  {
    id:"cap", title:"Kapasitor Paralel/Seri", sub:"Total kapasitansi rangkaian",
    icon:"🔆", color:"#9b72e6", iconBg:"#1a1030",
    formula:"C_{par}=\\sum C_i \\;\\; \\frac{1}{C_{ser}}=\\sum\\frac{1}{C_i}",
    fields:[
      {id:"cap_vals",label:"Nilai C (μF)",unit:"μF",placeholder:"pisah koma: 10, 22, 47"},
      {id:"cap_type",label:"Hubungan",unit:"",placeholder:"",type:"select",opts:["Paralel","Seri"]},
    ],
    calc(v){
      const vals = v[0].split(',').map(x=>parseFloat(x.trim())).filter(x=>!isNaN(x)&&x>0);
      if(vals.length<2) return {err:"Masukkan minimal 2 nilai, pisahkan dengan koma."};
      const type = v[1];
      let total;
      if(type==="Paralel") total = vals.reduce((a,b)=>a+b,0);
      else total = 1/vals.reduce((a,b)=>a+1/b,0);
      return {val:total.toFixed(4),unit:"μF",label:`Kapasitansi Total (${type})`};
    }
  },
  {
    id:"res", title:"Resistor Paralel/Seri", sub:"Total hambatan rangkaian",
    icon:"🔁", color:"#f06565", iconBg:"#1f0a0a",
    formula:"R_{ser}=\\sum R_i \\;\\; \\frac{1}{R_{par}}=\\sum\\frac{1}{R_i}",
    fields:[
      {id:"res_vals",label:"Nilai R (Ω)",unit:"Ω",placeholder:"pisah koma: 100, 220, 470"},
      {id:"res_type",label:"Hubungan",unit:"",placeholder:"",type:"select",opts:["Seri","Paralel"]},
    ],
    calc(v){
      const vals = v[0].split(',').map(x=>parseFloat(x.trim())).filter(x=>!isNaN(x)&&x>0);
      if(vals.length<2) return {err:"Masukkan minimal 2 nilai, pisahkan dengan koma."};
      const type = v[1];
      let total;
      if(type==="Seri") total = vals.reduce((a,b)=>a+b,0);
      else total = 1/vals.reduce((a,b)=>a+1/b,0);
      return {val:total>=1000?`${(total/1000).toFixed(3)}k`:total.toFixed(4),unit:"Ω",label:`Hambatan Total (${type})`};
    }
  },
  {
    id:"vdiv", title:"Pembagi Tegangan", sub:"Hitung tegangan output",
    icon:"📐", color:"#2ec4b6", iconBg:"#0a1e1e",
    formula:"V_{out} = V_{in} \\cdot \\frac{R_2}{R_1+R_2}",
    fields:[
      {id:"vd_vin",label:"Tegangan Input",unit:"V",placeholder:"contoh: 12"},
      {id:"vd_r1",label:"R1 (atas)",unit:"Ω",placeholder:"contoh: 10000"},
      {id:"vd_r2",label:"R2 (bawah)",unit:"Ω",placeholder:"contoh: 2200"},
    ],
    calc(v){
      const [Vin,R1,R2] = v.map(x=>parseFloat(x));
      if([Vin,R1,R2].some(isNaN)||R1<=0||R2<=0) return {err:"Masukkan nilai yang valid."};
      const Vout = Vin*(R2/(R1+R2));
      const ratio = (R2/(R1+R2)*100).toFixed(1);
      return {
        multi:[
          {val:Vout.toFixed(4),label:`Tegangan Output`,unit:"V"},
          {val:`${ratio}%`,label:"Rasio Pembagi",unit:""},
        ]
      };
    }
  },
  {
    id:"resonance", title:"Resonansi RLC", sub:"Frekuensi resonansi dan impedansi",
    icon:"〰️", color:"#e879a0", iconBg:"#1f0a15",
    formula:"f_r = \\frac{1}{2\\pi\\sqrt{LC}}",
    fields:[
      {id:"rlc_l",label:"Induktansi (L)",unit:"mH",placeholder:"contoh: 10"},
      {id:"rlc_c",label:"Kapasitansi (C)",unit:"μF",placeholder:"contoh: 100"},
      {id:"rlc_r",label:"Hambatan (R)",unit:"Ω",placeholder:"contoh: 10"},
    ],
    calc(v){
      const [L,C,R] = v.map(x=>parseFloat(x));
      if([L,C,R].some(isNaN)||L<=0||C<=0||R<=0) return {err:"Masukkan nilai L, C, dan R yang valid."};
      const Lh = L*1e-3, Cf = C*1e-6;
      const fr = 1/(2*Math.PI*Math.sqrt(Lh*Cf));
      const Q = (1/R)*Math.sqrt(Lh/Cf);
      const Zmin = R;
      return {
        multi:[
          {val:fr>1000?`${(fr/1000).toFixed(3)} kHz`:`${fr.toFixed(2)} Hz`,label:"Frekuensi Resonansi",unit:""},
          {val:Q.toFixed(3),label:"Faktor Kualitas Q",unit:""},
          {val:`${Zmin} Ω`,label:"Impedansi Min (seri)",unit:""},
        ]
      };
    }
  },
  {
    id:"energy", title:"Energi & Biaya Listrik", sub:"Hitung konsumsi dan biaya",
    icon:"💡", color:"#f5a623", iconBg:"#1f1500",
    formula:"W = P \\cdot t \\;\\; \\text{Biaya} = W \\times \\text{Tarif}",
    fields:[
      {id:"en_p",label:"Daya (P)",unit:"W",placeholder:"contoh: 150"},
      {id:"en_t",label:"Waktu Pakai",unit:"jam/hari",placeholder:"contoh: 8"},
      {id:"en_d",label:"Jumlah Hari",unit:"hari",placeholder:"contoh: 30"},
      {id:"en_rate",label:"Tarif Listrik",unit:"Rp/kWh",placeholder:"contoh: 1444"},
    ],
    calc(v){
      const [P,T,D,Rate] = v.map(x=>parseFloat(x));
      if([P,T,D,Rate].some(isNaN)||[P,T,D,Rate].some(x=>x<=0)) return {err:"Masukkan semua nilai yang valid."};
      const kWh = (P/1000)*T*D;
      const biaya = kWh*Rate;
      return {
        multi:[
          {val:kWh.toFixed(3),label:"Konsumsi Energi",unit:"kWh"},
          {val:`Rp ${biaya.toLocaleString('id-ID',{maximumFractionDigits:0})}`,label:"Estimasi Biaya",unit:""},
        ]
      };
    }
  },
];

// ═══════════════════════════════════════════════════════════
// TAB NAVIGATION
// ═══════════════════════════════════════════════════════════
function switchTab(t){
  // Cek apakah ada sesi kuis yang aktif dan tab yang dituju bukan kuis
  if (window.activeQuizSession && t !== 'quiz') {
    alert("Selesaikan dulu soalnya bro! ⚡🏁");
    return;
  }
  // If more menu is open, close it
  const moreSheet = document.getElementById('moreSheet');
  if(moreSheet && moreSheet.classList.contains('on')) toggleMoreMenu();

  // fade out current
  document.querySelectorAll('.page.on').forEach(p=>{
    p.classList.remove('visible');
    setTimeout(()=>p.classList.remove('on'),50);
  });
  
  // handle top tab (if exists)
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('on'));
  const topTab = document.getElementById('tab-'+t);
  if(topTab) topTab.classList.add('on');
  
  // handle bottom nav / sidebar
  document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('on'));
  const bn=document.getElementById('bnav-'+t);
  if(bn) bn.classList.add('on');

  // slight delay so display:block renders before transition fires
  setTimeout(()=>{
    const pg = document.getElementById('page-'+t);
    if(pg) {
      pg.classList.add('on');
      requestAnimationFrame(()=>requestAnimationFrame(()=>pg.classList.add('visible')));
    }
  }, 60);
  // Safety: Stop Synth if playing and leaving synth tab
  if (t !== 'synth' && typeof synthPlaying !== 'undefined' && synthPlaying) {
    toggleSynth();
  }

  if(t === 'news') loadNews();

  window.scrollTo({top:0,behavior:'smooth'});
}

function toggleMoreMenu(){
  const sheet = document.getElementById('moreSheet');
  const overlay = document.getElementById('moreOverlay');
  if(!sheet || !overlay) return;
  const isOpen = sheet.classList.toggle('on');
  overlay.classList.toggle('on', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// ── THEME TOGGLE ──
function toggleTheme(){
  const isLight = document.body.classList.toggle('light');
  document.getElementById('themeBtn').textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
function initTheme(){
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){
    document.body.classList.add('light');
    document.getElementById('themeBtn').textContent = '🌙';
  }
}

// ═══════════════════════════════════════════════════════════
// KAMUS LOGIC
// ═══════════════════════════════════════════════════════════

let kat='Semua';

function renderChips(){
  document.getElementById('fbar').innerHTML=KAT.map(k=>
    `<button class="chip${k===kat?' on':''}" onclick="setKat('${k}')">${k==='Semua'?'Semua':k.charAt(0).toUpperCase()+k.slice(1)}</button>`
  ).join('');
}
function setKat(k){kat=k;renderChips();onSearch(document.getElementById('searchInput').value);}

function onSearch(q){
  document.getElementById('sx').style.display=q?'block':'none';
  let res=KAMUS;
  if(kat!=='Semua') res=res.filter(i=>i.kat===kat);
  if(q.trim()){const ql=q.toLowerCase();res=res.filter(i=>i.en.toLowerCase().includes(ql)||i.id.toLowerCase().includes(ql)||i.desc.toLowerCase().includes(ql)||(i.tags&&i.tags.some(t=>t.toLowerCase().includes(ql))));}
  document.getElementById('slabel').textContent=q?`Hasil: "${q}"`:kat==='Semua'?'Semua Istilah':'Kategori: '+kat;
  document.getElementById('scount').textContent=res.length+' istilah';
  renderGrid(res);
}
function clearSearch(){document.getElementById('searchInput').value='';onSearch('');}

const CORE_IDS = ['tegangan', 'arus', 'ohm', 'daya', 'kapasitor', 'resistor', 'transistor', 'induktor'];
const CORE_ICONS = {
  tegangan: '⚡', arus: '🌊', ohm: '♎', daya: '💡', 
  kapasitor: '🔋', resistor: '〰️', transistor: '⏀', induktor: '🌀'
};

function renderGrid(data){
  const g=document.getElementById('grid'), e=document.getElementById('empty');
  const googleWrap = document.getElementById('google-search-wrap');
  const emptyMsg = document.getElementById('empty-msg');
  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.trim() : '';

  if(!data.length){
    g.innerHTML='';
    googleWrap.innerHTML = '';
    
    if (query) {
      emptyMsg.innerHTML = `Istilah "<strong>${query}</strong>" tidak ditemukan.`;
      googleWrap.innerHTML = `
        <a href="https://www.google.com/search?q=${encodeURIComponent(query + ' teknik elektro')}" 
           target="_blank" 
           class="pdf-btn" 
           style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: var(--accent); border: 1px solid var(--line); color: var(--bg);">
           <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.4-7.84 5.4-4.92 0-8.96-4.04-8.96-8.96 0-4.92 4.04-8.96 8.96-8.96 2.84 0 4.76 1.16 5.84 2.2l2.56-2.48C19.24 1.92 16.12 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.2 0 12-5.08 12-12.2 0-.84-.08-1.48-.2-2.12l-11.8 0z"/></svg>
           Cari di Google
        </a>
      `;
    } else {
      emptyMsg.textContent = '🔌 Tidak ada istilah yang cocok di kategori ini';
    }
    
    e.style.display='block';
    return;
  }
  e.style.display='none';

  const core = data.filter(d => CORE_IDS.includes(d.id?.toLowerCase()));
  const regular = data.filter(d => !CORE_IDS.includes(d.id?.toLowerCase()));

  let html = '';

  if (core.length > 0) {
    html += `<div class="slabel" style="margin-bottom:12px;">Konsep Utama (Core)</div>`;
    html += `<div class="feature-grid">` + core.map((d,i)=>renderCard(d,i,true)).join('') + `</div>`;
  }

  if (regular.length > 0) {
    if (core.length > 0) html += `<div class="slabel" style="margin-top:24px;margin-bottom:12px;">Istilah Lainnya</div>`;
    html += `<div class="compact-list">` + regular.map((d,i)=>renderCard(d,i + core.length, false)).join('') + `</div>`;
  }

  g.innerHTML = html;

  // render KaTeX formulas
  data.forEach((d,i)=>{
    if(!d.formula) return;
    const el=document.getElementById(`ef${i}`);
    if(!el) return;
    if(typeof katex!=='undefined'){
      try{katex.render(d.formula,el,{throwOnError:false,displayMode:false});}catch(e){el.textContent=d.formula;}
    } else {
      pendingMathEls.push({el,latex:d.formula,mode:'render'});
    }
  });
}

function renderCard(d, i, isFeature) {
  const icon = isFeature ? (CORE_ICONS[d.id?.toLowerCase()] || '⚡') : '';
  
  if (isFeature) {
    return `
    <div class="card core-card" id="c${i}" onclick="tog(${i})" style="animation-delay:${i * 0.03}s">
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
          <div class="card-actions">
            <button class="eask" onclick="askCard(event,'${d.en.replace(/'/g,'\\\'').replace(/"/g,'')}','${d.id.replace(/'/g,'\\\'').replace(/"/g,'')}')"><span>💬</span> Tanya AI</button>
            <button class="ewiki" id="wb${i}" onclick="getWikiInfo(event, ${i}, '${d.id.replace(/'/g,'\\\'').replace(/"/g,'')}')"><span>📖</span> Wikipedia</button>
          </div>
          <div class="wiki-res" id="wr${i}"></div>
        </div>
      </div>
    </div>`;
  }

  return `
    <div class="card" id="c${i}" onclick="tog(${i})" style="animation-delay:${i * 0.03}s">
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
          <div class="card-actions">
            <button class="eask" onclick="askCard(event,'${d.en.replace(/'/g,'\\\'').replace(/"/g,'')}','${d.id.replace(/'/g,'\\\'').replace(/"/g,'')}')"><span>💬</span> Tanya AI</button>
            <button class="ewiki" id="wb${i}" onclick="getWikiInfo(event, ${i}, '${d.id.replace(/'/g,'\\\'').replace(/"/g,'')}')"><span>📖</span> Wikipedia</button>
          </div>
          <div class="wiki-res" id="wr${i}"></div>
        </div>
      </div>
      <div class="cchev">▼</div>
    </div>`;
}

function tog(i){
  const c=document.getElementById(`c${i}`),isOpen=c.classList.contains('open');
  document.querySelectorAll('.card.open').forEach(x=>x.classList.remove('open'));
  if(!isOpen){c.classList.add('open');setTimeout(()=>c.scrollIntoView({behavior:'smooth',block:'nearest'}),50);}
}

function askCard(e,en,id){
  e.stopPropagation();
  const q=`Jelaskan lebih detail tentang ${id} (${en}) dalam teknik elektro, termasuk aplikasi praktisnya.`;
  const mob=window.innerWidth<860;
  if(mob){if(!mOpen)openM();setTimeout(()=>{document.getElementById('inpM').value=q;send('M');},300);}
  else{document.getElementById('inpD').value=q;send('D');}
}

async function getWikiInfo(e, i, query) {
  e.stopPropagation();
  const btn = document.getElementById(`wb${i}`);
  const resEl = document.getElementById(`wr${i}`);
  
  if (resEl.classList.contains('show')) {
    resEl.classList.remove('show');
    btn.classList.remove('active');
    return;
  }

  // Loading state
  btn.disabled = true;
  btn.innerHTML = `<span>⏳</span> Memuat...`;
  
  try {
    const data = await window.ElektroAPI.fetchWikiSummary(query);
    
    resEl.innerHTML = `
      <div class="wiki-content">
        ${data.thumbnail ? `<img src="${data.thumbnail.source}" class="wiki-img" alt="Wiki Image">` : ''}
        <div class="wiki-text">
          <div class="wiki-title-ref">${data.displaytitle || data.title}</div>
          <p>${data.extract}</p>
          <a href="${data.content_urls.desktop.page}" target="_blank" class="wiki-link">Baca selengkapnya di Wikipedia →</a>
        </div>
      </div>
    `;
    resEl.classList.add('show');
    btn.classList.add('active');
  } catch (err) {
    alert(err.message || "Gagal mengambil data Wikipedia.");
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<span>📖</span> Wikipedia`;
  }
}

// ═══════════════════════════════════════════════════════════
// QUIZ LOGIC
// ═══════════════════════════════════════════════════════════
// QUIZ — AI POWERED LOGIC
// ═══════════════════════════════════════════════════════════
let qCat='', qDiff='mudah', qList=[], qIdx=0, qScore=0, qWrong=0, qAnswered=[], qGenerating=false;

function setDiff(btn, d){
  qDiff = d;
  document.querySelectorAll('.qdiff-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}

function initQuiz(){
  document.getElementById('quiz-cats').innerHTML = Object.entries(QUIZ_CATS).map(([k,v])=>
    `<button class="qcat-btn" onclick="selectQuizCat(this,'${k}')">
      ${v.emoji} ${v.label}
     </button>`
  ).join('');
}

function selectQuizCat(btn, c){
  qCat = c;
  document.querySelectorAll('.qcat-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const startBtn = document.getElementById('quiz-start-btn');
  startBtn.disabled = false;
  startBtn.textContent = `⚡ Mulai — ${QUIZ_CATS[c].label}`;
}

async function startAIQuiz(){
  if(!qCat || qGenerating) return;
  qGenerating = true;
  window.activeQuizSession = true; // Kunci tab navigasi

  const cat = QUIZ_CATS[qCat];

  // reset UI
  document.getElementById('quiz-score').classList.remove('show');
  document.getElementById('quiz-box').style.display = 'none';
  document.getElementById('quiz-nav').style.display = 'none';
  document.getElementById('quiz-loading').classList.add('show');
  document.getElementById('ql-sub').textContent = `Generate 5 soal · ${cat.label} · Level ${qDiff}`;
  document.getElementById('quiz-start-btn').disabled = true;

  const diffMap = {
    mudah:'tingkat kesulitan mudah (konsep dasar, hafalan, definisi)',
    sedang:'tingkat kesulitan sedang (perhitungan sederhana, aplikasi rumus)',
    sulit:'tingkat kesulitan sulit (analisis rangkaian, perhitungan multi-langkah, konsep lanjut)'
  };

  const prompt = `Kamu adalah pembuat soal teknik elektro profesional. Buat TEPAT 5 soal pilihan ganda tentang topik "${cat.label}" (${cat.desc}) dengan ${diffMap[qDiff]}.

PENTING — kembalikan HANYA JSON valid, tanpa teks lain, tanpa markdown, tanpa backtick:
{"soal":[{"q":"pertanyaan","opts":["A","B","C","D"],"ans":0,"exp":"penjelasan singkat mengapa jawaban benar"}]}

Aturan:
- "ans" adalah INDEX jawaban benar (0=A, 1=B, 2=C, 3=D)
- Soal dalam bahasa Indonesia yang jelas
- Pilihan jawaban harus masuk akal (jangan terlalu obvious)
- Penjelasan singkat tapi informatif
- Boleh pakai rumus dalam format teks biasa (misal: V=IR)
- Pastikan SEMUA 5 soal ada dalam array`;

  try {
    const data = await callAI({
      model: API_MODEL,
      messages:[
        {role:'system', content:'Kamu adalah generator soal teknik elektro. Selalu kembalikan HANYA JSON valid tanpa teks tambahan apapun.'},
        {role:'user', content: prompt}
      ],
      temperature: 0.8,
      max_tokens: 2000
    });
    if(data.error) throw new Error(data.error.message);

    let raw = data.choices?.[0]?.message?.content || '';
    // bersihkan kalau ada markdown
    raw = raw.replace(/```json|```/g,'').trim();
    // ambil bagian JSON-nya saja
    const match = raw.match(/\{[\s\S]*\}/);
    if(!match) throw new Error('Format JSON tidak valid dari AI');
    const parsed = JSON.parse(match[0]);
    if(!parsed.soal || parsed.soal.length === 0) throw new Error('Soal kosong');

    qList = parsed.soal;
    qIdx=0; qScore=0; qWrong=0; qAnswered=Array(qList.length).fill(null);

    document.getElementById('quiz-loading').classList.remove('show');
    document.getElementById('quiz-box').style.display = 'block';
    document.getElementById('quiz-nav').style.display = 'flex';
    renderQuestion();

  } catch(err) {
    window.activeQuizSession = false; // Buka kunci navigasi jika gagal
    document.getElementById('quiz-loading').classList.remove('show');
    document.getElementById('quiz-box').style.display = 'block';
    document.getElementById('quiz-box').innerHTML = `
      <div style="text-align:center;padding:32px 16px;color:var(--rose)">
        <div style="font-size:28px;margin-bottom:10px">😵</div>
        <div style="font-size:14px;font-weight:600;margin-bottom:6px">Gagal generate soal</div>
        <div style="font-size:12px;color:var(--text3)">${err.message}</div>
        <button class="quiz-start-btn" onclick="startAIQuiz()" style="margin-top:16px;display:block;max-width:200px">🔄 Coba Lagi</button>
      </div>`;
    document.getElementById('quiz-start-btn').disabled = false;
  } finally {
    // BUGFIX #2: always reset flag so retryQuiz / "Coba Lagi" always work
    qGenerating = false;
  }
}

function renderQuestion(){
  if(qIdx>=qList.length){showScore();return;}
  const q = qList[qIdx];
  const box = document.getElementById('quiz-box');
  box.innerHTML = `
    <div class="q-num">SOAL ${qIdx+1} / ${qList.length} &nbsp;·&nbsp; ${QUIZ_CATS[qCat]?.label||qCat} &nbsp;·&nbsp; ${qDiff.toUpperCase()}</div>
    <div class="q-text" id="qtext">${q.q}</div>
    <div class="q-opts">
      ${q.opts.map((o,i)=>`
        <button class="qopt" id="qopt${i}" onclick="answerQ(${i})">
          <span class="q-letter">${'ABCD'[i]}</span>
          <span id="qopttext${i}">${o}</span>
        </button>`).join('')}
    </div>
    <div class="q-explain" id="qexplain">💡 <strong>Penjelasan:</strong> <span id="qexptext"></span></div>`;
  setTimeout(()=>{
    renderMath(document.getElementById('qtext'));
    q.opts.forEach((_,i)=>renderMath(document.getElementById('qopttext'+i)));
  },50);
  if(qAnswered[qIdx]!==null) restoreAnswer(qIdx);
  updateNav();
}

function answerQ(i){
  if(qAnswered[qIdx]!==null) return;
  const q=qList[qIdx];
  const correct=q.ans;
  qAnswered[qIdx]=i;
  if(i===correct) qScore++; else qWrong++;
  for(let k=0;k<q.opts.length;k++){
    const btn=document.getElementById('qopt'+k);
    btn.disabled=true;
    if(k===correct) btn.classList.add('correct');
    else if(k===i) btn.classList.add('wrong');
  }
  const expEl=document.getElementById('qexplain');
  expEl.classList.add('show');
  document.getElementById('qexptext').textContent=q.exp;
  setTimeout(()=>renderMath(expEl),50);
  // BUGFIX #4: update progress counter immediately after answering
  updateNav();
}

function restoreAnswer(idx){
  const q=qList[idx], chosen=qAnswered[idx];
  if(chosen===null) return;
  for(let k=0;k<q.opts.length;k++){
    const btn=document.getElementById('qopt'+k);
    btn.disabled=true;
    if(k===q.ans) btn.classList.add('correct');
    else if(k===chosen) btn.classList.add('wrong');
  }
  const expEl=document.getElementById('qexplain');
  expEl.classList.add('show');
  document.getElementById('qexptext').textContent=q.exp;
  setTimeout(()=>renderMath(expEl),50);
}

function nextQ(){if(qIdx<qList.length-1){qIdx++;renderQuestion();}else showScore();}
function prevQ(){if(qIdx>0){qIdx--;renderQuestion();}}

function updateNav(){
  document.getElementById('qbtn-prev').disabled=qIdx===0;
  const nextBtn=document.getElementById('qbtn-next');
  nextBtn.textContent = qIdx===qList.length-1 ? 'Lihat Skor 🏁' : 'Selanjutnya →';
  document.getElementById('q-prog').textContent=`${qAnswered.filter(x=>x!==null).length}/${qList.length} dijawab`;
}

function showScore(){
  window.activeQuizSession = false; // Buka kunci navigasi setelah soal selesai
  document.getElementById('quiz-score').classList.add('show');
  document.getElementById('quiz-box').style.display='none';
  document.getElementById('quiz-nav').style.display='none';
  const total=qList.length, pct=Math.round(qScore/total*100);
  document.getElementById('sc-pct').textContent=pct+'%';
  document.getElementById('sc-fill').style.width=pct+'%';
  document.getElementById('sc-c').textContent=qScore;
  document.getElementById('sc-w').textContent=qWrong;
  document.getElementById('sc-t').textContent=total;
}

function getScoreText(){
  const pct = document.getElementById('sc-pct').textContent;
  const benar = document.getElementById('sc-c').textContent;
  const salah = document.getElementById('sc-w').textContent;
  const total = document.getElementById('sc-t').textContent;
  const cat = QUIZ_CATS[qCat]?.label || qCat;
  const diff = qDiff.charAt(0).toUpperCase()+qDiff.slice(1);
  const medal = parseInt(pct)>=80?'🏆':parseInt(pct)>=60?'🥈':'💪';
  return `${medal} Hasil Latihan ElektroDict\n\n⚡ Kategori: ${cat} (${diff})\n📊 Skor: ${pct}\n✅ Benar: ${benar}/${total}\n❌ Salah: ${salah}/${total}\n\n🔗 kamuselektro.tiiny.site`;
}

function shareScore(){
  const text = encodeURIComponent(getScoreText());
  window.open(`https://wa.me/?text=${text}`,'_blank');
}

function copyScore(){
  navigator.clipboard.writeText(getScoreText()).then(()=>{
    const btn = event.target;
    btn.textContent='✅ Tersalin!';
    setTimeout(()=>btn.textContent='📋 Copy Teks Hasil',2000);
  }).catch(()=>{
    alert(getScoreText());
  });
}

// ═══════════════════════════════════════════════════════════
// ONBOARDING + AI QUOTE
// ═══════════════════════════════════════════════════════════
function closeOnboard(){
  const ov = document.getElementById('onboardOverlay');
  ov.classList.add('hide');
  setTimeout(()=>ov.remove(), 300);
  localStorage.setItem('ed_visited','1');
  if(window.innerWidth <= 639 && !localStorage.getItem('ed_bnav_seen')){
    setTimeout(()=>showHintBar(), 600);
  }
}

function showHintBar(){
  const bar = document.getElementById('bnavHintBar');
  if(!bar) return;
  bar.style.display = 'flex';
  setTimeout(()=>dismissHintBar(), 7000);
  const nav = document.getElementById('bottomNav');
  if(nav){
    nav.addEventListener('scroll', ()=>{
      if(nav.scrollLeft > 10){ dismissHintBar(); localStorage.setItem('ed_bnav_seen','1'); nav.classList.add('scrolled'); }
    },{passive:true, once:true});
  }
}

function dismissHintBar(){
  const bar = document.getElementById('bnavHintBar');
  if(!bar || bar.style.display==='none') return;
  bar.classList.add('hide');
  setTimeout(()=>{ bar.style.display='none'; bar.classList.remove('hide'); }, 320);
  localStorage.setItem('ed_bnav_seen','1');
  document.getElementById('bottomNav')?.classList.add('scrolled');
}

// ═══════════════════════════════════════════════════════════
// QUOTE SYSTEM — Instan dari pool, fetch baru di background
// ═══════════════════════════════════════════════════════════
const QUOTE_CACHE_KEY = 'ed_quote_cache';
const QUOTE_CACHE_TTL = 24 * 60 * 60 * 1000;

// Pool quote hardcode — tampil instan, ZERO loading
const QUOTE_POOL = [
  {q:"Listrik tidak pernah bohong — V selalu sama dengan I dikali R.", s:"— Hukum Ohm ⚡"},
  {q:"Insinyur yang baik bukan yang hafal semua rumus, tapi yang tau kapan harus pakai rumus mana.", s:"— ElektroBot ⚡"},
  {q:"Tesla bilang: kalau kamu mau tau rahasia alam semesta, pikir dalam frekuensi, energi, dan getaran.", s:"— Nikola Tesla"},
  {q:"Transistor sekecil kuku bisa menggantikan seribu tabung vakum sebesar lengan. Itulah kuasa miniaturisasi.", s:"— Fun Fact ⚡"},
  {q:"Belajar elektro itu kayak debugging — error-nya bukan musuh, itu petunjuk menuju jawaban.", s:"— ElektroBot ⚡"},
  {q:"Faraday tidak punya gelar sarjana, tapi temuannya jadi fondasi generator dan transformator yang kita pakai sampai sekarang.", s:"— Fun Fact ⚡"},
  {q:"Skill paling penting seorang engineer: bisa jelasin hal rumit dengan cara yang simpel.", s:"— ElektroBot ⚡"},
  {q:"Satu chip Intel Core modern punya lebih dari 10 miliar transistor. Tahun 1971, Intel 4004 cuma punya 2.300.", s:"— Fun Fact ⚡"},
  {q:"Jangan takut salah hitung — kalkulator bisa salah, tapi pemahaman konsep tidak pernah bohong.", s:"— ElektroBot ⚡"},
  {q:"Maxwell menulis persamaannya di 1864. Tanpa itu, tidak ada WiFi, radio, atau sinyal HP yang lo pakai sekarang.", s:"— Fun Fact ⚡"},
  {q:"Mahasiswa elektro yang males baca datasheet itu kayak arsitek yang males baca blueprint.", s:"— ElektroBot ⚡"},
  {q:"Daya reaktif itu kayak teman yang janji tapi tidak pernah kerja — ada di sistem tapi tidak ngasih kontribusi nyata.", s:"— ElektroBot ⚡"},
  {q:"Edison gagal lebih dari 1.000 kali sebelum berhasil bikin lampu pijar. Tiap gagal itu bukan kekalahan, itu eliminasi cara yang tidak works.", s:"— Thomas Edison (adaptasi)"},
  {q:"Kalau rangkaian lo meledak, itu bukan bencana — itu praktikum yang paling berkesan.", s:"— ElektroBot ⚡"},
  {q:"Frekuensi PLN Indonesia 50 Hz artinya arus AC berubah arah 100 kali per detik. Mata lo tidak bisa lihatnya, tapi osiloskop bisa.", s:"— Fun Fact ⚡"},
];

function getRandomQuote(){
  return QUOTE_POOL[Math.floor(Math.random() * QUOTE_POOL.length)];
}

function showQuoteInDOM(quote, src){
  const el = document.getElementById('oq-text');
  const srcEl = document.getElementById('oq-src');
  if(el) el.textContent = `"${quote}"`;
  if(srcEl) srcEl.textContent = src;
}

function loadCachedQuote(){
  try {
    const raw = localStorage.getItem(QUOTE_CACHE_KEY);
    if(!raw) return null;
    const cached = JSON.parse(raw);
    if(Date.now() - cached.ts < QUOTE_CACHE_TTL) return cached;
    return null;
  } catch(e){ return null; }
}

function saveQuoteCache(quote, src){
  try {
    localStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify({quote, src, ts: Date.now()}));
  } catch(e){}
}

// Fetch dari API — simpan ke cache, TIDAK update DOM (background only)
async function fetchQuoteBackground(){
  const prompts = [
    'Berikan satu kutipan bijak dan inspiratif tentang belajar ilmu elektro atau teknik elektro. Bisa dari tokoh terkenal atau buatan sendiri. Format: HANYA teks quote tanpa tanda kutip, diikuti " — [Sumber/Nama]" di baris baru. Maksimal 2 kalimat.',
    'Tulis satu kalimat motivasi gaul untuk mahasiswa teknik elektro yang lagi belajar. Harus relate, singkat, dan ada unsur humor ringan. Format: HANYA teks quote, diikuti " — ElektroBot ⚡" di baris baru.',
    'Berikan satu fakta menarik atau trivia singkat tentang listrik, elektronika, atau penemu di bidang elektro. Format: HANYA teks faktanya, diikuti " — Fun Fact" di baris baru.',
  ];
  const p = prompts[Math.floor(Math.random()*prompts.length)];
  try {
    const data = await callAI({model:API_MODEL, messages:[{role:'user',content:p}], max_tokens:120, temperature:0.9});
    const raw = data.choices?.[0]?.message?.content?.trim() || '';
    const lines = raw.split('\n').filter(l=>l.trim());
    const quote = lines[0]?.replace(/^[""]|[""]$/g,'').trim() || raw;
    const src   = lines[1]?.trim() || '— ElektroBot ⚡';
    if(quote.length > 10) saveQuoteCache(quote, src);
  } catch(e){} // silent fail
}

// Dipanggil LANGSUNG saat page load — jauh sebelum user buka onboarding
function prefetchQuote(){
  // Tampilkan quote instan dulu (cache atau random dari pool)
  const cached = loadCachedQuote();
  if(cached){
    showQuoteInDOM(cached.quote, cached.src);
    // cache masih valid — refresh di background untuk kunjungan berikutnya
    setTimeout(()=>fetchQuoteBackground(), 3000);
  } else {
    // belum ada cache → tampil dari pool hardcode SEKARANG (0ms)
    const q = getRandomQuote();
    showQuoteInDOM(q.q, q.s);
    // fetch AI di background, simpan ke cache
    fetchQuoteBackground();
  }
}

function initOnboarding(){
  // Tampilkan modal TIAP KALI akses (sesuai request user)
  const ov = document.getElementById('onboardOverlay');
  if(ov) {
    ov.classList.add('on');
    // tampilkan scroll hint di onboarding (mobile only)
    if(window.innerWidth <= 639){
      const hint = document.getElementById('onboard-scroll-hint');
      if(hint) hint.style.display = 'flex';
    }
  }

  // Tampilkan quote INSTAN — dari cache kalau ada, fallback ke pool hardcode
  const cached = loadCachedQuote();
  if(cached){
    showQuoteInDOM(cached.quote, cached.src);
  } else {
    // Belum ada cache → ambil dari pool hardcode (INSTAN, 0ms)
    const q = getRandomQuote();
    showQuoteInDOM(q.q, q.s);
  }
  // Fetch AI quote di background untuk kunjungan berikutnya
  setTimeout(()=>fetchQuoteBackground(), 1000);
}

// ═══════════════════════════════════════════════════════════
// KODE WARNA RESISTOR
// ═══════════════════════════════════════════════════════════
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
// BUGFIX #6: 5-band default: band1-3 = Hitam(0=digit 0), band4 = Coklat(1=×10), band5 = Emas(10=±5%)
// Previously [0,0,0,10,11] had Emas(idx 10) as multiplier which renders 0Ω — use Coklat(1=×10) instead
let resistSel = [0,0,10,11]; // default 4-band: hitam(0),hitam(0), Emas(×0.1), Perak(±10%)

function setResistMode(btn, mode){
  resistMode = mode;
  document.querySelectorAll('.rmode-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  // 4-band: digit,digit,mult,tol — 5-band: digit,digit,digit,mult,tol
  // Use sensible defaults: 1kΩ ±5% for 4-band, 10kΩ ±5% for 5-band
  resistSel = mode===4 ? [1,0,2,10] : [1,0,0,2,10];
  renderResistor();
}

function renderResistor(){
  renderResistorSVG();
  renderResistorBands();
  calcResistor();
}

function renderResistorSVG(){
  const bands = resistSel;
  const colors = bands.map(i=>RCOLORS[i].hex);
  const bw = resistMode===4 ? 4 : 3; // band positions
  // Build SVG — resistor body + colored bands
  const bPos = resistMode===4
    ? [78,96,116,134]
    : [72,88,104,122,138];

  let bandsSVG = colors.map((c,i)=>
    `<rect x="${bPos[i]}" y="28" width="10" height="44" fill="${c}" rx="1"/>`
  ).join('');

  document.getElementById('resist-svg-wrap').innerHTML = `
    <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" style="max-height:100px">
      <!-- leads -->
      <line x1="0" y1="50" x2="55" y2="50" stroke="#aaa" stroke-width="3" stroke-linecap="round"/>
      <line x1="165" y1="50" x2="220" y2="50" stroke="#aaa" stroke-width="3" stroke-linecap="round"/>
      <!-- body -->
      <rect x="55" y="25" width="110" height="50" rx="10" fill="#f5e6c8" stroke="#c8a870" stroke-width="2"/>
      <!-- bands -->
      ${bandsSVG}
      <!-- label -->
      <text x="110" y="88" font-size="9" fill="var(--text3)" text-anchor="middle" font-family="monospace" id="rsvg-label"></text>
    </svg>`;
}

function renderResistorBands(){
  const isD = []; // which positions are digit-capable
  const digitColors = RCOLORS.filter(c=>c.digit!==null);
  const multColors  = RCOLORS.filter(c=>c.mult!==undefined);
  const tolColors   = RCOLORS.filter(c=>c.tol!==null);

  const labels = resistMode===4
    ? ['Gelang 1 (digit)','Gelang 2 (digit)','Pengali','Toleransi']
    : ['Gelang 1 (digit)','Gelang 2 (digit)','Gelang 3 (digit)','Pengali','Toleransi'];

  const types = resistMode===4
    ? ['digit','digit','mult','tol']
    : ['digit','digit','digit','mult','tol'];

  document.getElementById('resist-bands').innerHTML = labels.map((lbl,i)=>{
    const type = types[i];
    const opts = type==='tol'
      ? RCOLORS.filter(c=>c.tol).map((c,ci)=>`<option value="${RCOLORS.indexOf(c)}" ${resistSel[i]===RCOLORS.indexOf(c)?'selected':''}>${c.name} (${c.tol})</option>`).join('')
      : type==='mult'
      ? RCOLORS.map((c,ci)=>`<option value="${ci}" ${resistSel[i]===ci?'selected':''}>${c.name} (×${formatMult(c.mult)})</option>`).join('')
      : RCOLORS.filter(c=>c.digit!==null).map((c)=>`<option value="${RCOLORS.indexOf(c)}" ${resistSel[i]===RCOLORS.indexOf(c)?'selected':''}>${c.name} (${c.digit})</option>`).join('');
    return `<div class="rband-row">
      <span class="rband-lbl">${lbl}</span>
      <select class="rband-sel" onchange="updateBand(${i},parseInt(this.value))">${opts}</select>
      <div class="rband-swatch" style="background:${RCOLORS[resistSel[i]].hex}"></div>
    </div>`;
  }).join('');
}

function formatMult(m){
  if(m>=1e9) return '1G';
  if(m>=1e6) return m/1e6+'M';
  if(m>=1e3) return m/1e3+'k';
  if(m<1) return m;
  return m;
}

function updateBand(idx, colorIdx){
  resistSel[idx] = colorIdx;
  // update swatch
  const swatches = document.querySelectorAll('.rband-swatch');
  if(swatches[idx]) swatches[idx].style.background = RCOLORS[colorIdx].hex;
  renderResistorSVG();
  calcResistor();
}

function calcResistor(){
  let value, tol, multC, tolC;
  if(resistMode===4){
    const [b1,b2,bm,bt] = resistSel;
    const d1 = RCOLORS[b1].digit, d2 = RCOLORS[b2].digit;
    if(d1===null||d2===null){setResistResult('—','Gelang 1 & 2 harus digit',''); return;}
    value = (d1*10+d2) * RCOLORS[bm].mult;
    tol   = RCOLORS[bt].tol || '—';
  } else {
    const [b1,b2,b3,bm,bt] = resistSel;
    const d1=RCOLORS[b1].digit,d2=RCOLORS[b2].digit,d3=RCOLORS[b3].digit;
    if(d1===null||d2===null||d3===null){setResistResult('—','Gelang 1,2,3 harus digit',''); return;}
    value = (d1*100+d2*10+d3) * RCOLORS[bm].mult;
    tol   = RCOLORS[bt].tol || '—';
  }

  const fmt = formatOhm(value);
  const tolPct = tol==='—' ? 0 : parseFloat(tol.replace('±','').replace('%',''))/100;
  const lo = formatOhm(value*(1-tolPct));
  const hi = formatOhm(value*(1+tolPct));
  const range = tol!=='—' ? `Range: ${lo} ~ ${hi}` : '';
  setResistResult(fmt, `Toleransi ${tol}`, range);

  // update SVG label
  const lbl = document.getElementById('rsvg-label');
  if(lbl) lbl.textContent = fmt + (tol!=='—'?' '+tol:'');
}

function formatOhm(v){
  if(v>=1e9) return (v/1e9).toPrecision(4)+' GΩ';
  if(v>=1e6) return (v/1e6).toPrecision(4)+' MΩ';
  if(v>=1e3) return (v/1e3).toPrecision(4)+' kΩ';
  return v.toPrecision(4)+' Ω';
}

function setResistResult(val, tol, range){
  document.getElementById('rr-val').textContent  = val;
  document.getElementById('rr-tol').textContent  = tol;
  document.getElementById('rr-range').textContent= range;
}

function initResistor(){
  renderResistor();
}

// ═══════════════════════════════════════════════════════════
// AI VISION — SOAL FOTO + RANGKAIAN ANALYZER
// ═══════════════════════════════════════════════════════════
const AIV_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';
let aivMode = 'soal';
let aivImageB64 = null;
let aivImageType = 'image/jpeg';

const AIV_PROMPTS = {
  soal: `Lo adalah tutor teknik elektro yang gaul dan sabar. User kirim foto soal ujian/latihan elektro.

Tugas lo:
1. Baca soal dari gambar dengan teliti
2. Jawab dengan langkah-langkah yang jelas (step-by-step)
3. Kalau ada rumus, tulis dengan jelas: contoh V = I × R
4. Di akhir, kasih kesimpulan singkat
5. Gaya bahasa santai tapi akurat

Kalau gambar bukan soal elektro, bilang dengan sopan.`,

  rangkaian: `Lo adalah insinyur elektro berpengalaman yang gaul. User kirim foto rangkaian/skema/PCB elektro.

Tugas lo:
1. Identifikasi komponen yang keliatan (resistor, kapasitor, IC, dll)
2. Jelaskan fungsi masing-masing bagian
3. Jelaskan cara kerja rangkaian secara keseluruhan
4. Kalau bisa, sebutkan nilai komponen yang terbaca
5. Kasih info tambahan yang berguna
6. Gaya bahasa santai tapi teknis

Kalau gambar bukan rangkaian elektro, bilang dengan sopan.`
};

function setAIVMode(btn, mode){
  aivMode = mode;
  document.querySelectorAll('.aivm-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('aiv-upload-sub').textContent = mode==='soal'
    ? 'Format: JPG, PNG — foto soal ujian atau buku'
    : 'Format: JPG, PNG — foto skema, PCB, atau rangkaian';
}

function handleAIVDrop(e){
  e.preventDefault();
  document.getElementById('aiv-upload').classList.remove('drag');
  const file = e.dataTransfer.files[0];
  if(file && file.type.startsWith('image/')) handleAIVFile(file);
}

function handleAIVFile(file){
  if(!file) return;
  aivImageType = file.type || 'image/jpeg';
  const reader = new FileReader();
  reader.onload = e => {
    const dataUrl = e.target.result;
    aivImageB64 = dataUrl.split(',')[1];
    document.getElementById('aiv-img').src = dataUrl;
    document.getElementById('aiv-preview').classList.add('show');
    document.getElementById('aiv-upload').style.display = 'none';
    document.getElementById('aiv-analyze-btn').disabled = false;
    document.getElementById('aiv-result').classList.remove('show');
    document.getElementById('aiv-loading').classList.remove('show');
  };
  reader.readAsDataURL(file);
}

function resetAIV(){
  aivImageB64 = null;
  document.getElementById('aiv-img').src = '';
  document.getElementById('aiv-preview').classList.remove('show');
  document.getElementById('aiv-upload').style.display = 'block';
  document.getElementById('aiv-analyze-btn').disabled = true;
  document.getElementById('aiv-result').classList.remove('show');
  document.getElementById('aiv-loading').classList.remove('show');
  const inp = document.querySelector('#aiv-upload input');
  if(inp) inp.value = '';
}

function resetAIVResult(){ resetAIV(); }

// Parse markdown + LaTeX dari output AI jadi HTML yang bisa di-render
function parseAIText(text){
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  let result = text;
  const latexBlocks = [];

  // 1. Protect $$ display math
  result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    const idx = latexBlocks.length;
    latexBlocks.push({type:'display', math: math.trim()});
    return `@@LATEX_BLOCK_${idx}@@`;
  });
  // 2. Protect \[...\] display
  result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
    const idx = latexBlocks.length;
    latexBlocks.push({type:'display', math: math.trim()});
    return `@@LATEX_BLOCK_${idx}@@`;
  });
  // 3. Protect \(...\) inline
  result = result.replace(/\\\(([^)]*?)\\\)/g, (_, math) => {
    const idx = latexBlocks.length;
    latexBlocks.push({type:'inline', math: math.trim()});
    return `@@LATEX_BLOCK_${idx}@@`;
  });
  // 4. Protect $...$ inline — BUGFIX #8: only match if content looks like math (has letter/operator, not pure currency/number)
  result = result.replace(/\$([^\$\n\r]{1,200}?)\$/g, (_, math) => {
    const m = math.trim();
    if(!m) return `$${math}$`;
    // Must contain at least one math-like char: letter, \, ^, _, {, =, +, -, /, >
    // Reject if it looks like a plain price/number (only digits, commas, dots, spaces)
    if(!/[a-zA-Z\\^_{}\|=><]/.test(m)) return `$${math}$`;
    const idx = latexBlocks.length;
    latexBlocks.push({type:'inline', math: m});
    return `@@LATEX_BLOCK_${idx}@@`;
  });

  // Helper to escape basic HTML if marked is not handling it fully, but marked does this.
  // We'll strip esc() because marked handles blockquotes etc. better without escaping first.
  // Just let marked parse it.
  if (typeof marked !== 'undefined') {
    result = marked.parse(result, { breaks: true, gfm: true });
  } else if (typeof window.marked !== 'undefined') {
    result = window.marked.parse(result, { breaks: true, gfm: true });
  } else {
    // Fallback if marked didn't load
    result = esc(result);
    result = result.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em>$1</em>');
    result = result.replace(/`([^`]+)`/g, '<code style="background:var(--bg4);padding:1px 5px;border-radius:4px;font-family:var(--mono);font-size:.9em;color:var(--amber)">$1</code>');
    result = result.replace(/^###\s+(.+)$/gm, '<h4 style="font-size:14px;font-weight:700;color:var(--accent);margin:12px 0 4px">$1</h4>');
    result = result.replace(/^##\s+(.+)$/gm,  '<h3 style="font-size:15px;font-weight:700;color:var(--accent);margin:14px 0 5px">$1</h3>');
    result = result.replace(/^#\s+(.+)$/gm,   '<h2 style="font-size:16px;font-weight:700;color:var(--accent);margin:16px 0 6px">$1</h2>');
    result = result.replace(/^[\*\-]\s+(.+)$/gm, '<div style="display:flex;gap:8px;margin:4px 0"><span style="color:var(--accent);flex-shrink:0">▸</span><span>$1</span></div>');
    result = result.replace(/^(\d+)\.\s+(.+)$/gm, '<div style="display:flex;gap:8px;margin:4px 0"><span style="color:var(--accent);font-family:var(--mono);font-size:11px;flex-shrink:0;margin-top:2px">$1.</span><span>$2</span></div>');
    result = result.replace(/\n\n/g, '<br><br>');
    result = result.replace(/\n/g, '<br>');
  }

  // Restore LaTeX as renderable spans
  result = result.replace(/@@LATEX_BLOCK_(\d+)@@/g, (_, idx) => {
    const block = latexBlocks[parseInt(idx)];
    const latexEsc = block.math.replace(/"/g,'&quot;');
    if(block.type === 'display'){
      return `<span class="katex-display-wrap" data-latex="${latexEsc}" data-display="true" style="display:block;text-align:center;margin:12px 0;overflow-x:auto;padding:4px 0"></span>`;
    } else {
      return `<span class="katex-inline-wrap" data-latex="${latexEsc}" data-display="false"></span>`;
    }
  });

  return result;
}

// Override renderMath untuk handle custom span LaTeX
function renderAIVMath(el){
  // Kalau KaTeX belum ready, tunggu dulu
  if(typeof katex === 'undefined'){
    setTimeout(() => renderAIVMath(el), 300);
    return;
  }
  // Render semua span yang punya data-latex
  el.querySelectorAll('[data-latex]').forEach(span => {
    const latex = span.getAttribute('data-latex');
    const display = span.getAttribute('data-display') === 'true';
    try {
      katex.render(latex, span, {throwOnError:false, displayMode:display, output:'html'});
    } catch(e){
      span.textContent = latex;
    }
  });
  // Juga jalankan auto-render untuk catch format lain ($$, \(...\))
  if(typeof renderMathInElement === 'function'){
    renderMathInElement(el, {
      delimiters:[
        {left:'$$', right:'$$', display:true},
        {left:'\\(', right:'\\)', display:false},
        {left:'\\[', right:'\\]', display:true},
        {left:'$', right:'$', display:false}
      ],
      throwOnError:false
    });
  }
}


async function analyzeImage(){
  if(!aivImageB64) return;
  const btn = document.getElementById('aiv-analyze-btn');
  btn.disabled = true;
  document.getElementById('aiv-loading-txt').textContent = aivMode==='soal'
    ? 'AI lagi baca soal lu... sabar ya 🧠'
    : 'AI lagi scan rangkaian lu... sebentar ⚡';
  document.getElementById('aiv-loading').classList.add('show');
  document.getElementById('aiv-result').classList.remove('show');

  try {
    const data = await callAI({
      model: AIV_MODEL,
      messages:[{
        role:'user',
        content:[
          {type:'image_url', image_url:{url:`data:${aivImageType};base64,${aivImageB64}`}},
          {type:'text', text: AIV_PROMPTS[aivMode]}
        ]
      }],
      max_tokens: 1500,
      temperature: 0.3
    });
    document.getElementById('aiv-loading').classList.remove('show');
    if(data.error) throw new Error(data.error.message);
    const reply = data.choices?.[0]?.message?.content || '(tidak ada respons)';
    const bubble = document.getElementById('aiv-result-bubble');
    bubble.innerHTML = parseAIText(reply);
    setTimeout(()=>renderAIVMath(bubble), 100);
    document.getElementById('aiv-result').classList.add('show');
    document.getElementById('aiv-result').scrollIntoView({behavior:'smooth',block:'start'});
  } catch(err){
    document.getElementById('aiv-loading').classList.remove('show');
    const bubble = document.getElementById('aiv-result-bubble');
    bubble.innerHTML = `<span style="color:var(--rose)">⚠️ Gagal analisis: ${err.message}<br><br>Pastikan koneksi internet aktif dan coba lagi.</span>`;
    document.getElementById('aiv-result').classList.add('show');
  }
  btn.disabled = false;
}

const KONV_DATA = [
  {
    id:'tegangan', label:'Tegangan', icon:'⚡',
    units:['V (Volt)','mV (Millivolt)','µV (Mikrovolt)','kV (Kilovolt)'],
    toBase:[1, 1e-3, 1e-6, 1e3], // ke Volt
  },
  {
    id:'arus', label:'Arus', icon:'🔌',
    units:['A (Ampere)','mA (Miliampere)','µA (Mikroampere)','kA (Kiloampere)'],
    toBase:[1, 1e-3, 1e-6, 1e3],
  },
  {
    id:'hambatan', label:'Hambatan', icon:'🔁',
    units:['Ω (Ohm)','kΩ (Kilohm)','MΩ (Megaohm)','mΩ (Miliohm)'],
    toBase:[1, 1e3, 1e6, 1e-3],
  },
  {
    id:'kapasitansi', label:'Kapasitansi', icon:'🔆',
    units:['F (Farad)','mF (Milifarad)','µF (Mikrofarad)','nF (Nanofarad)','pF (Pikofarad)'],
    toBase:[1, 1e-3, 1e-6, 1e-9, 1e-12],
  },
  {
    id:'induktansi', label:'Induktansi', icon:'〰️',
    units:['H (Henry)','mH (Milihenry)','µH (Mikrohenry)','nH (Nanohenry)'],
    toBase:[1, 1e-3, 1e-6, 1e-9],
  },
  {
    id:'daya', label:'Daya', icon:'💡',
    units:['W (Watt)','mW (Miliwatt)','kW (Kilowatt)','MW (Megawatt)','dBm'],
    toBase:[1, 1e-3, 1e3, 1e6, null], // dBm spesial
    special: {
      toBase(val, fromIdx){ // ke Watt
        if(fromIdx===4) return Math.pow(10,(val-30)/10);
        return val * [1,1e-3,1e3,1e6,1][fromIdx];
      },
      fromBase(watt, toIdx){ // dari Watt
        if(toIdx===4) return 10*Math.log10(watt)+30;
        return watt / [1,1e-3,1e3,1e6,1][toIdx];
      }
    }
  },
  {
    id:'frekuensi', label:'Frekuensi', icon:'📡',
    units:['Hz (Hertz)','kHz (Kiloherts)','MHz (Megahertz)','GHz (Gigahertz)'],
    toBase:[1, 1e3, 1e6, 1e9],
  },
  {
    id:'energi', label:'Energi', icon:'🔋',
    units:['J (Joule)','kJ (Kilojoule)','Wh (Watt-hour)','kWh (Kilowatt-hour)','mJ (Milijoule)'],
    toBase:[1, 1e3, 3600, 3.6e6, 1e-3],
  },
  {
    id:'db', label:'Desibel', icon:'🔊',
    units:['dB Tegangan (20log)','dB Daya (10log)'],
    custom: true,
  },
];

function initKonversi(){
  // render category buttons
  document.getElementById('konv-cats').innerHTML = KONV_DATA.map(k=>
    `<button class="konv-cat-btn" onclick="selectKonv(this,'${k.id}')">${k.icon} ${k.label}</button>`
  ).join('');

  // render all panels
  document.getElementById('konv-panels').innerHTML = KONV_DATA.map(k=>{
    if(k.custom && k.id==='db'){
      return `<div class="konv-card" id="konv-${k.id}">
        <div class="konv-title">${k.icon} Kalkulator Desibel</div>
        <div class="konv-row">
          <span class="konv-lbl">Nilai (dB)</span>
          <input class="konv-inp" id="db-val" type="number" placeholder="contoh: 20" oninput="calcDb()">
        </div>
        <div class="konv-row">
          <span class="konv-lbl">Tipe</span>
          <select class="cf-sel" id="db-type" onchange="calcDb()">
            <option value="v">Tegangan (20log) — V2/V1</option>
            <option value="p">Daya (10log) — P2/P1</option>
          </select>
        </div>
        <div style="margin-top:12px">
          <div class="konv-result-row"><span class="konv-result-val" id="db-ratio">—</span><span class="konv-result-lbl">Rasio</span></div>
          <div class="konv-result-row"><span class="konv-result-val" id="db-pct">—</span><span class="konv-result-lbl">Persentase</span></div>
          <div style="font-size:11px;color:var(--text3);margin-top:8px;font-family:var(--mono)">+3dB ≈ 2x daya · +6dB ≈ 2x tegangan · -3dB = setengah daya</div>
        </div>
      </div>`;
    }
    return `<div class="konv-card" id="konv-${k.id}">
      <div class="konv-title">${k.icon} Konversi ${k.label}</div>
      <div class="konv-row">
        <span class="konv-lbl">Nilai</span>
        <input class="konv-inp" id="kinp-${k.id}" type="number" placeholder="masukkan nilai..." oninput="doKonv('${k.id}')">
        <select class="cf-sel" style="width:auto;flex:0 0 auto;min-width:140px" id="kfrom-${k.id}" onchange="doKonv('${k.id}')">
          ${k.units.map((u,i)=>`<option value="${i}">${u}</option>`).join('')}
        </select>
      </div>
      <div class="konv-sep">↕</div>
      <div id="kresult-${k.id}">
        ${k.units.map((u,i)=>`
          <div class="konv-result-row">
            <span class="konv-result-val" id="kval-${k.id}-${i}">—</span>
            <span class="konv-result-lbl">${u.split('(')[0].trim()}</span>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');

  // select first by default
  selectKonv(document.querySelector('.konv-cat-btn'), 'tegangan');
}

function selectKonv(btn, id){
  document.querySelectorAll('.konv-cat-btn').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.konv-card').forEach(c=>c.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('konv-'+id).classList.add('on');
}

function doKonv(id){
  const k = KONV_DATA.find(x=>x.id===id);
  const val = parseFloat(document.getElementById(`kinp-${id}`).value);
  const fromIdx = parseInt(document.getElementById(`kfrom-${id}`).value);
  // BUGFIX #7: if input empty/invalid, clear all result fields (don't show stale values)
  if(isNaN(val)){
    k.units.forEach((_,i)=>{ const el=document.getElementById(`kval-${id}-${i}`); if(el) el.textContent='—'; });
    return;
  }

  let baseVal;
  if(k.special) baseVal = k.special.toBase(val, fromIdx);
  else baseVal = val * k.toBase[fromIdx];

  k.units.forEach((_,i)=>{
    const el = document.getElementById(`kval-${id}-${i}`);
    if(!el) return;
    let result;
    if(k.special) result = k.special.fromBase(baseVal, i);
    else result = baseVal / k.toBase[i];
    // format angka
    if(Math.abs(result) >= 1e9) el.textContent = (result/1e9).toPrecision(6) + ' G';
    else if(Math.abs(result) >= 1e6) el.textContent = (result/1e6).toPrecision(6) + ' M';
    else if(Math.abs(result) >= 1e3) el.textContent = (result/1e3).toPrecision(6) + ' k';
    else if(Math.abs(result) >= 0.01 || result===0) el.textContent = parseFloat(result.toPrecision(6)).toString();
    else el.textContent = result.toExponential(4);
  });
}

function calcDb(){
  const val = parseFloat(document.getElementById('db-val').value);
  const type = document.getElementById('db-type').value;
  if(isNaN(val)){ document.getElementById('db-ratio').textContent='—'; document.getElementById('db-pct').textContent='—'; return; }
  const ratio = type==='v' ? Math.pow(10, val/20) : Math.pow(10, val/10);
  document.getElementById('db-ratio').textContent = parseFloat(ratio.toPrecision(5)).toString() + 'x';
  document.getElementById('db-pct').textContent = parseFloat(((ratio-1)*100).toPrecision(4)).toString() + '%';
}

function retryQuiz(){ startAIQuiz(); }
function resetQuiz(){
  document.getElementById('quiz-score').classList.remove('show');
  document.getElementById('quiz-box').style.display='none';
  document.getElementById('quiz-nav').style.display='none';
  document.getElementById('quiz-start-btn').disabled = !qCat;
  document.getElementById('quiz-start-btn').textContent = qCat
    ? `⚡ Mulai — ${QUIZ_CATS[qCat].label}`
    : '⚡ Pilih Kategori dulu';
}

// ═══════════════════════════════════════════════════════════
// KALKULATOR LOGIC — TRUE CHAT BUBBLE
// ═══════════════════════════════════════════════════════════
function initCalc(){
  const area = document.getElementById('calc-msgarea');
  area.innerHTML = CALCS.map(c => {
    const fieldsHtml = c.fields.map(f => `
      <div class="cf-row">
        <span class="cf-lbl">${f.label}</span>
        ${f.type==='select'
          ? `<select class="cf-sel" id="${f.id}">${f.opts.map(o=>`<option>${o}</option>`).join('')}</select>`
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
            <button class="cc-calc-btn" onclick="doCalc('${c.id}')">⚡ Hitung</button>
          </div>
          <div class="cmsg-result-bubble" id="ccr-${c.id}">
            <div id="ccr-inner-${c.id}"></div>
          </div>
        </div>
      </div>`;
  }).join('');

  // render KaTeX formulas
  CALCS.forEach(c => {
    const el = document.getElementById(`ccf-${c.id}`);
    if (el && typeof katex !== 'undefined') {
      try { katex.render(c.formula, el, {throwOnError:false, displayMode:false}); }
      catch(e) { el.textContent = c.formula; }
    }
  });
}

function doCalc(id){
  const c = CALCS.find(x => x.id === id);
  const vals = c.fields.map(f => {
    const el = document.getElementById(f.id);
    return el.tagName === 'SELECT' ? el.value : el.value.trim();
  });
  const result = c.calc(vals);
  const bubble = document.getElementById(`ccr-${id}`);
  const inner  = document.getElementById(`ccr-inner-${id}`);
  bubble.className = 'cmsg-result-bubble show' + (result.err ? ' err' : '');

  if (result.err) {
    inner.innerHTML = `<div class="crb-err">⚠ ${result.err}</div>`;
  } else if (result.multi) {
    inner.innerHTML = `<div class="crb-multi">${result.multi.map(r=>`
      <div class="crb-row">
        <span class="crb-row-lbl">${r.label}</span>
        <span class="crb-row-val">${r.val}${r.unit?' <span style="font-size:11px;font-weight:400;color:var(--text3)">'+r.unit+'</span>':''}</span>
      </div>`).join('')}</div>`;
  } else {
    inner.innerHTML = `
      <div class="crb-label">${result.label}</div>
      <div class="crb-val">${result.val}</div>
      <div class="crb-unit">${result.unit}</div>`;
  }
  // scroll result into view
  setTimeout(() => bubble.scrollIntoView({behavior:'smooth', block:'nearest'}), 80);
}

// ═══════════════════════════════════════════════════════════
// CHAT LOGIC
// ═══════════════════════════════════════════════════════════
// Persistent history via localStorage — shared D & M panel (selalu sinkron)
const MAX_HIST         = 40;
const HIST_STORAGE_KEY = 'homepage_bot_history';

let chatHistory = []; // single source of truth
let busy = false, mOpen = false;

/* ── Bot online status — graceful 429 handling ── */
let isBotOnline = true;
let rateLimitTimer = null;

function setBotOffline(waitSec) {
  isBotOnline = false;
  // Update status indicators in both panels
  document.querySelectorAll('.cstatus').forEach(el => {
    el.innerHTML = '<span style="color:#ef4444">● offline</span> · sedang istirahat';
    el.classList.add('offline');
  });
  // Disable inputs & send buttons
  ['D','M'].forEach(v => {
    const inp = document.getElementById('inp'+v);
    const btn = document.getElementById('send'+v);
    if(inp) { inp.disabled = true; inp.placeholder = `Bot istirahat... (${waitSec}s)`; }
    if(btn) btn.disabled = true;
  });
  // Disable quick chips
  document.querySelectorAll('.qchip').forEach(c => { c.style.pointerEvents = 'none'; c.style.opacity = '0.4'; });
  // Auto-recovery timer
  if(rateLimitTimer) clearTimeout(rateLimitTimer);
  // Countdown display
  let remaining = waitSec;
  const countdown = setInterval(() => {
    remaining--;
    if(remaining <= 0) { clearInterval(countdown); return; }
    ['D','M'].forEach(v => {
      const inp = document.getElementById('inp'+v);
      if(inp) inp.placeholder = `Bot istirahat... (${remaining}s)`;
    });
  }, 1000);
  rateLimitTimer = setTimeout(() => {
    clearInterval(countdown);
    setBotOnline();
  }, waitSec * 1000);
}

function setBotOnline() {
  isBotOnline = true;
  if(rateLimitTimer) { clearTimeout(rateLimitTimer); rateLimitTimer = null; }
  // Restore status indicators
  document.querySelectorAll('.cstatus').forEach(el => {
    el.classList.remove('offline');
  });
  // Desktop status text
  const dStatus = document.querySelector('.chat-sidebar .cstatus');
  if(dStatus) dStatus.innerHTML = '● online';
  // Mobile status text
  const mStatus = document.querySelector('.chat-mobile .cstatus');
  if(mStatus) mStatus.innerHTML = '● online · siap bantu';
  // Re-enable inputs
  ['D','M'].forEach(v => {
    const inp = document.getElementById('inp'+v);
    const btn = document.getElementById('send'+v);
    if(inp) { inp.disabled = false; inp.placeholder = 'Tanya soal elektro...'; }
    if(btn) btn.disabled = false;
  });
  // Re-enable quick chips
  document.querySelectorAll('.qchip').forEach(c => { c.style.pointerEvents = ''; c.style.opacity = ''; });
  // Notify user
  botMsg('D','Bot udah online lagi! ⚡ Silakan lanjut tanya.');
  botMsg('M','Bot udah online lagi! ⚡ Silakan lanjut tanya.');
}

/* ── localStorage helpers ── */
function saveHistToStorage(){
  try {
    localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory));
  } catch(e){
    // storage penuh → buang 10 pesan terlama, retry
    if(chatHistory.length > 10) chatHistory.splice(0, 10);
    try { localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory)); } catch(e2){}
  }
}

function loadHistFromStorage(){
  try {
    const raw = localStorage.getItem(HIST_STORAGE_KEY);
    if(!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch(e){ return []; }
}

function pushHist(msg){
  chatHistory.push(msg);
  if(chatHistory.length > MAX_HIST) chatHistory.splice(0, 2); // buang 1 turn (user+bot)
  saveHistToStorage();
}

/* ── Reset seluruh riwayat ── */
function clearChatHistory(){
  if(!confirm('Reset semua riwayat obrolan dengan ElektroBot? Ini tidak bisa di-undo ya!')) return;
  chatHistory = [];
  localStorage.removeItem(HIST_STORAGE_KEY);
  ['D','M'].forEach(v => { const el = msgs(v); if(el) el.innerHTML = ''; });
  botMsg('D','Riwayat dihapus! ⚡ Gua ElektroBot, siap bantu lagi dari awal. Ada yang mau ditanya?');
  botMsg('M','Riwayat dihapus! ⚡ Gua ElektroBot, siap bantu lagi dari awal. Ada yang mau ditanya?');
}

/* ── Load & render ulang history ke DOM ── */
function loadChatHistory(){
  chatHistory = loadHistFromStorage();

  if(chatHistory.length === 0){
    // Belum ada riwayat → tampil welcome message
    botMsg('D','Yo! Gua ElektroBot ⚡\nMau nanya soal teknik elektro? Gas aja, gua siap bantu! 🔥');
    botMsg('M','Yo! Gua ElektroBot ⚡\nMau nanya soal teknik elektro? Gas aja, gua siap bantu! 🔥');
    return;
  }

  // Ada riwayat → render ke kedua panel
  // Tambah label "riwayat sebelumnya" sebagai pemisah visual
  ['D','M'].forEach(v => {
    const el = msgs(v);
    if(!el) return;
    const sep = document.createElement('div');
    sep.style.cssText = 'text-align:center;padding:8px 0 4px;font-size:10px;color:var(--text3);font-family:var(--mono);letter-spacing:.06em';
    sep.textContent = '— riwayat sebelumnya —';
    el.appendChild(sep);
  });

  chatHistory.forEach(msg => {
    if(msg.role === 'user'){
      userMsgRaw('D', escapeHTML(msg.content));
      userMsgRaw('M', escapeHTML(msg.content));
    } else if(msg.role === 'assistant'){
      botMsg('D', msg.content);
      botMsg('M', msg.content);
    }
  });

  // Tambah separator "sesi baru" setelah history lama
  ['D','M'].forEach(v => {
    const el = msgs(v);
    if(!el) return;
    const sep = document.createElement('div');
    sep.style.cssText = 'text-align:center;padding:8px 0 4px;font-size:10px;color:var(--accent);font-family:var(--mono);letter-spacing:.06em;opacity:.7';
    sep.textContent = '— sesi baru —';
    el.appendChild(sep);
    setTimeout(()=>{ el.scrollTop = el.scrollHeight; }, 120);
  });
}

function escapeHTML(str){
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── UI helpers ── */
function openM(){
  mOpen=true;
  document.body.classList.add('chat-open');
  document.getElementById('chatM').classList.add('open');
  document.getElementById('overlay').classList.add('on');
  // Sembunyikan tooltip selamanya setelah pertama kali dibuka
  const tip = document.getElementById('chatTooltip');
  if(tip){ tip.classList.add('hide'); localStorage.setItem('ed_tooltip_hidden','1'); }
  setTimeout(()=>document.getElementById('inpM').focus(),300);
}
function closeM(){
  mOpen=false;
  document.body.classList.remove('chat-open');
  document.getElementById('chatM').classList.remove('open');
  document.getElementById('overlay').classList.remove('on');
}

function qask(q){
  const mob=window.innerWidth<860;
  const id=mob?'inpM':'inpD';
  if(mob&&!mOpen)openM();
  setTimeout(()=>{document.getElementById(id).value=q;send(mob?'M':'D');},mob?300:0);
}

function ts(){return new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});}
function msgs(v){return document.getElementById('msgs'+v);}

function botMsg(v,txt,err=false){
  const el=msgs(v);
  if(!el) return;
  const d=document.createElement('div');
  d.className='cm b'+(err?' err':'');
  const bbl=document.createElement('div');
  bbl.className='bbl';
  if(err){
    bbl.style.whiteSpace='pre-wrap';
    bbl.textContent=txt;
  } else {
    // parseAIText returns a string, so we use innerHTML but parseAIText is now sanitized
    bbl.innerHTML=parseAIText(txt);
    setTimeout(()=>renderAIVMath(bbl), 80);
  }
  d.innerHTML=`<div class="ct">${ts()}</div>`;
  d.insertBefore(bbl,d.firstChild);
  el.appendChild(d);
  el.scrollTop=el.scrollHeight;
}



// userMsg untuk input baru (tidak di-escape, sudah plain text dari input field)
function userMsg(v,txt){
  const el=msgs(v);
  if(!el) return;
  const d=document.createElement('div');
  d.className='cm u';
  d.innerHTML=`<div class="bbl">${escapeHTML(txt)}</div><div class="ct">${ts()}</div>`;
  el.appendChild(d);el.scrollTop=el.scrollHeight;
}

// userMsgRaw untuk render history (txt sudah di-escape sebelumnya)
function userMsgRaw(v,txt){
  const el=msgs(v);
  if(!el) return;
  const d=document.createElement('div');
  d.className='cm u';
  d.innerHTML=`<div class="bbl">${txt}</div><div class="ct">${ts()}</div>`;
  el.appendChild(d);el.scrollTop=el.scrollHeight;
}

function showDots(v){
  const el=msgs(v);
  if(!el) return;
  const d=document.createElement('div');
  d.className='cm b';d.id='dots'+v;
  d.innerHTML='<div class="tbbl"><div class="tdots"><span></span><span></span><span></span></div></div>';
  el.appendChild(d);el.scrollTop=el.scrollHeight;
}
function hideDots(v){document.getElementById('dots'+v)?.remove();}
function rz(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,90)+'px';}
function ck(e,v){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(v);}}

async function send(v){
  const inp=document.getElementById('inp'+v),txt=inp.value.trim();
  if(!txt||busy)return;
  if(!isBotOnline) {
    botMsg(v, 'Bot masih istirahat, tunggu sebentar ya... ⏳');
    return;
  }
  window.speechSynthesis && window.speechSynthesis.cancel();
  busy=true;document.getElementById('send'+v).disabled=true;
  inp.value='';inp.style.height='38px';

  // Tampil di KEDUA panel sekaligus agar selalu sinkron
  userMsg('D', txt);
  userMsg('M', txt);

  pushHist({role:'user',content:txt});
  showDots('D'); showDots('M');

  try{
    const mc = document.getElementById('modelChoiceD') ? document.getElementById('modelChoiceD').value : 'llama-3.3-70b-versatile';
    // Sanitize history: remove 'file', 'image', or any extra properties before API call
    const cleanHistory = chatHistory.slice(-10).map(m => ({ role: m.role, content: m.content }));
    const data = await callAI({model: mc, messages:[{role:'system',content:SYS},...cleanHistory]});
    hideDots('D'); hideDots('M');
    if(data.error) throw new Error(data.error.message);
    const rep=data.choices?.[0]?.message?.content||'(tidak ada respons)';
    botMsg('D',rep);
    botMsg('M',rep);
    pushHist({role:'assistant',content:rep});
    speak(rep);
  }catch(err){
    hideDots('D'); hideDots('M');
    // ── Handle 429 Rate Limit gracefully ──
    if(err.isRateLimit) {
      const wait = err.waitSeconds || 20;
      const friendlyMsg = `Maaf ya, server sedang terlalu sibuk (kena limit) 😴\nBot sedang istirahat sebentar, coba lagi dalam ~${wait} detik.\nTenang, nanti otomatis online lagi kok! ⚡`;
      botMsg('D', friendlyMsg);
      botMsg('M', friendlyMsg);
      setBotOffline(wait);
    } else {
      botMsg('D','⚠ Error: '+err.message,true);
      botMsg('M','⚠ Error: '+err.message,true);
    }
  }
  busy=false;
  if(isBotOnline) { document.getElementById('send'+v).disabled=false; inp.focus(); }
}

// ═══════════════════════════════════════════════════════════
// SKEMA RANGKAIAN
// ═══════════════════════════════════════════════════════════

const SKEMA = [
  {
    id:'saklar-tunggal',
    title:'Saklar Tunggal — 1 Lampu',
    desc:'Satu saklar mengontrol satu lampu. Arus mengalir dari L → Saklar → Lampu → N.',
    toggles:[{id:'s1',label:'Saklar'}],
    render(states){
      const on = states.s1;
      const lampColor = on ? '#facc15' : '#d1d5db';
      const lampGlow  = on ? 'drop-shadow(0 0 6px #facc15)' : 'none';
      const wireColor = on ? '#22c55e' : '#9ca3af';
      const anim      = on ? 'class="wire-flow"' : '';
      const swY1=80, swY2=110;
      return `<svg viewBox="0 0 320 180" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- Labels -->
        <text x="12" y="62" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">N</text>
        <text x="12" y="102" font-size="13" font-weight="700" fill="#ef4444" font-family="monospace">L</text>
        <!-- Neutral wire N (blue) -->
        <line x1="30" y1="58" x2="260" y2="58" class="wire-n"/>
        <!-- Live wire L (red) to switch -->
        <line x1="30" y1="98" x2="140" y2="98" class="wire-l"/>
        <!-- Switch box -->
        <rect x="128" y="88" width="24" height="36" rx="4" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
        <!-- Switch contact -->
        <circle cx="140" cy="${swY1}" r="3" fill="#6b7280"/>
        <circle cx="140" cy="${swY2}" r="3" fill="#6b7280"/>
        ${on
          ? `<line x1="140" y1="${swY1}" x2="140" y2="${swY2}" stroke="#22c55e" stroke-width="2.5"/>`
          : `<line x1="140" y1="${swY1}" x2="152" y2="${swY2-8}" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>`}
        <!-- Wire from switch to lamp -->
        <polyline points="140,88 140,58 220,58" stroke="${wireColor}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- Wire from L below switch terminal to lamp N -->
        <polyline points="140,124 140,140 260,140 260,58" stroke="${wireColor}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- Lampu -->
        <circle cx="260" cy="100" r="22" fill="${lampColor}" stroke="#d97706" stroke-width="2" style="filter:${lampGlow}"/>
        <line x1="253" y1="93" x2="267" y2="107" stroke="#92400e" stroke-width="2"/>
        <line x1="267" y1="93" x2="253" y2="107" stroke="#92400e" stroke-width="2"/>
        ${on?`<circle cx="260" cy="100" r="28" fill="#facc1522" stroke="none"/>`:``}
        <!-- Ground line -->
        <line x1="260" y1="122" x2="260" y2="140" stroke="#9ca3af" stroke-width="2"/>
        <!-- Status text -->
        <text x="160" y="170" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'● LAMPU MENYALA':'○ LAMPU MATI'}</text>
      </svg>`;
    }
  },
  {
    id:'saklar-ganda',
    title:'Saklar Ganda — 2 Lampu Independen',
    desc:'Dua saklar mengontrol dua lampu secara terpisah. Masing-masing independen.',
    toggles:[{id:'sa',label:'Saklar A'},{id:'sb',label:'Saklar B'}],
    render(states){
      const onA=states.sa, onB=states.sb;
      const ca=onA?'#facc15':'#d1d5db', cb=onB?'#facc15':'#d1d5db';
      const ga=onA?'drop-shadow(0 0 6px #facc15)':'none';
      const gb=onB?'drop-shadow(0 0 6px #facc15)':'none';
      const wa=onA?'#22c55e':'#9ca3af', wb=onB?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 340 190" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <text x="12" y="55" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">N</text>
        <text x="12" y="95" font-size="13" font-weight="700" fill="#ef4444" font-family="monospace">L</text>
        <!-- N bus -->
        <line x1="30" y1="50" x2="310" y2="50" class="wire-n"/>
        <!-- L bus -->
        <line x1="30" y1="90" x2="80" y2="90" class="wire-l"/>
        <line x1="80" y1="90" x2="200" y2="90" class="wire-l"/>
        <!-- Switch A -->
        <rect x="70" y="80" width="20" height="30" rx="3" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
        <circle cx="80" cy="84" r="2.5" fill="#6b7280"/>
        <circle cx="80" cy="106" r="2.5" fill="#6b7280"/>
        ${onA?`<line x1="80" y1="84" x2="80" y2="106" stroke="#22c55e" stroke-width="2.5"/>`:`<line x1="80" y1="84" x2="90" y2="100" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>`}
        <!-- Lamp A wire -->
        <polyline points="80,80 80,50 180,50" stroke="${wa}" stroke-width="3" fill="none" ${onA?'class="wire-flow"':''}/>
        <polyline points="80,110 80,150 180,150 180,50" stroke="${wa}" stroke-width="3" fill="none" ${onA?'class="wire-flow"':''}/>
        <!-- Switch B -->
        <rect x="190" y="80" width="20" height="30" rx="3" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
        <circle cx="200" cy="84" r="2.5" fill="#6b7280"/>
        <circle cx="200" cy="106" r="2.5" fill="#6b7280"/>
        ${onB?`<line x1="200" y1="84" x2="200" y2="106" stroke="#22c55e" stroke-width="2.5"/>`:`<line x1="200" y1="84" x2="210" y2="100" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>`}
        <!-- Lamp B wire -->
        <polyline points="200,80 200,50 295,50" stroke="${wb}" stroke-width="3" fill="none" ${onB?'class="wire-flow"':''}/>
        <polyline points="200,110 200,150 295,150 295,50" stroke="${wb}" stroke-width="3" fill="none" ${onB?'class="wire-flow"':''}/>
        <!-- Lamp A -->
        <circle cx="180" cy="95" r="18" fill="${ca}" stroke="#d97706" stroke-width="2" style="filter:${ga}"/>
        <line x1="174" y1="89" x2="186" y2="101" stroke="#92400e" stroke-width="1.5"/>
        <line x1="186" y1="89" x2="174" y2="101" stroke="#92400e" stroke-width="1.5"/>
        ${onA?`<circle cx="180" cy="95" r="24" fill="#facc1522"/>`:``}
        <!-- Lamp B -->
        <circle cx="295" cy="95" r="18" fill="${cb}" stroke="#d97706" stroke-width="2" style="filter:${gb}"/>
        <line x1="289" y1="89" x2="301" y2="101" stroke="#92400e" stroke-width="1.5"/>
        <line x1="301" y1="89" x2="289" y2="101" stroke="#92400e" stroke-width="1.5"/>
        ${onB?`<circle cx="295" cy="95" r="24" fill="#facc1522"/>`:``}
        <!-- Labels -->
        <text x="180" y="122" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">Lampu A</text>
        <text x="295" y="122" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">Lampu B</text>
        <text x="80" y="175" font-size="9" fill="${onA?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${onA?'● ON':'○ OFF'}</text>
        <text x="200" y="175" font-size="9" fill="${onB?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${onB?'● ON':'○ OFF'}</text>
      </svg>`;
    }
  },
  {
    id:'seri',
    title:'Rangkaian Seri — Resistor',
    desc:'Resistor terhubung ujung-ke-ujung. Arus sama di semua komponen, tegangan terbagi.',
    toggles:[{id:'sw',label:'Hubungkan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      const r1v=on?'4.0V':'—', r2v=on?'8.0V':'—';
      return `<svg viewBox="0 0 340 160" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- Battery -->
        <rect x="20" y="55" width="16" height="50" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="22" y1="60" x2="34" y2="60" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="68" x2="31" y2="68" stroke="#374151" stroke-width="1.5"/>
        <line x1="22" y1="76" x2="34" y2="76" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="84" x2="31" y2="84" stroke="#374151" stroke-width="1.5"/>
        <text x="28" y="118" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">12V</text>
        <!-- top wire -->
        <polyline points="36,62 36,38 300,38 300,80" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- R1 -->
        <rect x="100" y="70" width="60" height="24" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="130" y="86" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R1 20Ω</text>
        <!-- R2 -->
        <rect x="200" y="70" width="60" height="24" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="230" y="86" font-size="11" font-weight="700" fill="#5b21b6" text-anchor="middle" font-family="monospace">R2 40Ω</text>
        <!-- wire between -->
        <line x1="36" y1="80" x2="100" y2="80" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="160" y1="80" x2="200" y2="80" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <!-- bottom wire -->
        <polyline points="260,80 300,80 300,120 36,120 36,100" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- voltage labels -->
        <text x="130" y="110" font-size="10" fill="${on?'#d97706':'#9ca3af'}" text-anchor="middle" font-family="monospace">${r1v}</text>
        <text x="230" y="110" font-size="10" fill="${on?'#7c3aed':'#9ca3af'}" text-anchor="middle" font-family="monospace">${r2v}</text>
        <!-- I label -->
        <text x="175" y="32" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'I = 0.2A →':''}</text>
        <text x="175" y="150" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Rtotal = 60Ω':'Hubungkan untuk mengalirkan arus'}</text>
      </svg>`;
    }
  },
  {
    id:'paralel',
    title:'Rangkaian Paralel — Resistor',
    desc:'Resistor terhubung ujung bersama. Tegangan sama, arus terbagi.',
    toggles:[{id:'sw',label:'Hubungkan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 340 175" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- Battery -->
        <rect x="20" y="62" width="16" height="50" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="22" y1="67" x2="34" y2="67" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="75" x2="31" y2="75" stroke="#374151" stroke-width="1.5"/>
        <line x1="22" y1="83" x2="34" y2="83" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="91" x2="31" y2="91" stroke="#374151" stroke-width="1.5"/>
        <text x="28" y="122" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">12V</text>
        <!-- bus top -->
        <polyline points="36,68 36,38 280,38" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- bus bottom -->
        <polyline points="36,112 36,138 280,138" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- R1 branch -->
        <line x1="120" y1="38" x2="120" y2="65" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <rect x="103" y="65" width="34" height="44" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="120" y="91" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R1</text>
        <text x="120" y="103" font-size="9" fill="#92400e" text-anchor="middle" font-family="monospace">30Ω</text>
        <line x1="120" y1="109" x2="120" y2="138" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <!-- R2 branch -->
        <line x1="200" y1="38" x2="200" y2="65" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <rect x="183" y="65" width="34" height="44" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="200" y="91" font-size="10" font-weight="700" fill="#5b21b6" text-anchor="middle" font-family="monospace">R2</text>
        <text x="200" y="103" font-size="9" fill="#5b21b6" text-anchor="middle" font-family="monospace">60Ω</text>
        <line x1="200" y1="109" x2="200" y2="138" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <!-- current labels -->
        ${on?`<text x="120" y="160" font-size="9" fill="#d97706" text-anchor="middle" font-family="monospace">I1=0.4A</text>
        <text x="200" y="160" font-size="9" fill="#7c3aed" text-anchor="middle" font-family="monospace">I2=0.2A</text>
        <text x="160" y="172" font-size="9" fill="#22c55e" text-anchor="middle" font-family="monospace">Itotal=0.6A | Req=20Ω</text>`:
        `<text x="160" y="165" font-size="10" fill="#9ca3af" text-anchor="middle" font-family="monospace">Hubungkan untuk melihat arus</text>`}
      </svg>`;
    }
  },
  {
    id:'rc-filter',
    title:'Filter RC Low-Pass',
    desc:'Kapasitor + Resistor. Frekuensi rendah diloloskan, frekuensi tinggi diblokir.',
    toggles:[{id:'freq',label:'Frekuensi Tinggi'}],
    render(states){
      const hiFreq=states.freq;
      const outColor=hiFreq?'#ef4444':'#22c55e';
      const outLabel=hiFreq?'Sinyal Terblokir':'Sinyal Lewat';
      const capColor=hiFreq?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 340 165" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- Input source -->
        <circle cx="38" cy="88" r="22" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <text x="38" y="84" font-size="8" fill="#15803d" text-anchor="middle" font-family="monospace">Vin</text>
        <text x="38" y="96" font-size="8" fill="#15803d" text-anchor="middle" font-family="monospace">~AC</text>
        <!-- top wire input -->
        <line x1="60" y1="76" x2="110" y2="76" stroke="#22c55e" stroke-width="3" class="wire-flow"/>
        <!-- Resistor R -->
        <rect x="110" y="66" width="60" height="22" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="140" y="81" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R  1kΩ</text>
        <!-- wire after R -->
        <line x1="170" y1="76" x2="220" y2="76" stroke="${outColor}" stroke-width="3" ${!hiFreq?'class="wire-flow"':''}/>
        <!-- Capacitor C (vertical) -->
        <line x1="220" y1="60" x2="220" y2="72" stroke="${capColor}" stroke-width="2.5"/>
        <line x1="208" y1="72" x2="232" y2="72" stroke="${capColor}" stroke-width="3"/>
        <line x1="208" y1="80" x2="232" y2="80" stroke="${capColor}" stroke-width="3"/>
        <line x1="220" y1="80" x2="220" y2="112" stroke="${capColor}" stroke-width="2.5"/>
        <text x="238" y="79" font-size="9" fill="#0891b2" font-family="monospace">C</text>
        <text x="238" y="89" font-size="9" fill="#0891b2" font-family="monospace">10μF</text>
        <!-- Output wire -->
        <line x1="220" y1="76" x2="290" y2="76" stroke="${outColor}" stroke-width="3" ${!hiFreq?'class="wire-flow"':''}/>
        <!-- Output terminal -->
        <circle cx="290" cy="76" r="5" fill="${outColor}"/>
        <text x="290" y="65" font-size="9" fill="${outColor}" text-anchor="middle" font-family="monospace">Vout</text>
        <!-- ground bottom wire -->
        <polyline points="60,100 60,112 290,112 290,81" stroke="#9ca3af" stroke-width="2" fill="none"/>
        <line x1="290" y1="112" x2="290" y2="130"/>
        <line x1="278" y1="130" x2="302" y2="130" stroke="#9ca3af" stroke-width="2"/>
        <line x1="283" y1="135" x2="297" y2="135" stroke="#9ca3af" stroke-width="2"/>
        <line x1="287" y1="140" x2="293" y2="140" stroke="#9ca3af" stroke-width="2"/>
        <!-- status -->
        <text x="170" y="155" font-size="10" fill="${outColor}" text-anchor="middle" font-family="monospace">● ${outLabel}</text>
        <text x="170" y="140" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">${hiFreq?'fc=159Hz — diatas cutoff':'fc=159Hz — dibawah cutoff'}</text>
      </svg>`;
    }
  },
  {
    id:'transistor-switch',
    title:'Transistor BJT sebagai Saklar',
    desc:'Arus kecil di Base (IB) mengontrol arus besar di Collector. ON/OFF digital.',
    toggles:[{id:'ib',label:'Beri sinyal Base'}],
    render(states){
      const on=states.ib;
      const lampC=on?'#facc15':'#d1d5db';
      const lampG=on?'drop-shadow(0 0 6px #facc15)':'none';
      const icC=on?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 300 190" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- VCC rail -->
        <line x1="60" y1="20" x2="240" y2="20" stroke="#ef4444" stroke-width="2.5"/>
        <text x="20" y="25" font-size="10" font-weight="700" fill="#ef4444" font-family="monospace">VCC</text>
        <!-- Lamp (load) -->
        <circle cx="180" cy="55" r="18" fill="${lampC}" stroke="#d97706" stroke-width="2" style="filter:${lampG}"/>
        <line x1="174" y1="49" x2="186" y2="61" stroke="#92400e" stroke-width="1.5"/>
        <line x1="186" y1="49" x2="174" y2="61" stroke="#92400e" stroke-width="1.5"/>
        ${on?`<circle cx="180" cy="55" r="24" fill="#facc1522"/>`:''}
        <line x1="180" y1="20" x2="180" y2="37" stroke="${icC}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="180" y1="73" x2="180" y2="100" stroke="${icC}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <!-- Transistor NPN body -->
        <circle cx="180" cy="115" r="20" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        <text x="180" y="112" font-size="9" fill="#334155" text-anchor="middle" font-family="monospace">NPN</text>
        <text x="180" y="123" font-size="8" fill="#64748b" text-anchor="middle" font-family="monospace">BJT</text>
        <!-- Base input wire -->
        <line x1="40" y1="115" x2="160" y2="115" stroke="${on?'#f59e0b':'#9ca3af'}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <text x="30" y="112" font-size="9" font-weight="700" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">B</text>
        <text x="30" y="122" font-size="8" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">${on?'0.7V':'0V'}</text>
        <!-- Emitter to GND -->
        <line x1="180" y1="135" x2="180" y2="160" stroke="${icC}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="165" y1="160" x2="195" y2="160" stroke="#6b7280" stroke-width="2.5"/>
        <line x1="170" y1="165" x2="190" y2="165" stroke="#6b7280" stroke-width="2"/>
        <line x1="175" y1="170" x2="185" y2="170" stroke="#6b7280" stroke-width="1.5"/>
        <text x="210" y="165" font-size="10" fill="#6b7280" font-family="monospace">GND</text>
        <!-- Rb resistor -->
        <rect x="68" y="107" width="34" height="18" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="85" y="119" font-size="8" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">Rb 10k</text>
        <!-- status -->
        <text x="150" y="185" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'● TRANSISTOR ON — Lampu Nyala':'○ TRANSISTOR OFF — Lampu Mati'}</text>
      </svg>`;
    }
  },
  {
    id:'led-resistor',
    title:'LED + Resistor Pembatas Arus',
    desc:'Resistor seri wajib untuk melindungi LED dari arus berlebih.',
    toggles:[{id:'sw',label:'Nyalakan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      const ledC=on?'#4ade80':'#d1d5db';
      const ledG=on?'drop-shadow(0 0 8px #4ade80)':'none';
      return `<svg viewBox="0 0 320 140" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- Battery -->
        <rect x="18" y="45" width="16" height="50" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="20" y1="50" x2="32" y2="50" stroke="#374151" stroke-width="2.5"/>
        <line x1="23" y1="58" x2="29" y2="58" stroke="#374151" stroke-width="1.5"/>
        <line x1="20" y1="66" x2="32" y2="66" stroke="#374151" stroke-width="2.5"/>
        <text x="26" y="108" font-size="8" fill="#6b7280" text-anchor="middle" font-family="monospace">5V</text>
        <!-- top wire -->
        <line x1="34" y1="52" x2="34" y2="35" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="34" y1="35" x2="260" y2="35" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <!-- Resistor -->
        <rect x="80" y="25" width="60" height="20" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="110" y="39" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R  220Ω</text>
        <!-- LED symbol -->
        <!-- anode wire -->
        <line x1="140" y1="35" x2="190" y2="35" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <!-- LED triangle -->
        <polygon points="190,22 190,48 212,35" fill="${ledC}" stroke="#16a34a" stroke-width="2" style="filter:${ledG}"/>
        <!-- cathode bar -->
        <line x1="212" y1="22" x2="212" y2="48" stroke="#16a34a" stroke-width="3"/>
        <!-- light rays -->
        ${on?`<line x1="218" y1="25" x2="226" y2="18" stroke="#4ade80" stroke-width="1.5"/>
        <line x1="220" y1="32" x2="230" y2="28" stroke="#4ade80" stroke-width="1.5"/>
        <line x1="218" y1="44" x2="226" y2="50" stroke="#4ade80" stroke-width="1.5"/>`:''}
        <!-- cathode wire down -->
        <polyline points="212,35 260,35 260,95 34,95 34,92" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- labels -->
        <text x="110" y="120" font-size="9" fill="${on?'#d97706':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Vr=3.3V':'—'}</text>
        <text x="200" y="65" font-size="9" fill="${on?'#16a34a':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Vf=1.7V':'—'}</text>
        <text x="160" y="120" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'I = 15mA ● LED MENYALA':'○ LED MATI'}</text>
      </svg>`;
    }
  },
  {
    id:'voltage-divider',
    title:'Pembagi Tegangan',
    desc:'Dua resistor seri membagi tegangan input. Vout = Vin × R2/(R1+R2).',
    toggles:[{id:'sw',label:'Hubungkan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 280 175" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <!-- Vin label -->
        <text x="14" y="45" font-size="10" fill="#ef4444" font-weight="700" font-family="monospace">Vin</text>
        <text x="14" y="56" font-size="9" fill="#ef4444" font-family="monospace">12V</text>
        <!-- top wire -->
        <polyline points="40,48 40,30 140,30" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <!-- R1 -->
        <rect x="123" y="30" width="34" height="50" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="140" y="60" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R1</text>
        <text x="140" y="72" font-size="9" fill="#92400e" text-anchor="middle" font-family="monospace">10k</text>
        <!-- midpoint wire + Vout -->
        <line x1="140" y1="80" x2="140" y2="95" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="140" y1="95" x2="220" y2="95" stroke="${on?'#f59e0b':'#9ca3af'}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <circle cx="220" cy="95" r="5" fill="${on?'#f59e0b':'#9ca3af'}"/>
        <text x="230" y="92" font-size="9" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">Vout</text>
        <text x="230" y="104" font-size="10" font-weight="700" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">${on?'4V':'—'}</text>
        <!-- R2 -->
        <rect x="123" y="95" width="34" height="50" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="140" y="124" font-size="10" font-weight="700" fill="#5b21b6" text-anchor="middle" font-family="monospace">R2</text>
        <text x="140" y="136" font-size="9" fill="#5b21b6" text-anchor="middle" font-family="monospace">5k</text>
        <!-- bottom to GND -->
        <polyline points="140,145 140,155 40,155 40,48" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <line x1="125" y1="155" x2="155" y2="155" stroke="#6b7280" stroke-width="2"/>
        <line x1="130" y1="160" x2="150" y2="160" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="134" y1="165" x2="146" y2="165" stroke="#6b7280" stroke-width="1"/>
        <text x="14" y="158" font-size="10" fill="#6b7280" font-family="monospace">GND</text>
        <!-- formula -->
        <text x="140" y="175" font-size="9" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Vout=Vin×R2/(R1+R2)':'Hubungkan untuk lihat tegangan'}</text>
      </svg>`;
    }
  },
];

// state per skema
const skemaStates = {};

function initSkema(){
  const list = document.getElementById('skema-list');
  list.innerHTML = SKEMA.map(sk => {
    // init state
    skemaStates[sk.id] = {};
    sk.toggles.forEach(t => { skemaStates[sk.id][t.id] = false; });

    const togglesHtml = sk.toggles.map(t => `
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
        <span class="sk-toggle-lbl">${t.label}</span>
        <label class="sk-toggle">
          <input type="checkbox" onchange="toggleSkema('${sk.id}','${t.id}',this.checked)">
          <span class="sk-slider"></span>
        </label>
      </div>`).join('');

    return `
      <div class="sk-card">
        <div class="sk-title">${sk.title}</div>
        <div class="sk-desc">${sk.desc}</div>
        <div id="svg-${sk.id}">${sk.render(skemaStates[sk.id])}</div>
        <div class="sk-info">
          <div class="sk-status">
            <span class="sk-status-dot" id="dot-${sk.id}"></span>
            <span class="sk-status-txt" id="stxt-${sk.id}">OFF / Terbuka</span>
          </div>
          <div class="sk-toggle-wrap">${togglesHtml}</div>
        </div>
      </div>`;
  }).join('');
}

function toggleSkema(skId, tId, val){
  skemaStates[skId][tId] = val;
  const sk = SKEMA.find(s => s.id === skId);
  document.getElementById(`svg-${skId}`).innerHTML = sk.render(skemaStates[skId]);
  const anyOn = Object.values(skemaStates[skId]).some(v=>v);
  const dot = document.getElementById(`dot-${skId}`);
  const txt = document.getElementById(`stxt-${skId}`);
  dot.className = 'sk-status-dot' + (anyOn?' on':'');
  txt.textContent = anyOn ? 'ON / Aktif' : 'OFF / Terbuka';
  txt.style.color = anyOn ? 'var(--green)' : '';
}

// ═══════════════════════════════════════════════════════════
// #37 — TIMELINE SEJARAH ELEKTRO
// ═══════════════════════════════════════════════════════════


const TL_ERAS = {
  semua: {label:'Semua', color:'var(--accent)'},
  kuno: {label:'Pra-1800', color:'var(--amber)'},
  modern: {label:'1800–1945', color:'var(--green)'},
  digital: {label:'1945–1990', color:'var(--purple)'},
  kontemporer: {label:'1990–Kini', color:'var(--teal)'},
};

let tlEra = 'semua';

function initTimeline(){
  // render era filter buttons
  document.getElementById('tl-eras').innerHTML = Object.entries(TL_ERAS).map(([k,v])=>
    `<button class="tl-era-btn${k===tlEra?' on':''}" onclick="setTlEra(this,'${k}')" style="${k===tlEra?`background:${v.color}22;border-color:${v.color}66;color:${v.color}`:''}">
      ${v.label}
    </button>`
  ).join('');
  renderTimeline();
}

function setTlEra(btn, era){
  tlEra = era;
  document.querySelectorAll('.tl-era-btn').forEach((b,i)=>{
    b.classList.remove('on');
    b.style.cssText='';
  });
  btn.classList.add('on');
  const c = TL_ERAS[era].color;
  btn.style.cssText = `background:${c}22;border-color:${c}66;color:${c}`;
  renderTimeline();
}

function renderTimeline(){
  const data = tlEra==='semua' ? TIMELINE : TIMELINE.filter(e=>e.era===tlEra);
  document.getElementById('tl-list').innerHTML = data.map((e,i)=>`
    <div class="tl-item" id="tli${i}" style="animation-delay:${i*0.04}s">
      <div class="tl-card" onclick="togTl(${i})">
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
}

function togTl(i){
  const item = document.getElementById(`tli${i}`);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.tl-item.open').forEach(x=>x.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
}

// ═══════════════════════════════════════════════════════════
// #49 — EXPORT KAMUS KE PDF
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// #49 — EXPORT KAMUS KE PDF
// ═══════════════════════════════════════════════════════════
function cleanLatexForPDF(str) {
  if(!str) return "";
  let clean = str.replace(/\$\$|\\\(|\\\)|\\\[|\\\]/g, ""); // remove delimiters
  clean = clean.replace(/\\frac\{(.*?)\}\{(.*?)\}/g, "($1)/($2)"); // split fraction
  clean = clean.replace(/\\cdot/g, " * ");
  clean = clean.replace(/\\times/g, " x ");
  clean = clean.replace(/\\sqrt\{(.*?)\}/g, "sqrt($1)");
  clean = clean.replace(/\\Rightarrow/g, " => ");
  clean = clean.replace(/\\rightarrow/g, " -> ");
  clean = clean.replace(/\\to/g, " -> ");
  clean = clean.replace(/\\text\{(.*?)\}/g, "$1");
  clean = clean.replace(/\\;/g, " ");
  clean = clean.replace(/\\,/g, " ");
  clean = clean.replace(/\\rho/g, "rho");
  clean = clean.replace(/\\varepsilon/g, "EMF");
  clean = clean.replace(/\\pi/g, "pi");
  clean = clean.replace(/\\omega/g, "w");
  clean = clean.replace(/\\mu_0/g, "u0");
  clean = clean.replace(/\\mu_r/g, "ur");
  clean = clean.replace(/\\mu/g, "u");
  clean = clean.replace(/\\theta/g, "theta");
  clean = clean.replace(/\\Phi_B/g, "Phi");
  clean = clean.replace(/\\sum/g, "SUM");
  clean = clean.replace(/\\infty/g, "inf");
  return clean.trim();
}

function exportKamusPDF(){
  const btn = document.querySelector('.pdf-btn');
  if(!btn) return;
  
  const origText = btn.innerHTML;
  btn.innerHTML = '⏳ Menyiapkan PDF...';
  btn.disabled = true;

  // 1. Catat state kartu yang emang udah kebuka biar nanti ga ketutup pas cleanup
  const previouslyOpen = [];
  document.querySelectorAll('.card.open').forEach(c => previouslyOpen.push(c));

  // 2. Buka semua kartu biar konten detail & rumus ke-print
  const cardsToOpen = document.querySelectorAll('.card:not(.open)');
  cardsToOpen.forEach(c => c.classList.add('open'));
  
  // 3. Setup cleanup function
  const cleanup = () => {
    // Kembalikan kartu yang tadi ditutup ke state semula
    cardsToOpen.forEach(c => c.classList.remove('open'));
    // Pastikan yang emang kebuka tetep kebuka
    previouslyOpen.forEach(c => c.classList.add('open'));
    
    btn.innerHTML = origText;
    btn.disabled = false;
    window.removeEventListener('afterprint', cleanup);
  };

  // Listen untuk event setelah print dialog ditutup (OK atau Cancel)
  window.addEventListener('afterprint', cleanup);

  // 4. Tunggu sebentar biar KaTeX beres ngerender semua rumus yang baru kebuka
  setTimeout(()=>{
    try {
      window.print();
      // Untuk browser yang tidak support afterprint, panggil cleanup manual setelah jeda lama
      // tapi mayoritas browser modern sudah support afterprint.
      setTimeout(cleanup, 2000); 
    } catch(e) {
      console.error(e);
      alert('Gagal generate PDF: ' + e.message);
      cleanup();
    }
  }, 1200);
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
window.onload=()=>{
  initTheme();
  // prefetch quote PERTAMA KALI — sebelum user sempat buka onboarding
  prefetchQuote();
  document.getElementById('totalCount').textContent=KAMUS.length;
  renderChips();
  renderGrid(KAMUS);
  initQuiz();
  initCalc();
  initSkema();
  initKonversi();
  initResistor();
  initTimeline();
  initProjects();
  initOnboarding();
  loadChatHistory();
  // Sembunyikan tooltip kalau user sudah pernah buka chat sebelumnya
  if(localStorage.getItem('ed_tooltip_hidden')){
    const tip = document.getElementById('chatTooltip');
    if(tip) tip.classList.add('hide');
  }
  // #22: set initial page as visible after paint
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    document.getElementById('page-kamus').classList.add('visible');
  }));
};

// ═══════════════════════════════════════════════════════════
// SERVICE WORKER REGISTRATION (PWA)
// ═══════════════════════════════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('[PWA] SW registered:', reg.scope))
      .catch(err => console.warn('[PWA] SW failed:', err));
  });
}

// ═══════════════════════════════════════════════════════════
// #50 — LOGIKA SIMULATOR
// ═══════════════════════════════════════════════════════════
let swA = 0, swB = 0;
function toggleSwitch(id) {
  if(id === 'A') { 
    swA = swA ? 0 : 1; 
    document.getElementById('swA').classList.toggle('on'); 
  }
  if(id === 'B') { 
    swB = swB ? 0 : 1; 
    document.getElementById('swB').classList.toggle('on'); 
  }
  updateLogic();
}

function updateLogic() {
  const gate = document.getElementById('gateSelect').value;
  let out = 0;

  switch(gate) {
    case 'AND':  out = (swA && swB) ? 1 : 0; break;
    case 'OR':   out = (swA || swB) ? 1 : 0; break;
    case 'NOT':  out = (!swA) ? 1 : 0; break;
    case 'NAND': out = !(swA && swB) ? 1 : 0; break;
    case 'NOR':  out = !(swA || swB) ? 1 : 0; break;
    case 'XOR':  out = (swA !== swB) ? 1 : 0; break;
    case 'XNOR': out = (swA === swB) ? 1 : 0; break;
  }

  const led = document.getElementById('ledOut');
  const ledVal = document.getElementById('ledVal');
  if(out) {
    led.classList.add('on');
    ledVal.innerText = '1';
  } else {
    led.classList.remove('on');
    ledVal.innerText = '0';
  }
  
  renderTruthTable(gate, out);
}

function renderTruthTable(gate, out) {
  const tbody = document.getElementById('tt-body');
  const thead = document.getElementById('tt-head');
  
  if(gate === 'NOT') {
    thead.innerHTML = `<tr><th>A</th><th>Output (Y)</th></tr>`;
    tbody.innerHTML = `
      <tr class="tt-row ${swA===0?'active':''}"><td>0</td><td>1</td></tr>
      <tr class="tt-row ${swA===1?'active':''}"><td>1</td><td>0</td></tr>
    `;
    document.getElementById('row-swB').style.display='none';
  } else {
    document.getElementById('row-swB').style.display='flex';
    thead.innerHTML = `<tr><th>A</th><th>B</th><th>Output (Y)</th></tr>`;
    
    // Arrays of outputs for truth table [00, 01, 10, 11]
    const tt = {
      'AND':  [0,0,0,1],
      'OR':   [0,1,1,1],
      'NAND': [1,1,1,0],
      'NOR':  [1,0,0,0],
      'XOR':  [0,1,1,0],
      'XNOR': [1,0,0,1]
    };
    const r = tt[gate];
    const currIdx = (swA<<1) | swB; // e.g. A=1, B=0 -> 10 binary -> index 2
    
    tbody.innerHTML = `
      <tr class="tt-row ${currIdx===0?'active':''}"><td>0</td><td>0</td><td>${r[0]}</td></tr>
      <tr class="tt-row ${currIdx===1?'active':''}"><td>0</td><td>1</td><td>${r[1]}</td></tr>
      <tr class="tt-row ${currIdx===2?'active':''}"><td>1</td><td>0</td><td>${r[2]}</td></tr>
      <tr class="tt-row ${currIdx===3?'active':''}"><td>1</td><td>1</td><td>${r[3]}</td></tr>
    `;
  }
}
// Init Logic
updateLogic();

// Simpan install prompt — tampilkan tombol install kalau browser support
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'flex';
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'none';
});
function installPWA(){
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(()=>{ deferredInstallPrompt = null; });
}

// ═══════════════════════════════════════════════════════════
// #51 — PROJECT HUB LOGIC
// ═══════════════════════════════════════════════════════════
function initProjects() {
  // Static list is removed in favor of AI Generator
  // We can keep this empty or use it to load previous history
}

let currentAIProject = null;

async function generateAIProject() {
  const input = document.getElementById('prj-idea-input');
  const idea = input.value.trim();

  // Friendly empty-input validation
  if (!idea) {
    showPrjToast("Eits, jangan dikosongin dong! 😅 Tulis dulu proyek Arduino apa yang mau kamu buat.", 'warn');
    input.focus();
    return;
  }

  const btn     = document.getElementById('prj-gen-btn');
  const loading = document.getElementById('prj-loading');
  const origBtnLabel = btn.innerHTML;

  btn.disabled  = true;
  btn.innerHTML = '🛠️ Sabar ya, lagi ngerakit kabel virtual buat kamu...';
  loading.classList.remove('hide');
  
  try {
    const data = await window.ElektroAPI.generateProject(idea);

    // 1. Retrieve raw content
    let rawContent = data.result;

    // 2. Strip markdown blocks (just in case)
    let cleanContent = rawContent.replace(/```json/ig, '').replace(/```/g, '').trim();

    try {
        const prj = JSON.parse(cleanContent);

        // Add dynamic ID
        prj.id = 'ai-' + (prj.title || 'proyek').toLowerCase().replace(/\s+/g, '-').slice(0, 20);

        // Normalize field names: support both old and new API schema
        if (!prj.bom && prj.components) prj.bom = prj.components;
        if (!prj.wiring_guide && prj.wiring_table) prj.wiring_guide = prj.wiring_table;
        if (!prj.cpp_code && prj.code) {
          prj.cpp_code = Array.isArray(prj.code) ? prj.code.join('\n') : String(prj.code || '');
        }
        if (!prj.difficulty) prj.difficulty = 'Menengah';

        currentAIProject = prj;
        renderProjectDetail(prj);

    } catch (parseError) {
        console.error("JSON Parsing Error:", parseError);
        console.log("Raw Content that failed:", cleanContent);
        showPrjToast("Aduh, ElektroBot lagi agak pusing! 😵‍💫 Gagal nge-generate. Coba kasih instruksi yang lebih simpel atau klik ulang.", 'error');
    }

  } catch (err) {
    console.error("Generate Error:", err);

    // Read structured status from backend response if available
    const status = err?.status || (err?.message || '').includes('429') ? 'limit_reached' : '';

    if (status === 'limit_reached' || err?.httpStatus === 429) {
      showPrjToast("Waduh, trafik lagi padat banget! 🚦 Kuota AI kita lagi istirahat bentar. Coba lagi dalam 1-2 menit ya!", 'warn');
    } else if (err?.name === 'TypeError' || err?.message?.includes('fetch') || err?.message?.includes('network')) {
      showPrjToast("Koneksi lagi bapuk nih... 🌐 Coba cek internet kamu atau klik 'Generate' sekali lagi!", 'warn');
    } else {
      showPrjToast("Aduh, ElektroBot lagi agak pusing! 😵‍💫 Gagal nge-generate. Coba kasih instruksi yang lebih simpel atau klik ulang.", 'error');
    }
  } finally {
    btn.disabled  = false;
    btn.innerHTML = origBtnLabel;
    loading.classList.add('hide');
  }
}

/**
 * Show a friendly toast notification inside the project section
 * type: 'warn' | 'error' | 'info'
 */
function showPrjToast(message, type = 'info') {
  // Remove any existing toast
  document.getElementById('prj-toast')?.remove();

  const colors = {
    warn:  { bg: 'rgba(250,176,5,.12)',  border: 'rgba(250,176,5,.4)',   text: '#fbbf24' },
    error: { bg: 'rgba(239,68,68,.10)',  border: 'rgba(239,68,68,.35)',  text: '#f87171' },
    info:  { bg: 'rgba(99,102,241,.10)', border: 'rgba(99,102,241,.35)', text: 'var(--accent)' }
  };
  const c = colors[type] || colors.info;

  const toast = document.createElement('div');
  toast.id = 'prj-toast';
  toast.style.cssText = `
    background:${c.bg};border:1px solid ${c.border};border-radius:10px;
    padding:12px 16px;font-size:13px;color:${c.text};line-height:1.6;
    margin-bottom:14px;animation:fadeIn .25s ease;font-weight:500;
  `;
  toast.textContent = message;

  // Insert above the generate button area
  const btn = document.getElementById('prj-gen-btn');
  btn?.parentNode?.insertBefore(toast, btn);

  // Auto-dismiss after 6s
  setTimeout(() => toast.remove(), 6000);
}

function renderProjectList() {
  // This is no longer used but we keep the empty function to avoid breaks
}

function openProject(id) {
  const prj = PROJECTS.find(p => p.id === id);
  if(prj) renderProjectDetail(prj);
}

function renderProjectDetail(prj) {
  const content = document.getElementById('project-detail-content');
  if(!content) return;
  
  // Save current project for PDF export access
  window.currentPrjForExport = prj;

  // Load progress
  const progress = JSON.parse(localStorage.getItem(`ed_prj_progress_${prj.id}`) || '[]');

  // AI Disclaimer HTML
  const disclaimerHtml = `
    <div class="pd-disclaimer">
      <div class="pd-disclaimer-icon">⚠️</div>
      <div class="pd-disclaimer-text">
        Catatan: Panduan proyek ini di-generate oleh AI. Harap periksa kembali skema rangkaian, datasheet komponen, dan batas tegangan sebelum merakit untuk mencegah kerusakan alat.
      </div>
    </div>`;

  // === BOM / Components HTML (new field: bom, fallback to components) ===
  const componentList = prj.bom || prj.components || [];
  const bomHtml = componentList.length ? `
    <div class="pd-section">
      <h3 class="pd-section-h">📦 Bill of Materials (BOM)</h3>
      <div class="pd-components">
        <ul class="pd-comp-list">
          ${componentList.map(c => `<li class="pd-comp-item">${c}</li>`).join('')}
        </ul>
      </div>
    </div>` : '';

  // === Wiring Guide HTML (new field: wiring_guide, fallback to wiring_table) ===
  const wiringData = prj.wiring_guide || prj.wiring_table || prj.wiring || [];
  const wiringHtml = wiringData.length ? `
    <div class="pd-section">
      <h3 class="pd-section-h">🔌 Tabel Koneksi Kabel (Wiring Guide)</h3>
      <div class="pd-table-wrap">
        <table class="pd-table">
          <thead>
            <tr>
              <th>Komponen</th>
              <th>Pin Komponen</th>
              <th>Koneksi ke Board</th>
            </tr>
          </thead>
          <tbody>
            ${wiringData.map(w => `
              <tr>
                <td><b>${w.komponen}</b></td>
                <td><code>${w.pin_komponen || w.koneksi_pin || '-'}</code></td>
                <td><code>${w.koneksi_arduino || w.koneksi_board || '-'}</code></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>` : '';

  // === C++ Code HTML (new field: cpp_code, fallback to code) ===
  const rawCode = prj.cpp_code ||
    (Array.isArray(prj.code) ? prj.code.join('\n') : (typeof prj.code === 'string' ? prj.code.replace(/\\n/g, '\n') : ''));
  const safeCode = rawCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const codeHtml = `
    <div class="pd-section">
      <h3 class="pd-section-h">💻 Sketch C++ (Arduino IDE)</h3>
      <div class="pd-code-wrap">
        <div class="pd-code-header">
          <div class="pd-code-lang">C++ / Arduino</div>
          <button class="pd-code-copy" onclick="copyPrjCode(this, 'cpp')">📋 Copy Code (sketch.ino)</button>
        </div>
        <pre class="pd-code-pre"><code id="code-content-cpp">${safeCode}</code></pre>
      </div>
    </div>`;

  // === Wokwi Section (new field: wokwi_diagram) ===
  const wokwiRaw = prj.wokwi_diagram || '';
  // wokwi_diagram may be a string (stringified JSON) or already an object
  let wokwiPretty = '';
  if (wokwiRaw) {
    try {
      const parsed = typeof wokwiRaw === 'string' ? JSON.parse(wokwiRaw) : wokwiRaw;
      wokwiPretty = JSON.stringify(parsed, null, 2);
    } catch(e) {
      wokwiPretty = typeof wokwiRaw === 'string' ? wokwiRaw : JSON.stringify(wokwiRaw, null, 2);
    }
  }
  const safeWokwi = wokwiPretty.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const wokwiSectionHtml = wokwiPretty ? `
    <div class="pd-section">
      <h3 class="pd-section-h">🛠️ Jalankan di Simulator</h3>

      <!-- Simulation Setup Dashboard -->
      <div style="border:1px solid rgba(99,102,241,.25);border-radius:12px;padding:18px;background:rgba(99,102,241,.04);display:flex;flex-direction:column;gap:14px;">

        <!-- Step 1 -->
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <div style="background:var(--accent);color:#fff;font-weight:700;font-size:13px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:6px;">Persiapkan Simulator</div>
            <a href="https://wokwi.com/projects/new/arduino-uno" target="_blank" rel="noopener"
              style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(135deg,#4ade80,#16a34a);color:#fff;border-radius:7px;text-decoration:none;font-weight:600;font-size:12px;box-shadow:0 3px 12px rgba(22,163,74,.3);">
              🌐 Buka Wokwi (Uno)
            </a>
          </div>
        </div>

        <div style="height:1px;background:var(--line2);opacity:.5;"></div>

        <!-- Step 2 -->
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <div style="background:var(--accent);color:#fff;font-weight:700;font-size:13px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:6px;">Pasang Komponen (Wiring)</div>
            <button class="pd-code-copy" onclick="copyPrjCode(this,'wokwi')">📋 Salin Data Wiring (JSON)</button>
            <p style="font-size:11px;color:var(--text3);margin-top:7px;line-height:1.5;">Di tab Wokwi, buka file <b>diagram.json</b>, hapus semua isinya, lalu <b>PASTE</b> data ini.</p>
          </div>
        </div>

        <div style="height:1px;background:var(--line2);opacity:.5;"></div>

        <!-- Step 3 -->
        <div style="display:flex;gap:14px;align-items:flex-start;">
          <div style="background:var(--accent);color:#fff;font-weight:700;font-size:13px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">3</div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:6px;">Masukkan Program (Sketch)</div>
            <button class="pd-code-copy" onclick="copyPrjCode(this,'cpp')">📋 Salin Kode Program (INO)</button>
            <p style="font-size:11px;color:var(--text3);margin-top:7px;line-height:1.5;">Di tab Wokwi, buka file <b>sketch.ino</b>, hapus semua isinya, lalu <b>PASTE</b> kode ini.</p>
          </div>
        </div>

        <!-- Final warning note -->
        <div style="background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:10px 14px;font-size:12px;color:var(--text2);line-height:1.6;margin-top:2px;">
          ⚠️ <b>Penting:</b> Pastikan menghapus kode bawaan Wokwi sebelum mem-paste data dari ElektroDict.
          Jika komponen asli tidak tersedia, AI menggunakan <b>Potensiometer</b> sebagai pengganti input sensor analog.
        </div>

      </div>

      <!-- diagram.json preview (collapsible feel via max-height) -->
      <div class="pd-code-wrap" style="margin-top:14px;">
        <div class="pd-code-header">
          <div class="pd-code-lang">diagram.json — Preview</div>
          <button class="pd-code-copy" onclick="copyPrjCode(this,'wokwi')">📋 Salin</button>
        </div>
        <pre class="pd-code-pre" style="max-height:220px;"><code id="code-content-wokwi">${safeWokwi}</code></pre>
      </div>
    </div>` : '';

  // === Assembly Steps HTML ===
  const stepsData = prj.steps || [];
  const stepsHtml = stepsData.length ? `
    <div class="pd-section">
      <h3 class="pd-section-h">📝 Langkah Perakitan</h3>
      <div class="pd-table-wrap">
        <table class="pd-table">
          <thead>
            <tr>
              <th style="width: 50px;">Check</th>
              <th>Alur Perakitan</th>
            </tr>
          </thead>
          <tbody>
            ${stepsData.map((step, i) => {
              const checked = progress.includes(i);
              return `
                <tr id="step-${prj.id}-${i}" class="${checked ? 'completed' : ''}">
                  <td class="pd-check">
                    <input type="checkbox" class="pd-check-input" 
                      ${checked ? 'checked' : ''} 
                      onchange="togglePrjStep('${prj.id}', ${i})">
                  </td>
                  <td><span class="pd-step-txt">${step.alur_perakitan || step}</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>` : '';

  const diffLabel = prj.difficulty || 'AI Generated';
  const diffClass = diffLabel.toLowerCase().replace(/\s+/g, '-');

  content.innerHTML = `
    <div class="pd-header">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom:12px;">
        <h1 class="pd-title" style="margin:0">${prj.title}</h1>
        <button class="pdf-btn" onclick="exportProjectToPdf()" style="background:var(--accent); color:white; border:none; padding:8px 16px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; flex-shrink:0; box-shadow:0 4px 12px rgba(79,156,249,0.3)">📄 Export PDF</button>
      </div>
      <div class="pd-meta">
        <div class="prj-card-diff diff-${diffClass}">${diffLabel}</div>
        <div style="font-size: 12px; color: var(--text2); font-family: var(--mono);">${prj.id}</div>
      </div>
    </div>

    <div class="pd-section">
      <h3 class="pd-section-h">📖 Deskripsi</h3>
      <p style="color:var(--text2); font-size:14px; line-height:1.6;">${prj.description}</p>
    </div>

    ${bomHtml}
    ${disclaimerHtml}
    ${wiringHtml}
    ${codeHtml}
    ${wokwiSectionHtml}
    ${stepsHtml}
  `;

  // Store wokwi raw string for clipboard access
  if(wokwiPretty) content.dataset.wokwi = wokwiPretty;
  if(rawCode)    content.dataset.cppCode = rawCode;

  switchTab('project-detail');
}

// Unified copy function for project code/wokwi
function copyPrjCode(btn, type) {
  const content = document.getElementById('project-detail-content');
  let text = '';
  if (type === 'wokwi') {
    text = content?.dataset.wokwi || document.getElementById('code-content-wokwi')?.textContent || '';
  } else {
    text = content?.dataset.cppCode || document.getElementById('code-content-cpp')?.textContent || document.getElementById('code-content')?.textContent || '';
  }
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    setTimeout(() => { btn.innerHTML = old; }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    const old = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    setTimeout(() => { btn.innerHTML = old; }, 2000);
  });
}

// Legacy alias (backward compat)
function copyPrjCodeDirect(btn) { copyPrjCode(btn, 'cpp'); }

/**
 * Bulletproof One-Click Wokwi Launcher
 * Strategy 1: POST form to https://wokwi.com/_api/setup/arduino-uno (most reliable)
 * Strategy 2: Base64 URL fallback if POST is blocked by browser popup policy
 */
function openInWokwi() {
  const content = document.getElementById('project-detail-content');

  // Source raw data from dataset (never from textContent which is HTML-escaped)
  const cppCode    = content?.dataset.cppCode || '';
  const rawDiagram = content?.dataset.wokwi   || '';

  if (!cppCode || !rawDiagram) {
    alert('Data proyek belum siap. Silakan generate ulang terlebih dahulu.');
    return;
  }

  // Validate & compact the diagram JSON
  let diagramString;
  try {
    const data = typeof rawDiagram === 'object' ? rawDiagram : JSON.parse(rawDiagram);
    diagramString = JSON.stringify(data);          // compact, no extra whitespace
  } catch(e) {
    diagramString = typeof rawDiagram === 'string' ? rawDiagram : JSON.stringify(rawDiagram);
  }

  // Detect board type from diagram (default: arduino-uno, upgrade to esp32 if found)
  const boardType = diagramString.includes('esp32') ? 'esp32' : 'arduino-uno';
  const endpoint  = `https://wokwi.com/_api/setup/${boardType}`;

  // ── STRATEGY 1: POST form (preferred — Wokwi officially supports this) ──
  try {
    const form = document.createElement('form');
    form.method  = 'POST';
    form.action  = endpoint;
    form.target  = '_blank';
    form.style.display = 'none';

    const addInput = (name, value) => {
      const inp = document.createElement('input');
      inp.type  = 'hidden';
      inp.name  = name;
      inp.value = value;
      form.appendChild(inp);
    };

    addInput('sketch.ino',   cppCode);
    addInput('diagram.json', diagramString);

    document.body.appendChild(form);
    form.submit();
    setTimeout(() => { if (form.parentNode) form.parentNode.removeChild(form); }, 3000);

  } catch(postError) {
    // ── STRATEGY 2: Base64 URL fallback ──
    console.warn('[Wokwi] POST failed, falling back to base64 URL:', postError);
    _openInWokwiFallback(cppCode, diagramString, boardType);
  }
}

/**
 * Fallback: encodes sketch + diagram as base64 and opens Wokwi via URL import.
 * Used when the POST form is blocked by popup/CSP restrictions.
 */
function _openInWokwiFallback(cppCode, diagramString, boardType) {
  try {
    // Build a combined JSON payload Wokwi can import
    const payload = JSON.stringify({
      files: [
        { name: 'sketch.ino',   content: cppCode },
        { name: 'diagram.json', content: diagramString }
      ]
    });
    const b64 = btoa(unescape(encodeURIComponent(payload)));
    const url = `https://wokwi.com/projects/new/${boardType}?data=${b64}`;
    const win = window.open(url, '_blank');
    if (!win) {
      // Last resort: copy the Wokwi URL and tell the user
      navigator.clipboard?.writeText(url).catch(() => {});
      alert('Popup diblokir browser.\nURL Wokwi sudah dicopy ke clipboard — paste di tab baru!');
    }
  } catch(e) {
    alert('Gagal membuka Wokwi otomatis. Gunakan tombol "Copy diagram.json" dan buka wokwi.com secara manual.');
  }
}

function togglePrjStep(id, idx) {
  const row = document.getElementById(`step-${id}-${idx}`);
  if(!row) return;

  const isChecked = row.querySelector('input').checked;
  if(isChecked) row.classList.add('completed');
  else row.classList.remove('completed');

  // Save to localStorage
  let progress = JSON.parse(localStorage.getItem(`ed_prj_progress_${id}`) || '[]');
  if(isChecked) {
    if(!progress.includes(idx)) progress.push(idx);
  } else {
    progress = progress.filter(i => i !== idx);
  }
  localStorage.setItem(`ed_prj_progress_${id}`, JSON.stringify(progress));
}

function copyPrjCodeDirect(btn) {
  const code = document.getElementById('code-content').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const oldText = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    setTimeout(() => { btn.innerHTML = oldText; }, 2000);
  });
}

// ═══════════════════════════════════════════════════════════
// VOICE ASSISTANT (STT & TTS)
// ═══════════════════════════════════════════════════════════
let ttsEnabled = true;
let recognition = null;
let currentMicM = null;

function toggleTTS() {
  ttsEnabled = !ttsEnabled;
  const btnD = document.getElementById('tts-toggle-D');
  const btnM = document.getElementById('tts-toggle-M');
  if(ttsEnabled) {
    if(btnD) { btnD.classList.remove('off'); btnD.title = "Mute/Unmute Suara"; }
    if(btnM) { btnM.classList.remove('off'); btnM.title = "Mute/Unmute Suara"; }
  } else {
    if(btnD) { btnD.classList.add('off'); btnD.title = "Suara Dimatikan"; }
    if(btnM) { btnM.classList.add('off'); btnM.title = "Suara Dimatikan"; }
    if(window.speechSynthesis) window.speechSynthesis.cancel();
  }
}

function cleanTextForSpeech(text) {
  if (!text) return '';
  let clean = String(text);

  // 1. Strip Emojis
  clean = clean.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');

  // 2. Remove Markdown (except minus sign, handle list dash separately)
  clean = clean.replace(/[*#_`~|]/g, ' ');
  clean = clean.replace(/(?:^|\n)\s*-\s+/g, ' '); // list dash

  // 3. Convert LaTeX to Spoken Indonesian
  clean = clean.replace(/\$\$/g, ' ');
  clean = clean.replace(/\\\(/g, ' ');
  clean = clean.replace(/\\\)/g, ' ');
  clean = clean.replace(/\\\[/g, ' ');
  clean = clean.replace(/\\\]/g, ' ');
  clean = clean.replace(/\$/g, ' ');

  clean = clean.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, ' $1 per $2 ');
  clean = clean.replace(/\\cdot/g, ' dikali ');
  clean = clean.replace(/\\times/g, ' dikali ');
  clean = clean.replace(/\+/g, ' ditambah ');
  clean = clean.replace(/-/g, ' dikurangi ');
  clean = clean.replace(/=/g, ' sama dengan ');
  clean = clean.replace(/\^2/g, ' kuadrat ');

  // Clean trailing formatting
  clean = clean.replace(/[{}]/g, ' ');
  clean = clean.replace(/\\[a-zA-Z]+/g, ' ');
  clean = clean.replace(/\s+/g, ' ').trim();

  return clean;
}

function speak(text) {
  if(!ttsEnabled || !window.speechSynthesis) return;
  // Hilangkan format markdown, emoji, dan konversi LaTeX agar terbaca natural
  let cleanText = cleanTextForSpeech(text);
  const utter = new SpeechSynthesisUtterance(cleanText);
  utter.lang = 'id-ID';
  utter.rate = 1.05;
  window.speechSynthesis.speak(utter);
}

function toggleMic(v) {
  const btn = document.getElementById('mic-btn-' + v);
  if(btn.classList.contains('recording')) {
    if(recognition) recognition.stop();
    return;
  }
  
  if(!recognition) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) {
      alert("Maaf, browser kamu tidak mendukung fitur perekam suara (Web Speech API). Coba gunakan Chrome.");
      return;
    }
    recognition = new SpeechRecognition();
    recognition.lang = 'id-ID';
    recognition.interimResults = false;
    
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      const inp = document.getElementById('inp' + currentMicM);
      if(inp) {
        inp.value = transcript;
        send(currentMicM);
      }
    };
    recognition.onend = () => {
      document.querySelectorAll('.cmic').forEach(b => b.classList.remove('recording'));
    };
    recognition.onerror = (e) => {
      console.error("Speech Error:", e.error);
      document.querySelectorAll('.cmic').forEach(b => b.classList.remove('recording'));
    };
  }
  
  currentMicM = v;
  document.querySelectorAll('.cmic').forEach(b => b.classList.remove('recording'));
  btn.classList.add('recording');
  recognition.start();
}

// ═══════════════════════════════════════════════════════════
// AUDIO SYNTHESIZER & OSCILLOSCOPE LOGIC
// ═══════════════════════════════════════════════════════════
let audioCtx, oscillator, gainNode, analyser, bufferLength, dataArray, animationId;
let synthPlaying = false;

function initSynth() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    analyser = audioCtx.createAnalyser();

    analyser.fftSize = 2048;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    oscillator.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Default settings
    gainNode.gain.value = 0.1;
    oscillator.type = 'sine';
    oscillator.frequency.value = 50;
    
    oscillator.start();
    audioCtx.suspend();
  } catch (e) {
    console.error("Web Audio API not supported:", e);
    alert("Browser kamu tidak mendukung Web Audio API.");
  }
}

function toggleSynth() {
  const btn = document.getElementById('synth-play-btn');
  if (!btn) return;

  if (!audioCtx) initSynth();
  if (!audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume().then(() => {
      synthPlaying = true;
      btn.classList.add('playing');
      btn.innerHTML = '<span class="p-ico">⏹</span> Stop Sinyal';
      updateSynthSettings();
      drawScope();
    });
  } else {
    audioCtx.suspend().then(() => {
      synthPlaying = false;
      btn.classList.remove('playing');
      btn.innerHTML = '<span class="p-ico">▶</span> Mulai Sinyal';
      if (animationId) cancelAnimationFrame(animationId);
      
      // Clear canvas on stop
      const canvas = document.getElementById('synth-canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  }
}

function updateSynthSettings() {
  if (!audioCtx) {
    // Update labels even if not playing
    const freqEl = document.getElementById('synth-freq');
    const volEl = document.getElementById('synth-vol');
    if(freqEl) document.getElementById('val-freq').textContent = freqEl.value;
    if(volEl) document.getElementById('val-vol').textContent = Math.round(volEl.value * 100);
    return;
  }
  
  const wave = document.getElementById('synth-wave-type').value;
  const freq = document.getElementById('synth-freq').value;
  const vol = document.getElementById('synth-vol').value;

  // Use ramp for smooth transitions
  oscillator.type = wave;
  oscillator.frequency.setTargetAtTime(parseFloat(freq), audioCtx.currentTime, 0.05);
  gainNode.gain.setTargetAtTime(parseFloat(vol), audioCtx.currentTime, 0.05);

  // Update UI Labels
  document.getElementById('val-freq').textContent = freq;
  document.getElementById('val-vol').textContent = Math.round(vol * 100);
  document.getElementById('scope-freq-display').textContent = parseFloat(freq).toFixed(1) + ' Hz';
  document.getElementById('scope-wave-display').textContent = wave.toUpperCase();
}

function drawScope() {
  if (!synthPlaying) return;
  animationId = requestAnimationFrame(drawScope);
  
  analyser.getByteTimeDomainData(dataArray);

  const canvas = document.getElementById('synth-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  
  // Oscilloscope specific styling
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#00ff41';
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#00ff41';
  
  ctx.beginPath();

  const sliceWidth = width * 1.0 / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * height / 2;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  ctx.stroke();
}

/**
 * Professional AI Project Report Generator (PDF)
 */
function exportProjectToPdf() {
    const prj = window.currentPrjForExport;
    if (!prj) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    let y = 25;

    // Helper: Add wrapping text with spacing control
    const addWrappedText = (text, fontSize = 10, fontStyle = 'normal', color = [51, 65, 85], lineSpacing = 1.1) => {
        doc.setFont('helvetica', fontStyle);
        doc.setFontSize(fontSize);
        doc.setTextColor(...color);
        const splitText = doc.splitTextToSize(text, pageWidth - (margin * 2));
        doc.text(splitText, margin, y);
        y += (splitText.length * (fontSize * 0.4 * lineSpacing)) + 5;
    };

    // Helper: Draw section header with accent
    const drawSectionHeader = (title) => {
        if (y > 250) { doc.addPage(); y = 25; }
        // Left accent bar
        doc.setFillColor(79, 156, 249);
        doc.rect(margin, y - 5, 3, 7, 'F');
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(15, 23, 42);
        doc.text(title.toUpperCase(), margin + 6, y);
        y += 8;
        
        doc.setDrawColor(226, 232, 240);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;
    };

    // Helper: Draw Page Header/Footer
    const drawBranding = (docInstance) => {
        const pageCount = docInstance.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            docInstance.setPage(i);
            // Header
            docInstance.setFont('helvetica', 'bold');
            docInstance.setFontSize(10);
            docInstance.setTextColor(79, 156, 249);
            docInstance.text('ELEKTRODICT', margin, 12);
            
            docInstance.setFont('helvetica', 'normal');
            docInstance.setTextColor(148, 163, 184);
            docInstance.text('AI PROJECT REPORT', pageWidth - margin - 40, 12);
            
            docInstance.setDrawColor(241, 245, 249);
            docInstance.line(margin, 15, pageWidth - margin, 15);
            
            // Footer
            docInstance.setFontSize(8);
            docInstance.setTextColor(148, 163, 184);
            docInstance.text(`Generated by ElektroDict AI Assistant`, margin, 285);
            docInstance.text(`Page ${i} of ${pageCount}`, pageWidth - margin - 20, 285);
        }
    };

    // 1. Initial Header (Brand + Title)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(15, 23, 42);
    doc.text(prj.title || 'Untitled Project', margin, y);
    y += 12;

    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Difficulty: ${prj.difficulty || 'Normal'}  |  Type: AI Generated Lab`, margin, y);
    y += 15;

    // 2. Description
    drawSectionHeader('Description');
    addWrappedText(prj.description || 'No description provided.', 10, 'normal');
    y += 5;

    // 3. Component List (BOM)
    drawSectionHeader('Bill of Materials (BOM)');
    const components = prj.bom || prj.components || [];
    if (components.length) {
        const tableData = [];
        // Split into 2 columns if more than 6 components
        if (components.length > 6) {
           const mid = Math.ceil(components.length / 2);
           for(let i=0; i<mid; i++) {
               tableData.push([`• ${components[i]}`, components[mid+i] ? `• ${components[mid+i]}` : '']);
           }
        } else {
           components.forEach(c => tableData.push([`• ${c}`, '']));
        }

        doc.autoTable({
            startY: y,
            theme: 'plain',
            body: tableData,
            styles: { fontSize: 9, cellPadding: 1, textColor: [51, 65, 85] },
            margin: { left: margin },
            columnStyles: { 0: { cellWidth: 80 }, 1: { cellWidth: 80 } }
        });
        y = doc.lastAutoTable.finalY + 12;
    }

    // 4. Wiring Guide (Table)
    drawSectionHeader('Wiring & Connections');
    const wiring = prj.wiring_guide || prj.wiring_table || [];
    if (wiring.length) {
        const tableBody = wiring.map(w => [w.komponen, w.pin_komponen || '-', w.koneksi_arduino || '-']);
        doc.autoTable({
            startY: y,
            head: [['Component', 'Pin', 'Arduino Pin']],
            body: tableBody,
            headStyles: { fillColor: [51, 65, 85], textColor: 255, fontSize: 9, halign: 'center' },
            bodyStyles: { fontSize: 9, halign: 'left', textColor: [51, 65, 85] },
            alternateRowStyles: { fillColor: [248, 250, 252] },
            margin: { left: margin, right: margin }
        });
        y = doc.lastAutoTable.finalY + 12;
    }

    // 5. Arduino Sketch (Dark Mode Box)
    if (y > 210) { doc.addPage(); y = 25; }
    drawSectionHeader('Arduino Sketch (.ino)');

    const code = prj.cpp_code || 'No code provided.';
    doc.setFont('courier', 'normal');
    const fontSize = 8.5;
    doc.setFontSize(fontSize);
    
    const splitCode = doc.splitTextToSize(code, pageWidth - (margin * 2) - 10);
    const boxPadding = 5;
    const lineHeight = fontSize * 0.45;
    
    // Estimate total block height to see if we need a page break before starting
    const blockHeight = (splitCode.length * lineHeight) + (boxPadding * 2);

    // Render code line by line with background segments
    doc.setFillColor(30, 35, 45); // Dark Slate Grey
    doc.setTextColor(255, 255, 255);
    doc.setFont('courier', 'normal');

    // Draw the starting background box
    let startY = y;
    let boxHeight = Math.min(270 - startY, blockHeight);
    doc.rect(margin, startY, pageWidth - (margin * 2), boxHeight, 'F');
    y += boxPadding + (lineHeight/2);

    splitCode.forEach((line, index) => {
        if (y > 275) {
            doc.addPage(); 
            y = 25;
            startY = y;
            // Draw continuing background box
            const remainingLines = splitCode.length - index;
            const remHeight = Math.min(270 - startY, (remainingLines * lineHeight) + (boxPadding * 2));
            doc.setFillColor(30,35,45);
            doc.rect(margin, startY - 5, pageWidth - (margin * 2), remHeight, 'F');
            y += boxPadding;
        }
        doc.text(line, margin + boxPadding, y);
        y += lineHeight;
    });

    // 6. Draw Final Header/Footer on all pages
    drawBranding(doc);

    // Save PDF
    const filename = `${(prj.title || 'Project').replace(/\s+/g, '_')}_Report.pdf`;
    doc.save(filename);
}
function setSkemaPrompt(txt){
  const inp = document.getElementById('skema-prompt');
  if(inp){
    inp.value = txt;
    inp.focus();
    // Auto trigger generate
    generateDiagram(txt);
  }
}

// ── MERMAID CONFIGURATION ──
if (window.mermaid) {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' }
  });
}

async function generateDiagram(userPrompt) {
  const pStr = userPrompt || document.getElementById('skema-prompt')?.value;
  if(!pStr || pStr.trim().length < 3) return;

  const btn = document.getElementById('btn-gen-skema');
  const inp = document.getElementById('skema-prompt');
  const out = document.getElementById('mermaid-diagram-output');

  if(!btn || !inp || !out) return;

  // 1. Loading State
  btn.disabled = true;
  inp.disabled = true;
  btn.textContent = "AI Lagi Gambar... 🎨";
  out.innerHTML = `<span style="color: var(--accent); font-size:13px;">Sedang memproses skema menggunakan AI... ⚡</span>`;

  try {
    // 2. API Call (Groq) via ElektroAPI
    const messages = [
      { 
        role: 'system', 
        content: `You are an expert electrical diagram generator. Output ONLY valid, basic Mermaid.js code wrapped in \`\`\`mermaid blocks. 
        RULE 1: Use ONLY standard flowcharts (\`flowchart TD\` or \`flowchart LR\`). 
        RULE 2: Use ONLY standard connections (\`-->\`, \`---\`, \`-.->\`). DO NOT invent custom link symbols like \`-->|+\`. 
        RULE 3: Keep node names simple and use standard brackets like \`A[Resistor]\`. 
        DO NOT output any explanations, conversational text, or greetings. Just the code block.` 
      },
      { role: 'user', content: pStr }
    ];

    const data = await window.ElektroAPI.chat(messages, { temperature: 0.2 });
    const responseText = data.choices[0].message.content;

    // DEBUG: Simpan di console buat kalau gagal
    console.log("[Lab Skema] AI Response:", responseText);

    // 3. Regex Extraction - More flexible (handling space/newline after tag)
    // Mencari: ```mermaid[optional stuff] \n [code] \n ```
    let match = responseText.match(/```mermaid\s*([\s\S]*?)```/i);
    
    // Fallback: Jika tak ada tag mermaid, cari blok kode APA PUN (sebagai last resort)
    if(!match) {
      match = responseText.match(/```\s*([\s\S]*?)```/);
    }

    if (match && match[1]) {
      let code = match[1].trim();
      
      // Bersihkan jika masih ada kata 'mermaid' di awal (fallback case)
      if(code.toLowerCase().startsWith('mermaid')) {
        code = code.replace(/^mermaid/i, '').trim();
      }

      // 4. Render
      out.innerHTML = `<div class="mermaid">${code}</div>`;
      
      if (window.mermaid) {
        await mermaid.run({
          nodes: out.querySelectorAll('.mermaid')
        });

        // Show Actions after render
        const act = document.getElementById('skema-actions');
        if(act) act.style.display = 'flex';
      }
    } else {
      throw new Error("Format diagram tidak ditemukan");
    }

  } catch (err) {
    console.error("[Lab Skema] Error:", err);
    out.innerHTML = `<span style="color: var(--rose); font-size:13px;">⚠️ Gagal memproses skema. Coba prompt yang lebih spesifik, Sob!</span>`;
    const act = document.getElementById('skema-actions');
    if(act) act.style.display = 'none';
  } finally {
    // 5. Cleanup UI
    btn.disabled = false;
    inp.disabled = false;
    btn.textContent = "Generate Diagram ⚡";
  }
}

function toggleSkemaZoom() {
  const modal = document.getElementById('skema-modal');
  const modalBody = document.getElementById('skema-modal-body');
  const source = document.getElementById('mermaid-diagram-output');
  
  if (!modal || !modalBody || !source) return;

  if (modal.classList.contains('show')) {
    modal.classList.remove('show');
    modalBody.innerHTML = ''; // Clean up
  } else {
    // Clone the generated SVG into modal
    const svg = source.querySelector('svg');
    if (svg) {
      modalBody.innerHTML = svg.outerHTML;
      modal.classList.add('show');
    }
  }
}

function downloadSkemaSVG() {
  const source = document.getElementById('mermaid-diagram-output');
  const svg = source?.querySelector('svg');
  
  if (!svg) return;

  // Create SVG Blob
  const svgData = svg.outerHTML;
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  
  // Trigger Download
  const downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = `elektrodict-skema-${Date.now()}.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  
  // Clean up
  URL.revokeObjectURL(svgUrl);
}

// ═══════════════════════════════════════════════════════════
// NEWS LOGIC
// ═══════════════════════════════════════════════════════════
let newsLoaded = false;
async function loadNews(force = false) {
  if (newsLoaded && !force) return;
  const grid = document.getElementById('news-grid');
  const loader = document.getElementById('news-loading');
  
  grid.style.display = 'none';
  loader.style.display = 'block';
  
  try {
    const articles = await window.ElektroAPI.fetchTechNews();
    renderNews(articles);
    newsLoaded = true;
  } catch (err) {
    grid.innerHTML = `<div class="empty" style="display:block">⚠️ Gagal memuat berita. Coba lagi nanti.</div>`;
    grid.style.display = 'block';
  } finally {
    loader.style.display = 'none';
  }
}

function renderNews(articles) {
  const grid = document.getElementById('news-grid');
  if (!articles || articles.length === 0) {
    grid.innerHTML = `<div class="empty" style="display:block">Tidak ada berita terbaru saat ini.</div>`;
    grid.style.display = 'block';
    return;
  }

  grid.innerHTML = articles.map(a => {
    const date = new Date(a.publishedAt).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
    return `
      <div class="news-card" style="animation-delay: \${Math.random() * 0.5}s">
        <div class="news-img-wrap">
          <img src="\${a.urlToImage || 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=600&q=80'}" class="news-img" alt="news" loading="lazy">
          <div class="news-date">\${date}</div>
        </div>
        <div class="news-body">
          <div class="news-source">\${a.source.name}</div>
          <h3 class="news-title">\${a.title}</h3>
          <p class="news-desc">\${a.description || 'Klik untuk membaca detail berita selengkapnya di sumber asli.'}</p>
          <a href="\${a.url}" target="_blank" class="news-btn">Baca Selengkapnya →</a>
        </div>
      </div>
    `;
  }).join('');
  grid.style.display = 'grid';
}




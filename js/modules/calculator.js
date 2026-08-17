/**
 * ElektroDict Calculator Module
 * Handles Ohm's Law, Power, RC, RLC, and more.
 */

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

const ElektroCalc = {
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

window.ElektroCalc = ElektroCalc;

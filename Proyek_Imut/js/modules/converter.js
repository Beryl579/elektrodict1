/**
 * ElektroDict Converter Module
 * Units Conversion for Technical Data.
 */

const KONV_DATA = [
  {
    id:'tegangan', label:'Tegangan', icon:'⚡',
    units:['V (Volt)','mV (Millivolt)','µV (Mikrovolt)','kV (Kilovolt)'],
    toBase:[1, 1e-3, 1e-6, 1e3],
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
    toBase:[1, 1e-3, 1e3, 1e6, null],
    special: {
      toBase(val, fromIdx){
        if(fromIdx===4) return Math.pow(10,(val-30)/10);
        return val * [1,1e-3,1e3,1e6,1][fromIdx];
      },
      fromBase(watt, toIdx){
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

const ElektroConverter = {
  init() {
    const cats = document.getElementById('konv-cats');
    if (!cats) return;
    cats.innerHTML = KONV_DATA.map(k=>
      `<button class="konv-cat-btn" onclick="ElektroConverter.select(this,'${k.id}')">${k.icon} ${k.label}</button>`
    ).join('');

    const panels = document.getElementById('konv-panels');
    if (!panels) return;
    panels.innerHTML = KONV_DATA.map(k=>{
      if(k.custom && k.id==='db'){
        return `<div class="konv-card" id="konv-${k.id}">
          <div class="konv-title">${k.icon} Kalkulator Desibel</div>
          <div class="konv-row"><span class="konv-lbl">Nilai (dB)</span><input class="konv-inp" id="db-val" type="number" placeholder="contoh: 20" oninput="ElektroConverter.calcDb()"></div>
          <div class="konv-row"><span class="konv-lbl">Tipe</span><select class="cf-sel" id="db-type" onchange="ElektroConverter.calcDb()"><option value="v">Tegangan (20log) — V2/V1</option><option value="p">Daya (10log) — P2/P1</option></select></div>
          <div style="margin-top:12px"><div class="konv-result-row"><span class="konv-result-val" id="db-ratio">—</span><span class="konv-result-lbl">Rasio</span></div><div class="konv-result-row"><span class="konv-result-val" id="db-pct">—</span><span class="konv-result-lbl">Persentase</span></div><div style="font-size:11px;color:var(--text3);margin-top:8px;font-family:var(--mono)">+3dB ≈ 2x daya · +6dB ≈ 2x tegangan · -3dB = setengah daya</div></div></div>`;
      }
      return `<div class="konv-card" id="konv-${k.id}">
        <div class="konv-title">${k.icon} Konversi ${k.label}</div>
        <div class="konv-row"><span class="konv-lbl">Nilai</span><input class="konv-inp" id="kinp-${k.id}" type="number" placeholder="masukkan nilai..." oninput="ElektroConverter.doConvert('${k.id}')"><select class="cf-sel" style="width:auto;flex:0 0 auto;min-width:140px" id="kfrom-${k.id}" onchange="ElektroConverter.doConvert('${k.id}')">${k.units.map((u,i)=>`<option value="${i}">${u}</option>`).join('')}</select></div>
        <div class="konv-sep">↕</div><div id="kresult-${k.id}">${k.units.map((u,i)=>`<div class="konv-result-row"><span class="konv-result-val" id="kval-${k.id}-${i}">—</span><span class="konv-result-lbl">${u.split('(')[0].trim()}</span></div>`).join('')}</div></div>`;
    }).join('');

    this.select(document.querySelector('.konv-cat-btn'), 'tegangan');
  },

  select(btn, id) {
    document.querySelectorAll('.konv-cat-btn').forEach(b=>b.classList.remove('on'));
    document.querySelectorAll('.konv-card').forEach(c=>c.classList.remove('on'));
    if (btn) btn.classList.add('on');
    const panel = document.getElementById('konv-'+id);
    if (panel) panel.classList.add('on');
  },

  doConvert(id) {
    const k = KONV_DATA.find(x=>x.id===id);
    const inp = document.getElementById(`kinp-${id}`);
    const sel = document.getElementById(`kfrom-${id}`);
    if (!inp || !sel) return;
    const val = parseFloat(inp.value);
    const fromIdx = parseInt(sel.value);
    
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
      
      if(Math.abs(result) >= 1e9) el.textContent = (result/1e9).toPrecision(6) + ' G';
      else if(Math.abs(result) >= 1e6) el.textContent = (result/1e6).toPrecision(6) + ' M';
      else if(Math.abs(result) >= 1e3) el.textContent = (result/1e3).toPrecision(6) + ' k';
      else if(Math.abs(result) >= 0.01 || result===0) el.textContent = parseFloat(result.toPrecision(6)).toString();
      else el.textContent = result.toExponential(4);
    });
  },

  calcDb() {
    const valEl = document.getElementById('db-val');
    const typeEl = document.getElementById('db-type');
    const ratioEl = document.getElementById('db-ratio');
    const pctEl = document.getElementById('db-pct');
    if (!valEl || !typeEl) return;
    
    const val = parseFloat(valEl.value);
    const type = typeEl.value;
    if(isNaN(val)){
      if (ratioEl) ratioEl.textContent='—'; 
      if (pctEl) pctEl.textContent='—'; 
      return; 
    }
    const ratio = type==='v' ? Math.pow(10, val/20) : Math.pow(10, val/10);
    if (ratioEl) ratioEl.textContent = parseFloat(ratio.toPrecision(5)).toString() + 'x';
    if (pctEl) pctEl.textContent = (ratio*100).toFixed(1) + '%';
  }
};

window.ElektroConverter = ElektroConverter;

/**
 * ElektroDict Standards Module — Refactored
 * PUIL 2011, IEC vs ANSI, AWG Converter, Resistor E12, SMD
 * Sekarang tidak lagi early-return jika #puil-daya ada — mode enhance existing page.
 */

const STANDARDS_DATA = typeof globalThis.STANDARDS_DATA !== 'undefined' ? globalThis.STANDARDS_DATA : {
  k3: [
    {rule:'Putuskan Sumber Tegangan',desc:'Pastikan rangkaian bebas tegangan sebelum menyentuh. Buka MCB/saklar utama.'},
    {rule:'Amankan dari Rekoneksi (LOTO)',desc:'Pasang Lock Out Tag Out agar tidak tersambung ulang oleh orang lain.'},
    {rule:'Verifikasi Tanpa Tegangan',desc:'Ukur dengan testpen/multimeter tervalidasi di setiap penghantar.'},
    {rule:'Pentanahan & Hubung Singkat',desc:'Grounding & hubung singkat penghantar untuk buang sisa muatan.'},
    {rule:'Proteksi Area Bertegangan',desc:'Beri barrier/isolasi pada bagian yang masih aktif di sekitar area kerja.'}
  ],
  kha: [
    {size:'1.5 mm²',cap:'15 A',load:'3.300 W'},
    {size:'2.5 mm²',cap:'20 A',load:'4.400 W'},
    {size:'4 mm²',cap:'27 A',load:'5.940 W'},
    {size:'6 mm²',cap:'34 A',load:'7.480 W'},
    {size:'10 mm²',cap:'46 A',load:'10.120 W'},
    {size:'16 mm²',cap:'61 A',load:'13.420 W'},
    {size:'25 mm²',cap:'80 A',load:'17.600 W'},
    {size:'35 mm²',cap:'99 A',load:'21.780 W'},
    {size:'50 mm²',cap:'125 A',load:'27.500 W'},
    {size:'70 mm²',cap:'160 A',load:'35.200 W'},
    {size:'95 mm²',cap:'195 A',load:'42.900 W'},
    {size:'120 mm²',cap:'225 A',load:'49.500 W'}
  ],
  ip_ratings: [
    {code:'IP20',solid:'Jari (>12mm)',liquid:'Tidak proteksi',usage:'Indoor (stopkontak dalam)'},
    {code:'IP44',solid:'>1mm',liquid:'Cipratan',usage:'Kamar mandi / teras tertutup'},
    {code:'IP54',solid:'Debu terbatas',liquid:'Cipratan',usage:'Panel tertutup outdoor'},
    {code:'IP65',solid:'Kedap debu',liquid:'Semprotan air',usage:'Outdoor (lampu taman)'},
    {code:'IP67',solid:'Kedap debu',liquid:'Rendam sementara',usage:'Sensor terendam'},
    {code:'IP68',solid:'Kedap debu',liquid:'Rendam menerus',usage:'Pompa submersible'}
  ],
  resistor_guide: {
    e12:['10','12','15','18','22','27','33','39','47','56','68','82'],
    bands:[
      {color:'Hitam',val:'0',mult:'×1',tol:'—'},
      {color:'Coklat',val:'1',mult:'×10',tol:'±1%'},
      {color:'Merah',val:'2',mult:'×100',tol:'±2%'},
      {color:'Jingga',val:'3',mult:'×1.000',tol:'—'},
      {color:'Kuning',val:'4',mult:'×10.000',tol:'—'},
      {color:'Hijau',val:'5',mult:'×100.000',tol:'±0,5%'},
      {color:'Biru',val:'6',mult:'×1.000.000',tol:'±0,25%'},
      {color:'Ungu',val:'7',mult:'×10.000.000',tol:'±0,1%'},
      {color:'Abu-abu',val:'8',mult:'×100.000.000',tol:'±0,05%'},
      {color:'Putih',val:'9',mult:'×1.000.000.000',tol:'—'},
      {color:'Emas',val:'—',mult:'×0,1',tol:'±5%'},
      {color:'Perak',val:'—',mult:'×0,01',tol:'±10%'}
    ]
  },
  smd_sizes:[
    {imp:'0201',met:'0603',dim:'0.6×0.3'},
    {imp:'0402',met:'1005',dim:'1.0×0.5'},
    {imp:'0603',met:'1608',dim:'1.6×0.8'},
    {imp:'0805',met:'2012',dim:'2.0×1.2'},
    {imp:'1206',met:'3216',dim:'3.2×1.6'},
    {imp:'1210',met:'3225',dim:'3.2×2.5'},
    {imp:'2512',met:'6432',dim:'6.4×3.2'}
  ],
  puil2011:[
    {title:'Fasa R (L1)',color:'#000000',label:'Hitam'},
    {title:'Fasa S (L2)',color:'#8B4513',label:'Coklat'},
    {title:'Fasa T (L3)',color:'#808080',label:'Abu-abu'},
    {title:'Netral (N)',color:'#0000FF',label:'Biru'},
    {title:'Ground (PE)',color:'#FFD700',label:'Kuning/Hijau'}
  ],
  symbols:[
    {name:'Resistor',iec:'Kotak',ansi:'Zigzag'},
    {name:'Kapasitor',iec:'2 garis sejajar',ansi:'Garis lengkung'},
    {name:'Induktor',iec:'Setengah lingkaran',ansi:'Lilitan'},
    {name:'Dioda',iec:'Segitiga + garis',ansi:'Segitiga + garis'},
    {name:'Transistor NPN',iec:'Lingkaran + panah keluar',ansi:'Panah pada emitor'},
    {name:'Ground',iec:'Garis turun 3',ansi:'Garis turun 3'},
    {name:'Fuse / Sekering',iec:'Kotak + garis',ansi:'Garis zigzag'},
    {name:'Saklar',iec:'Garis putus',ansi:'Garis putus'},
    {name:'Trafo',iec:'2 lilitan',ansi:'2 lilitan + inti'},
    {name:'Op-Amp',iec:'Segitiga',ansi:'Segitiga'}
  ]
};

// AWG full table 4/0 .. 40 (area mm², diameter mm, max A approx)
const AWG_TABLE = typeof globalThis.AWG_TABLE !== 'undefined' ? globalThis.AWG_TABLE : [
  {awg:'4/0',area:'107.22', dia:'11.68', amp:'260'},
  {awg:'3/0',area:'85.01',  dia:'10.40', amp:'200'},
  {awg:'2/0',area:'67.43',  dia:'9.27',  amp:'175'},
  {awg:'1/0',area:'53.49',  dia:'8.25',  amp:'150'},
  {awg:'1',area:'42.41',   dia:'7.35',  amp:'130'},
  {awg:'2',area:'33.62',   dia:'6.54',  amp:'115'},
  {awg:'3',area:'26.67',   dia:'5.83',  amp:'100'},
  {awg:'4',area:'21.15',   dia:'5.19',  amp:'85'},
  {awg:'6',area:'13.30',   dia:'4.11',  amp:'55'},
  {awg:'8',area:'8.37',    dia:'3.26',  amp:'40'},
  {awg:'10',area:'5.26',   dia:'2.59',  amp:'30'},
  {awg:'12',area:'3.31',   dia:'2.05',  amp:'20'},
  {awg:'14',area:'2.08',   dia:'1.63',  amp:'15'},
  {awg:'16',area:'1.31',   dia:'1.29',  amp:'10'},
  {awg:'18',area:'0.823',  dia:'1.02',  amp:'7'},
  {awg:'20',area:'0.518',  dia:'0.81',  amp:'5'},
  {awg:'22',area:'0.326',  dia:'0.64',  amp:'3'},
  {awg:'24',area:'0.205',  dia:'0.51',  amp:'2'},
  {awg:'26',area:'0.129',  dia:'0.40',  amp:'1'},
  {awg:'28',area:'0.081',  dia:'0.32',  amp:'0.8'},
  {awg:'30',area:'0.051',  dia:'0.25',  amp:'0.5'}
];

const ElektroStandards = {
  init() {
    const container = document.getElementById('page-standards');
    if (!container) return;
    if(container.dataset.stdInit==='1') return;
    container.dataset.stdInit='1';

    // Jika halaman sudah punya #puil-daya (mode enhance), jangan overwrite — hanya inject extra cards
    const hasStaticPUIL = !!document.getElementById('puil-daya');
    if(hasStaticPUIL){
      this.enhanceExistingPage();
      this.bindEvents();
      return;
    }

    // Fallback lama: render full page jika belum ada static (mis. test env)
    if(!STANDARDS_DATA || !AWG_TABLE) return;
    container.innerHTML = `
      <div class="h-top">
        <h2 class="h-title">📜 Standar & K3 Elektronika</h2>
        <p class="h-sub">Referensi PUIL 2011, Protokol Keselamatan Kerja (K3), dan Simbol Internasional.</p>
      </div>
      <div class="s-grid">
        <div class="s-card full-w">
          <div class="s-card-head">⚠️ Protokol K3 Instalasi Listrik</div>
          <div class="s-card-body">
            <div class="k3-list">
              ${STANDARDS_DATA.k3.map(k => `
                <div class="k3-item">
                  <div class="k3-icon">🛡️</div>
                  <div class="k3-content">
                    <div class="k3-rule">${k.rule}</div>
                    <div class="k3-desc">${k.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="s-card">
          <div class="s-card-head">⚡ KHA (Kuat Hantar Arus)</div>
          <div class="s-card-body">
            <table class="s-table"><thead><tr><th>Ukuran Kabel</th><th>Kapasitas (A)</th><th>Beban Maks</th></tr></thead>
              <tbody>${STANDARDS_DATA.kha.map(k => `<tr><td><strong>${k.size}</strong></td><td style="color:var(--accent)">${k.cap}</td><td class="s-small">${k.load}</td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
        <div class="s-card">
          <div class="s-card-head">💧 Ingress Protection (IP) Guide</div>
          <div class="s-card-body">
            <table class="s-table"><thead><tr><th>Code</th><th>Debu / Air</th><th>Rekomendasi</th></tr></thead>
              <tbody>${STANDARDS_DATA.ip_ratings.map(i => `<tr><td><span class="s-badge" style="background:var(--bg3); border:1px solid var(--accent)">${i.code}</span></td><td class="s-small">${i.solid} / ${i.liquid}</td><td class="s-small">${i.usage}</td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
        <div class="s-card full-w">
          <div class="s-card-head">🎨 Standar Resistor (Color & E12)</div>
          <div class="s-card-body">
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
              <div>
                <p class="s-note" style="margin-bottom:10px;">Deret Nilai E12 (Tersedia Komersial):</p>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">${STANDARDS_DATA.resistor_guide.e12.map(v => `<span class="s-badge">${v}</span>`).join('')}</div>
              </div>
              <div>
                <table class="s-table"><thead><tr><th>Warna</th><th>Nilai</th><th>Multi</th><th>Tol</th></tr></thead>
                  <tbody>${STANDARDS_DATA.resistor_guide.bands.map(b => `<tr><td><strong>${b.color}</strong></td><td>${b.val}</td><td>${b.mult}</td><td style="color:var(--green)">${b.tol}</td></tr>`).join('')}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="s-card full-w">
          <div class="s-card-head">🔬 Ukuran Komponen SMD</div>
          <div class="s-card-body">
            <table class="s-table"><thead><tr><th>Imperial</th><th>Metric</th><th>Dimensi (P×L)</th></tr></thead>
              <tbody>${STANDARDS_DATA.smd_sizes.map(s => `<tr><td><span class="s-badge" style="color:var(--accent)">${s.imp}</span></td><td>${s.met}</td><td>${s.dim}</td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
        <div class="s-card">
          <div class="s-card-head">🇮🇩 PUIL 2011 (Kode Warna Kabel)</div>
          <div class="s-card-body">
            <table class="s-table"><thead><tr><th>Fungsi / Jalur</th><th>Warna Standar</th></tr></thead>
              <tbody>${STANDARDS_DATA.puil2011.map(w => `<tr><td><div class="s-lbl">${w.title}</div></td><td><div style="display:flex; align-items:center; gap:10px;"><div class="color-swatch" style="background: ${w.color}; border: 1px solid rgba(255,255,255,0.1)"></div><span class="s-badge" style="background: ${w.color}33; color: ${w.color === '#000000' ? '#fff' : w.color}">${w.label}</span></div></td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
        <div class="s-card">
          <div class="s-card-head">📐 Perbandingan Simbol (IEC vs ANSI)</div>
          <div class="s-card-body">
            <table class="s-table"><thead><tr><th>Komponen</th><th>IEC</th><th>ANSI</th></tr></thead>
              <tbody>${STANDARDS_DATA.symbols.map(s => `<tr><td><strong>${s.name}</strong></td><td class="s-small">${s.iec}</td><td class="s-small">${s.ansi}</td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
        <div class="s-card full-w">
          <div class="s-card-head">🔢 Kalkulator AWG ke mm²</div>
          <div class="s-card-body">
            <div class="awg-flex">
              <div class="awg-input-wrap"><label>Pilih Ukuran AWG</label><select id="awg-select" class="s-select" onchange="ElektroStandards.convertAWG()">${AWG_TABLE.map(a => `<option value="${a.area}" data-dia="${a.dia}" data-amp="${a.amp}">${a.awg} AWG</option>`).join('')}</select></div>
              <div class="awg-result-wrap"><div class="awg-val" id="awg-res-val">5.26</div><div class="awg-unit">mm² (Penampang)</div><div style="font-size:11px;color:var(--text3);margin-top:4px" id="awg-res-extra"></div></div>
            </div>
            <p class="s-note">Catatan: Nilai nominal area penampang kabel sesuai standar kelistrikan umum.</p>
          </div>
        </div>
      </div>
    `;
    this.convertAWG();
    this.bindEvents();
  },

  enhanceExistingPage(){
    // Inject extra cards ke .std-grid jika belum ada
    const grid = document.querySelector('#page-standards .std-grid');
    if(!grid) return;
    // Helper cek sudah ada
    const hasExtra = document.getElementById('std-extra-awg');
    if(hasExtra) return;

    const extraHTML = `
      <!-- AWG Converter (enhanced) -->
      <div class="std-card" id="std-extra-awg" data-cat="puil" style="background:var(--bg2); border:1px solid var(--line); border-radius:16px; padding:24px;">
        <div style="font-size:12px; color:var(--accent); font-family:var(--mono); margin-bottom:8px;">AWG ↔ mm²</div>
        <h3 style="font-size:18px; margin-bottom:12px;">🔢 KONVERTER AWG ↔ mm²</h3>
        <p style="color:var(--text2); font-size:13px; margin-bottom:14px;">Konversi American Wire Gauge ke luas penampang metrik + diameter & ampacity kasar.</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; align-items:end; min-width:0;">
          <div class="puil-field" style="flex-direction:column; align-items:stretch;">
            <span class="puil-lbl" style="width:auto;">Pilih AWG</span>
            <select id="awg-select" class="puil-inp" onchange="ElektroStandards.convertAWG()">
              ${AWG_TABLE.map(a => `<option value="${a.area}" data-awg="${a.awg}" data-dia="${a.dia}" data-amp="${a.amp}">${a.awg} AWG → ${a.area} mm²</option>`).join('')}
            </select>
          </div>
          <div class="puil-field" style="flex-direction:column; align-items:stretch;">
            <span class="puil-lbl" style="width:auto;">Atau input mm² manual</span>
            <input id="awg-mm2-in" type="number" step="0.01" placeholder="mis. 2.5" class="puil-inp" oninput="ElektroStandards.convertFromMM2(this.value)">
          </div>
        </div>
        <div style="margin-top:14px; padding:14px; background:var(--bg3); border:1px solid var(--line); border-radius:12px; text-align:center; overflow:hidden; min-width:0;">
          <div style="font-size:28px; font-weight:800; color:var(--accent); font-family:var(--mono);" id="awg-res-val">5.26</div>
          <div style="font-size:11px; color:var(--text3); font-family:var(--mono);">mm² — Luas Penampang</div>
          <div style="font-size:12px; color:var(--text2); margin-top:6px; font-family:var(--mono);" id="awg-res-extra">Ø 2.59 mm • ~30 A (kasar)</div>
          <div style="font-size:11px; color:var(--text3); margin-top:4px;" id="awg-res-kha">Setara KHA → 6 mm² (34A) terdekat</div>
        </div>
        <div style="margin-top:10px; font-size:11px; color:var(--text3);"><i>Rumus: d = 0.127·92<sup>(36-AWG)/39</sup> mm — ampacity kasar udara bebas, derating berlaku.</i></div>
      </div>

      <!-- SMD Guide -->
      <div class="std-card" id="std-extra-smd" data-cat="komponen" style="background:var(--bg2); border:1px solid var(--line); border-radius:16px; padding:24px;">
        <h3 style="font-size:18px; margin-bottom:12px;">🔬 PANDUAN SMD (Surface Mount)</h3>
        <p style="color:var(--text2); font-size:13px; margin-bottom:10px;">Ukuran paket resistor/kapasitor SMD — Imperial vs Metric (EIA).</p>
        <div style="overflow-x:auto;">
          <table class="puil-table"><thead><tr><th>Imperial</th><th>Metric</th><th>Dimensi</th><th>Visual</th></tr></thead>
            <tbody>
              ${STANDARDS_DATA.smd_sizes.map(s => `
                <tr><td><span class="s-badge" style="background:var(--bg3); border:1px solid var(--line); color:var(--accent)">${s.imp}</span></td><td>${s.met}</td><td>${s.dim} mm</td><td><div style="width:${Math.min(32, parseFloat(s.dim)*6)}px; height:${Math.min(16, parseFloat(s.dim.split('×')[1])*6)}px; background:var(--accent); border:1px solid var(--line); border-radius:2px;"></div></td></tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div style="margin-top:10px; font-size:11px; color:var(--text3);"><i>0402 = 1.0×0.5 mm paling umum untuk wearable; 2512 untuk power.</i></div>
      </div>

      <!-- Resistor E12 & Color -->
      <div class="std-card" id="std-extra-resistor" data-cat="komponen" style="background:var(--bg2); border:1px solid var(--line); border-radius:16px; padding:24px;">
        <h3 style="font-size:18px; margin-bottom:12px;">🎨 STANDAR RESISTOR E12 & KODE WARNA</h3>
        <p style="color:var(--text2); font-size:12px; margin-bottom:8px;">Deret nilai komersial E12 (×10<sup>n</sup>):</p>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px;">${STANDARDS_DATA.resistor_guide.e12.map(v => `<span style="padding:4px 8px; background:var(--bg3); border:1px solid var(--line); border-radius:6px; font-family:var(--mono); font-size:11px; font-weight:700;">${v}</span>`).join('')}</div>
        <div style="overflow-x:auto;">
          <table class="puil-table"><thead><tr><th>Warna</th><th>Digit</th><th>Pengali</th><th>Toleransi</th></tr></thead>
            <tbody>${STANDARDS_DATA.resistor_guide.bands.map(b => `<tr><td><strong>${b.color}</strong></td><td>${b.val}</td><td>${b.mult}</td><td style="color:var(--green)">${b.tol}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <a onclick="switchTab('resistor')" style="display:inline-block; margin-top:12px; font-size:12px; color:var(--accent); cursor:pointer; text-decoration:underline;">→ Buka kalkulator warna resistor</a>
      </div>

      <!-- IEC vs ANSI Symbols -->
      <div class="std-card" id="std-extra-symbols" data-cat="puil" style="background:var(--bg2); border:1px solid var(--line); border-radius:16px; padding:24px;">
        <h3 style="font-size:18px; margin-bottom:12px;">📐 SIMBOL IEC vs ANSI</h3>
        <p style="color:var(--text2); font-size:13px; margin-bottom:10px;">Perbandingan standar Eropa (IEC 60617) vs Amerika (ANSI Y32).</p>
        <div style="overflow-x:auto;">
          <table class="puil-table"><thead><tr><th>Komponen</th><th>IEC</th><th>ANSI</th></tr></thead>
            <tbody>${STANDARDS_DATA.symbols.map(s => `<tr><td><strong>${s.name}</strong></td><td style="font-size:12px; color:var(--text2)">${s.iec}</td><td style="font-size:12px; color:var(--text2)">${s.ansi}</td></tr>`).join('')}</tbody>
          </table>
        </div>
      </div>
    `;
    grid.insertAdjacentHTML('beforeend', extraHTML);
    this.convertAWG();
  },

  bindEvents(){
    // optional: listen for switchTab to refresh AWG if needed
    window.addEventListener('hashchange', ()=>{ if(location.hash.includes('standards')) this.convertAWG(); });
  },

  convertAWG() {
    const sel = document.getElementById('awg-select');
    const out = document.getElementById('awg-res-val');
    const extra = document.getElementById('awg-res-extra');
    const kha = document.getElementById('awg-res-kha');
    if(!sel || !out) return;
    const opt = sel.options[sel.selectedIndex];
    const area = sel.value;
    const dia = opt ? opt.dataset.dia : '';
    const amp = opt ? opt.dataset.amp : '';
    const awg = opt ? opt.dataset.awg : '';
    out.textContent = area;
    if(extra) extra.textContent = `Ø ${dia||'-'} mm • ~${amp||'-'} A (kasar) • ${awg||''} AWG`;
    if(kha){
      // cari KHA terdekat
      const PUIL = [1.5,2.5,4,6,10,16,25,35,50,70,95,120];
      const KHAvals = [15,20,27,34,46,61,80,99,125,160,195,225];
      const v = parseFloat(area);
      let idx = PUIL.findIndex(x=> x>=v);
      if(idx===-1) idx=PUIL.length-1;
      if(idx!==-1) kha.textContent = `Setara KHA → ${PUIL[idx]} mm² (${KHAvals[idx]}A) terdekat`;
      // sync mm2 input
      const mmIn = document.getElementById('awg-mm2-in');
      if(mmIn && document.activeElement!==mmIn) mmIn.value = area;
    }
  },

  convertFromMM2(val){
    const v = parseFloat(val);
    if(!v || v<=0) return;
    // cari AWG terdekat
    let best = AWG_TABLE[0], bestDiff = Infinity;
    AWG_TABLE.forEach(a=>{
      const d = Math.abs(parseFloat(a.area)-v);
      if(d<bestDiff){ bestDiff=d; best=a; }
    });
    const sel = document.getElementById('awg-select');
    if(sel){
      for(let i=0;i<sel.options.length;i++){
        if(sel.options[i].dataset.awg===best.awg){ sel.selectedIndex=i; break; }
      }
      this.convertAWG();
    }
  }
};

window.ElektroStandards = ElektroStandards;
// Auto-init on DOM ready if page already loaded
if(document.readyState!=='loading') setTimeout(()=>ElektroStandards.init(), 0);
else document.addEventListener('DOMContentLoaded', ()=>ElektroStandards.init());
// Also hook to switchTab
const _origSwitch = window.switchTab;
if(typeof _origSwitch==='function'){
  // will be wrapped in app.js, but ensure init on standards tab
  const chk = setInterval(()=>{
    if(window.switchTab && window.switchTab!==_origSwitch){
      clearInterval(chk);
    }
  }, 500);
}

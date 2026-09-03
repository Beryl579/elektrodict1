/**
 * ElektroDict Standards Module
 * PUIL 2011, IEC vs ANSI Comparison, and AWG Converter.
 */
// fallback data to prevent ReferenceError if STANDARDS_DATA / AWG_TABLE not provided elsewhere
const STANDARDS_DATA = typeof globalThis.STANDARDS_DATA !== 'undefined' ? globalThis.STANDARDS_DATA : {
  k3: [
    {rule:'Putuskan Sumber Tegangan',desc:'Pastikan rangkaian bebas tegangan sebelum menyentuh.'},
    {rule:'Amankan dari Rekoneksi',desc:'Pasang LOTO (Lock Out Tag Out) agar tidak tersambung ulang.'},
    {rule:'Verifikasi Tanpa Tegangan',desc:'Ukur dengan testpen/multimeter yang tervalidasi.'},
    {rule:'Pentanahan & Hubung Singkat',desc:'Grounding untuk buang sisa muatan.'},
    {rule:'Proteksi Area Bertegangan',desc:'Beri barrier pada bagian yang masih aktif.'}
  ],
  kha: [
    {size:'1.5 mm²',cap:'15 A',load:'3.300 W'},
    {size:'2.5 mm²',cap:'20 A',load:'4.400 W'},
    {size:'4 mm²',cap:'27 A',load:'5.940 W'},
    {size:'6 mm²',cap:'34 A',load:'7.480 W'}
  ],
  ip_ratings: [
    {code:'IP20',solid:'Jari',liquid:'Tidak proteksi',usage:'Indoor'},
    {code:'IP44',solid:'>1mm',liquid:'Cipratan',usage:'Kamar mandi'},
    {code:'IP65',solid:'Debu',liquid:'Semprotan',usage:'Outdoor'},
    {code:'IP68',solid:'Kedap',liquid:'Rendam',usage:'Terbenam'}
  ],
  resistor_guide: {
    e12:['10','12','15','18','22','27','33','39','47','56','68','82'],
    bands:[
      {color:'Hitam',val:'0',mult:'1',tol:'-'},
      {color:'Coklat',val:'1',mult:'10',tol:'±1%'},
      {color:'Merah',val:'2',mult:'100',tol:'±2%'}
    ]
  },
  smd_sizes:[
    {imp:'0402',met:'1005',dim:'1.0x0.5'},
    {imp:'0603',met:'1608',dim:'1.6x0.8'},
    {imp:'0805',met:'2012',dim:'2.0x1.2'}
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
    {name:'Kapasitor',iec:'2 garis',ansi:'2 garis lengkung'}
  ]
};
const AWG_TABLE = typeof globalThis.AWG_TABLE !== 'undefined' ? globalThis.AWG_TABLE : [
  {awg:'10',area:'5.26'},{awg:'12',area:'3.31'},{awg:'14',area:'2.08'},{awg:'16',area:'1.31'},{awg:'18',area:'0.82'}
];

const ElektroStandards = {
  init() {
    const container = document.getElementById('page-standards');
    if (!container) return;
    if(container.dataset.stdInit==='1') return;
    if(!STANDARDS_DATA || !AWG_TABLE) return;
    // keep static PUIL calculator from index.html (has #puil-daya)
    if(document.getElementById('puil-daya')) return;
    container.dataset.stdInit='1';
    container.innerHTML = `
      <div class="h-top">
        <h2 class="h-title">📜 Standar & K3 Elektronika</h2>
        <p class="h-sub">Referensi PUIL 2011, Protokol Keselamatan Kerja (K3), dan Simbol Internasional.</p>
      </div>

      <div class="s-grid">
        <!-- K3 Section -->
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

        <!-- KHA Section -->
        <div class="s-card">
          <div class="s-card-head">⚡ KHA (Kuat Hantar Arus)</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Ukuran Kabel</th>
                  <th>Kapasitas (A)</th>
                  <th>Beban Maks</th>
                </tr>
              </thead>
              <tbody>
                ${STANDARDS_DATA.kha.map(k => `
                  <tr>
                    <td><strong>${k.size}</strong></td>
                    <td style="color:var(--accent)">${k.cap}</td>
                    <td class="s-small">${k.load}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- IP Rating Section -->
        <div class="s-card">
          <div class="s-card-head">💧 Ingress Protection (IP) Guide</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Debu / Air</th>
                  <th>Rekomendasi</th>
                </tr>
              </thead>
              <tbody>
                ${STANDARDS_DATA.ip_ratings.map(i => `
                  <tr>
                    <td><span class="s-badge" style="background:var(--bg3); border:1px solid var(--accent)">${i.code}</span></td>
                    <td class="s-small">${i.solid} / ${i.liquid}</td>
                    <td class="s-small">${i.usage}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Resistor Section -->
        <div class="s-card full-w">
          <div class="s-card-head">🎨 Standar Resistor (Color & E12)</div>
          <div class="s-card-body">
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
              <div>
                <p class="s-note" style="margin-bottom:10px;">Deret Nilai E12 (Tersedia Komersial):</p>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${STANDARDS_DATA.resistor_guide.e12.map(v => `<span class="s-badge">${v}</span>`).join('')}
                </div>
              </div>
              <div>
                <table class="s-table">
                  <thead>
                    <tr>
                      <th>Warna</th>
                      <th>Nilai</th>
                      <th>Multi</th>
                      <th>Tol</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${STANDARDS_DATA.resistor_guide.bands.map(b => `
                      <tr>
                        <td><strong>${b.color}</strong></td>
                        <td>${b.val}</td>
                        <td>10<sup>${Math.log10(parseFloat(b.mult)||1)}</sup></td>
                        <td style="color:var(--green)">${b.tol}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- SMD Section -->
        <div class="s-card full-w">
          <div class="s-card-head">🔬 Ukuran Komponen SMD (Surface Mount)</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Imperial Code</th>
                  <th>Metric (EIA)</th>
                  <th>Dimensi (P x L)</th>
                  <th>Visual Ref</th>
                </tr>
              </thead>
              <tbody>
                ${STANDARDS_DATA.smd_sizes.map(s => `
                  <tr>
                    <td><span class="s-badge" style="color:var(--accent)">${s.imp}</span></td>
                    <td>${s.met}</td>
                    <td>${s.dim}</td>
                    <td><div style="width:${parseFloat(s.dim)*10}px; height:${parseFloat(s.dim.split('x')[1])*10}px; background:var(--bg3); border:1px solid var(--line); border-radius:1px;"></div></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- PUIL 2011 Section -->
        <div class="s-card">
          <div class="s-card-head">🇮🇩 PUIL 2011 (Kode Warna Kabel)</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Fungsi / Jalur</th>
                  <th>Warna Standar</th>
                </tr>
              </thead>
              <tbody>
                ${STANDARDS_DATA.puil2011.map(w => `
                  <tr>
                    <td>
                      <div class="s-lbl">${w.title}</div>
                    </td>
                    <td>
                      <div style="display:flex; align-items:center; gap:10px;">
                        <div class="color-swatch" style="background: ${w.color}; border: 1px solid rgba(255,255,255,0.1)"></div>
                        <span class="s-badge" style="background: ${w.color}33; color: ${w.color === '#000000' ? '#fff' : w.color}">${w.label}</span>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Symbol Comparison -->
        <div class="s-card">
          <div class="s-card-head">📐 Perbandingan Simbol (IEC vs ANSI)</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Komponen</th>
                  <th>IEC (Eropa)</th>
                  <th>ANSI (USA)</th>
                </tr>
              </thead>
              <tbody>
                ${STANDARDS_DATA.symbols.map(s => `
                  <tr>
                    <td><strong>${s.name}</strong></td>
                    <td class="s-small">${s.iec}</td>
                    <td class="s-small">${s.ansi}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- AWG Converter -->
        <div class="s-card full-w">
          <div class="s-card-head">🔢 Kalkulator AWG ke mm²</div>
          <div class="s-card-body">
            <div class="awg-flex">
              <div class="awg-input-wrap">
                <label>Pilih Ukuran AWG</label>
                <select id="awg-select" class="s-select" onchange="ElektroStandards.convertAWG()">
                  ${AWG_TABLE.map(a => `<option value="${a.area}">${a.awg} AWG</option>`).join('')}
                </select>
              </div>
              <div class="awg-result-wrap">
                <div class="awg-val" id="awg-res-val">6.0</div>
                <div class="awg-unit">mm² (Penampang)</div>
              </div>
            </div>
            <p class="s-note">Catatan: Nilai nominal area penampang kabel sesuai standar kelistrikan umum.</p>
          </div>
        </div>
      </div>
    `;
    this.convertAWG();
  },

  convertAWG() {
    const sel = document.getElementById('awg-select');
    const out = document.getElementById('awg-res-val');
    if(!sel || !out) return;
    out.textContent = sel.value;
  }
};

window.ElektroStandards = ElektroStandards;

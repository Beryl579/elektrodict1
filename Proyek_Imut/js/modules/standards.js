/**
 * ElektroDict Standards Module
 * PUIL 2011, IEC vs ANSI Comparison, and AWG Converter.
 */

const ElektroStandards = {
  init() {
    const container = document.getElementById('page-standards');
    if (!container) return;

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
    const val = document.getElementById('awg-select').value;
    document.getElementById('awg-res-val').textContent = val;
  }
};

window.ElektroStandards = ElektroStandards;

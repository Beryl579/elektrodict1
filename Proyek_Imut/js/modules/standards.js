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
        <h2 class="h-title">📜 Standar & Kode</h2>
        <p class="h-sub">Referensi PUIL 2011, Simbol Internasional, dan Konversi Kabel.</p>
      </div>

      <div class="s-grid">
        <!-- PUIL 2011 Section -->
        <div class="s-card">
          <div class="s-card-head">🇮🇩 PUIL 2011 (Warna Kabel)</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Fungsi</th>
                  <th>ID</th>
                  <th>Warna</th>
                </tr>
              </thead>
              <tbody>
                ${STANDARDS_DATA.puil2011.map(w => `
                  <tr>
                    <td>${w.label}</td>
                    <td><span class="s-badge">${w.id}</span></td>
                    <td>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <div class="color-swatch" style="background: ${w.hex}"></div>
                        ${w.color}
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
          <div class="s-card-head">📐 Perbandingan Simbol</div>
          <div class="s-card-body">
            <table class="s-table">
              <thead>
                <tr>
                  <th>Komponen</th>
                  <th>IEC (Intl)</th>
                  <th>ANSI (US)</th>
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
                <select id="awg-select" onchange="ElektroStandards.convertAWG()">
                  ${AWG_TABLE.map(a => `<option value="${a.area}">${a.awg} AWG</option>`).join('')}
                </select>
              </div>
              <div class="awg-result-wrap">
                <div class="awg-val" id="awg-res-val">6.0</div>
                <div class="awg-unit">mm² (Cross Section)</div>
              </div>
            </div>
            <p class="s-note">Catatan: Nilai di atas adalah estimasi nominal area penampang kabel padat/serabut standar.</p>
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

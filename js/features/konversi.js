/**
 * Unit Conversion Module
 * Menangani logika konversi satuan listrik (Tegangan, Arus, Daya, dll.)
 */

const ElektroKonversi = {
  /**
   * Inisialisasi konversi (render list di UI)
   */
  init() {
    const list = document.getElementById('konv-list');
    if (!list) return;

    list.innerHTML = KONV_DATA.map(k => {
      const unit0 = k.units[0];
      const unit1 = k.units.length > 1 ? k.units[1] : k.units[0];

      return `
        <div class="konv-card">
          <div class="konv-head">
            <span class="konv-icon">${k.icon}</span>
            <span class="konv-title">${k.label}</span>
          </div>
          <div class="konv-body">
            <div class="konv-row">
              <input type="number" class="konv-inp" id="ki-${k.id}-0" value="1" oninput="ElektroKonversi.convert('${k.id}',0)">
              <select class="konv-sel" id="ks-${k.id}-0" onchange="ElektroKonversi.convert('${k.id}',0)">
                ${k.units.map((u, i) => `<option value="${i}">${u}</option>`).join('')}
              </select>
            </div>
            <div class="konv-eq">=</div>
            <div class="konv-row">
              <input type="number" class="konv-inp" id="ki-${k.id}-1" readonly>
              <select class="konv-sel" id="ks-${k.id}-1" onchange="ElektroKonversi.convert('${k.id}',0)">
                ${k.units.map((u, i) => `<option value="${i}" ${i === 1 ? 'selected' : ''}>${u}</option>`).join('')}
              </select>
            </div>
          </div>
        </div>`;
    }).join('');

    // Initial conversion for all
    KONV_DATA.forEach(k => this.convert(k.id, 0));
  },

  /**
   * Lakukan konversi
   * @param {string} id - ID kategori (misal: 'tegangan')
   * @param {number} dir - 0 untuk input atas ke bawah, 1 untuk sebaliknya
   */
  convert(id, dir) {
    const k = KONV_DATA.find(x => x.id === id);
    if (!k) return;

    const fromIdx = parseInt(document.getElementById(`ks-${id}-${dir}`).value);
    const toIdx = parseInt(document.getElementById(`ks-${id}-${1 - dir}`).value);
    const val = parseFloat(document.getElementById(`ki-${id}-${dir}`).value);

    if (isNaN(val)) {
      document.getElementById(`ki-${id}-${1 - dir}`).value = '';
      return;
    }

    let result;
    if (k.custom) {
      result = this.handleCustom(id, val, fromIdx, toIdx);
    } else {
      let base;
      if (k.special && k.special.toBase) {
        base = k.special.toBase(val, fromIdx);
      } else {
        base = val * k.toBase[fromIdx];
      }

      if (k.special && k.special.fromBase) {
        result = k.special.fromBase(base, toIdx);
      } else {
        result = base / k.toBase[toIdx];
      }
    }

    // Format output
    const out = document.getElementById(`ki-${id}-${1 - dir}`);
    if (result === 0) out.value = 0;
    else if (Math.abs(result) < 0.0001 || Math.abs(result) > 1000000) {
      out.value = result.toExponential(4);
    } else {
      out.value = parseFloat(result.toFixed(6));
    }
  },

  /**
   * Handle konversi khusus (misal: dB)
   */
  handleCustom(id, val, f, t) {
    if (id === 'db') {
      // Sangat sederhana untuk contoh: Rasio ke dB
      if (f === t) return val;
      const base = f === 0 ? 20 : 10;
      const target = t === 0 ? 20 : 10;
      // Assume input is gain ratio if coming from nowhere? 
      // This is a placeholder for specific dB logic if needed.
      return val; 
    }
    return val;
  }
};

window.ElektroKonversi = ElektroKonversi;
function initKonversi() { ElektroKonversi.init(); }

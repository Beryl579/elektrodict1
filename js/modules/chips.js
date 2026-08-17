/**
 * ElektroDict Chip Library Module
 * IC Pinout Database & Visual Viewer.
 */

const ElektroChips = {
  selectedChip: null,

  init() {
    const container = document.getElementById('page-chips');
    if (!container) return;

    container.innerHTML = `
      <div class="h-top">
        <h2 class="h-title">💾 Chip Lib & Pinout</h2>
        <p class="h-sub">Database pinout IC, mikrokontroler, dan link datasheet.</p>
      </div>

      <div class="c-search-bar">
        <input type="text" id="chip-search" placeholder="Cari IC (misal: 555, ESP32, 7805)..." oninput="ElektroChips.renderList(this.value)">
      </div>

      <div class="c-flex">
        <div class="c-list-side" id="chip-list"></div>
        <div class="c-viewer-side" id="chip-viewer">
          <div class="c-empty-view">Pilih chip dari daftar untuk melihat pinout detail.</div>
        </div>
      </div>
    `;
    this.renderList();
  },

  renderList(query = '') {
    const listEl = document.getElementById('chip-list');
    if (!listEl) return;

    const filtered = CHIP_DATA.filter(c => 
      c.name.toLowerCase().includes(query.toLowerCase()) || 
      c.id.toLowerCase().includes(query.toLowerCase())
    );

    listEl.innerHTML = filtered.map(c => `
      <div class="c-item ${this.selectedChip?.id === c.id ? 'active' : ''}" onclick="ElektroChips.view('${c.id}')">
        <div class="c-item-name">${c.name}</div>
        <div class="c-item-type">${c.type}</div>
      </div>
    `).join('');
  },

  view(id) {
    const chip = CHIP_DATA.find(c => c.id === id);
    if (!chip) return;

    this.selectedChip = chip;
    this.renderList(document.getElementById('chip-search').value);

    const viewer = document.getElementById('chip-viewer');
    viewer.innerHTML = `
      <div class="chip-detail-card">
        <div class="chip-header">
          <div class="chip-title-wrap">
            <h3>${chip.name}</h3>
            <span class="chip-badge">${chip.type}</span>
          </div>
          <p>${chip.desc}</p>
        </div>

        <div class="pinout-visual-container">
          ${this.renderVisual(chip)}
        </div>

        <div class="chip-actions">
          <a href="${chip.datasheet}" target="_blank" class="chip-btn-ds">📄 Buka Datasheet PDF</a>
          <button class="chip-btn-ask" onclick="qask('Jelaskan detail pinout dan cara menggunakan ${chip.name}')">💬 Tanya ElektroBot</button>
        </div>
      </div>
    `;
  },

  renderVisual(chip) {
    if (chip.type === 'DIP-8') {
      const pL = chip.pins.filter(p => p.n <= 4);
      const pR = chip.pins.filter(p => p.n > 4).reverse();
      return `
        <div class="dip-visual dip-8">
          <div class="dip-notch"></div>
          <div class="dip-side left">
            ${pL.map(p => `<div class="pin" title="${p.desc}"><span>${p.n}</span><strong>${p.label}</strong></div>`).join('')}
          </div>
          <div class="dip-side right">
            ${pR.map(p => `<div class="pin" title="${p.desc}"><strong>${p.label}</strong><span>${p.n}</span></div>`).join('')}
          </div>
        </div>
      `;
    } else if (chip.type === 'TO-220') {
      return `
        <div class="to-220-visual">
          <div class="to-hex-tab"></div>
          <div class="to-body">
            <div class="to-label">${chip.name}</div>
          </div>
          <div class="to-pins">
            ${chip.pins.map(p => `<div class="pin-to" title="${p.desc}"><span>${p.n}</span><strong>${p.label}</strong></div>`).join('')}
          </div>
        </div>
      `;
    } else {
      // General MCU / Module view
      return `
        <div class="mcu-visual">
          <div class="mcu-body">${chip.name}</div>
          <div class="mcu-pins-list">
            ${chip.pins.map(p => `
              <div class="mcu-pin-row">
                <span class="mcu-pn">${p.n}</span>
                <span class="mcu-pl">${p.label}</span>
                <span class="mcu-pd">${p.desc}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }
};

window.ElektroChips = ElektroChips;

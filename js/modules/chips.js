/**
 * ElektroDict Chip Library Module
 * IC Pinout Database & Visual Viewer.
 */

const CHIP_DATA = [
  // ── TIMER IC ──
  { id:'ne555', name:'NE555', type:'DIP-8', category:'Timer',
    desc:'Timer IC paling populer di dunia. Bisa mode monostable (tunda) dan astable (osilator). Output 200mA, tegangan 4.5-16V.',
    datasheet:'https://www.ti.com/lit/ds/symlink/ne555.pdf',
    pins:[
      {n:1,label:'GND',desc:'Ground'},
      {n:2,label:'TRIG',desc:'Trigger — mulai timing saat < 1/3 VCC'},
      {n:3,label:'OUT',desc:'Output — HIGH/LOW sesuai mode'},
      {n:4,label:'RESET',desc:'Reset — aktif LOW, hubung ke VCC jika tidak dipakai'},
      {n:5,label:'CONT',desc:'Control Voltage — threshold pengatur'},
      {n:6,label:'THRES',desc:'Threshold — selesai timing saat > 2/3 VCC'},
      {n:7,label:'DISCH',desc:'Discharge — kosongkan kapasitor timing'},
      {n:8,label:'VCC',desc:'Supply voltage 4.5-16V'}
    ]},

  // ── VOLTAGE REGULATOR ──
  { id:'lm7805', name:'LM7805', type:'TO-220', category:'Regulator',
    desc:'Regulator tegangan tetap 5V output. Input 7-35V, output 5V/1.5A. Sering dipakai di proyek Arduino & digital.',
    datasheet:'https://www.ti.com/lit/ds/symlink/lm7805c.pdf',
    pins:[
      {n:1,label:'IN',desc:'Input voltage 7-35V'},
      {n:2,label:'GND',desc:'Ground'},
      {n:3,label:'OUT',desc:'Output tetap 5V'}
    ]},
  { id:'lm7812', name:'LM7812', type:'TO-220', category:'Regulator',
    desc:'Regulator tegangan tetap 12V output. Input 14-35V, output 12V/1.5A. Cocok untuk sensor & motor kecil.',
    datasheet:'https://www.ti.com/lit/ds/symlink/lm7812.pdf',
    pins:[
      {n:1,label:'IN',desc:'Input voltage 14-35V'},
      {n:2,label:'GND',desc:'Ground'},
      {n:3,label:'OUT',desc:'Output tetap 12V'}
    ]},
  { id:'lm317', name:'LM317', type:'TO-220', category:'Regulator',
    desc:'Regulator adjustable 1.25-37V. Tinggal pakai 2 resistor untuk atur output. Output 1.5A.',
    datasheet:'https://www.ti.com/lit/ds/symlink/lm317.pdf',
    pins:[
      {n:1,label:'ADJ',desc:'Adjust — resistor pembagi ke GND'},
      {n:2,label:'OUT',desc:'Output voltage (adj)' },
      {n:3,label:'IN',desc:'Input voltage 3-40V'}
    ]},

  // ── OP-AMP / COMPARATOR ──
  { id:'lm358', name:'LM358', type:'DIP-8', category:'Op-Amp',
    desc:'Dual op-amp paling umum. Satu paket berisi 2 op-amp. Bisa dari single supply 3-32V. Cocok untuk penguat sinyal sensor.',
    datasheet:'https://www.ti.com/lit/ds/symlink/lm358.pdf',
    pins:[
      {n:1,label:'OUT A',desc:'Output op-amp A'},
      {n:2,label:'IN-A',desc:'Inverting input A'},
      {n:3,label:'IN+A',desc:'Non-inverting input A'},
      {n:4,label:'GND',desc:'Ground (atau V-)' },
      {n:5,label:'IN+B',desc:'Non-inverting input B'},
      {n:6,label:'IN-B',desc:'Inverting input B'},
      {n:7,label:'OUT B',desc:'Output op-amp B'},
      {n:8,label:'VCC',desc:'Supply voltage 3-32V'}
    ]},
  { id:'lm393', name:'LM393', type:'DIP-8', category:'Comparator',
    desc:'Dual comparator. Membandingkan 2 tegangan dan menghasilkan OUTPUT HIGH/LOW. Open collector — butuh pull-up resistor.',
    datasheet:'https://www.ti.com/lit/ds/symlink/lm393.pdf',
    pins:[
      {n:1,label:'OUT A',desc:'Output comparator A (open collector)'},
      {n:2,label:'IN-A',desc:'Inverting input A'},
      {n:3,label:'IN+A',desc:'Non-inverting input A'},
      {n:4,label:'GND',desc:'Ground'},
      {n:5,label:'IN+B',desc:'Non-inverting input B'},
      {n:6,label:'IN-B',desc:'Inverting input B'},
      {n:7,label:'OUT B',desc:'Output comparator B (open collector)'},
      {n:8,label:'VCC',desc:'Supply voltage 2-36V'}
    ]},

  // ── SHIFT REGISTER ──
  { id:'74hc595', name:'74HC595', type:'DIP-16', category:'Shift Register',
    desc:'8-bit shift register dengan output latch. Hemat pin MCU — cukup 3 pin (SRCLK, RCLK, SER) untuk kendali 8 output LED.',
    datasheet:'https://www.ti.com/lit/ds/symlink/sn74hc595.pdf',
    pins:[
      {n:1,label:'Q1',desc:'Output bit 1'},
      {n:2,label:'Q2',desc:'Output bit 2'},
      {n:3,label:'Q3',desc:'Output bit 3'},
      {n:4,label:'Q4',desc:'Output bit 4'},
      {n:5,label:'Q5',desc:'Output bit 5'},
      {n:6,label:'Q6',desc:'Output bit 6'},
      {n:7,label:'Q7',desc:'Output bit 7'},
      {n:8,label:'GND',desc:'Ground'},
      {n:9,label:'Q7S',desc:'Serial output (cascade)'},
      {n:10,label:'SRCLR',desc:'Shift register clear — aktif LOW'},
      {n:11,label:'SRCLK',desc:'Shift register clock'},
      {n:12,label:'RCLK',desc:'Register clock (latch)'},
      {n:13,label:'OE',desc:'Output enable — aktif LOW'},
      {n:14,label:'SER',desc:'Serial data input'},
      {n:15,label:'Q0',desc:'Output bit 0'},
      {n:16,label:'VCC',desc:'Supply voltage 2-6V'}
    ]},

  // ── LED DRIVER ──
  { id:'max7219', name:'MAX7219', type:'DIP-16', category:'LED Driver',
    desc:'Driver LED 7-segmen/LED matrix via SPI. Kendali 8 digit 7-segmen atau 64 LED dengan 3 pin SPI.',
    datasheet:'https://datasheets.maximintegrated.com/en/ds/MAX7219-MAX7221.pdf',
    pins:[
      {n:1,label:'DIN',desc:'Data in (SPI MOSI)'},
      {n:2,label:'DIGO',desc:'Digit 0 (common cathode)'},
      {n:3,label:'DIG1',desc:'Digit 1'},
      {n:4,label:'DIG2',desc:'Digit 2'},
      {n:5,label:'DIG3',desc:'Digit 3'},
      {n:6,label:'DIG4',desc:'Digit 4'},
      {n:7,label:'DIG5',desc:'Digit 5'},
      {n:8,label:'GND',desc:'Ground'},
      {n:9,label:'DIG6',desc:'Digit 6'},
      {n:10,label:'DIG7',desc:'Digit 7'},
      {n:11,label:'CS',desc:'Chip select (SPI SS)'},
      {n:12,label:'CLK',desc:'Clock (SPI SCK)'},
      {n:13,label:'ISET',desc:'Current set — resistor ke VCC'},
      {n:14,label:'VCC',desc:'Supply voltage 4-5.5V'},
      {n:15,label:'SEGO',desc:'Segment A (top)'},
      {n:16,label:'SEG7',desc:'Segment DP (dot)'}
    ]},

  // ── MICROCONTROLLER ──
  { id:'atmega328p', name:'ATmega328P', type:'DIP-28', category:'Mikrokontroler',
    desc:'MCU 8-bit AVR — jantung Arduino Uno. 32KB Flash, 2KB SRAM, 6 ADC (10-bit), 6 PWM, UART/SPI/I2C. Clock 16MHz.',
    datasheet:'https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf',
    pins:[
      {n:1,label:'PC6',desc:'Reset / PC6'},
      {n:2,label:'PD0',desc:'RXD (UART receive)'},
      {n:3,label:'PD1',desc:'TXD (UART transmit)'},
      {n:4,label:'PD2',desc:'INT0 (external interrupt)'},
      {n:5,label:'PD3',desc:'INT1 / PWM (OC2B)'},
      {n:6,label:'PD4',desc:'PD4'},
      {n:7,label:'VCC',desc:'Supply voltage 1.8-5.5V'},
      {n:8,label:'GND',desc:'Ground'},
      {n:9,label:'PB6',desc:'XTAL1 (crystal oscillator)'},
      {n:10,label:'PB7',desc:'XTAL2 (crystal oscillator)'},
      {n:11,label:'PD5',desc:'PWM (OC0B)'},
      {n:12,label:'PD6',desc:'PWM (OC0A)'},
      {n:13,label:'PD7',desc:'PD7'},
      {n:14,label:'PB0',desc:'ICP1 (input capture)'},
      {n:15,label:'PB1',desc:'OC1A (PWM)'},
      {n:16,label:'PB2',desc:'SS / OC1B (SPI slave select)'},
      {n:17,label:'PB3',desc:'MOSI / OC2A (SPI)'},
      {n:18,label:'PB4',desc:'MISO (SPI)'},
      {n:19,label:'PB5',desc:'SCK (SPI clock)'},
      {n:20,label:'AVCC',desc:'Analog supply'},
      {n:21,label:'AREF',desc:'Analog reference'},
      {n:22,label:'GND',desc:'Ground (analog)'},
      {n:23,label:'PC0',desc:'ADC0 (analog input)'},
      {n:24,label:'PC1',desc:'ADC1'},
      {n:25,label:'PC2',desc:'ADC2'},
      {n:26,label:'PC3',desc:'ADC3'},
      {n:27,label:'PC4',desc:'ADC4 / SDA (I2C)'},
      {n:28,label:'PC5',desc:'ADC5 / SCL (I2C)'}
    ]},

  // ── TRANSISTOR / MOSFET ──
  { id:'2n2222', name:'2N2222', type:'TO-92', category:'Transistor',
    desc:'NPN transistor umum. Penggunaan: switch digital atau penguat sinyal kecil. Ic max 800mA, Vce max 40V.',
    datasheet:'https://www.onsemi.com/pdf/datasheet/2n2222a-d.pdf',
    pins:[
      {n:1,label:'E',desc:'Emitter'},
      {n:2,label:'B',desc:'Base — kontrol arus dari Collector ke Emitter'},
      {n:3,label:'C',desc:'Collector'}
    ]},
  { id:'bc547', name:'BC547', type:'TO-92', category:'Transistor',
    desc:'NPN transistor serbaguna. Ic max 100mA, Vce max 45V. Cocok untuk switch LED & penguat kecil.',
    datasheet:'https://www.onsemi.com/pdf/datasheet/bc547-d.pdf',
    pins:[
      {n:1,label:'C',desc:'Collector'},
      {n:2,label:'B',desc:'Base — kontrol arus'},
      {n:3,label:'E',desc:'Emitter'}
    ]},
  { id:'irf540n', name:'IRF540N', type:'TO-220', category:'MOSFET',
    desc:'N-channel power MOSFET. Rdson 44mOhm, Id max 33A, Vds max 100V. Cocok untuk beban besar: motor, relay, lampu.',
    datasheet:'https://www.vishay.com/docs/91328/irf540n.pdf',
    pins:[
      {n:1,label:'G',desc:'Gate — kontrol ON/OFF (threshold ~4V)'},
      {n:2,label:'D',desc:'Drain — beban masuk'},
      {n:3,label:'S',desc:'Source — ground'}
    ]},

  // ── DIODE ──
  { id:'1n4007', name:'1N4007', type:'DO-41', category:'Diode',
    desc:'Diode penyearah 1A / 1000V. Sangat umum di catu daya AC-DC. Forward voltage ~0.7V.',
    datasheet:'https://www.vishay.com/docs/81181/1n4001.pdf',
    pins:[
      {n:1,label:'A',desc:'Anode (+) — arus masuk'},
      {n:2,label:'K',desc:'Cathode (-) — arus keluar (ada garis)'}
    ]},

  // ── MODULE ──
  { id:'hc-sr04', name:'HC-SR04', type:'Module', category:'Sensor',
    desc:'Sensor ultrasonik pengukur jarak 2cm-400cm. 4 pin: VCC, Trig, Echo, GND. Akurasi ±3mm.',
    datasheet:'https://www.electroschematics.com/wp-content/uploads/2013/07/HCSR04-datasheet-version-1.pdf',
    pins:[
      {n:1,label:'VCC',desc:'Supply voltage 5V'},
      {n:2,label:'TRIG',desc:'Trigger — HIGH pulse 10µs untuk mulai ukur'},
      {n:3,label:'ECHO',desc:'Echo — HIGH selama waktu pantulan (jarak = waktu × 343/2)'},
      {n:4,label:'GND',desc:'Ground'}
    ]},
  { id:'dht22', name:'DHT22 (AM2302)', type:'Module', category:'Sensor',
    desc:'Sensor suhu & kelembaban digital. Suhu -40~80°C (±0.5°C), kelembaban 0-100%RH (±2%). Satu data pin.',
    datasheet:'https://www.sparkfun.com/datasheets/Sensors/DHT22.pdf',
    pins:[
      {n:1,label:'VCC',desc:'Supply voltage 3.3-6V'},
      {n:2,label:'DATA',desc:'Data digital (butuh pull-up 4.7kΩ ke VCC)'},
      {n:3,label:'NC',desc:'Not connected'},
      {n:4,label:'GND',desc:'Ground'}
    ]},
  { id:'ads1115', name:'ADS1115', type:'Module', category:'ADC',
    desc:'ADC 16-bit via I2C. 4 channel analog input (atau 2 differential). Resolusi tinggi untuk sensor presisi.',
    datasheet:'https://www.ti.com/lit/ds/symlink/ads1115.pdf',
    pins:[
      {n:1,label:'VDD',desc:'Supply voltage 2.0-5.5V'},
      {n:2,label:'GND',desc:'Ground'},
      {n:3,label:'SCL',desc:'I2C clock'},
      {n:4,label:'SDA',desc:'I2C data'},
      {n:5,label:'ADDR',desc:'Address select — ke GND/VCC/SDA/SCL'},
      {n:6,label:'ALRT',desc:'Alert / ready flag'},
      {n:7,label:'AIN0',desc:'Analog input 0'},
      {n:8,label:'AIN1',desc:'Analog input 1'},
      {n:9,label:'AIN2',desc:'Analog input 2'},
      {n:10,label:'AIN3',desc:'Analog input 3'}
    ]},
  { id:'pca9685', name:'PCA9685', type:'Module', category:'PWM Driver',
    desc:'Driver PWM 16 channel via I2C. Sering dipakai untuk LED & servo. Frekuensi PWM bisa diatur 24-1526Hz.',
    datasheet:'https://www.nxp.com/docs/en/data-sheet/PCA9685.pdf',
    pins:[
      {n:1,label:'VCC',desc:'Supply voltage 2.3-5.5V'},
      {n:2,label:'GND',desc:'Ground'},
      {n:3,label:'SDA',desc:'I2C data'},
      {n:4,label:'SCL',desc:'I2C clock'},
      {n:5,label:'OE',desc:'Output enable — aktif LOW'},
      {n:6,label:'V+',desc:'LED supply (3.3-5V atau tegangan LED)'}
    ]},

  // ── MOTOR DRIVER ──
  { id:'l298n', name:'L298N', type:'Module', category:'Motor Driver',
    desc:'Dual H-bridge motor driver. Kendali 2 motor DC atau 1 stepper. Input 5-46V, output 2A per channel.',
    datasheet:'https://www.st.com/resource/en/datasheet/l298.pdf',
    pins:[
      {n:1,label:'OUT1',desc:'Motor A output 1'},
      {n:2,label:'OUT2',desc:'Motor A output 2'},
      {n:3,label:'VCC',desc:'Motor supply 5-46V'},
      {n:4,label:'IN1',desc:'Motor A input 1'},
      {n:5,label:'IN2',desc:'Motor A input 2'},
      {n:6,label:'ENA',desc:'Enable A — PWM untuk kecepatan motor A'},
      {n:7,label:'IN3',desc:'Motor B input 1'},
      {n:8,label:'IN4',desc:'Motor B input 2'},
      {n:9,label:'ENB',desc:'Enable B — PWM untuk kecepatan motor B'},
      {n:10,label:'OUT3',desc:'Motor B output 1'},
      {n:11,label:'OUT4',desc:'Motor B output 2'},
      {n:12,label:'GND',desc:'Ground'},
      {n:13,label:'VS',desc:'Logic supply (5V on-board regulator)'}
    ]}
];

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

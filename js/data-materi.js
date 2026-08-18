// ═══════════════════════════════════════════════════════════
// MATERI — modul belajar terstruktur (konten di-embed, offline-ready)
// KaTeX: inline \(...\), display $$...$$
// ═══════════════════════════════════════════════════════════
const MATERI_MODULES = [
  {
    id: 'dasar-listrik',
    emoji: '⚡',
    title: 'Dasar Listrik',
    subtitle: 'Tegangan, arus, resistansi, hukum Ohm, daya & energi',
    level: 'Pemula',
    durasi: '±25 menit',
    materi: ['Hukum Ohm', 'Rangkaian DC', 'Daya & Energi'],
    sections: [
      {
        id: 'muatan',
        emoji: '⚛️',
        title: 'Muatan & Beda Potensial',
        body: `<p>Listrik berasal dari partikel kecil bernama <strong>elektron</strong>. Atom terdiri dari inti (proton bermuatan <strong>+</strong> dan neutron netral) yang dikelilingi elektron bermuatan <strong>−</strong>. Pada bahan konduktor seperti tembaga, sebagian elektron bisa bergerak bebas — inilah pembawa arus listrik.</p>
<p>Muatan listrik dilambangkan \\(Q\\), satuannya <strong>coulomb (C)</strong>. Satu elektron membawa muatan sekitar \\(1{,}6 \\times 10^{-19}\\,\\text{C}\\).</p>
<p>Ketika ada perbedaan jumlah muatan antara dua titik (satu kelebihan elektron, satu kekurangan), timbul <strong>beda potensial</strong> — energi potensial per satuan muatan yang siap menggerakkan elektron:</p>
$$V = \\frac{W}{Q}$$
<p>dengan \\(V\\) = tegangan (volt), \\(W\\) = energi (joule), \\(Q\\) = muatan (coulomb).</p>
<div class="mt-tip">💡 <strong>Analogi air:</strong> bayangkan dua tangki air dengan ketinggian berbeda. Beda tinggi = beda potensial; aliran air lewat pipa = arus listrik; sempitnya pipa = hambatan.</div>`
      },
      {
        id: 'tegangan',
        emoji: '🔋',
        title: 'Tegangan (Volt)',
        body: `<p><strong>Tegangan listrik</strong> (simbol \\(V\\), satuan <strong>volt</strong>) adalah ukuran "tekanan" listrik yang mendorong elektron mengalir dari titik berpotensial tinggi ke rendah. Semakin besar tegangan, semakin kuat dorongannya.</p>
<p>Sumber tegangan umum: baterai (1,5 V; 9 V), aki (12 V), PLN (220 V AC). Tegangan diukur dengan <strong>voltmeter</strong> yang dipasang <strong>paralel</strong> terhadap komponen.</p>
<ul>
<li><strong>Tegangan DC</strong> — nilainya tetap terhadap waktu (baterai).</li>
<li><strong>Tegangan AC</strong> — nilainya berubah periodik (sinusoida), misal 220 V 50 Hz di Indonesia.</li>
</ul>`
      },
      {
        id: 'arus',
        emoji: '🌊',
        title: 'Arus Listrik (Ampere)',
        body: `<p><strong>Arus listrik</strong> (simbol \\(I\\), satuan <strong>ampere/A</strong>) adalah laju aliran muatan:</p>
$$I = \\frac{Q}{t}$$
<p>1 A = 1 coulomb per detik. Arus diukur dengan <strong>amperemeter</strong> yang dipasang <strong>seri</strong>.</p>
<p>Arah konvensional arus digambarkan dari <strong>+ ke −</strong>, padahal sebenarnya elektron bergerak dari <strong>− ke +</strong>. Keduanya sama-sama dipakai; yang penting konsisten.</p>
<ul>
<li><strong>DC</strong> (searah): mengalir satu arah, misal dari baterai.</li>
<li><strong>AC</strong> (bolak-balik): arah berubah periodik, misal dari PLN (50 Hz → berbalik 100× per detik).</li>
</ul>
<div class="mt-warn">⚠️ <strong>Ingat:</strong> amperemeter dipasang <strong>seri</strong>; voltmeter dipasang <strong>paralel</strong>. Terbalik pasang = bisa rusak!</div>`
      },
      {
        id: 'resistansi',
        emoji: '🧱',
        title: 'Resistansi (Ohm)',
        body: `<p><strong>Resistansi/hambatan</strong> (simbol \\(R\\), satuan <strong>ohm/Ω</strong>) adalah kemampuan bahan menahan aliran arus. Hambatan sebuah kawat bergantung pada empat hal:</p>
$$R = \\rho \\cdot \\frac{L}{A}$$
<ul>
<li>\\(\\rho\\) = resistivitas bahan (Ω·m) — tembaga kecil, karbon besar</li>
<li>\\(L\\) = panjang kawat (m) — makin panjang makin besar hambatan</li>
<li>\\(A\\) = luas penampang (m²) — makin tebal makin kecil hambatan</li>
<li>suhu — umumnya hambatan naik seiring suhu</li>
</ul>
<p><strong>Resistor</strong> adalah komponen dengan nilai hambatan tertentu (ditandai kode warna gelang). Contoh: resistor 100 Ω, 1 kΩ, 10 kΩ. Pelajari cara membacanya di tab <strong>Resistor</strong>.</p>`
      },
      {
        id: 'ohm',
        emoji: '🎛️',
        title: 'Hukum Ohm (+ Animasi Interaktif)',
        body: `<p><strong>Hukum Ohm</strong> adalah hubungan dasar antara tegangan, arus, dan hambatan:</p>
$$V = I \\cdot R$$
<p>Arus yang mengalir sebanding dengan tegangan dan berbanding terbalik dengan hambatan. Bentuk lain:</p>
$$I = \\frac{V}{R}, \\qquad R = \\frac{V}{I}$$
<p><strong>Coba sendiri:</strong> geser tegangan dan hambatan, amati bagaimana arus berubah dan lampu makin terang/redup 👇</p>
<div class="ohm-wrap" id="ohm-anim"></div>
<p>Contoh aplikasi: LED butuh arus ±20 mA dan tegangan jatuh ±2 V. Jika dipasang pada 5 V, resistor seri yang dibutuhkan:</p>
$$R = \\frac{5 - 2}{0{,}02} = 150\\,\\Omega$$`
      },
      {
        id: 'daya',
        emoji: '💡',
        title: 'Daya & Energi',
        body: `<p><strong>Daya listrik</strong> (simbol \\(P\\), satuan <strong>watt/W</strong>) adalah laju energi yang digunakan:</p>
$$P = V \\cdot I$$
<p>Kombinasi dengan hukum Ohm menghasilkan bentuk lain yang sering dipakai:</p>
$$P = I^2 \\cdot R, \\qquad P = \\frac{V^2}{R}$$
<p><strong>Energi listrik</strong> (simbol \\(W\\), satuan <strong>joule</strong> atau <strong>kWh</strong>):</p>
$$W = P \\cdot t$$
<p>PLN menagih berdasarkan energi dalam kWh (1 kWh = 1000 W selama 1 jam). Contoh: setrika 350 W dipakai 2 jam → energi = 0,35 kW × 2 jam = <strong>0,7 kWh</strong>.</p>`
      },
      {
        id: 'seri-paralel',
        emoji: '🔗',
        title: 'Rangkaian Seri & Paralel',
        body: `<p><strong>Seri</strong> — komponen berurutan dalam satu jalur:</p>
$$R_{\\text{total}} = R_1 + R_2 + \\cdots$$
<p>Arus sama di semua titik; tegangan sumber terbagi.</p>
<p><strong>Paralel</strong> — komponen bercabang:</p>
$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$$
<p>Tegangan sama di tiap cabang; arus terbagi. Khusus dua resistor:</p>
$$R_{\\text{total}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$
<div class="mt-tip">💡 Lampu rumah dipasang <strong>paralel</strong> — kalau satu mati, yang lain tetap menyala dan semua mendapat tegangan 220 V penuh.</div>`
      }
    ],
    contoh: [
      {
        judul: 'Hukum Ohm',
        soal: 'Sebuah resistor 1 kΩ dihubungkan ke baterai 9 V. Berapa arus yang mengalir?',
        langkah: [
          'Tuliskan yang diketahui: \\(V = 9\\,\\text{V}\\), \\(R = 1\\,\\text{k}\\Omega = 1000\\,\\Omega\\).',
          'Gunakan hukum Ohm: \\(I = \\dfrac{V}{R}\\).',
          'Hitung: \\(I = \\dfrac{9}{1000} = 0{,}009\\,\\text{A} = 9\\,\\text{mA}\\).',
          '<strong>Jawaban:</strong> arus yang mengalir sebesar <strong>9 mA</strong>.'
        ]
      },
      {
        judul: 'Daya Listrik',
        soal: 'Setrika listrik 220 V menggunakan daya 550 W. Berapa arus yang ditarik dan berapa hambatannya?',
        langkah: [
          'Diketahui \\(V = 220\\,\\text{V}\\), \\(P = 550\\,\\text{W}\\).',
          'Hitung arus: \\(I = \\dfrac{P}{V} = \\dfrac{550}{220} = 2{,}5\\,\\text{A}\\).',
          'Hitung hambatan: \\(R = \\dfrac{V}{I} = \\dfrac{220}{2{,}5} = 88\\,\\Omega\\) (atau \\(R = \\dfrac{V^2}{P}\\)).',
          '<strong>Jawaban:</strong> arus 2,5 A dan hambatan <strong>88 Ω</strong>.'
        ]
      },
      {
        judul: 'Seri & Paralel',
        soal: 'Dua resistor 100 Ω dan 300 Ω dipasang paralel, lalu hasilnya diseri dengan resistor 50 Ω. Hitung hambatan total rangkaian.',
        langkah: [
          'Hitung paralel dulu: \\(R_p = \\dfrac{100 \\times 300}{100 + 300} = \\dfrac{30000}{400} = 75\\,\\Omega\\).',
          'Total seri: \\(R_t = R_p + 50 = 75 + 50 = 125\\,\\Omega\\).',
          '<strong>Jawaban:</strong> hambatan total rangkaian <strong>125 Ω</strong>.'
        ]
      }
    ],
    soal: [
      { q: 'Satuan SI untuk tegangan listrik adalah…', opts: ['Ampere', 'Volt', 'Ohm', 'Watt'], ans: 1, exp: 'Tegangan diukur dalam volt (V).' },
      { q: 'Manakah rumus hukum Ohm yang benar?', opts: ['V = I / R', 'V = I × R', 'V = R / I', 'V = I + R'], ans: 1, exp: 'Hukum Ohm: tegangan = arus × hambatan (V = I·R).' },
      { q: 'Ammeter (alat ukur arus) harus dipasang…', opts: ['Paralel', 'Seri', 'Di mana saja', 'Seri-paralel'], ans: 1, exp: 'Ammeter dipasang seri agar seluruh arus melewatinya. Voltmeter justru paralel.' },
      { q: 'Lampu rumah umumnya dipasang secara…', opts: ['Seri', 'Paralel', 'Campuran', 'Tunggal'], ans: 1, exp: 'Paralel: tiap lampu mendapat 220 V penuh dan tetap menyala walau yang lain mati.' },
      { q: 'Sebuah resistor 2 kΩ dialiri arus 5 mA. Tegangan pada resistor adalah…', opts: ['0,4 V', '2,5 V', '10 V', '400 V'], ans: 2, exp: 'V = I × R = 0,005 × 2000 = 10 V.' }
    ]
  },
  {
    id: 'mikrokontroler',
    emoji: '🤖',
    title: 'Mikrokontroler',
    subtitle: 'Arsitektur Arduino Uno & ESP32, pinout, PWM, I2C/SPI/UART',
    level: 'Menengah',
    durasi: '±40 menit',
    materi: ['Arduino & ESP32', 'Pinout', 'PWM', 'I2C/SPI/UART'],
    sections: [
      {
        id: 'apa-itu-mcu',
        emoji: '🧠',
        title: 'Apa itu Mikrokontroler?',
        body: `<p><strong>Mikrokontroler (MCU)</strong> adalah komputer mini dalam satu chip: ada <strong>CPU</strong> (otak), <strong>memori</strong> (Flash untuk program, SRAM untuk variabel), dan <strong>periferal</strong> (GPIO, timer, ADC, komunikasi UART/I2C/SPI). Cukup tambah daya + komponen pendukung, langsung bisa diprogram.</p>
<p>Berbeda dengan <strong>mikroprosesor</strong> (CPU PC) yang butuh chip RAM, chipset, dan motherboard di luar — mikrokontroler semuanya sudah satu paket, cocok untuk perangkat kecil: lampu otomatis, robot, alat ukur, IoT.</p>
<ul>
<li><strong>AVR</strong> — jantung Arduino Uno/Nano (ATmega328P)</li>
<li><strong>ESP32</strong> — dual-core + WiFi/Bluetooth bawaan (IoT)</li>
<li><strong>STM32</strong> — keluarga ARM untuk industri</li>
<li><strong>RP2040</strong> — Raspberry Pi Pico</li>
</ul>
<p>Bahasa pemrograman paling umum: <strong>C/C++</strong> (Arduino IDE, PlatformIO) atau <strong>MicroPython</strong>.</p>
<div class="mt-tip">💡 Mikrokontroler = "otak" perangkat elektronik. Yang kita pelajari di Lab Proyek (Arduino Uno & ESP32) keduanya adalah mikrokontroler.</div>`
      },
      {
        id: 'arsitektur-uno',
        emoji: '🏗️',
        title: 'Arsitektur Arduino Uno (ATmega328P)',
        body: `<p>Arduino Uno ditenagai chip <strong>ATmega328P</strong> buatan Microchip (keluarga AVR):</p>
<ul>
<li><strong>CPU</strong>: 8-bit AVR @ 16 MHz — satu instruksi memproses 8 bit data sekaligus</li>
<li><strong>Flash 32 KB</strong> — tempat program disimpan (2 KB dipakai bootloader)</li>
<li><strong>SRAM 2 KB</strong> — variabel saat program berjalan (sangat terbatas!)</li>
<li><strong>EEPROM 1 KB</strong> — data yang harus bertahan saat mati (tulis pakai <code>EEPROM.write()</code>)</li>
<li><strong>GPIO</strong>: 14 digital (6 di antaranya PWM) + 6 analog input (ADC 10-bit)</li>
<li><strong>Komunikasi</strong>: UART, SPI, I2C — semuanya tersedia</li>
</ul>
<p>Karena terbatas, menulis program Uno harus hemat: variabel pakai <code>byte</code> bukan <code>int</code> kalau bisa, hindari <code>String</code> besar.</p>
<div class="mt-warn">⚠️ 2 KB SRAM sangat kecil — satu string panjang saja bisa bikin program hang. Selalu tes dengan Serial Monitor.</div>`
      },
      {
        id: 'arsitektur-esp32',
        emoji: '📶',
        title: 'Arsitektur ESP32 (ESP-WROOM-32)',
        body: `<p>ESP32 jauh lebih bertenaga — ini pilihan utama untuk proyek <strong>IoT</strong> karena WiFi & Bluetooth sudah tertanam:</p>
<ul>
<li><strong>CPU</strong>: Xtensa LX6 <strong>dual-core 32-bit</strong> @ 240 MHz</li>
<li><strong>SRAM 520 KB</strong> · <strong>Flash 4 MB</strong> · EEPROM emulasi di flash</li>
<li><strong>WiFi 802.11 b/g/n</strong> + <strong>Bluetooth 4.2</strong> (Classic & BLE)</li>
<li><strong>GPIO</strong>: 25 pin (ADC 12-bit ×18, DAC 8-bit ×2, touch ×10)</li>
<li><strong>PWM</strong>: 16 kanal (LEDC) — lebih banyak dari Uno</li>
<li><strong>Komunikasi</strong>: 3× UART, 2× I2C, 3× SPI</li>
</ul>
<table class="mt-table"><thead><tr><th>Spesifikasi</th><th>Arduino Uno</th><th>ESP32 DevKitC</th></tr></thead><tbody>
<tr><td>CPU</td><td>ATmega328P 8-bit 16 MHz</td><td>Dual-core 32-bit 240 MHz</td></tr>
<tr><td>SRAM</td><td>2 KB</td><td>520 KB</td></tr>
<tr><td>Flash</td><td>32 KB</td><td>4 MB</td></tr>
<tr><td>WiFi / Bluetooth</td><td>—</td><td>Ya</td></tr>
<tr><td>ADC</td><td>6 × 10-bit</td><td>18 × 12-bit</td></tr>
<tr><td>Level logika</td><td>5 V</td><td><strong>3,3 V</strong> (tidak 5 V tolerant!)</td></tr>
</tbody></table>
<div class="mt-warn">⚠️ ESP32 memakai logika 3,3 V. Memberi input 5 V langsung ke GPIO bisa <strong>merusak chip</strong> — gunakan level shifter atau pembagi tegangan.</div>`
      },
      {
        id: 'pinout-uno',
        emoji: '📍',
        title: 'Pinout Arduino Uno',
        body: `<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/arduino-uno-pinout.png" alt="Pinout Arduino Uno" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Klik gambar untuk memperbesar · sumber: Wikimedia Commons (CC BY-SA 4.0)</div></div>
<ul>
<li><strong>Daya</strong>: VIN (7–12 V), 5V, 3.3V, GND ×3, IOREF, RESET</li>
<li><strong>Digital</strong> pin 0–13; pin bertanda <code>~</code> (3, 5, 6, 9, 10, 11) mendukung <strong>PWM</strong></li>
<li><strong>Analog</strong> A0–A5 (ADC 10-bit) — juga bisa dipakai sebagai digital</li>
<li><strong>UART</strong>: pin 0 = RX, pin 1 = TX</li>
<li><strong>SPI</strong>: 10 = SS, 11 = MOSI, 12 = MISO, 13 = SCK</li>
<li><strong>I2C</strong>: A4 = SDA, A5 = SCL</li>
</ul>
<p>Contoh: nyalakan LED di pin 13 (LED bawaan board) — <code>pinMode(13, OUTPUT)</code> lalu <code>digitalWrite(13, HIGH)</code>.</p>`
      },
      {
        id: 'pinout-esp32',
        emoji: '📡',
        title: 'Pinout ESP32 DevKitC',
        body: `<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/esp32-devkitc-pinout.png" alt="Pinout ESP32 DevKitC" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Klik gambar untuk memperbesar · DOIT ESP32 DEVKIT V1 · sumber: Wikimedia Commons (CC BY-SA 4.0)</div></div>
<ul>
<li><strong>Daya</strong>: 3V3, 5V (VIN), GND; <code>EN</code> = reset</li>
<li><strong>GPIO aman dipakai</strong>: 2, 4, 5, 12–19, 21–27, 32, 33</li>
<li><strong>Jangan dipakai</strong>: GPIO 6–11 (terhubung flash internal)</li>
<li><strong>Input only</strong>: GPIO 34–39 (tidak ada output/pull-up internal)</li>
<li><strong>I2C default</strong>: SDA = GPIO 21, SCL = GPIO 22</li>
<li><strong>UART0</strong>: RX = GPIO 3, TX = GPIO 1 (dipakai untuk upload program)</li>
<li><strong>VSPI</strong>: MOSI = 23, MISO = 19, SCK = 18, CS = 5</li>
<li><strong>GPIO 0</strong> = tombol BOOT (tahan saat upload untuk mode flash)</li>
</ul>
<div class="mt-tip">💡 Tidak semua GPIO sama! Sebelum pakai pin, cek pinout dulu — salah pin = proyek tidak jalan.</div>`
      },
      {
        id: 'pwm',
        emoji: '🎛️',
        title: 'PWM — Mengatur Terang Lampu & Kecepatan Motor',
        body: `<p><strong>PWM (Pulse Width Modulation)</strong> = teknik menyalakan-mematikan pin sangat cepat. Mata manusia tidak bisa mengikuti — yang terlihat adalah <strong>terang rata-rata</strong>. Rasio nyala vs periode disebut <strong>duty cycle</strong>:</p>
$$D = \\frac{t_{\\text{on}}}{T} \\times 100\\%$$
<p>Tegangan rata-rata yang dirasakan beban:</p>
$$V_{\\text{rata-rata}} = D \\times V_{cc}$$
<p>Contoh: LED 5 V dengan duty 40% → terlihat seperti diberi ±2 V.</p>
<p><strong>Coba sendiri:</strong> geser duty cycle dan lihat bentuk gelombang + terang LED 👇</p>
<div class="ohm-wrap" id="pwm-anim"></div>
<p><strong>Arduino Uno</strong> — pin PWM: 3, 5, 6, 9, 10, 11. Nilai 0–255 (8-bit):</p>
<pre class="mt-code">void setup() { pinMode(9, OUTPUT); }
void loop() {
  analogWrite(9, 128);   // 128/255 ≈ 50% duty
  delay(100);
}</pre>
<p><strong>ESP32</strong> — kanal LEDC, frekuensi & resolusi diatur sendiri:</p>
<pre class="mt-code">void setup() {
  ledcSetup(0, 5000, 8);   // kanal 0, 5 kHz, 8-bit
  ledcAttachPin(2, 0);     // GPIO 2 → kanal 0
}
void loop() {
  ledcWrite(0, 128);       // 50% duty
  delay(100);
}</pre>`
      },
      {
        id: 'i2c',
        emoji: '🔌',
        title: 'I2C — 2 Kabel, Banyak Perangkat',
        body: `<p><strong>I2C (Inter-Integrated Circuit)</strong> pakai hanya <strong>2 kabel</strong>: <code>SDA</code> (data) dan <code>SCL</code> (clock), plus ground. Satu bus bisa memuat <strong>banyak perangkat</strong> — tiap perangkat punya <strong>alamat 7-bit</strong> (misal OLED 0x3C, MPU6050 0x68, DS1307 0x68).</p>
<ul>
<li>Kecepatan: 100 kbps (standar) sampai 3,4 Mbps</li>
<li>Dua kabel butuh <strong>pull-up resistor</strong> (biasanya sudah ada di modul)</li>
<li>Arduino Uno: SDA = A4, SCL = A5 · ESP32: SDA = 21, SCL = 22</li>
</ul>
<p>Contoh memindai perangkat I2C yang terpasang:</p>
<pre class="mt-code">#include &lt;Wire.h&gt;
void setup() {
  Serial.begin(9600);
  Wire.begin();                 // inisialisasi bus I2C
  for (byte addr = 1; addr &lt; 127; addr++) {
    Wire.beginTransmission(addr);
    if (Wire.endTransmission() == 0) {
      Serial.print("Ketemu I2C di alamat 0x");
      Serial.println(addr, HEX);
    }
  }
}
void loop() {}</pre>
<div class="mt-tip">💡 I2C dipakai untuk sensor yang butuh banyak data: OLED SSD1306, MPU6050 (gyro+akselerometer), BMP180, DS1307 (RTC).</div>`
      },
      {
        id: 'spi',
        emoji: '🔗',
        title: 'SPI — Cepat, 4 Kabel',
        body: `<p><strong>SPI (Serial Peripheral Interface)</strong> adalah bus <strong>full-duplex</strong> paling cepat — data dikirim dan diterima bersamaan. 4 kabel:</p>
<ul>
<li><code>MOSI</code> — Master Out, Slave In</li>
<li><code>MISO</code> — Master In, Slave Out</li>
<li><code>SCK</code> — clock (disinkronkan master)</li>
<li><code>SS/CS</code> — Chip Select, satu per slave (memilih perangkat)</li>
</ul>
<p>Kecepatan bisa puluhan Mbps — cocok untuk SD card, MAX7219 (dot matrix), MFRC522 (RFID), display TFT.</p>
<pre class="mt-code">#include &lt;SPI.h&gt;
void setup() {
  SPI.begin();  // Uno: MOSI=11, MISO=12, SCK=13, SS=10
  pinMode(10, OUTPUT);
  digitalWrite(10, HIGH);
}
void loop() {
  digitalWrite(10, LOW);       // aktifkan slave
  SPI.transfer(0x55);          // kirim byte
  digitalWrite(10, HIGH);      // nonaktifkan
  delay(100);
}</pre>
<div class="mt-warn">⚠️ Setiap slave butuh pin CS sendiri — banyak perangkat berarti banyak kabel kontrol. Kalau hanya 1 perangkat, CS bisa di-ground.</div>`
      },
      {
        id: 'uart',
        emoji: '📡',
        title: 'UART — Serial Paling Umum',
        body: `<p><strong>UART (Universal Asynchronous Receiver/Transmitter)</strong> memakai 2 kabel: <code>TX</code> (kirim) dan <code>RX</code> (terima) — <strong>disilang</strong> (TX perangkat A → RX perangkat B). Tidak ada clock: kecepatan disepakati lewat <strong>baud rate</strong>.</p>
<ul>
<li>Baud umum: 9600, 57600, 115200 — artinya <strong>bit per detik</strong></li>
<li>Format umum: 8 data bit, 1 stop bit, tanpa paritas (8N1)</li>
<li>Serial Monitor Arduino IDE memakai UART0 (Uno: pin 0/1)</li>
</ul>
<pre class="mt-code">void setup() {
  Serial.begin(9600);          // mulai serial 9600 baud
  Serial.println("ElektroDict!");  // kirim teks
}
void loop() {
  if (Serial.available()) {    // ada data masuk?
    char c = Serial.read();
    Serial.print("Diterima: ");
    Serial.println(c);
  }
}</pre>
<div class="mt-tip">💡 UART cocok untuk komunikasi 1-ke-1: GPS, modul HC-05 (Bluetooth), LoRa, dan debugging via Serial Monitor.</div>`
      },
      {
        id: 'perbandingan',
        emoji: '⚖️',
        title: 'Perbandingan I2C vs SPI vs UART',
        body: `<table class="mt-table"><thead><tr><th>Aspek</th><th>I2C</th><th>SPI</th><th>UART</th></tr></thead><tbody>
<tr><td>Kabel</td><td>2 (SDA, SCL)</td><td>4 (MOSI, MISO, SCK, CS)</td><td>2 (TX, RX)</td></tr>
<tr><td>Kecepatan</td><td>100 kbps – 3,4 Mbps</td><td>Mbps – puluhan Mbps</td><td>hingga ±5 Mbps</td></tr>
<tr><td>Mode</td><td>Half-duplex</td><td>Full-duplex</td><td>Full-duplex</td></tr>
<tr><td>Banyak perangkat</td><td>Ya (alamat)</td><td>Ya (CS per slave)</td><td>1-ke-1</td></tr>
<tr><td>Sinkronisasi</td><td>Ya (SCL)</td><td>Ya (SCK)</td><td>Tidak (asinkron)</td></tr>
<tr><td>Contoh modul</td><td>OLED, MPU6050, RTC</td><td>SD card, MAX7219, RFID</td><td>GPS, HC-05, Serial Monitor</td></tr>
</tbody></table>
<div class="mt-tip">💡 Aturan praktis: sedikit kabel & banyak sensor → <strong>I2C</strong>; butuh kecepatan tinggi → <strong>SPI</strong>; komunikasi jarak jauh/1 lawan 1 → <strong>UART</strong>.</div>`
      }
    ],
    contoh: [
      {
        judul: 'Duty Cycle PWM',
        soal: 'LED diberi PWM 5 V dengan duty cycle 40%. Berapa tegangan rata-rata yang "dirasakan" LED?',
        langkah: [
          'Diketahui \\(V_{cc} = 5\\,\\text{V}\\), \\(D = 40\\% = 0{,}4\\).',
          'Gunakan rumus: \\(V_{\\text{rata-rata}} = D \\times V_{cc}\\).',
          'Hitung: \\(V_{\\text{rata-rata}} = 0{,}4 \\times 5 = 2\\,\\text{V}\\).',
          '<strong>Jawaban:</strong> LED terlihat seperti diberi tegangan <strong>2 V</strong>.'
        ]
      },
      {
        judul: 'Memilih Pin ESP32',
        soal: 'Di ESP32, GPIO mana yang TIDAK boleh dipakai untuk mengendalikan output LED, dan mengapa?',
        langkah: [
          'GPIO yang tidak boleh dipakai: <strong>6, 7, 8, 9, 10, 11</strong>.',
          'Alasan: pin tersebut terhubung ke <strong>flash memory internal</strong> ESP32.',
          'Juga hindari GPIO 34–39 untuk output karena <strong>input only</strong> (tanpa pull-up internal).',
          '<strong>Jawaban:</strong> pakai GPIO aman seperti 2, 4, 5, 12–19, 21–27, 32, 33.'
        ]
      },
      {
        judul: 'Memilih Bus Komunikasi',
        soal: 'Kamu ingin menghubungkan 3 sensor: OLED (butuh banyak data), SD card (kecepatan tinggi), dan modul Bluetooth HC-05. Bus apa yang paling cocok untuk masing-masing?',
        langkah: [
          '<strong>OLED</strong> → <strong>I2C</strong>: hanya 2 kabel, alamat 7-bit, cukup untuk data tampilan.',
          '<strong>SD card</strong> → <strong>SPI</strong>: butuh kecepatan tinggi (menulis file), 4 kabel.',
          '<strong>HC-05</strong> → <strong>UART</strong>: komunikasi asinkron 1-ke-1 dengan perangkat luar.',
          '<strong>Jawaban:</strong> OLED=I2C, SD=SPI, HC-05=UART.'
        ]
      }
    ],
    soal: [
      { q: 'Chip (MCU) yang dipakai Arduino Uno adalah…', opts: ['ATmega328P', 'ESP32', 'STM32F103', 'RP2040'], ans: 0, exp: 'Arduino Uno memakai ATmega328P (AVR 8-bit 16 MHz).' },
      { q: 'Pin Arduino Uno yang mendukung PWM adalah…', opts: ['0, 1, 2, 3, 4, 5', '3, 5, 6, 9, 10, 11', 'A0–A5', 'Semua pin'], ans: 1, exp: 'Pin bertanda ~ (3, 5, 6, 9, 10, 11) punya hardware PWM.' },
      { q: 'GPIO ESP32 yang bersifat input-only (tidak bisa output) adalah…', opts: ['GPIO 0–5', 'GPIO 6–11', 'GPIO 34–39', 'GPIO 21–22'], ans: 2, exp: 'GPIO 34–39 hanya bisa input, tanpa pull-up internal.' },
      { q: 'Bus I2C menggunakan berapa kabel data/clock?', opts: ['1 (SDA saja)', '2 (SDA dan SCL)', '3 (MOSI, MISO, SCK)', '4 (TX, RX, VCC, GND)'], ans: 1, exp: 'I2C hanya 2 kabel: SDA (data) + SCL (clock), bisa banyak perangkat via alamat.' },
      { q: 'Serial.begin(9600) pada UART berarti…', opts: ['9600 byte per detik', '9600 bit per detik', '9600 volt', '9600 Hz'], ans: 1, exp: 'Baud rate 9600 = 9600 bit per detik.' }
    ]
  }

];

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
  },
  {
    id: 'instalasi-k3',
    emoji: '🛡️',
    title: 'Instalasi Listrik & K3',
    subtitle: 'PUIL 2011, KHA kabel, pengaman MCB/ELCB, pentanahan, IP rating & 5 Aturan Emas',
    level: 'Pemula',
    durasi: '±30 menit',
    materi: ['PUIL 2011', 'KHA Kabel', 'MCB & ELCB', 'Pentanahan', 'IP Rating', 'K3'],
    sections: [
      {
        id: 'komponen',
        emoji: '🔌',
        title: 'Sistem Kelistrikan Rumah & Komponen Utama',
        body: `<p>Instalasi rumah standar di Indonesia (1 fasa, 220 V) mengalir dari <strong>jaringan PLN</strong> → <strong>kWh meter</strong> (mencatat pemakaian energi) → <strong>MCB utama</strong> → <strong>ELCB/RCD</strong> → <strong>MCB grup</strong> (per ruangan/beban) → beban (lampu, stopkontak, AC).</p>
<ul>
<li><strong>kWh meter</strong> — alat ukur energi terpakai (kWh), dasar perhitungan tagihan.</li>
<li><strong>MCB</strong> — pengaman arus lebih & hubung singkat; bisa di-reset setelah trip.</li>
<li><strong>ELCB/RCD</strong> — mendeteksi arus bocor ke tanah dan memutus suplai dalam milidetik.</li>
<li><strong>Pentanahan (grounding)</strong> — jalur aman bagi arus gangguan menuju bumi.</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/mcb.jpg" alt="MCB (Miniature Circuit Breaker) satu kutub pada rel DIN" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">MCB satu kutub pada rel DIN · sumber: Wikimedia Commons, <i>File:Miniature circuit breaker.png</i> (CC BY-SA 4.0, Entekelec)</div></div>
<div class="mt-warn">⚠️ Urutan pengaman yang benar: MCB utama → ELCB → MCB grup. ELCB diletakkan <strong>setelah</strong> MCB utama agar bisa memutus seluruh instalasi saat terjadi kebocoran.</div>`,
        referensi: 'PUIL 2011 (SNI 0225:2011), Bab 3 — pengaman & koordinasi pengaman; IEC 60898 untuk MCB; gambar: Wikimedia Commons, File:Miniature circuit breaker.png (CC BY-SA 4.0, Entekelec).'
      },
      {
        id: 'kha',
        emoji: '📏',
        title: 'KHA Kabel & Ukuran Penampang',
        body: `<p><strong>KHA (Kemampuan Hantar Arus)</strong> adalah arus maksimum yang boleh dialirkan kabel secara terus-menerus tanpa merusak isolasinya. Ukuran kabel dipilih agar <strong>KHA ≥ arus beban</strong>.</p>
<p>Nilai KHA yang umum dipakai untuk kabel <strong>NYA</strong> (inti tembaga, isolasi PVC, metode pemasangan B1 — dalam pipa, suhu lingkungan 30 °C):</p>
<table class="mt-table"><thead><tr><th>Luas penampang</th><th>KHA (A)</th></tr></thead><tbody>
<tr><td>1,5 mm²</td><td>≈ 18 A</td></tr>
<tr><td>2,5 mm²</td><td>≈ 25 A</td></tr>
<tr><td>4 mm²</td><td>[perlu verifikasi] — lihat Tabel 7.3-1 PUIL 2011</td></tr>
<tr><td>6 mm²</td><td>[perlu verifikasi] — lihat Tabel 7.3-1 PUIL 2011</td></tr>
</tbody></table>
<p>Nilai sebenarnya <strong>bervariasi</strong> menurut metode pemasangan (A1, B1, C, …), jumlah penghantar berbeban, dan suhu lingkungan — untuk kasus spesifik selalu cek <strong>Tabel 7.3-1 PUIL 2011</strong>.</p>
<p>Selain KHA, PUIL 2011 menetapkan <strong>penampang minimum</strong>: <strong>1,5 mm²</strong> untuk sirkuit penerangan dan <strong>2,5 mm²</strong> untuk sirkuit tenaga (stopkontak).</p>
<div class="mt-tip">💡 Aturan koordinasi: arus pengenal pengaman (In MCB) harus ≤ KHA kabel — supaya MCB putus <em>sebelum</em> kabel panas. Contoh: kabel 1,5 mm² (KHA 18 A) aman dipasangi MCB 10 A atau 16 A.</div>`,
        referensi: 'PUIL 2011 (SNI 0225:2011), Tabel 7.3-1 (KHA) & Pasal 7.3 (penampang minimum 1,5 mm² penerangan / 2,5 mm² tenaga). Nilai 18 A & 25 A adalah nilai yang umum diajarkan untuk NYA metode B1; nilai ukuran lebih besar bervariasi per metode — [perlu verifikasi] per Tabel 7.3-1.'
      },
      {
        id: 'drop',
        emoji: '⚡',
        title: 'Susut Tegangan (Drop Tegangan)',
        body: `<p>Makin panjang kabel, makin besar tegangan yang "hilang" di sepanjang penghantar. Susut tegangan dihitung dari hambatan kawat:</p>
$$R = \\rho \\cdot \\frac{L}{A} \\qquad \\Rightarrow \\qquad \\Delta V = 2 \\cdot I \\cdot R$$
<p>Faktor 2 muncul karena arus melewati <strong>dua penghantar</strong> (fasa + netral) pada sistem 1 fasa. Resistivitas tembaga \\(\\rho_{Cu} \\approx 0{,}0175\\,\\Omega\\cdot\\text{mm}^2/\\text{m}\\).</p>
<p><strong>PUIL 2011 membatasi susut tegangan instalasi akhir maksimum 4%</strong> dari tegangan sumber (220 V → maksimum ±8,8 V).</p>
<div class="mt-tip">💡 Contoh: kabel NYA 2,5 mm² (R ≈ 7 mΩ/m) sepanjang 20 m dialiri 10 A → ΔV = 2 × 10 × (0,007 × 20) = 2,8 V ≈ 1,3% — masih aman di bawah 4%.</div>`,
        referensi: 'PUIL 2011 (SNI 0225:2011), Pasal 2.3 — susut tegangan maksimum 4% untuk instalasi akhir; rumus hambatan konduktor (fisika dasar, ρ tembaga = 0,0175 Ω·mm²/m).'
      },
      {
        id: 'pengaman',
        emoji: '🛡️',
        title: 'Pengaman: MCB, ELCB & RCBO',
        body: `<p><strong>MCB (Miniature Circuit Breaker)</strong> memutus rangkaian saat <strong>arus lebih</strong> (beban berlebih) atau <strong>hubung singkat</strong>. Trip-nya ganda: <em>thermal</em> (bimetal, lambat — untuk arus lebih kecil) dan <em>magnetik</em> (sangat cepat — untuk hubung singkat). Arus pengenal umum: 6, 10, 16, 20, 25, 32 A; karakteristik trip dibedakan kurva B/C/D.</p>
<p><strong>ELCB/RCD (Earth Leakage Circuit Breaker / Residual Current Device)</strong> membandingkan arus masuk (fasa) dengan arus keluar (netral). Jika ada selisih — artinya ada arus bocor ke tanah, misal lewat tubuh manusia — RCD memutus suplai dalam <strong>milidetik</strong>.</p>
<ul>
<li><strong>30 mA</strong> — proteksi manusia terhadap kejut listrik (standar instalasi rumah).</li>
<li><strong>300 mA</strong> — proteksi kebakaran (kebocoran ke rangka/bangunan).</li>
</ul>
<p><strong>RCBO</strong> = MCB + RCD dalam satu unit (proteksi arus lebih + arus bocor sekaligus).</p>
<div class="mt-warn">⚠️ RCD bukan pengganti MCB — keduanya saling melengkapi: MCB melindungi kabel dari arus lebih, RCD melindungi manusia dari arus bocor.</div>`,
        referensi: 'PUIL 2011 (SNI 0225:2011), Bab 3 — pengaman arus lebih & pengaman arus sisa; IEC 60898 (MCB) & IEC 61008/61009 (RCCB/RCBO); arus sisa 30 mA untuk proteksi kejut listrik (IEC 60364-4-41).'
      },
      {
        id: 'pentanahan',
        emoji: '🌍',
        title: 'Sistem Pentanahan (Pembumian)',
        body: `<p><strong>Pentanahan/pembumian</strong> menghubungkan badan peralatan logam (atau titik netral) ke bumi melalui <strong>elektroda pentanahan</strong> (batang tembaga yang ditanam). Gunanya:</p>
<ul>
<li>Mengalirkan <strong>arus gangguan</strong> ke tanah dengan aman sehingga pengaman bekerja.</li>
<li>Menjaga tegangan badan peralatan tetap rendah saat terjadi kebocoran isolasi.</li>
<li>Membatasi tegangan lebih (petir, surge).</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/grounding-rod.jpg" alt="Batang elektroda pentanahan yang ditanam di dalam tanah" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Pemasangan batang elektroda pentanahan · sumber: Wikimedia Commons, <i>File:HomeEarthRodAustralia1.jpg</i> (CC BY-SA 3.0)</div></div>
<p>Kualitas pentanahan diukur dari <strong>tahanan pentanahan</strong> (dengan earth tester). Praktik kelistrikan Indonesia (acuan PUIL/SPLN) menetapkan batas umum <strong>≤ 5 Ω</strong> untuk instalasi gedung.</p>
<div class="mt-tip">💡 Konduktor warna <strong>hijau-kuning</strong> adalah penghantar proteksi (PE) yang menuju sistem pentanahan — jangan pernah dipakai sebagai fasa/netral.</div>`,
        referensi: 'PUIL 2011 (SNI 0225:2011), Bab 3 — sistem pembumian; batas tahanan pentanahan ≤ 5 Ω adalah praktik umum acuan SPLN/instalasi gedung di Indonesia [nilai praktik, bukan angka kaku di PUIL]; gambar: Wikimedia Commons, File:HomeEarthRodAustralia1.jpg (CC BY-SA 3.0).'
      },
      {
        id: 'ip',
        emoji: '🏷️',
        title: 'IP Rating — Ketahanan Debu & Air (IEC 60529)',
        body: `<p><strong>IP (Ingress Protection) rating</strong> menyatakan tingkat perlindungan peralatan listrik terhadap benda padat dan air, diatur standar <strong>IEC 60529</strong>. Format <code>IPXY</code>:</p>
<ul>
<li><strong>Digit pertama (X, 0–6)</strong> — proteksi benda padat/debu: 0 = tanpa proteksi … 5 = tahan debu sebagian, <strong>6 = kedap debu total</strong>.</li>
<li><strong>Digit kedua (Y, 0–8)</strong> — proteksi air: 0 = tanpa proteksi … 4 = tahan percikan, 5 = tahan pancaran air, 6 = tahan pancaran kuat, <strong>7 = tahan perendaman sementara</strong>, 8 = tahan perendaman menerus.</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/ip-rating-chart.png" alt="Diagram penjelasan kode IP untuk ketahanan debu dan air" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Kode IP: digit pertama = debu, digit kedua = air · sumber: Wikimedia Commons, <i>File:IP Rating Description.png</i> (CC BY-SA 4.0, bimasatria)</div></div>
<p>Contoh pemakaian: <strong>IP20</strong> stopkontak dalam ruangan, <strong>IP44</strong> panel luar ruangan (terlindung hujan), <strong>IP67</strong> sensor yang boleh terendam sementara, <strong>IP68</strong> peralatan terendam menerus (pompa).</p>`,
        referensi: 'IEC 60529 (Degrees of protection provided by enclosures — IP code); gambar: Wikimedia Commons, File:IP Rating Description.png (CC BY-SA 4.0, bimasatria).'
      },
      {
        id: 'k3',
        emoji: '👷',
        title: 'K3 Listrik & 5 Aturan Emas',
        body: `<p><strong>K3 (Keselamatan & Kesehatan Kerja)</strong> di bidang kelistrikan dimulai dari kepatuhan pada standar dan kebiasaan bekerja yang aman. Sebelum bekerja pada instalasi, terapkan <strong>5 Aturan Emas</strong>:</p>
<ol>
<li><strong>Memutuskan</strong> sumber tegangan (buka MCB/saklar utama).</li>
<li><strong>Mengunci</strong> dan memberi tanda agar tidak ada yang menyalakan kembali (lockout-tagout).</li>
<li><strong>Memastikan tidak bertegangan</strong> — uji dengan alat ukur/tespen yang masih layak.</li>
<li><strong>Mengarde (membumikan)</strong> dan menghubung singkat penghantar.</li>
<li><strong>Memberi tanda/peringatan</strong> dan memasang pengaman di area kerja.</li>
</ol>
<p>Selain itu gunakan <strong>APD</strong>: sarung tangan isolasi, sepatu safety, helm, dan kacamata; hindari bekerja saat tangan/badan basah atau di lantai lembap tanpa alas isolasi.</p>
<div class="mt-warn">⚠️ Arus 220 V PLN bisa memicu arus mematikan (>30 mA melalui jantung). Jika ada korban tersetrum: <strong>jangan sentuh langsung</strong> — matikan sumber atau dorong korban dengan benda non-konduktor, lalu minta bantuan medis.</div>`,
        referensi: 'PUIL 2011 (SNI 0225:2011) — keselamatan instalasi listrik; 5 Aturan Emas adalah prosedur baku K3 ketenagalistrikan yang diadopsi nasional (berasal dari VDE 0105, Jerman); ketentuan K3 ketenagalistrikan mengacu peraturan perundangan K3 (Kemnaker).'
      }
    ],
    contoh: [
      {
        judul: 'Menentukan Ukuran Kabel & MCB',
        soal: 'Sebuah sirkuit stopkontak direncanakan untuk beban maksimum 2200 W pada tegangan 220 V. Tentukan arus beban, ukuran kabel minimum, dan MCB yang sesuai.',
        langkah: [
          'Hitung arus beban: \\(I = \\dfrac{P}{V} = \\dfrac{2200}{220} = 10\\,\\text{A}\\).',
          'Pilih kabel: NYA 1,5 mm² (KHA 18 A) sudah cukup karena 18 ≥ 10 A — tetapi untuk sirkuit tenaga PUIL menetapkan minimum 2,5 mm².',
          'Pilih MCB: arus pengenal harus ≥ arus beban dan ≤ KHA kabel → MCB 10 A atau 16 A (10 ≤ 16 ≤ 25 ✓).',
          '<strong>Jawaban:</strong> arus 10 A, kabel NYA 2,5 mm² (minimum PUIL untuk tenaga), MCB 16 A.'
        ]
      },
      {
        judul: 'Memeriksa Susut Tegangan',
        soal: 'Kabel NYA 2,5 mm² (R ≈ 7 mΩ/m) sepanjang 20 m dialiri arus 10 A. Hitung susut tegangan dan nyatakan apakah memenuhi batas PUIL 2011 (4%).',
        langkah: [
          'Hitung hambatan total: dua penghantar × 20 m × 0,007 Ω/m = 0,28 Ω.',
          'Hitung susut tegangan: \\(\\Delta V = 2 \\times I \\times R = 10 \\times 0{,}28 = 2{,}8\\,\\text{V}\\).',
          'Hitung persentase: \\(\\dfrac{2{,}8}{220} \\times 100\\% \\approx 1{,}3\\%\\).',
          '<strong>Jawaban:</strong> susut 2,8 V (≈1,3%) — <strong>memenuhi</strong> batas maksimum 4% (PUIL 2011 Pasal 2.3).'
        ]
      },
      {
        judul: 'Memilih IP Rating',
        soal: 'Kamu memasang (a) stopkontak dalam ruangan, (b) panel kontrol luar ruangan yang kena hujan, (c) sensor level air yang terendam sementara. Pilih IP rating yang tepat untuk masing-masing.',
        langkah: [
          '<strong>(a) Stopkontak dalam ruangan</strong> → IP20 (tanpa kebutuhan proteksi debu/air khusus).',
          '<strong>(b) Panel luar ruangan</strong> → minimal IP44 (tahan benda >1 mm dan percikan air dari segala arah); kalau sering hujan deras naikkan ke IP54/55.',
          '<strong>(c) Sensor terendam sementara</strong> → IP67 (kedap debu + tahan perendaman sementara).',
          '<strong>Jawaban:</strong> IP20, IP44 (atau lebih), IP67 — sesuai IEC 60529.'
        ]
      }
    ],
    soal: [
      { q: 'Menurut PUIL 2011, KHA kabel NYA 2,5 mm² (metode B1, suhu 30 °C) yang umum dipakai adalah…', opts: ['≈ 18 A', '≈ 25 A', '≈ 34 A', '≈ 43 A'], ans: 1, exp: 'Nilai yang umum diajarkan: NYA 1,5 mm² ≈ 18 A dan 2,5 mm² ≈ 25 A (PUIL 2011 Tabel 7.3-1, metode B1).' },
      { q: 'Susut tegangan maksimum instalasi akhir menurut PUIL 2011 adalah…', opts: ['1%', '2%', '4%', '10%'], ans: 2, exp: 'PUIL 2011 (Pasal 2.3) membatasi susut tegangan instalasi akhir maksimum 4%.' },
      { q: 'Tahanan pentanahan instalasi gedung yang dianjurkan (praktik acuan PUIL/SPLN) adalah…', opts: ['≤ 0,5 Ω', '≤ 5 Ω', '≤ 50 Ω', '≤ 500 Ω'], ans: 1, exp: 'Praktik kelistrikan Indonesia menetapkan batas umum tahanan pentanahan ≤ 5 Ω.' },
      { q: 'Kode IP67 berarti peralatan…', opts: ['Kedap debu total dan tahan perendaman sementara', 'Tahan percikan air dan debu sebagian', 'Tanpa proteksi debu dan air', 'Kedap debu total dan tahan pancaran kuat'], ans: 0, exp: 'Digit pertama 6 = kedap debu total; digit kedua 7 = tahan perendaman sementara (IEC 60529).' },
      { q: 'RCD/ELCB untuk proteksi manusia terhadap kejut listrik memiliki sensitivitas arus sisa…', opts: ['300 mA', '30 mA', '3 A', '30 A'], ans: 1, exp: 'RCD proteksi kejut listrik standar 30 mA; 300 mA dipakai untuk proteksi kebakaran.' }
    ]
  }
,
{
    id: 'komponen-elektronika',
    emoji: '🔌',
    title: 'Komponen Elektronika',
    subtitle: 'Resistor, kapasitor, dioda, transistor, op-amp & cara baca datasheet',
    level: 'Pemula → Menengah',
    durasi: '±30 menit',
    materi: ['Resistor', 'Kapasitor', 'Dioda', 'Transistor', 'Op-amp', 'Datasheet'],

    sections: [
      {
        title: 'Resistor & Kode Warna',
        content: `<p>Resistor adalah komponen pasif yang memberikan hambatan terhadap arus listrik. Satuan hambatan adalah <strong>ohm (Ω)</strong>.</p>
<p>Kode warna pada resistor band karbon terdiri dari 4 atau 5 strip warna yang menunjukkan nilai hambatan dan toleransi.</p>
<div class="mt-img-wrap"><img src="Asset Materi/resistor-color-code.png" alt="Tabel kode warna resistor" loading="lazy"><div class="mt-img-cap">Tabel kode warna resistor (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Rumus dasar seri & paralel:</strong></p>
<p>$$R_{seri} = R_1 + R_2 + \dots + R_n$$</p>
<p>$$\frac{1}{R_{paralel}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}$$</p>
<div class="mt-tip">💡 <strong>Tip:</strong> Resistor SMD menggunakan kode angka — misalnya 103 = 10 × 10³ = 10 kΩ, 4R7 = 4,7 Ω.</div>`,
        referensi: 'Tabel kode warna resistor mengikuti standar IEC 60062. Nilai E-series (E12, E24) ditetapkan dalam standar yang sama.'
      },
      {
        title: 'Kapasitor',
        content: `<p>Kapasitor menyimpan energi dalam medan listrik. Satuan kapasitansi adalah <strong>farad (F)</strong>, namun nilai praktis umumnya dalam µF, nF, atau pF.</p>
<p>$$Q = C \cdot V \qquad E = \tfrac{1}{2} C V^2$$</p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Karakteristik</th><th>Aplikasi Umum</th></tr></thead><tbody>
<tr><td>Elektrolitik</td><td>Polaritas, kapasitas besar (1µF–10.000µF)</td><td>Filter catu daya, coupling audio</td></tr>
<tr><td>Keramik (MLCC)</td><td>Non-polar, kapasitas kecil (1pF–100µF)</td><td>Bypass, filter frekuensi tinggi</td></tr>
<tr><td>Tantalum</td><td>Polar, stabil, ESR rendah</td><td>Decoupling sirkuit digital</td></tr>
<tr><td>Film (Polypropylene)</td><td>Presisi tinggi, stabil suhu</td><td>Filter, rangkaian pengukuran</td></tr>
</tbody></table>
<div class="mt-warn">⚠️ <strong>Perhatian:</strong> Kapasitor elektrolitik dipasang dengan polaritas yang benar. Terbalik bisa menyebabkan ledakan!</div>`,
        referensi: 'Karakteristik tipe kapasitor dari datasheet vendor (Kemet, Murata, Panasonic). ESR & lifetime referensi datasheet komponen spesifik.'
      },
      {
        title: 'Dioda',
        content: `<p>Dioda adalah komponen semiconductor yang mengalirkan arus hanya dalam satu arah (anoda → katoda).</p>
<div class="mt-img-wrap"><img src="Asset Materi/diode-symbol.jpg" alt="Simbol dioda dalam berbagai jenis" loading="lazy"><div class="mt-img-cap">Simbol berbagai jenis dioda (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Jenis dioda utama:</strong></p>
<ul>
<li><strong>Dioda biasa:</strong> Forward voltage ~0,7V (Si) atau ~0,3V (Ge)</li>
<li><strong>LED:</strong> Menghasilkan cahaya; Vf = 1,8V (merah) hingga 3,3V (biru/putih)</li>
<li><strong>Zener:</strong> Dirancang untuk breakdown terkontrol pada tegangan tertentu</li>
<li><strong>Schottky:</strong> Vf rendah (~0,3V), switching cepat, cocok untuk catu daya switching</li>
</ul>
<p>Persamaan Shockley untuk dioda:</p>
<p>$$I = I_s \left( e^{V/nV_T} - 1 \right)$$</p>
<div class="mt-tip">💡 Dioda Schottky ditandai huruf "S" atau nomor seri 1N58xx. Zener ditandai seri 1N47xx/1N52xx.</div>`,
        referensi: 'Persamaan Shockley dari teori semiconductor (Sze, Physics of Semiconductor Devices). Voltage drop Si=0.7V, Ge=0.3V dari datasheet material.'
      },
      {
        title: 'Transistor (BJT & MOSFET)',
        content: `<p>Transistor adalah komponen aktif yang berfungsi sebagai sakelar atau penguat sinyal.</p>
<div class="mt-img-wrap"><img src="Asset Materi/bjt-npn-symbol.png" alt="Simbol transistor BJT NPN dan PNP" loading="lazy"><div class="mt-img-cap">Simbol transistor BJT NPN & PNP (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>BJT (Bipolar Junction Transistor):</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Kutub</th><th>Arus</th><th>Kondisi aktif</th></tr></thead><tbody>
<tr><td>NPN</td><td>Emitor, Basis, Kolektor</td><td>E → K</td><td>Vbe &gt; 0,7V; Vce &gt; 0,2V</td></tr>
<tr><td>PNP</td><td>Emitor, Basis, Kolektor</td><td>K → E</td><td>Vbe &lt; -0,7V</td></tr>
</tbody></table>
<p><strong>MOSFET:</strong></p>
<ul>
<li><strong>N-channel enhancement:</strong> ON ketika Vgs &gt; Vth (threshold, umumnya 2–4V)</li>
<li><strong>P-channel enhancement:</strong> ON ketika Vgs &lt; Vth (negatif)</li>
<li><strong>Rds(on):</strong> Hambatan saat ON — makin rendah, makin efisien</li>
</ul>
<div class="mt-tip">💡 MOSFET adalah pilihan utama untuk sakelar daya karena Rds(on) sangat rendah (mΩ) dan tidak membutuhkan arus basis.</div>`,
        referensi: 'Simbol BJT & MOSFET mengikuti IEC 60617. Parameter Vbe, Vth, Rds(on) dari datasheet vendor (ON Semi, Infineon, Vishay).'
      },
      {
        title: 'Op-Amp (Operational Amplifier)',
        content: `<p>Op-amp adalah IC penguat analog serbaguna. Dalam konfigurasi ideal: impedansi masuk tak hingga, impedansi keluar nol, penguatan terbuka tak hingga.</p>
<div class="mt-img-wrap"><img src="Asset Materi/opamp-symbol.png" alt="Simbol op-amp" loading="lazy"><div class="mt-img-cap">Simbol op-amp standar (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Konfigurasi dasar:</strong></p>
<table class="mt-table"><thead><tr><th>Konfigurasi</th><th>Penguatan (Av)</th><th>Aplikasi</th></tr></thead><tbody>
<tr><td>Inverting</td><td>-Rf / Rin</td><td>Pembalik sinyal, mixer audio</td></tr>
<tr><td>Non-Inverting</td><td>1 + Rf / R1</td><td>Penguat impedansi tinggi</td></tr>
<tr><td>Voltage Follower</td><td>1</td><td>Buffer impedansi</td></tr>
<tr><td>Diferensial</td><td>Rf/R1</td><td>Pengukuran diferensial</td></tr>
</tbody></table>
<div class="mt-warn">⚠️ Op-amp nyata memiliki keterbatasan: Gain-Bandwidth Product, Slew Rate, Input Offset Voltage, dan Rail-to-Rail vs output terbatas.</div>`,
        referensi: 'Konfigurasi op-amp dari teori analog electronics (Sedra/Smith, Microelectronic Circuits). Parameter GBW, slew rate dari datasheet (LM358, TL072).'
      },
      {
        title: 'Cara Membaca Datasheet',
        content: `<p>Datasheet adalah dokumen resmi dari pabrikan yang berisi semua spesifikasi teknis komponen.</p>
<p><strong>Bagian penting dalam datasheet:</strong></p>
<ol>
<li><strong>Absolute Maximum Ratings:</strong> Batas maksimum yang TIDAK BOLEH dilampaui</li>
<li><strong>Electrical Characteristics:</strong> Parameter operasi normal</li>
<li><strong>Typical Performance Graphs:</strong> Grafik karakteristik</li>
<li><strong>Package & Pinout:</strong> Dimensi fisik dan nomor pin</li>
<li><strong>Application Notes:</strong> Contoh rangkaian dan tips desain</li>
</ol>
<div class="mt-tip">💡 Selalu cek "Absolute Maximum Ratings" dulu — melebihi nilai ini bisa merusak komponen secara permanen.</div>
<div class="mt-warn">⚠️ Jangan hanya melihat nilai "Typical" — selalu cek batas minimum dan maksimum (Min/Max) karena variasi fabrikasi antar produsen.</div>`,
        referensi: 'Struktur datasheet mengikuti standar JEDEC. Contoh datasheet di situs vendor: ti.com, digikey.com, mouser.com, vishay.com.'
      }
    ],

    contoh: [
      {
        title: 'Menghitung Hambatan Paralel',
        langkah: [
          'Tiga resistor R₁ = 100Ω, R₂ = 220Ω, R₃ = 330Ω dipasang paralel.',
          'Gunakan rumus: 1/R = 1/R₁ + 1/R₂ + 1/R₃',
          '1/R = 0,01 + 0,004545 + 0,003030 = 0,017575',
          'R = 1/0,017575 ≈ 56,9Ω'
        ]
      },
      {
        title: 'Menghitung Arus Basis Transistor NPN',
        langkah: [
          'Transistor NPN: Vcc = 12V, Rb = 10kΩ, β = 100',
          'Arus basis: Ib = (Vcc - Vbe) / Rb = (12 - 0,7) / 10.000 = 1,13 mA',
          'Arus kolektor: Ic = β × Ib = 100 × 1,13mA = 113 mA',
          'Jika Rc = 100Ω, Vce = 12 - 0,113 × 100 = 0,7V (mendekati saturasi)'
        ]
      }
    ],

    soal: [
      { q: 'Nilai resistor dari kode warna kuning-violet-cemas emas adalah…', opts: ['47Ω ±5%', '470Ω ±5%', '47kΩ ±5%', '470kΩ ±5%'], ans: 0, exp: 'Kuning=4, Violet=7, Emas=×10⁰=×1, toleransi ±5%. Jadi 47Ω ±5%.' },
      { q: 'Kapasitor elektrolitik dipasang terbalik pada tegangan kerja, yang paling mungkin terjadi adalah…', opts: ['Tidak ada efek', 'Kapasitor mengembung atau meledak', 'Nilai kapasitansi berkurang', 'Arus bocor meningkat'], ans: 1, exp: 'Kapasitor elektrolitik terbalik mengalami elektrolisis → tekanan gas → mengembung atau meledak.' },
      { q: 'Tegangan forward dioda silikon pada arus kerja normal adalah sekitar…', opts: ['0,1V', '0,3V', '0,7V', '1,2V'], ans: 2, exp: 'Dioda silikon memiliki Vf ≈ 0,7V pada arus kerja normal.' },
      { q: 'Op-amp inverting dengan Rf = 10kΩ dan Rin = 2kΩ memiliki penguatan sebesar…', opts: ['-5', '-0,2', '+5', '+20'], ans: 0, exp: 'Av = -Rf/Rin = -10.000/2.000 = -5.' },
      { q: 'MOSFET N-channel enhancement aktif (ON) ketika…', opts: ['Vgs &lt; 0', 'Vgs &gt; Vth (threshold positive)', 'Vgs = 0', 'Vds &gt; Vth'], ans: 1, exp: 'MOSFET N-channel enhancement aktif ketika Vgs > Vth (threshold), biasanya 2–4V.' }
    ]
  },
{
    id: 'rangkaian-ac-daya',
    emoji: '⚡',
    title: 'Rangkaian AC & Daya',
    subtitle: 'Sinusoida, impedansi, faktor daya, daya aktif/reaktif/semu & transformator',
    level: 'Menengah',
    durasi: '±35 menit',
    materi: ['Sinusoida AC', 'Impedansi RLC', 'Faktor Daya', 'Daya AC', 'Transformator'],

    sections: [
      {
        title: 'Gelombang Sinusoidal & Frekuensi',
        content: `<p>Arus bolak-balik (AC) berupa gelombang sinusoidal:</p>
<p>$$v(t) = V_p \sin(\omega t + \phi)$$</p>
<p>Di mana Vp = tegangan puncak, ω = 2πf (frekuensi sudut), f = frekuensi (Hz), φ = sudut fase awal.</p>
<div class="mt-img-wrap"><img src="Asset Materi/3phase-waveform.png" alt="Gelombang sinusoidal 3 fasa" loading="lazy"><div class="mt-img-cap">Gelombang sinusoidal 3 fasa (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Hubungan RMS dan peak:</strong></p>
<p>$$V_{rms} = \frac{V_p}{\sqrt{2}} \approx 0,707 \cdot V_p$$</p>
<p>Di Indonesia: 220V RMS, 50Hz → Vp = 220 × √2 ≈ 311V.</p>
<div class="mt-tip">💡 Semua perhitungan daya pada rangkaian AC menggunakan nilai RMS, bukan nilai puncak.</div>`,
        referensi: 'Standar frekuensi jaringan listrik Indonesia: 50 Hz (PLN, Peraturan Menteri ESDM). Nilai RMS dari definisi umum AC theory.'
      },
      {
        title: 'Impedansi RLC',
        content: `<p>Dalam rangkaian AC, hambatan terhadap arus disebut <strong>impedansi (Z)</strong>:</p>
<p>$$Z = R + j(X_L - X_C) \qquad X_L = 2\pi f L \qquad X_C = \frac{1}{2\pi f C}$$</p>
<p>$$|Z| = \sqrt{R^2 + (X_L - X_C)^2}$$</p>
<table class="mt-table"><thead><tr><th>Kondisi</th><th>Sifat</th><th>Arus vs Tegangan</th></tr></thead><tbody>
<tr><td>Xl &gt; Xc</td><td>Induktif</td><td>Arus tertinggal tegangan</td></tr>
<tr><td>Xl &lt; Xc</td><td>Kapasitif</td><td>Arus mendahului tegangan</td></tr>
<tr><td>Xl = Xc (Resonansi)</td><td>Z = R (minimum)</td><td>Arus maksimum</td></tr>
</tbody></table>
<div class="mt-tip">💡 Pada resonansi, reaktansi saling meniadakan — prinsip ini digunakan di filter RF dan rangkaian penala.</div>`,
        referensi: 'Rumus impedansi dari teori rangkaian AC (Alexander & Sadiku, Fundamentals of Electric Circuits). Resonansi: f₀ = 1/(2π√LC).'
      },
      {
        title: 'Faktor Daya (Power Factor)',
        content: `<p>Faktor daya (cos φ) menunjukkan seberapa efisien energi dimanfaatkan:</p>
<p>$$\cos\phi = \frac{P}{S} = \frac{R}{|Z|}$$</p>
<ul>
<li><strong>cos φ = 1</strong> → Semua daya berguna (beban resistif)</li>
<li><strong>cos φ = 0,8</strong> → 20% daya hilang (beban induktif seperti motor)</li>
<li><strong>cos φ &lt; 0,7</strong> → Denda dari PLN untuk pelanggan industri</li>
</ul>
<p><strong>Koreksi faktor daya:</strong> pasang kapasitor bank paralel pada beban induktif untuk mengkompensasi arus reaktif.</p>
<div class="mt-warn">⚠️ Kosumsi PLN industri yang cos φ &lt; 0,85 dikenakan denda — [perlu verifikasi regulasi terkini].</div>`,
        referensi: 'Rumus power factor dari teori daya AC. Koreksi kapasitor: teori umum power engineering.'
      },
      {
        title: 'Daya Aktif, Reaktif & Semu',
        content: `<p>Tiga jenis daya dalam Segitiga Daya:</p>
<div class="mt-img-wrap"><img src="Asset Materi/power-triangle.png" alt="Segitiga daya AC" loading="lazy"><div class="mt-img-cap">Segitiga Daya — hubungan P, Q, dan S (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<table class="mt-table"><thead><tr><th>Jenis</th><th>Simbol</th><th>Satuan</th><th>Fungsi</th></tr></thead><tbody>
<tr><td>Aktif</td><td>P</td><td>Watt (W)</td><td>Daya yang melakukan kerja</td></tr>
<tr><td>Reaktif</td><td>Q</td><td>VAR</td><td>Daya dalam medan listrik/magnet</td></tr>
<tr><td>Semu</td><td>S</td><td>VA</td><td>Total daya dari jaringan</td></tr>
</tbody></table>
<p>$$S = \sqrt{P^2 + Q^2} \qquad P_{3\phi} = \sqrt{3} \cdot V_L \cdot I_L \cdot \cos\phi$$</p>`,
        referensi: 'Segitiga daya: konsep fundamental power engineering. Rumus 3 fasa dari Standard Handbook for Electrical Engineers (IEEE).'
      },
      {
        title: 'Transformator',
        content: `<p>Transformator mengubah tegangan AC berdasarkan induksi elektromagnetik (Faraday):</p>
<p>$$\frac{V_1}{V_2} = \frac{N_1}{N_2} = k \qquad I_1 V_1 = I_2 V_2 \cdot \eta$$</p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Rasio</th><th>Aplikasi</th></tr></thead><tbody>
<tr><td>Step-down</td><td>k &lt; 1</td><td>Adaptor charger, catu daya</td></tr>
<tr><td>Step-up</td><td>k &gt; 1</td><td>Transmisi daya, inverter surya</td></tr>
<tr><td>Isolasi</td><td>k = 1:1</td><td>Keselamatan, galvanic isolation</td></tr>
<tr><td>Autotransformator</td><td>Variabel</td><td>Simmer starter, laboratorium</td></tr>
</tbody></table>
<div class="mt-warn">⚠️ Transformator hanya bekerja pada AC — DC tidak menghasilkan fluks magnet berubah-ubah.</div>`,
        referensi: 'Hukum Faraday & Lenz. Rumus dari teori mesin listrik (Chapman, Electric Machinery Fundamentals).'
      }
    ],

    contoh: [
      {
        title: 'Menghitung Impedansi RLC Seri',
        langkah: [
          'Rangkaian: R=100Ω, L=0,2H, C=10µF, f=50Hz',
          'Xl = 2πfL = 2 × 3,14 × 50 × 0,2 = 62,8Ω',
          'Xc = 1/(2πfC) = 1/(2 × 3,14 × 50 × 10⁻⁶) = 318,3Ω',
          'Z = √(100² + (62,8-318,3)²) = √(10.000 + 65.230) ≈ 274,3Ω',
          'I = V/Z = 220/274,3 ≈ 0,802A'
        ]
      },
      {
        title: 'Koreksi Faktor Daya Motor Induksi',
        langkah: [
          'Motor 3 fasa 10kW, cos φ = 0,7, V = 380V',
          'Q_old = P × tan(acos(0,7)) = 10.000 × 1,02 = 10.200 VAR',
          'Target cos φ = 0,95 → Q_new = 10.000 × 0,329 = 3.290 VAR',
          'ΔQ = 10.200 - 3.290 = 6.910 VAR',
          'C = ΔQ/(ωV²) = 6.910/(314 × 380²) ≈ 152 µF per fasa'
        ]
      }
    ],

    soal: [
      { q: 'Rumus impedansi Z pada rangkaian RLC seri adalah…', opts: ['Z = R + XL + XC', 'Z = √(R² + (XL - XC)²)', 'Z = R × XL × XC', 'Z = (R + XL) / XC'], ans: 1, exp: 'Impedansi seri: Z = √(R² + (XL - XC)²).' },
      { q: 'Pada resonansi seri RLC, impedansi total adalah…', opts: ['Minimum = R', 'Maksimum = ∞', 'Nol', 'Sama dengan XL'], ans: 0, exp: 'Pada resonansi, XL = XC → Z = R (minimum).' },
      { q: 'Faktor daya cos φ = 0,8 berarti…', opts: ['80% energi terpakai dengan baik', 'Arus mendahului tegangan', 'Tegangan mendahului arus', '80% energi hilang'], ans: 0, exp: 'cos φ = P/S = 0,8 → 80% daya semu berubah menjadi daya aktif.' },
      { q: 'Daya aktif motor 3 fasa 380V, 15A, cos φ = 0,85 adalah…', opts: ['4.944 W', '8.500 W', '9.888 W', '5.760 W'], ans: 2, exp: 'P = √3 × 380 × 15 × 0,85 = 8.408W ≈ 9.888W (jawaban terdekat).' },
      { q: 'Transformator step-down N1=1000, N2=200, V1=220V, V2 = …', opts: ['1100V', '44V', '220V', '4.400V'], ans: 1, exp: 'V2 = V1 × N2/N1 = 220 × 200/1000 = 44V.' }
    ]
  },
{
    id: 'sistem-digital',
    emoji: '🔀',
    title: 'Sistem Digital & Gerbang Logika',
    subtitle: 'Gerbang AND/OR/NOT, tabel kebenaran, aljabar Boolean, flip-flop & adder',
    level: 'Menengah',
    durasi: '±30 menit',
    materi: ['Gerbang Logika', 'Tabel Kebenaran', 'Aljabar Boolean', 'Flip-Flop', 'Half/Full Adder'],

    sections: [
      {
        title: 'Gerbang Logika Dasar',
        content: `<p>Gerbang logika adalah blok bangunan dasar sistem digital — menerima input biner (0/1) dan menghasilkan output sesuai fungsi logikanya.</p>
<div class="mt-img-wrap"><img src="Asset Materi/logic-gates.png" alt="Simbol 7 gerbang logika dasar" loading="lazy"><div class="mt-img-cap">Simbol 7 gerbang logika dasar (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<table class="mt-table"><thead><tr><th>Gerbang</th><th>Fungsi</th><th>Boolean</th></tr></thead><tbody>
<tr><td>AND</td><td>Output=1 jika SEMUA input=1</td><td>Y = A · B</td></tr>
<tr><td>OR</td><td>Output=1 jika SETIDAKNYA SATU input=1</td><td>Y = A + B</td></tr>
<tr><td>NOT</td><td>Membalik input</td><td>Y = Ā</td></tr>
<tr><td>NAND</td><td>Kebalikan AND</td><td>Y = (A·B)̄</td></tr>
<tr><td>NOR</td><td>Kebalikan OR</td><td>Y = (A+B)̄</td></tr>
<tr><td>XOR</td><td>Output=1 jika input BERBEDA</td><td>Y = A ⊕ B</td></tr>
<tr><td>XNOR</td><td>Kebalikan XOR</td><td>Y = (A⊕B)̄</td></tr>
</tbody></table>
<div class="mt-tip">💡 NAND dan NOR adalah gerbang universal — semua fungsi logika bisa dibangun hanya dari NAND atau NOR.</div>`,
        referensi: 'Simbol gerbang logika mengikuti IEC 60617-12. Konsep gerbang universal dari teori digital design (Tocci, Digital Systems).'
      },
      {
        title: 'Tabel Kebenaran',
        content: `<p>Tabel kebenaran menunjukkan semua kombinasi input dan output.</p>
<table class="mt-table"><thead><tr><th>A</th><th>B</th><th>A·B</th><th>A+B</th><th>A⊕B</th></tr></thead><tbody>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
</tbody></table>
<p>Jumlah baris = 2ⁿ (n = jumlah input). 3 input → 8 baris, 4 input → 16 baris.</p>
<div class="mt-tip">💡 XOR berfungsi sebagai pengali biner: A × B = A ⊕ B, dasar perancangan half adder.</div>`,
        referensi: 'Tabel kebenaran: notasi standar teori digital. XOR sebagai pengali dari prinsip aritmetika biner.'
      },
      {
        title: 'Aljabar Boolean',
        content: `<p>Aljabar Boolean menyederhanakan rangkaian logika.</p>
<table class="mt-table"><thead><tr><th>Hukum</th><th>OR (+)</th><th>AND (·)</th></tr></thead><tbody>
<tr><td>Identitas</td><td>A + 0 = A</td><td>A · 1 = A</td></tr>
<tr><td>Null</td><td>A + 1 = 1</td><td>A · 0 = 0</td></tr>
<tr><td>Idempoten</td><td>A + A = A</td><td>A · A = A</td></tr>
<tr><td>Komplemen</td><td>A + Ā = 1</td><td>A · Ā = 0</td></tr>
<tr><td>Komutatif</td><td>A + B = B + A</td><td>A · B = B · A</td></tr>
</tbody></table>
<p><strong>Hukum De Morgan:</strong></p>
<p>$$\overline{A + B} = \bar{A} \cdot \bar{B} \qquad \overline{A \cdot B} = \bar{A} + \bar{B}$$</p>
<div class="mt-tip">💡 De Morgan mengkonversi bentuk OR-dominan ↔ AND-dominan — kunci simplifikasi rangkaian minimum gerbang.</div>`,
        referensi: 'Aljabar Boolean: George Boole (1815–1864). Hukum De Morgan dari teori set & logika matematika.'
      },
      {
        title: 'Flip-Flop',
        content: `<p>Flip-flop adalah elemen memori dasar — menyimpan 1 bit data (berbeda dari gerbang kombinasional).</p>
<div class="mt-img-wrap"><img src="Asset Materi/d-flipflop.png" alt="Simbol D flip-flop" loading="lazy"><div class="mt-img-cap">D Flip-Flop — blok memori dasar (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Input</th><th>Fungsi</th><th>Aplikasi</th></tr></thead><tbody>
<tr><td>SR</td><td>S, R</td><td>Set(Q=1) atau Reset(Q=0)</td><td>Debounce switch</td></tr>
<tr><td>D</td><td>D, CLK</td><td>Simpan D pada edge clock</td><td>Register, latch data</td></tr>
<tr><td>JK</td><td>J, K, CLK</td><td>Seperti SR + toggle saat J=K=1</td><td>Counter, divider</td></tr>
<tr><td>T</td><td>T, CLK</td><td>Toggle state setiap clock</td><td>Counter biner</td></tr>
</tbody></table>
<p>Multiple flip-flop membentuk <strong>register</strong> (N bit) dan <strong>counter</strong> (menghitung pulse clock).</p>`,
        referensi: 'Flip-flop dari teori digital systems (Tocci, Widmer, Moos). Register & counter dari arsitektur komputer dasar.'
      },
      {
        title: 'Half Adder & Full Adder',
        content: `<p>Adder menjumlahkan bit biner — fondasi ALU dalam processor.</p>
<p><strong>Half Adder</strong> (2 bit): S = A ⊕ B, C = A · B</p>
<p><strong>Full Adder</strong> (3 bit, termasuk carry-in):</p>
<p>$S = A \oplus B \oplus C_{in} \qquad C_{out} = A \cdot B + C_{in}(A \oplus B)$</p>
<p>Empat full adder cascading → <strong>4-bit parallel adder</strong>, bisa di-stack untuk 8-bit, 16-bit, dst.</p>
<div class="mt-tip">💡 CPU modern menjumlahkan angka 64-bit dengan Carry-Lookahead untuk percepatan propagasi carry.</div>`,
        referensi: 'Half/Full Adder dari teori digital design (Mano, Digital Design). Carry-Lookahead dari Patterson & Hennessy, Computer Organization.'
      }
    ],

    contoh: [
      {
        title: 'Menyederhanakan dengan De Morgan',
        langkah: [
          'Fungsi: Y = (A · B) + (A · C)',
          'Faktorkan: Y = A · (B + C)',
          'Dari 3 gerbang (2 AND + 1 OR) menjadi 2 gerbang (1 AND + 1 OR)',
          'Penghematan: mengurangi IC & konsumsi daya'
        ]
      },
      {
        title: '2-bit Counter dengan JK Flip-Flop',
        langkah: [
          'Counter biner: 00 → 01 → 10 → 11 → 00 (mod-4)',
          'Stage 1: J=K=1 (toggle setiap clock) → Q0 berubah tiap clock',
          'Stage 2: J=K=Q0 → toggle saat Q0=1 (carry dari stage 1)',
          'Hasil: Q1Q0 = 00, 01, 10, 11, 00, ...'
        ]
      }
    ],

    soal: [
      { q: 'Gerbang yang bisa membangun semua fungsi logika hanya dari dirinya sendiri adalah…', opts: ['AND', 'OR', 'NAND', 'XOR'], ans: 2, exp: 'NAND (dan NOR) adalah gerbang universal.' },
      { q: 'Hukum De Morgan: (A + B)̄ = …', opts: ['Ā · B̄', 'Ā + B̄', 'A · B', 'A + B'], ans: 0, exp: 'De Morgan: complement OR = AND dari complement → Ā · B̄.' },
      { q: 'D flip-flop menyimpan data pada…', opts: ['Setiap input berubah', 'Rising edge clock', 'Saat reset aktif', 'Setiap siklus'], ans: 1, exp: 'D flip-flop edge-triggered: menyalin D → Q pada rising edge clock.' },
      { q: 'Full Adder menerima input: A, B, dan…', opts: ['Carry-in', 'Clock', 'Enable', 'Reset'], ans: 0, exp: 'Full Adder menerima Carry-in dari stage sebelumnya.' },
      { q: 'Jumlah baris tabel kebenaran untuk 4 input adalah…', opts: ['4', '8', '16', '32'], ans: 2, exp: '2⁴ = 16 baris.' }
    ]
  },
{
    id: 'motor-listrik',
    emoji: '🏭',
    title: 'Motor Listrik & Pengendalian',
    subtitle: 'Motor DC & induksi, rangkaian star-delta, kontaktor, relay, TOR & VFD',
    level: 'Menengah',
    durasi: '±40 menit',
    materi: ['Motor DC', 'Motor Induksi', 'Kontaktor & Relay', 'Star-Delta', 'VFD'],

    sections: [
      {
        title: 'Motor DC & Arus Searah',
        content: `<p>Motor DC mengubah energi listrik menjadi energi mekanik berdasarkan gaya Lorentz pada konduktor dalam medan magnet.</p>
<p>$$T = k \cdot \Phi \cdot I_a \qquad E_b = k \cdot \Phi \cdot \omega$$</p>
<p>Di mana T = torsi (Nm), k = konstanta motor, Φ = fluks, Ia = arus armatur, Eb = back-EMF, ω = kecepatan sudut (rad/s).</p>
<p><strong>Tipe motor DC:</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Karakteristik</th><th>Aplikasi</th></tr></thead><tbody>
<tr><td>Seri</td><td>Torsi tinggi saat start, kecepatan naik saat beban berkurang</td><td>Kereta api, crane, elevator</td></tr>
<tr><td>Shunt</td><td>Kecepatan konstan, torsi sedang</td><td>Mesin bor, mesin bubut</td></tr>
<tr><td>Compound</td><td>Kombinasi seri + shunt</td><td>Rolling mill, hoist</td></tr>
</tbody></table>
<div class="mt-tip">💡 Motor DC semakin tergantikan motor BLDC (Brushless DC) yang lebih efisien dan minim perawatan — banyak dipakai di drone, EV, dan robotika.</div>`,
        referensi: 'Prinsip motor DC dari teori mesin listrik (Chapman, Electric Machinery Fundamentals). Formula back-EMF dan torsi dari definisi dasar electromechanical conversion.'
      },
      {
        title: 'Motor Induksi (Asinkron)',
        content: `<p>Motor induksi 3 fasa adalah motor industri paling banyak digunakan — murah, kuat, minim perawatan.</p>
<div class="mt-img-wrap"><img src="Asset Materi/induction-motor.png" alt="Diagram motor induksi 3 fasa" loading="lazy"><div class="mt-img-cap">Motor induksi 3 fasa — prinsip kerja (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Prinsip kerja:</strong></p>
<ol>
<li>Arus AC 3 fasa pada stator menghasilkan medan magnet berputar (rotating magnetic field)</li>
<li>Medan ini memotong konduktor rotor → menginduksi arus (hukum Faraday)</li>
<li>Arus pada rotor dalam medan stator → gaya Lorentz → rotor berputar</li>
</ol>
<p><strong>Slip:</strong></p>
<p>$$s = \frac{n_s - n_r}{n_s} \times 100\%$$</p>
<p>Di mana ns = kecepatan sinkron (120f/p), nr = kecepatan rotor aktual. Slip tipikal 2–5% pada beban nominal.</p>
<div class="mt-warn">⚠️ Motor induksi tidak bisa mengontrol kecepatan secara presisi tanpa VFD (Variable Frequency Drive).</div>`,
        referensi: 'Prinsip motor induksi: Nikola Tesla & Galileo Ferraris (1888). Slip dan sinkron dari teori AC machines (Chapman, Fitzgerald & Kingsley).'
      },
      {
        title: 'Kontaktor & Relay',
        content: `<p><strong>Kontaktor</strong> adalah sakelar elektromagnetik untuk menghubungkan/memutus arus beban besar (10A–600A).</p>
<p><strong>Relay</strong> bekerja seperti kontaktor tapi untuk arus lebih kecil (10mA–10A), biasanya untuk sinyal kontrol.</p>
<table class="mt-table"><thead><tr><th>Fitur</th><th>Kontaktor</th><th>Relay</th></tr></thead><tbody>
<tr><td>Arus nominal</td><td>10A – 600A</td><td>10mA – 10A</td></tr>
<tr><td>Aplikasi</td><td>Motor, pemanas, beban berat</td><td>Logika kontrol, interlock</td></tr>
<tr><td>Auxiliary contact</td><td>Ada (NO/NC)</td><td>Ada (NO/NC)</td></tr>
<tr><td>Arc suppression</td><td>Ada (quenching chamber)</td><td>Minimal</td></tr>
</tbody></table>
<div class="mt-tip">💡 Kontaktor selalu dilengkapi auxiliary contact untuk interlock — misalnya mencegah kedua kontaktor star-delta aktif bersamaan.</div>`,
        referensi: 'Spesifikasi kontaktor dari katalog vendor (Schneider Electric, ABB, Siemens). Pemilihan berdasarkan IEC 60947-4-1.'
      },
      {
        title: 'Rangkaian Star-Delta (Y-Δ)',
        content: `<p>Star-delta adalah metode starting motor induksi untuk mengurangi arus start hingga 1/3 dari arus direct-on-line.</p>
<div class="mt-img-wrap"><img src="Asset Materi/star-delta.png" alt="Diagram rangkaian star-delta motor" loading="lazy"><div class="mt-img-cap">Rangkaian star-delta (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Prinsip:</strong></p>
<ul>
<li><strong>Star (Y):</strong> Tegangan per fasa = V_line/√3 → arus start lebih kecil</li>
<li><strong>Delta (Δ):</strong> Tegangan per fasa = V_line → motor beroperasi penuh</li>
</ul>
<p><strong>Urutan:</strong> Start dalam star → timer 5–10 detik → relay timer pindah ke delta.</p>
<p><strong>Kriteria penggunaan:</strong> Motor harus bisa dimulai dalam star (torsi start cukup) — biasanya untuk beban ringan/sedang seperti kipas, pompa, kompressor.</p>
<div class="mt-warn">⚠️ JANGAN pakai star-delta untuk beban berat (crusher, conveyor penuh) — torsi star hanya 1/3 torsi delta, motor bisa macet!</div>`,
        referensi: 'Prinsip star-delta dari teori motor AC. Pemilihan: Siemens/ABB application guide for motor starting methods.'
      },
      {
        title: 'Thermal Overload Relay (TOR)',
        content: `<p>TOR melindungi motor dari panas berlebih (overload) yang merusak isolasi winding.</p>
<p><strong>Prinsip kerja:</strong></p>
<ol>
<li>Arus motor melewati bimetal strip di dalam TOR</li>
<li>Jika arus melebihi setting untuk waktu tertentu → bimetal melengkung → memutus rangkaian kontaktor</li>
<li>Motor berhenti, mencegah kerusakan permanen</li>
</ol>
<p><strong>Pengaturan:</strong> Setting TOR harus sesuai dengan arus nominal motor (tertulis pada nameplate) — biasanya 0,95–1,05 × In.</p>
<div class="mt-tip">💡 TOR bukan pengaman terhadap short-circuit — itu tugas MCB/fuse. TOR hanya melindungi dari overload lambat (motor terlalu keras bekerja).</div>`,
        referensi: 'TOR dari standar IEC 60947-4-1. Setting berdasarkan nameplate motor (FLA = Full Load Ampere).'
      },
      {
        title: 'VFD (Variable Frequency Drive)',
        content: `<p>VFD mengontrol kecepatan motor induksi dengan mengubah frekuensi dan tegangan supply motor.</p>
<p><strong>Prinsip:</strong></p>
<p>$$n = \frac{120f}{p}(1-s)$$</p>
<p>Mengubah frekuensi (f) → mengubah kecepatan sinkron → mengubah kecepatan rotor.</p>
<p><strong>Tahapan dalam VFD:</strong></p>
<ol>
<li><strong>Rectifier:</strong> AC → DC (diode bridge)</li>
<li><strong>DC Bus:</strong> Kapasitor smoothing</li>
<li><strong>Inverter:</strong> DC → AC variabel (IGBT switching + PWM)</li>
</ol>
<p><strong>Keuntungan VFD:</strong></p>
<ul>
<li>Soft start (arus start rendah)</li>
<li>Pengaturan kecepatan presisi</li>
<li>Penghematan energi (pompa & kipas: daya ∝ kecepatan³)</li>
<li>Torsi rendah bisa dipertahankan pada kecepatan rendah</li>
</ul>
<div class="mt-img-wrap"><img src="Asset Materi/vfd.jpg" alt="Variable Frequency Drive (VFD) untuk motor AC" loading="lazy"><div class="mt-img-cap">Variable Frequency Drive (CC BY-SA 4.0 Wikimedia Commons)</div></div>`,
        referensi: 'Prinsip VFD dari power electronics (Muhammad, Power Electronics). Efisiensi pompa/kipas: hukum affinity (P ∝ n³) dari fluid mechanics.'
      }
    ],

    contoh: [
      {
        title: 'Menghitung Slip Motor Induksi',
        langkah: [
          'Motor 4-pole, 50Hz, nameplate: 1440 RPM',
          'Ns = 120 × f / p = 120 × 50 / 4 = 1500 RPM',
          'Slip s = (1500 - 1440) / 1500 = 60/1500 = 0,04 = 4%',
          'Slip 4% → motor dalam kondisi normal (tipikal 2–5%)'
        ]
      },
      {
        title: 'Penghematan Energi VFD pada Pompa',
        langkah: [
          'Pompa beroperasi 80% dari kecepatan nominal (n₂ = 0,8 × n₁)',
          'Hukum affinity: P₂/P₁ = (n₂/n₁)³ = (0,8)³ = 0,512',
          'Daya turun 48,8% — penghematan besar!',
          'Contoh: pompa 10kW → dijalankan VFD pada 80% → hanya butuh 5,12kW',
          'Penghematan energi per tahun: (10 - 5,12) × 8000 jam = 39.040 kWh'
        ]
      }
    ],

    soal: [
      { q: 'Motor induksi 4-pole, 50Hz memiliki kecepatan sinkron (ns) sebesar…', opts: ['3000 RPM', '1500 RPM', '1000 RPM', '750 RPM'], ans: 1, exp: 'ns = 120f/p = 120 × 50/4 = 1500 RPM.' },
      { q: 'Torsi motor induksi dalam konfigurasi star adalah…', opts: ['3× torsi delta', 'Sama dengan delta', '1/3 torsi delta', '2× torsi delta'], ans: 2, exp: 'Torsi ∝ V², dan tegangan star = V/√3 → torsi star = torsi delta / 3.' },
      { q: 'Thermal Overload Relay (TOR) melindungi motor dari…', opts: ['Short-circuit', 'Overload lambat', 'Tegangan berlebih', 'Arus starting'], ans: 1, exp: 'TOR melindungi dari overload lambat — MCB/fuse yang menangani short-circuit.' },
      { q: 'Dalam VFD, tahapan konversi energi adalah…', opts: ['DC→AC→DC', 'AC→DC→AC', 'AC→AC→DC', 'DC→DC→AC'], ans: 1, exp: 'Rectifier (AC→DC) → DC Bus → Inverter (DC→AC variabel).' },
      { q: 'Pompa beroperasi pada 80% kecepatan, daya yang dibutuhkan menjadi…', opts: ['80% dari awal', '64% dari awal', '51,2% dari awal', '40% dari awal'], ans: 2, exp: 'P ∝ n³ → (0,8)³ = 0,512 = 51,2% dari daya awal.' }
    ]
  },
{
    id: 'plc-otomasi',
    emoji: '🛠️',
    title: 'PLC & Otomasi Industri',
    subtitle: 'Konsep PLC, ladder diagram, timer/counter, HMI & studi kasus konveyor',
    level: 'Menengah → Lanjutan',
    durasi: '±45 menit',
    materi: ['Konsep PLC', 'Ladder Diagram', 'Timer & Counter', 'HMI', 'SCADA', 'Studi Kasus'],

    sections: [
      {
        title: 'Pengenalan PLC',
        content: `<p>PLC (Programmable Logic Controller) adalah komputer industri yang dirancang untuk mengendalikan mesin dan proses produksi secara real-time.</p>
<div class="mt-img-wrap"><img src="Asset Materi/plc-cpu.jpg" alt="Unit PLC industri" loading="lazy"><div class="mt-img-cap">Unit PLC industri — CPU, modul I/O, dan power supply (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Arsitektur dasar PLC:</strong></p>
<ol>
<li><strong>CPU:</strong> Memproses program kontrol (scan cycle: baca input → eksekusi program → tulis output)</li>
<li><strong>Input Module:</strong> Menerima sinyal dari sensor, switch, push button (24VDC/240VAC)</li>
<li><strong>Output Module:</strong> Mengontrol aktuator, lampu, kontaktor (relay, transistor, triac)</li>
<li><strong>Power Supply:</strong> Menyupply tegangan operasi (umumnya 24VDC)</li>
<li><strong>Communication:</strong> Ethernet, RS-485, Profibus, Modbus untuk konektivitas HMI/SCADA</li>
</ol>
<p><strong>Keunggulan PLC vs relay logic:</strong></p>
<ul>
<li>Fleksibel — program bisa diubah tanpa ubah wiring</li>
<li>Mudah di-maintain — troubleshooting via software</li>
<li>Reliable — dirancang untuk lingkungan industri (debu, panas, getaran)</li>
<li>Skalabel — tambah modul I/O sesuai kebutuhan</li>
</ul>`,
        referensi: 'Konsep PLC dari standar IEC 61131-3 (programming languages). Arsitektur PLC dari referensi otomasi (Ogata, Modern Control Engineering). Vendor: Siemens S7-1200/1500, Mitsubishi FX5U, Omron NX/NJ, Allen-Bradley CompactLogix.'
      },
      {
        title: 'Ladder Diagram (LD)',
        content: `<p>Ladder Diagram adalah bahasa pemrograman PLC paling populer — menyerupai rangkaian relay elektrik yang mudah dipahami teknisi listrik.</p>
<div class="mt-img-wrap"><img src="Asset Materi/ladder-and.jpg" alt="Contoh ladder diagram AND gate" loading="lazy"><div class="mt-img-cap">Ladder diagram — contact seri (AND) dan paralel (OR) (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Simbol dasar ladder:</strong></p>
<table class="mt-table"><thead><tr><th>Simbol</th><th>Fungsi</th><th>Notasi PLC</th></tr></thead><tbody>
<tr><td>| |</td><td>Normally Open (NO) contact</td><td>XIC (Examine If Closed)</td></tr>
<tr><td>|/|</td><td>Normally Closed (NC) contact</td><td>XIO (Examine If Open)</td></tr>
<tr><td>-( )-</td><td>Output coil</td><td>OTE (Output Energize)</td></tr>
<tr><td>-(L)-</td><td>Latch (set)</td><td>OTL (Output Latch)</td></tr>
<tr><td>-(U)-</td><td>Unlatch (reset)</td><td>OTU (Output Unlatch)</td></tr>
</tbody></table>
<p><strong>Contoh:</strong></p>
<ul>
<li>AND: Dua contact seri — kedua-duanya harus ON agar output ON</li>
<li>OR: Dua contact paralel — salah satu ON sudah cukup</li>
<li>NOT: NC contact — ON jika input OFF</li>
</ul>`,
        referensi: 'Ladder Diagram dari IEC 61131-3 (salah satu dari 5 bahasa PLC). Simbol mengikuti standar relay logic industrial.'
      },
      {
        title: 'Timer & Counter',
        content: `<p>Timer dan counter adalah fungsi paling sering digunakan dalam program PLC.</p>
<p><strong>Timer (TON, TOF, TONR):</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Fungsi</th><th>Contoh Aplikasi</th></tr></thead><tbody>
<tr><td>TON (On-Delay)</td><td>Delay sebelum output ON</td><td>Kipas pendingin: motor ON → delay 5s → kipas ON</td></tr>
<tr><td>TOF (Off-Delay)</td><td>Delay sebelum output OFF</td><td>Lampu jalan: switch OFF → delay 30s → lampu OFF</td></tr>
<tr><td>TONR (Retentive)</td><td>Menyimpan waktu yang telah berjalan</td><td>Waktu operasi mesin untuk maintenance tracking</td></tr>
</tbody></table>
<p><strong>Counter (CTU, CTD, CTUD):</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Fungsi</th><th>Contoh Aplikasi</th></tr></thead><tbody>
<tr><td>CTU (Count Up)</td><td>Menghitung naik</td><td>Menghitung produk melewati sensor</td></tr>
<tr><td>CTD (Count Down)</td><td>Menghitung turun</td><td>Sisa stok dalam wadah</td></tr>
<tr><td>CTUD</td><td>Count up & down</td><td>Penghitung parkir (masuk + keluar)</td></tr>
</tbody></table>
<div class="mt-tip">💡 Timer resolusi tergantung scan time PLC — typical 1–10ms. Untuk timing presisi (&lt;1ms), gunakan high-speed counter atau hardware timer.</div>`,
        referensi: 'Timer & Counter fungsi dari IEC 61131-3. Resolusi dari spesifikasi scan time PLC (Siemens S7: 1ms–10ms tergantung ukuran program).'
      },
      {
        title: 'HMI (Human-Machine Interface)',
        content: `<p>HMI adalah panel layar sentuh yang memungkinkan operator berinteraksi dengan PLC — memantau status, mengubah parameter, dan melihat alarm.</p>
<p><strong>Fungsi utama HMI:</strong></p>
<ol>
<li><strong>Visualisasi:</strong> Diagram alir proses, gauge, trend chart real-time</li>
<li><strong>Input:</strong> Setpoint temperatur, kecepatan, timer</li>
<li><strong>Alarm:</strong> Peringatan visual/audio saat parameter di luar batas</li>
<li><strong>Data Logging:</strong> Mencatat data proses untuk analisis</li>
<li><strong>Keamanan:</strong> Level akses operator (view only, operate, engineer)</li>
</ol>
<p><strong>Hubungan HMI ↔ PLC:</strong></p>
<ul>
<li>HMI membaca/menulis tag PLC via komunikasi (Modbus TCP, Ethernet/IP, PROFINET)</li>
<li>Tiap elemen grafis di HMI dihubungkan ke alamat/tag tertentu di PLC</li>
</ul>`,
        referensi: 'Desain HMI mengikuti ISA-101 (HMI Display Design). Komunikasi HMI-PLC via protocol industri (Modbus, Ethernet/IP, PROFINET) dari vendor documentation.'
      },
      {
        title: 'SCADA (Supervisory Control and Data Acquisition)',
        content: `<p>SCADA adalah sistem monitoring dan kontrol terpusat untuk fasilitas industri berskala besar — mengumpulkan data dari banyak PLC/RTU dan menampilkannya di satu pusat kontrol.</p>
<p><strong>Elemen SCADA:</strong></p>
<table class="mt-table"><thead><tr><th>Komponen</th><th>Fungsi</th></tr></thead><tbody>
<tr><td>RTU (Remote Terminal Unit)</td><td>Interface field device → jaringan komunikasi</td></tr>
<tr><td>PLC</td><td>Kontrol lokal mesin/proses</td></tr>
<tr><td>Master Station (HMI Server)</td><td>Pusat monitoring, historian, alarm management</td></tr>
<tr><td>Communication Network</td><td>SCADA Ethernet, 4G/5G, radio, fiber optik</td></tr>
<tr><td>Historian</td><td>Database time-series untuk data proses historis</td></tr>
</tbody></table>
<p><strong>Contoh implementasi:</strong></p>
<ul>
<li>Sistem distribusi air: 50+ pompa + 200+ sensor tekanan → SCADA terpusat</li>
<li>PLTS: monitoring output inverter, irradiance, suhu panel dari satu dashboard</li>
<li>Pabrik: monitoring semua line produksi dari satu control room</li>
</ul>
<div class="mt-warn">⚠️ Keamanan SCADA sangat kritis — harus terpisah dari jaringan kantor dan dilindungi firewall industri (IEC 62443).</div>`,
        referensi: 'SCADA dari standar ISA-95 / IEC 62264. Keamanan SCADA: IEC 62443 (Industrial Automation and Control Systems Security). Historian: OSIsoft PI, GE Proficy.'
      },
      {
        title: 'Studi Kasus: Sistem Konveyor Otomatis',
        content: `<p>Simulasi sistem konveyor dengan 3 stasiun kerja yang dikontrol PLC:</p>
<p><strong>Spesifikasi:</strong></p>
<ul>
<li>Konveyor utama (motor 3 fasa, VFD)</li>
<li>Sensor photocell di setiap stasiun (product detection)</li>
<li>HMI untuk monitoring & set parameter</li>
<li>Alarm jika produk macet &gt; 30 detik</li>
</ul>
<p><strong>Logika kontrol:</strong></p>
<ol>
<li>Produk masuk → photocell 1 ON → konveyor jalan</li>
<li>Stasiun 1 mendeteksi → konveyor berhenti 10 detik (waktu kerja)</li>
<li>Setelah 10s → konveyor jalan lagi ke stasiun 2</li>
<li>Jika produk tidak terdeteksi dalam 30s → alarm & stop</li>
</ol>
<p><strong>Implementasi ladder:</strong></p>
<ul>
<li>TON untuk delay stasiun (10s)</li>
<li>TON untuk alarm timeout (30s)</li>
<li>CTU untuk menghitung jumlah produk selesai</li>
<li>Output ke VFD (start/stop/speed)</li>
</ul>`,
        referensi: 'Studi kasus konveyor dari aplikasi nyata otomasi industri. Konsep dasar dari Siemens S7 TIA Portal application examples.'
      }
    ],

    contoh: [
      {
        title: 'Membuat Timer On-Delay di Ladder',
        langkah: [
          'Input X0 = start button (NO), Output Y0 = lampu',
          'Timer T1 = TON, preset = 50 (5,0 detik pada timer 100ms)',
          'Ladder: ---[X0]---[TON T1 K50]---',
          '           ---[T1]---(Y0)---',
          'Hasil: tekan X0 → tunggu 5 detik → Y0 (lampu) menyala'
        ]
      },
      {
        title: 'Counter Produk pada Konveyor',
        langkah: [
          'Sensor photocell = X1 (pulse setiap produk lewat)',
          'Counter C1 = CTU, preset = 100',
          'Saat C1.ACC ≥ 100 → C1.DN = ON → output Y5 (lampu "batch selesai")',
          'Reset counter: X2 (manual reset button) → RES C1',
          'Monitoring: HMI menampilkan C1.ACC (jumlah produk real-time)'
        ]
      }
    ],

    soal: [
      { q: 'Scan cycle PLC terdiri dari 3 langkah utama, urutan yang benar adalah…', opts: ['Eksekusi program → Baca input → Tulis output', 'Baca input → Eksekusi program → Tulis output', 'Tulis output → Baca input → Eksekusi program', 'Baca output → Tulis input → Eksekusi program'], ans: 1, exp: 'PLC scan cycle: Baca input → Eksekusi program → Tulis output (repeat terus-menerus).' },
      { q: 'Timer TON (On-Delay) dengan preset 50 pada timer 100ms akan menunda output selama…', opts: ['50 ms', '500 ms', '5 detik', '50 detik'], ans: 2, exp: '50 × 100ms = 5000ms = 5 detik.' },
      { q: 'Star-delta starter mengurangi arus starting motor menjadi…', opts: ['1/2 arus DOL', '1/3 arus DOL', '1/√3 arus DOL', 'Sama dengan DOL'], ans: 1, exp: 'Star: tegangan per fasa = V/√3 → arus = 1/3 arus DOL.' },
      { q: 'Dalam SCADA, komponen yang mencatat data proses historis untuk analisis disebut…', opts: ['RTU', 'PLC', 'Historian', 'HMI'], ans: 2, exp: 'Historian adalah database time-series untuk menyimpan data proses historis.' },
      { q: 'PLC scan time tipikal adalah…', opts: ['1–10 µs', '1–10 ms', '1–10 detik', '1–10 menit'], ans: 1, exp: 'Scan time PLC industri tipikal 1–10ms tergantung ukuran program dan jenis CPU.' }
    ]
  },
{
    id: 'iot-firebase',
    emoji: '📶',
    title: 'IoT & Firebase',
    subtitle: 'ESP32, sensor, WiFi, MQTT/HTTP, Firebase Realtime Database & dashboard',
    level: 'Lanjutan',
    durasi: '±40 menit',
    materi: ['ESP32', 'Sensor', 'WiFi & MQTT', 'Firebase', 'Dashboard'],

    sections: [
      {
        title: 'Pengenalan ESP32 untuk IoT',
        content: `<p>ESP32 adalah microcontroller populer untuk proyek IoT karena memiliki WiFi & Bluetooth bawaan, cukup powerful untuk aplikasi real-time, dan harganya sangat terjangkau.</p>
<div class="mt-img-wrap"><img src="Asset Materi/esp32-devkitc-pinout.png" alt="Pinout ESP32 DevKit" loading="lazy"><div class="mt-img-cap">ESP32 DevKit pinout (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Fitur utama ESP32:</strong></p>
<table class="mt-table"><thead><tr><th>Fitur</th><th>Spesifikasi</th></tr></thead><tbody>
<tr><td>Processor</td><td>Dual-core 240MHz, Xtensa LX6</td></tr>
<tr><td>RAM</td><td>520 KB SRAM</td></tr>
<tr><td>WiFi</td><td>802.11 b/g/n 2.4GHz</td></tr>
<tr><td>Bluetooth</td><td>BLE 4.2</td></tr>
<tr><td>GPIO</td><td>34 pin (termasuk ADC 12-bit, DAC, I2C, SPI, UART)</td></tr>
<tr><td>Daya</td><td>Deep sleep &lt; 10µA</td></tr>
</tbody></table>
<div class="mt-tip">💡 Untuk proyek IoT baterai (sensor suhu remote), aktifkan Deep Sleep mode — ESP32 hanya bangun untuk mengirim data lalu tidur lagi.</div>`,
        referensi: 'Spesifikasi ESP32 dari datasheet resmi Espressif Systems (esp32.com). ESP-IDF documentation untuk programming framework.'
      },
      {
        title: 'Sensor untuk IoT',
        content: `<p>Sensor mengubah besaran fisik menjadi sinyal listrik yang bisa dibaca oleh microcontroller.</p>
<p><strong>Sensor populer untuk IoT:</strong></p>
<table class="mt-table"><thead><tr><th>Sensor</th><th>Output</th><th>Interface</th><th>Aplikasi</th></tr></thead><tbody>
<tr><td>DHT22</td><td>Suhu & kelembaban</td><td>1-wire</td><td>Monitoring lingkungan</td></tr>
<tr><td>BMP280</td><td>Tekanan & suhu</td><td>I2C/SPI</td><td>Weather station</td></tr>
<tr><td>HC-SR04</td><td>Jarak (ultrasonik)</td><td>Trigger/Echo</td><td>Level air, parkir</td></tr>
<tr><td>MQ-2</td><td>Konsentrasi gas</td><td>ADC analog</td><td>Detect kebocoran gas</td></tr>
<tr><td>LDR</td><td>Intensitas cahaya</td><td>ADC analog</td><td>Automatic lighting</td></tr>
</tbody></table>
<p><strong>Koneksi ke ESP32:</strong></p>
<ul>
<li><strong>I2C:</strong> SDA (GPIO21) + SCL (GPIO22) — multi-device, 2 kabel saja</li>
<li><strong>SPI:</strong> MOSI, MISO, SCK, CS — untuk kecepatan tinggi (display TFT)</li>
<li><strong>ADC:</strong> GPIO32-39 — untuk sensor analog (MQ-2, LDR)</li>
</ul>
<div class="mt-warn">⚠️ ADC ESP32 memiliki non-linearitas pada nilai rendah (0–100mV). Untuk pengukuran presisi, gunakan ADC eksternal (ADS1115, 16-bit).</div>`,
        referensi: 'Interface sensor dari dokumentasi ESP32 (Espressif). Spesifikasi ADC dari errata ESP32 — non-linearity pada low voltage.'
      },
      {
        title: 'WiFi & Protokol Komunikasi',
        content: `<p>ESP32 terhubung ke internet via WiFi, lalu mengirim data menggunakan protokol ringan untuk IoT.</p>
<p><strong>Protokol komunikasi IoT:</strong></p>
<table class="mt-table"><thead><tr><th>Protokol</th><th>Tipe</th><th>Port</th><th>Kelebihan</th></tr></thead><tbody>
<tr><td>HTTP/REST</td><td>Request-response</td><td>80/443</td><td>Mudah, universal</td></tr>
<tr><td>MQTT</td><td>Pub-sub (lightweight)</td><td>1883/8883</td><td>Hemat bandwidth, real-time</td></tr>
<tr><td>WebSocket</td><td>Full-duplex</td><td>80/443</td><td>Real-time bidirectional</td></tr>
<tr><td>CoAP</td><td>Request-response (UDP)</td><td>5683</td><td>Sangat ringan (sensor battery)</td></tr>
</tbody></table>
<p><strong>MQTT — protokol paling populer untuk IoT:</strong></p>
<ul>
<li>Pub-sub model: publisher mengirim ke topic, subscriber menerima dari topic</li>
<li>Broker (Mosquitto, HiveMQ) mengatur routing pesan</li>
<li>QoS levels: 0 (at most once), 1 (at least once), 2 (exactly once)</li>
<li>Retained message & Last Will Testament (LWT)</li>
</ul>
<div class="mt-tip">💡 MQTT lebih efisien dari HTTP untuk IoT karena header-nya sangat kecil (2 bytes minimal) dan mendukung clean session untuk device yang sering reconnect.</div>`,
        referensi: 'MQTT specification v5.0 dari OASIS Standard. HTTP REST API dari konsep umum web development. CoAP dari RFC 7252.'
      },
      {
        title: 'Firebase Realtime Database',
        content: `<p>Firebase adalah platform backend-as-a-service dari Google yang menyediakan Realtime Database (NoSQL JSON tree) yang tersinkronisasi secara real-time ke semua client.</p>
<div class="mt-img-wrap"><img src="Asset Materi/iot-diagram.jpg" alt="Diagram arsitektur IoT dengan Firebase" loading="lazy"><div class="mt-img-cap">Arsitektur IoT: Sensor → ESP32 → Firebase → Dashboard (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Cara kerja Firebase RTDB:</strong></p>
<ol>
<li>ESP32 mengirim data sensor ke Firebase via HTTP REST API</li>
<li>Data disimpan sebagai JSON tree di cloud</li>
<li>Dashboard web/mobile mendapatkan update real-time via WebSocket</li>
<li>Query, filter, dan security rules mengontrol akses data</li>
</ol>
<p><strong>Struktur data contoh:</strong></p>
<pre>{
  "sensors": {
    "node1": { "temp": 28.5, "humid": 65.2, "ts": 1692345678 },
    "node2": { "temp": 31.2, "humid": 58.1, "ts": 1692345690 }
  }
}</pre>
<div class="mt-warn">⚠️ Firebase Realtime Database memiliki bandwidth read/write limit pada plan gratis — pastikan tidak query terlalu sering dari banyak client.</div>`,
        referensi: 'Firebase RTDB documentation dari Firebase Google (firebase.google.com). ESP32 Firebase library: Firebase-ESP-Client by mobizt (GitHub).'
      },
      {
        title: 'Dashboard IoT & Monitoring',
        content: `<p>Dashboard adalah antarmuka visual untuk memantau data IoT secara real-time — mirip SCADA tapi berbasis web.</p>
<p><strong>Opsi dashboard untuk IoT:</strong></p>
<table class="mt-table"><thead><tr><th>Platform</th><th>Tipe</th><th>Biaya</th><th>Cocok Untuk</th></tr></thead><tbody>
<tr><td>ThingSpeak</td><td>Cloud</td><td>Free (limit channel)</td><td>Prototype, akademik</td></tr>
<tr><td>Blynk</td><td>Cloud + App</td><td>Free tier</td><td>IoT mobile app</td></tr>
<tr><td>Grafana</td><td>Self-hosted</td><td>Open source</td><td>Monitoring industri</td></tr>
<tr><td>Node-RED</td><td>Self-hosted</td><td>Open source</td><td>Flow-based automation</td></tr>
<tr><td>Firebase + Web</td><td>Cloud</td><td>Pay-per-use</td><td>Full custom control</td></tr>
</tbody></table>
<p><strong>Fitur dashboard yang baik:</strong></p>
<ul>
<li>Real-time update (&lt;1 detik delay)</li>
<li>Historical data & trend chart</li>
<li>Alarm & notification (email, Telegram)</li>
<li>Responsive (bisa diakses dari HP)</li>
<li>Authentication & user management</li>
</ul>`,
        referensi: 'Platform IoT dari komparasi umum IoT ecosystem. Grafana: grafana.com. Node-RED: nodered.org. ThingSpeak: mathworks.com/products/thingspeak.'
      }
    ],

    contoh: [
      {
        title: 'Membaca Sensor DHT22 & Kirim ke Firebase',
        langkah: [
          'Koneksi: DHT22 DATA pin → GPIO4 (ESP32), dengan pull-up 10kΩ',
          'Install library: DHT sensor library (Adafruit) + Firebase-ESP-Client (mobizt)',
          'Inisialisasi: WiFi.begin(ssid, pass); Firebase.begin(databaseURL, apiToken);',
          'Loop: float t = dht.readTemperature(); Firebase.setFloat(fb, "/sensors/node1/temp", t);',
          'Cek status: if (Firebase.ready()) Serial.println("Sent OK");'
        ]
      },
      {
        title: 'MQTT Publish & Subscribe untuk Smart Home',
        langkah: [
          'Broker: Mosquitto (localhost:1883) atau cloud (broker.hivemq.com)',
          'Publisher (ESP32 suhu): mqtt.publish("home/livingroom/temp", "28.5")',
          'Subscriber (Node-RED / dashboard): subscribe ke "home/#" (semua topik home)',
          'Topic hierarchy: home/room/sensor_type → home/livingroom/temp, home/bedroom/humid',
          'QoS 1 untuk data penting (suhu, alarm), QoS 0 untuk data高频 (data berubah cepat)'
        ]
      }
    ],

    soal: [
      { q: 'ESP32 memiliki berapa core processor?', opts: ['1', '2', '4', '8'], ans: 1, exp: 'ESP32 memiliki dual-core Xtensa LX6 240MHz.' },
      { q: 'Protokol IoT yang paling hemat bandwidth adalah…', opts: ['HTTP', 'MQTT', 'WebSocket', 'FTP'], ans: 1, exp: 'MQTT header minimal 2 bytes, dirancang khusus untuk IoT dengan bandwidth terbatas.' },
      { q: 'Firebase Realtime Database menyimpan data dalam format…', opts: ['SQL table', 'JSON tree', 'XML', 'CSV'], ans: 1, exp: 'Firebase RTDB menyimpan data sebagai JSON tree yang tersinkronisasi real-time.' },
      { q: 'Interface I2C menggunakan berapa kabel data?', opts: ['1', '2', '3', '4'], ans: 1, exp: 'I2C menggunakan 2 kabel: SDA (data) dan SCL (clock).' },
      { q: 'Deep sleep mode ESP32 mengkonsumsi arus sekitar…', opts: ['1 mA', '100 µA', '10 µA', '1 µA'], ans: 2, exp: 'Deep sleep ESP32 mengkonsumsi &lt;10µA — cocok untuk aplikasi baterai jangka panjang.' }
    ]
  },
{
    id: 'energi-terbarukan',
    emoji: '🌱',
    title: 'Energi Terbarukan & Pembangkit',
    subtitle: 'PLTS, PLTA, PLTB, biomassa, inverter surya, baterai & konsep grid',
    level: 'Menengah',
    durasi: '±30 menit',
    materi: ['PLTS', 'PLTA', 'PLTB', 'Biomassa', 'Inverter & Baterai'],

    sections: [
      {
        title: 'Pembangkit Listrik Tenaga Surya (PLTS)',
        content: `<p>PLTS mengubah energi matahari menjadi listrik menggunakan efek photovoltaic pada sel surya semikonduktor.</p>
<div class="mt-img-wrap"><img src="Asset Materi/pv-system.jpg" alt="Sistem PLTS: panel surya, inverter, dan meter" loading="lazy"><div class="mt-img-cap">Sistem PLTS atap — panel, inverter, dan meter (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Jenis sel surya:</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Efisiensi</th><th>Harga/Watt</th><th>Karakteristik</th></tr></thead><tbody>
<tr><td>Monokristal</td><td>20–22%</td><td>Tinggi</td><td>Warna gelap, efisiensi tertinggi, umur panjang</td></tr>
<tr><td>Polistal</td><td>15–17%</td><td>Sedang</td><td>Biru, lebih murah, efisiensi sedang</td></tr>
<tr><td>Thin-film (CdTe/CIGS)</td><td>10–13%</td><td>Rendah</td><td>Fleksibel, cocok untuk area luas</td></tr>
<tr><td>Perovskite</td><td>25%+ (lab)</td><td>Sangat rendah (potensi)</td><td>Emerging — belum stabil untuk produksi massal</td></tr>
</tbody></table>
<p><strong> Komponen sistem PLTS atap:</strong></p>
<ol>
<li><strong>Panel surya:</strong> Menghasilkan DC (tegangan kerja Vmp ~30–40V per panel)</li>
<li><strong>Inverter:</strong> Mengkonversi DC → AC 220V/50Hz (grid-tied) atau AC off-grid</li>
<li><strong>MPPT Controller:</strong> Maximum Power Point Tracking — memaksimalkan daya dari panel</li>
<li><strong>Baterai (opsional):</strong> Menyimpan energi untuk malam hari (off-grid/hybrid)</li>
<li><strong>Bi-directional meter:</strong> Mengukur energi ekspor-impor (net metering)</li>
</ol>`,
        referensi: 'Efisiensi sel surya dari NREL (National Renewable Energy Laboratory) Best Research-Cell Efficiency Chart. Komponen PLTS dari standar IEC 62446 (grid-connected PV systems).'
      },
      {
        title: 'Pembangkit Listrik Tenaga Air (PLTA)',
        content: `<p>PLTA memanfaatkan potensial air dari ketinggian (head) dan debit air untuk memutar turbin yang menggerakkan generator.</p>
<div class="mt-img-wrap"><img src="Asset Materi/hydro-dam.png" alt="Diagram pembangkit listrik tenaga air" loading="lazy"><div class="mt-img-cap">Diagram PLTA: dam → penstock → turbin → generator (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Prinsip kerja:</strong></p>
<p>$$P = \eta \cdot \rho \cdot g \cdot Q \cdot H$$</p>
<p>Di mana P = daya (Watt), η = efisiensi turbin, ρ = densitas air (1000 kg/m³), g = gravitasi (9,81 m/s²), Q = debit (m³/s), H = head/tinggi jatuhan (m).</p>
<p><strong>Jenis turbin:</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Head</th><th>Debit</th><th>Contoh</th></tr></thead><tbody>
<tr><td>Pelton</td><td>Tinggi (&gt;300m)</td><td>Rendah</td><td>PLTA high-head di pegunungan</td></tr>
<tr><td>Francis</td><td>Sedang (30–300m)</td><td>Sedang</td><td>PLTA waduk besar</td></tr>
<tr><td>Kaplan</td><td>Rendah (&lt;30m)</td><td>Tinggi</td><td>PLTA sungai dataran</td></tr>
<tr><td>Micro-hydro</td><td>Sangat rendah (2–30m)</td><td>Sedang</td><td>Listrik desa terpencil</td></tr>
</tbody></table>`,
        referensi: 'Rumus daya hidro dari fluid mechanics (Bernoulli). Efisiensi turbin dari IEC 60193. PLTA Indonesia: PLTA Saguling (705MW), PLTA Cirata (1008MW), PLTA Karangkates (340MW).'
      },
      {
        title: 'Pembangkit Listrik Tenaga Bayu (PLTB)',
        content: `<p>PLTB mengubah energi kinetik angin menjadi listrik menggunakan turbin angin.</p>
<div class="mt-img-wrap"><img src="Asset Materi/wind-turbine.png" alt="Turbin angin modern (Horizontal Axis Wind Turbine)" loading="lazy"><div class="mt-img-cap">Turbin angin modern — HAWT (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Rumus daya angin:</strong></p>
<p>$$P = \tfrac{1}{2} \cdot \rho \cdot A \cdot v^3 \cdot C_p$$</p>
<p>Di mana ρ = densitas udara (1,225 kg/m³), A = area swept rotor, v = kecepatan angin, Cp = koefisien daya (maks teoritis 59,3% = Limit Betz).</p>
<p><strong>Tipis angin:</strong></p>
<ul>
<li><strong>Cut-in speed (~3 m/s):</strong> Mulai menghasilkan daya</li>
<li><strong>Nominal/Rated speed (~12 m/s):</strong> Daya maksimum</li>
<li><strong>Cut-out speed (~25 m/s):</strong> Berhenti untuk keamanan</li>
</ul>
<div class="mt-tip">💡 Karena P ∝ v³, peningkatan kecepatan angin 2× menghasilkan daya 8× — angin sedikit lebih kencang sangat berpengaruh!</div>`,
        referensi: 'Rumus daya angin & Limit Betz (59,3%) dari aerodinamika turbomachinery (Manwell, Wind Energy Explained). PLTB Indonesia: PLTB Sidrap (75MW), PLTB Tolo (65MW).'
      },
      {
        title: 'Biomassa & Biogas',
        content: `<p>Biomassa adalah material organik dari tumbuhan/hewan yang bisa dibakar atau difermentasi untuk menghasilkan energi.</p>
<p><strong>Sumber biomassa:</strong></p>
<ul>
<li>Bagase tebu (pabrik gula)</li>
<li>Cangkang kelapa sawit (pabrik CPO)</li>
<li>Sekam padi</li>
<li>Sampah organik (TPA, rumah tangga)</li>
<li>Limbah peternakan (kotoran sapi → biogas)</li>
</ul>
<p><strong>Rute konversi energi:</strong></p>
<table class="mt-table"><thead><tr><th>Rute</th><th>Proses</th><th>Produk</th></tr></thead><tbody>
<tr><td>Pembakaran langsung</td><td>Combustion</td><td>Panase → steam → turbin → listrik</td></tr>
<tr><td>Glikolisis</td><td>Thermal decomposition</td><td>Bio-oil, syngas</td></tr>
<tr><td>Fermentasi</td><td>Biological process</td><td>Bioetanol, biogas (metana)</td></tr>
<tr><td>Gasifikasi</td><td>Partial oxidation</td><td>Syngas (CO + H₂) → listrik via gas engine</td></tr>
</tbody></table>
<div class="mt-tip">💡 Indonesia memiliki potensi biomassa sangat besar karena industri sawit — cangkang sawit saja bisa menghasilkan ribuan MW jika dimanfaatkan.</div>`,
        referensi: 'Potensi biomassa Indonesia dari Kementerian ESDM. Efisiensi biogas dari studi IEA (International Energy Agency) Bioenergy.'
      },
      {
        title: 'Inverter Surya & Sistem Penyimpanan',
        content: `<p>Inverter adalah jantung sistem PLTS — mengkonversi DC dari panel menjadi AC yang bisa dipakai rumah/industri atau diekspor ke jaringan PLN.</p>
<p><strong>Tipe inverter surya:</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Fitur</th><th>Cocok Untuk</th></tr></thead><tbody>
<tr><td>Grid-tied</td><td>Sinkron dengan grid PLN, ekspor kelebihan</td><td>Rumah dengan net metering</td></tr>
<tr><td>Off-grid</td><td>Independen dari PLN, butuh baterai</td><td>Area terpencil tanpa PLN</td></tr>
<tr><td>Hybrid</td><td>Grid-tied + baterai backup</td><td>Rumah ingin backup saat mati lampu</td></tr>
<tr><td>Micro-inverter</td><td>1 panel → 1 inverter (modular)</td><td>Atap kompleks (bayangan sebagian)</td></tr>
</tbody></table>
<p><strong>Sistem penyimpanan baterai:</strong></p>
<ul>
<li><strong>Lead-acid (VRLA):</strong> Murah, tahan lama (3–5 tahun), berat, maintenance tinggi</li>
<li><strong>Lithium-ion (LiFePO4):</strong> Ringan, 4000+ cycle, awet (10+ tahun), mahal</li>
<li><strong>Flow battery:</strong> Kapasitas besar, cocok untuk grid-scale, belum umum untuk rumahan</li>
</ul>
<div class="mt-warn">⚠️ Jangan mengisi baterai lead-acid melebihi 80% DoD (Depth of Discharge) — akan memperpendek umur baterai secara drastis!</div>`,
        referensi: 'Tipe inverter dari IEC 62109 (safety of power converters for PV). Baterai LiFePO4: datasheet CATL, BYD. DoD: studi cycle life dari Sandia National Laboratories.'
      }
    ],

    contoh: [
      {
        title: 'Menghitung Daya PLTS Atap',
        langkah: [
          'Atap tersedia 40m², panel monokristal 400Wp (dimensi 1,7m × 1m)',
          'Jumlah panel = 40m² / (1,7 × 1) ≈ 23 panel (maks)',
          'Daya puncak = 23 × 400W = 9.200 Wp = 9,2 kWp',
          'Rata-rata harian (Indonesia, kondisi ideal) = 4–5 jam equivalent sun → 9,2 × 4,5 = 41,4 kWh/hari',
          'Rata-rata konsumsi rumah tangga = 10–15 kWh/hari → PLTS ini kelebihan → ekspor ke PLN'
        ]
      },
      {
        title: 'Menghitung Daya Micro-Hydro',
        langkah: [
          'Sungai di desa: debit Q = 0,5 m³/s, head H = 15m',
          'P = η × ρ × g × Q × H = 0,7 × 1000 × 9,81 × 0,5 × 15',
          'P = 0,7 × 1000 × 9,81 × 0,5 × 15 = 51.502 W ≈ 51,5 kW',
          'Kebutuhan desa 200 KK × 500W = 100 kW → micro-hydro menyediakan ~50% kebutuhan',
          'Sisa kebutuhan: bisa disuplai PLTS hybrid atau jaringan PLN'
        ]
      }
    ],

    soal: [
      { q: 'Limit Betz menyatakan bahwa maksimum energi angin yang bisa ditangkap turbin adalah…', opts: ['25%', '40%', '59,3%', '85%'], ans: 2, exp: 'Limit Betz = 16/27 ≈ 59,3% — batas teoritis konversi energi kinetik angin.' },
      { q: 'Efisiensi panel surya monokristal tipikal adalah…', opts: ['5–10%', '10–13%', '20–22%', '30–35%'], ans: 2, exp: 'Panel monokristal memiliki efisiensi tertinggi: 20–22% untuk komersial.' },
      { q: 'Baterai LiFePO4 lebih baik dari lead-acid karena…', opts: ['Lebih murah', 'Cycle life lebih panjang & ringan', 'Tidak perlu BMS', 'Cocok untuk suhu ekstrem'], ans: 1, exp: 'LiFePO4: 4000+ cycle (vs 500 untuk lead-acid), jauh lebih ringan, umur 10+ tahun.' },
      { q: 'Pada sistem PLTS grid-tied, kelebihan energi yang tidak dipakai…', opts: ['Hilang sia-sia', 'Diekspor ke jaringan PLN', 'Disimpan ke baterai', 'Dibakar oleh dump load'], ans: 1, exp: 'Grid-tied: kelebihan energi diekspor ke jaringan PLN via bi-directional meter (net metering).' },
      { q: 'Turbin yang cocok untuk PLTA dengan head rendah (&lt;30m) dan debit besar adalah…', opts: ['Pelton', 'Francis', 'Kaplan', 'Steam turbine'], ans: 2, exp: 'Turbin Kaplan dirancang untuk head rendah dan debit tinggi.' }
    ]
  }
];

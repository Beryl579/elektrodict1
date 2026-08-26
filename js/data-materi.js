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
  // ASSET MATERI DIPERLUKAN — download dan simpan ke folder "Asset Materi/":
  // 1. resistor-kode-warna.png — https://commons.wikimedia.org/wiki/File:Resistor_color_codes.png (CC BY-SA 4.0)
  // 2. kapasitor-jenis.png    — https://commons.wikimedia.org/wiki/File:Capacitors_(7189597135).jpg (CC BY 2.0)
  // 3. dioda-kurva-vi.png     — https://commons.wikimedia.org/wiki/File:Diode_current_wiki.png (CC BY-SA 3.0)
  // 4. transistor-bjt-pinout.png — https://commons.wikimedia.org/wiki/File:NPN_BJT_(Transistor)_Pinout.svg (CC BY-SA)
  {
    id: 'komponen-elektronika',
    emoji: '🔧',
    title: 'Komponen Elektronika',
    subtitle: 'Resistor, kapasitor, dioda, LED & transistor BJT',
    level: 'Pemula',
    durasi: '±40 menit',
    materi: ['Resistor', 'Kapasitor', 'Dioda & LED', 'Transistor BJT'],
    sections: [
      {
        id: 'resistor',
        emoji: '🟫',
        title: 'Resistor & Kode Warna',
        body: `<p><strong>Resistor</strong> adalah komponen pasif yang menghambat aliran arus listrik. Simbol \\(R\\), satuan <strong>ohm (Ω)</strong>. Nilai resistansi menentukan seberapa besar resistor menahan arus — semakin besar ohm, semakin kecil arus yang mengalir pada tegangan yang sama.</p>
<p><strong>Sistem kode warna 4 gelang</strong> dipakai karena resistor terlalu kecil untuk dicetak angka. Cara baca: Gelang 1 = digit pertama, Gelang 2 = digit kedua, Gelang 3 = pengali (\\(10^n\\)), Gelang 4 = toleransi. Urutan warna digit:</p>
<table class="mt-table"><thead><tr><th>Warna</th><th>Digit</th><th>Pengali</th><th>Toleransi</th></tr></thead><tbody>
<tr><td>Hitam</td><td>0</td><td>×1</td><td>—</td></tr>
<tr><td>Coklat</td><td>1</td><td>×10</td><td>±1%</td></tr>
<tr><td>Merah</td><td>2</td><td>×100</td><td>±2%</td></tr>
<tr><td>Jingga</td><td>3</td><td>×1.000</td><td>—</td></tr>
<tr><td>Kuning</td><td>4</td><td>×10.000</td><td>—</td></tr>
<tr><td>Hijau</td><td>5</td><td>×100.000</td><td>±0,5%</td></tr>
<tr><td>Biru</td><td>6</td><td>×1.000.000</td><td>±0,25%</td></tr>
<tr><td>Ungu</td><td>7</td><td>×10.000.000</td><td>±0,1%</td></tr>
<tr><td>Abu-abu</td><td>8</td><td>×100.000.000</td><td>±0,05%</td></tr>
<tr><td>Putih</td><td>9</td><td>×1.000.000.000</td><td>—</td></tr>
<tr><td>Emas</td><td>—</td><td>×0,1</td><td>±5%</td></tr>
<tr><td>Perak</td><td>—</td><td>×0,01</td><td>±10%</td></tr>
</tbody></table>
<p><strong>Rumus nilai resistor:</strong></p>
$$R = (digit_1 \\times 10 + digit_2) \\times pengali$$
<p><strong>Contoh:</strong> merah-ungu-merah-emas = \\((2 \\times 10 + 7) \\times 100 = 2700\\,\\Omega = 2{,}7\\,\\text{k}\\Omega \\pm 5\\%\\).</p>
<p><strong>Rangkaian resistor:</strong></p>
$$R_{seri} = R_1 + R_2 + \\cdots$$
$$\\frac{1}{R_{paralel}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$$
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/resistor-kode-warna.png" alt="Tabel kode warna resistor 4 gelang" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Klik untuk memperbesar · sumber: Wikimedia Commons (CC BY-SA 4.0)</div></div>
<p>👇 Coba kalkulator kode warna interaktif:</p>
<div class="sim-wrap" id="resistor-sim"></div>
<div class="mt-tip">💡 Hafal urutan warna dengan: Hi-Co-Me-Ji-Ku-Hi-Bi-Un-Abu-Pu (Hitam-Coklat-Merah-Jingga-Kuning-Hijau-Biru-Ungu-Abu-Putih)</div>`
      },
      {
        id: 'kapasitor',
        emoji: '⚡',
        title: 'Kapasitor — Penyimpan Muatan',
        body: `<p><strong>Kapasitor</strong> terdiri dari dua pelat konduktor yang dipisahkan bahan <strong>dielektrik</strong>. Fungsinya menyimpan muatan listrik sementara — seperti ember yang menampung air untuk dilepas nanti.</p>
<p><strong>Rumus dasar:</strong></p>
$$Q = C \\cdot V$$
$$C = \\varepsilon \\frac{A}{d}$$
<p>dengan \\(Q\\) = muatan (coulomb), \\(C\\) = kapasitansi (farad/F), \\(V\\) = tegangan (volt), \\(\\varepsilon\\) = permitivitas dielektrik, \\(A\\) = luas pelat, \\(d\\) = jarak antar pelat. Nilai umum: <strong>pF</strong> (pikofarad), <strong>nF</strong> (nanofarad), <strong>μF</strong> (mikrofarad).</p>
<p><strong>Jenis kapasitor:</strong></p>
<ul>
<li><strong>Elektrolit</strong> — polar (punya + dan −), 1μF–10000μF, kapasitas besar, <strong>perhatikan polaritas!</strong></li>
<li><strong>Keramik</strong> — non-polar, 1pF–100nF, untuk decoupling & bypass frekuensi tinggi</li>
<li><strong>Film</strong> — non-polar, presisi tinggi, stabil, untuk filter audio & rangkaian presisi</li>
</ul>
<p><strong>Pengisian RC:</strong> saat kapasitor diisi lewat resistor, tegangannya naik tidak instan:</p>
$$V(t) = V_s (1 - e^{-t/RC})$$
<p>Konstanta waktu \\(\\tau = RC\\) — setelah \\(5\\tau\\) kapasitor terisi ~99,3%.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/kapasitor-jenis.png" alt="Berbagai jenis kapasitor: elektrolit, keramik, dan film" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Klik untuk memperbesar · sumber: Wikimedia Commons (CC BY 2.0)</div></div>
<p>👇 Animasi kurva pengisian RC:</p>
<div class="sim-wrap" id="rc-sim"></div>
<div class="mt-warn">⚠️ Kapasitor elektrolit berpolaritas — pasang terbalik bisa meledak! Kaki panjang = + (positif).</div>`
      },
      {
        id: 'dioda',
        emoji: '➡️',
        title: 'Dioda — Katup Arus Satu Arah',
        body: `<p><strong>Dioda</strong> adalah sambungan semikonduktor <strong>PN junction</strong> yang mengalirkan arus hanya satu arah: dari <strong>anoda (+)</strong> ke <strong>katoda (−)</strong>. Ibarat katup air yang hanya membuka ke satu sisi.</p>
<ul>
<li><strong>Forward bias</strong> (anoda lebih positif dari katoda): dioda konduksi, tegangan jatuh \\(V_f \\approx 0{,}7\\text{V}\\) untuk silikon (Si), \\(0{,}3\\text{V}\\) untuk germanium (Ge), \\(2–3\\text{V}\\) untuk LED.</li>
<li><strong>Reverse bias</strong> (katoda lebih positif): arus terblokir, hanya arus bocor sangat kecil. Jika tegangan balik terlalu besar, terjadi <em>zener breakdown</em>.</li>
</ul>
<p><strong>Rumus resistor pembatas untuk dioda/LED:</strong></p>
$$R = \\frac{V_{cc} - V_f}{I_f}$$
<p>Aplikasi: <strong>penyearah (rectifier)</strong> AC→DC, proteksi polaritas terbalik, <em>signal clamping</em>, dan regulator tegangan zener.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/dioda-kurva-vi.png" alt="Kurva karakteristik V-I dioda semikonduktor" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Klik untuk memperbesar · Kurva V-I dioda silikon · sumber: Wikimedia Commons (CC BY-SA 3.0)</div></div>
<div class="mt-tip">💡 Cara cek dioda dengan multimeter: mode dioda, tempelkan probe merah ke anoda dan hitam ke katoda. Muncul angka ~0,6–0,7 = baik. Terbalik = OL (open). Dua arah = rusak/short.</div>`
      },
      {
        id: 'led',
        emoji: '💡',
        title: 'LED — Dioda Pemancar Cahaya',
        body: `<p><strong>LED (Light Emitting Diode)</strong> adalah dioda yang memancarkan cahaya saat arus forward mengalir. Elektron yang melompat di sambungan PN melepaskan energi sebagai foton.</p>
<p><strong>Tegangan forward berdasarkan warna:</strong> Merah/Kuning ≈ \\(1{,}8–2{,}2\\text{V}\\), Hijau/Biru ≈ \\(2{,}8–3{,}5\\text{V}\\), Putih ≈ \\(3{,}0–3{,}6\\text{V}\\). Arus forward umum \\(I_f = 10–20\\,\\text{mA}\\).</p>
<p><strong>WAJIB pasang resistor seri</strong> untuk membatasi arus:</p>
$$R = \\frac{V_{cc} - V_f}{I_f}$$
<p><strong>Contoh:</strong> LED merah (\\(V_f=2\\text{V}\\), \\(I_f=20\\text{mA}\\)) di 5V → \\(R = (5-2)/0{,}02 = 150\\,\\Omega\\).</p>
<p>👇 Kalkulator resistor LED — masukkan nilai dan lihat hasilnya:</p>
<div class="sim-wrap" id="led-calc"></div>
<div class="mt-warn">⚠️ Jangan sambungkan LED langsung ke sumber tegangan tanpa resistor — LED akan rusak dalam hitungan detik karena arus tidak terbatas!</div>`
      },
      {
        id: 'transistor-bjt',
        emoji: '🔀',
        title: 'Transistor BJT — Switch & Amplifier',
        body: `<p><strong>BJT (Bipolar Junction Transistor)</strong> adalah transistor sambungan dwikutub dengan 3 terminal: <strong>Base (B)</strong>, <strong>Collector (C)</strong>, <strong>Emitter (E)</strong>.</p>
<p><strong>Dua tipe:</strong> <strong>NPN</strong> (arus masuk B → C-E aktif, paling umum) dan <strong>PNP</strong> (kebalikannya, arus keluar B).</p>
<p><strong>Tiga mode kerja:</strong></p>
<ul>
<li><strong>Cutoff:</strong> \\(I_B \\approx 0\\), transistor OFF, \\(I_C \\approx 0\\) — sakelar terbuka.</li>
<li><strong>Saturasi:</strong> transistor ON penuh, \\(V_{CE} \\approx 0{,}2\\text{V}\\) — sebagai <strong>switch</strong>.</li>
<li><strong>Aktif/Linear:</strong> \\(I_C = \\beta \\times I_B\\) (sebagai <strong>amplifier</strong>), \\(\\beta\\) (hFE) biasanya 100–300.</li>
</ul>
<p><strong>Rumus kunci:</strong></p>
$$I_C = \\beta \\cdot I_B$$
<p>Transistor umum: <strong>BC547</strong> (NPN, TO-92, 100mA), <strong>2N2222</strong> (NPN, 600mA), <strong>TIP31</strong> (NPN, power).</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/transistor-bjt-pinout.png" alt="Pinout transistor NPN BC547 TO-92 dan simbol rangkaian" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Klik untuk memperbesar · Pinout NPN TO-92 (BC547) · sumber: Wikimedia Commons (CC BY-SA)</div></div>
<p>👇 Simulasi switch transistor — atur arus basis dan lihat LED menyala:</p>
<div class="sim-wrap" id="bjt-sim"></div>
<div class="mt-tip">💡 Transistor sebagai switch digital: Arduino GPIO (5V, maks 40mA) tidak cukup kuat untuk langsung nyalakan motor atau relay. Pakai transistor sebagai 'penguat' — sinyal kecil dari GPIO mengontrol arus besar dari catu daya terpisah.</div>`
      },
      {
        id: 'rangkaian-praktis',
        emoji: '🛠️',
        title: 'Rangkaian Praktis: Driver LED dengan Transistor',
        body: `<p>Rangkaian lengkap: <strong>Arduino GPIO → \\(R_{basis}\\) → Base NPN → Collector → LED + \\(R_{LED}\\) → VCC (5V)</strong>. Emitter NPN ke GND. Transistor bertindak sebagai sakelar yang dikendalikan GPIO.</p>
<p><strong>Langkah desain step-by-step:</strong></p>
<ol>
<li><strong>Tentukan LED:</strong> \\(V_f=2\\text{V}\\), \\(I_f=20\\text{mA}\\)</li>
<li><strong>Hitung \\(R_{LED}\\):</strong> \\((5-2)/0{,}02 = 150\\,\\Omega\\)</li>
<li><strong>Tentukan \\(\\beta = 100\\), \\(I_C = 20\\text{mA}\\) → \\(I_{B}\\) minimum = \\(I_C/\\beta = 0{,}2\\text{mA}\\)</strong></li>
<li><strong>Pakai \\(I_B = 2\\text{mA}\\)</strong> (10× overdrive untuk saturasi penuh)</li>
<li><strong>Hitung \\(R_{basis}\\):</strong> \\((5-0{,}7)/0{,}002 = 2150\\,\\Omega\\) → pakai <strong>2,2kΩ</strong></li>
</ol>
<div class="mt-tip">💡 Selalu overdrive basis 5–10× dari nilai minimum — ini memastikan transistor benar-benar saturasi dan \\(V_{CE}\\) mendekati 0V. Transistor yang tidak saturasi penuh akan panas dan boros.</div>
<div class="mt-warn">⚠️ Perhatikan urutan: hitung kebutuhan beban dulu (\\(I_C\\)), baru hitung \\(I_B\\), baru \\(R_{basis}\\). Urutan terbalik adalah kesalahan umum pemula.</div>`
      }
    ],
    contoh: [
      {
        judul: 'Baca Kode Warna Resistor',
        soal: 'Resistor dengan gelang coklat-hitam-jingga-emas bernilai berapa?',
        langkah: [
          'Coklat = 1, Hitam = 0, Jingga = ×1.000, Emas = ±5%.',
          'Gunakan rumus: \\(R = (1 \\times 10 + 0) \\times 1000\\).',
          'Hitung: \\(R = 10 \\times 1000 = 10000\\,\\Omega = 10\\,\\text{k}\\Omega\\).',
          '<strong>Jawaban:</strong> <strong>10 kΩ ±5%</strong>.'
        ]
      },
      {
        judul: 'Hitung Resistor LED',
        soal: 'LED biru (Vf=3,2V, If=15mA) dipasang pada sumber 3,3V. Berapa resistor seri yang dibutuhkan?',
        langkah: [
          'Diketahui \\(V_{cc}=3{,}3\\text{V}\\), \\(V_f=3{,}2\\text{V}\\), \\(I_f=15\\text{mA}=0{,}015\\text{A}\\).',
          'Gunakan rumus: \\(R = \\dfrac{V_{cc}-V_f}{I_f}\\).',
          'Hitung: \\(R = \\dfrac{3{,}3-3{,}2}{0{,}015} = \\dfrac{0{,}1}{0{,}015} \\approx 6{,}7\\,\\Omega\\).',
          '<strong>Jawaban:</strong> <strong>6,7Ω → pakai 10Ω</strong> (nilai standar E12 terdekat, lebih aman).'
        ]
      },
      {
        judul: 'Konstanta Waktu RC',
        soal: 'Rangkaian RC dengan R=10kΩ dan C=100μF. Berapa konstanta waktu τ dan kapan kapasitor terisi penuh?',
        langkah: [
          'Konversi: \\(C=100\\,\\mu\\text{F}=0{,}0001\\,\\text{F}\\).',
          'Hitung: \\(\\tau = RC = 10000 \\times 0{,}0001 = 1\\,\\text{detik}\\).',
          'Setelah \\(5\\tau = 5\\,\\text{detik}\\) kapasitor terisi \\(1-e^{-5} \\approx 99{,}3\\%\\).',
          '<strong>Jawaban:</strong> \\(\\tau = 1\\) detik, penuh ~5 detik.'
        ]
      },
      {
        judul: 'Transistor sebagai Switch',
        soal: 'Motor 12V/200mA dikendalikan transistor NPN β=150. Hitung R_basis agar saturasi penuh bila GPIO 5V.',
        langkah: [
          'Hitung \\(I_{Bmin} = I_C/\\beta = 200/150 \\approx 1{,}33\\,\\text{mA}\\).',
          'Pakai overdrive 5mA untuk saturasi (≫1,33mA).',
          'Hitung: \\(R_{basis} = (5-0{,}7)/0{,}005 = 860\\,\\Omega\\).',
          '<strong>Jawaban:</strong> <strong>860Ω → pakai 1kΩ</strong> (nilai standar).'
        ]
      }
    ],
    soal: [
      { q: 'Resistor dengan gelang merah-merah-coklat-emas bernilai…', opts: ['200Ω ±5%', '220Ω ±5%', '2200Ω ±5%', '22Ω ±5%'], ans: 1, exp: 'Merah=2, Merah=2, Coklat=×10 → (2×10+2)×10 = 220Ω, toleransi emas ±5%.' },
      { q: 'Kapasitor elektrolit berbeda dari keramik karena…', opts: ['Lebih kecil fisiknya', 'Memiliki polaritas dan tidak boleh dipasang terbalik', 'Nilainya lebih kecil', 'Tidak bisa menyimpan muatan'], ans: 1, exp: 'Kapasitor elektrolit berpolaritas — pasang terbalik bisa rusak atau meledak. Keramik non-polar.' },
      { q: 'Forward voltage dioda silikon saat konduksi adalah…', opts: ['0,3V', '1,2V', '0,7V', '2,0V'], ans: 2, exp: 'Dioda silikon (Si) ≈ 0,7V saat konduksi. Germanium ≈ 0,3V.' },
      { q: 'LED merah (Vf=2V, If=20mA) dipasang di 9V. Resistor seri yang dibutuhkan…', opts: ['100Ω', '350Ω', '450Ω', '200Ω'], ans: 1, exp: 'R = (Vcc−Vf)/If = (9−2)/0,02 = 350Ω.' },
      { q: 'Transistor BJT NPN dalam mode saturasi berfungsi sebagai…', opts: ['Amplifier tegangan', 'Sakelar terbuka', 'Sakelar tertutup/ON', 'Dioda'], ans: 2, exp: 'Saturasi = transistor ON penuh, VCE ≈ 0,2V, arus mengalir bebas dari C ke E — seperti sakelar tertutup.' }
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
        id: 'gelombang-sinusoidal-frekuensi',
        emoji: '🌊',
        title: 'Gelombang Sinusoidal & Frekuensi',
        body: `<p>Arus bolak-balik (AC) berupa gelombang sinusoidal:</p>
<p>$$v(t) = V_p \\sin(\\omega t + \\phi)$$</p>
<p>Di mana Vp = tegangan puncak, ω = 2πf (frekuensi sudut), f = frekuensi (Hz), φ = sudut fase awal.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/3phase-waveform.png" alt="Gelombang sinusoidal 3 fasa" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Gelombang sinusoidal 3 fasa (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Hubungan RMS dan peak:</strong></p>
<p>$$V_{rms} = \\frac{V_p}{\\sqrt{2}} \\approx 0,707 \\cdot V_p$$</p>
<p>Di Indonesia: 220V RMS, 50Hz → Vp = 220 × √2 ≈ 311V.</p>
<div class="mt-tip">💡 Semua perhitungan daya pada rangkaian AC menggunakan nilai RMS, bukan nilai puncak.</div>`,
        referensi: 'Standar frekuensi jaringan listrik Indonesia: 50 Hz (PLN, Peraturan Menteri ESDM). Nilai RMS dari definisi umum AC theory.'
      },
      {
        id: 'impedansi-rlc',
        emoji: '🔗',
        title: 'Impedansi RLC',
        body: `<p>Dalam rangkaian AC, hambatan terhadap arus disebut <strong>impedansi (Z)</strong>:</p>
<p>$$Z = R + j(X_L - X_C) \\qquad X_L = 2\\pi f L \\qquad X_C = \\frac{1}{2\\pi f C}$$</p>
<p>$$|Z| = \\sqrt{R^2 + (X_L - X_C)^2}$$</p>
<table class="mt-table"><thead><tr><th>Kondisi</th><th>Sifat</th><th>Arus vs Tegangan</th></tr></thead><tbody>
<tr><td>Xl &gt; Xc</td><td>Induktif</td><td>Arus tertinggal tegangan</td></tr>
<tr><td>Xl &lt; Xc</td><td>Kapasitif</td><td>Arus mendahului tegangan</td></tr>
<tr><td>Xl = Xc (Resonansi)</td><td>Z = R (minimum)</td><td>Arus maksimum</td></tr>
</tbody></table>
<div class="mt-tip">💡 Pada resonansi, reaktansi saling meniadakan — prinsip ini digunakan di filter RF dan rangkaian penala.</div>`,
        referensi: 'Rumus impedansi dari teori rangkaian AC (Alexander & Sadiku, Fundamentals of Electric Circuits). Resonansi: f₀ = 1/(2π√LC).'
      },
      {
        id: 'faktor-daya',
        emoji: '📐',
        title: 'Faktor Daya (Power Factor)',
        body: `<p>Faktor daya (cos φ) menunjukkan seberapa efisien energi dimanfaatkan:</p>
<p>$$\\cos\\phi = \\frac{P}{S} = \\frac{R}{|Z|}$$</p>
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
        id: 'daya-aktif-reaktif-semu',
        emoji: '⚡',
        title: 'Daya Aktif, Reaktif & Semu',
        body: `<p>Tiga jenis daya dalam Segitiga Daya:</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/power-triangle.png" alt="Segitiga daya AC" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Segitiga Daya — hubungan P, Q, dan S (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<table class="mt-table"><thead><tr><th>Jenis</th><th>Simbol</th><th>Satuan</th><th>Fungsi</th></tr></thead><tbody>
<tr><td>Aktif</td><td>P</td><td>Watt (W)</td><td>Daya yang melakukan kerja</td></tr>
<tr><td>Reaktif</td><td>Q</td><td>VAR</td><td>Daya dalam medan listrik/magnet</td></tr>
<tr><td>Semu</td><td>S</td><td>VA</td><td>Total daya dari jaringan</td></tr>
</tbody></table>
<p>$$S = \\sqrt{P^2 + Q^2} \\qquad P_{3\\phi} = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\cos\\phi$$</p>`,
        referensi: 'Segitiga daya: konsep fundamental power engineering. Rumus 3 fasa dari Standard Handbook for Electrical Engineers (IEEE).'
      },
      {
        id: 'transformator',
        emoji: '🔁',
        title: 'Transformator',
        body: `<p>Transformator mengubah tegangan AC berdasarkan induksi elektromagnetik (Faraday):</p>
<p>$$\\frac{V_1}{V_2} = \\frac{N_1}{N_2} = k \\qquad I_1 V_1 = I_2 V_2 \\cdot \\eta$$</p>
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
        judul: 'Menghitung Impedansi RLC Seri',
        soal: 'Rangkaian: R=100Ω, L=0,2H, C=10µF, f=50Hz',
        langkah: [
          'Xl = 2πfL = 2 × 3,14 × 50 × 0,2 = 62,8Ω',
          'Xc = 1/(2πfC) = 1/(2 × 3,14 × 50 × 10⁻⁶) = 318,3Ω',
          'Z = √(100² + (62,8-318,3)²) = √(10.000 + 65.230) ≈ 274,3Ω',
          'I = V/Z = 220/274,3 ≈ 0,802A'
        ]
      },
      {
        judul: 'Koreksi Faktor Daya Motor Induksi',
        soal: 'Motor 3 fasa 10kW, cos φ = 0,7, V = 380V',
        langkah: [
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
        id: 'gerbang-logika-dasar',
        emoji: '🚪',
        title: 'Gerbang Logika Dasar',
        body: `<p>Gerbang logika adalah blok bangunan dasar sistem digital — menerima input biner (0/1) dan menghasilkan output sesuai fungsi logikanya.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/logic-gates.png" alt="Simbol 7 gerbang logika dasar" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Simbol 7 gerbang logika dasar (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'tabel-kebenaran',
        emoji: '📋',
        title: 'Tabel Kebenaran',
        body: `<p>Tabel kebenaran menunjukkan semua kombinasi input dan output.</p>
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
        id: 'aljabar-boolean',
        emoji: '🧮',
        title: 'Aljabar Boolean',
        body: `<p>Aljabar Boolean menyederhanakan rangkaian logika.</p>
<table class="mt-table"><thead><tr><th>Hukum</th><th>OR (+)</th><th>AND (·)</th></tr></thead><tbody>
<tr><td>Identitas</td><td>A + 0 = A</td><td>A · 1 = A</td></tr>
<tr><td>Null</td><td>A + 1 = 1</td><td>A · 0 = 0</td></tr>
<tr><td>Idempoten</td><td>A + A = A</td><td>A · A = A</td></tr>
<tr><td>Komplemen</td><td>A + Ā = 1</td><td>A · Ā = 0</td></tr>
<tr><td>Komutatif</td><td>A + B = B + A</td><td>A · B = B · A</td></tr>
</tbody></table>
<p><strong>Hukum De Morgan:</strong></p>
<p>$$\\overline{A + B} = \\bar{A} \\cdot \\bar{B} \\qquad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}$$</p>
<div class="mt-tip">💡 De Morgan mengkonversi bentuk OR-dominan ↔ AND-dominan — kunci simplifikasi rangkaian minimum gerbang.</div>`,
        referensi: 'Aljabar Boolean: George Boole (1815–1864). Hukum De Morgan dari teori set & logika matematika.'
      },
      {
        id: 'flip-flop',
        emoji: '💾',
        title: 'Flip-Flop',
        body: `<p>Flip-flop adalah elemen memori dasar — menyimpan 1 bit data (berbeda dari gerbang kombinasional).</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/d-flipflop.png" alt="Simbol D flip-flop" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">D Flip-Flop — blok memori dasar (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'half-adder-full-adder',
        emoji: '➕',
        title: 'Half Adder & Full Adder',
        body: `<p>Adder menjumlahkan bit biner — fondasi ALU dalam processor.</p>
<p><strong>Half Adder</strong> (2 bit): S = A ⊕ B, C = A · B</p>
<p><strong>Full Adder</strong> (3 bit, termasuk carry-in):</p>
<p>$S = A \\oplus B \\oplus C_{in} \\qquad C_{out} = A \\cdot B + C_{in}(A \\oplus B)$</p>
<p>Empat full adder cascading → <strong>4-bit parallel adder</strong>, bisa di-stack untuk 8-bit, 16-bit, dst.</p>
<div class="mt-tip">💡 CPU modern menjumlahkan angka 64-bit dengan Carry-Lookahead untuk percepatan propagasi carry.</div>`,
        referensi: 'Half/Full Adder dari teori digital design (Mano, Digital Design). Carry-Lookahead dari Patterson & Hennessy, Computer Organization.'
      },
      {
        id: 'praktik-gerbang',
        emoji: '🔬',
        title: 'Praktik Langsung di Lab Proyek',
        body: `<p>Semua konsep di atas bisa kamu coba langsung secara gratis di simulator <b>Wokwi</b> — tanpa mikrokontroler, murni rangkaian gerbang logika dengan saklar input dan LED output. Buka <b>Lab Proyek → Proyek Wokwi</b> lalu pilih:</p>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-not')">NOT — inverter</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-and')">AND (7408)</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-or')">OR (7432)</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-nand')">NAND (7400)</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-nor')">NOR (7402)</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-xor')">XOR (7486)</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-xnor')">XNOR (74266)</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-mux')">Multiplexer 2-ke-1</div>
<div class="vtpl-chip" onclick="goToTemplate('tpl-gate-half-adder')">Half Adder 1-bit</div>
<p style="margin-top:10px;">Setiap proyek menyertakan <b>tabel kebenaran</b> dan panduan perakitan langkah demi langkah. Geser saklar input ke semua kombinasi, lalu cocokkan nyala LED dengan tabel kebenaran yang kamu pelajari di bab ini.</p>`
      }
    ],
    contoh: [
      {
        judul: 'Menyederhanakan dengan De Morgan',
        soal: 'Fungsi: Y = (A · B) + (A · C)',
        langkah: [
          'Faktorkan: Y = A · (B + C)',
          'Dari 3 gerbang (2 AND + 1 OR) menjadi 2 gerbang (1 AND + 1 OR)',
          'Penghematan: mengurangi IC & konsumsi daya'
        ]
      },
      {
        judul: '2-bit Counter dengan JK Flip-Flop',
        soal: 'Counter biner: 00 → 01 → 10 → 11 → 00 (mod-4)',
        langkah: [
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
        id: 'motor-dc-arus-searah',
        emoji: '🔋',
        title: 'Motor DC & Arus Searah',
        body: `<p>Motor DC mengubah energi listrik menjadi energi mekanik berdasarkan gaya Lorentz pada konduktor dalam medan magnet.</p>
<p>$$T = k \\cdot \\Phi \\cdot I_a \\qquad E_b = k \\cdot \\Phi \\cdot \\omega$$</p>
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
        id: 'motor-induksi',
        emoji: '🌀',
        title: 'Motor Induksi (Asinkron)',
        body: `<p>Motor induksi 3 fasa adalah motor industri paling banyak digunakan — murah, kuat, minim perawatan.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/induction-motor.png" alt="Diagram motor induksi 3 fasa" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Motor induksi 3 fasa — prinsip kerja (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Prinsip kerja:</strong></p>
<ol>
<li>Arus AC 3 fasa pada stator menghasilkan medan magnet berputar (rotating magnetic field)</li>
<li>Medan ini memotong konduktor rotor → menginduksi arus (hukum Faraday)</li>
<li>Arus pada rotor dalam medan stator → gaya Lorentz → rotor berputar</li>
</ol>
<p><strong>Slip:</strong></p>
<p>$$s = \\frac{n_s - n_r}{n_s} \\times 100\\%$$</p>
<p>Di mana ns = kecepatan sinkron (120f/p), nr = kecepatan rotor aktual. Slip tipikal 2–5% pada beban nominal.</p>
<div class="mt-warn">⚠️ Motor induksi tidak bisa mengontrol kecepatan secara presisi tanpa VFD (Variable Frequency Drive).</div>`,
        referensi: 'Prinsip motor induksi: Nikola Tesla & Galileo Ferraris (1888). Slip dan sinkron dari teori AC machines (Chapman, Fitzgerald & Kingsley).'
      },
      {
        id: 'kontaktor-relay',
        emoji: '🔌',
        title: 'Kontaktor & Relay',
        body: `<p><strong>Kontaktor</strong> adalah sakelar elektromagnetik untuk menghubungkan/memutus arus beban besar (10A–600A).</p>
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
        id: 'rangkaian-star-delta',
        emoji: '🔺',
        title: 'Rangkaian Star-Delta (Y-Δ)',
        body: `<p>Star-delta adalah metode starting motor induksi untuk mengurangi arus start hingga 1/3 dari arus direct-on-line.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/star-delta.png" alt="Diagram rangkaian star-delta motor" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Rangkaian star-delta (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'thermal-overload-relay',
        emoji: '🌡️',
        title: 'Thermal Overload Relay (TOR)',
        body: `<p>TOR melindungi motor dari panas berlebih (overload) yang merusak isolasi winding.</p>
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
        id: 'vfd',
        emoji: '🎚️',
        title: 'VFD (Variable Frequency Drive)',
        body: `<p>VFD mengontrol kecepatan motor induksi dengan mengubah frekuensi dan tegangan supply motor.</p>
<p><strong>Prinsip:</strong></p>
<p>$$n = \\frac{120f}{p}(1-s)$$</p>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/vfd.jpg" alt="Variable Frequency Drive (VFD) untuk motor AC" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Variable Frequency Drive (CC BY-SA 4.0 Wikimedia Commons)</div></div>`,
        referensi: 'Prinsip VFD dari power electronics (Muhammad, Power Electronics). Efisiensi pompa/kipas: hukum affinity (P ∝ n³) dari fluid mechanics.'
      }
    ],
    contoh: [
      {
        judul: 'Menghitung Slip Motor Induksi',
        soal: 'Motor 4-pole, 50Hz, nameplate: 1440 RPM',
        langkah: [
          'Ns = 120 × f / p = 120 × 50 / 4 = 1500 RPM',
          'Slip s = (1500 - 1440) / 1500 = 60/1500 = 0,04 = 4%',
          'Slip 4% → motor dalam kondisi normal (tipikal 2–5%)'
        ]
      },
      {
        judul: 'Penghematan Energi VFD pada Pompa',
        soal: 'Pompa beroperasi 80% dari kecepatan nominal (n₂ = 0,8 × n₁)',
        langkah: [
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
        id: 'pengenalan-plc',
        emoji: '🏭',
        title: 'Pengenalan PLC',
        body: `<p>PLC (Programmable Logic Controller) adalah komputer industri yang dirancang untuk mengendalikan mesin dan proses produksi secara real-time.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/plc-cpu.jpg" alt="Unit PLC industri" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Unit PLC industri — CPU, modul I/O, dan power supply (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'ladder-diagram',
        emoji: '🪜',
        title: 'Ladder Diagram (LD)',
        body: `<p>Ladder Diagram adalah bahasa pemrograman PLC paling populer — menyerupai rangkaian relay elektrik yang mudah dipahami teknisi listrik.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/ladder-and.jpg" alt="Contoh ladder diagram AND gate" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Ladder diagram — contact seri (AND) dan paralel (OR) (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'timer-counter',
        emoji: '⏱️',
        title: 'Timer & Counter',
        body: `<p>Timer dan counter adalah fungsi paling sering digunakan dalam program PLC.</p>
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
        id: 'hmi',
        emoji: '🖥️',
        title: 'HMI (Human-Machine Interface)',
        body: `<p>HMI adalah panel layar sentuh yang memungkinkan operator berinteraksi dengan PLC — memantau status, mengubah parameter, dan melihat alarm.</p>
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
        id: 'scada',
        emoji: '📊',
        title: 'SCADA (Supervisory Control and Data Acquisition)',
        body: `<p>SCADA adalah sistem monitoring dan kontrol terpusat untuk fasilitas industri berskala besar — mengumpulkan data dari banyak PLC/RTU dan menampilkannya di satu pusat kontrol.</p>
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
        id: 'studi-kasus-sistem-konveyor-otomatis',
        emoji: '⚙️',
        title: 'Studi Kasus: Sistem Konveyor Otomatis',
        body: `<p>Simulasi sistem konveyor dengan 3 stasiun kerja yang dikontrol PLC:</p>
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
    ,
{
        "id": "video-plc",
        "emoji": "🎬",
        "title": "Video Pendukung (tab Video)",
        "body": "<p>Konsep PLC paling mudah dipahami lewat animasi. Buka tab <strong>Video</strong> (topik <em>PLC, HMI & SCADA</em> dan <em>Digital & Kontrol</em>) untuk menonton: 👇</p>\n<div class=\"mt-tip\">▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('PbAGl_mv5XI')\">🎬 Dasar PLC (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('qaI48NCUvkA')\">🎬 Apa itu Ladder Logic? (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('BHbOXDt5O3o')\">🎬 Timer PLC untuk Pemula (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('B3YVpgs9RY4')\">🎬 DCS vs SCADA (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('G5VGUGFzGj0')\">🎬 Sinking vs Sourcing (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('S97rhReEnbo')\">🎬 Apa itu AS-Interface? (RealPars)</button></div>\n<div class=\"mt-warn\">⚠️ PLC belum bisa disimulasikan di Wokwi (belum ada part-nya). Manfaatkan video, modul ini, dan latihan soal sebagai fondasi sebelum praktik hardware asli — untuk dasar elektronik/Arduino, coba template ESP32/Arduino di Lab Proyek.</div>"
      }],
    contoh: [
      {
        judul: 'Membuat Timer On-Delay di Ladder',
        soal: 'Input X0 = start button (NO), Output Y0 = lampu',
        langkah: [
          'Timer T1 = TON, preset = 50 (5,0 detik pada timer 100ms)',
          'Ladder: ---[X0]---[TON T1 K50]---',
          '           ---[T1]---(Y0)---',
          'Hasil: tekan X0 → tunggu 5 detik → Y0 (lampu) menyala'
        ]
      },
      {
        judul: 'Counter Produk pada Konveyor',
        soal: 'Sensor photocell = X1 (pulse setiap produk lewat)',
        langkah: [
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
        id: 'pengenalan-esp32-untuk-iot',
        emoji: '📶',
        title: 'Pengenalan ESP32 untuk IoT',
        body: `<p>ESP32 adalah microcontroller populer untuk proyek IoT karena memiliki WiFi & Bluetooth bawaan, cukup powerful untuk aplikasi real-time, dan harganya sangat terjangkau.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/esp32-devkitc-pinout.png" alt="Pinout ESP32 DevKit" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">ESP32 DevKit pinout (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'sensor-untuk-iot',
        emoji: '🔍',
        title: 'Sensor untuk IoT',
        body: `<p>Sensor mengubah besaran fisik menjadi sinyal listrik yang bisa dibaca oleh microcontroller.</p>
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
        id: 'wifi-protokol-komunikasi',
        emoji: '📡',
        title: 'WiFi & Protokol Komunikasi',
        body: `<p>ESP32 terhubung ke internet via WiFi, lalu mengirim data menggunakan protokol ringan untuk IoT.</p>
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
        id: 'firebase-realtime-database',
        emoji: '🔥',
        title: 'Firebase Realtime Database',
        body: `<p>Firebase adalah platform backend-as-a-service dari Google yang menyediakan Realtime Database (NoSQL JSON tree) yang tersinkronisasi secara real-time ke semua client.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/iot-diagram.jpg" alt="Diagram arsitektur IoT dengan Firebase" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Arsitektur IoT: Sensor → ESP32 → Firebase → Dashboard (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        referensi: 'Firebase RTDB documentation dari Firebase Google (firebase.google.com). ESP32 kirim/membaca data via HTTP REST API ke URL .../path.json (tanpa library Firebase, cukup HTTPClient bawaan).'
      },
      {
        id: 'dashboard-iot-monitoring',
        emoji: '📈',
        title: 'Dashboard IoT & Monitoring',
        body: `<p>Dashboard adalah antarmuka visual untuk memantau data IoT secara real-time — mirip SCADA tapi berbasis web.</p>
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
    ,
{
        "id": "latihan-esp32",
        "emoji": "🧰",
        "title": "Latihan Praktik di Lab Proyek",
        "body": "<p>Semua konsep modul ini sudah ada <strong>template siap pakai</strong> di tab <strong>Lab Proyek</strong> (filter: ESP32) — tinggal buka, salin kodenya ke Wokwi, dan coba: 👇</p>\n<div class=\"mt-tip\">🔗 <button class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-esp32-ntp-clock')\">🧰 Jam Internet NTP</button> — WiFi + configTime + OLED<br>🔗 <button class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-esp32-web-server')\">🧰 Web Server Kendali LED</button> — WebServer.h + kontrol via browser<br>🔗 <button class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-esp32-adc-averaging')\">🧰 ADC Multi-Sampling</button> — baca sensor analog + filter noise<br>🔗 <button class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-esp32-pwm-dimmer')\">🧰 LED Dimmer PWM</button> — analogWrite / LEDC bawaan<br>🔗 <button class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-esp32-neopixel-rainbow')\">🧰 NeoPixel Rainbow</button> — animasi strip WS2812<br>🔗 <button class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-esp32-joystick-oled')\">🧰 Joystick 2 Sumbu</button> — ADC multi-channel + tombol</div>\n<div class=\"mt-warn\">⚠️ Template Firebase (sensor PIR, LDR, DHT, ultrasonik, termostat, gas, servo, RGB, OLED, lonceng) tersedia di Lab Proyek — pelajari pola REST PUT/GET-nya lalu ubah jalur data sesuai kebutuhanmu.</div>\n<p>Alur belajar: pahami kodenya → salin ke Wokwi → ubah satu hal (mis. pin, SSID, jalur data) → amati hasil di serial monitor / OLED.</p>"
      }],
    contoh: [
      {
        judul: 'Membaca Sensor DHT22 & Kirim ke Firebase',
        soal: 'Koneksi: DHT22 DATA pin → GPIO4 (ESP32), dengan pull-up 10kΩ',
        langkah: [
          'Install library: DHT sensor library (Adafruit). Kirim data via HTTP REST (HTTPClient bawaan ESP32, tanpa library Firebase).',
          'Inisialisasi: WiFi.begin(ssid, pass); lalu PUT JSON ke "URL_DATABASE + /path.json" (rules mode test).',
          'Loop: float t = dht.readTemperature(); http.PUT(String(DATABASE_URL) + "/sensor/suhu.json", String(t));',
          'Cek status: if (httpResponseCode > 0) Serial.println("Sent OK");'
        ]
      },
      {
        judul: 'MQTT Publish & Subscribe untuk Smart Home',
        soal: 'Broker: Mosquitto (localhost:1883) atau cloud (broker.hivemq.com)',
        langkah: [
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
        id: 'pembangkit-listrik-tenaga-surya',
        emoji: '☀️',
        title: 'Pembangkit Listrik Tenaga Surya (PLTS)',
        body: `<p>PLTS mengubah energi matahari menjadi listrik menggunakan efek photovoltaic pada sel surya semikonduktor.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/pv-system.png" alt="Sistem PLTS: panel surya, inverter, dan meter" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Sistem PLTS atap — panel, inverter, dan meter (CC BY-SA 4.0 Wikimedia Commons)</div></div>
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
        id: 'pembangkit-listrik-tenaga-air',
        emoji: '💧',
        title: 'Pembangkit Listrik Tenaga Air (PLTA)',
        body: `<p>PLTA memanfaatkan potensial air dari ketinggian (head) dan debit air untuk memutar turbin yang menggerakkan generator.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/hydro-dam.png" alt="Diagram pembangkit listrik tenaga air" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Diagram PLTA: dam → penstock → turbin → generator (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Prinsip kerja:</strong></p>
<p>$$P = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot H$$</p>
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
        id: 'pembangkit-listrik-tenaga-bayu',
        emoji: '🌬️',
        title: 'Pembangkit Listrik Tenaga Bayu (PLTB)',
        body: `<p>PLTB mengubah energi kinetik angin menjadi listrik menggunakan turbin angin.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/wind-turbine.png" alt="Turbin angin modern (Horizontal Axis Wind Turbine)" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Turbin angin modern — HAWT (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Rumus daya angin:</strong></p>
<p>$$P = \\tfrac{1}{2} \\cdot \\rho \\cdot A \\cdot v^3 \\cdot C_p$$</p>
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
        id: 'biomassa-biogas',
        emoji: '🌱',
        title: 'Biomassa & Biogas',
        body: `<p>Biomassa adalah material organik dari tumbuhan/hewan yang bisa dibakar atau difermentasi untuk menghasilkan energi.</p>
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
        id: 'inverter-surya-sistem-penyimpanan',
        emoji: '🔋',
        title: 'Inverter Surya & Sistem Penyimpanan',
        body: `<p>Inverter adalah jantung sistem PLTS — mengkonversi DC dari panel menjadi AC yang bisa dipakai rumah/industri atau diekspor ke jaringan PLN.</p>
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
        judul: 'Menghitung Daya PLTS Atap',
        soal: 'Atap tersedia 40m², panel monokristal 400Wp (dimensi 1,7m × 1m)',
        langkah: [
          'Jumlah panel = 40m² / (1,7 × 1) ≈ 23 panel (maks)',
          'Daya puncak = 23 × 400W = 9.200 Wp = 9,2 kWp',
          'Rata-rata harian (Indonesia, kondisi ideal) = 4–5 jam equivalent sun → 9,2 × 4,5 = 41,4 kWh/hari',
          'Rata-rata konsumsi rumah tangga = 10–15 kWh/hari → PLTS ini kelebihan → ekspor ke PLN'
        ]
      },
      {
        judul: 'Menghitung Daya Micro-Hydro',
        soal: 'Sungai di desa: debit Q = 0,5 m³/s, head H = 15m',
        langkah: [
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
  },
  {
    id: 'instrumentasi',
    emoji: '🔬',
    title: 'Instrumentasi & Alat Ukur',
    subtitle: 'Cara pakai multimeter & osiloskop — ukur tegangan, arus, resistansi di rangkaian seri & paralel',
    level: 'Pemula',
    durasi: '±35 menit',
    materi: ['Multimeter', 'Ukur Tegangan/Arus/Resistansi', 'Osiloskop', 'Power Supply & FG', 'K3 Pengukuran'],
    sections: [
      {
        id: 'pengantar-alat',
        emoji: '🔭',
        title: 'Mengenal Alat Ukur Listrik',
        body: `<p>Tiga besaran dasar yang paling sering diukur di dunia elektro adalah <strong>tegangan \\(V\\)</strong> (volt), <strong>arus \\(I\\)</strong> (ampere), dan <strong>resistansi \\(R\\)</strong> (ohm). Ketiganya saling terkait lewat hukum Ohm \\(V = I \\times R\\), sehingga dengan mengukur dua di antaranya kita bisa menghitung yang ketiga.</p>
<p>Alat ukur terbagi dua jenis tampilan:</p>
<ul>
<li><strong>Analog</strong> — membaca posisi jarum pada skala. Cocok melihat <em>tren</em> perubahan nilai, tapi rawan salah baca karena <strong>paralaks</strong> (posisi mata tidak tegak lurus skala).</li>
<li><strong>Digital (DMM)</strong> — angka langsung tampil di layar. Lebih akurat, mudah dibaca, dan menjadi standar praktikum saat ini.</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/galvanometer.jpg" alt="Galvanometer D'Arsonval" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Galvanometer D'Arsonval — nenek moyang semua alat ukur analog; jarum bergerak karena gaya elektromagnetik pada kumparan · sumber: Wikimedia Commons, Rama (CC BY-SA 2.0 fr)</div></div>
<p>Di meja praktikum modern, tiga alat inti biasanya berjajar: <strong>osiloskop</strong>, <strong>multimeter</strong>, dan <strong>power supply DC</strong>.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/test-equipment-stack.jpg" alt="Tumpukan alat ukur meja lab" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Peralatan ukur standar meja lab: osiloskop Tektronix, multimeter Fluke 45, dan power supply DC · sumber: Wikimedia Commons, Tpdwkouaa (CC BY-SA 4.0)</div></div>`
      },
      {
        id: 'multimeter',
        emoji: '🔧',
        title: 'Multimeter Digital (DMM)',
        body: `<p><strong>Multimeter</strong> adalah tiga alat sekaligus dalam satu bodi: <strong>voltmeter</strong> (ukur tegangan), <strong>amperemeter</strong> (ukur arus), dan <strong>ohmmeter</strong> (ukur resistansi). Sebelum memakai, kenali bagian-bagiannya:</p>
<ul>
<li><strong>Layar LCD</strong> — menampilkan hasil ukur beserta satuannya.</li>
<li><strong>Rotary selector</strong> — memilih mode: \\(V\\!\\dfrac{\\;}{\\;}\\\\) (DC), \\(V\\sim\\) (AC), \\(\\Omega\\), kontinuitas, diode, mA/µA, A.</li>
<li><strong>Jack probe</strong> — <strong>COM</strong> (selalu probe <span style="color:#111">⬛ hitam</span>), <strong>VΩ</strong> (probe merah untuk tegangan/resistansi), <strong>A/mA</strong> (probe merah dipindah ke sini saat mengukur arus).</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/multimeter-dmm.jpg" alt="Multimeter digital Fluke 87" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Multimeter digital Fluke 87 — perhatikan rotary selector dan tiga jack probe di bagian bawah · sumber: Wikimedia Commons, Alex P. Kok (CC BY-SA 4.0)</div></div>
<p>Yang penting dipahami dari spesifikasi DMM:</p>
<ul>
<li><strong>Akurasi</strong> — misal ±(0,5% + 2 digit): error 0,5% dari hasil baca plus 2 satuan digit terakhir.</li>
<li><strong>Resolusi</strong> — perubahan nilai terkecil yang bisa ditampilkan; DMM 3½ digit menampilkan maksimal ±1999.</li>
<li><strong>True RMS</strong> — wajib untuk mengukur tegangan AC bentuk gelombang non-sinusoidal (misal keluaran inverter) dengan akurat.</li>
<li><strong>Kategori keselamatan CAT</strong> — CAT II (stopkontak), CAT III (panel bangunan), CAT IV (jaringan sumber). Semakin tinggi, makin tahan lonjakan tegangan.</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/multimeter-analog.jpg" alt="Multimeter analog jarum" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Multimeter analog — masih dipakai karena tahan noise & murah, tapi pembacaan skala butuh kehati-hatian · sumber: Wikimedia Commons, KENPEI (CC BY-SA 3.0)</div></div>`
      },
      {
        id: 'ukur-tegangan',
        emoji: '⚡',
        title: 'Mengukur Tegangan (Voltmeter → Paralel)',
        body: `<p><strong>Aturan emas:</strong> voltmeter dipasang <strong>paralel</strong> (sejajar) dengan komponen yang diukur — tanpa perlu memutus rangkaian. Alasannya: komponen paralel memiliki tegangan yang sama, jadi voltmeter "mengintip" tegangan komponen tersebut.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/circuit-series-parallel.svg" alt="Perbandingan rangkaian seri dan paralel" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Rangkaian seri (kiri): tegangan terbagi ke tiap resistor, arus sama di semua titik. Rangkaian paralel (kanan): tegangan sama di tiap cabang, arus terbagi · sumber: Wikimedia Commons, Xyzzyva (CC BY-SA 3.0)</div></div>
<h4>Langkah praktik mengukur tegangan</h4>
<ol>
<li>Putar selector ke <strong>V⎓ (DC)</strong> untuk baterai/rangkaian DC, atau <strong>V~ (AC)</strong> untuk PLN/trafo.</li>
<li>Pastikan probe merah di jack <strong>VΩ</strong>, probe hitam di <strong>COM</strong>.</li>
<li>Sentuhkan probe <strong>menjembatani</strong> dua titik komponen (misal dua kaki resistor) — rangkaian boleh tetap menyala.</li>
<li>Baca hasil. Tanda minus hanya berarti polaritas terbalik — tidak berbahaya pada DMM.</li>
</ol>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/voltmeter-parallel-circuit.png" alt="Voltmeter paralel pada rangkaian seri" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Tiga voltmeter dipasang paralel pada rangkaian seri dua lampu — tiap voltmeter menjembatani satu komponen · sumber: Wikimedia Commons, Paulgwilliamson (CC BY-SA 4.0)</div></div>
<div class="mt-tip">💡 <strong>Di rangkaian seri</strong>, jumlah tegangan tiap komponen = tegangan sumber (\\(V_1 + V_2 = V_{sumber}\\)). <strong>Di rangkaian paralel</strong>, semua cabang memiliki tegangan sama dengan sumber. Gunakan fakta ini untuk mengecek hasil ukurmu.</div>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/voltmeter-ammeter-circuit.svg" alt="Posisi voltmeter dan amperemeter yang benar" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Posisi yang benar: voltmeter (V) paralel dengan beban, amperemeter (A) seri dalam jalur arus · sumber: Wikimedia Commons, rones (CC0)</div></div>`
      },
      {
        id: 'ukur-arus',
        emoji: '🌊',
        title: 'Mengukur Arus (Amperemeter → Seri)',
        body: `<p><strong>Aturan emas:</strong> amperemeter dipasang <strong>seri</strong> — rangkaian <strong>harus diputus</strong> dulu di titik pengukuran, lalu amperemeter menjadi jembatan penggantinya. Alasannya: arus pada rangkaian seri nilainya sama di semua titik, jadi arus yang melewati amperemeter = arus yang melewati komponen.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/ammeter-series-circuit.svg" alt="Amperemeter dipasang seri" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Amperemeter (A) dipasang seri — seluruh arus rangkaian harus melewatinya · sumber: Wikimedia Commons, Maxmath12 (CC0)</div></div>
<h4>Langkah praktik mengukur arus</h4>
<ol>
<li><strong>Matikan daya</strong> rangkaian dulu (safety — rangkaian harus dibuka).</li>
<li>Pindahkan probe merah ke jack <strong>A</strong> atau <strong>mA</strong> (baca manual DMM-mu!), selector ke mode arus DC/AC.</li>
<li>Buka rangkaian di titik ukur, sambungkan amperemeter menggantikan kabel yang dilepas — arus masuk lewat probe merah, keluar lewat hitam.</li>
<li>Nyalakan daya, baca hasil. Kembalikan jack probe ke VΩ setelah selesai!</li>
</ol>
<div class="mt-warn">⚠️ <strong>Kesalahan paling berbahaya:</strong> memasang amperemeter <strong>paralel</strong> dengan beban. Hambatan dalam amperemeter hampir nol → arus melonjak seperti korslet → <strong>fuse DMM putus</strong> (atau lebih buruk). Selalu cek posisi jack & mode sebelum menyentuhkan probe!</div>
<div class="mt-tip">💡 <strong>Di rangkaian seri</strong> cukup satu amperemeter di titik mana pun (arusnya sama). <strong>Di rangkaian paralel</strong>, arus tiap cabang berbeda — amperemeter harus dipasang seri <em>pada cabang yang diukur</em>, dan jumlah arus semua cabang = arus total (KCL).</div>`
      },
      {
        id: 'ukur-resistansi',
        emoji: '📏',
        title: 'Mengukur Resistansi & Kontinuitas',
        body: `<p>Mode <strong>ohmmeter (Ω)</strong> bekerja dengan menyuntikkan arus kecil ke komponen lalu menghitung \\(R = \\dfrac{V}{I}\\). Karena alat sendiri yang menyuplai arus, ada dua syarat mutlak:</p>
<ol>
<li><strong>Rangkaian harus dipatikan</strong> (dan kapasitor dilepas muatannya) — tegangan dari luar akan mengacaukan hasil bahkan merusak DMM.</li>
<li>Komponen diukur <strong>terisolasi</strong> — minimal lepas satu kakinya dari rangkaian, agar arus uji tidak memotong jalur lain.</li>
</ol>
<h4>Mode tambahan yang sering dipakai</h4>
<ul>
<li><strong>Kontinuitas (🔊)</strong> — berbunyi beep bila dua titik tersambung (hambatan mendekati 0 Ω). Praktis untuk mengecek kabel putus, solderan, dan jalur PCB.</li>
<li><strong>Diode test</strong> — menampilkan tegangan jatuh dioda maju (~0,6–0,7 V untuk silikon); OL saat terbalik = dioda baik.</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/multimeter-scale-mirror.jpg" alt="Skala multimeter analog dengan cermin" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Skala multimeter analog Multavi 5 — garis cermin di bawah skala dipakai agar pembacaan bebas paralaks: posisikan mata sehingga jarum menutupi bayangannya · sumber: Wikimedia Commons, Harke (domain publik)</div></div>
<div class="mt-tip">💡 Saat mengukur resistor di pasaran, tahan kedua ujung probe dengan tangan <strong>tidak masalah</strong> pada resistor kecil (kΩ), tapi pada resistor besar (MΩ) hambatan tubuhmu (±1 MΩ) ikut terukur paralel dan membuat hasil lebih kecil dari sebenarnya.</div>`,
        referensi: 'Prinsip ohmmeter modern (constant current source): Fluke "Understanding basic analog testing" & datasheet DMM IEC 61010.'
      },
      {
        id: 'osiloskop',
        emoji: '📈',
        title: 'Osiloskop Dasar',
        body: `<p>Multimeter hanya menampilkan <em>angka</em>. <strong>Osiloskop</strong> menggambar bentuk gelombang tegangan terhadap waktu di layar — satu-satunya cara "melihat" sinyal: apakah ia DC, sinusoida, persegi, ada noise, atau berdenyut (PWM).</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/oscilloscope-dso.jpg" alt="Osiloskop digital 4 kanal sedang dipakai" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Osiloskop digital 4 kanal (Keysight DSOX4024A) mengukur sinyal di lab · sumber: Wikimedia Commons, Radarvector (CC BY-SA 4.0)</div></div>
<p>Tiga grup kontrol yang wajib dikuasai:</p>
<ul>
<li><strong>Vertical (volt/div)</strong> — skala tegangan per kotak vertikal. Mengatur seberapa "tinggi" gelombang tampil.</li>
<li><strong>Horizontal (timebase, sec/div)</strong> — skala waktu per kotak horizontal. Mengatur seberapa "lebar" periode tampil.</li>
<li><strong>Trigger</strong> — menstabilkan gelombang agar tidak "berlari"; umumnya di-set pada tepi naik (rising edge) dengan level tertentu.</li>
</ul>
<p><strong>Cara membaca hasil ukur:</strong> amplitudo puncak = jumlah kotak vertikal × volt/div; periode = jumlah kotak horizontal × sec/div; lalu frekuensi \\(f = \\dfrac{1}{T}\\).</p>
<div class="mt-tip">💡 Gunakan probe pada pengali <strong>10×</strong> untuk sinyal umum (impedansi tinggi, aman untuk rangkaian), dan ingat untuk menyesuaikan setelan probe di osiloskop — kalau tidak, amplitudo terbaca 10× lebih kecil. Sebelum mengukur, jalankan <strong>probe compensation</strong> ke terminal kalibrasi agar gelombang persegi tidak melengkung.</div>`,
        referensi: 'Fundamental probe compensation & pengali 10×: Keysight "Application Note: Probe Fundamentals".'
      },
      {
        id: 'alat-bench',
        emoji: '🔌',
        title: 'Power Supply DC & Function Generator',
        body: `<p><strong>Power supply DC laboratorium</strong> memberi tegangan kerja yang stabil dan <em>terbatas arusnya</em>. Dua mode kerjanya:</p>
<ul>
<li><strong>Mode CV (constant voltage)</strong> — tegangan mengikuti setelan, arus mengikuti kebutuhan beban (normal).</li>
<li><strong>Mode CC (constant current)</strong> — arus menyentuh batas <em>current limit</em> yang kamu set, tegangan turun. Ini fitur <strong>pengaman</strong>: set limit kecil dulu saat mencoba rangkaian baru agar kesalahan wiring tidak membakar komponen.</li>
</ul>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/bench-power-supply.jpg" alt="Power supply DC meja lab" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Power supply DC meja lab — perhatikan knob tegangan, knob current limit, dan indikator CV/CC · sumber: Wikimedia Commons, Derrick Parker (CC0)</div></div>
<p><strong>Function generator</strong> menghasilkan sinyal uji: sinusoida, persegi, dan segitiga, dengan frekuensi dan amplitudo yang bisa diatur. Pasangan sejatinya adalah osiloskop — generator memicu sinyal, osiloskop melihat respons rangkaian (dasar pengujian filter, penguat, dan rangkaian waktu).</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/function-generator.jpg" alt="Function generator Tektronix CFG200" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Function generator Tektronix CFG200 — pilih bentuk gelombang, atur frekuensi & amplitudo, keluaran lewat konektor BNC · sumber: Wikimedia Commons, Whiteknight (CC BY-SA 4.0)</div></div>
<div class="mt-tip">💡 Alur praktikum klasik: <strong>function generator → rangkaian → osiloskop</strong>, dengan multimeter memantau DC bias. Semua ground (probe & generator) terhubung ke ground bodi alat — jangan menghubungkan probe "hot" ke dua titik yang beda potensialnya besar.</div>`
      },
      {
        id: 'kesalahan-k3',
        emoji: '⚠️',
        title: 'Kesalahan Umum & Keselamatan Pengukuran',
        body: `<p>Tabel berikut merangkum kesalahan yang paling sering (dan paling mahal) terjadi saat praktik:</p>
<table style="width:100%; border-collapse:collapse; font-size:13.5px;">
<tr style="text-align:left; border-bottom:2px solid var(--line2, #ddd);"><th style="padding:8px 6px;">Kesalahan</th><th style="padding:8px 6px;">Akibat</th><th style="padding:8px 6px;">Pencegahan</th></tr>
<tr><td style="padding:7px 6px;">Amperemeter dipasang paralel</td><td style="padding:7px 6px;">Korslet, fuse DMM putus</td><td style="padding:7px 6px;">Seri untuk arus; cek jack & mode sebelum probe menyentuh</td></tr>
<tr><td style="padding:7px 6px;">Ohmmeter dipakai di rangkaian menyala</td><td style="padding:7px 6px;">Hasil ngawur, DMM rusak</td><td style="padding:7px 6px;">Patikan daya, lepas muatan kapasitor</td></tr>
<tr><td style="padding:7px 6px;">Probe merah tertinggal di jack A saat mengukur tegangan</td><td style="padding:7px 6px;">Korslet langsung saat probe menyentuh tegangan</td><td style="padding:7px 6px;">Rutinitas akhir: kembalikan probe merah ke VΩ</td></tr>
<tr><td style="padding:7px 6px;">Mode DC dipakai untuk AC (atau sebaliknya)</td><td style="padding:7px 6px;">Hasil 0 atau salah baca besar</td><td style="padding:7px 6px;">Kenali simbol V⎓ (DC) dan V~ (AC)</td></tr>
<tr><td style="padding:7px 6px;">Mengukur tegangan di atas kategori CAT alat</td><td style="padding:7px 6px;">Lonjakan arc — alat & pengguna terancam</td><td style="padding:7px 6px;">Cocokkan CAT II/III/IV dengan lokasi ukur</td></tr>
</table>
<div class="mt-warn">⚠️ <strong>Aturan aman praktikum:</strong> satu tangan saat mengukur tegangan tinggi, jangan pegang bagian logam probe, mulai dari range tertinggi lalu turun (pada DMM manual-range), dan ganti fuse DMM <em>sesuai rating asli</em> — jangan pernah dibypass.</div>`,
        referensi: 'Kategori CAT & keselamatan pengukuran: IEC 61010-031 & Fluke "ABCs of DMM Safety".'
      },
      {
        id: 'rangkuman-instrumen',
        emoji: '🎓',
        title: 'Rangkuman',
        body: `<p>Tabel satu ini adalah inti dari seluruh modul — hafalkan barisnya, aman 90% praktik pengukuran:</p>
<table style="width:100%; border-collapse:collapse; font-size:13.5px;">
<tr style="text-align:left; border-bottom:2px solid var(--line2, #ddd);"><th style="padding:8px 6px;">Yang diukur</th><th style="padding:8px 6px;">Mode DMM</th><th style="padding:8px 6px;">Koneksi</th><th style="padding:8px 6px;">Syarat</th></tr>
<tr><td style="padding:7px 6px;">Tegangan \\(V\\)</td><td style="padding:7px 6px;">V⎓ atau V~</td><td style="padding:7px 6px;"><strong>Paralel</strong> dgn komponen</td><td style="padding:7px 6px;">Rangkaian boleh menyala</td></tr>
<tr><td style="padding:7px 6px;">Arus \\(I\\)</td><td style="padding:7px 6px;">A / mA (jack pindah)</td><td style="padding:7px 6px;"><strong>Seri</strong> (putus rangkaian)</td><td style="padding:7px 6px;">Estimasi arus &lt; rating jack</td></tr>
<tr><td style="padding:7px 6px;">Resistansi \\(R\\)</td><td style="padding:7px 6px;">Ω</td><td style="padding:7px 6px;">Menjembatani komponen</td><td style="padding:7px 6px;">Rangkaian mati, komponen terisolasi</td></tr>
<tr><td style="padding:7px 6px;">Kontinuitas</td><td style="padding:7px 6px;">🔊 / diode</td><td style="padding:7px 6px;">Dua titik yang dicek</td><td style="padding:7px 6px;">Rangkaian mati</td></tr>
<tr><td style="padding:7px 6px;">Bentuk gelombang</td><td style="padding:7px 6px;">Osiloskop</td><td style="padding:7px 6px;">Probe ×10 ke titik uji</td><td style="padding:7px 6px;">Ground probe = ground rangkaian</td></tr>
</table>
<p style="margin-top:10px;">Lanjutkan latihan dengan memverifikasi rangkaian di modul <strong>Dasar Listrik</strong>: rakit pembagi tegangan, ukur tiap komponen, lalu bandingkan dengan perhitungan. Pengalaman tangan inilah yang membedakan yang paham dengan yang sekadar hafal.</p>`
      }
    ],
    contoh: [
      {
        judul: 'Membaca Osiloskop',
        soal: 'Osiloskop disetel 2 V/div dan 5 ms/div. Gelombang sinus puncaknya setinggi 3 kotak dan satu periode selebar 4 kotak. Tentukan amplitudo puncak dan frekuensinya!',
        langkah: [
          'Amplitudo puncak: \\(V_p = 3\\,\\text{div} \\times 2\\,\\text{V/div} = 6\\,\\text{V}\\).',
          'Periode: \\(T = 4\\,\\text{div} \\times 5\\,\\text{ms/div} = 20\\,\\text{ms} = 0{,}02\\,\\text{s}\\).',
          'Frekuensi: \\(f = \\dfrac{1}{T} = \\dfrac{1}{0{,}02} = 50\\,\\text{Hz}\\).',
          '<strong>Jawaban:</strong> gelombang 6 V puncak dengan frekuensi <strong>50 Hz</strong> — pola khas sinyal PLN.'
        ]
      },
      {
        judul: 'Verifikasi Resistor dengan Kode Warna vs DMM',
        soal: 'Resistor bercincin merah–hitam–merah–emas diukur DMM menunjukkan 2,17 kΩ. Apakah resistor masih baik?',
        langkah: [
          'Kode warna: merah=2, hitam=0, merah=×100 → \\(R = 20 \\times 100 = 2000\\,\\Omega = 2\\,\\text{k}\\Omega\\), emas = toleransi 5%.',
          'Rentang wajar: \\(2000 \\times (1 \\pm 0{,}05) = 1900\\text{–}2100\\,\\Omega\\).',
          'Hasil ukur 2,17 kΩ = 2170 Ω → di luar rentang 5%.',
          '<strong>Kesimpulan:</strong> kemungkinan toleransi sebenarnya lebih besar (periksa cincin ke-4) atau resistor terdegradasi — ukur lagi dengan kaki yang benar-benar terlepas.'
        ]
      },
      {
        judul: 'Menghitung Error Pengukuran DMM',
        soal: 'DMM berspesifikasi akurasi ±(0,5% + 2 digit) menampilkan 5,00 V. Berapa rentang nilai sebenarnya?',
        langkah: [
          'Komponen persen: \\(0{,}5\\% \\times 5{,}00 = 0{,}025\\,\\text{V}\\).',
          'Komponen digit: 2 digit terakhir = \\(\\pm 0{,}02\\,\\text{V}\\) (resolusi 0,01 V).',
          'Total error: \\(\\pm(0{,}025 + 0{,}02) = \\pm 0{,}045\\,\\text{V}\\).',
          '<strong>Jawaban:</strong> nilai sebenarnya berada di antara <strong>4,955–5,045 V</strong>.'
        ]
      }
    ],
    soal: [
      { q: 'Untuk mengukur tegangan sebuah resistor, voltmeter dipasang…', opts: ['Seri dengan resistor', 'Paralel dengan resistor', 'Diputus dulu rangkaiannya', 'Di sumber saja'], ans: 1, exp: 'Voltmeter paralel — komponen paralel memiliki tegangan yang sama, jadi hasil ukur = tegangan resistor.' },
      { q: 'Sebelum mengukur arus, probe merah DMM harus dipindahkan ke…', opts: ['Jack COM', 'Jack VΩ', 'Jack A atau mA', 'Tidak perlu dipindah'], ans: 2, exp: 'Jack VΩ dilindungi fuse tegangan; jalur arus punya jalur shunt tersendiri di jack A/mA.' },
      { q: 'Mengukur resistansi resistor yang masih terpasang di rangkaian aktif akan…', opts: ['Hasil akurat karena rangkaian menyala', 'Hasil salah & berpotensi merusak DMM', 'Membuat resistor lebih presisi', 'Tidak ada efek apa pun'], ans: 1, exp: 'Ohmmeter menyuntikkan arus sendiri; tegangan luar mengacaukan pengukuran dan bisa merusak mode Ω.' },
      { q: 'Amperemeter yang tak sengaja dipasang paralel dengan beban akan…', opts: ['Menampilkan arus normal', 'Menjadi korslet — arus melonjak & fuse putus', 'Membaca tegangan dengan benar', 'Memutus rangkaian secara aman'], ans: 1, exp: 'Hambatan dalam amperemeter ≈ 0 Ω, sehingga paralel = korslet. Inilah kesalahan paling berbahaya pemula.' },
      { q: 'Osiloskop disetel 2 V/div, puncak gelombang setinggi 3 kotak. Amplitudo puncaknya…', opts: ['1,5 V', '5 V', '6 V', '8 V'], ans: 2, exp: 'Vp = 3 div × 2 V/div = 6 V.' },
      { q: 'Timebase 5 ms/div dengan satu periode selebar 4 kotak. Frekuensinya…', opts: ['20 Hz', '50 Hz', '100 Hz', '200 Hz'], ans: 1, exp: 'T = 4 × 5 ms = 20 ms → f = 1/0,02 = 50 Hz.' },
      { q: 'Mode kontinuitas berbunyi beep ketika dua probe dihubungkan. Ini berarti…', opts: ['Dua titik tersambung (hambatan ≈ 0)', 'Tegangan tinggi terdeteksi', 'Rangkaian terbuka', 'Dioda sedang menghantar maju'], ans: 0, exp: 'Beep = jalur tertutup/tersambung. Praktis untuk mengecek kabel putus & solderan.' },
      { q: 'Untuk mengukur panel distribusi listrik gedung, DMM minimal harus berkategori…', opts: ['CAT I', 'CAT II', 'CAT III', 'CAT IV'], ans: 2, exp: 'CAT III untuk panel & distribusi bangunan; CAT IV khusus jaringan sumber (meteran utama).' }
    ]
  },
  {
    id: 'sistem-ketenagalistrikan',
    emoji: '⚡',
    title: 'Sistem Ketenagalistrikan',
    subtitle: 'Transformator, distribusi 3 fasa, gardu induk, transmisi & jaringan PLN',
    level: 'Menengah',
    durasi: '±40 menit',
    materi: ['Transformator', 'Sistem 3 Fasa', 'Distribusi', 'Gardu Induk', 'Transmisi'],
    sections: [
      {
        id: 'pengenalan-sistem-tenaga',
        emoji: '🏭',
        title: 'Pengenalan Sistem Tenaga Listrik',
        body: `<p><strong>Sistem tenaga listrik</strong> adalah rangkaian peralatan mulai dari pembangkit hingga konsumen akhir. Tujuannya: menghasilkan, menyalurkan, dan mendistribusikan energi listrik secara <strong>handal, efisien, dan aman</strong>.</p>
<div class="mt-img-wrap" style="margin:16px 0;"><svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px"><rect x="0" y="40" width="100" height="40" rx="8" fill="#4f9cf9" opacity="0.15" stroke="#4f9cf9" stroke-width="2"/><text x="50" y="65" text-anchor="middle" font-size="12" font-weight="600" fill="#4f9cf9">🏭 Pembangkit</text><line x1="105" y1="60" x2="175" y2="60" stroke="#4f9cf9" stroke-width="2" marker-end="url(#arrow)"/><rect x="180" y="40" width="100" height="40" rx="8" fill="#f5a623" opacity="0.15" stroke="#f5a623" stroke-width="2"/><text x="230" y="65" text-anchor="middle" font-size="11" font-weight="600" fill="#f5a623">⚡ Transmisi</text><text x="230" y="80" text-anchor="middle" font-size="9" fill="#999">150-500 kV</text><line x1="285" y1="60" x2="355" y2="60" stroke="#f5a623" stroke-width="2" marker-end="url(#arrow2)"/><rect x="360" y="40" width="100" height="40" rx="8" fill="#3ecf8e" opacity="0.15" stroke="#3ecf8e" stroke-width="2"/><text x="410" y="65" text-anchor="middle" font-size="11" font-weight="600" fill="#3ecf8e">🏘️ Distribusi</text><text x="410" y="80" text-anchor="middle" font-size="9" fill="#999">20 kV → 220/380V</text><line x1="465" y1="60" x2="535" y2="60" stroke="#3ecf8e" stroke-width="2" marker-end="url(#arrow3)"/><rect x="540" y="40" width="60" height="40" rx="8" fill="#e879a0" opacity="0.15" stroke="#e879a0" stroke-width="2"/><text x="570" y="65" text-anchor="middle" font-size="11" font-weight="600" fill="#e879a0">🏠</text><defs><marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f9cf9"/></marker><marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5a623"/></marker><marker id="arrow3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#3ecf8e"/></marker></defs></svg><div class="mt-img-cap">Alur energi listrik: Pembangkit → Transmisi → Distribusi → Konsumen (diagram konseptual)</div></div>
<p><strong>Tiga komponen utama:</strong></p>
<ol>
<li><strong>Pembangkit (Generating)</strong> — mengubah energi primer (batu bara, gas, air, surya) menjadi energi listrik AC 3 fasa.</li>
<li><strong>Transmisi (Transmission)</strong> — menyalurkan daya dari pembangkit ke gardu induk beban dengan tegangan tinggi (150 kV, 500 kV) untuk meminimalkan rugi-rugi daya.</li>
<li><strong>Distribusi (Distribution)</strong> — menurunkan tegangan dari gardu induk ke konsumen (220/380 V rumah tangga, 380 V industri ringan).</li>
</ol>
<p><strong>Rugi-rugi daya</strong> pada transmisi:</p>
$$P_{\\text{rugi}} = I^2 \\cdot R$$
<p>Karena \\(P = V \\cdot I\\), menaikkan tegangan secara proporsional menurunkan arus → rugi-rugi mengecil drastis. Inilah alasan transmisi menggunakan <strong>tegangan sangat tinggi (Extra High Voltage)</strong>.</p>
<div class="mt-tip">💡 PLN Indonesia mengoperasikan tegangan 500 kV (Jawa–Sumatera), 150 kV (transmisi regional), 20 kV (distribusi primer), dan 380/220 V (konsumen akhir).</div>`
      },
      {
        id: 'transformator',
        emoji: '🔄',
        title: 'Transformator',
        body: `<p><strong>Transformator</strong> adalah alat statis (tanpa bagian bergerak) yang mentransfer daya AC dari satu sirkuit ke sirkuit lain melalui induksi elektromagnetik, mengubah level tegangan.</p>
<div class="mt-img-wrap" style="margin:16px 0;"><svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px"><ellipse cx="100" cy="90" rx="35" ry="70" fill="none" stroke="#4f9cf9" stroke-width="2"/><ellipse cx="100" cy="90" rx="30" ry="65" fill="#4f9cf9" opacity="0.08"/><ellipse cx="200" cy="90" rx="35" ry="70" fill="none" stroke="#f5a623" stroke-width="2"/><ellipse cx="200" cy="90" rx="30" ry="65" fill="#f5a623" opacity="0.08"/><path d="M65,40 Q100,20 100,40 Q100,60 100,80 Q100,100 100,120 Q100,140 100,160" stroke="#4f9cf9" stroke-width="3" fill="none"/><path d="M235,40 Q200,20 200,40 Q200,60 200,80 Q200,100 200,120 Q200,140 200,160" stroke="#f5a623" stroke-width="3" fill="none"/><line x1="65" y1="90" x2="30" y2="90" stroke="#4f9cf9" stroke-width="3"/><line x1="135" y1="90" x2="170" y2="90" stroke="#4f9cf9" stroke-width="3"/><line x1="230" y1="90" x2="270" y2="90" stroke="#f5a623" stroke-width="3"/><text x="150" y="10" text-anchor="middle" font-size="10" fill="#888">Fluks Magnetik</text><path d="M130,85 Q150,75 170,85" stroke="#888" stroke-width="1.5" fill="none" marker-end="url(#mag)"/><defs><marker id="mag" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5" fill="#888"/></marker></defs><text x="100" y="175" text-anchor="middle" font-size="11" font-weight="600" fill="#4f9cf9">Primer (N₁)</text><text x="200" y="175" text-anchor="middle" font-size="11" font-weight="600" fill="#f5a623">Sekunder (N₂)</text></svg><div class="mt-img-cap">Diagram transformator ideal: fluks magnetik memotong kedua lilitan · prinsip induksi elektromagnetik</div></div>
<p><strong>Rumus dasar transformator ideal:</strong></p>
$$\\frac{V_1}{V_2} = \\frac{N_1}{N_2} = \\frac{I_2}{I_1}$$
<p>dengan V = tegangan, N = jumlah lilitan, I = arus. Indeks 1 = primer (masukan), 2 = sekunder (keluaran).</p>
<p><strong>Daya (ideal):</strong></p>
$$P_1 = P_2 \\quad \\Rightarrow \\quad V_1 I_1 = V_2 I_2$$
<p><strong>Jenis transformator berdasarkan fungsi:</strong></p>
<table class="mt-table"><thead><tr><th>Jenis</th><th>Rasio</th><th>Aplikasi</th></tr></thead><tbody>
<tr><td>Step-down</td><td>N₁ > N₂ → V₂ < V₁</td><td>Gardu distribusi: 20 kV → 380 V</td></tr>
<tr><td>Step-up</td><td>N₁ < N₂ → V₂ > V₁</td><td>Gardu induk: 22 kV → 150 kV</td></tr>
<tr><td>Isolasi</td><td>1:1</td><td>Pemisahan galvanik, pengujian</td></tr>
</tbody></table>
<p><strong>Transformator nyata</strong> tidak 100% efisien — ada rugi-rugi:</p>
<ul>
<li><strong>Rugi tembakau (core loss)</strong> — histeresis + eddy current pada inti besi</li>
<li><strong>Rugi tembaga (copper loss)</strong> — \\(I^2R\\) pada lilitan primer & sekunder</li>
<li><strong>Rugi kebocoran (leakage flux)</strong> — fluks yang tidak seluruhnya memotong kedua lilitan</li>
</ul>
<p>Efisiensi transformator industri: <strong>95–99%</strong> (sangat tinggi karena tidak ada komponen bergerak).</p>
<div class="mt-warn">⚠️ Transformator HANYA untuk AC — tidak bisa mengubah tegangan DC. Untuk DC, gunakan konverter switching (buck/boost converter).</div>`
      },
      {
        id: 'sistem-3-fasa',
        emoji: '🔀',
        title: 'Sistem 3 Fasa',
        body: `<p><strong>Sistem 3 fasa</strong> adalah metode distribusi daya paling efisien — tiga gelombang sinusoidal dengan frekuensi sama (50 Hz) tetapi bergeser fase 120° satu sama lain.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/3phase-waveform.png" alt="Gelombang sinusoidal 3 fasa" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Gelombang sinusoidal 3 fasa — tiap fasa bergeser 120° (CC BY-SA 4.0 Wikimedia Commons)</div></div>
<p><strong>Tegangan pada sistem 3 fasa:</strong></p>
<ul>
<li><strong>Tegangan fasa (V_phase)</strong> — tegangan antara satu fasa dan netral: 220 V di Indonesia</li>
<li><strong>Tegangan lini (V_line)</strong> — tegangan antara dua fasa: \\(V_{line} = \\sqrt{3} \\cdot V_{phase} = 380\\,\\text{V}\\)</li>
</ul>
<p><strong>Daya sistem 3 fasa:</strong></p>
$$P = \\sqrt{3} \\cdot V_{line} \\cdot I_{line} \\cdot \\cos\\phi$$
<p>dengan \\(\\cos\\phi\\) = faktor daya (power factor).</p>
<p><strong>Sistem koneksi:</strong></p>
<table class="mt-table"><thead><tr><th>Koneksi</th><th>Cocok Untuk</th><th>Kelebihan</th></tr></thead><tbody>
<tr><td>Bintang (Y)</td><td>Motor ringan, lampu</td><td>Tersedia fasa + netral (220V)</td></tr>
<tr><td>Segitiga (Δ)</td><td>Motor berat, pemanas</td><td>Tanpa netral, arus lini = \\(\\sqrt{3}\\) arus fasa</td></tr>
</tbody></table>
<div class="mt-tip">💡 Rumus cepat: \\(P = \\sqrt{3} \\cdot V_{line} \\cdot I_{line} \\cdot \\cos\\phi\\). Untuk beban seimbang, arus netral = 0 (hanya ada pada koneksi bintang).</div>`
      },
      {
        id: 'distribusi-pln',
        emoji: '🏘️',
        title: 'Sistem Distribusi PLN',
        body: `<p>Setelah transmisi tegangan tinggi mencapai <strong>gardu induk</strong>, tegangan diturunkan secara bertahap hingga sampai ke konsumen:</p>
<ol>
<li><strong>Gardu induk transmisi:</strong> 500 kV / 150 kV → 20 kV</li>
<li><strong>Gardu distribusi primer:</strong> 20 kV → 380/220 V</li>
<li><strong>Gardu distribusi (trafo Julius/travo gantung):</strong> 20 kV → 220/380 V langsung ke rumah</li>
</ol>
<p><strong>Sistem distribusi 3 fasa di Indonesia:</strong></p>
<table class="mt-table"><thead><tr><th>Tegangan</th><th>Penggunaan</th><th>Pengaman</th></tr></thead><tbody>
<tr><td>380 V (fasa-fasa)</td><td>Motor industri, AC besar, mesin</td><td>MCB 3 kutub + ELCB 30 mA</td></tr>
<tr><td>220 V (fasa-netral)</td><td>Rumah tangga, lampu, elektronik</td><td>MCB 1 kutub + ELCB 30 mA</td></tr>
</tbody></table>
<p><strong>Koordinasi proteksi:</strong> MCB utama → ELCB → MCB grup (per ruangan). ELCB melindungi dari arus bocor; MCB melindungi dari arus lebih dan hubung singkat.</p>
<div class="mt-warn">⚠️ PUIL 2011 menetapkan: susut tegangan maksimum instalasi akhir = 4%, dan setiap sirkuit harus memiliki proteksi sendiri.</div>`
      },
      {
        id: 'gardu-induk',
        emoji: '🏗️',
        title: 'Gardu Induk & Peralatan Utama',
        body: `<p><strong>Gardu induk</strong> adalah fasilitas sentral yang menghubungkan jaringan transmisi dengan distribusi. Peralatan utamanya:</p>
<table class="mt-table"><thead><tr><th>Peralatan</th><th>Fungsi</th><th>Simbol</th></tr></thead><tbody>
<tr><td>Transformator daya</td><td>Menurunkan/menaikkan tegangan</td><td>DT (Power Transformer)</td></tr>
<tr><td>Panel saklar sentral</td><td>Menghubungkan/memutus beban</td><td>SF6 / Vacuum CB</td></tr>
<tr><td>Pemutus arus (CB)</td><td>Memutus arus gangguan (hubung singkat)</td><td>CB (Circuit Breaker)</td></tr>
<tr><td>Disconnect switch</td><td>Isolasi visual untuk maintenance</td><td>DS (Disconnecting Switch)</td></tr>
<tr><td>Lightning arrester</td><td>Proteksi dari petir/surge</td><td>LA (Surge Arrester)</td></tr>
<tr><td>Current Transformer (CT)</td><td>Mengukur arus (menurunkan ke 5A/1A)</td><td>CT</td></tr>
<tr><td>Voltage Transformer (VT)</td><td>Mengukur tegangan</td><td>PT/VT</td></tr>
</tbody></table>
<p><strong>Urutan peralatan</strong> pada satu feeder distribusi:</p>
<p>Transformator → CB → DS → CT → Beban</p>
<div class="mt-tip">💡 CT dan VT mengubah arus/tegangan tinggi ke nilai kecil (5A/110V) sehingga bisa diukur oleh relay proteksi dan meter tanpa risiko tinggi.</div>`
      },
      {
        id: 'faktor-daya',
        emoji: '📊',
        title: 'Faktor Daya & Koreksi',
        body: `<p><strong>Faktor daya (power factor / PF)</strong> adalah rasio daya nyata (kW) terhadap daya semu (kVA):</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/power-triangle.png" alt="Segitiga daya" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Segitiga Daya — hubungan P (nyata), Q (reaktif), dan S (semu) · power factor = cos φ (CC BY-SA 4.0 Wikimedia Commons)</div></div>
$$PF = \\cos\\phi = \\frac{P_{\\text{nyata}}}{S_{\\text{semu}}} = \\frac{P}{V \\cdot I}$$
<p><strong>Mengapa PF rendah buruk?</strong></p>
<ul>
<li>Arus lebih besar untuk daya yang sama → rugi-rugi \\(I^2R\\) meningkat</li>
<li>Kabel, transformator, dan switchgear harus over-dimensions</li>
<li>PLN meninalir pelanggan industri dengan PF < 0,85</li>
</ul>
<p><strong>Segitiga daya (power triangle):</strong></p>
<ul>
<li><strong>P (kW)</strong> — daya nyata (aktif), bekerja nyata</li>
<li><strong>Q (kVAR)</strong> — daya reaktif (magnetisasi, kapasitor/induktor)</li>
<li><strong>S (kVA)</strong> — daya semu (total yang harus disuplai)</li>
</ul>
<p>$$S^2 = P^2 + Q^2$$
<p><strong>Koreksi PF</strong> dilakukan dengan memasang <strong>kapasitor bank</strong> paralel — menyediakan daya reaktif secara lokal sehingga arus dari sumber berkurang.</p>
<div class="mt-tip">💡 Contoh: motor 10 kW, PF = 0,7 → S = 14,3 kVA, I = 65 A. Setelah koreksi ke PF = 0,95 → S = 10,5 kVA, I = 48 A — penghematan kabel & losses signifikan!</div>`
      }
    ],
    contoh: [
      {
        judul: 'Transformator Step-Down',
        soal: 'Transformator memiliki N₁ = 1000 lilitan, N₂ = 50 lilitan. Jika V₁ = 20.000 V, berapa V₂? Dan jika I₁ = 50 A, berapa I₂?',
        langkah: [
          'Hitung rasio: N₁/N₂ = 1000/50 = 20.',
          'V₂ = V₁ × (N₂/N₁) = 20.000 × (50/1000) = 1000 V.',
          'I₂ = I₁ × (N₁/N₂) = 50 × 20 = 1000 A.',
          '<strong>Jawaban:</strong> V₂ = 1000 V, I₂ = 1000 A. Daya tetap: 20.000 × 50 = 1000 × 1000 = 1.000.000 VA = 1 MVA.'
        ]
      },
      {
        judul: 'Daya Sistem 3 Fasa',
        soal: 'Motor 3 fasa 380 V menarik arus 15 A dengan PF = 0,85. Hitung daya aktif (kW) dan arus jika PF diperbaiki ke 0,95.',
        langkah: [
          'P = √3 × V_line × I_line × cosφ = √3 × 380 × 15 × 0,85 = 8.387 W ≈ 8,4 kW.',
          'Setelah koreksi PF: I_baru = P / (√3 × V_line × cosφ_baru) = 8387 / (√3 × 380 × 0,95) = 13,4 A.',
          'Pengurangan arus: (15 - 13,4)/15 × 100% = 10,7% → rugi-rugi I²R turun 20%!'
        ]
      },
      {
        judul: 'Rugi-Rugi Transmisi',
        soal: 'Daya 10 MW ditransmisikan pada 20 kV, kabel R = 10 Ω. Hitung rugi-rugi daya. Lalu bandingkan jika tegangan dinaikkan ke 150 kV.',
        langkah: [
          'Pada 20 kV: I = P/V = 10×10⁶ / 20.000 = 500 A. Rugi = I²R = 500² × 10 = 2.500.000 W = 2,5 MW (25%!).',
          'Pada 150 kV: I = 10×10⁶ / 150.000 = 66,7 A. Rugi = 66,7² × 10 = 44.489 W = 44,5 kW (0,44%).',
          '<strong>Jawaban:</strong> Transmisi 150 kV mengurangi rugi-rugi dari 2,5 MW menjadi 44,5 kW — 56× lebih efisien!'
        ]
      }
    ],
    soal: [
      { q: 'Rumus daya aktif sistem 3 fasa adalah…', opts: ['P = V × I', 'P = √3 × V_line × I_line × cosφ', 'P = 3 × V_phase × I_phase × sinφ', 'P = V² / R'], ans: 1, exp: 'Daya aktif 3 fasa: P = √3 × V_line × I_line × cosφ.' },
      { q: 'Transformator dengan N₁ = 500 dan N₂ = 50 merupakan transformator…', opts: ['Step-up', 'Step-down', 'Isolasi', 'Autotransformator'], ans: 1, exp: 'N₁ > N₂ → V₂ < V₁ → step-down.' },
      { q: 'Tegangan lini pada sistem 3 fasa 220 V (fase-netral) adalah…', opts: ['220 V', '380 V', '440 V', '110 V'], ans: 1, exp: 'V_line = √3 × V_phase = √3 × 220 ≈ 380 V.' },
      { q: 'Untuk memperbaiki faktor daya yang rendah, komponen yang dipasang adalah…', opts: ['Resistor', 'Induktor', 'Kapasitor bank', 'Transformer'], ans: 2, exp: 'Kapasitor menyediakan daya reaktif secara lokal, mengurangi arus dari sumber → PF meningkat.' },
      { q: 'Peranti yang mengubah arus tinggi pada transmisi ke nilai kecil untuk pengukuran adalah…', opts: ['VT (Voltage Transformer)', 'CT (Current Transformer)', 'CB (Circuit Breaker)', 'LA (Lightning Arrester)'], ans: 1, exp: 'CT menurunkan arus tinggi ke 5A/1A untuk meter & relay proteksi.' }
    ]
  },
  {
    id: 'sistem-kendali',
    emoji: '🎛️',
    title: 'Sistem Kendali (Control Systems)',
    subtitle: 'Kontrol ON/OFF, PID, feedback loop, implementasi Arduino & PLC',
    level: 'Menengah → Lanjutan',
    durasi: '±45 menit',
    materi: ['Kontrol Dasar', 'PID', 'Feedback Loop', 'Implementasi Arduino', 'Implementasi PLC'],
    sections: [
      {
        id: 'pengenalan-kendali',
        emoji: '🔄',
        title: 'Pengenalan Sistem Kendali',
        body: `<p><strong>Sistem kendali</strong> adalah sistem yang mengatur perilaku sistem lain agar mencapai kondisi yang diinginkan (<em>setpoint</em>). Contoh sehari-hari: AC otomatis menjaga suhu tetap 24°C, cruise control mobil menjaga kecepatan konstan.</p>
<p><strong>Dua tipe utama:</strong></p>
<table class="mt-table"><thead><tr><th>Tipe</th><th>Cara Kerja</th><th>Contoh</th></tr></thead><tbody>
<tr><td><strong>Open-loop</strong></td><td>Tanpa umpan balik — berdasarkan input saja</td><td>Timer lampu, microwave定时</td></tr>
<tr><td><strong>Closed-loop</strong></td><td>Ada sensor feedback → dibandingkan dengan setpoint → koreksi</td><td>AC thermostat, cruise control, oven digital</td></tr>
</tbody></table>
<p><strong>Sirkuit umpan balik (feedback loop):</strong></p>
<p>Setpoint → (+) Komparator → Error → [Kontroler] → [Plant/Sistem] → Output → [Sensor] → balik ke komparator</p>
<ul>
<li><strong>Error</strong> = Setpoint − Output aktual</li>
<li><strong>Kontroler</strong> memproses error dan menghasilkan sinyal kendali</li>
<li><strong>Plant</strong> = sistem yang dikendalikan (motor, heater, lampu, dll)</li>
</ul>
<div class="mt-tip">💡 Tanpa sensor feedback (open-loop), sistem tidak bisa tahu apakah tujuan tercapai — hanya mengandalkan asumsi. Closed-loop jauh lebih akurat dan robust.</div>`
      },
      {
        id: 'kontrol-on-off',
        emoji: '🔘',
        title: 'Kontrol ON/OFF (Bang-Bang)',
        body: `<p><strong>Kontrol ON/OFF</strong> adalah metode paling sederhana: output hanya bisa <strong>ON</strong> (aktif penuh) atau <strong>OFF</strong> (mati total).</p>
<div class="mt-img-wrap" style="margin:16px 0;"><svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px"><rect x="0" y="30" width="80" height="40" rx="6" fill="#4f9cf9" opacity="0.15" stroke="#4f9cf9" stroke-width="1.5"/><text x="40" y="55" text-anchor="middle" font-size="10" font-weight="600" fill="#4f9cf9">Setpoint</text><line x1="85" y1="50" x2="125" y2="50" stroke="#4f9cf9" stroke-width="1.5"/><circle cx="130" cy="50" r="10" fill="none" stroke="#f5a623" stroke-width="1.5"/><text x="130" y="46" text-anchor="middle" font-size="9" fill="#f5a623">+</text><text x="130" y="56" text-anchor="middle" font-size="9" fill="#f5a623">−</text><line x1="145" y1="50" x2="185" y2="50" stroke="#f5a623" stroke-width="1.5"/><rect x="190" y="30" width="80" height="40" rx="6" fill="#f5a623" opacity="0.15" stroke="#f5a623" stroke-width="1.5"/><text x="230" y="55" text-anchor="middle" font-size="10" font-weight="600" fill="#f5a623">Kontroler</text><line x1="275" y1="50" x2="315" y2="50" stroke="#f5a623" stroke-width="1.5"/><rect x="320" y="30" width="80" height="40" rx="6" fill="#3ecf8e" opacity="0.15" stroke="#3ecf8e" stroke-width="1.5"/><text x="360" y="55" text-anchor="middle" font-size="10" font-weight="600" fill="#3ecf8e">Plant</text><line x1="405" y1="50" x2="470" y2="50" stroke="#3ecf8e" stroke-width="1.5"/><circle cx="475" cy="50" r="5" fill="#3ecf8e"/><text x="485" y="55" font-size="10" fill="#3ecf8e">Output</text><path d="M475,55 L475,85 L130,85 L130,60" stroke="#e879a0" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/><text x="300" y="95" text-anchor="middle" font-size="9" fill="#e879a0">Feedback (Sensor)</text></svg><div class="mt-img-cap">Diagram blok sistem kendali closed-loop — setpoint dibandingkan dengan output aktual melalui sensor feedback</div></div>
<p><strong>Contoh: Thermostat AC:</strong></p>
<ul>
<li>Suhu ≥ 26°C → AC ON</li>
<li>Suhu ≤ 24°C → AC OFF</li>
<li><strong>Hysteresis (deadband)</strong>: 2°C — mencegah sakelar terus-menerus ON/OFF (chattering)</li>
</ul>
<p><strong>Kelebihan:</strong></p>
<ul>
<li>Sangat sederhana — cukup komparator + relay</li>
<li>Murah dan mudah di-maintain</li>
</ul>
<p><strong>Kekurangan:</strong></p>
<ul>
<li>Overshoot dan oscillation — selalu bolak-balik melewati setpoint</li>
<li>Tidak cocok untuk sistem yang butuh presisi tinggi</li>
<li>Wear pada aktuator (relay sering ON/OFF)</li>
</ul>
<p><strong>Implementasi Arduino:</strong></p>
<pre class="mt-code">// Kontrol ON/OFF sederhana — suhu → heater
const float SETPOINT = 25.0;
const float DEADBAND = 1.0;  // ±1°C

void loop() {
  float suhu = bacaSensor();
  if (suhu < SETPOINT - DEADBAND/2) digitalWrite(HEATER, HIGH);
  if (suhu > SETPOINT + DEADBAND/2) digitalWrite(HEATER, LOW);
  delay(500);
}</pre>`
      },
      {
        id: 'kontrol-pid',
        emoji: '📐',
        title: 'Kontrol PID (Proportional-Integral-Derivative)',
        body: `<p><strong>PID</strong> adalah algoritma kendali paling populer di industri — menghitung koreksi berdasarkan tiga komponen error:</p>
$$u(t) = K_p \\cdot e(t) + K_i \\cdot \\int e(t)\\,dt + K_d \\cdot \\frac{de(t)}{dt}$$
<table class="mt-table"><thead><tr><th>Komponen</th><th>Fungsi</th><th>Efek</th></tr></thead><tbody>
<tr><td><strong>P (Proportional)</strong></td><td>Koreksi sebanding error saat ini</td><td>Cepat merespons, tapi ada steady-state error</td></tr>
<tr><td><strong>I (Integral)</strong></td><td>Koreksi dari akumulasi error sebelumnya</td><td>Menghilangkan steady-state error, tapi bisa overshoot</td></tr>
<tr><td><strong>D (Derivative)</strong></td><td>Koreksi dari laju perubahan error</td><td>Redam overshoot, stabilitas meningkat</td></tr>
</tbody></table>
<p><strong>Cara memahami secara intuitif:</strong></p>
<ul>
<li><strong>P</strong>: "Saya melihat error — saya bereaksi sekarang"</li>
<li><strong>I</strong>: "Error sudah berlangsung lama — saya harus lebih agresif"</li>
<li><strong>D</strong>: "Error sudah mengecil — saya mulai melambat agar tidak overshoot"</li>
</ul>
<p><strong>Tuning PID:</strong></p>
<ol>
<li>Mulai dengan Kp saja, naikkan sampai sistem mulai oscillate</li>
<li>Tambahkan Ki untuk menghilangkan steady-state error</li>
<li>Tambahkan Kd untuk meredam overshoot</li>
</ol>
<div class="mt-tip">💡 Metode tuning manual Ziegler-Nichols: naikkan Kp sampai sistem oscillasi konstan → catat Kp_ult dan T_ult → hitung Kp, Ki, Kd dari tabel baku.</div>`
      },
      {
        id: 'implementasi-pid-arduino',
        emoji: '🤖',
        title: 'Implementasi PID di Arduino',
        body: `<p>Library bawaan <strong>PID Arduino</strong> (by Brett Beauregard) sangat populer untuk implementasi PID di Arduino:</p>
<pre class="mt-code">#include <PID_v1.h>

// Sensor suhu (thermistor atau LM35)
const int SENSOR_PIN = A0;
const int HEATER_PIN = 9;  // PWM output

// Setpoint dan variabel PID
double Setpoint = 60.0;  // Target suhu (°C)
double Input, Output;

// Parameter PID (perlu dituning!)
double Kp = 2.0, Ki = 5.0, Kd = 1.0;
PID myPID(&Input, &Output, &Setpoint, Kp, Ki, Kd, DIRECT);

void setup() {
  myPID.SetMode(AUTOMATIC);
  myPID.SetOutputLimits(0, 255);  // Rentang PWM
  analogWrite(HEATER_PIN, 0);
}

void loop() {
  Input = bacaSuhu();  // Fungsi baca sensor
  myPID.Compute();     // Hitung output PID
  analogWrite(HEATER_PIN, Output);  // Terapkan ke heater
  delay(200);
}</pre>
<p><strong>Poin penting:</strong></p>
<ul>
<li><code>SetOutputLimits(0, 255)</code> — membatasi output PWM ke rentang 8-bit</li>
<li><code>myPID.Compute()</code> harus dipanggil secara berkala (tidak terlalu cepat/lambat)</li>
<li>Nilai Kp, Ki, Kd harus di-tuning sesuai sistem nyata</li>
</ul>
<div class="mt-warn">⚠️ Jangan lupa <strong>anti-windup</strong> untuk integral — mencegah akumulasi error terlalu besar saat actuator sudah mentok (output = 255).</div>`
      },
      {
        id: 'implementasi-pid-plc',
        emoji: '🏭',
        title: 'Implementasi PID di PLC',
        body: `<p>PLC industri memiliki fungsi <strong>PID built-in</strong> yang sudah teroptimasi untuk proses continuous-time — lebih stabil dari implementasi manual di Arduino.</p>
<p><strong>Parameter PID di PLC (contoh Siemens S7):</strong></p>
<table class="mt-table"><thead><tr><th>Parameter</th><th>Deskripsi</th><th>Umum</th></tr></thead><tbody>
<tr><td>SP (Setpoint)</td><td>Nilai target yang diinginkan</td><td>Input dari HMI</td></tr>
<tr><td>PV (Process Variable)</td><td>Nilai aktual dari sensor</td><td>Input dari transmitter 4-20mA</td></tr>
<tr><td>CV (Controller Output)</td><td>Output kendali ke actuator</td><td>Output 4-20mA ke VFD/valve</td></tr>
<tr><td>Kp</td><td>Gain proportional</td><td>0,5 – 50 (tergantung proses)</td></tr>
<tr><td>Ti (Integral time)</td><td>Waktu integrasi</td><td>10 – 300 detik</td></tr>
<tr><td>Td (Derivative time)</td><td>Waktu derivatif</td><td>0 – 60 detik</td></tr>
</tbody></table>
<p><strong>Studi kasus: Kontrol suhu tanki pemanas</strong></p>
<ol>
<li>PT100 mengukur suhu → transmitter 4-20mA → modul analog PLC (AI)</li>
<li>PLC menjalankan fungsi PID (S7: FB "PID_Compact")</li>
<li>Output PID → modul analog PLC (AO) 4-20mA → VFD motor pompa pemanas</li>
<li>HMI menampilkan tren suhu, setpoint, dan output PID</li>
</ol>
<div class="mt-tip">💡 PLC menggunakan scan time (1-10ms) sebagai basis perhitungan PID — lebih presisi dari Arduino yang delay()-based. Untuk proses lambat (suhu), keduanya bisa, tapi untuk proses cepat (motor speed), PLC lebih andal.</div>`
      },
      {
        id: 'studi-kasus-kendali',
        emoji: '🎯',
        title: 'Studi Kasus: Kendali Kecepatan Motor DC',
        body: `<p><strong>Spesifikasi:</strong> Motor DC 12V, encoder 600 PPR, target 1000 RPM</p>
<p><strong>Sistem:</strong></p>
<ol>
<li>Sensor: Encoder optik (600 pulse per revolution)</li>
<li>Actuator: Driver motor L298N (PWM input)</li>
<li>Kontroler: Arduino Uno + library PID</li>
</ol>
<p><strong>Alur kerja:</strong></p>
<ul>
<li>Encoder menghasilkan pulse → Arduino menghitung RPM aktual</li>
<li>Error = Target (1000 RPM) − RPM aktual</li>
<li>PID menghitung output PWM (0-255)</li>
<li>PWM → driver L298N → motor → kecepatan berubah</li>
</ul>
<p><strong>Cara tuning:</strong></p>
<ol>
<li>Set Ki = 0, Kd = 0, naikkan Kp sampai motor mulai goyang (oscillate)</li>
<li>Catat Kp_ult (ultimte gain) dan T_ult (oscillation period)</li>
<li>Gunakan tabel Ziegler-Nichols untuk hitung Kp, Ki, Kd</li>
<li>Uji dan fine-tune secara manual</li>
</ol>
<p><strong>Hasil yang baik:</strong> overshoot < 10%, settle time < 2 detik, steady-state error ≈ 0.</p>`
      }
    ],
    contoh: [
      {
        judul: 'Menghitung Error PID',
        soal: 'Suhu aktual = 58°C, setpoint = 60°C. Pada detik sebelumnya error = 3°C. Hitung komponen P, I, Kp=2, Ki=0,5, Kd=0,1 (asumsi derror/dt = -1°C/s).',
        langkah: [
          'Error saat ini: e = 60 - 58 = 2°C.',
          'P = Kp × e = 2 × 2 = 4.',
          'I = Ki × Σe × dt ≈ 0,5 × (3 + 2) × 1s = 2,5 (asumsi dt = 1s).',
          'D = Kd × de/dt = 0,1 × (-1) = -0,1.',
          'Output = P + I + D = 4 + 2,5 - 0,1 = 6,4 (skala normalisasi ke PWM)'
        ]
      },
      {
        judul: 'Rasio Kontrol ON/OFF dengan Hysteresis',
        soal: 'Thermostat diset 25°C dengan hysteresis 2°C. Berapa kali AC ON/OFF dalam 10 menit jika suhu naik dari 23°C ke 27°C secara linear?',
        langkah: [
          'AC ON pada 26°C (25 + hysteresis/2), OFF pada 24°C (25 - hysteresis/2).',
          'Suhu naik 4°C dalam 10 menit → laju 0,4°C/menit.',
          'Waktu ON: 23°C → 26°C = 3°C / 0,4 = 7,5 menit.',
          'Waktu OFF: 26°C → 24°C = 2°C / 0,4 = 5 menit (tapi tidak sempat turun karena suhu terus naik).',
          '<strong>Jawaban:</strong> AC hanya ON sekali (dari 23°C → 26°C, lalu terus ON karena suhu tidak pernah turun di bawah 24°C).'
        ]
      }
    ],
    soal: [
      { q: 'Sistem yang memiliki sensor feedback untuk mengoreksi output disebut…', opts: ['Open-loop', 'Closed-loop', 'Feedforward', 'Cascade'], ans: 1, exp: 'Closed-loop memiliki sensor feedback yang dibandingkan dengan setpoint untuk menghasilkan error.' },
      { q: 'Komponen PID yang berfungsi menghilangkan steady-state error adalah…', opts: ['P (Proportional)', 'I (Integral)', 'D (Derivative)', 'Semua komponen'], ans: 1, exp: 'Integral mengakumulasi error dari waktu ke waktu, sehingga terus memberikan koreksi sampai error = 0.' },
      { q: 'Hysteresis pada kontrol ON/OFF berfungsi untuk…', opts: ['Meningkatkan presisi', 'Mencegah chattering (ON/OFF cepat)', 'Mengurangi konsumsi daya', 'Meningkatkan kecepatan respon'], ans: 1, exp: 'Hysteresis memberi "ruang" antara ON dan OFF sehingga relay tidak berubah-ubah terlalu cepat.' },
      { q: 'Pada metode Ziegler-Nichols, Kp_ult adalah gain di mana sistem…', opts: ['Tercapai setpoint dengan cepat', 'Mulai oscillasi dengan amplitude konstan', 'Error = 0 sempurna', 'Output mentok maksimum'], ans: 1, exp: 'Kp_ult (ultimate gain) adalah gain di mana sistem mulai oscillasi stabil — titik awal tuning.' },
      { q: 'Dalam sistem PLC, PID dihitung berdasarkan…', opts: ['Loop time program', 'Scan time PLC (1-10ms)', 'Waktu user-defined', 'Tidak ada basis waktu'], ans: 1, exp: 'PID PLC menggunakan scan time sebagai basis perhitungan waktu (dt) untuk integrasi dan derivasi.' }
    ]
  },
  {
    id: 'desain-pcb',
    emoji: '🖥️',
    title: 'Desain PCB & Hardware',
    subtitle: 'Schematic, layout PCB, aturan desain, soldering & troubleshooting',
    level: 'Menengah',
    durasi: '±35 menit',
    materi: ['Schematic', 'Layout PCB', 'Aturan Desain', 'Soldering', 'Troubleshooting'],
    sections: [
      {
        id: 'pengenalan-pcb',
        emoji: '📋',
        title: 'Apa itu PCB?',
        body: `<p><strong>PCB (Printed Circuit Board)</strong> adalah papan fiberglass/epoksi dengan jalur tembaga yang menghubungkan komponen elektronik secara permanen. Sebelum PCB, rangkaian dibuat dengan menyolder kabel langsung antar komponen (point-to-point wiring) — lambat, rentan error, dan tidak reproduksibel.</p>
<div class="mt-img-wrap" style="margin:16px 0;"><svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><rect x="20" y="20" width="360" height="110" rx="4" fill="#d4a574" opacity="0.3" stroke="#8b6914" stroke-width="2"/><text x="200" y="15" text-anchor="middle" font-size="10" font-weight="600" fill="#666">Struktur PCB</text><rect x="25" y="30" width="350" height="15" fill="#2d8a4e" rx="2" opacity="0.6"/><text x="200" y="41" text-anchor="middle" font-size="8" fill="white" font-weight="600">Silkscreen (Label)</text><rect x="25" y="50" width="350" height="12" fill="#228b22" rx="2" opacity="0.8"/><text x="200" y="59" text-anchor="middle" font-size="8" fill="white" font-weight="600">Soldermask (Pelindung)</text><rect x="25" y="67" width="350" height="8" fill="#d4a574" rx="1"/><text x="200" y="74" text-anchor="middle" font-size="7" fill="#333" font-weight="600">Copper Foil (35µm)</text><rect x="25" y="80" width="350" height="35" fill="#f5f5dc" stroke="#ccc" stroke-width="1" rx="2"/><text x="200" y="102" text-anchor="middle" font-size="9" fill="#666" font-weight="600">Substrat FR-4 (Fiberglass)</text><rect x="25" y="120" width="350" height="8" fill="#d4a574" rx="1"/><text x="200" y="127" text-anchor="middle" font-size="7" fill="#333" font-weight="600">Copper Foil (35µm)</text><rect x="25" y="20" width="350" height="10" fill="#228b22" rx="2" opacity="0.8"/><text x="200" y="28" text-anchor="middle" font-size="7" fill="white" font-weight="600">Soldermask</text></svg><div class="mt-img-cap">Struktur lapisan PCB — fiberglass FR-4 sebagai inti, dilapisi tembaga, soldermask, dan silkscreen</div></div>
<p><strong>Keuntungan PCB:</strong></p>
<ul>
<li>Reproducible — bisa diproduksi massal dengan konsisten</li>
<li>Komponen rapat — desain lebih kecil</li>
<li>Mudah di-maintain — jalur terlihat jelas</li>
<li>Noise lebih rendah — ground plane bisa mengurangi interferensi</li>
</ul>
<p><strong>Lapisan PCB:</strong></p>
<table class="mt-table"><thead><tr><th>Lapisan</th><th>Material</th><th>Fungsi</th></tr></thead><tbody>
<tr><td>Copper foil</td><td>Tembaga 35µm / 70µm</td><td>Jalur sinyal & power</td></tr>
<tr><td>Soldermask</td><td>Hijau (atau warna lain)</td><td>Perlindungan jalur dari oksidasi & short</td></tr>
<tr><td>Silkscreen</td><td>Teks putih</td><td>Label komponen, nomor referensi</td></tr>
<tr><td>Substrat</td><td>FR-4 (fiberglass)</td><td>Isolasi mekanis & listrik</td></tr>
</tbody></table>
<div class="mt-tip">💡 FR-4 adalah standar industri untuk PCB. Untuk frekuensi tinggi (>1 GHz), gunakan material khusus seperti Rogers atau Teflon.</div>`
      },
      {
        id: 'schematic',
        emoji: '📝',
        title: 'Schematic (Diagram Rangkaian)',
        body: `<p><strong>Schematic</strong> adalah "bahasa" komunikasi utama antara desainer elektronika. Schematic menunjukkan <strong>koneksi logis</strong> antar komponen — bukan posisi fisik.</p>
<p><strong>Simbol standar (IEC 60617):</strong></p>
<table class="mt-table"><thead><tr><th>Komponen</th><th>Simbol</th><th>Catatan</th></tr></thead><tbody>
<tr><td>Resistor</td><td>▄▄▄ atau ─╱╲─</td><td>IEC: kotak; ANSI: zigzag</td></tr>
<tr><td>Kapasitor</td><td>┤├</td><td>Yang satu lurus, satu melengkung</td></tr>
<tr><td>Dioda</td><td>▷|</td><td>Arah panah = arah arus konvensional</td></tr>
<tr><td>Transistor NPN</td><td>—┤&lt;|</td><td>Arrow pada emitor keluar</td></tr>
<tr><td>Ground</td><td>⏚ atau ▽</td><td>Semua ground terhubung</td></tr>
</tbody></table>
<p><strong>Alur desain dari ide ke PCB:</strong></p>
<ol>
<li><strong>Brainstorm & spesifikasi</strong> — tentukan fungsi, tegangan, arus, komponen yang dibutuhkan</li>
<li><strong>Desain schematic</strong> — buat diagram rangkaian di software (KiCad, EAGLE, Altium)</li>
<li><strong>Simulasi</strong> — uji rangkaian secara virtual (LTspice, Proteus) sebelum fabrikasi</li>
<li><strong>Layout PCB</strong> — tentukan posisi komponen & jalur tembaga</li>
<li><strong>Review & fabrikasi</strong> — cek DRC (Design Rule Check), export Gerber, kirim ke pabrik</li>
<li><strong>Soldering & testing</strong> — rakit komponen, uji fungsi</li>
</ol>
<div class="mt-warn">⚠️ Selalu simulasi rangkaian dulu sebelum buat PCB! Biaya revisi PCB jauh lebih mahal dari simulasi di komputer.</div>`
      },
      {
        id: 'layout-pcb',
        emoji: '🗺️',
        title: 'Layout PCB — Posisi Komponen & Jalur',
        body: `<p><strong>Layout</strong> menentukan apakah PCB bisa bekerja dengan baik. Prinsip utama:</p>
<p><strong>1. Posisi komponen:</strong></p>
<ul>
<li>Letakkan komponen sesuai alur sinyal (input di kiri, output di kanan)</li>
<li>Decoupling capacitor (100nF) harus sedekat mungkin dengan VCC/GND pin IC</li>
<li>Komponen panas (regulator, transistor daya) beri jarak & akses panas</li>
</ul>
<p><strong>2. Jalur (trace):</strong></p>
<table class="mt-table"><thead><tr><th>Jenis Jalur</th><th>Lebar Minimum</th><th>Catatan</th></tr></thead><tbody>
<tr><td>Sinyal</td><td>0,2 mm (8 mil)</td><td>Cukup untuk sinyal digital/analog</td></tr>
<tr><td>Power (1A)</td><td>0,5 mm</td><td>Perhatikan panas (Joule heating)</td></tr>
<tr><td>Power (3A+)</td><td>1,0 mm atau lebih</td><td>Gunakan polygon pour (ground plane)</td></tr>
</tbody></table>
<p><strong>3. Ground plane:</strong></p>
<ul>
<li>Gunakan satu sisi PCB sebagai ground plane penuh (solid)</li>
<li>Ground plane mengurangi noise, memperbaiki impedance matching, dan membantu panas</li>
<li>Hindari memotong ground plane dengan jalur sinyal — bisa menciptakan loop antenna</li>
</ul>
<p><strong>4. Differential pairs & panjang jalur:</strong></p>
<ul>
<li>USB, Ethernet, LVDS: jalur harus sepanjang mungkin sama (matched length)</li>
<li>Impedance control: lebar jalur harus sesuai impedansi target (50Ω single-ended, 90Ω differential)</li>
</ul>
<div class="mt-tip">💡 Aturan praktis: mulai dari komponen paling "sulit" (BGA, MCU) dulu, lalu komponen sekitarnya. Jalur power & ground lebih dulu, baru sinyal.</div>`
      },
      {
        id: 'aturan-desain',
        emoji: '📏',
        title: 'Aturan Desain PCB (DFM & DRC)',
        body: `<p><strong>DFM (Design for Manufacturing)</strong> memastikan PCB bisa diproduksi massal tanpa error. Pabrik PCB biasanya punya batasan minimum:</p>
<table class="mt-table"><thead><tr><th>Parameter</th><th>Minimum</th><th>Rekomendasi</th></tr></thead><tbody>
<tr><td>Lebar jalur</td><td>0,15 mm (6 mil)</td><td>0,2 mm (8 mil)</td></tr>
<tr><td>Jarak antar jalur</td><td>0,15 mm</td><td>0,2 mm</td></tr>
<tr><td>Diameter drill</td><td>0,2 mm</td><td>0,3 mm</td></tr>
<tr><td>Annular ring</td><td>0,15 mm</td><td>0,2 mm</td></tr>
<tr><td>Solder mask clearance</td><td>0,05 mm</td><td>0,1 mm</td></tr>
</tbody></table>
<p><strong>DRC (Design Rule Check):</strong></p>
<ul>
<li>Jalur terputus (open trace)</li>
<li>Jalur bersentuhan (short)</li>
<li>Drill terlalu dekat</li>
<li>Silkscreen menutup pad solder</li>
<li>Courtyard komponen overlap</li>
</ul>
<p><strong>Checklist sebelum fabrikasi:</strong></p>
<ol>
<li>✅ DRC zero error</li>
<li>✅ Net connectivity check (tidak ada koneksi yang terlewat)</li>
<li>✅ Gerber file lengkap (copper, soldermask, silkscreen, drill)</li>
<li>✅ Drill file (.drl) format Excellon</li>
<li>✅ Panelisasi jika produksi massal</li>
</ol>
<div class="mt-warn">⚠️ Selalu minta prototipe 1-3 pcs dulu sebelum produksi massal. Cek fisik, ukur impedance jika perlu, baru order dalam jumlah besar.</div>`
      },
      {
        id: 'soldering',
        emoji: '🔥',
        title: 'Teknik Soldering',
        body: `<p><strong>Soldering</strong> adalah proses menyambung komponen ke PCB menggunakan logam solder (timah + flux).</p>
<p><strong>Jenis soldering:</strong></p>
<table class="mt-table"><thead><tr><th>Jenis</th><th>Suhu</th><th>Untuk</th></tr></thead><tbody>
<tr><td>Through-hole (THT)</td><td>300-350°C</td><td>Resistor, kapasitor, IC DIP</td></tr>
<tr><td>Surface-mount (SMD)</td><td>300-380°C</td><td>Chip resistor, QFP, BGA</td></tr>
<tr><td>Reflow</td><td>240-260°C (peak)</td><td>Produksi massal SMD</td></tr>
</tbody></table>
<p><strong>Teknik soldering yang baik:</strong></p>
<ol>
<li>Panaskan pad PCB DAN kaki komponen bersamaan (2-3 detik)</li>
<li>Dekatkan solder ke sambungan — solder akan mencair & mengalir ke sambungan</li>
<li>Angkat solder, lalu angkat soldering iron — tunggu 1 detik sebelum lepas</li>
<li>Hasil: solder yang mengkilap, bentuk kerucut (menempel baik ke pad & kaki)</li>
</ol>
<p><strong>Tanda soldering buruk:</strong></p>
<ul>
<li><strong>Cold joint</strong> — solder mengkilap tapi tidak menempel baik (jika diketuk, putus)</li>
<li><strong>Solder bridge</strong> — solder menghubungkan dua pad yang seharusnya terpisah</li>
<li><strong>Disturbed joint</strong> — solder bergerak saat pendinginan → retak internal</li>
</ul>
<div class="mt-tip">💡 Gunakan flux saat soldering — membantu solder mengalir lebih baik & mengurangi cold joint. Untuk SMD, gunakan magnifier atau mikroskop.</div>`
      },
      {
        id: 'troubleshooting',
        emoji: '🔍',
        title: 'Troubleshooting Hardware',
        body: `<p>Ketika PCB tidak berfungsi, gunakan pendekatan sistematis:</p>
<p><strong>Langkah 1: Inspeksi Visual</strong></p>
<ul>
<li>Cek solder joint — apakah ada cold joint atau solder bridge?</li>
<li>Cek polaritas — kapasitor elektrolitik, dioda, LED, IC</li>
<li>Cek orientasi komponen — pin 1 IC, arah transistor</li>
</ul>
<p><strong>Langkah 2: Uji Daya</strong></p>
<ul>
<li>Uji supply voltage: apakah sesuai spesifikasi? (5V, 3,3V, 12V)</li>li>
<li>Cek arus total: jika terlalu tinggi → short circuit</li>
<li>Gunakan CC mode pada power supply untuk melindungi rangkaian</li>
</ul>
<p><strong>Langkah 3: Ukur Sinyal</strong></p>
<table class="mt-table"><thead><tr><th>Alat</th><th>Untuk</th><th>Tips</th></tr></thead><tbody>
<tr><td>Multimeter</td><td>Tegangan DC, kontinuitas, resistansi</td><td>Cek semua titik power, ground, signal</td></tr>
<tr><td>Osiloskop</td><td>Bentuk gelombang, frekuensi, noise</td><td>Pastikan ground probe = ground rangkaian</td></tr>
<tr><td>Logic analyzer</td><td>Sinyal digital (SPI, I2C, UART)</td><td>Cek timing & protocol</td></tr>
</tbody></table>
<p><strong>Langkah 4: Isolasi Masalah</strong></p>
<ul>
<li>Bagi rangkaian menjadi blok-blok kecil</li>
<li>Uji satu blok pada satu waktu</li>
<li>Jika MCU tidak jalan: cek clock, reset pin, power supply IC</li>
</ul>
<div class="mt-warn">⚠️ Jangan pernah menyalakan PCB tanpa memeriksa polaritas power supply terlebih dahulu — satu kesalahan bisa membakar semua IC!</div>`
      }
    ],
    contoh: [
      {
        judul: 'Memilih Lebar Jalur Power',
        soal: 'Sebuah PCB harus mengalirkan arus 2A pada jalur tembaga 35µm (1 oz). Berapa lebar jalur minimum yang aman?',
        langkah: [
          'Gunakan aturan praktis: 1 mm lebar ≈ 1A untuk tembaga 35µm (dengan temperatura ambient 25°C).',
          'Untuk 2A: lebar minimum ≈ 2 × 1 mm = 2 mm.',
          'Jika ingin lebih aman (rise suhu < 20°C), gunakan 2,5-3 mm.',
          '<strong>Jawaban:</strong> minimal 2 mm, rekomendasi 2,5-3 mm.'
        ]
      },
      {
        judul: 'Memecahkan PCB yang Tidak Berfungsi',
        soal: 'PCB dengan Arduino Nano + sensor DHT22 tidak menampilkan data di serial monitor. Urutan troubleshooting yang benar?',
        langkah: [
          '1. Inspeksi visual: cek solder joint, polaritas, orientasi komponen.',
          '2. Cek power supply: apakah Arduino Nano mendapat 5V dari USB? Sensor mendapat 3,3V/5V?',
          '3. Uji kontinuitas: kabel DHT22 terhubung ke pin yang benar (DATA → D4 misalnya)?',
          '4. Uji dengan multimeter: tegangan pada pin data naik-turun saat DHT22 bekerja?',
          '5. Jika semua OK: cek kode program — library sudah terinstall, pin number sesuai?' 
        ]
      },
      {
        judul: 'Memilih Material PCB',
        soal: 'Untuk proyek jam digital sederhana (frekuensi kerja < 10 MHz), material PCB apa yang paling cocok dan berapa ketebalan?',
        langkah: [
          'Untuk frekuensi rendah (< 10 MHz): FR-4 sudah sangat cukup (standar industri).',
          'Ketebalan: 1,6 mm adalah standar paling umum (murah & kuat).', 
          'Tembaga: 35µm (1 oz) untuk jalur sinyal, 70µm (2 oz) jika butuh jalur power tebal.',
          '<strong>Jawaban:</strong> FR-4, 1,6 mm, 35µm copper — paling murah & tersedia di semua pabrik PCB.'
        ]
      }
    ],
    soal: [
      { q: 'Lapisan hijau pada PCB yang melindungi jalur tembaga dari oksidasi disebut…', opts: ['Silkscreen', 'Soldermask', 'Copper layer', 'Substrat'], ans: 1, exp: 'Soldermask adalah lapisan pelindung hijau (atau warna lain) yang menutupi jalur tembaga.' },
      { q: 'Untuk mengurangi noise pada PCB digital, teknik yang paling efektif adalah…', opts: ['Menambah resistor pull-up', 'Menggunakan ground plane solid', 'Memperpanjang jalur sinyal', 'Mengurangi jumlah komponen'], ans: 1, exp: 'Ground plane solid mengurangi loop area, impedance ground, dan noise EMI secara signifikan.' },
      { q: 'Decoupling capacitor harus diletakkan…', opts: ['Sejauh mungkin dari IC', 'Paralel dengan power supply', 'Sedekat mungkin dengan pin VCC IC', 'Di sisi berlawanan PCB dari IC'], ans: 2, exp: 'Decoupling capacitor harus sedekat mungkin dengan pin VCC/GND IC untuk memfilter noise frekuensi tinggi.' },
      { q: 'Tanda soldering yang baik adalah…', opts: ['Solder berwarna gelap & kasar', 'Solder mengkilap & berbentuk kerucut', 'Solder menutupi seluruh kaki komponen', 'Solder berbentuk bola besar'], ans: 1, exp: 'Solder mengkilap & kerucut = sambungan baik; gelap = cold joint; bola besar = terlalu banyak solder.' },
      { q: 'Untuk fabrikasi PCB, format file yang dikirim ke pabrik adalah…', opts: ['.schematic (KiCad)', '.brd (EAGLE)', '.gbr (Gerber)', '.pdf (schematic)'], ans: 2, exp: 'Gerber (.gbr) adalah format standar industri untuk fabrikasi PCB — berisi data copper, soldermask, silkscreen, drill.' }
    ]
  }
];
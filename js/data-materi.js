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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/resistor-kode-warna.png" alt="Tabel kode warna resistor 4 gelang" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Tabel kode warna resistor 4 gelang — urutkan dari kiri ke kanan: band 1 (digit pertama), band 2 (digit kedua), band 3 (multiplier), band 4 (toleransi) · sumber: Wikimedia Commons, <i>File:Resistor color code.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/kapasitor-jenis.png" alt="Berbagai jenis kapasitor: elektrolit, keramik, dan film" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Berbagai jenis kapasitor: elektrolit aluminium (silinder biru/hitam), keramik disc (kuning), film polypropylene (kotak oranye), dan tantalum (tetes kuning) · sumber: Wikimedia Commons, <i>File:Capacitors (7189597135).jpg</i> (CC BY 2.0, Windell Oskay / Evil Mad Scientist)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/dioda-kurva-vi.png" alt="Kurva karakteristik V-I dioda semikonduktor" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Kurva karakteristik V-I dioda silikon: forward bias (arus naik cepat di atas ~0,7 V), reverse bias (arus hampir nol), dan breakdown (Zener) · sumber: Wikimedia Commons, <i>File:Diode current wiki.png</i> (CC BY-SA 3.0, Hldsc)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/transistor-bjt-pinout.png" alt="Pinout transistor NPN BC547 TO-92 dan simbol rangkaian" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Pinout transistor NPN BC547 paket TO-92: kaki kiri = Collector, tengah = Base, kanan = Emitter (dilihat dari sisi datar) — verifikasi selalu dengan datasheet · sumber: Wikimedia Commons, <i>File:NPN BJT (Transistor) Pinout.svg</i> (CC BY-SA 4.0)</div></div>
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
        body: `<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/arduino-uno-pinout.png" alt="Pinout Arduino Uno" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Pinout Arduino Uno R3: digital pin 0–13 (sisi atas), analog A0–A5, pin daya, ICSP header, dan konektor USB-B · sumber: Wikimedia Commons, <i>File:Arduino-uno-pinout.png</i> (CC BY-SA 4.0, bq)</div></div>
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
        body: `<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/esp32-devkitc-pinout.png" alt="Pinout ESP32 DevKitC" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Pinout ESP32 DevKitC V4: 38 pin, termasuk GPIO multifungsi (ADC/DAC/Touch/I2C/SPI/UART/PWM), 3V3, 5V (VIN), GND · sumber: Wikimedia Commons, <i>File:ESP32-Devkit-Pinout-Rev-12-9600p.png</i> (CC BY-SA 4.0, Vishnu Maiea)</div></div>
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
<div class="mt-tip">💡 Aturan praktis: sedikit kabel & banyak sensor → <strong>I2C</strong>; butuh kecepatan tinggi → <strong>SPI</strong>; komunikasi jarak jauh/1 lawan 1 → <strong>UART</strong>.</div><div class="mt-tip">📚 <strong>Lanjutkan belajar:</strong> Pelajari lebih dalam di modul <a href="#" onclick="openMateri('mcu-lanjut')">Pemrograman MCU Lanjut</a> — FreeRTOS, Interrupt & OTA.</div> → <strong>I2C</strong>; butuh kecepatan tinggi → <strong>SPI</strong>; komunikasi jarak jauh/1 lawan 1 → <strong>UART</strong>.</div>`
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
    id: 'mcu-lanjut',
    emoji: '🧠',
    title: 'Pemrograman MCU Lanjut',
    subtitle: 'Interrupt, Timer Hardware, FreeRTOS, Deep Sleep & OTA pada ESP32/ATmega',
    level: 'Lanjut',
    durasi: '±40 menit',
    materi: ['Interrupt & ISR', 'Timer Hardware', 'FreeRTOS', 'Sinkronisasi Task', 'Deep Sleep', 'OTA Update'],
    sections: [
      {
        id: 'interrupt-isr',
        emoji: '⚡',
        title: 'Interrupt & ISR',
        body: `<p><strong>Interrupt</strong> adalah sinyal yang menghentikan eksekusi program utama untuk menjalankan rutin khusus bernama <strong>ISR (Interrupt Service Routine)</strong>. Berbeda dengan <em>polling</em> yang terus mengecek pin, interrupt membuat MCU responsif dan hemat siklus CPU.</p>
<p>Pada Arduino, interrupt eksternal tersedia di pin 2 & 3 (Uno) dan hampir semua GPIO (ESP32). Fungsi <code>attachInterrupt()</code> mengaitkan pin dengan ISR:</p>
<pre><code class="lang-cpp">volatile bool flag = false;  // WAJIB volatile karena diubah di ISR

void IRAM_ATTR isrTombol() {
  flag = true;               // ISR harus SECEPAT mungkin, jangan delay/Serial!
}

void setup() {
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), isrTombol, FALLING);
  // mode: RISING, FALLING, CHANGE, LOW
}

void loop() {
  if (flag) {
    flag = false;
    Serial.println("Tombol ditekan via interrupt!");
  }
}</code></pre>
<p><strong>Aturan ISR:</strong> (1) pakai <code>volatile</code> untuk variabel yang dibagi, (2) jangan pakai <code>delay()</code>, <code>Serial.print()</code> lama, atau alokasi memori di ISR, (3) debounce tombol dengan jeda waktu / filter RC.</p>
<pre><code class="lang-cpp">volatile unsigned long last = 0;
void IRAM_ATTR isrDebounce() {
  unsigned long now = millis();
  if (now - last > 50) {   // 50 ms debounce
    flag = true;
    last = now;
  }
}</code></pre>
<div class="mt-tip">💡 Interrupt cocok untuk tombol, encoder, sensor gerak — semua kejadian yang tidak boleh terlewat walau program sedang sibuk <code>delay()</code>.</div>
<div class="mt-warn">⚠️ Jangan lakukan kerja berat di ISR. ISR yang lama akan memblokir interrupt lain dan bikin WiFi/BLE ESP32 terganggu.</div>`
      },
      {
        id: 'timer-hardware',
        emoji: '⏱️',
        title: 'Timer Hardware ATmega328P',
        body: `<p><strong>Timer hardware</strong> adalah pencacah yang berjalan independen dari CPU, didorong clock 16 MHz (Uno). Berbeda dengan <code>millis()</code> yang bergantung pada Timer0 dan bisa jitter, timer hardware presisi hingga mikrodetik.</p>
<p>ATmega328P punya 3 timer: Timer0 (8-bit, dipakai millis), Timer1 (16-bit, paling fleksibel), Timer2 (8-bit, untuk PWM). Setiap timer punya <strong>prescaler</strong> untuk membagi clock:</p>
$$f_{timer} = \\frac{f_{CPU}}{prescaler}, \\qquad prescaler \\in \\{1,8,64,256,1024\\}$$
<p><strong>Mode CTC (Clear Timer on Compare Match)</strong> — timer menghitung sampai nilai <code>OCRnA</code>, lalu reset dan memicu interrupt:</p>
<pre><code class="lang-cpp">// Timer1 CTC 1 Hz (1 detik) di Uno 16 MHz
void setup() {
  noInterrupts();
  TCCR1A = 0; TCCR1B = 0;
  TCNT1  = 0;
  OCR1A = 15624;  // 16MHz / 1024 / 1Hz -1
  TCCR1B |= (1 << WGM12);                    // CTC mode
  TCCR1B |= (1 << CS12) | (1 << CS10);       // prescaler 1024
  TIMSK1 |= (1 << OCIE1A);                   // enable compare interrupt
  interrupts();
}
ISR(TIMER1_COMPA_vect) {
  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN)); // toggle tiap 1 detik
}
void loop() { /* program bebas tanpa delay! */ }</code></pre>
<table class="mt-table"><thead><tr><th>Metode</th><th>Presisi</th><th>Blokir CPU?</th><th>Cocok untuk</th></tr></thead><tbody>
<tr><td><code>delay()</code></td><td>buruk (±ms, blokir)</td><td>Ya</td><td>Tidak disarankan</td></tr>
<tr><td><code>millis()</code></td><td>±1 ms</td><td>Tidak</td><td>Blink, debounce</td></tr>
<tr><td>Timer CTC</td><td>±µs, jitter kecil</td><td>Tidak</td><td>PWM presisi, sampling ADC, ISR periodik</td></tr>
</tbody></table>
<div class="mt-tip">💡 Di ESP32, gunakan <code>hw_timer_t *timer = timerBegin(0, 80, true)</code> — prescaler 80 → 1 MHz tick (1 µs per hitung).</div>`
      },
      {
        id: 'freertos-intro',
        emoji: '🧩',
        title: 'FreeRTOS di ESP32 — Task & Scheduler',
        body: `<p><strong>RTOS (Real-Time Operating System)</strong> memungkinkan MCU menjalankan banyak <em>task</em> seakan paralel. Di ESP32, <strong>FreeRTOS</strong> sudah tertanam — dual-core bisa menjalankan task di core 0 & 1 bersamaan.</p>
<p>Konsep inti: <strong>task</strong> = fungsi yang berjalan tanpa henti, diatur <strong>scheduler</strong> berdasarkan <strong>prioritas</strong>. Prioritas lebih tinggi → didahulukan.</p>
<pre><code class="lang-cpp">#include <Arduino.h>

void TaskKedip(void *pv) {
  pinMode(2, OUTPUT);
  for(;;) {
    digitalWrite(2, HIGH);
    vTaskDelay(500 / portTICK_PERIOD_MS);
    digitalWrite(2, LOW);
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}
void TaskCetak(void *pv) {
  int n = 0;
  for(;;) {
    Serial.printf("Hitung: %d (core %d)\\n", n++, xPortGetCoreID());
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}
void setup() {
  Serial.begin(115200);
  xTaskCreatePinnedToCore(TaskKedip, "Kedip", 2048, NULL, 1, NULL, 0);
  xTaskCreatePinnedToCore(TaskCetak, "Cetak", 2048, NULL, 2, NULL, 1);
  // prioritas Cetak (2) > Kedip (1)
}
void loop() { vTaskDelay(1000 / portTICK_PERIOD_MS); }</code></pre>
<p><strong>Fungsi penting:</strong> <code>xTaskCreate()</code> — buat task, <code>vTaskDelay(ms / portTICK_PERIOD_MS)</code> — jeda tanpa block scheduler (jangan pakai <code>delay()</code> di task!), <code>vTaskDelete(NULL)</code> — hapus diri sendiri.</p>
<div class="mt-tip">💡 Stack size 2048 kata cukup untuk task sederhana; task WiFi/BLE butuh 4096+. Cek sisa stack dengan <code>uxTaskGetStackHighWaterMark(NULL)</code>.</div>`
      },
      {
        id: 'freertos-sync',
        emoji: '🔗',
        title: 'FreeRTOS Sinkronisasi — Queue, Semaphore & Mutex',
        body: `<p>Task yang berjalan paralel perlu berkomunikasi aman. FreeRTOS menyediakan <strong>Queue</strong> (antrean pesan), <strong>Semaphore</strong> (sinyal), dan <strong>Mutex</strong> (kunci).</p>
<p><strong>Queue</strong> — kirim data antar task tanpa race condition:</p>
<pre><code class="lang-cpp">QueueHandle_t q;
void TaskSensor(void *pv){
  int suhu = 0;
  for(;;){
    suhu = analogRead(34);
    xQueueSend(q, &suhu, portMAX_DELAY);
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}
void TaskDisplay(void *pv){
  int data;
  for(;;){
    if(xQueueReceive(q, &data, portMAX_DELAY)){
      Serial.printf("Suhu: %d\\n", data);
    }
  }
}
void setup(){
  q = xQueueCreate(10, sizeof(int)); // 10 slot
  xTaskCreate(TaskSensor, "Sensor", 2048, NULL, 1, NULL);
  xTaskCreate(TaskDisplay, "Display", 2048, NULL, 1, NULL);
}</code></pre>
<p><strong>Binary Semaphore</strong> — sinkronisasi kejadian (mis. ISR → task): <code>xSemaphoreCreateBinary()</code>, <code>xSemaphoreGiveFromISR()</code> di ISR, <code>xSemaphoreTake()</code> di task.</p>
<p><strong>Mutex</strong> — kunci akses resource bersama (mis. I2C bus):</p>
<pre><code class="lang-cpp">SemaphoreHandle_t i2cMutex;
void TaskA(void *pv){
  for(;;){
    if(xSemaphoreTake(i2cMutex, portMAX_DELAY)){
      // akses OLED via I2C
      xSemaphoreGive(i2cMutex);
    }
    vTaskDelay(100 / portTICK_PERIOD_MS);
  }
}</code></pre>
<div class="mt-tip">💡 Gunakan Queue untuk <em>kirim data</em>, Semaphore untuk <em>sinyal kejadian</em>, Mutex untuk <em>proteksi resource bersama</em>. Pilih yang tepat agar tidak deadlock.</div>`
      },
      {
        id: 'deep-sleep-esp32',
        emoji: '😴',
        title: 'Deep Sleep ESP32 — Hemat Daya Maksimal',
        body: `<p>ESP32 punya beberapa mode sleep — dari yang ringan hingga hampir mati total. Untuk sensor baterai, <strong>Deep Sleep</strong> adalah kuncinya.</p>
<table class="mt-table"><thead><tr><th>Mode</th><th>Arus tipikal</th><th>RAM</th><th>Wake-up</th></tr></thead><tbody>
<tr><td>Active</td><td>160–260 mA</td><td>ON</td><td>-</td></tr>
<tr><td>Modem-sleep</td><td>~20 mA</td><td>ON</td><td>WiFi dimatikan</td></tr>
<tr><td>Light Sleep</td><td>~0,8 mA</td><td>ON</td><td>Timer, GPIO</td></tr>
<tr><td><strong>Deep Sleep</strong></td><td><strong>~10 µA</strong></td><td><strong>OFF (RTC ON)</strong></td><td>Timer, ext0/ext1, touch, ULP</td></tr>
<tr><td>Hibernation</td><td>~2,5 µA</td><td>OFF</td><td>Hanya RTC</td></tr>
</tbody></table>
<p>Hanya memori <strong>RTC</strong> yang bertahan saat deep sleep — gunakan <code>RTC_DATA_ATTR</code>:</p>
<pre><code class="lang-cpp">#include <esp_sleep.h>
RTC_DATA_ATTR int bootCount = 0;

void setup(){
  Serial.begin(115200);
  ++bootCount;
  Serial.printf("Boot ke-%d, bangun karena %d\\n", bootCount, esp_sleep_get_wakeup_cause());

  // kerja: baca sensor lalu kirim
  int adc = analogRead(34);
  Serial.printf("ADC: %d\\n", adc);

  // set wake-up 10 detik
  esp_sleep_enable_timer_wakeup(10 * 1000000ULL);
  Serial.println("Masuk deep sleep 10 dtk...");
  Serial.flush();
  esp_deep_sleep_start();
}
void loop(){}</code></pre>
<p><strong>Wake-up lain:</strong> <code>esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 0)</code> — bangun jika tombol ditekan ke LOW, <code>esp_sleep_enable_touchpad_wakeup()</code> — sentuh pin.</p>
<div class="mt-tip">💡 Sensor yang kirim tiap 10 menit → deep sleep 10 menit → baterai 18650 2600 mAh bisa tahan <strong>bulanan</strong>, bukan jam!</div>`
      },
      {
        id: 'ota-update',
        emoji: '📡',
        title: 'OTA Update — Update Firmware Tanpa Kabel',
        body: `<p><strong>OTA (Over-The-Air)</strong> memungkinkan update program ESP32 lewat WiFi — tak perlu colok USB. Wajib untuk perangkat yang sudah terpasang di lapangan/ atap/ sawah.</p>
<p>Library paling mudah: <strong>ArduinoOTA</strong>:</p>
<pre><code class="lang-cpp">#include <WiFi.h>
#include <ArduinoOTA.h>
const char* ssid = "NamaWiFi";
const char* pass = "Password";
void setup(){
  Serial.begin(115200);
  WiFi.begin(ssid, pass);
  while(WiFi.status()!=WL_CONNECTED){ delay(300); Serial.print("."); }
  Serial.println(WiFi.localIP());

  ArduinoOTA.setHostname("esp32-ota");
  ArduinoOTA.setPassword("admin123"); // opsional

  ArduinoOTA.onStart([](){ Serial.println("Mulai OTA"); });
  ArduinoOTA.onEnd([](){ Serial.println("OTA selesai, reboot"); });
  ArduinoOTA.onError([](ota_error_t e){ Serial.printf("Error %u\\n", e); });

  ArduinoOTA.begin();
  Serial.println("OTA siap");
}
void loop(){
  ArduinoOTA.handle(); // WAJIB dipanggil sesering mungkin
  // program utama di sini
}</code></pre>
<p>Cara pakai: di Arduino IDE pilih Port → Network ports → esp32-ota, lalu Upload seperti biasa.</p>
<div class="mt-warn">⚠️ Pastikan power stabil saat OTA — gagal di tengah bisa corrupt firmware. Untuk produksi, pertimbangkan <strong>OTA dua partisi + rollback</strong> (ESP-IDF / AsyncElegantOTA).</div>
<div class="mt-tip">💡 Kombinasikan OTA + Deep Sleep? Pastikan perangkat bangun cukup lama untuk jendela OTA (mis. 30 detik tiap bangun) atau pakai wake-up via tombol khusus OTA.</div>`
      }
    ],
    contoh: [
      {
        judul: 'Menghitung OCR1A untuk Timer 1 detik',
        soal: 'ATmega328P 16 MHz, prescaler 1024, ingin interrupt tiap 1 detik dengan Timer1 CTC. Berapa nilai OCR1A?',
        langkah: [
          'Rumus: OCR1A = f_CPU / (prescaler × f_target) − 1.',
          'f_CPU = 16.000.000 Hz, prescaler = 1024, f_target = 1 Hz.',
          'Hitung: OCR1A = 16.000.000 / (1024 × 1) − 1 = 15625 − 1 = 15624.',
          '<strong>Jawaban:</strong> <strong>OCR1A = 15624</strong>. Untuk 0,5 detik → 7812.'
        ]
      },
      {
        judul: 'Stack Task FreeRTOS',
        soal: 'Dua task: Task A kedip LED, Task B baca sensor + kirim Queue. Berapa stack yang dialokasikan dan kenapa Task B lebih prioritas?',
        langkah: [
          'Task A (kedip): stack 2048 cukup (hanya digitalWrite + delay).',
          'Task B (sensor+Queue): stack 2048–4096 karena pakai analogRead + Queue + Serial.',
          'Prioritas: Task B = 2, Task A = 1 — sensor tidak boleh telat, LED boleh jitter sedikit.',
          '<strong>Jawaban:</strong> Alokasikan <strong>2048 untuk A, 3072 untuk B</strong>, prioritas B lebih tinggi.'
        ]
      }
    ],
    soal: [
      { q: 'Keyword yang wajib untuk variabel yang dibagi antara ISR dan loop() adalah…', opts: ['static', 'volatile', 'const', 'extern'], ans: 1, exp: 'volatile mencegah compiler meng-cache variabel; ISR bisa mengubahnya kapan saja.' },
      { q: 'Fungsi untuk menunda task FreeRTOS tanpa memblokir scheduler adalah…', opts: ['delay()', 'delayMicroseconds()', 'vTaskDelay()', 'sleep()'], ans: 2, exp: 'vTaskDelay() memberi kesempatan scheduler menjalankan task lain; delay() memblokir.' },
      { q: 'Agar ISR tombol tidak kepicu berulang karena pantulan (bounce), teknik yang dipakai adalah…', opts: ['Menambah resistor besar', 'Debounce 30–50 ms di ISR/task', 'Menaikkan clock', 'Mematikan interrupt'], ans: 1, exp: 'Debounce dengan jeda 30–50 ms (via millis() atau filter) mengatasi pantulan mekanik.' },
      { q: 'Mode sleep ESP32 dengan arus ~10 µA dan hanya RTC yang hidup adalah…', opts: ['Modem-sleep', 'Light sleep', 'Deep sleep', 'Active'], ans: 2, exp: 'Deep sleep ≈10 µA, RAM mati kecuali RTC; light sleep masih ~0,8 mA.' },
      { q: 'Sebelum OTA update, hal penting yang harus dipastikan adalah…', opts: ['Cabut semua sensor', 'WiFi terhubung dan power stabil', 'Hapus semua task FreeRTOS', 'Matikan Serial'], ans: 1, exp: 'OTA butuh WiFi stabil dan catu daya tidak boleh padam di tengah flashing.' }
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/3phase-waveform.png" alt="Gelombang sinusoidal 3 fasa" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Gelombang sinusoidal 3 fasa: tiga gelombang identik bergeser 120° satu sama lain — jumlah vektor ketiga fasa pada setiap saat = 0 (sistem seimbang) · sumber: Wikimedia Commons, <i>File:3 phase AC waveform.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/power-triangle.png" alt="Segitiga daya AC" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Segitiga Daya: P (daya aktif, Watt) = sisi datar, Q (daya reaktif, VAR) = sisi tegak, S (daya semu, VA) = hipotenusa — cos φ = P/S = faktor daya · sumber: Wikimedia Commons, <i>File:Power triangle.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-warn">⚠️ Transformator hanya bekerja pada AC — DC tidak menghasilkan fluks magnet berubah-ubah.</div><div class="mt-tip">⚡ <strong>Selanjutnya:</strong> Pelajari konverter switching modern di modul <a href="#" onclick="openMateri('elektronika-daya')">Elektronika Daya</a>.</div></div>`,
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
    id: 'elektronika-daya',
    emoji: '⚡',
    title: 'Elektronika Daya',
    subtitle: 'Konverter switching Buck, Boost, Rectifier & Inverter untuk catu daya modern',
    level: 'Menengah',
    durasi: '±30 menit',
    materi: ['Switching vs Linear', 'Buck', 'Boost', 'Buck-Boost', 'Rectifier & Filter', 'Inverter H-Bridge'],
    sections: [
      {
        id: 'pengantar-switching',
        emoji: '🔌',
        title: 'Switching vs Linear — Kenapa Dunia Beralih?',
        body: `<p><strong>Linear regulator</strong> (mis. 7805) menurunkan tegangan dengan membuang kelebihan sebagai <strong>panas</strong>. <strong>Switching converter</strong> menyalakan-mematikan MOSFET pada frekuensi tinggi (puluhan kHz–MHz) dan menyimpan energi di <strong>induktor & kapasitor</strong> — jauh lebih efisien.</p>
<table class="mt-table"><thead><tr><th>Aspek</th><th>Linear</th><th>Switching</th></tr></thead><tbody>
<tr><td>Efisiensi</td><td>30–60% (panas besar)</td><td>85–96%</td></tr>
<tr><td>Ukuran</td><td>Butuh heatsink besar</td><td>Kecil (induktor kecil di frek tinggi)</td></tr>
<tr><td>Heat loss</td><td>$$P_{loss} = (V_{in}-V_{out}) \\cdot I_{out}$$</td><td>$$P_{loss} \\approx I^2R_{DSon} + P_{switching}$$ (kecil)</td></tr>
<tr><td>Contoh</td><td>7805, LM317</td><td>Buck MP1584, Boost XL6009</td></tr>
</tbody></table>
<p>Komponen inti switching: <strong>MOSFET</strong> (sakelar cepat), <strong>Induktor (L)</strong> (simpan energi magnetik), <strong>Dioda Schottky</strong> (penyearah cepat), <strong>Kapasitor (C)</strong> (filter ripple).</p>
<div class="mt-tip">💡 Charger HP-mu adalah switching (flyback) — tanpa itu, charger 18 W harus sebesar batu bata dan sepanas setrika!</div>`
      },
      {
        id: 'konverter-buck',
        emoji: '⬇️',
        title: 'Konverter Buck — Step-Down',
        body: `<p><strong>Buck</strong> menurunkan tegangan: \\(V_{out} < V_{in}\\). Prinsip: MOSFET ON → induktor diisi arus, MOSFET OFF → induktor melepas energi lewat dioda ke beban.</p>
<p><strong>Duty cycle</strong> (rasio ON) menentukan tegangan keluar:</p>
$$D = \\frac{V_{out}}{V_{in}}$$
<p>Contoh: 12 V → 5 V → \\(D = 5/12 \\approx 0{,}42\\) (42%).</p>
<p>Nilai induktor untuk ripple arus \\(\\Delta I_L\\) tertentu:</p>
$$L = \\frac{(V_{in} - V_{out}) \\cdot D}{f \\cdot \\Delta I_L}$$
<p>dengan \\(f\\) = frekuensi switching, \\(\\Delta I_L\\) biasanya 20–40% dari \\(I_{out}\\). Ripple tegangan:</p>
$$\\Delta V_{out} \\approx \\frac{\\Delta I_L}{8 \\cdot f \\cdot C_{out}}$$
<p><strong>Contoh desain 12 V → 5 V, 1 A, f = 100 kHz:</strong></p>
<ul>
<li>\\(D = 5/12 = 0{,}42\\)</li>
<li>Pilih \\(\\Delta I_L = 0{,}3\\,\\text{A}\\) → \\(L = (12-5)\\cdot0{,}42 / (100000\\cdot0{,}3) \\approx 98\\,\\mu\\text{H}\\) → pakai <strong>100 µH</strong></li>
<li>Pilih \\(C_{out}= 100\\,\\mu\\text{F}\\) → \\(\\Delta V \\approx 0{,}3 / (8\\cdot100k\\cdot100u) \\approx 3{,}75\\,\\text{mV}\\) sangat kecil</li>
</ul>
<div class="mt-tip">💡 Di Wokwi tidak ada model induktor switching real, tapi kamu bisa monitor tegangan output dengan ADC (lihat template Lab: Buck Converter Monitor).</div>`
      },
      {
        id: 'konverter-boost',
        emoji: '⬆️',
        title: 'Konverter Boost — Step-Up',
        body: `<p><strong>Boost</strong> menaikkan tegangan: \\(V_{out} > V_{in}\\). Kebalikan Buck: induktor diisi saat MOSFET ON, lalu tegangannya <em>ditumpuk</em> ke output saat MOSFET OFF.</p>
<p>Duty cycle Boost:</p>
$$D = 1 - \\frac{V_{in}}{V_{out}}$$
<p>Contoh: 3,7 V (Li-ion) → 12 V → \\(D = 1 - 3{,}7/12 = 0{,}692\\) (69,2%).</p>
<p>Arus induktor lebih besar dari arus output:</p>
$$I_L = \\frac{I_{out}}{1-D}$$
<p>Untuk contoh di atas: \\(I_{out}=0{,}5\\,\\text{A}\\) → \\(I_L = 0{,}5 / 0{,}308 \\approx 1{,}62\\,\\text{A}\\) — pilih induktor yang tahan arus puncak!</p>
<p><strong>Aplikasi:</strong> Power bank (3,7 V → 5 V), driver LED seri, <strong>MPPT solar</strong> (panel 18 V → baterai 24 V).</p>
<div class="mt-warn">⚠️ Boost tidak bisa membatasi arus hubung singkat — output short = induktor & MOSFET langsung terbakar! Selalu pakai fuse/proteksi.</div>`
      },
      {
        id: 'buck-boost',
        emoji: '↕️',
        title: 'Buck-Boost — Naik-Turun Fleksibel',
        body: `<p><strong>Buck-Boost</strong> bisa menaikkan <em>atau</em> menurunkan tegangan, berguna saat \\(V_{in}\\) bisa di atas atau di bawah \\(V_{out}\\) (mis. baterai 3–4,2 V → 3,3 V stabil).</p>
<p>Dua varian populer:</p>
<ul>
<li><strong>Inverting Buck-Boost</strong> — output polaritas terbalik: $$V_{out} = -V_{in} \\cdot \\frac{D}{1-D}$$</li>
<li><strong>SEPIC / 4-switch Buck-Boost</strong> — output tetap positif, lebih kompleks tapi aman untuk baterai: $$V_{out} = V_{in} \\cdot \\frac{D}{1-D}$$</li>
</ul>
<table class="mt-table"><thead><tr><th>Topologi</th><th>Rasio</th><th>Polaritas</th><th>Use case</th></tr></thead><tbody>
<tr><td>Buck</td><td>$$D = \\frac{V_{out}}{V_{in}}$$</td><td>Positif</td><td>12 V → 5 V</td></tr>
<tr><td>Boost</td><td>$$D = 1-\\frac{V_{in}}{V_{out}}$$</td><td>Positif</td><td>3,7 V → 12 V</td></tr>
<tr><td>Buck-Boost (SEPIC)</td><td>$$\\frac{V_{out}}{V_{in}} = \\frac{D}{1-D}$$</td><td>Positif</td><td>Baterai → 3,3 V (UPS mini)</td></tr>
</tbody></table>
<p><strong>Contoh UPS mini:</strong> Baterai Li-ion 3,0–4,2 V → Buck-Boost SEPIC 5 V stabil untuk ESP32, walau baterai hampir kosong!</p>
<div class="mt-tip">💡 Modul jadi: MT3608 (Boost), LM2596 (Buck), SEPIC 3,3 V (mis. TPS54360). Pilih modul dengan rating arus 1,5× kebutuhan.</div>`
      },
      {
        id: 'rectifier-filter',
        emoji: '🔋',
        title: 'Rectifier & Filter — AC ke DC',
        body: `<p>Sebelum switching bekerja, tegangan AC PLN (220 V) harus disearahkan menjadi DC. Inilah tugas <strong>rectifier</strong>.</p>
<ul>
<li><strong>Setengah gelombang:</strong> 1 dioda, hanya loloskan setengah siklus → $$V_{dc} \\approx 0{,}318 \\cdot V_m$$, ripple besar.</li>
<li><strong>Gelombang penuh (bridge, 4 dioda):</strong> loloskan kedua siklus → $$V_{dc} \\approx 0{,}636 \\cdot V_m$$, ripple setengah frekuensi. Lebih efisien!</li>
<li><strong>Bridge</strong> = standar industri (mis. DB107, KBU1010).</li>
</ul>
<p>Setelah bridge, <strong>kapasitor filter</strong> meratakan ripple. Tegangan ripple puncak-ke-puncak:</p>
$$V_{ripple} = \\frac{I_{load}}{f \\cdot C}$$
<p>dengan \\(f\\) = 100 Hz (bridge di 50 Hz PLN, dua pulsa per periode), \\(I_{load}\\) arus beban, \\(C\\) kapasitansi.</p>
<p><strong>Contoh desain PSU 5 V 1 A dari trafo 9 V AC:</strong></p>
<ul>
<li>Trafo 9 V RMS → $$V_m = 9 \\cdot \\sqrt{2} \\approx 12{,}7\\,\\text{V}$$, setelah bridge 0,7 V ×2 → $$V_{peak} \\approx 11{,}3\\,\\text{V}$$</li>
<li>Pilih ripple max 1 V → $$C = I / (f \\cdot V_{ripple}) = 1 / (100 \\cdot 1) = 0{,}01\\,\\text{F} = 10000\\,\\mu\\text{F}$$ → pakai <strong>4700 µF ×2 paralel</strong> atau 10000 µF</li>
<li>Lalu turunkan ke 5 V dengan Buck (efisien) atau linear 7805 (panas besar: $$(11,3-5)\\cdot1 = 6,3\\,\\text{W}$$ harus dibuang!)</li>
</ul>
<div class="mt-warn">⚠️ Kapasitor filter menyimpan muatan berbahaya — jangan sentuh kaki kapasitor besar setelah dimatikan! Kosongkan dengan resistor 1 kΩ.</div>`
      },
      {
        id: 'inverter-hbridge',
        emoji: '🔄',
        title: 'Inverter & H-Bridge — DC ke AC',
        body: `<p><strong>Inverter</strong> mengubah DC kembali menjadi AC — kebalikan rectifier. Fondasinya adalah <strong>H-Bridge</strong>: 4 MOSFET yang menyalakan arus bolak-balik lewat beban.</p>
<p><strong>H-Bridge sederhana (square wave):</strong></p>
<table class="mt-table"><thead><tr><th>MOSFET ON</th><th>Arus lewat beban</th><th>Tegangan beban</th></tr></thead><tbody>
<tr><td>Q1 + Q4</td><td>Kiri → Kanan</td><td>+Vdc</td></tr>
<tr><td>Q2 + Q3</td><td>Kanan → Kiri</td><td>−Vdc</td></tr>
<tr><td>Q1+Q2 atau Q3+Q4</td><td>Jangan! (shoot-through)</td><td>Short!</td></tr>
</tbody></table>
<p>Untuk sinusoida mulus, H-Bridge di-drive <strong>PWM sinusoidal (SPWM)</strong>: duty cycle dimodulasi mengikuti sinus 50 Hz:</p>
$$D(t) = 0{,}5 + 0{,}5 \\cdot M \\cdot \\sin(\\omega t)$$
<p>dengan \\(M\\) = indeks modulasi (0–1), \\(\\omega = 2\\pi \\cdot 50\\,\\text{Hz}\\). Filter LC menghaluskan PWM menjadi sinus.</p>
<p><strong>Aplikasi:</strong> UPS rumah (baterai 12 V → 220 V AC), inverter surya (panel DC → AC grid), driver motor AC (VFD).</p>
<div class="mt-tip">💡 Modul H-Bridge jadi: IR2104 + 4× IRF3205, atau pakai IC inverter EG8010 (SPWM built-in). Selalu beri <strong>dead-time</strong> (jeda antar sakelar) untuk hindari shoot-through!</div>`
      }
    ],
    contoh: [
      {
        judul: 'Desain Induktor Buck',
        soal: 'Buck 12 V → 5 V, 1 A, f = 100 kHz, ripple arus 0,3 A. Hitung duty cycle dan induktor.',
        langkah: [
          'Duty: \\(D = V_{out}/V_{in} = 5/12 ≈ 0,417\\) (41,7%).',
          'Induktor: \\(L = (V_{in}-V_{out})·D / (f·ΔI_L) = (7·0,417)/(100000·0,3) ≈ 97,3 µH\\).',
          'Pilih nilai standar <strong>100 µH, rating ≥1,5 A</strong>.',
          '<strong>Jawaban:</strong> D = 41,7%, <strong>L ≈ 100 µH</strong>.'
        ]
      },
      {
        judul: 'Desain Kapasitor Filter',
        soal: 'Bridge rectifier, I_load = 1 A, ripple max 1 V, f = 100 Hz. Hitung kapasitor minimal.',
        langkah: [
          'Rumus: \\(C = I / (f·V_{ripple})\\).',
          'Hitung: \\(C = 1 / (100·1) = 0,01 F = 10000 µF\\).',
          'Praktik: pakai <strong>2×4700 µF paralel</strong> atau 10000 µF low-ESR.',
          '<strong>Jawaban:</strong> <strong>C ≥ 10000 µF</strong>.'
        ]
      },
      {
        judul: 'Duty Cycle Boost',
        soal: 'Boost 3,7 V → 12 V, I_out = 0,5 A. Hitung duty dan arus induktor.',
        langkah: [
          'Duty: \\(D = 1 − V_{in}/V_{out} = 1 − 3,7/12 = 0,692\\) (69,2%).',
          'Arus induktor: \\(I_L = I_{out}/(1−D) = 0,5/0,308 ≈ 1,62 A\\).',
          'Pilih induktor rating minimal 2,5 A untuk margin.',
          '<strong>Jawaban:</strong> D = 69,2%, <strong>I_L ≈ 1,62 A</strong>.'
        ]
      }
    ],
    soal: [
      { q: 'Rumus duty cycle konverter Buck ideal adalah…', opts: ['D = Vin/Vout', 'D = Vout/Vin', 'D = 1 − Vin/Vout', 'D = Iout/Iin'], ans: 1, exp: 'Buck: D = Vout/Vin. Contoh 12→5 V → D≈0,42.' },
      { q: 'Keunggulan utama switching vs linear regulator adalah…', opts: ['Rangkaian lebih sederhana', 'Efisiensi tinggi 85–96%', 'Tidak butuh induktor', 'Tegangan selalu stabil tanpa kapasitor'], ans: 1, exp: 'Switching mengubah energi via induktor/kapasitor, bukan membuang sebagai panas — efisiensi jauh lebih tinggi.' },
      { q: 'Ripple tegangan pada kapasitor filter bridge dihitung dengan…', opts: ['Vr = I/(f·C)', 'Vr = V·f·C', 'Vr = L·I/f', 'Vr = R·I'], ans: 0, exp: 'Vr = Iload/(f·C), dengan f=100 Hz untuk bridge di PLN 50 Hz.' },
      { q: 'Pada H-Bridge, kondisi shoot-through adalah…', opts: ['Q1 dan Q4 ON bersamaan', 'Q1 dan Q2 ON bersamaan (satu sisi)', 'Q2 dan Q3 ON bersamaan', 'Semua MOSFET OFF'], ans: 1, exp: 'Q1+Q2 (atau Q3+Q4) di satu sisi hubung singkat supply — harus diberi dead-time.' },
      { q: 'Topologi yang bisa naik-turun tegangan dengan output positif adalah…', opts: ['Buck saja', 'Boost saja', 'SEPIC / 4-switch Buck-Boost', 'Inverting Buck-Boost'], ans: 2, exp: 'SEPIC dan 4-switch Buck-Boost menghasilkan output positif baik saat Vin < Vout maupun Vin > Vout.' }
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/logic-gates.png" alt="Simbol 7 gerbang logika dasar" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Simbol 7 gerbang logika dasar (standar ANSI/IEEE): AND, OR, NOT, NAND, NOR, XOR, XNOR — setiap gerbang merepresentasikan satu fungsi Boolean · sumber: Wikimedia Commons, <i>File:Logic gates.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/d-flipflop.png" alt="Simbol D flip-flop" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">D Flip-Flop (Data/Delay FF): output Q mengikuti input D pada tepi naik clock (rising edge) — menyimpan 1 bit data hingga clock berikutnya · sumber: Wikimedia Commons, <i>File:D flip-flop.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/dc-motor-diagram.png" alt="Komponen dalam motor DC: armatur, komutator, sikat karbon, dan magnet stator" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Komponen motor DC: armatur berputar dalam medan magnet stator, komutator & sikat membalik arah arus · sumber: Wikimedia Commons, <i>File:Motor parts.jpg</i> (CC BY-SA 3.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/induction-motor.png" alt="Diagram motor induksi 3 fasa" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Motor induksi 3 fasa: stator (kumparan tetap) menghasilkan medan magnet berputar yang menginduksi arus pada rotor — menghasilkan torsi tanpa kontak mekanis · sumber: Wikimedia Commons, <i>File:Induction motor.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/contactor.jpg" alt="Kontaktor industri 3 fasa terpasang pada rel DIN" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Kontaktor industri 3 fasa — coil, kontak utama, dan auxiliary contact · sumber: Wikimedia Commons, <i>File:Contactor.jpg</i> (CC BY-SA 4.0)</div></div>
<div class="mt-tip">💡 Kontaktor selalu dilengkapi auxiliary contact untuk interlock — misalnya mencegah kedua kontaktor star-delta aktif bersamaan.</div>`,
        referensi: 'Spesifikasi kontaktor dari katalog vendor (Schneider Electric, ABB, Siemens). Pemilihan berdasarkan IEC 60947-4-1.'
      },
      {
        id: 'rangkaian-star-delta',
        emoji: '🔺',
        title: 'Rangkaian Star-Delta (Y-Δ)',
        body: `<p>Star-delta adalah metode starting motor induksi untuk mengurangi arus start hingga 1/3 dari arus direct-on-line.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/star-delta.png" alt="Diagram rangkaian star-delta motor" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Rangkaian star-delta (Y-Δ): konfigurasi star saat start (tegangan per fasa = V/√3), pindah ke delta untuk operasi normal (tegangan penuh) — mengurangi arus start menjadi 1/3 · sumber: Wikimedia Commons, <i>File:Star-delta starter.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/vfd.jpg" alt="Variable Frequency Drive (VFD) untuk motor AC" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Variable Frequency Drive (VFD) industri — tiga blok utama: rectifier (AC→DC), DC bus, dan inverter IGBT (DC→AC variabel) untuk kontrol kecepatan motor presisi · sumber: Wikimedia Commons, <i>File:Variable-frequency drive.jpg</i> (CC BY-SA 4.0)</div></div>`,
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/plc-cpu.jpg" alt="Unit PLC industri" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">PLC Siemens S7-1200 pada rel DIN: modul CPU (tengah), modul sinyal digital I/O (kanan), dan power supply DC (kiri) — sistem modular yang mudah diperluas · sumber: Wikimedia Commons, <i>File:Siemens S7-1200 PLC.jpg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/ladder-and.jpg" alt="Contoh ladder diagram AND gate" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Ladder diagram PLC: contact seri (AND) = dua kontak dalam satu rung, contact paralel (OR) = cabang paralel — masing-masing rung berakhir di output coil · sumber: Wikimedia Commons, <i>File:Ladder diagram.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/plc-timer-ladder.png" alt="Diagram timer TON (On-Delay) pada ladder diagram PLC" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Timer On-Delay (TON) pada ladder PLC: coil aktif → timer mulai hitung → output ON setelah preset tercapai · sumber: Wikimedia Commons, <i>File:TimerOnDelayDiagram.png</i> (CC BY-SA 3.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/hmi-panel.jpg" alt="Panel HMI layar sentuh Siemens TP900 Comfort" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">HMI layar sentuh Siemens TP900 Comfort — menampilkan diagram proses, alarm, dan trend real-time · sumber: Wikimedia Commons, <i>File:Siemens TP900 Comfort.jpg</i> (CC BY-SA 4.0, Siemens AG)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Scada_std_anim_s.gif/400px-Scada_std_anim_s.gif" alt="Animasi sistem SCADA memantau dan mengontrol proses industri" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Sistem SCADA — supervisor komputer memantau dan mengontrol plant industri secara real-time · sumber: Wikimedia Commons, <i>File:Scada std anim s.gif</i> (CC BY-SA 3.0, Penyulap)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/esp32-devkitc-pinout.png" alt="Pinout ESP32 DevKit" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">ESP32 DevKitC pinout: 38 pin GPIO multifungsi, ADC 12-bit (ch 0–19), DAC (ch 25, 26), TOUCH (ch 0–9), I2C (SDA=21, SCL=22), SPI default, UART0 (TX=1, RX=3) · sumber: Wikimedia Commons, <i>File:ESP32-Devkit-Pinout-Rev-12-9600p.png</i> (CC BY-SA 4.0, Vishnu Maiea)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/dht22-sensor.jpg" alt="Sensor DHT22 untuk mengukur suhu dan kelembaban" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Sensor DHT22 (AM2302) — mengukur suhu ±0,5°C dan kelembaban ±2–5% RH, output digital 1-wire · sumber: Wikimedia Commons, <i>File:DHT22 sensor.jpg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/iot-diagram.jpg" alt="Diagram arsitektur IoT dengan Firebase" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Arsitektur sistem IoT: perangkat edge (sensor + mikrokontroler) → gateway/cloud → aplikasi monitoring — Firebase mengisi peran cloud storage & real-time sync · sumber: Wikimedia Commons, <i>File:IoT architecture.svg</i> (CC BY-SA 4.0)</div></div>
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
</ul><div class="mt-tip">📡 <strong>Perluas jaringan IoT-mu:</strong> Pelajari LoRa, BLE & ESP-NOW di modul <a href="#" onclick="openMateri('komunikasi-nirkabel')">Komunikasi Nirkabel & RF</a>.</div>
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
    id: 'komunikasi-nirkabel',
    emoji: '📡',
    title: 'Komunikasi Nirkabel & RF',
    subtitle: 'Spektrum RF, NRF24L01, LoRa, ESP-NOW, BLE & perbandingan protokol',
    level: 'Menengah',
    durasi: '±35 menit',
    materi: ['Spektrum RF & ISM', 'NRF24L01', 'LoRa & LoRaWAN', 'ESP-NOW', 'Bluetooth/BLE', 'Perbandingan Protokol'],
    sections: [
      {
        id: 'pengantar-rf',
        emoji: '🌊',
        title: 'Spektrum Frekuensi Radio & Band ISM',
        body: `<p><strong>Frekuensi Radio (RF)</strong> adalah gelombang elektromagnetik 3 kHz–300 GHz yang membawa data tanpa kabel. Semakin tinggi frekuensi → <strong>bandwidth besar</strong> (kecepatan tinggi) tapi <strong>jangkauan pendek & mudah terhalang</strong>; semakin rendah → jangkauan jauh tapi data lambat.</p>
<table class="mt-table"><thead><tr><th>Band ISM (bebas lisensi)</th><th>Frekuensi</th><th>Karakter</th></tr></thead><tbody>
<tr><td>433 MHz</td><td>433,05–434,79 MHz</td><td>Jangkauan jauh, penetrasi dinding baik, antena agak besar</td></tr>
<tr><td>868 MHz (EU) / 915 MHz (US)</td><td>868 / 915 MHz</td><td>LoRa favorit, balance jangkauan & bandwidth</td></tr>
<tr><td>2,4 GHz</td><td>2400–2483,5 MHz</td><td>WiFi, BLE, NRF24L01, ESP-NOW — antena kecil, padat interferensi</td></tr>
<tr><td>5,8 GHz</td><td>5725–5875 MHz</td><td>Bandwidth sangat besar, jangkauan pendek</td></tr>
</tbody></table>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/rf-spectrum.png" alt="Spektrum elektromagnetik dari gelombang radio hingga sinar gamma" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Spektrum elektromagnetik — band radio (3 kHz–300 GHz) ada di ujung kiri, termasuk WiFi (2,4/5 GHz) dan LoRa (433/868/915 MHz) · sumber: Wikimedia Commons, <i>File:Electromagnetic-Spectrum.svg</i> (CC BY-SA 3.0)</div></div>
<p>Rumus panjang gelombang:</p>
$$\\lambda = \\frac{c}{f}, \\qquad c = 3 \\times 10^8\\,\\text{m/s}$$
<p>Contoh: 433 MHz → \\(\\lambda \\approx 0{,}69\\,\\text{m}\\), 2,4 GHz → \\(12{,}5\\,\\text{cm}\\). Antena quarter-wave = \\(\\lambda/4\\) → 17 cm untuk 433 MHz, 3 cm untuk 2,4 GHz.</p>
<div class="mt-tip">💡 Pilih 433/868 MHz untuk sensor sawah/jarak km, 2,4 GHz untuk dalam ruangan & kecepatan tinggi.</div>`
      },
      {
        id: 'nrf24l01',
        emoji: '📻',
        title: 'NRF24L01 — Transceiver 2,4 GHz Murah Meriah',
        body: `<p><strong>NRF24L01</strong> adalah modul RF 2,4 GHz paling populer untuk Arduino — harga belasan ribu, komunikasi SPI, jangkauan ±100 m (versi PA+LNA bisa 1 km line-of-sight).</p>
<p><strong>Pinout (6 pin):</strong> VCC (3,3 V!), GND, CE, CSN, SCK, MOSI, MISO, IRQ. <strong>Wajib 3,3 V</strong> — 5 V akan merusak!</p>
<table class="mt-table"><thead><tr><th>Pin NRF</th><th>Sambung ke Uno</th></tr></thead><tbody>
<tr><td>VCC</td><td>3,3 V</td></tr>
<tr><td>GND</td><td>GND</td></tr>
<tr><td>CE</td><td>D9</td></tr>
<tr><td>CSN</td><td>D10 (SS)</td></tr>
<tr><td>SCK</td><td>D13</td></tr>
<tr><td>MOSI</td><td>D11</td></tr>
<tr><td>MISO</td><td>D12</td></tr>
</tbody></table>
<div class="mt-img-wrap"><img class="mt-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NRF24L01-Pinout.jpg/400px-NRF24L01-Pinout.jpg" alt="Pinout modul NRF24L01 2.4GHz" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Pinout modul NRF24L01 — 8 pin: VCC (3,3 V), GND, CE, CSN, SCK, MOSI, MISO, IRQ · sumber: Wikimedia Commons (CC BY-SA 4.0)</div></div>
<p>Kode dasar kirim/terima:</p>
<pre><code class="lang-cpp">#include &lt;SPI.h&gt;
#include &lt;RF24.h&gt;
RF24 radio(9, 10); // CE, CSN
const byte addr[6] = "00001";
void setup(){
  radio.begin();
  radio.openWritingPipe(addr);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();
}
void loop(){
  const char msg[] = "Halo NRF!";
  radio.write(&msg, sizeof(msg));
  delay(1000);
}
// Penerima: radio.openReadingPipe(0, addr); radio.startListening();
// if (radio.available()) radio.read(&buf, sizeof(buf));</code></pre>
<div class="mt-warn">⚠️ NRF24L01 sensitif noise power supply — tambahkan kapasitor 10 µF di VCC-GND modul. Jika sering gagal kirim, cek daya 3,3 V Uno (beri kapasitor atau regulator eksternal).</div>`
      },
      {
        id: 'lora-lorawan',
        emoji: '📶',
        title: 'LoRa & LoRaWAN — Jarak Kilometer',
        body: `<p><strong>LoRa (Long Range)</strong> memakai modulasi <strong>Chirp Spread Spectrum (CSS)</strong> — tahan interferensi dan bisa tembus jarak km dengan daya kecil (cocok sensor sawah, hutan, tambak).</p>
<p><strong>Parameter kunci LoRa:</strong></p>
<table class="mt-table"><thead><tr><th>Parameter</th><th>Arti</th><th>Efek</th></tr></thead><tbody>
<tr><td>SF (Spreading Factor) 7–12</td><td>Jumlah chirp per bit</td><td>SF naik → jangkauan jauh, data lambat</td></tr>
<tr><td>BW (Bandwidth) 125/250/500 kHz</td><td>Lebar pita</td><td>BW besar → cepat, jangkauan pendek</td></tr>
<tr><td>CR (Coding Rate) 4/5–4/8</td><td>Bit koreksi error</td><td>CR besar → tahan error, overhead naik</td></tr>
</tbody></table>
<p><strong>LoRa P2P vs LoRaWAN:</strong> P2P = dua modul saling kirim langsung (tanpa infrastruktur). LoRaWAN = via gateway → network server → app (The Things Network), bisa ribuan node.</p>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/lora-network.png" alt="Arsitektur jaringan LoRaWAN: node, gateway, network server, application" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Arsitektur LoRaWAN: node sensor → gateway → network server → application server · sumber: Wikimedia Commons, <i>File:LoRaWAN Architecture.png</i> (CC BY-SA 4.0)</div></div>
<pre><code class="lang-cpp">// ESP32 + SX1276 (915 MHz) — LoRa P2P
#include &lt;LoRa.h&gt;
void setup(){
  Serial.begin(115200);
  LoRa.setPins(5, 14, 2); // CS, RST, IRQ
  if(!LoRa.begin(915E6)){ Serial.println("LoRa gagal"); while(1); }
  Serial.println("LoRa siap");
}
void loop(){
  LoRa.beginPacket();
  LoRa.print("Suhu: 28.5C");
  LoRa.endPacket();
  delay(5000);
}
// Penerima: int sz = LoRa.parsePacket(); if(sz) while(LoRa.available()) Serial.write(LoRa.read());</code></pre>
<div class="mt-tip">💡 Di Indonesia gunakan 923 MHz (AS923) untuk LoRaWAN. Cek regulasi frekuensi sebelum transmit daya tinggi.</div>`
      },
      {
        id: 'esp-now',
        emoji: '🤝',
        title: 'ESP-NOW — Peer-to-Peer Tanpa Router',
        body: `<p><strong>ESP-NOW</strong> adalah protokol Espressif untuk komunikasi <strong>langsung antar ESP32/ESP8266</strong> tanpa WiFi router/AP. Cepat, ringan, dan hemat daya — cocok mesh sensor, remote control, swarm robot.</p>
<p>Cara kerja: tiap ESP punya <strong>MAC address</strong> unik (6 byte). Perangkat A mendaftarkan MAC B sebagai <em>peer</em>, lalu kirim via <code>esp_now_send()</code> — data sampai dalam milidetik.</p>
<pre><code class="lang-cpp">// ESP-NOW Sender (ESP32)
#include &lt;esp_now.h&gt;
#include &lt;WiFi.h&gt;
uint8_t peerMAC[] = {0x24, 0x6F, 0x28, 0xAA, 0xBB, 0xCC}; // ganti MAC penerima
typedef struct { float suhu; int id; } Data;
Data kirim = {28.5, 1};

void onSent(const uint8_t *mac, esp_now_send_status_t s){
  Serial.println(s==ESP_NOW_SEND_SUCCESS ? "Terkirim" : "Gagal");
}
void setup(){
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  esp_now_init();
  esp_now_register_send_cb(onSent);
  esp_now_peer_info_t peer = {}; memcpy(peer.peer_addr, peerMAC, 6);
  peer.channel = 0; peer.encrypt = false;
  esp_now_add_peer(&peer);
}
void loop(){
  esp_now_send(peerMAC, (uint8_t*)&kirim, sizeof(kirim));
  delay(2000);
}</code></pre>
<pre><code class="lang-cpp">// Receiver callback
void onRecv(const uint8_t *mac, const uint8_t *data, int len){
  Data d; memcpy(&d, data, sizeof(d));
  Serial.printf("Dari %02X:%02X suhu=%.1f\\n", mac[0], mac[1], d.suhu);
}
void setup(){
  WiFi.mode(WIFI_STA); esp_now_init();
  esp_now_register_recv_cb(onRecv);
}</code></pre>
<div class="mt-tip">💡 ESP-NOW bisa 1-ke-banyak, banyak-ke-1, bahkan mesh. Enkripsi opsional (PMK/LMK) tersedia untuk keamanan.</div>`
      },
      {
        id: 'bluetooth-ble',
        emoji: '🔷',
        title: 'Bluetooth Classic vs BLE',
        body: `<p><strong>Classic Bluetooth</strong> (BR/EDR) untuk streaming audio/data kontinu (headset). <strong>BLE (Bluetooth Low Energy)</strong> untuk sensor hemat daya — 90% proyek ESP32 memakai BLE.</p>
<p>BLE memakai konsep <strong>GATT</strong>: <em>Server</em> menyimpan data di <strong>Service → Characteristic</strong> (tiap UUID). <em>Client</em> (HP) membaca/notify. Contoh: Service 0x1809 (Health Thermometer) → Characteristic suhu.</p>
<table class="mt-table"><thead><tr><th>Aspek</th><th>Classic</th><th>BLE</th></tr></thead><tbody>
<tr><td>Daya</td><td>~30 mA terus</td><td>~5–15 mA, sleep di antaranya</td></tr>
<tr><td>Kecepatan</td><td>~2 Mbps</td><td>~1 Mbps (praktis 10–50 kB/s)</td></tr>
<tr><td>Koneksi</td><td>7 slave max</td><td>Banyak, advertise terus</td></tr>
<tr><td>Use case</td><td>Audio, SPP serial</td><td>Sensor, beacon, wearable</td></tr>
</tbody></table>
<pre><code class="lang-cpp">// ESP32 BLE Server — Notify suhu tiap detik
#include &lt;BLEDevice.h&gt;
#include &lt;BLEServer.h&gt;
#include &lt;BLE2902.h&gt;
BLECharacteristic *pChar;
bool deviceConnected = false;
class CB : public BLEServerCallbacks { void onConnect(BLEServer* s){ deviceConnected=true; } void onDisconnect(BLEServer* s){ deviceConnected=false; } };

void setup(){
  BLEDevice::init("ElektroDict_BLE");
  BLEServer *srv = BLEDevice::createServer(); srv->setCallbacks(new CB());
  BLEService *svc = srv->createService("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
  pChar = svc->createCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8", BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY);
  pChar->addDescriptor(new BLE2902());
  svc->start(); srv->getAdvertising()->start();
}
void loop(){
  if(deviceConnected){
    float suhu = 26.5 + random(-5,5)/10.0;
    pChar->setValue(String(suhu).c_str()); pChar->notify();
  }
  delay(1000);
}</code></pre>
<div class="mt-tip">💡 Scan BLE dari HP pakai aplikasi <strong>nRF Connect</strong> — cari nama ElektroDict_BLE, baca characteristic.</div>`
      },
      {
        id: 'perbandingan-protokol',
        emoji: '⚖️',
        title: 'Perbandingan Protokol Nirkabel',
        body: `<p>Tidak ada protokol terbaik untuk semua — pilih sesuai kebutuhan jangkauan, kecepatan, daya & biaya.</p>
<table class="mt-table"><thead><tr><th>Protokol</th><th>Jangkauan</th><th>Kecepatan</th><th>Daya</th><th>Biaya</th><th>Cocok untuk</th></tr></thead><tbody>
<tr><td>NRF24L01</td><td>±100 m (1 km PA)</td><td>250 kbps–2 Mbps</td><td>Rendah (13 mA TX)</td><td>Sangat murah</td><td>Remote, robot, mainan</td></tr>
<tr><td>LoRa P2P</td><td>2–15 km</td><td>0,3–50 kbps</td><td>Sangat rendah</td><td>Murah</td><td>Sensor sawah, tambak</td></tr>
<tr><td>LoRaWAN</td><td>km (via gateway)</td><td>0,3–50 kbps</td><td>Sangat rendah</td><td>Gateway mahal</td><td>Kota pintar, ribuan node</td></tr>
<tr><td>ESP-NOW</td><td>200 m (500 m open)</td><td>~1 Mbps</td><td>Rendah</td><td>Murah (ESP saja)</td><td>Mesh sensor, swarm</td></tr>
<tr><td>BLE</td><td>10–50 m</td><td>1 Mbps</td><td>Sangat rendah</td><td>Murah</td><td>Wearable, beacon</td></tr>
<tr><td>WiFi</td><td>50–100 m</td><td>54 Mbps+</td><td>Tinggi (170 mA)</td><td>Murah</td><td>Bandwidth besar</td></tr>
<tr><td>Zigbee</td><td>75 m (mesh km)</td><td>250 kbps</td><td>Rendah</td><td>Sedang</td><td>Home automation mesh</td></tr>
</tbody></table>
<p>Link budget sederhana (dBm):</p>
$$P_{rx} = P_{tx} + G_{tx} + G_{rx} - L_{path}, \\qquad L_{path} = 20\\log_{10}\\!\\left(\\frac{4\\pi d}{\\lambda}\\right)$$
<div class="mt-tip">💡 Aturan praktis: butuh <strong>jarak km & baterai tahunan → LoRa</strong>; butuh <strong>cepat & peer-to-peer ESP → ESP-NOW</strong>; butuh <strong>akses HP → BLE</strong>.</div>
<div class="mt-warn">⚠️ 2,4 GHz (NRF24L01, ESP-NOW, BLE, WiFi) saling interferensi — beri jarak kanal/frekuensi atau pakai 433/868 MHz jika di lingkungan WiFi padat.</div>`
      }
    ],
    contoh: [
      {
        judul: 'Menghitung Link Budget LoRa',
        soal: 'LoRa TX 14 dBm, antena TX+RX masing 2 dBi, jarak 2 km, frekuensi 923 MHz. Apakah sinyal masih di atas sensitivitas −137 dBm?',
        langkah: [
          'Hitung λ = c/f = 3e8 / 923e6 ≈ 0,325 m.',
          'Path loss: L = 20·log10(4πd/λ) = 20·log10(4π·2000/0,325) ≈ 20·log10(77290) ≈ 97,8 dB.',
          'P_rx = 14 + 2 + 2 − 97,8 = −79,8 dBm.',
          '<strong>Jawaban:</strong> −79,8 dBm >> −137 dBm → <strong>masih sangat kuat, margin ~57 dB</strong>.'
        ]
      },
      {
        judul: 'Waktu Transmisi Paket NRF24L01',
        soal: 'Paket 32 byte (256 bit) dikirim NRF24L01 pada 250 kbps. Berapa waktu on-air minimal (tanpa overhead)?',
        langkah: [
          'Waktu = jumlah bit / bitrate.',
          'Hitung: 256 / 250.000 = 0,001024 s = 1,024 ms.',
          'Dengan overhead (preamble, address, CRC ~10 byte) → ~337 bit → 1,35 ms.',
          '<strong>Jawaban:</strong> <strong>≈1–1,4 ms per paket</strong> — sangat cepat untuk kontrol real-time.'
        ]
      }
    ],
    soal: [
      { q: 'Band ISM yang paling jauh jangkauannya tetapi butuh antena paling besar adalah…', opts: ['2,4 GHz', '5,8 GHz', '433 MHz', 'BLE 2,4 GHz'], ans: 2, exp: '433 MHz panjang gelombang ~69 cm → antena besar tapi propagasi & penetrasi dinding terbaik.' },
      { q: 'Modulasi yang dipakai LoRa sehingga tahan interferensi adalah…', opts: ['FSK', 'ASK', 'Chirp Spread Spectrum (CSS)', 'QAM'], ans: 2, exp: 'LoRa: Chirp Spread Spectrum — chirp naik/turun frekuensi, tahan noise dan multipath.' },
      { q: 'Agar NRF24L01 tidak rusak, tegangan VCC harus…', opts: ['5 V langsung dari Uno', '3,3 V (tambah kapasitor 10 µF)', '9 V dari baterai', '12 V'], ans: 1, exp: 'NRF24L01 hanya 3,3 V; 5 V merusak. Tambah kapasitor 10 µF di VCC-GND untuk cegah brownout.' },
      { q: 'ESP-NOW berkomunikasi dengan cara…', opts: ['Lewat router WiFi', 'Langsung antar ESP via MAC address tanpa router', 'Lewat Bluetooth', 'Lewat LoRa gateway'], ans: 1, exp: 'ESP-NOW: peer-to-peer via MAC address, tanpa AP/router, sangat cepat & ringan.' },
      { q: 'Untuk sensor yang harus diakses dari smartphone, protokol paling cocok adalah…', opts: ['NRF24L01', 'LoRa', 'BLE', 'ESP-NOW'], ans: 2, exp: 'BLE didukung semua smartphone; NRF24L01/ESP-NOW butuh ESP penerima tambahan.' },
      { q: 'Jika SF LoRa dinaikkan dari 7 ke 12, yang terjadi adalah…', opts: ['Jangkauan turun, kecepatan naik', 'Jangkauan naik, kecepatan turun', 'Keduanya naik', 'Tidak ada pengaruh'], ans: 1, exp: 'SF tinggi → chirp lebih panjang → sensitif & jauh, tapi bitrate anjlok.' }
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/pv-system.png" alt="Sistem PLTS: panel surya, inverter, dan meter" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Sistem PLTS atap (on-grid): panel surya → inverter string → meter dua arah → jaringan PLN — kelebihan energi diekspor ke grid · sumber: Wikimedia Commons, <i>File:Photovoltaic system.jpg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/hydro-dam.png" alt="Diagram pembangkit listrik tenaga air" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Diagram skematis PLTA: air ditampung di reservoir (dam) → dialirkan melalui penstock → memutar turbin → generator mengubah energi mekanik ke listrik · sumber: Wikimedia Commons, <i>File:Hydroelectric dam.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/wind-turbine.png" alt="Turbin angin modern (Horizontal Axis Wind Turbine)" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Turbin angin HAWT (Horizontal Axis Wind Turbine) modern: rotor 3 bilah → poros → gearbox → generator di dalam nacelle — daya yang dihasilkan ∝ v³ (kecepatan angin kubik) · sumber: Wikimedia Commons, <i>File:Wind turbine.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/solar-inverter.jpg" alt="Inverter surya SMA Sunny Boy terpasang di dinding" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Inverter surya string (SMA Sunny Boy) — mengubah DC panel menjadi AC 220 V grid, dengan MPPT terintegrasi · sumber: Wikimedia Commons, <i>File:SMA Sunny Boy inverter.jpg</i> (CC BY-SA 3.0)</div></div>
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
<div class="mt-svg-wrap" title="Klik untuk memperbesar" onclick="openMateriImg(this.querySelector('svg'))">
  <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://web.resource.org/cc/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="491.571"
   height="190.22"
   id="svg2"
   sodipodi:version="0.32"
   inkscape:version="0.44.1"
   sodipodi:docname="series-parallel.svg"
   sodipodi:docbase="/home/estar/wikipedia">
  <metadata
     id="metadata331">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     inkscape:window-height="798"
     inkscape:window-width="1278"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     guidetolerance="10.0"
     gridtolerance="10.0"
     objecttolerance="10.0"
     borderopacity="1.0"
     bordercolor="#666666"
     pagecolor="#ffffff"
     id="base"
     inkscape:zoom="1.6376067"
     inkscape:cx="245.78551"
     inkscape:cy="95.110001"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:current-layer="svg2" />
  <defs
     id="defs4">
    <marker
       id="ArrowEnd"
       viewBox="0 0 10 10"
       refX="0"
       refY="5"
       markerUnits="strokeWidth"
       markerWidth="4"
       markerHeight="3"
       orient="auto">
      <path
         d="M 0 0 L 10 5 L 0 10 z"
         id="path7" />
    </marker>
    <marker
       id="ArrowStart"
       viewBox="0 0 10 10"
       refX="10"
       refY="5"
       markerUnits="strokeWidth"
       markerWidth="4"
       markerHeight="3"
       orient="auto">
      <path
         d="M 10 0 L 0 5 L 10 10 z"
         id="path10" />
    </marker>
  </defs>
  <g
     id="g12">
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 71.1098L 108.098 83.1098"
       id="path14" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 121.407 79.0628L 118.297 79.0628L 118.297 75.9538L 117.2 75.9538L 117.2 79.0628L 114.153 79.0628L 114.153 80.1608L 117.2 80.1608L 117.2 83.2578L 118.297 83.2578L 118.297 80.1608L 121.407 80.1608"
       id="path16" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 120.098 95.1098C 120.098 88.4848 114.727 83.1098 108.098 83.1098C 101.473 83.1098 96.0977 88.4808 96.0977 95.1098C 96.0977 101.735 101.469 107.11 108.098 107.11C 114.723 107.11 120.098 101.739 120.098 95.1098"
       id="path18" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 108.907 97.7618L 110.032 101.059L 111.59 101.059L 107.75 90.1608L 105.953 90.1608L 102.055 101.059L 103.539 101.059L 104.692 97.7618L 108.907 97.7618zM 108.516 96.5628L 105.039 96.5628L 106.836 91.6298"
       id="path20" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 119.11L 108.098 107.11"
       id="path22" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 114.086 115.462L 117.653 115.462L 117.653 114.364L 114.086 114.364L 114.086 115.462z"
       id="path24" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 141.61L 108.098 131.11"
       id="path26" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 168.61L 108.098 179.11"
       id="path28" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 141.61L 102.848 143.86L 113.348 148.36L 102.848 152.86L 113.348 157.36L 102.848 161.86L 113.348 166.36L 108.098 168.61"
       id="path30" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 21.6098L 108.098 11.1098"
       id="path32" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 48.6098L 108.098 59.1098"
       id="path34" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 21.6098L 102.848 23.8598L 113.348 28.3598L 102.848 32.8598L 113.348 37.3598L 102.848 41.8598L 113.348 46.3598L 108.098 48.6098"
       id="path36" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 157.407 139.063L 154.297 139.063L 154.297 135.954L 153.2 135.954L 153.2 139.063L 150.153 139.063L 150.153 140.161L 153.2 140.161L 153.2 143.258L 154.297 143.258L 154.297 140.161L 157.407 140.161"
       id="path38" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 156.098 155.11C 156.098 148.485 150.727 143.11 144.098 143.11C 137.473 143.11 132.098 148.481 132.098 155.11C 132.098 161.735 137.469 167.11 144.098 167.11C 150.723 167.11 156.098 161.739 156.098 155.11"
       id="path40" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 144.098 131.11L 144.098 143.11"
       id="path42" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 143.575 161.063L 147.368 150.165L 145.883 150.165L 142.856 159.383L 139.649 150.165L 138.149 150.165L 142.078 161.063"
       id="path44" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 144.098 179.11L 144.098 167.11"
       id="path46" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 150.086 175.461L 153.653 175.461L 153.653 174.364L 150.086 174.364L 150.086 175.461z"
       id="path48" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 157.407 19.0628L 154.297 19.0628L 154.297 15.9538L 153.2 15.9538L 153.2 19.0628L 150.153 19.0628L 150.153 20.1608L 153.2 20.1608L 153.2 23.2578L 154.297 23.2578L 154.297 20.1608L 157.407 20.1608"
       id="path50" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 156.098 35.1098C 156.098 28.4848 150.727 23.1098 144.098 23.1098C 137.473 23.1098 132.098 28.4808 132.098 35.1098C 132.098 41.7348 137.469 47.1098 144.098 47.1098C 150.723 47.1098 156.098 41.7388 156.098 35.1098"
       id="path52" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 144.098 11.1098L 144.098 23.1098"
       id="path54" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 143.575 41.0628L 147.368 30.1648L 145.883 30.1648L 142.856 39.3828L 139.649 30.1648L 138.149 30.1648L 142.078 41.0628"
       id="path56" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 144.098 59.1098L 144.098 47.1098"
       id="path58" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 150.086 55.4618L 153.653 55.4618L 153.653 54.3638L 150.086 54.3638L 150.086 55.4618z"
       id="path60" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 119.11L 108.098 131.11"
       id="path62" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 59.1098L 108.098 71.1098"
       id="path64" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 65.1098L 144.098 65.1098L 144.098 59.1098"
       id="path66" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 5.10983L 108.098 11.1098"
       id="path68" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 125.11L 144.098 125.11L 144.098 131.11"
       id="path70" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 108.098 179.11L 108.098 185.11"
       id="path72" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 66.7387 30.4618L 61.2457 30.4618L 60.4527 36.2148L 61.6567 36.2148C 62.2657 35.5078 62.7697 35.2618 63.5897 35.2618C 64.9997 35.2618 65.8947 36.2148 65.8947 37.7548C 65.8947 39.2468 65.0197 40.1568 63.5897 40.1568C 62.4457 40.1568 61.7457 39.5978 61.4337 38.4498L 60.1247 38.4498C 60.3047 39.3048 60.4527 39.7188 60.7697 40.1018C 61.3677 40.8988 62.4497 41.3558 63.6487 41.3558C 65.7927 41.3558 67.2927 39.8088 67.2927 37.5748C 67.2927 35.4888 65.8987 34.0588 63.8557 34.0588C 63.1057 34.0588 62.5077 34.2508 61.8907 34.6958L 62.3087 31.7578L 66.7347 31.7578"
       id="path74" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 71.9957 30.4618C 71.0037 30.4618 70.0977 30.9068 69.5387 31.6608C 68.8477 32.5788 68.4997 33.9888 68.4997 35.9298C 68.4997 39.4728 69.7027 41.3558 71.9997 41.3558C 74.2617 41.3558 75.4997 39.4728 75.4997 36.0198C 75.4997 33.9768 75.1677 32.6098 74.4567 31.6608C 73.9027 30.8948 73.0117 30.4618 71.9997 30.4618L 71.9957 30.4618zM 71.9957 31.6608C 73.3987 31.6608 74.0937 33.0788 74.0937 35.8908C 74.0937 38.8638 73.4137 40.2548 71.9647 40.2548C 70.5897 40.2548 69.8987 38.8048 69.8987 35.9338C 69.8987 33.0668 70.5897 31.6568 71.9957 31.6568"
       id="path76" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 80.3947 30.4618C 79.4027 30.4618 78.4957 30.9068 77.9377 31.6608C 77.2457 32.5788 76.8987 33.9888 76.8987 35.9298C 76.8987 39.4728 78.1017 41.3558 80.3987 41.3558C 82.6597 41.3558 83.8987 39.4728 83.8987 36.0198C 83.8987 33.9768 83.5667 32.6098 82.8557 31.6608C 82.3007 30.8948 81.4097 30.4618 80.3987 30.4618L 80.3947 30.4618zM 80.3947 31.6608C 81.7967 31.6608 82.4927 33.0788 82.4927 35.8908C 82.4927 38.8638 81.8127 40.2548 80.3637 40.2548C 78.9887 40.2548 78.2967 38.8048 78.2967 35.9338C 78.2967 33.0668 78.9887 31.6568 80.3947 31.6568"
       id="path78" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 89.4847 41.0628L 89.2147 38.7468C 88.0467 38.0898 87.2967 36.7578 87.2967 35.3558C 87.2967 34.5788 87.5197 33.6998 87.9067 32.9968C 88.4417 32.0278 89.3317 31.4728 90.3437 31.4728C 91.3517 31.4728 92.2457 32.0238 92.7817 32.9968C 93.1677 33.6958 93.3907 34.5788 93.3907 35.3558C 93.3907 36.7578 92.6597 38.0898 91.5157 38.7468L 91.2537 41.0628L 95.6327 41.0628L 95.6327 38.7698L 95.2737 38.7698C 95.1717 39.3948 94.8397 39.6648 94.2427 39.6648L 92.0547 39.6648L 92.0977 39.0978C 92.6177 38.9068 92.9257 38.7578 93.2857 38.5318C 94.4137 37.8008 95.0937 36.5938 95.0937 35.3088C 95.0937 34.3248 94.6597 33.2188 93.9417 32.3828C 93.0317 31.3398 91.7697 30.7698 90.3477 30.7698C 88.9257 30.7698 87.6677 31.3368 86.7537 32.3828C 86.0357 33.2188 85.6017 34.3208 85.6017 35.3088C 85.6017 36.5898 86.2927 37.8008 87.4417 38.5318C 87.7857 38.7548 88.1017 38.9028 88.6447 39.0978L 88.6877 39.6648L 86.4997 39.6648C 85.9027 39.6648 85.5707 39.3948 85.4687 38.7698L 85.1097 38.7698L 85.1097 41.0628"
       id="path80" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 166.598 158.563L 166.598 161.063L 167.895 161.063L 167.895 158.563L 169.493 158.563L 169.493 157.364L 167.895 157.364L 167.895 150.465L 166.926 150.465L 162.118 157.165L 162.118 158.559L 166.598 158.563zM 166.598 157.36L 163.274 157.36L 166.598 152.676"
       id="path82" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 171.297 161.063L 172.895 161.063L 172.895 159.465L 171.297 159.465L 171.297 161.063z"
       id="path84" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 181.34 150.462L 175.848 150.462L 175.055 156.215L 176.258 156.215C 176.868 155.508 177.371 155.262 178.192 155.262C 179.602 155.262 180.496 156.215 180.496 157.755C 180.496 159.247 179.621 160.157 178.192 160.157C 177.047 160.157 176.348 159.598 176.036 158.45L 174.727 158.45C 174.907 159.305 175.055 159.719 175.371 160.102C 175.969 160.899 177.051 161.356 178.25 161.356C 180.395 161.356 181.895 159.809 181.895 157.575C 181.895 155.489 180.5 154.059 178.457 154.059C 177.707 154.059 177.11 154.251 176.493 154.696L 176.91 151.758L 181.336 151.758"
       id="path86" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 188.375 161.063L 192.168 150.165L 190.684 150.165L 187.657 159.383L 184.45 150.165L 182.95 150.165L 186.879 161.063"
       id="path88" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 166.598 38.5628L 166.598 41.0628L 167.895 41.0628L 167.895 38.5628L 169.493 38.5628L 169.493 37.3638L 167.895 37.3638L 167.895 30.4648L 166.926 30.4648L 162.118 37.1648L 162.118 38.5588L 166.598 38.5628zM 166.598 37.3598L 163.274 37.3598L 166.598 32.6758"
       id="path90" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 171.297 41.0628L 172.895 41.0628L 172.895 39.4648L 171.297 39.4648L 171.297 41.0628z"
       id="path92" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 181.34 30.4618L 175.848 30.4618L 175.055 36.2148L 176.258 36.2148C 176.868 35.5078 177.371 35.2618 178.192 35.2618C 179.602 35.2618 180.496 36.2148 180.496 37.7548C 180.496 39.2468 179.621 40.1568 178.192 40.1568C 177.047 40.1568 176.348 39.5978 176.036 38.4498L 174.727 38.4498C 174.907 39.3048 175.055 39.7188 175.371 40.1018C 175.969 40.8988 177.051 41.3558 178.25 41.3558C 180.395 41.3558 181.895 39.8088 181.895 37.5748C 181.895 35.4888 180.5 34.0588 178.457 34.0588C 177.707 34.0588 177.11 34.2508 176.493 34.6958L 176.91 31.7578L 181.336 31.7578"
       id="path94" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 188.375 41.0628L 192.168 30.1648L 190.684 30.1648L 187.657 39.3828L 184.45 30.1648L 182.95 30.1648L 186.879 41.0628"
       id="path96" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 66.7387 150.462L 61.2457 150.462L 60.4527 156.215L 61.6567 156.215C 62.2657 155.508 62.7697 155.262 63.5897 155.262C 64.9997 155.262 65.8947 156.215 65.8947 157.755C 65.8947 159.247 65.0197 160.157 63.5897 160.157C 62.4457 160.157 61.7457 159.598 61.4337 158.45L 60.1247 158.45C 60.3047 159.305 60.4527 159.719 60.7697 160.102C 61.3677 160.899 62.4497 161.356 63.6487 161.356C 65.7927 161.356 67.2927 159.809 67.2927 157.575C 67.2927 155.489 65.8987 154.059 63.8557 154.059C 63.1057 154.059 62.5077 154.251 61.8907 154.696L 62.3087 151.758L 66.7347 151.758"
       id="path98" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 71.9957 150.462C 71.0037 150.462 70.0977 150.907 69.5387 151.661C 68.8477 152.579 68.4997 153.989 68.4997 155.93C 68.4997 159.473 69.7027 161.356 71.9997 161.356C 74.2617 161.356 75.4997 159.473 75.4997 156.02C 75.4997 153.977 75.1677 152.61 74.4567 151.661C 73.9027 150.895 73.0117 150.462 71.9997 150.462L 71.9957 150.462zM 71.9957 151.661C 73.3987 151.661 74.0937 153.079 74.0937 155.891C 74.0937 158.864 73.4137 160.254 71.9647 160.254C 70.5897 160.254 69.8987 158.805 69.8987 155.934C 69.8987 153.067 70.5897 151.657 71.9957 151.657"
       id="path100" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 80.3947 150.462C 79.4027 150.462 78.4957 150.907 77.9377 151.661C 77.2457 152.579 76.8987 153.989 76.8987 155.93C 76.8987 159.473 78.1017 161.356 80.3987 161.356C 82.6597 161.356 83.8987 159.473 83.8987 156.02C 83.8987 153.977 83.5667 152.61 82.8557 151.661C 82.3007 150.895 81.4097 150.462 80.3987 150.462L 80.3947 150.462zM 80.3947 151.661C 81.7967 151.661 82.4927 153.079 82.4927 155.891C 82.4927 158.864 81.8127 160.254 80.3637 160.254C 78.9887 160.254 78.2967 158.805 78.2967 155.934C 78.2967 153.067 78.9887 151.657 80.3947 151.657"
       id="path102" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 89.4847 161.063L 89.2147 158.747C 88.0467 158.09 87.2967 156.758 87.2967 155.356C 87.2967 154.579 87.5197 153.7 87.9067 152.997C 88.4417 152.028 89.3317 151.473 90.3437 151.473C 91.3517 151.473 92.2457 152.024 92.7817 152.997C 93.1677 153.696 93.3907 154.579 93.3907 155.356C 93.3907 156.758 92.6597 158.09 91.5157 158.747L 91.2537 161.063L 95.6327 161.063L 95.6327 158.77L 95.2737 158.77C 95.1717 159.395 94.8397 159.665 94.2427 159.665L 92.0547 159.665L 92.0977 159.098C 92.6177 158.907 92.9257 158.758 93.2857 158.532C 94.4137 157.801 95.0937 156.594 95.0937 155.309C 95.0937 154.325 94.6597 153.219 93.9417 152.383C 93.0317 151.34 91.7697 150.77 90.3477 150.77C 88.9257 150.77 87.6677 151.337 86.7537 152.383C 86.0357 153.219 85.6017 154.321 85.6017 155.309C 85.6017 156.59 86.2927 157.801 87.4417 158.532C 87.7857 158.755 88.1017 158.903 88.6447 159.098L 88.6877 159.665L 86.4997 159.665C 85.9027 159.665 85.5707 159.395 85.4687 158.77L 85.1097 158.77L 85.1097 161.063"
       id="path104" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 110.348 185.11C 110.348 183.868 109.344 182.86 108.098 182.86C 106.856 182.86 105.848 183.864 105.848 185.11C 105.848 186.352 106.852 187.36 108.098 187.36C 109.34 187.36 110.348 186.356 110.348 185.11"
       id="path106" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 110.348 125.11C 110.348 123.868 109.344 122.86 108.098 122.86C 106.856 122.86 105.848 123.864 105.848 125.11C 105.848 126.352 106.852 127.36 108.098 127.36C 109.34 127.36 110.348 126.356 110.348 125.11"
       id="path108" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 110.348 65.1098C 110.348 63.8678 109.344 62.8598 108.098 62.8598C 106.856 62.8598 105.848 63.8638 105.848 65.1098C 105.848 66.3518 106.852 67.3598 108.098 67.3598C 109.34 67.3598 110.348 66.3558 110.348 65.1098"
       id="path110" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 110.348 5.10983C 110.348 3.86783 109.344 2.85983 108.098 2.85983C 106.856 2.85983 105.848 3.86383 105.848 5.10983C 105.848 6.35184 106.852 7.35983 108.098 7.35983C 109.34 7.35983 110.348 6.35583 110.348 5.10983"
       id="path112" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 216.098 83.1098L 240.098 83.1098"
       id="path114" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 228.098 83.1098L 228.098 95.1098"
       id="path116" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 222.098 75.6098L 234.098 75.6098"
       id="path118" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 222.098 60.6098L 234.098 60.6098"
       id="path120" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 216.098 68.1098L 240.098 68.1098"
       id="path122" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 228.098 60.6098L 228.098 47.1098"
       id="path124" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 228.098 143.11L 228.098 131.11"
       id="path126" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 222.106 134.262L 218.996 134.262L 218.996 131.153L 217.899 131.153L 217.899 134.262L 214.852 134.262L 214.852 135.36L 217.899 135.36L 217.899 138.458L 218.996 138.458L 218.996 135.36L 222.106 135.36"
       id="path128" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 216.098 119.11C 216.098 125.735 221.469 131.11 228.098 131.11C 234.723 131.11 240.098 125.739 240.098 119.11C 240.098 112.485 234.727 107.11 228.098 107.11C 221.473 107.11 216.098 112.481 216.098 119.11"
       id="path130" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 231.407 120.762L 232.532 124.059L 234.09 124.059L 230.25 113.161L 228.453 113.161L 224.555 124.059L 226.039 124.059L 227.192 120.762L 231.407 120.762zM 231.016 119.563L 227.539 119.563L 229.336 114.63"
       id="path132" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 228.098 95.1098L 228.098 107.11"
       id="path134" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 218.485 96.2618L 222.051 96.2618L 222.051 95.1648L 218.485 95.1648L 218.485 96.2618z"
       id="path136" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 117.61L 288.098 107.11"
       id="path138" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 144.61L 288.098 155.11"
       id="path140" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 117.61L 282.848 119.86L 293.348 124.36L 282.848 128.86L 293.348 133.36L 282.848 137.86L 293.348 142.36L 288.098 144.61"
       id="path142" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 11.1098L 288.098 23.1098"
       id="path144" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 301.407 19.0628L 298.297 19.0628L 298.297 15.9538L 297.2 15.9538L 297.2 19.0628L 294.153 19.0628L 294.153 20.1608L 297.2 20.1608L 297.2 23.2578L 298.297 23.2578L 298.297 20.1608L 301.407 20.1608"
       id="path146" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 300.098 35.1098C 300.098 28.4848 294.727 23.1098 288.098 23.1098C 281.473 23.1098 276.098 28.4808 276.098 35.1098C 276.098 41.7348 281.469 47.1098 288.098 47.1098C 294.723 47.1098 300.098 41.7388 300.098 35.1098"
       id="path148" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 288.907 37.7618L 290.032 41.0588L 291.59 41.0588L 287.75 30.1608L 285.953 30.1608L 282.055 41.0588L 283.539 41.0588L 284.692 37.7618L 288.907 37.7618zM 288.516 36.5628L 285.039 36.5628L 286.836 31.6298"
       id="path150" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 59.1098L 288.098 47.1098"
       id="path152" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 294.086 55.4618L 297.653 55.4618L 297.653 54.3638L 294.086 54.3638L 294.086 55.4618z"
       id="path154" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 337.407 115.063L 334.297 115.063L 334.297 111.954L 333.2 111.954L 333.2 115.063L 330.153 115.063L 330.153 116.161L 333.2 116.161L 333.2 119.258L 334.297 119.258L 334.297 116.161L 337.407 116.161"
       id="path156" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 336.098 131.11C 336.098 124.485 330.727 119.11 324.098 119.11C 317.473 119.11 312.098 124.481 312.098 131.11C 312.098 137.735 317.469 143.11 324.098 143.11C 330.723 143.11 336.098 137.739 336.098 131.11"
       id="path158" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 324.098 107.11L 324.098 119.11"
       id="path160" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 323.575 137.063L 327.368 126.165L 325.883 126.165L 322.856 135.383L 319.649 126.165L 318.149 126.165L 322.078 137.063"
       id="path162" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 324.098 155.11L 324.098 143.11"
       id="path164" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 330.086 151.462L 333.653 151.462L 333.653 150.364L 330.086 150.364L 330.086 151.462z"
       id="path166" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 155.11L 288.098 161.11L 324.098 161.11L 324.098 155.11"
       id="path168" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 107.11L 288.098 101.11L 324.098 101.11L 324.098 107.11"
       id="path170" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 59.1098L 288.098 101.11"
       id="path172" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 290.348 161.11C 290.348 159.868 289.344 158.86 288.098 158.86C 286.856 158.86 285.848 159.864 285.848 161.11C 285.848 162.352 286.852 163.36 288.098 163.36C 289.34 163.36 290.348 162.356 290.348 161.11"
       id="path174" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 290.348 101.11C 290.348 99.8678 289.344 98.8598 288.098 98.8598C 286.856 98.8598 285.848 99.8638 285.848 101.11C 285.848 102.352 286.852 103.36 288.098 103.36C 289.34 103.36 290.348 102.356 290.348 101.11"
       id="path176" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 161.11L 288.098 185.11"
       id="path178" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 288.098 11.1098L 288.098 5.10983"
       id="path180" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 246.739 126.462L 241.246 126.462L 240.453 132.215L 241.657 132.215C 242.266 131.508 242.77 131.262 243.59 131.262C 245 131.262 245.895 132.215 245.895 133.755C 245.895 135.247 245.02 136.157 243.59 136.157C 242.446 136.157 241.746 135.598 241.434 134.45L 240.125 134.45C 240.305 135.305 240.453 135.719 240.77 136.102C 241.368 136.899 242.45 137.356 243.649 137.356C 245.793 137.356 247.293 135.809 247.293 133.575C 247.293 131.489 245.899 130.059 243.856 130.059C 243.106 130.059 242.508 130.251 241.891 130.696L 242.309 127.758L 246.735 127.758"
       id="path182" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 251.996 126.462C 251.004 126.462 250.098 126.907 249.539 127.661C 248.848 128.579 248.5 129.989 248.5 131.93C 248.5 135.473 249.703 137.356 252 137.356C 254.262 137.356 255.5 135.473 255.5 132.02C 255.5 129.977 255.168 128.61 254.457 127.661C 253.903 126.895 253.012 126.462 252 126.462L 251.996 126.462zM 251.996 127.661C 253.399 127.661 254.094 129.079 254.094 131.891C 254.094 134.864 253.414 136.255 251.965 136.255C 250.59 136.255 249.899 134.805 249.899 131.934C 249.899 129.067 250.59 127.657 251.996 127.657"
       id="path184" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 260.395 126.462C 259.403 126.462 258.496 126.907 257.938 127.661C 257.246 128.579 256.899 129.989 256.899 131.93C 256.899 135.473 258.102 137.356 260.399 137.356C 262.66 137.356 263.899 135.473 263.899 132.02C 263.899 129.977 263.567 128.61 262.856 127.661C 262.301 126.895 261.41 126.462 260.399 126.462L 260.395 126.462zM 260.395 127.661C 261.797 127.661 262.493 129.079 262.493 131.891C 262.493 134.864 261.813 136.255 260.364 136.255C 258.989 136.255 258.297 134.805 258.297 131.934C 258.297 129.067 258.989 127.657 260.395 127.657"
       id="path186" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 269.485 137.063L 269.215 134.747C 268.047 134.09 267.297 132.758 267.297 131.356C 267.297 130.579 267.52 129.7 267.907 128.997C 268.442 128.028 269.332 127.473 270.344 127.473C 271.352 127.473 272.246 128.024 272.782 128.997C 273.168 129.696 273.391 130.579 273.391 131.356C 273.391 132.758 272.66 134.09 271.516 134.747L 271.254 137.063L 275.633 137.063L 275.633 134.77L 275.274 134.77C 275.172 135.395 274.84 135.665 274.243 135.665L 272.055 135.665L 272.098 135.098C 272.618 134.907 272.926 134.758 273.286 134.532C 274.414 133.801 275.094 132.594 275.094 131.309C 275.094 130.325 274.66 129.219 273.942 128.383C 273.032 127.34 271.77 126.77 270.348 126.77C 268.926 126.77 267.668 127.337 266.754 128.383C 266.036 129.219 265.602 130.321 265.602 131.309C 265.602 132.59 266.293 133.801 267.442 134.532C 267.786 134.755 268.102 134.903 268.645 135.098L 268.688 135.665L 266.5 135.665C 265.903 135.665 265.571 135.395 265.469 134.77L 265.11 134.77L 265.11 137.063"
       id="path188" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 186.289 74.6328C 186.543 76.3438 187.676 77.3598 189.289 77.3598C 190.45 77.3598 191.512 76.7978 192.125 75.8558C 192.793 74.8328 193.094 73.5358 193.094 71.6138C 193.094 69.8438 192.825 68.7118 192.192 67.7738C 191.606 66.9258 190.672 66.4648 189.496 66.4648C 187.465 66.4648 186 67.9498 186 70.0198C 186 71.9808 187.348 73.3638 189.27 73.3638C 190.274 73.3638 191.008 73.0008 191.7 72.1648C 191.684 74.7348 190.856 76.1648 189.36 76.1648C 188.442 76.1648 187.805 75.6098 187.598 74.6368L 186.289 74.6328zM 189.52 67.6608C 190.754 67.6608 191.688 68.6488 191.688 69.9888C 191.688 71.2548 190.77 72.1568 189.473 72.1568C 188.196 72.1568 187.395 71.3008 187.395 69.9188C 187.395 68.6098 188.297 67.6608 189.516 67.6608"
       id="path190" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 199.778 77.0628L 203.571 66.1648L 202.086 66.1648L 199.059 75.3828L 195.852 66.1648L 194.352 66.1648L 198.282 77.0628"
       id="path192" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 126.289 98.6328C 126.543 100.344 127.676 101.36 129.289 101.36C 130.45 101.36 131.512 100.798 132.125 99.8558C 132.793 98.8328 133.094 97.5358 133.094 95.6138C 133.094 93.8438 132.825 92.7118 132.192 91.7738C 131.606 90.9258 130.672 90.4648 129.496 90.4648C 127.465 90.4648 126 91.9498 126 94.0198C 126 95.9808 127.348 97.3638 129.27 97.3638C 130.274 97.3638 131.008 97.0008 131.7 96.1648C 131.684 98.7348 130.856 100.165 129.36 100.165C 128.442 100.165 127.805 99.6098 127.598 98.6368L 126.289 98.6328zM 129.52 91.6608C 130.754 91.6608 131.688 92.6488 131.688 93.9888C 131.688 95.2548 130.77 96.1568 129.473 96.1568C 128.196 96.1568 127.395 95.3008 127.395 93.9188C 127.395 92.6098 128.297 91.6608 129.516 91.6608"
       id="path194" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 134.996 93.1608L 134.996 101.059L 136.196 101.059L 136.196 96.1218C 136.196 94.9808 137.02 94.0628 138.039 94.0628C 138.969 94.0628 139.493 94.6328 139.493 95.6408L 139.493 101.059L 140.692 101.059L 140.692 96.1218C 140.692 94.9808 141.539 94.0628 142.59 94.0628C 143.532 94.0628 144.09 94.6488 144.09 95.6408L 144.09 101.059L 145.289 101.059L 145.289 95.1568C 145.289 93.7468 144.485 92.9648 143.028 92.9648C 141.989 92.9648 141.364 93.2818 140.633 94.1798C 140.172 93.3328 139.547 92.9648 138.536 92.9648C 137.496 92.9648 136.809 93.3598 136.141 94.3128L 136.141 93.1648"
       id="path196" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 153.504 97.7618L 154.629 101.059L 156.188 101.059L 152.348 90.1608L 150.551 90.1608L 146.653 101.059L 148.137 101.059L 149.289 97.7618L 153.504 97.7618zM 153.118 96.5628L 149.641 96.5628L 151.438 91.6298"
       id="path198" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 342.289 134.633C 342.543 136.344 343.676 137.36 345.289 137.36C 346.45 137.36 347.512 136.798 348.125 135.856C 348.793 134.833 349.094 133.536 349.094 131.614C 349.094 129.844 348.825 128.712 348.192 127.774C 347.606 126.926 346.672 126.465 345.496 126.465C 343.465 126.465 342 127.95 342 130.02C 342 131.981 343.348 133.364 345.27 133.364C 346.274 133.364 347.008 133.001 347.7 132.165C 347.684 134.735 346.856 136.165 345.36 136.165C 344.442 136.165 343.805 135.61 343.598 134.637L 342.289 134.633zM 345.52 127.661C 346.754 127.661 347.688 128.649 347.688 129.989C 347.688 131.255 346.77 132.157 345.473 132.157C 344.196 132.157 343.395 131.301 343.395 129.919C 343.395 128.61 344.297 127.661 345.516 127.661"
       id="path200" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 355.778 137.063L 359.571 126.165L 358.086 126.165L 355.059 135.383L 351.852 126.165L 350.352 126.165L 354.282 137.063"
       id="path202" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 308.496 33.5118L 308.496 41.0588L 309.793 41.0588L 309.793 30.4618L 308.926 30.4618C 308.465 32.0898 308.164 32.3128 306.125 32.5668L 306.125 33.5078"
       id="path204" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 318.762 35.4648C 319.84 34.8128 320.196 34.2778 320.196 33.2778C 320.196 31.6258 318.891 30.4648 316.996 30.4648C 315.121 30.4648 313.797 31.6258 313.797 33.2778C 313.797 34.2578 314.164 34.7938 315.266 35.4648C 314.016 36.0438 313.399 36.9218 313.399 38.0828C 313.399 40.0158 314.879 41.3558 316.996 41.3558C 319.114 41.3558 320.594 40.0158 320.594 38.0978C 320.594 36.9218 319.993 36.0438 318.762 35.4648zM 316.996 31.6608C 318.094 31.6608 318.797 32.3088 318.797 33.3328C 318.797 34.3088 318.082 34.9578 316.996 34.9578C 315.914 34.9578 315.2 34.3088 315.2 33.3168C 315.2 32.3128 315.914 31.6608 316.996 31.6608zM 316.996 36.0628C 318.301 36.0628 319.196 36.8828 319.196 38.1058C 319.196 39.3368 318.305 40.1608 316.969 40.1608C 315.692 40.1608 314.801 39.3248 314.801 38.1058C 314.801 36.8868 315.692 36.0628 316.996 36.0628"
       id="path206" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 322.395 33.1608L 322.395 41.0588L 323.594 41.0588L 323.594 36.1218C 323.594 34.9808 324.418 34.0628 325.438 34.0628C 326.368 34.0628 326.891 34.6328 326.891 35.6408L 326.891 41.0588L 328.09 41.0588L 328.09 36.1218C 328.09 34.9808 328.938 34.0628 329.989 34.0628C 330.93 34.0628 331.489 34.6488 331.489 35.6408L 331.489 41.0588L 332.688 41.0588L 332.688 35.1568C 332.688 33.7468 331.883 32.9648 330.426 32.9648C 329.387 32.9648 328.762 33.2818 328.032 34.1798C 327.571 33.3328 326.946 32.9648 325.934 32.9648C 324.895 32.9648 324.207 33.3598 323.539 34.3128L 323.539 33.1648"
       id="path208" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 340.805 37.7618L 341.93 41.0588L 343.489 41.0588L 339.649 30.1608L 337.852 30.1608L 333.953 41.0588L 335.438 41.0588L 336.59 37.7618L 340.805 37.7618zM 340.414 36.5628L 336.938 36.5628L 338.735 31.6298"
       id="path210" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 144.098 179.11L 144.098 185.11L 48.0977 185.11L 48.0977 143.11"
       id="path212" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 48.0977 47.1098L 48.0977 5.10983L 144.098 5.10983L 144.098 11.1098"
       id="path214" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 36.0977 83.1098L 60.0977 83.1098"
       id="path216" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 48.0977 83.1098L 48.0977 95.1098"
       id="path218" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 42.0977 75.6098L 54.0977 75.6098"
       id="path220" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 42.0977 60.6098L 54.0977 60.6098"
       id="path222" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 36.0977 68.1098L 60.0977 68.1098"
       id="path224" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 48.0977 60.6098L 48.0977 47.1098"
       id="path226" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 48.0977 143.11L 48.0977 131.11"
       id="path228" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 42.1057 134.262L 38.9957 134.262L 38.9957 131.153L 37.8987 131.153L 37.8987 134.262L 34.8517 134.262L 34.8517 135.36L 37.8987 135.36L 37.8987 138.458L 38.9957 138.458L 38.9957 135.36L 42.1057 135.36"
       id="path230" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 36.0977 119.11C 36.0977 125.735 41.4687 131.11 48.0977 131.11C 54.7227 131.11 60.0977 125.739 60.0977 119.11C 60.0977 112.485 54.7267 107.11 48.0977 107.11C 41.4727 107.11 36.0977 112.481 36.0977 119.11"
       id="path232" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 51.4067 120.762L 52.5317 124.059L 54.0897 124.059L 50.2497 113.161L 48.4527 113.161L 44.5547 124.059L 46.0387 124.059L 47.1917 120.762L 51.4067 120.762zM 51.0157 119.563L 47.5387 119.563L 49.3357 114.63"
       id="path234" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 48.0977 95.1098L 48.0977 107.11"
       id="path236" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 38.4847 96.2618L 42.0507 96.2618L 42.0507 95.1648L 38.4847 95.1648L 38.4847 96.2618z"
       id="path238" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 6.2891 74.6328C 6.543 76.3438 7.6758 77.3598 9.2891 77.3598C 10.4493 77.3598 11.5118 76.7978 12.125 75.8558C 12.793 74.8328 13.0938 73.5358 13.0938 71.6138C 13.0938 69.8438 12.8243 68.7118 12.1915 67.7738C 11.6055 66.9258 10.6719 66.4648 9.4961 66.4648C 7.4649 66.4648 6 67.9498 6 70.0198C 6 71.9808 7.3477 73.3638 9.2696 73.3638C 10.2735 73.3638 11.0079 73.0008 11.6993 72.1648C 11.6836 74.7348 10.8555 76.1648 9.35941 76.1648C 8.44151 76.1648 7.8047 75.6098 7.5977 74.6368L 6.2891 74.6328zM 9.5196 67.6608C 10.7539 67.6608 11.6875 68.6488 11.6875 69.9888C 11.6875 71.2548 10.7696 72.1568 9.4727 72.1568C 8.1954 72.1568 7.3946 71.3008 7.3946 69.9188C 7.3946 68.6098 8.29691 67.6608 9.5157 67.6608"
       id="path240" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 19.7774 77.0628L 23.5704 66.1648L 22.086 66.1648L 19.0586 75.3828L 15.8516 66.1648L 14.3516 66.1648L 18.2813 77.0628"
       id="path242" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 0.289101 122.633C 0.542999 124.344 1.6758 125.36 3.2891 125.36C 4.4493 125.36 5.5118 124.798 6.125 123.856C 6.793 122.833 7.0938 121.536 7.0938 119.614C 7.0938 117.844 6.8243 116.712 6.19151 115.774C 5.6055 114.926 4.67191 114.465 3.4961 114.465C 1.4649 114.465 0 115.95 0 118.02C 0 119.981 1.3477 121.364 3.2696 121.364C 4.2735 121.364 5.0079 121.001 5.6993 120.165C 5.6836 122.735 4.8555 124.165 3.35941 124.165C 2.44151 124.165 1.8047 123.61 1.5977 122.637L 0.289101 122.633zM 3.5196 115.661C 4.7539 115.661 5.6875 116.649 5.6875 117.989C 5.6875 119.255 4.7696 120.157 3.4727 120.157C 2.1954 120.157 1.3946 119.301 1.3946 117.919C 1.3946 116.61 2.29691 115.661 3.5157 115.661"
       id="path244" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 8.9961 117.161L 8.9961 125.059L 10.1954 125.059L 10.1954 120.122C 10.1954 118.981 11.0196 118.063 12.0391 118.063C 12.9688 118.063 13.4922 118.633 13.4922 119.641L 13.4922 125.059L 14.6915 125.059L 14.6915 120.122C 14.6915 118.981 15.5391 118.063 16.5899 118.063C 17.5313 118.063 18.0899 118.649 18.0899 119.641L 18.0899 125.059L 19.2891 125.059L 19.2891 119.157C 19.2891 117.747 18.4844 116.965 17.0274 116.965C 15.9883 116.965 15.3633 117.282 14.6329 118.18C 14.1719 117.333 13.5469 116.965 12.5352 116.965C 11.4961 116.965 10.8086 117.36 10.1407 118.313L 10.1407 117.165"
       id="path246" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 27.5039 121.762L 28.6287 125.059L 30.1877 125.059L 26.3477 114.161L 24.5508 114.161L 20.6524 125.059L 22.1368 125.059L 23.2891 121.762L 27.5039 121.762zM 27.1172 120.563L 23.6407 120.563L 25.4375 115.63"
       id="path248" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 11.1098L 420.098 5.10983"
       id="path250" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 11.1098L 420.098 23.1098"
       id="path252" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 433.407 19.0628L 430.297 19.0628L 430.297 15.9538L 429.2 15.9538L 429.2 19.0628L 426.153 19.0628L 426.153 20.1608L 429.2 20.1608L 429.2 23.2578L 430.297 23.2578L 430.297 20.1608L 433.407 20.1608"
       id="path254" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 432.098 35.1098C 432.098 28.4848 426.727 23.1098 420.098 23.1098C 413.473 23.1098 408.098 28.4808 408.098 35.1098C 408.098 41.7348 413.469 47.1098 420.098 47.1098C 426.723 47.1098 432.098 41.7388 432.098 35.1098"
       id="path256" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 420.907 37.7618L 422.032 41.0588L 423.59 41.0588L 419.75 30.1608L 417.953 30.1608L 414.055 41.0588L 415.539 41.0588L 416.692 37.7618L 420.907 37.7618zM 420.516 36.5628L 417.039 36.5628L 418.836 31.6298"
       id="path258" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 59.1098L 420.098 47.1098"
       id="path260" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 426.086 55.4618L 429.653 55.4618L 429.653 54.3638L 426.086 54.3638L 426.086 55.4618z"
       id="path262" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 440.496 33.5118L 440.496 41.0588L 441.793 41.0588L 441.793 30.4618L 440.926 30.4618C 440.465 32.0898 440.164 32.3128 438.125 32.5668L 438.125 33.5078"
       id="path264" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 450.762 35.4648C 451.84 34.8128 452.196 34.2778 452.196 33.2778C 452.196 31.6258 450.891 30.4648 448.996 30.4648C 447.121 30.4648 445.797 31.6258 445.797 33.2778C 445.797 34.2578 446.164 34.7938 447.266 35.4648C 446.016 36.0438 445.399 36.9218 445.399 38.0828C 445.399 40.0158 446.879 41.3558 448.996 41.3558C 451.114 41.3558 452.594 40.0158 452.594 38.0978C 452.594 36.9218 451.993 36.0438 450.762 35.4648zM 448.996 31.6608C 450.094 31.6608 450.797 32.3088 450.797 33.3328C 450.797 34.3088 450.082 34.9578 448.996 34.9578C 447.914 34.9578 447.2 34.3088 447.2 33.3168C 447.2 32.3128 447.914 31.6608 448.996 31.6608zM 448.996 36.0628C 450.301 36.0628 451.196 36.8828 451.196 38.1058C 451.196 39.3368 450.305 40.1608 448.969 40.1608C 447.692 40.1608 446.801 39.3248 446.801 38.1058C 446.801 36.8868 447.692 36.0628 448.996 36.0628"
       id="path266" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 454.395 33.1608L 454.395 41.0588L 455.594 41.0588L 455.594 36.1218C 455.594 34.9808 456.418 34.0628 457.438 34.0628C 458.368 34.0628 458.891 34.6328 458.891 35.6408L 458.891 41.0588L 460.09 41.0588L 460.09 36.1218C 460.09 34.9808 460.938 34.0628 461.989 34.0628C 462.93 34.0628 463.489 34.6488 463.489 35.6408L 463.489 41.0588L 464.688 41.0588L 464.688 35.1568C 464.688 33.7468 463.883 32.9648 462.426 32.9648C 461.387 32.9648 460.762 33.2818 460.032 34.1798C 459.571 33.3328 458.946 32.9648 457.934 32.9648C 456.895 32.9648 456.207 33.3598 455.539 34.3128L 455.539 33.1648"
       id="path268" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 472.805 37.7618L 473.93 41.0588L 475.489 41.0588L 471.649 30.1608L 469.852 30.1608L 465.953 41.0588L 467.438 41.0588L 468.59 37.7618L 472.805 37.7618zM 472.414 36.5628L 468.938 36.5628L 470.735 31.6298"
       id="path270" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 59.1098L 420.098 101.11"
       id="path272" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 422.348 101.11C 422.348 99.8678 421.344 98.8598 420.098 98.8598C 418.856 98.8598 417.848 99.8638 417.848 101.11C 417.848 102.352 418.852 103.36 420.098 103.36C 421.34 103.36 422.348 102.356 422.348 101.11"
       id="path274" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 107.11L 420.098 101.11L 456.098 101.11L 456.098 107.11"
       id="path276" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 469.407 115.063L 466.297 115.063L 466.297 111.954L 465.2 111.954L 465.2 115.063L 462.153 115.063L 462.153 116.161L 465.2 116.161L 465.2 119.258L 466.297 119.258L 466.297 116.161L 469.407 116.161"
       id="path278" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 468.098 131.11C 468.098 124.485 462.727 119.11 456.098 119.11C 449.473 119.11 444.098 124.481 444.098 131.11C 444.098 137.735 449.469 143.11 456.098 143.11C 462.723 143.11 468.098 137.739 468.098 131.11"
       id="path280" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 456.098 107.11L 456.098 119.11"
       id="path282" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 455.575 137.063L 459.368 126.165L 457.883 126.165L 454.856 135.383L 451.649 126.165L 450.149 126.165L 454.078 137.063"
       id="path284" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 456.098 155.11L 456.098 143.11"
       id="path286" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 462.086 151.462L 465.653 151.462L 465.653 150.364L 462.086 150.364L 462.086 151.462z"
       id="path288" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 117.61L 420.098 107.11"
       id="path290" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 144.61L 420.098 155.11"
       id="path292" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 117.61L 414.848 119.86L 425.348 124.36L 414.848 128.86L 425.348 133.36L 414.848 137.86L 425.348 142.36L 420.098 144.61"
       id="path294" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 378.739 126.462L 373.246 126.462L 372.453 132.215L 373.657 132.215C 374.266 131.508 374.77 131.262 375.59 131.262C 377 131.262 377.895 132.215 377.895 133.755C 377.895 135.247 377.02 136.157 375.59 136.157C 374.446 136.157 373.746 135.598 373.434 134.45L 372.125 134.45C 372.305 135.305 372.453 135.719 372.77 136.102C 373.368 136.899 374.45 137.356 375.649 137.356C 377.793 137.356 379.293 135.809 379.293 133.575C 379.293 131.489 377.899 130.059 375.856 130.059C 375.106 130.059 374.508 130.251 373.891 130.696L 374.309 127.758L 378.735 127.758"
       id="path296" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 383.996 126.462C 383.004 126.462 382.098 126.907 381.539 127.661C 380.848 128.579 380.5 129.989 380.5 131.93C 380.5 135.473 381.703 137.356 384 137.356C 386.262 137.356 387.5 135.473 387.5 132.02C 387.5 129.977 387.168 128.61 386.457 127.661C 385.903 126.895 385.012 126.462 384 126.462L 383.996 126.462zM 383.996 127.661C 385.399 127.661 386.094 129.079 386.094 131.891C 386.094 134.864 385.414 136.255 383.965 136.255C 382.59 136.255 381.899 134.805 381.899 131.934C 381.899 129.067 382.59 127.657 383.996 127.657"
       id="path298" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 392.395 126.462C 391.403 126.462 390.496 126.907 389.938 127.661C 389.246 128.579 388.899 129.989 388.899 131.93C 388.899 135.473 390.102 137.356 392.399 137.356C 394.66 137.356 395.899 135.473 395.899 132.02C 395.899 129.977 395.567 128.61 394.856 127.661C 394.301 126.895 393.41 126.462 392.399 126.462L 392.395 126.462zM 392.395 127.661C 393.797 127.661 394.493 129.079 394.493 131.891C 394.493 134.864 393.813 136.255 392.364 136.255C 390.989 136.255 390.297 134.805 390.297 131.934C 390.297 129.067 390.989 127.657 392.395 127.657"
       id="path300" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 401.485 137.063L 401.215 134.747C 400.047 134.09 399.297 132.758 399.297 131.356C 399.297 130.579 399.52 129.7 399.907 128.997C 400.442 128.028 401.332 127.473 402.344 127.473C 403.352 127.473 404.246 128.024 404.782 128.997C 405.168 129.696 405.391 130.579 405.391 131.356C 405.391 132.758 404.66 134.09 403.516 134.747L 403.254 137.063L 407.633 137.063L 407.633 134.77L 407.274 134.77C 407.172 135.395 406.84 135.665 406.243 135.665L 404.055 135.665L 404.098 135.098C 404.618 134.907 404.926 134.758 405.286 134.532C 406.414 133.801 407.094 132.594 407.094 131.309C 407.094 130.325 406.66 129.219 405.942 128.383C 405.032 127.34 403.77 126.77 402.348 126.77C 400.926 126.77 399.668 127.337 398.754 128.383C 398.036 129.219 397.602 130.321 397.602 131.309C 397.602 132.59 398.293 133.801 399.442 134.532C 399.786 134.755 400.102 134.903 400.645 135.098L 400.688 135.665L 398.5 135.665C 397.903 135.665 397.571 135.395 397.469 134.77L 397.11 134.77L 397.11 137.063"
       id="path302" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 161.11L 420.098 185.11"
       id="path304" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 155.11L 420.098 161.11L 456.098 161.11L 456.098 155.11"
       id="path306" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 422.348 161.11C 422.348 159.868 421.344 158.86 420.098 158.86C 418.856 158.86 417.848 159.864 417.848 161.11C 417.848 162.352 418.852 163.36 420.098 163.36C 421.34 163.36 422.348 162.356 422.348 161.11"
       id="path308" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 474.289 134.633C 474.543 136.344 475.676 137.36 477.289 137.36C 478.45 137.36 479.512 136.798 480.125 135.856C 480.793 134.833 481.094 133.536 481.094 131.614C 481.094 129.844 480.825 128.712 480.192 127.774C 479.606 126.926 478.672 126.465 477.496 126.465C 475.465 126.465 474 127.95 474 130.02C 474 131.981 475.348 133.364 477.27 133.364C 478.274 133.364 479.008 133.001 479.7 132.165C 479.684 134.735 478.856 136.165 477.36 136.165C 476.442 136.165 475.805 135.61 475.598 134.637L 474.289 134.633zM 477.52 127.661C 478.754 127.661 479.688 128.649 479.688 129.989C 479.688 131.255 478.77 132.157 477.473 132.157C 476.196 132.157 475.395 131.301 475.395 129.919C 475.395 128.61 476.297 127.661 477.516 127.661"
       id="path310" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 487.778 137.063L 491.571 126.165L 490.086 126.165L 487.059 135.383L 483.852 126.165L 482.352 126.165L 486.282 137.063"
       id="path312" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 420.098 5.10983L 228.098 5.10983L 228.098 47.1098"
       id="path314" />
    <path
       style="stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none"
       d="M 228.098 143.11L 228.098 185.11L 420.098 185.11"
       id="path316" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 290.348 5.10983C 290.348 3.86783 289.344 2.85983 288.098 2.85983C 286.856 2.85983 285.848 3.86383 285.848 5.10983C 285.848 6.35184 286.852 7.35983 288.098 7.35983C 289.34 7.35983 290.348 6.35583 290.348 5.10983"
       id="path318" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 290.348 185.11C 290.348 183.868 289.344 182.86 288.098 182.86C 286.856 182.86 285.848 183.864 285.848 185.11C 285.848 186.352 286.852 187.36 288.098 187.36C 289.34 187.36 290.348 186.356 290.348 185.11"
       id="path320" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 176.91 120.161L 177.618 120.161C 179.051 120.161 179.789 120.809 179.789 122.063C 179.789 123.376 178.973 124.157 177.602 124.157C 176.172 124.157 175.473 123.462 175.383 121.969L 174.075 121.969C 174.133 122.813 174.282 123.36 174.539 123.833C 175.078 124.837 176.129 125.356 177.586 125.356C 179.778 125.356 181.192 124.063 181.192 122.067C 181.192 120.727 180.664 119.985 179.383 119.551C 180.387 119.165 180.891 118.422 180.891 117.364C 180.891 115.551 179.672 114.462 177.637 114.462C 175.485 114.462 174.34 115.618 174.293 117.86L 175.59 117.86C 175.602 117.239 175.664 116.891 175.828 116.575C 176.125 116.012 176.786 115.665 177.61 115.665C 178.778 115.665 179.485 116.337 179.485 117.438C 179.485 118.169 179.219 118.61 178.641 118.844C 178.286 118.989 177.825 119.048 176.907 119.063"
       id="path322" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 189.465 117.161C 189.215 115.469 188.082 114.462 186.477 114.462C 185.317 114.462 184.278 115.028 183.653 115.965C 183 116.989 182.703 118.286 182.703 120.208C 182.703 121.977 182.969 123.11 183.594 124.048C 184.157 124.895 185.082 125.356 186.243 125.356C 188.25 125.356 189.696 123.872 189.696 121.805C 189.696 119.844 188.348 118.462 186.442 118.462C 185.395 118.462 184.567 118.868 184 119.661C 184.012 117.09 184.852 115.661 186.368 115.661C 187.293 115.661 187.938 116.208 188.149 117.161L 189.465 117.161zM 186.246 119.661C 187.504 119.661 188.293 120.52 188.293 121.911C 188.293 123.208 187.403 124.161 186.203 124.161C 184.989 124.161 184.067 123.169 184.067 121.84C 184.067 120.555 184.953 119.665 186.246 119.665"
       id="path324" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 191.395 117.161L 191.395 125.059L 192.594 125.059L 192.594 120.122C 192.594 118.981 193.418 118.063 194.438 118.063C 195.368 118.063 195.891 118.633 195.891 119.641L 195.891 125.059L 197.09 125.059L 197.09 120.122C 197.09 118.981 197.938 118.063 198.989 118.063C 199.93 118.063 200.489 118.649 200.489 119.641L 200.489 125.059L 201.688 125.059L 201.688 119.157C 201.688 117.747 200.883 116.965 199.426 116.965C 198.387 116.965 197.762 117.282 197.032 118.18C 196.571 117.333 195.946 116.965 194.934 116.965C 193.895 116.965 193.207 117.36 192.539 118.313L 192.539 117.165"
       id="path326" />
    <path
       style="stroke:none; fill-rule:evenodd; fill:#000000"
       d="M 209.907 121.762L 211.032 125.059L 212.59 125.059L 208.75 114.161L 206.953 114.161L 203.055 125.059L 204.539 125.059L 205.692 121.762L 209.907 121.762zM 209.516 120.563L 206.039 120.563L 207.836 115.63"
       id="path328" />
  </g>
</svg>

  <div class="mt-svg-cap">Rangkaian seri (kiri): komponen berurutan, arus sama di semua titik — rangkaian paralel (kanan): komponen bercabang, tegangan sama di tiap cabang · sumber: Wikimedia Commons, <i>File:Series and parallel circuits.svg</i> (CC BY-SA 3.0, Xyzzyva)</div>
</div>
<h4>Langkah praktik mengukur tegangan</h4>
<ol>
<li>Putar selector ke <strong>V⎓ (DC)</strong> untuk baterai/rangkaian DC, atau <strong>V~ (AC)</strong> untuk PLN/trafo.</li>
<li>Pastikan probe merah di jack <strong>VΩ</strong>, probe hitam di <strong>COM</strong>.</li>
<li>Sentuhkan probe <strong>menjembatani</strong> dua titik komponen (misal dua kaki resistor) — rangkaian boleh tetap menyala.</li>
<li>Baca hasil. Tanda minus hanya berarti polaritas terbalik — tidak berbahaya pada DMM.</li>
</ol>
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/voltmeter-parallel-circuit.png" alt="Voltmeter paralel pada rangkaian seri" onclick="openMateriImg(this)" loading="lazy"><div class="mt-img-cap">Tiga voltmeter dipasang paralel pada rangkaian seri dua lampu — tiap voltmeter menjembatani satu komponen · sumber: Wikimedia Commons, Paulgwilliamson (CC BY-SA 4.0)</div></div>
<div class="mt-tip">💡 <strong>Di rangkaian seri</strong>, jumlah tegangan tiap komponen = tegangan sumber (\\(V_1 + V_2 = V_{sumber}\\)). <strong>Di rangkaian paralel</strong>, semua cabang memiliki tegangan sama dengan sumber. Gunakan fakta ini untuk mengecek hasil ukurmu.</div>
<div class="mt-svg-wrap" title="Klik untuk memperbesar" onclick="openMateriImg(this.querySelector('svg'))">
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    id="svg6200"
    viewBox="0 0 4301.7 2055.1"
    sodipodi:docname="_svgclean2.svg"
    version="1.1"
    inkscape:version="0.48.3.1 r9886"
  >
  <defs
      id="defs6202"
    >
    <filter
        id="filter5708"
        color-interpolation-filters="sRGB"
        inkscape:collect="always"
      >
      <feGaussianBlur
          id="feGaussianBlur5710"
          stdDeviation="28.132071"
          inkscape:collect="always"
      />
    </filter
    >
    <linearGradient
        id="linearGradient5712"
      >
      <stop
          id="stop5714"
          style="stop-color:#cccccc"
          offset="0"
      />
      <stop
          id="stop5716"
          style="stop-color:#ffffff;stop-opacity:0"
          offset=".12299"
      />
      <stop
          id="stop5718"
          style="stop-color:#999999;stop-opacity:.63813"
          offset="1"
      />
    </linearGradient
    >
    <linearGradient
        id="linearGradient6990"
        y2="276.99"
        xlink:href="#linearGradient5712"
        gradientUnits="userSpaceOnUse"
        x2="298.11"
        gradientTransform="translate(-266.78 858.86)"
        y1="-906.91"
        x1="-914.59"
        inkscape:collect="always"
    />
    <linearGradient
        id="linearGradient7109"
        y2="276.99"
        xlink:href="#linearGradient5712"
        gradientUnits="userSpaceOnUse"
        x2="298.11"
        gradientTransform="translate(1979.8 858.86)"
        y1="-906.91"
        x1="-914.59"
        inkscape:collect="always"
    />
  </defs
  >
  <sodipodi:namedview
      id="base"
      fit-margin-left="0"
      inkscape:snap-center="true"
      inkscape:zoom="0.12374369"
      borderopacity="1.0"
      inkscape:current-layer="layer1"
      inkscape:cx="3555.3266"
      inkscape:cy="1534.2593"
      inkscape:object-paths="true"
      inkscape:window-maximized="0"
      showgrid="false"
      fit-margin-right="0"
      showguides="true"
      bordercolor="#666666"
      inkscape:window-x="0"
      inkscape:guide-bbox="true"
      inkscape:window-y="0"
      fit-margin-bottom="0"
      inkscape:window-width="512"
      inkscape:pageopacity="0.0"
      inkscape:pageshadow="2"
      pagecolor="#ffffff"
      inkscape:snap-object-midpoints="true"
      inkscape:document-units="px"
      inkscape:window-height="452"
      fit-margin-top="0"
  />
  <g
      id="layer1"
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      transform="translate(1430.8 352.34)"
    >
    <rect
        id="rect5399"
        style="fill:#000000"
        rx="129.3"
        ry="129.3"
        height="2055.1"
        width="2055.1"
        y="-352.34"
        x="815.73"
    />
    <rect
        id="rect5401"
        style="fill:#333333"
        rx="90.728"
        ry="90.728"
        height="1962.4"
        width="1962.4"
        y="-305.98"
        x="862.09"
    />
    <rect
        id="rect5403"
        style="fill:#000000"
        rx="70.525"
        ry="70.525"
        height="1909.9"
        width="1909.9"
        y="-279.72"
        x="888.35"
    />
    <rect
        id="rect5405"
        style="fill:#333333"
        rx="22.5"
        ry="22.5"
        height="45"
        width="97.857"
        y="802.65"
        x="2621.9"
    />
    <path
        id="path5407"
        sodipodi:nodetypes="sssssssssss"
        style="fill:#333333"
        inkscape:connector-curvature="0"
        d="m1140.5-149.32c-67.467 0-121.78 54.312-121.78 121.78v1405.5c0 67.467 54.312 121.78 121.78 121.78h680.32c29.662 0 47.115-4.0298 64.849-21.729l755.79-754.27c23.851-23.803 26.352-40.896 26.352-72.473v-678.83c0-67.467-54.312-121.78-121.78-121.78z"
    />
    <path
        id="path5409"
        d="m2038.4 1279.8 438.57-428.57h-444.29z"
        style="fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5411"
        sodipodi:nodetypes="cssccscc"
        style="fill:#808080"
        inkscape:connector-curvature="0"
        d="m2190.5 1112.3h-59.643c-9.9944 0-16.516-15.836-26.429-18.148l-44.464-10.37v-30.463l44.464-10.37c9.9128-2.3119 16.434-18.148 26.429-18.148h59.643"
    />
    <path
        id="path5413"
        d="m2205.5 1048.4-48.571-54.286 33.571-33.571 54.286 54.286"
        style="fill:#e6e6e6"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5415"
        d="m2114.8 1205.5-37.143-36.429 11.428-12.857 30.714 6.4286 54.286-54.286c-6.7697-14.828-2.7536-22.791 11.429-24.286-18.934-68.674 49.856-114.43 102.86-90l60.714-60-12.143-30 11.429-10 41.428 35"
        sodipodi:nodetypes="ccccccccccc"
        style="fill:#cccccc"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5417"
        style="fill:#e1e1d1"
        inkscape:connector-curvature="0"
        d="m1156-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.979 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.03-746.03c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.979-53.114-119.09-119.09-119.09h-1374.5zm1096.6 1000.2h189.31l-387.34 382.16v-178.94c0-107.21 90.807-203.22 198.03-203.22z"
    />
    <path
        id="path5647"
        style="opacity:.85774;filter:url(#filter5708);fill:#000000"
        inkscape:connector-curvature="0"
        d="m-823.78 1579.8c-65.979 0-119.09 53.114-119.09 119.09v1374.5c0 51.168 31.947 94.61 77.062 111.53-1.8213-8.3056-2.7812-16.944-2.7812-25.813v-1374.5c0-65.979 53.114-119.09 119.09-119.09h1374.5c14.812 0 28.972 2.6957 42.031 7.5938-11.729-53.488-59.201-93.312-116.31-93.312h-1374.5z"
        transform="matrix(1.037 0 0 1.037 1984.9 -1799.2)"
    />
    <path
        id="path5419"
        d="m2252.1-20.888a3.5004 3.5004 0 0 0 -3.0938 3.5312v120a3.5004 3.5004 0 1 0 7 0v-120a3.5004 3.5004 0 0 0 -3.9062 -3.5312z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5421"
        d="m1190.6 836.17a3.5004 3.5004 0 0 0 -0.4062 6.9375l117.28 25.312a3.5004 3.5004 0 1 0 1.4688 -6.8438l-117.28-25.312a3.5004 3.5004 0 0 0 -1.0625 -0.094z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5423"
        d="m1441.2 342.92a3.5004 3.5004 0 0 0 -2.0625 6.1562l89.594 79.781a3.5004 3.5004 0 1 0 4.6562 -5.2188l-89.594-79.812a3.5004 3.5004 0 0 0 -2.5938 -0.9062z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5425"
        d="m1876.6 46.143a3.5004 3.5004 0 0 0 -3.0313 4.75l41.5 112.59a3.5004 3.5004 0 1 0 6.5625 -2.4063l-41.5-112.59a3.5004 3.5004 0 0 0 -3.5312 -2.3438z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5427"
        d="m2192.8-19.263a3.5004 3.5004 0 0 0 -3.25 3.75l3.0312 55.312a3.505 3.505 0 1 0 7 -0.375l-3.0312-55.344a3.5004 3.5004 0 0 0 -3.75 -3.3437z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5429"
        d="m2114.4-12.107a3.5004 3.5004 0 0 0 -3.3125 4l7.0313 54.969a3.5137 3.5137 0 1 0 6.9687 -0.9063l-7.0625-54.937a3.5004 3.5004 0 0 0 -3.625 -3.125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5431"
        d="m2042.9-0.48153a3.5004 3.5004 0 0 0 -3.4063 4.2188l10.688 54.375a3.5025 3.5025 0 1 0 6.875 -1.3438l-10.7-54.374a3.5004 3.5004 0 0 0 -3.4687 -2.875z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5433"
        d="m1967 17.237a3.5004 3.5004 0 0 0 -3.0625 4.4687l14.531 53.438a3.5096 3.5096 0 1 0 6.7812 -1.8125l-14.562-53.469a3.5004 3.5004 0 0 0 -3.6875 -2.625z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5435"
        d="m1791.7 81.612a3.5004 3.5004 0 0 0 -2.9687 5.0312l23.5 50.188a3.5004 3.5004 0 1 0 6.3125 -2.9687l-23.469-50.188a3.5004 3.5004 0 0 0 -3.375 -2.0625z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5437"
        d="m1681.8 141.02a3.5004 3.5004 0 0 0 -2.7188 5.375l29.094 47.156a3.508 3.508 0 1 0 5.9687 -3.6875l-29.125-47.125a3.5004 3.5004 0 0 0 -3.2187 -1.7188z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5439"
        d="m1589.5 204.77a3.5004 3.5004 0 0 0 -2.5 5.6563l33.812 43.906a3.5096 3.5096 0 1 0 5.5625 -4.2812l-33.812-43.906a3.5004 3.5004 0 0 0 -3.0625 -1.375z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5441"
        d="m1515.5 267.24a3.5004 3.5004 0 0 0 -2.3125 5.9062l37.562 40.688a3.5053 3.5053 0 1 0 5.1562 -4.75l-37.594-40.688a3.5004 3.5004 0 0 0 -2.8125 -1.1562z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5443"
        d="m1376.1 423.46a3.5004 3.5004 0 0 0 -1.8437 6.3438l44.688 32.75a3.5004 3.5004 0 1 0 4.125 -5.6563l-44.688-32.719a3.5004 3.5004 0 0 0 -2.2813 -0.7188z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5445"
        d="m1308 528.58a3.5004 3.5004 0 0 0 -1.4375 6.5625l48.156 27.375a3.5059 3.5059 0 1 0 3.4687 -6.0937l-48.156-27.375a3.5004 3.5004 0 0 0 -2.0313 -0.4688z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5447"
        d="m1257.6 628.96a3.5004 3.5004 0 0 0 -1.0937 6.7188l50.719 22.25a3.5004 3.5004 0 1 0 2.8125 -6.4063l-50.719-22.25a3.5004 3.5004 0 0 0 -1.7188 -0.3125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5449"
        d="m1213.6 747.39a3.5004 3.5004 0 0 0 -0.6875 6.8438l52.969 16.219a3.5004 3.5004 0 1 0 2.0625 -6.6875l-52.969-16.219a3.5004 3.5004 0 0 0 -1.375 -0.1563z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5451"
        d="m1175.9 920.21a3.5004 3.5004 0 0 0 -0.2187 6.9688l54.906 7.4062a3.5004 3.5004 0 1 0 0.9375 -6.9375l-54.906-7.4062a3.5004 3.5004 0 0 0 -0.7188 -0.031zm79.625 10.75a3.5004 3.5004 0 0 0 -0.2187 6.9688l4.4687 0.5937a3.5004 3.5004 0 1 0 0.9375 -6.9375l-4.4687-0.5937a3.5004 3.5004 0 0 0 -0.7188 -0.031z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5453"
        d="m1583.2 440.49a4.0004 4.0004 0 0 0 -2.9063 1.3437l-14.625 16.688a4.0004 4.0004 0 1 0 6 5.2813l7.625-8.6875v76.25a4.0004 4.0004 0 1 0 8 0v-86.875a4.0004 4.0004 0 0 0 -4.0937 -4z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5455"
        d="m1634.8 440.49c-15.018 0-27.219 12.2-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.724 0 19.25 8.4942 19.25 19.219v40.406c0 10.724-8.5255 19.25-19.25 19.25-10.725 0-19.219-8.5255-19.219-19.25v-40.406c0-10.724 8.4942-19.219 19.219-19.219z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5457"
        d="m1707.1 440.49c-15.018 0-27.219 12.2-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.724-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5255-19.219-19.25v-40.406c0-10.724 8.4942-19.219 19.219-19.219z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5459"
        d="m2261.9 156.64c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.2-27.219-27.219-27.219zm0 8c10.724 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25s-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5254-19.219 19.25-19.219z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5461"
        d="m2334.1 156.64c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.201-27.219-27.219-27.219zm0 8c10.725 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25-10.724 0-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5255-19.219 19.25-19.219z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5463"
        d="m2183.5 156.61c-14.558 0-26.594 11.436-26.594 25.656a4.0004 4.0004 0 1 0 8 0c0-9.7079 8.1784-17.656 18.594-17.656 10.415 0 18.625 7.9483 18.625 17.656 0 3.4188-0.3012 6.2394-1.9688 9.125-1.6675 2.8857-4.8983 6.1281-11.656 9.5625-15.36 7.8058-30.328 23.228-32.812 46.125a4.0004 4.0004 0 0 0 3.9687 4.4375h45.969a4.0004 4.0004 0 1 0 0 -8h-41.219c3.4596-17.376 15.261-29.122 27.688-35.438 7.6556-3.8905 12.332-8.1255 14.969-12.688 2.6363-4.5619 3.0625-9.1977 3.0625-13.125 0-14.22-12.067-25.656-26.625-25.656z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5465"
        d="m1860 235.42a4.0004 4.0004 0 0 0 -2.9062 1.3437l-14.625 16.688a4.0004 4.0004 0 1 0 6 5.2813l7.6562-8.7188v76.281a4.0004 4.0004 0 1 0 8 0v-86.875a4.0004 4.0004 0 0 0 -4.125 -4z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5467"
        d="m1983.8 235.42c-15.018 0-27.219 12.2-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.724 0 19.25 8.4942 19.25 19.219v40.406c0 10.724-8.5255 19.25-19.25 19.25-10.725 0-19.219-8.5255-19.219-19.25v-40.406c0-10.724 8.4942-19.219 19.219-19.219z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5469"
        d="m1889.9 235.39a4.0004 4.0004 0 0 0 -4 4v37.25a4.0004 4.0004 0 0 0 7.375 2.125c2.999-4.7533 11.204-8.0625 18.344-8.0625 10.688 0 19.25 8.6481 19.25 19.625v12.344c0 10.977-8.5616 19.625-19.25 19.625-7.2062 0-15.114-4.3265-18.219-9.875a4.0081 4.0081 0 1 0 -7 3.9062c4.876 8.7155 15.069 13.969 25.219 13.969 15.054 0 27.25-12.426 27.25-27.625v-12.344c0-15.199-12.196-27.625-27.25-27.625-5.9926 0-12.456 1.4612-17.719 4.6875v-24h35.406a4.0004 4.0004 0 1 0 0 -8h-39.406z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5471"
        d="m1470.7 824.33c-15.018 0-27.219 12.232-27.219 27.25v40.406c0 15.018 12.201 27.219 27.219 27.219s27.25-12.201 27.25-27.219v-40.406c0-15.018-12.232-27.25-27.25-27.25zm0 8c10.725 0 19.25 8.5255 19.25 19.25v40.406c0 10.724-8.5254 19.219-19.25 19.219-10.724 0-19.219-8.4942-19.219-19.219v-40.406c0-10.724 8.4942-19.25 19.219-19.25z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5473"
        d="m1376.3 824.33a4.0004 4.0004 0 0 0 -3.5938 4v37.219a4.0004 4.0004 0 0 0 7.375 2.1562c2.999-4.7533 11.204-8.0625 18.344-8.0625 10.688 0 19.25 8.6481 19.25 19.625v12.312c0 10.977-8.5616 19.625-19.25 19.625-7.2063 0-15.114-4.3265-18.219-9.875a4.0081 4.0081 0 1 0 -7 3.9063c4.8761 8.7155 15.069 13.969 25.219 13.969 15.054 0 27.25-12.426 27.25-27.625v-12.312c0-15.199-12.196-27.625-27.25-27.625-5.9927 0-12.456 1.4612-17.719 4.6875v-24h35.406a4.0004 4.0004 0 1 0 0 -8h-39.406a4.0004 4.0004 0 0 0 -0.4062 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5475"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m1284.7 72.831-1.1875 5.5313-30.312 141.13h13.719l7-31.844h46.156l8.5312 31.844h13.531l-36.938-141.47-1.375-5.1875h-5.375-8.0938-5.6562zm10.031 20.062 21.594 80.75h-39.344l17.75-80.75z"
    />
    <path
        id="path5477"
        d="m1146.3 900.96c-8.4837 0-15.375 6.8914-15.375 15.375v22.844c0 8.4836 6.8913 15.375 15.375 15.375 8.4836 0 15.406-6.8914 15.406-15.375v-22.844c0-8.4836-6.9226-15.375-15.406-15.375zm0 4.5c6.0685 0 10.906 4.8065 10.906 10.875v22.844c0 6.0685-4.8377 10.875-10.906 10.875-6.0685 0-10.875-4.8065-10.875-10.875v-22.844c0-6.0685 4.8065-10.875 10.875-10.875z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5479"
        d="m1115.6 900.96a2.2502 2.2502 0 0 0 -1.5938 1.0313l-22.156 34.875a2.2502 2.2502 0 0 0 1.9062 3.4375h19.875v12a2.2502 2.2502 0 1 0 4.5 0v-12h1.3438a2.2502 2.2502 0 1 0 0 -4.5h-1.3438v-32.594a2.2502 2.2502 0 0 0 -2.5312 -2.25zm-1.9688 9.9688v24.875h-15.781l15.781-24.875z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5481"
        d="m1284.9 1200.5a2.5002 2.5002 0 0 0 -1.8125 0.8438l-7.8125 8.9062a2.5018 2.5018 0 1 0 3.75 3.3125l3.4375-3.9062v39.781a2.5002 2.5002 0 1 0 5 0v-46.438a2.5002 2.5002 0 0 0 -2.5625 -2.5z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5483"
        d="m1306.7 1200.5a2.5002 2.5002 0 0 0 -2.25 2.5v19.906a2.5002 2.5002 0 0 0 4.625 1.3125c1.5017-2.3802 5.7817-4.125 9.5-4.125 5.5171 0 9.9062 4.4471 9.9062 10.125v6.5937c0 5.6779-4.3891 10.125-9.9062 10.125-3.7197 0-7.858-2.2704-9.4375-5.0937a2.5041 2.5041 0 1 0 -4.375 2.4375c2.6869 4.8026 8.253 7.6562 13.812 7.6562 8.2458 0 14.906-6.8081 14.906-15.125v-6.5937c0-8.3169-6.6604-15.125-14.906-15.125-3.0809 0-6.3424 0.7822-9.125 2.3437v-11.938h18.562a2.5002 2.5002 0 1 0 0 -5h-21.062a2.5002 2.5002 0 0 0 -0.25 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5485"
        style="fill:#000000"
        inkscape:connector-curvature="0"
        d="m1297.5 1245.5c-2.2316 0-4.0625 1.8309-4.0625 4.0625 0 1.973 1.4112 3.5834 3.2812 3.9375-0.352 1.6422-0.8243 3.5675-1.625 6.4063 3.379-3.3497 5.078-6.1448 6.0625-8.6875 0.013-0.033 0.05-0.061 0.062-0.094v-0.031c0.1971-0.476 0.3125-0.9841 0.3125-1.5313 0-2.2316-1.7996-4.0625-4.0312-4.0625z"
    />
    <path
        id="path5487"
        d="m1197.6 1211.8c-5.4507 0.026-10.966 1.9221-16 6.6562a2.5092 2.5092 0 1 0 3.4375 3.6563c5.6656-5.3286 10.954-6.1333 16.938-4.875 5.9835 1.2583 12.504 4.8898 19.125 8.7187 6.6209 3.8289 13.346 7.8504 20.312 9.5313 6.9667 1.6808 14.393 0.7108 20.875-5.2813a2.51 2.51 0 1 0 -3.4063 -3.6875c-5.3695 4.9637-10.436 5.5429-16.312 4.125-5.8769-1.4179-12.328-5.1594-18.969-9-6.6411-3.8405-13.471-7.7833-20.594-9.2812-1.7807-0.3745-3.5893-0.5714-5.4062-0.5625z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5489"
        d="m1365.1 1188.7a2.5002 2.5002 0 0 0 -2.4688 2.5313v55.594a2.5002 2.5002 0 1 0 5 0v-55.594a2.5002 2.5002 0 0 0 -2.5312 -2.5313z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5491"
        d="m1406.1 1187a2.5002 2.5002 0 0 0 -0.6562 0.1563l-54 19.156a2.5002 2.5002 0 0 0 0 4.7188l18.5 6.5-18.5 6.5625a2.5002 2.5002 0 0 0 0 4.7187l18.469 6.5313-18.469 6.5312a2.5002 2.5002 0 0 0 0 4.7188l54 19.156a2.5002 2.5002 0 1 0 1.6875 -4.6875l-47.375-16.812 18.469-6.5312a2.5002 2.5002 0 0 0 0 -4.7188l-18.469-6.5625 18.469-6.5625a2.5002 2.5002 0 0 0 0 -4.6875l-18.469-6.5312 47.375-16.781a2.5002 2.5002 0 0 0 -1.0313 -4.875z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5493"
        sodipodi:rx="6.5068183"
        sodipodi:ry="6.5068183"
        style="fill:#000000"
        sodipodi:type="arc"
        d="m-568.08 330.9c0 3.5936-2.9132 6.5068-6.5068 6.5068s-6.5068-2.9132-6.5068-6.5068 2.9132-6.5068 6.5068-6.5068 6.5068 2.9132 6.5068 6.5068z"
        transform="matrix(.59248 0 0 .59248 1746.3 993.55)"
        sodipodi:cy="330.90106"
        sodipodi:cx="-574.59137"
    />
    <path
        id="path5495"
        sodipodi:rx="6.5068183"
        sodipodi:ry="6.5068183"
        style="fill:#000000"
        sodipodi:type="arc"
        d="m-568.08 330.9c0 3.5936-2.9132 6.5068-6.5068 6.5068s-6.5068-2.9132-6.5068-6.5068 2.9132-6.5068 6.5068-6.5068 6.5068 2.9132 6.5068 6.5068z"
        transform="matrix(.59248 0 0 .59248 1746.3 1067.2)"
        sodipodi:cy="330.90106"
        sodipodi:cx="-574.59137"
    />
    <path
        id="path5497"
        d="m1467.3 1185.7a2.5002 2.5002 0 0 0 -1.784 1.1002l-14.719 21.974-25.423 7.2256a2.5002 2.5002 0 0 0 -1.2785 3.9547l16.354 20.784-0.9515 26.434a2.5002 2.5002 0 0 0 3.36 2.4085l24.799-9.0988 24.828 9.0691a2.5002 2.5002 0 0 0 3.36 -2.4382l-1.011-26.404 16.295-20.814a2.5002 2.5002 0 0 0 -1.2786 -3.9547l-25.423-7.2255-14.748-21.914a2.5002 2.5002 0 0 0 -2.3788 -1.1002zm0.2974 6.9877 13.202 19.595a2.5002 2.5002 0 0 0 1.3975 1.011l22.717 6.4524-14.57 18.584a2.5002 2.5002 0 0 0 -0.5352 1.6354l0.892 23.609-22.182-8.0878a2.5002 2.5002 0 0 0 -1.7247 0l-22.182 8.1473 0.8623-23.639a2.5002 2.5002 0 0 0 -0.5352 -1.6354l-14.57-18.554 22.688-6.4822a2.5002 2.5002 0 0 0 1.3976 -1.0109l13.143-19.625z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5499"
        d="m1467.3 1217.5c-4.8518 0-8.8125 3.9608-8.8125 8.8125a2.1387 2.1387 0 1 0 4.25 0c0-2.5403 2.0222-4.5312 4.5625-4.5312s4.5625 1.9909 4.5625 4.5312c0 0.6956-0.176 1.0804-0.9063 1.9688-0.7302 0.8884-1.9841 2.0898-3.4062 3.8125l-9.3438 11.312a2.1387 2.1387 0 0 0 1.6563 3.5h15.406a2.1406 2.1406 0 0 0 0 -4.2813h-10.875l6.4375-7.8125c1.2475-1.5111 2.4037-2.5927 3.4063-3.8125s1.9062-2.8108 1.9062-4.6875c0-4.8517-3.992-8.8125-8.8437-8.8125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5501"
        d="m1522.5 1207.9a2.5002 2.5002 0 0 0 -2.5 2.5v39.656a2.5002 2.5002 0 1 0 5 0v-37.156h14.156a2.5002 2.5002 0 1 0 0 -5h-16.656z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5503"
        d="m1522.5 1224.9a2.5031 2.5031 0 1 0 0.25 5h8.5937c4.954 0 8.8438 3.8897 8.8438 8.8437s-3.8898 8.875-8.8438 8.875h-8.5937a2.5002 2.5002 0 1 0 0 5h8.5937c7.6376 0 13.844-6.2375 13.844-13.875s-6.2062-13.844-13.844-13.844h-8.5937a2.5002 2.5002 0 0 0 -0.25 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5505"
        d="m1574.5 1194.1a2.1387 2.1387 0 0 0 -2.125 2.1875v68.688a2.1406 2.1406 0 0 0 4.2812 0v-68.688a2.1387 2.1387 0 0 0 -2.1562 -2.1875z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5507"
        d="m1545.4 1263a2.5031 2.5031 0 1 0 0.25 5h57.594a2.5002 2.5002 0 1 0 0 -5h-57.594a2.5002 2.5002 0 0 0 -0.25 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5509"
        d="m1283.8 1300a2.2502 2.2502 0 0 0 -2.0313 2.25v26.875a2.2502 2.2502 0 1 0 4.5 0v-24.625h8.375a2.2502 2.2502 0 1 0 0 -4.5h-10.625a2.2502 2.2502 0 0 0 -0.2187 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5511"
        d="m1308.4 1300c-5.8944 0-10.719 4.8243-10.719 10.719v9.9688c0 5.8944 4.8243 10.688 10.719 10.688 5.8945 0 10.719-4.7931 10.719-10.688v-9.9688c0-5.8944-4.8243-10.719-10.719-10.719zm0 4.5c3.4793 0 6.2188 2.7394 6.2188 6.2187v9.9688c0 3.4792-2.7395 6.1875-6.2188 6.1875-3.4792 0-6.2187-2.7083-6.2187-6.1875v-9.9688c0-3.4793 2.7395-6.2187 6.2187-6.2187z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5513"
        d="m1330.6 1300c-5.8944 0-10.719 4.8243-10.719 10.719v9.9688c0 5.8944 4.8244 10.688 10.719 10.688 4.9632 0 9.1791-3.3836 10.375-8a2.2502 2.2502 0 1 0 -4.3438 -1.125c-0.6916 2.6699-3.1016 4.625-6.0312 4.625-3.4793 0-6.2188-2.7083-6.2188-6.1875v-9.9688c0-3.4793 2.7395-6.2187 6.2188-6.2187 2.9269 0 5.3058 1.9588 6 4.625a2.2587 2.2587 0 1 0 4.375 -1.125c-1.2003-4.61-5.4164-8-10.375-8z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5515"
        d="m1351.7 1300a2.2502 2.2502 0 0 0 -2 2.2813v26.875a2.2502 2.2502 0 1 0 4.5 0v-26.875a2.2502 2.2502 0 0 0 -2.5 -2.2813z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5517"
        d="m1344.9 1300a2.2527 2.2527 0 0 0 0.2188 4.5h13.812a2.2502 2.2502 0 1 0 0 -4.5h-13.812a2.2502 2.2502 0 0 0 -0.2188 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5519"
        d="m1385.8 1300c-4.4239 0-8.0625 3.6386-8.0625 8.0625s3.6386 8.0625 8.0625 8.0625 8.0625-3.6386 8.0625-8.0625-3.6386-8.0625-8.0625-8.0625zm0 4.5c1.9919 0 3.5625 1.5706 3.5625 3.5625s-1.5706 3.5625-3.5625 3.5625-3.5625-1.5706-3.5625-3.5625 1.5706-3.5625 3.5625-3.5625z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5521"
        d="m1385.8 1311.5c-5.4699 0-9.9456 4.4758-9.9456 9.9457s4.4757 9.9456 9.9456 9.9456 9.9457-4.4757 9.9457-9.9456-4.4758-9.9457-9.9457-9.9457zm0 4.4756c3.0379 0 5.4701 2.4321 5.4701 5.4701 0 3.0379-2.4322 5.4701-5.4701 5.4701s-5.4701-2.4322-5.4701-5.4701c0-3.038 2.4322-5.4701 5.4701-5.4701z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5523"
        d="m1400.2 1300a2.2535 2.2535 0 1 0 0.25 4.5h7.9063c-3.3387 6.572-6.0518 14.717-8.3438 24.094a2.2511 2.2511 0 1 0 4.375 1.0625c2.6399-10.8 5.7905-19.938 9.5938-26.25a2.2502 2.2502 0 0 0 -1.9375 -3.4062h-11.594a2.2502 2.2502 0 0 0 -0.25 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5525"
        d="m1429.1 1300a2.2502 2.2502 0 0 0 -1.75 0.9062l-4.6875 6.25a2.2502 2.2502 0 1 0 3.5937 2.6875l0.6563-0.875v20.156a2.2502 2.2502 0 1 0 4.5 0v-26.875a2.2502 2.2502 0 0 0 -2.3125 -2.25z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5527"
        d="m1444.9 1300a2.2502 2.2502 0 0 0 -1.7187 0.9062l-4.6875 6.25a2.2502 2.2502 0 1 0 3.5937 2.6875l0.625-0.8437v20.125a2.2502 2.2502 0 1 0 4.5 0v-26.875a2.2502 2.2502 0 0 0 -2.3125 -2.25z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5529"
        d="m1502.4 1300c-5.8944 0-10.719 4.8243-10.719 10.719v9.9688c0 5.8944 4.8243 10.688 10.719 10.688 5.8945 0 10.719-4.7931 10.719-10.688v-9.9688c0-5.8944-4.8243-10.719-10.719-10.719zm0 4.5c3.4793 0 6.2188 2.7394 6.2188 6.2187v9.9688c0 3.4792-2.7395 6.1875-6.2188 6.1875-3.4792 0-6.2187-2.7083-6.2187-6.1875v-9.9688c0-3.4793 2.7395-6.2187 6.2187-6.2187z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5531"
        d="m1480.7 1311.5c-5.4699 0-9.9456 4.4758-9.9456 9.9457s4.4757 9.9456 9.9456 9.9456 9.9457-4.4757 9.9457-9.9456-4.4758-9.9457-9.9457-9.9457zm0 4.4756c3.038 0 5.4701 2.4321 5.4701 5.4701 0 3.0379-2.4321 5.4701-5.4701 5.4701-3.0379 0-5.4701-2.4322-5.4701-5.4701 0-3.038 2.4322-5.4701 5.4701-5.4701z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5533"
        d="m1480.6 1300c-5.4699 0-9.9375 4.4676-9.9375 9.9375v11.5a2.2502 2.2502 0 1 0 4.5 0v-11.5c0-3.038 2.3996-5.4375 5.4375-5.4375 2.1957 0 4.1748 1.2907 5.0312 3.3125a2.2548 2.2548 0 1 0 4.1563 -1.75c-1.5564-3.6743-5.1973-6.0625-9.1875-6.0625z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5535"
        d="m1453.1 1312.7a2.2527 2.2527 0 1 0 0.2187 4.5h11.625a2.2502 2.2502 0 1 0 0 -4.5h-11.625a2.2502 2.2502 0 0 0 -0.2187 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5537"
        d="m2411 246.77c-6.7857 0-12.69 3.8407-15.594 9.5a2.5002 2.5002 0 1 0 4.4375 2.2813c2.0712-4.0372 6.2544-6.7813 11.156-6.7813 6.9826 0 12.531 5.5486 12.531 12.531v21.344c0 6.9827-5.5486 12.531-12.531 12.531-4.4774 0-8.3428-2.2744-10.562-5.75a2.501 2.501 0 0 0 -4.2188 2.6875c3.1089 4.8679 8.5832 8.0625 14.781 8.0625 9.6662 0 17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.865-17.531-17.531-17.531z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5539"
        d="m2488 246.77c-9.6662 0-17.5 7.8651-17.5 17.531v21.344c0 9.6662 7.8338 17.531 17.5 17.531s17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.865-17.531-17.531-17.531zm0 5c6.9826 0 12.531 5.5486 12.531 12.531v21.344c0 6.9827-5.5486 12.531-12.531 12.531-6.9827 0-12.5-5.5486-12.5-12.531v-21.344c0-6.9827 5.5173-12.531 12.5-12.531z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5541"
        d="m2436.6 246.77a2.5031 2.5031 0 1 0 0.25 5h18.156l-12.375 17.5a2.5002 2.5002 0 0 0 2.3438 3.9375c5.7215-0.6861 9.0208 0.5421 11.188 2.4375 2.1667 1.8954 3.3312 4.7379 3.7812 7.7188 0.4713 3.1214-0.2841 6.6266-1.9062 9.4062s-4.0115 4.745-6.7188 5.25c-4.4749 0.8348-10.174-1.6848-12.25-5.8437a2.5016 2.5016 0 1 0 -4.4687 2.25c3.2375 6.4873 10.824 9.7687 17.625 8.5 4.4334-0.8271 7.9332-3.8692 10.125-7.625s3.1945-8.2945 2.5312-12.688c-0.5668-3.7544-2.0648-7.7958-5.4062-10.719-2.4107-2.1088-5.7373-3.477-9.9063-3.7812l12.312-17.406a2.5002 2.5002 0 0 0 -2.0625 -3.9375h-22.969a2.5002 2.5002 0 0 0 -0.25 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5543"
        d="m2411.9 272.49a2.5031 2.5031 0 1 0 0.25 5h13.125a2.5002 2.5002 0 1 0 0 -5h-13.125a2.5002 2.5002 0 0 0 -0.25 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5545"
        d="m2394 654.11a3.5004 3.5004 0 0 0 -3 1.9062l-22 41.875-75.406 87.469a3.5014 3.5014 0 1 0 5.3125 4.5625l75.688-87.844a3.5004 3.5004 0 0 0 0.4687 -0.6562l22.125-42.156a3.5004 3.5004 0 0 0 -3.1875 -5.1562z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5547"
        d="m2296 773.83c-7.7494 0-14.125 6.3444-14.125 14.094 0 7.7494 6.3756 14.125 14.125 14.125s14.094-6.3756 14.094-14.125a3.5004 3.5004 0 1 0 -7 0c0 3.9663-3.1274 7.125-7.0938 7.125-3.9663 0-7.125-3.1587-7.125-7.125 0-3.9664 3.1587-7.0938 7.125-7.0938h0.2813a3.5035 3.5035 0 1 0 0.3125 -7c-0.1998-0.01-0.3938 0-0.5938 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5549"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#b3b3b3"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="translate(1979.8 863.15)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path5551"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#808080"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="matrix(.78601 0 0 .78601 2078.5 815.96)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path5553"
        style="fill:#cccccc"
        inkscape:connector-curvature="0"
        d="m2434.9 600.96c-20.3 3.0394-35.875 20.541-35.875 41.688s15.575 38.679 35.875 41.719v-83.406zm12.625 0.031v83.344c20.284-3.0534 35.844-20.552 35.844-41.688 0-21.135-15.56-38.603-35.844-41.656z"
    />
    <path
        id="path5555"
        d="m1978.1 1124c-1.0098 0.01-2.0071 0.4765-2.6563 1.25l-75.719 87.844c-0.1719 0.2111-0.3191 0.4423-0.4375 0.6875l-34.121 26.143c-0.8508 1.6281-0.1436 3.8835 1.4844 4.7344 1.6281 0.8508 3.8836 0.1437 4.7344-1.4844l33.902-25.768 75.469-87.594c0.8866-1.0076 1.1136-2.5465 0.5558-3.7671-0.5578-1.2207-1.87-2.0563-3.212-2.0454z"
        sodipodi:nodetypes="cccccscccsc"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5557"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#c5c5bf"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="matrix(-1 0 0 -1 2294.5 1052.1)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path5559"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#808080"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="matrix(-.78601 0 0 -.78601 2195.8 1099.2)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path5561"
        style="fill:#cccccc"
        inkscape:connector-curvature="0"
        d="m1839.4 1314.3c20.3-3.0393 35.875-20.541 35.875-41.688s-15.575-38.679-35.875-41.719v83.406zm-12.625-0.031v-83.344c-20.284 3.0534-35.844 20.552-35.844 41.688 0 21.135 15.56 38.603 35.844 41.656z"
    />
    <path
        id="path5563"
        d="m1362.2 1016.8c-15.897 0.3833-31.436 11.172-29.375 26.719-11.861 6.4736-21.624 10.824-30.812 14.625l-131.06 6.8125c-7.4668 0.3881-7.4716 7.2054 0 7.5938l131.06 6.8125c9.1883 3.8008 18.952 8.1514 30.812 14.625-2.0607 15.547 13.478 26.335 29.375 26.719 16.923 0.4081 34.237-10.955 31.219-40.844l0.4687-10.594h0.062l-0.031-0.5312 0.031-0.5h-0.062l-0.4687-10.594c3.0183-29.889-14.296-41.252-31.219-40.844zm3.3125 9.75c12.519-0.2149 21.747 13.657 13.281 26.562l-24.25-22.75c3.7087-2.5966 7.4633-3.7524 10.969-3.8125zm13.281 57.844c8.4657 12.906-0.762 26.777-13.281 26.562-3.5054-0.06-7.26-1.2159-10.969-3.8125z"
        sodipodi:nodetypes="sccssccscccccccssccscscc"
        style="fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5565"
        d="m1362.6 1074.3 620 3.3437 38.75-8.6562h1.9687l-0.9687-0.2188 0.9687-0.2187h-1.9687l-38.75-8.6875-620 3.375c-2.6796 0.015-11.438 1.2963-11.438 5.5312s8.7579 5.5168 11.438 5.5313z"
        sodipodi:nodetypes="scccccccsas"
        style="fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5567"
        d="m2378.5 363.18 2.4664 1.2855 71.607 37.323 2.4387 1.2711 2.4386-1.2711 71.607-37.323 2.4664-1.2855-2.4387-1.2711-71.607-37.323-2.4663-1.2855-2.4664 1.2855-71.607 37.323-2.4387 1.2711zm9.81 0 66.702-34.766 66.73 34.78-66.702 34.766-66.73-34.78z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5569"
        d="m2441.6 345.71-2.2813 1.375-11.406 6.9688-0.7188 0.4375v0.8437 4.4688h3v-3.625l8.4063-5.125v9.5312l-3.5938 3.8125-0.9375 1.0313 0.9375 1.0312 3.5938 3.8125v9.5313l-8.4063-5.125v-3.625h-3v4.4687 0.8438l0.7188 0.4375 11.406 6.9687 2.2813 1.375v-2.6562-12.812-0.5938l-0.4063-0.4375-3.0312-3.2187 3.0312-3.25 0.4063-0.4375v-0.5938-12.781-2.6563z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5571"
        d="m2448 339.42v48.594h3v-48.594h-3zm11.062 0v48.594h3v-48.594h-3z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5573"
        d="m2459.1 351.33-11.062 24.469 2.7187 1.2187 11.094-24.469-2.75-1.2188z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5575"
        d="m2467.6 342.36v2.625 37.5h3v-34.906l8 4.5938v22.969h3v-23.812-0.875l-0.75-0.4375-11-6.3437-2.25-1.3125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5577"
        d="m2457.8 434.39c-4.2082 0-7.5312 3.6568-7.5312 8a1.5002 1.5002 0 1 0 3 0c0-2.8367 2.068-5 4.5312-5 2.4633 0 4.5313 2.1633 4.5313 5 0 1.0173-0.081 1.842-0.5 2.6563-0.4189 0.8142-1.2183 1.7195-2.9688 2.7187-4.2189 2.4083-8.2687 7.1391-8.9375 14.062a1.5002 1.5002 0 0 0 1.5 1.625h12.281a1.5002 1.5002 0 1 0 0 -3h-10.406c1.0027-4.9299 3.9358-8.3089 7.0625-10.094 2.1001-1.1988 3.4255-2.517 4.1563-3.9375s0.8125-2.8442 0.8125-4.0313c0-4.3432-3.3231-8-7.5313-8z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5579"
        d="m2403.5 434.42a1.5002 1.5002 0 0 0 -0.9375 0.5l-4.2813 5a1.5067 1.5067 0 0 0 2.2813 1.9687l1.625-1.9062v21.969a1.5002 1.5002 0 1 0 3 0v-26.031a1.5002 1.5002 0 0 0 -1.6875 -1.5z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5581"
        d="m2477.6 434.42a1.5002 1.5002 0 0 0 -1.2188 1.5v11.156a1.5002 1.5002 0 0 0 2.7813 0.8125c0.8305-1.2895 3.2566-2.2812 5.375-2.2812 3.1378 0 5.625 2.446 5.625 5.5625v3.7187c0 3.1165-2.4872 5.5625-5.625 5.5625-2.1156 0-4.4635-1.271-5.3438-2.8125a1.5002 1.5002 0 1 0 -2.5937 1.5c1.5623 2.7359 4.7405 4.3125 7.9375 4.3125 4.7417 0 8.625-3.8296 8.625-8.5625v-3.7187c0-4.7329-3.8833-8.5625-8.625-8.5625-1.7417 0-3.5689 0.4289-5.1563 1.2812v-6.4687h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.2812 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5583"
        d="m2516 434.42a1.5002 1.5002 0 0 0 -1.0625 0.625l-12.656 18.5a1.5002 1.5002 0 0 0 1.2187 2.3437h11.188v6.0625a1.5002 1.5002 0 1 0 3 0v-6.0625h0.5313a1.5002 1.5002 0 1 0 0 -3h-0.5313v-16.969a1.5002 1.5002 0 0 0 -1.6875 -1.5zm-1.3125 6.3125v12.156h-8.3125l8.3125-12.156z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5585"
        d="m2373.5 434.42a1.5002 1.5002 0 0 0 -1.1875 1.5v11.156a1.5002 1.5002 0 0 0 2.75 0.8125c0.8305-1.2895 3.2879-2.2812 5.4063-2.2812 3.1378 0 5.5937 2.446 5.5937 5.5625v3.7187c0 3.1165-2.4559 5.5625-5.5937 5.5625-2.1156 0-4.4948-1.271-5.375-2.8125a1.5002 1.5002 0 1 0 -2.5938 1.5c1.5624 2.7359 4.7718 4.3125 7.9688 4.3125 4.7417 0 8.5937-3.8296 8.5937-8.5625v-3.7187c0-4.7329-3.852-8.5625-8.5937-8.5625-1.7311 0-3.5751 0.4086-5.1563 1.25v-6.4375h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.3125 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5587"
        d="m2429.5 434.42a1.5002 1.5002 0 0 0 -0.9375 0.5l-4.2812 5a1.5067 1.5067 0 1 0 2.2812 1.9687l1.625-1.9062v21.969a1.5002 1.5002 0 1 0 3 0v-26.031a1.5002 1.5002 0 0 0 -1.6875 -1.5z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5589"
        d="m2412.3 490.67a1.5002 1.5002 0 0 0 -1.1875 0.625l-4.4688 6.0625a1.5002 1.5002 0 1 0 2.4063 1.7812l1.7812-2.4062v21.5a1.5002 1.5002 0 1 0 3 0v-26.062a1.5002 1.5002 0 0 0 -1.5312 -1.5z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5591"
        d="m2450 501.82c-4.9217 0-8.9329 4.0208-8.9329 8.9543s4.0112 8.9543 8.9329 8.9543 8.9329-4.0208 8.9329-8.9543-4.0112-8.9543-8.9329-8.9543zm0 3.0115c3.3023 0 5.9285 2.6326 5.9285 5.9428 0 3.3103-2.6262 5.983-5.9285 5.983s-5.9285-2.6727-5.9285-5.983c0-3.3102 2.6262-5.9428 5.9285-5.9428z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5593"
        d="m2450 490.67c-4.9246 0-8.9375 4.0381-8.9375 8.9687v11.125a1.5002 1.5002 0 1 0 3 0v-11.125c0-3.3131 2.6382-5.9687 5.9375-5.9687 2.3902 0 4.5664 1.4467 5.5 3.6562a1.5002 1.5002 0 1 0 2.75 -1.1875c-1.3985-3.3097-4.6605-5.4687-8.25-5.4687z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5595"
        d="m2427.1 508.61c4.9217 0 8.9329-4.0208 8.9329-8.9543s-4.0112-8.9544-8.9329-8.9544-8.9329 4.0209-8.9329 8.9544 4.0112 8.9543 8.9329 8.9543zm0-3.0115c-3.3023 0-5.9285-2.6326-5.9285-5.9428 0-3.3103 2.6262-5.983 5.9285-5.983s5.9285 2.6727 5.9285 5.983c0 3.3102-2.6262 5.9428-5.9285 5.9428z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5597"
        d="m2434.6 498.11a1.5002 1.5002 0 0 0 -1.5 1.5312v11.125c0 3.3132-2.6381 5.9688-5.9375 5.9688-2.3902 0-4.5351-1.4155-5.4688-3.625a1.506 1.506 0 1 0 -2.7812 1.1562c1.3986 3.3097 4.6606 5.4688 8.25 5.4688 4.9246 0 8.9375-4.0382 8.9375-8.9688v-11.125a1.5002 1.5002 0 0 0 -1.5 -1.5312z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5599"
        d="m2465.8 490.49a1.5002 1.5002 0 0 0 -1.375 1.5v11.156a1.5002 1.5002 0 0 0 2.7813 0.8125c0.8305-1.2895 3.2566-2.2812 5.375-2.2812 3.1378 0 5.625 2.4772 5.625 5.5937v3.6875c0 3.1165-2.4872 5.5938-5.625 5.5938-2.1156 0-4.4635-1.3023-5.3438-2.8438a1.5002 1.5002 0 1 0 -2.5937 1.5c1.5623 2.7359 4.7405 4.3438 7.9375 4.3438 4.7417 0 8.625-3.8609 8.625-8.5938v-3.6875c0-4.7328-3.8833-8.5937-8.625-8.5937-1.7417 0-3.5689 0.4289-5.1563 1.2812v-6.4687h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.125 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5601"
        d="m2497.9 494.74a1.5002 1.5002 0 0 0 -1.3437 1.5v18.562a1.5002 1.5002 0 1 0 3 0v-17.062h7.7812a1.5002 1.5002 0 1 0 0 -3h-9.2812a1.5002 1.5002 0 0 0 -0.1563 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5603"
        d="m2315.9-15.107a1.5081 1.5081 0 1 0 0.3125 3h20.469a1.5002 1.5002 0 1 0 0 -3h-20.469a1.5002 1.5002 0 0 0 -0.3125 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5605"
        d="m2326.4-15.294a2.5002 2.5002 0 0 0 -2.4687 2.5313v36.125a2.5002 2.5002 0 1 0 5 0v-36.125a2.5002 2.5002 0 0 0 -2.5313 -2.5313z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5607"
        d="m2346.2-15.107a1.5066 1.5066 0 0 0 0.2813 3h20.5a1.5002 1.5002 0 1 0 0 -3h-20.5a1.5002 1.5002 0 0 0 -0.2813 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5609"
        d="m2356.7-15.294a2.5002 2.5002 0 0 0 -2.4687 2.5313v36.125a2.5002 2.5002 0 1 0 5 0v-36.125a2.5002 2.5002 0 0 0 -2.5313 -2.5313z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5611"
        d="m2384.4-22.33c-4.0185 0-7.3125 3.2939-7.3125 7.3125 0 4.0185 3.294 7.3125 7.3125 7.3125s7.3125-3.294 7.3125-7.3125c0-4.0186-3.294-7.3125-7.3125-7.3125zm0 3c2.3972 0 4.3125 1.9152 4.3125 4.3125 0 2.3972-1.9153 4.3125-4.3125 4.3125s-4.3125-1.9153-4.3125-4.3125c0-2.3973 1.9153-4.3125 4.3125-4.3125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5613"
        d="m2384.4-10.587c-4.0185 0-7.3125 3.2939-7.3125 7.3125 0 4.0185 3.294 7.3125 7.3125 7.3125s7.3125-3.294 7.3125-7.3125c0-4.0186-3.294-7.3125-7.3125-7.3125zm0 3c2.3972 0 4.3125 1.9153 4.3125 4.3125s-1.9153 4.3125-4.3125 4.3125-4.3125-1.9153-4.3125-4.3125 1.9153-4.3125 4.3125-4.3125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5615"
        d="m2402.6-22.825c-4.0276 0-7.3125 3.2848-7.3125 7.3125v11.719c0 4.0276 3.2849 7.3438 7.3125 7.3438 4.0277 0 7.3125-3.3162 7.3125-7.3438v-11.719c0-4.0277-3.2848-7.3125-7.3125-7.3125zm0 3c2.4176 0 4.3125 1.8949 4.3125 4.3125v11.719c0 2.4175-1.8949 4.3438-4.3125 4.3438-2.4175 0-4.3125-1.9263-4.3125-4.3438v-11.719c0-2.4176 1.895-4.3125 4.3125-4.3125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5617"
        d="m2420.7-22.825c-4.0276 0-7.3125 3.2848-7.3125 7.3125v11.719c0 4.0276 3.2849 7.3438 7.3125 7.3438 4.0277 0 7.3125-3.3162 7.3125-7.3438v-11.719c0-4.0277-3.2848-7.3125-7.3125-7.3125zm0 3c2.4176 0 4.3125 1.8949 4.3125 4.3125v11.719c0 2.4175-1.8949 4.3438-4.3125 4.3438-2.4175 0-4.3125-1.9263-4.3125-4.3438v-11.719c0-2.4176 1.895-4.3125 4.3125-4.3125z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5619"
        d="m2376.6 8.3623a1.502 1.502 0 1 0 0.1562 3h52.25a1.5002 1.5002 0 1 0 0 -3h-52.25a1.5002 1.5002 0 0 0 -0.1562 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5621"
        d="m2397.8 13.925a1.5002 1.5002 0 0 0 -1.3438 1.5v10.281a1.5002 1.5002 0 0 0 1.5 1.5h6.2188c2.3448 0 4.3125 2.145 4.3125 4.5625s-1.895 4.3125-4.3125 4.3125h-6.4375a1.5002 1.5002 0 1 0 0 3h6.4375c4.0276 0 7.3125-3.2849 7.3125-7.3125s-3.2122-7.5625-7.3125-7.5625h-4.7188v-7.2812h10.188a1.5002 1.5002 0 1 0 0 -3h-11.688a1.5002 1.5002 0 0 0 -0.1562 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5623"
        sodipodi:nodetypes="sssssssssss"
        style="fill:url(#linearGradient7109)"
        inkscape:connector-curvature="0"
        d="m1156-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.979 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.03-746.03c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.979-53.114-119.09-119.09-119.09z"
    />
    <path
        id="path5625"
        d="m1978.3 1141.4c7.7494 0 14.125-6.3443 14.125-14.094 0-7.7494-6.3756-14.125-14.125-14.125s-14.094 6.3756-14.094 14.125a3.5004 3.5004 0 1 0 7 0c0-3.9663 3.1275-7.125 7.0938-7.125s7.125 3.1587 7.125 7.125-3.1587 7.0937-7.125 7.0937h-0.2813a3.5035 3.5035 0 1 0 -0.3125 7c0.1999 0.01 0.3938 0 0.5938 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5627"
        d="m2064.1 1081.8-81.428-2.0594v-22.31l81.428-2.0594z"
        sodipodi:nodetypes="ccccc"
        style="fill:#b3b3b3"
        inkscape:connector-curvature="0"
    />
    <rect
        id="rect5629"
        style="fill:#333333"
        rx="22.5"
        ry="22.5"
        height="45"
        width="294.29"
        y="1014.8"
        x="2425.5"
    />
    <path
        id="path5631"
        style="fill:#333333"
        inkscape:connector-curvature="0"
        d="m2430.3 1122.6c-65.126 0-119.22 47.238-129.91 109.31h-70.969c-12.465 0-22.5 10.035-22.5 22.5s10.035 22.5 22.5 22.5h70.969c10.674 62.089 64.77 109.34 129.91 109.34 65.138 0 119.23-47.252 129.91-109.34h137.06c12.465 0 22.5-10.035 22.5-22.5s-10.035-22.5-22.5-22.5h-137.06c-10.694-62.106-64.814-109.31-129.91-109.31z"
    />
    <path
        id="path5633"
        sodipodi:rx="131.82491"
        sodipodi:ry="131.82491"
        style="fill:#000000"
        sodipodi:type="arc"
        d="m582.35 401.32c0 72.805-59.02 131.82-131.82 131.82-72.805 0-131.82-59.02-131.82-131.82 0-72.805 59.02-131.82 131.82-131.82 72.522 0 131.42 58.579 131.82 131.1"
        sodipodi:open="true"
        transform="matrix(.67433 0 0 .67433 2126.5 983.82)"
        sodipodi:cy="401.31888"
        sodipodi:cx="450.52805"
        sodipodi:end="6.2776887"
        sodipodi:start="0"
    />
    <path
        id="path5635"
        style="fill:#333333"
        inkscape:connector-curvature="0"
        d="m2430.3 1175.6c-43.516 0-78.781 35.266-78.781 78.781 0 7.6897 1.1023 15.13 3.1563 22.156l145.66-58.188c-13.09-25.386-39.524-42.75-70.031-42.75zm75.625 56.656-145.69 58.188c13.086 25.38 39.541 42.75 70.062 42.75 43.516 0 78.781-35.297 78.781-78.812v-0.4063c-0.041-7.535-1.1424-14.828-3.1562-21.719z"
    />
    <rect
        id="rect5637"
        style="fill:#333333"
        rx="22.5"
        ry="22.5"
        height="45"
        width="710"
        y="1431.9"
        x="2009.8"
    />
    <rect
        id="rect3007"
        style="fill:#000000"
        rx="129.3"
        ry="129.3"
        height="2055.1"
        width="2055.1"
        y="-352.34"
        x="-1430.8"
    />
    <rect
        id="rect3777"
        style="fill:#333333"
        rx="90.728"
        ry="90.728"
        height="1962.4"
        width="1962.4"
        y="-305.98"
        x="-1384.5"
    />
    <rect
        id="rect3779"
        style="fill:#000000"
        rx="70.525"
        ry="70.525"
        height="1909.9"
        width="1909.9"
        y="-279.72"
        x="-1358.2"
    />
    <rect
        id="rect3788"
        style="fill:#333333"
        rx="22.5"
        ry="22.5"
        height="45"
        width="97.857"
        y="802.65"
        x="375.37"
    />
    <path
        id="path3796"
        d="m-1106.1-149.32c-67.467 0-121.78 54.312-121.78 121.78v1405.5c0 67.467 54.312 121.78 121.78 121.78h680.32c29.662 0 47.115-4.0297 64.849-21.729l755.83-754.34c23.851-23.803 26.352-40.896 26.352-72.473v-678.83c0-67.467-54.312-121.78-121.78-121.78z"
        sodipodi:nodetypes="sssssssssss"
        style="fill:#333333"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5147"
        style="fill:#000000"
        inkscape:connector-curvature="0"
        d="m-208.21 1279.8 438.57-428.57h-444.29z"
    />
    <path
        id="path4313"
        style="fill:#808080"
        d="m-57.668 1027.6-22.374-55.287c-3.7493-9.2645 8.4839-21.25 6.9082-31.307l-7.0674-45.107 28.238-11.428 26.293 37.327c5.8618 8.3215 22.988 8.4258 26.737 17.69l22.374 55.287"
        inkscape:transform-center-x="34.646394"
        inkscape:transform-center-y="-112.74235"
        inkscape:connector-curvature="0"
        sodipodi:nodetypes="cssccscc"
    />
    <path
        id="path4263"
        style="fill:#e6e6e6"
        inkscape:connector-curvature="0"
        d="m-41.063 1048.4-48.571-54.286 33.571-33.571 54.286 54.286"
    />
    <path
        id="path4265"
        sodipodi:nodetypes="ccccccccccc"
        style="fill:#cccccc"
        inkscape:connector-curvature="0"
        d="m-131.78 1205.5-37.143-36.429 11.429-12.857 30.714 6.4286 54.286-54.286c-6.7698-14.828-2.7537-22.791 11.428-24.286-18.934-68.674 49.856-114.43 102.86-90l60.714-60-12.143-30 11.429-10 41.428 35"
    />
    <path
        id="rect3781"
        style="fill:#e1e1d1"
        inkscape:connector-curvature="0"
        d="m-1090.6-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.98 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.08-745.9c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.98-53.114-119.09-119.09-119.09h-1374.5zm1096.7 1000.2h189.31l-387.34 382.16v-178.94c0-107.21 90.807-203.22 198.03-203.22z"
    />
    <path
        id="path5854"
        d="m-823.78 1579.8c-65.979 0-119.09 53.114-119.09 119.09v1374.5c0 51.168 31.947 94.61 77.062 111.53-1.8213-8.3056-2.7812-16.944-2.7812-25.813v-1374.5c0-65.979 53.114-119.09 119.09-119.09h1374.5c14.812 0 28.972 2.6957 42.031 7.5938-11.729-53.488-59.201-93.312-116.31-93.312h-1374.5z"
        style="opacity:.85774;filter:url(#filter5708);fill:#000000"
        transform="matrix(1.037 0 0 1.037 -262.68 -1806.5)"
        inkscape:connector-curvature="0"
    />
    <path
        id="path4143"
        sodipodi:nodetypes="cccccccccccc"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-897.19 202.71-1.1875-5.5312-30.281-141.12h13.687l27.813 126.53 33.875-126.53h13.531l-36.906 141.47-1.4063 5.1875h-5.375-8.0625z"
    />
    <path
        id="path3927"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-1081.2 1066.7a3.5004 3.5004 0 0 0 1.0743 6.8659l119.98-0.1356a3.5004 3.5004 0 1 0 -0.016 -6.9996l-119.98 0.1356a3.5004 3.5004 0 0 0 -1.0582 0.1337z"
        inkscape:transform-center-x="1026.1266"
        inkscape:transform-center-y="1.2277805"
        inkscape:connector-curvature="0"
    />
    <path
        id="path3959"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-1076.7 973.88c-1.7172 0.1873-3.152 1.8167-3.1203 3.5439 0.032 1.7271 1.5251 3.3029 3.248 3.4271l127.18 10.755c1.8326 0.1672 3.6502-1.3563 3.8058-3.1899s-1.3794-3.6416-3.2139-3.7856l-127.18-10.755c-0.2391-0.023-0.4806-0.022-0.7194 0zm160 13.54c-1.7213-0.1455-3.152 1.8167-3.1203 3.5439 0.032 1.7271 1.5251 3.3029 3.248 3.4271l4.4928 0.3709c1.8325 0.1671 3.6502-1.3564 3.8057-3.1899 0.1556-1.8336-1.3794-3.6416-3.2139-3.7856l-4.4927-0.3709c-0.2391-0.023-0.4806-0.022-0.7194 0z"
        inkscape:transform-center-x="999.99804"
        inkscape:transform-center-y="-84.5624"
        inkscape:connector-curvature="0"
        sodipodi:nodetypes="csccsccccssccscccs"
    />
    <path
        id="rect4112"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-516.79 412.2c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z"
    />
    <path
        id="rect4114"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-444.57 412.2c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.724 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5255 19.25-19.25 19.25-10.725 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z"
    />
    <path
        id="rect4116"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-689.77 649.6c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.201-27.219-27.219-27.219zm0 8c10.725 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25-10.724 0-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5255-19.219 19.25-19.219z"
    />
    <path
        id="rect4118"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-617.55 649.6c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.201-27.219-27.219-27.219zm0 8c10.724 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25s-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5254-19.219 19.25-19.219z"
    />
    <path
        id="path4122"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-768.21 649.57c-14.558 0-26.594 11.436-26.594 25.656a4.0004 4.0004 0 1 0 8 0c0-9.7079 8.1783-17.656 18.594-17.656 10.415 0 18.625 7.9483 18.625 17.656 0 3.4188-0.3012 6.2393-1.9687 9.125-1.6676 2.8857-4.8983 6.1281-11.656 9.5625-15.36 7.8058-30.328 23.228-32.812 46.125a4.0004 4.0004 0 0 0 3.9688 4.4375h45.969a4.0004 4.0004 0 1 0 0 -8h-41.219c3.4595-17.376 15.261-29.122 27.688-35.438 7.6555-3.8905 12.332-8.1255 14.969-12.688 2.6363-4.5619 3.0625-9.1977 3.0625-13.125 0-14.22-12.067-25.656-26.625-25.656z"
    />
    <path
        id="rect4130"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-8.1876 197.04c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z"
    />
    <path
        id="path4132"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-102.13 197.01a4.0004 4.0004 0 0 0 -4 4v37.25a4.0004 4.0004 0 0 0 7.375 2.125c2.9991-4.7533 11.204-8.0625 18.344-8.0625 10.688 0 19.25 8.648 19.25 19.625v12.344c0 10.977-8.5616 19.625-19.25 19.625-7.2063 0-15.115-4.3265-18.219-9.875a4.0081 4.0081 0 1 0 -7 3.9063c4.8761 8.7154 15.069 13.969 25.219 13.969 15.054 0 27.25-12.426 27.25-27.625v-12.344c0-15.2-12.196-27.625-27.25-27.625-5.9927 0-12.456 1.4611-17.719 4.6875v-24h35.406a4.0004 4.0004 0 1 0 0 -8h-39.406z"
    />
    <path
        id="path4159"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-984.92 1208.6a2.5002 2.5002 0 0 0 -1.8125 0.8437l-7.8125 8.9063a2.5018 2.5018 0 1 0 3.75 3.3125l3.4375-3.9063v39.781a2.5002 2.5002 0 1 0 5 0v-46.438a2.5002 2.5002 0 0 0 -2.5625 -2.5z"
    />
    <path
        id="path4161"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-963.1 1208.6a2.5002 2.5002 0 0 0 -2.25 2.5v19.906a2.5002 2.5002 0 0 0 4.625 1.3125c1.5017-2.3801 5.7817-4.125 9.5-4.125 5.5171 0 9.9062 4.4472 9.9062 10.125v6.5938c0 5.6778-4.3891 10.125-9.9062 10.125-3.7197 0-7.858-2.2704-9.4375-5.0938a2.5041 2.5041 0 1 0 -4.375 2.4375c2.6869 4.8027 8.253 7.6563 13.812 7.6563 8.2458 0 14.906-6.8081 14.906-15.125v-6.5938c0-8.3168-6.6604-15.125-14.906-15.125-3.0809 0-6.3424 0.7823-9.125 2.3438v-11.938h18.562a2.5002 2.5002 0 1 0 0 -5h-21.062a2.5002 2.5002 0 0 0 -0.25 0z"
    />
    <path
        id="path4165"
        style="fill:#000000"
        inkscape:connector-curvature="0"
        d="m-972.35 1253.6c-2.2316 0-4.0625 1.8309-4.0625 4.0625 0 1.973 1.4112 3.5833 3.2812 3.9375-0.352 1.6422-0.8243 3.5675-1.625 6.4062 3.379-3.3496 5.078-6.1447 6.0625-8.6875 0.013-0.033 0.05-0.061 0.062-0.094v-0.031c0.1971-0.4759 0.3125-0.984 0.3125-1.5312 0-2.2316-1.7996-4.0625-4.0312-4.0625z"
    />
    <path
        id="path4170"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-1077.3 1219.9c-5.4507 0.026-10.966 1.9221-16 6.6563a2.5092 2.5092 0 1 0 3.4375 3.6562c5.6657-5.3285 10.954-6.1333 16.938-4.875 5.9835 1.2583 12.504 4.8899 19.125 8.7188 6.6209 3.8289 13.346 7.8504 20.312 9.5312 6.9668 1.6809 14.393 0.7108 20.875-5.2812a2.51 2.51 0 1 0 -3.4062 -3.6875c-5.3695 4.9636-10.436 5.5429-16.312 4.125-5.8769-1.4179-12.328-5.1595-18.969-9-6.6411-3.8406-13.471-7.7833-20.594-9.2813-1.7808-0.3745-3.5894-0.5713-5.4063-0.5625z"
    />
    <path
        id="path4172"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-852.33 1185.2c-1.653 0-3.0458 1.0383-3.5937 2.5l-34.656 12.281v-9.2812a2.5002 2.5002 0 0 0 -2.5312 -2.5313 2.5002 2.5002 0 0 0 -2.4688 2.5313v11.062l-11.219 3.9687a2.5002 2.5002 0 0 0 0 4.7188l11.219 3.9375v5.1562l-11.219 3.9688a2.5002 2.5002 0 0 0 0 4.7187l11.219 3.9688v5.125l-11.219 3.9687a2.5002 2.5002 0 0 0 0 4.7188l50.875 18.031c0.5479 1.4617 1.9407 2.5313 3.5937 2.5313 2.1292 0 3.8438-1.7459 3.8438-3.875 0-2.1292-1.7146-3.8438-3.8438-3.8438-0.698 0-1.3415 0.2068-1.9062 0.5313l-36.344-12.906a2.5002 2.5002 0 0 0 0 -0.1875v-5.4062l10.562-3.75a2.5002 2.5002 0 0 0 0 -4.7188l-10.562-3.75v-5.625l10.562-3.75a2.5002 2.5002 0 0 0 0 -4.6875l-10.562-3.75v-5.5937l36.344-12.875c0.5647 0.3244 1.2082 0.5312 1.9062 0.5312 2.1292 0 3.8438-1.7458 3.8438-3.875 0-2.1291-1.7146-3.8437-3.8438-3.8437zm-43.25 21.844v2.0625l-2.9062-1.0312 2.9062-1.0313zm5 9.0938 2.2813 0.8125-2.2813 0.8125v-1.625zm-5 8.6875v2.0625l-2.9062-1.0313 2.9062-1.0312zm5 9.1562 2.25 0.7813-2.25 0.7812v-1.5625zm-5 8.6563v2.0625l-2.9062-1.0313 2.9062-1.0312z"
    />
    <path
        id="path4195"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-788.35 1184.2a2.5002 2.5002 0 0 0 -1.7841 1.1002l-14.719 21.974-25.423 7.2255a2.5002 2.5002 0 0 0 -1.2786 3.9547l16.354 20.784-0.9515 26.434a2.5002 2.5002 0 0 0 3.36 2.4085l24.799-9.0988 24.828 9.069a2.5002 2.5002 0 0 0 3.3601 -2.4382l-1.011-26.404 16.295-20.814a2.5002 2.5002 0 0 0 -1.2786 -3.9547l-25.423-7.2255-14.748-21.914a2.5002 2.5002 0 0 0 -2.3788 -1.1002zm0.2973 6.9877 13.202 19.595a2.5002 2.5002 0 0 0 1.3976 1.011l22.717 6.4524-14.57 18.584a2.5002 2.5002 0 0 0 -0.5353 1.6354l0.8921 23.609-22.182-8.0879a2.5002 2.5002 0 0 0 -1.7246 0l-22.182 8.1473 0.8623-23.639a2.5002 2.5002 0 0 0 -0.5352 -1.6354l-14.57-18.554 22.688-6.4821a2.5002 2.5002 0 0 0 1.3975 -1.011l13.143-19.625z"
    />
    <path
        id="path4201"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-788.4 1216c-4.8517 0-8.8125 3.9608-8.8125 8.8125a2.1387 2.1387 0 1 0 4.25 0c0-2.5403 2.0222-4.5312 4.5625-4.5312s4.5625 1.9909 4.5625 4.5312c0 0.6956-0.176 1.0804-0.9062 1.9688s-1.9841 2.0898-3.4063 3.8125l-9.3437 11.312a2.1387 2.1387 0 0 0 1.6562 3.5h15.406a2.1406 2.1406 0 0 0 0 -4.2813h-10.875l6.4375-7.8125c1.2474-1.511 2.4036-2.5926 3.4062-3.8125 1.0026-1.2198 1.9063-2.8108 1.9063-4.6875 0-4.8517-3.992-8.8125-8.8438-8.8125z"
    />
    <path
        id="path4204"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-719.32 1204.4a2.5002 2.5002 0 0 0 -2.25 2.5v39.656a2.5002 2.5002 0 0 0 2.75 2.5h0.031 8.5625c7.6375 0 13.844-6.2375 13.844-13.875 0-7.6376-6.2062-13.844-13.844-13.844h-6.3438v-11.938h14.156a2.5002 2.5002 0 1 0 0 -5h-16.656a2.5002 2.5002 0 0 0 -0.25 0zm2.75 21.938h6.3437c4.954 0 8.8438 3.8897 8.8438 8.8438 0 4.954-3.8898 8.875-8.8438 8.875h-6.3437v-17.719z"
    />
    <path
        id="path4213"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-667.07 1189.1a2.1387 2.1387 0 0 0 -2.125 2.1875v68.688a2.1406 2.1406 0 0 0 4.2812 0v-68.688a2.1387 2.1387 0 0 0 -2.1562 -2.1875z"
    />
    <path
        id="path4215"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-696.1 1257.9a2.5031 2.5031 0 1 0 0.25 5h57.594a2.5002 2.5002 0 1 0 0 -5h-57.594a2.5002 2.5002 0 0 0 -0.25 0z"
    />
    <path
        id="path4217"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-997.61 1301.5a2.7908 2.7908 0 0 0 -2.5192 2.7905v33.331a2.7908 2.7908 0 1 0 5.5809 0v-30.54h10.387a2.7908 2.7908 0 1 0 0 -5.581h-13.177a2.7908 2.7908 0 0 0 -0.2713 0z"
    />
    <path
        id="rect4219"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-967.11 1301.5c-7.3104 0-13.294 5.9832-13.294 13.294v12.363c0 7.3104 5.9832 13.255 13.294 13.255 7.3104 0 13.294-5.9445 13.294-13.255v-12.363c0-7.3104-5.9832-13.294-13.294-13.294zm0 5.581c4.3151 0 7.7126 3.3975 7.7126 7.7126v12.363c0 4.3151-3.3975 7.6739-7.7126 7.6739-4.315 0-7.7126-3.3588-7.7126-7.6739v-12.363c0-4.3151 3.3976-7.7126 7.7126-7.7126z"
    />
    <path
        id="rect4221"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-939.56 1301.5c-7.3103 0-13.294 5.9832-13.294 13.294v12.363c0 7.3104 5.9833 13.255 13.294 13.255 6.1555 0 11.384-4.1964 12.867-9.9218a2.7908 2.7908 0 1 0 -5.3872 -1.3952c-0.8578 3.3113-3.8467 5.736-7.4801 5.736-4.315 0-7.7126-3.3588-7.7126-7.6739v-12.363c0-4.3151 3.3976-7.7126 7.7126-7.7126 3.63 0 6.5804 2.4293 7.4414 5.736a2.8012 2.8012 0 1 0 5.4259 -1.3953c-1.4886-5.7173-6.7175-9.9217-12.867-9.9217z"
    />
    <path
        id="path4224"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-913.39 1301.5a2.7908 2.7908 0 0 0 -2.4804 2.8293v33.331a2.7908 2.7908 0 1 0 5.581 0v-33.331a2.7908 2.7908 0 0 0 -3.1006 -2.8293z"
    />
    <path
        id="path4226"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-921.92 1301.5a2.7938 2.7938 0 1 0 0.2713 5.581h17.131a2.7908 2.7908 0 1 0 0 -5.581h-17.131a2.7908 2.7908 0 0 0 -0.2713 0z"
    />
    <path
        id="path4232"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-871.11 1301.5c-5.4866 0-9.9993 4.5127-9.9993 9.9993s4.5127 9.9993 9.9993 9.9993c5.4865 0 9.9992-4.5127 9.9992-9.9993s-4.5127-9.9993-9.9992-9.9993zm0 5.581c2.4704 0 4.4183 1.9479 4.4183 4.4183s-1.9479 4.4183-4.4183 4.4183-4.4183-1.9479-4.4183-4.4183 1.9479-4.4183 4.4183-4.4183z"
    />
    <path
        id="path4234"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-871.11 1315.8c-6.7839 0-12.335 5.5509-12.335 12.335 0 6.7839 5.5509 12.335 12.335 12.335 6.7839 0 12.335-5.5509 12.335-12.335 0-6.7839-5.5509-12.335-12.335-12.335zm0 5.5506c3.7677 0 6.7841 3.0165 6.7841 6.7842s-3.0164 6.7841-6.7841 6.7841-6.7842-3.0164-6.7842-6.7841 3.0165-6.7842 6.7842-6.7842z"
    />
    <path
        id="path4236"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-853.24 1301.5a2.7948 2.7948 0 1 0 0.31 5.581h9.8055c-4.1407 8.1507-7.5055 18.252-10.348 29.882a2.7918 2.7918 0 0 0 5.4259 1.3178c3.274-13.394 7.1815-24.728 11.898-32.556a2.7908 2.7908 0 0 0 -2.403 -4.2245h-14.379a2.7908 2.7908 0 0 0 -0.31 0z"
    />
    <path
        id="path4240"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-817.47 1301.5a2.7908 2.7908 0 0 0 -2.1704 1.1239l-5.8135 7.7514a2.7908 2.7908 0 1 0 4.457 3.3331l0.8139-1.0852v24.998a2.7908 2.7908 0 1 0 5.581 0v-33.331a2.7908 2.7908 0 0 0 -2.868 -2.7905z"
    />
    <path
        id="path4250"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-797.9 1301.5a2.7908 2.7908 0 0 0 -2.1316 1.1239l-5.8136 7.7514a2.7908 2.7908 0 1 0 4.4571 3.3331l0.7751-1.0464v24.959a2.7908 2.7908 0 1 0 5.581 0v-33.331a2.7908 2.7908 0 0 0 -2.868 -2.7905z"
    />
    <path
        id="rect4252"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-726.59 1301.5c-7.3104 0-13.294 5.9832-13.294 13.294v12.363c0 7.3104 5.9832 13.255 13.294 13.255 7.3104 0 13.294-5.9445 13.294-13.255v-12.363c0-7.3104-5.9832-13.294-13.294-13.294zm0 5.581c4.3151 0 7.7127 3.3975 7.7127 7.7126v12.363c0 4.3151-3.3976 7.6739-7.7127 7.6739-4.315 0-7.7126-3.3588-7.7126-7.6739v-12.363c0-4.3151 3.3976-7.7126 7.7126-7.7126z"
    />
    <path
        id="path4254"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-753.51 1315.8c-6.7839 0-12.335 5.5509-12.335 12.335 0 6.7839 5.5509 12.335 12.335 12.335 6.7839 0 12.335-5.5509 12.335-12.335 0-6.7839-5.5509-12.335-12.335-12.335zm0 5.5506c3.7677 0 6.7841 3.0165 6.7841 6.7842s-3.0164 6.7841-6.7841 6.7841-6.7842-3.0164-6.7842-6.7841 3.0165-6.7842 6.7842-6.7842z"
    />
    <path
        id="path4258"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-753.52 1301.5c-6.7839 0-12.325 5.5408-12.325 12.325v14.262a2.7908 2.7908 0 1 0 5.581 0v-14.262c0-3.7677 2.976-6.7437 6.7437-6.7437 2.7232 0 5.1777 1.6007 6.2399 4.1082a2.7965 2.7965 0 1 0 5.1546 -2.1704c-1.9302-4.5568-6.4457-7.5188-11.394-7.5188z"
    />
    <path
        id="path4261"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-787.63 1317.3a2.7938 2.7938 0 1 0 0.2713 5.581h14.418a2.7908 2.7908 0 1 0 0 -5.581h-14.418a2.7908 2.7908 0 0 0 -0.2713 0z"
    />
    <path
        id="rect4271"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m144.24 272.53c-6.7856 0-12.69 3.8407-15.594 9.5a2.5002 2.5002 0 1 0 4.4375 2.2812c2.0712-4.0371 6.2544-6.7812 11.156-6.7812 6.9827 0 12.531 5.5486 12.531 12.531v21.344c0 6.9826-5.5486 12.531-12.531 12.531-4.4773 0-8.3427-2.2743-10.562-5.75a2.501 2.501 0 1 0 -4.2187 2.6875c3.1089 4.8679 8.5832 8.0625 14.781 8.0625 9.6662 0 17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.8651-17.531-17.531-17.531z"
    />
    <path
        id="rect4273"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m221.24 272.53c-9.6661 0-17.5 7.865-17.5 17.531v21.344c0 9.6661 7.8339 17.531 17.5 17.531 9.6662 0 17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.8651-17.531-17.531-17.531zm0 5c6.9827 0 12.531 5.5485 12.531 12.531v21.344c0 6.9826-5.5486 12.531-12.531 12.531-6.9826 0-12.5-5.5486-12.5-12.531v-21.344c0-6.9827 5.5174-12.531 12.5-12.531z"
    />
    <path
        id="path4275"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m169.86 272.53a2.5031 2.5031 0 1 0 0.25 5h18.156l-12.375 17.5a2.5002 2.5002 0 0 0 2.3437 3.9375c5.7215-0.6862 9.0208 0.5421 11.188 2.4375 2.1668 1.8954 3.3312 4.7379 3.7813 7.7187 0.4713 3.1214-0.2842 6.6267-1.9063 9.4063-1.622 2.7795-4.0115 4.7449-6.7187 5.25-4.475 0.8347-10.174-1.6848-12.25-5.8438a2.5016 2.5016 0 1 0 -4.4688 2.25c3.2375 6.4873 10.824 9.7687 17.625 8.5 4.4334-0.827 7.9333-3.8692 10.125-7.625 2.1918-3.7558 3.1946-8.2945 2.5313-12.688-0.5669-3.7543-2.0648-7.7957-5.4063-10.719-2.4107-2.1089-5.7373-3.4771-9.9062-3.7813l12.312-17.406a2.5002 2.5002 0 0 0 -2.0625 -3.9375h-22.969a2.5002 2.5002 0 0 0 -0.25 0z"
    />
    <path
        id="path4281"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m145.11 298.25a2.5031 2.5031 0 1 0 0.25 5h13.125a2.5002 2.5002 0 1 0 0 -5h-13.125a2.5002 2.5002 0 0 0 -0.25 0z"
    />
    <path
        id="path4285"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168"
        inkscape:connector-curvature="0"
        d="m147.41 654.11a3.5004 3.5004 0 0 0 -3 1.9063l-22 41.875-75.406 87.469a3.5014 3.5014 0 1 0 5.3125 4.5625l75.688-87.844a3.5004 3.5004 0 0 0 0.4687 -0.6563l22.125-42.156a3.5004 3.5004 0 0 0 -3.1875 -5.1563z"
    />
    <path
        id="path4287"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff"
        inkscape:connector-curvature="0"
        d="m49.41 773.83c-7.7494 0-14.125 6.3443-14.125 14.094 0 7.7494 6.3756 14.125 14.125 14.125s14.094-6.3756 14.094-14.125a3.5004 3.5004 0 1 0 -7 0c0 3.9663-3.1274 7.125-7.0938 7.125-3.9663 0-7.125-3.1587-7.125-7.125s3.1587-7.0937 7.125-7.0937h0.2813a3.5035 3.5035 0 1 0 0.3125 -7c-0.1998-0.01-0.3938 0-0.5938 0z"
    />
    <path
        id="path4283"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#b3b3b3"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="translate(-266.78 863.15)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path4294"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#808080"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="matrix(.78601 0 0 .78601 -168.03 815.96)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path4289"
        style="fill:#cccccc"
        inkscape:connector-curvature="0"
        d="m188.35 600.96c-20.3 3.0393-35.875 20.541-35.875 41.688s15.575 38.679 35.875 41.719v-83.406zm12.625 0.031v83.344c20.284-3.0534 35.844-20.552 35.844-41.688 0-21.135-15.56-38.603-35.844-41.656z"
    />
    <path
        id="path4296"
        sodipodi:nodetypes="cccccscccsc"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168"
        inkscape:connector-curvature="0"
        d="m-268.5 1124c-1.0098 0.01-2.0071 0.4765-2.6563 1.25l-75.719 87.844c-0.1719 0.2111-0.3191 0.4424-0.4375 0.6875l-34.12 26.143c-0.8509 1.628-0.1437 3.8835 1.4843 4.7343 1.6281 0.8509 3.8836 0.1437 4.7344-1.4843l33.902-25.768 75.469-87.594c0.8866-1.0076 1.1136-2.5465 0.5558-3.7672s-1.87-2.0562-3.212-2.0453z"
    />
    <path
        id="path4300"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#c5c5bf"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="matrix(-1 0 0 -1 47.927 1052.1)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path4302"
        sodipodi:rx="54.285713"
        sodipodi:ry="54.285713"
        style="fill:#808080"
        sodipodi:type="arc"
        d="m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z"
        transform="matrix(-.78601 0 0 -.78601 -50.816 1099.2)"
        sodipodi:cy="-220.49496"
        sodipodi:cx="461.42856"
    />
    <path
        id="path4304"
        d="m-407.2 1314.3c20.3-3.0394 35.875-20.541 35.875-41.688s-15.575-38.679-35.875-41.719v83.406zm-12.625-0.031v-83.344c-20.284 3.0534-35.844 20.552-35.844 41.688 0 21.135 15.56 38.603 35.844 41.656z"
        style="fill:#cccccc"
        inkscape:connector-curvature="0"
    />
    <path
        id="path4329"
        style="fill:#000000"
        d="m-333.02 245.9 229.49 575.97 22.561 32.673 0.73854 1.8249-0.16067-0.97999 0.56622 0.81587-0.73854-1.8249-6.4837-39.179-235.72-573.45c-1.0191-2.4782-5.4923-10.116-9.418-8.5272-3.9256 1.5887-1.8284 10.188-0.83656 12.677z"
        sodipodi:nodetypes="scccccccsas"
        inkscape:transform-center-y="-524.05141"
        inkscape:connector-curvature="0"
        inkscape:transform-center-x="213.13306"
    />
    <path
        id="rect4358"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m111.68 388.94 2.4663 1.2855 71.607 37.323 2.4386 1.2711 2.4387-1.2711 71.607-37.323 2.4663-1.2855-2.4386-1.271-71.607-37.323-2.4664-1.2855-2.4663 1.2855-71.607 37.323-2.4386 1.271zm9.81 0 66.702-34.766 66.73 34.78-66.702 34.766-66.73-34.781z"
    />
    <path
        id="path4362"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m174.86 371.46-2.2812 1.375-11.406 6.9687-0.7187 0.4375v0.8438 4.4687h3v-3.625l8.4062-5.125v9.5313l-3.5937 3.8125-0.9375 1.0312 0.9375 1.0313 3.5937 3.8125v9.5312l-8.4062-5.125v-3.625h-3v4.4688 0.8437l0.7187 0.4375 11.406 6.9688 2.2812 1.375v-2.6563-12.812-0.5937l-0.4062-0.4375-3.0313-3.2188 3.0313-3.25 0.4062-0.4375v-0.5937-12.781-2.6562z"
    />
    <path
        id="path4366"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m181.18 365.18v48.594h3v-48.594h-3zm11.062 0v48.594h3v-48.594h-3z"
    />
    <path
        id="path4369"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m192.36 377.09-11.062 24.469 2.7188 1.2188 11.094-24.469-2.75-1.2187z"
    />
    <path
        id="path4371"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m200.8 368.12v2.625 37.5h3v-34.906l8 4.5937v22.969h3v-23.812-0.875l-0.75-0.4375-11-6.3438-2.25-1.3125z"
    />
    <path
        id="path4373"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m141.52 456.11c-4.2082 0-7.5312 3.6567-7.5312 8a1.5002 1.5002 0 1 0 3 0c0-2.8368 2.0679-5 4.5312-5s4.5313 2.1632 4.5313 5c0 1.0172-0.081 1.842-0.5 2.6562-0.419 0.8143-1.2183 1.7196-2.9688 2.7188-4.2189 2.4083-8.2687 7.139-8.9375 14.062a1.5002 1.5002 0 0 0 1.5 1.625h12.281a1.5002 1.5002 0 1 0 0 -3h-10.406c1.0026-4.93 3.9357-8.3089 7.0625-10.094 2.1-1.1987 3.4254-2.517 4.1563-3.9375 0.7308-1.4205 0.8125-2.8442 0.8125-4.0312 0-4.3433-3.3231-8-7.5313-8z"
    />
    <path
        id="path4157-8"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m191.63 456.12a1.5002 1.5002 0 0 0 -1.0625 0.625l-12.656 18.5a1.5002 1.5002 0 0 0 1.2188 2.3438h11.188v6.0625a1.5002 1.5002 0 1 0 3 0v-6.0625h0.5312a1.5002 1.5002 0 1 0 0 -3h-0.5312v-16.969a1.5002 1.5002 0 0 0 -1.6875 -1.5zm-1.3125 6.3125v12.156h-8.3125l8.3125-12.156z"
    />
    <path
        id="path4397"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m260.25 456.14a1.5002 1.5002 0 0 0 -1.1875 1.5v11.156a1.5002 1.5002 0 0 0 2.75 0.8125c0.8305-1.2895 3.2878-2.2812 5.4062-2.2812 3.1378 0 5.5938 2.446 5.5938 5.5625v3.7187c0 3.1165-2.456 5.5625-5.5938 5.5625-2.1156 0-4.4947-1.271-5.375-2.8125a1.5002 1.5002 0 1 0 -2.5937 1.5c1.5623 2.7359 4.7718 4.3125 7.9687 4.3125 4.7418 0 8.5938-3.8296 8.5938-8.5625v-3.7187c0-4.7328-3.852-8.5625-8.5938-8.5625-1.7311 0-3.5751 0.4087-5.1562 1.25v-6.4375h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.3125 0z"
    />
    <path
        id="path4250-1"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m139.49 518.96a1.5002 1.5002 0 0 0 -1.1875 0.625l-4.4687 6.0625a1.5002 1.5002 0 1 0 2.4062 1.7812l1.7813-2.4062v21.5a1.5002 1.5002 0 1 0 3 0v-26.062a1.5002 1.5002 0 0 0 -1.5313 -1.5z"
    />
    <path
        id="path4254-5"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m177.16 530.1c-4.9217 0-8.9328 4.0208-8.9328 8.9543 0 4.9336 4.0111 8.9544 8.9328 8.9544s8.9329-4.0208 8.9329-8.9544c0-4.9335-4.0112-8.9543-8.9329-8.9543zm0 3.0116c3.3023 0 5.9286 2.6325 5.9286 5.9427 0 3.3103-2.6263 5.983-5.9286 5.983s-5.9285-2.6727-5.9285-5.983c0-3.3102 2.6262-5.9427 5.9285-5.9427z"
    />
    <path
        id="path4258-9"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m177.15 518.96c-4.9246 0-8.9375 4.0381-8.9375 8.9687v11.125a1.5002 1.5002 0 1 0 3 0v-11.125c0-3.3131 2.6381-5.9687 5.9375-5.9687 2.3902 0 4.5663 1.4467 5.5 3.6562a1.5002 1.5002 0 1 0 2.75 -1.1875c-1.3986-3.3097-4.6606-5.4687-8.25-5.4687z"
    />
    <path
        id="path4446"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m154.3 536.89c4.9217 0 8.9328-4.0208 8.9328-8.9543s-4.0111-8.9543-8.9328-8.9543-8.9329 4.0208-8.9329 8.9543 4.0112 8.9543 8.9329 8.9543zm0-3.0115c-3.3024 0-5.9286-2.6326-5.9286-5.9428 0-3.3103 2.6262-5.9829 5.9286-5.9829 3.3023 0 5.9285 2.6726 5.9285 5.9829 0 3.3102-2.6262 5.9428-5.9285 5.9428z"
    />
    <path
        id="path4448"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m161.74 526.4a1.5002 1.5002 0 0 0 -1.5 1.5312v11.125c0 3.3132-2.6381 5.9688-5.9375 5.9688-2.3902 0-4.535-1.4155-5.4687-3.625a1.506 1.506 0 1 0 -2.7813 1.1562c1.3986 3.3097 4.6606 5.4688 8.25 5.4688 4.9246 0 8.9375-4.0382 8.9375-8.9688v-11.125a1.5002 1.5002 0 0 0 -1.5 -1.5312z"
    />
    <path
        id="path4458"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m225.02 523.02a1.5002 1.5002 0 0 0 -1.3438 1.5v18.562a1.5002 1.5002 0 1 0 3 0v-17.062h7.7813a1.5002 1.5002 0 1 0 0 -3h-9.2813a1.5002 1.5002 0 0 0 -0.1562 0z"
    />
    <path
        id="path4298"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff"
        inkscape:connector-curvature="0"
        d="m-268.26 1141.4c7.7494 0 14.125-6.3444 14.125-14.094 0-7.7494-6.3756-14.125-14.125-14.125s-14.094 6.3756-14.094 14.125a3.5004 3.5004 0 1 0 7 0c0-3.9663 3.1275-7.125 7.0938-7.125s7.125 3.1587 7.125 7.125c0 3.9664-3.1587 7.0938-7.125 7.0938h-0.2813a3.5035 3.5035 0 1 0 -0.3125 7c0.1999 0.01 0.3938 0 0.5938 0z"
    />
    <path
        id="path4315"
        style="fill:#b3b3b3"
        d="m-76.791 898.91-28.638-76.254 20.68-8.3693 32.456 74.709z"
        sodipodi:nodetypes="ccccc"
        inkscape:transform-center-y="-212.14011"
        inkscape:connector-curvature="0"
        inkscape:transform-center-x="84.84786"
    />
    <rect
        id="rect3790"
        style="fill:#333333"
        rx="22.5"
        ry="22.5"
        height="45"
        width="294.29"
        y="1014.8"
        x="178.94"
    />
    <path
        id="rect3792"
        style="fill:#333333"
        inkscape:connector-curvature="0"
        d="m183.75 1122.6c-65.126 0-119.22 47.238-129.91 109.31h-70.969c-12.465 0-22.5 10.035-22.5 22.5s10.035 22.5 22.5 22.5h70.969c10.674 62.09 64.77 109.34 129.91 109.34 65.138 0 119.23-47.252 129.91-109.34h137.06c12.465 0 22.5-10.035 22.5-22.5s-10.035-22.5-22.5-22.5h-137.06c-10.69-62.1-64.81-109.3-129.91-109.3z"
    />
    <path
        id="path3802"
        sodipodi:rx="131.82491"
        sodipodi:ry="131.82491"
        style="fill:#000000"
        sodipodi:type="arc"
        d="m582.35 401.32c0 72.805-59.02 131.82-131.82 131.82-72.805 0-131.82-59.02-131.82-131.82 0-72.805 59.02-131.82 131.82-131.82 72.522 0 131.42 58.579 131.82 131.1"
        sodipodi:open="true"
        transform="matrix(.67433 0 0 .67433 -120.05 983.82)"
        sodipodi:cy="401.31888"
        sodipodi:cx="450.52805"
        sodipodi:end="6.2776887"
        sodipodi:start="0"
    />
    <path
        id="path3804"
        style="fill:#333333"
        inkscape:connector-curvature="0"
        d="m183.75 1175.6c-43.516 0-78.781 35.266-78.781 78.781 0 7.6898 1.1023 15.13 3.1563 22.156l145.66-58.188c-13.09-25.386-39.524-42.75-70.031-42.75zm75.625 56.656-145.69 58.188c13.086 25.38 39.541 42.75 70.062 42.75 43.516 0 78.781-35.297 78.781-78.812v-0.4062c-0.041-7.535-1.1424-14.828-3.1562-21.719z"
    />
    <rect
        id="rect3794"
        style="fill:#333333"
        rx="22.5"
        ry="22.5"
        height="45"
        width="710"
        y="1431.9"
        x="-236.78"
    />
    <path
        id="path5724"
        d="m64.543 197.04c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.2 27.25 27.219 27.25 15.018 0 27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5726"
        d="m-608.11 412.19a4.2093 4.2093 0 1 0 0.4204 8.408h30.531l-20.81 29.428a4.2044 4.2044 0 0 0 3.9412 6.6213c9.6213-1.1538 15.169 0.9116 18.813 4.0989 3.6435 3.1873 5.6017 7.9672 6.3585 12.98 0.7925 5.2489-0.4779 11.143-3.2056 15.818-2.7276 4.6741-6.7457 7.9791-11.298 8.8283-7.525 1.4038-17.109-2.8331-20.6-9.8268a4.2067 4.2067 0 0 0 -7.5146 3.7836c5.4441 10.909 18.201 16.427 29.638 14.294 7.4551-1.3908 13.34-6.5064 17.026-12.822 3.6857-6.3157 5.3719-13.948 4.2565-21.335-0.9532-6.3133-3.4721-13.109-9.0911-18.025-4.0538-3.5462-9.6478-5.8469-16.658-6.3585l20.705-29.27a4.2044 4.2044 0 0 0 -3.4683 -6.6213h-38.624a4.2044 4.2044 0 0 0 -0.4204 0z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5728"
        d="m-304.56 229c-15.021 0-27.222 12.201-27.222 27.222v40.446c0 15.021 12.201 27.222 27.222 27.222s27.277-12.201 27.277-27.222v-40.446c0-15.021-12.257-27.222-27.277-27.222zm0 7.9675c10.744 0 19.31 8.5101 19.31 19.255v40.446c0 10.744-8.5654 19.255-19.31 19.255-10.744 0-19.255-8.5101-19.255-19.255v-40.446c0-10.744 8.5101-19.255 19.255-19.255z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5730"
        d="m-361.49 229.03a3.9804 3.9804 0 0 0 -2.8192 1.8242l-39.192 61.69a3.9804 3.9804 0 0 0 3.3719 6.0806h35.157v21.227a3.9804 3.9804 0 1 0 7.96 0v-21.227h2.377a3.9804 3.9804 0 1 0 0 -7.96h-2.377v-57.655a3.9804 3.9804 0 0 0 -4.4775 -3.98zm-3.4825 17.634v44.001h-27.916l27.916-44.001z"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5732"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-228.85 229c-15.021 0-27.222 12.201-27.222 27.222v40.446c0 15.021 12.201 27.222 27.222 27.222s27.277-12.201 27.277-27.222v-40.446c0-15.021-12.257-27.222-27.277-27.222zm0 7.9675c10.744 0 19.31 8.5101 19.31 19.255v40.446c0 10.744-8.5655 19.255-19.31 19.255s-19.255-8.5101-19.255-19.255v-40.446c0-10.744 8.5101-19.255 19.255-19.255z"
    />
    <path
        id="path5734"
        style="stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3;fill:none"
        inkscape:connector-curvature="0"
        d="m191.83 520.42h14.362l-11.391 26.091"
    />
    <path
        id="path5736"
        d="m234.26 457.58h14.362l-11.391 26.09"
        style="stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3;fill:none"
        inkscape:connector-curvature="0"
    />
    <path
        id="rect5738"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m214.66 456.08c-4.7833 0-8.6562 3.9041-8.6562 8.6875v11.719c0 4.7834 3.8729 8.6875 8.6562 8.6875 4.7834 0 8.6875-3.9041 8.6875-8.6875v-11.719c0-4.7834-3.9041-8.6875-8.6875-8.6875zm0 3c3.1733 0 5.6875 2.5142 5.6875 5.6875v11.719c0 3.1733-2.5142 5.6875-5.6875 5.6875-3.1732 0-5.6562-2.5142-5.6562-5.6875v-11.719c0-3.1733 2.483-5.6875 5.6562-5.6875z"
    />
    <path
        id="rect5740"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m165.16 456.08c-4.7833 0-8.6562 3.9041-8.6562 8.6875v11.719c0 4.7834 3.8729 8.6875 8.6562 8.6875 4.7834 0 8.6875-3.9041 8.6875-8.6875v-11.719c0-4.7834-3.9041-8.6875-8.6875-8.6875zm0 3c3.1733 0 5.6875 2.5142 5.6875 5.6875v11.719c0 3.1733-2.5142 5.6875-5.6875 5.6875-3.1732 0-5.6562-2.5142-5.6562-5.6875v-11.719c0-3.1733 2.483-5.6875 5.6562-5.6875z"
    />
    <path
        id="path4250-1-3"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-1171.1 945.11a2.6676 2.6676 0 0 0 -2.1117 1.1113l-7.9464 10.78a2.6676 2.6676 0 1 0 4.2788 3.1675l3.1675-4.2789v38.232a2.6676 2.6676 0 1 0 5.3347 0v-46.345a2.6676 2.6676 0 0 0 -2.7229 -2.6673z"
    />
    <path
        id="rect5738-5"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-1144.4 945.12c-8.5059 0-15.448 6.8868-15.448 15.393v20.894c0 8.5059 6.9424 15.393 15.448 15.393 8.5059 0 15.448-6.8868 15.448-15.393v-20.894c0-8.5059-6.9424-15.393-15.448-15.393zm0 5.3346c5.6428 0 10.114 4.4153 10.114 10.058v20.894c0 5.6428-4.4708 10.058-10.114 10.058-5.6428 0-10.114-4.4153-10.114-10.058v-20.894c0-5.6428 4.4708-10.058 10.114-10.058z"
    />
    <path
        id="rect5763"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        inkscape:connector-curvature="0"
        d="m-1107.5 944.76c-8.5059 0-15.448 6.8868-15.448 15.393v20.894c0 8.5059 6.9424 15.393 15.448 15.393 8.5059 0 15.448-6.8868 15.448-15.393v-20.894c0-8.506-6.9424-15.393-15.448-15.393zm0 5.3347c5.6428 0 10.114 4.4153 10.114 10.058v20.894c0 5.6427-4.4708 10.058-10.114 10.058-5.6428 0-10.114-4.4153-10.114-10.058v-20.894c0-5.6428 4.4708-10.058 10.114-10.058z"
    />
    <path
        id="path5787"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-981.29 613.51a3.5004 3.5004 0 0 0 -1.8867 6.6884l109.11 49.911a3.5004 3.5004 0 1 0 2.9043 -6.3686l-109.11-49.911a3.5004 3.5004 0 0 0 -1.0176 -0.3198z"
        inkscape:transform-center-x="933.15822"
        inkscape:transform-center-y="-426.79377"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5789"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-705.38 246.62a3.5004 3.5004 0 0 0 -4.4791 5.3134l78.781 90.494a3.5004 3.5004 0 1 0 5.2739 -4.6022l-78.781-90.494a3.5004 3.5004 0 0 0 -0.7948 -0.7112z"
        inkscape:transform-center-x="673.81332"
        inkscape:transform-center-y="-773.89442"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5791"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-325.06 33.219a3.5004 3.5004 0 0 0 -6.2068 3.1256l36.88 114.17a3.5004 3.5004 0 1 0 6.6582 -2.1593l-36.88-114.18a3.5004 3.5004 0 0 0 -0.4514 -0.9664z"
        inkscape:transform-center-x="315.47402"
        inkscape:transform-center-y="-976.42875"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5793"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m9.3597-18.399a3.5004 3.5004 0 0 0 -6.8671 1.0659l-0.011 119.98a3.5004 3.5004 0 1 0 6.9995 -0.01l0.011-119.98a3.5004 3.5004 0 0 0 -0.1324 -1.0584z"
        inkscape:transform-center-x="-0.023585956"
        inkscape:transform-center-y="-1026.1273"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5795"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-1068.4 895.12a1.888 3.5004 9.0712 0 0 -0.5103 6.8713l63.927 10.069a1.888 3.5004 9.0712 1 0 1.0946 -6.9134l-63.927-10.069a1.888 3.5004 9.0712 0 0 -0.5847 0.042z"
        inkscape:transform-center-x="1042.4061"
        inkscape:transform-center-y="-165.18705"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5797"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-1050.7 808.09a1.888 3.5004 13.749 0 0 -1.0689 6.8068l62.893 15.249a1.888 3.5004 13.749 1 0 1.6548 -6.8011l-62.893-15.249a1.888 3.5004 13.749 0 0 -0.5862 -0.01z"
        inkscape:transform-center-x="1025.4638"
        inkscape:transform-center-y="-249.64231"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5799"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-1028.4 730.25a1.888 3.5004 18.012 0 0 -1.5721 6.7085l61.585 19.882a1.888 3.5004 18.012 1 0 2.1559 -6.6593l-61.585-19.882a1.888 3.5004 18.012 0 0 -0.5842 -0.049z"
        inkscape:transform-center-x="1004.0664"
        inkscape:transform-center-y="-325.18917"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5801"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-1004.6 664.7a1.888 3.5004 21.684 0 0 -1.9984 6.5941l60.185 23.786a1.888 3.5004 21.684 1 0 2.5779 -6.5076l-60.185-23.786a1.888 3.5004 21.684 0 0 -0.5798 -0.087z"
        inkscape:transform-center-x="981.17869"
        inkscape:transform-center-y="-388.82606"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5803"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-932.71 517.97a1.888 3.5004 30.294 0 0 -2.9631 6.2206l55.946 32.528a1.888 3.5004 30.294 1 0 3.5231 -6.0483l-55.946-32.528a1.888 3.5004 30.294 0 0 -0.5603 -0.1725z"
        inkscape:transform-center-x="911.91157"
        inkscape:transform-center-y="-531.33261"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5805"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-875.09 429.84a1.888 3.5004 35.84 0 0 -3.5504 5.9051l52.541 37.782a1.888 3.5004 35.84 1 0 4.0911 -5.6795l-52.541-37.782a1.888 3.5004 35.84 0 0 -0.5409 -0.2259z"
        inkscape:transform-center-x="856.29817"
        inkscape:transform-center-y="-616.96881"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5807"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-810.98 349.68a1.888 3.5004 41.246 0 0 -4.0909 5.5444l48.748 42.564a1.888 3.5004 41.246 1 0 4.608 -5.2689l-48.748-42.564a1.888 3.5004 41.246 0 0 -0.5173 -0.2758z"
        inkscape:transform-center-x="794.36465"
        inkscape:transform-center-y="-694.89709"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5809"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-761.37 296.96a1.888 3.5004 45.057 0 0 -4.4504 5.2601l45.811 45.71a1.888 3.5004 45.057 1 0 4.948 -4.9509l-45.811-45.71a1.888 3.5004 45.057 0 0 -0.4978 -0.3096z"
        inkscape:transform-center-x="746.41375"
        inkscape:transform-center-y="-746.16601"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5811"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-641.83 194.21a1.888 3.5004 53.363 0 0 -5.1636 4.5621l38.727 51.849a1.888 3.5004 53.363 1 0 5.6113 -4.1842l-38.727-51.849a1.888 3.5004 53.363 0 0 -0.4478 -0.3782z"
        inkscape:transform-center-x="630.79324"
        inkscape:transform-center-y="-846.16619"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5813"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-555.89 136.67a1.888 3.5004 58.81 0 0 -5.5733 4.0513l33.631 55.29a1.888 3.5004 58.81 1 0 5.9832 -3.6326l-33.631-55.29a1.888 3.5004 58.81 0 0 -0.4099 -0.4191z"
        inkscape:transform-center-x="547.62857"
        inkscape:transform-center-y="-902.21965"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5815"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-472.63 91.3a1.888 3.5004 63.803 0 0 -5.9048 3.5509l28.69 58.008a1.888 3.5004 63.803 1 0 6.2766 -3.098l-28.69-58.007a1.888 3.5004 63.803 0 0 -0.3719 -0.4531z"
        inkscape:transform-center-x="467.01752"
        inkscape:transform-center-y="-946.46289"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5817"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-403.43 60.358a1.888 3.5004 67.795 0 0 -6.1376 3.1313l24.583 59.864a1.888 3.5004 67.795 1 0 6.4771 -2.6536l-24.583-59.864a1.888 3.5004 67.795 0 0 -0.3394 -0.4779z"
        inkscape:transform-center-x="400.00472"
        inkscape:transform-center-y="-976.67475"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5819"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-241.53 8.9388a1.888 3.5004 76.746 0 0 -6.5501 2.138l14.969 62.96a1.888 3.5004 76.746 1 0 6.811 -1.6135l-14.97-62.961a1.888 3.5004 76.746 0 0 -0.2609 -0.5249z"
        inkscape:transform-center-x="243.16165"
        inkscape:transform-center-y="-1027.0199"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5821"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-173.93-4.6054a1.888 3.5004 80.377 0 0 -6.6723 1.719l10.952 63.782a1.888 3.5004 80.377 1 0 6.8996 -1.179l-10.952-63.782a1.888 3.5004 80.377 0 0 -0.2272 -0.5404z"
        inkscape:transform-center-x="177.64633"
        inkscape:transform-center-y="-1040.3554"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5823"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-110.39-13.338a1.888 3.5004 83.754 0 0 -6.762 1.323l7.1761 64.316a1.888 3.5004 83.754 1 0 6.9571 -0.7705l-7.1762-64.316a1.888 3.5004 83.754 0 0 -0.1949 -0.5529z"
        inkscape:transform-center-x="116.05553"
        inkscape:transform-center-y="-1049.0131"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5825"
        style="block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000"
        d="m-51.038-18.083a1.888 3.5004 86.889 0 0 -6.8243 0.9512l3.6479 64.612a1.888 3.5004 86.889 1 0 6.9888 -0.3889l-3.6479-64.612a1.888 3.5004 86.889 0 0 -0.1645 -0.5627z"
        inkscape:transform-center-x="58.509766"
        inkscape:transform-center-y="-1053.7903"
        inkscape:connector-curvature="0"
    />
    <path
        id="path5829"
        style="stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3;fill:#000000"
        d="m-284.84 220.91c-38.957-1.0116-64.29-59.809-93.409-110.02-1.842-3.1766-4.2756-3.8087-4.8663-3.5696-0.59085 0.2391-1.8708 2.3741-0.98517 5.9377 14.001 56.334 36.692 116.2 9.4029 144.02 37.051 20.294 51.939 37.895 82.379 74.439l0.0353 0.0871c0.00065-0.0251 0.007-0.0452 0.005-0.0691-0.004-0.009-0.008-0.0195-0.0116-0.0288-3.5438-47.429-5.0581-70.442 7.45-110.79z"
        sodipodi:nodetypes="cszscccccc"
        inkscape:transform-center-y="-849.20654"
        inkscape:connector-curvature="0"
        inkscape:transform-center-x="340.60995"
    />
    <path
        id="path6078"
        sodipodi:nodetypes="sssssssssss"
        style="fill:url(#linearGradient6990)"
        inkscape:connector-curvature="0"
        d="m-1090.6-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.979 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.08-745.9c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.979-53.114-119.09-119.09-119.09z"
    />
  </g
  >
  <metadata
      id="metadata256"
    >
    <rdf:RDF
      >
      <cc:Work
        >
        <dc:format
          >image/svg+xml</dc:format
        >
        <dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
        />
        <cc:license
            rdf:resource="http://creativecommons.org/licenses/publicdomain/"
        />
        <dc:publisher
          >
          <cc:Agent
              rdf:about="http://openclipart.org/"
            >
            <dc:title
              >Openclipart</dc:title
            >
          </cc:Agent
          >
        </dc:publisher
        >
      </cc:Work
      >
      <cc:License
          rdf:about="http://creativecommons.org/licenses/publicdomain/"
        >
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Reproduction"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Distribution"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
        />
      </cc:License
      >
    </rdf:RDF
    >
  </metadata
  >
</svg
>

  <div class="mt-svg-cap">Posisi benar voltmeter (V) dan amperemeter (A): voltmeter dipasang <strong>paralel</strong> dengan komponen yang diukur, amperemeter dipasang <strong>seri</strong> dalam rangkaian · sumber: Wikimedia Commons, <i>File:Voltmeter and ammeter.svg</i> (CC0 — domain publik, rones)</div>
</div>`
      },
      {
        id: 'ukur-arus',
        emoji: '🌊',
        title: 'Mengukur Arus (Amperemeter → Seri)',
        body: `<p><strong>Aturan emas:</strong> amperemeter dipasang <strong>seri</strong> — rangkaian <strong>harus diputus</strong> dulu di titik pengukuran, lalu amperemeter menjadi jembatan penggantinya. Alasannya: arus pada rangkaian seri nilainya sama di semua titik, jadi arus yang melewati amperemeter = arus yang melewati komponen.</p>
<div class="mt-svg-wrap" title="Klik untuk memperbesar" onclick="openMateriImg(this.querySelector('svg'))">
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="63.701111mm"
   height="64.958504mm"
   viewBox="0 0 63.701111 64.958504"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
   sodipodi:docname="ammeter circuit.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.6937417"
     inkscape:cx="82.643126"
     inkscape:cy="145.80421"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     showgrid="true"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:window-width="1278"
     inkscape:window-height="1008"
     inkscape:window-x="1359"
     inkscape:window-y="0"
     inkscape:window-maximized="0">
    <inkscape:grid
       type="xygrid"
       id="grid52"
       originx="-80.764064"
       originy="-141.10208" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-80.764062,-90.939419)">
    <g
       id="g3096"
       transform="matrix(0.26458333,0,0,0.26458333,-28.949595,-34.97368)">
      <rect
         rx="5.8004274"
         ry="5.8004227"
         y="477.66403"
         x="545.26715"
         height="92.271019"
         width="71.058578"
         id="rect3269"
         style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#999999;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.54400015;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none" />
      <rect
         rx="5.8004227"
         ry="5.8004341"
         y="484.75101"
         x="552.95233"
         height="44.359825"
         width="56.329552"
         id="rect3271"
         style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.54400253;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none" />
      <path
         inkscape:connector-curvature="0"
         transform="matrix(2,0,0,2,-103.159,-22.5719)"
         d="m 350.7874,292.63779 a 1.7716535,1.7716535 0 0 1 -1.77165,1.77165 1.7716535,1.7716535 0 0 1 -1.77166,-1.77165 1.7716535,1.7716535 0 0 1 1.77166,-1.77166 1.7716535,1.7716535 0 0 1 1.77165,1.77166 z"
         id="path3273"
         style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.77199996;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none" />
      <path
         inkscape:connector-curvature="0"
         transform="matrix(2,0,0,2,-103.159,-22.5719)"
         d="m 357.87401,292.63779 a 1.7716535,1.7716535 0 0 1 -1.77165,1.77165 1.7716535,1.7716535 0 0 1 -1.77166,-1.77165 1.7716535,1.7716535 0 0 1 1.77166,-1.77166 1.7716535,1.7716535 0 0 1 1.77165,1.77166 z"
         id="path3275"
         style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#5599ff;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.77199996;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none" />
      <text
         transform="scale(0.973857,1.02684)"
         id="text3277"
         y="547.99316"
         x="567.18152"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.70886612px;line-height:125%;font-family:'Bitstream Vera Sans';text-align:start;writing-mode:lr-tb;text-anchor:start;display:inline;fill:#37c837;fill-opacity:1;stroke:#0b1728;stroke-width:2.00000238px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         xml:space="preserve"><tspan
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:FreeSerif;-inkscape-font-specification:FreeSerif;fill:#37c837;stroke-width:2.00000238"
           y="547.99316"
           x="567.18152"
           id="tspan3279">A</tspan></text>
      <path
         inkscape:connector-curvature="0"
         id="path2449"
         d="m 587.72926,527.27004 7.3366,-27.38058"
         style="display:inline;fill:none;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    <g
       transform="matrix(0.26458333,0,0,0.26458333,73.81875,60.352262)"
       id="g2769">
      <circle
         style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.5;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         id="circle1800"
         cx="56"
         cy="297.41666"
         r="28" />
      <path
         inkscape:connector-curvature="0"
         id="path1820"
         d="m 56,325.41665 v 14"
         style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      <path
         inkscape:connector-curvature="0"
         id="path1822"
         d="m 56,269.41665 v -14"
         style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      <path
         sodipodi:nodetypes="cc"
         id="path1836"
         d="M 61.25,279.91665 H 50.75"
         style="fill:none;stroke:#000000;stroke-width:2.00000191px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         inkscape:connector-curvature="0" />
      <path
         sodipodi:nodetypes="cc"
         id="path1838"
         d="m 56,285.16665 v -10.5"
         style="fill:none;stroke:#000000;stroke-width:2.00000191px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         inkscape:connector-curvature="0" />
      <path
         inkscape:connector-curvature="0"
         style="fill:none;stroke:#000000;stroke-width:2.00000191px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="M 61.25,314.91665 H 50.75"
         id="path1852"
         sodipodi:nodetypes="cc" />
    </g>
    <path
       style="fill:none;stroke:#000000;stroke-width:0.89999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 88.635416,127.66667 v -7.9375 h 39.687504 v -5.29167"
       id="path56"
       inkscape:connector-curvature="0" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.89999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 132.29166,114.4375 v 5.29167 h 6.61459 v 9.26041"
       id="path58"
       inkscape:connector-curvature="0" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.53452247;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="rect60"
       width="10.583333"
       height="19.84375"
       x="133.61458"
       y="128.98958"
       ry="1.322906" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.89999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 88.635416,150.15625 v 5.29167 h 50.270834 v -6.61459"
       id="path867"
       inkscape:connector-curvature="0" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:6.3499999px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="-146.58076"
       y="141.16719"
       id="text871"
       transform="rotate(-90)"><tspan
         sodipodi:role="line"
         id="tspan869"
         x="-146.58076"
         y="141.16719"
         style="stroke-width:0.26458332">Load</tspan></text>
  </g>
</svg>

  <div class="mt-svg-cap">Amperemeter dipasang seri dalam rangkaian: semua arus beban melewati amperemeter — hambatan internal amperemeter harus sangat kecil agar tidak mempengaruhi pembacaan · sumber: Wikimedia Commons, <i>File:Ammeter circuit.svg</i> (CC0 — domain publik, Maxmath12)</div>
</div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/3phase-waveform.png" alt="Gelombang sinusoidal 3 fasa" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Gelombang sinusoidal 3 fasa: tiga gelombang identik bergeser 120° satu sama lain — jumlah vektor ketiga fasa pada setiap saat = 0 (sistem seimbang) · sumber: Wikimedia Commons, <i>File:3 phase AC waveform.svg</i> (CC BY-SA 4.0)</div></div>
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
<div class="mt-img-wrap"><img class="mt-img" src="Asset%20Materi/power-triangle.png" alt="Segitiga daya" loading="lazy" onclick="openMateriImg(this)"><div class="mt-img-cap">Segitiga Daya: P (daya aktif, Watt) = sisi datar, Q (daya reaktif, VAR) = sisi tegak, S (daya semu, VA) = hipotenusa — cos φ = P/S = faktor daya · sumber: Wikimedia Commons, <i>File:Power triangle.svg</i> (CC BY-SA 4.0)</div></div>
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
<li>Uji supply voltage: apakah sesuai spesifikasi? (5V, 3,3V, 12V)</li>
li>
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
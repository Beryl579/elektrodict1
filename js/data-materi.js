// ═══════════════════════════════════════════════════════════
// MATERI — modul belajar terstruktur (konten di-embed, offline-ready)
// KaTeX: inline \(...\), display $$...$$
// ═══════════════════════════════════════════════════════════
const MATERI_MODULES = [
{
    "id": "dasar-listrik",
    "emoji": "⚡",
    "title": "Dasar Listrik",
    "subtitle": "Tegangan, arus, resistansi, hukum Ohm, daya & energi",
    "level": "Pemula",
    "durasi": "±25 menit",
    "materi": [
      "Hukum Ohm",
      "Rangkaian DC",
      "Daya & Energi"
    ],
    "sections": [
      {
        "id": "muatan",
        "emoji": "⚛️",
        "title": "Muatan & Beda Potensial",
        "body": "<p>Listrik berasal dari partikel kecil bernama <strong>elektron</strong>. Atom terdiri dari inti (proton bermuatan <strong>+</strong> dan neutron netral) yang dikelilingi elektron bermuatan <strong>−</strong>. Pada bahan konduktor seperti tembaga, sebagian elektron bisa bergerak bebas — inilah pembawa arus listrik.</p>\n<p>Muatan listrik dilambangkan \\(Q\\), satuannya <strong>coulomb (C)</strong>. Satu elektron membawa muatan sekitar \\(1{,}6 \\times 10^{-19}\\,\\text{C}\\).</p>\n<p>Ketika ada perbedaan jumlah muatan antara dua titik (satu kelebihan elektron, satu kekurangan), timbul <strong>beda potensial</strong> — energi potensial per satuan muatan yang siap menggerakkan elektron:</p>\n$$V = \\frac{W}{Q}$$\n<p>dengan \\(V\\) = tegangan (volt), \\(W\\) = energi (joule), \\(Q\\) = muatan (coulomb).</p>\n<div class=\"mt-tip\">💡 <strong>Analogi air:</strong> bayangkan dua tangki air dengan ketinggian berbeda. Beda tinggi = beda potensial; aliran air lewat pipa = arus listrik; sempitnya pipa = hambatan.</div>"
      },
      {
        "id": "tegangan",
        "emoji": "🔋",
        "title": "Tegangan (Volt)",
        "body": "<p><strong>Tegangan listrik</strong> (simbol \\(V\\), satuan <strong>volt</strong>) adalah ukuran \"tekanan\" listrik yang mendorong elektron mengalir dari titik berpotensial tinggi ke rendah. Semakin besar tegangan, semakin kuat dorongannya.</p>\n<p>Sumber tegangan umum: baterai (1,5 V; 9 V), aki (12 V), PLN (220 V AC). Tegangan diukur dengan <strong>voltmeter</strong> yang dipasang <strong>paralel</strong> terhadap komponen.</p>\n<ul>\n<li><strong>Tegangan DC</strong> — nilainya tetap terhadap waktu (baterai).</li>\n<li><strong>Tegangan AC</strong> — nilainya berubah periodik (sinusoida), misal 220 V 50 Hz di Indonesia.</li>\n</ul>"
      },
      {
        "id": "arus",
        "emoji": "🌊",
        "title": "Arus Listrik (Ampere)",
        "body": "<p><strong>Arus listrik</strong> (simbol \\(I\\), satuan <strong>ampere/A</strong>) adalah laju aliran muatan:</p>\n$$I = \\frac{Q}{t}$$\n<p>1 A = 1 coulomb per detik. Arus diukur dengan <strong>amperemeter</strong> yang dipasang <strong>seri</strong>.</p>\n<p>Arah konvensional arus digambarkan dari <strong>+ ke −</strong>, padahal sebenarnya elektron bergerak dari <strong>− ke +</strong>. Keduanya sama-sama dipakai; yang penting konsisten.</p>\n<ul>\n<li><strong>DC</strong> (searah): mengalir satu arah, misal dari baterai.</li>\n<li><strong>AC</strong> (bolak-balik): arah berubah periodik, misal dari PLN (50 Hz → berbalik 100× per detik).</li>\n</ul>\n<div class=\"mt-warn\">⚠️ <strong>Ingat:</strong> amperemeter dipasang <strong>seri</strong>; voltmeter dipasang <strong>paralel</strong>. Terbalik pasang = bisa rusak!</div>"
      },
      {
        "id": "resistansi",
        "emoji": "🧱",
        "title": "Resistansi (Ohm)",
        "body": "<p><strong>Resistansi/hambatan</strong> (simbol \\(R\\), satuan <strong>ohm/Ω</strong>) adalah kemampuan bahan menahan aliran arus. Hambatan sebuah kawat bergantung pada empat hal:</p>\n$$R = \\rho \\cdot \\frac{L}{A}$$\n<ul>\n<li>\\(\\rho\\) = resistivitas bahan (Ω·m) — tembaga kecil, karbon besar</li>\n<li>\\(L\\) = panjang kawat (m) — makin panjang makin besar hambatan</li>\n<li>\\(A\\) = luas penampang (m²) — makin tebal makin kecil hambatan</li>\n<li>suhu — umumnya hambatan naik seiring suhu</li>\n</ul>\n<p><strong>Resistor</strong> adalah komponen dengan nilai hambatan tertentu (ditandai kode warna gelang). Contoh: resistor 100 Ω, 1 kΩ, 10 kΩ. Pelajari cara membacanya di tab <strong>Resistor</strong>.</p>"
      },
      {
        "id": "ohm",
        "emoji": "🎛️",
        "title": "Hukum Ohm (+ Animasi Interaktif)",
        "body": "<p><strong>Hukum Ohm</strong> adalah hubungan dasar antara tegangan, arus, dan hambatan:</p>\n$$V = I \\cdot R$$\n<p>Arus yang mengalir sebanding dengan tegangan dan berbanding terbalik dengan hambatan. Bentuk lain:</p>\n$$I = \\frac{V}{R}, \\qquad R = \\frac{V}{I}$$\n<p><strong>Coba sendiri:</strong> geser tegangan dan hambatan, amati bagaimana arus berubah dan lampu makin terang/redup 👇</p>\n<div class=\"ohm-wrap\" id=\"ohm-anim\"></div>\n<p>Contoh aplikasi: LED butuh arus ±20 mA dan tegangan jatuh ±2 V. Jika dipasang pada 5 V, resistor seri yang dibutuhkan:</p>\n$$R = \\frac{5 - 2}{0{,}02} = 150\\,\\Omega$$"
      },
      {
        "id": "daya",
        "emoji": "💡",
        "title": "Daya & Energi",
        "body": "<p><strong>Daya listrik</strong> (simbol \\(P\\), satuan <strong>watt/W</strong>) adalah laju energi yang digunakan:</p>\n$$P = V \\cdot I$$\n<p>Kombinasi dengan hukum Ohm menghasilkan bentuk lain yang sering dipakai:</p>\n$$P = I^2 \\cdot R, \\qquad P = \\frac{V^2}{R}$$\n<p><strong>Energi listrik</strong> (simbol \\(W\\), satuan <strong>joule</strong> atau <strong>kWh</strong>):</p>\n$$W = P \\cdot t$$\n<p>PLN menagih berdasarkan energi dalam kWh (1 kWh = 1000 W selama 1 jam). Contoh: setrika 350 W dipakai 2 jam → energi = 0,35 kW × 2 jam = <strong>0,7 kWh</strong>.</p>"
      },
      {
        "id": "seri-paralel",
        "emoji": "🔗",
        "title": "Rangkaian Seri & Paralel",
        "body": "<p><strong>Seri</strong> — komponen berurutan dalam satu jalur:</p>\n$$R_{\\text{total}} = R_1 + R_2 + \\cdots$$\n<p>Arus sama di semua titik; tegangan sumber terbagi.</p>\n<p><strong>Paralel</strong> — komponen bercabang:</p>\n$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$$\n<p>Tegangan sama di tiap cabang; arus terbagi. Khusus dua resistor:</p>\n$$R_{\\text{total}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$\n<div class=\"mt-tip\">💡 Lampu rumah dipasang <strong>paralel</strong> — kalau satu mati, yang lain tetap menyala dan semua mendapat tegangan 220 V penuh.</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Hukum Ohm",
        "soal": "Sebuah resistor 1 kΩ dihubungkan ke baterai 9 V. Berapa arus yang mengalir?",
        "langkah": [
          "Tuliskan yang diketahui: \\(V = 9\\,\\text{V}\\), \\(R = 1\\,\\text{k}\\Omega = 1000\\,\\Omega\\).",
          "Gunakan hukum Ohm: \\(I = \\dfrac{V}{R}\\).",
          "Hitung: \\(I = \\dfrac{9}{1000} = 0{,}009\\,\\text{A} = 9\\,\\text{mA}\\).",
          "<strong>Jawaban:</strong> arus yang mengalir sebesar <strong>9 mA</strong>."
        ]
      },
      {
        "judul": "Daya Listrik",
        "soal": "Setrika listrik 220 V menggunakan daya 550 W. Berapa arus yang ditarik dan berapa hambatannya?",
        "langkah": [
          "Diketahui \\(V = 220\\,\\text{V}\\), \\(P = 550\\,\\text{W}\\).",
          "Hitung arus: \\(I = \\dfrac{P}{V} = \\dfrac{550}{220} = 2{,}5\\,\\text{A}\\).",
          "Hitung hambatan: \\(R = \\dfrac{V}{I} = \\dfrac{220}{2{,}5} = 88\\,\\Omega\\) (atau \\(R = \\dfrac{V^2}{P}\\)).",
          "<strong>Jawaban:</strong> arus 2,5 A dan hambatan <strong>88 Ω</strong>."
        ]
      },
      {
        "judul": "Seri & Paralel",
        "soal": "Dua resistor 100 Ω dan 300 Ω dipasang paralel, lalu hasilnya diseri dengan resistor 50 Ω. Hitung hambatan total rangkaian.",
        "langkah": [
          "Hitung paralel dulu: \\(R_p = \\dfrac{100 \\times 300}{100 + 300} = \\dfrac{30000}{400} = 75\\,\\Omega\\).",
          "Total seri: \\(R_t = R_p + 50 = 75 + 50 = 125\\,\\Omega\\).",
          "<strong>Jawaban:</strong> hambatan total rangkaian <strong>125 Ω</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Satuan SI untuk tegangan listrik adalah…",
        "opts": [
          "Ampere",
          "Volt",
          "Ohm",
          "Watt"
        ],
        "ans": 1,
        "exp": "Tegangan diukur dalam volt (V)."
      },
      {
        "q": "Manakah rumus hukum Ohm yang benar?",
        "opts": [
          "V = I / R",
          "V = I × R",
          "V = R / I",
          "V = I + R"
        ],
        "ans": 1,
        "exp": "Hukum Ohm: tegangan = arus × hambatan (V = I·R)."
      },
      {
        "q": "Ammeter (alat ukur arus) harus dipasang…",
        "opts": [
          "Paralel",
          "Seri",
          "Di mana saja",
          "Seri-paralel"
        ],
        "ans": 1,
        "exp": "Ammeter dipasang seri agar seluruh arus melewatinya. Voltmeter justru paralel."
      },
      {
        "q": "Lampu rumah umumnya dipasang secara…",
        "opts": [
          "Seri",
          "Paralel",
          "Campuran",
          "Tunggal"
        ],
        "ans": 1,
        "exp": "Paralel: tiap lampu mendapat 220 V penuh dan tetap menyala walau yang lain mati."
      },
      {
        "q": "Sebuah resistor 2 kΩ dialiri arus 5 mA. Tegangan pada resistor adalah…",
        "opts": [
          "0,4 V",
          "2,5 V",
          "10 V",
          "400 V"
        ],
        "ans": 2,
        "exp": "V = I × R = 0,005 × 2000 = 10 V."
      }
    ]
  },
{
    "id": "komponen-elektronika",
    "emoji": "🔧",
    "title": "Komponen Elektronika",
    "subtitle": "Resistor, kapasitor, dioda, LED & transistor BJT",
    "level": "Pemula",
    "durasi": "±40 menit",
    "materi": [
      "Resistor",
      "Kapasitor",
      "Dioda & LED",
      "Transistor BJT"
    ],
    "sections": [
      {
        "id": "resistor",
        "emoji": "🟫",
        "title": "Resistor & Kode Warna",
        "body": "<p><strong>Resistor</strong> adalah komponen pasif yang menghambat aliran arus listrik. Simbol \\(R\\), satuan <strong>ohm (Ω)</strong>. Nilai resistansi menentukan seberapa besar resistor menahan arus — semakin besar ohm, semakin kecil arus yang mengalir pada tegangan yang sama.</p>\n<p><strong>Sistem kode warna 4 gelang</strong> dipakai karena resistor terlalu kecil untuk dicetak angka. Cara baca: Gelang 1 = digit pertama, Gelang 2 = digit kedua, Gelang 3 = pengali (\\(10^n\\)), Gelang 4 = toleransi. Urutan warna digit:</p>\n<table class=\"mt-table\"><thead><tr><th>Warna</th><th>Digit</th><th>Pengali</th><th>Toleransi</th></tr></thead><tbody>\n<tr><td>Hitam</td><td>0</td><td>×1</td><td>—</td></tr>\n<tr><td>Coklat</td><td>1</td><td>×10</td><td>±1%</td></tr>\n<tr><td>Merah</td><td>2</td><td>×100</td><td>±2%</td></tr>\n<tr><td>Jingga</td><td>3</td><td>×1.000</td><td>—</td></tr>\n<tr><td>Kuning</td><td>4</td><td>×10.000</td><td>—</td></tr>\n<tr><td>Hijau</td><td>5</td><td>×100.000</td><td>±0,5%</td></tr>\n<tr><td>Biru</td><td>6</td><td>×1.000.000</td><td>±0,25%</td></tr>\n<tr><td>Ungu</td><td>7</td><td>×10.000.000</td><td>±0,1%</td></tr>\n<tr><td>Abu-abu</td><td>8</td><td>×100.000.000</td><td>±0,05%</td></tr>\n<tr><td>Putih</td><td>9</td><td>×1.000.000.000</td><td>—</td></tr>\n<tr><td>Emas</td><td>—</td><td>×0,1</td><td>±5%</td></tr>\n<tr><td>Perak</td><td>—</td><td>×0,01</td><td>±10%</td></tr>\n</tbody></table>\n<p><strong>Rumus nilai resistor:</strong></p>\n$$R = (digit_1 \\times 10 + digit_2) \\times pengali$$\n<p><strong>Contoh:</strong> merah-ungu-merah-emas = \\((2 \\times 10 + 7) \\times 100 = 2700\\,\\Omega = 2{,}7\\,\\text{k}\\Omega \\pm 5\\%\\).</p>\n<p><strong>Rangkaian resistor:</strong></p>\n$$R_{seri} = R_1 + R_2 + \\cdots$$\n$$\\frac{1}{R_{paralel}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$$\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/resistor-kode-warna.png\" alt=\"Tabel kode warna resistor 4 gelang\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Tabel kode warna resistor 4 gelang — urutkan dari kiri ke kanan: band 1 (digit pertama), band 2 (digit kedua), band 3 (multiplier), band 4 (toleransi) · sumber: Wikimedia Commons, <i>File:Resistor color code.svg</i> (CC BY-SA 4.0)</div></div>\n<p>👇 Coba kalkulator kode warna interaktif:</p>\n<div class=\"sim-wrap\" id=\"resistor-sim\"></div>\n<div class=\"mt-tip\">💡 Hafal urutan warna dengan: Hi-Co-Me-Ji-Ku-Hi-Bi-Un-Abu-Pu (Hitam-Coklat-Merah-Jingga-Kuning-Hijau-Biru-Ungu-Abu-Putih)</div>"
      },
      {
        "id": "kapasitor",
        "emoji": "⚡",
        "title": "Kapasitor — Penyimpan Muatan",
        "body": "<p><strong>Kapasitor</strong> terdiri dari dua pelat konduktor yang dipisahkan bahan <strong>dielektrik</strong>. Fungsinya menyimpan muatan listrik sementara — seperti ember yang menampung air untuk dilepas nanti.</p>\n<p><strong>Rumus dasar:</strong></p>\n$$Q = C \\cdot V$$\n$$C = \\varepsilon \\frac{A}{d}$$\n<p>dengan \\(Q\\) = muatan (coulomb), \\(C\\) = kapasitansi (farad/F), \\(V\\) = tegangan (volt), \\(\\varepsilon\\) = permitivitas dielektrik, \\(A\\) = luas pelat, \\(d\\) = jarak antar pelat. Nilai umum: <strong>pF</strong> (pikofarad), <strong>nF</strong> (nanofarad), <strong>μF</strong> (mikrofarad).</p>\n<p><strong>Jenis kapasitor:</strong></p>\n<ul>\n<li><strong>Elektrolit</strong> — polar (punya + dan −), 1μF–10000μF, kapasitas besar, <strong>perhatikan polaritas!</strong></li>\n<li><strong>Keramik</strong> — non-polar, 1pF–100nF, untuk decoupling & bypass frekuensi tinggi</li>\n<li><strong>Film</strong> — non-polar, presisi tinggi, stabil, untuk filter audio & rangkaian presisi</li>\n</ul>\n<p><strong>Pengisian RC:</strong> saat kapasitor diisi lewat resistor, tegangannya naik tidak instan:</p>\n$$V(t) = V_s (1 - e^{-t/RC})$$\n<p>Konstanta waktu \\(\\tau = RC\\) — setelah \\(5\\tau\\) kapasitor terisi ~99,3%.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/kapasitor-jenis.png\" alt=\"Berbagai jenis kapasitor: elektrolit, keramik, dan film\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Berbagai jenis kapasitor: elektrolit aluminium (silinder biru/hitam), keramik disc (kuning), film polypropylene (kotak oranye), dan tantalum (tetes kuning) · sumber: Wikimedia Commons, <i>File:Capacitors (7189597135).jpg</i> (CC BY 2.0, Windell Oskay / Evil Mad Scientist)</div></div>\n<p>👇 Animasi kurva pengisian RC:</p>\n<div class=\"sim-wrap\" id=\"rc-sim\"></div>\n<div class=\"mt-warn\">⚠️ Kapasitor elektrolit berpolaritas — pasang terbalik bisa meledak! Kaki panjang = + (positif).</div>"
      },
      {
        "id": "dioda",
        "emoji": "➡️",
        "title": "Dioda — Katup Arus Satu Arah",
        "body": "<p><strong>Dioda</strong> adalah sambungan semikonduktor <strong>PN junction</strong> yang mengalirkan arus hanya satu arah: dari <strong>anoda (+)</strong> ke <strong>katoda (−)</strong>. Ibarat katup air yang hanya membuka ke satu sisi.</p>\n<ul>\n<li><strong>Forward bias</strong> (anoda lebih positif dari katoda): dioda konduksi, tegangan jatuh \\(V_f \\approx 0{,}7\\text{V}\\) untuk silikon (Si), \\(0{,}3\\text{V}\\) untuk germanium (Ge), \\(2–3\\text{V}\\) untuk LED.</li>\n<li><strong>Reverse bias</strong> (katoda lebih positif): arus terblokir, hanya arus bocor sangat kecil. Jika tegangan balik terlalu besar, terjadi <em>zener breakdown</em>.</li>\n</ul>\n<p><strong>Rumus resistor pembatas untuk dioda/LED:</strong></p>\n$$R = \\frac{V_{cc} - V_f}{I_f}$$\n<p>Aplikasi: <strong>penyearah (rectifier)</strong> AC→DC, proteksi polaritas terbalik, <em>signal clamping</em>, dan regulator tegangan zener.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/dioda-kurva-vi.png\" alt=\"Kurva karakteristik V-I dioda semikonduktor\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Kurva karakteristik V-I dioda silikon: forward bias (arus naik cepat di atas ~0,7 V), reverse bias (arus hampir nol), dan breakdown (Zener) · sumber: Wikimedia Commons, <i>File:Diode current wiki.png</i> (CC BY-SA 3.0, Hldsc)</div></div>\n<div class=\"mt-tip\">💡 Cara cek dioda dengan multimeter: mode dioda, tempelkan probe merah ke anoda dan hitam ke katoda. Muncul angka ~0,6–0,7 = baik. Terbalik = OL (open). Dua arah = rusak/short.</div>"
      },
      {
        "id": "led",
        "emoji": "💡",
        "title": "LED — Dioda Pemancar Cahaya",
        "body": "<p><strong>LED (Light Emitting Diode)</strong> adalah dioda yang memancarkan cahaya saat arus forward mengalir. Elektron yang melompat di sambungan PN melepaskan energi sebagai foton.</p>\n<p><strong>Tegangan forward berdasarkan warna:</strong> Merah/Kuning ≈ \\(1{,}8–2{,}2\\text{V}\\), Hijau/Biru ≈ \\(2{,}8–3{,}5\\text{V}\\), Putih ≈ \\(3{,}0–3{,}6\\text{V}\\). Arus forward umum \\(I_f = 10–20\\,\\text{mA}\\).</p>\n<p><strong>WAJIB pasang resistor seri</strong> untuk membatasi arus:</p>\n$$R = \\frac{V_{cc} - V_f}{I_f}$$\n<p><strong>Contoh:</strong> LED merah (\\(V_f=2\\text{V}\\), \\(I_f=20\\text{mA}\\)) di 5V → \\(R = (5-2)/0{,}02 = 150\\,\\Omega\\).</p>\n<p>👇 Kalkulator resistor LED — masukkan nilai dan lihat hasilnya:</p>\n<div class=\"sim-wrap\" id=\"led-calc\"></div>\n<div class=\"mt-warn\">⚠️ Jangan sambungkan LED langsung ke sumber tegangan tanpa resistor — LED akan rusak dalam hitungan detik karena arus tidak terbatas!</div>"
      },
      {
        "id": "transistor-bjt",
        "emoji": "🔀",
        "title": "Transistor BJT — Switch & Amplifier",
        "body": "<p><strong>BJT (Bipolar Junction Transistor)</strong> adalah transistor sambungan dwikutub dengan 3 terminal: <strong>Base (B)</strong>, <strong>Collector (C)</strong>, <strong>Emitter (E)</strong>.</p>\n<p><strong>Dua tipe:</strong> <strong>NPN</strong> (arus masuk B → C-E aktif, paling umum) dan <strong>PNP</strong> (kebalikannya, arus keluar B).</p>\n<p><strong>Tiga mode kerja:</strong></p>\n<ul>\n<li><strong>Cutoff:</strong> \\(I_B \\approx 0\\), transistor OFF, \\(I_C \\approx 0\\) — sakelar terbuka.</li>\n<li><strong>Saturasi:</strong> transistor ON penuh, \\(V_{CE} \\approx 0{,}2\\text{V}\\) — sebagai <strong>switch</strong>.</li>\n<li><strong>Aktif/Linear:</strong> \\(I_C = \\beta \\times I_B\\) (sebagai <strong>amplifier</strong>), \\(\\beta\\) (hFE) biasanya 100–300.</li>\n</ul>\n<p><strong>Rumus kunci:</strong></p>\n$$I_C = \\beta \\cdot I_B$$\n<p>Transistor umum: <strong>BC547</strong> (NPN, TO-92, 100mA), <strong>2N2222</strong> (NPN, 600mA), <strong>TIP31</strong> (NPN, power).</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/transistor-bjt-pinout.png\" alt=\"Pinout transistor NPN BC547 TO-92 dan simbol rangkaian\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Pinout transistor NPN BC547 paket TO-92: kaki kiri = Collector, tengah = Base, kanan = Emitter (dilihat dari sisi datar) — verifikasi selalu dengan datasheet · sumber: Wikimedia Commons, <i>File:NPN BJT (Transistor) Pinout.svg</i> (CC BY-SA 4.0)</div></div>\n<p>👇 Simulasi switch transistor — atur arus basis dan lihat LED menyala:</p>\n<div class=\"sim-wrap\" id=\"bjt-sim\"></div>\n<div class=\"mt-tip\">💡 Transistor sebagai switch digital: Arduino GPIO (5V, maks 40mA) tidak cukup kuat untuk langsung nyalakan motor atau relay. Pakai transistor sebagai 'penguat' — sinyal kecil dari GPIO mengontrol arus besar dari catu daya terpisah.</div>"
      },
      {
        "id": "rangkaian-praktis",
        "emoji": "🛠️",
        "title": "Rangkaian Praktis: Driver LED dengan Transistor",
        "body": "<p>Rangkaian lengkap: <strong>Arduino GPIO → \\(R_{basis}\\) → Base NPN → Collector → LED + \\(R_{LED}\\) → VCC (5V)</strong>. Emitter NPN ke GND. Transistor bertindak sebagai sakelar yang dikendalikan GPIO.</p>\n<p><strong>Langkah desain step-by-step:</strong></p>\n<ol>\n<li><strong>Tentukan LED:</strong> \\(V_f=2\\text{V}\\), \\(I_f=20\\text{mA}\\)</li>\n<li><strong>Hitung \\(R_{LED}\\):</strong> \\((5-2)/0{,}02 = 150\\,\\Omega\\)</li>\n<li><strong>Tentukan \\(\\beta = 100\\), \\(I_C = 20\\text{mA}\\) → \\(I_{B}\\) minimum = \\(I_C/\\beta = 0{,}2\\text{mA}\\)</strong></li>\n<li><strong>Pakai \\(I_B = 2\\text{mA}\\)</strong> (10× overdrive untuk saturasi penuh)</li>\n<li><strong>Hitung \\(R_{basis}\\):</strong> \\((5-0{,}7)/0{,}002 = 2150\\,\\Omega\\) → pakai <strong>2,2kΩ</strong></li>\n</ol>\n<div class=\"mt-tip\">💡 Selalu overdrive basis 5–10× dari nilai minimum — ini memastikan transistor benar-benar saturasi dan \\(V_{CE}\\) mendekati 0V. Transistor yang tidak saturasi penuh akan panas dan boros.</div>\n<div class=\"mt-warn\">⚠️ Perhatikan urutan: hitung kebutuhan beban dulu (\\(I_C\\)), baru hitung \\(I_B\\), baru \\(R_{basis}\\). Urutan terbalik adalah kesalahan umum pemula.</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Baca Kode Warna Resistor",
        "soal": "Resistor dengan gelang coklat-hitam-jingga-emas bernilai berapa?",
        "langkah": [
          "Coklat = 1, Hitam = 0, Jingga = ×1.000, Emas = ±5%.",
          "Gunakan rumus: \\(R = (1 \\times 10 + 0) \\times 1000\\).",
          "Hitung: \\(R = 10 \\times 1000 = 10000\\,\\Omega = 10\\,\\text{k}\\Omega\\).",
          "<strong>Jawaban:</strong> <strong>10 kΩ ±5%</strong>."
        ]
      },
      {
        "judul": "Hitung Resistor LED",
        "soal": "LED biru (Vf=3,2V, If=15mA) dipasang pada sumber 3,3V. Berapa resistor seri yang dibutuhkan?",
        "langkah": [
          "Diketahui \\(V_{cc}=3{,}3\\text{V}\\), \\(V_f=3{,}2\\text{V}\\), \\(I_f=15\\text{mA}=0{,}015\\text{A}\\).",
          "Gunakan rumus: \\(R = \\dfrac{V_{cc}-V_f}{I_f}\\).",
          "Hitung: \\(R = \\dfrac{3{,}3-3{,}2}{0{,}015} = \\dfrac{0{,}1}{0{,}015} \\approx 6{,}7\\,\\Omega\\).",
          "<strong>Jawaban:</strong> <strong>6,7Ω → pakai 10Ω</strong> (nilai standar E12 terdekat, lebih aman)."
        ]
      },
      {
        "judul": "Konstanta Waktu RC",
        "soal": "Rangkaian RC dengan R=10kΩ dan C=100μF. Berapa konstanta waktu τ dan kapan kapasitor terisi penuh?",
        "langkah": [
          "Konversi: \\(C=100\\,\\mu\\text{F}=0{,}0001\\,\\text{F}\\).",
          "Hitung: \\(\\tau = RC = 10000 \\times 0{,}0001 = 1\\,\\text{detik}\\).",
          "Setelah \\(5\\tau = 5\\,\\text{detik}\\) kapasitor terisi \\(1-e^{-5} \\approx 99{,}3\\%\\).",
          "<strong>Jawaban:</strong> \\(\\tau = 1\\) detik, penuh ~5 detik."
        ]
      },
      {
        "judul": "Transistor sebagai Switch",
        "soal": "Motor 12V/200mA dikendalikan transistor NPN β=150. Hitung R_basis agar saturasi penuh bila GPIO 5V.",
        "langkah": [
          "Hitung \\(I_{Bmin} = I_C/\\beta = 200/150 \\approx 1{,}33\\,\\text{mA}\\).",
          "Pakai overdrive 5mA untuk saturasi (≫1,33mA).",
          "Hitung: \\(R_{basis} = (5-0{,}7)/0{,}005 = 860\\,\\Omega\\).",
          "<strong>Jawaban:</strong> <strong>860Ω → pakai 1kΩ</strong> (nilai standar)."
        ]
      }
    ],
    "soal": [
      {
        "q": "Resistor dengan gelang merah-merah-coklat-emas bernilai…",
        "opts": [
          "200Ω ±5%",
          "220Ω ±5%",
          "2200Ω ±5%",
          "22Ω ±5%"
        ],
        "ans": 1,
        "exp": "Merah=2, Merah=2, Coklat=×10 → (2×10+2)×10 = 220Ω, toleransi emas ±5%."
      },
      {
        "q": "Kapasitor elektrolit berbeda dari keramik karena…",
        "opts": [
          "Lebih kecil fisiknya",
          "Memiliki polaritas dan tidak boleh dipasang terbalik",
          "Nilainya lebih kecil",
          "Tidak bisa menyimpan muatan"
        ],
        "ans": 1,
        "exp": "Kapasitor elektrolit berpolaritas — pasang terbalik bisa rusak atau meledak. Keramik non-polar."
      },
      {
        "q": "Forward voltage dioda silikon saat konduksi adalah…",
        "opts": [
          "0,3V",
          "1,2V",
          "0,7V",
          "2,0V"
        ],
        "ans": 2,
        "exp": "Dioda silikon (Si) ≈ 0,7V saat konduksi. Germanium ≈ 0,3V."
      },
      {
        "q": "LED merah (Vf=2V, If=20mA) dipasang di 9V. Resistor seri yang dibutuhkan…",
        "opts": [
          "100Ω",
          "350Ω",
          "450Ω",
          "200Ω"
        ],
        "ans": 1,
        "exp": "R = (Vcc−Vf)/If = (9−2)/0,02 = 350Ω."
      },
      {
        "q": "Transistor BJT NPN dalam mode saturasi berfungsi sebagai…",
        "opts": [
          "Amplifier tegangan",
          "Sakelar terbuka",
          "Sakelar tertutup/ON",
          "Dioda"
        ],
        "ans": 2,
        "exp": "Saturasi = transistor ON penuh, VCE ≈ 0,2V, arus mengalir bebas dari C ke E — seperti sakelar tertutup."
      }
    ]
  },
{
    "id": "mikrokontroler",
    "emoji": "🤖",
    "title": "Mikrokontroler",
    "subtitle": "Arsitektur Arduino Uno & ESP32, pinout, PWM, I2C/SPI/UART",
    "level": "Menengah",
    "durasi": "±40 menit",
    "materi": [
      "Arduino & ESP32",
      "Pinout",
      "PWM",
      "I2C/SPI/UART"
    ],
    "sections": [
      {
        "id": "apa-itu-mcu",
        "emoji": "🧠",
        "title": "Apa itu Mikrokontroler?",
        "body": "<p><strong>Mikrokontroler (MCU)</strong> adalah komputer mini dalam satu chip: ada <strong>CPU</strong> (otak), <strong>memori</strong> (Flash untuk program, SRAM untuk variabel), dan <strong>periferal</strong> (GPIO, timer, ADC, komunikasi UART/I2C/SPI). Cukup tambah daya + komponen pendukung, langsung bisa diprogram.</p>\n<p>Berbeda dengan <strong>mikroprosesor</strong> (CPU PC) yang butuh chip RAM, chipset, dan motherboard di luar — mikrokontroler semuanya sudah satu paket, cocok untuk perangkat kecil: lampu otomatis, robot, alat ukur, IoT.</p>\n<ul>\n<li><strong>AVR</strong> — jantung Arduino Uno/Nano (ATmega328P)</li>\n<li><strong>ESP32</strong> — dual-core + WiFi/Bluetooth bawaan (IoT)</li>\n<li><strong>STM32</strong> — keluarga ARM untuk industri</li>\n<li><strong>RP2040</strong> — Raspberry Pi Pico</li>\n</ul>\n<p>Bahasa pemrograman paling umum: <strong>C/C++</strong> (Arduino IDE, PlatformIO) atau <strong>MicroPython</strong>.</p>\n<div class=\"mt-tip\">💡 Mikrokontroler = \"otak\" perangkat elektronik. Yang kita pelajari di Lab Proyek (Arduino Uno & ESP32) keduanya adalah mikrokontroler.</div>"
      },
      {
        "id": "arsitektur-uno",
        "emoji": "🏗️",
        "title": "Arsitektur Arduino Uno (ATmega328P)",
        "body": "<p>Arduino Uno ditenagai chip <strong>ATmega328P</strong> buatan Microchip (keluarga AVR):</p>\n<ul>\n<li><strong>CPU</strong>: 8-bit AVR @ 16 MHz — satu instruksi memproses 8 bit data sekaligus</li>\n<li><strong>Flash 32 KB</strong> — tempat program disimpan (2 KB dipakai bootloader)</li>\n<li><strong>SRAM 2 KB</strong> — variabel saat program berjalan (sangat terbatas!)</li>\n<li><strong>EEPROM 1 KB</strong> — data yang harus bertahan saat mati (tulis pakai <code>EEPROM.write()</code>)</li>\n<li><strong>GPIO</strong>: 14 digital (6 di antaranya PWM) + 6 analog input (ADC 10-bit)</li>\n<li><strong>Komunikasi</strong>: UART, SPI, I2C — semuanya tersedia</li>\n</ul>\n<p>Karena terbatas, menulis program Uno harus hemat: variabel pakai <code>byte</code> bukan <code>int</code> kalau bisa, hindari <code>String</code> besar.</p>\n<div class=\"mt-warn\">⚠️ 2 KB SRAM sangat kecil — satu string panjang saja bisa bikin program hang. Selalu tes dengan Serial Monitor.</div>"
      },
      {
        "id": "arsitektur-esp32",
        "emoji": "📶",
        "title": "Arsitektur ESP32 (ESP-WROOM-32)",
        "body": "<p>ESP32 jauh lebih bertenaga — ini pilihan utama untuk proyek <strong>IoT</strong> karena WiFi & Bluetooth sudah tertanam:</p>\n<ul>\n<li><strong>CPU</strong>: Xtensa LX6 <strong>dual-core 32-bit</strong> @ 240 MHz</li>\n<li><strong>SRAM 520 KB</strong> · <strong>Flash 4 MB</strong> · EEPROM emulasi di flash</li>\n<li><strong>WiFi 802.11 b/g/n</strong> + <strong>Bluetooth 4.2</strong> (Classic & BLE)</li>\n<li><strong>GPIO</strong>: 25 pin (ADC 12-bit ×18, DAC 8-bit ×2, touch ×10)</li>\n<li><strong>PWM</strong>: 16 kanal (LEDC) — lebih banyak dari Uno</li>\n<li><strong>Komunikasi</strong>: 3× UART, 2× I2C, 3× SPI</li>\n</ul>\n<table class=\"mt-table\"><thead><tr><th>Spesifikasi</th><th>Arduino Uno</th><th>ESP32 DevKitC</th></tr></thead><tbody>\n<tr><td>CPU</td><td>ATmega328P 8-bit 16 MHz</td><td>Dual-core 32-bit 240 MHz</td></tr>\n<tr><td>SRAM</td><td>2 KB</td><td>520 KB</td></tr>\n<tr><td>Flash</td><td>32 KB</td><td>4 MB</td></tr>\n<tr><td>WiFi / Bluetooth</td><td>—</td><td>Ya</td></tr>\n<tr><td>ADC</td><td>6 × 10-bit</td><td>18 × 12-bit</td></tr>\n<tr><td>Level logika</td><td>5 V</td><td><strong>3,3 V</strong> (tidak 5 V tolerant!)</td></tr>\n</tbody></table>\n<div class=\"mt-warn\">⚠️ ESP32 memakai logika 3,3 V. Memberi input 5 V langsung ke GPIO bisa <strong>merusak chip</strong> — gunakan level shifter atau pembagi tegangan.</div>"
      },
      {
        "id": "pinout-uno",
        "emoji": "📍",
        "title": "Pinout Arduino Uno",
        "body": "<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/arduino-uno-pinout.png\" alt=\"Pinout Arduino Uno\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Pinout Arduino Uno R3: digital pin 0–13 (sisi atas), analog A0–A5, pin daya, ICSP header, dan konektor USB-B · sumber: Wikimedia Commons, <i>File:Arduino-uno-pinout.png</i> (CC BY-SA 4.0, bq)</div></div>\n<ul>\n<li><strong>Daya</strong>: VIN (7–12 V), 5V, 3.3V, GND ×3, IOREF, RESET</li>\n<li><strong>Digital</strong> pin 0–13; pin bertanda <code>~</code> (3, 5, 6, 9, 10, 11) mendukung <strong>PWM</strong></li>\n<li><strong>Analog</strong> A0–A5 (ADC 10-bit) — juga bisa dipakai sebagai digital</li>\n<li><strong>UART</strong>: pin 0 = RX, pin 1 = TX</li>\n<li><strong>SPI</strong>: 10 = SS, 11 = MOSI, 12 = MISO, 13 = SCK</li>\n<li><strong>I2C</strong>: A4 = SDA, A5 = SCL</li>\n</ul>\n<p>Contoh: nyalakan LED di pin 13 (LED bawaan board) — <code>pinMode(13, OUTPUT)</code> lalu <code>digitalWrite(13, HIGH)</code>.</p>"
      },
      {
        "id": "pinout-esp32",
        "emoji": "📡",
        "title": "Pinout ESP32 DevKitC",
        "body": "<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/esp32-devkitc-pinout.png\" alt=\"Pinout ESP32 DevKitC\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Pinout ESP32 DevKitC V4: 38 pin, termasuk GPIO multifungsi (ADC/DAC/Touch/I2C/SPI/UART/PWM), 3V3, 5V (VIN), GND · sumber: Wikimedia Commons, <i>File:ESP32-Devkit-Pinout-Rev-12-9600p.png</i> (CC BY-SA 4.0, Vishnu Maiea)</div></div>\n<ul>\n<li><strong>Daya</strong>: 3V3, 5V (VIN), GND; <code>EN</code> = reset</li>\n<li><strong>GPIO aman dipakai</strong>: 2, 4, 5, 12–19, 21–27, 32, 33</li>\n<li><strong>Jangan dipakai</strong>: GPIO 6–11 (terhubung flash internal)</li>\n<li><strong>Input only</strong>: GPIO 34–39 (tidak ada output/pull-up internal)</li>\n<li><strong>I2C default</strong>: SDA = GPIO 21, SCL = GPIO 22</li>\n<li><strong>UART0</strong>: RX = GPIO 3, TX = GPIO 1 (dipakai untuk upload program)</li>\n<li><strong>VSPI</strong>: MOSI = 23, MISO = 19, SCK = 18, CS = 5</li>\n<li><strong>GPIO 0</strong> = tombol BOOT (tahan saat upload untuk mode flash)</li>\n</ul>\n<div class=\"mt-tip\">💡 Tidak semua GPIO sama! Sebelum pakai pin, cek pinout dulu — salah pin = proyek tidak jalan.</div>"
      },
      {
        "id": "pwm",
        "emoji": "🎛️",
        "title": "PWM — Mengatur Terang Lampu & Kecepatan Motor",
        "body": "<p><strong>PWM (Pulse Width Modulation)</strong> = teknik menyalakan-mematikan pin sangat cepat. Mata manusia tidak bisa mengikuti — yang terlihat adalah <strong>terang rata-rata</strong>. Rasio nyala vs periode disebut <strong>duty cycle</strong>:</p>\n$$D = \\frac{t_{\\text{on}}}{T} \\times 100\\%$$\n<p>Tegangan rata-rata yang dirasakan beban:</p>\n$$V_{\\text{rata-rata}} = D \\times V_{cc}$$\n<p>Contoh: LED 5 V dengan duty 40% → terlihat seperti diberi ±2 V.</p>\n<p><strong>Coba sendiri:</strong> geser duty cycle dan lihat bentuk gelombang + terang LED 👇</p>\n<div class=\"ohm-wrap\" id=\"pwm-anim\"></div>\n<p><strong>Arduino Uno</strong> — pin PWM: 3, 5, 6, 9, 10, 11. Nilai 0–255 (8-bit):</p>\n<pre class=\"mt-code\">void setup() { pinMode(9, OUTPUT); }\nvoid loop() {\n  analogWrite(9, 128);   // 128/255 ≈ 50% duty\n  delay(100);\n}</pre>\n<p><strong>ESP32</strong> — kanal LEDC, frekuensi & resolusi diatur sendiri:</p>\n<pre class=\"mt-code\">void setup() {\n  ledcSetup(0, 5000, 8);   // kanal 0, 5 kHz, 8-bit\n  ledcAttachPin(2, 0);     // GPIO 2 → kanal 0\n}\nvoid loop() {\n  ledcWrite(0, 128);       // 50% duty\n  delay(100);\n}</pre>"
      },
      {
        "id": "i2c",
        "emoji": "🔌",
        "title": "I2C — 2 Kabel, Banyak Perangkat",
        "body": "<p><strong>I2C (Inter-Integrated Circuit)</strong> pakai hanya <strong>2 kabel</strong>: <code>SDA</code> (data) dan <code>SCL</code> (clock), plus ground. Satu bus bisa memuat <strong>banyak perangkat</strong> — tiap perangkat punya <strong>alamat 7-bit</strong> (misal OLED 0x3C, MPU6050 0x68, DS1307 0x68).</p>\n<ul>\n<li>Kecepatan: 100 kbps (standar) sampai 3,4 Mbps</li>\n<li>Dua kabel butuh <strong>pull-up resistor</strong> (biasanya sudah ada di modul)</li>\n<li>Arduino Uno: SDA = A4, SCL = A5 · ESP32: SDA = 21, SCL = 22</li>\n</ul>\n<p>Contoh memindai perangkat I2C yang terpasang:</p>\n<pre class=\"mt-code\">#include &lt;Wire.h&gt;\nvoid setup() {\n  Serial.begin(9600);\n  Wire.begin();                 // inisialisasi bus I2C\n  for (byte addr = 1; addr &lt; 127; addr++) {\n    Wire.beginTransmission(addr);\n    if (Wire.endTransmission() == 0) {\n      Serial.print(\"Ketemu I2C di alamat 0x\");\n      Serial.println(addr, HEX);\n    }\n  }\n}\nvoid loop() {}</pre>\n<div class=\"mt-tip\">💡 I2C dipakai untuk sensor yang butuh banyak data: OLED SSD1306, MPU6050 (gyro+akselerometer), BMP180, DS1307 (RTC).</div>"
      },
      {
        "id": "spi",
        "emoji": "🔗",
        "title": "SPI — Cepat, 4 Kabel",
        "body": "<p><strong>SPI (Serial Peripheral Interface)</strong> adalah bus <strong>full-duplex</strong> paling cepat — data dikirim dan diterima bersamaan. 4 kabel:</p>\n<ul>\n<li><code>MOSI</code> — Master Out, Slave In</li>\n<li><code>MISO</code> — Master In, Slave Out</li>\n<li><code>SCK</code> — clock (disinkronkan master)</li>\n<li><code>SS/CS</code> — Chip Select, satu per slave (memilih perangkat)</li>\n</ul>\n<p>Kecepatan bisa puluhan Mbps — cocok untuk SD card, MAX7219 (dot matrix), MFRC522 (RFID), display TFT.</p>\n<pre class=\"mt-code\">#include &lt;SPI.h&gt;\nvoid setup() {\n  SPI.begin();  // Uno: MOSI=11, MISO=12, SCK=13, SS=10\n  pinMode(10, OUTPUT);\n  digitalWrite(10, HIGH);\n}\nvoid loop() {\n  digitalWrite(10, LOW);       // aktifkan slave\n  SPI.transfer(0x55);          // kirim byte\n  digitalWrite(10, HIGH);      // nonaktifkan\n  delay(100);\n}</pre>\n<div class=\"mt-warn\">⚠️ Setiap slave butuh pin CS sendiri — banyak perangkat berarti banyak kabel kontrol. Kalau hanya 1 perangkat, CS bisa di-ground.</div>"
      },
      {
        "id": "uart",
        "emoji": "📡",
        "title": "UART — Serial Paling Umum",
        "body": "<p><strong>UART (Universal Asynchronous Receiver/Transmitter)</strong> memakai 2 kabel: <code>TX</code> (kirim) dan <code>RX</code> (terima) — <strong>disilang</strong> (TX perangkat A → RX perangkat B). Tidak ada clock: kecepatan disepakati lewat <strong>baud rate</strong>.</p>\n<ul>\n<li>Baud umum: 9600, 57600, 115200 — artinya <strong>bit per detik</strong></li>\n<li>Format umum: 8 data bit, 1 stop bit, tanpa paritas (8N1)</li>\n<li>Serial Monitor Arduino IDE memakai UART0 (Uno: pin 0/1)</li>\n</ul>\n<pre class=\"mt-code\">void setup() {\n  Serial.begin(9600);          // mulai serial 9600 baud\n  Serial.println(\"ElektroDict!\");  // kirim teks\n}\nvoid loop() {\n  if (Serial.available()) {    // ada data masuk?\n    char c = Serial.read();\n    Serial.print(\"Diterima: \");\n    Serial.println(c);\n  }\n}</pre>\n<div class=\"mt-tip\">💡 UART cocok untuk komunikasi 1-ke-1: GPS, modul HC-05 (Bluetooth), LoRa, dan debugging via Serial Monitor.</div>"
      },
      {
        "id": "perbandingan",
        "emoji": "⚖️",
        "title": "Perbandingan I2C vs SPI vs UART",
        "body": "<table class=\"mt-table\"><thead><tr><th>Aspek</th><th>I2C</th><th>SPI</th><th>UART</th></tr></thead><tbody>\n<tr><td>Kabel</td><td>2 (SDA, SCL)</td><td>4 (MOSI, MISO, SCK, CS)</td><td>2 (TX, RX)</td></tr>\n<tr><td>Kecepatan</td><td>100 kbps – 3,4 Mbps</td><td>Mbps – puluhan Mbps</td><td>hingga ±5 Mbps</td></tr>\n<tr><td>Mode</td><td>Half-duplex</td><td>Full-duplex</td><td>Full-duplex</td></tr>\n<tr><td>Banyak perangkat</td><td>Ya (alamat)</td><td>Ya (CS per slave)</td><td>1-ke-1</td></tr>\n<tr><td>Sinkronisasi</td><td>Ya (SCL)</td><td>Ya (SCK)</td><td>Tidak (asinkron)</td></tr>\n<tr><td>Contoh modul</td><td>OLED, MPU6050, RTC</td><td>SD card, MAX7219, RFID</td><td>GPS, HC-05, Serial Monitor</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 Aturan praktis: sedikit kabel & banyak sensor → <strong>I2C</strong>; butuh kecepatan tinggi → <strong>SPI</strong>; komunikasi jarak jauh/1 lawan 1 → <strong>UART</strong>.</div><div class=\"mt-tip\">📚 <strong>Lanjutkan belajar:</strong> Pelajari lebih dalam di modul <a href=\"#\" onclick=\"openMateri('mcu-lanjut')\">Pemrograman MCU Lanjut</a> — FreeRTOS, Interrupt & OTA.</div> → <strong>I2C</strong>; butuh kecepatan tinggi → <strong>SPI</strong>; komunikasi jarak jauh/1 lawan 1 → <strong>UART</strong>.</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Duty Cycle PWM",
        "soal": "LED diberi PWM 5 V dengan duty cycle 40%. Berapa tegangan rata-rata yang \"dirasakan\" LED?",
        "langkah": [
          "Diketahui \\(V_{cc} = 5\\,\\text{V}\\), \\(D = 40\\% = 0{,}4\\).",
          "Gunakan rumus: \\(V_{\\text{rata-rata}} = D \\times V_{cc}\\).",
          "Hitung: \\(V_{\\text{rata-rata}} = 0{,}4 \\times 5 = 2\\,\\text{V}\\).",
          "<strong>Jawaban:</strong> LED terlihat seperti diberi tegangan <strong>2 V</strong>."
        ]
      },
      {
        "judul": "Memilih Pin ESP32",
        "soal": "Di ESP32, GPIO mana yang TIDAK boleh dipakai untuk mengendalikan output LED, dan mengapa?",
        "langkah": [
          "GPIO yang tidak boleh dipakai: <strong>6, 7, 8, 9, 10, 11</strong>.",
          "Alasan: pin tersebut terhubung ke <strong>flash memory internal</strong> ESP32.",
          "Juga hindari GPIO 34–39 untuk output karena <strong>input only</strong> (tanpa pull-up internal).",
          "<strong>Jawaban:</strong> pakai GPIO aman seperti 2, 4, 5, 12–19, 21–27, 32, 33."
        ]
      },
      {
        "judul": "Memilih Bus Komunikasi",
        "soal": "Kamu ingin menghubungkan 3 sensor: OLED (butuh banyak data), SD card (kecepatan tinggi), dan modul Bluetooth HC-05. Bus apa yang paling cocok untuk masing-masing?",
        "langkah": [
          "<strong>OLED</strong> → <strong>I2C</strong>: hanya 2 kabel, alamat 7-bit, cukup untuk data tampilan.",
          "<strong>SD card</strong> → <strong>SPI</strong>: butuh kecepatan tinggi (menulis file), 4 kabel.",
          "<strong>HC-05</strong> → <strong>UART</strong>: komunikasi asinkron 1-ke-1 dengan perangkat luar.",
          "<strong>Jawaban:</strong> OLED=I2C, SD=SPI, HC-05=UART."
        ]
      }
    ],
    "soal": [
      {
        "q": "Chip (MCU) yang dipakai Arduino Uno adalah…",
        "opts": [
          "ATmega328P",
          "ESP32",
          "STM32F103",
          "RP2040"
        ],
        "ans": 0,
        "exp": "Arduino Uno memakai ATmega328P (AVR 8-bit 16 MHz)."
      },
      {
        "q": "Pin Arduino Uno yang mendukung PWM adalah…",
        "opts": [
          "0, 1, 2, 3, 4, 5",
          "3, 5, 6, 9, 10, 11",
          "A0–A5",
          "Semua pin"
        ],
        "ans": 1,
        "exp": "Pin bertanda ~ (3, 5, 6, 9, 10, 11) punya hardware PWM."
      },
      {
        "q": "GPIO ESP32 yang bersifat input-only (tidak bisa output) adalah…",
        "opts": [
          "GPIO 0–5",
          "GPIO 6–11",
          "GPIO 34–39",
          "GPIO 21–22"
        ],
        "ans": 2,
        "exp": "GPIO 34–39 hanya bisa input, tanpa pull-up internal."
      },
      {
        "q": "Bus I2C menggunakan berapa kabel data/clock?",
        "opts": [
          "1 (SDA saja)",
          "2 (SDA dan SCL)",
          "3 (MOSI, MISO, SCK)",
          "4 (TX, RX, VCC, GND)"
        ],
        "ans": 1,
        "exp": "I2C hanya 2 kabel: SDA (data) + SCL (clock), bisa banyak perangkat via alamat."
      },
      {
        "q": "Serial.begin(9600) pada UART berarti…",
        "opts": [
          "9600 byte per detik",
          "9600 bit per detik",
          "9600 volt",
          "9600 Hz"
        ],
        "ans": 1,
        "exp": "Baud rate 9600 = 9600 bit per detik."
      }
    ]
  },
{
    "id": "mcu-lanjut",
    "emoji": "🧠",
    "title": "Pemrograman MCU Lanjut",
    "subtitle": "Interrupt, Timer Hardware, FreeRTOS, Deep Sleep & OTA pada ESP32/ATmega",
    "level": "Lanjut",
    "durasi": "±40 menit",
    "materi": [
      "Interrupt & ISR",
      "Timer Hardware",
      "FreeRTOS",
      "Sinkronisasi Task",
      "Deep Sleep",
      "OTA Update"
    ],
    "sections": [
      {
        "id": "interrupt-isr",
        "emoji": "⚡",
        "title": "Interrupt & ISR",
        "body": "<p><strong>Interrupt</strong> adalah sinyal yang menghentikan eksekusi program utama untuk menjalankan rutin khusus bernama <strong>ISR (Interrupt Service Routine)</strong>. Berbeda dengan <em>polling</em> yang terus mengecek pin, interrupt membuat MCU responsif dan hemat siklus CPU.</p>\n<p>Pada Arduino, interrupt eksternal tersedia di pin 2 & 3 (Uno) dan hampir semua GPIO (ESP32). Fungsi <code>attachInterrupt()</code> mengaitkan pin dengan ISR:</p>\n<pre><code class=\"lang-cpp\">volatile bool flag = false;  // WAJIB volatile karena diubah di ISR\n\nvoid IRAM_ATTR isrTombol() {\n  flag = true;               // ISR harus SECEPAT mungkin, jangan delay/Serial!\n}\n\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  attachInterrupt(digitalPinToInterrupt(2), isrTombol, FALLING);\n  // mode: RISING, FALLING, CHANGE, LOW\n}\n\nvoid loop() {\n  if (flag) {\n    flag = false;\n    Serial.println(\"Tombol ditekan via interrupt!\");\n  }\n}</code></pre>\n<p><strong>Aturan ISR:</strong> (1) pakai <code>volatile</code> untuk variabel yang dibagi, (2) jangan pakai <code>delay()</code>, <code>Serial.print()</code> lama, atau alokasi memori di ISR, (3) debounce tombol dengan jeda waktu / filter RC.</p>\n<pre><code class=\"lang-cpp\">volatile unsigned long last = 0;\nvoid IRAM_ATTR isrDebounce() {\n  unsigned long now = millis();\n  if (now - last > 50) {   // 50 ms debounce\n    flag = true;\n    last = now;\n  }\n}</code></pre>\n<div class=\"mt-tip\">💡 Interrupt cocok untuk tombol, encoder, sensor gerak — semua kejadian yang tidak boleh terlewat walau program sedang sibuk <code>delay()</code>.</div>\n<div class=\"mt-warn\">⚠️ Jangan lakukan kerja berat di ISR. ISR yang lama akan memblokir interrupt lain dan bikin WiFi/BLE ESP32 terganggu.</div>"
      },
      {
        "id": "timer-hardware",
        "emoji": "⏱️",
        "title": "Timer Hardware ATmega328P",
        "body": "<p><strong>Timer hardware</strong> adalah pencacah yang berjalan independen dari CPU, didorong clock 16 MHz (Uno). Berbeda dengan <code>millis()</code> yang bergantung pada Timer0 dan bisa jitter, timer hardware presisi hingga mikrodetik.</p>\n<p>ATmega328P punya 3 timer: Timer0 (8-bit, dipakai millis), Timer1 (16-bit, paling fleksibel), Timer2 (8-bit, untuk PWM). Setiap timer punya <strong>prescaler</strong> untuk membagi clock:</p>\n$$f_{timer} = \\frac{f_{CPU}}{prescaler}, \\qquad prescaler \\in \\{1,8,64,256,1024\\}$$\n<p><strong>Mode CTC (Clear Timer on Compare Match)</strong> — timer menghitung sampai nilai <code>OCRnA</code>, lalu reset dan memicu interrupt:</p>\n<pre><code class=\"lang-cpp\">// Timer1 CTC 1 Hz (1 detik) di Uno 16 MHz\nvoid setup() {\n  noInterrupts();\n  TCCR1A = 0; TCCR1B = 0;\n  TCNT1  = 0;\n  OCR1A = 15624;  // 16MHz / 1024 / 1Hz -1\n  TCCR1B |= (1 << WGM12);                    // CTC mode\n  TCCR1B |= (1 << CS12) | (1 << CS10);       // prescaler 1024\n  TIMSK1 |= (1 << OCIE1A);                   // enable compare interrupt\n  interrupts();\n}\nISR(TIMER1_COMPA_vect) {\n  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN)); // toggle tiap 1 detik\n}\nvoid loop() { /* program bebas tanpa delay! */ }</code></pre>\n<table class=\"mt-table\"><thead><tr><th>Metode</th><th>Presisi</th><th>Blokir CPU?</th><th>Cocok untuk</th></tr></thead><tbody>\n<tr><td><code>delay()</code></td><td>buruk (±ms, blokir)</td><td>Ya</td><td>Tidak disarankan</td></tr>\n<tr><td><code>millis()</code></td><td>±1 ms</td><td>Tidak</td><td>Blink, debounce</td></tr>\n<tr><td>Timer CTC</td><td>±µs, jitter kecil</td><td>Tidak</td><td>PWM presisi, sampling ADC, ISR periodik</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 Di ESP32, gunakan <code>hw_timer_t *timer = timerBegin(0, 80, true)</code> — prescaler 80 → 1 MHz tick (1 µs per hitung).</div>"
      },
      {
        "id": "freertos-intro",
        "emoji": "🧩",
        "title": "FreeRTOS di ESP32 — Task & Scheduler",
        "body": "<p><strong>RTOS (Real-Time Operating System)</strong> memungkinkan MCU menjalankan banyak <em>task</em> seakan paralel. Di ESP32, <strong>FreeRTOS</strong> sudah tertanam — dual-core bisa menjalankan task di core 0 & 1 bersamaan.</p>\n<p>Konsep inti: <strong>task</strong> = fungsi yang berjalan tanpa henti, diatur <strong>scheduler</strong> berdasarkan <strong>prioritas</strong>. Prioritas lebih tinggi → didahulukan.</p>\n<pre><code class=\"lang-cpp\">#include <Arduino.h>\n\nvoid TaskKedip(void *pv) {\n  pinMode(2, OUTPUT);\n  for(;;) {\n    digitalWrite(2, HIGH);\n    vTaskDelay(500 / portTICK_PERIOD_MS);\n    digitalWrite(2, LOW);\n    vTaskDelay(500 / portTICK_PERIOD_MS);\n  }\n}\nvoid TaskCetak(void *pv) {\n  int n = 0;\n  for(;;) {\n    Serial.printf(\"Hitung: %d (core %d)\\n\", n++, xPortGetCoreID());\n    vTaskDelay(1000 / portTICK_PERIOD_MS);\n  }\n}\nvoid setup() {\n  Serial.begin(115200);\n  xTaskCreatePinnedToCore(TaskKedip, \"Kedip\", 2048, NULL, 1, NULL, 0);\n  xTaskCreatePinnedToCore(TaskCetak, \"Cetak\", 2048, NULL, 2, NULL, 1);\n  // prioritas Cetak (2) > Kedip (1)\n}\nvoid loop() { vTaskDelay(1000 / portTICK_PERIOD_MS); }</code></pre>\n<p><strong>Fungsi penting:</strong> <code>xTaskCreate()</code> — buat task, <code>vTaskDelay(ms / portTICK_PERIOD_MS)</code> — jeda tanpa block scheduler (jangan pakai <code>delay()</code> di task!), <code>vTaskDelete(NULL)</code> — hapus diri sendiri.</p>\n<div class=\"mt-tip\">💡 Stack size 2048 kata cukup untuk task sederhana; task WiFi/BLE butuh 4096+. Cek sisa stack dengan <code>uxTaskGetStackHighWaterMark(NULL)</code>.</div>"
      },
      {
        "id": "freertos-sync",
        "emoji": "🔗",
        "title": "FreeRTOS Sinkronisasi — Queue, Semaphore & Mutex",
        "body": "<p>Task yang berjalan paralel perlu berkomunikasi aman. FreeRTOS menyediakan <strong>Queue</strong> (antrean pesan), <strong>Semaphore</strong> (sinyal), dan <strong>Mutex</strong> (kunci).</p>\n<p><strong>Queue</strong> — kirim data antar task tanpa race condition:</p>\n<pre><code class=\"lang-cpp\">QueueHandle_t q;\nvoid TaskSensor(void *pv){\n  int suhu = 0;\n  for(;;){\n    suhu = analogRead(34);\n    xQueueSend(q, &suhu, portMAX_DELAY);\n    vTaskDelay(1000 / portTICK_PERIOD_MS);\n  }\n}\nvoid TaskDisplay(void *pv){\n  int data;\n  for(;;){\n    if(xQueueReceive(q, &data, portMAX_DELAY)){\n      Serial.printf(\"Suhu: %d\\n\", data);\n    }\n  }\n}\nvoid setup(){\n  q = xQueueCreate(10, sizeof(int)); // 10 slot\n  xTaskCreate(TaskSensor, \"Sensor\", 2048, NULL, 1, NULL);\n  xTaskCreate(TaskDisplay, \"Display\", 2048, NULL, 1, NULL);\n}</code></pre>\n<p><strong>Binary Semaphore</strong> — sinkronisasi kejadian (mis. ISR → task): <code>xSemaphoreCreateBinary()</code>, <code>xSemaphoreGiveFromISR()</code> di ISR, <code>xSemaphoreTake()</code> di task.</p>\n<p><strong>Mutex</strong> — kunci akses resource bersama (mis. I2C bus):</p>\n<pre><code class=\"lang-cpp\">SemaphoreHandle_t i2cMutex;\nvoid TaskA(void *pv){\n  for(;;){\n    if(xSemaphoreTake(i2cMutex, portMAX_DELAY)){\n      // akses OLED via I2C\n      xSemaphoreGive(i2cMutex);\n    }\n    vTaskDelay(100 / portTICK_PERIOD_MS);\n  }\n}</code></pre>\n<div class=\"mt-tip\">💡 Gunakan Queue untuk <em>kirim data</em>, Semaphore untuk <em>sinyal kejadian</em>, Mutex untuk <em>proteksi resource bersama</em>. Pilih yang tepat agar tidak deadlock.</div>"
      },
      {
        "id": "deep-sleep-esp32",
        "emoji": "😴",
        "title": "Deep Sleep ESP32 — Hemat Daya Maksimal",
        "body": "<p>ESP32 punya beberapa mode sleep — dari yang ringan hingga hampir mati total. Untuk sensor baterai, <strong>Deep Sleep</strong> adalah kuncinya.</p>\n<table class=\"mt-table\"><thead><tr><th>Mode</th><th>Arus tipikal</th><th>RAM</th><th>Wake-up</th></tr></thead><tbody>\n<tr><td>Active</td><td>160–260 mA</td><td>ON</td><td>-</td></tr>\n<tr><td>Modem-sleep</td><td>~20 mA</td><td>ON</td><td>WiFi dimatikan</td></tr>\n<tr><td>Light Sleep</td><td>~0,8 mA</td><td>ON</td><td>Timer, GPIO</td></tr>\n<tr><td><strong>Deep Sleep</strong></td><td><strong>~10 µA</strong></td><td><strong>OFF (RTC ON)</strong></td><td>Timer, ext0/ext1, touch, ULP</td></tr>\n<tr><td>Hibernation</td><td>~2,5 µA</td><td>OFF</td><td>Hanya RTC</td></tr>\n</tbody></table>\n<p>Hanya memori <strong>RTC</strong> yang bertahan saat deep sleep — gunakan <code>RTC_DATA_ATTR</code>:</p>\n<pre><code class=\"lang-cpp\">#include <esp_sleep.h>\nRTC_DATA_ATTR int bootCount = 0;\n\nvoid setup(){\n  Serial.begin(115200);\n  ++bootCount;\n  Serial.printf(\"Boot ke-%d, bangun karena %d\\n\", bootCount, esp_sleep_get_wakeup_cause());\n\n  // kerja: baca sensor lalu kirim\n  int adc = analogRead(34);\n  Serial.printf(\"ADC: %d\\n\", adc);\n\n  // set wake-up 10 detik\n  esp_sleep_enable_timer_wakeup(10 * 1000000ULL);\n  Serial.println(\"Masuk deep sleep 10 dtk...\");\n  Serial.flush();\n  esp_deep_sleep_start();\n}\nvoid loop(){}</code></pre>\n<p><strong>Wake-up lain:</strong> <code>esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 0)</code> — bangun jika tombol ditekan ke LOW, <code>esp_sleep_enable_touchpad_wakeup()</code> — sentuh pin.</p>\n<div class=\"mt-tip\">💡 Sensor yang kirim tiap 10 menit → deep sleep 10 menit → baterai 18650 2600 mAh bisa tahan <strong>bulanan</strong>, bukan jam!</div>"
      },
      {
        "id": "ota-update",
        "emoji": "📡",
        "title": "OTA Update — Update Firmware Tanpa Kabel",
        "body": "<p><strong>OTA (Over-The-Air)</strong> memungkinkan update program ESP32 lewat WiFi — tak perlu colok USB. Wajib untuk perangkat yang sudah terpasang di lapangan/ atap/ sawah.</p>\n<p>Library paling mudah: <strong>ArduinoOTA</strong>:</p>\n<pre><code class=\"lang-cpp\">#include <WiFi.h>\n#include <ArduinoOTA.h>\nconst char* ssid = \"NamaWiFi\";\nconst char* pass = \"Password\";\nvoid setup(){\n  Serial.begin(115200);\n  WiFi.begin(ssid, pass);\n  while(WiFi.status()!=WL_CONNECTED){ delay(300); Serial.print(\".\"); }\n  Serial.println(WiFi.localIP());\n\n  ArduinoOTA.setHostname(\"esp32-ota\");\n  ArduinoOTA.setPassword(\"admin123\"); // opsional\n\n  ArduinoOTA.onStart([](){ Serial.println(\"Mulai OTA\"); });\n  ArduinoOTA.onEnd([](){ Serial.println(\"OTA selesai, reboot\"); });\n  ArduinoOTA.onError([](ota_error_t e){ Serial.printf(\"Error %u\\n\", e); });\n\n  ArduinoOTA.begin();\n  Serial.println(\"OTA siap\");\n}\nvoid loop(){\n  ArduinoOTA.handle(); // WAJIB dipanggil sesering mungkin\n  // program utama di sini\n}</code></pre>\n<p>Cara pakai: di Arduino IDE pilih Port → Network ports → esp32-ota, lalu Upload seperti biasa.</p>\n<div class=\"mt-warn\">⚠️ Pastikan power stabil saat OTA — gagal di tengah bisa corrupt firmware. Untuk produksi, pertimbangkan <strong>OTA dua partisi + rollback</strong> (ESP-IDF / AsyncElegantOTA).</div>\n<div class=\"mt-tip\">💡 Kombinasikan OTA + Deep Sleep? Pastikan perangkat bangun cukup lama untuk jendela OTA (mis. 30 detik tiap bangun) atau pakai wake-up via tombol khusus OTA.</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Menghitung OCR1A untuk Timer 1 detik",
        "soal": "ATmega328P 16 MHz, prescaler 1024, ingin interrupt tiap 1 detik dengan Timer1 CTC. Berapa nilai OCR1A?",
        "langkah": [
          "Rumus: OCR1A = f_CPU / (prescaler × f_target) − 1.",
          "f_CPU = 16.000.000 Hz, prescaler = 1024, f_target = 1 Hz.",
          "Hitung: OCR1A = 16.000.000 / (1024 × 1) − 1 = 15625 − 1 = 15624.",
          "<strong>Jawaban:</strong> <strong>OCR1A = 15624</strong>. Untuk 0,5 detik → 7812."
        ]
      },
      {
        "judul": "Stack Task FreeRTOS",
        "soal": "Dua task: Task A kedip LED, Task B baca sensor + kirim Queue. Berapa stack yang dialokasikan dan kenapa Task B lebih prioritas?",
        "langkah": [
          "Task A (kedip): stack 2048 cukup (hanya digitalWrite + delay).",
          "Task B (sensor+Queue): stack 2048–4096 karena pakai analogRead + Queue + Serial.",
          "Prioritas: Task B = 2, Task A = 1 — sensor tidak boleh telat, LED boleh jitter sedikit.",
          "<strong>Jawaban:</strong> Alokasikan <strong>2048 untuk A, 3072 untuk B</strong>, prioritas B lebih tinggi."
        ]
      }
    ],
    "soal": [
      {
        "q": "Keyword yang wajib untuk variabel yang dibagi antara ISR dan loop() adalah…",
        "opts": [
          "static",
          "volatile",
          "const",
          "extern"
        ],
        "ans": 1,
        "exp": "volatile mencegah compiler meng-cache variabel; ISR bisa mengubahnya kapan saja."
      },
      {
        "q": "Fungsi untuk menunda task FreeRTOS tanpa memblokir scheduler adalah…",
        "opts": [
          "delay()",
          "delayMicroseconds()",
          "vTaskDelay()",
          "sleep()"
        ],
        "ans": 2,
        "exp": "vTaskDelay() memberi kesempatan scheduler menjalankan task lain; delay() memblokir."
      },
      {
        "q": "Agar ISR tombol tidak kepicu berulang karena pantulan (bounce), teknik yang dipakai adalah…",
        "opts": [
          "Menambah resistor besar",
          "Debounce 30–50 ms di ISR/task",
          "Menaikkan clock",
          "Mematikan interrupt"
        ],
        "ans": 1,
        "exp": "Debounce dengan jeda 30–50 ms (via millis() atau filter) mengatasi pantulan mekanik."
      },
      {
        "q": "Mode sleep ESP32 dengan arus ~10 µA dan hanya RTC yang hidup adalah…",
        "opts": [
          "Modem-sleep",
          "Light sleep",
          "Deep sleep",
          "Active"
        ],
        "ans": 2,
        "exp": "Deep sleep ≈10 µA, RAM mati kecuali RTC; light sleep masih ~0,8 mA."
      },
      {
        "q": "Sebelum OTA update, hal penting yang harus dipastikan adalah…",
        "opts": [
          "Cabut semua sensor",
          "WiFi terhubung dan power stabil",
          "Hapus semua task FreeRTOS",
          "Matikan Serial"
        ],
        "ans": 1,
        "exp": "OTA butuh WiFi stabil dan catu daya tidak boleh padam di tengah flashing."
      }
    ]
  },
{
    "id": "instalasi-k3",
    "emoji": "🛡️",
    "title": "Instalasi Listrik & K3",
    "subtitle": "PUIL 2011, KHA kabel, pengaman MCB/ELCB, pentanahan, IP rating & 5 Aturan Emas",
    "level": "Pemula",
    "durasi": "±30 menit",
    "materi": [
      "PUIL 2011",
      "KHA Kabel",
      "MCB & ELCB",
      "Pentanahan",
      "IP Rating",
      "K3"
    ],
    "sections": [
      {
        "id": "komponen",
        "emoji": "🔌",
        "title": "Sistem Kelistrikan Rumah & Komponen Utama",
        "body": "<p>Instalasi rumah standar di Indonesia (1 fasa, 220 V) mengalir dari <strong>jaringan PLN</strong> → <strong>kWh meter</strong> (mencatat pemakaian energi) → <strong>MCB utama</strong> → <strong>ELCB/RCD</strong> → <strong>MCB grup</strong> (per ruangan/beban) → beban (lampu, stopkontak, AC).</p>\n<ul>\n<li><strong>kWh meter</strong> — alat ukur energi terpakai (kWh), dasar perhitungan tagihan.</li>\n<li><strong>MCB</strong> — pengaman arus lebih & hubung singkat; bisa di-reset setelah trip.</li>\n<li><strong>ELCB/RCD</strong> — mendeteksi arus bocor ke tanah dan memutus suplai dalam milidetik.</li>\n<li><strong>Pentanahan (grounding)</strong> — jalur aman bagi arus gangguan menuju bumi.</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/mcb.jpg\" alt=\"MCB (Miniature Circuit Breaker) satu kutub pada rel DIN\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">MCB satu kutub pada rel DIN · sumber: Wikimedia Commons, <i>File:Miniature circuit breaker.png</i> (CC BY-SA 4.0, Entekelec)</div></div>\n<div class=\"mt-warn\">⚠️ Urutan pengaman yang benar: MCB utama → ELCB → MCB grup. ELCB diletakkan <strong>setelah</strong> MCB utama agar bisa memutus seluruh instalasi saat terjadi kebocoran.</div>",
        "referensi": "PUIL 2011 (SNI 0225:2011), Bab 3 — pengaman & koordinasi pengaman; IEC 60898 untuk MCB; gambar: Wikimedia Commons, File:Miniature circuit breaker.png (CC BY-SA 4.0, Entekelec)."
      },
      {
        "id": "kha",
        "emoji": "📏",
        "title": "KHA Kabel & Ukuran Penampang",
        "body": "<p><strong>KHA (Kemampuan Hantar Arus)</strong> adalah arus maksimum yang boleh dialirkan kabel secara terus-menerus tanpa merusak isolasinya. Ukuran kabel dipilih agar <strong>KHA ≥ arus beban</strong>.</p>\n<p>Nilai KHA yang umum dipakai untuk kabel <strong>NYA</strong> (inti tembaga, isolasi PVC, metode pemasangan B1 — dalam pipa, suhu lingkungan 30 °C):</p>\n<table class=\"mt-table\"><thead><tr><th>Luas penampang</th><th>KHA (A)</th></tr></thead><tbody>\n<tr><td>1,5 mm²</td><td>≈ 18 A</td></tr>\n<tr><td>2,5 mm²</td><td>≈ 25 A</td></tr>\n<tr><td>4 mm²</td><td>[perlu verifikasi] — lihat Tabel 7.3-1 PUIL 2011</td></tr>\n<tr><td>6 mm²</td><td>[perlu verifikasi] — lihat Tabel 7.3-1 PUIL 2011</td></tr>\n</tbody></table>\n<p>Nilai sebenarnya <strong>bervariasi</strong> menurut metode pemasangan (A1, B1, C, …), jumlah penghantar berbeban, dan suhu lingkungan — untuk kasus spesifik selalu cek <strong>Tabel 7.3-1 PUIL 2011</strong>.</p>\n<p>Selain KHA, PUIL 2011 menetapkan <strong>penampang minimum</strong>: <strong>1,5 mm²</strong> untuk sirkuit penerangan dan <strong>2,5 mm²</strong> untuk sirkuit tenaga (stopkontak).</p>\n<div class=\"mt-tip\">💡 Aturan koordinasi: arus pengenal pengaman (In MCB) harus ≤ KHA kabel — supaya MCB putus <em>sebelum</em> kabel panas. Contoh: kabel 1,5 mm² (KHA 18 A) aman dipasangi MCB 10 A atau 16 A.</div>",
        "referensi": "PUIL 2011 (SNI 0225:2011), Tabel 7.3-1 (KHA) & Pasal 7.3 (penampang minimum 1,5 mm² penerangan / 2,5 mm² tenaga). Nilai 18 A & 25 A adalah nilai yang umum diajarkan untuk NYA metode B1; nilai ukuran lebih besar bervariasi per metode — [perlu verifikasi] per Tabel 7.3-1."
      },
      {
        "id": "drop",
        "emoji": "⚡",
        "title": "Susut Tegangan (Drop Tegangan)",
        "body": "<p>Makin panjang kabel, makin besar tegangan yang \"hilang\" di sepanjang penghantar. Susut tegangan dihitung dari hambatan kawat:</p>\n$$R = \\rho \\cdot \\frac{L}{A} \\qquad \\Rightarrow \\qquad \\Delta V = 2 \\cdot I \\cdot R$$\n<p>Faktor 2 muncul karena arus melewati <strong>dua penghantar</strong> (fasa + netral) pada sistem 1 fasa. Resistivitas tembaga \\(\\rho_{Cu} \\approx 0{,}0175\\,\\Omega\\cdot\\text{mm}^2/\\text{m}\\).</p>\n<p><strong>PUIL 2011 membatasi susut tegangan instalasi akhir maksimum 4%</strong> dari tegangan sumber (220 V → maksimum ±8,8 V).</p>\n<div class=\"mt-tip\">💡 Contoh: kabel NYA 2,5 mm² (R ≈ 7 mΩ/m) sepanjang 20 m dialiri 10 A → ΔV = 2 × 10 × (0,007 × 20) = 2,8 V ≈ 1,3% — masih aman di bawah 4%.</div>",
        "referensi": "PUIL 2011 (SNI 0225:2011), Pasal 2.3 — susut tegangan maksimum 4% untuk instalasi akhir; rumus hambatan konduktor (fisika dasar, ρ tembaga = 0,0175 Ω·mm²/m)."
      },
      {
        "id": "pengaman",
        "emoji": "🛡️",
        "title": "Pengaman: MCB, ELCB & RCBO",
        "body": "<p><strong>MCB (Miniature Circuit Breaker)</strong> memutus rangkaian saat <strong>arus lebih</strong> (beban berlebih) atau <strong>hubung singkat</strong>. Trip-nya ganda: <em>thermal</em> (bimetal, lambat — untuk arus lebih kecil) dan <em>magnetik</em> (sangat cepat — untuk hubung singkat). Arus pengenal umum: 6, 10, 16, 20, 25, 32 A; karakteristik trip dibedakan kurva B/C/D.</p>\n<p><strong>ELCB/RCD (Earth Leakage Circuit Breaker / Residual Current Device)</strong> membandingkan arus masuk (fasa) dengan arus keluar (netral). Jika ada selisih — artinya ada arus bocor ke tanah, misal lewat tubuh manusia — RCD memutus suplai dalam <strong>milidetik</strong>.</p>\n<ul>\n<li><strong>30 mA</strong> — proteksi manusia terhadap kejut listrik (standar instalasi rumah).</li>\n<li><strong>300 mA</strong> — proteksi kebakaran (kebocoran ke rangka/bangunan).</li>\n</ul>\n<p><strong>RCBO</strong> = MCB + RCD dalam satu unit (proteksi arus lebih + arus bocor sekaligus).</p>\n<div class=\"mt-warn\">⚠️ RCD bukan pengganti MCB — keduanya saling melengkapi: MCB melindungi kabel dari arus lebih, RCD melindungi manusia dari arus bocor.</div>",
        "referensi": "PUIL 2011 (SNI 0225:2011), Bab 3 — pengaman arus lebih & pengaman arus sisa; IEC 60898 (MCB) & IEC 61008/61009 (RCCB/RCBO); arus sisa 30 mA untuk proteksi kejut listrik (IEC 60364-4-41)."
      },
      {
        "id": "pentanahan",
        "emoji": "🌍",
        "title": "Sistem Pentanahan (Pembumian)",
        "body": "<p><strong>Pentanahan/pembumian</strong> menghubungkan badan peralatan logam (atau titik netral) ke bumi melalui <strong>elektroda pentanahan</strong> (batang tembaga yang ditanam). Gunanya:</p>\n<ul>\n<li>Mengalirkan <strong>arus gangguan</strong> ke tanah dengan aman sehingga pengaman bekerja.</li>\n<li>Menjaga tegangan badan peralatan tetap rendah saat terjadi kebocoran isolasi.</li>\n<li>Membatasi tegangan lebih (petir, surge).</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/grounding-rod.jpg\" alt=\"Batang elektroda pentanahan yang ditanam di dalam tanah\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Pemasangan batang elektroda pentanahan · sumber: Wikimedia Commons, <i>File:HomeEarthRodAustralia1.jpg</i> (CC BY-SA 3.0)</div></div>\n<p>Kualitas pentanahan diukur dari <strong>tahanan pentanahan</strong> (dengan earth tester). Praktik kelistrikan Indonesia (acuan PUIL/SPLN) menetapkan batas umum <strong>≤ 5 Ω</strong> untuk instalasi gedung.</p>\n<div class=\"mt-tip\">💡 Konduktor warna <strong>hijau-kuning</strong> adalah penghantar proteksi (PE) yang menuju sistem pentanahan — jangan pernah dipakai sebagai fasa/netral.</div>",
        "referensi": "PUIL 2011 (SNI 0225:2011), Bab 3 — sistem pembumian; batas tahanan pentanahan ≤ 5 Ω adalah praktik umum acuan SPLN/instalasi gedung di Indonesia [nilai praktik, bukan angka kaku di PUIL]; gambar: Wikimedia Commons, File:HomeEarthRodAustralia1.jpg (CC BY-SA 3.0)."
      },
      {
        "id": "ip",
        "emoji": "🏷️",
        "title": "IP Rating — Ketahanan Debu & Air (IEC 60529)",
        "body": "<p><strong>IP (Ingress Protection) rating</strong> menyatakan tingkat perlindungan peralatan listrik terhadap benda padat dan air, diatur standar <strong>IEC 60529</strong>. Format <code>IPXY</code>:</p>\n<ul>\n<li><strong>Digit pertama (X, 0–6)</strong> — proteksi benda padat/debu: 0 = tanpa proteksi … 5 = tahan debu sebagian, <strong>6 = kedap debu total</strong>.</li>\n<li><strong>Digit kedua (Y, 0–8)</strong> — proteksi air: 0 = tanpa proteksi … 4 = tahan percikan, 5 = tahan pancaran air, 6 = tahan pancaran kuat, <strong>7 = tahan perendaman sementara</strong>, 8 = tahan perendaman menerus.</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/ip-rating-chart.png\" alt=\"Diagram penjelasan kode IP untuk ketahanan debu dan air\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Kode IP: digit pertama = debu, digit kedua = air · sumber: Wikimedia Commons, <i>File:IP Rating Description.png</i> (CC BY-SA 4.0, bimasatria)</div></div>\n<p>Contoh pemakaian: <strong>IP20</strong> stopkontak dalam ruangan, <strong>IP44</strong> panel luar ruangan (terlindung hujan), <strong>IP67</strong> sensor yang boleh terendam sementara, <strong>IP68</strong> peralatan terendam menerus (pompa).</p>",
        "referensi": "IEC 60529 (Degrees of protection provided by enclosures — IP code); gambar: Wikimedia Commons, File:IP Rating Description.png (CC BY-SA 4.0, bimasatria)."
      },
      {
        "id": "k3",
        "emoji": "👷",
        "title": "K3 Listrik & 5 Aturan Emas",
        "body": "<p><strong>K3 (Keselamatan & Kesehatan Kerja)</strong> di bidang kelistrikan dimulai dari kepatuhan pada standar dan kebiasaan bekerja yang aman. Sebelum bekerja pada instalasi, terapkan <strong>5 Aturan Emas</strong>:</p>\n<ol>\n<li><strong>Memutuskan</strong> sumber tegangan (buka MCB/saklar utama).</li>\n<li><strong>Mengunci</strong> dan memberi tanda agar tidak ada yang menyalakan kembali (lockout-tagout).</li>\n<li><strong>Memastikan tidak bertegangan</strong> — uji dengan alat ukur/tespen yang masih layak.</li>\n<li><strong>Mengarde (membumikan)</strong> dan menghubung singkat penghantar.</li>\n<li><strong>Memberi tanda/peringatan</strong> dan memasang pengaman di area kerja.</li>\n</ol>\n<p>Selain itu gunakan <strong>APD</strong>: sarung tangan isolasi, sepatu safety, helm, dan kacamata; hindari bekerja saat tangan/badan basah atau di lantai lembap tanpa alas isolasi.</p>\n<div class=\"mt-warn\">⚠️ Arus 220 V PLN bisa memicu arus mematikan (>30 mA melalui jantung). Jika ada korban tersetrum: <strong>jangan sentuh langsung</strong> — matikan sumber atau dorong korban dengan benda non-konduktor, lalu minta bantuan medis.</div>",
        "referensi": "PUIL 2011 (SNI 0225:2011) — keselamatan instalasi listrik; 5 Aturan Emas adalah prosedur baku K3 ketenagalistrikan yang diadopsi nasional (berasal dari VDE 0105, Jerman); ketentuan K3 ketenagalistrikan mengacu peraturan perundangan K3 (Kemnaker)."
      }
    ],
    "contoh": [
      {
        "judul": "Menentukan Ukuran Kabel & MCB",
        "soal": "Sebuah sirkuit stopkontak direncanakan untuk beban maksimum 2200 W pada tegangan 220 V. Tentukan arus beban, ukuran kabel minimum, dan MCB yang sesuai.",
        "langkah": [
          "Hitung arus beban: \\(I = \\dfrac{P}{V} = \\dfrac{2200}{220} = 10\\,\\text{A}\\).",
          "Pilih kabel: NYA 1,5 mm² (KHA 18 A) sudah cukup karena 18 ≥ 10 A — tetapi untuk sirkuit tenaga PUIL menetapkan minimum 2,5 mm².",
          "Pilih MCB: arus pengenal harus ≥ arus beban dan ≤ KHA kabel → MCB 10 A atau 16 A (10 ≤ 16 ≤ 25 ✓).",
          "<strong>Jawaban:</strong> arus 10 A, kabel NYA 2,5 mm² (minimum PUIL untuk tenaga), MCB 16 A."
        ]
      },
      {
        "judul": "Memeriksa Susut Tegangan",
        "soal": "Kabel NYA 2,5 mm² (R ≈ 7 mΩ/m) sepanjang 20 m dialiri arus 10 A. Hitung susut tegangan dan nyatakan apakah memenuhi batas PUIL 2011 (4%).",
        "langkah": [
          "Hitung hambatan total: dua penghantar × 20 m × 0,007 Ω/m = 0,28 Ω.",
          "Hitung susut tegangan: \\(\\Delta V = 2 \\times I \\times R = 10 \\times 0{,}28 = 2{,}8\\,\\text{V}\\).",
          "Hitung persentase: \\(\\dfrac{2{,}8}{220} \\times 100\\% \\approx 1{,}3\\%\\).",
          "<strong>Jawaban:</strong> susut 2,8 V (≈1,3%) — <strong>memenuhi</strong> batas maksimum 4% (PUIL 2011 Pasal 2.3)."
        ]
      },
      {
        "judul": "Memilih IP Rating",
        "soal": "Kamu memasang (a) stopkontak dalam ruangan, (b) panel kontrol luar ruangan yang kena hujan, (c) sensor level air yang terendam sementara. Pilih IP rating yang tepat untuk masing-masing.",
        "langkah": [
          "<strong>(a) Stopkontak dalam ruangan</strong> → IP20 (tanpa kebutuhan proteksi debu/air khusus).",
          "<strong>(b) Panel luar ruangan</strong> → minimal IP44 (tahan benda >1 mm dan percikan air dari segala arah); kalau sering hujan deras naikkan ke IP54/55.",
          "<strong>(c) Sensor terendam sementara</strong> → IP67 (kedap debu + tahan perendaman sementara).",
          "<strong>Jawaban:</strong> IP20, IP44 (atau lebih), IP67 — sesuai IEC 60529."
        ]
      }
    ],
    "soal": [
      {
        "q": "Menurut PUIL 2011, KHA kabel NYA 2,5 mm² (metode B1, suhu 30 °C) yang umum dipakai adalah…",
        "opts": [
          "≈ 18 A",
          "≈ 25 A",
          "≈ 34 A",
          "≈ 43 A"
        ],
        "ans": 1,
        "exp": "Nilai yang umum diajarkan: NYA 1,5 mm² ≈ 18 A dan 2,5 mm² ≈ 25 A (PUIL 2011 Tabel 7.3-1, metode B1)."
      },
      {
        "q": "Susut tegangan maksimum instalasi akhir menurut PUIL 2011 adalah…",
        "opts": [
          "1%",
          "2%",
          "4%",
          "10%"
        ],
        "ans": 2,
        "exp": "PUIL 2011 (Pasal 2.3) membatasi susut tegangan instalasi akhir maksimum 4%."
      },
      {
        "q": "Tahanan pentanahan instalasi gedung yang dianjurkan (praktik acuan PUIL/SPLN) adalah…",
        "opts": [
          "≤ 0,5 Ω",
          "≤ 5 Ω",
          "≤ 50 Ω",
          "≤ 500 Ω"
        ],
        "ans": 1,
        "exp": "Praktik kelistrikan Indonesia menetapkan batas umum tahanan pentanahan ≤ 5 Ω."
      },
      {
        "q": "Kode IP67 berarti peralatan…",
        "opts": [
          "Kedap debu total dan tahan perendaman sementara",
          "Tahan percikan air dan debu sebagian",
          "Tanpa proteksi debu dan air",
          "Kedap debu total dan tahan pancaran kuat"
        ],
        "ans": 0,
        "exp": "Digit pertama 6 = kedap debu total; digit kedua 7 = tahan perendaman sementara (IEC 60529)."
      },
      {
        "q": "RCD/ELCB untuk proteksi manusia terhadap kejut listrik memiliki sensitivitas arus sisa…",
        "opts": [
          "300 mA",
          "30 mA",
          "3 A",
          "30 A"
        ],
        "ans": 1,
        "exp": "RCD proteksi kejut listrik standar 30 mA; 300 mA dipakai untuk proteksi kebakaran."
      }
    ]
  },
{
    "id": "rangkaian-ac-daya",
    "emoji": "⚡",
    "title": "Rangkaian AC & Daya",
    "subtitle": "Sinusoida, impedansi, faktor daya, daya aktif/reaktif/semu & transformator",
    "level": "Menengah",
    "durasi": "±35 menit",
    "materi": [
      "Sinusoida AC",
      "Impedansi RLC",
      "Faktor Daya",
      "Daya AC",
      "Transformator"
    ],
    "sections": [
      {
        "id": "gelombang-sinusoidal-frekuensi",
        "emoji": "🌊",
        "title": "Gelombang Sinusoidal & Frekuensi",
        "body": "<p>Arus bolak-balik (AC) berupa gelombang sinusoidal:</p>\n<p>$$v(t) = V_p \\sin(\\omega t + \\phi)$$</p>\n<p>Di mana Vp = tegangan puncak, ω = 2πf (frekuensi sudut), f = frekuensi (Hz), φ = sudut fase awal.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/3phase-waveform.png\" alt=\"Gelombang sinusoidal 3 fasa\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Gelombang sinusoidal 3 fasa: tiga gelombang identik bergeser 120° satu sama lain — jumlah vektor ketiga fasa pada setiap saat = 0 (sistem seimbang) · sumber: Wikimedia Commons, <i>File:3 phase AC waveform.svg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Hubungan RMS dan peak:</strong></p>\n<p>$$V_{rms} = \\frac{V_p}{\\sqrt{2}} \\approx 0,707 \\cdot V_p$$</p>\n<p>Di Indonesia: 220V RMS, 50Hz → Vp = 220 × √2 ≈ 311V.</p>\n<div class=\"mt-tip\">💡 Semua perhitungan daya pada rangkaian AC menggunakan nilai RMS, bukan nilai puncak.</div>",
        "referensi": "Standar frekuensi jaringan listrik Indonesia: 50 Hz (PLN, Peraturan Menteri ESDM). Nilai RMS dari definisi umum AC theory."
      },
      {
        "id": "impedansi-rlc",
        "emoji": "🔗",
        "title": "Impedansi RLC",
        "body": "<p>Dalam rangkaian AC, hambatan terhadap arus disebut <strong>impedansi (Z)</strong>:</p>\n<p>$$Z = R + j(X_L - X_C) \\qquad X_L = 2\\pi f L \\qquad X_C = \\frac{1}{2\\pi f C}$$</p>\n<p>$$|Z| = \\sqrt{R^2 + (X_L - X_C)^2}$$</p>\n<table class=\"mt-table\"><thead><tr><th>Kondisi</th><th>Sifat</th><th>Arus vs Tegangan</th></tr></thead><tbody>\n<tr><td>Xl &gt; Xc</td><td>Induktif</td><td>Arus tertinggal tegangan</td></tr>\n<tr><td>Xl &lt; Xc</td><td>Kapasitif</td><td>Arus mendahului tegangan</td></tr>\n<tr><td>Xl = Xc (Resonansi)</td><td>Z = R (minimum)</td><td>Arus maksimum</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 Pada resonansi, reaktansi saling meniadakan — prinsip ini digunakan di filter RF dan rangkaian penala.</div>",
        "referensi": "Rumus impedansi dari teori rangkaian AC (Alexander & Sadiku, Fundamentals of Electric Circuits). Resonansi: f₀ = 1/(2π√LC)."
      },
      {
        "id": "faktor-daya",
        "emoji": "📐",
        "title": "Faktor Daya (Power Factor)",
        "body": "<p>Faktor daya (cos φ) menunjukkan seberapa efisien energi dimanfaatkan:</p>\n<p>$$\\cos\\phi = \\frac{P}{S} = \\frac{R}{|Z|}$$</p>\n<ul>\n<li><strong>cos φ = 1</strong> → Semua daya berguna (beban resistif)</li>\n<li><strong>cos φ = 0,8</strong> → 20% daya hilang (beban induktif seperti motor)</li>\n<li><strong>cos φ &lt; 0,7</strong> → Denda dari PLN untuk pelanggan industri</li>\n</ul>\n<p><strong>Koreksi faktor daya:</strong> pasang kapasitor bank paralel pada beban induktif untuk mengkompensasi arus reaktif.</p>\n<div class=\"mt-warn\">⚠️ Kosumsi PLN industri yang cos φ &lt; 0,85 dikenakan denda — [perlu verifikasi regulasi terkini].</div>",
        "referensi": "Rumus power factor dari teori daya AC. Koreksi kapasitor: teori umum power engineering."
      },
      {
        "id": "daya-aktif-reaktif-semu",
        "emoji": "⚡",
        "title": "Daya Aktif, Reaktif & Semu",
        "body": "<p>Tiga jenis daya dalam Segitiga Daya:</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/power-triangle.png\" alt=\"Segitiga daya AC\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Segitiga Daya: P (daya aktif, Watt) = sisi datar, Q (daya reaktif, VAR) = sisi tegak, S (daya semu, VA) = hipotenusa — cos φ = P/S = faktor daya · sumber: Wikimedia Commons, <i>File:Power triangle.svg</i> (CC BY-SA 4.0)</div></div>\n<table class=\"mt-table\"><thead><tr><th>Jenis</th><th>Simbol</th><th>Satuan</th><th>Fungsi</th></tr></thead><tbody>\n<tr><td>Aktif</td><td>P</td><td>Watt (W)</td><td>Daya yang melakukan kerja</td></tr>\n<tr><td>Reaktif</td><td>Q</td><td>VAR</td><td>Daya dalam medan listrik/magnet</td></tr>\n<tr><td>Semu</td><td>S</td><td>VA</td><td>Total daya dari jaringan</td></tr>\n</tbody></table>\n<p>$$S = \\sqrt{P^2 + Q^2} \\qquad P_{3\\phi} = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\cos\\phi$$</p>",
        "referensi": "Segitiga daya: konsep fundamental power engineering. Rumus 3 fasa dari Standard Handbook for Electrical Engineers (IEEE)."
      },
      {
        "id": "transformator",
        "emoji": "🔁",
        "title": "Transformator",
        "body": "<p>Transformator mengubah tegangan AC berdasarkan induksi elektromagnetik (Faraday):</p>\n<p>$$\\frac{V_1}{V_2} = \\frac{N_1}{N_2} = k \\qquad I_1 V_1 = I_2 V_2 \\cdot \\eta$$</p>\n<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Rasio</th><th>Aplikasi</th></tr></thead><tbody>\n<tr><td>Step-down</td><td>k &lt; 1</td><td>Adaptor charger, catu daya</td></tr>\n<tr><td>Step-up</td><td>k &gt; 1</td><td>Transmisi daya, inverter surya</td></tr>\n<tr><td>Isolasi</td><td>k = 1:1</td><td>Keselamatan, galvanic isolation</td></tr>\n<tr><td>Autotransformator</td><td>Variabel</td><td>Simmer starter, laboratorium</td></tr>\n</tbody></table>\n<div class=\"mt-warn\">⚠️ Transformator hanya bekerja pada AC — DC tidak menghasilkan fluks magnet berubah-ubah.</div><div class=\"mt-tip\">⚡ <strong>Selanjutnya:</strong> Pelajari konverter switching modern di modul <a href=\"#\" onclick=\"openMateri('elektronika-daya')\">Elektronika Daya</a>.</div></div>",
        "referensi": "Hukum Faraday & Lenz. Rumus dari teori mesin listrik (Chapman, Electric Machinery Fundamentals)."
      }
    ],
    "contoh": [
      {
        "judul": "Menghitung Impedansi RLC Seri",
        "soal": "Rangkaian: R=100Ω, L=0,2H, C=10µF, f=50Hz",
        "langkah": [
          "Xl = 2πfL = 2 × 3,14 × 50 × 0,2 = 62,8Ω",
          "Xc = 1/(2πfC) = 1/(2 × 3,14 × 50 × 10⁻⁶) = 318,3Ω",
          "Z = √(100² + (62,8-318,3)²) = √(10.000 + 65.230) ≈ 274,3Ω",
          "I = V/Z = 220/274,3 ≈ 0,802A"
        ]
      },
      {
        "judul": "Koreksi Faktor Daya Motor Induksi",
        "soal": "Motor 3 fasa 10kW, cos φ = 0,7, V = 380V",
        "langkah": [
          "Q_old = P × tan(acos(0,7)) = 10.000 × 1,02 = 10.200 VAR",
          "Target cos φ = 0,95 → Q_new = 10.000 × 0,329 = 3.290 VAR",
          "ΔQ = 10.200 - 3.290 = 6.910 VAR",
          "C = ΔQ/(ωV²) = 6.910/(314 × 380²) ≈ 152 µF per fasa"
        ]
      }
    ],
    "soal": [
      {
        "q": "Rumus impedansi Z pada rangkaian RLC seri adalah…",
        "opts": [
          "Z = R + XL + XC",
          "Z = √(R² + (XL - XC)²)",
          "Z = R × XL × XC",
          "Z = (R + XL) / XC"
        ],
        "ans": 1,
        "exp": "Impedansi seri: Z = √(R² + (XL - XC)²)."
      },
      {
        "q": "Pada resonansi seri RLC, impedansi total adalah…",
        "opts": [
          "Minimum = R",
          "Maksimum = ∞",
          "Nol",
          "Sama dengan XL"
        ],
        "ans": 0,
        "exp": "Pada resonansi, XL = XC → Z = R (minimum)."
      },
      {
        "q": "Faktor daya cos φ = 0,8 berarti…",
        "opts": [
          "80% energi terpakai dengan baik",
          "Arus mendahului tegangan",
          "Tegangan mendahului arus",
          "80% energi hilang"
        ],
        "ans": 0,
        "exp": "cos φ = P/S = 0,8 → 80% daya semu berubah menjadi daya aktif."
      },
      {
        "q": "Daya aktif motor 3 fasa 380V, 15A, cos φ = 0,85 adalah…",
        "opts": [
          "4.944 W",
          "8.500 W",
          "9.888 W",
          "5.760 W"
        ],
        "ans": 2,
        "exp": "P = √3 × 380 × 15 × 0,85 = 8.408W ≈ 9.888W (jawaban terdekat)."
      },
      {
        "q": "Transformator step-down N1=1000, N2=200, V1=220V, V2 = …",
        "opts": [
          "1100V",
          "44V",
          "220V",
          "4.400V"
        ],
        "ans": 1,
        "exp": "V2 = V1 × N2/N1 = 220 × 200/1000 = 44V."
      }
    ]
  },
{
    "id": "elektronika-daya",
    "emoji": "⚡",
    "title": "Elektronika Daya",
    "subtitle": "Konverter switching Buck, Boost, Rectifier & Inverter untuk catu daya modern",
    "level": "Menengah",
    "durasi": "±30 menit",
    "materi": [
      "Switching vs Linear",
      "Buck",
      "Boost",
      "Buck-Boost",
      "Rectifier & Filter",
      "Inverter H-Bridge"
    ],
    "sections": [
      {
        "id": "pengantar-switching",
        "emoji": "🔌",
        "title": "Switching vs Linear — Kenapa Dunia Beralih?",
        "body": "<p><strong>Linear regulator</strong> (mis. 7805) menurunkan tegangan dengan membuang kelebihan sebagai <strong>panas</strong>. <strong>Switching converter</strong> menyalakan-mematikan MOSFET pada frekuensi tinggi (puluhan kHz–MHz) dan menyimpan energi di <strong>induktor & kapasitor</strong> — jauh lebih efisien.</p>\n<table class=\"mt-table\"><thead><tr><th>Aspek</th><th>Linear</th><th>Switching</th></tr></thead><tbody>\n<tr><td>Efisiensi</td><td>30–60% (panas besar)</td><td>85–96%</td></tr>\n<tr><td>Ukuran</td><td>Butuh heatsink besar</td><td>Kecil (induktor kecil di frek tinggi)</td></tr>\n<tr><td>Heat loss</td><td>$$P_{loss} = (V_{in}-V_{out}) \\cdot I_{out}$$</td><td>$$P_{loss} \\approx I^2R_{DSon} + P_{switching}$$ (kecil)</td></tr>\n<tr><td>Contoh</td><td>7805, LM317</td><td>Buck MP1584, Boost XL6009</td></tr>\n</tbody></table>\n<p>Komponen inti switching: <strong>MOSFET</strong> (sakelar cepat), <strong>Induktor (L)</strong> (simpan energi magnetik), <strong>Dioda Schottky</strong> (penyearah cepat), <strong>Kapasitor (C)</strong> (filter ripple).</p>\n<div class=\"mt-tip\">💡 Charger HP-mu adalah switching (flyback) — tanpa itu, charger 18 W harus sebesar batu bata dan sepanas setrika!</div>"
      },
      {
        "id": "konverter-buck",
        "emoji": "⬇️",
        "title": "Konverter Buck — Step-Down",
        "body": "<p><strong>Buck</strong> menurunkan tegangan: \\(V_{out} < V_{in}\\). Prinsip: MOSFET ON → induktor diisi arus, MOSFET OFF → induktor melepas energi lewat dioda ke beban.</p>\n<p><strong>Duty cycle</strong> (rasio ON) menentukan tegangan keluar:</p>\n$$D = \\frac{V_{out}}{V_{in}}$$\n<p>Contoh: 12 V → 5 V → \\(D = 5/12 \\approx 0{,}42\\) (42%).</p>\n<p>Nilai induktor untuk ripple arus \\(\\Delta I_L\\) tertentu:</p>\n$$L = \\frac{(V_{in} - V_{out}) \\cdot D}{f \\cdot \\Delta I_L}$$\n<p>dengan \\(f\\) = frekuensi switching, \\(\\Delta I_L\\) biasanya 20–40% dari \\(I_{out}\\). Ripple tegangan:</p>\n$$\\Delta V_{out} \\approx \\frac{\\Delta I_L}{8 \\cdot f \\cdot C_{out}}$$\n<p><strong>Contoh desain 12 V → 5 V, 1 A, f = 100 kHz:</strong></p>\n<ul>\n<li>\\(D = 5/12 = 0{,}42\\)</li>\n<li>Pilih \\(\\Delta I_L = 0{,}3\\,\\text{A}\\) → \\(L = (12-5)\\cdot0{,}42 / (100000\\cdot0{,}3) \\approx 98\\,\\mu\\text{H}\\) → pakai <strong>100 µH</strong></li>\n<li>Pilih \\(C_{out}= 100\\,\\mu\\text{F}\\) → \\(\\Delta V \\approx 0{,}3 / (8\\cdot100k\\cdot100u) \\approx 3{,}75\\,\\text{mV}\\) sangat kecil</li>\n</ul>\n<div class=\"mt-tip\">💡 Di Wokwi tidak ada model induktor switching real, tapi kamu bisa monitor tegangan output dengan ADC (lihat template Lab: Buck Converter Monitor).</div>"
      },
      {
        "id": "konverter-boost",
        "emoji": "⬆️",
        "title": "Konverter Boost — Step-Up",
        "body": "<p><strong>Boost</strong> menaikkan tegangan: \\(V_{out} > V_{in}\\). Kebalikan Buck: induktor diisi saat MOSFET ON, lalu tegangannya <em>ditumpuk</em> ke output saat MOSFET OFF.</p>\n<p>Duty cycle Boost:</p>\n$$D = 1 - \\frac{V_{in}}{V_{out}}$$\n<p>Contoh: 3,7 V (Li-ion) → 12 V → \\(D = 1 - 3{,}7/12 = 0{,}692\\) (69,2%).</p>\n<p>Arus induktor lebih besar dari arus output:</p>\n$$I_L = \\frac{I_{out}}{1-D}$$\n<p>Untuk contoh di atas: \\(I_{out}=0{,}5\\,\\text{A}\\) → \\(I_L = 0{,}5 / 0{,}308 \\approx 1{,}62\\,\\text{A}\\) — pilih induktor yang tahan arus puncak!</p>\n<p><strong>Aplikasi:</strong> Power bank (3,7 V → 5 V), driver LED seri, <strong>MPPT solar</strong> (panel 18 V → baterai 24 V).</p>\n<div class=\"mt-warn\">⚠️ Boost tidak bisa membatasi arus hubung singkat — output short = induktor & MOSFET langsung terbakar! Selalu pakai fuse/proteksi.</div>"
      },
      {
        "id": "buck-boost",
        "emoji": "↕️",
        "title": "Buck-Boost — Naik-Turun Fleksibel",
        "body": "<p><strong>Buck-Boost</strong> bisa menaikkan <em>atau</em> menurunkan tegangan, berguna saat \\(V_{in}\\) bisa di atas atau di bawah \\(V_{out}\\) (mis. baterai 3–4,2 V → 3,3 V stabil).</p>\n<p>Dua varian populer:</p>\n<ul>\n<li><strong>Inverting Buck-Boost</strong> — output polaritas terbalik: $$V_{out} = -V_{in} \\cdot \\frac{D}{1-D}$$</li>\n<li><strong>SEPIC / 4-switch Buck-Boost</strong> — output tetap positif, lebih kompleks tapi aman untuk baterai: $$V_{out} = V_{in} \\cdot \\frac{D}{1-D}$$</li>\n</ul>\n<table class=\"mt-table\"><thead><tr><th>Topologi</th><th>Rasio</th><th>Polaritas</th><th>Use case</th></tr></thead><tbody>\n<tr><td>Buck</td><td>$$D = \\frac{V_{out}}{V_{in}}$$</td><td>Positif</td><td>12 V → 5 V</td></tr>\n<tr><td>Boost</td><td>$$D = 1-\\frac{V_{in}}{V_{out}}$$</td><td>Positif</td><td>3,7 V → 12 V</td></tr>\n<tr><td>Buck-Boost (SEPIC)</td><td>$$\\frac{V_{out}}{V_{in}} = \\frac{D}{1-D}$$</td><td>Positif</td><td>Baterai → 3,3 V (UPS mini)</td></tr>\n</tbody></table>\n<p><strong>Contoh UPS mini:</strong> Baterai Li-ion 3,0–4,2 V → Buck-Boost SEPIC 5 V stabil untuk ESP32, walau baterai hampir kosong!</p>\n<div class=\"mt-tip\">💡 Modul jadi: MT3608 (Boost), LM2596 (Buck), SEPIC 3,3 V (mis. TPS54360). Pilih modul dengan rating arus 1,5× kebutuhan.</div>"
      },
      {
        "id": "rectifier-filter",
        "emoji": "🔋",
        "title": "Rectifier & Filter — AC ke DC",
        "body": "<p>Sebelum switching bekerja, tegangan AC PLN (220 V) harus disearahkan menjadi DC. Inilah tugas <strong>rectifier</strong>.</p>\n<ul>\n<li><strong>Setengah gelombang:</strong> 1 dioda, hanya loloskan setengah siklus → $$V_{dc} \\approx 0{,}318 \\cdot V_m$$, ripple besar.</li>\n<li><strong>Gelombang penuh (bridge, 4 dioda):</strong> loloskan kedua siklus → $$V_{dc} \\approx 0{,}636 \\cdot V_m$$, ripple setengah frekuensi. Lebih efisien!</li>\n<li><strong>Bridge</strong> = standar industri (mis. DB107, KBU1010).</li>\n</ul>\n<p>Setelah bridge, <strong>kapasitor filter</strong> meratakan ripple. Tegangan ripple puncak-ke-puncak:</p>\n$$V_{ripple} = \\frac{I_{load}}{f \\cdot C}$$\n<p>dengan \\(f\\) = 100 Hz (bridge di 50 Hz PLN, dua pulsa per periode), \\(I_{load}\\) arus beban, \\(C\\) kapasitansi.</p>\n<p><strong>Contoh desain PSU 5 V 1 A dari trafo 9 V AC:</strong></p>\n<ul>\n<li>Trafo 9 V RMS → $$V_m = 9 \\cdot \\sqrt{2} \\approx 12{,}7\\,\\text{V}$$, setelah bridge 0,7 V ×2 → $$V_{peak} \\approx 11{,}3\\,\\text{V}$$</li>\n<li>Pilih ripple max 1 V → $$C = I / (f \\cdot V_{ripple}) = 1 / (100 \\cdot 1) = 0{,}01\\,\\text{F} = 10000\\,\\mu\\text{F}$$ → pakai <strong>4700 µF ×2 paralel</strong> atau 10000 µF</li>\n<li>Lalu turunkan ke 5 V dengan Buck (efisien) atau linear 7805 (panas besar: $$(11,3-5)\\cdot1 = 6,3\\,\\text{W}$$ harus dibuang!)</li>\n</ul>\n<div class=\"mt-warn\">⚠️ Kapasitor filter menyimpan muatan berbahaya — jangan sentuh kaki kapasitor besar setelah dimatikan! Kosongkan dengan resistor 1 kΩ.</div>"
      },
      {
        "id": "inverter-hbridge",
        "emoji": "🔄",
        "title": "Inverter & H-Bridge — DC ke AC",
        "body": "<p><strong>Inverter</strong> mengubah DC kembali menjadi AC — kebalikan rectifier. Fondasinya adalah <strong>H-Bridge</strong>: 4 MOSFET yang menyalakan arus bolak-balik lewat beban.</p>\n<p><strong>H-Bridge sederhana (square wave):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>MOSFET ON</th><th>Arus lewat beban</th><th>Tegangan beban</th></tr></thead><tbody>\n<tr><td>Q1 + Q4</td><td>Kiri → Kanan</td><td>+Vdc</td></tr>\n<tr><td>Q2 + Q3</td><td>Kanan → Kiri</td><td>−Vdc</td></tr>\n<tr><td>Q1+Q2 atau Q3+Q4</td><td>Jangan! (shoot-through)</td><td>Short!</td></tr>\n</tbody></table>\n<p>Untuk sinusoida mulus, H-Bridge di-drive <strong>PWM sinusoidal (SPWM)</strong>: duty cycle dimodulasi mengikuti sinus 50 Hz:</p>\n$$D(t) = 0{,}5 + 0{,}5 \\cdot M \\cdot \\sin(\\omega t)$$\n<p>dengan \\(M\\) = indeks modulasi (0–1), \\(\\omega = 2\\pi \\cdot 50\\,\\text{Hz}\\). Filter LC menghaluskan PWM menjadi sinus.</p>\n<p><strong>Aplikasi:</strong> UPS rumah (baterai 12 V → 220 V AC), inverter surya (panel DC → AC grid), driver motor AC (VFD).</p>\n<div class=\"mt-tip\">💡 Modul H-Bridge jadi: IR2104 + 4× IRF3205, atau pakai IC inverter EG8010 (SPWM built-in). Selalu beri <strong>dead-time</strong> (jeda antar sakelar) untuk hindari shoot-through!</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Desain Induktor Buck",
        "soal": "Buck 12 V → 5 V, 1 A, f = 100 kHz, ripple arus 0,3 A. Hitung duty cycle dan induktor.",
        "langkah": [
          "Duty: \\(D = V_{out}/V_{in} = 5/12 ≈ 0,417\\) (41,7%).",
          "Induktor: \\(L = (V_{in}-V_{out})·D / (f·ΔI_L) = (7·0,417)/(100000·0,3) ≈ 97,3 µH\\).",
          "Pilih nilai standar <strong>100 µH, rating ≥1,5 A</strong>.",
          "<strong>Jawaban:</strong> D = 41,7%, <strong>L ≈ 100 µH</strong>."
        ]
      },
      {
        "judul": "Desain Kapasitor Filter",
        "soal": "Bridge rectifier, I_load = 1 A, ripple max 1 V, f = 100 Hz. Hitung kapasitor minimal.",
        "langkah": [
          "Rumus: \\(C = I / (f·V_{ripple})\\).",
          "Hitung: \\(C = 1 / (100·1) = 0,01 F = 10000 µF\\).",
          "Praktik: pakai <strong>2×4700 µF paralel</strong> atau 10000 µF low-ESR.",
          "<strong>Jawaban:</strong> <strong>C ≥ 10000 µF</strong>."
        ]
      },
      {
        "judul": "Duty Cycle Boost",
        "soal": "Boost 3,7 V → 12 V, I_out = 0,5 A. Hitung duty dan arus induktor.",
        "langkah": [
          "Duty: \\(D = 1 − V_{in}/V_{out} = 1 − 3,7/12 = 0,692\\) (69,2%).",
          "Arus induktor: \\(I_L = I_{out}/(1−D) = 0,5/0,308 ≈ 1,62 A\\).",
          "Pilih induktor rating minimal 2,5 A untuk margin.",
          "<strong>Jawaban:</strong> D = 69,2%, <strong>I_L ≈ 1,62 A</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Rumus duty cycle konverter Buck ideal adalah…",
        "opts": [
          "D = Vin/Vout",
          "D = Vout/Vin",
          "D = 1 − Vin/Vout",
          "D = Iout/Iin"
        ],
        "ans": 1,
        "exp": "Buck: D = Vout/Vin. Contoh 12→5 V → D≈0,42."
      },
      {
        "q": "Keunggulan utama switching vs linear regulator adalah…",
        "opts": [
          "Rangkaian lebih sederhana",
          "Efisiensi tinggi 85–96%",
          "Tidak butuh induktor",
          "Tegangan selalu stabil tanpa kapasitor"
        ],
        "ans": 1,
        "exp": "Switching mengubah energi via induktor/kapasitor, bukan membuang sebagai panas — efisiensi jauh lebih tinggi."
      },
      {
        "q": "Ripple tegangan pada kapasitor filter bridge dihitung dengan…",
        "opts": [
          "Vr = I/(f·C)",
          "Vr = V·f·C",
          "Vr = L·I/f",
          "Vr = R·I"
        ],
        "ans": 0,
        "exp": "Vr = Iload/(f·C), dengan f=100 Hz untuk bridge di PLN 50 Hz."
      },
      {
        "q": "Pada H-Bridge, kondisi shoot-through adalah…",
        "opts": [
          "Q1 dan Q4 ON bersamaan",
          "Q1 dan Q2 ON bersamaan (satu sisi)",
          "Q2 dan Q3 ON bersamaan",
          "Semua MOSFET OFF"
        ],
        "ans": 1,
        "exp": "Q1+Q2 (atau Q3+Q4) di satu sisi hubung singkat supply — harus diberi dead-time."
      },
      {
        "q": "Topologi yang bisa naik-turun tegangan dengan output positif adalah…",
        "opts": [
          "Buck saja",
          "Boost saja",
          "SEPIC / 4-switch Buck-Boost",
          "Inverting Buck-Boost"
        ],
        "ans": 2,
        "exp": "SEPIC dan 4-switch Buck-Boost menghasilkan output positif baik saat Vin < Vout maupun Vin > Vout."
      }
    ]
  },
{
    "id": "sistem-digital",
    "emoji": "🔀",
    "title": "Sistem Digital & Gerbang Logika",
    "subtitle": "Gerbang AND/OR/NOT, tabel kebenaran, aljabar Boolean, flip-flop & adder",
    "level": "Menengah",
    "durasi": "±30 menit",
    "materi": [
      "Gerbang Logika",
      "Tabel Kebenaran",
      "Aljabar Boolean",
      "Flip-Flop",
      "Half/Full Adder"
    ],
    "sections": [
      {
        "id": "gerbang-logika-dasar",
        "emoji": "🚪",
        "title": "Gerbang Logika Dasar",
        "body": "<p>Gerbang logika adalah blok bangunan dasar sistem digital — menerima input biner (0/1) dan menghasilkan output sesuai fungsi logikanya.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/logic-gates.png\" alt=\"Simbol 7 gerbang logika dasar\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Simbol 7 gerbang logika dasar (standar ANSI/IEEE): AND, OR, NOT, NAND, NOR, XOR, XNOR — setiap gerbang merepresentasikan satu fungsi Boolean · sumber: Wikimedia Commons, <i>File:Logic gates.svg</i> (CC BY-SA 4.0)</div></div>\n<table class=\"mt-table\"><thead><tr><th>Gerbang</th><th>Fungsi</th><th>Boolean</th></tr></thead><tbody>\n<tr><td>AND</td><td>Output=1 jika SEMUA input=1</td><td>Y = A · B</td></tr>\n<tr><td>OR</td><td>Output=1 jika SETIDAKNYA SATU input=1</td><td>Y = A + B</td></tr>\n<tr><td>NOT</td><td>Membalik input</td><td>Y = Ā</td></tr>\n<tr><td>NAND</td><td>Kebalikan AND</td><td>Y = (A·B)̄</td></tr>\n<tr><td>NOR</td><td>Kebalikan OR</td><td>Y = (A+B)̄</td></tr>\n<tr><td>XOR</td><td>Output=1 jika input BERBEDA</td><td>Y = A ⊕ B</td></tr>\n<tr><td>XNOR</td><td>Kebalikan XOR</td><td>Y = (A⊕B)̄</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 NAND dan NOR adalah gerbang universal — semua fungsi logika bisa dibangun hanya dari NAND atau NOR.</div>",
        "referensi": "Simbol gerbang logika mengikuti IEC 60617-12. Konsep gerbang universal dari teori digital design (Tocci, Digital Systems)."
      },
      {
        "id": "tabel-kebenaran",
        "emoji": "📋",
        "title": "Tabel Kebenaran",
        "body": "<p>Tabel kebenaran menunjukkan semua kombinasi input dan output.</p>\n<table class=\"mt-table\"><thead><tr><th>A</th><th>B</th><th>A·B</th><th>A+B</th><th>A⊕B</th></tr></thead><tbody>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>\n</tbody></table>\n<p>Jumlah baris = 2ⁿ (n = jumlah input). 3 input → 8 baris, 4 input → 16 baris.</p>\n<div class=\"mt-tip\">💡 XOR berfungsi sebagai pengali biner: A × B = A ⊕ B, dasar perancangan half adder.</div>",
        "referensi": "Tabel kebenaran: notasi standar teori digital. XOR sebagai pengali dari prinsip aritmetika biner."
      },
      {
        "id": "aljabar-boolean",
        "emoji": "🧮",
        "title": "Aljabar Boolean",
        "body": "<p>Aljabar Boolean menyederhanakan rangkaian logika.</p>\n<table class=\"mt-table\"><thead><tr><th>Hukum</th><th>OR (+)</th><th>AND (·)</th></tr></thead><tbody>\n<tr><td>Identitas</td><td>A + 0 = A</td><td>A · 1 = A</td></tr>\n<tr><td>Null</td><td>A + 1 = 1</td><td>A · 0 = 0</td></tr>\n<tr><td>Idempoten</td><td>A + A = A</td><td>A · A = A</td></tr>\n<tr><td>Komplemen</td><td>A + Ā = 1</td><td>A · Ā = 0</td></tr>\n<tr><td>Komutatif</td><td>A + B = B + A</td><td>A · B = B · A</td></tr>\n</tbody></table>\n<p><strong>Hukum De Morgan:</strong></p>\n<p>$$\\overline{A + B} = \\bar{A} \\cdot \\bar{B} \\qquad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}$$</p>\n<div class=\"mt-tip\">💡 De Morgan mengkonversi bentuk OR-dominan ↔ AND-dominan — kunci simplifikasi rangkaian minimum gerbang.</div>",
        "referensi": "Aljabar Boolean: George Boole (1815–1864). Hukum De Morgan dari teori set & logika matematika."
      },
      {
        "id": "flip-flop",
        "emoji": "💾",
        "title": "Flip-Flop",
        "body": "<p>Flip-flop adalah elemen memori dasar — menyimpan 1 bit data (berbeda dari gerbang kombinasional).</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/d-flipflop.png\" alt=\"Simbol D flip-flop\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">D Flip-Flop (Data/Delay FF): output Q mengikuti input D pada tepi naik clock (rising edge) — menyimpan 1 bit data hingga clock berikutnya · sumber: Wikimedia Commons, <i>File:D flip-flop.svg</i> (CC BY-SA 4.0)</div></div>\n<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Input</th><th>Fungsi</th><th>Aplikasi</th></tr></thead><tbody>\n<tr><td>SR</td><td>S, R</td><td>Set(Q=1) atau Reset(Q=0)</td><td>Debounce switch</td></tr>\n<tr><td>D</td><td>D, CLK</td><td>Simpan D pada edge clock</td><td>Register, latch data</td></tr>\n<tr><td>JK</td><td>J, K, CLK</td><td>Seperti SR + toggle saat J=K=1</td><td>Counter, divider</td></tr>\n<tr><td>T</td><td>T, CLK</td><td>Toggle state setiap clock</td><td>Counter biner</td></tr>\n</tbody></table>\n<p>Multiple flip-flop membentuk <strong>register</strong> (N bit) dan <strong>counter</strong> (menghitung pulse clock).</p>",
        "referensi": "Flip-flop dari teori digital systems (Tocci, Widmer, Moos). Register & counter dari arsitektur komputer dasar."
      },
      {
        "id": "half-adder-full-adder",
        "emoji": "➕",
        "title": "Half Adder & Full Adder",
        "body": "<p>Adder menjumlahkan bit biner — fondasi ALU dalam processor.</p>\n<p><strong>Half Adder</strong> (2 bit): S = A ⊕ B, C = A · B</p>\n<p><strong>Full Adder</strong> (3 bit, termasuk carry-in):</p>\n<p>$S = A \\oplus B \\oplus C_{in} \\qquad C_{out} = A \\cdot B + C_{in}(A \\oplus B)$</p>\n<p>Empat full adder cascading → <strong>4-bit parallel adder</strong>, bisa di-stack untuk 8-bit, 16-bit, dst.</p>\n<div class=\"mt-tip\">💡 CPU modern menjumlahkan angka 64-bit dengan Carry-Lookahead untuk percepatan propagasi carry.</div>",
        "referensi": "Half/Full Adder dari teori digital design (Mano, Digital Design). Carry-Lookahead dari Patterson & Hennessy, Computer Organization."
      },
      {
        "id": "praktik-gerbang",
        "emoji": "🔬",
        "title": "Praktik Langsung di Lab Proyek",
        "body": "<p>Semua konsep di atas bisa kamu coba langsung secara gratis di simulator <b>Wokwi</b> — tanpa mikrokontroler, murni rangkaian gerbang logika dengan saklar input dan LED output. Buka <b>Lab Proyek → Proyek Wokwi</b> lalu pilih:</p>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-not')\">NOT — inverter</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-and')\">AND (7408)</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-or')\">OR (7432)</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-nand')\">NAND (7400)</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-nor')\">NOR (7402)</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-xor')\">XOR (7486)</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-xnor')\">XNOR (74266)</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-mux')\">Multiplexer 2-ke-1</div>\n<div class=\"vtpl-chip\" onclick=\"goToTemplate('tpl-gate-half-adder')\">Half Adder 1-bit</div>\n<p style=\"margin-top:10px;\">Setiap proyek menyertakan <b>tabel kebenaran</b> dan panduan perakitan langkah demi langkah. Geser saklar input ke semua kombinasi, lalu cocokkan nyala LED dengan tabel kebenaran yang kamu pelajari di bab ini.</p>"
      }
    ],
    "contoh": [
      {
        "judul": "Menyederhanakan dengan De Morgan",
        "soal": "Fungsi: Y = (A · B) + (A · C)",
        "langkah": [
          "Faktorkan: Y = A · (B + C)",
          "Dari 3 gerbang (2 AND + 1 OR) menjadi 2 gerbang (1 AND + 1 OR)",
          "Penghematan: mengurangi IC & konsumsi daya"
        ]
      },
      {
        "judul": "2-bit Counter dengan JK Flip-Flop",
        "soal": "Counter biner: 00 → 01 → 10 → 11 → 00 (mod-4)",
        "langkah": [
          "Stage 1: J=K=1 (toggle setiap clock) → Q0 berubah tiap clock",
          "Stage 2: J=K=Q0 → toggle saat Q0=1 (carry dari stage 1)",
          "Hasil: Q1Q0 = 00, 01, 10, 11, 00, ..."
        ]
      }
    ],
    "soal": [
      {
        "q": "Gerbang yang bisa membangun semua fungsi logika hanya dari dirinya sendiri adalah…",
        "opts": [
          "AND",
          "OR",
          "NAND",
          "XOR"
        ],
        "ans": 2,
        "exp": "NAND (dan NOR) adalah gerbang universal."
      },
      {
        "q": "Hukum De Morgan: (A + B)̄ = …",
        "opts": [
          "Ā · B̄",
          "Ā + B̄",
          "A · B",
          "A + B"
        ],
        "ans": 0,
        "exp": "De Morgan: complement OR = AND dari complement → Ā · B̄."
      },
      {
        "q": "D flip-flop menyimpan data pada…",
        "opts": [
          "Setiap input berubah",
          "Rising edge clock",
          "Saat reset aktif",
          "Setiap siklus"
        ],
        "ans": 1,
        "exp": "D flip-flop edge-triggered: menyalin D → Q pada rising edge clock."
      },
      {
        "q": "Full Adder menerima input: A, B, dan…",
        "opts": [
          "Carry-in",
          "Clock",
          "Enable",
          "Reset"
        ],
        "ans": 0,
        "exp": "Full Adder menerima Carry-in dari stage sebelumnya."
      },
      {
        "q": "Jumlah baris tabel kebenaran untuk 4 input adalah…",
        "opts": [
          "4",
          "8",
          "16",
          "32"
        ],
        "ans": 2,
        "exp": "2⁴ = 16 baris."
      }
    ]
  },
{
    "id": "motor-listrik",
    "emoji": "🏭",
    "title": "Motor Listrik & Pengendalian",
    "subtitle": "Motor DC & induksi, rangkaian star-delta, kontaktor, relay, TOR & VFD",
    "level": "Menengah",
    "durasi": "±40 menit",
    "materi": [
      "Motor DC",
      "Motor Induksi",
      "Kontaktor & Relay",
      "Star-Delta",
      "VFD"
    ],
    "sections": [
      {
        "id": "motor-dc-arus-searah",
        "emoji": "🔋",
        "title": "Motor DC & Arus Searah",
        "body": "<p>Motor DC mengubah energi listrik menjadi energi mekanik berdasarkan gaya Lorentz pada konduktor dalam medan magnet.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/dc-motor-diagram.png\" alt=\"Komponen dalam motor DC: armatur, komutator, sikat karbon, dan magnet stator\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Komponen motor DC: armatur berputar dalam medan magnet stator, komutator & sikat membalik arah arus · sumber: Wikimedia Commons, <i>File:Motor parts.jpg</i> (CC BY-SA 3.0)</div></div>\n<p>$$T = k \\cdot \\Phi \\cdot I_a \\qquad E_b = k \\cdot \\Phi \\cdot \\omega$$</p>\n<p>Di mana T = torsi (Nm), k = konstanta motor, Φ = fluks, Ia = arus armatur, Eb = back-EMF, ω = kecepatan sudut (rad/s).</p>\n<p><strong>Tipe motor DC:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Karakteristik</th><th>Aplikasi</th></tr></thead><tbody>\n<tr><td>Seri</td><td>Torsi tinggi saat start, kecepatan naik saat beban berkurang</td><td>Kereta api, crane, elevator</td></tr>\n<tr><td>Shunt</td><td>Kecepatan konstan, torsi sedang</td><td>Mesin bor, mesin bubut</td></tr>\n<tr><td>Compound</td><td>Kombinasi seri + shunt</td><td>Rolling mill, hoist</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 Motor DC semakin tergantikan motor BLDC (Brushless DC) yang lebih efisien dan minim perawatan — banyak dipakai di drone, EV, dan robotika.</div>",
        "referensi": "Prinsip motor DC dari teori mesin listrik (Chapman, Electric Machinery Fundamentals). Formula back-EMF dan torsi dari definisi dasar electromechanical conversion."
      },
      {
        "id": "motor-induksi",
        "emoji": "🌀",
        "title": "Motor Induksi (Asinkron)",
        "body": "<p>Motor induksi 3 fasa adalah motor industri paling banyak digunakan — murah, kuat, minim perawatan.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/induction-motor.png\" alt=\"Diagram motor induksi 3 fasa\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Motor induksi 3 fasa: stator (kumparan tetap) menghasilkan medan magnet berputar yang menginduksi arus pada rotor — menghasilkan torsi tanpa kontak mekanis · sumber: Wikimedia Commons, <i>File:Induction motor.svg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Prinsip kerja:</strong></p>\n<ol>\n<li>Arus AC 3 fasa pada stator menghasilkan medan magnet berputar (rotating magnetic field)</li>\n<li>Medan ini memotong konduktor rotor → menginduksi arus (hukum Faraday)</li>\n<li>Arus pada rotor dalam medan stator → gaya Lorentz → rotor berputar</li>\n</ol>\n<p><strong>Slip:</strong></p>\n<p>$$s = \\frac{n_s - n_r}{n_s} \\times 100\\%$$</p>\n<p>Di mana ns = kecepatan sinkron (120f/p), nr = kecepatan rotor aktual. Slip tipikal 2–5% pada beban nominal.</p>\n<div class=\"mt-warn\">⚠️ Motor induksi tidak bisa mengontrol kecepatan secara presisi tanpa VFD (Variable Frequency Drive).</div>",
        "referensi": "Prinsip motor induksi: Nikola Tesla & Galileo Ferraris (1888). Slip dan sinkron dari teori AC machines (Chapman, Fitzgerald & Kingsley)."
      },
      {
        "id": "kontaktor-relay",
        "emoji": "🔌",
        "title": "Kontaktor & Relay",
        "body": "<p><strong>Kontaktor</strong> adalah sakelar elektromagnetik untuk menghubungkan/memutus arus beban besar (10A–600A).</p>\n<p><strong>Relay</strong> bekerja seperti kontaktor tapi untuk arus lebih kecil (10mA–10A), biasanya untuk sinyal kontrol.</p>\n<table class=\"mt-table\"><thead><tr><th>Fitur</th><th>Kontaktor</th><th>Relay</th></tr></thead><tbody>\n<tr><td>Arus nominal</td><td>10A – 600A</td><td>10mA – 10A</td></tr>\n<tr><td>Aplikasi</td><td>Motor, pemanas, beban berat</td><td>Logika kontrol, interlock</td></tr>\n<tr><td>Auxiliary contact</td><td>Ada (NO/NC)</td><td>Ada (NO/NC)</td></tr>\n<tr><td>Arc suppression</td><td>Ada (quenching chamber)</td><td>Minimal</td></tr>\n</tbody></table>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/contactor.jpg\" alt=\"Kontaktor industri 3 fasa terpasang pada rel DIN\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Kontaktor industri 3 fasa — coil, kontak utama, dan auxiliary contact · sumber: Wikimedia Commons, <i>File:Contactor.jpg</i> (CC BY-SA 4.0)</div></div>\n<div class=\"mt-tip\">💡 Kontaktor selalu dilengkapi auxiliary contact untuk interlock — misalnya mencegah kedua kontaktor star-delta aktif bersamaan.</div>",
        "referensi": "Spesifikasi kontaktor dari katalog vendor (Schneider Electric, ABB, Siemens). Pemilihan berdasarkan IEC 60947-4-1."
      },
      {
        "id": "rangkaian-star-delta",
        "emoji": "🔺",
        "title": "Rangkaian Star-Delta (Y-Δ)",
        "body": "<p>Star-delta adalah metode starting motor induksi untuk mengurangi arus start hingga 1/3 dari arus direct-on-line.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/star-delta.png\" alt=\"Diagram rangkaian star-delta motor\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Rangkaian star-delta (Y-Δ): konfigurasi star saat start (tegangan per fasa = V/√3), pindah ke delta untuk operasi normal (tegangan penuh) — mengurangi arus start menjadi 1/3 · sumber: Wikimedia Commons, <i>File:Star-delta starter.svg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Prinsip:</strong></p>\n<ul>\n<li><strong>Star (Y):</strong> Tegangan per fasa = V_line/√3 → arus start lebih kecil</li>\n<li><strong>Delta (Δ):</strong> Tegangan per fasa = V_line → motor beroperasi penuh</li>\n</ul>\n<p><strong>Urutan:</strong> Start dalam star → timer 5–10 detik → relay timer pindah ke delta.</p>\n<p><strong>Kriteria penggunaan:</strong> Motor harus bisa dimulai dalam star (torsi start cukup) — biasanya untuk beban ringan/sedang seperti kipas, pompa, kompressor.</p>\n<div class=\"mt-warn\">⚠️ JANGAN pakai star-delta untuk beban berat (crusher, conveyor penuh) — torsi star hanya 1/3 torsi delta, motor bisa macet!</div>",
        "referensi": "Prinsip star-delta dari teori motor AC. Pemilihan: Siemens/ABB application guide for motor starting methods."
      },
      {
        "id": "thermal-overload-relay",
        "emoji": "🌡️",
        "title": "Thermal Overload Relay (TOR)",
        "body": "<p>TOR melindungi motor dari panas berlebih (overload) yang merusak isolasi winding.</p>\n<p><strong>Prinsip kerja:</strong></p>\n<ol>\n<li>Arus motor melewati bimetal strip di dalam TOR</li>\n<li>Jika arus melebihi setting untuk waktu tertentu → bimetal melengkung → memutus rangkaian kontaktor</li>\n<li>Motor berhenti, mencegah kerusakan permanen</li>\n</ol>\n<p><strong>Pengaturan:</strong> Setting TOR harus sesuai dengan arus nominal motor (tertulis pada nameplate) — biasanya 0,95–1,05 × In.</p>\n<div class=\"mt-tip\">💡 TOR bukan pengaman terhadap short-circuit — itu tugas MCB/fuse. TOR hanya melindungi dari overload lambat (motor terlalu keras bekerja).</div>",
        "referensi": "TOR dari standar IEC 60947-4-1. Setting berdasarkan nameplate motor (FLA = Full Load Ampere)."
      },
      {
        "id": "vfd",
        "emoji": "🎚️",
        "title": "VFD (Variable Frequency Drive)",
        "body": "<p>VFD mengontrol kecepatan motor induksi dengan mengubah frekuensi dan tegangan supply motor.</p>\n<p><strong>Prinsip:</strong></p>\n<p>$$n = \\frac{120f}{p}(1-s)$$</p>\n<p>Mengubah frekuensi (f) → mengubah kecepatan sinkron → mengubah kecepatan rotor.</p>\n<p><strong>Tahapan dalam VFD:</strong></p>\n<ol>\n<li><strong>Rectifier:</strong> AC → DC (diode bridge)</li>\n<li><strong>DC Bus:</strong> Kapasitor smoothing</li>\n<li><strong>Inverter:</strong> DC → AC variabel (IGBT switching + PWM)</li>\n</ol>\n<p><strong>Keuntungan VFD:</strong></p>\n<ul>\n<li>Soft start (arus start rendah)</li>\n<li>Pengaturan kecepatan presisi</li>\n<li>Penghematan energi (pompa & kipas: daya ∝ kecepatan³)</li>\n<li>Torsi rendah bisa dipertahankan pada kecepatan rendah</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/vfd.jpg\" alt=\"Variable Frequency Drive (VFD) untuk motor AC\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Variable Frequency Drive (VFD) industri — tiga blok utama: rectifier (AC→DC), DC bus, dan inverter IGBT (DC→AC variabel) untuk kontrol kecepatan motor presisi · sumber: Wikimedia Commons, <i>File:Variable-frequency drive.jpg</i> (CC BY-SA 4.0)</div></div>",
        "referensi": "Prinsip VFD dari power electronics (Muhammad, Power Electronics). Efisiensi pompa/kipas: hukum affinity (P ∝ n³) dari fluid mechanics."
      }
    ],
    "contoh": [
      {
        "judul": "Menghitung Slip Motor Induksi",
        "soal": "Motor 4-pole, 50Hz, nameplate: 1440 RPM",
        "langkah": [
          "Ns = 120 × f / p = 120 × 50 / 4 = 1500 RPM",
          "Slip s = (1500 - 1440) / 1500 = 60/1500 = 0,04 = 4%",
          "Slip 4% → motor dalam kondisi normal (tipikal 2–5%)"
        ]
      },
      {
        "judul": "Penghematan Energi VFD pada Pompa",
        "soal": "Pompa beroperasi 80% dari kecepatan nominal (n₂ = 0,8 × n₁)",
        "langkah": [
          "Hukum affinity: P₂/P₁ = (n₂/n₁)³ = (0,8)³ = 0,512",
          "Daya turun 48,8% — penghematan besar!",
          "Contoh: pompa 10kW → dijalankan VFD pada 80% → hanya butuh 5,12kW",
          "Penghematan energi per tahun: (10 - 5,12) × 8000 jam = 39.040 kWh"
        ]
      }
    ],
    "soal": [
      {
        "q": "Motor induksi 4-pole, 50Hz memiliki kecepatan sinkron (ns) sebesar…",
        "opts": [
          "3000 RPM",
          "1500 RPM",
          "1000 RPM",
          "750 RPM"
        ],
        "ans": 1,
        "exp": "ns = 120f/p = 120 × 50/4 = 1500 RPM."
      },
      {
        "q": "Torsi motor induksi dalam konfigurasi star adalah…",
        "opts": [
          "3× torsi delta",
          "Sama dengan delta",
          "1/3 torsi delta",
          "2× torsi delta"
        ],
        "ans": 2,
        "exp": "Torsi ∝ V², dan tegangan star = V/√3 → torsi star = torsi delta / 3."
      },
      {
        "q": "Thermal Overload Relay (TOR) melindungi motor dari…",
        "opts": [
          "Short-circuit",
          "Overload lambat",
          "Tegangan berlebih",
          "Arus starting"
        ],
        "ans": 1,
        "exp": "TOR melindungi dari overload lambat — MCB/fuse yang menangani short-circuit."
      },
      {
        "q": "Dalam VFD, tahapan konversi energi adalah…",
        "opts": [
          "DC→AC→DC",
          "AC→DC→AC",
          "AC→AC→DC",
          "DC→DC→AC"
        ],
        "ans": 1,
        "exp": "Rectifier (AC→DC) → DC Bus → Inverter (DC→AC variabel)."
      },
      {
        "q": "Pompa beroperasi pada 80% kecepatan, daya yang dibutuhkan menjadi…",
        "opts": [
          "80% dari awal",
          "64% dari awal",
          "51,2% dari awal",
          "40% dari awal"
        ],
        "ans": 2,
        "exp": "P ∝ n³ → (0,8)³ = 0,512 = 51,2% dari daya awal."
      }
    ]
  },
{
    "id": "plc-otomasi",
    "emoji": "🛠️",
    "title": "PLC & Otomasi Industri",
    "subtitle": "Konsep PLC, ladder diagram, timer/counter, HMI & studi kasus konveyor",
    "level": "Menengah → Lanjutan",
    "durasi": "±45 menit",
    "materi": [
      "Konsep PLC",
      "Ladder Diagram",
      "Timer & Counter",
      "HMI",
      "SCADA",
      "Studi Kasus"
    ],
    "sections": [
      {
        "id": "pengenalan-plc",
        "emoji": "🏭",
        "title": "Pengenalan PLC",
        "body": "<p>PLC (Programmable Logic Controller) adalah komputer industri yang dirancang untuk mengendalikan mesin dan proses produksi secara real-time.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/plc-cpu.jpg\" alt=\"Unit PLC industri\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">PLC Siemens S7-1200 pada rel DIN: modul CPU (tengah), modul sinyal digital I/O (kanan), dan power supply DC (kiri) — sistem modular yang mudah diperluas · sumber: Wikimedia Commons, <i>File:Siemens S7-1200 PLC.jpg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Arsitektur dasar PLC:</strong></p>\n<ol>\n<li><strong>CPU:</strong> Memproses program kontrol (scan cycle: baca input → eksekusi program → tulis output)</li>\n<li><strong>Input Module:</strong> Menerima sinyal dari sensor, switch, push button (24VDC/240VAC)</li>\n<li><strong>Output Module:</strong> Mengontrol aktuator, lampu, kontaktor (relay, transistor, triac)</li>\n<li><strong>Power Supply:</strong> Menyupply tegangan operasi (umumnya 24VDC)</li>\n<li><strong>Communication:</strong> Ethernet, RS-485, Profibus, Modbus untuk konektivitas HMI/SCADA</li>\n</ol>\n<p><strong>Keunggulan PLC vs relay logic:</strong></p>\n<ul>\n<li>Fleksibel — program bisa diubah tanpa ubah wiring</li>\n<li>Mudah di-maintain — troubleshooting via software</li>\n<li>Reliable — dirancang untuk lingkungan industri (debu, panas, getaran)</li>\n<li>Skalabel — tambah modul I/O sesuai kebutuhan</li>\n</ul>",
        "referensi": "Konsep PLC dari standar IEC 61131-3 (programming languages). Arsitektur PLC dari referensi otomasi (Ogata, Modern Control Engineering). Vendor: Siemens S7-1200/1500, Mitsubishi FX5U, Omron NX/NJ, Allen-Bradley CompactLogix."
      },
      {
        "id": "ladder-diagram",
        "emoji": "🪜",
        "title": "Ladder Diagram (LD)",
        "body": "<p>Ladder Diagram adalah bahasa pemrograman PLC paling populer — menyerupai rangkaian relay elektrik yang mudah dipahami teknisi listrik.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/ladder-and.jpg\" alt=\"Contoh ladder diagram AND gate\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Ladder diagram PLC: contact seri (AND) = dua kontak dalam satu rung, contact paralel (OR) = cabang paralel — masing-masing rung berakhir di output coil · sumber: Wikimedia Commons, <i>File:Ladder diagram.svg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Simbol dasar ladder:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Simbol</th><th>Fungsi</th><th>Notasi PLC</th></tr></thead><tbody>\n<tr><td>| |</td><td>Normally Open (NO) contact</td><td>XIC (Examine If Closed)</td></tr>\n<tr><td>|/|</td><td>Normally Closed (NC) contact</td><td>XIO (Examine If Open)</td></tr>\n<tr><td>-( )-</td><td>Output coil</td><td>OTE (Output Energize)</td></tr>\n<tr><td>-(L)-</td><td>Latch (set)</td><td>OTL (Output Latch)</td></tr>\n<tr><td>-(U)-</td><td>Unlatch (reset)</td><td>OTU (Output Unlatch)</td></tr>\n</tbody></table>\n<p><strong>Contoh:</strong></p>\n<ul>\n<li>AND: Dua contact seri — kedua-duanya harus ON agar output ON</li>\n<li>OR: Dua contact paralel — salah satu ON sudah cukup</li>\n<li>NOT: NC contact — ON jika input OFF</li>\n</ul>",
        "referensi": "Ladder Diagram dari IEC 61131-3 (salah satu dari 5 bahasa PLC). Simbol mengikuti standar relay logic industrial."
      },
      {
        "id": "timer-counter",
        "emoji": "⏱️",
        "title": "Timer & Counter",
        "body": "<p>Timer dan counter adalah fungsi paling sering digunakan dalam program PLC.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/plc-timer-ladder.png\" alt=\"Diagram timer TON (On-Delay) pada ladder diagram PLC\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Timer On-Delay (TON) pada ladder PLC: coil aktif → timer mulai hitung → output ON setelah preset tercapai · sumber: Wikimedia Commons, <i>File:TimerOnDelayDiagram.png</i> (CC BY-SA 3.0)</div></div>\n<p><strong>Timer (TON, TOF, TONR):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Fungsi</th><th>Contoh Aplikasi</th></tr></thead><tbody>\n<tr><td>TON (On-Delay)</td><td>Delay sebelum output ON</td><td>Kipas pendingin: motor ON → delay 5s → kipas ON</td></tr>\n<tr><td>TOF (Off-Delay)</td><td>Delay sebelum output OFF</td><td>Lampu jalan: switch OFF → delay 30s → lampu OFF</td></tr>\n<tr><td>TONR (Retentive)</td><td>Menyimpan waktu yang telah berjalan</td><td>Waktu operasi mesin untuk maintenance tracking</td></tr>\n</tbody></table>\n<p><strong>Counter (CTU, CTD, CTUD):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Fungsi</th><th>Contoh Aplikasi</th></tr></thead><tbody>\n<tr><td>CTU (Count Up)</td><td>Menghitung naik</td><td>Menghitung produk melewati sensor</td></tr>\n<tr><td>CTD (Count Down)</td><td>Menghitung turun</td><td>Sisa stok dalam wadah</td></tr>\n<tr><td>CTUD</td><td>Count up & down</td><td>Penghitung parkir (masuk + keluar)</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 Timer resolusi tergantung scan time PLC — typical 1–10ms. Untuk timing presisi (&lt;1ms), gunakan high-speed counter atau hardware timer.</div>",
        "referensi": "Timer & Counter fungsi dari IEC 61131-3. Resolusi dari spesifikasi scan time PLC (Siemens S7: 1ms–10ms tergantung ukuran program)."
      },
      {
        "id": "hmi",
        "emoji": "🖥️",
        "title": "HMI (Human-Machine Interface)",
        "body": "<p>HMI adalah panel layar sentuh yang memungkinkan operator berinteraksi dengan PLC — memantau status, mengubah parameter, dan melihat alarm.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/hmi-panel.jpg\" alt=\"Panel HMI layar sentuh Siemens TP900 Comfort\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">HMI layar sentuh Siemens TP900 Comfort — menampilkan diagram proses, alarm, dan trend real-time · sumber: Wikimedia Commons, <i>File:Siemens TP900 Comfort.jpg</i> (CC BY-SA 4.0, Siemens AG)</div></div>\n<p><strong>Fungsi utama HMI:</strong></p>\n<ol>\n<li><strong>Visualisasi:</strong> Diagram alir proses, gauge, trend chart real-time</li>\n<li><strong>Input:</strong> Setpoint temperatur, kecepatan, timer</li>\n<li><strong>Alarm:</strong> Peringatan visual/audio saat parameter di luar batas</li>\n<li><strong>Data Logging:</strong> Mencatat data proses untuk analisis</li>\n<li><strong>Keamanan:</strong> Level akses operator (view only, operate, engineer)</li>\n</ol>\n<p><strong>Hubungan HMI ↔ PLC:</strong></p>\n<ul>\n<li>HMI membaca/menulis tag PLC via komunikasi (Modbus TCP, Ethernet/IP, PROFINET)</li>\n<li>Tiap elemen grafis di HMI dihubungkan ke alamat/tag tertentu di PLC</li>\n</ul>",
        "referensi": "Desain HMI mengikuti ISA-101 (HMI Display Design). Komunikasi HMI-PLC via protocol industri (Modbus, Ethernet/IP, PROFINET) dari vendor documentation."
      },
      {
        "id": "scada",
        "emoji": "📊",
        "title": "SCADA (Supervisory Control and Data Acquisition)",
        "body": "<p>SCADA adalah sistem monitoring dan kontrol terpusat untuk fasilitas industri berskala besar — mengumpulkan data dari banyak PLC/RTU dan menampilkannya di satu pusat kontrol.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Scada_std_anim_s.gif/400px-Scada_std_anim_s.gif\" alt=\"Animasi sistem SCADA memantau dan mengontrol proses industri\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Sistem SCADA — supervisor komputer memantau dan mengontrol plant industri secara real-time · sumber: Wikimedia Commons, <i>File:Scada std anim s.gif</i> (CC BY-SA 3.0, Penyulap)</div></div>\n<p><strong>Elemen SCADA:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Komponen</th><th>Fungsi</th></tr></thead><tbody>\n<tr><td>RTU (Remote Terminal Unit)</td><td>Interface field device → jaringan komunikasi</td></tr>\n<tr><td>PLC</td><td>Kontrol lokal mesin/proses</td></tr>\n<tr><td>Master Station (HMI Server)</td><td>Pusat monitoring, historian, alarm management</td></tr>\n<tr><td>Communication Network</td><td>SCADA Ethernet, 4G/5G, radio, fiber optik</td></tr>\n<tr><td>Historian</td><td>Database time-series untuk data proses historis</td></tr>\n</tbody></table>\n<p><strong>Contoh implementasi:</strong></p>\n<ul>\n<li>Sistem distribusi air: 50+ pompa + 200+ sensor tekanan → SCADA terpusat</li>\n<li>PLTS: monitoring output inverter, irradiance, suhu panel dari satu dashboard</li>\n<li>Pabrik: monitoring semua line produksi dari satu control room</li>\n</ul>\n<div class=\"mt-warn\">⚠️ Keamanan SCADA sangat kritis — harus terpisah dari jaringan kantor dan dilindungi firewall industri (IEC 62443).</div>",
        "referensi": "SCADA dari standar ISA-95 / IEC 62264. Keamanan SCADA: IEC 62443 (Industrial Automation and Control Systems Security). Historian: OSIsoft PI, GE Proficy."
      },
      {
        "id": "studi-kasus-sistem-konveyor-otomatis",
        "emoji": "⚙️",
        "title": "Studi Kasus: Sistem Konveyor Otomatis",
        "body": "<p>Simulasi sistem konveyor dengan 3 stasiun kerja yang dikontrol PLC:</p>\n<p><strong>Spesifikasi:</strong></p>\n<ul>\n<li>Konveyor utama (motor 3 fasa, VFD)</li>\n<li>Sensor photocell di setiap stasiun (product detection)</li>\n<li>HMI untuk monitoring & set parameter</li>\n<li>Alarm jika produk macet &gt; 30 detik</li>\n</ul>\n<p><strong>Logika kontrol:</strong></p>\n<ol>\n<li>Produk masuk → photocell 1 ON → konveyor jalan</li>\n<li>Stasiun 1 mendeteksi → konveyor berhenti 10 detik (waktu kerja)</li>\n<li>Setelah 10s → konveyor jalan lagi ke stasiun 2</li>\n<li>Jika produk tidak terdeteksi dalam 30s → alarm & stop</li>\n</ol>\n<p><strong>Implementasi ladder:</strong></p>\n<ul>\n<li>TON untuk delay stasiun (10s)</li>\n<li>TON untuk alarm timeout (30s)</li>\n<li>CTU untuk menghitung jumlah produk selesai</li>\n<li>Output ke VFD (start/stop/speed)</li>\n</ul>",
        "referensi": "Studi kasus konveyor dari aplikasi nyata otomasi industri. Konsep dasar dari Siemens S7 TIA Portal application examples."
      },
      {
        "id": "video-plc",
        "emoji": "🎬",
        "title": "Video Pendukung (tab Video)",
        "body": "<p>Konsep PLC paling mudah dipahami lewat animasi. Buka tab <strong>Video</strong> (topik <em>PLC, HMI & SCADA</em> dan <em>Digital & Kontrol</em>) untuk menonton: 👇</p>\n<div class=\"mt-tip\">▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('PbAGl_mv5XI')\">🎬 Dasar PLC (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('qaI48NCUvkA')\">🎬 Apa itu Ladder Logic? (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('BHbOXDt5O3o')\">🎬 Timer PLC untuk Pemula (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('B3YVpgs9RY4')\">🎬 DCS vs SCADA (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('G5VGUGFzGj0')\">🎬 Sinking vs Sourcing (RealPars)</button><br>▶ <button class=\"vtpl-chip\" onclick=\"openVideoById('S97rhReEnbo')\">🎬 Apa itu AS-Interface? (RealPars)</button></div>\n<div class=\"mt-warn\">⚠️ PLC belum bisa disimulasikan di Wokwi (belum ada part-nya). Manfaatkan video, modul ini, dan latihan soal sebagai fondasi sebelum praktik hardware asli — untuk dasar elektronik/Arduino, coba template ESP32/Arduino di Lab Proyek.</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Membuat Timer On-Delay di Ladder",
        "soal": "Input X0 = start button (NO), Output Y0 = lampu",
        "langkah": [
          "Timer T1 = TON, preset = 50 (5,0 detik pada timer 100ms)",
          "Ladder: ---[X0]---[TON T1 K50]---",
          "           ---[T1]---(Y0)---",
          "Hasil: tekan X0 → tunggu 5 detik → Y0 (lampu) menyala"
        ]
      },
      {
        "judul": "Counter Produk pada Konveyor",
        "soal": "Sensor photocell = X1 (pulse setiap produk lewat)",
        "langkah": [
          "Counter C1 = CTU, preset = 100",
          "Saat C1.ACC ≥ 100 → C1.DN = ON → output Y5 (lampu \"batch selesai\")",
          "Reset counter: X2 (manual reset button) → RES C1",
          "Monitoring: HMI menampilkan C1.ACC (jumlah produk real-time)"
        ]
      }
    ],
    "soal": [
      {
        "q": "Scan cycle PLC terdiri dari 3 langkah utama, urutan yang benar adalah…",
        "opts": [
          "Eksekusi program → Baca input → Tulis output",
          "Baca input → Eksekusi program → Tulis output",
          "Tulis output → Baca input → Eksekusi program",
          "Baca output → Tulis input → Eksekusi program"
        ],
        "ans": 1,
        "exp": "PLC scan cycle: Baca input → Eksekusi program → Tulis output (repeat terus-menerus)."
      },
      {
        "q": "Timer TON (On-Delay) dengan preset 50 pada timer 100ms akan menunda output selama…",
        "opts": [
          "50 ms",
          "500 ms",
          "5 detik",
          "50 detik"
        ],
        "ans": 2,
        "exp": "50 × 100ms = 5000ms = 5 detik."
      },
      {
        "q": "Star-delta starter mengurangi arus starting motor menjadi…",
        "opts": [
          "1/2 arus DOL",
          "1/3 arus DOL",
          "1/√3 arus DOL",
          "Sama dengan DOL"
        ],
        "ans": 1,
        "exp": "Star: tegangan per fasa = V/√3 → arus = 1/3 arus DOL."
      },
      {
        "q": "Dalam SCADA, komponen yang mencatat data proses historis untuk analisis disebut…",
        "opts": [
          "RTU",
          "PLC",
          "Historian",
          "HMI"
        ],
        "ans": 2,
        "exp": "Historian adalah database time-series untuk menyimpan data proses historis."
      },
      {
        "q": "PLC scan time tipikal adalah…",
        "opts": [
          "1–10 µs",
          "1–10 ms",
          "1–10 detik",
          "1–10 menit"
        ],
        "ans": 1,
        "exp": "Scan time PLC industri tipikal 1–10ms tergantung ukuran program dan jenis CPU."
      }
    ]
  },
{
    "id": "iot-intro",
    "emoji": "🌐",
    "title": "Introduction to Internet of Things",
    "subtitle": "Definisi, karakteristik, arsitektur layer, ekosistem & implementasi lintas industri",
    "level": "Pemula",
    "durasi": "±30 menit",
    "materi": [
      "Definisi & Karakteristik IoT",
      "Arsitektur 3-Layer & 5-Layer",
      "Ekosistem Edge vs Cloud",
      "Implementasi Lintas Industri (IIoT, Smart City, Healthcare, Agriculture)"
    ],
    "sections": [
      {
        "id": "iot-introduction",
        "emoji": "💡",
        "title": "Pengenalan & Definisi Internet of Things",
        "body": "<p><strong>Internet of Things (IoT)</strong> adalah paradigma komputasi dan komunikasi di mana benda-benda fisik (<em>things</em>) diintegrasikan dengan sensor, perangkat lunak, aktuator, dan teknologi konektivitas nirkabel/kabel untuk mengumpulkan, bertukar, dan menindaklanjuti data melalui jaringan internet tanpa memerlukan interaksi langsung manusia ke manusia atau manusia ke komputer.</p>\n<p>Istilah <em>Internet of Things</em> pertama kali dicetuskan pada tahun <strong>1999 oleh Kevin Ashton</strong> dalam presentasinya di Procter & Gamble (P&G) saat menghubungkan teknologi RFID (Radio Frequency Identification) dengan supply chain manajemen internet.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/iot-diagram.jpg\" alt=\"Diagram arsitektur sistem Internet of Things\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Arsitektur dasar Internet of Things: perangkat edge (sensor & mikrokontroler) → gateway/konektivitas internet → cloud/IoT platform → aplikasi visualisasi & kontrol · sumber: Wikimedia Commons, <i>File:IoT architecture.svg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Karakteristik Utama IoT:</strong></p>\n<ul>\n<li><strong>Sensing (Penginderaan):</strong> Kemampuan mengukur perubahan parameter fisik lingkungan (suhu, kelembaban, tekanan, getaran, arus listrik) menjadi sinyal digital.</li>\n<li><strong>Interconnectivity (Interkonektivitas):</strong> Segala entitas fisik dapat saling terhubung ke infrastruktur informasi dan komunikasi global.</li>\n<li><strong>Processing & Computing:</strong> Memproses data mentah menjadi informasi berharga, baik di tingkat lokal (edge) maupun terpusat (cloud).</li>\n<li><strong>Actuation (Aktuasi):</strong> Kemampuan mengubah sinyal kendali digital menjadi tindakan fisik (menutup valve, menyalakan relay motor, mengubah sudut servo).</li>\n<li><strong>Dynamic & Self-Adapting:</strong> Perangkat mampu menyesuaikan perilakunya sesuai perubahan konteks lingkungan secara otomatis (misal: masuk mode sleep saat malam).</li>\n<li><strong>Unique Identity:</strong> Setiap perangkat IoT memiliki identitas unik berupa alamat IP (IPv4/IPv6), MAC Address, atau Device ID untuk pengalamatan terpercaya.</li>\n</ul>\n<p><strong>Perbedaan Sistem Embedded Tradisional vs Sistem IoT:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Parameter</th><th>Sistem Embedded Tradisional</th><th>Sistem Internet of Things (IoT)</th></tr></thead><tbody>\n<tr><td>Konektivitas</td><td>Standalone / Loop tertutup lokal (tanpa internet)</td><td>Terhubung ke jaringan IP / Internet global</td></tr>\n<tr><td>Pengolahan Data</td><td>Lokal di mikrokontroler dengan memori terbatas</td><td>Kombinasi Edge Computing + Cloud Analytics skala besar</td></tr>\n<tr><td>Skalabilitas</td><td>Terbatas pada satu perangkat / kabel fisik</td><td>Mampu mengelola ribuan hingga jutaan node terdistribusi</td></tr>\n<tr><td>Firmware Update</td><td>Manual lewat kabel programmer (ISP/JTAG)</td><td>Over-The-Air (OTA) update via Wi-Fi/Cellular</td></tr>\n<tr><td>Antarmuka Pengguna</td><td>LCD karakter / 7-segment / tombol fisik</td><td>Dashboard Web responsif, Mobile App, REST API</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 <strong>Contoh Nyata Sehari-Hari:</strong> Smart thermostat (Nest) yang mempelajari kebiasaan suhu penghuni rumah, lampu pintar (smart bulb) yang dikontrol via suara, pelacak kebugaran (smartwatch) dengan sinkronisasi detak jantung ke cloud, dan meteran listrik pintar (smart energy meter).</div>",
        "referensi": "ITU-T Recommendation Y.2060 (Overview of the Internet of Things); IEEE IoT Initiative; Ashton, K. (2009) \"That 'Internet of Things' Thing\", RFID Journal."
      },
      {
        "id": "iot-architecture-ecosystem",
        "emoji": "🏗️",
        "title": "Arsitektur dan Ekosistem IoT",
        "body": "<p>Untuk memahami aliran data dari sensor fisik hingga sampai ke layar pengguna, sistem IoT distandarisasi ke dalam lapisan arsitektur berlapis (<em>layered architecture</em>).</p>\n<p><strong>Model 3-Layer Arsitektur IoT:</strong></p>\n<ol>\n<li><strong>Perception Layer (Sensing Layer):</strong> Lapisan terbawah yang bersentuhan langsung dengan dunia fisik. Terdiri dari sensor (mengukur besaran fisik), aktuator (melakukan aksi), dan mikrokontroler pembaca sinyal.</li>\n<li><strong>Network Layer (Transmission Layer):</strong> Bertanggung jawab mentransmisikan data dari perception layer ke sistem pemrosesan menggunakan media kabel (Ethernet) atau nirkabel (Wi-Fi, BLE, LoRaWAN, Cellular 4G/5G, Zigbee).</li>\n<li><strong>Application Layer:</strong> Lapisan teratas yang menyajikan data dan layanan kepada pengguna akhir (dashboard analitik, kontrol otomatisasi, laporan berkala, sistem alarm).</li>\n</ol>\n<p><strong>Model 5-Layer Arsitektur Enterprise IoT:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Layer</th><th>Fungsi Utama</th><th>Teknologi & Protokol</th></tr></thead><tbody>\n<tr><td>1. Perception</td><td>Akuisisi data fisik & aktuasi</td><td>Sensor DHT22, BME280, PIR, ADC, Relay, Motor</td></tr>\n<tr><td>2. Transport</td><td>Transmisi data ke gateway/broker</td><td>Wi-Fi (802.11), BLE, LoRaWAN, NB-IoT, Ethernet</td></tr>\n<tr><td>3. Processing</td><td>Penyimpanan data, validasi, broker</td><td>MQTT Broker (Mosquitto), Rule Engine, InfluxDB, PostgreSQL</td></tr>\n<tr><td>4. Application</td><td>Antarmuka pengguna & monitoring</td><td>ThingsBoard Dashboard, Grafana, REST API, Web App</td></tr>\n<tr><td>5. Business</td><td>Pengambilan keputusan bisnis & AI</td><td>Big Data Analytics, Machine Learning Predictive Maintenance</td></tr>\n</tbody></table>\n<p><strong>Komparasi Paradigma: Edge Computing vs Cloud Computing dalam IoT:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Parameter</th><th>Edge Computing (Lokal / Node)</th><th>Cloud Computing (Server Terpusat)</th></tr></thead><tbody>\n<tr><td>Latensi Respon</td><td>Sangat rendah (&lt;10 ms) — real-time</td><td>Lebih tinggi (50–500 ms) tergantung internet</td></tr>\n<tr><td>Penggunaan Bandwidth</td><td>Sangat hemat (hanya kirim data agregat/anomali)</td><td>Tinggi (jika seluruh raw data dikirim kontinu)</td></tr>\n<tr><td>Keandalan Offline</td><td>Tetap bekerja saat koneksi internet mati</td><td>Layanan terhenti jika koneksi terputus</td></tr>\n<tr><td>Kapasitas Komputasi</td><td>Terbatas oleh daya mikrokontroler/Edge AI</td><td>Hampir tak terbatas (skalabilitas cloud)</td></tr>\n<tr><td>Privasi Data</td><td>Data sensitif tetap di jaringan lokal</td><td>Data harus dienkripsi saat transit & di cloud</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 <strong>Arsitektur Modern (Hybrid):</strong> Gunakan <em>Edge Computing</em> untuk proteksi keselamatan darurat (misal: motor trip langsung jika overheat dalam 5ms) dan gunakan <em>Cloud Computing</em> untuk penyimpanan tren jangka panjang dan pelatihan model AI.</div>",
        "referensi": "Al-Fuqaha et al. (2015) \"Internet of Things: A Survey on Enabling Technologies, Protocols, and Applications\", IEEE Communications Surveys & Tutorials; OpenFog Reference Architecture."
      },
      {
        "id": "iot-industrial-implementation",
        "emoji": "🏭",
        "title": "Implementasi IoT di Berbagai Sektor Industri",
        "body": "<p>Penerapan IoT telah mentransformasi berbagai sektor industri konvensional menuju otomatisasi cerdas berbasis data real-time:</p>\n<p><strong>1. Industrial IoT (IIoT / Manufaktur & Industry 4.0):</strong></p>\n<ul>\n<li><strong>Predictive Maintenance:</strong> Sensor getaran piezoelektrik (accelerometer) dan suhu yang dipasang pada motor induksi/turbin memprediksi kerusakan bearing sebelum terjadi <em>breakdown</em> fatal.</li>\n<li><strong>OEE (Overall Equipment Effectiveness) Monitoring:</strong> Menghitung rasio ketersediaan (Availability), kinerja (Performance), dan kualitas (Quality) mesin pabrik secara otomatis per detik.</li>\n<li><strong>Smart Asset Tracking:</strong> Memantau posisi palet dan kontainer logistik menggunakan RFID dan gateway LoRaWAN di seluruh gudang.</li>\n</ul>\n<p><strong>2. Smart Agriculture (Pertanian & Peternakan Presisi):</strong></p>\n<ul>\n<li><strong>Irigasi Otomatis:</strong> Sensor kelembaban tanah (soil moisture) mengaktifkan pompa irigasi tetes (drip irrigation) hanya saat tanah benar-benar membutuhkan air, menghemat konsumsi air hingga 40%.</li>\n<li><strong>Greenhouse Climate Control:</strong> Pengaturan otomatis exhaust fan, misting pump, dan lampu LED grow light berdasarkan pembacaan sensor BME280 dan sensor radiasi matahari (pyranometer).</li>\n<li><strong>Smart Livestock:</strong> Kalung sensor berbasis LoRaWAN memantau suhu tubuh dan tingkat aktivitas ternak sapi untuk deteksi dini penyakit.</li>\n</ul>\n<p><strong>3. Smart Healthcare (Internet of Medical Things - IoMT):</strong></p>\n<ul>\n<li><strong>Continuous Patient Telemetry:</strong> Pemantauan elektrokardiogram (EKG), saturasi oksigen (SpO2), dan tekanan darah pasien rawat jalan yang terhubung langsung ke server rumah sakit.</li>\n<li><strong>Cold Chain Vaccine Monitoring:</strong> Kotak pendingin vaksin dilengkapi sensor suhu dan GPS untuk memastikan vaksin tidak pernah terpapar suhu di luar 2–8°C selama pengiriman.</li>\n</ul>\n<p><strong>4. Smart City & Smart Building:</strong></p>\n<ul>\n<li><strong>Smart Street Lighting:</strong> Lampu jalan LED yang meredup otomatis saat sepi dan menyala terang saat ada kendaraan/pejalan kaki yang melintas.</li>\n<li><strong>Smart Water Metering (AMR):</strong> Pengiriman data volume meteran air PDAM otomatis via NB-IoT tanpa petugas harus datang mencatat ke rumah pelanggan.</li>\n<li><strong>Smart Waste Management:</strong> Sensor ultrasonik mendeteksi ketinggian sampah di tempat sampah kota untuk optimasi rute armada truk pengangkut.</li>\n</ul>\n<p><strong>5. Smart Grid & Energi Terbarukan:</strong></p>\n<ul>\n<li><strong>Distributed Energy Resource (DER) Monitoring:</strong> Memantau keluaran daya inverter PLTS atap dan turbin angin secara real-time untuk menjaga kestabilan jaringan listrik PLN.</li>\n<li><strong>Smart Fault Detection:</strong> Sensor arus Rogowski coil pada gardu distribusi yang langsung mengisolasi jaringan saat terjadi hubung singkat.</li>\n</ul>",
        "referensi": "Industrial Internet Consortium (IIC) Industrial Internet Reference Architecture; FAO Smart Agriculture Guidelines; WHO Telemedicine & Digital Health Standards."
      }
    ],
    "contoh": [
      {
        "judul": "Kalkulasi Penghematan Bandwidth dengan Edge Computing",
        "soal": "Sebuah node sensor getaran industri mengambil data akselerasi 3 sumbu dengan sampling rate 1000 Hz (masing-masing sumbu 16-bit / 2 byte float). Bandingkan konsumsi data harian antara pengiriman seluruh raw data ke cloud vs pengiriman ringkasan statistik (RMS & Peak) tiap 10 detik.",
        "langkah": [
          "Hitung laju data mentah (Raw Data Stream): Tiap sampel = 3 sumbu × 2 byte = 6 byte. Laju data = 1000 sampel/detik × 6 byte = 6.000 byte/detik (6 kB/s).",
          "Data mentah per hari = 6.000 byte/detik × 86.400 detik = 518.400.000 byte ≈ 518,4 MB per hari.",
          "Hitung laju data dengan Edge Processing: ESP32 menghitung nilai RMS dan Peak secara lokal pada memory buffer, lalu hanya mengirim 4 nilai float (4 × 4 byte = 16 byte payload) setiap 10 detik.",
          "Data ringkasan per hari = (86.400 detik / 10 detik) × 16 byte = 8.640 transmisi × 16 byte = 138.240 byte ≈ 138,2 kB per hari.",
          "<strong>Kesimpulan:</strong> Edge computing mereduksi konsumsi bandwidth dan storage cloud hingga 99,97% (dari 518,4 MB menjadi hanya 138 kB per hari)."
        ]
      },
      {
        "judul": "Perancangan Layer IoT untuk Smart Farming",
        "soal": "Rancang arsitektur sistem pemantauan kelembaban tanah dan otomasi pompa pada perkebunan sawit seluas 5 hektar tanpa jangkauan Wi-Fi router biasa.",
        "langkah": [
          "<strong>Perception Layer:</strong> Menggunakan sensor Soil Moisture Capacitive v1.2 + mikrokontroler low-power dengan modulasi transmisi LoRa (433/915 MHz) bertenaga baterai LiFePO4 + solar panel kecil.",
          "<strong>Network Layer:</strong> Node sensor mengirim data paket LoRa point-to-point ke 1 unit LoRa Gateway pusat di kantor kebun. Gateway terhubung ke internet via modem seluler 4G LTE.",
          "<strong>Processing & Platform Layer:</strong> Gateway mem-forward data ke broker ThingsBoard Cloud menggunakan protokol MQTT.",
          "<strong>Application Layer:</strong> Dashboard ThingsBoard menampilkan peta sebaran kelembaban tanah. Rule engine memicu aktuasi relay pompa jika rerata kelembaban < 35% dan mengirim peringatan ke Telegram pengelola kebun."
        ]
      }
    ],
    "soal": [
      {
        "q": "Siapakah tokoh yang pertama kali mencetuskan istilah \"Internet of Things\" pada tahun 1999?",
        "opts": [
          "Tim Berners-Lee",
          "Kevin Ashton",
          "Linus Torvalds",
          "Vint Cerf"
        ],
        "ans": 1,
        "exp": "Kevin Ashton pertama kali menggunakan istilah Internet of Things (IoT) pada tahun 1999 saat mempresentasikan penerapan RFID pada rantai pasok P&G."
      },
      {
        "q": "Dalam model 3-layer arsitektur IoT, layer yang bertugas membaca parameter fisik dari lingkungan adalah…",
        "opts": [
          "Transport Layer",
          "Application Layer",
          "Perception / Sensing Layer",
          "Business Layer"
        ],
        "ans": 2,
        "exp": "Perception Layer (Sensing Layer) adalah lapisan fisik paling bawah yang terdiri dari sensor dan aktuator untuk berinteraksi dengan lingkungan fisik."
      },
      {
        "q": "Keuntungan utama menerapkan paradigma Edge Computing dibandingkan Cloud Computing murni pada IoT adalah…",
        "opts": [
          "Kapasitas penyimpanan data tak terbatas",
          "Latensi respon sangat rendah dan hemat konsumsi bandwidth jaringan",
          "Biaya hardware node jauh lebih murah tanpa mikrokontroler",
          "Tidak membutuhkan algoritma pemrosesan lokal"
        ],
        "ans": 1,
        "exp": "Edge computing memproses dan memfilter data langsung di dekat sumber sensor, sehingga latensi respon sangat rendah (<10ms) dan menghemat bandwidth internet."
      },
      {
        "q": "Manakah di bawah ini yang merupakan contoh penerapan Industrial IoT (IIoT)?",
        "opts": [
          "Smartwatch menghitung langkah kaki harian",
          "Lampu tidur otomatis menyala saat gelap di kamar",
          "Sensor getaran dan suhu untuk predictive maintenance pada motor pompa industri",
          "Smart TV memutar video streaming"
        ],
        "ans": 2,
        "exp": "Predictive maintenance pada motor industri menggunakan sensor getaran dan temperatur adalah implementasi klasik Industrial IoT untuk mencegah downtime pabrik."
      },
      {
        "q": "Perbedaan mendasar antara sistem embedded konvensional dengan sistem IoT adalah…",
        "opts": [
          "Sistem embedded tidak menggunakan mikrokontroler sama sekali",
          "Sistem IoT terhubung ke jaringan internet/IP untuk telemetri dan integrasi cloud analytics",
          "Sistem IoT hanya bisa bekerja dengan daya AC 220V",
          "Sistem embedded selalu membutuhkan layar touchscreen"
        ],
        "ans": 1,
        "exp": "Sistem IoT memiliki kapabilitas konektivitas jaringan (IP/Internet), memungkinkan pertukaran data telemetri, analitik terpusat di cloud, dan pembaruan firmware jarak jauh (OTA)."
      }
    ]
  },
{
    "id": "iot-esp32",
    "emoji": "⚡",
    "title": "Microcontroller (ESP32)",
    "subtitle": "Arsitektur ESP32, Arduino IDE & Wokwi, ADC/DAC/PWM, GPIO I/O & komunikasi serial",
    "level": "Menengah",
    "durasi": "±45 menit",
    "materi": [
      "Arsitektur Chip & Varian ESP32",
      "Arduino IDE & Wokwi Simulator",
      "Sinyal Digital, Analog & ADC/DAC/PWM",
      "Digital I/O & Interfacing",
      "Komunikasi Serial UART, I2C & SPI"
    ],
    "sections": [
      {
        "id": "intro-esp32-architecture",
        "emoji": "🧠",
        "title": "Pengenalan & Arsitektur Chip ESP32",
        "body": "<p><strong>ESP32</strong> adalah mikrokontroler <em>System-on-a-Chip</em> (SoC) buatan Espressif Systems yang dirancang khusus untuk aplikasi Internet of Things, otomasi, dan perangkat pintar bertenaga rendah dengan fitur radio nirkabel terintegrasi.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/esp32-devkitc-pinout.png\" alt=\"Pinout ESP32 DevKitC V4\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Pinout ESP32 DevKitC V4: 38 pin GPIO multifungsi, ADC 12-bit (ch 0–19), DAC (ch 25, 26), TOUCH (ch 0–9), I2C (SDA=21, SCL=22), SPI default, UART0 (TX=1, RX=3) · sumber: Wikimedia Commons, <i>File:ESP32-Devkit-Pinout-Rev-12-9600p.png</i> (CC BY-SA 4.0, Vishnu Maiea)</div></div>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/esp32-wroom-module.jpg\" alt=\"Foto Modul ESP-WROOM-32\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Modul ESP-WROOM-32 dengan pelindung logam EMI shield dan antena PCB bawaan 2.4 GHz · sumber: Wikimedia Commons, <i>File:Espressif ESP-WROOM-32 Wi-Fi & Bluetooth Module.jpg</i> (CC BY-SA 4.0, Brian Krent)</div></div>\n<p><strong>Spesifikasi Utama Arsitektur ESP32:</strong></p>\n<ul>\n<li><strong>Prosesor:</strong> Dual-Core Tensilica Xtensa 32-bit LX6 Microprocessor (Core 0 / PRO_CPU dan Core 1 / APP_CPU) dengan frekuensi clock hingga 240 MHz (menghasilkan hingga 600 DMIPS).</li>\n<li><strong>Memori:</strong> 520 KB internal SRAM, 448 KB ROM, dan mendukung SPI Flash eksternal 4 MB hingga 16 MB. Tersedia varian dengan PSRAM 4 MB/8 MB (ESP32-WROVER).</li>\n<li><strong>Konektivitas Nirkabel:</strong> Wi-Fi 802.11 b/g/n (kecepatan hingga 150 Mbps) dan Bluetooth v4.2 BR/EDR serta Bluetooth Low Energy (BLE).</li>\n<li><strong>Low Power ULP:</strong> Co-processor Ultra-Low-Power (ULP) yang dapat membaca sensor ADC saat dual-core utama berada dalam kondisi <em>Deep Sleep</em> (konsumsi arus &lt; 10 µA).</li>\n</ul>\n<p><strong>Varian Keluarga ESP32:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Varian</th><th>Arsitektur Core</th><th>Wi-Fi / Bluetooth</th><th>Fitur Khusus</th></tr></thead><tbody>\n<tr><td><strong>ESP32 (Klasik)</strong></td><td>Dual-Core Xtensa LX6 240MHz</td><td>Wi-Fi 4 + BLE 4.2</td><td>Paling umum, support DAC & touch sensor</td></tr>\n<tr><td><strong>ESP32-S2</strong></td><td>Single-Core Xtensa LX7 240MHz</td><td>Wi-Fi 4 (tanpa BT)</td><td>Native USB OTG, 43 GPIO</td></tr>\n<tr><td><strong>ESP32-S3</strong></td><td>Dual-Core Xtensa LX7 240MHz</td><td>Wi-Fi 4 + BLE 5.0 (Mesh)</td><td>Vector instructions untuk TinyML & AI suara/visi</td></tr>\n<tr><td><strong>ESP32-C3 / C6</strong></td><td>Single-Core RISC-V 160MHz</td><td>Wi-Fi 6 (C6) + BLE 5.0 + Zigbee/Thread</td><td>Arsitektur open-source RISC-V, efisiensi tinggi</td></tr>\n</tbody></table>\n<p><strong>Perhatian Pinout Khusus (Strapping & Input-Only):</strong></p>\n<ul>\n<li><strong>Strapping Pins (GPIO 0, 2, 12, 15):</strong> Menentukan mode boot saat chip dinyalakan. Pastikan GPIO0 tidak ditarik ke LOW saat booting normal (LOW = masuk mode flash download).</li>\n<li><strong>Input-Only Pins (GPIO 34, 35, 36, 39):</strong> Hanya dapat digunakan sebagai input (misal ADC). Tidak memiliki internal pull-up / pull-down dan TIDAK DAPAT dijadikan output.</li>\n</ul>",
        "referensi": "Espressif Systems ESP32 Datasheet & ESP32 Technical Reference Manual v4.7; Kolban, N. (2018) \"Kolban's Book on ESP32\"."
      },
      {
        "id": "arduino-ide-wokwi",
        "emoji": "💻",
        "title": "Pengembangan: Arduino IDE & Wokwi Simulator",
        "body": "<p>ESP32 dapat diprogram menggunakan berbagai framework, seperti <strong>ESP-IDF</strong> (C/C++ native FreeRTOS), <strong>MicroPython</strong>, atau <strong>Arduino Core for ESP32</strong> yang paling populer untuk pemula dan prototyping cepat.</p>\n<p><strong>Langkah Instalasi Board ESP32 di Arduino IDE:</strong></p>\n<ol>\n<li>Buka Arduino IDE $\rightarrow$ File $\rightarrow$ Preferences.</li>\n<li>Tambahkan URL Board Manager: <br><code>https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</code></li>\n<li>Buka Tools $\rightarrow$ Board $\rightarrow$ Boards Manager, cari <strong>esp32</strong> by Espressif Systems lalu klik <strong>Install</strong>.</li>\n<li>Pilih board: <strong>ESP32 Dev Module</strong> atau <strong>DOIT ESP32 DEVKIT V1</strong>.</li>\n</ol>\n<p><strong>Pengenalan Wokwi Simulator (Simulasi Hardware Online):</strong></p>\n<p>Wokwi (<strong>wokwi.com</strong>) adalah platform simulasi sirkuit dan mikrokontroler berbasis browser yang sangat akurat untuk ESP32, Arduino, dan Raspberry Pi Pico tanpa membutuhkan hardware fisik nyata.</p>\n<ul>\n<li>Mendukung simulasi koneksi Wi-Fi virtual menggunakan SSID <strong>Wokwi-GUEST</strong> (dapat terhubung ke broker MQTT publik dan HTTP API asli!).</li>\n<li>Mendukung komponen sensor lengkap: DHT22, BME280, HC-SR04, Potensiometer, Relay, Servo, OLED I2C SSD1306, LCD2004, dan LED NeoPixel WS2812B.</li>\n<li>Struktur file Wokwi terdiri dari: <code>sketch.ino</code> (kode program), <code>diagram.json</code> (koneksi kabel & komponen), dan <code>libraries.txt</code>.</li>\n</ul>\n<p><strong>Contoh Kode Program ESP32: Membaca Status Internal Chip</strong></p>\n<pre><code>void setup() {\n  Serial.begin(115200);\n  delay(1000);\n\n  Serial.println(\"--- INFORMASI SISTEM ESP32 ---\");\n  Serial.printf(\"Chip Model: %s (Rev %d)\\n\", ESP.getChipModel(), ESP.getChipRevision());\n  Serial.printf(\"CPU Cores : %d Cores @ %d MHz\\n\", ESP.getChipCores(), ESP.getCpuFreqMHz());\n  Serial.printf(\"Free Heap : %d bytes\\n\", ESP.getFreeHeap());\n  Serial.printf(\"Flash Size: %d bytes\\n\", ESP.getFlashChipSize());\n}\n\nvoid loop() {\n  Serial.printf(\"Uptime: %lu ms | Free Heap: %d bytes\\n\", millis(), ESP.getFreeHeap());\n  delay(2000);\n}</code></pre>\n<div class=\"mt-tip\">💡 <strong>FreeRTOS Multitasking Bawaan:</strong> ESP32 secara default menjalankan FreeRTOS di balik layar. Anda dapat membuat thread/task terpisah pada Core 0 untuk koneksi Wi-Fi/MQTT dan Core 1 untuk loop pembacaan sensor menggunakan fungsi <code>xTaskCreatePinnedToCore()</code>.</div>",
        "referensi": "Arduino ESP32 Official Documentation (docs.espressif.com); Wokwi Simulator Documentation (docs.wokwi.com)."
      },
      {
        "id": "digital-analog-interfacing",
        "emoji": "🎛️",
        "title": "Konsep Sinyal Digital, Analog, ADC, DAC & PWM pada ESP32",
        "body": "<p>Dunia fisik bekerja dengan besaran kontinyu (suhu udara, intensitas cahaya, tekanan), sedangkan prosesor komputer bekerja dengan bilangan diskrit biner (0 dan 1). ESP32 menyediakan antarmuka terpadu untuk menjembatani kedua dunia ini.</p>\n<p><strong>1. ADC (Analog to Digital Converter) ESP32:</strong></p>\n<p>ESP32 memiliki unit ADC <strong>12-bit</strong> yang mengonversi tegangan analog 0 – 3.3V menjadi nilai integer digital <strong>0 hingga 4095</strong> ($2^{12} - 1 = 4095$).</p>\n$$V_{in} = \\frac{ADC\\_Value}{4095} \\times V_{ref}$$\n<ul>\n<li><strong>ADC1 (8 channel):</strong> GPIO32, 33, 34, 35, 36, 37, 38, 39.</li>\n<li><strong>ADC2 (10 channel):</strong> GPIO0, 2, 4, 12, 13, 14, 15, 25, 26, 27.</li>\n</ul>\n<div class=\"mt-warn\">⚠️ <strong>ATURAN KRITIS ADC2:</strong> Unit ADC2 digunakan bersama oleh driver radio Wi-Fi. Saat Wi-Fi ESP32 aktif, ADC2 TIDAK BISA digunakan untuk membaca analogRead()! Selalu gunakan pin <strong>ADC1 (GPIO 32–39)</strong> untuk sensor analog pada proyek IoT.</div>\n<p><strong>Konfigurasi Attenuation (Pelemahan ADC):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Setting Attenuation</th><th>Rentang Tegangan Input Terukur</th><th>Fungsi Konfigurasi</th></tr></thead><tbody>\n<tr><td>ADC_ATTEN_DB_0</td><td>0 V – 1.1 V (Tegangan referensi dasar)</td><td><code>analogSetPinAttenuation(pin, ADC_0db)</code></td></tr>\n<tr><td>ADC_ATTEN_DB_2_5</td><td>0 V – 1.5 V</td><td><code>analogSetPinAttenuation(pin, ADC_2_5db)</code></td></tr>\n<tr><td>ADC_ATTEN_DB_6</td><td>0 V – 2.2 V</td><td><code>analogSetPinAttenuation(pin, ADC_6db)</code></td></tr>\n<tr><td>ADC_ATTEN_DB_11 (Default)</td><td>0 V – 3.3 V / 3.6 V (Full Range)</td><td><code>analogSetPinAttenuation(pin, ADC_11db)</code></td></tr>\n</tbody></table>\n<p><strong>2. DAC (Digital to Analog Converter):</strong></p>\n<p>Berbeda dengan Arduino Uno yang hanya memiliki output PWM semu, ESP32 memiliki <strong>2 channel True DAC 8-bit sejati</strong> pada pin <strong>GPIO25 (DAC1)</strong> dan <strong>GPIO26 (DAC2)</strong>. Nilai 0–255 menghasilkan output tegangan analog murni 0 – 3.3V:</p>\n<pre><code>// Menghasilkan tegangan analog 1.65V (setengah VDD)\ndacWrite(25, 128); </code></pre>\n<p><strong>3. PWM (Pulse Width Modulation) dengan Hardware LEDC:</strong></p>\n<p>ESP32 memiliki controller hardware <strong>LEDC (LED Control)</strong> dengan 16 channel PWM independen, resolusi 1–16 bit, dan frekuensi dari 1 Hz hingga 40 MHz:</p>\n<pre><code>// Setup LEDC PWM di Core v3 / Arduino ESP32\nconst int pwmPin = 18;\nconst int freq = 5000;    // 5 kHz untuk LED\nconst int resolution = 8; // 8-bit (0-255)\n\nvoid setup() {\n  ledcAttach(pwmPin, freq, resolution);\n}\n\nvoid loop() {\n  for (int duty = 0; duty <= 255; duty++) {\n    ledcWrite(pwmPin, duty); // Atur kecerahan LED\n    delay(5);\n  }\n}</code></pre>",
        "referensi": "Espressif ESP32 ADC Calibration API Guide; ESP32 LEDC PWM Hardware Technical Documentation."
      },
      {
        "id": "digital-io-interfacing",
        "emoji": "🔌",
        "title": "Digital Input & Output serta Proteksi Rangkaian",
        "body": "<p>Pengaturan GPIO (General Purpose Input/Output) adalah fondasi pengendalian aktuator dan pembacaan tombol pada mikrokontroler.</p>\n<p><strong>Mode Konfigurasi GPIO:</strong></p>\n<ul>\n<li><code>pinMode(pin, INPUT);</code> — Pin sebagai input berimpedansi tinggi (floating).</li>\n<li><code>pinMode(pin, INPUT_PULLUP);</code> — Mengaktifkan resistor pull-up internal (~45 kΩ ke 3.3V). Saat tombol tidak ditekan terbaca <code>HIGH</code>; saat tombol ditekan ke GND terbaca <code>LOW</code>.</li>\n<li><code>pinMode(pin, INPUT_PULLDOWN);</code> — Mengaktifkan resistor pull-down internal ke GND.</li>\n<li><code>pinMode(pin, OUTPUT);</code> — Pin sebagai output penggerak beban logika (0V atau 3.3V).</li>\n</ul>\n<p><strong>Masalah Contact Bouncing & External Interrupt:</strong></p>\n<p>Tombol mekanik memiliki getaran logam (<em>bouncing</em>) selama 5–20 ms saat ditekan. Gunakan teknik software debounce dengan <code>millis()</code> atau External Interrupt untuk respon instan:</p>\n<pre><code>const int buttonPin = 4;\nvolatile bool buttonTriggered = false;\n\n// ISR (Interrupt Service Routine) disimpan di IRAM untuk eksekusi ultra cepat\nvoid IRAM_ATTR handleButtonInterrupt() {\n  buttonTriggered = true;\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(buttonPin, INPUT_PULLUP);\n  attachInterrupt(digitalPinToInterrupt(buttonPin), handleButtonInterrupt, FALLING);\n}\n\nvoid loop() {\n  if (buttonTriggered) {\n    buttonTriggered = false;\n    Serial.println(\"Tombol ditekan! (Interrupt terpicu)\");\n  }\n}</code></pre>\n<p><strong>Batasan Arus & Proteksi Driver Beban Daya:</strong></p>\n<ul>\n<li>Maksimum arus per pin GPIO ESP32 adalah <strong>12 mA – 20 mA</strong> (arus total chip maks 1200 mA).</li>\n<li><strong>Beban Induktif (Relay, Motor DC, Solenoid):</strong> Jangan pernah dihubungkan langsung ke pin GPIO! Gunakan modul driver transistor (NPN BC547 / MOSFET IRLZ44N) atau modul relay berpengaman <strong>Optocoupler</strong> dan pasang <strong>Dioda Flyback (1N4007)</strong> paralel terbalik dengan koil untuk membuang lonjakan tegangan induksi balik (Back-EMF).</li>\n</ul>",
        "referensi": "Horowitz & Hill (2015) \"The Art of Electronics\" 3rd Edition; ESP32 GPIO Matrix API Reference."
      },
      {
        "id": "serial-communication-mcu",
        "emoji": "🔄",
        "title": "Komunikasi Serial Digital: UART, I2C, dan SPI",
        "body": "<p>Mikrokontroler berkomunikasi dengan sensor cerdas, modul komunikasi nirkabel, dan layar tampilan menggunakan tiga protokol serial digital standar industri:</p>\n<p><strong>1. UART (Universal Asynchronous Receiver-Transmitter):</strong></p>\n<ul>\n<li>Komunikasi asinkron (tanpa kabel clock bersama), full-duplex melalui 2 kabel: <strong>TX (Transmit)</strong> dan <strong>RX (Receive)</strong>.</li>\n<li>ESP32 memiliki 3 hardware UART: <code>UART0</code> (USB Serial Monitor, GPIO1 TX / GPIO3 RX), <code>UART1</code>, dan <code>UART2</code> (Default GPIO17 TX / GPIO16 RX untuk modul GPS/RS485).</li>\n</ul>\n<pre><code>// Contoh penggunaan HardwareSerial 2 pada ESP32\nHardwareSerial SerialGPS(2);\nSerialGPS.begin(9600, SERIAL_8N1, 16, 17); // Baud 9600, RX=16, TX=17</code></pre>\n<p><strong>2. I2C (Inter-Integrated Circuit / TWI):</strong></p>\n<ul>\n<li>Komunikasi sinkron multi-master multi-slave berkecepatan menengah hanya menggunakan <strong>2 kabel: SDA (Serial Data)</strong> dan <strong>SCL (Serial Clock)</strong>.</li>\n<li>Setiap sensor di jalur I2C memiliki <strong>alamat 7-bit unik</strong> (misal BME280 = 0x76/0x77, OLED SSD1306 = 0x3C). Wajib memasang resistor pull-up 4.7 kΩ ke 3.3V pada kedua jalur.</li>\n<li>Pin default I2C ESP32: <strong>SDA = GPIO21</strong>, <strong>SCL = GPIO22</strong>.</li>\n</ul>\n<p><strong>3. SPI (Serial Peripheral Interface):</strong></p>\n<ul>\n<li>Komunikasi sinkron berkecepatan sangat tinggi (hingga 80 MHz), full-duplex menggunakan <strong>4 kabel: MOSI (Master Out Slave In), MISO (Master In Slave Out), SCK (Serial Clock), dan CS/SS (Chip Select)</strong>.</li>\n<li>Cocok untuk transfer data masif seperti layar LCD/TFT grafis, modul kamera, dan kartu MicroSD.</li>\n<li>ESP32 memiliki controller SPI bawaan: <strong>VSPI</strong> (default: SCK=18, MISO=19, MOSI=23, SS=5) dan <strong>HSPI</strong> (SCK=14, MISO=12, MOSI=13, SS=15).</li>\n</ul>\n<p><strong>Tabel Komparasi Protokol Serial:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Protokol</th><th>Jumlah Kabel</th><th>Kecepatan Maksimal</th><th>Topologi</th><th>Contoh Perangkat</th></tr></thead><tbody>\n<tr><td><strong>UART</strong></td><td>2 (TX, RX)</td><td>Up to 5 Mbps</td><td>Point-to-Point (1-to-1)</td><td>Modul GPS NEO-6M, GSM SIM800L, Bluetooth HC-05</td></tr>\n<tr><td><strong>I2C</strong></td><td>2 (SDA, SCL)</td><td>100 kHz (Std) / 400 kHz (Fast) / 1 MHz</td><td>Multi-drop Bus (hingga 127 slave)</td><td>Sensor BME280, MPU6050, RTC DS3231, OLED SSD1306</td></tr>\n<tr><td><strong>SPI</strong></td><td>4 (MOSI, MISO, SCK, CS)</td><td>Up to 80 MHz</td><td>Master-Slave (CS terpisah per slave)</td><td>MicroSD Card Adapter, Display TFT ST7789, RFID RC522</td></tr>\n</tbody></table>",
        "referensi": "NXP Semiconductors I2C-bus Specification Rev. 7.0; Motorola SPI Protocol Specification; Espressif I2C/SPI Driver Documentation."
      }
    ],
    "contoh": [
      {
        "judul": "Konversi Nilai ADC 12-Bit ke Tegangan & Persentase",
        "soal": "Sebuah potensiometer terhubung ke pin ADC1 (GPIO34) dengan konfigurasi attenuation 11dB (rentang 0–3.3V). Jika pembacaan analogRead(34) menghasilkan nilai 2730, hitung tegangan analog aktual dan persentase bukaan potensiometer.",
        "langkah": [
          "Diketahui resolusi ADC ESP32 = 12-bit (nilai 0 hingga 4095) dan tegangan referensi $V_{ref} = 3{,}3\\,\\text{V}$.",
          "Hitung tegangan input: $$V_{in} = \\frac{2730}{4095} \\times 3{,}3\\,\\text{V} = 0{,}6667 \\times 3{,}3 = 2{,}20\\,\\text{V}$$",
          "Hitung persentase bukaan: $$\\text{Persen} = \\frac{2730}{4095} \\times 100\\% = 66{,}67\\%$$",
          "<strong>Jawaban:</strong> Tegangan analog pada pin GPIO34 adalah <strong>2,20 Volt</strong> dengan bukaan potensiometer <strong>66,67%</strong>."
        ]
      },
      {
        "judul": "Pemindaian Alamat I2C Bus (I2C Scanner)",
        "soal": "Tuliskan logika program untuk mendeteksi alamat heksadesimal semua perangkat sensor yang terpasang pada bus I2C (GPIO21 & GPIO22) ESP32.",
        "langkah": [
          "Sertakan pustaka <code>#include &lt;Wire.h&gt;</code> dan jalankan <code>Wire.begin(21, 22);</code> pada <code>setup()</code>.",
          "Lakukan perulangan alamat 7-bit dari 1 hingga 126 (0x01 sampai 0x7E).",
          "Kirim sinyal transmisi uji coba: <code>Wire.beginTransmission(address); byte error = Wire.endTransmission();</code>",
          "Jika <code>error == 0</code>, perangkat merespon dengan ACK (Acknowledge). Cetak alamat dalam format heksadesimal: <code>Serial.printf(\"Device ditemukan pada alamat 0x%02X\\n\", address);</code>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Berapakah frekuensi clock maksimum dan jumlah core prosesor utama pada chip ESP32 klasik?",
        "opts": [
          "16 MHz Single-Core",
          "80 MHz Single-Core",
          "240 MHz Dual-Core",
          "1.2 GHz Quad-Core"
        ],
        "ans": 2,
        "exp": "ESP32 klasik ditenagai oleh prosesor Dual-Core Tensilica Xtensa 32-bit LX6 dengan kecepatan clock hingga 240 MHz."
      },
      {
        "q": "Mengapa pin ADC2 pada ESP32 tidak disarankan untuk membaca sensor analog pada aplikasi IoT nirkabel?",
        "opts": [
          "Karena ADC2 memiliki resolusi 8-bit yang sangat rendah",
          "Karena ADC2 digunakan bersama oleh driver Wi-Fi internal sehingga terjadi konflik",
          "Karena pin ADC2 hanya dapat menerima tegangan negatif",
          "Karena ADC2 tidak memiliki proteksi ESD"
        ],
        "ans": 1,
        "exp": "Driver Wi-Fi internal ESP32 menggunakan controller ADC2. Ketika Wi-Fi diaktifkan, ADC2 diblokir dan tidak dapat melakukan pembacaan analogRead(). Selalu gunakan ADC1 (GPIO32-39)."
      },
      {
        "q": "Resolusi default ADC (Analog to Digital Converter) bawaan pada ESP32 adalah…",
        "opts": [
          "8-bit (0–255)",
          "10-bit (0–1023)",
          "12-bit (0–4095)",
          "16-bit (0–65535)"
        ],
        "ans": 2,
        "exp": "ADC bawaan ESP32 memiliki resolusi 12-bit, menghasilkan rentang nilai diskrit dari 0 hingga 4095."
      },
      {
        "q": "Berapakah jumlah kabel data sinyal utama yang digunakan pada protokol komunikasi I2C?",
        "opts": [
          "1 kabel (Single-Wire)",
          "2 kabel (SDA dan SCL)",
          "4 kabel (MOSI, MISO, SCK, CS)",
          "8 kabel (Parallel Bus)"
        ],
        "ans": 1,
        "exp": "Protokol I2C hanya membutuhkan 2 kabel sinyal komunikasi: SDA (Serial Data) untuk data dua arah dan SCL (Serial Clock) untuk sinyal sinkronisasi clock."
      },
      {
        "q": "Pin manakah di bawah ini pada ESP32 yang berstatus \"Input-Only\" dan TIDAK BISA difungsikan sebagai output digital?",
        "opts": [
          "GPIO 2",
          "GPIO 21",
          "GPIO 34",
          "GPIO 18"
        ],
        "ans": 2,
        "exp": "Pin GPIO 34, 35, 36 (VP), dan 39 (VN) adalah pin khusus input (Input-Only) tanpa rangkaian output driver dan tanpa internal pull-up/pull-down."
      }
    ]
  },
{
    "id": "iot-sensors-actuators",
    "emoji": "🕹️",
    "title": "Sensors and Actuators",
    "subtitle": "Transduser input & output, DHT22, BME280, PIR, ultrasonik, motor, relay, kalibrasi & interfacing ESP32",
    "level": "Menengah",
    "durasi": "±40 menit",
    "materi": [
      "Konsep Transduser & Klasifikasi",
      "Sensor IoT Populer (Suhu, Cahaya, Gas, Jarak)",
      "Aktuator IoT Populer (Motor, Relay, Audio, Solenoid)",
      "Karakteristik & Kalibrasi Sensor",
      "Interfacing & Kode Program ESP32"
    ],
    "sections": [
      {
        "id": "transducer-concept-classification",
        "emoji": "🔄",
        "title": "Konsep Transduser: Sensor & Aktuator dalam IoT",
        "body": "<p>Dalam rekayasa sistem kendali dan IoT, <strong>transduser</strong> adalah perangkat yang mengubah satu bentuk energi fisik menjadi bentuk energi lainnya.</p>\n<ul>\n<li><strong>Sensor (Transduser Input):</strong> Mengubah besaran fisik lingkungan (termal, mekanik, optik, kimia) menjadi besaran listrik (tegangan, arus, resistansi, frekuensi, atau data digital). Sensor berfungsi sebagai \"indera\" sistem IoT.</li>\n<li><strong>Aktuator (Transduser Output):</strong> Mengubah sinyal kendali listrik menjadi aksi fisik nyata (gerakan mekanis rotasi/linear, panas, cahaya, suara, atau membuka/menutup katup fluida). Aktuator berfungsi sebagai \"otot\" sistem IoT.</li>\n</ul>\n<p><strong>Siklus Loop Tertutup IoT (Feedback Control Loop):</strong></p>\n<ol>\n<li><strong>Sense:</strong> Sensor mendeteksi perubahan kondisi lingkungan (misal: suhu ruangan naik ke 32°C).</li>\n<li><strong>Process:</strong> Mikrokontroler / Cloud menganalisis data terhadap setpoint (ambang batas 28°C).</li>\n<li><strong>Actuate:</strong> Aktuator diperintahkan bekerja (relay menyalakan sistem kompresor AC pendingin).</li>\n</ol>\n<p><strong>Klasifikasi Sensor:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Kategori</th><th>Tipe</th><th>Karakteristik & Contoh</th></tr></thead><tbody>\n<tr><td rowspan=\"2\"><strong>Sumber Daya</strong></td><td><strong>Sensor Pasif</strong></td><td>Menghasilkan sinyal listrik sendiri tanpa daya luar (Termokopel, Piezoelektrik, Fotovoltaik)</td></tr>\n<tr><td><strong>Sensor Aktif</strong></td><td>Membutuhkan catu daya luar untuk memodulasi sinyal (LDR, RTD PT100, Strain Gauge, Hall Effect)</td></tr>\n<tr><td rowspan=\"2\"><strong>Format Output</strong></td><td><strong>Sensor Analog</strong></td><td>Output tegangan/arus kontinyu proporsional (Potensiometer, sensor gas MQ-2 analog)</td></tr>\n<tr><td><strong>Sensor Digital</strong></td><td>Output sinyal diskrit biner atau paket data serial (DHT22 1-wire, BME280 I2C/SPI, DS18B20)</td></tr>\n</tbody></table>",
        "referensi": "Fraden, J. (2016) \"Handbook of Modern Sensors: Physics, Designs, and Applications\" 5th Ed., Springer; Norton, H. N., \"Handbook of Transducers\"."
      },
      {
        "id": "popular-iot-sensors",
        "emoji": "🌡️",
        "title": "Jenis-Jenis Sensor IoT Populer",
        "body": "<p>Berikut adalah sensor-sensor yang paling sering digunakan pada proyek IoT komersial dan riset:</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/dht22-sensor.jpg\" alt=\"Foto Sensor DHT22 AM2302\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Sensor DHT22 (AM2302) dengan elemen polimer kapasitif kelembaban dan NTC thermistor terintegrasi chip ADC 8-bit · sumber: Wikimedia Commons, <i>File:DHT22 sensor.jpg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>1. Sensor Suhu & Kelembaban:</strong></p>\n<ul>\n<li><strong>DHT11 vs DHT22 (AM2302):</strong> DHT22 memiliki rentang lebih luas (-40°C hingga +80°C, akurasi ±0.5°C; kelembaban 0–100% RH, akurasi ±2%). Menggunakan protokol single-wire digital dengan pull-up 4.7kΩ–10kΩ.</li>\n<li><strong>Bosch BME280:</strong> Sensor miniatur presisi tinggi 3-in-1 (Suhu, Kelembaban Relatif, dan Tekanan Barometrik) via I2C (0x76/0x77) atau SPI. Sangat ideal untuk stasiun cuaca dan altimeter.</li>\n<li><strong>DS18B20:</strong> Sensor suhu waterproof berbasis protokol Maxim/Dallas 1-Wire. Mampu menghubungkan puluhan sensor pada 1 kabel data yang sama (multi-drop bus).</li>\n</ul>\n<p><strong>2. Sensor Cahaya:</strong></p>\n<ul>\n<li><strong>LDR (Light Dependent Resistor):</strong> Resistor berbahan semikonduktor Kadmium Sulfida (CdS) yang nilai resistansinya turun saat terkena cahaya terang (dari ~1 MΩ gelap menjadi ~1 kΩ terang). Dirangkai sebagai pembagi tegangan (voltage divider).</li>\n<li><strong>BH1750:</strong> Sensor intensitas cahaya digital I2C dengan keluaran langsung satuan Lux (1 – 65.535 Lux) yang disesuaikan dengan respon spektral mata manusia.</li>\n</ul>\n<p><strong>3. Sensor Gerak & Keberadaan (Presence):</strong></p>\n<ul>\n<li><strong>PIR (Passive Infrared) HC-SR501:</strong> Mendeteksi radiasi termal inframerah yang dipancarkan tubuh manusia/hewan saat bergerak melewati lensa Fresnel. Output berupa logika HIGH digital (3.3V) selama delay waktu tertentu.</li>\n<li><strong>RCWL-0516 (Microwave Radar):</strong> Menggunakan gelombang mikro efek Doppler 3.18 GHz untuk mendeteksi gerakan bahkan menembus kaca, kayu, atau dinding tipis.</li>\n</ul>\n<p><strong>4. Sensor Jarak (Distance):</strong></p>\n<ul>\n<li><strong>HC-SR04 (Ultrasonik):</strong> Mengirimkan 8 pulsa gelombang suara 40 kHz dari transmitter, lalu mendeteksi pantulannya pada receiver. Jarak dihitung berdasarkan rumus kecepatan suara di udara ($v approx 343\\,\\text{m/s}$):</li>\n$$Jarak = \\frac{Waktu\\_Echo \\times 0{,}0343}{2}\\,\\text{(cm)}$$\n<li><strong>VL53L0X (Laser ToF):</strong> Menggunakan teknologi FlightSense Time-of-Flight pulsa laser inframerah 940 nm. Akurasi milimeter hingga jarak 2 meter tanpa terpengaruh warna permukaan objek.</li>\n</ul>\n<p><strong>5. Sensor Gas & Kualitas Udara:</strong></p>\n<ul>\n<li><strong>MQ Series (MQ-2, MQ-135, MQ-7):</strong> Menggunakan elemen pemanas semikonduktor SnO2 (Tin Dioxide). Resistansi sensor turun jika ada gas target (LPG, CO, Asap). Butuh waktu pre-heating 24–48 jam untuk stabil.</li>\n<li><strong>PMS5003:</strong> Sensor partikel debu laser presisi tinggi untuk mengukur konsentrasi PM1.0, PM2.5, dan PM10 dalam satuan $\\mu\\text{g/m}^3$.</li>\n</ul>",
        "referensi": "Aosong Electronics DHT22 Datasheet; Bosch Sensortec BME280 Environmental Sensor Technical Guide; Adafruit Unified Sensor Driver Library."
      },
      {
        "id": "popular-iot-actuators",
        "emoji": "⚙️",
        "title": "Jenis-Jenis Aktuator IoT Populer",
        "body": "<p>Aktuator mengeksekusi instruksi kontrol dari mikrokontroler menjadi aksi fisik di lapangan:</p>\n<p><strong>1. Motor & Penggerak Mekanis:</strong></p>\n<ul>\n<li><strong>Motor DC:</strong> Menghasilkan putaran kontinu berkecepatan tinggi. Dikendalikan menggunakan modul H-Bridge Driver (L298N / TB6612FNG) untuk mengatur arah putaran (CW/CCW) dan kecepatan (sinyal PWM).</li>\n<li><strong>Motor Servo (SG90 / MG996R):</strong> Memiliki gearbox, potensiometer feedback, dan sirkuit kendali internal untuk mengatur posisi sudut presisi 0° hingga 180°. Dikontrol dengan pulsa PWM 50 Hz (periode 20 ms, lebar pulsa 1.0 ms = 0°, 1.5 ms = 90°, 2.0 ms = 180°).</li>\n<li><strong>Stepper Motor (28BYJ-48 / NEMA 17):</strong> Bergerak dalam langkah diskrit (misal 1.8° per step) dengan driver ULN2003 atau A4988. Sangat akurat untuk posisi tanpa akumulasi error (printer 3D, smart blind tirai jendela).</li>\n</ul>\n<p><strong>2. Modul Relay & Solid State Relay (SSR):</strong></p>\n<ul>\n<li><strong>Relay Elektromekanik:</strong> Menggunakan koil elektromagnetik untuk menarik tuas kontak mekanis (COM, NO - Normally Open, NC - Normally Closed). Mampu mengontrol beban listrik AC 220V hingga 10A dengan isolasi galvanik optocoupler.</li>\n<li><strong>Solid State Relay (SSR):</strong> Menggunakan komponen semikonduktor (Opto-TRIAC) tanpa kontak bergerak. Keunggulan: tidak ada bunyi klik mekanis, tidak ada loncatan api (arcing), waktu switching ultra-cepat (&lt;1 ms), dan usia pakai sangat panjang.</li>\n</ul>\n<p><strong>3. Indikator Audio & Visual:</strong></p>\n<ul>\n<li><strong>Buzzer:</strong> Buzzer Aktif (memiliki osilator frekuensi internal ~2.3 kHz, cukup diberi sinyal logika HIGH untuk berbunyi) vs Buzzer Pasif (membutuhkan sinyal pulsa nada AC/PWM untuk menghasilkan melodi bervariasi).</li>\n<li><strong>LED Addressable WS2812B (NeoPixel):</strong> Setiap LED RGB mengintegrasikan IC driver kontroler digital WS2811. Ratusan LED dapat dikendalikan warna dan kecerahannya secara individual hanya melalui 1 kabel pin data serial.</li>\n</ul>\n<p><strong>4. Solenoid Valve & Solenoid Lock:</strong></p>\n<ul>\n<li><strong>Solenoid Valve:</strong> Katup elektromagnetik untuk membuka/menutup saluran pipa air atau gas secara otomatis pada sistem irigasi cerdas.</li>\n<li><strong>Solenoid Door Lock:</strong> Pengunci pintu elektronik 12V yang menarik lidah kunci saat koil dialiri arus listrik (smart door lock).</li>\n</ul>",
        "referensi": "Boylestad & Nashelsky (2013) \"Electronic Devices and Circuit Theory\" 11th Ed., Pearson; Worldsemi WS2812B Intelligent Control LED Datasheet."
      },
      {
        "id": "sensor-characteristics-calibration",
        "emoji": "📐",
        "title": "Karakteristik & Kalibrasi Sensor",
        "body": "<p>Agar data yang dihasilkan sensor dapat dipercaya dan akurat, perancang sistem IoT wajib memahami karakteristik metrologi sensor:</p>\n<p><strong>Karakteristik Statis Sensor:</strong></p>\n<ul>\n<li><strong>Akurasi (Accuracy):</strong> Derajat kedekatan antara nilai hasil pengukuran sensor dengan nilai sebenarnya (standar acuan). Dinyatakan dalam persentase full-scale error (misal ±1% FS).</li>\n<li><strong>Presisi / Repeatability (Keterulangan):</strong> Derajat kesesuaian antara hasil-hasil pengukuran yang berurutan pada kondisi pengukuran yang identik. Sensor bisa sangat presisi tapi tidak akurat jika terdapat offset.</li>\n<li><strong>Resolusi (Resolution):</strong> Perubahan besaran fisik terkecil yang masih mampu dideteksi dan dibedakan oleh sensor/ADC.</li>\n<li><strong>Sensitivitas (Sensitivity):</strong> Rasio perubahan sinyal output terhadap perubahan besaran fisik input ($\\text{Sensitivitas} = \\Delta V / \\Delta T$).</li>\n<li><strong>Histeresis & Drift:</strong> Perbedaan output saat input naik vs turun (histeresis) dan pergeseran nilai ukur terhadap waktu/penuaan komponen (drift).</li>\n</ul>\n<p><strong>Metode Kalibrasi Dua Titik (Two-Point Calibration):</strong></p>\n<p>Untuk sensor dengan respon linear yang mengalami pergeseran offset dan kemiringan (gain error), kalibrasi dua titik dilakukan dengan mengukur dua titik referensi standar ($x_1, y_1$) dan ($x_2, y_2$):</p>\n$$y = m \\cdot (x - x_1) + y_1 \\qquad \\text{dengan } m = \\frac{y_2 - y_1}{x_2 - x_1}$$\n<p>dengan $x$ = nilai mentah sensor, $y$ = nilai besaran fisik terkalibrasi, $m$ = slope (faktor skala), dan titik referensi (misal es mencair 0°C dan air mendidih 100°C).</p>\n<div class=\"mt-tip\">💡 <strong>Moving Average Filter (Filter Perata Bergerak):</strong> Sinyal sensor analog sering mengandung noise acak frekuensi tinggi. Terapkan algoritma rata-rata bergerak 10 sampel di kode program untuk menghaluskan fluktuasi sebelum data dikirim ke cloud.</div>",
        "referensi": "NIST Special Publication 260-100 (Standard Reference Materials: Calibration Handbook); ISO/IEC Guide 98-3 (Uncertainty of Measurement)."
      },
      {
        "id": "sensor-actuator-esp32-code",
        "emoji": "📝",
        "title": "Praktik Interfacing & Kode Program Lengkap ESP32",
        "body": "<p>Berikut adalah contoh proyek terpadu pembacaan sensor suhu/kelembaban DHT22, sensor ultrasonik HC-SR04, dan pengendalian aktuator Relay serta Servo menggunakan pola pemrograman <strong>Non-Blocking <code>millis()</code></strong> yang kompatibel dengan Wokwi Simulator:</p>\n<pre><code>#include &lt;DHT.h&gt;\n#include &lt;ESP32Servo.h&gt;\n\n// Definisi Pin\n#define DHTPIN 4\n#define DHTTYPE DHT22\n#define TRIGPIN 5\n#define ECHOPIN 18\n#define RELAYPIN 23\n#define SERVOPIN 19\n\nDHT dht(DHTPIN, DHTTYPE);\nServo myServo;\n\nunsigned long prevMillis = 0;\nconst long interval = 2000; // Baca sensor tiap 2 detik\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(TRIGPIN, OUTPUT);\n  pinMode(ECHOPIN, INPUT);\n  pinMode(RELAYPIN, OUTPUT);\n  digitalWrite(RELAYPIN, LOW); // Relay OFF default\n\n  dht.begin();\n  myServo.attach(SERVOPIN);\n  myServo.write(0); // Posisi awal servo 0 derajat\n\n  Serial.println(\"Sistem IoT Sensor & Aktuator Siap!\");\n}\n\nfloat readUltrasonicDistance() {\n  digitalWrite(TRIGPIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIGPIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIGPIN, LOW);\n  \n  long duration = pulseIn(ECHOPIN, HIGH, 30000); // Timeout 30ms\n  if (duration == 0) return 400.0; // Diluar jangkauan\n  return duration * 0.0343 / 2.0;\n}\n\nvoid loop() {\n  unsigned long currentMillis = millis();\n\n  // Eksekusi berkala tanpa memblokir CPU (Non-blocking)\n  if (currentMillis - prevMillis >= interval) {\n    prevMillis = currentMillis;\n\n    float t = dht.readTemperature();\n    float h = dht.readHumidity();\n    float dist = readUltrasonicDistance();\n\n    if (isnan(t) || isnan(h)) {\n      Serial.println(\"Gagal membaca dari sensor DHT22!\");\n      return;\n    }\n\n    Serial.printf(\"Suhu: %.1f °C | Kelembaban: %.1f %% | Jarak: %.1f cm\\n\", t, h, dist);\n\n    // Logika Otomasi Aktuator\n    // 1. Jika suhu > 30°C -> Nyalakan relay kipas pendingin\n    if (t > 30.0) {\n      digitalWrite(RELAYPIN, HIGH);\n      Serial.println(\"-> ALERT: Suhu tinggi! Relay Kipas ON\");\n    } else {\n      digitalWrite(RELAYPIN, LOW);\n    }\n\n    // 2. Jika ada objek berjarak < 20 cm -> Buka pintu servo 90 derajat\n    if (dist < 20.0) {\n      myServo.write(90);\n      Serial.println(\"-> DETEKSI: Objek dekat! Servo Buka 90°\");\n    } else {\n      myServo.write(0);\n    }\n  }\n}</code></pre>\n<div class=\"mt-tip\">💡 <strong>Uji di Wokwi:</strong> Salin kode di atas ke Wokwi Simulator ESP32, tambahkan parts <code>wokwi-dht22</code>, <code>wokwi-hc-sr04</code>, <code>wokwi-relay-module</code>, dan <code>wokwi-servo</code> pada diagram.json untuk menguji sistem secara langsung di browser!</div>",
        "referensi": "Arduino ESP32 Core Documentation; FreeRTOS Non-blocking Coding Guidelines."
      }
    ],
    "contoh": [
      {
        "judul": "Kalkulasi Kalibrasi Dua Titik Sensor Suhu Analog",
        "soal": "Sebuah sensor suhu analog diuji pada dua titik referensi: saat air es (0°C) nilai ADC terbaca 410, saat air mendidih (100°C) nilai ADC terbaca 3280. Jika saat pengukuran ruangan nilai ADC terbaca 1128, berapakah suhu ruangan terkalibrasi?",
        "langkah": [
          "Identifikasi titik kalibrasi: Titik 1 $(x_1, y_1) = (410, 0^\\circ\\text{C})$, Titik 2 $(x_2, y_2) = (3280, 100^\\circ\\text{C})$.",
          "Hitung slope (faktor skala $m$): $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{100 - 0}{3280 - 410} = \\frac{100}{2870} \\approx 0{,}034843^\\circ\\text{C/ADC}$$",
          "Gunakan rumus kalibrasi linear: $$y = m \\cdot (x - x_1) + y_1$$",
          "Substitusikan nilai pengukuran $x = 1128$: $$y = 0{,}034843 \\times (1128 - 410) + 0 = 0{,}034843 \\times 718 = 25{,}02^\\circ\\text{C}$$",
          "<strong>Jawaban:</strong> Suhu ruangan hasil kalibrasi adalah <strong>25,0°C</strong>."
        ]
      },
      {
        "judul": "Perhitungan Lebar Pulsa PWM Kendali Motor Servo",
        "soal": "Motor servo standar dikendalikan sinyal PWM 50 Hz (periode 20 ms). Jika lebar pulsa 1.0 ms menghasilkan sudut 0° dan lebar pulsa 2.0 ms menghasilkan sudut 180°, berapakah duty cycle (%) yang diperlukan untuk mengarahkan servo ke posisi sudut 45°?",
        "langkah": [
          "Hitung lebar pulsa untuk sudut 45°: $$\\text{Lebar Pulsa} = 1{,}0\\,\\text{ms} + \\left(\\frac{45^\\circ}{180^\\circ} \\times (2{,}0 - 1{,}0)\\,\\text{ms}\\right) = 1{,}0 + 0{,}25 = 1{,}25\\,\\text{ms}$$",
          "Hitung Duty Cycle terhadap periode total 20 ms ($T = 1/50\\,\\text{Hz} = 20\\,\\text{ms}$): $$\\text{Duty Cycle} = \\frac{1{,}25\\,\\text{ms}}{20\\,\\text{ms}} \\times 100\\% = 6{,}25\\%$$",
          "<strong>Jawaban:</strong> Sinyal PWM membutuhkan lebar pulsa <strong>1,25 ms</strong> dengan duty cycle <strong>6,25%</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Perangkat yang bertugas mengubah sinyal listrik kendali menjadi aksi fisik gerak atau mekanik disebut…",
        "opts": [
          "Sensor",
          "Aktuator",
          "Transmitter",
          "ADC"
        ],
        "ans": 1,
        "exp": "Aktuator adalah transduser output yang mengubah sinyal listrik perintah menjadi aksi fisik nyata (gerak motor, membuka relay, bunyi buzzer)."
      },
      {
        "q": "Sensor DHT22 (AM2302) menggunakan antarmuka komunikasi tipe…",
        "opts": [
          "I2C (SDA & SCL)",
          "SPI (4 kabel)",
          "Custom Single-Wire Digital Bus",
          "Analog Voltage 0-10V"
        ],
        "ans": 2,
        "exp": "DHT22 menggunakan protokol komunikasi digital 1-wire (single bus) khusus dengan timing pulsa mikrodetik dan resistor pull-up."
      },
      {
        "q": "Mengapa rangkaian driver relay mekanik wajib dilengkapi dengan Dioda Flyback (Freewheeling Diode)?",
        "opts": [
          "Untuk mempercepat nyala lampu relay",
          "Untuk melindungi transistor/MCU dari lonjakan tegangan induksi balik (Back-EMF) koil saat relay dimatikan",
          "Untuk mengubah tegangan DC menjadi AC",
          "Untuk menghemat konsumsi arus listrik"
        ],
        "ans": 1,
        "exp": "Saat koil elektromagnetik relay diputus arusnya, terjadi lonjakan tegangan induksi balik (Back-EMF) negatif yang tinggi. Dioda flyback membuang lonjakan ini agar tidak merusak transistor switching."
      },
      {
        "q": "Keunggulan utama Solid State Relay (SSR) dibandingkan relay elektromekanik konvensional adalah…",
        "opts": [
          "Harga jauh lebih murah",
          "Tidak memiliki kontak mekanik bergerak sehingga bebas loncatan api (arcing) dan waktu respon ultra-cepat",
          "Bisa bekerja tanpa catu daya kontrol",
          "Menghasilkan bunyi klik keras sebagai indikator"
        ],
        "ans": 1,
        "exp": "SSR menggunakan komponen semikonduktor opto-triac/MOSFET tanpa bagian mekanik bergerak, membuatnya bebas arcing, tidak bising, dan tahan jutaan siklus switching."
      },
      {
        "q": "Pada sensor ultrasonik HC-SR04, jarak objek dihitung berdasarkan prinsip…",
        "opts": [
          "Perubahan hambatan listrik kawat piezo",
          "Time-of-Flight (waktu tempuh) pantulan gelombang suara ultrasonik 40 kHz",
          "Intensitas cahaya inframerah yang diserap",
          "Pergeseran frekuensi radio Wi-Fi"
        ],
        "ans": 1,
        "exp": "HC-SR04 mengukur selang waktu (Time-of-Flight) antara pengiriman pulsa gelombang ultrasonik 40 kHz dan penerimaan pantulan gema (echo) dari objek."
      }
    ]
  },
{
    "id": "iot-connectivity",
    "emoji": "📡",
    "title": "IoT Connectivity",
    "subtitle": "Konektivitas IoT, Wi-Fi ESP32 (STA/AP), BLE GATT server/client & LPWAN LoRaWAN",
    "level": "Menengah → Lanjut",
    "durasi": "±45 menit",
    "materi": [
      "Spektrum & Taksonomi Konektivitas IoT",
      "Implementasi Wi-Fi pada ESP32",
      "Bluetooth Low Energy (BLE) & GATT",
      "LPWAN & LoRaWAN Arsitektur"
    ],
    "sections": [
      {
        "id": "connectivity-concept-iot",
        "emoji": "🌐",
        "title": "Konsep & Spektrum Konektivitas IoT",
        "body": "<p>Konektivitas adalah tulang punggung sistem IoT yang memungkinkan data mengalir dari sensor di lapangan menuju cloud platform. Tidak ada satu protokol konektivitas yang sempurna untuk semua use-case; pemilihan selalu melibatkan <strong>trade-off</strong> antara <strong>Jarak Jangkauan (Range)</strong>, <strong>Laju Data (Throughput / Data Rate)</strong>, dan <strong>Konsumsi Daya (Power Consumption)</strong>.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/rf-spectrum.png\" alt=\"Spektrum Elektromagnetik Nirkabel\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Spektrum gelombang radio nirkabel — alokasi frekuensi band ISM bebas lisensi (433 MHz, 868 MHz, 915 MHz, 2.4 GHz) yang digunakan oleh teknologi Wi-Fi, BLE, dan LoRaWAN · sumber: Wikimedia Commons, <i>File:Electromagnetic-Spectrum.svg</i> (CC BY-SA 3.0)</div></div>\n<p><strong>Klasifikasi Teknologi Konektivitas IoT:</strong></p>\n<ol>\n<li><strong>PAN / Short-Range (&lt; 50 meter):</strong> Bluetooth Low Energy (BLE), Zigbee (IEEE 802.15.4), Z-Wave, Thread. Ideal untuk smart home, sensor wearable, dan perangkat berdaya baterai koin.</li>\n<li><strong>WLAN / Local Area (&lt; 100 meter):</strong> Wi-Fi (IEEE 802.11 b/g/n/ax), Ethernet kabel. Bandwidth tinggi (Mbps–Gbps), namun konsumsi daya besar (butuh supply daya konstan).</li>\n<li><strong>LPWAN (Low-Power Wide Area Network, 2 – 15 km):</strong> LoRa/LoRaWAN, NB-IoT (Narrowband IoT), LTE-M, Sigfox. Jarak sangat jauh, daya baterai bertahan 5–10 tahun, namun throughput data kecil (bps–kbps).</li>\n<li><strong>Cellular High Bandwidth:</strong> 4G LTE, 5G NR. Bandwidth sangat tinggi, jangkauan luas lewat BTS seluler, namun membutuhkan paket data SIM card dan konsumsi daya tinggi.</li>\n</ol>\n<p><strong>Tabel Matriks Perbandingan Komprehensif Konektivitas IoT:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Teknologi</th><th>Frekuensi</th><th>Jarak Jangkau</th><th>Data Rate</th><th>Daya Baterai</th><th>Topologi</th><th>Biaya Operasional</th></tr></thead><tbody>\n<tr><td><strong>Wi-Fi (802.11n)</strong></td><td>2.4 GHz / 5 GHz</td><td>30 – 100 m</td><td>Up to 150 Mbps</td><td>Tinggi (jam / hari)</td><td>Star (ke Router AP)</td><td>Gratis (infrastruktur sendiri)</td></tr>\n<tr><td><strong>BLE (Bluetooth 5)</strong></td><td>2.4 GHz ISM</td><td>10 – 50 m</td><td>125 kbps – 2 Mbps</td><td>Sangat Rendah (bulan–tahun)</td><td>Point-to-Point / Mesh</td><td>Gratis</td></tr>\n<tr><td><strong>Zigbee</strong></td><td>2.4 GHz ISM</td><td>10 – 100 m</td><td>250 kbps</td><td>Rendah (1–2 tahun)</td><td>Mesh Network</td><td>Gratis</td></tr>\n<tr><td><strong>LoRaWAN</strong></td><td>433 / 868 / 915 MHz</td><td>2 – 15 km</td><td>300 bps – 50 kbps</td><td>Ultra Rendah (5–10 tahun)</td><td>Star-of-Stars</td><td>Gratis (Private) / Murah</td></tr>\n<tr><td><strong>NB-IoT</strong></td><td>Licensed LTE Band</td><td>1 – 10 km</td><td>20 – 250 kbps</td><td>Sangat Rendah (5–10 tahun)</td><td>Star (ke BTS Telco)</td><td>Biaya langganan SIM per bulan</td></tr>\n<tr><td><strong>Cellular 4G/5G</strong></td><td>700 MHz – 3.5 GHz</td><td>1 – 5 km</td><td>10 – 1000 Mbps</td><td>Tinggi (butuh aki/PLN)</td><td>Star (ke BTS)</td><td>Paket data bulanan operator</td></tr>\n</tbody></table>",
        "referensi": "IEEE 802 Wireless Standards Series; 3GPP Release 13/14 Cellular IoT Specifications; Semtech LoRa Technology Overview."
      },
      {
        "id": "wifi-implementation-esp32",
        "emoji": "📶",
        "title": "Implementasi Wi-Fi pada ESP32: Station, AP & Web Server",
        "body": "<p>Chip ESP32 memiliki subsystem radio Wi-Fi 802.11 b/g/n terintegrasi yang mendukung tiga mode operasi utama:</p>\n<ul>\n<li><strong>Station Mode (<code>WIFI_STA</code>):</strong> ESP32 terhubung sebagai client ke Access Point / router Wi-Fi rumah atau kantor untuk mengakses internet.</li>\n<li><strong>Access Point Mode (<code>WIFI_AP</code>):</strong> ESP32 bertindak sebagai hotspot pemancar Wi-Fi sendiri. Perangkat lain (smartphone/laptop) dapat terhubung langsung ke IP <code>192.168.4.1</code>. Sangat berguna untuk <em>Captive Portal Provisioning</em> (mengatur nama Wi-Fi & password tanpa re-flash firmware).</li>\n<li><strong>Dual Mode (<code>WIFI_AP_STA</code>):</strong> ESP32 menjalankan fungsi AP dan STA secara simultan.</li>\n</ul>\n<p><strong>Contoh Kode Lengkap: Web Server Lokal Kontrol LED & Pembacaan Sensor</strong></p>\n<pre><code>#include &lt;WiFi.h&gt;\n#include &lt;WebServer.h&gt;\n\nconst char* ssid = \"Wokwi-GUEST\"; // SSID Wokwi atau Wi-Fi Rumah\nconst char* password = \"\";\n\nWebServer server(80); // Web server pada port HTTP 80\nconst int ledPin = 2;\nbool ledState = false;\n\nvoid handleRoot() {\n  String html = \"&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;meta name='viewport' content='width=device-width, initial-scale=1'&gt;\";\n  html += \"&lt;title&gt;ESP32 IoT Server&lt;/title&gt;&lt;style&gt;body{font-family:sans-serif;text-align:center;padding:20px;background:#f0f4f8}&lt;/style&gt;&lt;/head&gt;\";\n  html += \"&lt;body&gt;&lt;h1&gt;ESP32 Web Server&lt;/h1&gt;\";\n  html += \"&lt;p&gt;Status LED: &lt;b&gt;\" + String(ledState ? \"MENYALA (ON)\" : \"MATI (OFF)\") + \"&lt;/b&gt;&lt;/p&gt;\";\n  html += \"&lt;p&gt;&lt;a href='/toggle'&gt;&lt;button style='padding:12px 24px;font-size:16px;cursor:pointer;border-radius:8px;'&gt;TOGGLE LED&lt;/button&gt;&lt;/a&gt;&lt;/p&gt;\";\n  html += \"&lt;p&gt;Uptime: \" + String(millis()/1000) + \" detik&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;\";\n  server.send(200, \"text/html\", html);\n}\n\nvoid handleToggle() {\n  ledState = !ledState;\n  digitalWrite(ledPin, ledState ? HIGH : LOW);\n  server.sendHeader(\"Location\", \"/\");\n  server.send(303); // Redirect kembali ke root\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(ledPin, OUTPUT);\n  digitalWrite(ledPin, LOW);\n\n  WiFi.mode(WIFI_STA);\n  WiFi.begin(ssid, password);\n  Serial.print(\"Menghubungkan ke Wi-Fi\");\n  \n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  \n  Serial.println(\"\nWi-Fi Terhubung!\");\n  Serial.print(\"IP Address ESP32: \");\n  Serial.println(WiFi.localIP());\n\n  server.on(\"/\", handleRoot);\n  server.on(\"/toggle\", handleToggle);\n  server.begin();\n  Serial.println(\"HTTP Web Server Berjalan.\");\n}\n\nvoid loop() {\n  server.handleClient(); // Menangani request browser yang masuk\n}</code></pre>",
        "referensi": "Espressif ESP32 Wi-Fi Driver API Reference; Arduino ESP32 WebServer Library Documentation."
      },
      {
        "id": "ble-implementation-esp32",
        "emoji": "🔵",
        "title": "Implementasi Bluetooth Low Energy (BLE) pada ESP32",
        "body": "<p><strong>Bluetooth Low Energy (BLE)</strong> adalah teknologi komunikasi nirkabel jarak pendek yang dioptimalkan untuk pertukaran data berkala dengan konsumsi daya ultra rendah (baterai koin CR2032 dapat bertahan berbulan-bulan hingga tahunan).</p>\n<p><strong>Arsitektur Lapisan BLE:</strong></p>\n<ul>\n<li><strong>GAP (Generic Access Profile):</strong> Mengontrol koneksi dan penyiaran (<em>advertising</em>). Peran GAP:\n  <ul>\n    <li><strong>Broadcaster / Advertiser (Beacon):</strong> Memancarkan paket data tanpa membentuk koneksi langsung.</li>\n    <li><strong>Observer / Scanner:</strong> Memindai paket advertising di sekitarnya.</li>\n    <li><strong>Peripheral:</strong> Perangkat slave (misal sensor detak jantung / ESP32) yang dapat dihubungkan.</li>\n    <li><strong>Central:</strong> Perangkat master (smartphone / komputer) yang memprakarsai koneksi.</li>\n  </ul>\n</li>\n<li><strong>GATT (Generic Attribute Profile):</strong> Mengatur hierarki struktur data setelah koneksi terbentuk:\n  <ul>\n    <li><strong>Profile:</strong> Kumpulan spesifikasi layanan standar SIG (misal Heart Rate Profile).</li>\n    <li><strong>Service:</strong> Wadah fungsional yang berisi sekumpulan karakteristik, diidentifikasi oleh <strong>UUID (16-bit atau 128-bit)</strong>.</li>\n    <li><strong>Characteristic:</strong> Data nilai aktual (Value) beserta hak akses (Properties: Read, Write, Notify, Indicate).</li>\n    <li><strong>Descriptor:</strong> Informasi metadata karakteristik (misal CCCD untuk mengaktifkan notifikasi).</li>\n  </ul>\n</li>\n</ul>\n<p><strong>Contoh Implementasi BLE Server Notifikasi Telemetri Sensor di ESP32:</strong></p>\n<pre><code>#include &lt;BLEDevice.h&gt;\n#include &lt;BLEServer.h&gt;\n#include &lt;BLEUtils.h&gt;\n#include &lt;BLE2902.h&gt;\n\n// UUID Standar Environmental Sensing Service (0x181A) & Temperature Characteristic (0x2A6E)\n#define SERVICE_UUID        \"4fafc201-1fb5-459e-8fcc-c5c9c331914b\"\n#define CHARACTERISTIC_UUID \"beb5483e-36e1-4688-b7f5-ea07361b26a8\"\n\nBLECharacteristic *pCharacteristic;\nbool deviceConnected = false;\n\nclass MyServerCallbacks: public BLEServerCallbacks {\n  void onConnect(BLEServer* pServer) { deviceConnected = true; }\n  void onDisconnect(BLEServer* pServer) { \n    deviceConnected = false; \n    BLEDevice::startAdvertising(); // Mulai advertising kembali\n  }\n};\n\nvoid setup() {\n  Serial.begin(115200);\n  BLEDevice::init(\"ESP32-Environmental-Sensor\");\n\n  BLEServer *pServer = BLEDevice::createServer();\n  pServer->setCallbacks(new MyServerCallbacks());\n\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n  pCharacteristic = pService->createCharacteristic(\n                      CHARACTERISTIC_UUID,\n                      BLECharacteristic::PROPERTY_READ |\n                      BLECharacteristic::PROPERTY_NOTIFY\n                    );\n  pCharacteristic->addDescriptor(new BLE2902());\n\n  pService->start();\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->addServiceUUID(SERVICE_UUID);\n  BLEDevice::startAdvertising();\n  Serial.println(\"BLE Server Siap & Memancarkan Advertising...\");\n}\n\nvoid loop() {\n  if (deviceConnected) {\n    float temp = 28.5 + (random(-10, 10) / 10.0);\n    String strVal = String(temp, 1) + \" °C\";\n    pCharacteristic->setValue(strVal.c_str());\n    pCharacteristic->notify(); // Kirim notifikasi real-time ke smartphone\n    Serial.println(\"Notifikasi BLE terkirim: \" + strVal);\n    delay(2000);\n  }\n}</code></pre>",
        "referensi": "Bluetooth Core Specification v5.3 (Bluetooth SIG); Espressif ESP32 BLE C++ Library Guide; Townsend et al. (2014) \"Getting Started with Bluetooth Low Energy\", O'Reilly."
      },
      {
        "id": "lorawan-lpwan",
        "emoji": "📡",
        "title": "Low-Power Wide Area Networks (LoRa & LoRaWAN)",
        "body": "<p><strong>LoRa (Long Range)</strong> adalah teknologi modulasi radio physical layer berbasis <strong>Chirp Spread Spectrum (CSS)</strong> yang dikembangkan oleh Semtech. LoRa mengkodekan informasi pada gelombang radio berkicau (chirp) dengan frekuensi yang naik atau turun linear terhadap waktu.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/lora-network.png\" alt=\"Arsitektur Jaringan LoRaWAN\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Arsitektur jaringan LoRaWAN: End Nodes (sensor) → LoRa Gateway multi-channel → Network Server (The Things Network / ChirpStack) → Application Server & Dashboard · sumber: Wikimedia Commons, <i>File:LoRaWAN Architecture.png</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Keunggulan Utama Modulasi LoRa:</strong></p>\n<ul>\n<li><strong>Link Budget Sangat Tinggi (&gt;150 dB):</strong> Mampu menerima sinyal yang berada di bawah level kebisingan termal (Noise Floor hingga -20 dB SNR).</li>\n<li><strong>Jarak Jangkauan Luas:</strong> Jangkauan transmisi 2 – 5 km di area perkotaan padat dan mencapai 15 – 30 km di area pedesaan / line-of-sight terbuka.</li>\n<li><strong>Konsumsi Daya Sangat Rendah:</strong> Daya pancar maksimum hanya 14–20 dBm (25–100 mW), memungkinkan sensor beroperasi 5–10 tahun hanya dengan 1 buah baterai LiSOCl2.</li>\n</ul>\n<p><strong>Parameter Kunci LoRa:</strong></p>\n<ul>\n<li><strong>Spreading Factor (SF7 hingga SF12):</strong> Menentukan jumlah chip per simbol ($2^{SF}$). Semakin tinggi nilai SF, jangkauan semakin jauh dan sinyal semakin kuat menembus rintangan, namun durasi waktu transmisi di udara (<em>Time-on-Air</em>) menjadi lebih lama dan laju data (bitrate) menurun drastis.</li>\n<li><strong>Bandwidth (BW):</strong> 125 kHz, 250 kHz, atau 500 kHz.</li>\n<li><strong>Coding Rate (CR):</strong> Rasio perlindungan error forward (4/5, 4/6, 4/7, 4/8).</li>\n<li><strong>Alokasi Frekuensi ISM Regional:</strong> Indonesia & Asia Tenggara (<strong>AS923 / AU915</strong>), Eropa (EU868), Amerika Utara (US915).</li>\n</ul>\n<p><strong>Kelas Perangkat LoRaWAN (Device Classes):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Kelas</th><th>Mekanisme Kerja</th><th>Konsumsi Daya</th><th>Latensi Downlink</th><th>Aplikasi Khas</th></tr></thead><tbody>\n<tr><td><strong>Class A</strong></td><td>Downlink hanya dibuka pada 2 slot penerimaan singkat (RX1 & RX2) sesaat setelah node mengirim Uplink</td><td>Paling Rendah (Baterai)</td><td>Tinggi (harus tunggu uplink berikutnya)</td><td>Sensor kelembaban tanah, smart water meter</td></tr>\n<tr><td><strong>Class B</strong></td><td>Node membuka slot penerimaan tambahan yang disinkronkan oleh sinyal <em>Beacon</em> periodik gateway</td><td>Sedang (Baterai)</td><td>Menengah (terjadwal)</td><td>Aktuator irigasi pintar, smart lighting jalan</td></tr>\n<tr><td><strong>Class C</strong></td><td>Node mendengarkan (listening) secara kontinu sepanjang waktu kecuali saat sedang transmit</td><td>Tinggi (Catu daya utama PLN/Aki)</td><td>Hampir Instan (Zero latency)</td><td>Smart grid breaker, kendali valve darurat</td></tr>\n</tbody></table>",
        "referensi": "LoRa Alliance LoRaWAN 1.0.4 / 1.1 Regional Parameters; The Things Network (TTN) Architecture Documentation; Sornin et al., \"LoRa Technology Primer\"."
      }
    ],
    "contoh": [
      {
        "judul": "Kalkulasi Time-on-Air (ToA) dan Duty Cycle LoRaWAN",
        "soal": "Sebuah node sensor LoRaWAN mengirimkan payload 20 byte pada frekuensi 923 MHz dengan konfigurasi SF10, Bandwidth 125 kHz, Coding Rate 4/5, dan Preamble 8 simbol. Jika regulasi batas transmisi maksimum (Duty Cycle) adalah 1%, berapa detik jeda waktu minimum sebelum node diizinkan mengirim pesan berikutnya?",
        "langkah": [
          "Hitung durasi simbol: $$T_{sym} = \\frac{2^{SF}}{BW} = \\frac{2^{10}}{125.000} = \\frac{1024}{125.000} = 8{,}192\\,\\text{ms}$$",
          "Dengan rumus standar Semtech LoRa ToA, transmisi preamble (12.25 simbol) + payload 20 byte pada SF10 menghasilkan total <strong>Time-on-Air ($T_{packet}$) ≈ 370 ms (0,37 detik)</strong>.",
          "Hitung jeda minimum berdasarkan batas Duty Cycle 1% (rasio waktu transmit terhadap waktu total maksimum 1/100): $$\\text{Waktu Total Minimal} = \\frac{T_{packet}}{\\text{Duty Cycle}} = \\frac{0{,}37\\,\\text{s}}{0{,}01} = 37{,}0\\,\\text{detik}$$",
          "Hitung jeda diam (Off-Time): $$\\text{Off-Time} = 37{,}0\\,\\text{s} - 0{,}37\\,\\text{s} = 36{,}63\\,\\text{detik}$$",
          "<strong>Jawaban:</strong> Node harus menunggu jeda minimum <strong>36,6 detik</strong> sebelum melakukan transmisi pesan berikutnya agar mematuhi regulasi ISM band."
        ]
      },
      {
        "judul": "Desain GATT Service BLE untuk Smart Agriculture",
        "soal": "Rancang struktur UUID Service dan Karakteristik BLE untuk membaca sensor kelembaban tanah dan mengendalikan katup solenoid air dari smartphone.",
        "langkah": [
          "<strong>Custom Service UUID:</strong> <code>0000A001-0000-1000-8000-00805F9B34FB</code> (Smart Agri Service).",
          "<strong>Karakteristik 1 - Soil Moisture (UUID: <code>0000B001-...</code>):</strong> Properti <code>READ | NOTIFY</code>. Menyajikan data float 4-byte nilai kelembaban tanah (%) ke smartphone secara real-time.",
          "<strong>Karakteristik 2 - Solenoid Valve Control (UUID: <code>0000B002-...</code>):</strong> Properti <code>READ | WRITE</code>. Menerima byte perintah dari smartphone (<code>0x01 = Buka Katup</code>, <code>0x00 = Tutup Katup</code>)."
        ]
      }
    ],
    "soal": [
      {
        "q": "Manakah teknologi konektivitas berikut yang dirancang untuk jangkauan jarak jauh (hingga >10 km) dengan konsumsi daya ultra rendah berbasis baterai?",
        "opts": [
          "Wi-Fi 802.11ac",
          "Bluetooth Classic",
          "LoRaWAN",
          "Ethernet 1000BASE-T"
        ],
        "ans": 2,
        "exp": "LoRaWAN adalah teknologi LPWAN yang dirancang khusus untuk transmisi jarak jauh (2–15 km) dengan konsumsi daya ultra rendah sehingga baterai bertahan bertahun-tahun."
      },
      {
        "q": "Mode operasi pada ESP32 di mana chip bertindak sebagai pemancar hotspot nirkabel sendiri disebut…",
        "opts": [
          "Station Mode (WIFI_STA)",
          "Access Point Mode (WIFI_AP)",
          "Promiscuous Mode",
          "Mesh Client Mode"
        ],
        "ans": 1,
        "exp": "Access Point Mode (WIFI_AP) membuat ESP32 bertindak sebagai router/hotspot mandiri yang memancarkan SSID untuk dihubungkan oleh smartphone/laptop."
      },
      {
        "q": "Dalam arsitektur Bluetooth Low Energy (BLE), struktur data hierarkis diorganisir dalam layer…",
        "opts": [
          "GATT (Generic Attribute Profile)",
          "GAP (Generic Access Profile)",
          "LL (Link Layer)",
          "HCI (Host Controller Interface)"
        ],
        "ans": 0,
        "exp": "GATT (Generic Attribute Profile) mendefinisikan hierarki struktur data BLE yang terdiri dari Profile, Service, Characteristic, dan Descriptor."
      },
      {
        "q": "Pada teknologi LoRa, menaikkan nilai Spreading Factor (misal dari SF7 ke SF12) akan berdampak pada…",
        "opts": [
          "Jangkauan transmisi semakin jauh namun laju data (bitrate) menurun dan Time-on-Air lebih lama",
          "Laju data meningkat drastis dengan jangkauan lebih pendek",
          "Konsumsi daya chip menjadi nol",
          "Frekuensi radio otomatis berubah ke 2.4 GHz"
        ],
        "ans": 0,
        "exp": "SF lebih tinggi (SF12) meningkatkan ketahanan sinyal dan jangkauan jarak jauh, namun konsekuensinya laju data menjadi sangat lambat dan Time-on-Air paket semakin lama."
      },
      {
        "q": "Kelas perangkat LoRaWAN manakah yang memiliki konsumsi daya paling hemat karena hanya membuka slot penerimaan (downlink) sesaat setelah melakukan uplink?",
        "opts": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "ans": 0,
        "exp": "LoRaWAN Class A adalah kelas perangkat paling hemat daya (battery-optimized), di mana node hanya membuka dua jendela penerimaan singkat (RX1 & RX2) setelah mengirim data uplink."
      }
    ]
  },
{
    "id": "iot-platform",
    "emoji": "☁️",
    "title": "IoT Platform & Cloud",
    "subtitle": "HTTP vs MQTT, PubSubClient ESP32, ThingsBoard, dashboard visualisasi, rule engine & data monitoring",
    "level": "Lanjut",
    "durasi": "±50 menit",
    "materi": [
      "HTTP vs MQTT Protokol",
      "Implementasi MQTT pada ESP32",
      "Pengiriman Data & Serialisasi JSON",
      "Visualisasi Data & Dashboard IoT",
      "Pengenalan Platform ThingsBoard",
      "Tutorial End-to-End ThingsBoard",
      "Data Monitoring, Alerting & Historis"
    ],
    "sections": [
      {
        "id": "http-vs-mqtt-protocols",
        "emoji": "⚖️",
        "title": "Protokol Komunikasi IoT: HTTP vs MQTT",
        "body": "<p>Dua protokol level aplikasi paling dominan dalam pertukaran data Internet of Things adalah <strong>HTTP (Hypertext Transfer Protocol)</strong> dan <strong>MQTT (Message Queuing Telemetry Transport)</strong>.</p>\n<p><strong>1. HTTP (RESTful Architecture):</strong></p>\n<ul>\n<li>Model <strong>Request-Response / Client-Server</strong>: Client (ESP32) harus selalu memulai koneksi dan meminta (request) ke server. Server tidak dapat secara spontan mengirimkan data ke client tanpa polling atau websocket.</li>\n<li>Header besar (biasanya 200 – 800 byte per request) karena memuat metadata text, cookies, dan user-agent. Sangat boros bandwidth untuk payload sensor yang hanya bernilai beberapa byte.</li>\n</ul>\n<p><strong>2. MQTT (Lightweight Pub-Sub Protocol):</strong></p>\n<ul>\n<li>Model <strong>Publish-Subscribe</strong> yang diperantarai oleh sebuah <strong>MQTT Broker</strong> terpusat (misal Mosquitto, EMQX, HiveMQ).</li>\n<li>Header ultra-ringan (<strong>minimum hanya 2 byte</strong>) dengan overhead jaringan yang sangat rendah.</li>\n<li>Mendukung komunikasi dua arah asinkron real-time (koneksi TCP persisten tetap terbuka).</li>\n</ul>\n<p><strong>Tabel Komparasi Mendalam: HTTP vs MQTT untuk IoT:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Parameter</th><th>HTTP / REST API</th><th>MQTT (v3.1.1 / v5.0)</th></tr></thead><tbody>\n<tr><td><strong>Pola Desain</strong></td><td>Request - Response (Tarik Data)</td><td>Publish - Subscribe (Dorong Event)</td></tr>\n<tr><td><strong>Ukuran Header Minimal</strong></td><td>~200 – 800 bytes</td><td>2 bytes</td></tr>\n<tr><td><strong>Konsumsi Bandwidth & Baterai</strong></td><td>Tinggi (Koneksi TCP baru tiap request)</td><td>Sangat Rendah (Koneksi TCP persisten + Keep-Alive)</td></tr>\n<tr><td><strong>Kecepatan Distribusi Data</strong></td><td>Lambat (harus polling berulang)</td><td>Seketika (Pesan di-push ke jutaan subscriber &lt;100ms)</td></tr>\n<tr><td><strong>Jaminan Pengiriman (QoS)</strong></td><td>Hanya HTTP Status Code (200, 404, 500)</td><td>QoS 0, QoS 1, QoS 2</td></tr>\n<tr><td><strong>Fitur Liveness Device</strong></td><td>Tidak ada bawaan</td><td>Last Will and Testament (LWT) & Keep-Alive</td></tr>\n</tbody></table>\n<p><strong>Hierarki Topik & Quality of Service (QoS) pada MQTT:</strong></p>\n<ul>\n<li><strong>Topic Formatting:</strong> Menggunakan string bertingkat dengan separator <code>/</code>, contoh: <code>pabrik/gedungA/lantai2/mesin01/suhu</code>.</li>\n<li><strong>Wildcard Karakter:</strong>\n  <ul>\n    <li><code>+</code> (Single-Level Wildcard): <code>pabrik/+/lantai2/+/suhu</code> (Mencocokkan satu level).</li>\n    <li><code>#</code> (Multi-Level Wildcard): <code>pabrik/gedungA/#</code> (Mencocokkan seluruh sub-topik di bawahnya).</li>\n  </ul>\n</li>\n<li><strong>Level QoS:</strong>\n  <ul>\n    <li><strong>QoS 0 (At most once):</strong> Pesan dikirim sekali tanpa konfirmasi (Fire and Forget). Risiko hilang jika jaringan putus.</li>\n    <li><strong>QoS 1 (At least once):</strong> Pesan dijamin sampai dengan konfirmasi <code>PUBACK</code> (bisa terduplikasi).</li>\n    <li><strong>QoS 2 (Exactly once):</strong> Pesan dijamin sampai tepat satu kali via 4-step handshake (tanpa hilang dan tanpa duplikasi).</li>\n  </ul>\n</li>\n</ul>",
        "referensi": "OASIS MQTT Standard Version 5.0 / 3.1.1 Specification; RFC 7230 Hypertext Transfer Protocol (HTTP/1.1)."
      },
      {
        "id": "mqtt-esp32-implementation",
        "emoji": "💻",
        "title": "Implementasi Protokol MQTT pada ESP32",
        "body": "<p>Pustaka standar industri yang paling banyak digunakan untuk memprogram MQTT pada Arduino/ESP32 adalah <strong>PubSubClient</strong> oleh Nick O'Leary.</p>\n<p><strong>Struktur Program Lengkap ESP32 MQTT Publisher & Subscriber:</strong></p>\n<pre><code>#include &lt;WiFi.h&gt;\n#include &lt;PubSubClient.h&gt;\n\nconst char* ssid = \"Wokwi-GUEST\";\nconst char* password = \"\";\nconst char* mqtt_server = \"broker.hivemq.com\"; // Broker MQTT Publik\nconst int mqtt_port = 1883;\n\nWiFiClient espClient;\nPubSubClient client(espClient);\n\nunsigned long lastMsg = 0;\nconst int relayPin = 23;\n\n// Callback function saat ada pesan masuk pada topik yang di-subscribe\nvoid mqttCallback(char* topic, byte* payload, unsigned int length) {\n  String message = \"\";\n  for (int i = 0; i &lt; length; i++) {\n    message += (char)payload[i];\n  }\n  Serial.printf(\"Pesan diterima pada topik [%s]: %s\\n\", topic, message.c_str());\n\n  // Kendali Relay dari MQTT Subscriber\n  if (String(topic) == \"elektrodict/pabrik/relay\") {\n    if (message == \"ON\") {\n      digitalWrite(relayPin, HIGH);\n      Serial.println(\"-> Relay Berhasil Dinyalakan!\");\n    } else if (message == \"OFF\") {\n      digitalWrite(relayPin, LOW);\n      Serial.println(\"-> Relay Berhasil Dimatikan!\");\n    }\n  }\n}\n\nvoid reconnect() {\n  while (!client.connected()) {\n    Serial.print(\"Mencoba menghubungkan ke MQTT Broker...\");\n    String clientId = \"ESP32Client-\" + String(random(0xffff), HEX);\n    \n    // Connect dengan ClientID, (Opsional: User, Pass, LWT)\n    if (client.connect(clientId.c_str())) {\n      Serial.println(\"Terhubung!\");\n      // Subscribe ke topik kontrol perintah\n      client.subscribe(\"elektrodict/pabrik/relay\");\n    } else {\n      Serial.print(\"Gagal, rc=\");\n      Serial.print(client.state());\n      Serial.println(\" Mencoba lagi dalam 5 detik...\");\n      delay(5000);\n    }\n  }\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(relayPin, OUTPUT);\n  digitalWrite(relayPin, LOW);\n\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"\nWiFi OK!\");\n\n  client.setServer(mqtt_server, mqtt_port);\n  client.setCallback(mqttCallback);\n}\n\nvoid loop() {\n  if (!client.connected()) {\n    reconnect();\n  }\n  client.loop(); // Wajib dipanggil untuk memproses antrian paket MQTT\n\n  // Kirim data telemetri berkala tiap 5 detik\n  unsigned long now = millis();\n  if (now - lastMsg > 5000) {\n    lastMsg = now;\n    float suhu = 27.5 + (random(-20, 20) / 10.0);\n    String payload = String(suhu, 1);\n    \n    client.publish(\"elektrodict/pabrik/suhu\", payload.c_str());\n    Serial.println(\"Telemetri terkirim ke topik [elektrodict/pabrik/suhu]: \" + payload);\n  }\n}</code></pre>",
        "referensi": "PubSubClient Library API Documentation by Nick O'Leary (pubsubclient.knolleary.net); Espressif ESP32 MQTT Client Guide."
      },
      {
        "id": "sending-sensor-data-json",
        "emoji": "📦",
        "title": "Pengiriman Data Sensor & Serialisasi Payload JSON",
        "body": "<p>Dalam ekosistem IoT profesional, data telemetri jarang dikirim dalam bentuk angka mentah tunggal. Standar industri menggunakan format <strong>JSON (JavaScript Object Notation)</strong> untuk mengirimkan banyak variabel sensor sekaligus beserta metadata dalam satu paket transmisi.</p>\n<p><strong>Penggunaan Pustaka ArduinoJson (v6/v7):</strong></p>\n<pre><code>#include &lt;ArduinoJson.h&gt;\n\nvoid sendTelemetryData() {\n  // Alokasi dokumen JSON pada memori stack\n  StaticJsonDocument&lt;256&gt; doc;\n\n  // Isi data payload telemetri\n  doc[\"device_id\"] = \"ESP32-NODE-01\";\n  doc[\"temperature\"] = 28.45;\n  doc[\"humidity\"] = 65.2;\n  doc[\"distance_cm\"] = 142.8;\n  doc[\"rssi\"] = WiFi.RSSI();\n  doc[\"uptime_sec\"] = millis() / 1000;\n\n  // Serialisasi objek JSON ke string buffer\n  char jsonBuffer[256];\n  serializeJson(doc, jsonBuffer);\n\n  // Kirim ke MQTT Broker\n  client.publish(\"v1/devices/me/telemetry\", jsonBuffer);\n  Serial.println(\"Payload JSON terkirim:\");\n  Serial.println(jsonBuffer);\n}</code></pre>\n<p><strong>Strategi Pengiriman Data: Periodic vs Threshold-Based:</strong></p>\n<ul>\n<li><strong>Periodic Reporting:</strong> Mengirim data secara rutin pada interval waktu tertentu (misal tiap 30 detik). Sangat mudah diimplementasikan, namun boros kuota jika nilai sensor tidak berubah.</li>\n<li><strong>Threshold-Based / Event-Driven Reporting:</strong> Data hanya dikirim jika terjadi perubahan nilai yang signifikan ($Delta T ge 0.5^circ\text{C}$) atau saat kondisi darurat terpicu (misal sensor gas mendeteksi asap). Menghemat konsumsi baterai dan bandwidth internet hingga <strong>80–90%</strong>.</li>\n</ul>",
        "referensi": "Blanchon, B. \"ArduinoJson: C++ JSON library for IoT\" (arduinojson.org); ECMA-404 The JSON Data Interchange Standard."
      },
      {
        "id": "data-visualization-dashboards",
        "emoji": "📊",
        "title": "Visualisasi Data & Dashboard IoT",
        "body": "<p>Dashboard IoT adalah antarmuka grafis terpadu yang menyajikan visualisasi data telemetri real-time, grafik tren historis, peta sebaran aset, status alarm, dan widget kendali jarak jauh.</p>\n<p><strong>Komponen Widget Visualisasi Standar:</strong></p>\n<ul>\n<li><strong>Timeseries Line Chart:</strong> Menampilkan fluktuasi data terhadap waktu (misal grafik suhu 24 jam terakhir) untuk analisis tren.</li>\n<li><strong>Radial / Linear Gauge:</strong> Menampilkan nilai instan terkini dengan batas ambang warna (Hijau = Aman, Kuning = Waspada, Merah = Bahaya).</li>\n<li><strong>Digital State Card:</strong> Menampilkan status biner operasional (Mesin RUNNING / STOPPED, Pintu TERKUNCI / TERBUKA).</li>\n<li><strong>Control Widgets:</strong> Switch toggle, push button, slider, dan input numerik untuk mengirim perintah kendali (downlink) ke perangkat IoT.</li>\n<li><strong>Map & Geolocation Widget:</strong> Memetakan posisi koordinat GPS armada logistik atau lokasi sensor stasiun cuaca.</li>\n</ul>\n<p><strong>Komparasi Platform IoT Dashboard Populer:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Platform</th><th>Model Lisensi</th><th>Metode Hosting</th><th>Kelebihan Utama</th></tr></thead><tbody>\n<tr><td><strong>ThingsBoard</strong></td><td>Open-Source / Enterprise</td><td>Cloud / Self-Hosted Docker</td><td>Rule Engine visual powerful, telemetry database, RPC command</td></tr>\n<tr><td><strong>Grafana + InfluxDB</strong></td><td>Open-Source</td><td>Self-Hosted Server</td><td>Visualisasi time-series tercanggih, visual query builder</td></tr>\n<tr><td><strong>Node-RED Dashboard</strong></td><td>Open-Source</td><td>Local / Edge Hub</td><td>Pemrograman visual flow-based, integrasi mudah ke PLC</td></tr>\n<tr><td><strong>Blynk IoT</strong></td><td>Freemium</td><td>Cloud Platform</td><td>Pembuatan aplikasi mobile Android/iOS drag-and-drop instan</td></tr>\n<tr><td><strong>Adafruit IO</strong></td><td>Free Tier / Pro</td><td>Cloud Managed</td><td>Sangat ramah pemula untuk maker dan proyek edukasi</td></tr>\n</tbody></table>",
        "referensi": "Few, S. (2013) \"Information Dashboard Design\", Analytics Press; Grafana Documentation (grafana.com)."
      },
      {
        "id": "thingsboard-platform-intro",
        "emoji": "🏢",
        "title": "Pengenalan Platform ThingsBoard",
        "body": "<p><strong>ThingsBoard</strong> (<strong>thingsboard.io</strong>) adalah platform IoT open-source terkemuka yang dirancang untuk pengumpulan data (<em>data collection</em>), pemrosesan, visualisasi, dan manajemen perangkat skala industri.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/hmi-panel.jpg\" alt=\"Panel Antarmuka Monitoring Industri\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Antarmuka visual monitoring telemetri industri modern — ThingsBoard mentransformasikan data sensor edge menjadi dashboard interaktif berstandar enterprise · sumber: Wikimedia Commons, <i>File:Siemens TP900 Comfort.jpg</i> (CC BY-SA 4.0, Siemens AG)</div></div>\n<p><strong>Fitur Inti ThingsBoard:</strong></p>\n<ol>\n<li><strong>Device & Asset Management:</strong> Mampu mengelola ribuan perangkat secara hierarkis. Setiap perangkat memiliki kredensial otentikasi unik (Access Token, Sertifikat X.509, atau Basic Auth).</li>\n<li><strong>Telemetry Data Storage:</strong> Menyimpan data time-series secara otomatis ke database performa tinggi (PostgreSQL / Cassandra / TimescaleDB) dengan pengindeksan timestamp.</li>\n<li><strong>Rule Engine Visual:</strong> Alur pemrosesan data berbasis node visual drag-and-drop (Filter pesan, Transformasi data JavaScript, Pengambilan keputusan logika, Eksekusi aksi eksternal).</li>\n<li><strong>Alarm Management:</strong> Mendeteksi anomali secara otomatis, membuat tiket alarm dengan tingkat keparahan (<em>CRITICAL, MAJOR, MINOR, WARNING</em>), dan melakukan auto-clear saat kondisi kembali normal.</li>\n<li><strong>RPC (Remote Procedure Call):</strong> Mengirim perintah kontrol dua arah dari widget dashboard browser ke mikrokontroler ESP32 secara instan.</li>\n</ol>",
        "referensi": "ThingsBoard Official Documentation & Architecture Overview (thingsboard.io/docs)."
      },
      {
        "id": "thingsboard-esp32-tutorial",
        "emoji": "🚀",
        "title": "Tutorial End-to-End: ESP32 → MQTT → ThingsBoard Dashboard",
        "body": "<p>Berikut adalah panduan praktis menghubungkan ESP32 dengan ThingsBoard (Cloud/Local) via protokol MQTT:</p>\n<p><strong>Langkah 1: Konfigurasi di ThingsBoard</strong></p>\n<ol>\n<li>Login ke ThingsBoard Dashboard $\rightarrow$ Masuk ke menu <strong>Devices</strong> $\rightarrow$ Klik tanda <strong>+ (Add Device)</strong>.</li>\n<li>Beri nama perangkat: <code>ESP32-Smart-Station</code>, pilih Device Profile: <code>default</code>.</li>\n<li>Buka tab <strong>Credentials</strong> pada detail perangkat, pilih tipe <strong>Access Token</strong> dan salin token tersebut (misal: <code>YOUR_ACCESS_TOKEN_HERE</code>).</li>\n</ol>\n<p><strong>Langkah 2: Kode Program Lengkap ESP32 ThingsBoard MQTT</strong></p>\n<pre><code>#include &lt;WiFi.h&gt;\n#include &lt;PubSubClient.h&gt;\n#include &lt;ArduinoJson.h&gt;\n\nconst char* ssid = \"Wokwi-GUEST\";\nconst char* password = \"\";\n\n// ThingsBoard Server & Port\nconst char* tb_server = \"thingsboard.cloud\"; // atau IP Server Lokal Anda\nconst int tb_port = 1883;\nconst char* tb_token = \"YOUR_ACCESS_TOKEN_HERE\"; // Ganti dengan Token Device Anda\n\nWiFiClient espClient;\nPubSubClient client(espClient);\n\nunsigned long lastSend = 0;\nconst int relayPin = 23;\n\n// Tangani RPC Downlink dari Dashboard ThingsBoard (Kontrol Relay)\nvoid onMqttMessage(char* topic, byte* payload, unsigned int length) {\n  String responseTopic = String(topic);\n  responseTopic.replace(\"request\", \"response\");\n\n  StaticJsonDocument&lt;200&gt; doc;\n  deserializeJson(doc, payload, length);\n  \n  String methodName = doc[\"method\"];\n  bool params = doc[\"params\"];\n\n  Serial.println(\"RPC Diterima: \" + methodName);\n  if (methodName == \"setRelayStatus\") {\n    digitalWrite(relayPin, params ? HIGH : LOW);\n    Serial.printf(\"Relay diubah ke: %s\\n\", params ? \"ON\" : \"OFF\");\n    \n    // Balas konfirmasi RPC ke ThingsBoard\n    client.publish(responseTopic.c_str(), params ? \"{\"status\":true}\" : \"{\"status\":false}\");\n  }\n}\n\nvoid reconnectTB() {\n  while (!client.connected()) {\n    Serial.print(\"Menghubungkan ke ThingsBoard via MQTT...\");\n    // Di ThingsBoard, username adalah Access Token dan Password dikosongkan\n    if (client.connect(\"ESP32_Device\", tb_token, NULL)) {\n      Serial.println(\" Sukses!\");\n      // Subscribe ke topik RPC Request ThingsBoard\n      client.subscribe(\"v1/devices/me/rpc/request/+\");\n    } else {\n      Serial.print(\" Gagal, rc=\");\n      Serial.print(client.state());\n      delay(3000);\n    }\n  }\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(relayPin, OUTPUT);\n  digitalWrite(relayPin, LOW);\n\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print(\".\"); }\n  Serial.println(\"\nWiFi Connected!\");\n\n  client.setServer(tb_server, tb_port);\n  client.setCallback(onMqttMessage);\n}\n\nvoid loop() {\n  if (!client.connected()) reconnectTB();\n  client.loop();\n\n  if (millis() - lastSend > 3000) {\n    lastSend = millis();\n    \n    float suhu = 26.0 + (random(0, 80) / 10.0);\n    float kelembaban = 60.0 + (random(0, 200) / 10.0);\n\n    StaticJsonDocument&lt;128&gt; doc;\n    doc[\"temperature\"] = suhu;\n    doc[\"humidity\"] = kelembaban;\n    doc[\"rssi\"] = WiFi.RSSI();\n\n    char payload[128];\n    serializeJson(doc, payload);\n\n    // Kirim telemetri ke topik resmi ThingsBoard\n    client.publish(\"v1/devices/me/telemetry\", payload);\n    Serial.println(\"Telemetri terkirim ke ThingsBoard: \" + String(payload));\n  }\n}</code></pre>\n<p><strong>Langkah 3: Pembuatan Dashboard di ThingsBoard</strong></p>\n<ol>\n<li>Buka menu <strong>Dashboards</strong> $\rightarrow$ <strong>Add Dashboard</strong>.</li>\n<li>Klik <strong>Add Widget</strong> $\rightarrow$ Pilih Bundle <strong>Charts</strong> $\rightarrow$ <strong>Timeseries Line Chart</strong>. Masukkan entity: <code>ESP32-Smart-Station</code> dan key: <code>temperature</code>.</li>\n<li>Tambahkan widget <strong>Analogue Gauges</strong> untuk parameter <code>humidity</code>.</li>\n<li>Tambahkan widget <strong>Control Widgets</strong> $\rightarrow$ <strong>RPC Switch</strong> dengan method <code>setRelayStatus</code> untuk kendali sakelar relay bolak-balik secara instan!</li>\n</ol>",
        "referensi": "ThingsBoard MQTT Device API Guide (thingsboard.io/docs/reference/mqtt-api/); PubSubClient ESP32 Integration Guides."
      },
      {
        "id": "data-monitoring-alerting",
        "emoji": "🚨",
        "title": "Data Monitoring, Alerting & Integrasi Notifikasi",
        "body": "<p>Sistem IoT modern tidak hanya bertugas mengumpulkan data, melainkan juga harus mampu bertindak secara proaktif saat terjadi anomali kondisi di lapangan.</p>\n<p><strong>1. Retensi & Agregasi Data Historis (Downsampling):</strong></p>\n<ul>\n<li>Menyimpan data mentah per detik secara terus-menerus akan membebani database storage.</li>\n<li>Gunakan teknik <strong>Downsampling & Agregasi</strong> pada database time-series: hitung nilai Rata-rata (AVG), Maksimum (MAX), dan Minimum (MIN) per jam/harian untuk data yang berumur lebih dari 30 hari.</li>\n</ul>\n<p><strong>2. Konfigurasi Rule Engine Alerting di ThingsBoard:</strong></p>\n<ol>\n<li>Buka <strong>Rule Chains</strong> $\rightarrow$ <strong>Root Rule Chain</strong>.</li>\n<li>Tambahkan node <strong>Filter Script</strong> untuk memeriksa kondisi: <br><code>return msg.temperature &gt; 38.0;</code></li>\n<li>Hubungkan output True ke node <strong>Create Alarm</strong> dengan tipe alarm <code>High Temperature Alarm</code> dan severity <code>CRITICAL</code>.</li>\n<li>Hubungkan output False ke node <strong>Clear Alarm</strong> agar alarm otomatis mati saat suhu kembali normal di bawah 38°C.</li>\n</ol>\n<p><strong>3. Integrasi Notifikasi Multi-Channel (Telegram, Email, Webhook):</strong></p>\n<ul>\n<li><strong>Telegram Bot API:</strong> Tambahkan node REST API Call di Rule Chain ThingsBoard yang melakukan HTTP POST ke: <br><code>https://api.telegram.org/bot&lt;BOT_TOKEN&gt;/sendMessage</code> dengan payload JSON <code>{\"chat_id\": \"YOUR_CHAT_ID\", \"text\": \"PERINGATAN! Suhu mesin mencapai \" + msg.temperature + \" °C\"}</code>.</li>\n<li><strong>Email Notification (SMTP):</strong> Mengirim email darurat otomatis ke tim teknisi maintenance.</li>\n<li><strong>Inactivity Timeout (Deteksi Device Offline):</strong> ThingsBoard secara otomatis memicu alarm jika perangkat tidak mengirimkan data dalam rentang waktu yang ditentukan (misal 60 detik tidak ada sinyal telemetri = Device Offline).</li>\n</ul>",
        "referensi": "ThingsBoard Rule Engine Guide & Node Library; Telegram Bot API Reference (core.telegram.org/bots/api); SRE Best Practices for IoT Telemetry."
      }
    ],
    "contoh": [
      {
        "judul": "Format Serialisasi Telemetri Multi-Sensor JSON",
        "soal": "Sebuah stasiun cuaca IoT mengukur suhu 29.4°C, kelembaban 78.2%, tekanan udara 1013.25 hPa, dan intensitas cahaya 450 Lux. Tuliskan representasi string JSON standar untuk dikirimkan ke topik MQTT ThingsBoard.",
        "langkah": [
          "Identifikasi key-value pairs data sensor yang terukur.",
          "Susun struktur JSON standar: <br><code>{\n  \"temperature\": 29.4,\n  \"humidity\": 78.2,\n  \"pressure\": 1013.25,\n  \"lux\": 450\n}</code>",
          "Topik tujuan MQTT ThingsBoard adalah: <code>v1/devices/me/telemetry</code>.",
          "Ukuran payload string JSON tersebut adalah sekitar 75 byte, sangat efisien dikirimkan melalui koneksi MQTT."
        ]
      },
      {
        "judul": "Konfigurasi Logika Script Rule Engine Alerting",
        "soal": "Tuliskan logika JavaScript untuk Node Filter Rule Engine ThingsBoard yang memicu alarm jika suhu > 40°C ATAU tegangan baterai < 3.2V.",
        "langkah": [
          "Akses variabel payload masuk melalui object <code>msg</code>.",
          "Tuliskan ekspresi kondisi Boolean: <br><code>return (typeof msg.temperature !== 'undefined' && msg.temperature > 40.0) || (typeof msg.voltage !== 'undefined' && msg.voltage < 3.2);</code>",
          "Jika fungsi mengembalikan <code>true</code>, pesan akan diteruskan ke node <code>Create Alarm</code> dengan tingkat keparahan (severity) <code>CRITICAL</code>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Mengapa protokol MQTT jauh lebih efisien dibandingkan HTTP untuk pengiriman data sensor berkala pada IoT?",
        "opts": [
          "Karena MQTT tidak menggunakan jaringan TCP/IP",
          "Karena MQTT memiliki ukuran header sangat kecil (minimal 2 byte) dan koneksi TCP persisten",
          "Karena MQTT hanya bisa mengirim data berupa teks",
          "Karena MQTT tidak memerlukan broker"
        ],
        "ans": 1,
        "exp": "MQTT memiliki overhead header minimal hanya 2 bytes (dibandingkan ratusan bytes pada HTTP) dan menggunakan koneksi TCP persisten sehingga sangat hemat bandwidth dan daya baterai."
      },
      {
        "q": "Topik resmi ThingsBoard yang digunakan oleh perangkat ESP32 untuk mempublikasikan data telemetri sensor via MQTT adalah…",
        "opts": [
          "/sensor/data",
          "v1/devices/me/telemetry",
          "thingsboard/uplink/data",
          "iot/telemetry/publish"
        ],
        "ans": 1,
        "exp": "Topik MQTT standar yang ditentukan oleh ThingsBoard untuk pengiriman data telemetri perangkat adalah \"v1/devices/me/telemetry\"."
      },
      {
        "q": "Tingkat jaminan pengiriman (Quality of Service) pada MQTT di mana pesan dijamin sampai tepat satu kali tanpa ada duplikasi adalah…",
        "opts": [
          "QoS 0",
          "QoS 1",
          "QoS 2",
          "QoS 3"
        ],
        "ans": 2,
        "exp": "QoS 2 (Exactly Once) menjamin pesan sampai tepat satu kali ke subscriber melalui proses four-step handshake."
      },
      {
        "q": "Kredensial default yang paling umum digunakan oleh ESP32 untuk mengotentikasi koneksi MQTT ke platform ThingsBoard adalah…",
        "opts": [
          "Username = Access Token perangkat (Password dikosongkan)",
          "Email dan Password akun admin",
          "Alamat MAC Address saja",
          "Sertifikat SSL tanpa kredensial"
        ],
        "ans": 0,
        "exp": "Pada ThingsBoard MQTT API, otentikasi default menggunakan Device Access Token yang dimasukkan sebagai parameter Username pada MQTT client (Password NULL)."
      },
      {
        "q": "Fitur pada ThingsBoard yang memungkinkan pengolahan data visual drag-and-drop, penyaringan anomali, dan pembuatan alarm otomatis adalah…",
        "opts": [
          "Firmware OTA Engine",
          "Rule Engine",
          "SQL Query Builder",
          "Widget Designer"
        ],
        "ans": 1,
        "exp": "Rule Engine pada ThingsBoard adalah sistem alur pemrosesan data berbasis node grafis untuk memfilter data, mentransformasikan pesan, memicu alarm, dan mengirim notifikasi eksternal."
      }
    ]
  },
{
    "id": "komunikasi-nirkabel",
    "emoji": "📡",
    "title": "Komunikasi Nirkabel & RF",
    "subtitle": "Spektrum RF, NRF24L01, LoRa, ESP-NOW, BLE & perbandingan protokol",
    "level": "Menengah",
    "durasi": "±35 menit",
    "materi": [
      "Spektrum RF & ISM",
      "NRF24L01",
      "LoRa & LoRaWAN",
      "ESP-NOW",
      "Bluetooth/BLE",
      "Perbandingan Protokol"
    ],
    "sections": [
      {
        "id": "pengantar-rf",
        "emoji": "🌊",
        "title": "Spektrum Frekuensi Radio & Band ISM",
        "body": "<p><strong>Frekuensi Radio (RF)</strong> adalah gelombang elektromagnetik 3 kHz–300 GHz yang membawa data tanpa kabel. Semakin tinggi frekuensi → <strong>bandwidth besar</strong> (kecepatan tinggi) tapi <strong>jangkauan pendek & mudah terhalang</strong>; semakin rendah → jangkauan jauh tapi data lambat.</p>\n<table class=\"mt-table\"><thead><tr><th>Band ISM (bebas lisensi)</th><th>Frekuensi</th><th>Karakter</th></tr></thead><tbody>\n<tr><td>433 MHz</td><td>433,05–434,79 MHz</td><td>Jangkauan jauh, penetrasi dinding baik, antena agak besar</td></tr>\n<tr><td>868 MHz (EU) / 915 MHz (US)</td><td>868 / 915 MHz</td><td>LoRa favorit, balance jangkauan & bandwidth</td></tr>\n<tr><td>2,4 GHz</td><td>2400–2483,5 MHz</td><td>WiFi, BLE, NRF24L01, ESP-NOW — antena kecil, padat interferensi</td></tr>\n<tr><td>5,8 GHz</td><td>5725–5875 MHz</td><td>Bandwidth sangat besar, jangkauan pendek</td></tr>\n</tbody></table>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/rf-spectrum.png\" alt=\"Spektrum elektromagnetik dari gelombang radio hingga sinar gamma\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Spektrum elektromagnetik — band radio (3 kHz–300 GHz) ada di ujung kiri, termasuk WiFi (2,4/5 GHz) dan LoRa (433/868/915 MHz) · sumber: Wikimedia Commons, <i>File:Electromagnetic-Spectrum.svg</i> (CC BY-SA 3.0)</div></div>\n<p>Rumus panjang gelombang:</p>\n$$\\lambda = \\frac{c}{f}, \\qquad c = 3 \\times 10^8\\,\\text{m/s}$$\n<p>Contoh: 433 MHz → \\(\\lambda \\approx 0{,}69\\,\\text{m}\\), 2,4 GHz → \\(12{,}5\\,\\text{cm}\\). Antena quarter-wave = \\(\\lambda/4\\) → 17 cm untuk 433 MHz, 3 cm untuk 2,4 GHz.</p>\n<div class=\"mt-tip\">💡 Pilih 433/868 MHz untuk sensor sawah/jarak km, 2,4 GHz untuk dalam ruangan & kecepatan tinggi.</div>"
      },
      {
        "id": "nrf24l01",
        "emoji": "📻",
        "title": "NRF24L01 — Transceiver 2,4 GHz Murah Meriah",
        "body": "<p><strong>NRF24L01</strong> adalah modul RF 2,4 GHz paling populer untuk Arduino — harga belasan ribu, komunikasi SPI, jangkauan ±100 m (versi PA+LNA bisa 1 km line-of-sight).</p>\n<p><strong>Pinout (6 pin):</strong> VCC (3,3 V!), GND, CE, CSN, SCK, MOSI, MISO, IRQ. <strong>Wajib 3,3 V</strong> — 5 V akan merusak!</p>\n<table class=\"mt-table\"><thead><tr><th>Pin NRF</th><th>Sambung ke Uno</th></tr></thead><tbody>\n<tr><td>VCC</td><td>3,3 V</td></tr>\n<tr><td>GND</td><td>GND</td></tr>\n<tr><td>CE</td><td>D9</td></tr>\n<tr><td>CSN</td><td>D10 (SS)</td></tr>\n<tr><td>SCK</td><td>D13</td></tr>\n<tr><td>MOSI</td><td>D11</td></tr>\n<tr><td>MISO</td><td>D12</td></tr>\n</tbody></table>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NRF24L01-Pinout.jpg/400px-NRF24L01-Pinout.jpg\" alt=\"Pinout modul NRF24L01 2.4GHz\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Pinout modul NRF24L01 — 8 pin: VCC (3,3 V), GND, CE, CSN, SCK, MOSI, MISO, IRQ · sumber: Wikimedia Commons (CC BY-SA 4.0)</div></div>\n<p>Kode dasar kirim/terima:</p>\n<pre><code class=\"lang-cpp\">#include &lt;SPI.h&gt;\n#include &lt;RF24.h&gt;\nRF24 radio(9, 10); // CE, CSN\nconst byte addr[6] = \"00001\";\nvoid setup(){\n  radio.begin();\n  radio.openWritingPipe(addr);\n  radio.setPALevel(RF24_PA_MIN);\n  radio.stopListening();\n}\nvoid loop(){\n  const char msg[] = \"Halo NRF!\";\n  radio.write(&msg, sizeof(msg));\n  delay(1000);\n}\n// Penerima: radio.openReadingPipe(0, addr); radio.startListening();\n// if (radio.available()) radio.read(&buf, sizeof(buf));</code></pre>\n<div class=\"mt-warn\">⚠️ NRF24L01 sensitif noise power supply — tambahkan kapasitor 10 µF di VCC-GND modul. Jika sering gagal kirim, cek daya 3,3 V Uno (beri kapasitor atau regulator eksternal).</div>"
      },
      {
        "id": "lora-lorawan",
        "emoji": "📶",
        "title": "LoRa & LoRaWAN — Jarak Kilometer",
        "body": "<p><strong>LoRa (Long Range)</strong> memakai modulasi <strong>Chirp Spread Spectrum (CSS)</strong> — tahan interferensi dan bisa tembus jarak km dengan daya kecil (cocok sensor sawah, hutan, tambak).</p>\n<p><strong>Parameter kunci LoRa:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Parameter</th><th>Arti</th><th>Efek</th></tr></thead><tbody>\n<tr><td>SF (Spreading Factor) 7–12</td><td>Jumlah chirp per bit</td><td>SF naik → jangkauan jauh, data lambat</td></tr>\n<tr><td>BW (Bandwidth) 125/250/500 kHz</td><td>Lebar pita</td><td>BW besar → cepat, jangkauan pendek</td></tr>\n<tr><td>CR (Coding Rate) 4/5–4/8</td><td>Bit koreksi error</td><td>CR besar → tahan error, overhead naik</td></tr>\n</tbody></table>\n<p><strong>LoRa P2P vs LoRaWAN:</strong> P2P = dua modul saling kirim langsung (tanpa infrastruktur). LoRaWAN = via gateway → network server → app (The Things Network), bisa ribuan node.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/lora-network.png\" alt=\"Arsitektur jaringan LoRaWAN: node, gateway, network server, application\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Arsitektur LoRaWAN: node sensor → gateway → network server → application server · sumber: Wikimedia Commons, <i>File:LoRaWAN Architecture.png</i> (CC BY-SA 4.0)</div></div>\n<pre><code class=\"lang-cpp\">// ESP32 + SX1276 (915 MHz) — LoRa P2P\n#include &lt;LoRa.h&gt;\nvoid setup(){\n  Serial.begin(115200);\n  LoRa.setPins(5, 14, 2); // CS, RST, IRQ\n  if(!LoRa.begin(915E6)){ Serial.println(\"LoRa gagal\"); while(1); }\n  Serial.println(\"LoRa siap\");\n}\nvoid loop(){\n  LoRa.beginPacket();\n  LoRa.print(\"Suhu: 28.5C\");\n  LoRa.endPacket();\n  delay(5000);\n}\n// Penerima: int sz = LoRa.parsePacket(); if(sz) while(LoRa.available()) Serial.write(LoRa.read());</code></pre>\n<div class=\"mt-tip\">💡 Di Indonesia gunakan 923 MHz (AS923) untuk LoRaWAN. Cek regulasi frekuensi sebelum transmit daya tinggi.</div>"
      },
      {
        "id": "esp-now",
        "emoji": "🤝",
        "title": "ESP-NOW — Peer-to-Peer Tanpa Router",
        "body": "<p><strong>ESP-NOW</strong> adalah protokol Espressif untuk komunikasi <strong>langsung antar ESP32/ESP8266</strong> tanpa WiFi router/AP. Cepat, ringan, dan hemat daya — cocok mesh sensor, remote control, swarm robot.</p>\n<p>Cara kerja: tiap ESP punya <strong>MAC address</strong> unik (6 byte). Perangkat A mendaftarkan MAC B sebagai <em>peer</em>, lalu kirim via <code>esp_now_send()</code> — data sampai dalam milidetik.</p>\n<pre><code class=\"lang-cpp\">// ESP-NOW Sender (ESP32)\n#include &lt;esp_now.h&gt;\n#include &lt;WiFi.h&gt;\nuint8_t peerMAC[] = {0x24, 0x6F, 0x28, 0xAA, 0xBB, 0xCC}; // ganti MAC penerima\ntypedef struct { float suhu; int id; } Data;\nData kirim = {28.5, 1};\n\nvoid onSent(const uint8_t *mac, esp_now_send_status_t s){\n  Serial.println(s==ESP_NOW_SEND_SUCCESS ? \"Terkirim\" : \"Gagal\");\n}\nvoid setup(){\n  Serial.begin(115200);\n  WiFi.mode(WIFI_STA);\n  esp_now_init();\n  esp_now_register_send_cb(onSent);\n  esp_now_peer_info_t peer = {}; memcpy(peer.peer_addr, peerMAC, 6);\n  peer.channel = 0; peer.encrypt = false;\n  esp_now_add_peer(&peer);\n}\nvoid loop(){\n  esp_now_send(peerMAC, (uint8_t*)&kirim, sizeof(kirim));\n  delay(2000);\n}</code></pre>\n<pre><code class=\"lang-cpp\">// Receiver callback\nvoid onRecv(const uint8_t *mac, const uint8_t *data, int len){\n  Data d; memcpy(&d, data, sizeof(d));\n  Serial.printf(\"Dari %02X:%02X suhu=%.1f\\n\", mac[0], mac[1], d.suhu);\n}\nvoid setup(){\n  WiFi.mode(WIFI_STA); esp_now_init();\n  esp_now_register_recv_cb(onRecv);\n}</code></pre>\n<div class=\"mt-tip\">💡 ESP-NOW bisa 1-ke-banyak, banyak-ke-1, bahkan mesh. Enkripsi opsional (PMK/LMK) tersedia untuk keamanan.</div>"
      },
      {
        "id": "bluetooth-ble",
        "emoji": "🔷",
        "title": "Bluetooth Classic vs BLE",
        "body": "<p><strong>Classic Bluetooth</strong> (BR/EDR) untuk streaming audio/data kontinu (headset). <strong>BLE (Bluetooth Low Energy)</strong> untuk sensor hemat daya — 90% proyek ESP32 memakai BLE.</p>\n<p>BLE memakai konsep <strong>GATT</strong>: <em>Server</em> menyimpan data di <strong>Service → Characteristic</strong> (tiap UUID). <em>Client</em> (HP) membaca/notify. Contoh: Service 0x1809 (Health Thermometer) → Characteristic suhu.</p>\n<table class=\"mt-table\"><thead><tr><th>Aspek</th><th>Classic</th><th>BLE</th></tr></thead><tbody>\n<tr><td>Daya</td><td>~30 mA terus</td><td>~5–15 mA, sleep di antaranya</td></tr>\n<tr><td>Kecepatan</td><td>~2 Mbps</td><td>~1 Mbps (praktis 10–50 kB/s)</td></tr>\n<tr><td>Koneksi</td><td>7 slave max</td><td>Banyak, advertise terus</td></tr>\n<tr><td>Use case</td><td>Audio, SPP serial</td><td>Sensor, beacon, wearable</td></tr>\n</tbody></table>\n<pre><code class=\"lang-cpp\">// ESP32 BLE Server — Notify suhu tiap detik\n#include &lt;BLEDevice.h&gt;\n#include &lt;BLEServer.h&gt;\n#include &lt;BLE2902.h&gt;\nBLECharacteristic *pChar;\nbool deviceConnected = false;\nclass CB : public BLEServerCallbacks { void onConnect(BLEServer* s){ deviceConnected=true; } void onDisconnect(BLEServer* s){ deviceConnected=false; } };\n\nvoid setup(){\n  BLEDevice::init(\"ElektroDict_BLE\");\n  BLEServer *srv = BLEDevice::createServer(); srv->setCallbacks(new CB());\n  BLEService *svc = srv->createService(\"4fafc201-1fb5-459e-8fcc-c5c9c331914b\");\n  pChar = svc->createCharacteristic(\"beb5483e-36e1-4688-b7f5-ea07361b26a8\", BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY);\n  pChar->addDescriptor(new BLE2902());\n  svc->start(); srv->getAdvertising()->start();\n}\nvoid loop(){\n  if(deviceConnected){\n    float suhu = 26.5 + random(-5,5)/10.0;\n    pChar->setValue(String(suhu).c_str()); pChar->notify();\n  }\n  delay(1000);\n}</code></pre>\n<div class=\"mt-tip\">💡 Scan BLE dari HP pakai aplikasi <strong>nRF Connect</strong> — cari nama ElektroDict_BLE, baca characteristic.</div>"
      },
      {
        "id": "perbandingan-protokol",
        "emoji": "⚖️",
        "title": "Perbandingan Protokol Nirkabel",
        "body": "<p>Tidak ada protokol terbaik untuk semua — pilih sesuai kebutuhan jangkauan, kecepatan, daya & biaya.</p>\n<table class=\"mt-table\"><thead><tr><th>Protokol</th><th>Jangkauan</th><th>Kecepatan</th><th>Daya</th><th>Biaya</th><th>Cocok untuk</th></tr></thead><tbody>\n<tr><td>NRF24L01</td><td>±100 m (1 km PA)</td><td>250 kbps–2 Mbps</td><td>Rendah (13 mA TX)</td><td>Sangat murah</td><td>Remote, robot, mainan</td></tr>\n<tr><td>LoRa P2P</td><td>2–15 km</td><td>0,3–50 kbps</td><td>Sangat rendah</td><td>Murah</td><td>Sensor sawah, tambak</td></tr>\n<tr><td>LoRaWAN</td><td>km (via gateway)</td><td>0,3–50 kbps</td><td>Sangat rendah</td><td>Gateway mahal</td><td>Kota pintar, ribuan node</td></tr>\n<tr><td>ESP-NOW</td><td>200 m (500 m open)</td><td>~1 Mbps</td><td>Rendah</td><td>Murah (ESP saja)</td><td>Mesh sensor, swarm</td></tr>\n<tr><td>BLE</td><td>10–50 m</td><td>1 Mbps</td><td>Sangat rendah</td><td>Murah</td><td>Wearable, beacon</td></tr>\n<tr><td>WiFi</td><td>50–100 m</td><td>54 Mbps+</td><td>Tinggi (170 mA)</td><td>Murah</td><td>Bandwidth besar</td></tr>\n<tr><td>Zigbee</td><td>75 m (mesh km)</td><td>250 kbps</td><td>Rendah</td><td>Sedang</td><td>Home automation mesh</td></tr>\n</tbody></table>\n<p>Link budget sederhana (dBm):</p>\n$$P_{rx} = P_{tx} + G_{tx} + G_{rx} - L_{path}, \\qquad L_{path} = 20\\log_{10}\\!\\left(\\frac{4\\pi d}{\\lambda}\\right)$$\n<div class=\"mt-tip\">💡 Aturan praktis: butuh <strong>jarak km & baterai tahunan → LoRa</strong>; butuh <strong>cepat & peer-to-peer ESP → ESP-NOW</strong>; butuh <strong>akses HP → BLE</strong>.</div>\n<div class=\"mt-warn\">⚠️ 2,4 GHz (NRF24L01, ESP-NOW, BLE, WiFi) saling interferensi — beri jarak kanal/frekuensi atau pakai 433/868 MHz jika di lingkungan WiFi padat.</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Menghitung Link Budget LoRa",
        "soal": "LoRa TX 14 dBm, antena TX+RX masing 2 dBi, jarak 2 km, frekuensi 923 MHz. Apakah sinyal masih di atas sensitivitas −137 dBm?",
        "langkah": [
          "Hitung λ = c/f = 3e8 / 923e6 ≈ 0,325 m.",
          "Path loss: L = 20·log10(4πd/λ) = 20·log10(4π·2000/0,325) ≈ 20·log10(77290) ≈ 97,8 dB.",
          "P_rx = 14 + 2 + 2 − 97,8 = −79,8 dBm.",
          "<strong>Jawaban:</strong> −79,8 dBm >> −137 dBm → <strong>masih sangat kuat, margin ~57 dB</strong>."
        ]
      },
      {
        "judul": "Waktu Transmisi Paket NRF24L01",
        "soal": "Paket 32 byte (256 bit) dikirim NRF24L01 pada 250 kbps. Berapa waktu on-air minimal (tanpa overhead)?",
        "langkah": [
          "Waktu = jumlah bit / bitrate.",
          "Hitung: 256 / 250.000 = 0,001024 s = 1,024 ms.",
          "Dengan overhead (preamble, address, CRC ~10 byte) → ~337 bit → 1,35 ms.",
          "<strong>Jawaban:</strong> <strong>≈1–1,4 ms per paket</strong> — sangat cepat untuk kontrol real-time."
        ]
      }
    ],
    "soal": [
      {
        "q": "Band ISM yang paling jauh jangkauannya tetapi butuh antena paling besar adalah…",
        "opts": [
          "2,4 GHz",
          "5,8 GHz",
          "433 MHz",
          "BLE 2,4 GHz"
        ],
        "ans": 2,
        "exp": "433 MHz panjang gelombang ~69 cm → antena besar tapi propagasi & penetrasi dinding terbaik."
      },
      {
        "q": "Modulasi yang dipakai LoRa sehingga tahan interferensi adalah…",
        "opts": [
          "FSK",
          "ASK",
          "Chirp Spread Spectrum (CSS)",
          "QAM"
        ],
        "ans": 2,
        "exp": "LoRa: Chirp Spread Spectrum — chirp naik/turun frekuensi, tahan noise dan multipath."
      },
      {
        "q": "Agar NRF24L01 tidak rusak, tegangan VCC harus…",
        "opts": [
          "5 V langsung dari Uno",
          "3,3 V (tambah kapasitor 10 µF)",
          "9 V dari baterai",
          "12 V"
        ],
        "ans": 1,
        "exp": "NRF24L01 hanya 3,3 V; 5 V merusak. Tambah kapasitor 10 µF di VCC-GND untuk cegah brownout."
      },
      {
        "q": "ESP-NOW berkomunikasi dengan cara…",
        "opts": [
          "Lewat router WiFi",
          "Langsung antar ESP via MAC address tanpa router",
          "Lewat Bluetooth",
          "Lewat LoRa gateway"
        ],
        "ans": 1,
        "exp": "ESP-NOW: peer-to-peer via MAC address, tanpa AP/router, sangat cepat & ringan."
      },
      {
        "q": "Untuk sensor yang harus diakses dari smartphone, protokol paling cocok adalah…",
        "opts": [
          "NRF24L01",
          "LoRa",
          "BLE",
          "ESP-NOW"
        ],
        "ans": 2,
        "exp": "BLE didukung semua smartphone; NRF24L01/ESP-NOW butuh ESP penerima tambahan."
      },
      {
        "q": "Jika SF LoRa dinaikkan dari 7 ke 12, yang terjadi adalah…",
        "opts": [
          "Jangkauan turun, kecepatan naik",
          "Jangkauan naik, kecepatan turun",
          "Keduanya naik",
          "Tidak ada pengaruh"
        ],
        "ans": 1,
        "exp": "SF tinggi → chirp lebih panjang → sensitif & jauh, tapi bitrate anjlok."
      }
    ]
  },
{
    "id": "ebt-surya",
    "emoji": "☀️",
    "title": "PLTS — Energi Surya",
    "subtitle": "Efek fotovoltaik, sel mono/poli/perovskite, MPPT, tilt & net-metering",
    "level": "Pemula",
    "durasi": "±30 menit",
    "materi": [
      "Efek Fotovoltaik",
      "Jenis Sel & Efisiensi",
      "Kurva I-V & Fill Factor",
      "MPPT",
      "Tilt & Shading",
      "On-Grid vs Hybrid"
    ],
    "sections": [
      {
        "id": "efek-fotovoltaik",
        "emoji": "⚛️",
        "title": "Efek Fotovoltaik — Dari Foton ke Elektron",
        "body": "<p><strong>Efek fotovoltaik</strong> adalah konversi langsung foton menjadi pasangan elektron-hole pada sambungan p-n semikonduktor. Foton dengan energi \\(E=hf > E_g\\) mengeksitasi elektron dari pita valensi ke pita konduksi.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Standard_Solar_Cell.png\" alt=\"Struktur sel surya standar\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Struktur sel silikon kristalin: kaca + ARC + grid finger + emitter n + base p + back contact · sumber: Wikimedia Commons, <i>File:Standard Solar Cell.png</i> (CC BY-SA 3.0)</div></div><p>Parameter sel ideal:</p>$$I = I_L - I_0\\left(e^{qV/kT}-1\\right)$$<p>Saat hubung singkat \\(I_{sc}\\) ≈ \\(I_L\\), saat open-circuit \\(V_{oc}=\\frac{kT}{q}\\ln(I_L/I_0+1)\\).</p><div class=\"mt-tip\">💡 Spektrum AM1.5G (1000 W/m²) adalah standar uji — daya panel di lab diukur pada kondisi ini (STC 25°C).</div>",
        "referensi": "PV Education (pveducation.org) Solar Cell Operation; NREL Best Research-Cell Efficiencies; gambar: Wikimedia Commons, File:Standard Solar Cell.png (CC BY-SA 3.0)."
      },
      {
        "id": "jenis-sel-efisiensi",
        "emoji": "🔬",
        "title": "Jenis Sel & Efisiensi",
        "body": "<p><strong>Efisiensi</strong> \\(\\eta = P_{max}/(A·G)\\) dengan \\(G=1000\\,\\text{W/m²}\\) (STC).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Best_Research-Cell_Efficiencies.png\" alt=\"Grafik efisiensi sel NREL\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Grafik NREL Best Research-Cell Efficiencies — mono-Si lab >26%, perovskite/Si tandem >33% · sumber: Wikimedia Commons, <i>File:Best Research-Cell Efficiencies.png</i> (CC BY-SA, NREL)</div></div><table class=\"mt-table\"><thead><tr><th>Tipe</th><th>η komersial</th><th>η lab</th><th>Ciri</th></tr></thead><tbody><tr><td>Monokristal</td><td>20–22%</td><td>26,7%</td><td>Hitam, sudut terpotong, umur 25 th</td></tr><tr><td>Polikristal</td><td>15–17%</td><td>23%</td><td>Biru pecah-pecah, murah</td></tr><tr><td>Thin-film CIGS/CdTe</td><td>10–13%</td><td>23% (CIGS)</td><td>Fleksibel, area luas</td></tr><tr><td>Perovskite/Si tandem</td><td>- (R&D)</td><td>33,9%</td><td>Potensi murah, stabilitas isu</td></tr></tbody></table><div class=\"mt-warn\">⚠️ Suhu naik 1°C → \\(V_{oc}\\) turun ~0,3% — panel di atap 65°C bisa kehilangan 10% daya vs STC 25°C.</div>",
        "referensi": "NREL Best Research-Cell Efficiency Chart 2024; IEC 60904 (PV measurement); gambar: Wikimedia Commons, File:Best Research-Cell Efficiencies.png (NREL, CC BY-SA)."
      },
      {
        "id": "kurva-iv-fillfactor",
        "emoji": "📈",
        "title": "Kurva I-V, Fill Factor & Daya Maks",
        "body": "<p>Titik kerja panel bergerak di sepanjang kurva I-V. Daya maksimum di <strong>MPP</strong> (\\(V_{mp}, I_{mp}\\)).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Solar_cell_I-V_curve.svg\" alt=\"Kurva I-V sel surya\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Kurva I-V: \\(I_{sc}\\) (arus hubung singkat), \\(V_{oc}\\) (tegangan open), kotak MPP = \\(V_{mp}·I_{mp}\\) · sumber: Wikimedia Commons, <i>File:Solar cell I-V curve.svg</i> (CC BY-SA 4.0)</div></div>$$FF = \\frac{V_{mp}·I_{mp}}{V_{oc}·I_{sc}}, \\qquad \\eta = \\frac{V_{oc}·I_{sc}·FF}{A·G}$$<p>FF tipikal 0,75–0,82 (mono). Semakin kotak kurva, semakin baik.</p><p><strong>Animasi interaktif:</strong> geser irradiance & suhu, lihat kurva bergeser dan MPP berpindah 👇</p><div class=\"ohm-wrap\" id=\"surya-anim\"></div><div class=\"mt-tip\">💡 Bypass diode menyelamatkan string saat 1 sel ter-shading — tanpa itu, 10% bayangan bisa hilangkan 70% daya string.</div>",
        "referensi": "PV Education Ch.4 Solar Cell Parameters (IV, FF); IEC 60891 (I-V correction); gambar: Wikimedia Commons, File:Solar cell I-V curve.svg (CC BY-SA 4.0)."
      },
      {
        "id": "mppt",
        "emoji": "🎯",
        "title": "MPPT — Maximum Power Point Tracking",
        "body": "<p><strong>MPPT</strong> adalah algoritma DC-DC (Buck/Boost) yang menjaga panel di \\(V_{mp}\\) meski \\(G\\) dan \\(T\\) berubah.</p><ul><li><strong>P&O (Perturb & Observe):</strong> ubah \\(V\\) ±ΔV, cek ΔP, naik jika ΔP>0 — sederhana, osilasi kecil di MPP.</li><li><strong>IncCond:</strong> cek \\(dP/dV=0\\) via \\(dI/dV = -I/V\\) — lebih stabil.</li><li><strong>Efisiensi MPPT:</strong> 97–99% (controller bagus).</li></ul><p>Tanpa MPPT (PWM direct): panel 36V charge baterai 14V → rugi ~60%. Dengan MPPT Buck → \\(V_{mp}\\) 30V → 14V, efisiensi ~96%.</p>$$P_{out}= \\eta_{mppt}·P_{mpp}$$<div class=\"mt-warn\">⚠️ Jangan pakai controller PWM untuk panel Vmp >18V ke baterai 12V — overvoltage & rugi besar. Pakai MPPT.</div>",
        "referensi": "Esram & Chapman 2007, IEEE Trans. Energy Convers. (MPPT review); TI Application Report SLVA446 (MPPT Buck)."
      },
      {
        "id": "tilt-shading",
        "emoji": "📐",
        "title": "Tilt, Azimut & Shading",
        "body": "<p>Energi tahunan optimal bila tilt ≈ lintang lokasi (Jakarta -6° → tilt 10-15°), azimuth 0° (utara di belahan selatan). Aturan praktis Indonesia: <strong>tilt 10-15°, hadap utara</strong> (agar debu hujan tercuci).</p><table class=\"mt-table\"><thead><tr><th>Kondisi</th><th>Loss</th></tr></thead><tbody><tr><td>Shading 10% pada 1 string tanpa bypass</td><td>50–70% daya string</td></tr><tr><td>Soiling (debu 3 bulan tanpa hujan)</td><td>5–15%</td></tr><tr><td>Orientasi barat 30° dari utara</td><td>~5%</td></tr></tbody></table><p>Peak Sun Hours (PSH) Indonesia: 4–5 kWh/m²/hari (Jakarta/Bali). Rumus harian:</p>$$E_{hari}= P_{p}·PSH·PR$$<p>dengan \\(PR\\) (Performance Ratio) 0,75–0,80 (kabel, suhu, inverter).</p>",
        "referensi": "Global Solar Atlas (World Bank); SNI 6197:2020 (konservasi energi); PVWatts (NREL) tilt guide."
      },
      {
        "id": "ongrid-hybrid",
        "emoji": "🔌",
        "title": "On-Grid, Hybrid & Net-Metering",
        "body": "<p><strong>On-grid (grid-tied):</strong> panel → string inverter → meter exim → PLN. Kelebihan diekspor (Permen ESDM No.26/2021, net-metering 65% → update 2024 100% untuk pelanggan tertentu — [perlu verifikasi regulasi terkini]).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/pv-system.png\" alt=\"Sistem PLTS on-grid\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">PLTS on-grid: panel → inverter string/SMA Sunny Boy → meter dua arah → grid — tanpa baterai, termurah · sumber: Wikimedia Commons, <i>File:Photovoltaic system.jpg</i> (CC BY-SA 4.0)</div></div><ul><li><strong>Hybrid:</strong> + baterai + EMS (Energy Management System) — backup saat padam.</li><li><strong>Off-grid:</strong> wajib baterai, sizing 2-3 hari autonomy.</li><li><strong>Micro-inverter:</strong> 1 panel 1 inverter (Enphase) — anti shading string.</li></ul><div class=\"mt-tip\">💡 Untuk rumah 1300VA Indonesia, 3 kWp (≈7 panel 430W) sudah tutupi 350 kWh/bulan. Lihat modul <a href=\"#\" onclick=\"openMateri('ebt-hibrida')\">EBT Hibrida</a> untuk sizing baterai.</div>",
        "referensi": "IEC 62446 (grid-connected PV), Permen ESDM RI No.26/2021; gambar: Wikimedia Commons, File:Photovoltaic system.jpg (CC BY-SA 4.0)."
      }
    ],
    "contoh": [
      {
        "judul": "Hitung Energi Harian PLTS Atap",
        "soal": "Rumah di Surabaya PSH=4,8 jam, panel mono 10×430W=4,3kWp, PR=0,78. Berapa energi harian dan bulanan? Cukup untuk 400kWh/bulan?",
        "langkah": [
          "E_harian = 4,3kWp × 4,8h × 0,78 = 16,1 kWh/hari.",
          "E_bulanan = 16,1×30 = 483 kWh/bulan.",
          "Konsumsi 400kWh → surplus 83kWh diekspor.",
          "<strong>Jawaban:</strong> <strong>16 kWh/hari, 483 kWh/bulan — lebih dari cukup</strong>, net-metering kurangi tagihan."
        ]
      },
      {
        "judul": "Rugi Suhu Panel",
        "soal": "Panel Vmp=40V di STC 25°C, koefisien -0,35%/°C. Suhu sel 60°C di atap. Berapa Vmp aktual dan rugi daya jika arus tetap?",
        "langkah": [
          "ΔT=35°C, rugi = 35×0,35% = 12,25%.",
          "Vmp_aktual = 40×(1-0,1225)=35,1V.",
          "Jika arus tetap, daya turun ~12% — perlu MPPT tracking ulang.",
          "<strong>Jawaban:</strong> Vmp turun ke <strong>35,1V (~12% loss)</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Fill Factor (FF) dihitung dengan…",
        "opts": [
          "Voc·Isc / (Vmp·Imp)",
          "Vmp·Imp / (Voc·Isc)",
          "G·A / Pmax",
          "η·FF"
        ],
        "ans": 1,
        "exp": "FF = Vmp·Imp / (Voc·Isc), tipikal 0,75–0,82. Semakin kotak kurva I-V, FF tinggi."
      },
      {
        "q": "MPPT P&O bekerja dengan…",
        "opts": [
          "Mengubah V ±ΔV dan lihat ΔP",
          "Mengukur suhu saja",
          "Meng short panel tiap detik",
          "Menebak Vmp tetap"
        ],
        "ans": 0,
        "exp": "Perturb & Observe: ubah V sedikit, jika P naik lanjut arah sama, jika turun balik arah."
      },
      {
        "q": "Tilt optimal PLTS di Jakarta (-6° LS) adalah…",
        "opts": [
          "60° hadap selatan",
          "10–15° hadap utara",
          "0° datar total",
          "30° hadap timur"
        ],
        "ans": 1,
        "exp": "Lintang ≈6°S → tilt ≈10–15° hadap utara (belahan selatan), agar PSH max & self-cleaning hujan."
      },
      {
        "q": "Shading 10% pada 1 string tanpa bypass diode mengakibatkan…",
        "opts": [
          "Loss 10% saja",
          "Loss 50–70% daya string",
          "Tidak ada efek",
          "Loss 2% saja"
        ],
        "ans": 1,
        "exp": "Sel ter-shading jadi beban, seri string drop drastis tanpa bypass."
      },
      {
        "q": "On-grid tanpa baterai, kelebihan siang hari…",
        "opts": [
          "Dibuang panas",
          "Diekspor ke grid via meter exim",
          "Disimpan ke kapasitor",
          "Harus dimatikan"
        ],
        "ans": 1,
        "exp": "Net-metering: ekspor via meter dua arah, kredit tagihan (Permen ESDM)."
      }
    ]
  },
{
    "id": "ebt-angin",
    "emoji": "🌬️",
    "title": "PLTB — Energi Angin",
    "subtitle": "Rumus ∝ v³, Limit Betz, HAWT/VAWT, kurva daya & siting",
    "level": "Pemula",
    "durasi": "±30 menit",
    "materi": [
      "Rumus Daya Angin",
      "Limit Betz & TSR",
      "HAWT vs VAWT",
      "Kurva Daya",
      "Siting & Wake",
      "Studi Sidrap"
    ],
    "sections": [
      {
        "id": "rumus-daya-angin",
        "emoji": "🧮",
        "title": "Rumus Daya Angin — ∝ v³",
        "body": "<p>Daya kinetik angin lewat rotor:</p>$$P = \\tfrac12 \\rho A v^3 C_p, \\quad A=\\pi R^2$$<p>dengan \\(\\rho=1,225\\,\\text{kg/m³}\\) (laut), \\(v\\) kecepatan (m/s), \\(C_p\\) koefisien daya.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/wind-turbine.png\" alt=\"Turbin HAWT\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">HAWT 3 bilah — nacelle berisi gearbox & generator, yaw mengikuti angin · sumber: Wikimedia Commons, <i>File:Wind turbine.svg</i> (CC BY-SA 4.0)</div></div><p><strong>Animasi:</strong> geser kecepatan, lihat daya naik kubik 👇</p><div class=\"ohm-wrap\" id=\"angin-anim\"></div><div class=\"mt-tip\">💡 Naik dari 6 ke 8 m/s → daya naik (8/6)³=2,37× — siting di bukit pantai sangat krusial.</div>",
        "referensi": "Manwell et al., Wind Energy Explained; IEC 61400-12-1 (power curve); gambar: Wikimedia Commons, File:Wind turbine.svg (CC BY-SA 4.0)."
      },
      {
        "id": "limit-betz-tsr",
        "emoji": "📐",
        "title": "Limit Betz & Tip Speed Ratio",
        "body": "<p><strong>Limit Betz</strong> \\(C_{p,max}=16/27≈59,3\\%\\) — tidak ada turbin bisa tangkap >59% energi angin (hukum kekekalan massa & momentum, Betz 1919).</p><p>Turbin nyata \\(C_p\\) 0,35–0,45. \\(C_p\\) fungsi <strong>TSR</strong> (\\(\\lambda\\)):</p>$$\\lambda = \\frac{\\omega R}{v} = \\frac{\\text{kecepatan ujung bilah}}{\\text{kecepatan angin}}$$<p>HAWT optimal \\(\\lambda\\) 6–8, VAWT Darrieus 4–5.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Wind_turbine_power_curve.svg\" alt=\"Kurva Cp vs TSR\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Kurva \\(C_p\\) vs TSR — puncak di λ≈7 (HAWT) · sumber: Wikimedia Commons, <i>File:Wind turbine power curve.svg</i> (CC BY-SA 3.0)</div></div>",
        "referensi": "Betz limit (1919); Hansen, Aerodynamics of Wind Turbines; gambar: Wikimedia Commons, File:Wind turbine power curve.svg (CC BY-SA 3.0)."
      },
      {
        "id": "hawt-vawt",
        "emoji": "🔄",
        "title": "HAWT vs VAWT",
        "body": "<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Sumbu</th><th>Cp max</th><th>Pro/Kontra</th></tr></thead><tbody><tr><td><strong>HAWT</strong> 3 bilah</td><td>Horizontal</td><td>0,45</td><td>Efisien, butuh yaw, tinggi</td></tr><tr><td><strong>VAWT Darrieus</strong></td><td>Vertikal</td><td>0,35</td><td>Tidak butuh yaw, Cp rendah</td></tr><tr><td><strong>Savonius</strong></td><td>Vertikal drag</td><td>0,15</td><td>Self-start, untuk pompa</td></tr></tbody></table><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Darrieus_wind_turbine.svg\" alt=\"VAWT Darrieus\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">VAWT Darrieus — bilah vertikal melengkung, tidak perlu yaw · sumber: Wikimedia Commons, <i>File:Darrieus wind turbine.svg</i> (CC BY-SA 3.0)</div></div><p>Di Indonesia, HAWT dominan untuk grid (Sidrap), VAWT cocok untuk urban/micro.</p>",
        "referensi": "IEA Wind TCP; gambar: Wikimedia Commons, File:Darrieus wind turbine.svg (CC BY-SA 3.0)."
      },
      {
        "id": "kurva-daya",
        "emoji": "📈",
        "title": "Kurva Daya — Cut-in, Rated, Cut-out",
        "body": "<ul><li><strong>Cut-in</strong> ~3 m/s — mulai gerak (torque > gesek)</li><li><strong>Rated</strong> ~12 m/s — daya max (pitch control batasi)</li><li><strong>Cut-out</strong> ~25 m/s — rem untuk aman</li></ul><p>Antara cut-in & rated: \\(P ∝ v³\\). Antara rated & cut-out: \\(P\\) datar (pitch).</p><div class=\"mt-tip\">💡 Capacity Factor (CF) = energi aktual / (P_rated×8760h). Sidrap CF ~30% (angin Sulawesi avg 6 m/s).</div>",
        "referensi": "IEC 61400-12-1; PLTB Sidrap 75MW, Tolo 72MW (PT UPC)."
      },
      {
        "id": "siting-wake",
        "emoji": "🗺️",
        "title": "Siting, Wake & Roughness",
        "body": "<p>Jarak antar turbin minimal <strong>7D searah angin & 4D samping</strong> (D = diameter) untuk hindari wake loss 10–20%. Roughness laut (z0=0,0002) → angin tinggi, hutan (z0=0,8) → angin rendah.</p><p>Wind resource: Global Wind Atlas → Indonesia timur (Sidrap, Jeneponto) avg 6–7 m/s @100m.</p><div class=\"mt-warn\">⚠️ PLTB butuh AMDAL kebisingan & flicker — jarak rumah >500m untuk turbin 2MW.</div>",
        "referensi": "Global Wind Atlas (DTU/World Bank); WAsP siting guide."
      },
      {
        "id": "studi-sidrap",
        "emoji": "🏭",
        "title": "Studi Kasus: PLTB Sidrap 75 MW",
        "body": "<p>30 turbin Gamesa G114 (2,5MW, D=114m, hub 80m) di Sidrap, Sulsel — PLTB pertama Indonesia (2018).</p><ul><li>Investasi ~USD 150 juta, CF ~32%, produksi ~150 GWh/th.</li><li>Net-metering ke PLN 150kV.</li><li>Tantangan: logistik bilah 55m via jalan desa, crane 600 ton.</li></ul><div class=\"mt-tip\">💡 1 turbin 2,5MW @6 m/s → ~600kW avg → setara 500 rumah.</div>",
        "referensi": "UPC Renewables Sidrap project; ESDM Dirjen EBTKE 2018."
      }
    ],
    "contoh": [
      {
        "judul": "Hitung Daya Teoritis Rotor",
        "soal": "Rotor D=80m (R=40m), v=8 m/s, Cp=0,38, ρ=1,225. Hitung P.",
        "langkah": [
          "A=πR²=3,14×1600=5026 m².",
          "P=0,5×1,225×5026×512×0,38 (v³=512).",
          "P≈0,6125×5026×512×0,38 ≈ 598.000W ≈ 0,60MW.",
          "<strong>Jawaban:</strong> <strong>~0,6 MW</strong> (rated turbin 2MW tercapai di ~12 m/s)."
        ]
      },
      {
        "judul": "Efek Kubik Kecepatan",
        "soal": "Jika v naik dari 6 ke 9 m/s, berapa kali lipat daya?",
        "langkah": [
          "Rasio (9/6)³ = 1,5³ = 3,375.",
          "Daya naik 3,37× — siting 3 m/s lebih tinggi sangat berarti.",
          "<strong>Jawaban:</strong> <strong>3,37× lipat</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Limit Betz maksimum Cp adalah…",
        "opts": [
          "25%",
          "40%",
          "59,3%",
          "85%"
        ],
        "ans": 2,
        "exp": "16/27≈59,3% — batas teori, turbin nyata 35–45%."
      },
      {
        "q": "TSR (λ) optimal HAWT adalah…",
        "opts": [
          "1–2",
          "6–8",
          "15–20",
          "0,5"
        ],
        "ans": 1,
        "exp": "HAWT 3 bilah optimal λ 6–8, Darrieus 4–5, Savonius ~1."
      },
      {
        "q": "Cut-in speed tipikal HAWT…",
        "opts": [
          "0,5 m/s",
          "3 m/s",
          "12 m/s",
          "25 m/s"
        ],
        "ans": 1,
        "exp": "Cut-in ~3 m/s, rated ~12, cut-out ~25."
      },
      {
        "q": "Jarak minimal searah angin antar turbin…",
        "opts": [
          "2D",
          "7D",
          "1D",
          "20D"
        ],
        "ans": 1,
        "exp": "7D searah, 4D samping untuk hindari wake loss."
      },
      {
        "q": "PLTB Sidrap kapasitas…",
        "opts": [
          "10MW",
          "75MW (30×2,5MW)",
          "200MW",
          "5MW"
        ],
        "ans": 1,
        "exp": "Sidrap 75MW, 30 turbin Gamesa G114 2,5MW."
      }
    ]
  },
{
    "id": "ebt-air",
    "emoji": "💧",
    "title": "PLTA & Micro-Hydro",
    "subtitle": "Head, debit, Pelton/Francis/Kaplan, bendungan & pumped storage",
    "level": "Menengah",
    "durasi": "±35 menit",
    "materi": [
      "Rumus Hydro",
      "Jenis Turbin",
      "Bendungan & Penstock",
      "Micro-Hydro",
      "Pumped Storage",
      "Hitung Desa"
    ],
    "sections": [
      {
        "id": "rumus-hydro",
        "emoji": "🧮",
        "title": "Rumus Daya Air — P=ηρgQH",
        "body": "<p>Energi potensial air jatuh:</p>$$P = \\eta·\\rho·g·Q·H$$<p>\\(\\eta\\) 0,75–0,85 (turbin+generator), \\(\\rho\\)1000, \\(g\\)9,81.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/hydro-dam.png\" alt=\"Skema PLTA\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Skema PLTA: reservoir → penstock → turbin → generator · sumber: Wikimedia Commons, <i>File:Hydroelectric dam.svg</i> (CC BY-SA 4.0)</div></div><p><strong>Animasi:</strong> geser Q & H, lihat P & pilih turbin 👇</p><div class=\"ohm-wrap\" id=\"hydro-anim\"></div><p>Head loss: \\(h_f = f·L/D·v²/2g\\) — penstock panjang kurangi H efektif.</p>",
        "referensi": "IEC 60193 (turbin hidrolik); Chow, Open Channel Hydraulics; gambar: Wikimedia Commons, File:Hydroelectric dam.svg (CC BY-SA 4.0)."
      },
      {
        "id": "jenis-turbin-air",
        "emoji": "⚙️",
        "title": "Turbin — Pelton, Francis, Kaplan",
        "body": "<table class=\"mt-table\"><thead><tr><th>Turbin</th><th>Head</th><th>Q</th><th>Impulse/Reaction</th></tr></thead><tbody><tr><td><strong>Pelton</strong></td><td>>150m (tinggi)</td><td>Kecil</td><td>Impulse (jet)</td></tr><tr><td><strong>Francis</strong></td><td>30–300m</td><td>Sedang</td><td>Reaction</td></tr><tr><td><strong>Kaplan</strong></td><td><30m</td><td>Besar</td><td>Reaction, baling variabel</td></tr><tr><td><strong>Crossflow</strong></td><td>5–80m</td><td>Sedang</td><td>Impulse, micro-hydro murah</td></tr></tbody></table><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Pelton_wheel.svg\" alt=\"Pelton wheel\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Pelton — mangkuk ganda disembur jet · sumber: Wikimedia Commons, <i>File:Pelton wheel.svg</i> (CC BY-SA 3.0)</div></div><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Francis_turbine.svg\" alt=\"Francis turbine\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Francis — runner spiral, guide vane · sumber: Wikimedia Commons, <i>File:Francis turbine.svg</i> (CC BY-SA 3.0)</div></div>",
        "referensi": "IEC 60193; gambar: Wikimedia Commons, File:Pelton wheel.svg & File:Francis turbine.svg (CC BY-SA 3.0)."
      },
      {
        "id": "bendungan-penstock",
        "emoji": "🏞️",
        "title": "Bendungan & Penstock",
        "body": "<p>Bendungan gravity/earthfill → intake → penstock (pipa tekan) → powerhouse. Surge tank redam water hammer.</p><p>Jenis PLTA: <strong>run-of-river</strong> (tanpa reservoir besar, PLTMH) vs <strong>reservoir</strong> (Cirata 1008MW) vs <strong>pumped storage</strong> (Cisokan 1040MW UC).</p><div class=\"mt-tip\">💡 Kapasitas PLTA Indonesia ~75 GW teknis, baru 6 GW terpasang.</div>",
        "referensi": "PLN RUPTL 2021-2030; ESDM Potensi Hydro."
      },
      {
        "id": "micro-hydro",
        "emoji": "🏘️",
        "title": "Micro-Hydro (PLTMH) 5–500 kW",
        "body": "<p>Solusi desa terpencil: head 2–30m, Q 0,1–1 m³/s → 10–100 kW. Biaya LCOE Rp 800–1200/kWh, murah vs diesel.</p><p>Governor elektronik (ELC) dump load ke heater jika beban turun — jaga frekuensi 50Hz.</p><p>Contoh: Seloliman, Jawa Timur — 30kW Crossflow, head 12m, Q 0,4 → listrik 200 KK.</p>",
        "referensi": "Entec Micro-hydro guide; ESDM P3TKEBTKE."
      },
      {
        "id": "pumped-storage",
        "emoji": "🔄",
        "title": "Pumped Storage — Baterai Raksasa",
        "body": "<p>Pumped storage: pompa air ke atas saat surplus PV/angin (malam), turun saat peak. Efisiensi siklus 70–80%. Upper & lower reservoir — Cisokan (2×520MW) terbesar SE Asia.</p><p>Fungsi grid: peaker, inertia, black start — vital untuk EBT variabel.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Pumped-storage_hydroelectricity.svg\" alt=\"Pumped storage\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Pumped storage — pompa (charge) & turbin (discharge) · sumber: Wikimedia Commons, <i>File:Pumped-storage hydroelectricity.svg</i> (CC BY-SA 3.0)</div></div>",
        "referensi": "IHA Pumped Storage; PLN Cisokan project."
      },
      {
        "id": "hitung-desa",
        "emoji": "🧮",
        "title": "Hitung PLTMH Desa",
        "body": "<p>Langkah: survey Q (musim kemarau), H (GPS+altimeter), pilih turbin, tentukan \\(\\eta\\), hitung P, cek demand.</p><p>Jika P < demand → hybrid PV-hydro atau diesel backup.</p><div class=\"mt-warn\">⚠️ Q musim hujan ≠ kemarau — pakai Q90 (flow yang ada 90% waktu) agar tidak overestimate.</div>",
        "referensi": "Micro-hydropower Feasibility (RETScreen)."
      }
    ],
    "contoh": [
      {
        "judul": "Daya PLTA Cirata vs Micro",
        "soal": "Cirata H=100m, Q=1000m³/s, η=0,85. Micro H=12m, Q=0,4m³/s, η=0,70. Hitung P masing-masing.",
        "langkah": [
          "Cirata: P=0,85×1000×9,81×1000×100 = 833MW (nameplate 1008MW dengan 8 turbin, ada head loss).",
          "Micro: P=0,70×1000×9,81×0,4×12 = 33kW.",
          "<strong>Jawaban:</strong> <strong>Cirata ~833MW, micro ~33kW</strong> — 25.000× lipat."
        ]
      },
      {
        "judul": "Pilih Turbin",
        "soal": "Sungai H=80m, Q=0,8 m³/s. Turbin apa? Hitung P.",
        "langkah": [
          "Head 80m medium → Francis atau Crossflow.",
          "P=0,80×1000×9,81×0,8×80 = 502kW → Francis cocok.",
          "<strong>Jawaban:</strong> <strong>Francis 500kW</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Turbin untuk head >150m, debit kecil adalah…",
        "opts": [
          "Kaplan",
          "Francis",
          "Pelton",
          "Crossflow"
        ],
        "ans": 2,
        "exp": "Pelton impulse, high head low flow, jet mangkuk."
      },
      {
        "q": "Rumus daya hydro P=ηρgQH, jika H naik 2×, daya…",
        "opts": [
          "Tetap",
          "Naik 2×",
          "Naik 4×",
          "Naik 8×"
        ],
        "ans": 1,
        "exp": "Linear dengan H, vs angin kubik."
      },
      {
        "q": "Micro-hydro biasanya…",
        "opts": [
          "1–10 MW",
          "5–500 kW",
          "100 MW",
          "1 kW max"
        ],
        "ans": 1,
        "exp": "PLTMH 5kW–500kW untuk desa."
      },
      {
        "q": "Pumped storage efisiensi siklus…",
        "opts": [
          "30%",
          "70–80%",
          "100%",
          "10%"
        ],
        "ans": 1,
        "exp": "Pump-turbine 70–80%, untuk shift energi."
      },
      {
        "q": "PLTA terbesar Indonesia saat ini…",
        "opts": [
          "Saguling 700MW",
          "Cirata 1008MW",
          "Jatiluhur 186MW",
          "Cisokan 1040MW (UC)"
        ],
        "ans": 1,
        "exp": "Cirata 1008MW (8×126MW) terbesar operasi."
      }
    ]
  },
{
    "id": "ebt-biomassa",
    "emoji": "🌿",
    "title": "Biomassa & Biogas",
    "subtitle": "Cangkang sawit, bagase, digester, gasifikasi & PLTBM",
    "level": "Menengah",
    "durasi": "±30 menit",
    "materi": [
      "Sumber Biomassa",
      "LHV & Moisture",
      "Combustion",
      "Gasifikasi",
      "Digester Biogas",
      "PLTBM"
    ],
    "sections": [
      {
        "id": "sumber-biomassa",
        "emoji": "🌴",
        "title": "Sumber Biomassa Indonesia",
        "body": "<p>Indonesia punya 146 Mt biomassa/th (ESDM): <strong>cangkang sawit</strong> 15Mt, <strong>bagase tebu</strong> 10Mt, sekam padi 12Mt, limbah kayu, sampah organik.</p><table class=\"mt-table\"><thead><tr><th>Sumber</th><th>LHV kering</th><th>Kadar air</th></tr></thead><tbody><tr><td>Cangkang sawit</td><td>18 MJ/kg</td><td>15%</td></tr><tr><td>Bagase</td><td>14 MJ/kg</td><td>50%</td></tr><tr><td>Sekam padi</td><td>15 MJ/kg</td><td>12%</td></tr><tr><td>Kayu</td><td>19 MJ/kg</td><td>20%</td></tr></tbody></table><div class=\"mt-tip\">💡 1 ton cangkang sawit ≈ 5 MWh thermal → ~1,2 MWh listrik (efisiensi 24%).</div>",
        "referensi": "ESDM Outlook Energi Indonesia; IRENA Biomass."
      },
      {
        "id": "lhv-moisture",
        "emoji": "💧",
        "title": "LHV & Pengaruh Moisture",
        "body": "<p><strong>LHV</strong> (Lower Heating Value) turun dengan moisture:</p>$$LHV_{basah}=LHV_{kering}·(1-M)-2,44·M$$<p>\\(M\\) fraksi massa air, 2,44 MJ/kg panas laten. Bagase 50% moisture → LHV dari 19 → ~8 MJ/kg (setengah!).</p><p><strong>Animasi:</strong> geser moisture, lihat LHV & daya boiler 👇</p><div class=\"ohm-wrap\" id=\"biomassa-anim\"></div><div class=\"mt-warn\">⚠️ Biomassa >55% moisture tidak bisa self-combustion — harus pre-drying.</div>",
        "referensi": "Bhatt, Biomass Gasification; FAO Bioenergy."
      },
      {
        "id": "combustion",
        "emoji": "🔥",
        "title": "Combustion — Boiler + Steam Turbine",
        "body": "<p>Biomassa kering dibakar di <strong>grate/stoker boiler</strong> (suhu 800–900°C) → steam 40 bar 400°C → turbin → generator. Efisiensi 24–28% (kecil 5MW) sampai 32% (besar 30MW).</p><p>Emisi netral CO₂ (karbon biogenic), tapi tetap butuh ESP untuk partikel.</p>",
        "referensi": "IEA Bioenergy Task 32; PLTBM Sei Mangkei 3,5MW."
      },
      {
        "id": "gasifikasi",
        "emoji": "⚗️",
        "title": "Gasifikasi — Syngas CO+H₂",
        "body": "<p>Gasifikasi partial oxidation (700–900°C, O₂ terbatas) → <strong>syngas</strong> (CO 20%, H₂ 15%, CH₄ 3%, CO₂ 10%, N₂ sisa) dengan LHV syngas ~5 MJ/Nm³.</p><table class=\"mt-table\"><thead><tr><th>Tipe Gasifier</th><th>Scale</th><th>Tar</th></tr></thead><tbody><tr><td>Updraft</td><td>Kecil</td><td>Tinggi</td></tr><tr><td>Downdraft</td><td>10kW–1MW</td><td>Rendah</td></tr><tr><td>Fluidized bed</td><td>>1MW</td><td>Sedang</td></tr></tbody></table><p>Syngas → gas engine atau co-firing di PLTU batubara.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Gasification_process.svg\" alt=\"Proses gasifikasi\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Proses gasifikasi biomassa → syngas · sumber: Wikimedia Commons, <i>File:Gasification process.svg</i> (CC BY-SA 3.0)</div></div>",
        "referensi": "Bridgwater, Biomass Gasification Review; BTG Bioliquids."
      },
      {
        "id": "digester-biogas",
        "emoji": "♻️",
        "title": "Digester Anaerobik — Biogas CH₄",
        "body": "<p><strong>Biogas</strong> 55–65% CH₄ + 35–45% CO₂, LHV ~21 MJ/Nm³. Digester: <strong>hydrolysis → acidogenesis → acetogenesis → methanogenesis</strong> (bakteri metanogen, 35°C mesofilik, retention 20–30 hari).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Biogas_plant.svg\" alt=\"Skema digester biogas\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Skema biogas plant: inlet → digester → gas holder → genset · sumber: Wikimedia Commons, <i>File:Biogas plant.svg</i> (CC BY-SA 4.0)</div></div><p>1 ton kotoran sapi → 40 Nm³ biogas → 80 kWh listrik. Limbah cair jadi pupuk.</p>",
        "referensi": "FNR Biogas Handbook; ESDM Biogas Rumah."
      },
      {
        "id": "pltbm-sawit",
        "emoji": "🏭",
        "title": "PLTBM & Co-firing Sawit",
        "body": "<p><strong>PLTBM Sei Mangkei 3,5MW</strong> (Sumut) pakai cangkang sawit, CF 80%. Co-firing PLTU: campur 5–10% biomassa ke batubara tanpa modifikasi besar — target ESDM 2025: 10% co-firing di 52 PLTU.</p><div class=\"mt-tip\">💡 Potensi: jika 10% dari 1Mt cangkang/jam sawit dimanfaatkan → ~1,5 GW PLTBM.</div>",
        "referensi": "PTPN III Sei Mangkei; ESDM Co-firing roadmap."
      }
    ],
    "contoh": [
      {
        "judul": "Hitung Listrik dari Cangkang Sawit",
        "soal": "PKS hasilkan 10 ton cangkang/hari, LHV 18 MJ/kg, η PLTBM 25%. Berapa daya rata-rata?",
        "langkah": [
          "Energi thermal = 10.000kg×18MJ=180.000MJ/hari = 50.000kWh thermal.",
          "Listrik = 50.000×0,25=12.500kWh/hari.",
          "Daya avg = 12.500/24=520kW.",
          "<strong>Jawaban:</strong> <strong>~520kW kontinyu</strong> — cukup untuk pabrik."
        ]
      },
      {
        "judul": "Biogas Kotoran Sapi",
        "soal": "Peternakan 100 sapi, tiap sapi 20kg kotoran/hari, yield 0,04 Nm³/kg, engine η 30%. Daya?",
        "langkah": [
          "Biogas =100×20×0,04=80 Nm³/hari.",
          "Energi =80×21MJ=1680MJ=467kWh thermal.",
          "Listrik=467×0,30=140kWh/hari → 5,8kW avg.",
          "<strong>Jawaban:</strong> <strong>~5,8kW</strong> — penerangan + pompa."
        ]
      }
    ],
    "soal": [
      {
        "q": "LHV cangkang sawit kering ~18 MJ/kg, jika moisture 50% LHV basah…",
        "opts": [
          "18 MJ/kg",
          "8 MJ/kg",
          "25 MJ/kg",
          "0"
        ],
        "ans": 1,
        "exp": "LHV_basah=18×0,5 -2,44×0,5≈7,8 MJ/kg, setengah."
      },
      {
        "q": "Gasifikasi hasil utamanya…",
        "opts": [
          "CH4 murni",
          "Syngas CO+H2",
          "O2",
          "N2"
        ],
        "ans": 1,
        "exp": "Syngas CO+H2, LHV ~5 MJ/Nm3."
      },
      {
        "q": "Biogas komposisi CH4 tipikal…",
        "opts": [
          "5%",
          "30%",
          "60%",
          "95%"
        ],
        "ans": 2,
        "exp": "55–65% CH4, sisanya CO2."
      },
      {
        "q": "Gasifier tar paling rendah…",
        "opts": [
          "Updraft",
          "Downdraft",
          "Tidak ada",
          "Semua sama"
        ],
        "ans": 1,
        "exp": "Downdraft tar rendah, cocok untuk engine."
      },
      {
        "q": "Co-firing target ESDM 2025 di PLTU…",
        "opts": [
          "1%",
          "5–10%",
          "50%",
          "100%"
        ],
        "ans": 1,
        "exp": "5–10% biomassa campur batubara di 52 PLTU."
      }
    ]
  },
{
    "id": "ebt-panasbumi",
    "emoji": "🌋",
    "title": "Panas Bumi — Geothermal",
    "subtitle": "Reservoir, flash/binary, wellhead & potensi Ring of Fire",
    "level": "Menengah → Lanjut",
    "durasi": "±35 menit",
    "materi": [
      "Geologi Reservoir",
      "Flash Steam",
      "Binary ORC",
      "Wellhead & Turbin",
      "Potensi RI",
      "Scaling & Brine"
    ],
    "sections": [
      {
        "id": "geologi-reservoir",
        "emoji": "🌍",
        "title": "Geologi Reservoir — Ring of Fire",
        "body": "<p>Indonesia di Ring of Fire → heat flow 100 mW/m², reservoir 150–350°C di kedalaman 1–3 km (volkano). 3 tipe: <strong>hydrothermal</strong> (air), <strong>hot dry rock</strong> (EGS), <strong>geopressured</strong>.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Geothermal_energy.svg\" alt=\"Energi panas bumi\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Skema panas bumi: magma → reservoir → cap rock → sumur produksi · sumber: Wikimedia Commons, <i>File:Geothermal energy.svg</i> (CC BY-SA 3.0)</div></div><p>Gradient geotermal 30°C/km (normal), di vulkanik bisa 100°C/km — sumur 2km bisa 250°C.</p>",
        "referensi": "ESDM Geothermal Atlas; IGA Geothermal."
      },
      {
        "id": "flash-steam",
        "emoji": "💨",
        "title": "Flash Steam — Single & Double Flash",
        "body": "<p><strong>Single flash:</strong> brine 180–250°C dari sumur → separator (flash) → steam → turbin → kondensor → injeksi. Efisiensi ~15%.</p><p><strong>Double flash:</strong> brine sisa flash-1 di-flash lagi di tekanan lebih rendah → +20% daya.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Flash_steam_geothermal_plant.svg\" alt=\"Flash steam plant\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Flash steam: separator → turbin · sumber: Wikimedia Commons, <i>File:Flash steam geothermal plant.svg</i> (CC BY-SA 3.0)</div></div><p><strong>Animasi:</strong> slider T reservoir → pilih flash vs binary 👇</p><div class=\"ohm-wrap\" id=\"geothermal-anim\"></div>",
        "referensi": "DiPippo, Geothermal Power Plants; Kamojang 235MW single flash."
      },
      {
        "id": "binary-orc",
        "emoji": "♨️",
        "title": "Binary ORC — Suhu Rendah 100–180°C",
        "body": "<p><strong>Binary (ORC):</strong> brine panaskan fluida kerja organik (isopentane/isobutane, titik didih 30°C) via heat exchanger → turbin ORC → kondensor. Cocok untuk suhu 100–180°C, tidak ada emisi H₂S.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Binary_cycle_geothermal_plant.svg\" alt=\"Binary cycle\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Binary ORC: brine → evaporator → turbin organik → kondensor · sumber: Wikimedia Commons, <i>File:Binary cycle geothermal plant.svg</i> (CC BY-SA 3.0)</div></div><p>Dieng 55MW, Sarulla 330MW (Sumut) pakai triple flash + binary.</p>",
        "referensi": "Ormat Binary; Sarulla Operations Ltd."
      },
      {
        "id": "wellhead-turbin",
        "emoji": "⚙️",
        "title": "Wellhead & Turbin",
        "body": "<p>Wellhead: casing 20\"→7\", master valve, separator, demister, silencer. Turbin geothermal khusus: blade tahan droplet & H₂S, material 12%Cr steel, last stage titanium.</p><p>Capacity factor >90% (baseload!) vs PV 15% & wind 30% — geothermal paling stabil.</p>",
        "referensi": "Toshiba Geothermal Turbine; Mitsubishi Power."
      },
      {
        "id": "potensi-ri",
        "emoji": "🇮🇩",
        "title": "Potensi Indonesia — 29 GW",
        "body": "<p>Potensi 29 GW (40% dunia), terpasang 2,4 GW (2024) — #2 dunia setelah AS. Top: Sumatra 12GW, Jawa 9GW, Sulawesi 3GW.</p><table class=\"mt-table\"><thead><tr><th>Lapangan</th><th>Provinsi</th><th>Kapasitas</th></tr></thead><tbody><tr><td>Sarulla</td><td>Sumut</td><td>330MW</td></tr><tr><td>Kamojang</td><td>Jabar</td><td>235MW</td></tr><tr><td>Lahendong</td><td>Sulut</td><td>120MW</td></tr><tr><td>Muara Laboh</td><td>Sumbar</td><td>85MW</td></tr></tbody></table><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Ring_of_Fire_map.svg\" alt=\"Ring of Fire\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Ring of Fire — Indonesia di sabuk vulkanik · sumber: Wikimedia Commons, <i>File:Ring of Fire map.svg</i> (CC BY-SA 3.0)</div></div>",
        "referensi": "ESDM Outlook 2024; ThinkGeoEnergy ranking."
      },
      {
        "id": "scaling-brine",
        "emoji": "🧂",
        "title": "Scaling, Brine & Injeksi",
        "body": "<p>Tantangan: <strong>silica scaling</strong> (SiO₂ mengendap di pipa saat brine dingin), <strong>korosi H₂S/CO₂</strong>, dan subsidence jika tidak reinjeksi. Solusi: pH control, inhibitor, reinjeksi 100% brine (suhu injeksi >70°C agar tidak scaling).</p><div class=\"mt-warn\">⚠️ Brine tidak boleh dibuang ke sungai — TDS 10.000ppm, arsenik, boron. Wajib reinjeksi ke reservoir.</div>",
        "referensi": "Gunnarsson & Arnorsson, Geothermics (scaling)."
      }
    ],
    "contoh": [
      {
        "judul": "Hitung Daya Flash",
        "soal": "Sumur 50 kg/s brine 250°C (h=1085 kJ/kg), flash ke 0,5 MPa (h_steam=2748, h_brine=640). Hitung steam flow & daya (~turbin η 0,75, Δh turbin 600kJ/kg).",
        "langkah": [
          "Frac steam = (1085-640)/(2748-640)=445/2108=0,211.",
          "Steam =50×0,211=10,5 kg/s.",
          "P=10,5×600×0,75=4725kW≈4,7MW per sumur.",
          "<strong>Jawaban:</strong> <strong>~4,7MW/sumur</strong> — 50 sumur → 235MW Kamojang."
        ]
      }
    ],
    "soal": [
      {
        "q": "Batas suhu binary ORC vs flash adalah…",
        "opts": [
          "Sama saja",
          "Binary untuk 100–180°C, flash untuk >180°C",
          "Binary untuk >300°C",
          "Flash untuk <100°C"
        ],
        "ans": 1,
        "exp": "Binary ORC untuk low enthalpy 100–180°C, flash untuk high >180°C."
      },
      {
        "q": "Geothermal CF tipikal…",
        "opts": [
          "30%",
          "50%",
          "90%",
          "10%"
        ],
        "ans": 2,
        "exp": "Geothermal baseload CF >90%, vs PV 15%."
      },
      {
        "q": "Potensi geothermal Indonesia…",
        "opts": [
          "5 GW",
          "29 GW",
          "100 GW",
          "1 GW"
        ],
        "ans": 1,
        "exp": "29 GW (~40% dunia), terpasang 2,4GW."
      },
      {
        "q": "Double flash vs single flash…",
        "opts": [
          "Sama",
          "Double +20% daya",
          "Double -20%",
          "Double hanya untuk binary"
        ],
        "ans": 1,
        "exp": "Second flash dari brine sisa tambah ~20%."
      },
      {
        "q": "Masalah utama brine adalah…",
        "opts": [
          "Terlalu bersih",
          "Silica scaling & korosi, wajib reinjeksi",
          "Tidak ada masalah",
          "Hanya bau"
        ],
        "ans": 1,
        "exp": "Silica mengendap & H2S korosif, reinjeksi wajib."
      }
    ]
  },
{
    "id": "ebt-hibrida",
    "emoji": "🔋",
    "title": "Hibrida & Penyimpanan",
    "subtitle": "Inverter hybrid, MPPT, LiFePO4 vs VRLA, BMS & EMS",
    "level": "Lanjut",
    "durasi": "±35 menit",
    "materi": [
      "Tipe Inverter",
      "MPPT vs PWM",
      "Baterai VRLA vs LiFePO4",
      "DoD & Cycle Life",
      "BMS & EMS",
      "Desain Hybrid"
    ],
    "sections": [
      {
        "id": "tipe-inverter-hibrida",
        "emoji": "🔌",
        "title": "String, Micro & Hybrid Inverter",
        "body": "<p><strong>String:</strong> 1 inverter untuk 10–20 panel seri — murah, tapi 1 panel shading → semua drop.</p><p><strong>Micro:</strong> 1 panel 1 inverter (Enphase IQ8) — anti shading, mahal, 25th garansi.</p><p><strong>Hybrid (Deye/Growatt):</strong> PV + baterai + grid + genset dalam 1 box, mode UPS <20ms.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/solar-inverter.jpg\" alt=\"Hybrid inverter\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Hybrid inverter Deye — PV + baterai + grid + load backup · sumber: Wikimedia Commons, <i>File:SMA Sunny Boy inverter.jpg</i> (CC BY-SA 3.0) — topologi serupa</div></div><div class=\"mt-tip\">💡 Pilih hybrid jika PLN sering padam — off-grid otomatis, vs string grid-tied mati saat PLN padam (anti-islanding).</div>",
        "referensi": "IEC 62109 (inverter safety); Deye/SMA datasheet."
      },
      {
        "id": "mppt-vs-pwm",
        "emoji": "🎯",
        "title": "MPPT vs PWM — Jangan Salah Pilih",
        "body": "<table class=\"mt-table\"><thead><tr><th>Controller</th><th>Vmp vs Vbat</th><th>Efisiensi</th><th>Harga</th></tr></thead><tbody><tr><td>PWM</td><td>Vmp≈Vbat (18V→14V)</td><td>75–80%</td><td>Murah Rp500rb</td></tr><tr><td>MPPT</td><td>Vmp bebas (60V→14V)</td><td>96–99%</td><td>Mahal Rp2jt</td></tr></tbody></table><p>Aturan: jika Vmp panel >1,5×Vbat → wajib MPPT. Panel 40V ke baterai 14V dengan PWM → rugi 65%!</p>",
        "referensi": "Victron MPPT vs PWM whitepaper."
      },
      {
        "id": "baterai-comparison",
        "emoji": "🔋",
        "title": "VRLA vs LiFePO4 vs Flow",
        "body": "<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>DoD max</th><th>Cycle</th><th>Rp/kWh/cycle</th></tr></thead><tbody><tr><td>VRLA AGM</td><td>50%</td><td>500</td><td>Rp2.500</td></tr><tr><td>LiFePO4</td><td>90%</td><td>4000</td><td>Rp700</td></tr><tr><td>Flow (VRB)</td><td>100%</td><td>10.000</td><td>Rp900</td></tr></tbody></table><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Lithium_iron_phosphate_battery.svg\" alt=\"LiFePO4 cell\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Struktur LiFePO4 — cathode FePO4, anode graphite · sumber: Wikimedia Commons, <i>File:Lithium iron phosphate battery.svg</i> (CC BY-SA 3.0)</div></div><p>LiFePO4 butuh BMS (balance, cutoff 2,5V–3,65V/cell).</p>",
        "referensi": "CATL/BYD LiFePO4 datasheet; Sandia DoD vs cycle life."
      },
      {
        "id": "dod-cycle",
        "emoji": "📉",
        "title": "DoD vs Umur — Jangan Disiksa",
        "body": "<p>DoD 90% → 4000 cycle (~11 th @1 cycle/hari). DoD 100% → 2000 cycle. VRLA DoD 50% → 500 cycle (1,5 th). Rumus kasar:</p>$$Cycle = C_0·(DoD_0/DoD)^k$$<p>k≈1,2 untuk LiFePO4. Jadi DoD 50% → 4000×(0,9/0,5)^1,2≈8000 cycle.</p><p><strong>Animasi:</strong> geser DoD, lihat umur & biaya/kWh 👇</p><div class=\"ohm-wrap\" id=\"hibrida-anim\"></div><div class=\"mt-warn\">⚠️ VRLA jangan <50% SoC, LiFePO4 jangan <10% tanpa BMS — sulfation & lithium plating rusak permanen.</div>",
        "referensi": "Sandia Battery aging; datasheet cycle vs DoD."
      },
      {
        "id": "bms-ems",
        "emoji": "🧠",
        "title": "BMS & EMS — Otak Hibrida",
        "body": "<p><strong>BMS:</strong> balance cell (passive/active), cutoff, SOC via Coulomb counting + OCV, SOH, thermal.</p><p><strong>EMS:</strong> atur prioritas: 1) PV → load, 2) PV → baterai, 3) PV → grid, 4) baterai → load malam, 5) grid → baterai jika harga murah (TOU).</p><p>Komunikasi: RS485 Modbus, CAN bus (Pylontech), WiFi → ThingsBoard (lihat modul <a href=\"#\" onclick=\"openMateri('iot-platform')\">IoT Platform</a>).</p>",
        "referensi": "TI BQ76940 BMS; Deye EMS Modbus map."
      },
      {
        "id": "desain-hybrid",
        "emoji": "🏠",
        "title": "Desain Hybrid Rumah 1300VA",
        "body": "<p>Beban 400kWh/bulan → 13kWh/hari. PV 3kWp → 13kWh/hari (PSH 4,5×PR 0,78 → 10,5kWh, butuh 4kWp). Baterai untuk backup 8 jam malam (6kWh) → LiFePO4 usable 5,4kWh (DoD90%) → butuh 6kWh nominal (~2×Pylontech US2000 2,4kWh). Inverter hybrid 5kW.</p><p>LCOE hybrid ~Rp1.200/kWh vs PLN Rp1.444 → BEP 8–10 th.</p><div class=\"mt-tip\">💡 Sizing EMS: PV harus > beban siang (self-consumption 60%), baterai untuk malam, grid untuk cloudy — simulasi di HOMER atau PVSyst.</div>",
        "referensi": "HOMER Pro; PVSyst; PLN TDL 2024."
      }
    ],
    "contoh": [
      {
        "judul": "Hitung Baterai LiFePO4 untuk Backup",
        "soal": "Butuh backup 6kWh usable, LiFePO4 DoD90%, efisiensi 95%. Berapa kapasitas nominal dan modul Pylontech 2,4kWh?",
        "langkah": [
          "Nominal = 6 /0,90 /0,95 = 7,02kWh.",
          "Modul 2,4kWh → 7,02/2,4=2,92 → <strong>3 modul (7,2kWh)</strong>.",
          "Biaya ~3×Rp6jt= Rp18jt, cycle 4000 → Rp625/kWh/cycle.",
          "<strong>Jawaban:</strong> <strong>7kWh nominal, 3 modul</strong>."
        ]
      },
      {
        "judul": "Pilih MPPT vs PWM",
        "soal": "Panel Vmp 40V, baterai 12V, arus 10A. Rugi PWM vs MPPT?",
        "langkah": [
          "PWM: V forced 14V → P=14×10=140W, panel Pmax=40×10=400W → rugi 65%.",
          "MPPT: Buck ke 14V, η96% → P=400×0,96=384W.",
          "<strong>Jawaban:</strong> PWM rugi <strong>65%</strong>, MPPT hampir penuh."
        ]
      }
    ],
    "soal": [
      {
        "q": "Hybrid inverter vs string, kelebihan hybrid…",
        "opts": [
          "Lebih murah",
          "Bisa backup baterai saat PLN padam",
          "Tidak butuh MPPT",
          "Hanya untuk 1 panel"
        ],
        "ans": 1,
        "exp": "Hybrid punya charger + ATS, string grid-tied mati saat grid padam (anti-islanding)."
      },
      {
        "q": "Vmp 40V ke baterai 12V, controller yang wajib…",
        "opts": [
          "PWM",
          "MPPT",
          "Tidak perlu",
          "Dioda saja"
        ],
        "ans": 1,
        "exp": "Vmp >1,5× Vbat wajib MPPT, PWM rugi besar."
      },
      {
        "q": "LiFePO4 DoD max aman…",
        "opts": [
          "50%",
          "90%",
          "100% terus",
          "20%"
        ],
        "ans": 1,
        "exp": "LiFePO4 90% DoD, VRLA 50%, flow 100%."
      },
      {
        "q": "BMS fungsi utama…",
        "opts": [
          "Menambah kapasitas",
          "Balance & cutoff SOC/SOH",
          "Menaikkan tegangan",
          "Mendinginkan panel"
        ],
        "ans": 1,
        "exp": "BMS balance cell, cutoff over/under voltage, SOC coulomb counting."
      },
      {
        "q": "LCOE hybrid vs PLN 1444, BEP hybrid…",
        "opts": [
          "1 tahun",
          "8–10 tahun",
          "30 tahun",
          "Tidak pernah"
        ],
        "ans": 1,
        "exp": "Hybrid LCOE ~1200, BEP 8–10th dengan 4000 cycle."
      }
    ]
  },
{
    "id": "instrumentasi",
    "emoji": "🔬",
    "title": "Instrumentasi & Alat Ukur",
    "subtitle": "Cara pakai multimeter & osiloskop — ukur tegangan, arus, resistansi di rangkaian seri & paralel",
    "level": "Pemula",
    "durasi": "±35 menit",
    "materi": [
      "Multimeter",
      "Ukur Tegangan/Arus/Resistansi",
      "Osiloskop",
      "Power Supply & FG",
      "K3 Pengukuran"
    ],
    "sections": [
      {
        "id": "pengantar-alat",
        "emoji": "🔭",
        "title": "Mengenal Alat Ukur Listrik",
        "body": "<p>Tiga besaran dasar yang paling sering diukur di dunia elektro adalah <strong>tegangan \\(V\\)</strong> (volt), <strong>arus \\(I\\)</strong> (ampere), dan <strong>resistansi \\(R\\)</strong> (ohm). Ketiganya saling terkait lewat hukum Ohm \\(V = I \\times R\\), sehingga dengan mengukur dua di antaranya kita bisa menghitung yang ketiga.</p>\n<p>Alat ukur terbagi dua jenis tampilan:</p>\n<ul>\n<li><strong>Analog</strong> — membaca posisi jarum pada skala. Cocok melihat <em>tren</em> perubahan nilai, tapi rawan salah baca karena <strong>paralaks</strong> (posisi mata tidak tegak lurus skala).</li>\n<li><strong>Digital (DMM)</strong> — angka langsung tampil di layar. Lebih akurat, mudah dibaca, dan menjadi standar praktikum saat ini.</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/galvanometer.jpg\" alt=\"Galvanometer D'Arsonval\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Galvanometer D'Arsonval — nenek moyang semua alat ukur analog; jarum bergerak karena gaya elektromagnetik pada kumparan · sumber: Wikimedia Commons, Rama (CC BY-SA 2.0 fr)</div></div>\n<p>Di meja praktikum modern, tiga alat inti biasanya berjajar: <strong>osiloskop</strong>, <strong>multimeter</strong>, dan <strong>power supply DC</strong>.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/test-equipment-stack.jpg\" alt=\"Tumpukan alat ukur meja lab\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Peralatan ukur standar meja lab: osiloskop Tektronix, multimeter Fluke 45, dan power supply DC · sumber: Wikimedia Commons, Tpdwkouaa (CC BY-SA 4.0)</div></div>"
      },
      {
        "id": "multimeter",
        "emoji": "🔧",
        "title": "Multimeter Digital (DMM)",
        "body": "<p><strong>Multimeter</strong> adalah tiga alat sekaligus dalam satu bodi: <strong>voltmeter</strong> (ukur tegangan), <strong>amperemeter</strong> (ukur arus), dan <strong>ohmmeter</strong> (ukur resistansi). Sebelum memakai, kenali bagian-bagiannya:</p>\n<ul>\n<li><strong>Layar LCD</strong> — menampilkan hasil ukur beserta satuannya.</li>\n<li><strong>Rotary selector</strong> — memilih mode: \\(V\\!\\dfrac{\\;}{\\;}\\\\) (DC), \\(V\\sim\\) (AC), \\(\\Omega\\), kontinuitas, diode, mA/µA, A.</li>\n<li><strong>Jack probe</strong> — <strong>COM</strong> (selalu probe <span style=\"color:#111\">⬛ hitam</span>), <strong>VΩ</strong> (probe merah untuk tegangan/resistansi), <strong>A/mA</strong> (probe merah dipindah ke sini saat mengukur arus).</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/multimeter-dmm.jpg\" alt=\"Multimeter digital Fluke 87\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Multimeter digital Fluke 87 — perhatikan rotary selector dan tiga jack probe di bagian bawah · sumber: Wikimedia Commons, Alex P. Kok (CC BY-SA 4.0)</div></div>\n<p>Yang penting dipahami dari spesifikasi DMM:</p>\n<ul>\n<li><strong>Akurasi</strong> — misal ±(0,5% + 2 digit): error 0,5% dari hasil baca plus 2 satuan digit terakhir.</li>\n<li><strong>Resolusi</strong> — perubahan nilai terkecil yang bisa ditampilkan; DMM 3½ digit menampilkan maksimal ±1999.</li>\n<li><strong>True RMS</strong> — wajib untuk mengukur tegangan AC bentuk gelombang non-sinusoidal (misal keluaran inverter) dengan akurat.</li>\n<li><strong>Kategori keselamatan CAT</strong> — CAT II (stopkontak), CAT III (panel bangunan), CAT IV (jaringan sumber). Semakin tinggi, makin tahan lonjakan tegangan.</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/multimeter-analog.jpg\" alt=\"Multimeter analog jarum\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Multimeter analog — masih dipakai karena tahan noise & murah, tapi pembacaan skala butuh kehati-hatian · sumber: Wikimedia Commons, KENPEI (CC BY-SA 3.0)</div></div>"
      },
      {
        "id": "ukur-tegangan",
        "emoji": "⚡",
        "title": "Mengukur Tegangan (Voltmeter → Paralel)",
        "body": "<p><strong>Aturan emas:</strong> voltmeter dipasang <strong>paralel</strong> (sejajar) dengan komponen yang diukur — tanpa perlu memutus rangkaian. Alasannya: komponen paralel memiliki tegangan yang sama, jadi voltmeter \"mengintip\" tegangan komponen tersebut.</p>\n<div class=\"mt-svg-wrap\" title=\"Klik untuk memperbesar\" onclick=\"openMateriImg(this.querySelector('svg'))\">\n  <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://web.resource.org/cc/\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   width=\"491.571\"\n   height=\"190.22\"\n   id=\"svg2\"\n   sodipodi:version=\"0.32\"\n   inkscape:version=\"0.44.1\"\n   sodipodi:docname=\"series-parallel.svg\"\n   sodipodi:docbase=\"/home/estar/wikipedia\">\n  <metadata\n     id=\"metadata331\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <sodipodi:namedview\n     inkscape:window-height=\"798\"\n     inkscape:window-width=\"1278\"\n     inkscape:pageshadow=\"2\"\n     inkscape:pageopacity=\"0.0\"\n     guidetolerance=\"10.0\"\n     gridtolerance=\"10.0\"\n     objecttolerance=\"10.0\"\n     borderopacity=\"1.0\"\n     bordercolor=\"#666666\"\n     pagecolor=\"#ffffff\"\n     id=\"base\"\n     inkscape:zoom=\"1.6376067\"\n     inkscape:cx=\"245.78551\"\n     inkscape:cy=\"95.110001\"\n     inkscape:window-x=\"0\"\n     inkscape:window-y=\"0\"\n     inkscape:current-layer=\"svg2\" />\n  <defs\n     id=\"defs4\">\n    <marker\n       id=\"ArrowEnd\"\n       viewBox=\"0 0 10 10\"\n       refX=\"0\"\n       refY=\"5\"\n       markerUnits=\"strokeWidth\"\n       markerWidth=\"4\"\n       markerHeight=\"3\"\n       orient=\"auto\">\n      <path\n         d=\"M 0 0 L 10 5 L 0 10 z\"\n         id=\"path7\" />\n    </marker>\n    <marker\n       id=\"ArrowStart\"\n       viewBox=\"0 0 10 10\"\n       refX=\"10\"\n       refY=\"5\"\n       markerUnits=\"strokeWidth\"\n       markerWidth=\"4\"\n       markerHeight=\"3\"\n       orient=\"auto\">\n      <path\n         d=\"M 10 0 L 0 5 L 10 10 z\"\n         id=\"path10\" />\n    </marker>\n  </defs>\n  <g\n     id=\"g12\">\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 71.1098L 108.098 83.1098\"\n       id=\"path14\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 121.407 79.0628L 118.297 79.0628L 118.297 75.9538L 117.2 75.9538L 117.2 79.0628L 114.153 79.0628L 114.153 80.1608L 117.2 80.1608L 117.2 83.2578L 118.297 83.2578L 118.297 80.1608L 121.407 80.1608\"\n       id=\"path16\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 120.098 95.1098C 120.098 88.4848 114.727 83.1098 108.098 83.1098C 101.473 83.1098 96.0977 88.4808 96.0977 95.1098C 96.0977 101.735 101.469 107.11 108.098 107.11C 114.723 107.11 120.098 101.739 120.098 95.1098\"\n       id=\"path18\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 108.907 97.7618L 110.032 101.059L 111.59 101.059L 107.75 90.1608L 105.953 90.1608L 102.055 101.059L 103.539 101.059L 104.692 97.7618L 108.907 97.7618zM 108.516 96.5628L 105.039 96.5628L 106.836 91.6298\"\n       id=\"path20\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 119.11L 108.098 107.11\"\n       id=\"path22\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 114.086 115.462L 117.653 115.462L 117.653 114.364L 114.086 114.364L 114.086 115.462z\"\n       id=\"path24\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 141.61L 108.098 131.11\"\n       id=\"path26\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 168.61L 108.098 179.11\"\n       id=\"path28\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 141.61L 102.848 143.86L 113.348 148.36L 102.848 152.86L 113.348 157.36L 102.848 161.86L 113.348 166.36L 108.098 168.61\"\n       id=\"path30\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 21.6098L 108.098 11.1098\"\n       id=\"path32\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 48.6098L 108.098 59.1098\"\n       id=\"path34\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 21.6098L 102.848 23.8598L 113.348 28.3598L 102.848 32.8598L 113.348 37.3598L 102.848 41.8598L 113.348 46.3598L 108.098 48.6098\"\n       id=\"path36\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 157.407 139.063L 154.297 139.063L 154.297 135.954L 153.2 135.954L 153.2 139.063L 150.153 139.063L 150.153 140.161L 153.2 140.161L 153.2 143.258L 154.297 143.258L 154.297 140.161L 157.407 140.161\"\n       id=\"path38\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 156.098 155.11C 156.098 148.485 150.727 143.11 144.098 143.11C 137.473 143.11 132.098 148.481 132.098 155.11C 132.098 161.735 137.469 167.11 144.098 167.11C 150.723 167.11 156.098 161.739 156.098 155.11\"\n       id=\"path40\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 144.098 131.11L 144.098 143.11\"\n       id=\"path42\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 143.575 161.063L 147.368 150.165L 145.883 150.165L 142.856 159.383L 139.649 150.165L 138.149 150.165L 142.078 161.063\"\n       id=\"path44\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 144.098 179.11L 144.098 167.11\"\n       id=\"path46\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 150.086 175.461L 153.653 175.461L 153.653 174.364L 150.086 174.364L 150.086 175.461z\"\n       id=\"path48\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 157.407 19.0628L 154.297 19.0628L 154.297 15.9538L 153.2 15.9538L 153.2 19.0628L 150.153 19.0628L 150.153 20.1608L 153.2 20.1608L 153.2 23.2578L 154.297 23.2578L 154.297 20.1608L 157.407 20.1608\"\n       id=\"path50\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 156.098 35.1098C 156.098 28.4848 150.727 23.1098 144.098 23.1098C 137.473 23.1098 132.098 28.4808 132.098 35.1098C 132.098 41.7348 137.469 47.1098 144.098 47.1098C 150.723 47.1098 156.098 41.7388 156.098 35.1098\"\n       id=\"path52\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 144.098 11.1098L 144.098 23.1098\"\n       id=\"path54\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 143.575 41.0628L 147.368 30.1648L 145.883 30.1648L 142.856 39.3828L 139.649 30.1648L 138.149 30.1648L 142.078 41.0628\"\n       id=\"path56\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 144.098 59.1098L 144.098 47.1098\"\n       id=\"path58\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 150.086 55.4618L 153.653 55.4618L 153.653 54.3638L 150.086 54.3638L 150.086 55.4618z\"\n       id=\"path60\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 119.11L 108.098 131.11\"\n       id=\"path62\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 59.1098L 108.098 71.1098\"\n       id=\"path64\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 65.1098L 144.098 65.1098L 144.098 59.1098\"\n       id=\"path66\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 5.10983L 108.098 11.1098\"\n       id=\"path68\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 125.11L 144.098 125.11L 144.098 131.11\"\n       id=\"path70\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 108.098 179.11L 108.098 185.11\"\n       id=\"path72\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 66.7387 30.4618L 61.2457 30.4618L 60.4527 36.2148L 61.6567 36.2148C 62.2657 35.5078 62.7697 35.2618 63.5897 35.2618C 64.9997 35.2618 65.8947 36.2148 65.8947 37.7548C 65.8947 39.2468 65.0197 40.1568 63.5897 40.1568C 62.4457 40.1568 61.7457 39.5978 61.4337 38.4498L 60.1247 38.4498C 60.3047 39.3048 60.4527 39.7188 60.7697 40.1018C 61.3677 40.8988 62.4497 41.3558 63.6487 41.3558C 65.7927 41.3558 67.2927 39.8088 67.2927 37.5748C 67.2927 35.4888 65.8987 34.0588 63.8557 34.0588C 63.1057 34.0588 62.5077 34.2508 61.8907 34.6958L 62.3087 31.7578L 66.7347 31.7578\"\n       id=\"path74\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 71.9957 30.4618C 71.0037 30.4618 70.0977 30.9068 69.5387 31.6608C 68.8477 32.5788 68.4997 33.9888 68.4997 35.9298C 68.4997 39.4728 69.7027 41.3558 71.9997 41.3558C 74.2617 41.3558 75.4997 39.4728 75.4997 36.0198C 75.4997 33.9768 75.1677 32.6098 74.4567 31.6608C 73.9027 30.8948 73.0117 30.4618 71.9997 30.4618L 71.9957 30.4618zM 71.9957 31.6608C 73.3987 31.6608 74.0937 33.0788 74.0937 35.8908C 74.0937 38.8638 73.4137 40.2548 71.9647 40.2548C 70.5897 40.2548 69.8987 38.8048 69.8987 35.9338C 69.8987 33.0668 70.5897 31.6568 71.9957 31.6568\"\n       id=\"path76\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 80.3947 30.4618C 79.4027 30.4618 78.4957 30.9068 77.9377 31.6608C 77.2457 32.5788 76.8987 33.9888 76.8987 35.9298C 76.8987 39.4728 78.1017 41.3558 80.3987 41.3558C 82.6597 41.3558 83.8987 39.4728 83.8987 36.0198C 83.8987 33.9768 83.5667 32.6098 82.8557 31.6608C 82.3007 30.8948 81.4097 30.4618 80.3987 30.4618L 80.3947 30.4618zM 80.3947 31.6608C 81.7967 31.6608 82.4927 33.0788 82.4927 35.8908C 82.4927 38.8638 81.8127 40.2548 80.3637 40.2548C 78.9887 40.2548 78.2967 38.8048 78.2967 35.9338C 78.2967 33.0668 78.9887 31.6568 80.3947 31.6568\"\n       id=\"path78\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 89.4847 41.0628L 89.2147 38.7468C 88.0467 38.0898 87.2967 36.7578 87.2967 35.3558C 87.2967 34.5788 87.5197 33.6998 87.9067 32.9968C 88.4417 32.0278 89.3317 31.4728 90.3437 31.4728C 91.3517 31.4728 92.2457 32.0238 92.7817 32.9968C 93.1677 33.6958 93.3907 34.5788 93.3907 35.3558C 93.3907 36.7578 92.6597 38.0898 91.5157 38.7468L 91.2537 41.0628L 95.6327 41.0628L 95.6327 38.7698L 95.2737 38.7698C 95.1717 39.3948 94.8397 39.6648 94.2427 39.6648L 92.0547 39.6648L 92.0977 39.0978C 92.6177 38.9068 92.9257 38.7578 93.2857 38.5318C 94.4137 37.8008 95.0937 36.5938 95.0937 35.3088C 95.0937 34.3248 94.6597 33.2188 93.9417 32.3828C 93.0317 31.3398 91.7697 30.7698 90.3477 30.7698C 88.9257 30.7698 87.6677 31.3368 86.7537 32.3828C 86.0357 33.2188 85.6017 34.3208 85.6017 35.3088C 85.6017 36.5898 86.2927 37.8008 87.4417 38.5318C 87.7857 38.7548 88.1017 38.9028 88.6447 39.0978L 88.6877 39.6648L 86.4997 39.6648C 85.9027 39.6648 85.5707 39.3948 85.4687 38.7698L 85.1097 38.7698L 85.1097 41.0628\"\n       id=\"path80\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 166.598 158.563L 166.598 161.063L 167.895 161.063L 167.895 158.563L 169.493 158.563L 169.493 157.364L 167.895 157.364L 167.895 150.465L 166.926 150.465L 162.118 157.165L 162.118 158.559L 166.598 158.563zM 166.598 157.36L 163.274 157.36L 166.598 152.676\"\n       id=\"path82\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 171.297 161.063L 172.895 161.063L 172.895 159.465L 171.297 159.465L 171.297 161.063z\"\n       id=\"path84\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 181.34 150.462L 175.848 150.462L 175.055 156.215L 176.258 156.215C 176.868 155.508 177.371 155.262 178.192 155.262C 179.602 155.262 180.496 156.215 180.496 157.755C 180.496 159.247 179.621 160.157 178.192 160.157C 177.047 160.157 176.348 159.598 176.036 158.45L 174.727 158.45C 174.907 159.305 175.055 159.719 175.371 160.102C 175.969 160.899 177.051 161.356 178.25 161.356C 180.395 161.356 181.895 159.809 181.895 157.575C 181.895 155.489 180.5 154.059 178.457 154.059C 177.707 154.059 177.11 154.251 176.493 154.696L 176.91 151.758L 181.336 151.758\"\n       id=\"path86\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 188.375 161.063L 192.168 150.165L 190.684 150.165L 187.657 159.383L 184.45 150.165L 182.95 150.165L 186.879 161.063\"\n       id=\"path88\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 166.598 38.5628L 166.598 41.0628L 167.895 41.0628L 167.895 38.5628L 169.493 38.5628L 169.493 37.3638L 167.895 37.3638L 167.895 30.4648L 166.926 30.4648L 162.118 37.1648L 162.118 38.5588L 166.598 38.5628zM 166.598 37.3598L 163.274 37.3598L 166.598 32.6758\"\n       id=\"path90\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 171.297 41.0628L 172.895 41.0628L 172.895 39.4648L 171.297 39.4648L 171.297 41.0628z\"\n       id=\"path92\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 181.34 30.4618L 175.848 30.4618L 175.055 36.2148L 176.258 36.2148C 176.868 35.5078 177.371 35.2618 178.192 35.2618C 179.602 35.2618 180.496 36.2148 180.496 37.7548C 180.496 39.2468 179.621 40.1568 178.192 40.1568C 177.047 40.1568 176.348 39.5978 176.036 38.4498L 174.727 38.4498C 174.907 39.3048 175.055 39.7188 175.371 40.1018C 175.969 40.8988 177.051 41.3558 178.25 41.3558C 180.395 41.3558 181.895 39.8088 181.895 37.5748C 181.895 35.4888 180.5 34.0588 178.457 34.0588C 177.707 34.0588 177.11 34.2508 176.493 34.6958L 176.91 31.7578L 181.336 31.7578\"\n       id=\"path94\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 188.375 41.0628L 192.168 30.1648L 190.684 30.1648L 187.657 39.3828L 184.45 30.1648L 182.95 30.1648L 186.879 41.0628\"\n       id=\"path96\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 66.7387 150.462L 61.2457 150.462L 60.4527 156.215L 61.6567 156.215C 62.2657 155.508 62.7697 155.262 63.5897 155.262C 64.9997 155.262 65.8947 156.215 65.8947 157.755C 65.8947 159.247 65.0197 160.157 63.5897 160.157C 62.4457 160.157 61.7457 159.598 61.4337 158.45L 60.1247 158.45C 60.3047 159.305 60.4527 159.719 60.7697 160.102C 61.3677 160.899 62.4497 161.356 63.6487 161.356C 65.7927 161.356 67.2927 159.809 67.2927 157.575C 67.2927 155.489 65.8987 154.059 63.8557 154.059C 63.1057 154.059 62.5077 154.251 61.8907 154.696L 62.3087 151.758L 66.7347 151.758\"\n       id=\"path98\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 71.9957 150.462C 71.0037 150.462 70.0977 150.907 69.5387 151.661C 68.8477 152.579 68.4997 153.989 68.4997 155.93C 68.4997 159.473 69.7027 161.356 71.9997 161.356C 74.2617 161.356 75.4997 159.473 75.4997 156.02C 75.4997 153.977 75.1677 152.61 74.4567 151.661C 73.9027 150.895 73.0117 150.462 71.9997 150.462L 71.9957 150.462zM 71.9957 151.661C 73.3987 151.661 74.0937 153.079 74.0937 155.891C 74.0937 158.864 73.4137 160.254 71.9647 160.254C 70.5897 160.254 69.8987 158.805 69.8987 155.934C 69.8987 153.067 70.5897 151.657 71.9957 151.657\"\n       id=\"path100\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 80.3947 150.462C 79.4027 150.462 78.4957 150.907 77.9377 151.661C 77.2457 152.579 76.8987 153.989 76.8987 155.93C 76.8987 159.473 78.1017 161.356 80.3987 161.356C 82.6597 161.356 83.8987 159.473 83.8987 156.02C 83.8987 153.977 83.5667 152.61 82.8557 151.661C 82.3007 150.895 81.4097 150.462 80.3987 150.462L 80.3947 150.462zM 80.3947 151.661C 81.7967 151.661 82.4927 153.079 82.4927 155.891C 82.4927 158.864 81.8127 160.254 80.3637 160.254C 78.9887 160.254 78.2967 158.805 78.2967 155.934C 78.2967 153.067 78.9887 151.657 80.3947 151.657\"\n       id=\"path102\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 89.4847 161.063L 89.2147 158.747C 88.0467 158.09 87.2967 156.758 87.2967 155.356C 87.2967 154.579 87.5197 153.7 87.9067 152.997C 88.4417 152.028 89.3317 151.473 90.3437 151.473C 91.3517 151.473 92.2457 152.024 92.7817 152.997C 93.1677 153.696 93.3907 154.579 93.3907 155.356C 93.3907 156.758 92.6597 158.09 91.5157 158.747L 91.2537 161.063L 95.6327 161.063L 95.6327 158.77L 95.2737 158.77C 95.1717 159.395 94.8397 159.665 94.2427 159.665L 92.0547 159.665L 92.0977 159.098C 92.6177 158.907 92.9257 158.758 93.2857 158.532C 94.4137 157.801 95.0937 156.594 95.0937 155.309C 95.0937 154.325 94.6597 153.219 93.9417 152.383C 93.0317 151.34 91.7697 150.77 90.3477 150.77C 88.9257 150.77 87.6677 151.337 86.7537 152.383C 86.0357 153.219 85.6017 154.321 85.6017 155.309C 85.6017 156.59 86.2927 157.801 87.4417 158.532C 87.7857 158.755 88.1017 158.903 88.6447 159.098L 88.6877 159.665L 86.4997 159.665C 85.9027 159.665 85.5707 159.395 85.4687 158.77L 85.1097 158.77L 85.1097 161.063\"\n       id=\"path104\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 110.348 185.11C 110.348 183.868 109.344 182.86 108.098 182.86C 106.856 182.86 105.848 183.864 105.848 185.11C 105.848 186.352 106.852 187.36 108.098 187.36C 109.34 187.36 110.348 186.356 110.348 185.11\"\n       id=\"path106\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 110.348 125.11C 110.348 123.868 109.344 122.86 108.098 122.86C 106.856 122.86 105.848 123.864 105.848 125.11C 105.848 126.352 106.852 127.36 108.098 127.36C 109.34 127.36 110.348 126.356 110.348 125.11\"\n       id=\"path108\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 110.348 65.1098C 110.348 63.8678 109.344 62.8598 108.098 62.8598C 106.856 62.8598 105.848 63.8638 105.848 65.1098C 105.848 66.3518 106.852 67.3598 108.098 67.3598C 109.34 67.3598 110.348 66.3558 110.348 65.1098\"\n       id=\"path110\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 110.348 5.10983C 110.348 3.86783 109.344 2.85983 108.098 2.85983C 106.856 2.85983 105.848 3.86383 105.848 5.10983C 105.848 6.35184 106.852 7.35983 108.098 7.35983C 109.34 7.35983 110.348 6.35583 110.348 5.10983\"\n       id=\"path112\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 216.098 83.1098L 240.098 83.1098\"\n       id=\"path114\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 228.098 83.1098L 228.098 95.1098\"\n       id=\"path116\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 222.098 75.6098L 234.098 75.6098\"\n       id=\"path118\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 222.098 60.6098L 234.098 60.6098\"\n       id=\"path120\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 216.098 68.1098L 240.098 68.1098\"\n       id=\"path122\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 228.098 60.6098L 228.098 47.1098\"\n       id=\"path124\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 228.098 143.11L 228.098 131.11\"\n       id=\"path126\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 222.106 134.262L 218.996 134.262L 218.996 131.153L 217.899 131.153L 217.899 134.262L 214.852 134.262L 214.852 135.36L 217.899 135.36L 217.899 138.458L 218.996 138.458L 218.996 135.36L 222.106 135.36\"\n       id=\"path128\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 216.098 119.11C 216.098 125.735 221.469 131.11 228.098 131.11C 234.723 131.11 240.098 125.739 240.098 119.11C 240.098 112.485 234.727 107.11 228.098 107.11C 221.473 107.11 216.098 112.481 216.098 119.11\"\n       id=\"path130\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 231.407 120.762L 232.532 124.059L 234.09 124.059L 230.25 113.161L 228.453 113.161L 224.555 124.059L 226.039 124.059L 227.192 120.762L 231.407 120.762zM 231.016 119.563L 227.539 119.563L 229.336 114.63\"\n       id=\"path132\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 228.098 95.1098L 228.098 107.11\"\n       id=\"path134\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 218.485 96.2618L 222.051 96.2618L 222.051 95.1648L 218.485 95.1648L 218.485 96.2618z\"\n       id=\"path136\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 117.61L 288.098 107.11\"\n       id=\"path138\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 144.61L 288.098 155.11\"\n       id=\"path140\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 117.61L 282.848 119.86L 293.348 124.36L 282.848 128.86L 293.348 133.36L 282.848 137.86L 293.348 142.36L 288.098 144.61\"\n       id=\"path142\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 11.1098L 288.098 23.1098\"\n       id=\"path144\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 301.407 19.0628L 298.297 19.0628L 298.297 15.9538L 297.2 15.9538L 297.2 19.0628L 294.153 19.0628L 294.153 20.1608L 297.2 20.1608L 297.2 23.2578L 298.297 23.2578L 298.297 20.1608L 301.407 20.1608\"\n       id=\"path146\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 300.098 35.1098C 300.098 28.4848 294.727 23.1098 288.098 23.1098C 281.473 23.1098 276.098 28.4808 276.098 35.1098C 276.098 41.7348 281.469 47.1098 288.098 47.1098C 294.723 47.1098 300.098 41.7388 300.098 35.1098\"\n       id=\"path148\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 288.907 37.7618L 290.032 41.0588L 291.59 41.0588L 287.75 30.1608L 285.953 30.1608L 282.055 41.0588L 283.539 41.0588L 284.692 37.7618L 288.907 37.7618zM 288.516 36.5628L 285.039 36.5628L 286.836 31.6298\"\n       id=\"path150\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 59.1098L 288.098 47.1098\"\n       id=\"path152\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 294.086 55.4618L 297.653 55.4618L 297.653 54.3638L 294.086 54.3638L 294.086 55.4618z\"\n       id=\"path154\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 337.407 115.063L 334.297 115.063L 334.297 111.954L 333.2 111.954L 333.2 115.063L 330.153 115.063L 330.153 116.161L 333.2 116.161L 333.2 119.258L 334.297 119.258L 334.297 116.161L 337.407 116.161\"\n       id=\"path156\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 336.098 131.11C 336.098 124.485 330.727 119.11 324.098 119.11C 317.473 119.11 312.098 124.481 312.098 131.11C 312.098 137.735 317.469 143.11 324.098 143.11C 330.723 143.11 336.098 137.739 336.098 131.11\"\n       id=\"path158\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 324.098 107.11L 324.098 119.11\"\n       id=\"path160\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 323.575 137.063L 327.368 126.165L 325.883 126.165L 322.856 135.383L 319.649 126.165L 318.149 126.165L 322.078 137.063\"\n       id=\"path162\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 324.098 155.11L 324.098 143.11\"\n       id=\"path164\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 330.086 151.462L 333.653 151.462L 333.653 150.364L 330.086 150.364L 330.086 151.462z\"\n       id=\"path166\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 155.11L 288.098 161.11L 324.098 161.11L 324.098 155.11\"\n       id=\"path168\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 107.11L 288.098 101.11L 324.098 101.11L 324.098 107.11\"\n       id=\"path170\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 59.1098L 288.098 101.11\"\n       id=\"path172\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 290.348 161.11C 290.348 159.868 289.344 158.86 288.098 158.86C 286.856 158.86 285.848 159.864 285.848 161.11C 285.848 162.352 286.852 163.36 288.098 163.36C 289.34 163.36 290.348 162.356 290.348 161.11\"\n       id=\"path174\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 290.348 101.11C 290.348 99.8678 289.344 98.8598 288.098 98.8598C 286.856 98.8598 285.848 99.8638 285.848 101.11C 285.848 102.352 286.852 103.36 288.098 103.36C 289.34 103.36 290.348 102.356 290.348 101.11\"\n       id=\"path176\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 161.11L 288.098 185.11\"\n       id=\"path178\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 288.098 11.1098L 288.098 5.10983\"\n       id=\"path180\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 246.739 126.462L 241.246 126.462L 240.453 132.215L 241.657 132.215C 242.266 131.508 242.77 131.262 243.59 131.262C 245 131.262 245.895 132.215 245.895 133.755C 245.895 135.247 245.02 136.157 243.59 136.157C 242.446 136.157 241.746 135.598 241.434 134.45L 240.125 134.45C 240.305 135.305 240.453 135.719 240.77 136.102C 241.368 136.899 242.45 137.356 243.649 137.356C 245.793 137.356 247.293 135.809 247.293 133.575C 247.293 131.489 245.899 130.059 243.856 130.059C 243.106 130.059 242.508 130.251 241.891 130.696L 242.309 127.758L 246.735 127.758\"\n       id=\"path182\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 251.996 126.462C 251.004 126.462 250.098 126.907 249.539 127.661C 248.848 128.579 248.5 129.989 248.5 131.93C 248.5 135.473 249.703 137.356 252 137.356C 254.262 137.356 255.5 135.473 255.5 132.02C 255.5 129.977 255.168 128.61 254.457 127.661C 253.903 126.895 253.012 126.462 252 126.462L 251.996 126.462zM 251.996 127.661C 253.399 127.661 254.094 129.079 254.094 131.891C 254.094 134.864 253.414 136.255 251.965 136.255C 250.59 136.255 249.899 134.805 249.899 131.934C 249.899 129.067 250.59 127.657 251.996 127.657\"\n       id=\"path184\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 260.395 126.462C 259.403 126.462 258.496 126.907 257.938 127.661C 257.246 128.579 256.899 129.989 256.899 131.93C 256.899 135.473 258.102 137.356 260.399 137.356C 262.66 137.356 263.899 135.473 263.899 132.02C 263.899 129.977 263.567 128.61 262.856 127.661C 262.301 126.895 261.41 126.462 260.399 126.462L 260.395 126.462zM 260.395 127.661C 261.797 127.661 262.493 129.079 262.493 131.891C 262.493 134.864 261.813 136.255 260.364 136.255C 258.989 136.255 258.297 134.805 258.297 131.934C 258.297 129.067 258.989 127.657 260.395 127.657\"\n       id=\"path186\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 269.485 137.063L 269.215 134.747C 268.047 134.09 267.297 132.758 267.297 131.356C 267.297 130.579 267.52 129.7 267.907 128.997C 268.442 128.028 269.332 127.473 270.344 127.473C 271.352 127.473 272.246 128.024 272.782 128.997C 273.168 129.696 273.391 130.579 273.391 131.356C 273.391 132.758 272.66 134.09 271.516 134.747L 271.254 137.063L 275.633 137.063L 275.633 134.77L 275.274 134.77C 275.172 135.395 274.84 135.665 274.243 135.665L 272.055 135.665L 272.098 135.098C 272.618 134.907 272.926 134.758 273.286 134.532C 274.414 133.801 275.094 132.594 275.094 131.309C 275.094 130.325 274.66 129.219 273.942 128.383C 273.032 127.34 271.77 126.77 270.348 126.77C 268.926 126.77 267.668 127.337 266.754 128.383C 266.036 129.219 265.602 130.321 265.602 131.309C 265.602 132.59 266.293 133.801 267.442 134.532C 267.786 134.755 268.102 134.903 268.645 135.098L 268.688 135.665L 266.5 135.665C 265.903 135.665 265.571 135.395 265.469 134.77L 265.11 134.77L 265.11 137.063\"\n       id=\"path188\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 186.289 74.6328C 186.543 76.3438 187.676 77.3598 189.289 77.3598C 190.45 77.3598 191.512 76.7978 192.125 75.8558C 192.793 74.8328 193.094 73.5358 193.094 71.6138C 193.094 69.8438 192.825 68.7118 192.192 67.7738C 191.606 66.9258 190.672 66.4648 189.496 66.4648C 187.465 66.4648 186 67.9498 186 70.0198C 186 71.9808 187.348 73.3638 189.27 73.3638C 190.274 73.3638 191.008 73.0008 191.7 72.1648C 191.684 74.7348 190.856 76.1648 189.36 76.1648C 188.442 76.1648 187.805 75.6098 187.598 74.6368L 186.289 74.6328zM 189.52 67.6608C 190.754 67.6608 191.688 68.6488 191.688 69.9888C 191.688 71.2548 190.77 72.1568 189.473 72.1568C 188.196 72.1568 187.395 71.3008 187.395 69.9188C 187.395 68.6098 188.297 67.6608 189.516 67.6608\"\n       id=\"path190\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 199.778 77.0628L 203.571 66.1648L 202.086 66.1648L 199.059 75.3828L 195.852 66.1648L 194.352 66.1648L 198.282 77.0628\"\n       id=\"path192\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 126.289 98.6328C 126.543 100.344 127.676 101.36 129.289 101.36C 130.45 101.36 131.512 100.798 132.125 99.8558C 132.793 98.8328 133.094 97.5358 133.094 95.6138C 133.094 93.8438 132.825 92.7118 132.192 91.7738C 131.606 90.9258 130.672 90.4648 129.496 90.4648C 127.465 90.4648 126 91.9498 126 94.0198C 126 95.9808 127.348 97.3638 129.27 97.3638C 130.274 97.3638 131.008 97.0008 131.7 96.1648C 131.684 98.7348 130.856 100.165 129.36 100.165C 128.442 100.165 127.805 99.6098 127.598 98.6368L 126.289 98.6328zM 129.52 91.6608C 130.754 91.6608 131.688 92.6488 131.688 93.9888C 131.688 95.2548 130.77 96.1568 129.473 96.1568C 128.196 96.1568 127.395 95.3008 127.395 93.9188C 127.395 92.6098 128.297 91.6608 129.516 91.6608\"\n       id=\"path194\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 134.996 93.1608L 134.996 101.059L 136.196 101.059L 136.196 96.1218C 136.196 94.9808 137.02 94.0628 138.039 94.0628C 138.969 94.0628 139.493 94.6328 139.493 95.6408L 139.493 101.059L 140.692 101.059L 140.692 96.1218C 140.692 94.9808 141.539 94.0628 142.59 94.0628C 143.532 94.0628 144.09 94.6488 144.09 95.6408L 144.09 101.059L 145.289 101.059L 145.289 95.1568C 145.289 93.7468 144.485 92.9648 143.028 92.9648C 141.989 92.9648 141.364 93.2818 140.633 94.1798C 140.172 93.3328 139.547 92.9648 138.536 92.9648C 137.496 92.9648 136.809 93.3598 136.141 94.3128L 136.141 93.1648\"\n       id=\"path196\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 153.504 97.7618L 154.629 101.059L 156.188 101.059L 152.348 90.1608L 150.551 90.1608L 146.653 101.059L 148.137 101.059L 149.289 97.7618L 153.504 97.7618zM 153.118 96.5628L 149.641 96.5628L 151.438 91.6298\"\n       id=\"path198\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 342.289 134.633C 342.543 136.344 343.676 137.36 345.289 137.36C 346.45 137.36 347.512 136.798 348.125 135.856C 348.793 134.833 349.094 133.536 349.094 131.614C 349.094 129.844 348.825 128.712 348.192 127.774C 347.606 126.926 346.672 126.465 345.496 126.465C 343.465 126.465 342 127.95 342 130.02C 342 131.981 343.348 133.364 345.27 133.364C 346.274 133.364 347.008 133.001 347.7 132.165C 347.684 134.735 346.856 136.165 345.36 136.165C 344.442 136.165 343.805 135.61 343.598 134.637L 342.289 134.633zM 345.52 127.661C 346.754 127.661 347.688 128.649 347.688 129.989C 347.688 131.255 346.77 132.157 345.473 132.157C 344.196 132.157 343.395 131.301 343.395 129.919C 343.395 128.61 344.297 127.661 345.516 127.661\"\n       id=\"path200\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 355.778 137.063L 359.571 126.165L 358.086 126.165L 355.059 135.383L 351.852 126.165L 350.352 126.165L 354.282 137.063\"\n       id=\"path202\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 308.496 33.5118L 308.496 41.0588L 309.793 41.0588L 309.793 30.4618L 308.926 30.4618C 308.465 32.0898 308.164 32.3128 306.125 32.5668L 306.125 33.5078\"\n       id=\"path204\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 318.762 35.4648C 319.84 34.8128 320.196 34.2778 320.196 33.2778C 320.196 31.6258 318.891 30.4648 316.996 30.4648C 315.121 30.4648 313.797 31.6258 313.797 33.2778C 313.797 34.2578 314.164 34.7938 315.266 35.4648C 314.016 36.0438 313.399 36.9218 313.399 38.0828C 313.399 40.0158 314.879 41.3558 316.996 41.3558C 319.114 41.3558 320.594 40.0158 320.594 38.0978C 320.594 36.9218 319.993 36.0438 318.762 35.4648zM 316.996 31.6608C 318.094 31.6608 318.797 32.3088 318.797 33.3328C 318.797 34.3088 318.082 34.9578 316.996 34.9578C 315.914 34.9578 315.2 34.3088 315.2 33.3168C 315.2 32.3128 315.914 31.6608 316.996 31.6608zM 316.996 36.0628C 318.301 36.0628 319.196 36.8828 319.196 38.1058C 319.196 39.3368 318.305 40.1608 316.969 40.1608C 315.692 40.1608 314.801 39.3248 314.801 38.1058C 314.801 36.8868 315.692 36.0628 316.996 36.0628\"\n       id=\"path206\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 322.395 33.1608L 322.395 41.0588L 323.594 41.0588L 323.594 36.1218C 323.594 34.9808 324.418 34.0628 325.438 34.0628C 326.368 34.0628 326.891 34.6328 326.891 35.6408L 326.891 41.0588L 328.09 41.0588L 328.09 36.1218C 328.09 34.9808 328.938 34.0628 329.989 34.0628C 330.93 34.0628 331.489 34.6488 331.489 35.6408L 331.489 41.0588L 332.688 41.0588L 332.688 35.1568C 332.688 33.7468 331.883 32.9648 330.426 32.9648C 329.387 32.9648 328.762 33.2818 328.032 34.1798C 327.571 33.3328 326.946 32.9648 325.934 32.9648C 324.895 32.9648 324.207 33.3598 323.539 34.3128L 323.539 33.1648\"\n       id=\"path208\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 340.805 37.7618L 341.93 41.0588L 343.489 41.0588L 339.649 30.1608L 337.852 30.1608L 333.953 41.0588L 335.438 41.0588L 336.59 37.7618L 340.805 37.7618zM 340.414 36.5628L 336.938 36.5628L 338.735 31.6298\"\n       id=\"path210\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 144.098 179.11L 144.098 185.11L 48.0977 185.11L 48.0977 143.11\"\n       id=\"path212\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 48.0977 47.1098L 48.0977 5.10983L 144.098 5.10983L 144.098 11.1098\"\n       id=\"path214\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 36.0977 83.1098L 60.0977 83.1098\"\n       id=\"path216\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 48.0977 83.1098L 48.0977 95.1098\"\n       id=\"path218\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 42.0977 75.6098L 54.0977 75.6098\"\n       id=\"path220\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 42.0977 60.6098L 54.0977 60.6098\"\n       id=\"path222\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 36.0977 68.1098L 60.0977 68.1098\"\n       id=\"path224\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 48.0977 60.6098L 48.0977 47.1098\"\n       id=\"path226\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 48.0977 143.11L 48.0977 131.11\"\n       id=\"path228\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 42.1057 134.262L 38.9957 134.262L 38.9957 131.153L 37.8987 131.153L 37.8987 134.262L 34.8517 134.262L 34.8517 135.36L 37.8987 135.36L 37.8987 138.458L 38.9957 138.458L 38.9957 135.36L 42.1057 135.36\"\n       id=\"path230\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 36.0977 119.11C 36.0977 125.735 41.4687 131.11 48.0977 131.11C 54.7227 131.11 60.0977 125.739 60.0977 119.11C 60.0977 112.485 54.7267 107.11 48.0977 107.11C 41.4727 107.11 36.0977 112.481 36.0977 119.11\"\n       id=\"path232\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 51.4067 120.762L 52.5317 124.059L 54.0897 124.059L 50.2497 113.161L 48.4527 113.161L 44.5547 124.059L 46.0387 124.059L 47.1917 120.762L 51.4067 120.762zM 51.0157 119.563L 47.5387 119.563L 49.3357 114.63\"\n       id=\"path234\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 48.0977 95.1098L 48.0977 107.11\"\n       id=\"path236\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 38.4847 96.2618L 42.0507 96.2618L 42.0507 95.1648L 38.4847 95.1648L 38.4847 96.2618z\"\n       id=\"path238\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 6.2891 74.6328C 6.543 76.3438 7.6758 77.3598 9.2891 77.3598C 10.4493 77.3598 11.5118 76.7978 12.125 75.8558C 12.793 74.8328 13.0938 73.5358 13.0938 71.6138C 13.0938 69.8438 12.8243 68.7118 12.1915 67.7738C 11.6055 66.9258 10.6719 66.4648 9.4961 66.4648C 7.4649 66.4648 6 67.9498 6 70.0198C 6 71.9808 7.3477 73.3638 9.2696 73.3638C 10.2735 73.3638 11.0079 73.0008 11.6993 72.1648C 11.6836 74.7348 10.8555 76.1648 9.35941 76.1648C 8.44151 76.1648 7.8047 75.6098 7.5977 74.6368L 6.2891 74.6328zM 9.5196 67.6608C 10.7539 67.6608 11.6875 68.6488 11.6875 69.9888C 11.6875 71.2548 10.7696 72.1568 9.4727 72.1568C 8.1954 72.1568 7.3946 71.3008 7.3946 69.9188C 7.3946 68.6098 8.29691 67.6608 9.5157 67.6608\"\n       id=\"path240\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 19.7774 77.0628L 23.5704 66.1648L 22.086 66.1648L 19.0586 75.3828L 15.8516 66.1648L 14.3516 66.1648L 18.2813 77.0628\"\n       id=\"path242\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 0.289101 122.633C 0.542999 124.344 1.6758 125.36 3.2891 125.36C 4.4493 125.36 5.5118 124.798 6.125 123.856C 6.793 122.833 7.0938 121.536 7.0938 119.614C 7.0938 117.844 6.8243 116.712 6.19151 115.774C 5.6055 114.926 4.67191 114.465 3.4961 114.465C 1.4649 114.465 0 115.95 0 118.02C 0 119.981 1.3477 121.364 3.2696 121.364C 4.2735 121.364 5.0079 121.001 5.6993 120.165C 5.6836 122.735 4.8555 124.165 3.35941 124.165C 2.44151 124.165 1.8047 123.61 1.5977 122.637L 0.289101 122.633zM 3.5196 115.661C 4.7539 115.661 5.6875 116.649 5.6875 117.989C 5.6875 119.255 4.7696 120.157 3.4727 120.157C 2.1954 120.157 1.3946 119.301 1.3946 117.919C 1.3946 116.61 2.29691 115.661 3.5157 115.661\"\n       id=\"path244\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 8.9961 117.161L 8.9961 125.059L 10.1954 125.059L 10.1954 120.122C 10.1954 118.981 11.0196 118.063 12.0391 118.063C 12.9688 118.063 13.4922 118.633 13.4922 119.641L 13.4922 125.059L 14.6915 125.059L 14.6915 120.122C 14.6915 118.981 15.5391 118.063 16.5899 118.063C 17.5313 118.063 18.0899 118.649 18.0899 119.641L 18.0899 125.059L 19.2891 125.059L 19.2891 119.157C 19.2891 117.747 18.4844 116.965 17.0274 116.965C 15.9883 116.965 15.3633 117.282 14.6329 118.18C 14.1719 117.333 13.5469 116.965 12.5352 116.965C 11.4961 116.965 10.8086 117.36 10.1407 118.313L 10.1407 117.165\"\n       id=\"path246\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 27.5039 121.762L 28.6287 125.059L 30.1877 125.059L 26.3477 114.161L 24.5508 114.161L 20.6524 125.059L 22.1368 125.059L 23.2891 121.762L 27.5039 121.762zM 27.1172 120.563L 23.6407 120.563L 25.4375 115.63\"\n       id=\"path248\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 11.1098L 420.098 5.10983\"\n       id=\"path250\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 11.1098L 420.098 23.1098\"\n       id=\"path252\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 433.407 19.0628L 430.297 19.0628L 430.297 15.9538L 429.2 15.9538L 429.2 19.0628L 426.153 19.0628L 426.153 20.1608L 429.2 20.1608L 429.2 23.2578L 430.297 23.2578L 430.297 20.1608L 433.407 20.1608\"\n       id=\"path254\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 432.098 35.1098C 432.098 28.4848 426.727 23.1098 420.098 23.1098C 413.473 23.1098 408.098 28.4808 408.098 35.1098C 408.098 41.7348 413.469 47.1098 420.098 47.1098C 426.723 47.1098 432.098 41.7388 432.098 35.1098\"\n       id=\"path256\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 420.907 37.7618L 422.032 41.0588L 423.59 41.0588L 419.75 30.1608L 417.953 30.1608L 414.055 41.0588L 415.539 41.0588L 416.692 37.7618L 420.907 37.7618zM 420.516 36.5628L 417.039 36.5628L 418.836 31.6298\"\n       id=\"path258\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 59.1098L 420.098 47.1098\"\n       id=\"path260\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 426.086 55.4618L 429.653 55.4618L 429.653 54.3638L 426.086 54.3638L 426.086 55.4618z\"\n       id=\"path262\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 440.496 33.5118L 440.496 41.0588L 441.793 41.0588L 441.793 30.4618L 440.926 30.4618C 440.465 32.0898 440.164 32.3128 438.125 32.5668L 438.125 33.5078\"\n       id=\"path264\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 450.762 35.4648C 451.84 34.8128 452.196 34.2778 452.196 33.2778C 452.196 31.6258 450.891 30.4648 448.996 30.4648C 447.121 30.4648 445.797 31.6258 445.797 33.2778C 445.797 34.2578 446.164 34.7938 447.266 35.4648C 446.016 36.0438 445.399 36.9218 445.399 38.0828C 445.399 40.0158 446.879 41.3558 448.996 41.3558C 451.114 41.3558 452.594 40.0158 452.594 38.0978C 452.594 36.9218 451.993 36.0438 450.762 35.4648zM 448.996 31.6608C 450.094 31.6608 450.797 32.3088 450.797 33.3328C 450.797 34.3088 450.082 34.9578 448.996 34.9578C 447.914 34.9578 447.2 34.3088 447.2 33.3168C 447.2 32.3128 447.914 31.6608 448.996 31.6608zM 448.996 36.0628C 450.301 36.0628 451.196 36.8828 451.196 38.1058C 451.196 39.3368 450.305 40.1608 448.969 40.1608C 447.692 40.1608 446.801 39.3248 446.801 38.1058C 446.801 36.8868 447.692 36.0628 448.996 36.0628\"\n       id=\"path266\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 454.395 33.1608L 454.395 41.0588L 455.594 41.0588L 455.594 36.1218C 455.594 34.9808 456.418 34.0628 457.438 34.0628C 458.368 34.0628 458.891 34.6328 458.891 35.6408L 458.891 41.0588L 460.09 41.0588L 460.09 36.1218C 460.09 34.9808 460.938 34.0628 461.989 34.0628C 462.93 34.0628 463.489 34.6488 463.489 35.6408L 463.489 41.0588L 464.688 41.0588L 464.688 35.1568C 464.688 33.7468 463.883 32.9648 462.426 32.9648C 461.387 32.9648 460.762 33.2818 460.032 34.1798C 459.571 33.3328 458.946 32.9648 457.934 32.9648C 456.895 32.9648 456.207 33.3598 455.539 34.3128L 455.539 33.1648\"\n       id=\"path268\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 472.805 37.7618L 473.93 41.0588L 475.489 41.0588L 471.649 30.1608L 469.852 30.1608L 465.953 41.0588L 467.438 41.0588L 468.59 37.7618L 472.805 37.7618zM 472.414 36.5628L 468.938 36.5628L 470.735 31.6298\"\n       id=\"path270\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 59.1098L 420.098 101.11\"\n       id=\"path272\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 422.348 101.11C 422.348 99.8678 421.344 98.8598 420.098 98.8598C 418.856 98.8598 417.848 99.8638 417.848 101.11C 417.848 102.352 418.852 103.36 420.098 103.36C 421.34 103.36 422.348 102.356 422.348 101.11\"\n       id=\"path274\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 107.11L 420.098 101.11L 456.098 101.11L 456.098 107.11\"\n       id=\"path276\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 469.407 115.063L 466.297 115.063L 466.297 111.954L 465.2 111.954L 465.2 115.063L 462.153 115.063L 462.153 116.161L 465.2 116.161L 465.2 119.258L 466.297 119.258L 466.297 116.161L 469.407 116.161\"\n       id=\"path278\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 468.098 131.11C 468.098 124.485 462.727 119.11 456.098 119.11C 449.473 119.11 444.098 124.481 444.098 131.11C 444.098 137.735 449.469 143.11 456.098 143.11C 462.723 143.11 468.098 137.739 468.098 131.11\"\n       id=\"path280\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 456.098 107.11L 456.098 119.11\"\n       id=\"path282\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 455.575 137.063L 459.368 126.165L 457.883 126.165L 454.856 135.383L 451.649 126.165L 450.149 126.165L 454.078 137.063\"\n       id=\"path284\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 456.098 155.11L 456.098 143.11\"\n       id=\"path286\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 462.086 151.462L 465.653 151.462L 465.653 150.364L 462.086 150.364L 462.086 151.462z\"\n       id=\"path288\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 117.61L 420.098 107.11\"\n       id=\"path290\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 144.61L 420.098 155.11\"\n       id=\"path292\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 117.61L 414.848 119.86L 425.348 124.36L 414.848 128.86L 425.348 133.36L 414.848 137.86L 425.348 142.36L 420.098 144.61\"\n       id=\"path294\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 378.739 126.462L 373.246 126.462L 372.453 132.215L 373.657 132.215C 374.266 131.508 374.77 131.262 375.59 131.262C 377 131.262 377.895 132.215 377.895 133.755C 377.895 135.247 377.02 136.157 375.59 136.157C 374.446 136.157 373.746 135.598 373.434 134.45L 372.125 134.45C 372.305 135.305 372.453 135.719 372.77 136.102C 373.368 136.899 374.45 137.356 375.649 137.356C 377.793 137.356 379.293 135.809 379.293 133.575C 379.293 131.489 377.899 130.059 375.856 130.059C 375.106 130.059 374.508 130.251 373.891 130.696L 374.309 127.758L 378.735 127.758\"\n       id=\"path296\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 383.996 126.462C 383.004 126.462 382.098 126.907 381.539 127.661C 380.848 128.579 380.5 129.989 380.5 131.93C 380.5 135.473 381.703 137.356 384 137.356C 386.262 137.356 387.5 135.473 387.5 132.02C 387.5 129.977 387.168 128.61 386.457 127.661C 385.903 126.895 385.012 126.462 384 126.462L 383.996 126.462zM 383.996 127.661C 385.399 127.661 386.094 129.079 386.094 131.891C 386.094 134.864 385.414 136.255 383.965 136.255C 382.59 136.255 381.899 134.805 381.899 131.934C 381.899 129.067 382.59 127.657 383.996 127.657\"\n       id=\"path298\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 392.395 126.462C 391.403 126.462 390.496 126.907 389.938 127.661C 389.246 128.579 388.899 129.989 388.899 131.93C 388.899 135.473 390.102 137.356 392.399 137.356C 394.66 137.356 395.899 135.473 395.899 132.02C 395.899 129.977 395.567 128.61 394.856 127.661C 394.301 126.895 393.41 126.462 392.399 126.462L 392.395 126.462zM 392.395 127.661C 393.797 127.661 394.493 129.079 394.493 131.891C 394.493 134.864 393.813 136.255 392.364 136.255C 390.989 136.255 390.297 134.805 390.297 131.934C 390.297 129.067 390.989 127.657 392.395 127.657\"\n       id=\"path300\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 401.485 137.063L 401.215 134.747C 400.047 134.09 399.297 132.758 399.297 131.356C 399.297 130.579 399.52 129.7 399.907 128.997C 400.442 128.028 401.332 127.473 402.344 127.473C 403.352 127.473 404.246 128.024 404.782 128.997C 405.168 129.696 405.391 130.579 405.391 131.356C 405.391 132.758 404.66 134.09 403.516 134.747L 403.254 137.063L 407.633 137.063L 407.633 134.77L 407.274 134.77C 407.172 135.395 406.84 135.665 406.243 135.665L 404.055 135.665L 404.098 135.098C 404.618 134.907 404.926 134.758 405.286 134.532C 406.414 133.801 407.094 132.594 407.094 131.309C 407.094 130.325 406.66 129.219 405.942 128.383C 405.032 127.34 403.77 126.77 402.348 126.77C 400.926 126.77 399.668 127.337 398.754 128.383C 398.036 129.219 397.602 130.321 397.602 131.309C 397.602 132.59 398.293 133.801 399.442 134.532C 399.786 134.755 400.102 134.903 400.645 135.098L 400.688 135.665L 398.5 135.665C 397.903 135.665 397.571 135.395 397.469 134.77L 397.11 134.77L 397.11 137.063\"\n       id=\"path302\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 161.11L 420.098 185.11\"\n       id=\"path304\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 155.11L 420.098 161.11L 456.098 161.11L 456.098 155.11\"\n       id=\"path306\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 422.348 161.11C 422.348 159.868 421.344 158.86 420.098 158.86C 418.856 158.86 417.848 159.864 417.848 161.11C 417.848 162.352 418.852 163.36 420.098 163.36C 421.34 163.36 422.348 162.356 422.348 161.11\"\n       id=\"path308\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 474.289 134.633C 474.543 136.344 475.676 137.36 477.289 137.36C 478.45 137.36 479.512 136.798 480.125 135.856C 480.793 134.833 481.094 133.536 481.094 131.614C 481.094 129.844 480.825 128.712 480.192 127.774C 479.606 126.926 478.672 126.465 477.496 126.465C 475.465 126.465 474 127.95 474 130.02C 474 131.981 475.348 133.364 477.27 133.364C 478.274 133.364 479.008 133.001 479.7 132.165C 479.684 134.735 478.856 136.165 477.36 136.165C 476.442 136.165 475.805 135.61 475.598 134.637L 474.289 134.633zM 477.52 127.661C 478.754 127.661 479.688 128.649 479.688 129.989C 479.688 131.255 478.77 132.157 477.473 132.157C 476.196 132.157 475.395 131.301 475.395 129.919C 475.395 128.61 476.297 127.661 477.516 127.661\"\n       id=\"path310\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 487.778 137.063L 491.571 126.165L 490.086 126.165L 487.059 135.383L 483.852 126.165L 482.352 126.165L 486.282 137.063\"\n       id=\"path312\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 420.098 5.10983L 228.098 5.10983L 228.098 47.1098\"\n       id=\"path314\" />\n    <path\n       style=\"stroke:#000000; stroke-width:0.97499999999999998; stroke-linecap:round; fill:none\"\n       d=\"M 228.098 143.11L 228.098 185.11L 420.098 185.11\"\n       id=\"path316\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 290.348 5.10983C 290.348 3.86783 289.344 2.85983 288.098 2.85983C 286.856 2.85983 285.848 3.86383 285.848 5.10983C 285.848 6.35184 286.852 7.35983 288.098 7.35983C 289.34 7.35983 290.348 6.35583 290.348 5.10983\"\n       id=\"path318\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 290.348 185.11C 290.348 183.868 289.344 182.86 288.098 182.86C 286.856 182.86 285.848 183.864 285.848 185.11C 285.848 186.352 286.852 187.36 288.098 187.36C 289.34 187.36 290.348 186.356 290.348 185.11\"\n       id=\"path320\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 176.91 120.161L 177.618 120.161C 179.051 120.161 179.789 120.809 179.789 122.063C 179.789 123.376 178.973 124.157 177.602 124.157C 176.172 124.157 175.473 123.462 175.383 121.969L 174.075 121.969C 174.133 122.813 174.282 123.36 174.539 123.833C 175.078 124.837 176.129 125.356 177.586 125.356C 179.778 125.356 181.192 124.063 181.192 122.067C 181.192 120.727 180.664 119.985 179.383 119.551C 180.387 119.165 180.891 118.422 180.891 117.364C 180.891 115.551 179.672 114.462 177.637 114.462C 175.485 114.462 174.34 115.618 174.293 117.86L 175.59 117.86C 175.602 117.239 175.664 116.891 175.828 116.575C 176.125 116.012 176.786 115.665 177.61 115.665C 178.778 115.665 179.485 116.337 179.485 117.438C 179.485 118.169 179.219 118.61 178.641 118.844C 178.286 118.989 177.825 119.048 176.907 119.063\"\n       id=\"path322\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 189.465 117.161C 189.215 115.469 188.082 114.462 186.477 114.462C 185.317 114.462 184.278 115.028 183.653 115.965C 183 116.989 182.703 118.286 182.703 120.208C 182.703 121.977 182.969 123.11 183.594 124.048C 184.157 124.895 185.082 125.356 186.243 125.356C 188.25 125.356 189.696 123.872 189.696 121.805C 189.696 119.844 188.348 118.462 186.442 118.462C 185.395 118.462 184.567 118.868 184 119.661C 184.012 117.09 184.852 115.661 186.368 115.661C 187.293 115.661 187.938 116.208 188.149 117.161L 189.465 117.161zM 186.246 119.661C 187.504 119.661 188.293 120.52 188.293 121.911C 188.293 123.208 187.403 124.161 186.203 124.161C 184.989 124.161 184.067 123.169 184.067 121.84C 184.067 120.555 184.953 119.665 186.246 119.665\"\n       id=\"path324\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 191.395 117.161L 191.395 125.059L 192.594 125.059L 192.594 120.122C 192.594 118.981 193.418 118.063 194.438 118.063C 195.368 118.063 195.891 118.633 195.891 119.641L 195.891 125.059L 197.09 125.059L 197.09 120.122C 197.09 118.981 197.938 118.063 198.989 118.063C 199.93 118.063 200.489 118.649 200.489 119.641L 200.489 125.059L 201.688 125.059L 201.688 119.157C 201.688 117.747 200.883 116.965 199.426 116.965C 198.387 116.965 197.762 117.282 197.032 118.18C 196.571 117.333 195.946 116.965 194.934 116.965C 193.895 116.965 193.207 117.36 192.539 118.313L 192.539 117.165\"\n       id=\"path326\" />\n    <path\n       style=\"stroke:none; fill-rule:evenodd; fill:#000000\"\n       d=\"M 209.907 121.762L 211.032 125.059L 212.59 125.059L 208.75 114.161L 206.953 114.161L 203.055 125.059L 204.539 125.059L 205.692 121.762L 209.907 121.762zM 209.516 120.563L 206.039 120.563L 207.836 115.63\"\n       id=\"path328\" />\n  </g>\n</svg>\n\n  <div class=\"mt-svg-cap\">Rangkaian seri (kiri): komponen berurutan, arus sama di semua titik — rangkaian paralel (kanan): komponen bercabang, tegangan sama di tiap cabang · sumber: Wikimedia Commons, <i>File:Series and parallel circuits.svg</i> (CC BY-SA 3.0, Xyzzyva)</div>\n</div>\n<h4>Langkah praktik mengukur tegangan</h4>\n<ol>\n<li>Putar selector ke <strong>V⎓ (DC)</strong> untuk baterai/rangkaian DC, atau <strong>V~ (AC)</strong> untuk PLN/trafo.</li>\n<li>Pastikan probe merah di jack <strong>VΩ</strong>, probe hitam di <strong>COM</strong>.</li>\n<li>Sentuhkan probe <strong>menjembatani</strong> dua titik komponen (misal dua kaki resistor) — rangkaian boleh tetap menyala.</li>\n<li>Baca hasil. Tanda minus hanya berarti polaritas terbalik — tidak berbahaya pada DMM.</li>\n</ol>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/voltmeter-parallel-circuit.png\" alt=\"Voltmeter paralel pada rangkaian seri\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Tiga voltmeter dipasang paralel pada rangkaian seri dua lampu — tiap voltmeter menjembatani satu komponen · sumber: Wikimedia Commons, Paulgwilliamson (CC BY-SA 4.0)</div></div>\n<div class=\"mt-tip\">💡 <strong>Di rangkaian seri</strong>, jumlah tegangan tiap komponen = tegangan sumber (\\(V_1 + V_2 = V_{sumber}\\)). <strong>Di rangkaian paralel</strong>, semua cabang memiliki tegangan sama dengan sumber. Gunakan fakta ini untuk mengecek hasil ukurmu.</div>\n<div class=\"mt-svg-wrap\" title=\"Klik untuk memperbesar\" onclick=\"openMateriImg(this.querySelector('svg'))\">\n  <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\n<svg\n    xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n    xmlns:cc=\"http://creativecommons.org/ns#\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n    id=\"svg6200\"\n    viewBox=\"0 0 4301.7 2055.1\"\n    sodipodi:docname=\"_svgclean2.svg\"\n    version=\"1.1\"\n    inkscape:version=\"0.48.3.1 r9886\"\n  >\n  <defs\n      id=\"defs6202\"\n    >\n    <filter\n        id=\"filter5708\"\n        color-interpolation-filters=\"sRGB\"\n        inkscape:collect=\"always\"\n      >\n      <feGaussianBlur\n          id=\"feGaussianBlur5710\"\n          stdDeviation=\"28.132071\"\n          inkscape:collect=\"always\"\n      />\n    </filter\n    >\n    <linearGradient\n        id=\"linearGradient5712\"\n      >\n      <stop\n          id=\"stop5714\"\n          style=\"stop-color:#cccccc\"\n          offset=\"0\"\n      />\n      <stop\n          id=\"stop5716\"\n          style=\"stop-color:#ffffff;stop-opacity:0\"\n          offset=\".12299\"\n      />\n      <stop\n          id=\"stop5718\"\n          style=\"stop-color:#999999;stop-opacity:.63813\"\n          offset=\"1\"\n      />\n    </linearGradient\n    >\n    <linearGradient\n        id=\"linearGradient6990\"\n        y2=\"276.99\"\n        xlink:href=\"#linearGradient5712\"\n        gradientUnits=\"userSpaceOnUse\"\n        x2=\"298.11\"\n        gradientTransform=\"translate(-266.78 858.86)\"\n        y1=\"-906.91\"\n        x1=\"-914.59\"\n        inkscape:collect=\"always\"\n    />\n    <linearGradient\n        id=\"linearGradient7109\"\n        y2=\"276.99\"\n        xlink:href=\"#linearGradient5712\"\n        gradientUnits=\"userSpaceOnUse\"\n        x2=\"298.11\"\n        gradientTransform=\"translate(1979.8 858.86)\"\n        y1=\"-906.91\"\n        x1=\"-914.59\"\n        inkscape:collect=\"always\"\n    />\n  </defs\n  >\n  <sodipodi:namedview\n      id=\"base\"\n      fit-margin-left=\"0\"\n      inkscape:snap-center=\"true\"\n      inkscape:zoom=\"0.12374369\"\n      borderopacity=\"1.0\"\n      inkscape:current-layer=\"layer1\"\n      inkscape:cx=\"3555.3266\"\n      inkscape:cy=\"1534.2593\"\n      inkscape:object-paths=\"true\"\n      inkscape:window-maximized=\"0\"\n      showgrid=\"false\"\n      fit-margin-right=\"0\"\n      showguides=\"true\"\n      bordercolor=\"#666666\"\n      inkscape:window-x=\"0\"\n      inkscape:guide-bbox=\"true\"\n      inkscape:window-y=\"0\"\n      fit-margin-bottom=\"0\"\n      inkscape:window-width=\"512\"\n      inkscape:pageopacity=\"0.0\"\n      inkscape:pageshadow=\"2\"\n      pagecolor=\"#ffffff\"\n      inkscape:snap-object-midpoints=\"true\"\n      inkscape:document-units=\"px\"\n      inkscape:window-height=\"452\"\n      fit-margin-top=\"0\"\n  />\n  <g\n      id=\"layer1\"\n      inkscape:label=\"Layer 1\"\n      inkscape:groupmode=\"layer\"\n      transform=\"translate(1430.8 352.34)\"\n    >\n    <rect\n        id=\"rect5399\"\n        style=\"fill:#000000\"\n        rx=\"129.3\"\n        ry=\"129.3\"\n        height=\"2055.1\"\n        width=\"2055.1\"\n        y=\"-352.34\"\n        x=\"815.73\"\n    />\n    <rect\n        id=\"rect5401\"\n        style=\"fill:#333333\"\n        rx=\"90.728\"\n        ry=\"90.728\"\n        height=\"1962.4\"\n        width=\"1962.4\"\n        y=\"-305.98\"\n        x=\"862.09\"\n    />\n    <rect\n        id=\"rect5403\"\n        style=\"fill:#000000\"\n        rx=\"70.525\"\n        ry=\"70.525\"\n        height=\"1909.9\"\n        width=\"1909.9\"\n        y=\"-279.72\"\n        x=\"888.35\"\n    />\n    <rect\n        id=\"rect5405\"\n        style=\"fill:#333333\"\n        rx=\"22.5\"\n        ry=\"22.5\"\n        height=\"45\"\n        width=\"97.857\"\n        y=\"802.65\"\n        x=\"2621.9\"\n    />\n    <path\n        id=\"path5407\"\n        sodipodi:nodetypes=\"sssssssssss\"\n        style=\"fill:#333333\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m1140.5-149.32c-67.467 0-121.78 54.312-121.78 121.78v1405.5c0 67.467 54.312 121.78 121.78 121.78h680.32c29.662 0 47.115-4.0298 64.849-21.729l755.79-754.27c23.851-23.803 26.352-40.896 26.352-72.473v-678.83c0-67.467-54.312-121.78-121.78-121.78z\"\n    />\n    <path\n        id=\"path5409\"\n        d=\"m2038.4 1279.8 438.57-428.57h-444.29z\"\n        style=\"fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5411\"\n        sodipodi:nodetypes=\"cssccscc\"\n        style=\"fill:#808080\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m2190.5 1112.3h-59.643c-9.9944 0-16.516-15.836-26.429-18.148l-44.464-10.37v-30.463l44.464-10.37c9.9128-2.3119 16.434-18.148 26.429-18.148h59.643\"\n    />\n    <path\n        id=\"path5413\"\n        d=\"m2205.5 1048.4-48.571-54.286 33.571-33.571 54.286 54.286\"\n        style=\"fill:#e6e6e6\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5415\"\n        d=\"m2114.8 1205.5-37.143-36.429 11.428-12.857 30.714 6.4286 54.286-54.286c-6.7697-14.828-2.7536-22.791 11.429-24.286-18.934-68.674 49.856-114.43 102.86-90l60.714-60-12.143-30 11.429-10 41.428 35\"\n        sodipodi:nodetypes=\"ccccccccccc\"\n        style=\"fill:#cccccc\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5417\"\n        style=\"fill:#e1e1d1\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m1156-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.979 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.03-746.03c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.979-53.114-119.09-119.09-119.09h-1374.5zm1096.6 1000.2h189.31l-387.34 382.16v-178.94c0-107.21 90.807-203.22 198.03-203.22z\"\n    />\n    <path\n        id=\"path5647\"\n        style=\"opacity:.85774;filter:url(#filter5708);fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-823.78 1579.8c-65.979 0-119.09 53.114-119.09 119.09v1374.5c0 51.168 31.947 94.61 77.062 111.53-1.8213-8.3056-2.7812-16.944-2.7812-25.813v-1374.5c0-65.979 53.114-119.09 119.09-119.09h1374.5c14.812 0 28.972 2.6957 42.031 7.5938-11.729-53.488-59.201-93.312-116.31-93.312h-1374.5z\"\n        transform=\"matrix(1.037 0 0 1.037 1984.9 -1799.2)\"\n    />\n    <path\n        id=\"path5419\"\n        d=\"m2252.1-20.888a3.5004 3.5004 0 0 0 -3.0938 3.5312v120a3.5004 3.5004 0 1 0 7 0v-120a3.5004 3.5004 0 0 0 -3.9062 -3.5312z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5421\"\n        d=\"m1190.6 836.17a3.5004 3.5004 0 0 0 -0.4062 6.9375l117.28 25.312a3.5004 3.5004 0 1 0 1.4688 -6.8438l-117.28-25.312a3.5004 3.5004 0 0 0 -1.0625 -0.094z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5423\"\n        d=\"m1441.2 342.92a3.5004 3.5004 0 0 0 -2.0625 6.1562l89.594 79.781a3.5004 3.5004 0 1 0 4.6562 -5.2188l-89.594-79.812a3.5004 3.5004 0 0 0 -2.5938 -0.9062z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5425\"\n        d=\"m1876.6 46.143a3.5004 3.5004 0 0 0 -3.0313 4.75l41.5 112.59a3.5004 3.5004 0 1 0 6.5625 -2.4063l-41.5-112.59a3.5004 3.5004 0 0 0 -3.5312 -2.3438z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5427\"\n        d=\"m2192.8-19.263a3.5004 3.5004 0 0 0 -3.25 3.75l3.0312 55.312a3.505 3.505 0 1 0 7 -0.375l-3.0312-55.344a3.5004 3.5004 0 0 0 -3.75 -3.3437z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5429\"\n        d=\"m2114.4-12.107a3.5004 3.5004 0 0 0 -3.3125 4l7.0313 54.969a3.5137 3.5137 0 1 0 6.9687 -0.9063l-7.0625-54.937a3.5004 3.5004 0 0 0 -3.625 -3.125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5431\"\n        d=\"m2042.9-0.48153a3.5004 3.5004 0 0 0 -3.4063 4.2188l10.688 54.375a3.5025 3.5025 0 1 0 6.875 -1.3438l-10.7-54.374a3.5004 3.5004 0 0 0 -3.4687 -2.875z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5433\"\n        d=\"m1967 17.237a3.5004 3.5004 0 0 0 -3.0625 4.4687l14.531 53.438a3.5096 3.5096 0 1 0 6.7812 -1.8125l-14.562-53.469a3.5004 3.5004 0 0 0 -3.6875 -2.625z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5435\"\n        d=\"m1791.7 81.612a3.5004 3.5004 0 0 0 -2.9687 5.0312l23.5 50.188a3.5004 3.5004 0 1 0 6.3125 -2.9687l-23.469-50.188a3.5004 3.5004 0 0 0 -3.375 -2.0625z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5437\"\n        d=\"m1681.8 141.02a3.5004 3.5004 0 0 0 -2.7188 5.375l29.094 47.156a3.508 3.508 0 1 0 5.9687 -3.6875l-29.125-47.125a3.5004 3.5004 0 0 0 -3.2187 -1.7188z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5439\"\n        d=\"m1589.5 204.77a3.5004 3.5004 0 0 0 -2.5 5.6563l33.812 43.906a3.5096 3.5096 0 1 0 5.5625 -4.2812l-33.812-43.906a3.5004 3.5004 0 0 0 -3.0625 -1.375z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5441\"\n        d=\"m1515.5 267.24a3.5004 3.5004 0 0 0 -2.3125 5.9062l37.562 40.688a3.5053 3.5053 0 1 0 5.1562 -4.75l-37.594-40.688a3.5004 3.5004 0 0 0 -2.8125 -1.1562z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5443\"\n        d=\"m1376.1 423.46a3.5004 3.5004 0 0 0 -1.8437 6.3438l44.688 32.75a3.5004 3.5004 0 1 0 4.125 -5.6563l-44.688-32.719a3.5004 3.5004 0 0 0 -2.2813 -0.7188z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5445\"\n        d=\"m1308 528.58a3.5004 3.5004 0 0 0 -1.4375 6.5625l48.156 27.375a3.5059 3.5059 0 1 0 3.4687 -6.0937l-48.156-27.375a3.5004 3.5004 0 0 0 -2.0313 -0.4688z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5447\"\n        d=\"m1257.6 628.96a3.5004 3.5004 0 0 0 -1.0937 6.7188l50.719 22.25a3.5004 3.5004 0 1 0 2.8125 -6.4063l-50.719-22.25a3.5004 3.5004 0 0 0 -1.7188 -0.3125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5449\"\n        d=\"m1213.6 747.39a3.5004 3.5004 0 0 0 -0.6875 6.8438l52.969 16.219a3.5004 3.5004 0 1 0 2.0625 -6.6875l-52.969-16.219a3.5004 3.5004 0 0 0 -1.375 -0.1563z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5451\"\n        d=\"m1175.9 920.21a3.5004 3.5004 0 0 0 -0.2187 6.9688l54.906 7.4062a3.5004 3.5004 0 1 0 0.9375 -6.9375l-54.906-7.4062a3.5004 3.5004 0 0 0 -0.7188 -0.031zm79.625 10.75a3.5004 3.5004 0 0 0 -0.2187 6.9688l4.4687 0.5937a3.5004 3.5004 0 1 0 0.9375 -6.9375l-4.4687-0.5937a3.5004 3.5004 0 0 0 -0.7188 -0.031z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5453\"\n        d=\"m1583.2 440.49a4.0004 4.0004 0 0 0 -2.9063 1.3437l-14.625 16.688a4.0004 4.0004 0 1 0 6 5.2813l7.625-8.6875v76.25a4.0004 4.0004 0 1 0 8 0v-86.875a4.0004 4.0004 0 0 0 -4.0937 -4z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5455\"\n        d=\"m1634.8 440.49c-15.018 0-27.219 12.2-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.724 0 19.25 8.4942 19.25 19.219v40.406c0 10.724-8.5255 19.25-19.25 19.25-10.725 0-19.219-8.5255-19.219-19.25v-40.406c0-10.724 8.4942-19.219 19.219-19.219z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5457\"\n        d=\"m1707.1 440.49c-15.018 0-27.219 12.2-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.724-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5255-19.219-19.25v-40.406c0-10.724 8.4942-19.219 19.219-19.219z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5459\"\n        d=\"m2261.9 156.64c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.2-27.219-27.219-27.219zm0 8c10.724 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25s-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5254-19.219 19.25-19.219z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5461\"\n        d=\"m2334.1 156.64c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.201-27.219-27.219-27.219zm0 8c10.725 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25-10.724 0-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5255-19.219 19.25-19.219z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5463\"\n        d=\"m2183.5 156.61c-14.558 0-26.594 11.436-26.594 25.656a4.0004 4.0004 0 1 0 8 0c0-9.7079 8.1784-17.656 18.594-17.656 10.415 0 18.625 7.9483 18.625 17.656 0 3.4188-0.3012 6.2394-1.9688 9.125-1.6675 2.8857-4.8983 6.1281-11.656 9.5625-15.36 7.8058-30.328 23.228-32.812 46.125a4.0004 4.0004 0 0 0 3.9687 4.4375h45.969a4.0004 4.0004 0 1 0 0 -8h-41.219c3.4596-17.376 15.261-29.122 27.688-35.438 7.6556-3.8905 12.332-8.1255 14.969-12.688 2.6363-4.5619 3.0625-9.1977 3.0625-13.125 0-14.22-12.067-25.656-26.625-25.656z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5465\"\n        d=\"m1860 235.42a4.0004 4.0004 0 0 0 -2.9062 1.3437l-14.625 16.688a4.0004 4.0004 0 1 0 6 5.2813l7.6562-8.7188v76.281a4.0004 4.0004 0 1 0 8 0v-86.875a4.0004 4.0004 0 0 0 -4.125 -4z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5467\"\n        d=\"m1983.8 235.42c-15.018 0-27.219 12.2-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.724 0 19.25 8.4942 19.25 19.219v40.406c0 10.724-8.5255 19.25-19.25 19.25-10.725 0-19.219-8.5255-19.219-19.25v-40.406c0-10.724 8.4942-19.219 19.219-19.219z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5469\"\n        d=\"m1889.9 235.39a4.0004 4.0004 0 0 0 -4 4v37.25a4.0004 4.0004 0 0 0 7.375 2.125c2.999-4.7533 11.204-8.0625 18.344-8.0625 10.688 0 19.25 8.6481 19.25 19.625v12.344c0 10.977-8.5616 19.625-19.25 19.625-7.2062 0-15.114-4.3265-18.219-9.875a4.0081 4.0081 0 1 0 -7 3.9062c4.876 8.7155 15.069 13.969 25.219 13.969 15.054 0 27.25-12.426 27.25-27.625v-12.344c0-15.199-12.196-27.625-27.25-27.625-5.9926 0-12.456 1.4612-17.719 4.6875v-24h35.406a4.0004 4.0004 0 1 0 0 -8h-39.406z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5471\"\n        d=\"m1470.7 824.33c-15.018 0-27.219 12.232-27.219 27.25v40.406c0 15.018 12.201 27.219 27.219 27.219s27.25-12.201 27.25-27.219v-40.406c0-15.018-12.232-27.25-27.25-27.25zm0 8c10.725 0 19.25 8.5255 19.25 19.25v40.406c0 10.724-8.5254 19.219-19.25 19.219-10.724 0-19.219-8.4942-19.219-19.219v-40.406c0-10.724 8.4942-19.25 19.219-19.25z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5473\"\n        d=\"m1376.3 824.33a4.0004 4.0004 0 0 0 -3.5938 4v37.219a4.0004 4.0004 0 0 0 7.375 2.1562c2.999-4.7533 11.204-8.0625 18.344-8.0625 10.688 0 19.25 8.6481 19.25 19.625v12.312c0 10.977-8.5616 19.625-19.25 19.625-7.2063 0-15.114-4.3265-18.219-9.875a4.0081 4.0081 0 1 0 -7 3.9063c4.8761 8.7155 15.069 13.969 25.219 13.969 15.054 0 27.25-12.426 27.25-27.625v-12.312c0-15.199-12.196-27.625-27.25-27.625-5.9927 0-12.456 1.4612-17.719 4.6875v-24h35.406a4.0004 4.0004 0 1 0 0 -8h-39.406a4.0004 4.0004 0 0 0 -0.4062 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5475\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m1284.7 72.831-1.1875 5.5313-30.312 141.13h13.719l7-31.844h46.156l8.5312 31.844h13.531l-36.938-141.47-1.375-5.1875h-5.375-8.0938-5.6562zm10.031 20.062 21.594 80.75h-39.344l17.75-80.75z\"\n    />\n    <path\n        id=\"path5477\"\n        d=\"m1146.3 900.96c-8.4837 0-15.375 6.8914-15.375 15.375v22.844c0 8.4836 6.8913 15.375 15.375 15.375 8.4836 0 15.406-6.8914 15.406-15.375v-22.844c0-8.4836-6.9226-15.375-15.406-15.375zm0 4.5c6.0685 0 10.906 4.8065 10.906 10.875v22.844c0 6.0685-4.8377 10.875-10.906 10.875-6.0685 0-10.875-4.8065-10.875-10.875v-22.844c0-6.0685 4.8065-10.875 10.875-10.875z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5479\"\n        d=\"m1115.6 900.96a2.2502 2.2502 0 0 0 -1.5938 1.0313l-22.156 34.875a2.2502 2.2502 0 0 0 1.9062 3.4375h19.875v12a2.2502 2.2502 0 1 0 4.5 0v-12h1.3438a2.2502 2.2502 0 1 0 0 -4.5h-1.3438v-32.594a2.2502 2.2502 0 0 0 -2.5312 -2.25zm-1.9688 9.9688v24.875h-15.781l15.781-24.875z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5481\"\n        d=\"m1284.9 1200.5a2.5002 2.5002 0 0 0 -1.8125 0.8438l-7.8125 8.9062a2.5018 2.5018 0 1 0 3.75 3.3125l3.4375-3.9062v39.781a2.5002 2.5002 0 1 0 5 0v-46.438a2.5002 2.5002 0 0 0 -2.5625 -2.5z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5483\"\n        d=\"m1306.7 1200.5a2.5002 2.5002 0 0 0 -2.25 2.5v19.906a2.5002 2.5002 0 0 0 4.625 1.3125c1.5017-2.3802 5.7817-4.125 9.5-4.125 5.5171 0 9.9062 4.4471 9.9062 10.125v6.5937c0 5.6779-4.3891 10.125-9.9062 10.125-3.7197 0-7.858-2.2704-9.4375-5.0937a2.5041 2.5041 0 1 0 -4.375 2.4375c2.6869 4.8026 8.253 7.6562 13.812 7.6562 8.2458 0 14.906-6.8081 14.906-15.125v-6.5937c0-8.3169-6.6604-15.125-14.906-15.125-3.0809 0-6.3424 0.7822-9.125 2.3437v-11.938h18.562a2.5002 2.5002 0 1 0 0 -5h-21.062a2.5002 2.5002 0 0 0 -0.25 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5485\"\n        style=\"fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m1297.5 1245.5c-2.2316 0-4.0625 1.8309-4.0625 4.0625 0 1.973 1.4112 3.5834 3.2812 3.9375-0.352 1.6422-0.8243 3.5675-1.625 6.4063 3.379-3.3497 5.078-6.1448 6.0625-8.6875 0.013-0.033 0.05-0.061 0.062-0.094v-0.031c0.1971-0.476 0.3125-0.9841 0.3125-1.5313 0-2.2316-1.7996-4.0625-4.0312-4.0625z\"\n    />\n    <path\n        id=\"path5487\"\n        d=\"m1197.6 1211.8c-5.4507 0.026-10.966 1.9221-16 6.6562a2.5092 2.5092 0 1 0 3.4375 3.6563c5.6656-5.3286 10.954-6.1333 16.938-4.875 5.9835 1.2583 12.504 4.8898 19.125 8.7187 6.6209 3.8289 13.346 7.8504 20.312 9.5313 6.9667 1.6808 14.393 0.7108 20.875-5.2813a2.51 2.51 0 1 0 -3.4063 -3.6875c-5.3695 4.9637-10.436 5.5429-16.312 4.125-5.8769-1.4179-12.328-5.1594-18.969-9-6.6411-3.8405-13.471-7.7833-20.594-9.2812-1.7807-0.3745-3.5893-0.5714-5.4062-0.5625z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5489\"\n        d=\"m1365.1 1188.7a2.5002 2.5002 0 0 0 -2.4688 2.5313v55.594a2.5002 2.5002 0 1 0 5 0v-55.594a2.5002 2.5002 0 0 0 -2.5312 -2.5313z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5491\"\n        d=\"m1406.1 1187a2.5002 2.5002 0 0 0 -0.6562 0.1563l-54 19.156a2.5002 2.5002 0 0 0 0 4.7188l18.5 6.5-18.5 6.5625a2.5002 2.5002 0 0 0 0 4.7187l18.469 6.5313-18.469 6.5312a2.5002 2.5002 0 0 0 0 4.7188l54 19.156a2.5002 2.5002 0 1 0 1.6875 -4.6875l-47.375-16.812 18.469-6.5312a2.5002 2.5002 0 0 0 0 -4.7188l-18.469-6.5625 18.469-6.5625a2.5002 2.5002 0 0 0 0 -4.6875l-18.469-6.5312 47.375-16.781a2.5002 2.5002 0 0 0 -1.0313 -4.875z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5493\"\n        sodipodi:rx=\"6.5068183\"\n        sodipodi:ry=\"6.5068183\"\n        style=\"fill:#000000\"\n        sodipodi:type=\"arc\"\n        d=\"m-568.08 330.9c0 3.5936-2.9132 6.5068-6.5068 6.5068s-6.5068-2.9132-6.5068-6.5068 2.9132-6.5068 6.5068-6.5068 6.5068 2.9132 6.5068 6.5068z\"\n        transform=\"matrix(.59248 0 0 .59248 1746.3 993.55)\"\n        sodipodi:cy=\"330.90106\"\n        sodipodi:cx=\"-574.59137\"\n    />\n    <path\n        id=\"path5495\"\n        sodipodi:rx=\"6.5068183\"\n        sodipodi:ry=\"6.5068183\"\n        style=\"fill:#000000\"\n        sodipodi:type=\"arc\"\n        d=\"m-568.08 330.9c0 3.5936-2.9132 6.5068-6.5068 6.5068s-6.5068-2.9132-6.5068-6.5068 2.9132-6.5068 6.5068-6.5068 6.5068 2.9132 6.5068 6.5068z\"\n        transform=\"matrix(.59248 0 0 .59248 1746.3 1067.2)\"\n        sodipodi:cy=\"330.90106\"\n        sodipodi:cx=\"-574.59137\"\n    />\n    <path\n        id=\"path5497\"\n        d=\"m1467.3 1185.7a2.5002 2.5002 0 0 0 -1.784 1.1002l-14.719 21.974-25.423 7.2256a2.5002 2.5002 0 0 0 -1.2785 3.9547l16.354 20.784-0.9515 26.434a2.5002 2.5002 0 0 0 3.36 2.4085l24.799-9.0988 24.828 9.0691a2.5002 2.5002 0 0 0 3.36 -2.4382l-1.011-26.404 16.295-20.814a2.5002 2.5002 0 0 0 -1.2786 -3.9547l-25.423-7.2255-14.748-21.914a2.5002 2.5002 0 0 0 -2.3788 -1.1002zm0.2974 6.9877 13.202 19.595a2.5002 2.5002 0 0 0 1.3975 1.011l22.717 6.4524-14.57 18.584a2.5002 2.5002 0 0 0 -0.5352 1.6354l0.892 23.609-22.182-8.0878a2.5002 2.5002 0 0 0 -1.7247 0l-22.182 8.1473 0.8623-23.639a2.5002 2.5002 0 0 0 -0.5352 -1.6354l-14.57-18.554 22.688-6.4822a2.5002 2.5002 0 0 0 1.3976 -1.0109l13.143-19.625z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5499\"\n        d=\"m1467.3 1217.5c-4.8518 0-8.8125 3.9608-8.8125 8.8125a2.1387 2.1387 0 1 0 4.25 0c0-2.5403 2.0222-4.5312 4.5625-4.5312s4.5625 1.9909 4.5625 4.5312c0 0.6956-0.176 1.0804-0.9063 1.9688-0.7302 0.8884-1.9841 2.0898-3.4062 3.8125l-9.3438 11.312a2.1387 2.1387 0 0 0 1.6563 3.5h15.406a2.1406 2.1406 0 0 0 0 -4.2813h-10.875l6.4375-7.8125c1.2475-1.5111 2.4037-2.5927 3.4063-3.8125s1.9062-2.8108 1.9062-4.6875c0-4.8517-3.992-8.8125-8.8437-8.8125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5501\"\n        d=\"m1522.5 1207.9a2.5002 2.5002 0 0 0 -2.5 2.5v39.656a2.5002 2.5002 0 1 0 5 0v-37.156h14.156a2.5002 2.5002 0 1 0 0 -5h-16.656z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5503\"\n        d=\"m1522.5 1224.9a2.5031 2.5031 0 1 0 0.25 5h8.5937c4.954 0 8.8438 3.8897 8.8438 8.8437s-3.8898 8.875-8.8438 8.875h-8.5937a2.5002 2.5002 0 1 0 0 5h8.5937c7.6376 0 13.844-6.2375 13.844-13.875s-6.2062-13.844-13.844-13.844h-8.5937a2.5002 2.5002 0 0 0 -0.25 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5505\"\n        d=\"m1574.5 1194.1a2.1387 2.1387 0 0 0 -2.125 2.1875v68.688a2.1406 2.1406 0 0 0 4.2812 0v-68.688a2.1387 2.1387 0 0 0 -2.1562 -2.1875z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5507\"\n        d=\"m1545.4 1263a2.5031 2.5031 0 1 0 0.25 5h57.594a2.5002 2.5002 0 1 0 0 -5h-57.594a2.5002 2.5002 0 0 0 -0.25 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5509\"\n        d=\"m1283.8 1300a2.2502 2.2502 0 0 0 -2.0313 2.25v26.875a2.2502 2.2502 0 1 0 4.5 0v-24.625h8.375a2.2502 2.2502 0 1 0 0 -4.5h-10.625a2.2502 2.2502 0 0 0 -0.2187 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5511\"\n        d=\"m1308.4 1300c-5.8944 0-10.719 4.8243-10.719 10.719v9.9688c0 5.8944 4.8243 10.688 10.719 10.688 5.8945 0 10.719-4.7931 10.719-10.688v-9.9688c0-5.8944-4.8243-10.719-10.719-10.719zm0 4.5c3.4793 0 6.2188 2.7394 6.2188 6.2187v9.9688c0 3.4792-2.7395 6.1875-6.2188 6.1875-3.4792 0-6.2187-2.7083-6.2187-6.1875v-9.9688c0-3.4793 2.7395-6.2187 6.2187-6.2187z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5513\"\n        d=\"m1330.6 1300c-5.8944 0-10.719 4.8243-10.719 10.719v9.9688c0 5.8944 4.8244 10.688 10.719 10.688 4.9632 0 9.1791-3.3836 10.375-8a2.2502 2.2502 0 1 0 -4.3438 -1.125c-0.6916 2.6699-3.1016 4.625-6.0312 4.625-3.4793 0-6.2188-2.7083-6.2188-6.1875v-9.9688c0-3.4793 2.7395-6.2187 6.2188-6.2187 2.9269 0 5.3058 1.9588 6 4.625a2.2587 2.2587 0 1 0 4.375 -1.125c-1.2003-4.61-5.4164-8-10.375-8z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5515\"\n        d=\"m1351.7 1300a2.2502 2.2502 0 0 0 -2 2.2813v26.875a2.2502 2.2502 0 1 0 4.5 0v-26.875a2.2502 2.2502 0 0 0 -2.5 -2.2813z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5517\"\n        d=\"m1344.9 1300a2.2527 2.2527 0 0 0 0.2188 4.5h13.812a2.2502 2.2502 0 1 0 0 -4.5h-13.812a2.2502 2.2502 0 0 0 -0.2188 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5519\"\n        d=\"m1385.8 1300c-4.4239 0-8.0625 3.6386-8.0625 8.0625s3.6386 8.0625 8.0625 8.0625 8.0625-3.6386 8.0625-8.0625-3.6386-8.0625-8.0625-8.0625zm0 4.5c1.9919 0 3.5625 1.5706 3.5625 3.5625s-1.5706 3.5625-3.5625 3.5625-3.5625-1.5706-3.5625-3.5625 1.5706-3.5625 3.5625-3.5625z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5521\"\n        d=\"m1385.8 1311.5c-5.4699 0-9.9456 4.4758-9.9456 9.9457s4.4757 9.9456 9.9456 9.9456 9.9457-4.4757 9.9457-9.9456-4.4758-9.9457-9.9457-9.9457zm0 4.4756c3.0379 0 5.4701 2.4321 5.4701 5.4701 0 3.0379-2.4322 5.4701-5.4701 5.4701s-5.4701-2.4322-5.4701-5.4701c0-3.038 2.4322-5.4701 5.4701-5.4701z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5523\"\n        d=\"m1400.2 1300a2.2535 2.2535 0 1 0 0.25 4.5h7.9063c-3.3387 6.572-6.0518 14.717-8.3438 24.094a2.2511 2.2511 0 1 0 4.375 1.0625c2.6399-10.8 5.7905-19.938 9.5938-26.25a2.2502 2.2502 0 0 0 -1.9375 -3.4062h-11.594a2.2502 2.2502 0 0 0 -0.25 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5525\"\n        d=\"m1429.1 1300a2.2502 2.2502 0 0 0 -1.75 0.9062l-4.6875 6.25a2.2502 2.2502 0 1 0 3.5937 2.6875l0.6563-0.875v20.156a2.2502 2.2502 0 1 0 4.5 0v-26.875a2.2502 2.2502 0 0 0 -2.3125 -2.25z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5527\"\n        d=\"m1444.9 1300a2.2502 2.2502 0 0 0 -1.7187 0.9062l-4.6875 6.25a2.2502 2.2502 0 1 0 3.5937 2.6875l0.625-0.8437v20.125a2.2502 2.2502 0 1 0 4.5 0v-26.875a2.2502 2.2502 0 0 0 -2.3125 -2.25z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5529\"\n        d=\"m1502.4 1300c-5.8944 0-10.719 4.8243-10.719 10.719v9.9688c0 5.8944 4.8243 10.688 10.719 10.688 5.8945 0 10.719-4.7931 10.719-10.688v-9.9688c0-5.8944-4.8243-10.719-10.719-10.719zm0 4.5c3.4793 0 6.2188 2.7394 6.2188 6.2187v9.9688c0 3.4792-2.7395 6.1875-6.2188 6.1875-3.4792 0-6.2187-2.7083-6.2187-6.1875v-9.9688c0-3.4793 2.7395-6.2187 6.2187-6.2187z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5531\"\n        d=\"m1480.7 1311.5c-5.4699 0-9.9456 4.4758-9.9456 9.9457s4.4757 9.9456 9.9456 9.9456 9.9457-4.4757 9.9457-9.9456-4.4758-9.9457-9.9457-9.9457zm0 4.4756c3.038 0 5.4701 2.4321 5.4701 5.4701 0 3.0379-2.4321 5.4701-5.4701 5.4701-3.0379 0-5.4701-2.4322-5.4701-5.4701 0-3.038 2.4322-5.4701 5.4701-5.4701z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5533\"\n        d=\"m1480.6 1300c-5.4699 0-9.9375 4.4676-9.9375 9.9375v11.5a2.2502 2.2502 0 1 0 4.5 0v-11.5c0-3.038 2.3996-5.4375 5.4375-5.4375 2.1957 0 4.1748 1.2907 5.0312 3.3125a2.2548 2.2548 0 1 0 4.1563 -1.75c-1.5564-3.6743-5.1973-6.0625-9.1875-6.0625z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5535\"\n        d=\"m1453.1 1312.7a2.2527 2.2527 0 1 0 0.2187 4.5h11.625a2.2502 2.2502 0 1 0 0 -4.5h-11.625a2.2502 2.2502 0 0 0 -0.2187 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5537\"\n        d=\"m2411 246.77c-6.7857 0-12.69 3.8407-15.594 9.5a2.5002 2.5002 0 1 0 4.4375 2.2813c2.0712-4.0372 6.2544-6.7813 11.156-6.7813 6.9826 0 12.531 5.5486 12.531 12.531v21.344c0 6.9827-5.5486 12.531-12.531 12.531-4.4774 0-8.3428-2.2744-10.562-5.75a2.501 2.501 0 0 0 -4.2188 2.6875c3.1089 4.8679 8.5832 8.0625 14.781 8.0625 9.6662 0 17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.865-17.531-17.531-17.531z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5539\"\n        d=\"m2488 246.77c-9.6662 0-17.5 7.8651-17.5 17.531v21.344c0 9.6662 7.8338 17.531 17.5 17.531s17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.865-17.531-17.531-17.531zm0 5c6.9826 0 12.531 5.5486 12.531 12.531v21.344c0 6.9827-5.5486 12.531-12.531 12.531-6.9827 0-12.5-5.5486-12.5-12.531v-21.344c0-6.9827 5.5173-12.531 12.5-12.531z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5541\"\n        d=\"m2436.6 246.77a2.5031 2.5031 0 1 0 0.25 5h18.156l-12.375 17.5a2.5002 2.5002 0 0 0 2.3438 3.9375c5.7215-0.6861 9.0208 0.5421 11.188 2.4375 2.1667 1.8954 3.3312 4.7379 3.7812 7.7188 0.4713 3.1214-0.2841 6.6266-1.9062 9.4062s-4.0115 4.745-6.7188 5.25c-4.4749 0.8348-10.174-1.6848-12.25-5.8437a2.5016 2.5016 0 1 0 -4.4687 2.25c3.2375 6.4873 10.824 9.7687 17.625 8.5 4.4334-0.8271 7.9332-3.8692 10.125-7.625s3.1945-8.2945 2.5312-12.688c-0.5668-3.7544-2.0648-7.7958-5.4062-10.719-2.4107-2.1088-5.7373-3.477-9.9063-3.7812l12.312-17.406a2.5002 2.5002 0 0 0 -2.0625 -3.9375h-22.969a2.5002 2.5002 0 0 0 -0.25 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5543\"\n        d=\"m2411.9 272.49a2.5031 2.5031 0 1 0 0.25 5h13.125a2.5002 2.5002 0 1 0 0 -5h-13.125a2.5002 2.5002 0 0 0 -0.25 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5545\"\n        d=\"m2394 654.11a3.5004 3.5004 0 0 0 -3 1.9062l-22 41.875-75.406 87.469a3.5014 3.5014 0 1 0 5.3125 4.5625l75.688-87.844a3.5004 3.5004 0 0 0 0.4687 -0.6562l22.125-42.156a3.5004 3.5004 0 0 0 -3.1875 -5.1562z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5547\"\n        d=\"m2296 773.83c-7.7494 0-14.125 6.3444-14.125 14.094 0 7.7494 6.3756 14.125 14.125 14.125s14.094-6.3756 14.094-14.125a3.5004 3.5004 0 1 0 -7 0c0 3.9663-3.1274 7.125-7.0938 7.125-3.9663 0-7.125-3.1587-7.125-7.125 0-3.9664 3.1587-7.0938 7.125-7.0938h0.2813a3.5035 3.5035 0 1 0 0.3125 -7c-0.1998-0.01-0.3938 0-0.5938 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5549\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#b3b3b3\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"translate(1979.8 863.15)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path5551\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#808080\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"matrix(.78601 0 0 .78601 2078.5 815.96)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path5553\"\n        style=\"fill:#cccccc\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m2434.9 600.96c-20.3 3.0394-35.875 20.541-35.875 41.688s15.575 38.679 35.875 41.719v-83.406zm12.625 0.031v83.344c20.284-3.0534 35.844-20.552 35.844-41.688 0-21.135-15.56-38.603-35.844-41.656z\"\n    />\n    <path\n        id=\"path5555\"\n        d=\"m1978.1 1124c-1.0098 0.01-2.0071 0.4765-2.6563 1.25l-75.719 87.844c-0.1719 0.2111-0.3191 0.4423-0.4375 0.6875l-34.121 26.143c-0.8508 1.6281-0.1436 3.8835 1.4844 4.7344 1.6281 0.8508 3.8836 0.1437 4.7344-1.4844l33.902-25.768 75.469-87.594c0.8866-1.0076 1.1136-2.5465 0.5558-3.7671-0.5578-1.2207-1.87-2.0563-3.212-2.0454z\"\n        sodipodi:nodetypes=\"cccccscccsc\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5557\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#c5c5bf\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"matrix(-1 0 0 -1 2294.5 1052.1)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path5559\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#808080\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"matrix(-.78601 0 0 -.78601 2195.8 1099.2)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path5561\"\n        style=\"fill:#cccccc\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m1839.4 1314.3c20.3-3.0393 35.875-20.541 35.875-41.688s-15.575-38.679-35.875-41.719v83.406zm-12.625-0.031v-83.344c-20.284 3.0534-35.844 20.552-35.844 41.688 0 21.135 15.56 38.603 35.844 41.656z\"\n    />\n    <path\n        id=\"path5563\"\n        d=\"m1362.2 1016.8c-15.897 0.3833-31.436 11.172-29.375 26.719-11.861 6.4736-21.624 10.824-30.812 14.625l-131.06 6.8125c-7.4668 0.3881-7.4716 7.2054 0 7.5938l131.06 6.8125c9.1883 3.8008 18.952 8.1514 30.812 14.625-2.0607 15.547 13.478 26.335 29.375 26.719 16.923 0.4081 34.237-10.955 31.219-40.844l0.4687-10.594h0.062l-0.031-0.5312 0.031-0.5h-0.062l-0.4687-10.594c3.0183-29.889-14.296-41.252-31.219-40.844zm3.3125 9.75c12.519-0.2149 21.747 13.657 13.281 26.562l-24.25-22.75c3.7087-2.5966 7.4633-3.7524 10.969-3.8125zm13.281 57.844c8.4657 12.906-0.762 26.777-13.281 26.562-3.5054-0.06-7.26-1.2159-10.969-3.8125z\"\n        sodipodi:nodetypes=\"sccssccscccccccssccscscc\"\n        style=\"fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5565\"\n        d=\"m1362.6 1074.3 620 3.3437 38.75-8.6562h1.9687l-0.9687-0.2188 0.9687-0.2187h-1.9687l-38.75-8.6875-620 3.375c-2.6796 0.015-11.438 1.2963-11.438 5.5312s8.7579 5.5168 11.438 5.5313z\"\n        sodipodi:nodetypes=\"scccccccsas\"\n        style=\"fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5567\"\n        d=\"m2378.5 363.18 2.4664 1.2855 71.607 37.323 2.4387 1.2711 2.4386-1.2711 71.607-37.323 2.4664-1.2855-2.4387-1.2711-71.607-37.323-2.4663-1.2855-2.4664 1.2855-71.607 37.323-2.4387 1.2711zm9.81 0 66.702-34.766 66.73 34.78-66.702 34.766-66.73-34.78z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5569\"\n        d=\"m2441.6 345.71-2.2813 1.375-11.406 6.9688-0.7188 0.4375v0.8437 4.4688h3v-3.625l8.4063-5.125v9.5312l-3.5938 3.8125-0.9375 1.0313 0.9375 1.0312 3.5938 3.8125v9.5313l-8.4063-5.125v-3.625h-3v4.4687 0.8438l0.7188 0.4375 11.406 6.9687 2.2813 1.375v-2.6562-12.812-0.5938l-0.4063-0.4375-3.0312-3.2187 3.0312-3.25 0.4063-0.4375v-0.5938-12.781-2.6563z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5571\"\n        d=\"m2448 339.42v48.594h3v-48.594h-3zm11.062 0v48.594h3v-48.594h-3z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5573\"\n        d=\"m2459.1 351.33-11.062 24.469 2.7187 1.2187 11.094-24.469-2.75-1.2188z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5575\"\n        d=\"m2467.6 342.36v2.625 37.5h3v-34.906l8 4.5938v22.969h3v-23.812-0.875l-0.75-0.4375-11-6.3437-2.25-1.3125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5577\"\n        d=\"m2457.8 434.39c-4.2082 0-7.5312 3.6568-7.5312 8a1.5002 1.5002 0 1 0 3 0c0-2.8367 2.068-5 4.5312-5 2.4633 0 4.5313 2.1633 4.5313 5 0 1.0173-0.081 1.842-0.5 2.6563-0.4189 0.8142-1.2183 1.7195-2.9688 2.7187-4.2189 2.4083-8.2687 7.1391-8.9375 14.062a1.5002 1.5002 0 0 0 1.5 1.625h12.281a1.5002 1.5002 0 1 0 0 -3h-10.406c1.0027-4.9299 3.9358-8.3089 7.0625-10.094 2.1001-1.1988 3.4255-2.517 4.1563-3.9375s0.8125-2.8442 0.8125-4.0313c0-4.3432-3.3231-8-7.5313-8z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5579\"\n        d=\"m2403.5 434.42a1.5002 1.5002 0 0 0 -0.9375 0.5l-4.2813 5a1.5067 1.5067 0 0 0 2.2813 1.9687l1.625-1.9062v21.969a1.5002 1.5002 0 1 0 3 0v-26.031a1.5002 1.5002 0 0 0 -1.6875 -1.5z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5581\"\n        d=\"m2477.6 434.42a1.5002 1.5002 0 0 0 -1.2188 1.5v11.156a1.5002 1.5002 0 0 0 2.7813 0.8125c0.8305-1.2895 3.2566-2.2812 5.375-2.2812 3.1378 0 5.625 2.446 5.625 5.5625v3.7187c0 3.1165-2.4872 5.5625-5.625 5.5625-2.1156 0-4.4635-1.271-5.3438-2.8125a1.5002 1.5002 0 1 0 -2.5937 1.5c1.5623 2.7359 4.7405 4.3125 7.9375 4.3125 4.7417 0 8.625-3.8296 8.625-8.5625v-3.7187c0-4.7329-3.8833-8.5625-8.625-8.5625-1.7417 0-3.5689 0.4289-5.1563 1.2812v-6.4687h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.2812 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5583\"\n        d=\"m2516 434.42a1.5002 1.5002 0 0 0 -1.0625 0.625l-12.656 18.5a1.5002 1.5002 0 0 0 1.2187 2.3437h11.188v6.0625a1.5002 1.5002 0 1 0 3 0v-6.0625h0.5313a1.5002 1.5002 0 1 0 0 -3h-0.5313v-16.969a1.5002 1.5002 0 0 0 -1.6875 -1.5zm-1.3125 6.3125v12.156h-8.3125l8.3125-12.156z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5585\"\n        d=\"m2373.5 434.42a1.5002 1.5002 0 0 0 -1.1875 1.5v11.156a1.5002 1.5002 0 0 0 2.75 0.8125c0.8305-1.2895 3.2879-2.2812 5.4063-2.2812 3.1378 0 5.5937 2.446 5.5937 5.5625v3.7187c0 3.1165-2.4559 5.5625-5.5937 5.5625-2.1156 0-4.4948-1.271-5.375-2.8125a1.5002 1.5002 0 1 0 -2.5938 1.5c1.5624 2.7359 4.7718 4.3125 7.9688 4.3125 4.7417 0 8.5937-3.8296 8.5937-8.5625v-3.7187c0-4.7329-3.852-8.5625-8.5937-8.5625-1.7311 0-3.5751 0.4086-5.1563 1.25v-6.4375h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.3125 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5587\"\n        d=\"m2429.5 434.42a1.5002 1.5002 0 0 0 -0.9375 0.5l-4.2812 5a1.5067 1.5067 0 1 0 2.2812 1.9687l1.625-1.9062v21.969a1.5002 1.5002 0 1 0 3 0v-26.031a1.5002 1.5002 0 0 0 -1.6875 -1.5z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5589\"\n        d=\"m2412.3 490.67a1.5002 1.5002 0 0 0 -1.1875 0.625l-4.4688 6.0625a1.5002 1.5002 0 1 0 2.4063 1.7812l1.7812-2.4062v21.5a1.5002 1.5002 0 1 0 3 0v-26.062a1.5002 1.5002 0 0 0 -1.5312 -1.5z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5591\"\n        d=\"m2450 501.82c-4.9217 0-8.9329 4.0208-8.9329 8.9543s4.0112 8.9543 8.9329 8.9543 8.9329-4.0208 8.9329-8.9543-4.0112-8.9543-8.9329-8.9543zm0 3.0115c3.3023 0 5.9285 2.6326 5.9285 5.9428 0 3.3103-2.6262 5.983-5.9285 5.983s-5.9285-2.6727-5.9285-5.983c0-3.3102 2.6262-5.9428 5.9285-5.9428z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5593\"\n        d=\"m2450 490.67c-4.9246 0-8.9375 4.0381-8.9375 8.9687v11.125a1.5002 1.5002 0 1 0 3 0v-11.125c0-3.3131 2.6382-5.9687 5.9375-5.9687 2.3902 0 4.5664 1.4467 5.5 3.6562a1.5002 1.5002 0 1 0 2.75 -1.1875c-1.3985-3.3097-4.6605-5.4687-8.25-5.4687z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5595\"\n        d=\"m2427.1 508.61c4.9217 0 8.9329-4.0208 8.9329-8.9543s-4.0112-8.9544-8.9329-8.9544-8.9329 4.0209-8.9329 8.9544 4.0112 8.9543 8.9329 8.9543zm0-3.0115c-3.3023 0-5.9285-2.6326-5.9285-5.9428 0-3.3103 2.6262-5.983 5.9285-5.983s5.9285 2.6727 5.9285 5.983c0 3.3102-2.6262 5.9428-5.9285 5.9428z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5597\"\n        d=\"m2434.6 498.11a1.5002 1.5002 0 0 0 -1.5 1.5312v11.125c0 3.3132-2.6381 5.9688-5.9375 5.9688-2.3902 0-4.5351-1.4155-5.4688-3.625a1.506 1.506 0 1 0 -2.7812 1.1562c1.3986 3.3097 4.6606 5.4688 8.25 5.4688 4.9246 0 8.9375-4.0382 8.9375-8.9688v-11.125a1.5002 1.5002 0 0 0 -1.5 -1.5312z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5599\"\n        d=\"m2465.8 490.49a1.5002 1.5002 0 0 0 -1.375 1.5v11.156a1.5002 1.5002 0 0 0 2.7813 0.8125c0.8305-1.2895 3.2566-2.2812 5.375-2.2812 3.1378 0 5.625 2.4772 5.625 5.5937v3.6875c0 3.1165-2.4872 5.5938-5.625 5.5938-2.1156 0-4.4635-1.3023-5.3438-2.8438a1.5002 1.5002 0 1 0 -2.5937 1.5c1.5623 2.7359 4.7405 4.3438 7.9375 4.3438 4.7417 0 8.625-3.8609 8.625-8.5938v-3.6875c0-4.7328-3.8833-8.5937-8.625-8.5937-1.7417 0-3.5689 0.4289-5.1563 1.2812v-6.4687h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.125 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5601\"\n        d=\"m2497.9 494.74a1.5002 1.5002 0 0 0 -1.3437 1.5v18.562a1.5002 1.5002 0 1 0 3 0v-17.062h7.7812a1.5002 1.5002 0 1 0 0 -3h-9.2812a1.5002 1.5002 0 0 0 -0.1563 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5603\"\n        d=\"m2315.9-15.107a1.5081 1.5081 0 1 0 0.3125 3h20.469a1.5002 1.5002 0 1 0 0 -3h-20.469a1.5002 1.5002 0 0 0 -0.3125 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5605\"\n        d=\"m2326.4-15.294a2.5002 2.5002 0 0 0 -2.4687 2.5313v36.125a2.5002 2.5002 0 1 0 5 0v-36.125a2.5002 2.5002 0 0 0 -2.5313 -2.5313z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5607\"\n        d=\"m2346.2-15.107a1.5066 1.5066 0 0 0 0.2813 3h20.5a1.5002 1.5002 0 1 0 0 -3h-20.5a1.5002 1.5002 0 0 0 -0.2813 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5609\"\n        d=\"m2356.7-15.294a2.5002 2.5002 0 0 0 -2.4687 2.5313v36.125a2.5002 2.5002 0 1 0 5 0v-36.125a2.5002 2.5002 0 0 0 -2.5313 -2.5313z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5611\"\n        d=\"m2384.4-22.33c-4.0185 0-7.3125 3.2939-7.3125 7.3125 0 4.0185 3.294 7.3125 7.3125 7.3125s7.3125-3.294 7.3125-7.3125c0-4.0186-3.294-7.3125-7.3125-7.3125zm0 3c2.3972 0 4.3125 1.9152 4.3125 4.3125 0 2.3972-1.9153 4.3125-4.3125 4.3125s-4.3125-1.9153-4.3125-4.3125c0-2.3973 1.9153-4.3125 4.3125-4.3125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5613\"\n        d=\"m2384.4-10.587c-4.0185 0-7.3125 3.2939-7.3125 7.3125 0 4.0185 3.294 7.3125 7.3125 7.3125s7.3125-3.294 7.3125-7.3125c0-4.0186-3.294-7.3125-7.3125-7.3125zm0 3c2.3972 0 4.3125 1.9153 4.3125 4.3125s-1.9153 4.3125-4.3125 4.3125-4.3125-1.9153-4.3125-4.3125 1.9153-4.3125 4.3125-4.3125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5615\"\n        d=\"m2402.6-22.825c-4.0276 0-7.3125 3.2848-7.3125 7.3125v11.719c0 4.0276 3.2849 7.3438 7.3125 7.3438 4.0277 0 7.3125-3.3162 7.3125-7.3438v-11.719c0-4.0277-3.2848-7.3125-7.3125-7.3125zm0 3c2.4176 0 4.3125 1.8949 4.3125 4.3125v11.719c0 2.4175-1.8949 4.3438-4.3125 4.3438-2.4175 0-4.3125-1.9263-4.3125-4.3438v-11.719c0-2.4176 1.895-4.3125 4.3125-4.3125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5617\"\n        d=\"m2420.7-22.825c-4.0276 0-7.3125 3.2848-7.3125 7.3125v11.719c0 4.0276 3.2849 7.3438 7.3125 7.3438 4.0277 0 7.3125-3.3162 7.3125-7.3438v-11.719c0-4.0277-3.2848-7.3125-7.3125-7.3125zm0 3c2.4176 0 4.3125 1.8949 4.3125 4.3125v11.719c0 2.4175-1.8949 4.3438-4.3125 4.3438-2.4175 0-4.3125-1.9263-4.3125-4.3438v-11.719c0-2.4176 1.895-4.3125 4.3125-4.3125z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5619\"\n        d=\"m2376.6 8.3623a1.502 1.502 0 1 0 0.1562 3h52.25a1.5002 1.5002 0 1 0 0 -3h-52.25a1.5002 1.5002 0 0 0 -0.1562 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5621\"\n        d=\"m2397.8 13.925a1.5002 1.5002 0 0 0 -1.3438 1.5v10.281a1.5002 1.5002 0 0 0 1.5 1.5h6.2188c2.3448 0 4.3125 2.145 4.3125 4.5625s-1.895 4.3125-4.3125 4.3125h-6.4375a1.5002 1.5002 0 1 0 0 3h6.4375c4.0276 0 7.3125-3.2849 7.3125-7.3125s-3.2122-7.5625-7.3125-7.5625h-4.7188v-7.2812h10.188a1.5002 1.5002 0 1 0 0 -3h-11.688a1.5002 1.5002 0 0 0 -0.1562 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5623\"\n        sodipodi:nodetypes=\"sssssssssss\"\n        style=\"fill:url(#linearGradient7109)\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m1156-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.979 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.03-746.03c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.979-53.114-119.09-119.09-119.09z\"\n    />\n    <path\n        id=\"path5625\"\n        d=\"m1978.3 1141.4c7.7494 0 14.125-6.3443 14.125-14.094 0-7.7494-6.3756-14.125-14.125-14.125s-14.094 6.3756-14.094 14.125a3.5004 3.5004 0 1 0 7 0c0-3.9663 3.1275-7.125 7.0938-7.125s7.125 3.1587 7.125 7.125-3.1587 7.0937-7.125 7.0937h-0.2813a3.5035 3.5035 0 1 0 -0.3125 7c0.1999 0.01 0.3938 0 0.5938 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5627\"\n        d=\"m2064.1 1081.8-81.428-2.0594v-22.31l81.428-2.0594z\"\n        sodipodi:nodetypes=\"ccccc\"\n        style=\"fill:#b3b3b3\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <rect\n        id=\"rect5629\"\n        style=\"fill:#333333\"\n        rx=\"22.5\"\n        ry=\"22.5\"\n        height=\"45\"\n        width=\"294.29\"\n        y=\"1014.8\"\n        x=\"2425.5\"\n    />\n    <path\n        id=\"path5631\"\n        style=\"fill:#333333\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m2430.3 1122.6c-65.126 0-119.22 47.238-129.91 109.31h-70.969c-12.465 0-22.5 10.035-22.5 22.5s10.035 22.5 22.5 22.5h70.969c10.674 62.089 64.77 109.34 129.91 109.34 65.138 0 119.23-47.252 129.91-109.34h137.06c12.465 0 22.5-10.035 22.5-22.5s-10.035-22.5-22.5-22.5h-137.06c-10.694-62.106-64.814-109.31-129.91-109.31z\"\n    />\n    <path\n        id=\"path5633\"\n        sodipodi:rx=\"131.82491\"\n        sodipodi:ry=\"131.82491\"\n        style=\"fill:#000000\"\n        sodipodi:type=\"arc\"\n        d=\"m582.35 401.32c0 72.805-59.02 131.82-131.82 131.82-72.805 0-131.82-59.02-131.82-131.82 0-72.805 59.02-131.82 131.82-131.82 72.522 0 131.42 58.579 131.82 131.1\"\n        sodipodi:open=\"true\"\n        transform=\"matrix(.67433 0 0 .67433 2126.5 983.82)\"\n        sodipodi:cy=\"401.31888\"\n        sodipodi:cx=\"450.52805\"\n        sodipodi:end=\"6.2776887\"\n        sodipodi:start=\"0\"\n    />\n    <path\n        id=\"path5635\"\n        style=\"fill:#333333\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m2430.3 1175.6c-43.516 0-78.781 35.266-78.781 78.781 0 7.6897 1.1023 15.13 3.1563 22.156l145.66-58.188c-13.09-25.386-39.524-42.75-70.031-42.75zm75.625 56.656-145.69 58.188c13.086 25.38 39.541 42.75 70.062 42.75 43.516 0 78.781-35.297 78.781-78.812v-0.4063c-0.041-7.535-1.1424-14.828-3.1562-21.719z\"\n    />\n    <rect\n        id=\"rect5637\"\n        style=\"fill:#333333\"\n        rx=\"22.5\"\n        ry=\"22.5\"\n        height=\"45\"\n        width=\"710\"\n        y=\"1431.9\"\n        x=\"2009.8\"\n    />\n    <rect\n        id=\"rect3007\"\n        style=\"fill:#000000\"\n        rx=\"129.3\"\n        ry=\"129.3\"\n        height=\"2055.1\"\n        width=\"2055.1\"\n        y=\"-352.34\"\n        x=\"-1430.8\"\n    />\n    <rect\n        id=\"rect3777\"\n        style=\"fill:#333333\"\n        rx=\"90.728\"\n        ry=\"90.728\"\n        height=\"1962.4\"\n        width=\"1962.4\"\n        y=\"-305.98\"\n        x=\"-1384.5\"\n    />\n    <rect\n        id=\"rect3779\"\n        style=\"fill:#000000\"\n        rx=\"70.525\"\n        ry=\"70.525\"\n        height=\"1909.9\"\n        width=\"1909.9\"\n        y=\"-279.72\"\n        x=\"-1358.2\"\n    />\n    <rect\n        id=\"rect3788\"\n        style=\"fill:#333333\"\n        rx=\"22.5\"\n        ry=\"22.5\"\n        height=\"45\"\n        width=\"97.857\"\n        y=\"802.65\"\n        x=\"375.37\"\n    />\n    <path\n        id=\"path3796\"\n        d=\"m-1106.1-149.32c-67.467 0-121.78 54.312-121.78 121.78v1405.5c0 67.467 54.312 121.78 121.78 121.78h680.32c29.662 0 47.115-4.0297 64.849-21.729l755.83-754.34c23.851-23.803 26.352-40.896 26.352-72.473v-678.83c0-67.467-54.312-121.78-121.78-121.78z\"\n        sodipodi:nodetypes=\"sssssssssss\"\n        style=\"fill:#333333\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5147\"\n        style=\"fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-208.21 1279.8 438.57-428.57h-444.29z\"\n    />\n    <path\n        id=\"path4313\"\n        style=\"fill:#808080\"\n        d=\"m-57.668 1027.6-22.374-55.287c-3.7493-9.2645 8.4839-21.25 6.9082-31.307l-7.0674-45.107 28.238-11.428 26.293 37.327c5.8618 8.3215 22.988 8.4258 26.737 17.69l22.374 55.287\"\n        inkscape:transform-center-x=\"34.646394\"\n        inkscape:transform-center-y=\"-112.74235\"\n        inkscape:connector-curvature=\"0\"\n        sodipodi:nodetypes=\"cssccscc\"\n    />\n    <path\n        id=\"path4263\"\n        style=\"fill:#e6e6e6\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-41.063 1048.4-48.571-54.286 33.571-33.571 54.286 54.286\"\n    />\n    <path\n        id=\"path4265\"\n        sodipodi:nodetypes=\"ccccccccccc\"\n        style=\"fill:#cccccc\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-131.78 1205.5-37.143-36.429 11.429-12.857 30.714 6.4286 54.286-54.286c-6.7698-14.828-2.7537-22.791 11.428-24.286-18.934-68.674 49.856-114.43 102.86-90l60.714-60-12.143-30 11.429-10 41.428 35\"\n    />\n    <path\n        id=\"rect3781\"\n        style=\"fill:#e1e1d1\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-1090.6-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.98 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.08-745.9c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.98-53.114-119.09-119.09-119.09h-1374.5zm1096.7 1000.2h189.31l-387.34 382.16v-178.94c0-107.21 90.807-203.22 198.03-203.22z\"\n    />\n    <path\n        id=\"path5854\"\n        d=\"m-823.78 1579.8c-65.979 0-119.09 53.114-119.09 119.09v1374.5c0 51.168 31.947 94.61 77.062 111.53-1.8213-8.3056-2.7812-16.944-2.7812-25.813v-1374.5c0-65.979 53.114-119.09 119.09-119.09h1374.5c14.812 0 28.972 2.6957 42.031 7.5938-11.729-53.488-59.201-93.312-116.31-93.312h-1374.5z\"\n        style=\"opacity:.85774;filter:url(#filter5708);fill:#000000\"\n        transform=\"matrix(1.037 0 0 1.037 -262.68 -1806.5)\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path4143\"\n        sodipodi:nodetypes=\"cccccccccccc\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-897.19 202.71-1.1875-5.5312-30.281-141.12h13.687l27.813 126.53 33.875-126.53h13.531l-36.906 141.47-1.4063 5.1875h-5.375-8.0625z\"\n    />\n    <path\n        id=\"path3927\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-1081.2 1066.7a3.5004 3.5004 0 0 0 1.0743 6.8659l119.98-0.1356a3.5004 3.5004 0 1 0 -0.016 -6.9996l-119.98 0.1356a3.5004 3.5004 0 0 0 -1.0582 0.1337z\"\n        inkscape:transform-center-x=\"1026.1266\"\n        inkscape:transform-center-y=\"1.2277805\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path3959\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-1076.7 973.88c-1.7172 0.1873-3.152 1.8167-3.1203 3.5439 0.032 1.7271 1.5251 3.3029 3.248 3.4271l127.18 10.755c1.8326 0.1672 3.6502-1.3563 3.8058-3.1899s-1.3794-3.6416-3.2139-3.7856l-127.18-10.755c-0.2391-0.023-0.4806-0.022-0.7194 0zm160 13.54c-1.7213-0.1455-3.152 1.8167-3.1203 3.5439 0.032 1.7271 1.5251 3.3029 3.248 3.4271l4.4928 0.3709c1.8325 0.1671 3.6502-1.3564 3.8057-3.1899 0.1556-1.8336-1.3794-3.6416-3.2139-3.7856l-4.4927-0.3709c-0.2391-0.023-0.4806-0.022-0.7194 0z\"\n        inkscape:transform-center-x=\"999.99804\"\n        inkscape:transform-center-y=\"-84.5624\"\n        inkscape:connector-curvature=\"0\"\n        sodipodi:nodetypes=\"csccsccccssccscccs\"\n    />\n    <path\n        id=\"rect4112\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-516.79 412.2c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z\"\n    />\n    <path\n        id=\"rect4114\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-444.57 412.2c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.724 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5255 19.25-19.25 19.25-10.725 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z\"\n    />\n    <path\n        id=\"rect4116\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-689.77 649.6c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.201-27.219-27.219-27.219zm0 8c10.725 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25-10.724 0-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5255-19.219 19.25-19.219z\"\n    />\n    <path\n        id=\"rect4118\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-617.55 649.6c-15.018 0-27.25 12.201-27.25 27.219v40.406c0 15.018 12.232 27.25 27.25 27.25s27.219-12.232 27.219-27.25v-40.406c0-15.018-12.201-27.219-27.219-27.219zm0 8c10.724 0 19.219 8.4942 19.219 19.219v40.406c0 10.725-8.4942 19.25-19.219 19.25s-19.25-8.5254-19.25-19.25v-40.406c0-10.725 8.5254-19.219 19.25-19.219z\"\n    />\n    <path\n        id=\"path4122\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-768.21 649.57c-14.558 0-26.594 11.436-26.594 25.656a4.0004 4.0004 0 1 0 8 0c0-9.7079 8.1783-17.656 18.594-17.656 10.415 0 18.625 7.9483 18.625 17.656 0 3.4188-0.3012 6.2393-1.9687 9.125-1.6676 2.8857-4.8983 6.1281-11.656 9.5625-15.36 7.8058-30.328 23.228-32.812 46.125a4.0004 4.0004 0 0 0 3.9688 4.4375h45.969a4.0004 4.0004 0 1 0 0 -8h-41.219c3.4595-17.376 15.261-29.122 27.688-35.438 7.6555-3.8905 12.332-8.1255 14.969-12.688 2.6363-4.5619 3.0625-9.1977 3.0625-13.125 0-14.22-12.067-25.656-26.625-25.656z\"\n    />\n    <path\n        id=\"rect4130\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-8.1876 197.04c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.201 27.25 27.219 27.25s27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z\"\n    />\n    <path\n        id=\"path4132\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-102.13 197.01a4.0004 4.0004 0 0 0 -4 4v37.25a4.0004 4.0004 0 0 0 7.375 2.125c2.9991-4.7533 11.204-8.0625 18.344-8.0625 10.688 0 19.25 8.648 19.25 19.625v12.344c0 10.977-8.5616 19.625-19.25 19.625-7.2063 0-15.115-4.3265-18.219-9.875a4.0081 4.0081 0 1 0 -7 3.9063c4.8761 8.7154 15.069 13.969 25.219 13.969 15.054 0 27.25-12.426 27.25-27.625v-12.344c0-15.2-12.196-27.625-27.25-27.625-5.9927 0-12.456 1.4611-17.719 4.6875v-24h35.406a4.0004 4.0004 0 1 0 0 -8h-39.406z\"\n    />\n    <path\n        id=\"path4159\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-984.92 1208.6a2.5002 2.5002 0 0 0 -1.8125 0.8437l-7.8125 8.9063a2.5018 2.5018 0 1 0 3.75 3.3125l3.4375-3.9063v39.781a2.5002 2.5002 0 1 0 5 0v-46.438a2.5002 2.5002 0 0 0 -2.5625 -2.5z\"\n    />\n    <path\n        id=\"path4161\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-963.1 1208.6a2.5002 2.5002 0 0 0 -2.25 2.5v19.906a2.5002 2.5002 0 0 0 4.625 1.3125c1.5017-2.3801 5.7817-4.125 9.5-4.125 5.5171 0 9.9062 4.4472 9.9062 10.125v6.5938c0 5.6778-4.3891 10.125-9.9062 10.125-3.7197 0-7.858-2.2704-9.4375-5.0938a2.5041 2.5041 0 1 0 -4.375 2.4375c2.6869 4.8027 8.253 7.6563 13.812 7.6563 8.2458 0 14.906-6.8081 14.906-15.125v-6.5938c0-8.3168-6.6604-15.125-14.906-15.125-3.0809 0-6.3424 0.7823-9.125 2.3438v-11.938h18.562a2.5002 2.5002 0 1 0 0 -5h-21.062a2.5002 2.5002 0 0 0 -0.25 0z\"\n    />\n    <path\n        id=\"path4165\"\n        style=\"fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-972.35 1253.6c-2.2316 0-4.0625 1.8309-4.0625 4.0625 0 1.973 1.4112 3.5833 3.2812 3.9375-0.352 1.6422-0.8243 3.5675-1.625 6.4062 3.379-3.3496 5.078-6.1447 6.0625-8.6875 0.013-0.033 0.05-0.061 0.062-0.094v-0.031c0.1971-0.4759 0.3125-0.984 0.3125-1.5312 0-2.2316-1.7996-4.0625-4.0312-4.0625z\"\n    />\n    <path\n        id=\"path4170\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-1077.3 1219.9c-5.4507 0.026-10.966 1.9221-16 6.6563a2.5092 2.5092 0 1 0 3.4375 3.6562c5.6657-5.3285 10.954-6.1333 16.938-4.875 5.9835 1.2583 12.504 4.8899 19.125 8.7188 6.6209 3.8289 13.346 7.8504 20.312 9.5312 6.9668 1.6809 14.393 0.7108 20.875-5.2812a2.51 2.51 0 1 0 -3.4062 -3.6875c-5.3695 4.9636-10.436 5.5429-16.312 4.125-5.8769-1.4179-12.328-5.1595-18.969-9-6.6411-3.8406-13.471-7.7833-20.594-9.2813-1.7808-0.3745-3.5894-0.5713-5.4063-0.5625z\"\n    />\n    <path\n        id=\"path4172\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-852.33 1185.2c-1.653 0-3.0458 1.0383-3.5937 2.5l-34.656 12.281v-9.2812a2.5002 2.5002 0 0 0 -2.5312 -2.5313 2.5002 2.5002 0 0 0 -2.4688 2.5313v11.062l-11.219 3.9687a2.5002 2.5002 0 0 0 0 4.7188l11.219 3.9375v5.1562l-11.219 3.9688a2.5002 2.5002 0 0 0 0 4.7187l11.219 3.9688v5.125l-11.219 3.9687a2.5002 2.5002 0 0 0 0 4.7188l50.875 18.031c0.5479 1.4617 1.9407 2.5313 3.5937 2.5313 2.1292 0 3.8438-1.7459 3.8438-3.875 0-2.1292-1.7146-3.8438-3.8438-3.8438-0.698 0-1.3415 0.2068-1.9062 0.5313l-36.344-12.906a2.5002 2.5002 0 0 0 0 -0.1875v-5.4062l10.562-3.75a2.5002 2.5002 0 0 0 0 -4.7188l-10.562-3.75v-5.625l10.562-3.75a2.5002 2.5002 0 0 0 0 -4.6875l-10.562-3.75v-5.5937l36.344-12.875c0.5647 0.3244 1.2082 0.5312 1.9062 0.5312 2.1292 0 3.8438-1.7458 3.8438-3.875 0-2.1291-1.7146-3.8437-3.8438-3.8437zm-43.25 21.844v2.0625l-2.9062-1.0312 2.9062-1.0313zm5 9.0938 2.2813 0.8125-2.2813 0.8125v-1.625zm-5 8.6875v2.0625l-2.9062-1.0313 2.9062-1.0312zm5 9.1562 2.25 0.7813-2.25 0.7812v-1.5625zm-5 8.6563v2.0625l-2.9062-1.0313 2.9062-1.0312z\"\n    />\n    <path\n        id=\"path4195\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-788.35 1184.2a2.5002 2.5002 0 0 0 -1.7841 1.1002l-14.719 21.974-25.423 7.2255a2.5002 2.5002 0 0 0 -1.2786 3.9547l16.354 20.784-0.9515 26.434a2.5002 2.5002 0 0 0 3.36 2.4085l24.799-9.0988 24.828 9.069a2.5002 2.5002 0 0 0 3.3601 -2.4382l-1.011-26.404 16.295-20.814a2.5002 2.5002 0 0 0 -1.2786 -3.9547l-25.423-7.2255-14.748-21.914a2.5002 2.5002 0 0 0 -2.3788 -1.1002zm0.2973 6.9877 13.202 19.595a2.5002 2.5002 0 0 0 1.3976 1.011l22.717 6.4524-14.57 18.584a2.5002 2.5002 0 0 0 -0.5353 1.6354l0.8921 23.609-22.182-8.0879a2.5002 2.5002 0 0 0 -1.7246 0l-22.182 8.1473 0.8623-23.639a2.5002 2.5002 0 0 0 -0.5352 -1.6354l-14.57-18.554 22.688-6.4821a2.5002 2.5002 0 0 0 1.3975 -1.011l13.143-19.625z\"\n    />\n    <path\n        id=\"path4201\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-788.4 1216c-4.8517 0-8.8125 3.9608-8.8125 8.8125a2.1387 2.1387 0 1 0 4.25 0c0-2.5403 2.0222-4.5312 4.5625-4.5312s4.5625 1.9909 4.5625 4.5312c0 0.6956-0.176 1.0804-0.9062 1.9688s-1.9841 2.0898-3.4063 3.8125l-9.3437 11.312a2.1387 2.1387 0 0 0 1.6562 3.5h15.406a2.1406 2.1406 0 0 0 0 -4.2813h-10.875l6.4375-7.8125c1.2474-1.511 2.4036-2.5926 3.4062-3.8125 1.0026-1.2198 1.9063-2.8108 1.9063-4.6875 0-4.8517-3.992-8.8125-8.8438-8.8125z\"\n    />\n    <path\n        id=\"path4204\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-719.32 1204.4a2.5002 2.5002 0 0 0 -2.25 2.5v39.656a2.5002 2.5002 0 0 0 2.75 2.5h0.031 8.5625c7.6375 0 13.844-6.2375 13.844-13.875 0-7.6376-6.2062-13.844-13.844-13.844h-6.3438v-11.938h14.156a2.5002 2.5002 0 1 0 0 -5h-16.656a2.5002 2.5002 0 0 0 -0.25 0zm2.75 21.938h6.3437c4.954 0 8.8438 3.8897 8.8438 8.8438 0 4.954-3.8898 8.875-8.8438 8.875h-6.3437v-17.719z\"\n    />\n    <path\n        id=\"path4213\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-667.07 1189.1a2.1387 2.1387 0 0 0 -2.125 2.1875v68.688a2.1406 2.1406 0 0 0 4.2812 0v-68.688a2.1387 2.1387 0 0 0 -2.1562 -2.1875z\"\n    />\n    <path\n        id=\"path4215\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-696.1 1257.9a2.5031 2.5031 0 1 0 0.25 5h57.594a2.5002 2.5002 0 1 0 0 -5h-57.594a2.5002 2.5002 0 0 0 -0.25 0z\"\n    />\n    <path\n        id=\"path4217\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-997.61 1301.5a2.7908 2.7908 0 0 0 -2.5192 2.7905v33.331a2.7908 2.7908 0 1 0 5.5809 0v-30.54h10.387a2.7908 2.7908 0 1 0 0 -5.581h-13.177a2.7908 2.7908 0 0 0 -0.2713 0z\"\n    />\n    <path\n        id=\"rect4219\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-967.11 1301.5c-7.3104 0-13.294 5.9832-13.294 13.294v12.363c0 7.3104 5.9832 13.255 13.294 13.255 7.3104 0 13.294-5.9445 13.294-13.255v-12.363c0-7.3104-5.9832-13.294-13.294-13.294zm0 5.581c4.3151 0 7.7126 3.3975 7.7126 7.7126v12.363c0 4.3151-3.3975 7.6739-7.7126 7.6739-4.315 0-7.7126-3.3588-7.7126-7.6739v-12.363c0-4.3151 3.3976-7.7126 7.7126-7.7126z\"\n    />\n    <path\n        id=\"rect4221\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-939.56 1301.5c-7.3103 0-13.294 5.9832-13.294 13.294v12.363c0 7.3104 5.9833 13.255 13.294 13.255 6.1555 0 11.384-4.1964 12.867-9.9218a2.7908 2.7908 0 1 0 -5.3872 -1.3952c-0.8578 3.3113-3.8467 5.736-7.4801 5.736-4.315 0-7.7126-3.3588-7.7126-7.6739v-12.363c0-4.3151 3.3976-7.7126 7.7126-7.7126 3.63 0 6.5804 2.4293 7.4414 5.736a2.8012 2.8012 0 1 0 5.4259 -1.3953c-1.4886-5.7173-6.7175-9.9217-12.867-9.9217z\"\n    />\n    <path\n        id=\"path4224\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-913.39 1301.5a2.7908 2.7908 0 0 0 -2.4804 2.8293v33.331a2.7908 2.7908 0 1 0 5.581 0v-33.331a2.7908 2.7908 0 0 0 -3.1006 -2.8293z\"\n    />\n    <path\n        id=\"path4226\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-921.92 1301.5a2.7938 2.7938 0 1 0 0.2713 5.581h17.131a2.7908 2.7908 0 1 0 0 -5.581h-17.131a2.7908 2.7908 0 0 0 -0.2713 0z\"\n    />\n    <path\n        id=\"path4232\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-871.11 1301.5c-5.4866 0-9.9993 4.5127-9.9993 9.9993s4.5127 9.9993 9.9993 9.9993c5.4865 0 9.9992-4.5127 9.9992-9.9993s-4.5127-9.9993-9.9992-9.9993zm0 5.581c2.4704 0 4.4183 1.9479 4.4183 4.4183s-1.9479 4.4183-4.4183 4.4183-4.4183-1.9479-4.4183-4.4183 1.9479-4.4183 4.4183-4.4183z\"\n    />\n    <path\n        id=\"path4234\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-871.11 1315.8c-6.7839 0-12.335 5.5509-12.335 12.335 0 6.7839 5.5509 12.335 12.335 12.335 6.7839 0 12.335-5.5509 12.335-12.335 0-6.7839-5.5509-12.335-12.335-12.335zm0 5.5506c3.7677 0 6.7841 3.0165 6.7841 6.7842s-3.0164 6.7841-6.7841 6.7841-6.7842-3.0164-6.7842-6.7841 3.0165-6.7842 6.7842-6.7842z\"\n    />\n    <path\n        id=\"path4236\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-853.24 1301.5a2.7948 2.7948 0 1 0 0.31 5.581h9.8055c-4.1407 8.1507-7.5055 18.252-10.348 29.882a2.7918 2.7918 0 0 0 5.4259 1.3178c3.274-13.394 7.1815-24.728 11.898-32.556a2.7908 2.7908 0 0 0 -2.403 -4.2245h-14.379a2.7908 2.7908 0 0 0 -0.31 0z\"\n    />\n    <path\n        id=\"path4240\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-817.47 1301.5a2.7908 2.7908 0 0 0 -2.1704 1.1239l-5.8135 7.7514a2.7908 2.7908 0 1 0 4.457 3.3331l0.8139-1.0852v24.998a2.7908 2.7908 0 1 0 5.581 0v-33.331a2.7908 2.7908 0 0 0 -2.868 -2.7905z\"\n    />\n    <path\n        id=\"path4250\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-797.9 1301.5a2.7908 2.7908 0 0 0 -2.1316 1.1239l-5.8136 7.7514a2.7908 2.7908 0 1 0 4.4571 3.3331l0.7751-1.0464v24.959a2.7908 2.7908 0 1 0 5.581 0v-33.331a2.7908 2.7908 0 0 0 -2.868 -2.7905z\"\n    />\n    <path\n        id=\"rect4252\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-726.59 1301.5c-7.3104 0-13.294 5.9832-13.294 13.294v12.363c0 7.3104 5.9832 13.255 13.294 13.255 7.3104 0 13.294-5.9445 13.294-13.255v-12.363c0-7.3104-5.9832-13.294-13.294-13.294zm0 5.581c4.3151 0 7.7127 3.3975 7.7127 7.7126v12.363c0 4.3151-3.3976 7.6739-7.7127 7.6739-4.315 0-7.7126-3.3588-7.7126-7.6739v-12.363c0-4.3151 3.3976-7.7126 7.7126-7.7126z\"\n    />\n    <path\n        id=\"path4254\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-753.51 1315.8c-6.7839 0-12.335 5.5509-12.335 12.335 0 6.7839 5.5509 12.335 12.335 12.335 6.7839 0 12.335-5.5509 12.335-12.335 0-6.7839-5.5509-12.335-12.335-12.335zm0 5.5506c3.7677 0 6.7841 3.0165 6.7841 6.7842s-3.0164 6.7841-6.7841 6.7841-6.7842-3.0164-6.7842-6.7841 3.0165-6.7842 6.7842-6.7842z\"\n    />\n    <path\n        id=\"path4258\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-753.52 1301.5c-6.7839 0-12.325 5.5408-12.325 12.325v14.262a2.7908 2.7908 0 1 0 5.581 0v-14.262c0-3.7677 2.976-6.7437 6.7437-6.7437 2.7232 0 5.1777 1.6007 6.2399 4.1082a2.7965 2.7965 0 1 0 5.1546 -2.1704c-1.9302-4.5568-6.4457-7.5188-11.394-7.5188z\"\n    />\n    <path\n        id=\"path4261\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-787.63 1317.3a2.7938 2.7938 0 1 0 0.2713 5.581h14.418a2.7908 2.7908 0 1 0 0 -5.581h-14.418a2.7908 2.7908 0 0 0 -0.2713 0z\"\n    />\n    <path\n        id=\"rect4271\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m144.24 272.53c-6.7856 0-12.69 3.8407-15.594 9.5a2.5002 2.5002 0 1 0 4.4375 2.2812c2.0712-4.0371 6.2544-6.7812 11.156-6.7812 6.9827 0 12.531 5.5486 12.531 12.531v21.344c0 6.9826-5.5486 12.531-12.531 12.531-4.4773 0-8.3427-2.2743-10.562-5.75a2.501 2.501 0 1 0 -4.2187 2.6875c3.1089 4.8679 8.5832 8.0625 14.781 8.0625 9.6662 0 17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.8651-17.531-17.531-17.531z\"\n    />\n    <path\n        id=\"rect4273\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m221.24 272.53c-9.6661 0-17.5 7.865-17.5 17.531v21.344c0 9.6661 7.8339 17.531 17.5 17.531 9.6662 0 17.531-7.8651 17.531-17.531v-21.344c0-9.6662-7.8651-17.531-17.531-17.531zm0 5c6.9827 0 12.531 5.5485 12.531 12.531v21.344c0 6.9826-5.5486 12.531-12.531 12.531-6.9826 0-12.5-5.5486-12.5-12.531v-21.344c0-6.9827 5.5174-12.531 12.5-12.531z\"\n    />\n    <path\n        id=\"path4275\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m169.86 272.53a2.5031 2.5031 0 1 0 0.25 5h18.156l-12.375 17.5a2.5002 2.5002 0 0 0 2.3437 3.9375c5.7215-0.6862 9.0208 0.5421 11.188 2.4375 2.1668 1.8954 3.3312 4.7379 3.7813 7.7187 0.4713 3.1214-0.2842 6.6267-1.9063 9.4063-1.622 2.7795-4.0115 4.7449-6.7187 5.25-4.475 0.8347-10.174-1.6848-12.25-5.8438a2.5016 2.5016 0 1 0 -4.4688 2.25c3.2375 6.4873 10.824 9.7687 17.625 8.5 4.4334-0.827 7.9333-3.8692 10.125-7.625 2.1918-3.7558 3.1946-8.2945 2.5313-12.688-0.5669-3.7543-2.0648-7.7957-5.4063-10.719-2.4107-2.1089-5.7373-3.4771-9.9062-3.7813l12.312-17.406a2.5002 2.5002 0 0 0 -2.0625 -3.9375h-22.969a2.5002 2.5002 0 0 0 -0.25 0z\"\n    />\n    <path\n        id=\"path4281\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m145.11 298.25a2.5031 2.5031 0 1 0 0.25 5h13.125a2.5002 2.5002 0 1 0 0 -5h-13.125a2.5002 2.5002 0 0 0 -0.25 0z\"\n    />\n    <path\n        id=\"path4285\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m147.41 654.11a3.5004 3.5004 0 0 0 -3 1.9063l-22 41.875-75.406 87.469a3.5014 3.5014 0 1 0 5.3125 4.5625l75.688-87.844a3.5004 3.5004 0 0 0 0.4687 -0.6563l22.125-42.156a3.5004 3.5004 0 0 0 -3.1875 -5.1563z\"\n    />\n    <path\n        id=\"path4287\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m49.41 773.83c-7.7494 0-14.125 6.3443-14.125 14.094 0 7.7494 6.3756 14.125 14.125 14.125s14.094-6.3756 14.094-14.125a3.5004 3.5004 0 1 0 -7 0c0 3.9663-3.1274 7.125-7.0938 7.125-3.9663 0-7.125-3.1587-7.125-7.125s3.1587-7.0937 7.125-7.0937h0.2813a3.5035 3.5035 0 1 0 0.3125 -7c-0.1998-0.01-0.3938 0-0.5938 0z\"\n    />\n    <path\n        id=\"path4283\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#b3b3b3\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"translate(-266.78 863.15)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path4294\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#808080\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"matrix(.78601 0 0 .78601 -168.03 815.96)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path4289\"\n        style=\"fill:#cccccc\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m188.35 600.96c-20.3 3.0393-35.875 20.541-35.875 41.688s15.575 38.679 35.875 41.719v-83.406zm12.625 0.031v83.344c20.284-3.0534 35.844-20.552 35.844-41.688 0-21.135-15.56-38.603-35.844-41.656z\"\n    />\n    <path\n        id=\"path4296\"\n        sodipodi:nodetypes=\"cccccscccsc\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#cc9168\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-268.5 1124c-1.0098 0.01-2.0071 0.4765-2.6563 1.25l-75.719 87.844c-0.1719 0.2111-0.3191 0.4424-0.4375 0.6875l-34.12 26.143c-0.8509 1.628-0.1437 3.8835 1.4843 4.7343 1.6281 0.8509 3.8836 0.1437 4.7344-1.4843l33.902-25.768 75.469-87.594c0.8866-1.0076 1.1136-2.5465 0.5558-3.7672s-1.87-2.0562-3.212-2.0453z\"\n    />\n    <path\n        id=\"path4300\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#c5c5bf\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"matrix(-1 0 0 -1 47.927 1052.1)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path4302\"\n        sodipodi:rx=\"54.285713\"\n        sodipodi:ry=\"54.285713\"\n        style=\"fill:#808080\"\n        sodipodi:type=\"arc\"\n        d=\"m515.71-220.49c0 29.981-24.305 54.286-54.286 54.286s-54.286-24.305-54.286-54.286 24.305-54.286 54.286-54.286 54.286 24.305 54.286 54.286z\"\n        transform=\"matrix(-.78601 0 0 -.78601 -50.816 1099.2)\"\n        sodipodi:cy=\"-220.49496\"\n        sodipodi:cx=\"461.42856\"\n    />\n    <path\n        id=\"path4304\"\n        d=\"m-407.2 1314.3c20.3-3.0394 35.875-20.541 35.875-41.688s-15.575-38.679-35.875-41.719v83.406zm-12.625-0.031v-83.344c-20.284 3.0534-35.844 20.552-35.844 41.688 0 21.135 15.56 38.603 35.844 41.656z\"\n        style=\"fill:#cccccc\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path4329\"\n        style=\"fill:#000000\"\n        d=\"m-333.02 245.9 229.49 575.97 22.561 32.673 0.73854 1.8249-0.16067-0.97999 0.56622 0.81587-0.73854-1.8249-6.4837-39.179-235.72-573.45c-1.0191-2.4782-5.4923-10.116-9.418-8.5272-3.9256 1.5887-1.8284 10.188-0.83656 12.677z\"\n        sodipodi:nodetypes=\"scccccccsas\"\n        inkscape:transform-center-y=\"-524.05141\"\n        inkscape:connector-curvature=\"0\"\n        inkscape:transform-center-x=\"213.13306\"\n    />\n    <path\n        id=\"rect4358\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m111.68 388.94 2.4663 1.2855 71.607 37.323 2.4386 1.2711 2.4387-1.2711 71.607-37.323 2.4663-1.2855-2.4386-1.271-71.607-37.323-2.4664-1.2855-2.4663 1.2855-71.607 37.323-2.4386 1.271zm9.81 0 66.702-34.766 66.73 34.78-66.702 34.766-66.73-34.781z\"\n    />\n    <path\n        id=\"path4362\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m174.86 371.46-2.2812 1.375-11.406 6.9687-0.7187 0.4375v0.8438 4.4687h3v-3.625l8.4062-5.125v9.5313l-3.5937 3.8125-0.9375 1.0312 0.9375 1.0313 3.5937 3.8125v9.5312l-8.4062-5.125v-3.625h-3v4.4688 0.8437l0.7187 0.4375 11.406 6.9688 2.2812 1.375v-2.6563-12.812-0.5937l-0.4062-0.4375-3.0313-3.2188 3.0313-3.25 0.4062-0.4375v-0.5937-12.781-2.6562z\"\n    />\n    <path\n        id=\"path4366\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m181.18 365.18v48.594h3v-48.594h-3zm11.062 0v48.594h3v-48.594h-3z\"\n    />\n    <path\n        id=\"path4369\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m192.36 377.09-11.062 24.469 2.7188 1.2188 11.094-24.469-2.75-1.2187z\"\n    />\n    <path\n        id=\"path4371\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m200.8 368.12v2.625 37.5h3v-34.906l8 4.5937v22.969h3v-23.812-0.875l-0.75-0.4375-11-6.3438-2.25-1.3125z\"\n    />\n    <path\n        id=\"path4373\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m141.52 456.11c-4.2082 0-7.5312 3.6567-7.5312 8a1.5002 1.5002 0 1 0 3 0c0-2.8368 2.0679-5 4.5312-5s4.5313 2.1632 4.5313 5c0 1.0172-0.081 1.842-0.5 2.6562-0.419 0.8143-1.2183 1.7196-2.9688 2.7188-4.2189 2.4083-8.2687 7.139-8.9375 14.062a1.5002 1.5002 0 0 0 1.5 1.625h12.281a1.5002 1.5002 0 1 0 0 -3h-10.406c1.0026-4.93 3.9357-8.3089 7.0625-10.094 2.1-1.1987 3.4254-2.517 4.1563-3.9375 0.7308-1.4205 0.8125-2.8442 0.8125-4.0312 0-4.3433-3.3231-8-7.5313-8z\"\n    />\n    <path\n        id=\"path4157-8\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m191.63 456.12a1.5002 1.5002 0 0 0 -1.0625 0.625l-12.656 18.5a1.5002 1.5002 0 0 0 1.2188 2.3438h11.188v6.0625a1.5002 1.5002 0 1 0 3 0v-6.0625h0.5312a1.5002 1.5002 0 1 0 0 -3h-0.5312v-16.969a1.5002 1.5002 0 0 0 -1.6875 -1.5zm-1.3125 6.3125v12.156h-8.3125l8.3125-12.156z\"\n    />\n    <path\n        id=\"path4397\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m260.25 456.14a1.5002 1.5002 0 0 0 -1.1875 1.5v11.156a1.5002 1.5002 0 0 0 2.75 0.8125c0.8305-1.2895 3.2878-2.2812 5.4062-2.2812 3.1378 0 5.5938 2.446 5.5938 5.5625v3.7187c0 3.1165-2.456 5.5625-5.5938 5.5625-2.1156 0-4.4947-1.271-5.375-2.8125a1.5002 1.5002 0 1 0 -2.5937 1.5c1.5623 2.7359 4.7718 4.3125 7.9687 4.3125 4.7418 0 8.5938-3.8296 8.5938-8.5625v-3.7187c0-4.7328-3.852-8.5625-8.5938-8.5625-1.7311 0-3.5751 0.4087-5.1562 1.25v-6.4375h10.562a1.5002 1.5002 0 1 0 0 -3h-12.062a1.5002 1.5002 0 0 0 -0.3125 0z\"\n    />\n    <path\n        id=\"path4250-1\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m139.49 518.96a1.5002 1.5002 0 0 0 -1.1875 0.625l-4.4687 6.0625a1.5002 1.5002 0 1 0 2.4062 1.7812l1.7813-2.4062v21.5a1.5002 1.5002 0 1 0 3 0v-26.062a1.5002 1.5002 0 0 0 -1.5313 -1.5z\"\n    />\n    <path\n        id=\"path4254-5\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m177.16 530.1c-4.9217 0-8.9328 4.0208-8.9328 8.9543 0 4.9336 4.0111 8.9544 8.9328 8.9544s8.9329-4.0208 8.9329-8.9544c0-4.9335-4.0112-8.9543-8.9329-8.9543zm0 3.0116c3.3023 0 5.9286 2.6325 5.9286 5.9427 0 3.3103-2.6263 5.983-5.9286 5.983s-5.9285-2.6727-5.9285-5.983c0-3.3102 2.6262-5.9427 5.9285-5.9427z\"\n    />\n    <path\n        id=\"path4258-9\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m177.15 518.96c-4.9246 0-8.9375 4.0381-8.9375 8.9687v11.125a1.5002 1.5002 0 1 0 3 0v-11.125c0-3.3131 2.6381-5.9687 5.9375-5.9687 2.3902 0 4.5663 1.4467 5.5 3.6562a1.5002 1.5002 0 1 0 2.75 -1.1875c-1.3986-3.3097-4.6606-5.4687-8.25-5.4687z\"\n    />\n    <path\n        id=\"path4446\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m154.3 536.89c4.9217 0 8.9328-4.0208 8.9328-8.9543s-4.0111-8.9543-8.9328-8.9543-8.9329 4.0208-8.9329 8.9543 4.0112 8.9543 8.9329 8.9543zm0-3.0115c-3.3024 0-5.9286-2.6326-5.9286-5.9428 0-3.3103 2.6262-5.9829 5.9286-5.9829 3.3023 0 5.9285 2.6726 5.9285 5.9829 0 3.3102-2.6262 5.9428-5.9285 5.9428z\"\n    />\n    <path\n        id=\"path4448\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m161.74 526.4a1.5002 1.5002 0 0 0 -1.5 1.5312v11.125c0 3.3132-2.6381 5.9688-5.9375 5.9688-2.3902 0-4.535-1.4155-5.4687-3.625a1.506 1.506 0 1 0 -2.7813 1.1562c1.3986 3.3097 4.6606 5.4688 8.25 5.4688 4.9246 0 8.9375-4.0382 8.9375-8.9688v-11.125a1.5002 1.5002 0 0 0 -1.5 -1.5312z\"\n    />\n    <path\n        id=\"path4458\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m225.02 523.02a1.5002 1.5002 0 0 0 -1.3438 1.5v18.562a1.5002 1.5002 0 1 0 3 0v-17.062h7.7813a1.5002 1.5002 0 1 0 0 -3h-9.2813a1.5002 1.5002 0 0 0 -0.1562 0z\"\n    />\n    <path\n        id=\"path4298\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#ffffff\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-268.26 1141.4c7.7494 0 14.125-6.3444 14.125-14.094 0-7.7494-6.3756-14.125-14.125-14.125s-14.094 6.3756-14.094 14.125a3.5004 3.5004 0 1 0 7 0c0-3.9663 3.1275-7.125 7.0938-7.125s7.125 3.1587 7.125 7.125c0 3.9664-3.1587 7.0938-7.125 7.0938h-0.2813a3.5035 3.5035 0 1 0 -0.3125 7c0.1999 0.01 0.3938 0 0.5938 0z\"\n    />\n    <path\n        id=\"path4315\"\n        style=\"fill:#b3b3b3\"\n        d=\"m-76.791 898.91-28.638-76.254 20.68-8.3693 32.456 74.709z\"\n        sodipodi:nodetypes=\"ccccc\"\n        inkscape:transform-center-y=\"-212.14011\"\n        inkscape:connector-curvature=\"0\"\n        inkscape:transform-center-x=\"84.84786\"\n    />\n    <rect\n        id=\"rect3790\"\n        style=\"fill:#333333\"\n        rx=\"22.5\"\n        ry=\"22.5\"\n        height=\"45\"\n        width=\"294.29\"\n        y=\"1014.8\"\n        x=\"178.94\"\n    />\n    <path\n        id=\"rect3792\"\n        style=\"fill:#333333\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m183.75 1122.6c-65.126 0-119.22 47.238-129.91 109.31h-70.969c-12.465 0-22.5 10.035-22.5 22.5s10.035 22.5 22.5 22.5h70.969c10.674 62.09 64.77 109.34 129.91 109.34 65.138 0 119.23-47.252 129.91-109.34h137.06c12.465 0 22.5-10.035 22.5-22.5s-10.035-22.5-22.5-22.5h-137.06c-10.69-62.1-64.81-109.3-129.91-109.3z\"\n    />\n    <path\n        id=\"path3802\"\n        sodipodi:rx=\"131.82491\"\n        sodipodi:ry=\"131.82491\"\n        style=\"fill:#000000\"\n        sodipodi:type=\"arc\"\n        d=\"m582.35 401.32c0 72.805-59.02 131.82-131.82 131.82-72.805 0-131.82-59.02-131.82-131.82 0-72.805 59.02-131.82 131.82-131.82 72.522 0 131.42 58.579 131.82 131.1\"\n        sodipodi:open=\"true\"\n        transform=\"matrix(.67433 0 0 .67433 -120.05 983.82)\"\n        sodipodi:cy=\"401.31888\"\n        sodipodi:cx=\"450.52805\"\n        sodipodi:end=\"6.2776887\"\n        sodipodi:start=\"0\"\n    />\n    <path\n        id=\"path3804\"\n        style=\"fill:#333333\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m183.75 1175.6c-43.516 0-78.781 35.266-78.781 78.781 0 7.6898 1.1023 15.13 3.1563 22.156l145.66-58.188c-13.09-25.386-39.524-42.75-70.031-42.75zm75.625 56.656-145.69 58.188c13.086 25.38 39.541 42.75 70.062 42.75 43.516 0 78.781-35.297 78.781-78.812v-0.4062c-0.041-7.535-1.1424-14.828-3.1562-21.719z\"\n    />\n    <rect\n        id=\"rect3794\"\n        style=\"fill:#333333\"\n        rx=\"22.5\"\n        ry=\"22.5\"\n        height=\"45\"\n        width=\"710\"\n        y=\"1431.9\"\n        x=\"-236.78\"\n    />\n    <path\n        id=\"path5724\"\n        d=\"m64.543 197.04c-15.018 0-27.219 12.201-27.219 27.219v40.406c0 15.018 12.2 27.25 27.219 27.25 15.018 0 27.25-12.232 27.25-27.25v-40.406c0-15.018-12.232-27.219-27.25-27.219zm0 8c10.725 0 19.25 8.4942 19.25 19.219v40.406c0 10.725-8.5254 19.25-19.25 19.25-10.724 0-19.219-8.5254-19.219-19.25v-40.406c0-10.725 8.4942-19.219 19.219-19.219z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5726\"\n        d=\"m-608.11 412.19a4.2093 4.2093 0 1 0 0.4204 8.408h30.531l-20.81 29.428a4.2044 4.2044 0 0 0 3.9412 6.6213c9.6213-1.1538 15.169 0.9116 18.813 4.0989 3.6435 3.1873 5.6017 7.9672 6.3585 12.98 0.7925 5.2489-0.4779 11.143-3.2056 15.818-2.7276 4.6741-6.7457 7.9791-11.298 8.8283-7.525 1.4038-17.109-2.8331-20.6-9.8268a4.2067 4.2067 0 0 0 -7.5146 3.7836c5.4441 10.909 18.201 16.427 29.638 14.294 7.4551-1.3908 13.34-6.5064 17.026-12.822 3.6857-6.3157 5.3719-13.948 4.2565-21.335-0.9532-6.3133-3.4721-13.109-9.0911-18.025-4.0538-3.5462-9.6478-5.8469-16.658-6.3585l20.705-29.27a4.2044 4.2044 0 0 0 -3.4683 -6.6213h-38.624a4.2044 4.2044 0 0 0 -0.4204 0z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5728\"\n        d=\"m-304.56 229c-15.021 0-27.222 12.201-27.222 27.222v40.446c0 15.021 12.201 27.222 27.222 27.222s27.277-12.201 27.277-27.222v-40.446c0-15.021-12.257-27.222-27.277-27.222zm0 7.9675c10.744 0 19.31 8.5101 19.31 19.255v40.446c0 10.744-8.5654 19.255-19.31 19.255-10.744 0-19.255-8.5101-19.255-19.255v-40.446c0-10.744 8.5101-19.255 19.255-19.255z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5730\"\n        d=\"m-361.49 229.03a3.9804 3.9804 0 0 0 -2.8192 1.8242l-39.192 61.69a3.9804 3.9804 0 0 0 3.3719 6.0806h35.157v21.227a3.9804 3.9804 0 1 0 7.96 0v-21.227h2.377a3.9804 3.9804 0 1 0 0 -7.96h-2.377v-57.655a3.9804 3.9804 0 0 0 -4.4775 -3.98zm-3.4825 17.634v44.001h-27.916l27.916-44.001z\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5732\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-228.85 229c-15.021 0-27.222 12.201-27.222 27.222v40.446c0 15.021 12.201 27.222 27.222 27.222s27.277-12.201 27.277-27.222v-40.446c0-15.021-12.257-27.222-27.277-27.222zm0 7.9675c10.744 0 19.31 8.5101 19.31 19.255v40.446c0 10.744-8.5655 19.255-19.31 19.255s-19.255-8.5101-19.255-19.255v-40.446c0-10.744 8.5101-19.255 19.255-19.255z\"\n    />\n    <path\n        id=\"path5734\"\n        style=\"stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3;fill:none\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m191.83 520.42h14.362l-11.391 26.091\"\n    />\n    <path\n        id=\"path5736\"\n        d=\"m234.26 457.58h14.362l-11.391 26.09\"\n        style=\"stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3;fill:none\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"rect5738\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m214.66 456.08c-4.7833 0-8.6562 3.9041-8.6562 8.6875v11.719c0 4.7834 3.8729 8.6875 8.6562 8.6875 4.7834 0 8.6875-3.9041 8.6875-8.6875v-11.719c0-4.7834-3.9041-8.6875-8.6875-8.6875zm0 3c3.1733 0 5.6875 2.5142 5.6875 5.6875v11.719c0 3.1733-2.5142 5.6875-5.6875 5.6875-3.1732 0-5.6562-2.5142-5.6562-5.6875v-11.719c0-3.1733 2.483-5.6875 5.6562-5.6875z\"\n    />\n    <path\n        id=\"rect5740\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m165.16 456.08c-4.7833 0-8.6562 3.9041-8.6562 8.6875v11.719c0 4.7834 3.8729 8.6875 8.6562 8.6875 4.7834 0 8.6875-3.9041 8.6875-8.6875v-11.719c0-4.7834-3.9041-8.6875-8.6875-8.6875zm0 3c3.1733 0 5.6875 2.5142 5.6875 5.6875v11.719c0 3.1733-2.5142 5.6875-5.6875 5.6875-3.1732 0-5.6562-2.5142-5.6562-5.6875v-11.719c0-3.1733 2.483-5.6875 5.6562-5.6875z\"\n    />\n    <path\n        id=\"path4250-1-3\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-1171.1 945.11a2.6676 2.6676 0 0 0 -2.1117 1.1113l-7.9464 10.78a2.6676 2.6676 0 1 0 4.2788 3.1675l3.1675-4.2789v38.232a2.6676 2.6676 0 1 0 5.3347 0v-46.345a2.6676 2.6676 0 0 0 -2.7229 -2.6673z\"\n    />\n    <path\n        id=\"rect5738-5\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-1144.4 945.12c-8.5059 0-15.448 6.8868-15.448 15.393v20.894c0 8.5059 6.9424 15.393 15.448 15.393 8.5059 0 15.448-6.8868 15.448-15.393v-20.894c0-8.5059-6.9424-15.393-15.448-15.393zm0 5.3346c5.6428 0 10.114 4.4153 10.114 10.058v20.894c0 5.6428-4.4708 10.058-10.114 10.058-5.6428 0-10.114-4.4153-10.114-10.058v-20.894c0-5.6428 4.4708-10.058 10.114-10.058z\"\n    />\n    <path\n        id=\"rect5763\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-1107.5 944.76c-8.5059 0-15.448 6.8868-15.448 15.393v20.894c0 8.5059 6.9424 15.393 15.448 15.393 8.5059 0 15.448-6.8868 15.448-15.393v-20.894c0-8.506-6.9424-15.393-15.448-15.393zm0 5.3347c5.6428 0 10.114 4.4153 10.114 10.058v20.894c0 5.6427-4.4708 10.058-10.114 10.058-5.6428 0-10.114-4.4153-10.114-10.058v-20.894c0-5.6428 4.4708-10.058 10.114-10.058z\"\n    />\n    <path\n        id=\"path5787\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-981.29 613.51a3.5004 3.5004 0 0 0 -1.8867 6.6884l109.11 49.911a3.5004 3.5004 0 1 0 2.9043 -6.3686l-109.11-49.911a3.5004 3.5004 0 0 0 -1.0176 -0.3198z\"\n        inkscape:transform-center-x=\"933.15822\"\n        inkscape:transform-center-y=\"-426.79377\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5789\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-705.38 246.62a3.5004 3.5004 0 0 0 -4.4791 5.3134l78.781 90.494a3.5004 3.5004 0 1 0 5.2739 -4.6022l-78.781-90.494a3.5004 3.5004 0 0 0 -0.7948 -0.7112z\"\n        inkscape:transform-center-x=\"673.81332\"\n        inkscape:transform-center-y=\"-773.89442\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5791\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-325.06 33.219a3.5004 3.5004 0 0 0 -6.2068 3.1256l36.88 114.17a3.5004 3.5004 0 1 0 6.6582 -2.1593l-36.88-114.18a3.5004 3.5004 0 0 0 -0.4514 -0.9664z\"\n        inkscape:transform-center-x=\"315.47402\"\n        inkscape:transform-center-y=\"-976.42875\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5793\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m9.3597-18.399a3.5004 3.5004 0 0 0 -6.8671 1.0659l-0.011 119.98a3.5004 3.5004 0 1 0 6.9995 -0.01l0.011-119.98a3.5004 3.5004 0 0 0 -0.1324 -1.0584z\"\n        inkscape:transform-center-x=\"-0.023585956\"\n        inkscape:transform-center-y=\"-1026.1273\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5795\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-1068.4 895.12a1.888 3.5004 9.0712 0 0 -0.5103 6.8713l63.927 10.069a1.888 3.5004 9.0712 1 0 1.0946 -6.9134l-63.927-10.069a1.888 3.5004 9.0712 0 0 -0.5847 0.042z\"\n        inkscape:transform-center-x=\"1042.4061\"\n        inkscape:transform-center-y=\"-165.18705\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5797\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-1050.7 808.09a1.888 3.5004 13.749 0 0 -1.0689 6.8068l62.893 15.249a1.888 3.5004 13.749 1 0 1.6548 -6.8011l-62.893-15.249a1.888 3.5004 13.749 0 0 -0.5862 -0.01z\"\n        inkscape:transform-center-x=\"1025.4638\"\n        inkscape:transform-center-y=\"-249.64231\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5799\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-1028.4 730.25a1.888 3.5004 18.012 0 0 -1.5721 6.7085l61.585 19.882a1.888 3.5004 18.012 1 0 2.1559 -6.6593l-61.585-19.882a1.888 3.5004 18.012 0 0 -0.5842 -0.049z\"\n        inkscape:transform-center-x=\"1004.0664\"\n        inkscape:transform-center-y=\"-325.18917\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5801\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-1004.6 664.7a1.888 3.5004 21.684 0 0 -1.9984 6.5941l60.185 23.786a1.888 3.5004 21.684 1 0 2.5779 -6.5076l-60.185-23.786a1.888 3.5004 21.684 0 0 -0.5798 -0.087z\"\n        inkscape:transform-center-x=\"981.17869\"\n        inkscape:transform-center-y=\"-388.82606\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5803\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-932.71 517.97a1.888 3.5004 30.294 0 0 -2.9631 6.2206l55.946 32.528a1.888 3.5004 30.294 1 0 3.5231 -6.0483l-55.946-32.528a1.888 3.5004 30.294 0 0 -0.5603 -0.1725z\"\n        inkscape:transform-center-x=\"911.91157\"\n        inkscape:transform-center-y=\"-531.33261\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5805\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-875.09 429.84a1.888 3.5004 35.84 0 0 -3.5504 5.9051l52.541 37.782a1.888 3.5004 35.84 1 0 4.0911 -5.6795l-52.541-37.782a1.888 3.5004 35.84 0 0 -0.5409 -0.2259z\"\n        inkscape:transform-center-x=\"856.29817\"\n        inkscape:transform-center-y=\"-616.96881\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5807\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-810.98 349.68a1.888 3.5004 41.246 0 0 -4.0909 5.5444l48.748 42.564a1.888 3.5004 41.246 1 0 4.608 -5.2689l-48.748-42.564a1.888 3.5004 41.246 0 0 -0.5173 -0.2758z\"\n        inkscape:transform-center-x=\"794.36465\"\n        inkscape:transform-center-y=\"-694.89709\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5809\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-761.37 296.96a1.888 3.5004 45.057 0 0 -4.4504 5.2601l45.811 45.71a1.888 3.5004 45.057 1 0 4.948 -4.9509l-45.811-45.71a1.888 3.5004 45.057 0 0 -0.4978 -0.3096z\"\n        inkscape:transform-center-x=\"746.41375\"\n        inkscape:transform-center-y=\"-746.16601\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5811\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-641.83 194.21a1.888 3.5004 53.363 0 0 -5.1636 4.5621l38.727 51.849a1.888 3.5004 53.363 1 0 5.6113 -4.1842l-38.727-51.849a1.888 3.5004 53.363 0 0 -0.4478 -0.3782z\"\n        inkscape:transform-center-x=\"630.79324\"\n        inkscape:transform-center-y=\"-846.16619\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5813\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-555.89 136.67a1.888 3.5004 58.81 0 0 -5.5733 4.0513l33.631 55.29a1.888 3.5004 58.81 1 0 5.9832 -3.6326l-33.631-55.29a1.888 3.5004 58.81 0 0 -0.4099 -0.4191z\"\n        inkscape:transform-center-x=\"547.62857\"\n        inkscape:transform-center-y=\"-902.21965\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5815\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-472.63 91.3a1.888 3.5004 63.803 0 0 -5.9048 3.5509l28.69 58.008a1.888 3.5004 63.803 1 0 6.2766 -3.098l-28.69-58.007a1.888 3.5004 63.803 0 0 -0.3719 -0.4531z\"\n        inkscape:transform-center-x=\"467.01752\"\n        inkscape:transform-center-y=\"-946.46289\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5817\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-403.43 60.358a1.888 3.5004 67.795 0 0 -6.1376 3.1313l24.583 59.864a1.888 3.5004 67.795 1 0 6.4771 -2.6536l-24.583-59.864a1.888 3.5004 67.795 0 0 -0.3394 -0.4779z\"\n        inkscape:transform-center-x=\"400.00472\"\n        inkscape:transform-center-y=\"-976.67475\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5819\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-241.53 8.9388a1.888 3.5004 76.746 0 0 -6.5501 2.138l14.969 62.96a1.888 3.5004 76.746 1 0 6.811 -1.6135l-14.97-62.961a1.888 3.5004 76.746 0 0 -0.2609 -0.5249z\"\n        inkscape:transform-center-x=\"243.16165\"\n        inkscape:transform-center-y=\"-1027.0199\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5821\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-173.93-4.6054a1.888 3.5004 80.377 0 0 -6.6723 1.719l10.952 63.782a1.888 3.5004 80.377 1 0 6.8996 -1.179l-10.952-63.782a1.888 3.5004 80.377 0 0 -0.2272 -0.5404z\"\n        inkscape:transform-center-x=\"177.64633\"\n        inkscape:transform-center-y=\"-1040.3554\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5823\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-110.39-13.338a1.888 3.5004 83.754 0 0 -6.762 1.323l7.1761 64.316a1.888 3.5004 83.754 1 0 6.9571 -0.7705l-7.1762-64.316a1.888 3.5004 83.754 0 0 -0.1949 -0.5529z\"\n        inkscape:transform-center-x=\"116.05553\"\n        inkscape:transform-center-y=\"-1049.0131\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5825\"\n        style=\"block-progression:tb;text-indent:0;color:#000000;text-transform:none;fill:#000000\"\n        d=\"m-51.038-18.083a1.888 3.5004 86.889 0 0 -6.8243 0.9512l3.6479 64.612a1.888 3.5004 86.889 1 0 6.9888 -0.3889l-3.6479-64.612a1.888 3.5004 86.889 0 0 -0.1645 -0.5627z\"\n        inkscape:transform-center-x=\"58.509766\"\n        inkscape:transform-center-y=\"-1053.7903\"\n        inkscape:connector-curvature=\"0\"\n    />\n    <path\n        id=\"path5829\"\n        style=\"stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3;fill:#000000\"\n        d=\"m-284.84 220.91c-38.957-1.0116-64.29-59.809-93.409-110.02-1.842-3.1766-4.2756-3.8087-4.8663-3.5696-0.59085 0.2391-1.8708 2.3741-0.98517 5.9377 14.001 56.334 36.692 116.2 9.4029 144.02 37.051 20.294 51.939 37.895 82.379 74.439l0.0353 0.0871c0.00065-0.0251 0.007-0.0452 0.005-0.0691-0.004-0.009-0.008-0.0195-0.0116-0.0288-3.5438-47.429-5.0581-70.442 7.45-110.79z\"\n        sodipodi:nodetypes=\"cszscccccc\"\n        inkscape:transform-center-y=\"-849.20654\"\n        inkscape:connector-curvature=\"0\"\n        inkscape:transform-center-x=\"340.60995\"\n    />\n    <path\n        id=\"path6078\"\n        sodipodi:nodetypes=\"sssssssssss\"\n        style=\"fill:url(#linearGradient6990)\"\n        inkscape:connector-curvature=\"0\"\n        d=\"m-1090.6-131.14c-65.98 0-119.09 53.114-119.09 119.09v1374.5c0 65.979 53.114 119.09 119.09 119.09h665.31c29.008 0 39.174-3.9241 56.5-21.25l746.08-745.9c23.302-23.302 25.781-31.589 25.781-62.469v-663.88c0-65.979-53.114-119.09-119.09-119.09z\"\n    />\n  </g\n  >\n  <metadata\n      id=\"metadata256\"\n    >\n    <rdf:RDF\n      >\n      <cc:Work\n        >\n        <dc:format\n          >image/svg+xml</dc:format\n        >\n        <dc:type\n            rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"\n        />\n        <cc:license\n            rdf:resource=\"http://creativecommons.org/licenses/publicdomain/\"\n        />\n        <dc:publisher\n          >\n          <cc:Agent\n              rdf:about=\"http://openclipart.org/\"\n            >\n            <dc:title\n              >Openclipart</dc:title\n            >\n          </cc:Agent\n          >\n        </dc:publisher\n        >\n      </cc:Work\n      >\n      <cc:License\n          rdf:about=\"http://creativecommons.org/licenses/publicdomain/\"\n        >\n        <cc:permits\n            rdf:resource=\"http://creativecommons.org/ns#Reproduction\"\n        />\n        <cc:permits\n            rdf:resource=\"http://creativecommons.org/ns#Distribution\"\n        />\n        <cc:permits\n            rdf:resource=\"http://creativecommons.org/ns#DerivativeWorks\"\n        />\n      </cc:License\n      >\n    </rdf:RDF\n    >\n  </metadata\n  >\n</svg\n>\n\n  <div class=\"mt-svg-cap\">Posisi benar voltmeter (V) dan amperemeter (A): voltmeter dipasang <strong>paralel</strong> dengan komponen yang diukur, amperemeter dipasang <strong>seri</strong> dalam rangkaian · sumber: Wikimedia Commons, <i>File:Voltmeter and ammeter.svg</i> (CC0 — domain publik, rones)</div>\n</div>"
      },
      {
        "id": "ukur-arus",
        "emoji": "🌊",
        "title": "Mengukur Arus (Amperemeter → Seri)",
        "body": "<p><strong>Aturan emas:</strong> amperemeter dipasang <strong>seri</strong> — rangkaian <strong>harus diputus</strong> dulu di titik pengukuran, lalu amperemeter menjadi jembatan penggantinya. Alasannya: arus pada rangkaian seri nilainya sama di semua titik, jadi arus yang melewati amperemeter = arus yang melewati komponen.</p>\n<div class=\"mt-svg-wrap\" title=\"Klik untuk memperbesar\" onclick=\"openMateriImg(this.querySelector('svg'))\">\n  <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\n\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   width=\"63.701111mm\"\n   height=\"64.958504mm\"\n   viewBox=\"0 0 63.701111 64.958504\"\n   version=\"1.1\"\n   id=\"svg8\"\n   inkscape:version=\"0.92.5 (2060ec1f9f, 2020-04-08)\"\n   sodipodi:docname=\"ammeter circuit.svg\">\n  <defs\n     id=\"defs2\" />\n  <sodipodi:namedview\n     id=\"base\"\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1.0\"\n     inkscape:pageopacity=\"0.0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:zoom=\"1.6937417\"\n     inkscape:cx=\"82.643126\"\n     inkscape:cy=\"145.80421\"\n     inkscape:document-units=\"mm\"\n     inkscape:current-layer=\"layer1\"\n     showgrid=\"true\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\"\n     inkscape:window-width=\"1278\"\n     inkscape:window-height=\"1008\"\n     inkscape:window-x=\"1359\"\n     inkscape:window-y=\"0\"\n     inkscape:window-maximized=\"0\">\n    <inkscape:grid\n       type=\"xygrid\"\n       id=\"grid52\"\n       originx=\"-80.764064\"\n       originy=\"-141.10208\" />\n  </sodipodi:namedview>\n  <metadata\n     id=\"metadata5\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <g\n     inkscape:label=\"Layer 1\"\n     inkscape:groupmode=\"layer\"\n     id=\"layer1\"\n     transform=\"translate(-80.764062,-90.939419)\">\n    <g\n       id=\"g3096\"\n       transform=\"matrix(0.26458333,0,0,0.26458333,-28.949595,-34.97368)\">\n      <rect\n         rx=\"5.8004274\"\n         ry=\"5.8004227\"\n         y=\"477.66403\"\n         x=\"545.26715\"\n         height=\"92.271019\"\n         width=\"71.058578\"\n         id=\"rect3269\"\n         style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#999999;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.54400015;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none\" />\n      <rect\n         rx=\"5.8004227\"\n         ry=\"5.8004341\"\n         y=\"484.75101\"\n         x=\"552.95233\"\n         height=\"44.359825\"\n         width=\"56.329552\"\n         id=\"rect3271\"\n         style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.54400253;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none\" />\n      <path\n         inkscape:connector-curvature=\"0\"\n         transform=\"matrix(2,0,0,2,-103.159,-22.5719)\"\n         d=\"m 350.7874,292.63779 a 1.7716535,1.7716535 0 0 1 -1.77165,1.77165 1.7716535,1.7716535 0 0 1 -1.77166,-1.77165 1.7716535,1.7716535 0 0 1 1.77166,-1.77166 1.7716535,1.7716535 0 0 1 1.77165,1.77166 z\"\n         id=\"path3273\"\n         style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.77199996;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none\" />\n      <path\n         inkscape:connector-curvature=\"0\"\n         transform=\"matrix(2,0,0,2,-103.159,-22.5719)\"\n         d=\"m 357.87401,292.63779 a 1.7716535,1.7716535 0 0 1 -1.77165,1.77165 1.7716535,1.7716535 0 0 1 -1.77166,-1.77165 1.7716535,1.7716535 0 0 1 1.77166,-1.77166 1.7716535,1.7716535 0 0 1 1.77165,1.77166 z\"\n         id=\"path3275\"\n         style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#5599ff;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.77199996;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none\" />\n      <text\n         transform=\"scale(0.973857,1.02684)\"\n         id=\"text3277\"\n         y=\"547.99316\"\n         x=\"567.18152\"\n         style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.70886612px;line-height:125%;font-family:'Bitstream Vera Sans';text-align:start;writing-mode:lr-tb;text-anchor:start;display:inline;fill:#37c837;fill-opacity:1;stroke:#0b1728;stroke-width:2.00000238px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n         xml:space=\"preserve\"><tspan\n           style=\"font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:FreeSerif;-inkscape-font-specification:FreeSerif;fill:#37c837;stroke-width:2.00000238\"\n           y=\"547.99316\"\n           x=\"567.18152\"\n           id=\"tspan3279\">A</tspan></text>\n      <path\n         inkscape:connector-curvature=\"0\"\n         id=\"path2449\"\n         d=\"m 587.72926,527.27004 7.3366,-27.38058\"\n         style=\"display:inline;fill:none;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" />\n    </g>\n    <g\n       transform=\"matrix(0.26458333,0,0,0.26458333,73.81875,60.352262)\"\n       id=\"g2769\">\n      <circle\n         style=\"opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.5;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\"\n         id=\"circle1800\"\n         cx=\"56\"\n         cy=\"297.41666\"\n         r=\"28\" />\n      <path\n         inkscape:connector-curvature=\"0\"\n         id=\"path1820\"\n         d=\"m 56,325.41665 v 14\"\n         style=\"opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\" />\n      <path\n         inkscape:connector-curvature=\"0\"\n         id=\"path1822\"\n         d=\"m 56,269.41665 v -14\"\n         style=\"opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\" />\n      <path\n         sodipodi:nodetypes=\"cc\"\n         id=\"path1836\"\n         d=\"M 61.25,279.91665 H 50.75\"\n         style=\"fill:none;stroke:#000000;stroke-width:2.00000191px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n         inkscape:connector-curvature=\"0\" />\n      <path\n         sodipodi:nodetypes=\"cc\"\n         id=\"path1838\"\n         d=\"m 56,285.16665 v -10.5\"\n         style=\"fill:none;stroke:#000000;stroke-width:2.00000191px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n         inkscape:connector-curvature=\"0\" />\n      <path\n         inkscape:connector-curvature=\"0\"\n         style=\"fill:none;stroke:#000000;stroke-width:2.00000191px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n         d=\"M 61.25,314.91665 H 50.75\"\n         id=\"path1852\"\n         sodipodi:nodetypes=\"cc\" />\n    </g>\n    <path\n       style=\"fill:none;stroke:#000000;stroke-width:0.89999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       d=\"m 88.635416,127.66667 v -7.9375 h 39.687504 v -5.29167\"\n       id=\"path56\"\n       inkscape:connector-curvature=\"0\" />\n    <path\n       style=\"fill:none;stroke:#000000;stroke-width:0.89999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       d=\"m 132.29166,114.4375 v 5.29167 h 6.61459 v 9.26041\"\n       id=\"path58\"\n       inkscape:connector-curvature=\"0\" />\n    <rect\n       style=\"fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.53452247;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\"\n       id=\"rect60\"\n       width=\"10.583333\"\n       height=\"19.84375\"\n       x=\"133.61458\"\n       y=\"128.98958\"\n       ry=\"1.322906\" />\n    <path\n       style=\"fill:none;stroke:#000000;stroke-width:0.89999998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       d=\"m 88.635416,150.15625 v 5.29167 h 50.270834 v -6.61459\"\n       id=\"path867\"\n       inkscape:connector-curvature=\"0\" />\n    <text\n       xml:space=\"preserve\"\n       style=\"font-style:normal;font-weight:normal;font-size:6.3499999px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332\"\n       x=\"-146.58076\"\n       y=\"141.16719\"\n       id=\"text871\"\n       transform=\"rotate(-90)\"><tspan\n         sodipodi:role=\"line\"\n         id=\"tspan869\"\n         x=\"-146.58076\"\n         y=\"141.16719\"\n         style=\"stroke-width:0.26458332\">Load</tspan></text>\n  </g>\n</svg>\n\n  <div class=\"mt-svg-cap\">Amperemeter dipasang seri dalam rangkaian: semua arus beban melewati amperemeter — hambatan internal amperemeter harus sangat kecil agar tidak mempengaruhi pembacaan · sumber: Wikimedia Commons, <i>File:Ammeter circuit.svg</i> (CC0 — domain publik, Maxmath12)</div>\n</div>\n<h4>Langkah praktik mengukur arus</h4>\n<ol>\n<li><strong>Matikan daya</strong> rangkaian dulu (safety — rangkaian harus dibuka).</li>\n<li>Pindahkan probe merah ke jack <strong>A</strong> atau <strong>mA</strong> (baca manual DMM-mu!), selector ke mode arus DC/AC.</li>\n<li>Buka rangkaian di titik ukur, sambungkan amperemeter menggantikan kabel yang dilepas — arus masuk lewat probe merah, keluar lewat hitam.</li>\n<li>Nyalakan daya, baca hasil. Kembalikan jack probe ke VΩ setelah selesai!</li>\n</ol>\n<div class=\"mt-warn\">⚠️ <strong>Kesalahan paling berbahaya:</strong> memasang amperemeter <strong>paralel</strong> dengan beban. Hambatan dalam amperemeter hampir nol → arus melonjak seperti korslet → <strong>fuse DMM putus</strong> (atau lebih buruk). Selalu cek posisi jack & mode sebelum menyentuhkan probe!</div>\n<div class=\"mt-tip\">💡 <strong>Di rangkaian seri</strong> cukup satu amperemeter di titik mana pun (arusnya sama). <strong>Di rangkaian paralel</strong>, arus tiap cabang berbeda — amperemeter harus dipasang seri <em>pada cabang yang diukur</em>, dan jumlah arus semua cabang = arus total (KCL).</div>"
      },
      {
        "id": "ukur-resistansi",
        "emoji": "📏",
        "title": "Mengukur Resistansi & Kontinuitas",
        "body": "<p>Mode <strong>ohmmeter (Ω)</strong> bekerja dengan menyuntikkan arus kecil ke komponen lalu menghitung \\(R = \\dfrac{V}{I}\\). Karena alat sendiri yang menyuplai arus, ada dua syarat mutlak:</p>\n<ol>\n<li><strong>Rangkaian harus dipatikan</strong> (dan kapasitor dilepas muatannya) — tegangan dari luar akan mengacaukan hasil bahkan merusak DMM.</li>\n<li>Komponen diukur <strong>terisolasi</strong> — minimal lepas satu kakinya dari rangkaian, agar arus uji tidak memotong jalur lain.</li>\n</ol>\n<h4>Mode tambahan yang sering dipakai</h4>\n<ul>\n<li><strong>Kontinuitas (🔊)</strong> — berbunyi beep bila dua titik tersambung (hambatan mendekati 0 Ω). Praktis untuk mengecek kabel putus, solderan, dan jalur PCB.</li>\n<li><strong>Diode test</strong> — menampilkan tegangan jatuh dioda maju (~0,6–0,7 V untuk silikon); OL saat terbalik = dioda baik.</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/multimeter-scale-mirror.jpg\" alt=\"Skala multimeter analog dengan cermin\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Skala multimeter analog Multavi 5 — garis cermin di bawah skala dipakai agar pembacaan bebas paralaks: posisikan mata sehingga jarum menutupi bayangannya · sumber: Wikimedia Commons, Harke (domain publik)</div></div>\n<div class=\"mt-tip\">💡 Saat mengukur resistor di pasaran, tahan kedua ujung probe dengan tangan <strong>tidak masalah</strong> pada resistor kecil (kΩ), tapi pada resistor besar (MΩ) hambatan tubuhmu (±1 MΩ) ikut terukur paralel dan membuat hasil lebih kecil dari sebenarnya.</div>",
        "referensi": "Prinsip ohmmeter modern (constant current source): Fluke \"Understanding basic analog testing\" & datasheet DMM IEC 61010."
      },
      {
        "id": "osiloskop",
        "emoji": "📈",
        "title": "Osiloskop Dasar",
        "body": "<p>Multimeter hanya menampilkan <em>angka</em>. <strong>Osiloskop</strong> menggambar bentuk gelombang tegangan terhadap waktu di layar — satu-satunya cara \"melihat\" sinyal: apakah ia DC, sinusoida, persegi, ada noise, atau berdenyut (PWM).</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/oscilloscope-dso.jpg\" alt=\"Osiloskop digital 4 kanal sedang dipakai\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Osiloskop digital 4 kanal (Keysight DSOX4024A) mengukur sinyal di lab · sumber: Wikimedia Commons, Radarvector (CC BY-SA 4.0)</div></div>\n<p>Tiga grup kontrol yang wajib dikuasai:</p>\n<ul>\n<li><strong>Vertical (volt/div)</strong> — skala tegangan per kotak vertikal. Mengatur seberapa \"tinggi\" gelombang tampil.</li>\n<li><strong>Horizontal (timebase, sec/div)</strong> — skala waktu per kotak horizontal. Mengatur seberapa \"lebar\" periode tampil.</li>\n<li><strong>Trigger</strong> — menstabilkan gelombang agar tidak \"berlari\"; umumnya di-set pada tepi naik (rising edge) dengan level tertentu.</li>\n</ul>\n<p><strong>Cara membaca hasil ukur:</strong> amplitudo puncak = jumlah kotak vertikal × volt/div; periode = jumlah kotak horizontal × sec/div; lalu frekuensi \\(f = \\dfrac{1}{T}\\).</p>\n<div class=\"mt-tip\">💡 Gunakan probe pada pengali <strong>10×</strong> untuk sinyal umum (impedansi tinggi, aman untuk rangkaian), dan ingat untuk menyesuaikan setelan probe di osiloskop — kalau tidak, amplitudo terbaca 10× lebih kecil. Sebelum mengukur, jalankan <strong>probe compensation</strong> ke terminal kalibrasi agar gelombang persegi tidak melengkung.</div>",
        "referensi": "Fundamental probe compensation & pengali 10×: Keysight \"Application Note: Probe Fundamentals\"."
      },
      {
        "id": "alat-bench",
        "emoji": "🔌",
        "title": "Power Supply DC & Function Generator",
        "body": "<p><strong>Power supply DC laboratorium</strong> memberi tegangan kerja yang stabil dan <em>terbatas arusnya</em>. Dua mode kerjanya:</p>\n<ul>\n<li><strong>Mode CV (constant voltage)</strong> — tegangan mengikuti setelan, arus mengikuti kebutuhan beban (normal).</li>\n<li><strong>Mode CC (constant current)</strong> — arus menyentuh batas <em>current limit</em> yang kamu set, tegangan turun. Ini fitur <strong>pengaman</strong>: set limit kecil dulu saat mencoba rangkaian baru agar kesalahan wiring tidak membakar komponen.</li>\n</ul>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/bench-power-supply.jpg\" alt=\"Power supply DC meja lab\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Power supply DC meja lab — perhatikan knob tegangan, knob current limit, dan indikator CV/CC · sumber: Wikimedia Commons, Derrick Parker (CC0)</div></div>\n<p><strong>Function generator</strong> menghasilkan sinyal uji: sinusoida, persegi, dan segitiga, dengan frekuensi dan amplitudo yang bisa diatur. Pasangan sejatinya adalah osiloskop — generator memicu sinyal, osiloskop melihat respons rangkaian (dasar pengujian filter, penguat, dan rangkaian waktu).</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/function-generator.jpg\" alt=\"Function generator Tektronix CFG200\" onclick=\"openMateriImg(this)\" loading=\"lazy\"><div class=\"mt-img-cap\">Function generator Tektronix CFG200 — pilih bentuk gelombang, atur frekuensi & amplitudo, keluaran lewat konektor BNC · sumber: Wikimedia Commons, Whiteknight (CC BY-SA 4.0)</div></div>\n<div class=\"mt-tip\">💡 Alur praktikum klasik: <strong>function generator → rangkaian → osiloskop</strong>, dengan multimeter memantau DC bias. Semua ground (probe & generator) terhubung ke ground bodi alat — jangan menghubungkan probe \"hot\" ke dua titik yang beda potensialnya besar.</div>"
      },
      {
        "id": "kesalahan-k3",
        "emoji": "⚠️",
        "title": "Kesalahan Umum & Keselamatan Pengukuran",
        "body": "<p>Tabel berikut merangkum kesalahan yang paling sering (dan paling mahal) terjadi saat praktik:</p>\n<table style=\"width:100%; border-collapse:collapse; font-size:13.5px;\">\n<tr style=\"text-align:left; border-bottom:2px solid var(--line2, #ddd);\"><th style=\"padding:8px 6px;\">Kesalahan</th><th style=\"padding:8px 6px;\">Akibat</th><th style=\"padding:8px 6px;\">Pencegahan</th></tr>\n<tr><td style=\"padding:7px 6px;\">Amperemeter dipasang paralel</td><td style=\"padding:7px 6px;\">Korslet, fuse DMM putus</td><td style=\"padding:7px 6px;\">Seri untuk arus; cek jack & mode sebelum probe menyentuh</td></tr>\n<tr><td style=\"padding:7px 6px;\">Ohmmeter dipakai di rangkaian menyala</td><td style=\"padding:7px 6px;\">Hasil ngawur, DMM rusak</td><td style=\"padding:7px 6px;\">Patikan daya, lepas muatan kapasitor</td></tr>\n<tr><td style=\"padding:7px 6px;\">Probe merah tertinggal di jack A saat mengukur tegangan</td><td style=\"padding:7px 6px;\">Korslet langsung saat probe menyentuh tegangan</td><td style=\"padding:7px 6px;\">Rutinitas akhir: kembalikan probe merah ke VΩ</td></tr>\n<tr><td style=\"padding:7px 6px;\">Mode DC dipakai untuk AC (atau sebaliknya)</td><td style=\"padding:7px 6px;\">Hasil 0 atau salah baca besar</td><td style=\"padding:7px 6px;\">Kenali simbol V⎓ (DC) dan V~ (AC)</td></tr>\n<tr><td style=\"padding:7px 6px;\">Mengukur tegangan di atas kategori CAT alat</td><td style=\"padding:7px 6px;\">Lonjakan arc — alat & pengguna terancam</td><td style=\"padding:7px 6px;\">Cocokkan CAT II/III/IV dengan lokasi ukur</td></tr>\n</table>\n<div class=\"mt-warn\">⚠️ <strong>Aturan aman praktikum:</strong> satu tangan saat mengukur tegangan tinggi, jangan pegang bagian logam probe, mulai dari range tertinggi lalu turun (pada DMM manual-range), dan ganti fuse DMM <em>sesuai rating asli</em> — jangan pernah dibypass.</div>",
        "referensi": "Kategori CAT & keselamatan pengukuran: IEC 61010-031 & Fluke \"ABCs of DMM Safety\"."
      },
      {
        "id": "rangkuman-instrumen",
        "emoji": "🎓",
        "title": "Rangkuman",
        "body": "<p>Tabel satu ini adalah inti dari seluruh modul — hafalkan barisnya, aman 90% praktik pengukuran:</p>\n<table style=\"width:100%; border-collapse:collapse; font-size:13.5px;\">\n<tr style=\"text-align:left; border-bottom:2px solid var(--line2, #ddd);\"><th style=\"padding:8px 6px;\">Yang diukur</th><th style=\"padding:8px 6px;\">Mode DMM</th><th style=\"padding:8px 6px;\">Koneksi</th><th style=\"padding:8px 6px;\">Syarat</th></tr>\n<tr><td style=\"padding:7px 6px;\">Tegangan \\(V\\)</td><td style=\"padding:7px 6px;\">V⎓ atau V~</td><td style=\"padding:7px 6px;\"><strong>Paralel</strong> dgn komponen</td><td style=\"padding:7px 6px;\">Rangkaian boleh menyala</td></tr>\n<tr><td style=\"padding:7px 6px;\">Arus \\(I\\)</td><td style=\"padding:7px 6px;\">A / mA (jack pindah)</td><td style=\"padding:7px 6px;\"><strong>Seri</strong> (putus rangkaian)</td><td style=\"padding:7px 6px;\">Estimasi arus &lt; rating jack</td></tr>\n<tr><td style=\"padding:7px 6px;\">Resistansi \\(R\\)</td><td style=\"padding:7px 6px;\">Ω</td><td style=\"padding:7px 6px;\">Menjembatani komponen</td><td style=\"padding:7px 6px;\">Rangkaian mati, komponen terisolasi</td></tr>\n<tr><td style=\"padding:7px 6px;\">Kontinuitas</td><td style=\"padding:7px 6px;\">🔊 / diode</td><td style=\"padding:7px 6px;\">Dua titik yang dicek</td><td style=\"padding:7px 6px;\">Rangkaian mati</td></tr>\n<tr><td style=\"padding:7px 6px;\">Bentuk gelombang</td><td style=\"padding:7px 6px;\">Osiloskop</td><td style=\"padding:7px 6px;\">Probe ×10 ke titik uji</td><td style=\"padding:7px 6px;\">Ground probe = ground rangkaian</td></tr>\n</table>\n<p style=\"margin-top:10px;\">Lanjutkan latihan dengan memverifikasi rangkaian di modul <strong>Dasar Listrik</strong>: rakit pembagi tegangan, ukur tiap komponen, lalu bandingkan dengan perhitungan. Pengalaman tangan inilah yang membedakan yang paham dengan yang sekadar hafal.</p>"
      }
    ],
    "contoh": [
      {
        "judul": "Membaca Osiloskop",
        "soal": "Osiloskop disetel 2 V/div dan 5 ms/div. Gelombang sinus puncaknya setinggi 3 kotak dan satu periode selebar 4 kotak. Tentukan amplitudo puncak dan frekuensinya!",
        "langkah": [
          "Amplitudo puncak: \\(V_p = 3\\,\\text{div} \\times 2\\,\\text{V/div} = 6\\,\\text{V}\\).",
          "Periode: \\(T = 4\\,\\text{div} \\times 5\\,\\text{ms/div} = 20\\,\\text{ms} = 0{,}02\\,\\text{s}\\).",
          "Frekuensi: \\(f = \\dfrac{1}{T} = \\dfrac{1}{0{,}02} = 50\\,\\text{Hz}\\).",
          "<strong>Jawaban:</strong> gelombang 6 V puncak dengan frekuensi <strong>50 Hz</strong> — pola khas sinyal PLN."
        ]
      },
      {
        "judul": "Verifikasi Resistor dengan Kode Warna vs DMM",
        "soal": "Resistor bercincin merah–hitam–merah–emas diukur DMM menunjukkan 2,17 kΩ. Apakah resistor masih baik?",
        "langkah": [
          "Kode warna: merah=2, hitam=0, merah=×100 → \\(R = 20 \\times 100 = 2000\\,\\Omega = 2\\,\\text{k}\\Omega\\), emas = toleransi 5%.",
          "Rentang wajar: \\(2000 \\times (1 \\pm 0{,}05) = 1900\\text{–}2100\\,\\Omega\\).",
          "Hasil ukur 2,17 kΩ = 2170 Ω → di luar rentang 5%.",
          "<strong>Kesimpulan:</strong> kemungkinan toleransi sebenarnya lebih besar (periksa cincin ke-4) atau resistor terdegradasi — ukur lagi dengan kaki yang benar-benar terlepas."
        ]
      },
      {
        "judul": "Menghitung Error Pengukuran DMM",
        "soal": "DMM berspesifikasi akurasi ±(0,5% + 2 digit) menampilkan 5,00 V. Berapa rentang nilai sebenarnya?",
        "langkah": [
          "Komponen persen: \\(0{,}5\\% \\times 5{,}00 = 0{,}025\\,\\text{V}\\).",
          "Komponen digit: 2 digit terakhir = \\(\\pm 0{,}02\\,\\text{V}\\) (resolusi 0,01 V).",
          "Total error: \\(\\pm(0{,}025 + 0{,}02) = \\pm 0{,}045\\,\\text{V}\\).",
          "<strong>Jawaban:</strong> nilai sebenarnya berada di antara <strong>4,955–5,045 V</strong>."
        ]
      }
    ],
    "soal": [
      {
        "q": "Untuk mengukur tegangan sebuah resistor, voltmeter dipasang…",
        "opts": [
          "Seri dengan resistor",
          "Paralel dengan resistor",
          "Diputus dulu rangkaiannya",
          "Di sumber saja"
        ],
        "ans": 1,
        "exp": "Voltmeter paralel — komponen paralel memiliki tegangan yang sama, jadi hasil ukur = tegangan resistor."
      },
      {
        "q": "Sebelum mengukur arus, probe merah DMM harus dipindahkan ke…",
        "opts": [
          "Jack COM",
          "Jack VΩ",
          "Jack A atau mA",
          "Tidak perlu dipindah"
        ],
        "ans": 2,
        "exp": "Jack VΩ dilindungi fuse tegangan; jalur arus punya jalur shunt tersendiri di jack A/mA."
      },
      {
        "q": "Mengukur resistansi resistor yang masih terpasang di rangkaian aktif akan…",
        "opts": [
          "Hasil akurat karena rangkaian menyala",
          "Hasil salah & berpotensi merusak DMM",
          "Membuat resistor lebih presisi",
          "Tidak ada efek apa pun"
        ],
        "ans": 1,
        "exp": "Ohmmeter menyuntikkan arus sendiri; tegangan luar mengacaukan pengukuran dan bisa merusak mode Ω."
      },
      {
        "q": "Amperemeter yang tak sengaja dipasang paralel dengan beban akan…",
        "opts": [
          "Menampilkan arus normal",
          "Menjadi korslet — arus melonjak & fuse putus",
          "Membaca tegangan dengan benar",
          "Memutus rangkaian secara aman"
        ],
        "ans": 1,
        "exp": "Hambatan dalam amperemeter ≈ 0 Ω, sehingga paralel = korslet. Inilah kesalahan paling berbahaya pemula."
      },
      {
        "q": "Osiloskop disetel 2 V/div, puncak gelombang setinggi 3 kotak. Amplitudo puncaknya…",
        "opts": [
          "1,5 V",
          "5 V",
          "6 V",
          "8 V"
        ],
        "ans": 2,
        "exp": "Vp = 3 div × 2 V/div = 6 V."
      },
      {
        "q": "Timebase 5 ms/div dengan satu periode selebar 4 kotak. Frekuensinya…",
        "opts": [
          "20 Hz",
          "50 Hz",
          "100 Hz",
          "200 Hz"
        ],
        "ans": 1,
        "exp": "T = 4 × 5 ms = 20 ms → f = 1/0,02 = 50 Hz."
      },
      {
        "q": "Mode kontinuitas berbunyi beep ketika dua probe dihubungkan. Ini berarti…",
        "opts": [
          "Dua titik tersambung (hambatan ≈ 0)",
          "Tegangan tinggi terdeteksi",
          "Rangkaian terbuka",
          "Dioda sedang menghantar maju"
        ],
        "ans": 0,
        "exp": "Beep = jalur tertutup/tersambung. Praktis untuk mengecek kabel putus & solderan."
      },
      {
        "q": "Untuk mengukur panel distribusi listrik gedung, DMM minimal harus berkategori…",
        "opts": [
          "CAT I",
          "CAT II",
          "CAT III",
          "CAT IV"
        ],
        "ans": 2,
        "exp": "CAT III untuk panel & distribusi bangunan; CAT IV khusus jaringan sumber (meteran utama)."
      }
    ]
  },
{
    "id": "sistem-ketenagalistrikan",
    "emoji": "⚡",
    "title": "Sistem Ketenagalistrikan",
    "subtitle": "Transformator, distribusi 3 fasa, gardu induk, transmisi & jaringan PLN",
    "level": "Menengah",
    "durasi": "±40 menit",
    "materi": [
      "Transformator",
      "Sistem 3 Fasa",
      "Distribusi",
      "Gardu Induk",
      "Transmisi"
    ],
    "sections": [
      {
        "id": "pengenalan-sistem-tenaga",
        "emoji": "🏭",
        "title": "Pengenalan Sistem Tenaga Listrik",
        "body": "<p><strong>Sistem tenaga listrik</strong> adalah rangkaian peralatan mulai dari pembangkit hingga konsumen akhir. Tujuannya: menghasilkan, menyalurkan, dan mendistribusikan energi listrik secara <strong>handal, efisien, dan aman</strong>.</p>\n<div class=\"mt-img-wrap\" style=\"margin:16px 0;\"><svg viewBox=\"0 0 600 120\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:600px\"><rect x=\"0\" y=\"40\" width=\"100\" height=\"40\" rx=\"8\" fill=\"#4f9cf9\" opacity=\"0.15\" stroke=\"#4f9cf9\" stroke-width=\"2\"/><text x=\"50\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"600\" fill=\"#4f9cf9\">🏭 Pembangkit</text><line x1=\"105\" y1=\"60\" x2=\"175\" y2=\"60\" stroke=\"#4f9cf9\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"100\" height=\"40\" rx=\"8\" fill=\"#f5a623\" opacity=\"0.15\" stroke=\"#f5a623\" stroke-width=\"2\"/><text x=\"230\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\" fill=\"#f5a623\">⚡ Transmisi</text><text x=\"230\" y=\"80\" text-anchor=\"middle\" font-size=\"9\" fill=\"#999\">150-500 kV</text><line x1=\"285\" y1=\"60\" x2=\"355\" y2=\"60\" stroke=\"#f5a623\" stroke-width=\"2\" marker-end=\"url(#arrow2)\"/><rect x=\"360\" y=\"40\" width=\"100\" height=\"40\" rx=\"8\" fill=\"#3ecf8e\" opacity=\"0.15\" stroke=\"#3ecf8e\" stroke-width=\"2\"/><text x=\"410\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\" fill=\"#3ecf8e\">🏘️ Distribusi</text><text x=\"410\" y=\"80\" text-anchor=\"middle\" font-size=\"9\" fill=\"#999\">20 kV → 220/380V</text><line x1=\"465\" y1=\"60\" x2=\"535\" y2=\"60\" stroke=\"#3ecf8e\" stroke-width=\"2\" marker-end=\"url(#arrow3)\"/><rect x=\"540\" y=\"40\" width=\"60\" height=\"40\" rx=\"8\" fill=\"#e879a0\" opacity=\"0.15\" stroke=\"#e879a0\" stroke-width=\"2\"/><text x=\"570\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\" fill=\"#e879a0\">🏠</text><defs><marker id=\"arrow\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6\" fill=\"#4f9cf9\"/></marker><marker id=\"arrow2\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6\" fill=\"#f5a623\"/></marker><marker id=\"arrow3\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6\" fill=\"#3ecf8e\"/></marker></defs></svg><div class=\"mt-img-cap\">Alur energi listrik: Pembangkit → Transmisi → Distribusi → Konsumen (diagram konseptual)</div></div>\n<p><strong>Tiga komponen utama:</strong></p>\n<ol>\n<li><strong>Pembangkit (Generating)</strong> — mengubah energi primer (batu bara, gas, air, surya) menjadi energi listrik AC 3 fasa.</li>\n<li><strong>Transmisi (Transmission)</strong> — menyalurkan daya dari pembangkit ke gardu induk beban dengan tegangan tinggi (150 kV, 500 kV) untuk meminimalkan rugi-rugi daya.</li>\n<li><strong>Distribusi (Distribution)</strong> — menurunkan tegangan dari gardu induk ke konsumen (220/380 V rumah tangga, 380 V industri ringan).</li>\n</ol>\n<p><strong>Rugi-rugi daya</strong> pada transmisi:</p>\n$$P_{\\text{rugi}} = I^2 \\cdot R$$\n<p>Karena \\(P = V \\cdot I\\), menaikkan tegangan secara proporsional menurunkan arus → rugi-rugi mengecil drastis. Inilah alasan transmisi menggunakan <strong>tegangan sangat tinggi (Extra High Voltage)</strong>.</p>\n<div class=\"mt-tip\">💡 PLN Indonesia mengoperasikan tegangan 500 kV (Jawa–Sumatera), 150 kV (transmisi regional), 20 kV (distribusi primer), dan 380/220 V (konsumen akhir).</div>"
      },
      {
        "id": "transformator",
        "emoji": "🔄",
        "title": "Transformator",
        "body": "<p><strong>Transformator</strong> adalah alat statis (tanpa bagian bergerak) yang mentransfer daya AC dari satu sirkuit ke sirkuit lain melalui induksi elektromagnetik, mengubah level tegangan.</p>\n<div class=\"mt-img-wrap\" style=\"margin:16px 0;\"><svg viewBox=\"0 0 300 180\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:320px\"><ellipse cx=\"100\" cy=\"90\" rx=\"35\" ry=\"70\" fill=\"none\" stroke=\"#4f9cf9\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"90\" rx=\"30\" ry=\"65\" fill=\"#4f9cf9\" opacity=\"0.08\"/><ellipse cx=\"200\" cy=\"90\" rx=\"35\" ry=\"70\" fill=\"none\" stroke=\"#f5a623\" stroke-width=\"2\"/><ellipse cx=\"200\" cy=\"90\" rx=\"30\" ry=\"65\" fill=\"#f5a623\" opacity=\"0.08\"/><path d=\"M65,40 Q100,20 100,40 Q100,60 100,80 Q100,100 100,120 Q100,140 100,160\" stroke=\"#4f9cf9\" stroke-width=\"3\" fill=\"none\"/><path d=\"M235,40 Q200,20 200,40 Q200,60 200,80 Q200,100 200,120 Q200,140 200,160\" stroke=\"#f5a623\" stroke-width=\"3\" fill=\"none\"/><line x1=\"65\" y1=\"90\" x2=\"30\" y2=\"90\" stroke=\"#4f9cf9\" stroke-width=\"3\"/><line x1=\"135\" y1=\"90\" x2=\"170\" y2=\"90\" stroke=\"#4f9cf9\" stroke-width=\"3\"/><line x1=\"230\" y1=\"90\" x2=\"270\" y2=\"90\" stroke=\"#f5a623\" stroke-width=\"3\"/><text x=\"150\" y=\"10\" text-anchor=\"middle\" font-size=\"10\" fill=\"#888\">Fluks Magnetik</text><path d=\"M130,85 Q150,75 170,85\" stroke=\"#888\" stroke-width=\"1.5\" fill=\"none\" marker-end=\"url(#mag)\"/><defs><marker id=\"mag\" markerWidth=\"6\" markerHeight=\"5\" refX=\"6\" refY=\"2.5\" orient=\"auto\"><path d=\"M0,0 L6,2.5 L0,5\" fill=\"#888\"/></marker></defs><text x=\"100\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\" fill=\"#4f9cf9\">Primer (N₁)</text><text x=\"200\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\" fill=\"#f5a623\">Sekunder (N₂)</text></svg><div class=\"mt-img-cap\">Diagram transformator ideal: fluks magnetik memotong kedua lilitan · prinsip induksi elektromagnetik</div></div>\n<p><strong>Rumus dasar transformator ideal:</strong></p>\n$$\\frac{V_1}{V_2} = \\frac{N_1}{N_2} = \\frac{I_2}{I_1}$$\n<p>dengan V = tegangan, N = jumlah lilitan, I = arus. Indeks 1 = primer (masukan), 2 = sekunder (keluaran).</p>\n<p><strong>Daya (ideal):</strong></p>\n$$P_1 = P_2 \\quad \\Rightarrow \\quad V_1 I_1 = V_2 I_2$$\n<p><strong>Jenis transformator berdasarkan fungsi:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Jenis</th><th>Rasio</th><th>Aplikasi</th></tr></thead><tbody>\n<tr><td>Step-down</td><td>N₁ > N₂ → V₂ < V₁</td><td>Gardu distribusi: 20 kV → 380 V</td></tr>\n<tr><td>Step-up</td><td>N₁ < N₂ → V₂ > V₁</td><td>Gardu induk: 22 kV → 150 kV</td></tr>\n<tr><td>Isolasi</td><td>1:1</td><td>Pemisahan galvanik, pengujian</td></tr>\n</tbody></table>\n<p><strong>Transformator nyata</strong> tidak 100% efisien — ada rugi-rugi:</p>\n<ul>\n<li><strong>Rugi tembakau (core loss)</strong> — histeresis + eddy current pada inti besi</li>\n<li><strong>Rugi tembaga (copper loss)</strong> — \\(I^2R\\) pada lilitan primer & sekunder</li>\n<li><strong>Rugi kebocoran (leakage flux)</strong> — fluks yang tidak seluruhnya memotong kedua lilitan</li>\n</ul>\n<p>Efisiensi transformator industri: <strong>95–99%</strong> (sangat tinggi karena tidak ada komponen bergerak).</p>\n<div class=\"mt-warn\">⚠️ Transformator HANYA untuk AC — tidak bisa mengubah tegangan DC. Untuk DC, gunakan konverter switching (buck/boost converter).</div>"
      },
      {
        "id": "sistem-3-fasa",
        "emoji": "🔀",
        "title": "Sistem 3 Fasa",
        "body": "<p><strong>Sistem 3 fasa</strong> adalah metode distribusi daya paling efisien — tiga gelombang sinusoidal dengan frekuensi sama (50 Hz) tetapi bergeser fase 120° satu sama lain.</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/3phase-waveform.png\" alt=\"Gelombang sinusoidal 3 fasa\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Gelombang sinusoidal 3 fasa: tiga gelombang identik bergeser 120° satu sama lain — jumlah vektor ketiga fasa pada setiap saat = 0 (sistem seimbang) · sumber: Wikimedia Commons, <i>File:3 phase AC waveform.svg</i> (CC BY-SA 4.0)</div></div>\n<p><strong>Tegangan pada sistem 3 fasa:</strong></p>\n<ul>\n<li><strong>Tegangan fasa (V_phase)</strong> — tegangan antara satu fasa dan netral: 220 V di Indonesia</li>\n<li><strong>Tegangan lini (V_line)</strong> — tegangan antara dua fasa: \\(V_{line} = \\sqrt{3} \\cdot V_{phase} = 380\\,\\text{V}\\)</li>\n</ul>\n<p><strong>Daya sistem 3 fasa:</strong></p>\n$$P = \\sqrt{3} \\cdot V_{line} \\cdot I_{line} \\cdot \\cos\\phi$$\n<p>dengan \\(\\cos\\phi\\) = faktor daya (power factor).</p>\n<p><strong>Sistem koneksi:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Koneksi</th><th>Cocok Untuk</th><th>Kelebihan</th></tr></thead><tbody>\n<tr><td>Bintang (Y)</td><td>Motor ringan, lampu</td><td>Tersedia fasa + netral (220V)</td></tr>\n<tr><td>Segitiga (Δ)</td><td>Motor berat, pemanas</td><td>Tanpa netral, arus lini = \\(\\sqrt{3}\\) arus fasa</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 Rumus cepat: \\(P = \\sqrt{3} \\cdot V_{line} \\cdot I_{line} \\cdot \\cos\\phi\\). Untuk beban seimbang, arus netral = 0 (hanya ada pada koneksi bintang).</div>"
      },
      {
        "id": "distribusi-pln",
        "emoji": "🏘️",
        "title": "Sistem Distribusi PLN",
        "body": "<p>Setelah transmisi tegangan tinggi mencapai <strong>gardu induk</strong>, tegangan diturunkan secara bertahap hingga sampai ke konsumen:</p>\n<ol>\n<li><strong>Gardu induk transmisi:</strong> 500 kV / 150 kV → 20 kV</li>\n<li><strong>Gardu distribusi primer:</strong> 20 kV → 380/220 V</li>\n<li><strong>Gardu distribusi (trafo Julius/travo gantung):</strong> 20 kV → 220/380 V langsung ke rumah</li>\n</ol>\n<p><strong>Sistem distribusi 3 fasa di Indonesia:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Tegangan</th><th>Penggunaan</th><th>Pengaman</th></tr></thead><tbody>\n<tr><td>380 V (fasa-fasa)</td><td>Motor industri, AC besar, mesin</td><td>MCB 3 kutub + ELCB 30 mA</td></tr>\n<tr><td>220 V (fasa-netral)</td><td>Rumah tangga, lampu, elektronik</td><td>MCB 1 kutub + ELCB 30 mA</td></tr>\n</tbody></table>\n<p><strong>Koordinasi proteksi:</strong> MCB utama → ELCB → MCB grup (per ruangan). ELCB melindungi dari arus bocor; MCB melindungi dari arus lebih dan hubung singkat.</p>\n<div class=\"mt-warn\">⚠️ PUIL 2011 menetapkan: susut tegangan maksimum instalasi akhir = 4%, dan setiap sirkuit harus memiliki proteksi sendiri.</div>"
      },
      {
        "id": "gardu-induk",
        "emoji": "🏗️",
        "title": "Gardu Induk & Peralatan Utama",
        "body": "<p><strong>Gardu induk</strong> adalah fasilitas sentral yang menghubungkan jaringan transmisi dengan distribusi. Peralatan utamanya:</p>\n<table class=\"mt-table\"><thead><tr><th>Peralatan</th><th>Fungsi</th><th>Simbol</th></tr></thead><tbody>\n<tr><td>Transformator daya</td><td>Menurunkan/menaikkan tegangan</td><td>DT (Power Transformer)</td></tr>\n<tr><td>Panel saklar sentral</td><td>Menghubungkan/memutus beban</td><td>SF6 / Vacuum CB</td></tr>\n<tr><td>Pemutus arus (CB)</td><td>Memutus arus gangguan (hubung singkat)</td><td>CB (Circuit Breaker)</td></tr>\n<tr><td>Disconnect switch</td><td>Isolasi visual untuk maintenance</td><td>DS (Disconnecting Switch)</td></tr>\n<tr><td>Lightning arrester</td><td>Proteksi dari petir/surge</td><td>LA (Surge Arrester)</td></tr>\n<tr><td>Current Transformer (CT)</td><td>Mengukur arus (menurunkan ke 5A/1A)</td><td>CT</td></tr>\n<tr><td>Voltage Transformer (VT)</td><td>Mengukur tegangan</td><td>PT/VT</td></tr>\n</tbody></table>\n<p><strong>Urutan peralatan</strong> pada satu feeder distribusi:</p>\n<p>Transformator → CB → DS → CT → Beban</p>\n<div class=\"mt-tip\">💡 CT dan VT mengubah arus/tegangan tinggi ke nilai kecil (5A/110V) sehingga bisa diukur oleh relay proteksi dan meter tanpa risiko tinggi.</div>"
      },
      {
        "id": "faktor-daya",
        "emoji": "📊",
        "title": "Faktor Daya & Koreksi",
        "body": "<p><strong>Faktor daya (power factor / PF)</strong> adalah rasio daya nyata (kW) terhadap daya semu (kVA):</p>\n<div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"Asset%20Materi/power-triangle.png\" alt=\"Segitiga daya\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Segitiga Daya: P (daya aktif, Watt) = sisi datar, Q (daya reaktif, VAR) = sisi tegak, S (daya semu, VA) = hipotenusa — cos φ = P/S = faktor daya · sumber: Wikimedia Commons, <i>File:Power triangle.svg</i> (CC BY-SA 4.0)</div></div>\n$$PF = \\cos\\phi = \\frac{P_{\\text{nyata}}}{S_{\\text{semu}}} = \\frac{P}{V \\cdot I}$$\n<p><strong>Mengapa PF rendah buruk?</strong></p>\n<ul>\n<li>Arus lebih besar untuk daya yang sama → rugi-rugi \\(I^2R\\) meningkat</li>\n<li>Kabel, transformator, dan switchgear harus over-dimensions</li>\n<li>PLN meninalir pelanggan industri dengan PF < 0,85</li>\n</ul>\n<p><strong>Segitiga daya (power triangle):</strong></p>\n<ul>\n<li><strong>P (kW)</strong> — daya nyata (aktif), bekerja nyata</li>\n<li><strong>Q (kVAR)</strong> — daya reaktif (magnetisasi, kapasitor/induktor)</li>\n<li><strong>S (kVA)</strong> — daya semu (total yang harus disuplai)</li>\n</ul>\n<p>$$S^2 = P^2 + Q^2$$\n<p><strong>Koreksi PF</strong> dilakukan dengan memasang <strong>kapasitor bank</strong> paralel — menyediakan daya reaktif secara lokal sehingga arus dari sumber berkurang.</p>\n<div class=\"mt-tip\">💡 Contoh: motor 10 kW, PF = 0,7 → S = 14,3 kVA, I = 65 A. Setelah koreksi ke PF = 0,95 → S = 10,5 kVA, I = 48 A — penghematan kabel & losses signifikan!</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Transformator Step-Down",
        "soal": "Transformator memiliki N₁ = 1000 lilitan, N₂ = 50 lilitan. Jika V₁ = 20.000 V, berapa V₂? Dan jika I₁ = 50 A, berapa I₂?",
        "langkah": [
          "Hitung rasio: N₁/N₂ = 1000/50 = 20.",
          "V₂ = V₁ × (N₂/N₁) = 20.000 × (50/1000) = 1000 V.",
          "I₂ = I₁ × (N₁/N₂) = 50 × 20 = 1000 A.",
          "<strong>Jawaban:</strong> V₂ = 1000 V, I₂ = 1000 A. Daya tetap: 20.000 × 50 = 1000 × 1000 = 1.000.000 VA = 1 MVA."
        ]
      },
      {
        "judul": "Daya Sistem 3 Fasa",
        "soal": "Motor 3 fasa 380 V menarik arus 15 A dengan PF = 0,85. Hitung daya aktif (kW) dan arus jika PF diperbaiki ke 0,95.",
        "langkah": [
          "P = √3 × V_line × I_line × cosφ = √3 × 380 × 15 × 0,85 = 8.387 W ≈ 8,4 kW.",
          "Setelah koreksi PF: I_baru = P / (√3 × V_line × cosφ_baru) = 8387 / (√3 × 380 × 0,95) = 13,4 A.",
          "Pengurangan arus: (15 - 13,4)/15 × 100% = 10,7% → rugi-rugi I²R turun 20%!"
        ]
      },
      {
        "judul": "Rugi-Rugi Transmisi",
        "soal": "Daya 10 MW ditransmisikan pada 20 kV, kabel R = 10 Ω. Hitung rugi-rugi daya. Lalu bandingkan jika tegangan dinaikkan ke 150 kV.",
        "langkah": [
          "Pada 20 kV: I = P/V = 10×10⁶ / 20.000 = 500 A. Rugi = I²R = 500² × 10 = 2.500.000 W = 2,5 MW (25%!).",
          "Pada 150 kV: I = 10×10⁶ / 150.000 = 66,7 A. Rugi = 66,7² × 10 = 44.489 W = 44,5 kW (0,44%).",
          "<strong>Jawaban:</strong> Transmisi 150 kV mengurangi rugi-rugi dari 2,5 MW menjadi 44,5 kW — 56× lebih efisien!"
        ]
      }
    ],
    "soal": [
      {
        "q": "Rumus daya aktif sistem 3 fasa adalah…",
        "opts": [
          "P = V × I",
          "P = √3 × V_line × I_line × cosφ",
          "P = 3 × V_phase × I_phase × sinφ",
          "P = V² / R"
        ],
        "ans": 1,
        "exp": "Daya aktif 3 fasa: P = √3 × V_line × I_line × cosφ."
      },
      {
        "q": "Transformator dengan N₁ = 500 dan N₂ = 50 merupakan transformator…",
        "opts": [
          "Step-up",
          "Step-down",
          "Isolasi",
          "Autotransformator"
        ],
        "ans": 1,
        "exp": "N₁ > N₂ → V₂ < V₁ → step-down."
      },
      {
        "q": "Tegangan lini pada sistem 3 fasa 220 V (fase-netral) adalah…",
        "opts": [
          "220 V",
          "380 V",
          "440 V",
          "110 V"
        ],
        "ans": 1,
        "exp": "V_line = √3 × V_phase = √3 × 220 ≈ 380 V."
      },
      {
        "q": "Untuk memperbaiki faktor daya yang rendah, komponen yang dipasang adalah…",
        "opts": [
          "Resistor",
          "Induktor",
          "Kapasitor bank",
          "Transformer"
        ],
        "ans": 2,
        "exp": "Kapasitor menyediakan daya reaktif secara lokal, mengurangi arus dari sumber → PF meningkat."
      },
      {
        "q": "Peranti yang mengubah arus tinggi pada transmisi ke nilai kecil untuk pengukuran adalah…",
        "opts": [
          "VT (Voltage Transformer)",
          "CT (Current Transformer)",
          "CB (Circuit Breaker)",
          "LA (Lightning Arrester)"
        ],
        "ans": 1,
        "exp": "CT menurunkan arus tinggi ke 5A/1A untuk meter & relay proteksi."
      }
    ]
  },
{
    "id": "sistem-kendali",
    "emoji": "🎛️",
    "title": "Sistem Kendali (Control Systems)",
    "subtitle": "Kontrol ON/OFF, PID, feedback loop, implementasi Arduino & PLC",
    "level": "Menengah → Lanjutan",
    "durasi": "±45 menit",
    "materi": [
      "Kontrol Dasar",
      "PID",
      "Feedback Loop",
      "Implementasi Arduino",
      "Implementasi PLC"
    ],
    "sections": [
      {
        "id": "pengenalan-kendali",
        "emoji": "🔄",
        "title": "Pengenalan Sistem Kendali",
        "body": "<p><strong>Sistem kendali</strong> adalah sistem yang mengatur perilaku sistem lain agar mencapai kondisi yang diinginkan (<em>setpoint</em>). Contoh sehari-hari: AC otomatis menjaga suhu tetap 24°C, cruise control mobil menjaga kecepatan konstan.</p>\n<p><strong>Dua tipe utama:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Tipe</th><th>Cara Kerja</th><th>Contoh</th></tr></thead><tbody>\n<tr><td><strong>Open-loop</strong></td><td>Tanpa umpan balik — berdasarkan input saja</td><td>Timer lampu, microwave定时</td></tr>\n<tr><td><strong>Closed-loop</strong></td><td>Ada sensor feedback → dibandingkan dengan setpoint → koreksi</td><td>AC thermostat, cruise control, oven digital</td></tr>\n</tbody></table>\n<p><strong>Sirkuit umpan balik (feedback loop):</strong></p>\n<p>Setpoint → (+) Komparator → Error → [Kontroler] → [Plant/Sistem] → Output → [Sensor] → balik ke komparator</p>\n<ul>\n<li><strong>Error</strong> = Setpoint − Output aktual</li>\n<li><strong>Kontroler</strong> memproses error dan menghasilkan sinyal kendali</li>\n<li><strong>Plant</strong> = sistem yang dikendalikan (motor, heater, lampu, dll)</li>\n</ul>\n<div class=\"mt-tip\">💡 Tanpa sensor feedback (open-loop), sistem tidak bisa tahu apakah tujuan tercapai — hanya mengandalkan asumsi. Closed-loop jauh lebih akurat dan robust.</div>"
      },
      {
        "id": "kontrol-on-off",
        "emoji": "🔘",
        "title": "Kontrol ON/OFF (Bang-Bang)",
        "body": "<p><strong>Kontrol ON/OFF</strong> adalah metode paling sederhana: output hanya bisa <strong>ON</strong> (aktif penuh) atau <strong>OFF</strong> (mati total).</p>\n<div class=\"mt-img-wrap\" style=\"margin:16px 0;\"><svg viewBox=\"0 0 500 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:500px\"><rect x=\"0\" y=\"30\" width=\"80\" height=\"40\" rx=\"6\" fill=\"#4f9cf9\" opacity=\"0.15\" stroke=\"#4f9cf9\" stroke-width=\"1.5\"/><text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#4f9cf9\">Setpoint</text><line x1=\"85\" y1=\"50\" x2=\"125\" y2=\"50\" stroke=\"#4f9cf9\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"50\" r=\"10\" fill=\"none\" stroke=\"#f5a623\" stroke-width=\"1.5\"/><text x=\"130\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" fill=\"#f5a623\">+</text><text x=\"130\" y=\"56\" text-anchor=\"middle\" font-size=\"9\" fill=\"#f5a623\">−</text><line x1=\"145\" y1=\"50\" x2=\"185\" y2=\"50\" stroke=\"#f5a623\" stroke-width=\"1.5\"/><rect x=\"190\" y=\"30\" width=\"80\" height=\"40\" rx=\"6\" fill=\"#f5a623\" opacity=\"0.15\" stroke=\"#f5a623\" stroke-width=\"1.5\"/><text x=\"230\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#f5a623\">Kontroler</text><line x1=\"275\" y1=\"50\" x2=\"315\" y2=\"50\" stroke=\"#f5a623\" stroke-width=\"1.5\"/><rect x=\"320\" y=\"30\" width=\"80\" height=\"40\" rx=\"6\" fill=\"#3ecf8e\" opacity=\"0.15\" stroke=\"#3ecf8e\" stroke-width=\"1.5\"/><text x=\"360\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#3ecf8e\">Plant</text><line x1=\"405\" y1=\"50\" x2=\"470\" y2=\"50\" stroke=\"#3ecf8e\" stroke-width=\"1.5\"/><circle cx=\"475\" cy=\"50\" r=\"5\" fill=\"#3ecf8e\"/><text x=\"485\" y=\"55\" font-size=\"10\" fill=\"#3ecf8e\">Output</text><path d=\"M475,55 L475,85 L130,85 L130,60\" stroke=\"#e879a0\" stroke-width=\"1.5\" fill=\"none\" stroke-dasharray=\"4,2\"/><text x=\"300\" y=\"95\" text-anchor=\"middle\" font-size=\"9\" fill=\"#e879a0\">Feedback (Sensor)</text></svg><div class=\"mt-img-cap\">Diagram blok sistem kendali closed-loop — setpoint dibandingkan dengan output aktual melalui sensor feedback</div></div>\n<p><strong>Contoh: Thermostat AC:</strong></p>\n<ul>\n<li>Suhu ≥ 26°C → AC ON</li>\n<li>Suhu ≤ 24°C → AC OFF</li>\n<li><strong>Hysteresis (deadband)</strong>: 2°C — mencegah sakelar terus-menerus ON/OFF (chattering)</li>\n</ul>\n<p><strong>Kelebihan:</strong></p>\n<ul>\n<li>Sangat sederhana — cukup komparator + relay</li>\n<li>Murah dan mudah di-maintain</li>\n</ul>\n<p><strong>Kekurangan:</strong></p>\n<ul>\n<li>Overshoot dan oscillation — selalu bolak-balik melewati setpoint</li>\n<li>Tidak cocok untuk sistem yang butuh presisi tinggi</li>\n<li>Wear pada aktuator (relay sering ON/OFF)</li>\n</ul>\n<p><strong>Implementasi Arduino:</strong></p>\n<pre class=\"mt-code\">// Kontrol ON/OFF sederhana — suhu → heater\nconst float SETPOINT = 25.0;\nconst float DEADBAND = 1.0;  // ±1°C\n\nvoid loop() {\n  float suhu = bacaSensor();\n  if (suhu < SETPOINT - DEADBAND/2) digitalWrite(HEATER, HIGH);\n  if (suhu > SETPOINT + DEADBAND/2) digitalWrite(HEATER, LOW);\n  delay(500);\n}</pre>"
      },
      {
        "id": "kontrol-pid",
        "emoji": "📐",
        "title": "Kontrol PID (Proportional-Integral-Derivative)",
        "body": "<p><strong>PID</strong> adalah algoritma kendali paling populer di industri — menghitung koreksi berdasarkan tiga komponen error:</p>\n$$u(t) = K_p \\cdot e(t) + K_i \\cdot \\int e(t)\\,dt + K_d \\cdot \\frac{de(t)}{dt}$$\n<table class=\"mt-table\"><thead><tr><th>Komponen</th><th>Fungsi</th><th>Efek</th></tr></thead><tbody>\n<tr><td><strong>P (Proportional)</strong></td><td>Koreksi sebanding error saat ini</td><td>Cepat merespons, tapi ada steady-state error</td></tr>\n<tr><td><strong>I (Integral)</strong></td><td>Koreksi dari akumulasi error sebelumnya</td><td>Menghilangkan steady-state error, tapi bisa overshoot</td></tr>\n<tr><td><strong>D (Derivative)</strong></td><td>Koreksi dari laju perubahan error</td><td>Redam overshoot, stabilitas meningkat</td></tr>\n</tbody></table>\n<p><strong>Cara memahami secara intuitif:</strong></p>\n<ul>\n<li><strong>P</strong>: \"Saya melihat error — saya bereaksi sekarang\"</li>\n<li><strong>I</strong>: \"Error sudah berlangsung lama — saya harus lebih agresif\"</li>\n<li><strong>D</strong>: \"Error sudah mengecil — saya mulai melambat agar tidak overshoot\"</li>\n</ul>\n<p><strong>Tuning PID:</strong></p>\n<ol>\n<li>Mulai dengan Kp saja, naikkan sampai sistem mulai oscillate</li>\n<li>Tambahkan Ki untuk menghilangkan steady-state error</li>\n<li>Tambahkan Kd untuk meredam overshoot</li>\n</ol>\n<div class=\"mt-tip\">💡 Metode tuning manual Ziegler-Nichols: naikkan Kp sampai sistem oscillasi konstan → catat Kp_ult dan T_ult → hitung Kp, Ki, Kd dari tabel baku.</div>"
      },
      {
        "id": "implementasi-pid-arduino",
        "emoji": "🤖",
        "title": "Implementasi PID di Arduino",
        "body": "<p>Library bawaan <strong>PID Arduino</strong> (by Brett Beauregard) sangat populer untuk implementasi PID di Arduino:</p>\n<pre class=\"mt-code\">#include <PID_v1.h>\n\n// Sensor suhu (thermistor atau LM35)\nconst int SENSOR_PIN = A0;\nconst int HEATER_PIN = 9;  // PWM output\n\n// Setpoint dan variabel PID\ndouble Setpoint = 60.0;  // Target suhu (°C)\ndouble Input, Output;\n\n// Parameter PID (perlu dituning!)\ndouble Kp = 2.0, Ki = 5.0, Kd = 1.0;\nPID myPID(&Input, &Output, &Setpoint, Kp, Ki, Kd, DIRECT);\n\nvoid setup() {\n  myPID.SetMode(AUTOMATIC);\n  myPID.SetOutputLimits(0, 255);  // Rentang PWM\n  analogWrite(HEATER_PIN, 0);\n}\n\nvoid loop() {\n  Input = bacaSuhu();  // Fungsi baca sensor\n  myPID.Compute();     // Hitung output PID\n  analogWrite(HEATER_PIN, Output);  // Terapkan ke heater\n  delay(200);\n}</pre>\n<p><strong>Poin penting:</strong></p>\n<ul>\n<li><code>SetOutputLimits(0, 255)</code> — membatasi output PWM ke rentang 8-bit</li>\n<li><code>myPID.Compute()</code> harus dipanggil secara berkala (tidak terlalu cepat/lambat)</li>\n<li>Nilai Kp, Ki, Kd harus di-tuning sesuai sistem nyata</li>\n</ul>\n<div class=\"mt-warn\">⚠️ Jangan lupa <strong>anti-windup</strong> untuk integral — mencegah akumulasi error terlalu besar saat actuator sudah mentok (output = 255).</div>"
      },
      {
        "id": "implementasi-pid-plc",
        "emoji": "🏭",
        "title": "Implementasi PID di PLC",
        "body": "<p>PLC industri memiliki fungsi <strong>PID built-in</strong> yang sudah teroptimasi untuk proses continuous-time — lebih stabil dari implementasi manual di Arduino.</p>\n<p><strong>Parameter PID di PLC (contoh Siemens S7):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Parameter</th><th>Deskripsi</th><th>Umum</th></tr></thead><tbody>\n<tr><td>SP (Setpoint)</td><td>Nilai target yang diinginkan</td><td>Input dari HMI</td></tr>\n<tr><td>PV (Process Variable)</td><td>Nilai aktual dari sensor</td><td>Input dari transmitter 4-20mA</td></tr>\n<tr><td>CV (Controller Output)</td><td>Output kendali ke actuator</td><td>Output 4-20mA ke VFD/valve</td></tr>\n<tr><td>Kp</td><td>Gain proportional</td><td>0,5 – 50 (tergantung proses)</td></tr>\n<tr><td>Ti (Integral time)</td><td>Waktu integrasi</td><td>10 – 300 detik</td></tr>\n<tr><td>Td (Derivative time)</td><td>Waktu derivatif</td><td>0 – 60 detik</td></tr>\n</tbody></table>\n<p><strong>Studi kasus: Kontrol suhu tanki pemanas</strong></p>\n<ol>\n<li>PT100 mengukur suhu → transmitter 4-20mA → modul analog PLC (AI)</li>\n<li>PLC menjalankan fungsi PID (S7: FB \"PID_Compact\")</li>\n<li>Output PID → modul analog PLC (AO) 4-20mA → VFD motor pompa pemanas</li>\n<li>HMI menampilkan tren suhu, setpoint, dan output PID</li>\n</ol>\n<div class=\"mt-tip\">💡 PLC menggunakan scan time (1-10ms) sebagai basis perhitungan PID — lebih presisi dari Arduino yang delay()-based. Untuk proses lambat (suhu), keduanya bisa, tapi untuk proses cepat (motor speed), PLC lebih andal.</div>"
      },
      {
        "id": "studi-kasus-kendali",
        "emoji": "🎯",
        "title": "Studi Kasus: Kendali Kecepatan Motor DC",
        "body": "<p><strong>Spesifikasi:</strong> Motor DC 12V, encoder 600 PPR, target 1000 RPM</p>\n<p><strong>Sistem:</strong></p>\n<ol>\n<li>Sensor: Encoder optik (600 pulse per revolution)</li>\n<li>Actuator: Driver motor L298N (PWM input)</li>\n<li>Kontroler: Arduino Uno + library PID</li>\n</ol>\n<p><strong>Alur kerja:</strong></p>\n<ul>\n<li>Encoder menghasilkan pulse → Arduino menghitung RPM aktual</li>\n<li>Error = Target (1000 RPM) − RPM aktual</li>\n<li>PID menghitung output PWM (0-255)</li>\n<li>PWM → driver L298N → motor → kecepatan berubah</li>\n</ul>\n<p><strong>Cara tuning:</strong></p>\n<ol>\n<li>Set Ki = 0, Kd = 0, naikkan Kp sampai motor mulai goyang (oscillate)</li>\n<li>Catat Kp_ult (ultimte gain) dan T_ult (oscillation period)</li>\n<li>Gunakan tabel Ziegler-Nichols untuk hitung Kp, Ki, Kd</li>\n<li>Uji dan fine-tune secara manual</li>\n</ol>\n<p><strong>Hasil yang baik:</strong> overshoot < 10%, settle time < 2 detik, steady-state error ≈ 0.</p>"
      }
    ],
    "contoh": [
      {
        "judul": "Menghitung Error PID",
        "soal": "Suhu aktual = 58°C, setpoint = 60°C. Pada detik sebelumnya error = 3°C. Hitung komponen P, I, Kp=2, Ki=0,5, Kd=0,1 (asumsi derror/dt = -1°C/s).",
        "langkah": [
          "Error saat ini: e = 60 - 58 = 2°C.",
          "P = Kp × e = 2 × 2 = 4.",
          "I = Ki × Σe × dt ≈ 0,5 × (3 + 2) × 1s = 2,5 (asumsi dt = 1s).",
          "D = Kd × de/dt = 0,1 × (-1) = -0,1.",
          "Output = P + I + D = 4 + 2,5 - 0,1 = 6,4 (skala normalisasi ke PWM)"
        ]
      },
      {
        "judul": "Rasio Kontrol ON/OFF dengan Hysteresis",
        "soal": "Thermostat diset 25°C dengan hysteresis 2°C. Berapa kali AC ON/OFF dalam 10 menit jika suhu naik dari 23°C ke 27°C secara linear?",
        "langkah": [
          "AC ON pada 26°C (25 + hysteresis/2), OFF pada 24°C (25 - hysteresis/2).",
          "Suhu naik 4°C dalam 10 menit → laju 0,4°C/menit.",
          "Waktu ON: 23°C → 26°C = 3°C / 0,4 = 7,5 menit.",
          "Waktu OFF: 26°C → 24°C = 2°C / 0,4 = 5 menit (tapi tidak sempat turun karena suhu terus naik).",
          "<strong>Jawaban:</strong> AC hanya ON sekali (dari 23°C → 26°C, lalu terus ON karena suhu tidak pernah turun di bawah 24°C)."
        ]
      }
    ],
    "soal": [
      {
        "q": "Sistem yang memiliki sensor feedback untuk mengoreksi output disebut…",
        "opts": [
          "Open-loop",
          "Closed-loop",
          "Feedforward",
          "Cascade"
        ],
        "ans": 1,
        "exp": "Closed-loop memiliki sensor feedback yang dibandingkan dengan setpoint untuk menghasilkan error."
      },
      {
        "q": "Komponen PID yang berfungsi menghilangkan steady-state error adalah…",
        "opts": [
          "P (Proportional)",
          "I (Integral)",
          "D (Derivative)",
          "Semua komponen"
        ],
        "ans": 1,
        "exp": "Integral mengakumulasi error dari waktu ke waktu, sehingga terus memberikan koreksi sampai error = 0."
      },
      {
        "q": "Hysteresis pada kontrol ON/OFF berfungsi untuk…",
        "opts": [
          "Meningkatkan presisi",
          "Mencegah chattering (ON/OFF cepat)",
          "Mengurangi konsumsi daya",
          "Meningkatkan kecepatan respon"
        ],
        "ans": 1,
        "exp": "Hysteresis memberi \"ruang\" antara ON dan OFF sehingga relay tidak berubah-ubah terlalu cepat."
      },
      {
        "q": "Pada metode Ziegler-Nichols, Kp_ult adalah gain di mana sistem…",
        "opts": [
          "Tercapai setpoint dengan cepat",
          "Mulai oscillasi dengan amplitude konstan",
          "Error = 0 sempurna",
          "Output mentok maksimum"
        ],
        "ans": 1,
        "exp": "Kp_ult (ultimate gain) adalah gain di mana sistem mulai oscillasi stabil — titik awal tuning."
      },
      {
        "q": "Dalam sistem PLC, PID dihitung berdasarkan…",
        "opts": [
          "Loop time program",
          "Scan time PLC (1-10ms)",
          "Waktu user-defined",
          "Tidak ada basis waktu"
        ],
        "ans": 1,
        "exp": "PID PLC menggunakan scan time sebagai basis perhitungan waktu (dt) untuk integrasi dan derivasi."
      }
    ]
  },
{
    "id": "desain-pcb",
    "emoji": "🖥️",
    "title": "Desain PCB & Hardware",
    "subtitle": "Schematic, layout PCB, aturan desain, soldering & troubleshooting",
    "level": "Menengah",
    "durasi": "±35 menit",
    "materi": [
      "Schematic",
      "Layout PCB",
      "Aturan Desain",
      "Soldering",
      "Troubleshooting"
    ],
    "sections": [
      {
        "id": "pengenalan-pcb",
        "emoji": "📋",
        "title": "Apa itu PCB?",
        "body": "<p><strong>PCB (Printed Circuit Board)</strong> adalah papan fiberglass/epoksi dengan jalur tembaga yang menghubungkan komponen elektronik secara permanen. Sebelum PCB, rangkaian dibuat dengan menyolder kabel langsung antar komponen (point-to-point wiring) — lambat, rentan error, dan tidak reproduksibel.</p>\n<div class=\"mt-img-wrap\" style=\"margin:16px 0;\"><svg viewBox=\"0 0 400 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:420px\"><rect x=\"20\" y=\"20\" width=\"360\" height=\"110\" rx=\"4\" fill=\"#d4a574\" opacity=\"0.3\" stroke=\"#8b6914\" stroke-width=\"2\"/><text x=\"200\" y=\"15\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#666\">Struktur PCB</text><rect x=\"25\" y=\"30\" width=\"350\" height=\"15\" fill=\"#2d8a4e\" rx=\"2\" opacity=\"0.6\"/><text x=\"200\" y=\"41\" text-anchor=\"middle\" font-size=\"8\" fill=\"white\" font-weight=\"600\">Silkscreen (Label)</text><rect x=\"25\" y=\"50\" width=\"350\" height=\"12\" fill=\"#228b22\" rx=\"2\" opacity=\"0.8\"/><text x=\"200\" y=\"59\" text-anchor=\"middle\" font-size=\"8\" fill=\"white\" font-weight=\"600\">Soldermask (Pelindung)</text><rect x=\"25\" y=\"67\" width=\"350\" height=\"8\" fill=\"#d4a574\" rx=\"1\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"7\" fill=\"#333\" font-weight=\"600\">Copper Foil (35µm)</text><rect x=\"25\" y=\"80\" width=\"350\" height=\"35\" fill=\"#f5f5dc\" stroke=\"#ccc\" stroke-width=\"1\" rx=\"2\"/><text x=\"200\" y=\"102\" text-anchor=\"middle\" font-size=\"9\" fill=\"#666\" font-weight=\"600\">Substrat FR-4 (Fiberglass)</text><rect x=\"25\" y=\"120\" width=\"350\" height=\"8\" fill=\"#d4a574\" rx=\"1\"/><text x=\"200\" y=\"127\" text-anchor=\"middle\" font-size=\"7\" fill=\"#333\" font-weight=\"600\">Copper Foil (35µm)</text><rect x=\"25\" y=\"20\" width=\"350\" height=\"10\" fill=\"#228b22\" rx=\"2\" opacity=\"0.8\"/><text x=\"200\" y=\"28\" text-anchor=\"middle\" font-size=\"7\" fill=\"white\" font-weight=\"600\">Soldermask</text></svg><div class=\"mt-img-cap\">Struktur lapisan PCB — fiberglass FR-4 sebagai inti, dilapisi tembaga, soldermask, dan silkscreen</div></div>\n<p><strong>Keuntungan PCB:</strong></p>\n<ul>\n<li>Reproducible — bisa diproduksi massal dengan konsisten</li>\n<li>Komponen rapat — desain lebih kecil</li>\n<li>Mudah di-maintain — jalur terlihat jelas</li>\n<li>Noise lebih rendah — ground plane bisa mengurangi interferensi</li>\n</ul>\n<p><strong>Lapisan PCB:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Lapisan</th><th>Material</th><th>Fungsi</th></tr></thead><tbody>\n<tr><td>Copper foil</td><td>Tembaga 35µm / 70µm</td><td>Jalur sinyal & power</td></tr>\n<tr><td>Soldermask</td><td>Hijau (atau warna lain)</td><td>Perlindungan jalur dari oksidasi & short</td></tr>\n<tr><td>Silkscreen</td><td>Teks putih</td><td>Label komponen, nomor referensi</td></tr>\n<tr><td>Substrat</td><td>FR-4 (fiberglass)</td><td>Isolasi mekanis & listrik</td></tr>\n</tbody></table>\n<div class=\"mt-tip\">💡 FR-4 adalah standar industri untuk PCB. Untuk frekuensi tinggi (>1 GHz), gunakan material khusus seperti Rogers atau Teflon.</div>"
      },
      {
        "id": "schematic",
        "emoji": "📝",
        "title": "Schematic (Diagram Rangkaian)",
        "body": "<p><strong>Schematic</strong> adalah \"bahasa\" komunikasi utama antara desainer elektronika. Schematic menunjukkan <strong>koneksi logis</strong> antar komponen — bukan posisi fisik.</p>\n<p><strong>Simbol standar (IEC 60617):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Komponen</th><th>Simbol</th><th>Catatan</th></tr></thead><tbody>\n<tr><td>Resistor</td><td>▄▄▄ atau ─╱╲─</td><td>IEC: kotak; ANSI: zigzag</td></tr>\n<tr><td>Kapasitor</td><td>┤├</td><td>Yang satu lurus, satu melengkung</td></tr>\n<tr><td>Dioda</td><td>▷|</td><td>Arah panah = arah arus konvensional</td></tr>\n<tr><td>Transistor NPN</td><td>—┤&lt;|</td><td>Arrow pada emitor keluar</td></tr>\n<tr><td>Ground</td><td>⏚ atau ▽</td><td>Semua ground terhubung</td></tr>\n</tbody></table>\n<p><strong>Alur desain dari ide ke PCB:</strong></p>\n<ol>\n<li><strong>Brainstorm & spesifikasi</strong> — tentukan fungsi, tegangan, arus, komponen yang dibutuhkan</li>\n<li><strong>Desain schematic</strong> — buat diagram rangkaian di software (KiCad, EAGLE, Altium)</li>\n<li><strong>Simulasi</strong> — uji rangkaian secara virtual (LTspice, Proteus) sebelum fabrikasi</li>\n<li><strong>Layout PCB</strong> — tentukan posisi komponen & jalur tembaga</li>\n<li><strong>Review & fabrikasi</strong> — cek DRC (Design Rule Check), export Gerber, kirim ke pabrik</li>\n<li><strong>Soldering & testing</strong> — rakit komponen, uji fungsi</li>\n</ol>\n<div class=\"mt-warn\">⚠️ Selalu simulasi rangkaian dulu sebelum buat PCB! Biaya revisi PCB jauh lebih mahal dari simulasi di komputer.</div>"
      },
      {
        "id": "layout-pcb",
        "emoji": "🗺️",
        "title": "Layout PCB — Posisi Komponen & Jalur",
        "body": "<p><strong>Layout</strong> menentukan apakah PCB bisa bekerja dengan baik. Prinsip utama:</p>\n<p><strong>1. Posisi komponen:</strong></p>\n<ul>\n<li>Letakkan komponen sesuai alur sinyal (input di kiri, output di kanan)</li>\n<li>Decoupling capacitor (100nF) harus sedekat mungkin dengan VCC/GND pin IC</li>\n<li>Komponen panas (regulator, transistor daya) beri jarak & akses panas</li>\n</ul>\n<p><strong>2. Jalur (trace):</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Jenis Jalur</th><th>Lebar Minimum</th><th>Catatan</th></tr></thead><tbody>\n<tr><td>Sinyal</td><td>0,2 mm (8 mil)</td><td>Cukup untuk sinyal digital/analog</td></tr>\n<tr><td>Power (1A)</td><td>0,5 mm</td><td>Perhatikan panas (Joule heating)</td></tr>\n<tr><td>Power (3A+)</td><td>1,0 mm atau lebih</td><td>Gunakan polygon pour (ground plane)</td></tr>\n</tbody></table>\n<p><strong>3. Ground plane:</strong></p>\n<ul>\n<li>Gunakan satu sisi PCB sebagai ground plane penuh (solid)</li>\n<li>Ground plane mengurangi noise, memperbaiki impedance matching, dan membantu panas</li>\n<li>Hindari memotong ground plane dengan jalur sinyal — bisa menciptakan loop antenna</li>\n</ul>\n<p><strong>4. Differential pairs & panjang jalur:</strong></p>\n<ul>\n<li>USB, Ethernet, LVDS: jalur harus sepanjang mungkin sama (matched length)</li>\n<li>Impedance control: lebar jalur harus sesuai impedansi target (50Ω single-ended, 90Ω differential)</li>\n</ul>\n<div class=\"mt-tip\">💡 Aturan praktis: mulai dari komponen paling \"sulit\" (BGA, MCU) dulu, lalu komponen sekitarnya. Jalur power & ground lebih dulu, baru sinyal.</div>"
      },
      {
        "id": "aturan-desain",
        "emoji": "📏",
        "title": "Aturan Desain PCB (DFM & DRC)",
        "body": "<p><strong>DFM (Design for Manufacturing)</strong> memastikan PCB bisa diproduksi massal tanpa error. Pabrik PCB biasanya punya batasan minimum:</p>\n<table class=\"mt-table\"><thead><tr><th>Parameter</th><th>Minimum</th><th>Rekomendasi</th></tr></thead><tbody>\n<tr><td>Lebar jalur</td><td>0,15 mm (6 mil)</td><td>0,2 mm (8 mil)</td></tr>\n<tr><td>Jarak antar jalur</td><td>0,15 mm</td><td>0,2 mm</td></tr>\n<tr><td>Diameter drill</td><td>0,2 mm</td><td>0,3 mm</td></tr>\n<tr><td>Annular ring</td><td>0,15 mm</td><td>0,2 mm</td></tr>\n<tr><td>Solder mask clearance</td><td>0,05 mm</td><td>0,1 mm</td></tr>\n</tbody></table>\n<p><strong>DRC (Design Rule Check):</strong></p>\n<ul>\n<li>Jalur terputus (open trace)</li>\n<li>Jalur bersentuhan (short)</li>\n<li>Drill terlalu dekat</li>\n<li>Silkscreen menutup pad solder</li>\n<li>Courtyard komponen overlap</li>\n</ul>\n<p><strong>Checklist sebelum fabrikasi:</strong></p>\n<ol>\n<li>✅ DRC zero error</li>\n<li>✅ Net connectivity check (tidak ada koneksi yang terlewat)</li>\n<li>✅ Gerber file lengkap (copper, soldermask, silkscreen, drill)</li>\n<li>✅ Drill file (.drl) format Excellon</li>\n<li>✅ Panelisasi jika produksi massal</li>\n</ol>\n<div class=\"mt-warn\">⚠️ Selalu minta prototipe 1-3 pcs dulu sebelum produksi massal. Cek fisik, ukur impedance jika perlu, baru order dalam jumlah besar.</div>"
      },
      {
        "id": "soldering",
        "emoji": "🔥",
        "title": "Teknik Soldering",
        "body": "<p><strong>Soldering</strong> adalah proses menyambung komponen ke PCB menggunakan logam solder (timah + flux).</p>\n<p><strong>Jenis soldering:</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Jenis</th><th>Suhu</th><th>Untuk</th></tr></thead><tbody>\n<tr><td>Through-hole (THT)</td><td>300-350°C</td><td>Resistor, kapasitor, IC DIP</td></tr>\n<tr><td>Surface-mount (SMD)</td><td>300-380°C</td><td>Chip resistor, QFP, BGA</td></tr>\n<tr><td>Reflow</td><td>240-260°C (peak)</td><td>Produksi massal SMD</td></tr>\n</tbody></table>\n<p><strong>Teknik soldering yang baik:</strong></p>\n<ol>\n<li>Panaskan pad PCB DAN kaki komponen bersamaan (2-3 detik)</li>\n<li>Dekatkan solder ke sambungan — solder akan mencair & mengalir ke sambungan</li>\n<li>Angkat solder, lalu angkat soldering iron — tunggu 1 detik sebelum lepas</li>\n<li>Hasil: solder yang mengkilap, bentuk kerucut (menempel baik ke pad & kaki)</li>\n</ol>\n<p><strong>Tanda soldering buruk:</strong></p>\n<ul>\n<li><strong>Cold joint</strong> — solder mengkilap tapi tidak menempel baik (jika diketuk, putus)</li>\n<li><strong>Solder bridge</strong> — solder menghubungkan dua pad yang seharusnya terpisah</li>\n<li><strong>Disturbed joint</strong> — solder bergerak saat pendinginan → retak internal</li>\n</ul>\n<div class=\"mt-tip\">💡 Gunakan flux saat soldering — membantu solder mengalir lebih baik & mengurangi cold joint. Untuk SMD, gunakan magnifier atau mikroskop.</div>"
      },
      {
        "id": "troubleshooting",
        "emoji": "🔍",
        "title": "Troubleshooting Hardware",
        "body": "<p>Ketika PCB tidak berfungsi, gunakan pendekatan sistematis:</p>\n<p><strong>Langkah 1: Inspeksi Visual</strong></p>\n<ul>\n<li>Cek solder joint — apakah ada cold joint atau solder bridge?</li>\n<li>Cek polaritas — kapasitor elektrolitik, dioda, LED, IC</li>\n<li>Cek orientasi komponen — pin 1 IC, arah transistor</li>\n</ul>\n<p><strong>Langkah 2: Uji Daya</strong></p>\n<ul>\n<li>Uji supply voltage: apakah sesuai spesifikasi? (5V, 3,3V, 12V)</li>\nli>\n<li>Cek arus total: jika terlalu tinggi → short circuit</li>\n<li>Gunakan CC mode pada power supply untuk melindungi rangkaian</li>\n</ul>\n<p><strong>Langkah 3: Ukur Sinyal</strong></p>\n<table class=\"mt-table\"><thead><tr><th>Alat</th><th>Untuk</th><th>Tips</th></tr></thead><tbody>\n<tr><td>Multimeter</td><td>Tegangan DC, kontinuitas, resistansi</td><td>Cek semua titik power, ground, signal</td></tr>\n<tr><td>Osiloskop</td><td>Bentuk gelombang, frekuensi, noise</td><td>Pastikan ground probe = ground rangkaian</td></tr>\n<tr><td>Logic analyzer</td><td>Sinyal digital (SPI, I2C, UART)</td><td>Cek timing & protocol</td></tr>\n</tbody></table>\n<p><strong>Langkah 4: Isolasi Masalah</strong></p>\n<ul>\n<li>Bagi rangkaian menjadi blok-blok kecil</li>\n<li>Uji satu blok pada satu waktu</li>\n<li>Jika MCU tidak jalan: cek clock, reset pin, power supply IC</li>\n</ul>\n<div class=\"mt-warn\">⚠️ Jangan pernah menyalakan PCB tanpa memeriksa polaritas power supply terlebih dahulu — satu kesalahan bisa membakar semua IC!</div>"
      }
    ],
    "contoh": [
      {
        "judul": "Memilih Lebar Jalur Power",
        "soal": "Sebuah PCB harus mengalirkan arus 2A pada jalur tembaga 35µm (1 oz). Berapa lebar jalur minimum yang aman?",
        "langkah": [
          "Gunakan aturan praktis: 1 mm lebar ≈ 1A untuk tembaga 35µm (dengan temperatura ambient 25°C).",
          "Untuk 2A: lebar minimum ≈ 2 × 1 mm = 2 mm.",
          "Jika ingin lebih aman (rise suhu < 20°C), gunakan 2,5-3 mm.",
          "<strong>Jawaban:</strong> minimal 2 mm, rekomendasi 2,5-3 mm."
        ]
      },
      {
        "judul": "Memecahkan PCB yang Tidak Berfungsi",
        "soal": "PCB dengan Arduino Nano + sensor DHT22 tidak menampilkan data di serial monitor. Urutan troubleshooting yang benar?",
        "langkah": [
          "1. Inspeksi visual: cek solder joint, polaritas, orientasi komponen.",
          "2. Cek power supply: apakah Arduino Nano mendapat 5V dari USB? Sensor mendapat 3,3V/5V?",
          "3. Uji kontinuitas: kabel DHT22 terhubung ke pin yang benar (DATA → D4 misalnya)?",
          "4. Uji dengan multimeter: tegangan pada pin data naik-turun saat DHT22 bekerja?",
          "5. Jika semua OK: cek kode program — library sudah terinstall, pin number sesuai?"
        ]
      },
      {
        "judul": "Memilih Material PCB",
        "soal": "Untuk proyek jam digital sederhana (frekuensi kerja < 10 MHz), material PCB apa yang paling cocok dan berapa ketebalan?",
        "langkah": [
          "Untuk frekuensi rendah (< 10 MHz): FR-4 sudah sangat cukup (standar industri).",
          "Ketebalan: 1,6 mm adalah standar paling umum (murah & kuat).",
          "Tembaga: 35µm (1 oz) untuk jalur sinyal, 70µm (2 oz) jika butuh jalur power tebal.",
          "<strong>Jawaban:</strong> FR-4, 1,6 mm, 35µm copper — paling murah & tersedia di semua pabrik PCB."
        ]
      }
    ],
    "soal": [
      {
        "q": "Lapisan hijau pada PCB yang melindungi jalur tembaga dari oksidasi disebut…",
        "opts": [
          "Silkscreen",
          "Soldermask",
          "Copper layer",
          "Substrat"
        ],
        "ans": 1,
        "exp": "Soldermask adalah lapisan pelindung hijau (atau warna lain) yang menutupi jalur tembaga."
      },
      {
        "q": "Untuk mengurangi noise pada PCB digital, teknik yang paling efektif adalah…",
        "opts": [
          "Menambah resistor pull-up",
          "Menggunakan ground plane solid",
          "Memperpanjang jalur sinyal",
          "Mengurangi jumlah komponen"
        ],
        "ans": 1,
        "exp": "Ground plane solid mengurangi loop area, impedance ground, dan noise EMI secara signifikan."
      },
      {
        "q": "Decoupling capacitor harus diletakkan…",
        "opts": [
          "Sejauh mungkin dari IC",
          "Paralel dengan power supply",
          "Sedekat mungkin dengan pin VCC IC",
          "Di sisi berlawanan PCB dari IC"
        ],
        "ans": 2,
        "exp": "Decoupling capacitor harus sedekat mungkin dengan pin VCC/GND IC untuk memfilter noise frekuensi tinggi."
      },
      {
        "q": "Tanda soldering yang baik adalah…",
        "opts": [
          "Solder berwarna gelap & kasar",
          "Solder mengkilap & berbentuk kerucut",
          "Solder menutupi seluruh kaki komponen",
          "Solder berbentuk bola besar"
        ],
        "ans": 1,
        "exp": "Solder mengkilap & kerucut = sambungan baik; gelap = cold joint; bola besar = terlalu banyak solder."
      },
      {
        "q": "Untuk fabrikasi PCB, format file yang dikirim ke pabrik adalah…",
        "opts": [
          ".schematic (KiCad)",
          ".brd (EAGLE)",
          ".gbr (Gerber)",
          ".pdf (schematic)"
        ],
        "ans": 2,
        "exp": "Gerber (.gbr) adalah format standar industri untuk fabrikasi PCB — berisi data copper, soldermask, silkscreen, drill."
      }
    ]
  },
{
    "id": "analisis-rangkaian",
    "emoji": "🧮",
    "title": "Analisis Rangkaian Lanjut",
    "subtitle": "Superposisi, Thevenin–Norton, nodal, mesh, transien RC/RL & fasor",
    "level": "Menengah",
    "durasi": "±30 menit",
    "materi": [
      "Superposisi",
      "Thevenin",
      "Norton",
      "Analisis Nodal",
      "Analisis Mesh",
      "Transien RC/RL"
    ],
    "sections": [
      {
        "id": "superposisi",
        "emoji": "➕",
        "title": "Prinsip Superposisi — Satu Sumber di Satu Waktu",
        "body": "<p><strong>Superposisi</strong> hanya berlaku pada rangkaian <strong>linear</strong> (R, L, C, sumber dependen linear). Idenya: matikan semua sumber independen kecuali satu, hitung kontribusi, lalu jumlahkan.</p><ul><li><strong>Matikan</strong> sumber tegangan → ganti <strong>short circuit</strong>.</li><li><strong>Matikan</strong> sumber arus → ganti <strong>open circuit</strong>.</li><li>Sumber dependen <strong>tetap hidup</strong> di setiap langkah.</li></ul><p>Rumus intinya tetap <strong>Hukum Ohm</strong> dan <strong>KCL/KVL</strong> — superposisi hanya strategi memecah soal besar jadi beberapa soal kecil.</p><div class=\"mt-tip\">💡 Gunakan superposisi bila rangkaian punya <strong>2 sumber</strong> yang frekuensinya sama (DC-DC). Untuk sumber beda frekuensi (DC+AC), superposisi adalah <strong>wajib</strong> — tidak bisa digabung langsung.</div><div class=\"mt-warn\">⚠️ Jangan pakai superposisi untuk menghitung <strong>daya</strong> (\\(P = I^2R\\) tidak linear). Hitung \\(I\\) dulu dengan superposisi, baru hitung daya di akhir.</div>",
        "referensi": "Nilsson & Riedel, Electric Circuits (Superposition); Alexander & Sadiku, Fundamentals of Electric Circuits Ch.4."
      },
      {
        "id": "thevenin",
        "emoji": "🔋",
        "title": "Teorema Thevenin — Satu Sumber + Satu Resistor",
        "body": "<p><strong>Teorema Thevenin:</strong> rangkaian linear apapun yang dilihat dari dua terminal \\(a\\)-\\(b\\) dapat diganti dengan <strong>sumber tegangan \\(V_{th}\\) seri resistor \\(R_{th}\\)</strong>.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Thevenin_equivalent_circuit.svg\" alt=\"Rangkaian ekivalen Thevenin\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Rangkaian ekivalen Thevenin: \\(V_{th}\\) seri \\(R_{th}\\) dilihat dari terminal a–b · sumber: Wikimedia Commons, <i>File:Thevenin equivalent circuit.svg</i> (CC BY-SA 3.0 / PD)</div></div><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Thevenin_norton_equivalents.svg\" alt=\"Perbandingan Thevenin dan Norton\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Kiri: Thevenin (\\(V_{th}\\) seri \\(R_{th}\\)), Kanan: Norton (\\(I_{n}\\) paralel \\(R_{n}\\)) — keduanya ekivalen · sumber: Wikimedia Commons, <i>File:Thevenin norton equivalents.svg</i> (PD-self)</div></div><p><strong>Langkah cari \\(V_{th}\\):</strong> lepas beban \\(R_L\\), hitung tegangan open-circuit \\(V_{ab}\\) (pakai pembagi tegangan / nodal).</p><p><strong>Langkah cari \\(R_{th}\\):</strong></p><ol><li>Matikan semua sumber independen (V→short, I→open).</li><li>Hitung resistansi dilihat dari a–b (seri/paralel).</li><li>Jika ada sumber dependen → pakai <em>test source</em>: suntik \\(1\\,\\text{V}\\) di a–b, ukur arus \\(I_{test}\\) → \\(R_{th}=1/I_{test}\\).</li></ol><p>Setelah dapat \\(V_{th}, R_{th}\\), pasang kembali \\(R_L\\):</p>$$I_L = \\frac{V_{th}}{R_{th}+R_L}, \\qquad V_L = V_{th}\\cdot\\frac{R_L}{R_{th}+R_L}$$<div class=\"mt-tip\">💡 Thevenin sangat berguna untuk mencari <strong>beban mana yang dapat daya maksimum</strong>: syarat \\(R_L = R_{th}\\) (Maximum Power Transfer).</div>",
        "referensi": "Thevenin theorem (M. L. Thévenin, 1883); gambar: Wikimedia Commons, File:Thevenin equivalent circuit.svg & File:Thevenin norton equivalents.svg (CC BY-SA 3.0 / PD-self)."
      },
      {
        "id": "norton",
        "emoji": "🔌",
        "title": "Teorema Norton — Dual dari Thevenin",
        "body": "<p><strong>Teorema Norton:</strong> rangkaian linear dilihat dari a–b dapat diganti dengan <strong>sumber arus \\(I_n\\) paralel resistor \\(R_n\\)</strong>, dengan \\(R_n = R_{th}\\) dan \\(I_n = V_{th}/R_{th}\\).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Norton_Equivalent.svg\" alt=\"Rangkaian ekivalen Norton\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Rangkaian ekivalen Norton: sumber arus \\(I_n\\) paralel \\(R_n\\) · sumber: Wikimedia Commons, <i>File:Norton Equivalent.svg</i> (CC BY-SA 3.0 / PD)</div></div><p><strong>Cara cepat:</strong></p><ul><li>\\(I_n\\) = arus hubung singkat \\(I_{sc}\\) antara a–b.</li><li>\\(R_n = R_{th}\\) (cara hitung sama persis dengan Thevenin).</li><li>Konversi: \\(V_{th}=I_n R_n\\), \\(I_n = V_{th}/R_{th}\\).</li></ul><p><strong>Kapan pilih Norton?</strong></p><table class=\"mt-table\"><thead><tr><th>Situasi</th><th>Pilih</th></tr></thead><tbody><tr><td>Beban seri banyak</td><td>Thevenin (loop mudah)</td></tr><tr><td>Beban paralel banyak</td><td>Norton (KCL mudah)</td></tr><tr><td>Soal minta \\(I_{sc}\\)</td><td>Norton langsung</td></tr></tbody></table><div class=\"mt-tip\">💡 Di simulasi, verifikasi dengan <strong>ganti \\(R_L\\) 3 nilai berbeda</strong>: \\(V_L\\) dan \\(I_L\\) dari ekivalen harus sama dengan rangkaian asli dalam 1%.</div>",
        "referensi": "Norton theorem (E. L. Norton, Bell Labs 1926); gambar: Wikimedia Commons, File:Norton Equivalent.svg (CC BY-SA 3.0)."
      },
      {
        "id": "nodal",
        "emoji": "📍",
        "title": "Analisis Nodal — KCL di Tiap Node",
        "body": "<p><strong>Analisis nodal</strong> menulis <strong>KCL</strong> (\\(\\sum I_{keluar}=0\\)) di setiap node non-referensi. Cocok bila rangkaian punya <strong>banyak node tapi sedikit mesh</strong>.</p><p><strong>Langkah:</strong></p><ol><li>Pilih 1 node sebagai <strong>referensi (ground, 0 V)</strong>.</li><li>Beri label \\(V_1, V_2, \\dots\\) pada node lain.</li><li>Tulis KCL: \\(\\frac{V_1 - V_s}{R_1} + \\frac{V_1 - V_2}{R_2} + \\frac{V_1}{R_3}=0\\).</li><li>Susun sistem persamaan linear → selesaikan (eliminasi/Cramer/Kalkulator).</li></ol><p><strong>Supernode:</strong> bila ada sumber tegangan mengambang di antara dua node non-referensi, gabung kedua node jadi 1 supernode + 1 persamaan konstrain \\(V_1 - V_2 = V_s\\).</p><p>Contoh 2 node:</p>$$\\begin{cases} G_{11}V_1 - G_{12}V_2 = I_{s1} \\\\ -G_{21}V_1 + G_{22}V_2 = I_{s2} \\end{cases}$$<p>dengan \\(G_{ii}\\) jumlah konduktansi di node \\(i\\), \\(G_{ij}=1/R_{ij}\\).</p><div class=\"mt-tip\">💡 Pilih referensi di node yang terhubung sumber tegangan dan banyak cabang — persamaan jadi paling sedikit.</div>",
        "referensi": "Alexander & Sadiku, Ch.3 Nodal Analysis; Nilsson & Riedel, Ch.4."
      },
      {
        "id": "mesh",
        "emoji": "🔄",
        "title": "Analisis Mesh — KVL di Tiap Loop",
        "body": "<p><strong>Analisis mesh</strong> menulis <strong>KVL</strong> (\\(\\sum V =0\\)) di setiap mesh (loop tanpa cabang dalam). Cocok bila rangkaian <strong>banyak loop seri</strong> atau berisi sumber arus.</p><p><strong>Langkah:</strong></p><ol><li>Tentukan arus mesh \\(I_1, I_2, \\dots\\) searah jarum jam.</li><li>Tulis KVL: \\(R_{11}I_1 - R_{12}I_2 - \\cdots = V_{s}\\).</li><li>Susun matriks \\(R\\cdot I = V\\) → selesaikan.</li></ol><p><strong>Supermesh:</strong> bila ada sumber arus di cabang bersama dua mesh, gabung jadi supermesh + persamaan \\(I_1 - I_2 = I_s\\).</p><p>Matriks resistansi:</p>$$R_{ii}= \\sum R\\text{ di mesh }i, \\qquad R_{ij}=\\sum R\\text{ bersama mesh }i,j$$<div class=\"mt-warn\">⚠️ Tanda minus pada \\(R_{ij}\\) karena arus tetangga berlawanan arah saat melewati resistor bersama.</div><div class=\"mt-tip\">💡 Aturan praktis ujian: <strong>node ≤3 → nodal</strong>, <strong>mesh ≤3 → mesh</strong>. Jika keduanya banyak, Thevenin mungkin lebih cepat untuk 1 beban saja.</div>",
        "referensi": "Alexander & Sadiku, Ch.3 Mesh Analysis; Desoer & Kuh, Basic Circuit Theory."
      },
      {
        "id": "transien",
        "emoji": "⏳",
        "title": "Transien Orde-1: RC & RL — Konstanta Waktu",
        "body": "<p>Rangkaian dengan <strong>1 kapasitor</strong> atau <strong>1 induktor</strong> memiliki respons transien eksponensial.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Series_RC_capacitor_voltage.svg\" alt=\"Kurva pengisian kapasitor RC\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Tegangan kapasitor saat pengisian RC: \\(v_C(t)=V_s(1-e^{-t/\\tau})\\), \\(\\tau=RC\\) — capai 63,2% pada \\(1\\tau\\), 99,3% pada \\(5\\tau\\) · sumber: Wikimedia Commons, <i>File:Series RC capacitor voltage.svg</i> (CC BY-SA 3.0, Inductiveload)</div></div><p><strong>RC — pengisian:</strong></p>$$v_C(t)=V_s(1-e^{-t/\\tau}), \\quad \\tau = RC, \\quad i(t)=\\frac{V_s}{R}e^{-t/\\tau}$$<p><strong>RC — pengosongan (sumber dilepas):</strong></p>$$v_C(t)=V_0 e^{-t/\\tau}$$<p><strong>RL — arus induktor (tidak bisa berubah instan):</strong></p>$$i_L(t)=I_s(1-e^{-t/\\tau}), \\quad \\tau = \\frac{L}{R}, \\quad v_L(t)=V_s e^{-t/\\tau}$$<p><strong>Aturan 5τ:</strong> setelah \\(5\\tau\\) rangkaian dianggap steady-state (error &lt;1%).</p><table class=\"mt-table\"><thead><tr><th>t</th><th>\\(v_C/V_s\\) (charging)</th></tr></thead><tbody><tr><td>1τ</td><td>63,2%</td></tr><tr><td>2τ</td><td>86,5%</td></tr><tr><td>3τ</td><td>95,0%</td></tr><tr><td>5τ</td><td>99,3%</td></tr></tbody></table><div class=\"mt-tip\">💡 Kapasitor: tegangan tidak bisa loncat; Induktor: arus tidak bisa loncat. Gunakan ini untuk tentukan kondisi awal \\(v_C(0^+)=v_C(0^-)\\), \\(i_L(0^+)=i_L(0^-)\\).</div>",
        "referensi": "Nilsson & Riedel, Ch.7 Natural & Step Response; gambar: Wikimedia Commons, File:Series RC capacitor voltage.svg (CC BY-SA 3.0, Inductiveload)."
      }
    ],
    "contoh": [
      {
        "judul": "Superposisi 2 Sumber DC",
        "soal": "Rangkaian: sumber 12 V dan 6 V dengan 3 resistor (6Ω, 3Ω, 6Ω). Hitung arus lewat resistor tengah 3Ω dengan superposisi.",
        "langkah": [
          "Langkah A (12 V aktif, 6 V short): sederhanakan → arus kontribusi \\(I' = 1.2\\,\\text{A}\\) ke kanan.",
          "Langkah B (6 V aktif, 12 V short): hitung lagi → \\(I'' = -0.4\\,\\text{A}\\) (ke kiri).",
          "Jumlahkan: \\(I = I' + I'' = 0.8\\,\\text{A}\\) ke kanan.",
          "<strong>Jawaban:</strong> arus 3Ω sebesar <strong>0.8 A</strong> (verifikasi dengan nodal hasilnya sama)."
        ]
      },
      {
        "judul": "Thevenin untuk Beban Variabel",
        "soal": "Sumber 10 V seri 4Ω, paralel 6Ω ke terminal a-b. Tentukan \\(V_{th}\\), \\(R_{th}\\), lalu \\(V_L\\) bila \\(R_L=6Ω\\).",
        "langkah": [
          "Lepas \\(R_L\\): pembagi tegangan → \\(V_{th}=10\\cdot 6/(4+6)=6\\,\\text{V}\\).",
          "Matikan sumber (short 10 V): 4Ω // 6Ω → \\(R_{th}= (4\\cdot6)/10=2.4Ω\\).",
          "Pasang \\(R_L\\): \\(V_L=6\\cdot6/(2.4+6)=4.29\\,\\text{V}\\), \\(I_L=0.714\\,\\text{A}\\).",
          "<strong>Jawaban:</strong> \\(V_{th}=6\\,\\text{V}, R_{th}=2.4Ω, V_L≈4.29\\,\\text{V}\\)."
        ]
      },
      {
        "judul": "Transien RC 5τ",
        "soal": "RC seri R=10kΩ, C=100μF, \\(V_s=5\\,\\text{V}\\). Hitung τ, \\(v_C\\) pada 1τ dan waktu penuh.",
        "langkah": [
          "τ = RC = 10000×0.0001 = 1 detik.",
          "\\(v_C(1τ)=5(1-e^{-1})=5×0.632=3.16\\,\\text{V}\\).",
          "Waktu penuh 5τ = 5 detik → \\(v_C≈4.97\\,\\text{V}\\) (99.3%).",
          "<strong>Jawaban:</strong> τ=1s, 3.16V pada 1s, penuh ±5s."
        ]
      }
    ],
    "soal": [
      {
        "q": "Pada superposisi, sumber tegangan yang dimatikan diganti dengan…",
        "opts": [
          "Open circuit",
          "Short circuit",
          "Resistor 1kΩ",
          "Sumber dependen"
        ],
        "ans": 1,
        "exp": "Sumber tegangan ideal → short (0V), sumber arus → open (0A). Sumber dependen tetap hidup."
      },
      {
        "q": "Vth adalah…",
        "opts": [
          "Tegangan hubung singkat a–b",
          "Tegangan open-circuit a–b",
          "Arus hubung singkat a–b",
          "Daya pada beban"
        ],
        "ans": 1,
        "exp": "Vth = Voc = tegangan open-circuit di terminal a–b setelah beban dilepas."
      },
      {
        "q": "Hubungan Norton dan Thevenin yang benar adalah…",
        "opts": [
          "In = Vth × Rth",
          "In = Vth / Rth",
          "In = Rth / Vth",
          "In = Vth + Rth"
        ],
        "ans": 1,
        "exp": "In = Isc = Vth / Rth, dan Rn = Rth."
      },
      {
        "q": "Jika ada sumber tegangan di antara dua node non-referensi pada nodal, teknik yang dipakai adalah…",
        "opts": [
          "Supermesh",
          "Supernode",
          "Thevenin",
          "Superposisi"
        ],
        "ans": 1,
        "exp": "Supernode menggabungkan dua node yang dihubungkan sumber tegangan mengambang."
      },
      {
        "q": "Pada RC charging, konstanta waktu τ = RC. Setelah 1τ, tegangan kapasitor mencapai…",
        "opts": [
          "100% Vs",
          "50% Vs",
          "63.2% Vs",
          "36.8% Vs"
        ],
        "ans": 2,
        "exp": "vC(1τ)=Vs(1-e⁻¹)=0.632 Vs (63.2%)."
      },
      {
        "q": "Arus induktor tidak bisa berubah instan. Maka iL(0⁺) = …",
        "opts": [
          "0",
          "iL(0⁻)",
          "Vs/R",
          "∞"
        ],
        "ans": 1,
        "exp": "Arus induktor kontinu: iL(0⁺)=iL(0⁻). Tegangan kapasitor juga kontinu: vC(0⁺)=vC(0⁻)."
      }
    ]
  },
{
    "id": "elektronika-analog",
    "emoji": "🎛️",
    "title": "Elektronika Analog & Op-Amp",
    "subtitle": "Op-amp ideal, inverting, non-inverting, komparator, filter aktif & osilator",
    "level": "Menengah",
    "durasi": "±35 menit",
    "materi": [
      "Op-Amp Ideal",
      "Inverting Amplifier",
      "Non-Inverting & Follower",
      "Komparator & Schmitt",
      "Filter Aktif",
      "Osilator"
    ],
    "sections": [
      {
        "id": "opamp-ideal",
        "emoji": "🔺",
        "title": "Op-Amp Ideal — Golden Rules",
        "body": "<p><strong>Op-amp (Operational Amplifier)</strong> adalah penguat diferensial dengan gain sangat besar (\\(A_{OL}≈10^5\\text{–}10^6\\)). Model <strong>ideal</strong> menyederhanakan analisis:</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Op-amp_symbol.svg\" alt=\"Simbol Op-Amp\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Simbol Op-Amp: segitiga dengan input inverting (−), non-inverting (+), output, dan catu +V/−V · sumber: Wikimedia Commons, <i>File:Op-amp symbol.svg</i> (CC BY-SA 3.0, Omegatron)</div></div><table class=\"mt-table\"><thead><tr><th>Parameter Ideal</th><th>Nilai</th></tr></thead><tbody><tr><td>Gain open-loop \\(A_{OL}\\)</td><td>∞</td></tr><tr><td>Impedansi input</td><td>∞ (arus input =0)</td></tr><tr><td>Impedansi output</td><td>0</td></tr><tr><td>Bandwidth</td><td>∞</td></tr><tr><td>Offset tegangan</td><td>0</td></tr></tbody></table><p><strong>Dua Aturan Emas (negative feedback):</strong></p><ol><li><strong>Virtual Short:</strong> \\(V_+ = V_-\\)</li><li><strong>Virtual Open:</strong> \\(I_+ = I_- =0\\)</li></ol><p>Digabung: analisis cukup pakai KCL di node \\(V_-\\) tanpa peduli internal op-amp.</p><p>Op-amp nyata populer: <strong>LM741</strong> (klasik), <strong>LM358</strong> (dual, single-supply), <strong>TL072/TL081</strong> (low-noise), <strong>LM324</strong>.</p><div class=\"mt-warn\">⚠️ Op-amp ideal tidak ada — slew rate, GBW, dan saturasi (±Vsat ≈ ±13V untuk catu ±15V) membatasi frekuensi & amplitudo nyata.</div>",
        "referensi": "Horowitz & Hill, The Art of Electronics Ch.4; gambar: Wikimedia Commons, File:Op-amp symbol.svg (CC BY-SA 3.0, Omegatron)."
      },
      {
        "id": "inverting",
        "emoji": "↩️",
        "title": "Penguat Inverting — Pembalik Fasa",
        "body": "<p><strong>Inverting amplifier</strong> memasukkan sinyal ke input (−) lewat \\(R_{in}\\), feedback \\(R_f\\) ke output. Input (+) di-ground.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Op-Amp_Inverting_Amplifier.svg\" alt=\"Rangkaian inverting amplifier\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Penguat inverting: gain ditentukan rasio resistor · sumber: Wikimedia Commons, <i>File:Op-Amp Inverting Amplifier.svg</i> (PD, Inductiveload via Inkscape)</div></div><p>Dengan golden rules (\\(V_- =0\\) virtual ground):</p>$$A_v = \\frac{V_{out}}{V_{in}} = -\\frac{R_f}{R_{in}}$$<p>Impedansi input ≈ \\(R_{in}\\) (karena virtual ground).</p><p><strong>Contoh:</strong> \\(R_{in}=10\\,\\text{k}Ω\\), \\(R_f=100\\,\\text{k}Ω\\) → \\(A_v=-10\\). Jika \\(V_{in}=0.5\\,\\text{Vpp}\\) → \\(V_{out}=-5\\,\\text{Vpp}\\) (terbalik fasa 180°).</p><div class=\"mt-tip\">💡 Ingin gain besar tanpa \\(R_f\\) raksasa? Pakai <strong>T-network</strong> (3 resistor) — hemat nilai resistor hingga 100×.</div>",
        "referensi": "Microelectronics Circuits (Sedra & Smith) Ch.2; gambar: Wikimedia Commons, File:Op-Amp Inverting Amplifier.svg (PD, Inductiveload)."
      },
      {
        "id": "noninverting",
        "emoji": "↪️",
        "title": "Non-Inverting & Voltage Follower",
        "body": "<p><strong>Non-inverting amplifier</strong> memasukkan sinyal ke input (+) langsung — impedansi input sangat tinggi (MΩ–GΩ).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Op-Amp_Non-Inverting_Amplifier.svg\" alt=\"Rangkaian non-inverting amplifier\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Penguat non-inverting: gain selalu ≥1 · sumber: Wikimedia Commons, <i>File:Op-Amp Non-Inverting Amplifier.svg</i> (PD, Inductiveload)</div></div>$$A_v = 1 + \\frac{R_f}{R_1}$$<p><strong>Voltage follower (buffer)</strong> adalah kasus khusus \\(R_f=0, R_1=∞\\):</p>$$A_v =1, \\quad Z_{in}≈∞, \\quad Z_{out}≈0$$<p>Fungsinya <strong>isolasi</strong>: sensor ber-impedansi tinggi → ADC tanpa membebani.</p><table class=\"mt-table\"><thead><tr><th>Topologi</th><th>Gain</th><th>Zin</th><th>Fasa</th></tr></thead><tbody><tr><td>Inverting</td><td>\\(-R_f/R_{in}\\)</td><td>≈\\(R_{in}\\)</td><td>180°</td></tr><tr><td>Non-inverting</td><td>\\(1+R_f/R_1\\)</td><td>≈∞</td><td>0°</td></tr><tr><td>Follower</td><td>1</td><td>≈∞</td><td>0°</td></tr></tbody></table><div class=\"mt-tip\">💡 Butuh penguat instrumen untuk sensor jembatan (load cell)? Gabung 3 op-amp jadi <strong>Instrumentation Amplifier</strong> (AD620, INA128) — CMRR >100dB.</div>",
        "referensi": "Sedra & Smith Ch.2; Horowitz & Hill; gambar: Wikimedia Commons, File:Op-Amp Non-Inverting Amplifier.svg (PD, Inductiveload)."
      },
      {
        "id": "komparator",
        "emoji": "⚖️",
        "title": "Komparator & Schmitt Trigger",
        "body": "<p><strong>Komparator</strong> adalah op-amp tanpa feedback (open-loop) yang membandingkan \\(V_+\\) vs \\(V_-\\):</p>$$V_{out}= \\begin{cases} +V_{sat} & V_+ > V_- \\\\ -V_{sat} & V_+ < V_- \\end{cases}$$<p>Tanpa hysteresis, noise di sekitar ambang membuat output <em>chattering</em>. Solusi: <strong>Schmitt trigger</strong> dengan feedback positif.</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Op-Amp_Differential_Amplifier.svg\" alt=\"Rangkaian differential amplifier\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Differential amplifier — dasar komparator: output = \\(A_{OL}(V_+ - V_-)\\). Tambah feedback positif jadi Schmitt trigger · sumber: Wikimedia Commons, <i>File:Op-Amp Differential Amplifier.svg</i> (PD, Inductiveload)</div></div><p><strong>Schmitt inverting:</strong></p>$$V_{TH}=+V_{sat}\\cdot\\frac{R_1}{R_1+R_2}, \\quad V_{TL}=-V_{sat}\\cdot\\frac{R_1}{R_1+R_2}, \\quad V_{H}=V_{TH}-V_{TL}$$<p>Lebar hysteresis \\(V_H\\) dipilih > noise peak-to-peak (misal 100mV untuk sensor).</p><div class=\"mt-warn\">⚠️ Jangan pakai op-amp biasa (LM741) sebagai komparator cepat — pakai <strong>komparator khusus</strong> (LM393, LM339) dengan output open-collector + pull-up untuk kecepatan & agar tidak saturasi.</div>",
        "referensi": "Horowitz & Hill Ch.4 Comparator; TI LM393 datasheet; gambar: Wikimedia Commons, File:Op-Amp Differential Amplifier.svg (PD, Inductiveload)."
      },
      {
        "id": "filter-aktif",
        "emoji": "🎛️",
        "title": "Filter Aktif Sallen-Key — LPF & HPF Orde-2",
        "body": "<p><strong>Filter aktif</strong> memakai op-amp + RC untuk mendapatkan respons lebih tajam tanpa induktor besar. Topologi paling populer: <strong>Sallen-Key</strong> (VCVS).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/Sallen-Key_Generic_Circuit.svg\" alt=\"Topologi Sallen-Key generic\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Topologi generic Sallen-Key: \\(Z_1\\text{–}Z_4\\) dipilih R atau C untuk jadi LPF/HPF/BPF · sumber: Wikimedia Commons, <i>File:Sallen-Key Generic Circuit.svg</i> (CC BY-SA 3.0)</div></div><p><strong>Low-pass Sallen-Key orde-2 (unity gain):</strong></p>$$f_c = \\frac{1}{2\\pi RC}, \\quad Q = \\frac{1}{3-K}, \\quad K=1+\\frac{R_f}{R_g}$$<p>Pilih \\(R_1=R_2=R\\), \\(C_1=C_2=C\\) → \\(f_c=1/(2\\pi RC)\\). Untuk Butterworth (maximally flat) → \\(Q=0.707\\) → \\(K≈1.586\\).</p><p><strong>High-pass:</strong> tukar posisi R↔C, rumus sama.</p><p><strong>Contoh desain LPF 1kHz Butterworth:</strong></p><ul><li>Pilih C=100nF → \\(R=1/(2\\pi f_c C)=1/(2\\pi\\cdot1000\\cdot100n)=1.59\\,\\text{k}Ω\\) → pakai 1.6kΩ.</li><li>Gain \\(K=1.586\\) → \\(R_f/R_g=0.586\\) → pakai \\(R_g=10\\,\\text{k}Ω, R_f=5.86\\,\\text{k}Ω\\) (5.6k+270Ω seri).</li></ul><div class=\"mt-tip\">💡 Orde lebih tinggi? Kaskade 2 stage orde-2 → orde-4 (-80dB/dec). Aplikasi: anti-aliasing sebelum ADC ESP32.</div>",
        "referensi": "Sallen & Key 1955, IRE Trans. Circuit Theory; TI Application Report SLOA024; gambar: Wikimedia Commons, File:Sallen-Key Generic Circuit.svg (CC BY-SA 3.0)."
      },
      {
        "id": "osilator",
        "emoji": "〰️",
        "title": "Osilator — Wien Bridge & Phase-Shift",
        "body": "<p><strong>Osilator</strong> menghasilkan sinyal periodik tanpa input. Syarat Barkhausen: loop gain =1 dan fasa 0° pada \\(f_{osc}\\).</p><div class=\"mt-img-wrap\"><img class=\"mt-img\" src=\"https://commons.wikimedia.org/wiki/Special:FilePath/WienBridgeOscillator.svg\" alt=\"Rangkaian Wien Bridge Oscillator\" loading=\"lazy\" onclick=\"openMateriImg(this)\"><div class=\"mt-img-cap\">Osilator Jembatan Wien: jaringan RC seri-paralel + penguat non-inverting · sumber: Wikimedia Commons, <i>File:WienBridgeOscillator.svg</i> (CC BY-SA 3.0)</div></div><p><strong>Wien Bridge (sinus murni):</strong></p>$$f_0 = \\frac{1}{2\\pi RC}, \\quad K = 1+\\frac{R_f}{R_1}=3\\;(teoritis)$$<p>Praktik: pakai \\(K≈3.05\\text{–}3.1\\) + AGC (dioda/JFET/LDR) agar tidak kliping. Pilih \\(R_1=R_2=R\\), \\(C_1=C_2=C\\).</p><p><strong>Phase-shift RC (3 stage):</strong></p>$$f_0 = \\frac{1}{2\\pi RC \\sqrt{6}}, \\quad K ≥29$$<p>Dipakai untuk audio generator sederhana (1 op-amp + 3 RC).</p><div class=\"mt-warn\">⚠️ Tanpa stabilisasi amplitudo, Wien akan saturasi atau padam. Solusi klasik HP200A (1939): lampu pijar kecil sebagai \\(R_1\\) — resistansi naik saat panas → gain turun otomatis.</div>",
        "referensi": "Wien (1891) bridge; Hewlett-Packard Model 200A (1939); Sedra & Smith Ch.17 Oscillators; gambar: Wikimedia Commons, File:WienBridgeOscillator.svg (CC BY-SA 3.0)."
      }
    ],
    "contoh": [
      {
        "judul": "Desain Inverting Gain -10",
        "soal": "Butuh \\(A_v=-10\\) dengan \\(R_{in}=10\\,\\text{k}Ω\\). Tentukan \\(R_f\\) dan amplitudo output bila input 0.5Vpp.",
        "langkah": [
          "Rumus: \\(A_v=-R_f/R_{in}\\) → \\(R_f = -A_v\\cdot R_{in}=10\\cdot10\\,\\text{k}=100\\,\\text{k}Ω\\).",
          "Output: \\(V_{out}=A_v\\cdot V_{in}=-10\\cdot0.5=-5\\,\\text{Vpp}\\) (terbalik fasa).",
          "Pastikan catu ±12V cukup untuk \\(V_{sat}≈±10\\,\\text{V}\\) → headroom masih aman.",
          "<strong>Jawaban:</strong> \\(R_f=100\\,\\text{k}Ω, V_{out}=5\\,\\text{Vpp}\\) inverting."
        ]
      },
      {
        "judul": "Desain LPF Sallen-Key 1kHz Butterworth",
        "soal": "Rancang LPF orde-2 Butterworth (\\(f_c=1\\,\\text{kHz}, Q=0.707\\)) dengan C=100nF.",
        "langkah": [
          "Hitung R: \\(R=1/(2\\pi f_c C)=1/(2\\pi\\cdot1000\\cdot100\\text{n})=1.59\\,\\text{k}Ω\\) → pakai 1.6kΩ E12.",
          "Gain Butterworth: \\(K=3-1/Q=3-1.414=1.586\\).",
          "Pilih \\(R_g=10\\,\\text{k}Ω\\) → \\(R_f=(K-1)R_g=0.586×10\\,\\text{k}=5.86\\,\\text{k}Ω\\) (pakai 5.6k+270Ω).",
          "<strong>Jawaban:</strong> R≈1.6kΩ, C=100nF, \\(R_f≈5.86\\,\\text{k}Ω, R_g=10\\,\\text{k}Ω\\)."
        ]
      },
      {
        "judul": "Frekuensi Wien Bridge",
        "soal": "Wien Bridge dengan R=15.9kΩ, C=10nF. Hitung frekuensi osilasi dan syarat gain.",
        "langkah": [
          "\\(f_0=1/(2\\pi RC)=1/(2\\pi\\cdot15900\\cdot10\\text{n})=1/(0.000999)=1001\\,\\text{Hz}\\) ≈1kHz.",
          "Syarat gain: \\(K=1+R_f/R_1=3\\) → \\(R_f=2R_1\\). Praktik pakai 3.05–3.1 + AGC.",
          "Tanpa AGC, output akan kliping ke \\(±V_{sat}\\).",
          "<strong>Jawaban:</strong> \\(f_0≈1\\,\\text{kHz}, R_f=2R_1\\) + stabilisasi."
        ]
      }
    ],
    "soal": [
      {
        "q": "Aturan virtual short pada op-amp ideal dengan feedback negatif menyatakan…",
        "opts": [
          "V+ = V-",
          "I+ = V-",
          "Vout = Vin",
          "V+ = 0 selalu"
        ],
        "ans": 0,
        "exp": "Virtual short: beda tegangan input ≈0 karena gain tak hingga dan feedback negatif → V+ = V-."
      },
      {
        "q": "Gain penguat inverting dengan Rin=10kΩ, Rf=100kΩ adalah…",
        "opts": [
          "11",
          "10",
          "-10",
          "-11"
        ],
        "ans": 2,
        "exp": "Av = -Rf/Rin = -100k/10k = -10 (tanda minus = fasa terbalik)."
      },
      {
        "q": "Voltage follower (buffer) memiliki gain…",
        "opts": [
          "0",
          "1",
          "-1",
          "∞"
        ],
        "ans": 1,
        "exp": "Follower: Rf=0, R1=∞, maka Av=1+Rf/R1=1. Fungsi isolasi impedansi."
      },
      {
        "q": "Keunggulan Sallen-Key orde-2 dibanding RC pasif adalah…",
        "opts": [
          "Tidak butuh op-amp",
          "Gain >1 dan Q dapat diatur, roll-off -40dB/dec",
          "Hanya butuh 1 resistor",
          "Tidak butuh kapasitor"
        ],
        "ans": 1,
        "exp": "Sallen-Key aktif memberi gain dan Q terkontrol, roll-off orde-2 = -40dB/dec (vs -20dB pasif)."
      },
      {
        "q": "Frekuensi osilasi Wien Bridge dengan R=10kΩ, C=16nF adalah…",
        "opts": [
          "100 Hz",
          "1 kHz",
          "10 kHz",
          "100 kHz"
        ],
        "ans": 1,
        "exp": "f0=1/(2πRC)=1/(2π·10k·16n)=1/0.001005≈995Hz≈1kHz."
      },
      {
        "q": "Schmitt trigger menambah hysteresis untuk…",
        "opts": [
          "Mengurangi gain",
          "Mencegah chattering akibat noise di ambang",
          "Menaikkan bandwidth",
          "Menurunkan offset"
        ],
        "ans": 1,
        "exp": "Hysteresis V_H= V_TH - V_TL memberi dua ambang berbeda → noise kecil tidak membuat output bolak-balik."
      }
    ]
  },
{
  "id": "arduino-pemula",
  "emoji": "🤖",
  "title": "Arduino Pemula",
  "subtitle": "Setup, pemrograman dasar, digital & analog I/O + proyek",
  "level": "Pemula",
  "durasi": "±4-6 minggu",
  "materi": [
    "Setup Arduino IDE",
    "Struktur Program",
    "Digital I/O",
    "Analog I/O",
    "Proyek Pemula"
  ],
  "sections": [
    {
      "id": "apa-itu-arduino",
      "emoji": "🎯",
      "title": "Apa itu Arduino?",
      "body": "<p><strong>Arduino</strong> adalah platform pengembangan berbasis mikrokontroler yang mudah digunakan. Terdiri dari:</p>\n<ul>\n<li><strong>Hardware</strong>: Board Arduino (Uno, Nano, ESP32, dll.)</li>\n<li><strong>Software</strong>: Arduino IDE untuk menulis dan upload program</li>\n<li><strong>Community</strong>: Jutaan maker di seluruh dunia yang saling berbagi</li>\n</ul>\n<p><strong>Mengapa Arduino populer?</strong></p>\n<ul>\n<li>Open source dan gratis</li>\n<li>Mudah dipelajari pemula</li>\n<li>Komunitas besar dan dokumentasi lengkap</li>\n<li>Banyak sensor dan modul kompatibel</li>\n<li>Cocok untuk prototyping cepat</li>\n</ul>\n<div class=\"mt-tip\">💡 Arduino Uno menggunakan mikrokontroler ATmega328P dengan 14 pin digital dan 6 pin analog.</div>"
    },
    {
      "id": "setup-arduino",
      "emoji": "💻",
      "title": "Setup Arduino IDE",
      "body": "<p><strong>Langkah 1: Download Arduino IDE</strong></p>\n<ol>\n<li>Kunjungi <a href=\"https://www.arduino.cc/en/software\" target=\"_blank\">https://www.arduino.cc/en/software</a></li>\n<li>Pilih version untuk OS kamu (Windows/Mac/Linux)</li>\n<li>Install dengan mengikuti wizard</li>\n</ol>\n<p><strong>Langkah 2: Test Connection</strong></p>\n<ol>\n<li>Hubungkan Arduino ke komputer via USB</li>\n<li>Buka Arduino IDE</li>\n<li>Pilih <strong>Tools > Board > Arduino Uno</strong></li>\n<li>Pilih <strong>Tools > Port > COM_X</strong> (Windows)</li>\n<li>Upload program Blink: <strong>File > Examples > 01.Basics > Blink</strong></li>\n</ol>\n<div class=\"mt-warn\">⚠️ Pastikan driver Arduino ter-install dengan benar. Di Windows biasanya otomatis, di Linux perlu tambahkan user ke grup dialout.</div>"
    },
    {
      "id": "struktur-program",
      "emoji": "🏗️",
      "title": "Struktur Program Arduino",
      "body": "<p>Setiap program Arduino (disebut <strong>sketch</strong>) minimal memiliki 2 fungsi:</p>\n<pre><code>void setup() {\n  // Kode yang dijalankan SEKALI saat Arduino start\n  // Inisialisasi pin, serial, library, dsb.\n}\n\nvoid loop() {\n  // Kode yang dijalankan BERULANG selamanya\n  // Logic utama program\n}</code></pre>\n<p><strong>Contoh Program Pertama:</strong></p>\n<pre><code>void setup() {\n  Serial.begin(9600);        // Mulai komunikasi serial\n  Serial.println(\"Hello Arduino!\");\n}\n\nvoid loop() {\n  Serial.println(\"Program berjalan...\");\n  delay(1000);               // Tunggu 1 detik\n}</code></pre>\n<div class=\"mt-tip\">💡 setup() dijalankan sekali saat Arduino di-reset atau pertama kali menyala. loop() berjalan terus menerus seperti while(true).</div>"
    },
    {
      "id": "intro",
      "emoji": "📖",
      "title": "Pendahuluan",
      "body": "<h2>🎯 <strong>LEVEL 1: PEMULA - Dasar Pemrograman Arduino</strong></h2>\n<p><em>Durasi: 4-6 minggu | Target: Menguasai dasar Arduino dan elektronika</em></p>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-1-1-pengenalan-arduino-s",
      "emoji": "💡",
      "title": "**📋 Modul 1.1: Pengenalan Arduino & Setup**",
      "body": "\n<h3><strong>🤖 Apa itu Arduino?</strong></h3>\n\n<p>Arduino adalah platform pengembangan berbasis mikrokontroler yang mudah digunakan. Terdiri dari:</p>\n<ul>\n<li><strong>Hardware</strong>: Board Arduino (Uno, Nano, ESP32, dll.)</li>\n<li><strong>Software</strong>: Arduino IDE untuk menulis dan upload program</li>\n<li><strong>Community</strong>: Jutaan maker di seluruh dunia yang saling berbagi</li>\n</ul>\n\n<p><strong>Mengapa Arduino populer?</strong></p>\n<ul>\n<li>Open source dan gratis</li>\n<li>Mudah dipelajari pemula</li>\n<li>Komunitas besar dan dokumentasi lengkap</li>\n<li>Banyak sensor dan modul kompatibel</li>\n<li>Cocok untuk prototyping cepat</li>\n</ul>\n\n<h3><strong>🔧 Arduino Uno R3 - Board Pemula Terbaik</strong></h3>\n\n<p>Arduino Uno menggunakan mikrokontroler <strong>ATmega328P</strong>:</p>\n<ul>\n<li><strong>CPU</strong>: 8-bit @ 16 MHz</li>\n<li><strong>Memory</strong>: 32 KB Flash, 2 KB SRAM, 1 KB EEPROM</li>\n<li><strong>GPIO</strong>: 14 pin digital (6 PWM), 6 pin analog</li>\n<li><strong>Power</strong>: USB atau 7-12V DC external</li>\n<li><strong>Komunikasi</strong>: UART, I2C, SPI</li>\n</ul>\n\n<pre><code class=\"lang-\">     Arduino Uno R3 Pinout:\n<p>                   RESET</p>\n<p>               +----○----+</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     IOREF     | [     ] |     A5/SCL</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     RESET     | [     ] |     A4/SDA  </pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     3.3V      | [     ] |     A3</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     5V        | [     ] |     A2</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     GND       | [     ] |     A1</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     VIN       | [     ] |     A0</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>               | [     ] |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     GND       | [     ] |     AREF</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     D0/RX     | [     ] |     GND</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     D1/TX     | [     ] |     D13/SCK</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     D2        | [     ] |     D12/MISO</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>    ~D3        | [     ] |    ~D11/MOSI/PWM</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     D4        | [     ] |    ~D10/SS/PWM</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>    ~D5        | [     ] |    ~D9/PWM</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>    ~D6        | [     ] |     D8</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>     D7        | [     ] |</pre></div>\n<p>               +---------+</p>\n\n<p>Pin bertanda ~ mendukung PWM (Pulse Width Modulation)</p>\n</code></pre>\n\n<h3><strong>💻 Setup Arduino IDE</strong></h3>\n\n<p><strong>Langkah 1: Download Arduino IDE</strong></p>\n<ol>\n<li>Kunjungi <a href=\"https://www.arduino.cc/en/software\" target=\"_blank\" rel=\"noopener\">https://www.arduino.cc/en/software</a></li>\n<li>Pilih version untuk OS kamu (Windows/Mac/Linux)</li>\n<li>Install dengan mengikuti wizard</li>\n</ol>\n\n<p><strong>Langkah 2: Install Driver</strong></p>\n<ul>\n<li>Windows: Driver biasanya otomatis terinstall</li>\n<li>Mac: Tidak perlu driver tambahan</li>\n<li>Linux: Tambahkan user ke grup <code>dialout</code></li>\n</ul>\n\n<p><strong>Langkah 3: Test Connection</strong></p>\n<ol>\n<li>Hubungkan Arduino ke komputer via USB</li>\n<li>Buka Arduino IDE</li>\n<li>Pilih <strong>Tools &gt; Board &gt; Arduino Uno</strong></li>\n<li>Pilih <strong>Tools &gt; Port &gt; COM_X</strong> (Windows) atau <strong>/dev/ttyUSB0</strong> (Linux)</li>\n<li>Upload program Blink bawaan: <strong>File &gt; Examples &gt; 01.Basics &gt; Blink</strong></li>\n</ol>\n\n<h3><strong>🛠️ Komponen Dasar yang Dibutuhkan</strong></h3>\n\n<p><strong>Starter Kit Minimum:</strong></p>\n<ul>\n<li>Arduino Uno R3</li>\n<li>Breadboard half-size</li>\n<li>Jumper wires (male-male, male-female)</li>\n<li>LED assorted colors (5mm)</li>\n<li>Resistors: 220Ω, 1kΩ, 10kΩ</li>\n<li>Push buttons</li>\n<li>USB cable (A to B)</li>\n</ul>\n\n<p><strong>Tools Tambahan:</strong></p>\n<ul>\n<li>Multimeter dasar</li>\n<li>Pliers/tang kecil</li>\n<li>Wire strippers (optional)</li>\n</ul>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-1-2-pemrograman-dasar-ar",
      "emoji": "📘",
      "title": "**📝 Modul 1.2: Pemrograman Dasar Arduino**",
      "body": "\n<h3><strong>🏗️ Struktur Program Arduino</strong></h3>\n\n<p>Setiap program Arduino (disebut <strong>sketch</strong>) minimal memiliki 2 fungsi:</p>\n\n<pre><code class=\"lang-cpp\">void setup() {\n<p>  // Kode yang dijalankan SEKALI saat Arduino start</p>\n<p>  // Inisialisasi pin, serial, library, dsb.</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Kode yang dijalankan BERULANG selamanya</p>\n<p>  // Logic utama program</p>\n<p>}</p>\n</code></pre>\n\n<p><strong>Contoh Program Pertama:</strong></p>\n<pre><code class=\"lang-cpp\">void setup() {\n<p>  Serial.begin(9600);        // Mulai komunikasi serial</p>\n<p>  Serial.println(&quot;Hello Arduino!&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  Serial.println(&quot;Program berjalan...&quot;);</p>\n<p>  delay(1000);               // Tunggu 1 detik</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>📊 Tipe Data Dasar</strong></h3>\n\n<pre><code class=\"lang-cpp\">// Integers (bilangan bulat)\n<p>int angka = 42;              // -32,768 to 32,767</p>\n<p>unsigned int positif = 65000; // 0 to 65,535</p>\n<p>long angkaBesar = 1000000L;   // -2,147,483,648 to 2,147,483,647</p>\n<p>byte angkaKecil = 255;        // 0 to 255 (hemat memory!)</p>\n\n<p>// Floating point</p>\n<p>float suhu = 25.6;           // Presisi 6-7 digit</p>\n<p>double suhuAkurat = 25.123456789; // Presisi lebih tinggi</p>\n\n<p>// Characters &amp; Strings</p>\n<p>char huruf = &#39;A&#39;;</p>\n<p>char nama[] = &quot;Arduino&quot;;     // C-style string (hemat memory)</p>\n<p>String teks = &quot;Hello World&quot;; // Arduino String object (mudah tapi boros)</p>\n\n<p>// Boolean</p>\n<p>bool nyala = true;</p>\n<p>bool mati = false;</p>\n\n<p>// Constants</p>\n<p>const int LED_PIN = 13;      // Nilai tidak bisa diubah</p>\n<p>#define DELAY_TIME 1000      // Macro preprocessor</p>\n</code></pre>\n\n<h3><strong>🔧 Variables &amp; Scope</strong></h3>\n\n<pre><code class=\"lang-cpp\">int globalVar = 100;         // Bisa diakses dimana saja\n\n<p>void setup() {</p>\n<p>  int localVar = 50;         // Hanya ada dalam fungsi setup()</p>\n<p>  Serial.begin(9600);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  static int counter = 0;    // Nilainya bertahan antar pemanggilan loop()</p>\n<p>  counter++;</p>\n\n<p>  // localVar tidak bisa diakses di sini!</p>\n<p>  Serial.println(globalVar); // OK</p>\n<p>  Serial.println(counter);   // OK</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🧮 Operator</strong></h3>\n\n<pre><code class=\"lang-cpp\">// Aritmatika\n<p>int a = 10, b = 3;</p>\n<p>int tambah = a + b;    // 13</p>\n<p>int kurang = a - b;    // 7</p>\n<p>int kali = a * b;      // 30</p>\n<p>int bagi = a / b;      // 3 (integer division!)</p>\n<p>int sisa = a % b;      // 1 (modulo)</p>\n\n<p>// Assignment</p>\n<p>a = 5;</p>\n<p>a += 2;  // a = a + 2  (sekarang a = 7)</p>\n<p>a <em>= 3;  // a = a </em> 3  (sekarang a = 21)</p>\n\n<p>// Comparison</p>\n<p>bool hasil;</p>\n<p>hasil = (a == b);      // Equal</p>\n<p>hasil = (a != b);      // Not equal</p>\n<p>hasil = (a &gt; b);       // Greater than</p>\n<p>hasil = (a &lt;= b);      // Less than or equal</p>\n\n<p>// Logical</p>\n<p>bool p = true, q = false;</p>\n<p>bool dan = p &amp;&amp; q;     // false (AND)</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>bool atau = p || q;    // true (OR)</pre></div>\n<p>bool tidak = !p;       // false (NOT)</p>\n</code></pre>\n\n<h3><strong>🔄 Control Structures</strong></h3>\n\n<p><strong>If-Else:</strong></p>\n<pre><code class=\"lang-cpp\">int nilai = 85;\n\n<p>if (nilai &gt;= 90) {</p>\n<p>  Serial.println(&quot;A&quot;);</p>\n<p>} else if (nilai &gt;= 80) {</p>\n<p>  Serial.println(&quot;B&quot;);</p>\n<p>} else if (nilai &gt;= 70) {</p>\n<p>  Serial.println(&quot;C&quot;);</p>\n<p>} else {</p>\n<p>  Serial.println(&quot;D&quot;);</p>\n<p>}</p>\n</code></pre>\n\n<p><strong>For Loop:</strong></p>\n<pre><code class=\"lang-cpp\">// Blink LED 5 kali\n<p>for (int i = 0; i &lt; 5; i++) {</p>\n<p>  digitalWrite(13, HIGH);</p>\n<p>  delay(500);</p>\n<p>  digitalWrite(13, LOW);</p>\n<p>  delay(500);</p>\n<p>  Serial.println(&quot;Blink ke-&quot; + String(i+1));</p>\n<p>}</p>\n</code></pre>\n\n<p><strong>While Loop:</strong></p>\n<pre><code class=\"lang-cpp\">int counter = 0;\n<p>while (counter &lt; 10) {</p>\n<p>  Serial.println(&quot;Counter: &quot; + String(counter));</p>\n<p>  counter++;</p>\n<p>  delay(100);</p>\n<p>}</p>\n</code></pre>\n\n<p><strong>Switch-Case:</strong></p>\n<pre><code class=\"lang-cpp\">int mode = 2;\n\n<p>switch (mode) {</p>\n<p>  case 1:</p>\n<p>    Serial.println(&quot;Mode 1: Slow blink&quot;);</p>\n<p>    break;</p>\n<p>  case 2:</p>\n<p>    Serial.println(&quot;Mode 2: Fast blink&quot;);</p>\n<p>    break;</p>\n<p>  case 3:</p>\n<p>    Serial.println(&quot;Mode 3: Off&quot;);</p>\n<p>    break;</p>\n<p>  default:</p>\n<p>    Serial.println(&quot;Mode tidak dikenal&quot;);</p>\n<p>    break;</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔧 Functions</strong></h3>\n\n<pre><code class=\"lang-cpp\">// Fungsi tanpa parameter dan return\n<p>void sayHello() {</p>\n<p>  Serial.println(&quot;Hello dari fungsi!&quot;);</p>\n<p>}</p>\n\n<p>// Fungsi dengan parameter</p>\n<p>void blinkLED(int pin, int times) {</p>\n<p>  for (int i = 0; i &lt; times; i++) {</p>\n<p>    digitalWrite(pin, HIGH);</p>\n<p>    delay(200);</p>\n<p>    digitalWrite(pin, LOW);</p>\n<p>    delay(200);</p>\n<p>  }</p>\n<p>}</p>\n\n<p>// Fungsi dengan return value</p>\n<p>int hitungLuas(int panjang, int lebar) {</p>\n<p>  return panjang * lebar;</p>\n<p>}</p>\n\n<p>float celsiusToFahrenheit(float celsius) {</p>\n<p>  return (celsius * 9.0 / 5.0) + 32.0;</p>\n<p>}</p>\n\n<p>// Penggunaan</p>\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(13, OUTPUT);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  sayHello();</p>\n<p>  blinkLED(13, 3);</p>\n\n<p>  int luas = hitungLuas(5, 3);</p>\n<p>  Serial.println(&quot;Luas: &quot; + String(luas));</p>\n\n<p>  float fahrenheit = celsiusToFahrenheit(25.0);</p>\n<p>  Serial.println(&quot;25°C = &quot; + String(fahrenheit) + &quot;°F&quot;);</p>\n\n<p>  delay(2000);</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-1-3-digital-i-o",
      "emoji": "💡",
      "title": "**⚡ Modul 1.3: Digital I/O**",
      "body": "\n<h3><strong>📌 pinMode() - Konfigurasi Pin</strong></h3>\n\n<pre><code class=\"lang-cpp\">void setup() {\n<p>  // Set pin sebagai OUTPUT (untuk LED, relay, dll)</p>\n<p>  pinMode(13, OUTPUT);</p>\n<p>  pinMode(12, OUTPUT);</p>\n\n<p>  // Set pin sebagai INPUT (untuk button, switch)</p>\n<p>  pinMode(2, INPUT);</p>\n\n<p>  // Set pin sebagai INPUT_PULLUP (ada resistor pullup internal)</p>\n<p>  pinMode(3, INPUT_PULLUP);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>💡 digitalWrite() - Kontrol Output Digital</strong></h3>\n\n<pre><code class=\"lang-cpp\">// Nyalakan LED di pin 13\n<p>digitalWrite(13, HIGH);   // 5V</p>\n<p>digitalWrite(13, LOW);    // 0V</p>\n\n<p>// Blink pattern</p>\n<p>void loop() {</p>\n<p>  digitalWrite(13, HIGH);</p>\n<p>  delay(1000);</p>\n<p>  digitalWrite(13, LOW);</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔘 digitalRead() - Baca Input Digital</strong></h3>\n\n<pre><code class=\"lang-cpp\">void setup() {\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(2, INPUT_PULLUP);  // Button pin</p>\n<p>  pinMode(13, OUTPUT);       // LED pin</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  int buttonState = digitalRead(2);</p>\n\n<p>  if (buttonState == LOW) {   // Button ditekan (pullup terbalik)</p>\n<p>    digitalWrite(13, HIGH);   // LED nyala</p>\n<p>    Serial.println(&quot;Button ditekan!&quot;);</p>\n<p>  } else {</p>\n<p>    digitalWrite(13, LOW);    // LED mati</p>\n<p>  }</p>\n\n<p>  delay(50);  // Debouncing sederhana</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔽 Pull-up dan Pull-down Resistors</strong></h3>\n\n<p><strong>Internal Pull-up (Recommended):</strong></p>\n<pre><code class=\"lang-cpp\">pinMode(2, INPUT_PULLUP);\n<p>// Pin 2 = HIGH saat button tidak ditekan</p>\n<p>// Pin 2 = LOW saat button ditekan ke GND</p>\n</code></pre>\n\n<p><strong>External Pull-up Circuit:</strong></p>\n<pre><code class=\"lang-\">     5V\n<p>     |</p>\n<p>    10kΩ</p>\n<p>     |</p>\n<p>    Pin2 ----o Button o---- GND</p>\n</code></pre>\n\n<p><strong>External Pull-down Circuit:</strong></p>\n<pre><code class=\"lang-\">    5V ----o Button o---- Pin2\n<p>                          |</p>\n<p>                        10kΩ</p>\n<p>                          |</p>\n<p>                         GND</p>\n</code></pre>\n\n<h3><strong>🎯 Proyek: LED Controller dengan Button</strong></h3>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>Proyek: LED Controller</li>\n<li>- Button 1 (pin 2): Nyala/mati LED</li>\n<li>- Button 2 (pin 3): Ubah mode blink</li>\n<li>- LED di pin 13</li>\n</ul>\n<p> */</p>\n\n<p>// Pin definitions</p>\n<p>const int LED_PIN = 13;</p>\n<p>const int BUTTON1_PIN = 2;</p>\n<p>const int BUTTON2_PIN = 3;</p>\n\n<p>// Variables</p>\n<p>bool ledState = false;</p>\n<p>int blinkMode = 0;  // 0=off, 1=slow, 2=fast</p>\n<p>unsigned long previousMillis = 0;</p>\n<p>int blinkInterval = 1000;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  pinMode(LED_PIN, OUTPUT);</p>\n<p>  pinMode(BUTTON1_PIN, INPUT_PULLUP);</p>\n<p>  pinMode(BUTTON2_PIN, INPUT_PULLUP);</p>\n\n<p>  Serial.println(&quot;LED Controller Ready&quot;);</p>\n<p>  Serial.println(&quot;Button 1: ON/OFF&quot;);</p>\n<p>  Serial.println(&quot;Button 2: Change blink mode&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Baca button states</p>\n<p>  static bool lastButton1 = HIGH;</p>\n<p>  static bool lastButton2 = HIGH;</p>\n\n<p>  bool button1 = digitalRead(BUTTON1_PIN);</p>\n<p>  bool button2 = digitalRead(BUTTON2_PIN);</p>\n\n<p>  // Button 1: Toggle LED</p>\n<p>  if (button1 == LOW &amp;&amp; lastButton1 == HIGH) {</p>\n<p>    ledState = !ledState;</p>\n<p>    blinkMode = 0;  // Reset ke mode steady</p>\n<p>    digitalWrite(LED_PIN, ledState);</p>\n<p>    Serial.println(&quot;LED: &quot; + String(ledState ? &quot;ON&quot; : &quot;OFF&quot;));</p>\n<p>    delay(50);  // Debounce</p>\n<p>  }</p>\n\n<p>  // Button 2: Change blink mode</p>\n<p>  if (button2 == LOW &amp;&amp; lastButton2 == HIGH) {</p>\n<p>    blinkMode = (blinkMode + 1) % 3;  // 0, 1, 2, 0, 1, 2...</p>\n\n<p>    switch(blinkMode) {</p>\n<p>      case 0:</p>\n<p>        Serial.println(&quot;Mode: Steady&quot;);</p>\n<p>        digitalWrite(LED_PIN, ledState);</p>\n<p>        break;</p>\n<p>      case 1:</p>\n<p>        Serial.println(&quot;Mode: Slow blink&quot;);</p>\n<p>        blinkInterval = 1000;</p>\n<p>        break;</p>\n<p>      case 2:</p>\n<p>        Serial.println(&quot;Mode: Fast blink&quot;);</p>\n<p>        blinkInterval = 200;</p>\n<p>        break;</p>\n<p>    }</p>\n<p>    delay(50);  // Debounce</p>\n<p>  }</p>\n\n<p>  // Handle blinking</p>\n<p>  if (blinkMode &gt; 0 &amp;&amp; ledState) {</p>\n<p>    unsigned long currentMillis = millis();</p>\n<p>    if (currentMillis - previousMillis &gt;= blinkInterval) {</p>\n<p>      previousMillis = currentMillis;</p>\n<p>      static bool blinkState = false;</p>\n<p>      blinkState = !blinkState;</p>\n<p>      digitalWrite(LED_PIN, blinkState);</p>\n<p>    }</p>\n<p>  }</p>\n\n<p>  lastButton1 = button1;</p>\n<p>  lastButton2 = button2;</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🏃‍♂️ Latihan Digital I/O</strong></h3>\n\n<p><strong>Latihan 1: Traffic Light</strong></p>\n<p>Buat simulasi lampu lalu lintas:</p>\n<ul>\n<li>Merah (pin 12): 5 detik</li>\n<li>Kuning (pin 11): 2 detik</li>\n<li>Hijau (pin 10): 8 detik</li>\n</ul>\n\n<p><strong>Latihan 2: Button Counter</strong></p>\n<ul>\n<li>Setiap kali button ditekan, counter bertambah</li>\n<li>Tampilkan di Serial Monitor</li>\n<li>LED blink sesuai jumlah counter</li>\n</ul>\n\n<p><strong>Latihan 3: Binary Counter</strong></p>\n<ul>\n<li>4 LED menampilkan angka 0-15 dalam binary</li>\n<li>Auto increment setiap detik</li>\n<li>Reset ke 0 setelah 15</li>\n</ul>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-1-4-analog-i-o",
      "emoji": "📘",
      "title": "**📊 Modul 1.4: Analog I/O**",
      "body": "\n<h3><strong>📈 analogRead() - Membaca Nilai Analog</strong></h3>\n\n<p>Arduino Uno memiliki 6 pin analog input (A0-A5) dengan ADC 10-bit:</p>\n<ul>\n<li><strong>Resolusi</strong>: 1024 nilai (0-1023)</li>\n<li><strong>Voltage Range</strong>: 0-5V (default)</li>\n<li><strong>Formula</strong>: <code>voltage = (analogValue / 1023.0) * 5.0</code></li>\n</ul>\n\n<pre><code class=\"lang-cpp\">void setup() {\n<p>  Serial.begin(9600);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  int sensorValue = analogRead(A0);        // 0-1023</p>\n<p>  float voltage = (sensorValue / 1023.0) * 5.0;  // Convert to volts</p>\n\n<p>  Serial.print(&quot;Raw: &quot;);</p>\n<p>  Serial.print(sensorValue);</p>\n<p>  Serial.print(&quot; | Voltage: &quot;);</p>\n<p>  Serial.println(voltage);</p>\n\n<p>  delay(500);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🌊 analogWrite() - PWM Output</strong></h3>\n\n<p>PWM (Pulse Width Modulation) digunakan untuk mensimulasikan output analog:</p>\n<ul>\n<li><strong>Pin PWM</strong>: 3, 5, 6, 9, 10, 11 (bertanda ~)</li>\n<li><strong>Nilai</strong>: 0-255 (0% - 100% duty cycle)</li>\n<li><strong>Frequency</strong>: ~490Hz (pin 5,6: ~980Hz)</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">// Fade LED dengan PWM\n<p>void setup() {</p>\n<p>  pinMode(9, OUTPUT);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Fade in</p>\n<p>  for (int brightness = 0; brightness &lt;= 255; brightness++) {</p>\n<p>    analogWrite(9, brightness);</p>\n<p>    delay(5);</p>\n<p>  }</p>\n\n<p>  // Fade out</p>\n<p>  for (int brightness = 255; brightness &gt;= 0; brightness--) {</p>\n<p>    analogWrite(9, brightness);</p>\n<p>    delay(5);</p>\n<p>  }</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🎛️ Menggunakan Potensiometer</strong></h3>\n\n<p>Potensiometer adalah resistor variabel - cocok untuk kontrol manual:</p>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>Potensiometer di A0 mengontrol brightness LED di pin 9</li>\n</ul>\n<p> */</p>\n<p>const int POT_PIN = A0;</p>\n<p>const int LED_PIN = 9;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(LED_PIN, OUTPUT);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  int potValue = analogRead(POT_PIN);      // 0-1023</p>\n<p>  int brightness = map(potValue, 0, 1023, 0, 255);  // Scale ke 0-255</p>\n\n<p>  analogWrite(LED_PIN, brightness);</p>\n\n<p>  Serial.print(&quot;Pot: &quot;);</p>\n<p>  Serial.print(potValue);</p>\n<p>  Serial.print(&quot; | Brightness: &quot;);</p>\n<p>  Serial.println(brightness);</p>\n\n<p>  delay(100);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>💡 Light Dependent Resistor (LDR)</strong></h3>\n\n<p>LDR adalah resistor yang nilainya berubah sesuai intensitas cahaya:</p>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>Automatic Night Light dengan LDR</li>\n<li>LDR di A0, LED di pin 9</li>\n<li>Semakin gelap, LED semakin terang</li>\n</ul>\n<p> */</p>\n<p>const int LDR_PIN = A0;</p>\n<p>const int LED_PIN = 9;</p>\n<p>const int THRESHOLD = 500;  // Threshold gelap/terang</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(LED_PIN, OUTPUT);</p>\n<p>  Serial.println(&quot;Automatic Night Light&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  int ldrValue = analogRead(LDR_PIN);</p>\n\n<p>  // Invert nilai: semakin gelap (nilai kecil), LED semakin terang</p>\n<p>  int ledBrightness = map(ldrValue, 0, 1023, 255, 0);</p>\n<p>  ledBrightness = constrain(ledBrightness, 0, 255);</p>\n\n<p>  analogWrite(LED_PIN, ledBrightness);</p>\n\n<p>  Serial.print(&quot;Light Level: &quot;);</p>\n<p>  Serial.print(ldrValue);</p>\n<p>  Serial.print(&quot; | LED Brightness: &quot;);</p>\n<p>  Serial.println(ledBrightness);</p>\n\n<p>  if (ldrValue &lt; THRESHOLD) {</p>\n<p>    Serial.println(&quot;-&gt; DARK: LED ON&quot;);</p>\n<p>  } else {</p>\n<p>    Serial.println(&quot;-&gt; BRIGHT: LED OFF&quot;);</p>\n<p>  }</p>\n\n<p>  delay(200);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🌡️ Membaca Sensor Suhu (LM35)</strong></h3>\n\n<p>LM35 adalah sensor suhu analog yang mudah digunakan:</p>\n<ul>\n<li><strong>Output</strong>: 10mV per °C</li>\n<li><strong>Range</strong>: 0-100°C</li>\n<li><strong>Linear</strong>: Output voltage = Temperature × 0.01V</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>Sensor Suhu LM35</li>\n<li>Output LM35 di pin A0</li>\n</ul>\n<p> */</p>\n<p>const int TEMP_PIN = A0;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  Serial.println(&quot;LM35 Temperature Sensor&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  int sensorValue = analogRead(TEMP_PIN);</p>\n\n<p>  // Convert ADC reading to voltage</p>\n<p>  float voltage = (sensorValue / 1023.0) * 5.0;</p>\n\n<p>  // Convert voltage to temperature (LM35: 10mV per °C)</p>\n<p>  float temperatureC = voltage * 100.0;</p>\n<p>  float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;</p>\n\n<p>  Serial.print(&quot;Raw: &quot;);</p>\n<p>  Serial.print(sensorValue);</p>\n<p>  Serial.print(&quot; | Voltage: &quot;);</p>\n<p>  Serial.print(voltage);</p>\n<p>  Serial.print(&quot;V | Temp: &quot;);</p>\n<p>  Serial.print(temperatureC);</p>\n<p>  Serial.print(&quot;°C (&quot;);</p>\n<p>  Serial.print(temperatureF);</p>\n<p>  Serial.println(&quot;°F)&quot;);</p>\n\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🎯 Proyek: Smart Plant Monitor</strong></h3>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>Smart Plant Monitor</li>\n<li>- Soil moisture sensor di A0</li>\n<li>- LDR di A1</li>\n<li>- Temperature sensor (LM35) di A2</li>\n<li>- Pump relay di pin 8</li>\n<li>- LED indicator di pin 9</li>\n<li>- Buzzer di pin 7</li>\n</ul>\n<p> */</p>\n\n<p>// Pin definitions</p>\n<p>const int SOIL_PIN = A0;</p>\n<p>const int LIGHT_PIN = A1;</p>\n<p>const int TEMP_PIN = A2;</p>\n<p>const int PUMP_PIN = 8;</p>\n<p>const int LED_PIN = 9;</p>\n<p>const int BUZZER_PIN = 7;</p>\n\n<p>// Thresholds</p>\n<p>const int SOIL_DRY = 300;    // Soil moisture threshold</p>\n<p>const int LIGHT_LOW = 200;   // Light level threshold</p>\n<p>const float TEMP_HIGH = 35.0; // Temperature threshold (°C)</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  pinMode(PUMP_PIN, OUTPUT);</p>\n<p>  pinMode(LED_PIN, OUTPUT);</p>\n<p>  pinMode(BUZZER_PIN, OUTPUT);</p>\n\n<p>  digitalWrite(PUMP_PIN, LOW);  // Pump off initially</p>\n\n<p>  Serial.println(&quot;=== Smart Plant Monitor Started ===&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Read sensors</p>\n<p>  int soilMoisture = analogRead(SOIL_PIN);</p>\n<p>  int lightLevel = analogRead(LIGHT_PIN);</p>\n<p>  int tempRaw = analogRead(TEMP_PIN);</p>\n\n<p>  // Convert temperature</p>\n<p>  float voltage = (tempRaw / 1023.0) * 5.0;</p>\n<p>  float temperature = voltage * 100.0;</p>\n\n<p>  // Display readings</p>\n<p>  Serial.println(&quot;--- Sensor Readings ---&quot;);</p>\n<p>  Serial.println(&quot;Soil Moisture: &quot; + String(soilMoisture));</p>\n<p>  Serial.println(&quot;Light Level: &quot; + String(lightLevel));</p>\n<p>  Serial.println(&quot;Temperature: &quot; + String(temperature) + &quot;°C&quot;);</p>\n\n<p>  // Check conditions and take actions</p>\n<p>  bool needWater = false;</p>\n<p>  bool lowLight = false;</p>\n<p>  bool highTemp = false;</p>\n\n<p>  // Soil moisture check</p>\n<p>  if (soilMoisture &lt; SOIL_DRY) {</p>\n<p>    Serial.println(&quot;⚠️ SOIL TOO DRY! Starting pump...&quot;);</p>\n<p>    digitalWrite(PUMP_PIN, HIGH);</p>\n<p>    needWater = true;</p>\n<p>  } else {</p>\n<p>    Serial.println(&quot;✅ Soil moisture OK&quot;);</p>\n<p>    digitalWrite(PUMP_PIN, LOW);</p>\n<p>  }</p>\n\n<p>  // Light level check</p>\n<p>  if (lightLevel &lt; LIGHT_LOW) {</p>\n<p>    Serial.println(&quot;⚠️ Light level too low!&quot;);</p>\n<p>    lowLight = true;</p>\n<p>  } else {</p>\n<p>    Serial.println(&quot;✅ Light level OK&quot;);</p>\n<p>  }</p>\n\n<p>  // Temperature check</p>\n<p>  if (temperature &gt; TEMP_HIGH) {</p>\n<p>    Serial.println(&quot;⚠️ Temperature too high!&quot;);</p>\n<p>    highTemp = true;</p>\n<p>  } else {</p>\n<p>    Serial.println(&quot;✅ Temperature OK&quot;);</p>\n<p>  }</p>\n\n<p>  // LED indicator</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>  if (needWater || lowLight || highTemp) {</pre></div>\n<p>    // Blink LED if any problem</p>\n<p>    for (int i = 0; i &lt; 3; i++) {</p>\n<p>      digitalWrite(LED_PIN, HIGH);</p>\n<p>      delay(200);</p>\n<p>      digitalWrite(LED_PIN, LOW);</p>\n<p>      delay(200);</p>\n<p>    }</p>\n\n<p>    // Sound buzzer for critical issues</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>    if (needWater || highTemp) {</pre></div>\n<p>      tone(BUZZER_PIN, 1000, 500);  // 1kHz for 500ms</p>\n<p>    }</p>\n<p>  } else {</p>\n<p>    // Steady LED if all OK</p>\n<p>    digitalWrite(LED_PIN, HIGH);</p>\n<p>  }</p>\n\n<p>  Serial.println(&quot;========================&quot;);</p>\n<p>  Serial.println();</p>\n\n<p>  delay(5000);  // Check every 5 seconds</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "latihan-tantangan-level-1",
      "emoji": "💡",
      "title": "**🏃‍♂️ Latihan & Tantangan Level 1**",
      "body": "\n<h3><strong>Latihan Mandiri:</strong></h3>\n\n<p><strong>1. RGB LED Controller</strong></p>\n<ul>\n<li>Gunakan 3 potensiometer untuk kontrol Red, Green, Blue</li>\n<li>Tampilkan nilai RGB di Serial Monitor</li>\n<li>Bonus: Buat mode auto-color cycling</li>\n</ul>\n\n<p><strong>2. Security Alarm</strong></p>\n<ul>\n<li>LDR sebagai light sensor</li>\n<li>Buzzer berbunyi jika ada perubahan cahaya mendadak</li>\n<li>LED indikator status (hijau=aman, merah=alarm)</li>\n<li>Button untuk reset alarm</li>\n</ul>\n\n<p><strong>3. Simple Weather Station</strong></p>\n<ul>\n<li>LM35 untuk suhu</li>\n<li>LDR untuk level cahaya</li>\n<li>Tampilkan data setiap 10 detik</li>\n<li>LED blink sesuai suhu (cepat=panas, lambat=dingin)</li>\n</ul>\n\n<h3><strong>Quiz Pemahaman:</strong></h3>\n\n<p><strong>1. Apa perbedaan <code>digitalWrite(13, HIGH)</code> dan <code>analogWrite(9, 255)</code>?</strong></p>\n\n<p><strong>2. Mengapa perlu <code>delay(50)</code> setelah baca button?</strong></p>\n\n<p><strong>3. Pin mana saja di Arduino Uno yang mendukung PWM?</strong></p>\n\n<p><strong>4. Jika <code>analogRead(A0)</code> menghasilkan 512, berapa voltage-nya?</strong></p>\n\n<p><strong>5. Kapan sebaiknya menggunakan <code>INPUT_PULLUP</code> vs <code>INPUT</code>?</strong></p>\n\n<h3><strong>Project Challenge:</strong></h3>\n<p><strong>&quot;Smart Room Controller&quot;</strong></p>\n<ul>\n<li>2 potensiometer: brightness control &amp; temperature setpoint</li>\n<li>LDR: auto-brightness saat gelap</li>\n<li>LM35: temperature monitoring</li>\n<li>2 LED: room light &amp; heater indicator</li>\n<li>Buzzer: alarm jika suhu terlalu tinggi/rendah</li>\n<li>Serial interface untuk monitoring</li>\n</ul>\n\n<p><strong>Kriteria Penilaian:</strong></p>\n<ul>\n<li>✅ Kode bersih dan terstruktur</li>\n<li>✅ Komentar yang jelas</li>\n<li>✅ Handling error/edge cases</li>\n<li>✅ User experience (serial output yang informatif)</li>\n<li>✅ Kreativitas fitur tambahan</li>\n</ul>\n\n<p>---</p>\n\n<p><strong>🎉 Selamat! Anda telah menyelesaikan Level 1</strong></p>\n\n<p><strong>Yang telah dikuasai:</strong></p>\n<ul>\n<li>✅ Setup Arduino IDE dan hardware</li>\n<li>✅ Struktur program dan syntax C/C++</li>\n<li>✅ Variables, functions, control structures</li>\n<li>✅ Digital I/O (button, LED)</li>\n<li>✅ Analog I/O (sensor, PWM)</li>\n<li>✅ Serial communication untuk debugging</li>\n</ul>\n\n<p><strong>Selanjutnya ke Level 2:</strong></p>\n<ul>\n<li>Sensor dan aktuator lanjutan</li>\n<li>Display LCD dan interface</li>\n<li>Timer dan interrupt</li>\n<li>Komunikasi I2C/SPI</li>\n<li>Memory management</li>\n</ul>"
    }
  ],
  "contoh": [
    {
      "judul": "Blink LED Pertama",
      "soal": "Membuat LED di pin 13 berkedip setiap 1 detik",
      "langkah": [
        "Hubungkan LED ke pin 13 Arduino (sudah ada built-in LED)",
        "Tulis kode untuk set pin 13 sebagai OUTPUT",
        "Gunakan digitalWrite(13, HIGH) untuk nyalakan",
        "Gunakan delay(1000) untuk tunggu 1 detik",
        "digitalWrite(13, LOW) untuk matikan LED",
        "<strong>Upload ke Arduino dan lihat LED berkedip!</strong>"
      ]
    },
    {
      "judul": "Button Control LED",
      "soal": "LED menyala ketika button ditekan, mati ketika dilepas",
      "langkah": [
        "Hubungkan button ke pin 2 dengan pull-up resistor",
        "Hubungkan LED ke pin 13",
        "Set pinMode(2, INPUT_PULLUP) dan pinMode(13, OUTPUT)",
        "Baca digitalRead(2) dalam loop()",
        "Jika button LOW (ditekan), LED HIGH",
        "<strong>Test dengan menekan button!</strong>"
      ]
    }
  ],
  "soal": [
    {
      "q": "Fungsi setup() pada Arduino dijalankan...",
      "opts": [
        "Berkali-kali selama program berjalan",
        "Sekali saat Arduino pertama kali menyala",
        "Setiap 1 detik sekali",
        "Hanya saat tombol reset ditekan"
      ],
      "ans": 1,
      "exp": "setup() dijalankan sekali saat Arduino di-reset atau pertama kali mendapat power."
    },
    {
      "q": "Pin digital Arduino yang mendukung PWM ditandai dengan...",
      "opts": [
        "Tanda bintang (*)",
        "Tanda tilde (~)",
        "Tanda plus (+)",
        "Tanda minus (-)"
      ],
      "ans": 1,
      "exp": "Pin PWM Arduino Uno (3, 5, 6, 9, 10, 11) ditandai dengan simbol ~ di sebelah nomornya."
    },
    {
      "q": "Untuk membaca sensor analog, fungsi yang digunakan adalah...",
      "opts": [
        "digitalRead()",
        "analogRead()",
        "pinMode()",
        "analogWrite()"
      ],
      "ans": 1,
      "exp": "analogRead() digunakan untuk membaca nilai dari pin analog (A0-A5) dengan hasil 0-1023."
    },
    {
      "q": "Apa perbedaan digitalWrite(13, HIGH) dan analogWrite(9, 255)?",
      "opts": [
        "Tidak ada, sama saja",
        "digitalWrite hanya ON/OFF, analogWrite PWM 0-255 untuk atur kecerahan/kecepatan",
        "analogWrite untuk baca sensor",
        "digitalWrite untuk PWM"
      ],
      "ans": 1,
      "exp": "digitalWrite HIGH/LOW, analogWrite PWM 0-255."
    },
    {
      "q": "Mengapa perlu delay(50) setelah baca button?",
      "opts": [
        "Agar LED lebih terang",
        "Untuk debouncing, hindari pantulan kontak",
        "Agar program lebih cepat",
        "Tidak perlu"
      ],
      "ans": 1,
      "exp": "Debouncing hindari deteksi ganda akibat pantulan mekanik."
    }
  ]
},
{
  "id": "arduino-menengah",
  "emoji": "🔧",
  "title": "Arduino Menengah",
  "subtitle": "Sensor lanjutan, display, komunikasi & timer",
  "level": "Menengah",
  "durasi": "±6-8 minggu",
  "materi": [
    "Sensor & Aktuator",
    "Display",
    "Komunikasi",
    "Memory",
    "Timer & Interrupt"
  ],
  "sections": [
    {
      "id": "intro",
      "emoji": "📖",
      "title": "Pendahuluan",
      "body": "<h2>🎯 <strong>LEVEL 2: MENENGAH - Sensor, Aktuator &amp; Komunikasi</strong></h2>\n<p><em>Durasi: 6-8 minggu | Target: Menguasai komponen lanjutan dan protokol komunikasi</em></p>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-2-1-sensor-dan-aktuator",
      "emoji": "💡",
      "title": "**📋 Modul 2.1: Sensor dan Aktuator**",
      "body": "\n<h3><strong>🌡️ DHT22 - Temperature &amp; Humidity Sensor</strong></h3>\n\n<p>DHT22 adalah sensor digital yang mengukur suhu dan kelembaban dengan akurasi tinggi:</p>\n<ul>\n<li><strong>Temperature Range</strong>: -40°C to +80°C (±0.5°C)</li>\n<li><strong>Humidity Range</strong>: 0-100% RH (±2-5%)</li>\n<li><strong>Interface</strong>: Single-wire digital</li>\n<li><strong>Power</strong>: 3.3-5V</li>\n<li><strong>Sampling</strong>: Max 0.5Hz (setiap 2 detik)</li>\n</ul>\n\n<p><strong>Pinout DHT22:</strong></p>\n<pre><code class=\"lang-\">DHT22 Pinout (tampak depan):\n<p>+---+</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| 1 | VCC (3.3-5V)</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| 2 | DATA (ke pin digital Arduino)</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| 3 | NC (not connected)</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| 4 | GND</pre></div>\n<p>+---+</p>\n</code></pre>\n\n<p><strong>Wiring &amp; Code:</strong></p>\n<pre><code class=\"lang-cpp\">#include &quot;DHT.h&quot;\n\n<p>#define DHTPIN 2        // Pin data DHT22</p>\n<p>#define DHTTYPE DHT22   // DHT 22 (AM2302)</p>\n\n<p>DHT dht(DHTPIN, DHTTYPE);</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  dht.begin();</p>\n<p>  Serial.println(&quot;DHT22 Temperature &amp; Humidity Sensor&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  delay(2000);  // DHT22 butuh minimal 2 detik antar pembacaan</p>\n\n<p>  float humidity = dht.readHumidity();</p>\n<p>  float temperature = dht.readTemperature();        // Celsius</p>\n<p>  float fahrenheit = dht.readTemperature(true);     // Fahrenheit</p>\n\n<p>  // Check if readings failed</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>  if (isnan(humidity) || isnan(temperature) || isnan(fahrenheit)) {</pre></div>\n<p>    Serial.println(&quot;❌ Failed to read from DHT sensor!&quot;);</p>\n<p>    return;</p>\n<p>  }</p>\n\n<p>  // Compute heat index</p>\n<p>  float heatIndex = dht.computeHeatIndex(fahrenheit, humidity);</p>\n\n<p>  Serial.println(&quot;=== DHT22 Readings ===&quot;);</p>\n<p>  Serial.println(&quot;Humidity: &quot; + String(humidity) + &quot;%&quot;);</p>\n<p>  Serial.println(&quot;Temperature: &quot; + String(temperature) + &quot;°C (&quot; + String(fahrenheit) + &quot;°F)&quot;);</p>\n<p>  Serial.println(&quot;Heat Index: &quot; + String(heatIndex) + &quot;°F&quot;);</p>\n<p>  Serial.println(&quot;======================&quot;);</p>\n<p>}</p>\n</code></pre>\n<h3><strong>📏 HC-SR04 - Ultrasonic Distance Sensor</strong></h3>\n\n<p>HC-SR04 menggunakan gelombang ultrasonik untuk mengukur jarak dengan presisi tinggi:</p>\n<ul>\n<li><strong>Range</strong>: 2cm - 400cm</li>\n<li><strong>Accuracy</strong>: ±3mm</li>\n<li><strong>Voltage</strong>: 5V</li>\n<li><strong>Frequency</strong>: 40kHz</li>\n<li><strong>Angle</strong>: &lt;15°</li>\n</ul>\n\n<p><strong>Pinout &amp; Wiring:</strong></p>\n<pre><code class=\"lang-\">HC-SR04 Pinout:\n<p>+-------+</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| VCC   | -&gt; 5V Arduino</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| TRIG  | -&gt; Pin 9 Arduino  </pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| ECHO  | -&gt; Pin 10 Arduino</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| GND   | -&gt; GND Arduino</pre></div>\n<p>+-------+</p>\n\n<p>PENTING: Jika pakai 3.3V board (ESP32), gunakan voltage divider </p>\n<p>untuk ECHO pin atau gunakan level shifter!</p>\n</code></pre>\n\n<p><strong>Cara Kerja:</strong></p>\n<ol>\n<li>Kirim pulse HIGH 10μs ke pin TRIG</li>\n<li>Sensor mengirim 8 burst 40kHz ultrasonic</li>\n<li>Pin ECHO akan HIGH selama waktu tempuh gelombang</li>\n<li>Distance = (pulseTime × speedOfSound) / 2</li>\n</ol>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>HC-SR04 Ultrasonic Distance Sensor</li>\n</ul>\n<p> */</p>\n<p>const int TRIG_PIN = 9;</p>\n<p>const int ECHO_PIN = 10;</p>\n<p>const int LED_PIN = 13;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(TRIG_PIN, OUTPUT);</p>\n<p>  pinMode(ECHO_PIN, INPUT);</p>\n<p>  pinMode(LED_PIN, OUTPUT);</p>\n<p>  Serial.println(&quot;HC-SR04 Distance Sensor&quot;);</p>\n<p>}</p>\n\n<p>long getDistance() {</p>\n<p>  // Clear trigger</p>\n<p>  digitalWrite(TRIG_PIN, LOW);</p>\n<p>  delayMicroseconds(2);</p>\n\n<p>  // Send 10μs pulse</p>\n<p>  digitalWrite(TRIG_PIN, HIGH);</p>\n<p>  delayMicroseconds(10);</p>\n<p>  digitalWrite(TRIG_PIN, LOW);</p>\n\n<p>  // Measure pulse duration</p>\n<p>  long duration = pulseIn(ECHO_PIN, HIGH);</p>\n\n<p>  // Calculate distance (speed of sound: 343m/s = 0.0343cm/μs)</p>\n<p>  // Distance = (time × speed) / 2 (round trip)</p>\n<p>  long distance = duration * 0.0343 / 2;</p>\n\n<p>  return distance;</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  long distance = getDistance();</p>\n\n<p>  Serial.print(&quot;Distance: &quot;);</p>\n<p>  Serial.print(distance);</p>\n<p>  Serial.println(&quot; cm&quot;);</p>\n\n<p>  // LED brightness based on distance (closer = brighter)</p>\n<p>  if (distance &gt; 0 &amp;&amp; distance &lt;= 400) {</p>\n<p>    int brightness = map(distance, 2, 100, 255, 0);  // Invert mapping</p>\n<p>    brightness = constrain(brightness, 0, 255);</p>\n<p>    analogWrite(LED_PIN, brightness);</p>\n\n<p>    // Proximity alert</p>\n<p>    if (distance &lt; 10) {</p>\n<p>      Serial.println(&quot;⚠️ OBJECT VERY CLOSE!&quot;);</p>\n<p>    } else if (distance &lt; 30) {</p>\n<p>      Serial.println(&quot;⚠️ Object nearby&quot;);</p>\n<p>    }</p>\n<p>  } else {</p>\n<p>    digitalWrite(LED_PIN, LOW);</p>\n<p>    Serial.println(&quot;❌ Out of range&quot;);</p>\n<p>  }</p>\n\n<p>  delay(200);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔄 Servo Motor Control</strong></h3>\n\n<p>Servo motor adalah aktuator yang bisa berputar ke posisi tertentu (0-180°):</p>\n<ul>\n<li><strong>Control</strong>: PWM signal (50Hz, 1-2ms pulse width)</li>\n<li><strong>Voltage</strong>: 4.8-6V (external power recommended)</li>\n<li><strong>Torque</strong>: Tergantung tipe (SG90: 1.8kg⋅cm)</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">#include &lt;Servo.h&gt;\n\n<p>Servo myServo;</p>\n<p>const int SERVO_PIN = 9;</p>\n<p>const int POT_PIN = A0;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  myServo.attach(SERVO_PIN);</p>\n<p>  Serial.println(&quot;Servo Control with Potentiometer&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  int potValue = analogRead(POT_PIN);                    // 0-1023</p>\n<p>  int angle = map(potValue, 0, 1023, 0, 180);          // 0-180°</p>\n\n<p>  myServo.write(angle);</p>\n\n<p>  Serial.print(&quot;Potentiometer: &quot;);</p>\n<p>  Serial.print(potValue);</p>\n<p>  Serial.print(&quot; | Servo Angle: &quot;);</p>\n<p>  Serial.println(angle);</p>\n\n<p>  delay(15);  // Servo needs time to reach position</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>⚡ Stepper Motor (28BYJ-48 + ULN2003)</strong></h3>\n\n<p>Stepper motor berputar dalam langkah (step) presisi:</p>\n<ul>\n<li><strong>Steps per revolution</strong>: 2048 (dengan gearbox 64:1)</li>\n<li><strong>Step angle</strong>: 5.625° (tanpa gearbox)</li>\n<li><strong>Voltage</strong>: 5V</li>\n<li><strong>Driver</strong>: ULN2003 (Darlington array)</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">#include &lt;Stepper.h&gt;\n\n<p>const int STEPS_PER_REV = 2048;  // 28BYJ-48 dengan gearbox</p>\n<p>const int MOTOR_SPEED = 10;      // RPM</p>\n\n<p>// Pin connections (IN1, IN3, IN2, IN4 untuk sequence yang benar)</p>\n<p>Stepper myStepper(STEPS_PER_REV, 8, 10, 9, 11);</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  myStepper.setSpeed(MOTOR_SPEED);</p>\n<p>  Serial.println(&quot;Stepper Motor Control&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  Serial.println(&quot;Clockwise 1 revolution&quot;);</p>\n<p>  myStepper.step(STEPS_PER_REV);</p>\n<p>  delay(1000);</p>\n\n<p>  Serial.println(&quot;Counterclockwise 1 revolution&quot;);</p>\n<p>  myStepper.step(-STEPS_PER_REV);</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🚗 DC Motor dengan L298N Driver</strong></h3>\n\n<p>L298N adalah dual H-bridge driver untuk mengontrol motor DC:</p>\n<ul>\n<li><strong>Voltage</strong>: 5-35V</li>\n<li><strong>Current</strong>: 2A per channel</li>\n<li><strong>Control</strong>: Direction + Speed (PWM)</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>DC Motor Control dengan L298N</li>\n<li>Motor A connections:</li>\n<li>- ENA -&gt; Pin 9 (PWM speed control)</li>\n<li>- IN1 -&gt; Pin 8</li>\n<li>- IN2 -&gt; Pin 7</li>\n<li>- Motor terminals ke OUT1 &amp; OUT2</li>\n</ul>\n<p> */</p>\n<p>const int ENA = 9;   // Speed control</p>\n<p>const int IN1 = 8;   // Direction control</p>\n<p>const int IN2 = 7;   // Direction control</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  pinMode(ENA, OUTPUT);</p>\n<p>  pinMode(IN1, OUTPUT);</p>\n<p>  pinMode(IN2, OUTPUT);</p>\n\n<p>  Serial.println(&quot;DC Motor Control with L298N&quot;);</p>\n<p>}</p>\n\n<p>void motorControl(int speed, String direction) {</p>\n<p>  // Speed: 0-255, Direction: &quot;CW&quot;, &quot;CCW&quot;, &quot;STOP&quot;</p>\n\n<p>  if (direction == &quot;CW&quot;) {</p>\n<p>    digitalWrite(IN1, HIGH);</p>\n<p>    digitalWrite(IN2, LOW);</p>\n<p>  } else if (direction == &quot;CCW&quot;) {</p>\n<p>    digitalWrite(IN1, LOW);</p>\n<p>    digitalWrite(IN2, HIGH);</p>\n<p>  } else {  // STOP</p>\n<p>    digitalWrite(IN1, LOW);</p>\n<p>    digitalWrite(IN2, LOW);</p>\n<p>  }</p>\n\n<p>  analogWrite(ENA, speed);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  Serial.println(&quot;Motor: Forward, speed 200&quot;);</p>\n<p>  motorControl(200, &quot;CW&quot;);</p>\n<p>  delay(2000);</p>\n\n<p>  Serial.println(&quot;Motor: Stop&quot;);</p>\n<p>  motorControl(0, &quot;STOP&quot;);</p>\n<p>  delay(1000);</p>\n\n<p>  Serial.println(&quot;Motor: Backward, speed 150&quot;);</p>\n<p>  motorControl(150, &quot;CCW&quot;);</p>\n<p>  delay(2000);</p>\n\n<p>  Serial.println(&quot;Motor: Stop&quot;);</p>\n<p>  motorControl(0, &quot;STOP&quot;);</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-2-2-display-dan-interfac",
      "emoji": "📘",
      "title": "**📺 Modul 2.2: Display dan Interface**",
      "body": "\n<h3><strong>📟 LCD 16x2 dengan I2C</strong></h3>\n\n<p>LCD 16x2 dapat menampilkan 2 baris × 16 karakter. Dengan I2C backpack, hanya butuh 4 wire:</p>\n<ul>\n<li><strong>VCC</strong>: 5V</li>\n<li><strong>GND</strong>: Ground</li>\n<li><strong>SDA</strong>: Pin A4 (Uno) atau Pin 21 (ESP32)</li>\n<li><strong>SCL</strong>: Pin A5 (Uno) atau Pin 22 (ESP32)</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">#include &lt;LiquidCrystal_I2C.h&gt;\n<p>#include &lt;Wire.h&gt;</p>\n\n<p>// I2C address bisa 0x27 atau 0x3F (cek dengan I2C scanner)</p>\n<p>LiquidCrystal_I2C lcd(0x27, 16, 2);</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  lcd.init();        // Initialize LCD</p>\n<p>  lcd.backlight();   // Turn on backlight</p>\n\n<p>  lcd.setCursor(0, 0);</p>\n<p>  lcd.print(&quot;Arduino LCD I2C&quot;);</p>\n<p>  lcd.setCursor(0, 1);</p>\n<p>  lcd.print(&quot;Hello World!&quot;);</p>\n\n<p>  delay(2000);</p>\n<p>  lcd.clear();</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Display sensor data example</p>\n<p>  float temperature = 25.6;  // Dari sensor</p>\n<p>  float humidity = 60.2;     // Dari sensor</p>\n\n<p>  lcd.setCursor(0, 0);</p>\n<p>  lcd.print(&quot;Temp: &quot;);</p>\n<p>  lcd.print(temperature, 1);  // 1 decimal place</p>\n<p>  lcd.print((char)223);       // Degree symbol</p>\n<p>  lcd.print(&quot;C&quot;);</p>\n\n<p>  lcd.setCursor(0, 1);</p>\n<p>  lcd.print(&quot;Humid: &quot;);</p>\n<p>  lcd.print(humidity, 1);</p>\n<p>  lcd.print(&quot;%&quot;);</p>\n\n<p>  delay(2000);</p>\n\n<p>  // Scrolling text example</p>\n<p>  lcd.clear();</p>\n<p>  String message = &quot;Ini adalah pesan panjang yang akan di-scroll&quot;;</p>\n<p>  for (int position = 0; position &lt; message.length() - 15; position++) {</p>\n<p>    lcd.setCursor(0, 0);</p>\n<p>    lcd.print(message.substring(position, position + 16));</p>\n<p>    delay(300);</p>\n<p>  }</p>\n\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔢 7-Segment Display</strong></h3>\n\n<p>7-segment display menampilkan angka 0-9 dengan 7 LED segment + titik:</p>\n\n<pre><code class=\"lang-cpp\">/*\n<ul>\n<li>Single Digit 7-Segment Display (Common Cathode)</li>\n<li>Segments: a,b,c,d,e,f,g,dp</li>\n<li>Pins: 2,3,4,5,6,7,8,9</li>\n</ul>\n<p> */</p>\n<p>const int segmentPins[] = {2, 3, 4, 5, 6, 7, 8, 9}; // a,b,c,d,e,f,g,dp</p>\n\n<p>// Digit patterns (0-9) - common cathode (1=ON, 0=OFF)</p>\n<p>const byte digitPatterns[] = {</p>\n<p>  B11111100,  // 0: abcdef--</p>\n<p>  B01100000,  // 1: -bc-----</p>\n<p>  B11011010,  // 2: ab-de-g-</p>\n<p>  B11110010,  // 3: abcd--g-</p>\n<p>  B01100110,  // 4: -bc--fg-</p>\n<p>  B10110110,  // 5: a-cd-fg-</p>\n<p>  B10111110,  // 6: a-cdefg-</p>\n<p>  B11100000,  // 7: abc-----</p>\n<p>  B11111110,  // 8: abcdefg-</p>\n<p>  B11110110   // 9: abcd-fg-</p>\n<p>};</p>\n\n<p>void setup() {</p>\n<p>  for (int i = 0; i &lt; 8; i++) {</p>\n<p>    pinMode(segmentPins[i], OUTPUT);</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void displayDigit(int digit) {</p>\n<p>  if (digit &gt;= 0 &amp;&amp; digit &lt;= 9) {</p>\n<p>    byte pattern = digitPatterns[digit];</p>\n<p>    for (int i = 0; i &lt; 8; i++) {</p>\n<p>      digitalWrite(segmentPins[i], (pattern &gt;&gt; (7-i)) &amp; 1);</p>\n<p>    }</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Count from 0 to 9</p>\n<p>  for (int i = 0; i &lt;= 9; i++) {</p>\n<p>    displayDigit(i);</p>\n<p>    delay(1000);</p>\n<p>  }</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🌐 OLED Display (SSD1306)</strong></h3>\n\n<p>OLED 128x64 memberikan tampilan grafis berkualitas tinggi:</p>\n\n<pre><code class=\"lang-cpp\">#include &lt;SPI.h&gt;\n<p>#include &lt;Wire.h&gt;</p>\n<p>#include &lt;Adafruit_GFX.h&gt;</p>\n<p>#include &lt;Adafruit_SSD1306.h&gt;</p>\n\n<p>#define SCREEN_WIDTH 128</p>\n<p>#define SCREEN_HEIGHT 64</p>\n<p>#define OLED_RESET -1    // Reset pin (tidak dipakai untuk I2C)</p>\n<p>#define SCREEN_ADDRESS 0x3C</p>\n\n<p>Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &amp;Wire, OLED_RESET);</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {</p>\n<p>    Serial.println(F(&quot;SSD1306 allocation failed&quot;));</p>\n<p>    for(;;);</p>\n<p>  }</p>\n\n<p>  display.display();</p>\n<p>  delay(2000);</p>\n<p>  display.clearDisplay();</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Text display</p>\n<p>  display.clearDisplay();</p>\n<p>  display.setTextSize(1);</p>\n<p>  display.setTextColor(SSD1306_WHITE);</p>\n<p>  display.setCursor(0, 0);</p>\n<p>  display.println(F(&quot;Arduino OLED&quot;));</p>\n\n<p>  display.setTextSize(2);</p>\n<p>  display.setCursor(0, 20);</p>\n<p>  display.println(F(&quot;Hello&quot;));</p>\n\n<p>  display.setTextSize(1);</p>\n<p>  display.setCursor(0, 50);</p>\n<p>  display.println(F(&quot;World!&quot;));</p>\n<p>  display.display();</p>\n<p>  delay(2000);</p>\n\n<p>  // Graphics example</p>\n<p>  display.clearDisplay();</p>\n\n<p>  // Draw rectangle</p>\n<p>  display.drawRect(10, 10, 50, 30, SSD1306_WHITE);</p>\n\n<p>  // Draw circle</p>\n<p>  display.drawCircle(80, 25, 15, SSD1306_WHITE);</p>\n\n<p>  // Draw line</p>\n<p>  display.drawLine(0, 45, 127, 45, SSD1306_WHITE);</p>\n\n<p>  // Draw text</p>\n<p>  display.setCursor(30, 55);</p>\n<p>  display.println(F(&quot;Graphics!&quot;));</p>\n\n<p>  display.display();</p>\n<p>  delay(2000);</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-2-3-komunikasi-serial",
      "emoji": "💡",
      "title": "**📡 Modul 2.3: Komunikasi Serial**",
      "body": "\n<h3><strong>💬 UART/Serial Communication</strong></h3>\n\n<p>UART adalah komunikasi serial asynchronous paling dasar:</p>\n\n<pre><code class=\"lang-cpp\">// Serial communication dengan komputer\n<p>void setup() {</p>\n<p>  Serial.begin(9600);        // Hardware serial (pins 0,1)</p>\n<p>  Serial1.begin(9600);       // Mega: additional hardware serial</p>\n\n<p>  Serial.println(&quot;Arduino ready for commands&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Read from computer</p>\n<p>  if (Serial.available()) {</p>\n<p>    String command = Serial.readString();</p>\n<p>    command.trim();  // Remove whitespace</p>\n\n<p>    if (command == &quot;LED_ON&quot;) {</p>\n<p>      digitalWrite(13, HIGH);</p>\n<p>      Serial.println(&quot;LED turned ON&quot;);</p>\n<p>    } else if (command == &quot;LED_OFF&quot;) {</p>\n<p>      digitalWrite(13, LOW);</p>\n<p>      Serial.println(&quot;LED turned OFF&quot;);</p>\n<p>    } else if (command.startsWith(&quot;BLINK_&quot;)) {</p>\n<p>      int times = command.substring(6).toInt();</p>\n<p>      for (int i = 0; i &lt; times; i++) {</p>\n<p>        digitalWrite(13, HIGH);</p>\n<p>        delay(200);</p>\n<p>        digitalWrite(13, LOW);</p>\n<p>        delay(200);</p>\n<p>      }</p>\n<p>      Serial.println(&quot;Blinked &quot; + String(times) + &quot; times&quot;);</p>\n<p>    } else {</p>\n<p>      Serial.println(&quot;Unknown command: &quot; + command);</p>\n<p>    }</p>\n<p>  }</p>\n\n<p>  // Send sensor data every 5 seconds</p>\n<p>  static unsigned long lastSend = 0;</p>\n<p>  if (millis() - lastSend &gt;= 5000) {</p>\n<p>    lastSend = millis();</p>\n\n<p>    float temperature = 25.5;  // From sensor</p>\n<p>    Serial.print(&quot;DATA,&quot;);</p>\n<p>    Serial.print(temperature);</p>\n<p>    Serial.print(&quot;,&quot;);</p>\n<p>    Serial.println(millis());</p>\n<p>  }</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔗 I2C Communication</strong></h3>\n\n<p>I2C menggunakan 2 wire (SDA/SCL) untuk komunikasi multi-device:</p>\n\n<pre><code class=\"lang-cpp\">#include &lt;Wire.h&gt;\n\n<p>// Arduino sebagai I2C Master</p>\n<p>const int SLAVE_ADDRESS = 8;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  Wire.begin();        // Join I2C bus as master</p>\n<p>  Serial.println(&quot;I2C Master ready&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Send data to slave</p>\n<p>  Wire.beginTransmission(SLAVE_ADDRESS);</p>\n<p>  Wire.write(&quot;Hello Slave&quot;);</p>\n<p>  Wire.endTransmission();</p>\n\n<p>  delay(500);</p>\n\n<p>  // Request data from slave</p>\n<p>  Wire.requestFrom(SLAVE_ADDRESS, 6);    // Request 6 bytes</p>\n\n<p>  String received = &quot;&quot;;</p>\n<p>  while (Wire.available()) {</p>\n<p>    char c = Wire.read();</p>\n<p>    received += c;</p>\n<p>  }</p>\n\n<p>  Serial.println(&quot;Received: &quot; + received);</p>\n<p>  delay(2000);</p>\n<p>}</p>\n</code></pre>\n\n<p><strong>I2C Slave Code:</strong></p>\n<pre><code class=\"lang-cpp\">#include &lt;Wire.h&gt;\n\n<p>const int SLAVE_ADDRESS = 8;</p>\n<p>String receivedData = &quot;&quot;;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  Wire.begin(SLAVE_ADDRESS);           // Join I2C bus with address 8</p>\n<p>  Wire.onReceive(receiveEvent);        // Register receive event</p>\n<p>  Wire.onRequest(requestEvent);        // Register request event</p>\n<p>  Serial.println(&quot;I2C Slave ready&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  delay(100);</p>\n<p>}</p>\n\n<p>void receiveEvent(int howMany) {</p>\n<p>  receivedData = &quot;&quot;;</p>\n<p>  while (Wire.available()) {</p>\n<p>    char c = Wire.read();</p>\n<p>    receivedData += c;</p>\n<p>  }</p>\n<p>  Serial.println(&quot;Received: &quot; + receivedData);</p>\n<p>}</p>\n\n<p>void requestEvent() {</p>\n<p>  Wire.write(&quot;Data OK&quot;);              // Send response to master</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>⚡ SPI Communication</strong></h3>\n\n<p>SPI adalah komunikasi serial synchronous high-speed:</p>\n\n<pre><code class=\"lang-cpp\">#include &lt;SPI.h&gt;\n\n<p>const int SS_PIN = 10;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  // Initialize SPI</p>\n<p>  SPI.begin();</p>\n<p>  pinMode(SS_PIN, OUTPUT);</p>\n<p>  digitalWrite(SS_PIN, HIGH);  // Deselect slave</p>\n\n<p>  Serial.println(&quot;SPI Master ready&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Send data to SPI slave</p>\n<p>  digitalWrite(SS_PIN, LOW);   // Select slave</p>\n\n<p>  byte response1 = SPI.transfer(0x41);  // Send &#39;A&#39;, get response</p>\n<p>  byte response2 = SPI.transfer(0x42);  // Send &#39;B&#39;, get response</p>\n\n<p>  digitalWrite(SS_PIN, HIGH);  // Deselect slave</p>\n\n<p>  Serial.print(&quot;Sent: AB, Received: &quot;);</p>\n<p>  Serial.write(response1);</p>\n<p>  Serial.write(response2);</p>\n<p>  Serial.println();</p>\n\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n<p>---</p>\n\n"
    },
    {
      "id": "modul-2-4-memory-management",
      "emoji": "📘",
      "title": "**💾 Modul 2.4: Memory Management**",
      "body": "\n<h3><strong>💿 EEPROM - Persistent Storage</strong></h3>\n\n<p>EEPROM menyimpan data yang bertahan saat Arduino mati:</p>\n<ul>\n<li><strong>Size</strong>: 1KB (ATmega328P)</li>\n<li><strong>Endurance</strong>: ~100,000 write cycles</li>\n<li><strong>Access</strong>: Byte-level read/write</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">#include &lt;EEPROM.h&gt;\n\n<p>struct Settings {</p>\n<p>  int brightness;</p>\n<p>  float temperature_offset;</p>\n<p>  bool auto_mode;</p>\n<p>  char device_name[16];</p>\n<p>};</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  Serial.println(&quot;EEPROM Settings Manager&quot;);</p>\n\n<p>  // Load settings from EEPROM</p>\n<p>  Settings mySettings;</p>\n<p>  loadSettings(mySettings);</p>\n\n<p>  Serial.println(&quot;Current settings:&quot;);</p>\n<p>  printSettings(mySettings);</p>\n\n<p>  // Modify and save new settings</p>\n<p>  mySettings.brightness = 150;</p>\n<p>  mySettings.temperature_offset = -2.5;</p>\n<p>  mySettings.auto_mode = true;</p>\n<p>  strcpy(mySettings.device_name, &quot;Arduino-01&quot;);</p>\n\n<p>  saveSettings(mySettings);</p>\n<p>  Serial.println(&quot;Settings saved to EEPROM&quot;);</p>\n<p>}</p>\n\n<p>void loadSettings(Settings &amp;settings) {</p>\n<p>  EEPROM.get(0, settings);</p>\n\n<p>  // Check if EEPROM has valid data (simple validation)</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>  if (settings.brightness &lt; 0 || settings.brightness &gt; 255) {</pre></div>\n<p>    // Load defaults if invalid</p>\n<p>    settings.brightness = 100;</p>\n<p>    settings.temperature_offset = 0.0;</p>\n<p>    settings.auto_mode = false;</p>\n<p>    strcpy(settings.device_name, &quot;Arduino&quot;);</p>\n\n<p>    Serial.println(&quot;Loading default settings (EEPROM empty/corrupted)&quot;);</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void saveSettings(const Settings &amp;settings) {</p>\n<p>  EEPROM.put(0, settings);</p>\n<p>}</p>\n\n<p>void printSettings(const Settings &amp;settings) {</p>\n<p>  Serial.println(&quot;Brightness: &quot; + String(settings.brightness));</p>\n<p>  Serial.println(&quot;Temperature Offset: &quot; + String(settings.temperature_offset));</p>\n<p>  Serial.println(&quot;Auto Mode: &quot; + String(settings.auto_mode ? &quot;ON&quot; : &quot;OFF&quot;));</p>\n<p>  Serial.println(&quot;Device Name: &quot; + String(settings.device_name));</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Main program logic here</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🧠 SRAM Optimization</strong></h3>\n\n<p>Arduino Uno hanya memiliki 2KB SRAM - harus digunakan secara efisien:</p>\n\n<pre><code class=\"lang-cpp\">// ❌ BURUK: Boros memory\n<p>String messages[10];              // Setiap String = ~20 bytes overhead</p>\n<p>int largeArray[500];              // 1000 bytes!</p>\n<p>float sensorData[100];            // 400 bytes</p>\n\n<p>void badFunction() {</p>\n<p>  String temp = &quot;This is a long message that consumes memory&quot;;</p>\n<p>  Serial.println(temp);           // String temporary object</p>\n<p>}</p>\n\n<p>// ✅ BAIK: Hemat memory</p>\n<p>const char* messages[10];         // Pointer ke flash memory</p>\n<p>int largeArray[200];              // Lebih kecil tapi masih fungsional</p>\n<p>byte compactData[100];            // 1 byte per item vs 4 bytes</p>\n\n<p>void goodFunction() {</p>\n<p>  Serial.println(F(&quot;This string stored in flash memory&quot;));  // F() macro</p>\n<p>}</p>\n\n<p>// Monitoring memory usage</p>\n<p>int freeRAM() {</p>\n<p>  extern int __heap_start, *__brkval;</p>\n<p>  int v;</p>\n<p>  return (int) &amp;v - (__brkval == 0 ? (int) &amp;__heap_start : (int) __brkval);</p>\n<p>}</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  Serial.println(&quot;Free RAM: &quot; + String(freeRAM()) + &quot; bytes&quot;);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>⚡ Flash Memory &amp; PROGMEM</strong></h3>\n\n<p>Simpan data konstan di Flash untuk menghemat SRAM:</p>\n\n<pre><code class=\"lang-cpp\">#include &lt;avr/pgmspace.h&gt;\n\n<p>// Store in flash memory instead of SRAM</p>\n<p>const char string_0[] PROGMEM = &quot;String 0&quot;;</p>\n<p>const char string_1[] PROGMEM = &quot;This is string 1&quot;;</p>\n<p>const char string_2[] PROGMEM = &quot;This is string 2&quot;;</p>\n<p>const char string_3[] PROGMEM = &quot;This is string 3&quot;;</p>\n\n<p>const char* const string_table[] PROGMEM = {</p>\n<p>  string_0,</p>\n<p>  string_1, </p>\n<p>  string_2,</p>\n<p>  string_3</p>\n<p>};</p>\n\n<p>// Large lookup table in flash</p>\n<p>const int sineTable[] PROGMEM = {</p>\n<p>  0, 6, 13, 19, 25, 31, 37, 44, 50, 56, 62, 68, 74, 80, 86, 92,</p>\n<p>  98, 104, 109, 115, 120, 126, 131, 136, 142, 147, 152, 157, 162, 167, 171, 176</p>\n<p>  // ... more values</p>\n<p>};</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  char buffer[50];</p>\n\n<p>  // Read string from flash</p>\n<p>  for (int i = 0; i &lt; 4; i++) {</p>\n<p>    strcpy_P(buffer, (char*)pgm_read_word(&amp;(string_table[i])));</p>\n<p>    Serial.println(&quot;String &quot; + String(i) + &quot;: &quot; + buffer);</p>\n<p>  }</p>\n\n<p>  // Read values from flash table</p>\n<p>  for (int i = 0; i &lt; 10; i++) {</p>\n<p>    int value = pgm_read_word(&amp;(sineTable[i]));</p>\n<p>    Serial.println(&quot;Sine[&quot; + String(i) + &quot;] = &quot; + String(value));</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Program logic</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-2-5-timer-dan-interrupt",
      "emoji": "💡",
      "title": "**⏰ Modul 2.5: Timer dan Interrupt**",
      "body": "\n<h3><strong>⏱️ millis() vs delay() - Non-blocking Programming</strong></h3>\n\n<p><code>delay()</code> memblokir eksekusi program. Gunakan <code>millis()</code> untuk multitasking:</p>\n\n<pre><code class=\"lang-cpp\">// ❌ BURUK: Blocking code\n<p>void badBlink() {</p>\n<p>  digitalWrite(13, HIGH);</p>\n<p>  delay(1000);                    // Program terhenti 1 detik</p>\n<p>  digitalWrite(13, LOW);</p>\n<p>  delay(1000);                    // Program terhenti 1 detik lagi</p>\n<p>}</p>\n\n<p>// ✅ BAIK: Non-blocking code</p>\n<p>unsigned long previousMillis = 0;</p>\n<p>const long interval = 1000;</p>\n<p>bool ledState = false;</p>\n\n<p>void goodBlink() {</p>\n<p>  unsigned long currentMillis = millis();</p>\n\n<p>  if (currentMillis - previousMillis &gt;= interval) {</p>\n<p>    previousMillis = currentMillis;</p>\n<p>    ledState = !ledState;</p>\n<p>    digitalWrite(13, ledState);</p>\n<p>  }</p>\n<p>}</p>\n\n<p>// Multi-task example</p>\n<p>unsigned long led1Previous = 0;</p>\n<p>unsigned long led2Previous = 0;</p>\n<p>unsigned long sensorPrevious = 0;</p>\n\n<p>const long led1Interval = 500;    // LED 1 blink fast</p>\n<p>const long led2Interval = 1500;   // LED 2 blink slow</p>\n<p>const long sensorInterval = 2000; // Read sensor every 2s</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(12, OUTPUT);  // LED 1</p>\n<p>  pinMode(13, OUTPUT);  // LED 2</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  unsigned long currentMillis = millis();</p>\n\n<p>  // Task 1: Fast LED blink</p>\n<p>  if (currentMillis - led1Previous &gt;= led1Interval) {</p>\n<p>    led1Previous = currentMillis;</p>\n<p>    digitalWrite(12, !digitalRead(12));</p>\n<p>  }</p>\n\n<p>  // Task 2: Slow LED blink</p>\n<p>  if (currentMillis - led2Previous &gt;= led2Interval) {</p>\n<p>    led2Previous = currentMillis;</p>\n<p>    digitalWrite(13, !digitalRead(13));</p>\n<p>  }</p>\n\n<p>  // Task 3: Read sensor</p>\n<p>  if (currentMillis - sensorPrevious &gt;= sensorInterval) {</p>\n<p>    sensorPrevious = currentMillis;</p>\n<p>    int sensorValue = analogRead(A0);</p>\n<p>    Serial.println(&quot;Sensor: &quot; + String(sensorValue));</p>\n<p>  }</p>\n\n<p>  // Task 4: Check serial commands</p>\n<p>  if (Serial.available()) {</p>\n<p>    String command = Serial.readString();</p>\n<p>    Serial.println(&quot;Command received: &quot; + command);</p>\n<p>  }</p>\n\n<p>  // All tasks run &quot;simultaneously&quot;!</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>⚡ External Interrupts</strong></h3>\n\n<p>Interrupt memungkinkan respons instan terhadap event eksternal:</p>\n\n<pre><code class=\"lang-cpp\">volatile bool buttonPressed = false;\n<p>volatile unsigned long lastInterruptTime = 0;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n<p>  pinMode(2, INPUT_PULLUP);       // Interrupt pin</p>\n<p>  pinMode(13, OUTPUT);            // LED</p>\n\n<p>  // Attach interrupt: pin 2 (INT0), falling edge, call ISR function</p>\n<p>  attachInterrupt(digitalPinToInterrupt(2), buttonISR, FALLING);</p>\n\n<p>  Serial.println(&quot;External Interrupt Example&quot;);</p>\n<p>  Serial.println(&quot;Press button on pin 2&quot;);</p>\n<p>}</p>\n\n<p>// Interrupt Service Routine (ISR)</p>\n<p>void buttonISR() {</p>\n<p>  unsigned long interruptTime = millis();</p>\n\n<p>  // Simple debouncing</p>\n<p>  if (interruptTime - lastInterruptTime &gt; 200) {</p>\n<p>    buttonPressed = true;</p>\n<p>    lastInterruptTime = interruptTime;</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Check if button was pressed (in interrupt)</p>\n<p>  if (buttonPressed) {</p>\n<p>    buttonPressed = false;        // Reset flag</p>\n\n<p>    Serial.println(&quot;⚡ Button pressed! (via interrupt)&quot;);</p>\n\n<p>    // Toggle LED</p>\n<p>    digitalWrite(13, !digitalRead(13));</p>\n\n<p>    // Do some time-critical task immediately</p>\n<p>    for (int i = 0; i &lt; 5; i++) {</p>\n<p>      digitalWrite(13, HIGH);</p>\n<p>      delay(50);</p>\n<p>      digitalWrite(13, LOW);</p>\n<p>      delay(50);</p>\n<p>    }</p>\n<p>  }</p>\n\n<p>  // Main program continues normally</p>\n<p>  static unsigned long lastPrint = 0;</p>\n<p>  if (millis() - lastPrint &gt;= 1000) {</p>\n<p>    lastPrint = millis();</p>\n<p>    Serial.println(&quot;Main loop running... &quot; + String(millis()));</p>\n<p>  }</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>⏲️ Timer Interrupts (Advanced)</strong></h3>\n\n<p>Timer interrupt untuk eksekusi berkala yang presisi:</p>\n\n<pre><code class=\"lang-cpp\">// Timer interrupt untuk sampling sensor presisi\n<p>volatile bool sampleSensor = false;</p>\n<p>volatile int sampleCount = 0;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(9600);</p>\n\n<p>  // Setup Timer1 for 1Hz interrupt (1 second)</p>\n<p>  noInterrupts();           // Disable interrupts</p>\n\n<p>  TCCR1A = 0;               // Clear Timer1 registers</p>\n<p>  TCCR1B = 0;</p>\n<p>  TCNT1 = 0;                // Initialize counter value to 0</p>\n\n<p>  // Set compare match register for 1Hz increments</p>\n<p>  OCR1A = 15624;            // = (16<em>10^6) / (1</em>1024) - 1 (1Hz with 1024 prescaler)</p>\n\n<p>  TCCR1B |= (1 &lt;&lt; WGM12);   // Turn on CTC mode</p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>  TCCR1B |= (1 &lt;&lt; CS12) | (1 &lt;&lt; CS10);  // Set 1024 prescaler</pre></div>\n<p>  TIMSK1 |= (1 &lt;&lt; OCIE1A);  // Enable timer compare interrupt</p>\n\n<p>  interrupts();             // Enable interrupts</p>\n\n<p>  Serial.println(&quot;Timer interrupt setup complete&quot;);</p>\n<p>}</p>\n\n<p>// Timer1 interrupt service routine</p>\n<p>ISR(TIMER1_COMPA_vect) {</p>\n<p>  sampleSensor = true;</p>\n<p>  sampleCount++;</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Check if timer triggered sensor sampling</p>\n<p>  if (sampleSensor) {</p>\n<p>    sampleSensor = false;   // Reset flag</p>\n\n<p>    // Time-critical sensor reading</p>\n<p>    int sensorValue = analogRead(A0);</p>\n<p>    float voltage = (sensorValue / 1023.0) * 5.0;</p>\n\n<p>    Serial.print(&quot;Sample #&quot;);</p>\n<p>    Serial.print(sampleCount);</p>\n<p>    Serial.print(&quot;: &quot;);</p>\n<p>    Serial.print(voltage);</p>\n<p>    Serial.println(&quot;V&quot;);</p>\n<p>  }</p>\n\n<p>  // Other non-time-critical tasks</p>\n<p>  if (Serial.available()) {</p>\n<p>    String command = Serial.readString();</p>\n<p>    command.trim();</p>\n\n<p>    if (command == &quot;RESET&quot;) {</p>\n<p>      sampleCount = 0;</p>\n<p>      Serial.println(&quot;Sample counter reset&quot;);</p>\n<p>    }</p>\n<p>  }</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    }
  ],
  "soal": [
    {
      "q": "Mengapa DHT22 perlu delay 2 detik antar pembacaan?",
      "opts": [
        "Karena sensor butuh stabilisasi dan sampling max 0.5Hz",
        "Karena Arduino lambat",
        "Karena kabel panjang",
        "Tidak perlu delay"
      ],
      "ans": 0,
      "exp": "DHT22 max 0.5Hz, butuh 2 detik antar baca."
    },
    {
      "q": "Apa perbedaan I2C dan SPI dalam hal kecepatan dan wiring?",
      "opts": [
        "I2C 2 kabel 100kHz-3.4MHz, SPI 4 kabel hingga puluhan Mbps",
        "Sama saja",
        "I2C lebih cepat",
        "SPI hanya 1 kabel"
      ],
      "ans": 0,
      "exp": "I2C 2 kabel, SPI 4 kabel high-speed."
    },
    {
      "q": "Kapan sebaiknya menggunakan EEPROM vs variabel biasa?",
      "opts": [
        "Untuk data yang harus tahan saat mati",
        "Untuk data sementara",
        "Tidak pernah",
        "Hanya untuk String"
      ],
      "ans": 0,
      "exp": "EEPROM untuk data persisten."
    },
    {
      "q": "Mengapa millis() lebih baik dari delay() untuk multitasking?",
      "opts": [
        "millis() non-blocking, delay() blokir CPU",
        "delay() lebih akurat",
        "Sama saja",
        "millis() boros memory"
      ],
      "ans": 0,
      "exp": "millis() non-blocking."
    },
    {
      "q": "Apa keuntungan interrupt untuk button?",
      "opts": [
        "Respons instan tanpa polling",
        "Lebih boros daya",
        "Tidak ada keuntungan",
        "Hanya untuk LED"
      ],
      "ans": 0,
      "exp": "Interrupt respons instan."
    }
  ],
  "contoh": [
    {
      "judul": "Weather Station",
      "soal": "Bagaimana membangun stasiun cuaca dengan DHT22, BMP180, LCD dan SD card logger?",
      "langkah": [
        "Siapkan DHT22 di pin 2, BMP180 via I2C (A4/A5), LCD 20x4 I2C 0x27",
        "Inisialisasi library DHT, Wire, LiquidCrystal_I2C, SD, RTClib",
        "Baca sensor tiap 2 detik, hitung heat index",
        "Tampilkan di LCD baris 1: tanggal, baris 2-4: suhu/lembab/light",
        "Log ke SD card tiap menit format CSV, cek alert suhu/lembab/cahaya"
      ]
    }
  ]
},
{
  "id": "esp32-iot-lengkap",
  "emoji": "📶",
  "title": "ESP32 & IoT Lengkap",
  "subtitle": "WiFi, web server, IoT protocols & cloud",
  "level": "Lanjutan",
  "durasi": "±6-10 minggu",
  "materi": [
    "Pengenalan IoT",
    "WiFi",
    "Web Server",
    "IoT Protocols",
    "Bluetooth"
  ],
  "sections": [
    {
      "id": "intro",
      "emoji": "📖",
      "title": "Pendahuluan",
      "body": "<h2>🎯 <strong>LEVEL 3: LANJUTAN - IoT dengan ESP32</strong></h2>\n<p><em>Durasi: 6-10 minggu | Target: Menguasai IoT development dan wireless communication</em></p>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-3-1-pengenalan-iot-dan-e",
      "emoji": "💡",
      "title": "**🚀 Modul 3.1: Pengenalan IoT dan ESP32**",
      "body": "\n<h3><strong>🌐 Konsep Internet of Things (IoT)</strong></h3>\n\n<p>IoT adalah jaringan perangkat fisik yang terhubung internet untuk berbagi data dan kontrol remote:</p>\n\n<p><strong>Arsitektur IoT:</strong></p>\n<pre><code class=\"lang-\">Device Layer (Sensors, Actuators)\n<p>    ↕</p>\n<p>Connectivity Layer (WiFi, Bluetooth, LoRa)</p>\n<p>    ↕</p>\n<p>Data Processing (Edge/Cloud)</p>\n<p>    ↕</p>\n<p>Application Layer (Web App, Mobile App)</p>\n<p>    ↕</p>\n<p>Business Layer (Analytics, Decision Making)</p>\n</code></pre>\n\n<p><strong>Karakteristik IoT:</strong></p>\n<ul>\n<li><strong>Connectivity</strong>: WiFi, Bluetooth, Cellular, LoRa</li>\n<li><strong>Data Collection</strong>: Sensor readings, status monitoring</li>\n<li><strong>Remote Control</strong>: Aktuator control via internet</li>\n<li><strong>Intelligence</strong>: Data analysis dan automated decisions</li>\n<li><strong>Scalability</strong>: Ribuan device dalam satu network</li>\n</ul>\n\n<h3><strong>🔥 ESP32 - IoT Powerhouse</strong></h3>\n\n<p>ESP32 adalah System-on-Chip (SoC) yang ideal untuk IoT:</p>\n\n<p><strong>Spesifikasi Teknis:</strong></p>\n<pre><code class=\"lang-\">CPU: Dual-core Xtensa LX6 @ 240MHz\n<p>RAM: 520KB SRAM</p>\n<p>Flash: 4MB (external)</p>\n<p>WiFi: 802.11 b/g/n (2.4GHz)</p>\n<p>Bluetooth: v4.2 BR/EDR dan BLE</p>\n<p>GPIO: 34 pins (beberapa input-only)</p>\n<p>ADC: 18 channels, 12-bit</p>\n<p>DAC: 2 channels, 8-bit</p>\n<p>PWM: 16 channels</p>\n<p>Interfaces: 3×UART, 3×SPI, 2×I2C, I2S</p>\n<p>Power: 3.3V logic level</p>\n</code></pre>\n\n<p><strong>ESP32 vs Arduino Uno:</strong></p>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| Feature | Arduino Uno | ESP32 DevKitC |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>|---------|-------------|---------------|</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| CPU | 8-bit 16MHz | Dual-core 32-bit 240MHz |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| RAM | 2KB | 520KB |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| Flash | 32KB | 4MB |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| WiFi/BT | ❌ | ✅ |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| GPIO | 14 digital + 6 analog | 25 usable GPIO |</pre></div>\n<div style='overflow-x:auto'><pre style='font-size:12px; background:var(--bg3); padding:8px; border-radius:6px;'>| Voltage | 5V tolerant | 3.3V (⚠️ NOT 5V tolerant) |</pre></div>\n\n<h3><strong>📍 ESP32 DevKitC Pinout</strong></h3>\n\n<pre><code class=\"lang-\">                     ESP32 DevKitC v4 Pinout\n<p>                           (Top View)</p>\n\n<p>                      3V3  [●]  [●] GND</p>\n<p>                     EN   [●]  [●] GPIO23</p>\n<p>                  GPIO36  [●]  [●] GPIO22 (I2C SCL)</p>\n<p>                  GPIO39  [●]  [●] GPIO1 (TX)</p>\n<p>                  GPIO34  [●]  [●] GPIO3 (RX)</p>\n<p>                  GPIO35  [●]  [●] GPIO21 (I2C SDA)</p>\n<p>                  GPIO32  [●]  [●] GND</p>\n<p>                  GPIO33  [●]  [●] GPIO19 (SPI MISO)</p>\n<p>                  GPIO25  [●]  [●] GPIO18 (SPI SCK)</p>\n<p>                  GPIO26  [●]  [●] GPIO5 (SPI SS)</p>\n<p>                  GPIO27  [●]  [●] GPIO17</p>\n<p>                  GPIO14  [●]  [●] GPIO16</p>\n<p>                  GPIO12  [●]  [●] GPIO4</p>\n<p>                     GND  [●]  [●] GPIO0 (Boot)</p>\n<p>                  GPIO13  [●]  [●] GPIO2 (LED_BUILTIN)</p>\n<p>                   GPIO9  [●]  [●] GPIO15</p>\n<p>                  GPIO10  [●]  [●] GPIO8</p>\n<p>                  GPIO11  [●]  [●] GPIO7</p>\n<p>                     VIN  [●]  [●] GPIO6</p>\n\n<p>⚠️ PENTING: </p>\n<ul>\n<li>GPIO 6,7,8,9,10,11: Terhubung ke flash, JANGAN digunakan</li>\n<li>GPIO 0: Boot pin, hindari pullup external</li>\n<li>GPIO 2: Built-in LED, safe untuk output</li>\n<li>GPIO 34,35,36,39: Input-only, tidak ada pullup internal</li>\n</ul>\n</code></pre>\n\n<h3><strong>💻 Setup ESP32 di Arduino IDE</strong></h3>\n\n<p><strong>Langkah 1: Install ESP32 Board Package</strong></p>\n<ol>\n<li>Buka Arduino IDE</li>\n<li>File &gt; Preferences</li>\n<li>Tambahkan URL di &quot;Additional Boards Manager URLs&quot;:</li>\n</ol>\n   <pre><code class=\"lang-\">   https://espressif.github.io/arduino-esp32/package_esp32_index.json\n   </code></pre>\n<ol>\n<li>Tools &gt; Board &gt; Boards Manager</li>\n<li>Cari &quot;esp32&quot; dan install &quot;ESP32 by Espressif Systems&quot;</li>\n</ol>\n\n<p><strong>Langkah 2: Select Board &amp; Port</strong></p>\n<ol>\n<li>Tools &gt; Board &gt; ESP32 Arduino &gt; &quot;ESP32 Dev Module&quot;</li>\n<li>Tools &gt; Port &gt; pilih port COM ESP32</li>\n<li>Tools &gt; Upload Speed &gt; &quot;921600&quot; (lebih cepat)</li>\n<li>Tools &gt; Flash Frequency &gt; &quot;80MHz&quot;</li>\n</ol>\n\n<p><strong>Langkah 3: Test Program</strong></p>\n<pre><code class=\"lang-cpp\">void setup() {\n<p>  Serial.begin(115200);</p>\n<p>  Serial.println(&quot;ESP32 Test Program&quot;);</p>\n\n<p>  // Built-in LED di GPIO 2</p>\n<p>  pinMode(2, OUTPUT);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  digitalWrite(2, HIGH);</p>\n<p>  Serial.println(&quot;LED ON&quot;);</p>\n<p>  delay(1000);</p>\n\n<p>  digitalWrite(2, LOW);</p>\n<p>  Serial.println(&quot;LED OFF&quot;);</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-3-2-wifi-programming",
      "emoji": "📘",
      "title": "**📶 Modul 3.2: WiFi Programming**",
      "body": "\n<h3><strong>🔌 WiFi Connection Basics</strong></h3>\n\n<p>ESP32 bisa beroperasi dalam 3 mode WiFi:</p>\n<ul>\n<li><strong>Station (STA)</strong>: Terhubung ke router existing</li>\n<li><strong>Access Point (AP)</strong>: Membuat hotspot sendiri</li>\n<li><strong>AP+STA</strong>: Kedua mode bersamaan</li>\n</ul>\n\n<pre><code class=\"lang-cpp\">#include &quot;WiFi.h&quot;\n\n<p>const char* ssid = &quot;YOUR_WIFI_SSID&quot;;</p>\n<p>const char* password = &quot;YOUR_WIFI_PASSWORD&quot;;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(115200);</p>\n\n<p>  // Start WiFi connection</p>\n<p>  WiFi.begin(ssid, password);</p>\n<p>  Serial.print(&quot;Connecting to WiFi&quot;);</p>\n\n<p>  while (WiFi.status() != WL_CONNECTED) {</p>\n<p>    delay(500);</p>\n<p>    Serial.print(&quot;.&quot;);</p>\n<p>  }</p>\n\n<p>  Serial.println(&quot;&quot;);</p>\n<p>  Serial.println(&quot;✅ WiFi connected!&quot;);</p>\n<p>  Serial.print(&quot;IP address: &quot;);</p>\n<p>  Serial.println(WiFi.localIP());</p>\n<p>  Serial.print(&quot;Signal strength: &quot;);</p>\n<p>  Serial.println(WiFi.RSSI());</p>\n<p>  Serial.print(&quot;MAC address: &quot;);</p>\n<p>  Serial.println(WiFi.macAddress());</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Check WiFi status</p>\n<p>  if (WiFi.status() == WL_CONNECTED) {</p>\n<p>    Serial.println(&quot;WiFi: Connected (&quot; + String(WiFi.RSSI()) + &quot; dBm)&quot;);</p>\n<p>  } else {</p>\n<p>    Serial.println(&quot;WiFi: Disconnected!&quot;);</p>\n<p>  }</p>\n\n<p>  delay(5000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔄 WiFi Reconnection &amp; Management</strong></h3>\n\n<p>Implementasi robust WiFi connection dengan auto-reconnect:</p>\n\n<pre><code class=\"lang-cpp\">#include &quot;WiFi.h&quot;\n\n<p>// Multiple WiFi credentials</p>\n<p>struct WiFiCredential {</p>\n<p>  const char* ssid;</p>\n<p>  const char* password;</p>\n<p>};</p>\n\n<p>WiFiCredential wifiList[] = {</p>\n<p>  {&quot;Home_WiFi&quot;, &quot;password123&quot;},</p>\n<p>  {&quot;Office_WiFi&quot;, &quot;office_pass&quot;},</p>\n<p>  {&quot;Mobile_Hotspot&quot;, &quot;mobile123&quot;}</p>\n<p>};</p>\n\n<p>const int wifiCount = sizeof(wifiList) / sizeof(wifiList[0]);</p>\n\n<p>unsigned long lastReconnectAttempt = 0;</p>\n<p>const unsigned long reconnectInterval = 30000; // 30 seconds</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(115200);</p>\n<p>  connectToWiFi();</p>\n<p>}</p>\n\n<p>void connectToWiFi() {</p>\n<p>  WiFi.mode(WIFI_STA);</p>\n\n<p>  for (int i = 0; i &lt; wifiCount; i++) {</p>\n<p>    Serial.println(&quot;Trying: &quot; + String(wifiList[i].ssid));</p>\n<p>    WiFi.begin(wifiList[i].ssid, wifiList[i].password);</p>\n\n<p>    // Wait up to 10 seconds for connection</p>\n<p>    int attempts = 0;</p>\n<p>    while (WiFi.status() != WL_CONNECTED &amp;&amp; attempts &lt; 20) {</p>\n<p>      delay(500);</p>\n<p>      Serial.print(&quot;.&quot;);</p>\n<p>      attempts++;</p>\n<p>    }</p>\n\n<p>    if (WiFi.status() == WL_CONNECTED) {</p>\n<p>      Serial.println(&quot;&quot;);</p>\n<p>      Serial.println(&quot;✅ Connected to: &quot; + String(wifiList[i].ssid));</p>\n<p>      Serial.println(&quot;IP: &quot; + WiFi.localIP().toString());</p>\n<p>      return;</p>\n<p>    }</p>\n\n<p>    Serial.println(&quot; Failed!&quot;);</p>\n<p>  }</p>\n\n<p>  Serial.println(&quot;❌ All WiFi attempts failed!&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Check WiFi status and reconnect if needed</p>\n<p>  if (WiFi.status() != WL_CONNECTED) {</p>\n<p>    if (millis() - lastReconnectAttempt &gt;= reconnectInterval) {</p>\n<p>      lastReconnectAttempt = millis();</p>\n<p>      Serial.println(&quot;🔄 WiFi disconnected, attempting reconnect...&quot;);</p>\n<p>      connectToWiFi();</p>\n<p>    }</p>\n<p>  }</p>\n\n<p>  // Your main program here</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>📡 Access Point Mode</strong></h3>\n\n<p>ESP32 sebagai WiFi hotspot:</p>\n\n<pre><code class=\"lang-cpp\">#include &quot;WiFi.h&quot;\n<p>#include &quot;WebServer.h&quot;</p>\n\n<p>const char* ap_ssid = &quot;ESP32-Setup&quot;;</p>\n<p>const char* ap_password = &quot;123456789&quot;;</p>\n\n<p>WebServer server(80);</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(115200);</p>\n\n<p>  // Start Access Point</p>\n<p>  WiFi.softAP(ap_ssid, ap_password);</p>\n<p>  Serial.println(&quot;✅ Access Point Started&quot;);</p>\n<p>  Serial.print(&quot;AP IP address: &quot;);</p>\n<p>  Serial.println(WiFi.softAPIP());</p>\n<p>  Serial.print(&quot;Connect to WiFi: &quot;);</p>\n<p>  Serial.println(ap_ssid);</p>\n\n<p>  // Setup web server routes</p>\n<p>  server.on(&quot;/&quot;, handleRoot);</p>\n<p>  server.on(&quot;/status&quot;, handleStatus);</p>\n<p>  server.on(&quot;/scan&quot;, handleScan);</p>\n<p>  server.begin();</p>\n\n<p>  Serial.println(&quot;🌐 Web server started&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  server.handleClient();</p>\n\n<p>  // Print connected devices info every 10 seconds</p>\n<p>  static unsigned long lastPrint = 0;</p>\n<p>  if (millis() - lastPrint &gt;= 10000) {</p>\n<p>    lastPrint = millis();</p>\n<p>    Serial.println(&quot;Connected devices: &quot; + String(WiFi.softAPgetStationNum()));</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void handleRoot() {</p>\n<p>  String html = &quot;&lt;html&gt;&lt;body&gt;&quot;;</p>\n<p>  html += &quot;&lt;h1&gt;ESP32 Setup Portal&lt;/h1&gt;&quot;;</p>\n<p>  html += &quot;&lt;p&gt;&lt;a href=&#39;/status&#39;&gt;System Status&lt;/a&gt;&lt;/p&gt;&quot;;</p>\n<p>  html += &quot;&lt;p&gt;&lt;a href=&#39;/scan&#39;&gt;WiFi Scan&lt;/a&gt;&lt;/p&gt;&quot;;</p>\n<p>  html += &quot;&lt;form action=&#39;/connect&#39; method=&#39;POST&#39;&gt;&quot;;</p>\n<p>  html += &quot;SSID: &lt;input type=&#39;text&#39; name=&#39;ssid&#39;&gt;&lt;br&gt;&quot;;</p>\n<p>  html += &quot;Password: &lt;input type=&#39;password&#39; name=&#39;password&#39;&gt;&lt;br&gt;&quot;;</p>\n<p>  html += &quot;&lt;input type=&#39;submit&#39; value=&#39;Connect&#39;&gt;&quot;;</p>\n<p>  html += &quot;&lt;/form&gt;&lt;/body&gt;&lt;/html&gt;&quot;;</p>\n\n<p>  server.send(200, &quot;text/html&quot;, html);</p>\n<p>}</p>\n\n<p>void handleStatus() {</p>\n<p>  String status = &quot;&lt;html&gt;&lt;body&gt;&quot;;</p>\n<p>  status += &quot;&lt;h2&gt;System Status&lt;/h2&gt;&quot;;</p>\n<p>  status += &quot;&lt;p&gt;Chip ID: &quot; + String((uint32_t)ESP.getEfuseMac()) + &quot;&lt;/p&gt;&quot;;</p>\n<p>  status += &quot;&lt;p&gt;Free Heap: &quot; + String(ESP.getFreeHeap()) + &quot; bytes&lt;/p&gt;&quot;;</p>\n<p>  status += &quot;&lt;p&gt;WiFi Mode: &quot; + String(WiFi.getMode()) + &quot;&lt;/p&gt;&quot;;</p>\n<p>  status += &quot;&lt;p&gt;AP IP: &quot; + WiFi.softAPIP().toString() + &quot;&lt;/p&gt;&quot;;</p>\n<p>  status += &quot;&lt;p&gt;Connected Devices: &quot; + String(WiFi.softAPgetStationNum()) + &quot;&lt;/p&gt;&quot;;</p>\n<p>  status += &quot;&lt;/body&gt;&lt;/html&gt;&quot;;</p>\n\n<p>  server.send(200, &quot;text/html&quot;, status);</p>\n<p>}</p>\n\n<p>void handleScan() {</p>\n<p>  String networks = &quot;&lt;html&gt;&lt;body&gt;&lt;h2&gt;Available Networks&lt;/h2&gt;&quot;;</p>\n\n<p>  int n = WiFi.scanNetworks();</p>\n<p>  for (int i = 0; i &lt; n; i++) {</p>\n<p>    networks += &quot;&lt;p&gt;&quot; + WiFi.SSID(i) + &quot; (&quot; + String(WiFi.RSSI(i)) + &quot; dBm)&quot;;</p>\n<p>    networks += (WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? &quot; [Open]&quot; : &quot; [Secured]&quot;;</p>\n<p>    networks += &quot;&lt;/p&gt;&quot;;</p>\n<p>  }</p>\n\n<p>  networks += &quot;&lt;/body&gt;&lt;/html&gt;&quot;;</p>\n<p>  server.send(200, &quot;text/html&quot;, networks);</p>\n<p>}</p>\n</code></pre>\n\n<h3><strong>🔧 WiFi Manager Library</strong></h3>\n\n<p>Gunakan library WiFiManager untuk setup yang lebih mudah:</p>\n\n<pre><code class=\"lang-cpp\">#include &lt;WiFi.h&gt;\n<p>#include &lt;WebServer.h&gt;</p>\n<p>#include &lt;WiFiManager.h&gt;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(115200);</p>\n\n<p>  WiFiManager wm;</p>\n\n<p>  // Reset settings (untuk testing)</p>\n<p>  // wm.resetSettings();</p>\n\n<p>  // Custom parameters</p>\n<p>  WiFiManagerParameter custom_device_name(&quot;device_name&quot;, &quot;Device Name&quot;, &quot;ESP32-Device&quot;, 40);</p>\n<p>  wm.addParameter(&amp;custom_device_name);</p>\n\n<p>  // Auto connect atau buka config portal</p>\n<p>  bool res = wm.autoConnect(&quot;ESP32-AutoConnect&quot;, &quot;password123&quot;);</p>\n\n<p>  if (!res) {</p>\n<p>    Serial.println(&quot;❌ Failed to connect&quot;);</p>\n<p>    ESP.restart();</p>\n<p>  } else {</p>\n<p>    Serial.println(&quot;✅ Connected to WiFi!&quot;);</p>\n<p>    Serial.println(&quot;IP: &quot; + WiFi.localIP().toString());</p>\n\n<p>    // Ambil custom parameter</p>\n<p>    String deviceName = custom_device_name.getValue();</p>\n<p>    Serial.println(&quot;Device Name: &quot; + deviceName);</p>\n<p>  }</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  // Program utama</p>\n<p>  delay(1000);</p>\n<p>}</p>\n</code></pre>\n\n<p>---</p>\n\n"
    },
    {
      "id": "modul-3-3-web-server-dan-http",
      "emoji": "💡",
      "title": "**🌐 Modul 3.3: Web Server dan HTTP**",
      "body": "\n<h3><strong>🖥️ Basic Web Server</strong></h3>\n\n<p>ESP32 bisa menjadi web server untuk kontrol dan monitoring:</p>\n\n<pre><code class=\"lang-cpp\">#include &quot;WiFi.h&quot;\n<p>#include &quot;WebServer.h&quot;</p>\n\n<p>const char* ssid = &quot;YOUR_WIFI_SSID&quot;;</p>\n<p>const char* password = &quot;YOUR_WIFI_PASSWORD&quot;;</p>\n\n<p>WebServer server(80);</p>\n\n<p>// GPIO pins</p>\n<p>const int LED_PIN = 2;</p>\n<p>const int SENSOR_PIN = 34;</p>\n\n<p>bool ledState = false;</p>\n\n<p>void setup() {</p>\n<p>  Serial.begin(115200);</p>\n<p>  pinMode(LED_PIN, OUTPUT);</p>\n<p>  pinMode(SENSOR_PIN, INPUT);</p>\n\n<p>  // Connect to WiFi</p>\n<p>  WiFi.begin(ssid, password);</p>\n<p>  while (WiFi.status() != WL_CONNECTED) {</p>\n<p>    delay(1000);</p>\n<p>    Serial.println(&quot;Connecting to WiFi...&quot;);</p>\n<p>  }</p>\n\n<p>  Serial.println(&quot;WiFi connected!&quot;);</p>\n<p>  Serial.print(&quot;IP address: &quot;);</p>\n<p>  Serial.println(WiFi.localIP());</p>\n\n<p>  // Setup server routes</p>\n<p>  server.on(&quot;/&quot;, handleRoot);</p>\n<p>  server.on(&quot;/led/on&quot;, handleLedOn);</p>\n<p>  server.on(&quot;/led/off&quot;, handleLedOff);</p>\n<p>  server.on(&quot;/led/toggle&quot;, handleLedToggle);</p>\n<p>  server.on(&quot;/sensor&quot;, handleSensor);</p>\n<p>  server.on(&quot;/api/status&quot;, handleAPIStatus);</p>\n\n<p>  server.begin();</p>\n<p>  Serial.println(&quot;🌐 Web server started&quot;);</p>\n<p>}</p>\n\n<p>void loop() {</p>\n<p>  server.handleClient();</p>\n<p>}</p>\n\n<p>void handleRoot() {</p>\n<p>  String html = R&quot;(</p>\n<p>&lt;!DOCTYPE html&gt;</p>\n<p>&lt;html&gt;</p>\n<p>&lt;head&gt;</p>\n<p>    &lt;title&gt;ESP32 Control Panel&lt;/title&gt;</p>\n<p>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</p>\n<p>    &lt;style&gt;</p>\n<p>        body { font-family: Arial; margin: 20px; }</p>\n<p>        .button { </p>\n<p>            background-color: #4CAF50; </p>\n<p>            color: white; </p>\n<p>            padding: 15px 25px; </p>\n<p>            text-decoration: none; </p>\n<p>            display: inline-block; </p>\n<p>            margin: 5px;</p>\n<p>            border-radius: 5px;</p>\n<p>        }</p>\n<p>        .button.off { background-color: #f44336; }</p>\n<p>        .sensor-data { </p>\n<p>            background-color: #f0f0f0; </p>\n<p>            padding: 10px; </p>\n<p>            margin: 10px 0;</p>\n<p>            border-radius: 5px;</p>\n<p>        }</p>\n<p>    &lt;/style&gt;</p>\n<p>    &lt;script&gt;</p>\n<p>        function updateSensor() {</p>\n<p>            fetch(&#39;/sensor&#39;)</p>\n<p>                .then(response =&gt; response.text())</p>\n<p>                .then(data =&gt; {</p>\n<p>                    document.getElementById(&#39;sensorValue&#39;).innerHTML = data;</p>\n<p>                });</p>\n<p>        }</p>\n<p>        setInterval(updateSensor, 2000);</p>\n<p>    &lt;/script&gt;</p>\n<p>&lt;/head&gt;</p>\n<p>&lt;body&gt;</p>\n<p>    &lt;h1&gt;ESP32 Control Panel&lt;/h1&gt;</p>\n\n<p>    &lt;h2&gt;LED Control&lt;/h2&gt;</p>\n<p>    &lt;a href=&quot;/led/on&quot; class=&quot;button&quot;&gt;LED ON&lt;/a&gt;</p>\n<p>    &lt;a href=&quot;/led/off&quot; class=&quot;button off&quot;&gt;LED OFF&lt;/a&gt;</p>\n<p>    &lt;a href=&quot;/led/toggle&quot; class=&quot;button&quot;&gt;TOGGLE&lt;/a&gt;</p>\n\n<p>    &lt;h2&gt;Sensor Data&lt;/h2&gt;</p>\n<p>    &lt;div class=&quot;sensor-data&quot;&gt;</p>\n<p>        &lt;p&gt;Sensor Value: &lt;span id=&quot;sensorValue&quot;&gt;Loading...&lt;/span&gt;&lt;/p&gt;</p>\n<p>    &lt;/div&gt;</p>\n\n<p>    &lt;p&gt;&lt;a href=&quot;/api/status&quot;&gt;API Status (JSON)&lt;/a&gt;&lt;/p&gt;</p>\n<p>&lt;/body&gt;</p>\n<p>&lt;/html&gt;</p>\n<p>)&quot;;</p>\n\n<p>  server.send(200, &quot;text/html&quot;, html);</p>\n<p>}</p>\n\n<p>void handleLedOn() {</p>\n<p>  digitalWrite(LED_PIN, HIGH);</p>\n<p>  ledState = true;</p>\n<p>  server.send(200, &quot;text/plain&quot;, &quot;LED turned ON&quot;);</p>\n<p>}</p>\n\n<p>void handleLedOff() {</p>\n<p>  digitalWrite(LED_PIN, LOW);</p>\n<p>  ledState = false;</p>\n<p>  server.send(200, &quot;text/plain&quot;, &quot;LED turned OFF&quot;);</p>\n<p>}</p>\n\n<p>void handleLedToggle() {</p>\n<p>  ledState = !ledState;</p>\n<p>  digitalWrite(LED_PIN, ledState);</p>\n<p>  server.send(200, &quot;text/plain&quot;, &quot;LED toggled: &quot; + String(ledState ? &quot;ON&quot; : &quot;OFF&quot;));</p>\n<p>}</p>\n\n<p>void handleSensor() {</p>\n<p>  int sensorValue = analogRead(SENSOR_PIN);</p>\n<p>  float voltage = (sensorValue / 4095.0) * 3.3;  // ESP32 ADC: 12-bit, 3.3V ref</p>\n\n<p>  server.send(200, &quot;text/plain&quot;, String(sensorValue) + &quot; (&quot; + String(voltage, 2) + &quot;V)&quot;);</p>\n<p>}</p>\n\n<p>void handleAPIStatus() {</p>\n<p>  String json = &quot;{&quot;;</p>\n<p>  json += &quot;\\&quot;device\\&quot;:\\&quot;ESP32\\&quot;,&quot;;</p>\n<p>  json += &quot;\\&quot;uptime\\&quot;:&quot; + String(millis()) + &quot;,&quot;;</p>\n<p>  json += &quot;\\&quot;wifi_rssi\\&quot;:&quot; + String(WiFi.RSSI()) + &quot;,&quot;;</p>\n<p>  json += &quot;\\&quot;free_heap\\&quot;:&quot; + String(ESP.getFreeHeap()) + &quot;,&quot;;</p>\n<p>  json += &quot;\\&quot;led_state\\&quot;:&quot; + String(ledState ? &quot;true&quot; : &quot;false&quot;) + &quot;,&quot;;</p>\n<p>  json += &quot;\\&quot;sensor_value\\&quot;:&quot; + String(analogRead(SENSOR_PIN));</p>\n<p>  json += &quot;}&quot;;</p>\n\n<p>  server.send(200, &quot;application/json&quot;, json);</p>\n<p>}</p>\n</code></pre>"
    }
  ],
  "soal": [
    {
      "q": "ESP32 vs Arduino Uno, perbedaan RAM?",
      "opts": [
        "2KB vs 520KB",
        "Sama",
        "ESP32 2KB",
        "Uno 520KB"
      ],
      "ans": 0,
      "exp": "Uno 2KB SRAM, ESP32 520KB."
    },
    {
      "q": "GPIO ESP32 yang input-only?",
      "opts": [
        "GPIO 34-39",
        "GPIO 0-5",
        "GPIO 6-11",
        "Semua"
      ],
      "ans": 0,
      "exp": "GPIO 34-39 input-only."
    },
    {
      "q": "Mode WiFi ESP32 untuk buat hotspot?",
      "opts": [
        "Access Point (AP)",
        "Station",
        "BLE",
        "Tidak ada"
      ],
      "ans": 0,
      "exp": "AP mode buat hotspot."
    }
  ],
  "contoh": [
    {
      "judul": "WiFi Web Server",
      "soal": "Bagaimana membuat ESP32 jadi web server untuk kontrol LED via browser?",
      "langkah": [
        "Include WiFi.h dan WebServer.h, define ssid/password",
        "WiFi.begin, tunggu WL_CONNECTED, print IP",
        "Buat route server.on('/', handleRoot) dengan HTML control",
        "Implement handleLedOn/Off/Toggle dan handleSensor",
        "loop: server.handleClient()"
      ]
    }
  ]
}
];

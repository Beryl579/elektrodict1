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
  }
];

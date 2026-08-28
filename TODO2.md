# TODO — Tambah Halaman DASHBOARD

> Halaman pertama yang muncul saat buka ElektroDict.
> Tab "DASHBOARD" menjadi default landing page, menggantikan Kamus.

---

## OVERVIEW

Dashboard adalah halaman sambutan yang menggabungkan:
- **Pengenalan web app** ElektroDict (siapa, apa, untuk siapa)
- **Progress & gamifikasi** — skor kuis, streak, badge, last visited
- **Ringkasan konten** — istilah hari ini, rumus populer, video terbaru
- **Quick access** — shortcut ke semua fitur utama
- Data disimpan di **localStorage**

---

## FILE YANG AKAN DIMODIFIKASI

- `index.html` — tambah tombol nav + section `#page-dashboard`
- `js/app.js` — ubah default tab ke `dashboard`, tambah logika switchTab untuk dashboard
- `js/modules/dashboard.js` — **FILE BARU** berisi semua logika dashboard
- `css/style.css` — tambah CSS untuk komponen dashboard

---

## TASK LIST

### TASK 1 — Buat file `js/modules/dashboard.js`

Isi modul ini:

#### 1A — Fungsi `initDashboard()`
- Dipanggil saat pertama kali tab dashboard dibuka
- Render semua section dashboard
- Baca data dari localStorage

#### 1B — Section: Hero / Pengenalan Web App
Konten statis berisi:
- Logo + nama **ElektroDict**
- Tagline: "Kamus, Materi & Lab Teknik Elektro — Belajar dari Nol hingga Mahir"
- Deskripsi singkat (~2 kalimat) tentang fitur utama
- Daftar fitur: Kamus 300+ istilah, AI ElektroBot, Latihan Soal, Materi Interaktif, Lab Proyek, Kalkulator, Konversi, dll.
- Tombol CTA: "Mulai Belajar →" → switchTab('kamus')

#### 1C — Section: Statistik Pengguna (dari localStorage)
Tampilkan 4 stat card:
- 🏆 Total skor kuis (akumulasi dari semua sesi)
- 🔥 Streak hari belajar (hari berturut-turut buka app)
- 📖 Istilah dilihat (count dari detail kamus yang dibuka)
- ✅ Kuis diselesaikan (jumlah sesi kuis yang tuntas)

Key localStorage:
```
ed_stat_quiz_score   → number (akumulasi skor %)
ed_stat_streak       → { count, lastDate }
ed_stat_terms_viewed → number
ed_stat_quiz_done    → number
```

#### 1D — Section: Istilah Hari Ini
- Ambil 1 istilah random dari `window.ENTRIES` berdasarkan tanggal (seed = tanggal hari ini → index konsisten sepanjang hari)
- Tampilkan: nama istilah, kategori badge, definisi singkat (50 kata pertama)
- Tombol "Lihat Detail" → buka kamus dan highlight istilah itu

#### 1E — Section: Quick Access (Shortcut Grid)
Grid 2×4 (desktop) / 2×4 (mobile) dengan shortcut:
- 📚 Kamus
- 🧠 Latihan Soal
- 📖 Materi
- 🔢 Kalkulator
- 🔄 Konversi
- 🎨 Resistor
- 🔬 Lab Proyek
- 🤖 Tanya AI

Setiap tile: ikon + label, klik → switchTab atau openGlobalChat()

#### 1F — Section: Aktivitas Terakhir
- Simpan 5 tab terakhir yang dibuka ke localStorage key `ed_recent_tabs`
- Tampilkan sebagai "Terakhir dibuka" chips/pills yang bisa diklik

#### 1G — Section: Rumus / Fakta Populer
- Array ~10 rumus/fakta teknik elektro yang sudah di-hardcode
- Tampilkan 3 random (berubah tiap refresh dashboard)
- Format: judul + formula LaTeX + keterangan singkat
- Render math dengan KaTeX

#### 1H — Fungsi helper untuk update stats
```js
ElektroDash.addQuizScore(pct)   // dipanggil dari quiz setelah selesai
ElektroDash.addTermView()       // dipanggil saat detail kamus dibuka
ElektroDash.updateStreak()      // dipanggil saat app dibuka (session start)
ElektroDash.addQuizDone()       // dipanggil saat kuis selesai
```
Expose sebagai `window.ElektroDash`

---

### TASK 2 — Update `index.html`

#### 2A — Tambah tombol nav di bottom-nav
Tambahkan **sebelum** `#bnav-kamus` (posisi pertama):
```html
<button class="bnav-item mobile-visible" id="bnav-dashboard" onclick="switchTab('dashboard')">
  <div class="bnav-dot"></div>
  <span class="bnav-icon"><!-- ikon home/dashboard --></span>
  <span class="bnav-label">Dashboard</span>
</button>
```
Dan versi desktop (tanpa `mobile-visible`, masuk section BELAJAR paling atas):
```html
<button class="bnav-item desktop-only" id="bnav-dashboard" onclick="switchTab('dashboard')">
  ...
</button>
```
Gunakan ikon grid/dashboard (SVG inline, konsisten dengan nav lainnya).

#### 2B — Tambah section `#page-dashboard`
Letakkan **sebelum** `#page-kamus`:
```html
<div class="page" id="page-dashboard">
  <!-- diisi oleh dashboard.js -->
</div>
```

#### 2C — Include script `dashboard.js`
Tambahkan di bawah script modul lainnya:
```html
<script src="js/modules/dashboard.js"></script>
```

---

### TASK 3 — Update `js/app.js`

#### 3A — Ubah default tab saat app load
Cari baris yang set `page-kamus` sebagai default:
```js
document.getElementById('page-kamus').classList.add('visible');
```
Ganti menjadi panggil `switchTab('dashboard')` setelah splash screen selesai, DAN set `page-dashboard` sebagai `on` secara default.

Juga update `bnav-kamus` yang punya class `on` di HTML → pindahkan ke `bnav-dashboard`.

#### 3B — Tambah handler di `switchTab()` untuk dashboard
```js
if (t === 'dashboard' && window.ElektroDash) window.ElektroDash.init();
```

#### 3C — Update `ed_recent_tabs` di setiap switchTab
Di awal `switchTab(t)`, simpan tab ke recent history:
```js
if (t !== 'dashboard') {
  const recent = JSON.parse(localStorage.getItem('ed_recent_tabs') || '[]');
  const updated = [t, ...recent.filter(x => x !== t)].slice(0, 5);
  localStorage.setItem('ed_recent_tabs', JSON.stringify(updated));
}
```

#### 3D — Panggil `ElektroDash.updateStreak()` saat app start
Tambahkan di bagian init app (setelah splash screen).

---

### TASK 4 — Update `css/style.css`

Tambahkan CSS baru di akhir file untuk komponen dashboard:

#### 4A — Layout utama dashboard
```css
.dash-wrap { max-width: 860px; margin: 0 auto; padding: 20px 16px 80px; }
```

#### 4B — Hero section
```css
.dash-hero { ... }          /* container hero */
.dash-hero-title { ... }    /* nama app + gradient */
.dash-hero-desc { ... }     /* deskripsi */
.dash-feature-pills { ... } /* daftar fitur sebagai pills */
.dash-cta { ... }           /* tombol CTA */
```

#### 4C — Stat cards
```css
.dash-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.dash-stat-card { ... }
.dash-stat-num { ... }     /* angka besar */
.dash-stat-label { ... }   /* label di bawah angka */
```
Di desktop (min-width: 768px): `grid-template-columns: repeat(4, 1fr)`

#### 4D — Section title
```css
.dash-section-title { ... }  /* h3 dengan garis bawah accent */
```

#### 4E — Istilah hari ini
```css
.dash-word-card { ... }   /* card besar dengan border accent */
.dash-word-name { ... }
.dash-word-cat { ... }
.dash-word-def { ... }
```

#### 4F — Quick access grid
```css
.dash-quick-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.dash-quick-item { ... }    /* tile dengan ikon + label */
/* Mobile: repeat(4, 1fr) juga (2 baris × 4 kolom) */
```

#### 4G — Recent tabs
```css
.dash-recent { display: flex; flex-wrap: wrap; gap: 8px; }
.dash-recent-chip { ... }
```

#### 4H — Rumus card
```css
.dash-formula-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
.dash-formula-card { ... }
.dash-formula-title { ... }
.dash-formula-math { ... }
.dash-formula-desc { ... }
```

---

## URUTAN EKSEKUSI

1. Buat `js/modules/dashboard.js` (TASK 1)
2. Update `index.html` — tambah nav button + page section + script tag (TASK 2)
3. Update `js/app.js` — ubah default tab + handler + streak (TASK 3)
4. Tambah CSS di `css/style.css` (TASK 4)
5. Pindahkan Kamus ke sheet "Lainnya" di mobile (TASK 5)
6. Verifikasi: dashboard muncul pertama, semua stat ter-render, shortcut berfungsi, KaTeX render rumus, Kamus muncul di sheet Lainnya (mobile) dan sidebar (desktop)

---

## TASK 5 — Pindahkan "Kamus" ke Bottom Sheet "Lainnya" (Mobile Only)

Di mode smartphone, slot bottom nav terbatas. Karena Dashboard sekarang jadi halaman utama, tombol **Kamus** dipindahkan ke dalam sheet "Lainnya" supaya tidak memenuhi bar bawah.

### 5A — Hapus `mobile-visible` dari `#bnav-kamus`
Di `index.html`, cari:
```html
<button class="bnav-item on mobile-visible" id="bnav-kamus" ...>
```
Ganti class menjadi `desktop-only` (tetap muncul di sidebar desktop, hilang di mobile bottom nav):
```html
<button class="bnav-item desktop-only" id="bnav-kamus" ...>
```

### 5B — Tambahkan item Kamus di dalam `.sheet-grid` (bottom sheet "Lainnya")
Di `index.html`, cari blok `<div class="sheet-grid">` dan tambahkan item Kamus **paling atas**:
```html
<div class="sheet-item" onclick="switchTab('kamus')">
  <div class="sheet-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:24px;height:24px;">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  </div>
  <div class="sheet-label">Kamus</div>
</div>
```

### 5C — Pastikan `#bnav-kamus` tidak ter-highlight di mobile saat `switchTab('kamus')`
Karena tombol `#bnav-kamus` tidak ada di mobile nav lagi, `switchTab` otomatis tidak akan menemukannya — tidak perlu perubahan logika. Tapi pastikan tidak ada class `on` yang nyangkut.

---

## URUTAN EKSEKUSI
- Dashboard tidak perlu AI — semua konten dari localStorage + data yang sudah ada di app
- Streak logic: bandingkan `lastDate` dengan today, jika kemarin → +1, jika hari ini → keep, jika lebih lama → reset ke 1
- `ElektroDash.addTermView()` dipanggil dari fungsi yang buka detail kamus (cari di app.js dan tambahkan)
- Mobile-first: pastikan dashboard enak dilihat di layar 375px

# TODO ΓÇö Tambah Halaman DASHBOARD

> Halaman pertama yang muncul saat buka ElektroDict.
> Tab "DASHBOARD" menjadi default landing page, menggantikan Kamus.

---

## OVERVIEW

Dashboard adalah halaman sambutan yang menggabungkan:
- **Pengenalan web app** ElektroDict (siapa, apa, untuk siapa)
- **Progress & gamifikasi** ΓÇö skor kuis, streak, badge, last visited
- **Ringkasan konten** ΓÇö istilah hari ini, rumus populer, video terbaru
- **Quick access** ΓÇö shortcut ke semua fitur utama
- Data disimpan di **localStorage**

---

## FILE YANG AKAN DIMODIFIKASI

- `index.html` ΓÇö tambah tombol nav + section `#page-dashboard`
- `js/app.js` ΓÇö ubah default tab ke `dashboard`, tambah logika switchTab untuk dashboard
- `js/modules/dashboard.js` ΓÇö **FILE BARU** berisi semua logika dashboard
- `css/style.css` ΓÇö tambah CSS untuk komponen dashboard

---

## TASK LIST

### TASK 1 ΓÇö Buat file `js/modules/dashboard.js`

Isi modul ini:

#### 1A ΓÇö Fungsi `initDashboard()`
- Dipanggil saat pertama kali tab dashboard dibuka
- Render semua section dashboard
- Baca data dari localStorage

#### 1B ΓÇö Section: Hero / Pengenalan Web App
Konten statis berisi:
- Logo + nama **ElektroDict**
- Tagline: "Kamus, Materi & Lab Teknik Elektro ΓÇö Belajar dari Nol hingga Mahir"
- Deskripsi singkat (~2 kalimat) tentang fitur utama
- Daftar fitur: Kamus 300+ istilah, AI ElektroBot, Latihan Soal, Materi Interaktif, Lab Proyek, Kalkulator, Konversi, dll.
- Tombol CTA: "Mulai Belajar ΓåÆ" ΓåÆ switchTab('kamus')

#### 1C ΓÇö Section: Statistik Pengguna (dari localStorage)
Tampilkan 4 stat card:
- ≡ƒÅå Total skor kuis (akumulasi dari semua sesi)
- ≡ƒöÑ Streak hari belajar (hari berturut-turut buka app)
- ≡ƒôû Istilah dilihat (count dari detail kamus yang dibuka)
- Γ£à Kuis diselesaikan (jumlah sesi kuis yang tuntas)

Key localStorage:
```
ed_stat_quiz_score   ΓåÆ number (akumulasi skor %)
ed_stat_streak       ΓåÆ { count, lastDate }
ed_stat_terms_viewed ΓåÆ number
ed_stat_quiz_done    ΓåÆ number
```

#### 1D ΓÇö Section: Istilah Hari Ini
- Ambil 1 istilah random dari `window.ENTRIES` berdasarkan tanggal (seed = tanggal hari ini ΓåÆ index konsisten sepanjang hari)
- Tampilkan: nama istilah, kategori badge, definisi singkat (50 kata pertama)
- Tombol "Lihat Detail" ΓåÆ buka kamus dan highlight istilah itu

#### 1E ΓÇö Section: Quick Access (Shortcut Grid)
Grid 2├ù4 (desktop) / 2├ù4 (mobile) dengan shortcut:
- ≡ƒôÜ Kamus
- ≡ƒºá Latihan Soal
- ≡ƒôû Materi
- ≡ƒöó Kalkulator
- ≡ƒöä Konversi
- ≡ƒÄ¿ Resistor
- ≡ƒö¼ Lab Proyek
- ≡ƒñû Tanya AI

Setiap tile: ikon + label, klik ΓåÆ switchTab atau openGlobalChat()

#### 1F ΓÇö Section: Aktivitas Terakhir
- Simpan 5 tab terakhir yang dibuka ke localStorage key `ed_recent_tabs`
- Tampilkan sebagai "Terakhir dibuka" chips/pills yang bisa diklik

#### 1G ΓÇö Section: Rumus / Fakta Populer
- Array ~10 rumus/fakta teknik elektro yang sudah di-hardcode
- Tampilkan 3 random (berubah tiap refresh dashboard)
- Format: judul + formula LaTeX + keterangan singkat
- Render math dengan KaTeX

#### 1H ΓÇö Fungsi helper untuk update stats
```js
ElektroDash.addQuizScore(pct)   // dipanggil dari quiz setelah selesai
ElektroDash.addTermView()       // dipanggil saat detail kamus dibuka
ElektroDash.updateStreak()      // dipanggil saat app dibuka (session start)
ElektroDash.addQuizDone()       // dipanggil saat kuis selesai
```
Expose sebagai `window.ElektroDash`

---

### TASK 2 ΓÇö Update `index.html`

#### 2A ΓÇö Tambah tombol nav di bottom-nav
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

#### 2B ΓÇö Tambah section `#page-dashboard`
Letakkan **sebelum** `#page-kamus`:
```html
<div class="page" id="page-dashboard">
  <!-- diisi oleh dashboard.js -->
</div>
```

#### 2C ΓÇö Include script `dashboard.js`
Tambahkan di bawah script modul lainnya:
```html
<script src="js/modules/dashboard.js"></script>
```

---

### TASK 3 ΓÇö Update `js/app.js`

#### 3A ΓÇö Ubah default tab saat app load
Cari baris yang set `page-kamus` sebagai default:
```js
document.getElementById('page-kamus').classList.add('visible');
```
Ganti menjadi panggil `switchTab('dashboard')` setelah splash screen selesai, DAN set `page-dashboard` sebagai `on` secara default.

Juga update `bnav-kamus` yang punya class `on` di HTML ΓåÆ pindahkan ke `bnav-dashboard`.

#### 3B ΓÇö Tambah handler di `switchTab()` untuk dashboard
```js
if (t === 'dashboard' && window.ElektroDash) window.ElektroDash.init();
```

#### 3C ΓÇö Update `ed_recent_tabs` di setiap switchTab
Di awal `switchTab(t)`, simpan tab ke recent history:
```js
if (t !== 'dashboard') {
  const recent = JSON.parse(localStorage.getItem('ed_recent_tabs') || '[]');
  const updated = [t, ...recent.filter(x => x !== t)].slice(0, 5);
  localStorage.setItem('ed_recent_tabs', JSON.stringify(updated));
}
```

#### 3D ΓÇö Panggil `ElektroDash.updateStreak()` saat app start
Tambahkan di bagian init app (setelah splash screen).

---

### TASK 4 ΓÇö Update `css/style.css`

Tambahkan CSS baru di akhir file untuk komponen dashboard:

#### 4A ΓÇö Layout utama dashboard
```css
.dash-wrap { max-width: 860px; margin: 0 auto; padding: 20px 16px 80px; }
```

#### 4B ΓÇö Hero section
```css
.dash-hero { ... }          /* container hero */
.dash-hero-title { ... }    /* nama app + gradient */
.dash-hero-desc { ... }     /* deskripsi */
.dash-feature-pills { ... } /* daftar fitur sebagai pills */
.dash-cta { ... }           /* tombol CTA */
```

#### 4C ΓÇö Stat cards
```css
.dash-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.dash-stat-card { ... }
.dash-stat-num { ... }     /* angka besar */
.dash-stat-label { ... }   /* label di bawah angka */
```
Di desktop (min-width: 768px): `grid-template-columns: repeat(4, 1fr)`

#### 4D ΓÇö Section title
```css
.dash-section-title { ... }  /* h3 dengan garis bawah accent */
```

#### 4E ΓÇö Istilah hari ini
```css
.dash-word-card { ... }   /* card besar dengan border accent */
.dash-word-name { ... }
.dash-word-cat { ... }
.dash-word-def { ... }
```

#### 4F ΓÇö Quick access grid
```css
.dash-quick-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.dash-quick-item { ... }    /* tile dengan ikon + label */
/* Mobile: repeat(4, 1fr) juga (2 baris ├ù 4 kolom) */
```

#### 4G ΓÇö Recent tabs
```css
.dash-recent { display: flex; flex-wrap: wrap; gap: 8px; }
.dash-recent-chip { ... }
```

#### 4H ΓÇö Rumus card
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
2. Update `index.html` ΓÇö tambah nav button + page section + script tag (TASK 2)
3. Update `js/app.js` ΓÇö ubah default tab + handler + streak (TASK 3)
4. Tambah CSS di `css/style.css` (TASK 4)
5. Pindahkan Kamus ke sheet "Lainnya" di mobile (TASK 5)
6. Verifikasi: dashboard muncul pertama, semua stat ter-render, shortcut berfungsi, KaTeX render rumus, Kamus muncul di sheet Lainnya (mobile) dan sidebar (desktop)

---

## TASK 5 ΓÇö Pindahkan "Kamus" ke Bottom Sheet "Lainnya" (Mobile Only)

Di mode smartphone, slot bottom nav terbatas. Karena Dashboard sekarang jadi halaman utama, tombol **Kamus** dipindahkan ke dalam sheet "Lainnya" supaya tidak memenuhi bar bawah.

### 5A ΓÇö Hapus `mobile-visible` dari `#bnav-kamus`
Di `index.html`, cari:
```html
<button class="bnav-item on mobile-visible" id="bnav-kamus" ...>
```
Ganti class menjadi `desktop-only` (tetap muncul di sidebar desktop, hilang di mobile bottom nav):
```html
<button class="bnav-item desktop-only" id="bnav-kamus" ...>
```

### 5B ΓÇö Tambahkan item Kamus di dalam `.sheet-grid` (bottom sheet "Lainnya")
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

### 5C ΓÇö Pastikan `#bnav-kamus` tidak ter-highlight di mobile saat `switchTab('kamus')`
Karena tombol `#bnav-kamus` tidak ada di mobile nav lagi, `switchTab` otomatis tidak akan menemukannya ΓÇö tidak perlu perubahan logika. Tapi pastikan tidak ada class `on` yang nyangkut.

---

## URUTAN EKSEKUSI
- Dashboard tidak perlu AI ΓÇö semua konten dari localStorage + data yang sudah ada di app
- Streak logic: bandingkan `lastDate` dengan today, jika kemarin ΓåÆ +1, jika hari ini ΓåÆ keep, jika lebih lama ΓåÆ reset ke 1
- `ElektroDash.addTermView()` dipanggil dari fungsi yang buka detail kamus (cari di app.js dan tambahkan)
- Mobile-first: pastikan dashboard enak dilihat di layar 375px


---

# TODO GÇö Tambah Halaman DASHBOARD

> Halaman pertama yang muncul saat buka ElektroDict.
> Tab "DASHBOARD" menjadi default landing page, menggantikan Kamus.

---

## OVERVIEW

Dashboard adalah halaman sambutan yang menggabungkan:
- **Pengenalan web app** ElektroDict (siapa, apa, untuk siapa)
- **Progress & gamifikasi** GÇö skor kuis, streak, badge, last visited
- **Ringkasan konten** GÇö istilah hari ini, rumus populer, video terbaru
- **Quick access** GÇö shortcut ke semua fitur utama
- Data disimpan di **localStorage**

---

## FILE YANG AKAN DIMODIFIKASI

- `index.html` GÇö tambah tombol nav + section `#page-dashboard`
- `js/app.js` GÇö ubah default tab ke `dashboard`, tambah logika switchTab untuk dashboard
- `js/modules/dashboard.js` GÇö **FILE BARU** berisi semua logika dashboard
- `css/style.css` GÇö tambah CSS untuk komponen dashboard

---

## TASK LIST

### TASK 1 GÇö Buat file `js/modules/dashboard.js`

Isi modul ini:

#### 1A GÇö Fungsi `initDashboard()`
- Dipanggil saat pertama kali tab dashboard dibuka
- Render semua section dashboard
- Baca data dari localStorage

#### 1B GÇö Section: Hero / Pengenalan Web App
Konten statis berisi:
- Logo + nama **ElektroDict**
- Tagline: "Kamus, Materi & Lab Teknik Elektro GÇö Belajar dari Nol hingga Mahir"
- Deskripsi singkat (~2 kalimat) tentang fitur utama
- Daftar fitur: Kamus 300+ istilah, AI ElektroBot, Latihan Soal, Materi Interaktif, Lab Proyek, Kalkulator, Konversi, dll.
- Tombol CTA: "Mulai Belajar GåÆ" GåÆ switchTab('kamus')

#### 1C GÇö Section: Statistik Pengguna (dari localStorage)
Tampilkan 4 stat card:
- =ƒÅå Total skor kuis (akumulasi dari semua sesi)
- =ƒöÑ Streak hari belajar (hari berturut-turut buka app)
- =ƒôû Istilah dilihat (count dari detail kamus yang dibuka)
- G£à Kuis diselesaikan (jumlah sesi kuis yang tuntas)

Key localStorage:
```
ed_stat_quiz_score   GåÆ number (akumulasi skor %)
ed_stat_streak       GåÆ { count, lastDate }
ed_stat_terms_viewed GåÆ number
ed_stat_quiz_done    GåÆ number
```

#### 1D GÇö Section: Istilah Hari Ini
- Ambil 1 istilah random dari `window.ENTRIES` berdasarkan tanggal (seed = tanggal hari ini GåÆ index konsisten sepanjang hari)
- Tampilkan: nama istilah, kategori badge, definisi singkat (50 kata pertama)
- Tombol "Lihat Detail" GåÆ buka kamus dan highlight istilah itu

#### 1E GÇö Section: Quick Access (Shortcut Grid)
Grid 2+ù4 (desktop) / 2+ù4 (mobile) dengan shortcut:
- =ƒôÜ Kamus
- =ƒºá Latihan Soal
- =ƒôû Materi
- =ƒöó Kalkulator
- =ƒöä Konversi
- =ƒÄ¿ Resistor
- =ƒö¼ Lab Proyek
- =ƒñû Tanya AI

Setiap tile: ikon + label, klik GåÆ switchTab atau openGlobalChat()

#### 1F GÇö Section: Aktivitas Terakhir
- Simpan 5 tab terakhir yang dibuka ke localStorage key `ed_recent_tabs`
- Tampilkan sebagai "Terakhir dibuka" chips/pills yang bisa diklik

#### 1G GÇö Section: Rumus / Fakta Populer
- Array ~10 rumus/fakta teknik elektro yang sudah di-hardcode
- Tampilkan 3 random (berubah tiap refresh dashboard)
- Format: judul + formula LaTeX + keterangan singkat
- Render math dengan KaTeX

#### 1H GÇö Fungsi helper untuk update stats
```js
ElektroDash.addQuizScore(pct)   // dipanggil dari quiz setelah selesai
ElektroDash.addTermView()       // dipanggil saat detail kamus dibuka
ElektroDash.updateStreak()      // dipanggil saat app dibuka (session start)
ElektroDash.addQuizDone()       // dipanggil saat kuis selesai
```
Expose sebagai `window.ElektroDash`

---

### TASK 2 GÇö Update `index.html`

#### 2A GÇö Tambah tombol nav di bottom-nav
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

#### 2B GÇö Tambah section `#page-dashboard`
Letakkan **sebelum** `#page-kamus`:
```html
<div class="page" id="page-dashboard">
  <!-- diisi oleh dashboard.js -->
</div>
```

#### 2C GÇö Include script `dashboard.js`
Tambahkan di bawah script modul lainnya:
```html
<script src="js/modules/dashboard.js"></script>
```

---

### TASK 3 GÇö Update `js/app.js`

#### 3A GÇö Ubah default tab saat app load
Cari baris yang set `page-kamus` sebagai default:
```js
document.getElementById('page-kamus').classList.add('visible');
```
Ganti menjadi panggil `switchTab('dashboard')` setelah splash screen selesai, DAN set `page-dashboard` sebagai `on` secara default.

Juga update `bnav-kamus` yang punya class `on` di HTML GåÆ pindahkan ke `bnav-dashboard`.

#### 3B GÇö Tambah handler di `switchTab()` untuk dashboard
```js
if (t === 'dashboard' && window.ElektroDash) window.ElektroDash.init();
```

#### 3C GÇö Update `ed_recent_tabs` di setiap switchTab
Di awal `switchTab(t)`, simpan tab ke recent history:
```js
if (t !== 'dashboard') {
  const recent = JSON.parse(localStorage.getItem('ed_recent_tabs') || '[]');
  const updated = [t, ...recent.filter(x => x !== t)].slice(0, 5);
  localStorage.setItem('ed_recent_tabs', JSON.stringify(updated));
}
```

#### 3D GÇö Panggil `ElektroDash.updateStreak()` saat app start
Tambahkan di bagian init app (setelah splash screen).

---

### TASK 4 GÇö Update `css/style.css`

Tambahkan CSS baru di akhir file untuk komponen dashboard:

#### 4A GÇö Layout utama dashboard
```css
.dash-wrap { max-width: 860px; margin: 0 auto; padding: 20px 16px 80px; }
```

#### 4B GÇö Hero section
```css
.dash-hero { ... }          /* container hero */
.dash-hero-title { ... }    /* nama app + gradient */
.dash-hero-desc { ... }     /* deskripsi */
.dash-feature-pills { ... } /* daftar fitur sebagai pills */
.dash-cta { ... }           /* tombol CTA */
```

#### 4C GÇö Stat cards
```css
.dash-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.dash-stat-card { ... }
.dash-stat-num { ... }     /* angka besar */
.dash-stat-label { ... }   /* label di bawah angka */
```
Di desktop (min-width: 768px): `grid-template-columns: repeat(4, 1fr)`

#### 4D GÇö Section title
```css
.dash-section-title { ... }  /* h3 dengan garis bawah accent */
```

#### 4E GÇö Istilah hari ini
```css
.dash-word-card { ... }   /* card besar dengan border accent */
.dash-word-name { ... }
.dash-word-cat { ... }
.dash-word-def { ... }
```

#### 4F GÇö Quick access grid
```css
.dash-quick-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.dash-quick-item { ... }    /* tile dengan ikon + label */
/* Mobile: repeat(4, 1fr) juga (2 baris +ù 4 kolom) */
```

#### 4G GÇö Recent tabs
```css
.dash-recent { display: flex; flex-wrap: wrap; gap: 8px; }
.dash-recent-chip { ... }
```

#### 4H GÇö Rumus card
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
2. Update `index.html` GÇö tambah nav button + page section + script tag (TASK 2)
3. Update `js/app.js` GÇö ubah default tab + handler + streak (TASK 3)
4. Tambah CSS di `css/style.css` (TASK 4)
5. Pindahkan Kamus ke sheet "Lainnya" di mobile (TASK 5)
6. Verifikasi: dashboard muncul pertama, semua stat ter-render, shortcut berfungsi, KaTeX render rumus, Kamus muncul di sheet Lainnya (mobile) dan sidebar (desktop)

---

## TASK 5 GÇö Pindahkan "Kamus" ke Bottom Sheet "Lainnya" (Mobile Only)

Di mode smartphone, slot bottom nav terbatas. Karena Dashboard sekarang jadi halaman utama, tombol **Kamus** dipindahkan ke dalam sheet "Lainnya" supaya tidak memenuhi bar bawah.

### 5A GÇö Hapus `mobile-visible` dari `#bnav-kamus`
Di `index.html`, cari:
```html
<button class="bnav-item on mobile-visible" id="bnav-kamus" ...>
```
Ganti class menjadi `desktop-only` (tetap muncul di sidebar desktop, hilang di mobile bottom nav):
```html
<button class="bnav-item desktop-only" id="bnav-kamus" ...>
```

### 5B GÇö Tambahkan item Kamus di dalam `.sheet-grid` (bottom sheet "Lainnya")
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

### 5C GÇö Pastikan `#bnav-kamus` tidak ter-highlight di mobile saat `switchTab('kamus')`
Karena tombol `#bnav-kamus` tidak ada di mobile nav lagi, `switchTab` otomatis tidak akan menemukannya GÇö tidak perlu perubahan logika. Tapi pastikan tidak ada class `on` yang nyangkut.

---

## URUTAN EKSEKUSI
- Dashboard tidak perlu AI GÇö semua konten dari localStorage + data yang sudah ada di app
- Streak logic: bandingkan `lastDate` dengan today, jika kemarin GåÆ +1, jika hari ini GåÆ keep, jika lebih lama GåÆ reset ke 1
- `ElektroDash.addTermView()` dipanggil dari fungsi yang buka detail kamus (cari di app.js dan tambahkan)
- Mobile-first: pastikan dashboard enak dilihat di layar 375px


---




---

# TODO — Fitur Tambahan Dashboard (Batch 2)

---

## TASK 6 — Progress Materi di Dashboard

> Data `ed_materi_progress` sudah ada di localStorage (diisi oleh `saveMateriProgress()` di `app.js`).
> Setiap modul menyimpan `{ done, quizBest }`. Cukup baca dan hitung berapa section yang sudah dibuka.

### 6A — Tracking section yang dibuka (update `js/app.js`)

Saat ini `ed_materi_progress` hanya menyimpan `done` (boolean) dan `quizBest`. Perlu ditambahkan field `sectionsRead: []` — array berisi `id` section yang pernah dibuka.

Cari fungsi `openMateriModule(id)` di `app.js`, di dalamnya ada logika render section list. Tambahkan pemanggilan helper di titik di mana section di-render atau diklik:

```js
// Di fungsi yang membuka section (misal onclick pada item section list),
// tambahkan tracking:
function markSectionRead(moduleId, sectionId) {
  const prog = getMateriProgress();
  if (!prog[moduleId]) prog[moduleId] = {};
  const read = prog[moduleId].sectionsRead || [];
  if (!read.includes(sectionId)) {
    prog[moduleId].sectionsRead = [...read, sectionId];
    saveMateriProgress(prog);
  }
}
```

Panggil `markSectionRead(materiState.moduleId, section.id)` saat section di-scroll ke view atau saat header section diklik.

### 6B — Section: Progress Materi di `js/modules/dashboard.js`

Tambahkan fungsi helper dan section baru di `ElektroDash`:

```js
function buildMateriProgressSection() {
  const prog = getMateriProgress(); // baca dari localStorage
  const modules = (window.MATERI_MODULES || []).map(m => {
    const p = prog[m.id] || {};
    const read = (p.sectionsRead || []).length;
    const total = m.sections.length;
    const pct = total > 0 ? Math.round((read / total) * 100) : 0;
    const done = p.done || false;
    return { id: m.id, emoji: m.emoji, title: m.title, read, total, pct, done };
  });

  // Tampilkan semua modul (atau 6 modul pertama jika terlalu panjang, sisanya lipat)
  const items = modules.map(m => `
    <div class="dash-prog-item" onclick="switchTab('materi'); setTimeout(()=>openMateriModule('${m.id}'),200)">
      <div class="dash-prog-header">
        <span class="dash-prog-emoji">${m.emoji}</span>
        <span class="dash-prog-title">${m.title}</span>
        <span class="dash-prog-count">${m.read}/${m.total}</span>
        ${m.done ? '<span class="dash-prog-done">✓</span>' : ''}
      </div>
      <div class="dash-prog-bar-bg">
        <div class="dash-prog-bar-fill" style="width:${m.pct}%"></div>
      </div>
    </div>`).join('');

  return `
    <h3 class="dash-section-title">📖 Progress Materi</h3>
    <div class="dash-prog-list">${items}</div>`;
}
```

Panggil `buildMateriProgressSection()` di dalam `ElektroDash.init()` dan render ke container dashboard.

### 6C — CSS baru di `css/style.css`

```css
.dash-prog-list { display: flex; flex-direction: column; gap: 10px; }
.dash-prog-item {
  background: var(--card); border-radius: 10px; padding: 10px 14px;
  cursor: pointer; transition: background .15s;
}
.dash-prog-item:hover { background: var(--hover); }
.dash-prog-header {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 6px; font-size: 13px;
}
.dash-prog-emoji { font-size: 16px; }
.dash-prog-title { flex: 1; font-weight: 600; color: var(--text1); }
.dash-prog-count { font-size: 12px; color: var(--text3); font-family: var(--mono); }
.dash-prog-done {
  font-size: 11px; background: var(--green-dim); color: var(--green);
  padding: 1px 6px; border-radius: 20px;
}
.dash-prog-bar-bg {
  height: 5px; background: var(--border); border-radius: 99px; overflow: hidden;
}
.dash-prog-bar-fill {
  height: 100%; background: var(--accent); border-radius: 99px;
  transition: width .4s ease;
}
```

### 6D — localStorage key yang terlibat

```
ed_materi_progress  → { [moduleId]: { done, quizBest, sectionsRead: string[] } }
```

Tidak ada key baru. Hanya perlu extend schema yang sudah ada dengan field `sectionsRead`.

---

## TASK 7 — Notifikasi Streak (Toast)

> Streak sudah direncanakan di TASK 1C/1H. Task ini menambahkan toast notification saat streak naik.

### 7A — Update fungsi `ElektroDash.updateStreak()` di `js/modules/dashboard.js`

`updateStreak()` sudah dibuat di TASK 1H untuk dipanggil saat app start. Tambahkan return value yang menandakan apakah streak baru naik:

```js
updateStreak() {
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  let s = JSON.parse(localStorage.getItem('ed_stat_streak') || '{"count":0,"lastDate":""}');
  
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  let streakIncreased = false;

  if (s.lastDate === today) {
    // sudah buka hari ini, tidak ada perubahan
  } else if (s.lastDate === yesterday) {
    s.count += 1;
    s.lastDate = today;
    streakIncreased = true;
  } else {
    // lebih dari 1 hari absen, reset
    s.count = 1;
    s.lastDate = today;
    // streak reset, bukan naik
  }

  localStorage.setItem('ed_stat_streak', JSON.stringify(s));
  return { count: s.count, increased: streakIncreased };
}
```

### 7B — Toast di `js/app.js` (saat app start)

Di bagian init app (setelah splash screen selesai, di mana `ElektroDash.updateStreak()` dipanggil), gunakan return value-nya:

```js
const streakResult = window.ElektroDash.updateStreak();
if (streakResult.increased && streakResult.count >= 2) {
  // Tunda toast agar tidak tabrakan dengan splash screen
  setTimeout(() => {
    showToast(`🔥 Streak ${streakResult.count} hari! Terus semangat bro.`, 3500);
  }, 1800);
}
```

Pesan toast bervariasi berdasarkan count:
- 2–4 hari: `"🔥 Streak {n} hari! Konsisten bro."`
- 5–6 hari: `"🔥 Streak {n} hari! Hampir seminggu penuh!"`
- 7+ hari: `"🏆 Streak {n} hari! Lo juara, satu minggu penuh!"`
- 30+ hari: `"👑 Streak {n} hari! Legenda elektro."`

### 7C — Pastikan `showToast()` menerima durasi custom

Cek apakah `showToast(msg, duration)` di `app.js` sudah support parameter durasi kedua. Jika belum, update signature-nya:

```js
function showToast(msg, duration = 2500) {
  // ... kode existing ...
  setTimeout(() => toast.classList.remove('show'), duration);
}
```

---

## TASK 8 — Mode "Tantang Diri" (Kuis Kilat)

> Entry point cepat ke kuis AI tanpa harus navigasi ke tab Latihan Soal.
> Kategori dipilih random dari `QUIZ_CATS` (14 kategori, sudah ada di `data.js`).

### 8A — Fungsi `startQuizKilat()` di `js/modules/dashboard.js`

```js
function startQuizKilat() {
  // Pilih kategori random dari QUIZ_CATS
  const cats = Object.keys(window.QUIZ_CATS || {});
  if (!cats.length) { switchTab('quiz'); return; }
  const randomCat = cats[Math.floor(Math.random() * cats.length)];

  // Set state global kuis (qCat, qDiff) sebelum pindah tab
  window._dashQuizKilat = { cat: randomCat, diff: 'mudah' };

  // Pindah ke tab quiz lalu trigger start
  switchTab('quiz');
  setTimeout(() => {
    if (window._dashQuizKilat) {
      const { cat, diff } = window._dashQuizKilat;
      window._dashQuizKilat = null;
      // Simulasi pilih kategori + mulai
      if (typeof selectQuizCat === 'function') {
        // Set qCat dan qDiff langsung tanpa klik tombol
        window._forceStartQuiz = { cat, diff };
        initQuiz(); // re-render kategori jika perlu
        selectQuizCat(null, cat); // null btn — update qCat tapi skip DOM classList
        if (typeof setDiff === 'function') qDiff = diff;
        startAIQuiz();
      }
    }
  }, 400);
}
```

**Catatan:** `selectQuizCat(btn, c)` di `app.js` saat ini memanggil `btn.classList.remove('on')` yang akan crash jika `btn` null. Perlu guard:

```js
// Update selectQuizCat di app.js — tambahkan null check:
function selectQuizCat(btn, c){
  qCat = c;
  document.querySelectorAll('.qcat-btn').forEach(b=>b.classList.remove('on'));
  if (btn) btn.classList.add('on');  // ← tambahkan guard ini
  const startBtn = document.getElementById('quiz-start-btn');
  if (startBtn) {
    startBtn.disabled = false;
    startBtn.textContent = `⚡ Mulai — ${QUIZ_CATS[c].label}`;
  }
}
```

### 8B — Tombol di Section Dashboard

Di `js/modules/dashboard.js`, tambahkan section "Tantang Diri" di antara Quick Access dan Aktivitas Terakhir:

```js
function buildTantangDiriSection() {
  const cats = Object.keys(window.QUIZ_CATS || {});
  const randomCat = cats.length
    ? window.QUIZ_CATS[cats[Math.floor(Math.random() * cats.length)]]
    : { label: 'Random', emoji: '🎲' };

  return `
    <div class="dash-challenge-card">
      <div class="dash-challenge-left">
        <div class="dash-challenge-title">⚡ Tantang Diri</div>
        <div class="dash-challenge-sub">Kuis kilat 5 soal · Kategori random · Level mudah</div>
        <div class="dash-challenge-cat">Kategori: ${randomCat.emoji} ${randomCat.label}</div>
      </div>
      <button class="dash-challenge-btn" onclick="ElektroDash.startQuizKilat()">
        Mulai →
      </button>
    </div>`;
}
```

Expose `startQuizKilat` sebagai method di `window.ElektroDash`.

### 8C — CSS di `css/style.css`

```css
.dash-challenge-card {
  background: linear-gradient(135deg, var(--accent-dim) 0%, var(--card) 100%);
  border: 1px solid var(--accent);
  border-radius: 14px; padding: 16px 18px;
  display: flex; align-items: center; gap: 16px;
}
.dash-challenge-left { flex: 1; }
.dash-challenge-title { font-size: 16px; font-weight: 700; color: var(--text1); margin-bottom: 4px; }
.dash-challenge-sub { font-size: 12px; color: var(--text3); margin-bottom: 4px; }
.dash-challenge-cat { font-size: 12px; color: var(--accent); font-weight: 600; }
.dash-challenge-btn {
  background: var(--accent); color: #fff; border: none;
  border-radius: 10px; padding: 10px 20px;
  font-size: 14px; font-weight: 700; cursor: pointer;
  white-space: nowrap; transition: opacity .15s;
}
.dash-challenge-btn:hover { opacity: .85; }
```

### 8D — Urutan section di Dashboard (final)

1. Hero
2. Statistik (4 stat cards)
3. ⚡ **Tantang Diri** ← baru, posisi tinggi supaya langsung kelihatan
4. Istilah Hari Ini
5. Quick Access
6. 📖 **Progress Materi** ← baru
7. Aktivitas Terakhir
8. Rumus Populer

---

## URUTAN EKSEKUSI BATCH 2

1. Update `selectQuizCat()` di `app.js` — tambah null guard (TASK 8A, 1 baris)
2. Tambah `markSectionRead()` di `app.js` + panggil saat section dibuka (TASK 6A)
3. Update `ElektroDash.updateStreak()` — return `{ count, increased }` (TASK 7A)
4. Tambah toast streak di init app (TASK 7B)
5. Pastikan `showToast()` support durasi custom (TASK 7C)
6. Tambah `buildMateriProgressSection()` + `buildTantangDiriSection()` + `startQuizKilat()` di `dashboard.js` (TASK 6B, 8A, 8B)
7. Tambah semua CSS baru di `style.css` (TASK 6C, 8C)
8. Update urutan render section di `ElektroDash.init()` (TASK 8D)

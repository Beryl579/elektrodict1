# TODO2 — Neubrutalism Design Overhaul
> Dibaca & dieksekusi oleh OpenCode.
> **Hanya modifikasi `css/style.css`** — tidak ada perubahan HTML atau JS sama sekali.
> Kerjakan step berurutan. Setiap step bisa di-preview langsung di browser.

---

## APA ITU NEUBRUTALISM (Konteks untuk OpenCode)

Neubrutalism adalah gaya desain UI yang memakai prinsip:
- **Border solid tebal** (`2–3px solid`) — bukan border tipis transparan
- **Shadow offset blok** (`4px 4px 0 #000`) — bukan blur shadow
- **Warna flat bold** — putih, kuning `#FFEA00`, merah `#FF3B3B`, hitam `#0A0A0A`
- **Border radius kecil** (`4–6px`) atau nol — bukan `18px` atau `99px`
- **Font berat & uppercase** untuk label/badge
- **Hover = geser** (`translate(-3px, -3px)` + shadow makin besar) — bukan `translateY(-5px)` halus
- **Tidak ada gradient**, tidak ada `backdrop-filter: blur`, tidak ada `rgba` transparan

**Palette yang akan dipakai:**
- Dark mode: Background `#0A0A0A`, Card `#111111`, Border `#2A2A2A` (gelap) → hover border `#FFEA00`
- Light mode: Background `#F5F0E8` (krem), Card `#FFFFFF`, Border `#0A0A0A` (hitam solid)
- Accent utama: `#FFEA00` (kuning electric) — dipakai di dark mode untuk highlight
- Accent utama light: `#0A0A0A` (hitam) — dipakai di light mode
- Danger: `#FF3B3B`, Success: `#00D084`, Info: `#3B82F6`

---

## PENTING — ATURAN YANG WAJIB DIIKUTI

1. **Jangan hapus class apapun** — hanya ubah nilai properti CSS-nya
2. **Jangan ubah selector** — hanya ubah deklarasi di dalam blok yang sudah ada
3. **Pertahankan semua `@media` query** — hanya ubah nilai di dalamnya jika diperlukan
4. **Pertahankan semua `transition` dan `animation`** kecuali yang eksplisit diganti di TODO ini
5. **Setiap step, baca dulu baris yang relevan** sebelum mengedit — pakai grep untuk cari selector
6. **Jangan rewrite seluruh file** — gunakan str_replace untuk perubahan targeted

---

## STEP 1 — Ganti CSS Variables di `:root` (Dark Mode Base)

**Target:** Baris 2–13 di `css/style.css` — blok `:root { ... }`

Ganti seluruh blok `:root { ... }` dengan yang baru:

```css
:root{
  /* ── NEUBRUTALISM DARK ── */
  --bg: #0A0A0A;
  --bg2: #111111;
  --bg3: #161616;
  --bg4: #1A1A1A;
  --bg5: #222222;

  --line: #2A2A2A;
  --line2: #333333;

  /* Accent: kuning electric untuk highlight neubrutalism */
  --accent: #FFEA00;
  --accent-glow: rgba(255, 234, 0, 0.08);
  --accent-d: rgba(255, 234, 0, 0.06);

  --text: #F5F0E8;
  --text2: #A8A29E;
  --text3: #78716C;

  --green: #00D084;
  --amber: #FFEA00;
  --rose: #FF3B3B;
  --purple: #B794F4;
  --teal: #00D4AA;
  --pink: #FF6B9D;

  --font: 'Plus Jakarta Sans', sans-serif;
  --font-h: 'Outfit', sans-serif;
  --mono: 'Fira Code', monospace;

  /* NEUBRUTALISM: radius kecil, shadow offset blok */
  --r: 6px;
  --r2: 4px;
  --r3: 4px;

  --glass: rgba(10, 10, 10, 0.97);
  --blur: 0px; /* Neubrutalism: no blur */

  /* Shadow offset blok — ciri khas neubrutalism */
  --nb-shadow: 3px 3px 0 #FFEA00;
  --nb-shadow-dark: 3px 3px 0 #2A2A2A;
  --nb-shadow-sm: 2px 2px 0 #FFEA00;
  --nb-border: 2px solid #2A2A2A;
  --nb-border-accent: 2px solid #FFEA00;

  --shadow: 4px 4px 0 #FFEA00;
  --glow: 4px 4px 0 #FFEA00;
}
```

---

## STEP 2 — Ganti Light Mode Variables

**Target:** Blok `body.light { ... }` di sekitar baris 1082–1089

Ganti isi blok `body.light { }` dengan:

```css
body.light{
  /* ── NEUBRUTALISM LIGHT ── */
  --bg: #F5F0E8;
  --bg2: #FFFFFF;
  --bg3: #FAF7F2;
  --bg4: #F0EBE3;
  --bg5: #E8E0D5;

  --line: #0A0A0A;
  --line2: #1A1A1A;

  /* Light mode: hitam sebagai accent */
  --accent: #0A0A0A;
  --accent-glow: rgba(10, 10, 10, 0.06);
  --accent-d: rgba(10, 10, 10, 0.05);

  --text: #0A0A0A;
  --text2: #3D3530;
  --text3: #6B5E57;

  --green: #008055;
  --amber: #C07800;
  --rose: #CC2200;
  --purple: #6B2FBF;
  --teal: #007A66;
  --pink: #CC3366;

  /* Shadow offset di light mode: hitam solid */
  --nb-shadow: 3px 3px 0 #0A0A0A;
  --nb-shadow-dark: 3px 3px 0 #0A0A0A;
  --nb-shadow-sm: 2px 2px 0 #0A0A0A;
  --nb-border: 2px solid #0A0A0A;
  --nb-border-accent: 2px solid #0A0A0A;

  --shadow: 4px 4px 0 #0A0A0A;
  --glow: 4px 4px 0 #0A0A0A;
}
```

---

## STEP 3 — Top Navigation Bar

**Target:** Blok `.nav`, `.nav-inner`, `.logo-mark`, `.logo-name`, `.hbadge`, `.nav-portfolio`, `.theme-btn`

### 3A — `.nav`
Cari: `border-bottom:1px solid var(--line)` di dalam `.nav`
Tambah/ganti properti ini di dalam blok `.nav`:
```css
border-bottom: var(--nb-border);
backdrop-filter: none; /* hapus blur */
```

### 3B — `.logo-mark`
Cari blok `.logo-mark { ... }` lalu ganti propertinya:
```css
.logo-mark{
  width:28px; height:28px;
  border-radius: 4px;
  background: var(--accent);
  border: var(--nb-border);
  box-shadow: var(--nb-shadow-sm);
  display:flex; align-items:center; justify-content:center;
  font-size:13px; flex-shrink:0;
  color: var(--bg);
}
```

### 3C — `.hbadge`
Ganti border-radius dan style:
```css
.hbadge{
  font-family:var(--mono);
  font-size:11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
  background: var(--accent);
  border: var(--nb-border);
  color: var(--bg);
  padding: 3px 10px;
  border-radius: var(--r3);
  box-shadow: var(--nb-shadow-sm);
  white-space:nowrap;
  flex-shrink:0;
}
```

### 3D — `.nav-portfolio` dan `.theme-btn`
Cari dan ganti kedua blok ini:
```css
.nav-portfolio{
  width:34px; height:34px;
  border-radius: var(--r2);
  background: var(--bg3);
  border: var(--nb-border);
  box-shadow: var(--nb-shadow-sm);
  display:flex; align-items:center; justify-content:center;
  font-size:17px;
  text-decoration:none;
  flex-shrink:0;
  margin-left:8px;
  transition: transform .12s, box-shadow .12s;
  line-height:1;
}
.nav-portfolio:hover{
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--accent);
}

.theme-btn{
  width:34px; height:34px;
  border-radius: var(--r2);
  background: var(--bg3);
  border: var(--nb-border);
  box-shadow: var(--nb-shadow-sm);
  display:flex; align-items:center; justify-content:center;
  font-size:16px; cursor:pointer; flex-shrink:0;
  margin-left:6px;
  transition: transform .12s, box-shadow .12s;
  line-height:1;
}
.theme-btn:hover{
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--accent);
}
```

---

## STEP 4 — Sidebar / Bottom Navigation

**Target:** Desktop sidebar `.bnav-item`, `.bnav-item.on`, `.bnav-item:hover`, `.bnav-ai`, `.bnav-section`

### 4A — `.bnav-item` di dalam `@media(min-width:768px)`
Cari blok `.bnav-item { ... }` yang ada di dalam `@media(min-width:768px)` lalu ganti:
```css
.bnav-item {
  display: flex; flex-direction:row;
  width:calc(100% - 24px); padding: 10px 16px;
  justify-content:flex-start; align-items:center;
  gap:14px; flex:none; margin: 3px 12px;
  border-radius: var(--r2);
  background: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform .1s, box-shadow .1s, border-color .1s, background .1s;
  color: var(--text2);
}
.bnav-item:hover {
  background: var(--bg3);
  border-color: var(--line2);
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0 var(--line2);
}
.bnav-item.on {
  background: var(--accent);
  border: var(--nb-border);
  color: var(--bg);
  box-shadow: var(--nb-shadow);
  transform: none;
}
.bnav-item.on .bnav-label { color: var(--bg); font-weight: 700; }
.bnav-item.on .bnav-icon svg { stroke: var(--bg); }
```

### 4B — `.bnav-item.on::before` (indikator aktif)
Cari dan hapus (atau buat display none) `.bnav-item.on::before` — di neubrutalism tidak pakai bar indikator, karena background sudah cukup jelas:
```css
.bnav-item.on::before { display: none; }
```

### 4C — `.bnav-ai` (tombol Tanya AI di sidebar)
Cari blok `.bnav-ai { ... }` lalu ganti:
```css
.bnav-ai {
  width: 100%;
  background: var(--accent);
  color: var(--bg);
  border: var(--nb-border);
  border-radius: var(--r2);
  padding: 12px 14px;
  font-family: var(--font);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .04em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: var(--nb-shadow);
  transition: transform .1s, box-shadow .1s;
}
.bnav-ai:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--line2);
}
.bnav-ai:active { transform: translate(1px, 1px); box-shadow: 1px 1px 0 var(--line2); }
```

### 4D — `.bnav-section`
Cari `.bnav-section { ... }` lalu tambah properti:
```css
/* Cari existing rule dan tambah/ganti: */
color: var(--accent);
letter-spacing: .12em;
```

---

## STEP 5 — Chip Filter (Kategori) dan Search Bar

**Target:** `.chip`, `.chip.on`, `.chip:hover`, `.sfield input`

### 5A — `.chip`
```css
.chip{
  flex-shrink:0;
  font-size:11px;
  font-family:var(--mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  padding: 5px 12px;
  border-radius: var(--r3);
  cursor:pointer;
  border: var(--nb-border);
  background: var(--bg3);
  color: var(--text2);
  transition: transform .1s, box-shadow .1s;
  white-space:nowrap;
}
.chip:hover{
  transform: translate(-2px, -2px);
  box-shadow: var(--nb-shadow-dark);
  color: var(--text);
  background: var(--bg4);
}
.chip.on{
  background: var(--accent);
  border: var(--nb-border);
  color: var(--bg);
  font-weight: 800;
  box-shadow: var(--nb-shadow);
  transform: none;
}
body.light .chip.on{
  background: var(--accent);
  border: var(--nb-border);
  color: var(--bg2);
  box-shadow: var(--nb-shadow);
}
```

### 5B — `.sfield input` (search bar)
Cari `.sfield input { ... }` lalu ganti:
```css
.sfield input{
  width:100%;
  background: var(--bg2);
  border: var(--nb-border);
  border-radius: var(--r3);
  padding:10px 14px 10px 38px;
  font-family:var(--font);
  font-size:14px;
  color:var(--text);
  outline:none;
  transition: box-shadow .1s, transform .1s;
  box-shadow: var(--nb-shadow-dark);
}
.sfield input:focus{
  box-shadow: var(--nb-shadow);
  transform: translate(-1px, -1px);
  border-color: var(--accent);
}
```

---

## STEP 6 — Kamus Cards

**Target:** `.ecard`, `.ccore`, `.chead`, `.ctags`, `.edetail` (card kamus utama)

Cari blok yang mendefinisikan card kamus. Kemungkinan ada di sekitar `.ccore { }`, `.ecard { }`, atau area card di `style.css`. Gunakan grep untuk `\.ccore|\.ecard|\.chead`.

### 6A — Card kamus (`.ecard` / `.ccore` / card container)
Setelah menemukan selector yang tepat untuk card kamus, tambahkan/ganti:
```css
/* ganti border-radius menjadi var(--r) */
border-radius: var(--r);
/* ganti border */
border: var(--nb-border);
/* ganti box-shadow */
box-shadow: var(--nb-shadow-dark);
/* ganti hover */
/* pada :hover selector: */
transform: translate(-3px, -3px);
box-shadow: var(--nb-shadow);
```

### 6B — Tags di card kamus (`.t-dasar`, `.t-komponen`, dll.)
Cari semua `.t-dasar`, `.t-komponen`, dll. lalu ganti `border-radius: 99px` atau yang ada menjadi `border-radius: var(--r3)`.

Tambahkan juga `font-weight: 700;` dan `text-transform: uppercase;` pada selector parent `.ctag` atau `.tag` yang ada.

---

## STEP 7 — Project Lab Cards (`.prj-card`)

**Target:** `.prj-card`, `.prj-card:hover`, `.prj-card::before`

Cari blok `.prj-card { ... }` lalu ganti:
```css
.prj-card {
  background: var(--bg2);
  border: var(--nb-border);
  border-radius: var(--r);
  padding: 20px;
  cursor: pointer;
  transition: transform .12s, box-shadow .12s;
  display: flex; flex-direction: column; gap: 12px;
  position: relative; overflow: hidden;
  box-shadow: var(--nb-shadow-dark);
}
.prj-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--nb-shadow);
  border-color: var(--accent);
  background: var(--bg3);
}
/* hapus ::before pseudo element — neubrutalism tidak pakai bar sisi */
.prj-card::before { display: none; }
```

Cari juga `.prj-card-diff` dan ubah border-radius-nya:
```css
.prj-card-diff { border-radius: var(--r3); font-weight: 700; text-transform: uppercase; font-size: 10px; }
```

---

## STEP 8 — Quiz Buttons dan Start Button

**Target:** `.qcat-btn`, `.qcat-btn.on`, `.quiz-start-btn`, `.qdiff-btn`

### 8A — `.qcat-btn`
```css
.qcat-btn{
  font-size:11px;
  font-family:var(--mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .04em;
  padding: 6px 14px;
  border-radius: var(--r3);
  cursor:pointer;
  border: var(--nb-border);
  background: var(--bg3);
  color: var(--text2);
  transition: transform .1s, box-shadow .1s;
}
.qcat-btn:hover, .qcat-btn.on{
  background: var(--accent);
  border: var(--nb-border);
  color: var(--bg);
  transform: translate(-2px, -2px);
  box-shadow: var(--nb-shadow);
}
```

### 8B — `.quiz-start-btn`
Cari blok `.quiz-start-btn { ... }` lalu ganti:
```css
.quiz-start-btn{
  display:block; width:100%; max-width:300px; margin:0 auto 20px;
  background: var(--accent);
  border: var(--nb-border);
  border-radius: var(--r2);
  padding: 13px 20px;
  font-family: var(--font-h);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: var(--bg);
  cursor: pointer;
  box-shadow: var(--nb-shadow);
  transition: transform .1s, box-shadow .1s;
}
.quiz-start-btn:hover:not(:disabled){
  transform: translate(-3px, -3px);
  box-shadow: 6px 6px 0 var(--line2);
}
.quiz-start-btn:active:not(:disabled){
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0 var(--line2);
}
.quiz-start-btn:disabled{
  background: var(--bg4);
  border-color: var(--line2);
  color: var(--text3);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
```

---

## STEP 9 — Input Fields & Konversi Cards

**Target:** `.konv-card`, `.konv-inp`, `.konv-cat-btn`, `.konv-result-row`

### 9A — `.konv-card`
Cari `.konv-card { ... }` lalu ganti:
```css
.konv-card{
  background: var(--bg2);
  border: var(--nb-border);
  border-radius: var(--r);
  box-shadow: var(--nb-shadow-dark);
  padding: 20px;
  display: none;
}
```

### 9B — `.konv-inp`
Cari `.konv-inp { ... }` lalu ganti:
```css
.konv-inp{
  flex:1;
  background: var(--bg3);
  border: var(--nb-border);
  border-radius: var(--r3);
  padding: 9px 12px;
  font-family: var(--mono);
  font-size: 14px;
  color: var(--text);
  outline: none;
  transition: box-shadow .1s, border-color .1s;
  min-width:0;
}
.konv-inp:focus{
  border-color: var(--accent);
  box-shadow: 3px 3px 0 var(--accent);
}
```

### 9C — `.konv-cat-btn`
Ganti `border-radius: 99px` menjadi `border-radius: var(--r3)` dan tambah:
```css
.konv-cat-btn{
  font-size:11px;
  font-family:var(--mono);
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: var(--r3);
  cursor:pointer;
  border: var(--nb-border);
  background: transparent;
  color: var(--text2);
  transition: transform .1s, box-shadow .1s;
}
.konv-cat-btn.on{
  background: var(--accent);
  border: var(--nb-border);
  color: var(--bg);
  box-shadow: var(--nb-shadow);
  transform: translate(-1px, -1px);
}
```

### 9D — `.konv-result-row`
Ganti `border-radius` yang ada:
```css
.konv-result-row{
  display:flex; align-items:center; gap:10px; margin-bottom:8px;
  background: var(--bg4);
  border: var(--nb-border);
  border-radius: var(--r3);
  padding: 9px 12px;
  box-shadow: 2px 2px 0 var(--line2);
}
```

---

## STEP 10 — Sheet Bottom (Lainnya) dan Sheet Items

**Target:** `.more-sheet`, `.sheet-item`, `.sheet-handle`

### 10A — `.more-sheet`
Cari `.more-sheet { ... }` lalu ganti:
```css
.more-sheet {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 501;
  background: var(--bg2);
  border-top: var(--nb-border);
  border-radius: 8px 8px 0 0;
  padding: 24px 16px 40px;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 600px; margin: 0 auto;
  box-shadow: 0 -4px 0 var(--accent);
}
```

### 10B — `.sheet-item`
```css
.sheet-item {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  background: var(--bg3);
  border: var(--nb-border);
  padding: 16px 8px;
  border-radius: var(--r2);
  cursor: pointer;
  transition: transform .1s, box-shadow .1s;
  text-decoration: none; color: inherit;
  box-shadow: var(--nb-shadow-dark);
}
.sheet-item:active, .sheet-item:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--nb-shadow);
}
```

### 10C — `.sheet-handle`
```css
.sheet-handle {
  width: 40px; height: 4px;
  background: var(--accent);
  border-radius: 2px;
  margin: -12px auto 20px;
}
```

---

## STEP 11 — Onboarding Card dan Popup

**Target:** `.onboard-card`, `.onboard-feat`, `.onboard-btn`

### 11A — `.onboard-card`
Cari `.onboard-card { ... }` lalu ganti:
```css
.onboard-card{
  background: var(--bg2);
  border: var(--nb-border);
  border-radius: var(--r);
  box-shadow: var(--nb-shadow);
  width:100%; max-width:420px;
  overflow:hidden;
  animation:slideUp .3s cubic-bezier(.34,1.56,.64,1);
}
```

### 11B — `.onboard-quote`
Cari `.onboard-quote { ... }` lalu ganti background:
```css
.onboard-quote{
  background: var(--bg3);
  border-bottom: var(--nb-border);
  padding: 24px 22px 20px;
  position:relative;
}
```

### 11C — `.onboard-feat`
```css
.onboard-feat{
  display:flex; align-items:center; gap:12px;
  background: var(--bg3);
  border: var(--nb-border);
  border-radius: var(--r2);
  padding:10px 14px;
  box-shadow: 2px 2px 0 var(--line2);
}
```

### 11D — `.onboard-btn`
Cari `.onboard-btn { ... }` lalu ganti:
```css
.onboard-btn{
  width:100%;
  background: var(--accent);
  border: var(--nb-border);
  border-radius: var(--r2);
  color: var(--bg);
  font-family: var(--font-h);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  padding: 13px;
  cursor: pointer;
  box-shadow: var(--nb-shadow);
  transition: transform .1s, box-shadow .1s;
}
.onboard-btn:hover{
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--line2);
}
```

---

## STEP 12 — Chat Modal & Bubble

**Target:** `.chat-mobile`, `.bbl` (chat bubble), `.chat-mobile .chead`

### 12A — `.chat-mobile`
Cari `.chat-mobile { ... }` lalu ganti border dan shadow:
```css
/* Tambahkan/ganti di dalam blok .chat-mobile: */
border-radius: var(--r) var(--r) 0 0;
border-top: var(--nb-border);
border-left: var(--nb-border);
border-right: var(--nb-border);
box-shadow: -4px -4px 0 var(--accent);
```

### 12B — Chat bubble user (`.cm.u .bbl`)
Cari blok `.cm.u .bbl { ... }`:
```css
/* Dalam .cm.u .bbl: */
border-radius: var(--r2);
border: var(--nb-border);
box-shadow: var(--nb-shadow-dark);
```

### 12C — Chat bubble bot (`.cm.b .bbl`)
Cari `.cm.b .bbl { ... }`:
```css
/* Dalam .cm.b .bbl: */
border-radius: var(--r2);
border: var(--nb-border);
box-shadow: 2px 2px 0 var(--accent);
```

---

## STEP 13 — Materi Cards dan Tips/Warning Boxes

**Target:** `.mt-tip`, `.mt-warn`, `.mt-img-wrap`, `.mt-table`

### 13A — `.mt-tip`
Cari `.mt-tip { ... }` lalu ganti:
```css
.mt-tip{
  background: rgba(255, 234, 0, 0.07);
  border: 2px solid #FFEA00;
  border-radius: var(--r2);
  padding: 12px 14px;
  font-size: 13px;
  color: var(--text2);
  line-height: 1.6;
  margin: 12px 0;
  box-shadow: 3px 3px 0 #FFEA00;
}
body.light .mt-tip{
  background: rgba(10, 10, 10, 0.04);
  border: 2px solid #0A0A0A;
  box-shadow: 3px 3px 0 #0A0A0A;
}
```

### 13B — `.mt-warn`
Cari `.mt-warn { ... }` lalu ganti:
```css
.mt-warn{
  background: rgba(255, 59, 59, 0.07);
  border: 2px solid #FF3B3B;
  border-radius: var(--r2);
  padding: 12px 14px;
  font-size: 13px;
  color: var(--text2);
  line-height: 1.6;
  margin: 12px 0;
  box-shadow: 3px 3px 0 #FF3B3B;
}
body.light .mt-warn{
  background: rgba(200, 30, 0, 0.06);
  border: 2px solid #CC2200;
  box-shadow: 3px 3px 0 #CC2200;
}
```

### 13C — `.mt-img-wrap`
Cari `.mt-img-wrap { ... }` lalu ganti:
```css
.mt-img-wrap{
  border: var(--nb-border);
  border-radius: var(--r2);
  overflow: hidden;
  margin: 16px 0;
  box-shadow: var(--nb-shadow-dark);
  transition: transform .1s, box-shadow .1s;
}
.mt-img-wrap:hover{
  transform: translate(-2px, -2px);
  box-shadow: var(--nb-shadow);
}
```

### 13D — `.mt-table` (tabel di dalam materi)
Cari `.mt-table { ... }` dan `.mt-table th`, `.mt-table td` lalu ganti:
```css
/* Pada .mt-table th: */
background: var(--accent);
color: var(--bg);
font-weight: 800;
text-transform: uppercase;
font-size: 10px;
letter-spacing: .06em;
border: var(--nb-border);

/* Pada .mt-table td: */
border: 1px solid var(--line2);

/* Pada .mt-table: */
border: var(--nb-border);
border-radius: var(--r2);
box-shadow: var(--nb-shadow-dark);
```

---

## STEP 14 — Difficulty Badges (Lab Proyek)

**Target:** `.diff-mudah`, `.diff-menengah`, `.diff-lanjut`

```css
.diff-mudah {
  background: rgba(0, 208, 132, 0.12);
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: var(--r3);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: .04em;
  box-shadow: 2px 2px 0 var(--green);
}
.diff-menengah {
  background: rgba(255, 234, 0, 0.10);
  color: var(--amber);
  border: 2px solid var(--amber);
  border-radius: var(--r3);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: .04em;
  box-shadow: 2px 2px 0 var(--amber);
}
.diff-lanjut, .diff-advanced {
  background: rgba(255, 59, 59, 0.10);
  color: var(--rose);
  border: 2px solid var(--rose);
  border-radius: var(--r3);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: .04em;
  box-shadow: 2px 2px 0 var(--rose);
}
```

---

## STEP 15 — Light Mode Overrides Tambahan

Karena light mode sekarang pakai background krem dan border hitam solid, beberapa override spesifik perlu ditambahkan **setelah** blok `body.light { }` utama:

```css
/* ── LIGHT MODE NEUBRUTALISM EXTRAS ── */
body.light .nav { background: #F5F0E8; border-bottom: var(--nb-border); }
body.light .bottom-nav { background: #F5F0E8; }
body.light .bottom-nav::after { display: none; }
body.light .calc-chathead { background: #F5F0E8; border-bottom: var(--nb-border); }
body.light .chat-mobile {
  background: var(--bg2);
  border-color: var(--line);
  box-shadow: -4px -4px 0 #0A0A0A;
}
body.light .cm.u .bbl {
  background: #FFEA00;
  color: #0A0A0A;
  border: 2px solid #0A0A0A;
  box-shadow: 2px 2px 0 #0A0A0A;
}
body.light .cm.b .bbl {
  background: #fff;
  color: var(--text);
  border: 2px solid #0A0A0A;
  box-shadow: 2px 2px 0 #0A0A0A;
}
body.light .onboard-card {
  background: #fff;
  border: 2px solid #0A0A0A;
  box-shadow: 4px 4px 0 #0A0A0A;
}
body.light .mt-tip {
  background: rgba(10,10,10,0.04);
  border: 2px solid #0A0A0A;
  box-shadow: 3px 3px 0 #0A0A0A;
}
```

---

## STEP 16 — Scrollbar Neubrutalism

Cari `::-webkit-scrollbar-thumb { ... }` dan ganti:

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 0;
  border: 1px solid var(--bg);
}
::-webkit-scrollbar-thumb:hover { background: var(--text2); }
```

---

## STEP 17 — Hapus Sisa Gradient & Blur dari Komponen Spesifik

Setelah semua step di atas, lakukan pencarian terakhir untuk properti yang tidak sesuai Neubrutalism:

### 17A — Cari semua `backdrop-filter: blur` dan set ke `none`
Jalankan grep: `backdrop-filter`
Untuk setiap kemunculan yang bukan di `@media print`, ganti nilai menjadi `backdrop-filter: none;`

### 17B — Cari `background: linear-gradient` di komponen UI (bukan diagram/SVG)
Jalankan grep: `linear-gradient`
Untuk komponen seperti `.bnav-ai`, `.onboard-quote`, `.prj-card::before`, ganti dengan warna flat.
**Jangan hapus gradient** yang ada di variabel warna badge tag (`.t-dasar`, dll.) dan yang ada di komponen dekoratif/logo.

### 17C — Cari `border-radius: 99px` atau `border-radius: 50%` di komponen UI
Jalankan grep: `border-radius: 99px`
Ganti semua kemunculan di komponen chip/badge/button menjadi `border-radius: var(--r3)`.
**Kecualikan**: `.blob` (animasi ambient), `.oql-dot` (loading dot), elemen circular seperti avatar.

---

## CHECKLIST VERIFIKASI AKHIR

Setelah semua step selesai, buka browser dan cek:

- [ ] **Dark mode**: Background `#0A0A0A`, card border tebal terlihat, shadow kuning offset terlihat
- [ ] **Light mode**: Background krem `#F5F0E8`, semua border hitam solid, shadow hitam offset terlihat
- [ ] **Hover card kamus**: Bergeser `translate(-3px, -3px)` + shadow makin besar (bukan `translateY` halus)
- [ ] **Hover sidebar item**: Geser + shadow blok (bukan `translateX(8px)`)
- [ ] **Chip filter aktif**: Background kuning (dark) / hitam (light), bukan rounded pill
- [ ] **Quiz start button**: Uppercase, font tebal, border tebal, shadow offset
- [ ] **Tombol Tanya AI sidebar**: Uppercase, kuning gelap / hitam terang
- [ ] **Onboarding popup**: Shadow offset blok terlihat
- [ ] **Semua `border-radius`**: Tidak ada lagi `99px` di chip/button
- [ ] **Semua backdrop-filter**: Tidak ada lagi blur di navbar dan sidebar
- [ ] **Tidak ada JS error** di console — pastikan tidak ada style yang mengganggu fungsionalitas
- [ ] **Tab switching** masih berjalan normal
- [ ] **Kalkulator** masih bisa diinput
- [ ] **Mobile** (resize browser ke <768px): bottom nav masih tampil dan fungsional

---

## CATATAN PENTING UNTUK OPENCODE

1. **File yang dimodifikasi HANYA `css/style.css`** — tidak perlu buka file lain kecuali untuk verifikasi
2. **Gunakan str_replace dengan context yang cukup** — selalu sertakan 1–2 baris sebelum/sesudah target agar tidak salah lokasi
3. **Cek duplikasi selector** — beberapa selector ada beberapa kali di file (untuk mobile/desktop). Update semua kemunculan yang relevan
4. **Jika ragu soal suatu selector**, grep dulu sebelum edit
5. **Prioritas jika ada konflik**: Step 1 dan 2 (CSS variables) adalah pondasi — harus benar dulu sebelum step lainnya
6. **Step 17 adalah cleanup** — tidak akan merusak kalau di-skip, tapi membuat tampilannya lebih konsisten

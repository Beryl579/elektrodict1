# ⚡ ElektroDict — Platform Belajar Teknik Elektro Berbasis AI

> **Kamus & Platform Belajar Teknik Elektro All-in-One — dari referensi, alat hitung, simulasi, hingga asisten AI interaktif dalam satu aplikasi web.**
> Solo project oleh Beryl Nathaniel Sinaga — dibangun dari nol dengan pendekatan **AI-Assisted Development** sebagai wujud praktik engineering modern.

---

## 1. Judul & Konteks Proyek

### Nama & Deskripsi Proyek

**ElektroDict — Kamus & Platform Belajar Teknik Elektro** adalah platform belajar teknik elektro berbasis web yang dirancang sebagai **satu atap** untuk mahasiswa, pelajar SMK, dan maker/hobi elektronika di Indonesia. Bukan sekadar website kamus, ElektroDict menggabungkan empat pilar dalam satu aplikasi: **konten edukasi terstruktur**, **alat bantu hitung dan konversi**, **simulasi interaktif**, dan **asisten AI kontekstual** yang memahami materi yang sedang dipelajari user.

Tagline proyek ini — *Kamus Teknik Elektro lengkap, buat mahasiswa oleh mahasiswa* — mencerminkan tujuan utamanya: menyediakan referensi yang **akurat, berbahasa Indonesia, terintegrasi, dan bisa diakses kapan saja** tanpa harus berpindah-pindah antara YouTube, buku teks, forum, atau website asing yang terpisah dan tidak saling terhubung.

Secara teknis, ElektroDict adalah **Progressive Web App (PWA)** berbasis **Vanilla JavaScript (ES6+), HTML5, dan CSS3**, dengan backend **Vercel Serverless Functions (Node.js)** sebagai proxy aman untuk AI. Aplikasi mendukung **mode offline** untuk konten utama, **mode gelap/terang**, dan telah di-deploy sebagai static site dengan performa tinggi melalui **Vercel CDN**. Live di **https://elektrodict.vercel.app**.

Cakupan kontennya komprehensif: **150+ istilah kamus** (14 kategori), **11 modul materi** dengan total **80+ section**, **51+ template Lab Proyek** (Arduino Uno & ESP32, terverifikasi manual dengan diagram Wokwi), **50+ video pembelajaran** (10 topik), **timeline sejarah kelistrikan**, serta **8 kalkulator**, **resistor decoder**, dan **simulator gerbang logika**. Semua fitur ini tidak ditumpuk sebagai halaman terpisah, melainkan diorkestrasi dalam **Single Page Application (SPA)** tanpa framework — dengan navigasi tab yang mulus, state management manual, dan lazy initialization agar tetap ringan di perangkat HP.

Apa yang membedakan ElektroDict dari platform belajar biasa adalah **integrasi AI yang mendalam, bukan tempelan**: ElektroBot tahu modul apa yang sedang dibuka user, Lab Proyek AI bisa mengubah deskripsi bebas menjadi rancangan hardware lengkap, dan AI Vision bisa membaca foto soal atau skema rangkaian langsung dari kamera HP.

### Peran & Tanggung Jawab

Proyek ini adalah **solo project** — dikerjakan sepenuhnya oleh satu developer, dari **ide awal, riset konten, desain UI/UX, implementasi frontend dan backend serverless, prompt engineering untuk persona AI, manajemen keamanan API key, hingga deployment production di Vercel**.

Domain yang dikuasai dan dipertanggungjawabkan secara langsung:

- **UI/UX Design** — merancang sistem desain yang konsisten (sidebar navigasi, bottom-nav mobile, chat bubble, card materi, dark/light theme) dengan fokus pada **readability dan performa di HP**. Semua ikon menggunakan SVG inline, animasi menggunakan CSS transition saja, tidak ada library animasi berat.
- **Frontend Development (Vanilla JS)** — menulis **4.400+ baris** di `js/app.js` sebagai logika utama SPA, mengelola routing manual, render KaTeX async, manajemen state global, dan integrasi semua modul (`js/data.js`, `js/data-materi.js`, `js/modules/`).
- **Backend Serverless (Node.js)** — membangun `api/chat.js` sebagai proxy aman untuk **Groq API** dan **OpenRouter**, dengan **CORS protection**, **rate limit handling**, dan **multi-key fallback**. Tidak ada API key yang pernah menyentuh client.
- **Prompt Engineering** — merancang persona **ElektroBot** (formal, khusus elektro, menolak di luar domain dengan sopan), prompt untuk **Quiz AI Generator**, **Lab Proyek AI**, dan **AI Vision** (dua mode: Soal Analyzer & Rangkaian Analyzer) dengan aturan LaTeX yang ketat.
- **Content Creation** — menyusun **150+ entri kamus** (en, id, kategori, formula LaTeX, tags), **11 modul materi** (80+ section dengan contoh soal dan kuis mini), **51+ template Wokwi** (BOM, wiring guide, kode C++, diagram JSON, steps), **timeline** dan **kurasi 50+ video YouTube**.
- **DevOps & Security** — konfigurasi **Vercel** (clean URLs, CSP headers, rewrites untuk Wikipedia proxy), pengelolaan **environment variable** (`GROQ_API_KEYS`, `OPENROUTER_API_KEY`), serta **Content Security Policy** yang mencakup `*.firebaseio.com` untuk dashboard IoT.
- **Quality Assurance** — validasi manual **Wokwi diagram JSON** (agar tidak corrupt di `JSON.stringify()`), testing responsivitas breakpoint, audit performa tanpa framework, dan review keamanan API.

**Pendekatan pengembangan: AI-Assisted Development.** Proyek ini dikembangkan dengan bantuan tiga AI tools, namun developer tetap memegang **kendali penuh atas arsitektur, keputusan desain, dan code review akhir**:

- **Antigravity** — AI coding assistant berbasis browser, digunakan untuk **scaffolding awal**, **brainstorming arsitektur**, dan **drafting komponen UI**. Berguna pada fase eksplorasi saat struktur data kamus dan layout awal perlu diiterasi cepat.
- **OpenCode** — AI coding agent di terminal, digunakan untuk **refactoring skala besar**, **debugging logika kompleks di `app.js`**, serta **penambahan fitur baru** yang membutuhkan pemahaman konteks lintas file (misalnya sinkronisasi state antara modul materi dan chat context, atau perbaikan CSP dan breakpoint).
- **Kiro** — AI development environment (IDE dengan AI terintegrasi), digunakan untuk **perencanaan fitur**, **audit kode menyeluruh**, dan **pembuatan spesifikasi teknis** sebelum implementasi (contoh: spesifikasi Dashboard IoT Firebase dan kalkulator PUIL 2011).

Semua output dari ketiga tools tersebut **selalu ditinjau, diuji, dan direvisi manual** sebelum di-merge. Tidak ada kode yang masuk ke production tanpa dipahami dan disetujui developer. Pendekatan ini mencerminkan **cara kerja engineering modern**: AI sebagai **pair programmer** yang mempercepat iterasi, bukan sebagai pengganti pengambilan keputusan. Hal ini relevan dengan praktik industri saat ini, di mana kemampuan **berkolaborasi efektif dengan AI tools** menjadi nilai tambah yang nyata bagi seorang Web Developer & UI/UX Engineer.

### Latar Belakang & Masalah

Tiga observasi lapangan yang melatarbelakangi pembangunan ElektroDict:

**1. Fragmentasi sumber belajar.** Materi teknik elektro berbahasa Indonesia tersebar di banyak tempat: definisi di blog, rumus di PDF diktat, video di YouTube, contoh rangkaian di forum, kalkulator di website asing. Mahasiswa yang ingin belajar dari nol harus **berpindah-pindah platform**, dengan format dan kualitas yang tidak konsisten, serta sering kali tidak saling terhubung. Tidak ada satu platform yang menyediakan **referensi + alat hitung + simulasi + tanya-jawab AI** dalam satu pengalaman yang kohesif.

**2. Kesenjangan interaktivitas dan bahasa.** Platform yang ada — baik buku teks maupun website luar — cenderung **statis dan berbahasa Inggris**. Mereka menjelaskan rumus dengan teks saja tanpa visualisasi interaktif, tidak menyediakan alat praktik langsung (misalnya: hitung resistor, simulasi Hukum Ohm, atau generate proyek mikrokontroler), dan tidak ada asisten yang bisa ditanya dengan konteks materi yang sedang dibaca. Bagi pelajar Indonesia, hambatan bahasa dan kurangnya interaktivitas membuat proses belajar menjadi lebih lambat dan kurang engaging.

**3. Kebutuhan praktik yang terintegrasi.** Belajar elektro tanpa praktik adalah setengah jalan. Namun, untuk mencoba rangkaian, pelajar harus mencari template terpisah di Wokwi, mencari kode di GitHub, atau menonton tutorial yang tidak terkurasi. ElektroDict menjawab ini dengan **Lab Proyek AI**: user cukup mengetik ide bebas (“sistem penyiram tanaman otomatis”), dan AI akan menghasilkan **BOM, tabel wiring, kode C++, diagram Wokwi JSON, dan langkah perakitan** — lengkap dengan **51+ template terverifikasi** yang bisa langsung dibuka di simulator Wokwi dengan satu klik, serta **export PDF** untuk dokumentasi.

**Mengapa membangun sendiri, bukan memakai platform yang ada?** Karena tidak ada platform yang memenuhi kombinasi kebutuhan di atas secara bersamaan: **konten lokal + alat + simulasi + AI kontekstual + offline-ready + gratis diakses via browser tanpa instalasi**. Membangun dari nol dengan **Vanilla JS** memberi kontrol penuh atas **performa, bundle size, dan arsitektur data**, sehingga aplikasi tetap ringan meski memuat 150+ istilah, 80+ section materi, dan 51+ diagram JSON dalam satu bundle. Keputusan ini juga menjadi **portofolio yang kuat**: membuktikan kemampuan untuk **merancang dan mengeksekusi produk digital yang kompleks dari nol**, mengelola **konten dan kode yang sama-sama berat**, serta **mengamankan integrasi AI** dengan praktik terbaik — semua hal yang relevan untuk peran **Web Development & UI/UX** di industri.

---

## 2. Proses Pengerjaan

### Arsitektur & Keputusan Teknis

**Mengapa Vanilla JS, bukan React/Vue/Next.js?**

Keputusan paling fundamental adalah **tidak menggunakan framework**. Untuk aplikasi yang didominasi **konten statis yang besar** (150+ istilah, 11 modul, 51 template, 50 video, timeline), React atau Vue akan menambah **bundle overhead** (React + ReactDOM ~130KB gzipped, Next.js lebih besar lagi) tanpa memberikan keuntungan yang signifikan, karena sebagian besar halaman adalah **read-heavy**, bukan state-heavy yang membutuhkan virtual DOM diffing intensif.

Vanilla JS memberikan:

- **Kontrol penuh atas performa.** Tidak ada abstraction cost. Render grid kamus, filter kategori, dan animasi tab dilakukan dengan manipulasi DOM langsung dan CSS transition (`opacity` + `translateY`), sehingga tetap 60fps bahkan di HP low-end. Tidak ada hydration cost seperti di Next.js.
- **Zero bundle overhead.** Seluruh aplikasi di-serve sebagai **static files** (HTML/CSS/JS) via **Vercel CDN** dengan caching agresif. Tidak ada build step yang memperlambat iterasi, tidak ada node_modules raksasa di production.
- **Kemudahan deployment sebagai static site.** Cukup push ke GitHub → Vercel auto-deploy. Tidak perlu server Node yang selalu nyala, tidak perlu SSR. Cocok untuk konten yang sebagian besar bisa di-cache di CDN.
- **Kecocokan dengan data-heavy app.** Data kamus dan materi disimpan sebagai **plain JavaScript objects** di `data.js` dan `data-materi.js`, bukan di database. Ini membuat **penambahan konten tidak memerlukan perubahan logika** — cukup tambah entri baru, aplikasi langsung menampilkannya. Dengan framework, data seperti ini biasanya harus melalui props/state/SSR yang lebih kompleks.

**Arsitektur dua lapisan: data layer terpisah dari logic layer.**

Struktur proyek sengaja dipisah secara tegas:

- **Data Layer** — `js/data.js` (KAMUS, WOKWI_TEMPLATES, VIDEOS, TIMELINE, QUIZ_CATS) dan `js/data-materi.js` (MATERI_MODULES dengan sections, contoh, dan soal). File-file ini adalah **pure data**, tidak mengandung logika. Penambahan istilah baru atau modul baru hanya menyentuh file ini.
- **Logic Layer** — `js/app.js` (4.400+ baris, router SPA, render, state) dan `js/modules/` (fitur spesifik seperti `firebase-dashboard.js`, `materi.js`). Logic layer **membaca data layer**, bukan sebaliknya. Pemisahan ini membuat **codebase tetap maintainable** meski konten terus bertambah, dan memudahkan **code review** karena perubahan konten dan perubahan logika tidak tercampur.

Pola ini terbukti saat penambahan **3 modul materi baru** (Komunikasi Nirkabel, MCU Lanjut, Elektronika Daya) dan **10 template Wokwi baru** dilakukan hanya dengan menambah entri di `MATERI_MODULES` dan `WOKWI_TEMPLATES` tanpa menyentuh router atau render logic.

**Vercel Serverless sebagai security proxy.**

Semua panggilan AI tidak pernah dilakukan langsung dari browser. Frontend hanya memanggil **`POST /api/chat`** (dan `/api/project-gen`, `/api/vision`), yang diteruskan oleh **Vercel Serverless Function** (`api/chat.js`) ke **OpenRouter** (primary) atau **Groq API** (fallback). Keuntungan:

- **API key tidak pernah ada di client.** Key disimpan di **Vercel Environment Variable** (`GROQ_API_KEYS`, `OPENROUTER_API_KEY`, `GROQ_API_KEY`), frontend hanya mengirim `messages` dan `max_tokens`.
- **CORS protection** — serverless function memvalidasi `Origin` header, hanya mengizinkan `*.vercel.app`, `localhost`, dan `127.0.0.1`.
- **Rate limiting & fallback** — jika OpenRouter gagal atau Groq mengembalikan `429`/`500`, function otomatis mencoba **model lain** dari daftar fallback, dengan **random key rotation** dari pool `GROQ_API_KEYS` (dipisah koma).
- **Thinking tag stripping** — response dari reasoning model (yang mengandung `<think>...</think>`) di-strip di backend dengan regex sebelum dikirim ke frontend, sehingga **internal reasoning tidak bocor ke user**.

**Firebase REST API tanpa SDK untuk IoT Dashboard.**

Dashboard IoT memilih untuk **tidak menggunakan Firebase SDK** (yang menambah ~200KB bundle) dan sebagai gantinya menggunakan **Firebase Realtime Database REST API** langsung via `fetch()`:

```
GET  https://<project>-default-rtdb.firebaseio.com/<path>.json
PUT  https://<project>-default-rtdb.firebaseio.com/<path>.json  { data }
```

Polling dilakukan tiap **2 detik** dari browser, menampilkan data sensor (suhu, kelembaban, jarak, cahaya, gas, gerakan) dan grafik historis. Keuntungannya: **lebih ringan, tidak perlu autentikasi SDK, dan cukup menambahkan domain `*.firebaseio.com` dan `*.firebasedatabase.app` ke CSP `connect-src`** agar tidak diblokir browser di production. Keputusan ini adalah contoh **trade-off yang disengaja**: mengorbankan real-time push (WebSocket) demi **bundle size dan kesederhanaan**.

### Stack Teknologi

| Kategori | Teknologi | Kegunaan |
|---|---|---|
| **Frontend** | **Vanilla JavaScript (ES6+)** | Logika utama SPA — routing manual, state management, render dinamis tanpa framework |
| **Frontend** | **HTML5** | Struktur semantik, PWA splash screen, YouTube embed, Wokwi iframe |
| **Frontend** | **CSS3** | Sistem desain, dark/light theme, animasi transisi, responsivitas breakpoint 767/768px, print-to-PDF |
| **Backend / Serverless** | **Vercel Serverless Functions (Node.js)** | Proxy aman untuk AI — `api/chat.js`, `api/project-gen.js`, `api/vision.js` dengan CORS & rate limit |
| **Backend / Serverless** | **Node.js (v20.x)** | Runtime untuk serverless functions, handling `fetch` ke Groq/OpenRouter/Firebase/Wikipedia |
| **AI & API** | **Groq API** | Fallback AI provider — model `qwen/qwen3.6-27b`, `llama-3.3-70b-versatile`, `moonshotai/kimi-k2-instruct` |
| **AI & API** | **OpenRouter API** | Primary AI provider — model `qwen3.6-27b`, `glm`, `gemma` via `https://openrouter.ai/api/v1/chat/completions` |
| **AI & API** | **Groq Vision API** | Analisis gambar — endpoint yang sama dengan chat, payload `image_url` base64 |
| **AI & API** | **Wikipedia REST API** | Inline info di kamus via `https://id.wikipedia.org/api/rest_v1/page/summary/{title}` dengan proxy `/api/wiki-id-proxy` |
| **AI & API** | **YouTube Embed API** | 50+ video pembelajaran (10 topik) dengan `iframe` dan cross-link ke template Lab |
| **Database & Storage** | **Firebase Realtime Database (REST)** | IoT Dashboard — read/write sensor data via REST polling 2 detik, tanpa SDK |
| **Database & Storage** | **localStorage** | Cache Wikipedia (TTL 7 hari), chat history persistent (40 pesan terakhir), preferensi tema, progress materi |
| **Deployment & Infra** | **Vercel** | Hosting, CDN global, `cleanUrls`, `rewrites` untuk proxy, `headers` untuk CSP/HSTS |
| **Deployment & Infra** | **Vercel CDN + Headers** | CSP `connect-src` mencakup `api.groq.com`, `openrouter.ai`, `*.firebaseio.com`, `*.firebasedatabase.app`; HSTS, X-Frame-Options |
| **Rendering & Library** | **KaTeX 0.16.9 (CDN)** | Render rumus LaTeX — `katex.min.js` + `auto-render.min.js` dengan antrian `renderPendingMath()` |
| **Rendering & Library** | **Canvas API** | Resize gambar AI Vision, animasi Hukum Ohm & PWM, simulasi resistor & BJT |
| **Rendering & Library** | **jsPDF (on-demand)** | Export kamus/proyek ke PDF — di-load via `loadScript()` hanya saat dibutuhkan |
| **Rendering & Library** | **Mermaid (on-demand)** | Diagram alur — di-load on-demand untuk menghemat beban awal di HP |
| **AI Development Tools** | **Antigravity** | AI coding assistant berbasis browser — scaffolding awal, brainstorming arsitektur, drafting komponen UI |
| **AI Development Tools** | **OpenCode** | AI coding agent di terminal — refactoring, debugging, penambahan fitur kompleks di `app.js` |
| **AI Development Tools** | **Kiro** | AI environment (IDE terintegrasi) — perencanaan fitur, audit kode menyeluruh, pembuatan spesifikasi teknis |
| **Dev Tools & Workflow** | **Git & GitHub** | Version control, branch per fitur, code review sebelum merge ke production |
| **Dev Tools & Workflow** | **Vercel CLI (`vercel dev`)** | Local development dengan emulasi serverless di `http://localhost:3000` |
| **Dev Tools & Workflow** | **Wokwi Simulator** | Platform simulasi hardware — diagram JSON untuk 51+ template, integrasi satu klik |
| **Dev Tools & Workflow** | **ESLint (manual)** | Konsistensi style Vanilla JS tanpa build tool — review manual sebelum commit |

> **Catatan AI Development Tools:** Ketiga tools — **Antigravity, OpenCode, dan Kiro** — digunakan sebagai **pair programmer** dalam pendekatan AI-Assisted Development. Developer tetap bertanggung jawab penuh atas setiap keputusan arsitektur dan hasil code review akhir.

### Alur Pengembangan

Pengembangan ElektroDict dilakukan secara **iteratif dalam 5 fase**, masing-masing dengan fokus yang jelas dan **fallback design** agar aplikasi tetap berguna bahkan saat layanan AI sedang tidak tersedia (quota habis atau offline).

**Fase 1: Pondasi — Fitur Offline-First (Kamus + Kalkulator + Konversi)**

Dimulai dari fondasi yang **tidak bergantung pada AI sama sekali**. Tujuannya: memastikan aplikasi sudah memberikan nilai bahkan jika semua API mati.

- Membangun **Kamus Elektro** dengan 150+ istilah, filter 14 kategori, dan sort A-Z/populer. Data disimpan sebagai array `KAMUS` di `data.js` agar bisa di-serve sebagai static file tanpa database.
- Mengimplementasikan **8 kalkulator** dalam UI **chat-style** (Hukum Ohm, Daya, Energi, Seri/Paralel, Pembagi Tegangan, Filter RC, Resonansi RLC, PUIL) — setiap kalkulator adalah object di `CALCS` dengan `fields` dan `calc()` yang pure function.
- Menambahkan **Konversi Satuan** (6 besaran) dan **Kode Warna Resistor** (4 & 5 gelang + SMD) dengan perhitungan langsung di frontend, tanpa perlu API.
- Hasil: aplikasi sudah bisa digunakan untuk belajar dan menghitung **sepenuhnya offline** setelah load pertama (PWA). Fase ini membangun **kepercayaan**: user tahu aplikasi tidak akan blank page jika AI sedang down.

**Fase 2: Konten — Content-Heavy (Modul Materi + Resistor + Timeline)**

Fokus bergeser ke **kedalaman konten**, bukan fitur baru.

- Menyusun **11 modul materi** terstruktur dari **Dasar Listrik → PLC → IoT → Energi Terbarukan → Instrumentasi**, masing-masing dengan **6–9 section**, **contoh soal bertahap**, dan **kuis mini**. Total **80+ section** dengan konten HTML yang di-embed langsung (offline-ready) dan rumus KaTeX (`\(...\)` inline, `$$...$$` display).
- Menambahkan **animasi interaktif** di modul Dasar Listrik: **Hukum Ohm** (slider tegangan/hambatan → simulasi arus + nyala lampu pada canvas) dan **PWM** (duty cycle → gelombang + LED). Animasi ini menggunakan **Canvas API** murni, bukan library.
- Membangun **Timeline Sejarah Kelistrikan** (Pra-1800 hingga Era AI) dengan filter per era dan accordion, serta **Standar K3** (PUIL 2011, KHA kabel, IP Rating).

**Fase 3: AI Integration — Inti Kecerdasan (ElektroBot + Quiz AI + AI Vision + Lab Proyek AI)**

Fase paling kompleks secara teknis, di mana semua fitur AI diintegrasikan melalui **satu pintu**: `api/chat.js`.

- **ElektroBot AI** — chatbot dengan persona **ElektroBot** (formal, khusus elektro, menolak di luar domain). Dibangun dengan **dual panel** (desktop sidebar + mobile modal) yang sinkron via `localStorage`, **persistent history** (40 pesan terakhir dengan render ulang saat reload), **text-to-speech**, dan **konteks materi dinamis** (jika user membuka modul tertentu, system prompt otomatis disuntik dengan daftar bab modul tersebut).
- **Quiz AI Generator** — user memilih kategori dan tingkat kesulitan, lalu AI di-Groq menghasilkan **5 soal pilihan ganda** dalam format JSON yang di-parse dan dirender sebagai kuis interaktif.
- **AI Vision** — dua mode (Soal Analyzer & Rangkaian Analyzer) yang menerima **foto dari kamera HP**, me-resize di frontend dengan **Canvas API** sebelum dikirim sebagai base64 ke **Groq Vision API**. Hasilnya di-parse sebagai Markdown + LaTeX dan dirender dengan KaTeX.
- **Lab Proyek AI** — fitur paling diferensiasi: user mengetik ide bebas, AI menghasilkan **JSON terstruktur** (BOM, wiring table, kode C++, Wokwi diagram), yang langsung bisa di-**export PDF** atau dibuka di **Wokwi simulator** dengan satu klik. Ditambah **51+ template verified** yang terkurasi manual.

Setiap fitur AI dirancang dengan **fallback yang anggun**: jika API gagal (429 atau 500), sistem menampilkan pesan informatif dan menawarkan retry, tanpa merusak pengalaman fitur non-AI.

**Fase 4: Advanced Features — Ekosistem Praktik (IoT Dashboard + Export PDF + PWA)**

Memperluas dari belajar menjadi **membangun**.

- **Dashboard IoT Firebase** — user memasukkan **Firebase Realtime Database URL**, lalu dashboard melakukan **polling REST tiap 2 detik** untuk menampilkan data sensor ESP32 (suhu, kelembaban, jarak, cahaya, gas, gerakan) dalam **card + grafik historis**. Fitur kontrol juga tersedia: **slider servo 0–180°** dan **color picker RGB LED** yang menulis balik ke Firebase via `PUT`, lalu dibaca oleh ESP32. Semua tanpa SDK, hanya `fetch()`.
- **Export PDF** — menggunakan **print-to-PDF CSS** (`@media print`) dan **jsPDF** (di-load on-demand) untuk mengekspor kamus atau detail proyek Lab.
- **PWA** — `manifest`, `theme-color`, `apple-touch-icon` (192 dan 128), dan `splash screen` agar bisa di-install ke HP/desktop.

**Fase 5: Refinement — Audit, Keamanan, dan Performa**

Fase pematangan sebelum production:

- **Audit bug menyeluruh** — memperbaiki **Temporal Dead Zone** (`materiChatCtx` dipindah ke atas sebelum `switchTab`), **null check** di `getWikiInfo()`, **SVG icon yang hancur** akibat `textContent` di `toggleTheme()` (diganti `innerHTML`), serta **CSP Firebase yang hilang** (`connect-src` ditambah `*.firebaseio.com`).
- **Responsivitas** — menyeragamkan **breakpoint 767/768px** (mobile `max-width:767px`, desktop `min-width:768px`) untuk menghindari gap 1px di iPad 768px, serta menghapus **FAB duplikat** yang masih ada di DOM tapi di-hide via CSS.
- **Performa** — memastikan **KaTeX** dan **Mermaid** hanya di-load saat dibutuhkan, **Wokwi diagram JSON** tervalidasi agar tidak corrupt, dan **page load tetap cepat** meski membawa 51+ template.
- **Security headers** — CSP, HSTS, X-Frame-Options, dan CORS di `vercel.json` dan `api/chat.js` ditinjau ulang.

Setiap fase diakhiri dengan **manual testing di HP dan desktop**, serta **review kode** untuk memastikan tidak ada regresi pada fase sebelumnya.

### Tantangan & Solusi (Problem Solving)

#### 1. Strip `<think>...</think>` Tag dari AI Response

**🔴 Masalah:** Model reasoning seperti `qwen3.6-27b` dan `moonshotai/kimi-k2-instruct` di Groq sering membungkus proses berpikir internal mereka dalam tag `<think>...</think>` di dalam `choices[0].message.content`. Jika tag ini tidak dibersihkan, user akan melihat **rant panjang reasoning mentah** (puluhan baris) sebelum jawaban sebenarnya — pengalaman yang membingungkan dan tidak profesional, serta membocorkan internal chain-of-thought model.

**💡 Solusi:** Di **`api/chat.js`**, setelah menerima response dari Groq/OpenRouter dan sebelum `return res.status(200).json(data)`, ditambahkan loop pembersihan di backend:

```js
for (const ch of data.choices) {
  if (ch.message) {
    if (ch.message.reasoning) delete ch.message.reasoning;
    if (typeof ch.message.content === 'string') {
      ch.message.content = ch.message.content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    }
  }
}
```

Frontend juga memiliki **lapisan kedua** di `js/app.js` dengan fungsi `stripThink()` yang melakukan hal yang sama sebelum render, sebagai pertahanan berlapis. Di sisi request, ditambahkan parameter `reasoning_effort: 'none'` (untuk Qwen) dan `reasoning_effort: 'low'` + `include_reasoning: false` (untuk Kimi) agar model sebisa mungkin tidak mengirim thinking sama sekali.

**✅ Hasil:** User hanya melihat **jawaban final yang bersih dan terstruktur**, tanpa jejak reasoning. Tidak ada lagi keluhan “jawaban AI panjang dan berantakan”. Pembersihan di **backend** memastikan bahkan jika frontend di-bypass, thinking tetap tidak bocor — ini adalah praktik **defense in depth** yang baik untuk keamanan dan UX.

#### 2. Resize Gambar Sebelum Kirim ke Vision API

**🔴 Masalah:** Foto yang diambil langsung dari kamera HP modern bisa berukuran **5–10 MB** (resolusi 12–48MP). Jika dikirim apa adanya sebagai base64 ke Groq Vision API, payload bisa melebihi **batas 20MB** yang ditolak API, atau setidaknya memperlambat upload secara signifikan di jaringan seluler. Selain itu, base64 dari 10MB akan menjadi ~13MB string, yang berat untuk `fetch()` dan `localStorage`.

**💡 Solusi:** Dibuat fungsi **`resizeImageForAI(dataUrl, maxDim=1600, quality=0.85)`** di `js/app.js` yang menggunakan **Canvas API** murni:

1. Load `dataUrl` ke `new Image()`.
2. Hitung `scale = min(1, 1600 / max(width, height))`.
3. Buat `canvas` dengan ukuran baru, isi background putih (untuk mengatasi PNG transparan), lalu `drawImage()` dengan scale.
4. Export kembali dengan `canvas.toDataURL('image/jpeg', 0.85)`.

Fungsi ini dipanggil di `handleAIVFile()` sebelum `aivImageB64` diisi, sehingga yang dikirim ke API selalu **JPEG terkompresi max 1600px**. Preview di UI tetap menampilkan gambar asli agar user tidak merasa kualitasnya turun.

**✅ Hasil:** Ukuran payload turun drastis — dari **5–10 MB menjadi 200–600 KB** (kompresi ~90%), tanpa kehilangan keterbacaan soal atau skema rangkaian. Request Vision API menjadi **2–4 detik** bahkan di jaringan 4G, dan tidak pernah lagi terkena error “payload too large”. Fitur AI Vision menjadi **andal di HP** dengan kamera apa pun.

#### 3. KaTeX Async Rendering Queue

**🔴 Masalah:** KaTeX di-load secara **deferred** via CDN (`<script defer src="katex.min.js">` dan `auto-render.min.js` dengan `onload="katexLoaded=true;renderPendingMath()"`). Artinya, saat halaman pertama kali dibuka, **konten kamus dan materi sudah di-render ke DOM** sebelum KaTeX siap. Jika `renderMath()` dipanggil saat `katex` masih `undefined`, formula akan tetap sebagai teks mentah `$$V=IR$$` dan tidak pernah dirender, meski KaTeX akhirnya ter-load beberapa detik kemudian. Bug ini intermiten dan sulit direproduksi — tergantung kecepatan jaringan.

**💡 Solusi:** Dibuat sistem **antrian `renderPendingMath()`** di `js/app.js`:

```js
let katexLoaded = false;
const pendingMathEls = [];
function renderPendingMath() {
  katexLoaded = true;
  pendingMathEls.forEach(item => {
    if (item.el && item.latex) katex.render(item.latex, item.el, {throwOnError:false});
    else if (item instanceof Element) doRenderMath(item);
  });
  pendingMathEls.length = 0;
  document.querySelectorAll('.eformula[data-latex]').forEach(el => {
    try { katex.render(el.dataset.latex, el, {throwOnError:false}); } catch(e){}
  });
}
function renderMath(el) {
  if (katexLoaded && typeof renderMathInElement === 'function') doRenderMath(el);
  else pendingMathEls.push(el);
}
```

Setiap kali ada elemen yang butuh render KaTeX (formula kamus, formula materi, hasil AI Vision), fungsi `renderMath(el)` dipanggil. Jika KaTeX belum siap, elemen dimasukkan ke `pendingMathEls`. Saat `katexLoaded` menjadi `true` (dipicu oleh `onload` di `<script>`), antrian dikuras dan semua formula di-render sekaligus. Untuk elemen yang sudah ada di DOM sebelum KaTeX load, dilakukan **query ulang** `document.querySelectorAll('.eformula[data-latex]')`.

**✅ Hasil:** **Tidak ada lagi formula yang gagal render**. Baik di load pertama yang lambat maupun di navigasi cepat antar tab, semua rumus — dari `V = IR` hingga `f_r = 1/(2π√LC)` — selalu tampil sebagai **tipografi matematika yang rapi**, bukan teks mentah. Pengalaman belajar menjadi konsisten di semua kondisi jaringan.

#### 4. API Key Security via Serverless Proxy

**🔴 Masalah:** Jika API key Groq/OpenRouter diletakkan langsung di frontend (misalnya di `js/api.js` sebagai `const GROQ_KEY = "gsk_..."`), siapa pun bisa membuka **DevTools → Network** atau **View Source** dan mencuri key tersebut. Key yang bocor bisa disalahgunakan untuk menghabiskan quota, menimbulkan biaya, atau bahkan diblokir provider. Ini adalah **kesalahan keamanan yang paling umum** di proyek AI frontend.

**💡 Solusi:** Semua key **hanya disimpan di Vercel Environment Variable** (`GROQ_API_KEYS`, `GROQ_API_KEY`, `OPENROUTER_API_KEY`) dan **tidak pernah ada di repository atau di bundle client**. Frontend hanya memanggil endpoint internal:

```
POST /api/chat  { messages, max_tokens, temperature }
```

`api/chat.js` di Vercel Serverless yang bertugas:

1. Membaca key dari `process.env` (dengan fallback multi-key: `GROQ_API_KEYS` dipisah koma, lalu `random pick` untuk load balancing).
2. Meneruskan request ke `https://api.groq.com/openai/v1/chat/completions` atau `https://openrouter.ai/api/v1/chat/completions` dengan header `Authorization: Bearer <key>` yang hanya ada di server.
3. Menerapkan **CORS protection** — hanya mengizinkan origin `*.vercel.app`, `localhost`, dan `127.0.0.1`; origin lain mendapat `403`.
4. Menambahkan **CSP headers** di `vercel.json` yang membatasi `connect-src` hanya ke domain yang diizinkan (`api.groq.com`, `openrouter.ai`, `*.firebaseio.com`, dll.), sehingga browser memblokir upaya exfiltrasi ke domain lain.

Frontend di `js/api.js` (`window.ElektroAPI`) bahkan tidak tahu nama model yang dipakai — model ditentukan di backend via `DEFAULT_MODEL = 'qwen/qwen3.6-27b'`.

**✅ Hasil:** **Zero key exposure**. Audit dengan `grep -r "gsk_" js/` menghasilkan **0 hasil** — tidak ada key yang bocor di client. Quota aman, dan jika key perlu di-rotate, cukup ganti di Vercel dashboard tanpa redeploy frontend. Pola **serverless proxy** ini adalah **best practice** yang diharapkan di industri untuk setiap integrasi AI di production, dan menjadi nilai jual yang kuat dalam portofolio ini.

---

## 3. Fitur Unggulan

> Enam fitur di bawah ini dipilih karena paling menunjukkan **kedalaman teknis dan kreativitas** — bukan sekadar CRUD, melainkan fitur yang membutuhkan integrasi lintas teknologi, penanganan edge case, dan desain UX yang matang.

### 🧪 Lab Proyek AI — Generate Proyek Mikrokontroler dari Deskripsi Bebas

**Apa:** User mengetik ide bebas dalam bahasa Indonesia (“buat sistem monitoring suhu dengan ESP32 dan OLED”), lalu AI menghasilkan **rancangan proyek lengkap**: daftar komponen (BOM), tabel wiring, kode C++ Arduino, dan diagram Wokwi JSON — yang bisa langsung dibuka di simulator Wokwi dengan satu klik atau di-export sebagai PDF.

**Kenapa menarik secara teknis:** Fitur ini adalah **pipeline AI → JSON terstruktur → render multi-format**. Prompt di `api/project-gen.js` dirancang agar AI mengembalikan **JSON valid** dengan skema ketat (`bom[]`, `wiring_guide[]`, `cpp_code`, `wokwi_diagram` sebagai string JSON, `steps[]`). Di frontend (`js/modules/project-lab.js`), JSON tersebut di-**validate**: `JSON.parse(wokwi_diagram)` harus sukses, `cpp_code` harus mengandung `setup()`/`loop()`, dan `bom` tidak boleh kosong — jika gagal, user diberi pesan error yang jelas, bukan crash. Diagram Wokwi di-render sebagai **string yang di-stringify dua kali** (`JSON.stringify({ version:1, parts:[...] })`) agar bisa di-embed di JavaScript tanpa corrupt. Ditambah **51+ template verified** yang terkurasi manual sebagai fallback saat AI sedang down — user tetap bisa belajar dari template siap pakai.

**Demo:** Buka **Lab Proyek** → ketik “lampu otomatis dengan sensor cahaya LDR” → pilih board **ESP32** → klik **Generate Proyek** → tunggu 5–10 detik → lihat hasil BOM + wiring + kode + diagram → klik **Buka di Wokwi** atau **Export PDF**.

### 🤖 ElektroBot dengan Konteks Materi — Asisten yang Tahu Kamu Lagi Belajar Apa

**Apa:** Chatbot ElektroBot yang **otomatis tahu modul materi apa yang sedang dibuka user**. Jika user sedang membaca modul “Motor Listrik”, ElektroBot akan menjawab dengan referensi ke bab-bab modul tersebut, bukan jawaban generik.

**Kenapa menarik secara teknis:** Konteks materi diimplementasikan via **sistem prompt dinamis**. Saat user membuka modul, `openMateriModule(id)` membangun object `materiChatCtx = { active: true, prompt: "User sedang membaca modul 'Motor Listrik'... Daftar bab: 1. Motor DC, 2. Motor Induksi, ..." }`. Saat user mengirim chat dari tab materi, `send()` di `js/app.js` menyuntikkan `materiChatCtx.prompt` ke `system` message sebelum `cleanHistory` dikirim ke `/api/chat`. Variabel `materiChatCtx` dan `materiWelcomeShown` dideklarasikan di **baris paling atas** (sebelum `switchTab`) untuk menghindari **Temporal Dead Zone (TDZ)** — bug yang pernah terjadi saat deklarasi masih di bawah `switchTab` dan menyebabkan `ReferenceError` di beberapa browser. ElektroBot juga memiliki **persistent history** (40 pesan terakhir di `localStorage` dengan separator visual), **dual panel sync** (desktop sidebar + mobile modal selalu sinkron), dan **rate limit handling** (jika 429, UI menampilkan countdown dan auto-recovery).

**Demo:** Buka **Materi** → pilih modul **“Motor Listrik & Pengendalian”** → klik **Tanya AI** di dalam modul → tanyakan “jelaskan perbedaan motor DC dan induksi” — perhatikan jawaban yang merujuk ke bab-bab modul tersebut, bukan jawaban umum.

### 👁️ AI Vision — Baca Foto Soal & Rangkaian Langsung dari Kamera HP

**Apa:** User memotret **soal ujian** atau **skema rangkaian** dengan kamera HP, lalu AI menganalisis gambar dan memberikan penjelasan langkah-demi-langkah atau identifikasi komponen — dengan dua mode: **Soal Analyzer** dan **Rangkaian Analyzer**.

**Kenapa menarik secara teknis:** Fitur ini menyelesaikan **tiga tantangan sekaligus**: (1) **Ukuran file** — foto HP 5–10MB di-resize via **Canvas API** (`resizeImageForAI()` → max 1600px, JPEG q0.85) sebelum dikirim sebagai base64, sehingga payload turun 90% dan tidak melebihi batas Groq 20MB. (2) **Multimodal API** — payload dikirim sebagai `messages: [{ role:'user', content: [{type:'image_url', image_url:{url: "data:image/jpeg;base64,..."}}, {type:'text', text: prompt}] }]` ke endpoint yang sama dengan chat, dengan `temperature: 0.3` untuk akurasi. (3) **Render hasil** — response AI berupa Markdown + LaTeX di-parse oleh `parseAIText()` (yang melindungi blok `$$...$$` dan `$...$` agar tidak di-escape oleh `marked`), lalu dirender dengan `renderAIVMath()` yang menggunakan KaTeX async queue. Mode **Soal** dan **Rangkaian** memiliki **system prompt yang berbeda** di `AIV_PROMPTS`, sehingga AI tahu harus menjawab sebagai tutor atau sebagai insinyur.

**Demo:** Buka **AI Vision** → pilih mode **Soal dari Foto** → tap **Pilih Foto** → foto soal Hukum Ohm → klik **Analisis dengan AI** → lihat jawaban bertahap dengan rumus yang ter-render rapi.

### 📊 Dashboard IoT Firebase — Pantau & Kontrol ESP32 Real-Time dari Browser

**Apa:** Dashboard yang memantau **6 sensor ESP32** (suhu, kelembaban, jarak, cahaya, gas, gerakan) secara real-time via **Firebase Realtime Database**, plus **grafik historis** dan **kontrol aktuator** (servo 0–180°, RGB LED) langsung dari browser.

**Kenapa menarik secara teknis:** Dashboard ini **tidak menggunakan Firebase SDK** sama sekali — hanya **REST API** via `fetch()` (`GET /<path>.json` dan `PUT /<path>.json` dengan `Content-Type: application/json`). Polling dilakukan tiap **2 detik** dengan `setInterval`, dan data historis disimpan di array frontend untuk digambar dengan **Canvas** sebagai grafik garis. Kontrol servo dan RGB bekerja dua arah: browser menulis nilai ke Firebase (`/servo/sudut`, `/rgb/merah`), dan ESP32 (yang menjalankan kode dari template Wokwi) membaca nilai tersebut via `HTTPClient` dan menggerakkan hardware. Untuk keamanan, **CSP `connect-src`** di `vercel.json` harus mencakup `https://*.firebaseio.com` dan `https://*.firebasedatabase.app` — tanpanya, browser memblokir semua request Firebase di production. Fitur ini juga menangani **URL Firebase yang fleksibel** (user bisa memasukkan URL project mereka sendiri) dan **export JSON** untuk data historis.

**Demo:** Buka **Dashboard IoT Firebase** (dari Lab Proyek → Dashboard) → masukkan URL Firebase Realtime Database (atau gunakan template “IoT Suhu & Kelembaban Firebase” untuk mendapatkan URL contoh) → klik **Mulai Pantau** → lihat card sensor update tiap 2 detik → geser **slider servo** atau ubah **warna RGB** → perhatikan ESP32 (di Wokwi atau hardware asli) merespons.

### 🧮 Kalkulator PUIL — Sizing Kabel & MCB Sesuai Standar PUIL 2011

**Apa:** Kalkulator yang menghitung **ukuran kabel (KHA)** dan **rating MCB** yang sesuai dengan **standar PUIL 2011** berdasarkan daya beban, sistem (1 fasa / 3 fasa), dan faktor daya — lengkap dengan tabel referensi KHA dan IP Rating.

**Kenapa menarik secara teknis:** Tidak seperti kalkulator lain yang hanya menghitung `V=IR`, kalkulator PUIL mengimplementasikan **logika standar industri**: (1) Hitung **arus beban** (`I = P / (√3 × 380 × cosφ)` untuk 3 fasa, `P/220` untuk 1 fasa). (2) Hitung **KHA minimum** (`I × 1.25`). (3) Cari **ukuran kabel terkecil** yang KHA-nya ≥ KHA minimum dari tabel `PUIL_KHA` (1.5mm²=15A hingga 120mm²=225A, dengan **minimum 2.5mm² untuk sirkuit daya** sesuai PUIL). (4) Cari **MCB terkecil** yang rating-nya ≥ arus beban dari tabel `PUIL_MCB`, lalu **validasi silang**: jika MCB > KHA kabel, naikkan ukuran kabel. Semua logika ini ada di `hitungPUIL()` di `js/app.js` sebagai **pure function** yang diuji dengan berbagai skenario (beban 2200W, motor 3 fasa, dll.). Hasilnya ditampilkan dalam UI **chat-style** yang sama dengan kalkulator lain, sehingga user merasa konsisten.

**Demo:** Buka **Kalkulator** → scroll ke **Kalkulator PUIL** → masukkan **Daya 2200W**, sistem **1 fasa** → klik **Hitung** → lihat rekomendasi kabel **2.5mm² (KHA 20A)** dan **MCB 16A** dengan daya maks yang bisa dilayani.

### ⚡ Animasi Interaktif Hukum Ohm — Slider yang Menghidupkan Fisika

**Apa:** Di dalam modul **Dasar Listrik**, terdapat animasi interaktif **Hukum Ohm** di mana user bisa menggeser **slider tegangan (1–24V)** dan **hambatan (10–1000Ω)**, lalu melihat **arus yang mengalir, daya yang dihasilkan, kecepatan titik arus, dan nyala lampu** berubah secara real-time.

**Kenapa menarik secara teknis:** Animasi ini dibangun dengan **Canvas API murni** tanpa library — menggambar **baterai, resistor zigzag, LED dengan glow radial, amperemeter, dan 14 titik arus** yang bergerak searah jarum jam dengan kecepatan yang proporsional dengan arus (`speed = 0.0007 + min(0.02, I×0.011)`). Setiap perubahan slider memicu `ohmUpdate()` yang menghitung `I=V/R` dan `P=V×I`, lalu memanggil `ohmLoop()` via `requestAnimationFrame` untuk menggambar ulang. LED menggunakan **radial gradient** dengan `glow` yang membesar seiring arus, sehingga user **melihat** hubungan `V=IR` secara visual, bukan hanya angka. Animasi ini juga menangani **lifecycle**: `stopMateriAnims()` dipanggil saat user pindah tab agar `requestAnimationFrame` tidak terus berjalan di background dan menghabiskan baterai HP. Bersama animasi **PWM** (duty cycle → gelombang persegi + LED), modul Dasar Listrik menjadi contoh bagaimana **konten edukasi bisa dibuat hidup** tanpa video.

**Demo:** Buka **Materi** → **Dasar Listrik** → scroll ke **Hukum Ohm (+ Animasi Interaktif)** → geser **slider Tegangan** ke 12V dan **Hambatan** ke 100Ω → amati arus menjadi 120mA, daya 1.44W, titik arus bergerak cepat, dan LED menyala terang → turunkan tegangan ke 3V → lihat semuanya melambat dan meredup.

---

## 4. Hasil Akhir & Dampak

### 🔗 Live Demo

**URL:** **https://elektrodict.vercel.app**

**Cara Eksplorasi Terbaik (4 langkah, 5 menit):**

1. **Mulai dari Kamus (1 menit)** — Ketik “hukum ohm” di pencarian, lihat filter 14 kategori dan sort, klik card untuk melihat rumus KaTeX dan info Wikipedia inline. Coba sort **A-Z** atau **Terpopuler** untuk merasakan kedalaman 150+ istilah.
2. **Masuk ke Materi → Dasar Listrik (2 menit)** — Buka modul **Dasar Listrik**, coba **animasi Hukum Ohm** dengan slider, lalu scroll ke **kuis mini** dan jawab 2–3 soal. Perhatikan bagaimana modul bertingkat (Pemula → Lanjut) memandu alur belajar.
3. **Coba AI (1 menit)** — Klik **Tanya AI** di sidebar, tanyakan “apa itu transistor BJT?” — lihat jawaban dengan LaTeX yang rapi. Lalu buka **Lab Proyek AI**, ketik “deteksi gas bocor dengan buzzer”, pilih **Arduino Uno**, dan lihat bagaimana AI menghasilkan BOM + wiring + kode + diagram Wokwi.
4. **Lihat Ekosistem Praktik (1 menit)** — Buka **AI Vision** (foto soal), **Dashboard IoT Firebase** (simulasi sensor), atau **Video Pembelajaran** (filter 10 topik) untuk melihat bagaimana semua fitur saling terhubung — bukan halaman terpisah, melainkan **satu produk yang kohesif**.

Aplikasi bisa diakses **tanpa login, tanpa install**, langsung di browser HP atau desktop. Konten utama (kamus, kalkulator, materi) **bisa offline** setelah load pertama.

### 📊 Metrik & Skala Konten

**Konten — angka tepat, bukan estimasi:**

| Kategori | Jumlah | Detail |
|---|---|---|
| **Istilah Kamus** | **150+** | 14 kategori: dasar, komponen, rangkaian, daya, digital, elektronika, pengukuran, sinyal, terbarukan, instalasi, mesin, kontrol, komunikasi, distribusi |
| **Modul Materi** | **11 modul** | 80+ section total — dari Dasar Listrik hingga PLC, IoT, Energi Terbarukan, Instrumentasi, Sistem Ketenagalistrikan |
| **Template Lab Proyek** | **51+ terverifikasi** | Arduino Uno & ESP32, masing-masing dengan BOM + `wiring_guide` + `cpp_code` + `wokwi_diagram` JSON + `steps` — validasi `JSON.stringify()` manual |
| **Video Pembelajaran** | **50+ video** | 10 topik, embed YouTube langsung dengan cross-link ke template Lab terkait |
| **Kalkulator** | **8 interaktif** | Hukum Ohm, Daya, Energi, Seri/Paralel, Pembagi Tegangan, Filter RC, Resonansi RLC, PUIL 2011 |
| **Gerbang Logika** | **7 gerbang** | AND/OR/NOT/NAND/NOR/XOR/XNOR dengan truth table dinamis dan highlight posisi saklar |
| **Resistor Decoder** | **4 & 5 gelang + SMD** | Hasil langsung dengan range toleransi (format `1000 Ω ±5% → Range: 950 Ω ~ 1050 Ω`) |
| **Konversi Satuan** | **6 besaran** | Arus, tegangan, daya, resistansi, kapasitansi, induktansi dengan toBase/fromBase |
| **Timeline Sejarah** | **Pra-1800 → Era AI** | Filter 4 era, accordion per item, data di `TIMELINE` (`data.js`) |

**Codebase — skala yang dikelola solo:**

| File | Peran | Skala |
|---|---|---|
| `js/app.js` | Logika utama SPA | **4.400+ baris** — routing, render, state, KaTeX queue, chat, quiz, kalkulator, materi, resistor, konversi, timeline, export |
| `js/data.js` | Data layer | `KAMUS` (150+ entri) + `WOKWI_TEMPLATES` (51+ template) + `VIDEOS` (50+) + `TIMELINE` + `QUIZ_CATS` + `ABOUT_MD` |
| `js/data-materi.js` | Modul materi | 11 modul — setiap modul: `sections[]` + `contoh[]` + `soal[]`, total 80+ section |
| `api/chat.js` | Serverless proxy | Dual provider (OpenRouter primary, Groq fallback), multi-key rotation, thinking strip, CORS, rate limit handling |
| `api/project-gen.js` | Lab Proyek AI | Prompt → JSON terstruktur → validasi → response, dengan board-specific logic (Uno vs ESP32) |
| `api/vision.js` | AI Vision proxy | Meneruskan image base64 ke Groq Vision, handling payload besar |
| `css/style.css` | Sistem desain | Dark/light theme, animasi tab (`opacity` + `translateY`), responsivitas 767/768px, print-to-PDF |
| `index.html` | Shell SPA | Navigasi dual-mode (sidebar desktop + bottom-nav mobile), PWA meta, deferred KaTeX/CDN |

**Integrasi API — 5 layanan eksternal:**

| API | Kegunaan | Endpoint |
|---|---|---|
| **Groq API** | Chat, quiz generation, vision analysis, project generation (fallback) | `https://api.groq.com/openai/v1/chat/completions` — model `qwen/qwen3.6-27b`, `llama-3.3-70b-versatile`, `moonshotai/kimi-k2-instruct` |
| **OpenRouter API** | Primary AI provider | `https://openrouter.ai/api/v1/chat/completions` — model `qwen/qwen3.6-27b` |
| **Firebase Realtime Database REST** | IoT Dashboard | `https://<project>-default-rtdb.firebaseio.com/<path>.json` — polling 2 detik, tanpa SDK |
| **Wikipedia REST API** | Inline info di kamus | `https://id.wikipedia.org/api/rest_v1/page/summary/{title}` via proxy `/api/wiki-id-proxy` |
| **YouTube Embed API** | Video pembelajaran | `https://www.youtube.com/embed/{videoId}` dengan cross-link ke Wokwi template |

### 💡 Apa yang Dipelajari

Empat refleksi jujur dari proses membangun ElektroDict dari nol sebagai solo developer:

**1. Tentang AI-Assisted Development — AI sebagai pair programmer, bukan pengganti.**

Awalnya, godaan untuk “biarkan AI menulis semuanya” sangat besar — terutama saat Antigravity bisa menghasilkan scaffolding kamus dalam hitungan detik. Namun, pelajaran paling berharga adalah: **AI paling efektif saat developer sudah tahu apa yang ingin dibangun**. Antigravity membantu di fase brainstorming, OpenCode mempercepat refactoring yang membosankan (misalnya memindahkan `materiChatCtx` untuk memperbaiki TDZ di 4.400 baris), dan Kiro berguna untuk audit sebelum production. Tapi **setiap keputusan arsitektur** — mengapa Vanilla JS bukan React, mengapa data layer dipisah, mengapa Firebase tanpa SDK — **tetap harus dibuat dan dipertanggungjawabkan oleh manusia**. Tanpa ownership ini, kode yang dihasilkan AI akan menjadi **black box yang tidak bisa di-maintain**. Pelajaran ini membentuk cara kerja yang relevan di industri: **menguasai AI tools tanpa kehilangan kemampuan untuk berpikir dan memutuskan secara mandiri**.

**2. Tentang keamanan API — proxy serverless bukan opsional, melainkan keharusan.**

Di awal, sempat tergoda untuk memanggil Groq langsung dari frontend demi kesederhanaan. Namun, satu pencarian `grep -r "gsk_" js/` yang menghasilkan 0 hasil adalah **bukti nyata** bahwa pendekatan proxy berhasil. Belajar bahwa **CSP headers** (`connect-src` di `vercel.json`) bukan sekadar formalitas — tanpa `https://*.firebaseio.com` di `connect-src`, seluruh Dashboard IoT Firebase **diblokir browser di production** meski di localhost lancar. Juga belajar bahwa **CORS di serverless function** harus eksplisit (hanya `*.vercel.app` dan `localhost`), bukan `*`, untuk mencegah penyalahgunaan. Keamanan bukan fitur tambahan — ia adalah **fondasi** yang harus dirancang sejak hari pertama.

**3. Tentang performa tanpa framework — trade-off Vanilla JS yang nyata.**

Memilih Vanilla JS berarti **tidak ada yang mengurus re-render untuk kita**. Setiap `innerHTML`, setiap `querySelector`, setiap `requestAnimationFrame` harus dikelola manual. Keuntungannya: **bundle 0KB framework overhead**, load pertama di HP hanya **~400KB** (HTML+CSS+JS+KaTeX CDN), dan tidak ada hydration delay. Tantangannya: **state management manual** — variabel global seperti `kat`, `sortMode`, `materiChatCtx`, `chatHistory` harus dijaga konsistensinya, dan bug seperti **TDZ** atau **textContent yang menghapus SVG** hanya muncul karena tidak ada abstraksi yang melindungi. Pelajaran ini mengajarkan **apresiasi mendalam terhadap apa yang framework lakukan** — dan kapan framework justru tidak dibutuhkan. Untuk konten-heavy app seperti ElektroDict, Vanilla JS adalah **keputusan yang tepat**, tapi untuk state-heavy app yang berbeda, React mungkin lebih baik. Kemampuan untuk **mengevaluasi trade-off ini secara jujur** adalah skill engineering yang penting.

**4. Tentang content + code — mengelola proyek yang berat di kedua sisi.**

ElektroDict bukan hanya proyek kode — ia juga proyek konten. Menulis **150+ definisi istilah** dengan rumus LaTeX yang valid, menyusun **11 modul materi** dengan 80+ section yang masing-masing memiliki contoh soal dan kuis, serta mengkurasi **51 template Wokwi** dengan diagram JSON yang harus valid — semuanya membutuhkan **disiplin yang sama dengan menulis kode**. Pelajaran terbesar: **pisahkan data dan logic sejak awal**. Dengan `data.js` dan `data-materi.js` sebagai data layer murni, penambahan 3 modul baru dan 10 template baru bisa dilakukan **tanpa menyentuh `app.js` sama sekali**. Tanpa pemisahan ini, codebase 4.400+ baris akan menjadi **monolit yang menakutkan**. Ini mengajarkan pentingnya **arsitektur yang memisahkan concern** — prinsip yang berlaku baik untuk kode maupun untuk konten, dan relevan untuk peran **Web Development & UI/UX** di mana desainer dan developer harus mengelola aset dan logic secara bersamaan.

---

## 5. Snapshot Arsitektur

Diagram alur data utama ElektroDict — dari browser hingga layanan eksternal:

```
User (Browser)
    │
    ├── Static Files (HTML/CSS/JS) ──→ Vercel CDN
    │         │
    │         ├── js/data.js (KAMUS, WOKWI_TEMPLATES, VIDEOS, TIMELINE)
    │         ├── js/data-materi.js (MATERI_MODULES — 11 modul, 80+ section)
    │         ├── js/app.js (4.400+ baris — SPA router, render, state)
    │         ├── css/style.css (dark/light, animasi, print-to-PDF)
    │         └── KaTeX CDN (deferred) ──→ renderPendingMath() queue
    │
    ├── /api/chat ──→ Vercel Serverless (api/chat.js) ──→ OpenRouter API (primary)
    │                       │                              └── Groq API (fallback)
    │                       │                                   │
    │                       │                              qwen3.6-27b / llama-3.3-70b
    │                       │                              moonshotai/kimi-k2-instruct
    │                       │
    │               (API key aman di env var, tidak pernah ke client)
    │               CORS: *.vercel.app + localhost, CSP: connect-src
    │               Thinking strip: <think>...</think> → regex di backend
    │               Multi-key rotation: GROQ_API_KEYS (random pick)
    │
    ├── /api/project-gen ──→ Vercel Serverless ──→ Groq/OpenRouter (JSON mode)
    │         (deskripsi bebas → BOM + wiring + kode C++ + Wokwi JSON)
    │
    ├── /api/vision ──→ Vercel Serverless ──→ Groq Vision API
    │         (image base64 via Canvas resize max 1600px JPEG q0.85)
    │
    ├── Firebase REST ──→ Realtime Database (IoT sensor data)
    │         │
    │         ├── GET  https://<project>.firebaseio.com/<path>.json (polling 2s)
    │         ├── PUT  https://<project>.firebaseio.com/<path>.json (kontrol servo/RGB)
    │         └── CSP: https://*.firebaseio.com + https://*.firebasedatabase.app
    │
    ├── Wikipedia Proxy ──→ /api/wiki-id-proxy ──→ Wikipedia REST API
    │         (id.wikipedia.org/api/rest_v1/page/summary/{title}, cache 7 hari di localStorage)
    │
    ├── YouTube Embed ──→ youtube.com/embed/{videoId} (50+ video, 10 topik)
    │
    └── localStorage (Browser)
              ├── chatHistory (40 pesan, JSON, dual panel sync)
              ├── ed_wiki_* (Wikipedia cache, TTL 7 hari)
              ├── theme (light/dark)
              └── materi progress (quiz best, done)
```

**Catatan:** Semua panah `──→` yang menuju `Vercel Serverless` adalah **satu-satunya tempat API key disentuh**. Frontend tidak pernah memegang `gsk_` atau `sk-or-` key apa pun.

---

## 6. Cara Menjalankan Lokal

Ikuti langkah berikut untuk menjalankan ElektroDict di komputer lokal:

1. **Clone repository**
   ```bash
   git clone https://github.com/username/elektrodict.git
   cd elektrodict
   ```

2. **Buat file `.env.local` di root folder** dengan variabel berikut:
   ```env
   GROQ_API_KEYS=key1,key2,key3
   OPENROUTER_API_KEY=key_anda
   ```
   - `GROQ_API_KEYS` — daftar key Groq yang dipisah koma untuk **multi-key rotation** (load balancing + fallback saat 429). Bisa juga menggunakan `GROQ_API_KEY` untuk single key.
   - `OPENROUTER_API_KEY` — key untuk **primary provider** OpenRouter. Jika tidak diisi, sistem otomatis fallback ke Groq.

3. **Install Vercel CLI secara global**
   ```bash
   npm i -g vercel
   ```

4. **Jalankan development server**
   ```bash
   vercel dev
   ```
   Atau, jika tidak ingin menggunakan Vercel CLI, gunakan server lokal sederhana yang sudah tersedia di repo:
   ```bash
   node dev-server.js
   # → http://localhost:3000
   # Server ini mengemulasi Vercel Serverless di lokal:
   # static files + /api/chat + /api/vision + /api/project-gen
   ```

5. **Buka di browser**
   ```
   http://localhost:3000
   ```
   Aplikasi akan terbuka sebagai SPA. Navigasi antar tab (Kamus, Materi, Lab Proyek, dll.) dilakukan tanpa reload.

6. **Catatan: fitur tanpa AI bisa jalan tanpa API key**
   Jika tidak memiliki API key sama sekali, fitur-fitur berikut **tetap berfungsi penuh** dengan live server biasa (misalnya `npx serve .` atau `python -m http.server`):
   - Kamus Elektro (150+ istilah, filter, sort, Wikipedia cache jika pernah di-load)
   - Kalkulator (8 kalkulator), Konversi Satuan, Kode Warna Resistor
   - Modul Materi (11 modul, animasi Hukum Ohm/PWM, kuis mini)
   - Simulator Logika, Timeline, Video Pembelajaran, Standar K3
   - 51+ template Lab Proyek (view only — generate baru butuh AI)
   - Mode Gelap/Terang, Export PDF, PWA

   Fitur yang membutuhkan API key: **ElektroBot, Quiz AI, AI Vision, Lab Proyek AI (generate)**. Dashboard IoT Firebase membutuhkan **URL Firebase Realtime Database** sendiri (bisa dibuat gratis di `console.firebase.google.com`).

---

## 7. Kontak & Kredit

**Beryl Nathaniel Sinaga**

🌐 **Portfolio :** https://berylnathaniel.my.id/

🚀 **Live App  :** https://elektrodict.vercel.app

---

Proyek **ElektroDict** adalah bukti nyata kemampuan membangun **produk digital yang kompleks dari nol** menggunakan pendekatan **AI-Assisted Development** yang modern — mulai dari perancangan arsitektur dan sistem desain, implementasi frontend tanpa framework dan backend serverless yang aman, integrasi multi-provider AI dengan handling yang matang, hingga deployment production dengan CDN dan security headers. Dibangun secara solo, proyek ini menunjukkan bahwa **satu developer yang menguasai full stack — dari UI/UX hingga prompt engineering dan DevOps — dengan dukungan AI tools yang tepat (Antigravity, OpenCode, Kiro), mampu menghasilkan platform edukasi yang komprehensif, performan, dan siap pakai** — bukan sekadar demo, melainkan produk yang benar-benar bisa membantu mahasiswa teknik elektro Indonesia belajar dengan lebih baik. Ini adalah fondasi yang kuat untuk berkontribusi di peran **Web Development & UI/UX** di industri, dengan pola kerja yang relevan dengan cara tim engineering modern bekerja saat ini.


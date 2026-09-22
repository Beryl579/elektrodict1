# ⚡ ElektroDict — Portfolio Fitur Lengkap

> **Kamus & Platform Belajar Teknik Elektro All-in-One — 24 halaman, 300+ istilah, 31 modul materi, 91 video, 69 template Wokwi, 7 alat file, AI Vision+Chat+Generator — semua dalam satu PWA.**
> Live: **https://elektrodict.vercel.app** · Oleh **Beryl Nathaniel Sinaga** — https://berylnathaniel.my.id

---

## 🔗 Live Demo & Akses Cepat

**URL:** https://elektrodict.vercel.app — tanpa login, tanpa install, langsung di browser HP/desktop. PWA installable, konten utama offline-ready.

**Jelajah 5 menit:**
1. **Dashboard** → lihat stats, progress materi, istilah hari ini → `Akses Cepat` 8 grid
2. **Kamus** → cari “hukum ohm” → filter 14 kategori → sort A-Z/Populer → buka card → cek rumus KaTeX + Wikipedia inline
3. **Materi → Dasar Listrik** → coba animasi Hukum Ohm (slider V/R) + PWM
4. **Lab Proyek** → ketik “lampu otomatis LDR” → pilih Uno/ESP32 → Generate → buka di Wokwi
5. **Tanya AI** → tanya “apa itu transistor BJT?” → coba **AI Vision** foto soal → coba **Toolkit** resizer/merger

---

## 📑 Daftar Isi Fitur

1. [Dashboard](#1-️-dashboard--landing-page) · 2. [Kamus](#2--kamus--150-istilah-14-kategori) · 3. [Materi](#3--materi--31-modul-170-sections) · 4. [Latihan Soal AI](#4--latihan-soal--quiz-ai-16-kategori-3-level) · 5. [Kalkulator](#5--kalkulator--8-kalkulator-chat-bubble) · 6. [Konversi](#6--konversi-satuan--9-kategori) · 7. [Resistor](#7--kode-warna-resistor--smdawge12) · 8. [AI Vision](#8--ai-vision--2-mode) · 9. [Timeline](#9--timeline--20-event-4-era) · 10. [Gerbang Logika](#10--simulator-gerbang-logika--7-gate) · 11. [Video](#11--video-pembelajaran--91-video-11-topik) · 12. [Lab Proyek](#12--lab-proyek-ai--ai-generator--69-template--hardware--guides) · 13. [IoT Dashboard](#13--dashboard-iot-firebase--13-cards-5-charts-2-kontrol) · 14. [Toolkit File](#14--toolkit-file--7-alat-100-browser) · 15. [Standar & K3](#15--standar--k3--puil-2011--ipnemaawgsmd) · 16. [ElektroBot AI](#16--elektrobot-ai--embedded--standalone) · 17. [Sistem & Utilitas](#17--sistem--utilitas--pwaofflineexportsearch)

---

## 1. 🏠 Dashboard — Landing Page

**Lokasi:** `page-dashboard` · `js/modules/dashboard.js`

- **Hero:** logo, tagline, 7 pills (`Kamus 300+`, `AI ElektroBot`, `Latihan Soal AI`, `Materi Interaktif`, `Lab Proyek Wokwi`, `Kalkulator & Konversi`, `Resistor & PUIL`) + CTA `Mulai Belajar → materi`
- **4 Kartu Statistik (localStorage):** Total Skor Kuis (`ed_stat_quiz_score`), Streak Hari (`ed_stat_streak` + logic today/yesterday), Istilah Dilihat (`ed_stat_terms_viewed`), Kuis Selesai (`ed_stat_quiz_done`)
- **Tantang Diri:** Kuis kilat 5 soal random — `startQuizKilat()` → kategori random + `startAIQuiz()`
- **Istilah Hari Ini:** `getDailyTerm()` hash(tanggal) % 150 → card + `Lihat Detail → openTerm()`
- **Fun Fact Elektro:** `loadFunFact()` → AI `ElektroAPI.chat` else fallback `FUN_FACT_POOL[10]`
- **Akses Cepat 8 grid:** Kamus, Latihan, Materi, Kalkulator, Konversi, Resistor, Lab Proyek, Tanya AI
- **Progress Materi:** 31 bar `dash-prog-item` — read/total sections, % bar, ✓ done (`ed_materi_progress`)
- **Kategori Kamus:** `KAT_SVG` 14 kategori + count per kategori
- **Terakhir Dibuka:** chips `ed_recent_tabs` (5 max)
- **Rumus Populer 3 acak:** `DASH_FORMULAS[10]` + KaTeX
- **Tips Belajar 3:** Hukum Ohm, Praktek Wokwi, ElektroBot
- **Akses Cepat & Navigasi:** bottom-nav dual-mode (desktop sidebar / mobile bottom-sheet) + `More Sheet` 12 grid

---

## 2. 📚 Kamus — 150 Istilah, 14 Kategori

**Data:** `js/data.js` — `KAMUS[150]` tiap entri `en, id, kat, desc, detail, formula(LaTeX), tags[]`

**Kategori (14 + Semua):** `dasar, komponen, rangkaian, daya, elektronika, pengukuran, digital, sinyal, terbarukan, instalasi, mesin, kontrol, komunikasi, distribusi` — order `KAT_ORDER`, ikon `KAT_ICONS`+`KAT_SVG`

**Fitur UI `page-kamus`:**
- **Search fuzzy** `onSearch()` (EN/ID/desc/tags), **clear** `clearSearch()`, **autocomplete** `suggest-box` top-6 + navigasi `Arrow/Enter/Esc` `handleSuggestNav()` + `hideSuggest()`
- **Filter chips** `renderChips()` + **Sort 5 mode** `setSort()` — `default | az | za | populer | tingkat(KAT_ORDER)` + counter `scount`
- **Grid dual-mode:** **Core 8 highlight** (`CORE_IDS`: Tegangan, Arus Listrik, Hukum Ohm, Daya Listrik, Kapasitor, Resistor, Transistor BJT, Induktor) → `feature-grid` + **Regular 142** → `compact-list`
- **Card expand** `tog(i)` + visited `ed_visited` + progress + `cformula-mini` + detail + `eformula[data-latex]` KaTeX + tags + actions:
  - **Tanya AI** `askCard()` → kirim istilah ke ElektroBot
  - **Wikipedia inline** `getWikiInfo()` → `ElektroAPI.fetchWikiSummary()` → ID exact → ID search → EN exact → EN search via `/api/wiki-id-proxy` + `/api/wiki-en-proxy`, cache 7 hari `ed_wiki_*` `WIKI_CACHE_TTL`
- **Empty state** + fallback **Google Search**
- **Sidebar Chat Desktop** `msgsD` + quick chips 5 + model selector `qwen/qwen3.8-27b`
- **KaTeX async queue** `renderPendingMath()` untuk `V=IR` hingga `f_r=1/(2π√LC)`

---

## 3. 📖 Materi — 31 Modul, 170+ Sections

**Data:** `js/data-materi.js` — `MATERI_MODULES[31]` — tiap modul `emoji, title, subtitle, level(Pemula/Menengah/Lanjut), durasi(25-50mnt), materi[3-7], sections[5-9], contoh[2-4] step-by-step LaTeX, soal[5] + exp` — total **~170+ sections, 62 contoh, 155 soal**

**31 ID Modul Lengkap:**
`dasar-listrik` · `komponen-elektronika` · `mikrokontroler` · `mcu-lanjut` · `instalasi-k3` · `rangkaian-ac-daya` · `elektronika-daya` · `sistem-digital` · `motor-listrik` · `plc-otomasi` · `iot-intro` · `iot-esp32` · `iot-sensors-actuators` · `iot-connectivity` · `iot-platform` · `komunikasi-nirkabel` · `ebt-surya` · `ebt-angin` · `ebt-air` · `ebt-biomassa` · `ebt-panasbumi` · `ebt-hibrida` · `instrumentasi` · `sistem-ketenagalistrikan` · `sistem-kendali` · `desain-pcb` · `analisis-rangkaian` · `elektronika-analog` · `arduino-pemula` · `arduino-menengah` · `esp32-iot-lengkap`

**Fitur `page-materi`:**
- **List 31 card** `renderMateri()` + **Detail** `openMateri()` + KaTeX + gambar `Asset Materi/*.png/jpg` (Wikimedia CC)
- **Animasi Interaktif Canvas** (tanpa library): Hukum Ohm (`ohm-anim` slider 1–24V / 10–1000Ω → `I=V/R`, `P=VI`, titik arus 14 + LED radial glow), PWM (`pwm-anim` duty 0–100% → gelombang persegi + LED), RC (`rc-sim`), BJT (`bjt-sim`), Surya/Angin, dll — lifecycle `mountedAnims` + `stopMateriAnims()` saat pindah tab
- **Progress per section** `markSectionRead()` + `ed_materi_progress` + progress bar modul
- **Konteks chat** `materiChatCtx` — system prompt dinamis “User sedang membaca modul X — daftar bab …” disuntik ke ElektroBot saat `send()` dari tab materi
- **Contoh soal & Kuis mini** per section + pembahasan `exp`

---

## 4. 🧠 Latihan Soal — Quiz AI (16 Kategori, 3 Level)

**Data:** `QUIZ_CATS[16]` — `dasar, komponen, rangkaian, daya, elektronika, digital, sinyal, pengukuran, terbarukan(EBT), instalasi, mesin, kontrol, komunikasi, distribusi, motor3fasa(⚙️), plc(🖥️)`

**UI `page-quiz`:**
- **Difficulty 3:** `mudah 😊 | sedang 🔥 | sulit 💀` → prompt map level
- **Kategori chips** `quiz-cats` + tombol `quiz-start-btn` (disabled hingga pilih kategori)
- **Generate AI** `startAIQuiz()` → prompt `5 soal JSON {"soal":[{"q","opts"[4],"ans":0-3,"exp"}]}` → `ElektroAPI.generateQuiz()` → `qwen/qwen3.8-27b` `temperature 0.6 / top_p 0.95 / reasoning_effort default / max_tokens 2048` → `parseQuizJSONSafe()` toleran trailing comma/truncate + retry 2× + validate → `qList[5]`
- **Flow:** `renderQuestion()` + KaTeX → `answerQ(i)` lock + highlight benar/salah + `qexplain` → `nextQ/prevQ` + `updateNav()` progress → `showScore()` % bar + benar/salah/total + **Share WA** `shareScore()` + **Copy** `copyScore()` + `retryQuiz()` + `resetQuiz()`
- **Stats:** `ElektroDash.addQuizScore(pct)` + `addQuizDone()` → localStorage
- **Lock session** `window.activeQuizSession` blok `switchTab` kecuali quiz

---

## 5. 🧮 Kalkulator — 8 Kalkulator Chat-Bubble

**Data:** `CALCS[8]` di `js/app.js`

| # | Kalkulator | Rumus Inti | Input |
|---|---|---|---|
| 1 | **Hukum Ohm** `ohm` | `V=IR` | V/I/R (1 kosong) |
| 2 | **Daya** `power` | `P=VI=I²R=V²/R` | P/V/I/R |
| 3 | **Konstanta RC** `rc` | `τ=RC, f_c=1/2πRC, 5τ` | R Ω + C µF |
| 4 | **Kapasitor Seri/Paralel** `cap` | `Cpar=Σ, 1/Cser=Σ1/C` | list µF koma |
| 5 | **Resistor Seri/Paralel** `res` | `Rseri=Σ, 1/Rpar=Σ1/R` | list Ω auto kΩ |
| 6 | **Pembagi Tegangan** `vdiv` | `Vout=Vin·R2/(R1+R2)` + rasio % | Vin,R1,R2 |
| 7 | **Resonansi RLC** `resonance` | `f_r=1/2π√LC + Q + Zmin` | L mH, C µF, R Ω |
| 8 | **Energi & Biaya** `energy` | `W=P·t, Biaya=W·Tarif` | W, jam/hari, hari, Rp/kWh |

**UI `page-kalk`:** `initCalc()` → `calc-msgarea` chat bubbles `cmsg-ava + cmsg-bubble` + `cc-formula` KaTeX + `cf-row` inputs/select → `doCalc(id)` → `cmsg-result-bubble` multi/val/err — 100% offline

---

## 6. 🔄 Konversi Satuan — 9 Kategori

**Data:** `KONV_DATA[9]` di `js/app.js`

`tegangan(V/mV/µV/kV)` · `arus(A/mA/µA/kA)` · `hambatan(Ω/kΩ/MΩ/mΩ)` · `kapasitansi(F/mF/µF/nF/pF)` · `induktansi(H/mH/µH/nH)` · `daya(W/mW/kW/MW + dBm special)` · `frekuensi(Hz/kHz/MHz/GHz)` · `energi(J/kJ/Wh/kWh/mJ)` · `desibel(dB Tegangan 20log / Daya 10log custom)`

**UI `page-konversi`:** `initKonversi()` → `konv-cats` buttons → `konv-card` (input + `kfrom` select + live `doKonv` base→all units) + `db` special `calcDb()` ratio + % — offline, `toBase/fromBase` pure function

---

## 7. 🎨 Kode Warna Resistor + SMD / AWG / E12

**Mode Utama ( `page-resistor` + `js/modules/resistor.js`):**
- **4 Gelang** `[1,0,2,10]` → 1kΩ ±5% default | **5 Gelang** `[1,0,0,2,10]` → 10kΩ
- **Palet `RCOLORS` 12 warna** (hitam–emas) + digit/mult/toleransi
- **Fitur:** `renderResistor()` → `renderResistorSVG()` (body + bands) + `renderResistorBands()` selects + swatch + `calcResistor()` → `formatOhm()` + range toleransi `1000 Ω ±5% → 950 Ω ~ 1050 Ω` + `rr-val/tol/range` + SVG label — real-time `updateBand()`

**Tambahan di `page-standards`:**
- **SMD Guide 7** (0201 0.6×0.3 → 2512) + **E12 Series 12** + **Bands 12** + **Symbols IEC vs ANSI 10**
- **AWG Converter 16** (4/0 107mm² → 30 0.051mm²) + `convertAWG/FromMM2()` + KHA nearest
- **Kalkulator LED** `led-calc` + **BJT sim** di materi

---

## 8. 👁️ AI Vision — 2 Mode

**Lokasi:** `page-aivision` + `js/modules/vision.js` — `aivMode` 2

- **Soal dari Foto 📝** — foto soal ujian → step-by-step + rumus `V=I×R` + kesimpulan (prompt tutor gaul sabar)
- **Rangkaian Analyzer 🔌** — foto skema/PCB → identifikasi komponen (resistor, kapasitor, IC) + fungsi + cara kerja + nilai (`AIV_PROMPTS` berbeda)

**Flow:**
`aiv-upload` (tap/drag-drop `handleAIVDrop/File`, `accept image/*`) → **resize Canvas** `shrinkImageForApi` max 1600px, JPEG q0.85, bg putih → `aiv-preview` + hapus → `analyzeImage()` → `ElektroAPI.analyzeImage(b64, type, prompt)` → `qwen/qwen3.8-27b` `temperature 0.6 / top_p 0.95 / max_completion_tokens 2048 / reasoning_effort default` via `POST /api/vision` (timeout 120s) → `parseAIText(markdown+LaTeX protect $$/\(/$)` + `renderAIVMath(KaTeX queue)` → `aiv-result-bubble` + reset — payload 5–10MB → 200–600KB (~90% kompresi)

---

## 9. 🕰️ Timeline — 20 Event, 4 Era

**Data:** `TIMELINE[20]` di `js/data.js` — `js/modules/timeline.js`

- **Kuno 1600-1785 (4):** De Magnete 1600, Leyden Jar 1745, Layang Petir 1752, Coulomb 1785
- **Modern 1800-1895 (8):** Volta 1800, Oersted 1820, Ohm 1827, Faraday 1831, Maxwell 1864, Edison 1879, Tesla 1888, Marconi 1895
- **Digital 1947-1971 (4):** Transistor 1947, IC 1958, Moore 1965, Intel4004 1971
- **Kontemporer 1991-2022 (4):** Li-Ion 1991, WiFi 1999, Raspberry Pi 2012, ChatGPT 2022

**UI `page-timeline`:** `tl-eras` filter 4 era + `tl-list` cards (tahun/tokoh/desc/impact) accordion

---

## 10. 🕹️ Simulator Gerbang Logika — 7 Gate

**Lokasi:** `page-logika` + `js/modules/simulator.js`

- **Inputs:** Switch A (`swA`) + B (`swB`) `toggleSwitch()` — visual toggle
- **Gate Select 7:** `AND, OR, NOT, NAND, NOR, XOR, XNOR` → `updateLogic()` → **LED Output** `ledOut` + `ledVal` 0/1 (glow) + **Truth Table** `tt-head/body` dinamis highlight posisi saklar `2^n` kombinasi — `stopMateriAnims()` hentikan RAF saat pindah tab (hemat baterai)

---

## 11. 📺 Video Pembelajaran — 91 Video, 11 Topik

**Data:** `VIDEOS[91]` + `VIDEO_TOPICS[11]` di `js/data.js` — hitung `{ id:` =91

**11 Topik:** `Semua` · `Dasar Listrik(11)` · `Elektronika & Komponen(13)` · `Motor Listrik(7)` · `Energi Terbarukan(6)` · `Instalasi & Panel(5)` · `Digital & Kontrol(5)` · `Arduino & IoT(5)` · `PLC, HMI & SCADA(15)` · `Instrumentasi & Pengukuran(6)` · `Belajar Wiring Kontrol Dari Nol(12)` — sumber The Engineering Mindset, RealPars, dll

**Fitur `page-news`:**
- **Chips filter** `videoChips()` + **grid** `renderVideos()` thumbnail `i.ytimg.com/vi/{id}/hqdefault.jpg` + channel/channelUrl/topic/desc + **modal** `openVideo(id)` iframe `vidFrame` + `vidExternal` YouTube + **cross-link** `VIDEO_TEMPLATE_LINKS` ke Wokwi (mis. N594 → `tpl-dpdt`) — 2 video K3 lapangan di `page-standards` `#k3-video-grid` (LOTO/APD)

---

## 12. 🛠️ Lab Proyek AI — AI Generator + 69 Template + Hardware + Guides

### A. AI Project Generator (`POST /api/project-gen` — `api/project-gen.js` 677 baris)

- **Input:** `#prj-idea-input` bebas bahasa Indonesia + **board selector** `uno(Arduino Uno) | esp32(ESP32 DevKitC V4)` → `selectBoard()` → `generateAIProject()` → `ElektroAPI.generateProject(idea, board)` → loading
- **Model:** `qwen/qwen3.8-27b` `temperature 0.6 / top_p 0.95 / reasoning_effort default / max_completion_tokens` — OpenRouter primary + Groq fallback, cache `GEN_CACHE_TTL 30m` + auto-repair 2×
- **Output JSON terstruktur** → `page-project-detail`: `title, description, bom[], wiring_guide[], cpp_code(pretty-printed `formatCpp`), libraries(auto detect `#include → LIBRARY_CATALOG 14`), wokwi_diagram(JSON string validated)`
- **Validasi deterministik:** `validateWokwiDiagram()` + `WOKWI_PARTS` curated (`CURATED_PARTS` pins) + `DOC_PARTS` + `ALLOWED_TYPES` + `PROMPT_PARTS` + `BOARD_INFO Uno/ESP32` + `PARTS_CATALOG_TEXT` — `JSON.parse(wokwi_diagram)` harus sukses, `cpp_code` mengandung `setup()/loop()`, `bom` tidak kosong — gagal → pesan error jelas, bukan crash — diagram `JSON.stringify` 2× agar tidak corrupt di JS

### B. Template Siap Pakai — 69 Verified (`WOKWI_TEMPLATES[69]`)

Tiap template: `wokwi_id, title, desc, difficulty(Mudah/Menengah), tags, verified:true, bom[], wiring_guide[], cpp_code, wokwi_diagram({version:1, parts:[], connections:[]})`

**Contoh 69 IDs:** `tpl-led-blink`, `tpl-rgb-led`, `tpl-pir-alarm`, `tpl-ldr-night-light`, `tpl-servo-knob`, `tpl-joystick-servo`, `tpl-7segment-counter`, `tpl-stepper-motor`, `tpl-ultrasonic-buzzer`, `tpl-dht22-lcd`, `tpl-ntc-thermostat`, `tpl-gate-and/or/not/nand/nor/xor/xnor/mux/half-adder` (9 gerbang 7408/7432/7400/7402/7486), `tpl-esp32-firebase-*` (22 Firebase), `tpl-pzem-004t`, `tpl-blynk`, `tpl-mqtt`, hingga `tpl-gate-half-adder` — **full 69 di `data.js`**

- **Grid:** `#wokwi-templates-grid` → `renderWokwiTemplates()` + `goToTemplate(id)` — klik langsung buka detail + **Wokwi iframe sim** + **copy code** + **export PDF**
- **Katalog Hardware** `#wokwi-hardware-list` — `data/wokwi-parts.json` → `renderWokwiHardware()`
- **Panduan Simulator** `#wokwi-guides-list` — `renderWokwiGuides()` docs Wokwi
- **Legacy `PROJECTS[4]`:** `prj-001 Blinking LED, prj-002 Traffic Light, prj-004 PIR Alarm, prj-005 Ultrasonic` (code+steps+schema)
- **Detail Page `page-project-detail`:** BOM, wiring table, code block + copy, Wokwi embed, langkah perakitan, export

---

## 13. 📊 Dashboard IoT Firebase — 13 Cards, 5 Charts, 2 Kontrol

**Lokasi:** `page-iot` + `js/modules/firebase-dashboard.js` — **tanpa Firebase SDK** (hemat ~200KB), hanya **REST API** `fetch()`

- **Konfigurasi:** `#fb-host` URL `https://xxx-default-rtdb.firebaseio.com` + tombol `fb-connect/test/save` + localStorage + **panduan 4 langkah** (console → Realtime DB test mode → copy URL → Tes)
- **Live Panel 13 Cards (`fb-card-*`):** `suhu, lembab(kelembaban), jarak, cahaya, gas, suhu2(termostat), gerakan(PIR), bahaya(jarak), lampu, relay(beban), gas-b(bahaya), bell, status` → paths `/sensor/suhu|kelembaban, /jarak/cm, /cahaya/nilai_adc, /gas/nilai_adc` + kontrol `/servo/sudut, /rgb/*` — polling **2 detik** `setInterval`
- **Grafik 5:** `fb-chart-_sensor_suhu|kelembaban|jarak|cahaya|gas_nilai_adc` (canvas history array frontend)
- **Kontrol 2 arah:** **Servo slider 0–180°** `fb-servo-*` → `PUT /servo/sudut` + **RGB sliders** `fb-rgb-*` + preview + send → Firebase REST → ESP32 `HTTPClient` (tanpa library) baca & gerakkan hardware
- **Fitur:** `fb-json` raw snapshot + `fb-export-btn` JSON + `fb-stop-btn` + status `fb-status` + CTA `#fb-start-cta` + hints per template — **CSP** `vercel.json` `connect-src` mencakup `*.firebaseio.com` + `*.firebasedatabase.app` agar tidak diblokir di production

---

## 14. 🧰 Toolkit File — 7 Alat 100% Browser

**Hub `page-toolkit` + 7 sub-pages** — `js/modules/toolkit.js` → `TOOLS[7]` — lazy `loadLib(cdn)`, `fmtSize`, `downloadBlob`, privacy `🔒 tidak upload` (semua via Canvas/`pdf-lib`/`mammoth`/`JSZip`/`jsPDF` di browser)

| Alat | Input | Fitur Unggulan |
|---|---|---|
| **1. Baca File dengan AI** `toolkit-reader` | TXT/PDF/DOCX/MD/CSV/JSON/JS/TS/html/css/py | extract `mammoth` + `pdf.js` → 12K char → tanya AI `qwen/qwen3.8-27b` via `ElektroAPI.chat` + preview + quick ask (Ringkas/Poin/Cek Error) |
| **2. Image Resizer** `toolkit-resizer` | drop/click image | preview, presets IG Post/Story/YT Thumb/Full HD/4K/Twitter Header, W×H + keep ratio, canvas high-quality, download |
| **3. Image Cropper** `toolkit-cropper` | image | aspect Free/1:1/4:3/16:9/3:4/9:16, draggable `crop-box`, zoom, canvas crop, download |
| **4. Format Converter** `toolkit-converter` | PNG/JPG/WebP | quality slider, `canvas.toBlob`, saving% color, download |
| **5. Word→PDF** `toolkit-word2pdf` | .docx | `mammoth` → html → `jsPDF` `splitTextToSize` A4, download |
| **6. PDF Merger** `toolkit-merger` | multi PDF | `pdf-lib` load, drag reorder, total pages, merge→Blob, download |
| **7. PDF Splitter** `toolkit-splitter` | single PDF | `parseRanges 1-3,5` or Each Page → `pdf-lib` + `JSZip` → ZIP/PDF, download |

Navigasi: `switchTab('toolkit-xxx')` sub-pages — `toolkit-wrap`, `page-toolkit-reader` s/d `page-toolkit-splitter`

---

## 15. 📜 Standar & K3 — PUIL 2011 + IEC/NEMA + Simulasi

**Lokasi:** `page-standards` + `js/modules/standards.js` — **12+ cards** injected, filter `#std-filter` chips `semua/puil/ip/k3/komponen` + search `std-search`

- **PUIL 2011 Summary** SNI 0225:2011 — proteksi, isolasi 1000Ω/V, warna kabel
- **Warna Kabel 5** — Fasa R Hitam, S Coklat, T Abu-abu, Netral Biru, Ground Kuning/Hijau (Tabel 51A)
- **Kalkulator Kabel & MCB PUIL** — inputs `puil-daya(W)`, `puil-sistem(1f 220V/3f 380V)`, `puil-cosphi`, `puil-jenis(tenaga 2.5mm²/penerangan 1.5mm²)`, `puil-suhu(30/35/40/45°C derating)`, `puil-metode(B1/A1/C)` → `hitungPUIL()` `I=P/V` atau `P/√3·V·cos`, `KHAmin=I·1.25·factor`, `PUIL_KHA[12]` (1.5/15→120/225A) + `PUIL_MCB[14]` (2→125A) → kabel mm² + MCB + `pmax` + ELCB 30mA + highlight tables + `ed_puil_hist` chips
- **Susut Tegangan Calculator** `#std-drop` — `drop-i(A)`, `drop-l(m)`, `drop-a(1.5-25mm²)`, `drop-sys(1f×2/3f×√3)`, `drop-mat(Cu 0.0175/Al 0.028)` → `hitungDrop()` `ΔV=2·I·ρ·L/A` atau `√3·I·ρ·L/A`, %, `Vujung`, bar color (green ≤4% amber ≤6% rose >6%) + `usePUILForDrop()`
- **KHA Table 12 baris** (NYA/NYM/NYHY PVC B1 30°C) 1.5/15→120/225A + beban 220V
- **MCB Table 14** (IEC 60898) 2/440W→125/27500W + usage
- **IP Explorer Interaktif** `ip-d1(0-6)` + `ip-d2(0-8)` → `updateIP()` IPXY + `IP_D1/D2` desc + `IP_EXAMPLES` + full table 9 codes (IP20→IP68) + `quizIP()` + `syncIP` + NEMA sync
- **NEMA 6 items:** `1→IP20, 3R→IP24, 4→IP66, 4X→IP66⭐, 12→IP54, 6P→IP67/68` → `syncNemaToIP()`
- **Kelas Isolasi Motor bar + calculator:** A105/B130/F155⭐/H180 + `iso-temp` → `checkIsolasi()` + table + Arrhenius warning
- **Grounding Simulator:** `gnd-soil(ρ50-1000)`, `gnd-len(1-6m)`, `gnd-dia(10-30mm)`, `gnd-n(1-4 paralel)` → `hitungGround()` `R≈ρ/2πL·ln(4L/d)/n` → target ≤5Ω SPLN bar
- **Perundang-undangan K3 4 accordion:** UU 1/1970, UU 13/2003 P86/87, PP 50/2012 SMK3, Permenaker 12/2015 (JDIH links)
- **5 Aturan Emas Checklist EN50110** `golden-list[5]` checkboxes + `golden-bar` + `toggleGolden()` localStorage `ed_k3_golden5` + `exportK3Checklist()`
- **K3 Videos 2** lapangan LOTO/APD (0r5Cyi3SUfA, FEPfZd5itGI) + **APD Selector 4 skenario** (`panel 380V, SUTR 20kV, lab 12V, gardu`) → `selectAPD()` helm/sarung/sepatu/arc highlight + `quizAPD()`
- **AWG Converter 16** (4/0 107mm²→30 0.051mm²) + **SMD Guide 7** (0201 0.6×0.3→2512) + **E12 12** + **Bands 12** + **Symbols IEC vs ANSI 10** + **PUIL PDF 683hal 4.99MB** `Asset Materi/standardpuil2011.pdf` (open/download)

**Counts:** `k3[5]`, `kha[12]`, `mcb[14]`, `ip_ratings[6]`, `smd_sizes[7]`, `puil2011[5]`, `symbols[10]`, `AWG_TABLE[16]`

---

## 16. 🤖 ElektroBot AI — Embedded + Standalone

**Model unified:** `qwen/qwen3.8-27b` — `temperature 0.6 / top_p 0.95 / reasoning_effort default / max_completion_tokens 2048 / stream false / stop null` — OpenRouter primary + Groq fallback (random key rotation `GROQ_API_KEYS`) — thinking strip `<think>...</think>` backend+frontend

### Embedded (di `index.html`)
- **Desktop `#msgsD` + Mobile `#chatM`** — synced `msgsD/msgsM` + `inpD/inpM` + `modelChoiceD/M` + `#overlay`
- **Actions:** `send('D'|'M')` → `ElektroAPI.chat`, `ck(event)` Enter, `rz(textarea auto)`, `toggleTTS()` WebSpeech `speak/cleanText` + `ctts` mute, `toggleMic('D'|'M')` WebSpeechRecognition, `clearChatHistory()` reset, `qask(chip)` 5 quick (AC vs DC, Hukum Ohm, Kapasitor, Kode Resistor, Transistor BJT)
- **Bubble:** `botMsg/userMsg` + markdown `parseAIText` (lindungi `$$...$$` & `$...$`) + KaTeX `renderMath/pendingMathEls` + `stripThink` + TTS
- **Konteks Materi:** `materiChatCtx` aktif saat di `page-materi` — system prompt dinamis “User sedang membaca modul Motor Listrik — daftar bab …”
- **Persistent history** 40 pesan `localStorage` + separator visual + dual panel sync + rate limit 429 countdown auto-recovery + persona formal `elektroBotPersona` (6 aturan, LaTeX wajib, bahaya tegangan, cek bertahap)

### Standalone `chatbot.html` (dark SaaS, 135 baris)

- **Header:** logo + model `modelSelector` single `qwen/qwen3.8-27b` + `exportToPDF(html2pdf on-demand A4 dark)` + clear + back `index`
- **History** `chatHistory` welcome `Halo! Saya ElektroBot...` + `BRANDING_KEYWORDS[9]` → `BRANDING_RESPONSE(Beryl)` + `CHATBOT_SYSTEM_PROMPT` formal
- **Preview bar** `imagePreviewBar` (img + fileInfo doc) — `imageInput(accept image/*,.pdf,.doc,.docx,.txt)` + `chat-add-btn` + `textarea chatInput(200char, auto-resize, Shift+Enter)` + `sendBtn/spinner`
- **Logic `js/chatbot.js` 379 baris:** `handleImageSelect()` (image base64 vs doc name) → `sendMessage()` context `slice(-6)` + `ElektroAPI.analyzeImage` vs `chat`, `stripThink`, `renderBubble(marked + KaTeX)`, `saveToHistory(localStorage main_chatbot_history 100 limit, safe [image])`, `loadHistory()`, `copyCode`, `exportToPDF` + toast `showToast()`
- **Fitur upload:** image → base64 Vision, doc/pdf → nama file sebagai konteks teks (multimodal qwen 3.8 juga baca pdf-txt)

---

## 17. ⚙️ Sistem & Utilitas — PWA, Offline, Theme, Search, Export

- **PWA:** `manifest.json`, `theme-color #FFEA00`, `apple-touch-icon` 128/192/512, `splash-screen` 3.8s + `light-pre` anti-flash, installable HP/desktop
- **Offline-first:** kamus, kalkulator, konversi, resistor, materi, timeline, logika, video shell tetap bisa setelah load pertama (PWA cache); AI butuh online
- **Theme:** `toggleTheme()` light/dark `localStorage theme` + `_updateThemeBtn` moon/sun SVG — CSS `var(--bg, --text, --line)` + `light-pre`
- **Search global:** kamus `onSearch` fuzzy + `suggest-box` + `handleSuggestNav` + standards `std-search` + filter chips
- **Export PDF:** `loadScript(jsPDF/html2pdf)` on-demand — kamus, proyek, chat history (A4, `useCORS`, dark bg `#0f172a`)
- **Markdown & Math:** `marked` + KaTeX 0.16.9 CDN `katex.min.js` + `auto-render.min.js` + `renderPendingMath()` queue `pendingMathEls` — lindungi `$$...$$` & `$...$` agar tidak di-escape `marked`
- **Canvas & Media:** resize Vision, animasi Ohm/PWM, resistor/SVG, grafik IoT — `Canvas API` murni + `Wokwi Elements @0.48.3` `wokwi-elements.bundle.js`
- **Voice:** TTS `speak()` + STT `toggleMic()` WebSpeech API — `ctts` mute, `cmic` 18px
- **Storage:** `localStorage` — `ed_wiki_*` (TTL 7 hari), `ed_materi_progress`, `ed_stat_*`, `ed_visited`, `ed_puil_hist`, `ed_k3_golden5`, `theme`, `chatHistory` (40), `main_chatbot_history` (100), `ed_recent_tabs`
- **Keamanan:** `vercel.json` `cleanUrls`, `rewrites` `/api/wiki-id-proxy` + `/api/wiki-en-proxy` + `/api/news-proxy`, `headers` CSP `connect-src` (`api.groq.com`, `openrouter.ai`, `*.firebaseio.com`, `*.firebasedatabase.app`, `*.wikipedia.org`, `cdnjs`, `cdn.jsdelivr`, `supabase`, `youtube`, `wokwi`), `X-Frame-Options DENY`, `HSTS`, CORS `*.vercel.app` + `localhost` + `127.0.0.1` di `api/chat.js:7-12`
- **Performa:** KaTeX/Mermaid/Wokwi/jsPDF/html2pdf semua **on-demand** `defer`/`loadScript` — bundle inti ~400KB, no framework (Vanilla JS ES6+), `vercel dev` `node dev-server.js` → `localhost:3000`, Vercel CDN global, `4.400+ baris` `js/app.js` SPA router manual `switchTab`, `toastWrap` + `showToast()`, `onboardOverlay`

---

## 📊 Rekap Metrik & Skala Konten

| Kategori | Jumlah | Detail |
|---|---|---|
| **Halaman** | **24** | 16 utama + 7 toolkit sub + 1 detail proyek |
| **Materi** | **31 modul** | 170+ sections, 25-50mnt/modul, 62 contoh, 155 soal |
| **Kamus** | **150 istilah** | 14 kategori + Semua, 8 Core highlight, KaTeX 150 rumus, tags |
| **Quiz AI** | **16 kategori** | 3 level (mudah/sedang/sulit), 5 soal/session ∞ variasi AI |
| **Kalkulator** | **8** | ohm, power, rc, cap, res, vdiv, resonance, energy |
| **Konversi** | **9** | tegangan, arus, hambatan, kapasitansi, induktansi, daya(+dBm), frekuensi, energi, desibel |
| **Resistor** | **2 mode + SMD/AWG** | 4 & 5 gelang 12 warna SVG realtime + SMD 7 + E12 12 + AWG 16 |
| **AI Vision** | **2 mode** | Soal vs Rangkaian, resize 1600px JPEG q0.85 |
| **Timeline** | **20 event** | 4 era (4+8+4+4) |
| **Gerbang Logika** | **7 gate** | AND/OR/NOT/NAND/NOR/XOR/XNOR + truth table highlight |
| **Video** | **91 video** | 11 topik (Dasar 11, Elektronika 13, Motor 7, EBT 6, Instalasi 5, Digital 5, Arduino 5, PLC 15, Instrumentasi 6, Wiring 12) |
| **Lab Proyek** | **69 template + 4 legacy + HW + Guides** | 69 verified Wokwi (+9 gate series, 22 ESP32 Firebase) + katalog hardware + panduan |
| **IoT Firebase** | **13 cards +5 charts+2 kontrol** | suhu/humid/jarak/cahaya/gas/termostat/gerak/bahaya/lampu/relay/gas-b/bell/status + servo+RGB |
| **Toolkit** | **7 alat** | reader(AI qwen 3.8), resizer, cropper, converter, word2pdf, merger, splitter — 100% browser |
| **Standar & K3** | **12+ cards** | PUIL kalk + KHA 12 + MCB 14 + IP 0-6/0-8 + NEMA 6 + Isolasi 4 + Ground sim + K3 4 laws + 5 Golden + APD 4 + AWG 16 + SMD 7 + Symbols 10 + PDF 683hal |
| **Dashboard** | **8 quick +4 stats** | streak, fun fact AI, progress 31, rumus populer, tips |
| **Chat AI** | **2 surface** | embedded(D+M) + standalone chatbot.html (image/pdf/docx + markdown+KaTeX + TTS + Mic + export PDF) |
| **API** | **6 frontend +3 backend** | chat, quiz, vision, quote, project, wiki(ID/EN proxy) + `/api/chat,/project-gen,/vision` |
| **JS Modules** | **14 +6 features** | dashboard, kamus, quiz, kalk, konversi, resistor, vision, timeline, simulator, project-lab, firebase, toolkit, standards, utils |
| **Wokwi Validasi** | **85+ parts** | curated `CURATED_PARTS` pins + `DOC_PARTS`, auto libraries 14, `validateWokwiDiagram`, `formatCpp` |

**Integrasi API (5 layanan eksternal):**

| API | Kegunaan | Endpoint / Model |
|---|---|---|
| **Groq API** | Chat, quiz, vision, project (fallback) | `https://api.groq.com/openai/v1/chat/completions` — `qwen/qwen3.8-27b` unified |
| **OpenRouter API** | Chat, project (primary) | `https://openrouter.ai/api/v1/chat/completions` — `qwen/qwen3.8-27b` unified |
| **Firebase REST** | IoT Dashboard | `https://<project>-default-rtdb.firebaseio.com/<path>.json` polling 2 detik tanpa SDK |
| **Wikipedia REST** | Kamus inline | `https://id.wikipedia.org/api/rest_v1/page/summary/{title}` via `/api/wiki-id-proxy` (cache 7 hari) |
| **YouTube Embed** | Video pembelajaran | `https://www.youtube.com/embed/{videoId}` + cross-link Wokwi |

---

## 🚀 Cara Menjalankan Lokal

1. **Clone** `git clone https://github.com/Beryl579/elektrodict1.git && cd elektrodict1`
2. **Env** buat `.env.local`:
   ```env
   GROQ_API_KEYS=key1,key2
   OPENROUTER_API_KEY=key_anda
   ```
   `GROQ_API_KEYS` koma untuk rotation; `OPENROUTER_API_KEY` primary (fallback Groq otomatis)
3. **Install** `npm i -g vercel`
4. **Run** `vercel dev` atau `node dev-server.js` → http://localhost:3000
5. **Tanpa key** tetap jalan offline: kamus, kalkulator, konversi, resistor, materi, logika, timeline, video shell, 69 template (view only), theme, export — AI butuh key

---

## 👤 Kontak & Kredit

**Beryl Nathaniel Sinaga** — 🌐 https://berylnathaniel.my.id · 🚀 Live https://elektrodict.vercel.app

> Dibangun solo — Vanilla JS + Vercel Serverless + **qwen/qwen3.8-27b vision+txt+pdf** — semua fitur di atas 100% tervalidasi di `js/data.js`/`js/data-materi.js`/`js/app.js`/`api/*` dan siap pakai tanpa install.

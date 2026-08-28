# Task: Perbaikan Bug Visual/UI — ElektroDict

Tolong perbaiki beberapa bug visual berikut yang ditemukan saat testing UI. Semua bug ini termasuk kategori **layout/rendering issue**, bukan bug logika. Fokus ke CSS, sizing, dan conditional rendering yang salah.

---

## 1. Tombol "Hitung" di KalkulatorBot — ukurannya kebesaran (fill seluruh card)

**Lokasi:** `Kalkulator` → komponen kalkulator (Hukum Ohm, Daya Listrik, dll)

**Bug:** Tombol "Hitung" saat ini me-render sebagai block/div besar yang mengambil hampir seluruh tinggi card (terlihat seperti banner biru raksasa, teksnya kepojok kanan-bawah kecil). Seharusnya tombol berukuran normal seperti button pada umumnya.

**Kemungkinan penyebab:**
- `<button>` mewarisi `height: 100%` atau `flex: 1` dari parent container yang harusnya cuma dipakai buat wrapper card, bukan tombolnya.
- Ada div pembungkus hasil kalkulasi (result box) yang ke-merge secara visual jadi satu dengan tombol karena keduanya sama-sama pakai background biru tanpa border/gap pemisah.

**Fix yang diminta:**
- Pisahkan elemen tombol dari result-display container — pastikan result box (tempat nilai IF/V/R muncul) itu terpisah, dengan background beda / border, dan tombol punya `width: fit-content` atau max-width wajar (misal `padding: 10px 24px`, bukan `flex-grow`).
- Cek semua 8 kalkulator (Ohm, Daya, dst) — kemungkinan bug sistemik di satu shared component `<CalculatorCard>` atau semacamnya, jadi cukup fix di satu tempat.

---

## 2. Icon SVG di halaman Latihan Soal render sebagai raw text, bukan sebagai ikon

**Lokasi:** `Latihan` → box hitam besar bertuliskan "MULAI — INSTALASI"

**Bug:** String SVG mentah (`<svg viewbox="0 0 24 24" ...><path d="..."/></svg>`) muncul sebagai teks biasa di layar, bukan ter-render jadi ikon. Kemungkinan HTML entity-nya ter-escape dobel (`&quot;` muncul literal di teks).

**Kemungkinan penyebab:**
- Data ikon disimpan sebagai string SVG lalu di-render pakai `{iconString}` biasa (React akan escape otomatis), bukan `dangerouslySetInnerHTML={{ __html: iconString }}` atau tidak pakai komponen icon library yang benar (lucide-react, dsb).
- Bisa juga string-nya sudah ter-HTML-encode dua kali sebelum disimpan ke DB/JSON.

**Fix yang diminta:**
- Cari komponen yang render ikon soal latihan, ganti method render-nya supaya SVG di-parse sebagai markup, bukan text node.
- Kalau project sudah pakai icon library (misal lucide-react), lebih baik ganti ke referensi nama icon (`<Wrench />`, dll) daripada nyimpen raw SVG string — lebih aman dan konsisten dengan icon lain di app.
- Pastikan tinggi box menyesuaikan konten (saat ini box hitam kegedean/kosong karena isinya cuma teks panjang yang overflow).

---

## 3. AI Vision — Analysis box kosong + gagal fetch tanpa fallback UI

**Lokasi:** `AI Vision` setelah upload gambar & klik "Analisis dengan AI"

**Bug:** Box hasil analisis kosong (blank white space besar) lalu di bawahnya muncul pesan error "Gagal analisis: Failed to fetch". Box kosong di atas pesan error itu bug visual — seharusnya nggak ada empty space sebesar itu kalau memang gagal fetch.

**Fix yang diminta:**
- Kalau state = error, jangan render container hasil yang kosong — collapse tinggi container ke 0 atau langsung tampilkan pesan error di tempat itu juga (tidak dobel container).
- Tambahkan retry button yang jelas (bukan cuma teks "Pastikan koneksi internet aktif dan coba lagi" — kasih tombol "Coba Lagi" yang actionable).
- Cek juga apakah endpoint API AI Vision memang down/salah — ini kemungkinan bug fungsional juga, bukan cuma visual (worth diverifikasi terpisah).

---

## 4. Video Pembelajaran — box putih kosong di bawah tiap thumbnail

**Lokasi:** `Video` → grid video (3 kartu per baris: thumbnail + judul)

**Bug:** Setiap kartu video punya box putih kosong besar di antara thumbnail dan judul video (terlihat di semua kartu — "Seorang Teknisi Harus Faham...", "Teori Dasar Listrik...", dll). Ini kemungkinan placeholder untuk metadata (durasi, channel, view count) yang gagal di-populate tapi container-nya tetap kerender.

**Fix yang diminta:**
- Kalau box itu memang buat metadata tambahan yang belum diisi datanya, hilangkan/hide elemen itu sampai datanya ada (conditional render), jangan render container kosong.
- Kalau itu memang bug rendering (misal `<img>` gagal load karena src kosong dan nggak ada fallback height), kasih `object-fit: cover` + fixed aspect ratio pada container biar nggak collapse jadi kotak kosong gede.

---

## 5. Lab Proyek — box ungu/lavender kosong menimpa badge "MUDAH" di card DHT22

**Lokasi:** `Lab Proyek` → card "Suhu & Kelembaban DHT22"

**Bug:** Ada elemen kotak berwarna ungu muda yang overlap di atas badge "MUDAH" — kemungkinan `position: absolute` yang salah positioning, atau z-index conflict antar elemen.

**Fix yang diminta:**
- Cek CSS elemen ungu itu — kemungkinan besar `position: absolute` tanpa `top/left/right/bottom` yang jelas, jadi nempatnya random/default browser behavior, atau `width`/`height` di-set fixed padahal harusnya `auto`.
- Pastikan badge "MUDAH", "SEDANG", "SULIT" konsisten posisinya di semua card Lab Proyek (LED Blink & Lampu Lalu Lintas kelihatan normal, cuma DHT22 yang bermasalah — bandingkan struktur DOM-nya).

---

## 6. Kamus — box kosong di bawah tag topik (misal `#volt #potensial #EMF`)

**Lokasi:** `Kamus` → tiap card istilah (Voltage, Ohm's Law, Power, dll)

**Bug:** Ada dua kotak kosong bersebelahan di bawah rumus & tag, dengan teks "Tanya AI" di tengah salah satunya. Kemungkinan ini placeholder untuk fitur chat AI inline yang belum ke-render isinya (input field / chat box kosong tanpa border/placeholder yang jelas).

**Fix yang diminta:**
- Kalau ini memang chat-input area, tambahkan border, placeholder text ("Tanya soal Voltage ke AI...") dan icon send, biar jelas itu elemen interaktif — bukan cuma kotak kosong.
- Konsisten-kan ukuran dua box tersebut (saat ini box kiri jauh lebih lebar dari box kanan tanpa alasan visual yang jelas).

---

## Prioritas pengerjaan (urutan disarankan)

1. **#1 (Kalkulator button)** — paling kelihatan & paling gampang di-reproduce, fix duluan.
2. **#3 (AI Vision empty box)** — related ke bug fungsional (fetch gagal), cek dulu API-nya sebelum fix visual.
3. **#2 (SVG raw text)** — sistemik, kemungkinan satu fix nge-cover banyak tempat kalau icon library-nya dipakai lebih dari satu halaman.
4. **#4, #5, #6** — polish, bisa dikerjakan setelah 3 di atas beres.

## Catatan tambahan
- Screenshot referensi ada di percakapan sebelumnya (7 gambar) — kalau opencode butuh visual reference, minta user upload ulang screenshot yang relevan per bug.
- Setelah fix, tolong screenshot ulang tiap halaman yang diperbaiki untuk verifikasi sebelum merge.

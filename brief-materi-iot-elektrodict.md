# Prompt untuk Antigravity — Pengembangan Materi "Internet of Things" di ElektroDict

## Konteks

Tab **Materi** di ElektroDict saat ini sudah memiliki modul *Internet of Things*, tapi isinya belum lengkap. Tugasnya adalah **melengkapi/mengembangkan ulang** modul ini agar setara secara kedalaman dan struktur dengan modul-modul lain yang sudah ada (Dasar Listrik, Komponen Elektronika, Mikrokontroler, dll — masing-masing punya level, estimasi waktu, jumlah bab, dan status kuis).

Modul IoT dipecah menjadi **5 sub-materi**, dan setiap sub-materi berisi beberapa bab (chapter) sesuai rincian topik di bawah.

---

## Instruksi Umum untuk Antigravity

1. **Cari referensi kredibel** untuk tiap topik (dokumentasi resmi ESP32/Espressif, situs resmi ThingsBoard, spesifikasi protokol MQTT/HTTP, jurnal/artikel teknis, datasheet komponen, dsb). Cantumkan sumber di akhir tiap bab atau sub-materi.
2. **Gambar/ilustrasi hanya dari Wikimedia Commons** (commons.wikimedia.org) — jangan pakai gambar berhak cipta dari sumber lain. Sertakan atribusi/lisensi sesuai ketentuan Commons untuk tiap gambar yang dipakai.
3. **Format konsisten dengan modul lain di Materi**: setiap sub-materi punya card berisi — judul, deskripsi singkat, badge level (PEMULA/MENENGAH/LANJUT), estimasi waktu belajar, jumlah bab, status kuis, dan tombol "Buka".
4. **Setiap bab** idealnya memuat: penjelasan konsep, ilustrasi/diagram (dari Wikimedia Commons jika relevan), contoh nyata/kasus penggunaan, dan idealnya soal kuis singkat di akhir bab (mengikuti pola modul lain yang punya kuis).
5. **Bahasa**: gunakan Bahasa Indonesia teknis yang jelas, konsisten dengan gaya modul lain di ElektroDict (istilah teknis boleh tetap bahasa Inggris jika itu istilah baku, misalnya "duty cycle", "baud rate").
6. **Kode contoh** (untuk bagian ESP32/Arduino/MQTT) harus bisa dijalankan/disimulasikan, idealnya kompatibel dengan Wokwi Simulator karena app ini juga referensi ke Wokwi di sub-materi Mikrokontroler.

---

## Rincian Sub-Materi

### 1. Introduction to Internet of Things
*Level: Pemula*

- **IoT Introduction** — definisi IoT, sejarah singkat, karakteristik (sensing, connectivity, processing, actuation), perbedaan IoT vs sistem embedded biasa, contoh aplikasi sehari-hari.
- **IoT Architecture and Ecosystem** — layer arsitektur IoT (perception/sensing layer, network layer, application layer — atau model 3-layer/5-layer), komponen ekosistem (device, gateway, cloud/platform, aplikasi end-user), edge vs cloud computing dalam IoT.
- **IoT Implementation in Various Industry** — studi kasus penerapan IoT di berbagai sektor: industri manufaktur (Industrial IoT), pertanian (smart farming), kesehatan (IoT medis), rumah pintar (smart home), kota pintar (smart city), energi (smart grid).

### 2. Microcontroller (ESP32)
*Level: Menengah*

- **Introduction to ESP32** — arsitektur chip ESP32 (dual-core, WiFi+BLE built-in), varian ESP32 (WROOM, WROVER, S2/S3/C3), pinout dan spesifikasi umum, perbandingan singkat dengan mikrokontroler lain (Arduino Uno/ATmega).
- **Arduino IDE and Wokwi Simulator** — cara instalasi board ESP32 di Arduino IDE, struktur program dasar (setup/loop), pengenalan Wokwi sebagai simulator online untuk prototyping tanpa hardware fisik, contoh project sederhana di Wokwi.
- **Digital Concept and Analog in Electronic and Its Interfacing with Microcontroller** — konsep sinyal digital vs analog, ADC (Analog-to-Digital Converter) pada ESP32, DAC, PWM sebagai representasi sinyal analog, interfacing sensor analog ke ESP32.
- **Digital Input dan Microcontroller Output** — GPIO sebagai input/output digital, pull-up/pull-down resistor, membaca input digital (button, switch), mengendalikan output digital (LED, relay).
- **Digital Serial Communication in Microcontroller** — protokol komunikasi serial: UART, I2C, SPI — cara kerja, perbedaan, dan contoh implementasi masing-masing pada ESP32 untuk komunikasi dengan sensor/modul eksternal.

### 3. Sensors and Actuators
*Level: Menengah*

- Konsep dasar sensor (transduser input) dan aktuator (transduser output) dalam sistem IoT.
- Jenis-jenis sensor umum: suhu & kelembapan (DHT11/DHT22), cahaya (LDR), gerak (PIR), jarak (ultrasonik HC-SR04), gas, tekanan, dsb.
- Jenis-jenis aktuator umum: motor DC/servo, relay, buzzer, LED strip, solenoid.
- Karakteristik sensor: akurasi, presisi, resolusi, kalibrasi.
- Interfacing sensor & aktuator ke ESP32 dengan contoh kode.

### 4. IoT Connectivity
*Level: Menengah–Lanjut*

- **Connectivity Concept in IoT** — perbandingan teknologi konektivitas (jarak, konsumsi daya, bandwidth): WiFi, Bluetooth/BLE, LPWAN (LoRaWAN, NB-IoT), Zigbee, seluler.
- **Wi-Fi Implementation in ESP32** — mode WiFi pada ESP32 (Station vs Access Point), koneksi ke jaringan WiFi, dasar komunikasi HTTP client/server via WiFi.
- **BLE Implementation in ESP32** — konsep Bluetooth Low Energy, GATT (service & characteristic), ESP32 sebagai BLE server/client, use case BLE (wearable, sensor jarak dekat hemat daya).
- **Low-Power Wide Area Networks (LoRaWAN)** — konsep LPWAN, arsitektur LoRaWAN (end device, gateway, network server), trade-off jarak jauh vs bandwidth rendah, use case (smart agriculture, smart metering jarak jauh).

### 5. IoT Platform
*Level: Lanjut*

- **HTTP and MQTT Protocols** — perbandingan HTTP (request-response) vs MQTT (publish-subscribe), konsep broker, topic, QoS pada MQTT, kapan memilih protokol yang mana.
- **MQTT Protocol Implementation on ESP32** — library MQTT untuk ESP32 (misal PubSubClient), cara connect ke broker, publish & subscribe topic, contoh kode.
- **Sending Sensor Data** — alur data dari sensor → ESP32 → broker/platform, format data (JSON), praktik pengiriman data berkala (interval, threshold-based).
- **Data Visualization** — konsep dashboard, widget (gauge, chart, map), praktik terbaik menampilkan data sensor real-time.
- **Thingsboard** — pengenalan platform ThingsBoard (open-source IoT platform), fitur utama (device management, dashboard, rule engine, telemetry).
- **Example of IoT Thingsboard Application** — studi kasus/tutorial end-to-end: ESP32 + sensor → MQTT → ThingsBoard → dashboard.
- **Data Monitoring** — konsep monitoring jangka panjang, alerting/notifikasi berbasis threshold, penyimpanan data historis.

---

## Output yang Diharapkan

- Konten lengkap untuk 5 card sub-materi baru (menggantikan/melengkapi card IoT lama) di tab Materi, mengikuti struktur visual & data yang sama dengan modul-modul existing (badge level, waktu, jumlah bab, status kuis).
- Tiap bab berisi teks penjelasan + gambar dari Wikimedia Commons (dengan atribusi) + (jika relevan) contoh kode ESP32/Wokwi.
- Daftar referensi di tiap sub-materi.
- Kuis singkat untuk tiap sub-materi (opsional tapi disarankan, mengikuti pola modul lain).

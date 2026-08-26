// api/project-gen.js - Serverless Function (Vercel)
// AI Project Generator dengan validasi deterministik diagram Wokwi + auto-repair.

// ─────────────────────────────────────────────────────────────
// KATALOG PART WOKWI — dari docs.wokwi.com (wokwi-docs-main/docs/parts)
// data/wokwi-parts.json di-generate oleh dev-utils/parse-wokwi-docs.js
// ─────────────────────────────────────────────────────────────

// Pin & catatan yang sudah diverifikasi manual (otoritatif — menimpa data docs)
const CURATED_PARTS = {
  "wokwi-arduino-uno": {
    pins: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","A0","A1","A2","A3","A4","A5","5V","VIN","GND.1","GND.2","GND.3"],
    note: "PWM: 3,5,6,9,10,11. Board utama proyek Uno."
  },
  "wokwi-led": {
    pins: ["A","C"],
    attrs: 'color: "red"|"green"|"yellow"|"blue"|"white"',
    note: "A=anoda(+), C=katoda(-). WAJIB resistor seri."
  },
  "wokwi-resistor": {
    pins: ["1","2"],
    attrs: 'value: "220","330","1k","10k"'
  },
  "wokwi-buzzer": {
    pins: ["1","2"],
    note: "1=negatif, 2=positif"
  },
  "wokwi-pushbutton": {
    pins: ["1.l","1.r","2.l","2.r"],
    note: "Tekan = kontak 1 terhubung kontak 2."
  },
  "wokwi-potentiometer": {
    pins: ["VCC","SIG","GND"],
    attrs: 'value: 0-1023',
    note: "SIG ke pin analog A0-A5"
  },
  "wokwi-lcd1602": {
    pins: ["VSS","VDD","V0","RS","RW","E","D0","D1","D2","D3","D4","D5","D6","D7","A","K","SDA","SCL","VCC","GND"],
    attrs: 'pins: "full" (parallel, default) atau "i2c"',
    note: 'I2C (pins="i2c"): VCC,GND,SDA,SCL. JANGAN "wokwi-lcd-1602".'
  },
  "wokwi-dht22": {
    pins: ["VCC","SDA","NC","GND"],
    note: "SDA=pin data. TIDAK ADA wokwi-dht11."
  },
  "wokwi-hc-sr04": {
    pins: ["VCC","TRIG","ECHO","GND"],
    note: "TRIG & ECHO ke digital, VCC ke 5V."
  },
  "wokwi-relay-module": {
    pins: ["VCC","GND","IN","NC","COM","NO"],
    note: "IN=sinyal kontrol. Beban ke COM & NO (aktif-high)."
  },
  "wokwi-servo": {
    pins: ["PWM","V+","GND"],
    note: "PWM ke pin PWM (9/10 Uno), V+ ke 5V."
  },
  "board-esp32-devkit-c-v4": {
    pins: ["3V3","EN","VP","VN","34","35","32","33","25","26","27","14","12","GND.1","13","D2","D3","CMD","5V","GND.2","23","22","TX","RX","21","GND.3","19","18","5","17","16","4","0","2","15","D1","D0","CLK"],
    note: "ADC input-only (tanpa pull-up): 34,35. I2C: SDA=21, SCL=22."
  },
  "board-ssd1306": {
    pins: ["DATA","CLK","DC","RST","CS","3V3","GND","VIN"],
    note: "OLED SPI 7-pin. Untuk I2C pakai wokwi-ssd1306."
  },
  "wokwi-ssd1306": {
    pins: ["GND","VCC","SDA","SCL"],
    attrs: 'alamat I2C 0x3C',
    note: "OLED I2C 4-pin. Uno: SDA→A4, SCL→A5, VCC→5V."
  },
  "wokwi-lcd2004": {
    pins: ["VSS","VDD","V0","RS","RW","E","D0","D1","D2","D3","D4","D5","D6","D7","A","K","SDA","SCL","VCC","GND"],
    attrs: 'pins: "full" (parallel, default) atau "i2c"',
    note: 'LCD 20x4 — wiring sama seperti lcd1602.'
  },
  "wokwi-a4988": {
    pins: ["ENABLE","MS1","MS2","MS3","RESET","SLEEP","STEP","DIR","GND","VDD","1B","1A","2A","2B","VMOT"],
    note: "STEP=langkah, DIR=arah. Motor: 1B/1A→B-/B+, 2A/2B→A+/A-."
  },
  "wokwi-wifi-ap": {
    pins: [],
    attrs: 'ssid, password, channel, internet',
    note: "AP WiFi simulasi; tanpa ini ESP32 pakai Wokwi-GUEST."
  }
};

// Katalog penuh hasil parse docs — dipakai utk part selain yang sudah dikurasi
const DOC_PARTS = require('../data/wokwi-parts.json');

// Gabungkan: part kurasi = otoritatif; part docs lain ditambahkan bila punya tabel pin
const WOKWI_PARTS = {};
for (const [type, info] of Object.entries(CURATED_PARTS)) {
  WOKWI_PARTS[type] = { ...info };
}
for (const [type, info] of Object.entries(DOC_PARTS)) {
  if (!info.pins || !info.pins.length) continue; // tanpa tabel pin → tidak bisa divalidasi
  if (WOKWI_PARTS[type]) {
    // isi attrs dari docs bila kurasi belum punya
    if (!WOKWI_PARTS[type].attrs && info.attrs && Object.keys(info.attrs).length) {
      WOKWI_PARTS[type].attrs = Object.entries(info.attrs)
        .map(([k, v]) => `${k}: "${v.default || '?'}"`).join(", ");
    }
    continue;
  }
  WOKWI_PARTS[type] = {
    pins: info.pins,
    attrs: Object.keys(info.attrs || {}).length
      ? Object.entries(info.attrs).map(([k, v]) => `${k}: "${v.default || '?'}"`).join(", ")
      : undefined,
    note: info.desc ? info.desc.slice(0, 100) : undefined
  };
}

const ALLOWED_TYPES = Object.keys(WOKWI_PARTS);

// Part yang diikutkan di system prompt (hemat token — limit TPM free tier 8K).
// Part di luar daftar ini tetap VALID saat validasi (ALLOWED_TYPES penuh),
// hanya tidak diiklankan ke AI.
const PROMPT_PARTS = new Set([
  // board
  'wokwi-arduino-uno', 'board-esp32-devkit-c-v4',
  // dasar
  'wokwi-led', 'wokwi-resistor', 'wokwi-pushbutton', 'wokwi-potentiometer',
  'wokwi-buzzer', 'wokwi-slide-switch',
  // sensor
  'wokwi-dht22', 'wokwi-hc-sr04', 'wokwi-pir-motion-sensor',
  'wokwi-photoresistor-sensor', 'wokwi-ntc-temperature-sensor', 'wokwi-gas-sensor',
  'wokwi-mpu6050', 'wokwi-ds18b20',
  // output/display
  'wokwi-lcd1602', 'wokwi-lcd2004', 'wokwi-ssd1306', 'wokwi-7segment',
  'wokwi-tm1637-7segment', 'wokwi-servo', 'wokwi-relay-module',
  'wokwi-neopixel', 'wokwi-rgb-led',
  // IoT
  'wokwi-wifi-ap'
]);

// ─────────────────────────────────────────────────────────────
// KATALOG LIBRARY WOKWI (Library Manager) — nama WAJIB persis
// dipakai untuk: prompt AI + auto-fill deterministik via #include
// ─────────────────────────────────────────────────────────────
const LIBRARY_CATALOG = {
  // header #include → nama library Wokwi yang valid
  'DHT.h': ['DHT sensor library', 'DHT sensor library for ESPx'],
  'OneWire.h': ['OneWire'],
  'DallasTemperature.h': ['DallasTemperature'],
  'HX711.h': ['HX711'],
  'FirebaseESP32.h': ['Firebase ESP32 Client'],
  'ESP32Servo.h': ['ESP32Servo'],
  'Adafruit_SSD1306.h': ['Adafruit SSD1306'],
  'Adafruit_GFX.h': ['Adafruit GFX Library'],
  'Adafruit_BusIO.h': ['Adafruit BusIO'],
  'Adafruit_NeoPixel.h': ['Adafruit NeoPixel'],
  'Adafruit_BMP085.h': ['Adafruit BMP085 Library'],
  'Keypad.h': ['Keypad'],
  'LiquidCrystal_I2C.h': ['LiquidCrystal I2C'],
  'TM1637Display.h': ['TM1637'],
  'IRremote.h': ['IRremote'],
  'RTClib.h': ['RTClib'],
  'LedControl.h': ['LedControl'],
  'MFRC522.h': ['MFRC522'],
  'Adafruit_PCD8544.h': ['Adafruit PCD8544 Nokia 5110 LCD'],
  'SevSeg.h': ['SevSeg'],
  'SdFat.h': ['SdFat'],
  'IRMP.h': ['IRMP']
};

// Auto-fill deterministik: scan #include di cpp_code → daftar library.
// Menimpa tebakan AI (0 token tambahan, hasil selalu konsisten).
function detectLibraries(cppCode, boardKey) {
  const libs = new Set();
  const includes = [...String(cppCode || '').matchAll(/#include\s*<([^>]+)>/g)].map((m) => m[1]);
  for (const h of includes) {
    const candidates = LIBRARY_CATALOG[h];
    if (!candidates) continue;
    if (h === 'DHT.h' && boardKey === 'esp32') {
      libs.add('DHT sensor library for ESPx');
    } else if (h === 'DHT.h' && boardKey !== 'esp32') {
      libs.add('DHT sensor library');
    } else {
      libs.add(candidates[0]);
    }
  }
  return [...libs];
}

// Teks katalog untuk system prompt (ringkas — hemat token)
const PARTS_CATALOG_TEXT = ALLOWED_TYPES.filter(t => PROMPT_PARTS.has(t)).map(t => {
  const p = WOKWI_PARTS[t];
  let line = `- ${t}: pins ${p.pins.join(", ")}`;
  if (p.attrs) line += ` | attrs: ${p.attrs}`;
  if (p.note) line += ` | ${p.note}`;
  return line;
}).join("\n");

// ─────────────────────────────────────────────────────────────
// VALIDASI DETERMINISTIK DIAGRAM WOKWI (0 token di jalur normal)
// ─────────────────────────────────────────────────────────────
function validateWokwiDiagram(rawDiagram) {
  const errors = [];
  if (!rawDiagram) return ["wokwi_diagram kosong/hilang — wajib ada"];

  let diag;
  try {
    diag = typeof rawDiagram === "string" ? JSON.parse(rawDiagram) : rawDiagram;
  } catch (e) {
    return ["wokwi_diagram bukan JSON valid: " + e.message];
  }

  if (diag.version !== 1) errors.push("version wajib 1");
  if (!Array.isArray(diag.parts) || diag.parts.length === 0) errors.push("parts wajib array non-kosong");
  if (!Array.isArray(diag.connections)) errors.push("connections wajib array");

  const ids = new Set();
  const pinsOf = {};
  if (Array.isArray(diag.parts)) {
    diag.parts.forEach((p, i) => {
      if (!p || typeof p !== "object") { errors.push(`parts[${i}] bukan objek valid`); return; }
      if (!ALLOWED_TYPES.includes(p.type)) {
        errors.push(`parts[${i}] tipe "${p.type}" tidak dikenal — pilih HANYA dari KATALOG PART di system prompt`);
      }
      if (!p.id) errors.push(`parts[${i}] wajib punya "id"`);
      if (ids.has(p.id)) errors.push(`id part "${p.id}" duplikat`);
      ids.add(p.id);
      if (typeof p.top !== "number" || typeof p.left !== "number") {
        errors.push(`part "${p.id || '?'}" wajib punya "top" & "left" angka (posisi anti-tumpuk)`);
      }
      pinsOf[p.id] = WOKWI_PARTS[p.type] ? WOKWI_PARTS[p.type].pins : [];
    });
  }

  if (Array.isArray(diag.connections)) {
    diag.connections.forEach((c, i) => {
      if (!Array.isArray(c) || c.length < 2 || typeof c[0] !== "string" || typeof c[1] !== "string") {
        errors.push(`connections[${i}] harus array ["partId:pin","partId:pin","color",[]] — JANGAN pakai objek`);
        return;
      }
      [c[0], c[1]].forEach(ep => {
        const m = /^([^:]+):(.+)$/.exec(ep);
        if (!m) { errors.push(`connections[${i}] endpoint "${ep}" salah format — harus "partId:pin"`); return; }
        const [, pid, pin] = m;
        if (!ids.has(pid)) errors.push(`connections[${i}] referensi part "${pid}" tidak ada di daftar parts`);
        const validPins = pinsOf[pid] || [];
        if (!validPins.includes(pin)) {
          errors.push(`connections[${i}] pin "${pin}" tidak valid untuk part "${pid}" — pin valid: ${validPins.join(", ")}`);
        }
      });
    });
  }
  return errors;
}

// ─────────────────────────────────────────────────────────────
// SYSTEM PROMPT (Lapis B: katalog ringkas + contoh diagram)
// ─────────────────────────────────────────────────────────────
const BOARD_INFO = {
  'uno': {
    label: 'Arduino Uno',
    boardType: 'wokwi-arduino-uno',
    codePlatform: 'Uno',
    prompt: `Board utama WAJIB wokwi-arduino-uno (id: "uno"). Pin umum: digital 2-13 (PWM: 3,5,6,9,10,11), analog A0-A5, daya 5V & GND.`,
    codeRules: `- DHT22: #include <DHT.h>; DHT dht(2, DHT22);
- LCD 1602 parallel: LiquidCrystal lcd(12,11,5,4,3,2); (RS,E,D4,D5,D6,D7) — cocokkan dgn koneksi.`,
    example: `{"version":1,"parts":[{"type":"wokwi-arduino-uno","id":"uno","top":0,"left":0,"attrs":{}},{"type":"wokwi-led","id":"led1","top":-100,"left":300,"attrs":{"color":"red"}},{"type":"wokwi-resistor","id":"r1","top":-20,"left":300,"attrs":{"value":"220"}}],"connections":[["uno:13","r1:1","green",["v0"]],["r1:2","led1:A","green",["v0"]],["led1:C","uno:GND.1","black",["v0"]]]}`
  },
  'esp32': {
    label: 'ESP32 DevKitC V4',
    boardType: 'board-esp32-devkit-c-v4',
    codePlatform: 'ESP32',
    prompt: `Board utama WAJIB board-esp32-devkit-c-v4 (id: "esp"). GPIO digital: 2,4,5,12,13,14,15,16,17,18,19,21,22,23,25,26,27,32,33 (PWM hampir semua). ADC (input saja): 34,35. I2C default: SDA=21, SCL=22. Daya: 3V3, 5V, GND.`,
    codeRules: `- Kode platform ESP32 (Arduino core): #include <WiFi.h>, dll. WiFi: WiFi.begin.
- DHT22: #include <DHT.h>; DHT dht(4, DHT22);`,
    example: `{"version":1,"parts":[{"type":"board-esp32-devkit-c-v4","id":"esp","top":0,"left":0,"attrs":{}},{"type":"wokwi-dht22","id":"dht","top":-120,"left":320,"attrs":{}}],"connections":[["dht:VCC","esp:3V3","red",["v0"]],["dht:SDA","esp:4","green",["v0"]],["dht:GND","esp:GND.1","black",["v0"]]]}`
  }
};

function buildSystemPrompt(boardKey) {
  const b = BOARD_INFO[boardKey] || BOARD_INFO['uno'];
  return `You are an IoT Expert building projects on ${b.label}. Reply ONLY with raw JSON (no markdown, no code fences).

SCHEMA (wajib persis):
{"title":"Nama","description":"Deskripsi singkat","bom":["1x ${b.label}","1x LED"],"wiring_guide":[{"komponen":"LED","pin_komponen":"A","koneksi_arduino":"Pin 13 (via resistor)"}],"cpp_code":"kode dgn \\n literal","libraries":[],"wokwi_diagram":"string JSON minified 1 baris"}
- "libraries" SELALU [] — sistem mengisi otomatis dari #include cpp_code.

DIAGRAM RULES:
- wokwi_diagram = 1 baris string JSON: {"version":1,"parts":[...],"connections":[...]}
- Part WAJIB objek {"type","id","top":<angka>,"left":<angka>,"attrs":{}} — type & pin WAJIB dari KATALOG di bawah, dilarang mengarang.
- connections WAJIB array of arrays: ["partId:pin","partId:pin","color",[]]. JANGAN objek.
- ${b.prompt}
- Semua komponen wajib dapat daya (Uno: 5V & GND; ESP32: 3V3/5V & GND). Motor/pompa/AC wajib via wokwi-relay-module. Sensor tak dikenal → wokwi-potentiometer + catatan di description.

KATALOG PART WOKWI:
${PARTS_CATALOG_TEXT}

CONTOH DIAGRAM (${b.label}):
${b.example}

KODE RULES:
- cpp_code = 1 baris string, \\n literal. Komentar Indonesia maks 5 kata. Baris atas: // Proyek: X \\n // Logika: Y \\n // Platform: ${b.codePlatform}
- Gaya rapi khas Arduino: 1 statement per baris, indentasi 2 spasi. Dilarang minified (buruk: "void setup(){pinMode(13,OUTPUT);}").
${b.codeRules}
- Akhiri loop() dengan delay(50); atau lebih.`;
}

// ─────────────────────────────────────────────────────────────
// FORMATCPP — pretty-printer deterministik utk sketch Arduino.
// AI sering mengembalikan kode minified dgn "\n" literal → dirapikan
// di sini (0 token): 1 statement per baris + indentasi 2 spasi.
// Aman thd string/char literal & komentar (di-skip saat scan).
// ─────────────────────────────────────────────────────────────
function formatCpp(raw) {
  if (!raw) return raw;
  const src = String(raw)
    .replace(/\r\n?/g, '\n')
    .replace(/\\n/g, '\n'); // literal "\n" dari JSON → baris baru

  // Pass 1: pecah baris setelah ; { } (di luar string/komentar/kurung)
  let out = '';
  let i = 0;
  const n = src.length;
  let paren = 0;
  while (i < n) {
    const c = src[i];
    if (c === '"' || c === "'") {
      const q = c;
      out += c; i++;
      while (i < n) {
        out += src[i];
        if (src[i] === '\\') { out += (src[i + 1] || ''); i += 2; continue; }
        i++;
        if (src[i - 1] === q) break;
      }
      continue;
    }
    if (c === '/' && src[i + 1] === '/') {
      while (i < n && src[i] !== '\n') { out += src[i]; i++; }
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      out += '/*'; i += 2;
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) { out += src[i]; i++; }
      out += '*/'; i += 2;
      continue;
    }
    if (c === '(') paren++;
    if (c === ')') paren = Math.max(0, paren - 1);
    if (c === '\n') { out += (paren > 0 ? ' ' : '\n'); i++; continue; }
    if (c === '{') { out = out.replace(/[ \t]+$/, '') + ' {\n'; i++; continue; }
    if (c === '}') {
      out = out.replace(/[ \t]+$/, '');
      if (src[i + 1] === ';') { out += '};\n'; i += 2; continue; }
      out += '\n}\n'; i++;
      continue;
    }
    if (c === ';' && paren === 0) {
      // Jangan pecah bila sisa baris hanya komentar // (biarkan nyambung)
      let j = i + 1;
      while (j < n && (src[j] === ' ' || src[j] === '\t')) j++;
      if (src[j] === '/' && src[j + 1] === '/') { out += ';'; i++; continue; }
      out += ';\n'; i++; continue;
    }
    if (c === ',') {
      // Rapikan spasi setelah koma (di luar string): f(a,b) → f(a, b)
      out += ',';
      i++;
      if (src[i] !== ' ' && src[i] !== '\t' && src[i] !== '\n') out += ' ';
      continue;
    }
    out += c; i++;
  }

  // Buang baris kosong beruntun
  const lines = out.split('\n').map(l => l.trim()).filter(l => l !== '');

  // Pass 2: indentasi (hitung kurung di luar string/komentar)
  const structural = (line) => line
    .replace(/"(?:[^"\\]|\\.)*"/g, '""')
    .replace(/'(?:[^'\\]|\\.)*'/g, "''")
    .replace(/\/\/.*$/, '')
    .replace(/\/\*.*?\*\//g, '');
  let depth = 0;
  const result = [];
  for (const line of lines) {
    if (line.startsWith('#')) { result.push(line); continue; } // preprocessor rata kiri
    const s = structural(line);
    const opens = (s.match(/{/g) || []).length;
    const closes = (s.match(/}/g) || []).length;
    if (closes > opens) {
      if (depth === 1 && !result[result.length - 1]) result.pop(); // 1 baris kosong antar fungsi
      depth = Math.max(0, depth - (closes - opens));
    }
    result.push('  '.repeat(depth) + line);
    if (opens > closes) depth += (opens - closes);
  }
  return result.join('\n');
}

// ─────────────────────────────────────────────────────────────
// CACHE GENERATE — ide+board sama dalam 30 menit → balas instan
// tanpa panggil AI (hemat token utk retry/klik ulang).
// Best-effort: hidup selama proses server (dev lokal efektif;
// di Vercel instance bisa hangus antar request).
// ─────────────────────────────────────────────────────────────
const GEN_CACHE_TTL = 30 * 60 * 1000;
const GEN_CACHE_MAX = 50;
const genCache = new Map();

function cacheGet(key) {
  const hit = genCache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.t > GEN_CACHE_TTL) { genCache.delete(key); return null; }
  return hit.v;
}

function cacheSet(key, val) {
  if (genCache.size >= GEN_CACHE_MAX) {
    genCache.delete(genCache.keys().next().value); // evict tertua
  }
  genCache.set(key, { t: Date.now(), v: val });
}

// ─────────────────────────────────────────────────────────────
// HANDLER
// ─────────────────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS Headers
  const origin = req.headers.origin;
  const isAllowed = !origin ||
                    origin.endsWith(".vercel.app") ||
                    origin.includes("localhost") ||
                    origin.includes("127.0.0.1");

  const allowedOrigin = isAllowed ? origin : "https://elektrodict.vercel.app";

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin || "*");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: { message: `Method ${req.method} Not Allowed` } });
  }

  let openRouterKey = process.env.OPENROUTER_API_KEY;
  let groqKeysStr = process.env.GROQ_API_KEYS;
  let groqFallbackKey = process.env.GROQ_API_KEY;
  let groqKeys = groqKeysStr ? groqKeysStr.split(',').map(k => k.trim()).filter(Boolean) : (groqFallbackKey ? [groqFallbackKey] : []);

  if (!openRouterKey && groqKeys.length === 0) {
    return res.status(500).json({ error: { message: "API Key belum dikonfigurasi di Vercel!" } });
  }

  try {
    const { idea, board } = req.body;

    if (!idea) {
      return res.status(400).json({ error: { message: "Harap berikan ide proyek." } });
    }

    // Board pilihan user: 'uno' (default) atau 'esp32'
    const boardKey = (board === 'esp32') ? 'esp32' : 'uno';
    const expectedBoard = BOARD_INFO[boardKey].boardType;

    // Cache hit → balas instan tanpa panggil AI
    const cacheKey = `${boardKey}:${String(idea).trim().toLowerCase()}`;
    const cached = cacheGet(cacheKey);
    if (cached) {
      console.log(`[Backend] Cache hit: ${cacheKey}`);
      return res.status(200).json({ result: JSON.stringify(cached), cached: true });
    }

    const systemPrompt = buildSystemPrompt(boardKey);

    // Panggil model: coba OpenRouter dulu, fallback Groq (gpt-oss-120b → gpt-oss-20b)
    const callModel = async (messages, maxTokens) => {
      let response;

      if (openRouterKey) {
        try {
          response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${openRouterKey}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "https://elektrodict.vercel.app",
              "X-Title": "ElektroBot AI"
            },
            body: JSON.stringify({
              model: "z-ai/glm-5.2:free",
              response_format: { type: "json_object" },
              messages,
              temperature: 0.7,
              max_tokens: maxTokens,
              stream: false
            })
          });
        } catch (err) {
          console.warn("[Backend] OpenRouter project-gen failed, falling back to Groq...", err);
        }
      }

      if ((!response || !response.ok) && groqKeys.length > 0) {
        const doFetchGroq = (key, model) => {
          const groqBody = {
            model,
            response_format: { type: "json_object" },
            messages,
            temperature: 0.7,
            max_tokens: maxTokens,
            stream: false
          };
          // Sembunyikan thinking dari sumbernya:
          // gpt-oss → reasoning_effort 'low' + include_reasoning false
          // qwen3.6-27b → reasoning_effort 'none' (matikan sepenuhnya)
          if (model.startsWith('openai/gpt-oss')) {
            groqBody.reasoning_effort = 'low';
            groqBody.include_reasoning = false;
          } else if (model === 'qwen/qwen3.6-27b') {
            groqBody.reasoning_effort = 'none';
          }
          return fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${key}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(groqBody)
          });
        };

        const callGroq = async (model) => {
          if (groqKeys.length === 0) {
            const err = new Error("Semua API key Groq habis/terkena limit. Coba lagi sebentar.");
            err.status = 429;
            throw err;
          }
          let currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
          let resp = await doFetchGroq(currentKey, model);

          if (resp.status === 401 || resp.status === 403) {
            // Key invalid → buang permanen, coba key lain bila ada
            groqKeys = groqKeys.filter(k => k !== currentKey);
            if (groqKeys.length > 0) {
              currentKey = groqKeys[0];
              resp = await doFetchGroq(currentKey, model);
            }
          } else if (resp.status === 429 && groqKeys.length > 1) {
            // Rate limit → rotasi ke key lain (key tetap dipakai request berikutnya)
            const others = groqKeys.filter(k => k !== currentKey);
            currentKey = others[Math.floor(Math.random() * others.length)];
            resp = await doFetchGroq(currentKey, model);
          }
          return resp;
        };

        response = await callGroq("openai/gpt-oss-120b");
        if ([429, 413, 500].includes(response.status)) {
          response = await callGroq("openai/gpt-oss-20b");
        }
      }

      if (!response || !response.ok) {
        const status = response?.status || 500;
        const errBody = await response?.json().catch(() => ({}));
        const err = new Error(errBody?.error?.message || "AI gagal generate. Coba instruksi yang lebih simpel.");
        err.status = status;
        throw err;
      }

      const data = await response.json();
      if (!data?.choices?.[0]?.message?.content) {
        throw new Error(`Model returned empty response (no choices). Raw: ${JSON.stringify(data).slice(0, 200)}`);
      }
      return data.choices[0].message.content;
    };

    const parseResult = (content) => {
      let clean = String(content || '').replace(/```json/ig, '').replace(/```/g, '').trim();
      return JSON.parse(clean);
    };

    // ── GENERATE AWAL ──
    let result = await callModel(
      [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Buatkan tutorial untuk proyek: ${idea}` }
      ],
      3500
    );

    let prj = parseResult(result);
    let errors = validateWokwiDiagram(prj.wokwi_diagram);

    // Pastikan board utama diagram sesuai pilihan user
    const mainBoardOk = (() => {
      try {
        const d = typeof prj.wokwi_diagram === 'string' ? JSON.parse(prj.wokwi_diagram) : prj.wokwi_diagram;
        if (!d || !Array.isArray(d.parts)) return false;
        return d.parts.some(p => p && p.type === expectedBoard);
      } catch (e) { return false; }
    })();
    if (!mainBoardOk) {
      errors.push(`Board utama wajib ${expectedBoard} (sesuai pilihan user). Ganti part board di diagram, sesuaikan semua koneksi ke pin board tersebut, dan perbaiki kode platform-nya.`);
    }

    // ── AUTO-REPAIR (Lapis A) — maksimal 2 percobaan ──
    let repairCount = 0;
    while (errors.length && repairCount < 2) {
      repairCount++;
      const repairPrompt =
        `Diagram Wokwi kamu memiliki ${errors.length} kesalahan:\n` +
        errors.map(e => `- ${e}`).join("\n") +
        `\nPerbaiki SEMUA kesalahan di atas sesuai KATALOG PART yang diberikan, lalu keluarkan ulang SELURUH objek JSON dengan schema yang sama persis (title, description, bom, wiring_guide, cpp_code, libraries, wokwi_diagram).`;

      result = await callModel(
        [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Buatkan tutorial untuk proyek: ${idea}` },
          { role: "assistant", content: result },
          { role: "user", content: repairPrompt }
        ],
        3000
      ).catch((repairErr) => {
        // Repair gagal (mis. limit TPM free tier) → pertahankan hasil awal
        console.warn("[Backend] Auto-repair gagal, pakai hasil awal:", repairErr.message);
        return null;
      });
      if (!result) break;

      try {
        prj = parseResult(result);
      } catch (e) {
        errors = ["JSON hasil perbaikan tidak valid: " + e.message];
        continue;
      }
      errors = validateWokwiDiagram(prj.wokwi_diagram);
    }

    // Tandai status validasi untuk frontend
    prj.wokwi_verified = errors.length === 0;

    // Auto-fill library (deterministik): timpa tebakan AI dengan hasil scan #include
    prj.libraries = detectLibraries(prj.cpp_code, boardKey);

    // Rapikan sketch (AI sering mengirim kode minified / \n literal)
    if (prj.cpp_code) prj.cpp_code = formatCpp(prj.cpp_code);

    if (errors.length) {
      // Diagram tidak lolos: coba selamatkan — drop hanya jika tidak bisa di-parse sama sekali
      let canParse = false;
      try {
        const raw = prj.wokwi_diagram;
        JSON.parse(typeof raw === "string" ? raw : JSON.stringify(raw));
        canParse = true;
      } catch (e) { canParse = false; }

      if (canParse) {
        console.warn("[Backend] Diagram Wokwi lolos parse tapi gagal validasi:", errors);
      } else {
        prj.wokwi_diagram = "";
        prj.description = (prj.description || "") + " (Skema simulator dilewati karena AI gagal membuat diagram valid.)";
      }
    }

    cacheSet(cacheKey, prj);
    return res.status(200).json({ result: JSON.stringify(prj) });

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    const status = error?.status && error.status !== 500 ? error.status : 500;
    return res.status(status).json({ status: "ai_fainted", error: { message: error.message || "Internal Server Error" } });
  }
}

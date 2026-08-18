// api/project-gen.js - Serverless Function (Vercel)
// AI Project Generator dengan validasi deterministik diagram Wokwi + auto-repair.

// ─────────────────────────────────────────────────────────────
// KATALOG PART WOKWI (diverifikasi dari docs.wokwi.com, Juli 2026)
// ─────────────────────────────────────────────────────────────
const WOKWI_PARTS = {
  "wokwi-arduino-uno": {
    pins: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","A0","A1","A2","A3","A4","A5","5V","VIN","GND.1","GND.2","GND.3"],
    note: "PWM: 3,5,6,9,10,11. 3V3/IOREF/AREF/RESET tidak disimulasikan di Wokwi"
  },
  "wokwi-led": {
    pins: ["A","C"],
    attrs: 'color: "red"|"green"|"yellow"|"blue"|"white"',
    note: "A=anoda(+), C=katoda(-). WAJIB pakai resistor seri."
  },
  "wokwi-resistor": {
    pins: ["1","2"],
    attrs: 'value: "220","330","1k","10k"'
  },
  "wokwi-buzzer": {
    pins: ["1","2"],
    note: "1=negatif(hitam), 2=positif(merah)"
  },
  "wokwi-pushbutton": {
    pins: ["1.l","1.r","2.l","2.r"],
    note: "1.l & 1.r selalu tersambung internal; 2.l & 2.r selalu tersambung internal. Tekan = kontak 1 terhubung kontak 2."
  },
  "wokwi-potentiometer": {
    pins: ["VCC","SIG","GND"],
    attrs: 'value: 0-1023',
    note: "SIG ke pin analog A0-A5"
  },
  "wokwi-lcd1602": {
    pins: ["VSS","VDD","V0","RS","RW","E","D0","D1","D2","D3","D4","D5","D6","D7","A","K","SDA","SCL"],
    attrs: 'pins: "full" (parallel, default) atau "i2c"',
    note: 'Parallel: VSS,VDD,V0,RS,RW,E,D4-D7,A,K. I2C (pins="i2c"): GND,VCC,SDA,SCL. JANGAN pakai "wokwi-lcd-1602" (nama salah).'
  },
  "wokwi-dht22": {
    pins: ["VCC","SDA","NC","GND"],
    note: "TIDAK ADA wokwi-dht11 di Wokwi — sensor suhu/kelembaban pakai wokwi-dht22. SDA = pin data."
  },
  "wokwi-hc-sr04": {
    pins: ["VCC","TRIG","ECHO","GND"],
    note: "TRIG & ECHO ke pin digital; VCC ke 5V."
  },
  "wokwi-relay-module": {
    pins: ["VCC","GND","IN","NC","COM","NO"],
    note: "IN = sinyal kontrol dari mikrokontroler. Beban AC/DC disambung ke COM & NO (aktif-high)."
  },
  "wokwi-servo": {
    pins: ["PWM","V+","GND"],
    note: "PWM ke pin digital PWM (9/10), V+ ke 5V."
  }
};

const ALLOWED_TYPES = Object.keys(WOKWI_PARTS);

// Teks katalog untuk system prompt (ringkas — hemat token)
const PARTS_CATALOG_TEXT = ALLOWED_TYPES.map(t => {
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
        errors.push(`parts[${i}] tipe "${p.type}" tidak dikenal — wajib salah satu dari: ${ALLOWED_TYPES.join(", ")}`);
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
function buildSystemPrompt() {
  return `You are an IoT Expert for Arduino Uno projects. Reply ONLY with raw JSON (no markdown, no code fences).

SCHEMA (wajib persis):
{"title":"Nama","description":"Deskripsi","bom":["1x Arduino Uno","1x LED"],"wiring_guide":[{"komponen":"LED","pin_komponen":"A","koneksi_arduino":"Pin 13 (via resistor)"}],"cpp_code":"Code with \\n hidden string","wokwi_diagram":"MINIFIED stringified JSON"}

WOKWI DIAGRAM RULES:
- wokwi_diagram = satu baris string JSON minified: {"version":1,"parts":[...],"connections":[...]}
- Setiap part WAJIB objek: {"type":"...","id":"...","top":<angka>,"left":<angka>,"attrs":{...}}
- connections WAJIB array of arrays: ["partId:pin","partId:pin","color",[]]. JANGAN pernah pakai objek.
- Semua part & pin WAJIB dari katalog di bawah. DILARANG mengarang nama part/pin.

KATALOG PART WOKWI (satu-satunya yang diizinkan):
${PARTS_CATALOG_TEXT}

CONTOH DIAGRAM 1 — LED Blink (LED merah + resistor 220, pin 13):
{"version":1,"parts":[{"type":"wokwi-arduino-uno","id":"uno","top":0,"left":0,"attrs":{}},{"type":"wokwi-led","id":"led1","top":-100,"left":300,"attrs":{"color":"red"}},{"type":"wokwi-resistor","id":"r1","top":-20,"left":300,"attrs":{"value":"220"}}],"connections":[["uno:13","r1:1","green",["v0"]],["r1:2","led1:A","green",["v0"]],["led1:C","uno:GND.1","black",["v0"]]]}

CONTOH DIAGRAM 2 — DHT22 suhu & kelembaban (SDA ke pin 2):
{"version":1,"parts":[{"type":"wokwi-arduino-uno","id":"uno","top":0,"left":0,"attrs":{}},{"type":"wokwi-dht22","id":"dht","top":-120,"left":300,"attrs":{}}],"connections":[["dht:VCC","uno:5V","red",["v0"]],["dht:SDA","uno:2","green",["v0"]],["dht:GND","uno:GND.1","black",["v0"]]]}

KODE RULES:
- cpp_code = 1 baris string dengan \\n literal. KOMENTAR BAHASA INDONESIA, maks 5 kata/baris.
- Baris atas: // Proyek: X \\n // Logika: Y \\n // Platform: Uno
- DHT22 pakai library Adafruit DHT: #include <DHT.h>; DHT dht(2, DHT22);
- LCD 1602 pakai LiquidCrystal lcd(12,11,10,9,8,7); — cocokkan dengan koneksi RS=12,E=11,D4=10,D5=9,D6=8,D7=7.
- ALWAYS akhiri loop() dengan delay(50); (atau lebih besar sesuai kebutuhan).
- RULES LAIN: semua komponen wajib dapat daya (5V & GND). Motor/pompa/AC WAJIB lewat relay-module. Sensor tak dikenal → fallback wokwi-potentiometer + catatan di description.`;
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
    const { idea } = req.body;

    if (!idea) {
      return res.status(400).json({ error: { message: "Harap berikan ide proyek." } });
    }

    const systemPrompt = buildSystemPrompt();

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
        const callGroq = async (model) => {
          let currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
          let resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${currentKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              ...{
                model,
                response_format: { type: "json_object" },
                messages,
                temperature: 0.7,
                max_tokens: maxTokens,
                stream: false
              },
              reasoning_effort: 'low'
            })
          });

          if (resp.status === 429) {
            groqKeys = groqKeys.filter(k => k !== currentKey);
            if (groqKeys.length > 0) {
              currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
              resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Authorization": `Bearer ${currentKey}`,
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  model,
                  response_format: { type: "json_object" },
                  messages,
                  temperature: 0.7,
                  max_tokens: maxTokens,
                  stream: false
                })
              });
            }
          }
          return resp;
        };

        response = await callGroq("openai/gpt-oss-120b");
        if (response.status === 429 || response.status === 500) {
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
      4000
    );

    let prj = parseResult(result);
    let errors = validateWokwiDiagram(prj.wokwi_diagram);

    // ── AUTO-REPAIR (Lapis A) — maksimal 2 percobaan ──
    let repairCount = 0;
    while (errors.length && repairCount < 2) {
      repairCount++;
      const repairPrompt =
        `Diagram Wokwi kamu memiliki ${errors.length} kesalahan:\n` +
        errors.map(e => `- ${e}`).join("\n") +
        `\nPerbaiki SEMUA kesalahan di atas sesuai KATALOG PART yang diberikan, lalu keluarkan ulang SELURUH objek JSON dengan schema yang sama persis (title, description, bom, wiring_guide, cpp_code, wokwi_diagram).`;

      result = await callModel(
        [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Buatkan tutorial untuk proyek: ${idea}` },
          { role: "assistant", content: result },
          { role: "user", content: repairPrompt }
        ],
        6000
      );

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

    return res.status(200).json({ result: JSON.stringify(prj) });

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    const status = error?.status && error.status !== 500 ? error.status : 500;
    return res.status(status).json({ status: "ai_fainted", error: { message: error.message || "Internal Server Error" } });
  }
}

// api/project-gen.js - Serverless Function (Vercel)
// Mengambil inspirasi dari api/chat.js untuk keamanan dan CORS

export default async function handler(req, res) {
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

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: { message: "API Key belum dikonfigurasi di Vercel!" } });
  }

  try {
    const { idea } = req.body;
    
    if (!idea) {
      return res.status(400).json({ error: { message: "Harap berikan ide proyek." } });
    }

    const systemPrompt = `You are an Expert Embedded Systems & IoT Engineer. You MUST return your response ONLY as a raw, valid JSON object. Do not include markdown formatting like \`\`\`json. The JSON structure MUST exactly match this format:
{
"title": "Nama Proyek (Bahasa Indonesia)",
"description": "Deskripsi singkat proyek",
"bom": ["Komponen 1", "Komponen 2"],
"wiring_guide": [
  { "komponen": "Nama Komponen", "pin_komponen": "VCC/GND/SDA/dll", "koneksi_arduino": "5V/GND/Pin Digital 2/dll" }
],
"cpp_code": "full Arduino C++ code as a single string",
"wokwi_diagram": "stringified JSON of a valid Wokwi diagram.json"
}

STRICT ENGINEERING RULES:
1. MANDATORY POWER: Include VCC/5V and GND connections for EVERY component in wiring_guide.
2. I2C FOR DISPLAYS: Always use I2C (VCC, GND, SDA, SCL) for LCD/OLED. Never parallel wiring.
3. RELAY SAFETY: Never wire a motor/pump directly to an Arduino pin. Use a relay module.
4. CODE FORMAT: 'cpp_code' must be one long string with real newlines (\\n).
5. SIMULATION OPTIMIZATION: Always add "delay(50);" at the very end of void loop() to prevent Wokwi simulator lag.

6. WOKWI DIAGRAM — GOD MODE STRICT SCHEMA:
   'wokwi_diagram' MUST be a stringified JSON string in this shape:
   {"version":1,"parts":[...],"connections":[...]}

   === ALLOWED COMPONENT LIBRARY (No Hallucinations) ===
   ONLY use these exact "type" values — no others:
     wokwi-arduino-uno
     wokwi-led
     wokwi-resistor
     wokwi-buzzer
     wokwi-hc-sr04
     wokwi-pushbutton
     wokwi-potentiometer
     wokwi-lcd-1602
     wokwi-dht11
     wokwi-relay-module
     wokwi-servo
   If a component is not in this list, DO NOT include it. Do not invent new types.

   === SIMULATION FALLBACK STRATEGY ===
   If the project needs a sensor NOT in the allowed list (e.g. Soil Moisture, pH, Gas, Water Level):
   - Use "wokwi-potentiometer" to simulate the analog input in diagram.json.
   - Append to "description": " | SIMULATOR NOTE: Menggunakan Potensiometer di simulator untuk mewakili sensor analog demi keperluan pengujian Wokwi."

   === PARTS RULES ===
   Every object in "parts" MUST have:
   - "type": one of the allowed types above
   - "id": unique string identifier (e.g. "led1", "r1", "uno")
   - "top" and "left": number (pixel position)
   Example: {"type":"wokwi-arduino-uno","id":"uno","top":0,"left":0}

   === CONNECTIONS RULES — CRITICAL ===
   "connections" is an ARRAY OF ARRAYS. Never use objects.
   Each connection: ["sourceId:pin", "targetId:pin", "color", []]
   Example: ["uno:13", "r1:1", "green", []]
   FORBIDDEN format: {"id":"c1","from":"...","to":"..."} — this WILL break Wokwi.

   === PIN NAME DICTIONARY (case-sensitive, exact) ===
   wokwi-arduino-uno   → "5V", "GND.1", "GND.2", "GND.3", "0"–"13", "A0"–"A5"
   wokwi-led           → "A" (anode/+), "C" (cathode/−)
   wokwi-resistor      → "1", "2"
   wokwi-buzzer        → "1", "2"
   wokwi-pushbutton    → "1L", "1R", "2L", "2R"
   wokwi-potentiometer → "VCC", "SIG", "GND"
   wokwi-hc-sr04       → "VCC", "TRIG", "ECHO", "GND"
   wokwi-lcd-1602      → "VCC", "GND", "SDA", "SCL"
   wokwi-dht11         → "VCC", "SDA", "GND"
   wokwi-relay-module  → "VCC", "GND", "IN"
   wokwi-servo         → "V", "G", "S"
   RULE: Never guess a pin name. If unsure, use "1" and "2".`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Buatkan tutorial untuk proyek: ${idea}` }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        stream: false 
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    const result = data.choices[0].message.content;

    // Send back the raw JSON string (the client will parse it)
    return res.status(200).json({ result });

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    return res.status(500).json({ error: { message: error.message || "Internal Server Error" } });
  }
}

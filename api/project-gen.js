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

    const systemPrompt = `You are an IoT Expert. Reply ONLY with raw JSON (no markdown).
Schema:
{"title":"Nama","description":"Deskripsi","bom":["K1"],"wiring_guide":[{"komponen":"K1","pin_komponen":"VCC","koneksi_arduino":"5V"}],"cpp_code":"Code with \\nHidden string","wokwi_diagram":"MINIFIED stringified JSON"}

RULES:
1. POWER: VCC/5V & GND required for all.
2. I2C: I2C only for OLED.
3. RELAY: Use relay for motors/pumps.
4. CODE:
- 1-liner string with \\n.
- INDONESIAN COMMENTS ONLY. MAX 5 WORDS PER LINE (e.g., // Set pin output).
- Top comment: // Proyek: X \n// Logika: Y \n// Platform: Uno
- ALWAYS add delay(50); at end of loop().
5. WOKWI DIAGRAM:
- MUST be 1-liner MINIFIED JSON string: {"version":1,"parts":[...],"connections":[...]}
- MANDATORY PARTS OBJECT: Every item in "parts" array MUST be a valid object with type, id, top, left coordinates (to prevent overlap).
  Example: {"type":"wokwi-arduino-uno","id":"uno","top":0,"left":0}
- ALLOWED PARTS: wokwi-arduino-uno, wokwi-led, wokwi-resistor, wokwi-buzzer, wokwi-hc-sr04, wokwi-pushbutton, wokwi-potentiometer, wokwi-lcd-1602, wokwi-dht11, wokwi-relay-module, wokwi-servo
- FALLBACK: Use wokwi-potentiometer for unknown sensors. Add note to description.
- STRICT PINS (UPPERCASE ONLY):
  uno: 5V, GND.1, GND.2, GND.3, 0-13, A0-A5
  led: A, C
  pot/hc-sr04/dht11/relay: VCC, GND, SIG/TRIG/ECHO/SDA/IN
  servo: V, G, S
  resistor/buzzer/btn: 1, 2, 1L, 1R
- CONNECTIONS ARRAY: MUST be array of arrays ["src:pin","tgt:pin","color",[]]. NEVER use objects for connections.
- LCD 1602 PARALLEL ONLY (NO SDA/SCL/VCC):
  REQUIRED: ["lcd:VSS","uno:GND.1","black",[]],["lcd:VDD","uno:5V","red",[]],["lcd:V0","uno:GND.2","black",[]],["lcd:RS","uno:12","green",[]],["lcd:RW","uno:GND.3","black",[]],["lcd:E","uno:11","yellow",[]],["lcd:D4","uno:5","blue",[]],["lcd:D5","uno:4","blue",[]],["lcd:D6","uno:3","blue",[]],["lcd:D7","uno:2","blue",[]],["lcd:A","uno:5V","red",[]],["lcd:K","uno:GND.1","black",[]]
  C++: LiquidCrystal lcd(12,11,5,4,3,2);`;

    const getPayload = (model) => ({
      model,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user",   content: `Buatkan tutorial untuk proyek: ${idea}` }
      ],
      temperature: 0.7,
      max_tokens: 4000,
      stream: false
    });

    let response;

    // 1. Try OpenRouter (Qwen) first
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
          body: JSON.stringify(getPayload("qwen/qwen-2.5-72b-instruct:free"))
        });
      } catch (err) {
        console.warn("[Backend] OpenRouter project-gen failed, falling back to Groq...", err);
      }
    }

    // 2. Try Groq as fallback
    if ((!response || !response.ok) && groqKeys.length > 0) {
      const callGroq = async (model) => {
        let currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
        let resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${currentKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(getPayload(model))
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
              body: JSON.stringify(getPayload(model))
            });
          }
        }
        return resp;
      };

      response = await callGroq("llama-3.3-70b-versatile");
      if (response.status === 429 || response.status === 500) {
        response = await callGroq("llama-3.1-8b-instant");
      }
    }

    if (!response || !response.ok) {
      const status = response?.status || 500;
      const errBody = await response?.json().catch(() => ({}));
      return res.status(status).json({ status: "ai_fainted", error: { message: errBody?.error?.message || "AI gagal generate. Coba instruksi yang lebih simpel." } });
    }

    const data = await response.json();
    const result = data.choices[0].message.content;
    return res.status(200).json({ result });

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    return res.status(500).json({ status: "ai_fainted", error: { message: error.message || "Internal Server Error" } });
  }
}

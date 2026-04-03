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
"cpp_code": "kumpulan string code arduino lengkap",
"wokwi_diagram": "stringified JSON diagram.json"
}

STRICT ENGINEERING RULES:
1. MANDATORY POWER: You MUST include the power (VCC/5V/3.3V) and ground (GND) connections for EVERY single component in the wiring_guide.
2. I2C DEFAULT FOR DISPLAYS: If using an LCD or OLED, you MUST use the I2C version (VCC, GND, SDA, SCL). Never suggest parallel wiring.
3. RELAY & HIGH-CURRENT SAFETY: NEVER connect a motor, pump, or high-current device directly to an Arduino pin. The microcontroller pin must only connect to a Relay or Transistor's signal/base pin. The actuator must be powered externally through the Relay.
4. CODE FORMAT: The 'cpp_code' field MUST be a single long string containing the full Arduino C++ code (include newlines \n).
5. WOKWI DIAGRAM: You must generate a valid, stringified JSON representing a standard Wokwi diagram.json file. It must include "version": 1, the "parts" array (e.g., "board-uno", LEDs, resistors), and the "connections" array mapping the virtual wires precisely. This diagram must perfectly match the cpp_code and bom. Ensure quotes are escaped properly so it is a valid string inside the main JSON.`;

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

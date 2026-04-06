// api/chat.js - Standard Node.js Serverless Function (Vercel)
// Menggunakan Standard Runtime (bukan Edge) untuk stabilitas lebih baik

export default async function handler(req, res) {
  // CORS Headers
  const origin = req.headers.origin;
  const isAllowed = !origin || 
                    origin.endsWith(".vercel.app") || 
                    origin.includes("localhost") || 
                    origin.includes("127.0.0.1");
  
  const allowedOrigin = isAllowed ? origin : "https://elektrodict.vercel.app";

  // Handle CORS Preflight
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
    console.error("[Backend] API Key is missing in process.env");
    return res.status(500).json({ error: { message: "API Key belum dikonfigurasi di Vercel!" } });
  }

  try {
    const payload = req.body;
    
    if (!payload || !payload.messages) {
      return res.status(400).json({ error: { message: "Payload tidak valid." } });
    }

    // --- MODEL SWITCHER LOGIC ---
    let requestedModel = payload.model;
    let targetModel = requestedModel || "qwen/qwen-2.5-72b-instruct:free"; 
    let messages = Array.isArray(payload.messages) ? [...payload.messages] : [];
    
    const latexRules = "Strict Requirement: You MUST use LaTeX formatting for any mathematical formulas or equations. Inline Math: MUST be wrapped in single dollar signs ($). Example: $V = IR$. Block/Display Math: MUST be wrapped in double dollar signs ($$) on their own lines. Example: $$P = VI$$. STRICTLY FORBID using plain parentheses (...) or square brackets [...] to enclose LaTeX code.";
    const elektroBotPersona = `ROLE: 
    You are ElektroBot, a Senior Electronics Engineer and Assistant. Your specialty is Circuit Design, Power Systems, Microcontrollers (Arduino/ESP32), Industrial Control (EKTS/PLC), and Vocational Electronics (SMK Teknik Elektro).

    KNOWLEDGE BASE & RULES:
    - Standards: Always refer to PUIL (Persyaratan Umum Instalasi Listrik) and international standards like IEEE or IEC.
    - Precision: Always double-check unit conversions (e.g., mA to A, nF to uF) before giving an answer.
    - Safety First: If a user asks about high voltage (PLN/AC), always start with a safety warning about electrical shock risks.
    - Formula Expert: Always explain formulas using LaTeX. Break down the variables (V = Voltage, etc.).
    - Troubleshooting Mode: If a user reports a broken circuit, DO NOT give a direct answer. Instead, guide them step-by-step: 'Cek tegangan input dulu Sob', 'Cek kontinuitas jalur', etc.

    PERSONALITY & TONE:
    - Tone: Technical yet casual Indonesian (use 'Sob', 'Bro', 'Suhu', 'Sirkuit', 'Arus', 'Tegangan').
    - Style: Smart, helpful, and encouraging. Never be a 'rigid robot'.

    FORMATTING:
    - Use Marked.js for bold text, lists, and code blocks.
    - Use KaTeX for beautiful math equations ($...$ or $$...$$).
    
    ${latexRules}`;

    if (messages.length > 0 && messages[0].role === 'system') {
      messages[0].content = elektroBotPersona;
    } else {
      messages.unshift({ role: 'system', content: elektroBotPersona });
    }

    const aiPayload = {
      ...payload,
      model: targetModel,
      messages: messages,
      stream: false 
    };

    let response;
    
    // 1. Try OpenRouter First if key exists
    if (openRouterKey && (targetModel.includes('qwen') || !groqKeys.length)) {
      try {
        response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${openRouterKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://elektrodict.vercel.app",
            "X-Title": "ElektroBot AI"
          },
          body: JSON.stringify(aiPayload)
        });
      } catch (err) {
        console.warn("[Backend] OpenRouter failed, falling back to Groq...", err);
      }
    }

    // 2. Try Groq as Fallback (or if primary)
    if ((!response || !response.ok) && groqKeys.length > 0) {
      let currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
      response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${currentKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(aiPayload)
      });

      if (response.status === 429) {
        groqKeys = groqKeys.filter(k => k !== currentKey);
        if (groqKeys.length > 0) {
          currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
          response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${currentKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(aiPayload)
          });
        }
      }
    }

    if (!response || !response.ok) {
      const errorData = await response?.json() || { error: { message: "Internal Server Error or AI Fainted." } };
      return res.status(response?.status || 500).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    return res.status(500).json({ error: { message: error.message || "Internal Server Error" } });
  }
}

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

  let keysStr = process.env.GROQ_API_KEYS;
  let fallbackKey = process.env.GROQ_API_KEY;
  let keys = keysStr ? keysStr.split(',').map(k => k.trim()).filter(Boolean) : (fallbackKey ? [fallbackKey] : []);

  if (keys.length === 0) {
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
    let targetModel = requestedModel || "llama-3.3-70b-versatile";
    let messages = Array.isArray(payload.messages) ? [...payload.messages] : [];
    
    const latexRules = "Strict Requirement: You MUST use LaTeX formatting for any mathematical formulas or equations. Inline Math: MUST be wrapped in single dollar signs ($). Example: $V = IR$. Block/Display Math: MUST be wrapped in double dollar signs ($$) on their own lines. Example: $$P = VI$$. STRICTLY FORBID using plain parentheses (...) or square brackets [...] to enclose LaTeX code.";

    if (targetModel === 'openai/gpt-oss-120b') {
      if (messages.length > 0 && messages[0].role === 'system') {
        messages[0].content = `Persona of a senior electrical engineering student who is highly technical, a theory expert, and answers in a casual, student-friendly tone.\n${latexRules}`;
      }
    } else {
      // Default to Flash Response persona for LLaMA and anything else
      if (messages.length > 0 && messages[0].role === 'system') {
        messages[0].content = `Persona of an assistant who is highly responsive, to-the-point, and also uses a casual tone.\n${latexRules}`;
      }
    }

    const groqPayload = {
      ...payload,
      model: targetModel,
      messages: messages,
      stream: false 
    };

    let response;
    let currentKey = keys[Math.floor(Math.random() * keys.length)];

    response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${currentKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(groqPayload)
    });

    if (response.status === 429) {
      keys = keys.filter(k => k !== currentKey);
      if (keys.length > 0) {
        currentKey = keys[Math.floor(Math.random() * keys.length)];
        response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${currentKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(groqPayload)
        });
      }
    }

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    return res.status(500).json({ error: { message: error.message || "Internal Server Error" } });
  }
}

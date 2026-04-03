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

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    console.error("[Backend] API Key is missing in process.env");
    return res.status(500).json({ error: { message: "API Key belum dikonfigurasi di Vercel!" } });
  }

  try {
    const payload = req.body;
    
    if (!payload || !payload.messages) {
      return res.status(400).json({ error: { message: "Payload tidak valid." } });
    }

    // --- MODEL SWITCHER LOGIC ---
    let targetModel = payload.model || "llama-3.3-70b-versatile";
    let messages = Array.isArray(payload.messages) ? [...payload.messages] : [];
    
    if (payload.modelChoice === 'master') {
      targetModel = 'gpt-oss-120b';
      if (messages.length > 0 && messages[0].role === 'system') {
        messages[0].content = "Persona of a senior electrical engineering student who is highly technical, a theory expert, and answers in a casual, student-friendly tone.\nStrict Requirement: You MUST use LaTeX formatting for any mathematical formulas or equations (e.g. \\(V = IR\\) for inline and $$P = VI$$ for display block).";
      }
    } else if (payload.modelChoice === 'flash') {
      targetModel = 'llama-3.3-70b-versatile';
      if (messages.length > 0 && messages[0].role === 'system') {
        messages[0].content = "Persona of an assistant who is highly responsive, to-the-point, and also uses a casual tone.\nStrict Requirement: You MUST use LaTeX formatting for any mathematical formulas or equations (e.g. \\(V = IR\\) for inline and $$P = VI$$ for display block).";
      }
    }
    
    // Remove custom property from payload before sending to Groq
    delete payload.modelChoice;

    const groqPayload = {
      ...payload,
      model: targetModel,
      messages: messages,
      stream: false 
    };

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(groqPayload)
    });

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

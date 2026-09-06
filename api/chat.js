// api/chat.js - Standard Node.js Serverless Function (Vercel)
// Menggunakan Standard Runtime (bukan Edge) untuk stabilitas lebih baik

module.exports = async function handler(req, res) {
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

    let messages = Array.isArray(payload.messages) ? [...payload.messages] : [];

    // Deteksi apakah ada input gambar (multimodal)
    const hasImage = messages.some(m => Array.isArray(m.content) && m.content.some(c => c.type === 'image_url'));

    // Model ditentukan di backend — default ke Llama 3.3 70B (atau Vision jika ada gambar)
    const DEFAULT_MODEL = hasImage ? 'llama-3.2-11b-vision-preview' : 'llama-3.3-70b-versatile';
    let targetModel = DEFAULT_MODEL;
    
    const latexRules = "Rumus wajib LaTeX: inline $...$, blok $$...$$. Contoh: $V = IR$. Dilarang memakai kurung biasa (...) untuk rumus.";
    const elektroBotPersona = `Kamu ElektroBot, asisten ilmiah teknik elektro & elektronika. Formal, sopan, profesional. Panggil pengguna "Kak".

ATURAN:
1. HANYA bahas elektronika: rangkaian, komponen, listrik/instalasi (PUIL), Arduino/ESP32, PLC, energi, rumus, SMK elektro.
2. Di luar itu tolak dengan sopan, contoh: "Maaf Kak, saya khusus mendalami teknik elektro. Ada hal lain seputar elektronika yang bisa saya bantu?"
3. Bahasa Indonesia formal ala ilmuwan, ringkas, tepat.
4. ${latexRules}
5. Tegangan tinggi/PLN: mulai dari peringatan bahaya listrik.
6. Rangkaian rusak: pandu pengecekan bertahap (tegangan, kontinuitas), jangan langsung jawab.`;

    // --- PERSONA LOGIC ---
    // Only apply the default persona if no system prompt is provided by the frontend.
    // This allows the Homepage bot and Main Chatbot to have different personalities.
    const hasSystemPrompt = messages.some(m => m.role === 'system');
    if (!hasSystemPrompt) {
      messages.unshift({ role: 'system', content: elektroBotPersona });
      // Batas 200 karakter hanya untuk percakapan chat bebas (tanpa system prompt dari frontend)
      const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
      if (lastUserMsg && typeof lastUserMsg.content === 'string' && lastUserMsg.content.length > 200) {
        return res.status(400).json({ error: { message: "Pesan terlalu panjang, Kak. Maksimal 200 karakter per pesan." } });
      }
    }

    const aiPayload = {
      ...payload,
      model: targetModel,
      messages: messages,
      stream: false,
      // Pastikan output tidak terpotong di tengah kalimat.
      // Default Groq = 1024 token (terlalu kecil untuk jawaban teknis yang detail).
      // 2048 cukup untuk ~1200 kata — aman di free tier TPM.
      max_tokens: payload.max_tokens || 2048
    };

    let response;
    
    // 1. Try OpenRouter first (jika key tersedia)
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
          body: JSON.stringify(aiPayload)
        });
      } catch (err) {
        console.warn("[Backend] OpenRouter failed, falling back to Groq...", err);
      }
    }

    // 2. Groq fallback — model harus model Groq yang valid (bukan model OpenRouter)
    if ((!response || !response.ok) && groqKeys.length > 0) {
      const GROQ_MODELS = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'llama-3.2-11b-vision-preview', 'llama-3.2-90b-vision-preview'];
      const groqModel = hasImage
        ? 'llama-3.2-11b-vision-preview'
        : (GROQ_MODELS.includes(targetModel) ? targetModel : 'llama-3.3-70b-versatile');

      const callGroq = async (model) => {
        const currentKey = groqKeys[Math.floor(Math.random() * groqKeys.length)];
        const groqBody = { ...aiPayload, model };
        return await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${currentKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(groqBody)
        });
      };

      response = await callGroq(groqModel);
      if (response.status === 429 || response.status === 500) {
        const fallbackModel = hasImage
          ? 'llama-3.2-90b-vision-preview'
          : (groqModel === 'llama-3.3-70b-versatile' ? 'llama-3.1-8b-instant' : 'llama-3.3-70b-versatile');
        response = await callGroq(fallbackModel);
      }
    }

    if (!response || !response.ok) {
      const errorData = await response?.json() || { error: { message: "Internal Server Error or AI Fainted." } };
      return res.status(response?.status || 500).json(errorData);
    }

    const data = await response.json();
    // ── Strip thinking: jangan kirim reasoning ke frontend ──
    try {
      if (data.choices) {
        for (const ch of data.choices) {
          if (ch.message) {
            if (ch.message.reasoning) delete ch.message.reasoning;
            if (typeof ch.message.content === 'string') {
              ch.message.content = ch.message.content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
            }
          }
        }
      }
    } catch (_) {}
    return res.status(200).json(data);

  } catch (error) {
    console.error("[Backend] Runtime Error:", error);
    return res.status(500).json({ error: { message: error.message || "Internal Server Error" } });
  }
}

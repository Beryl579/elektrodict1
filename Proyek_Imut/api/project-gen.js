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

    const systemPrompt = `You are an Embedded Systems Engineer. You MUST return your response ONLY as a raw, valid JSON object. Do not include markdown formatting like \`\`\`json. The JSON structure MUST exactly match this format:
{
"title": "Nama Proyek dalam Bahasa Indonesia",
"description": "Deskripsi singkat proyek",
"difficulty": "Mudah/Menengah/Sulit",
"components": ["Komponen 1", "Komponen 2"],
"wiring_table": [ { "komponen": "Nama Komponen", "koneksi_pin": "Koneksi ke Pin" } ],
"code": ["baris 1", "baris 2"],
"steps": [ { "alur_perakitan": "Langkah 1" }, { "alur_perakitan": "Langkah 2" } ]
}
CRITICAL RULE: The 'code' field MUST be an array of strings (one string per line of code). DO NOT use a single string with \\n for the code. This ensures perfect formatting. The entire output must be perfectly valid for JavaScript's JSON.parse().`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Buatkan tutorial untuk proyek: ${idea}` }
        ],
        temperature: 0.7,
        max_tokens: 2000,
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

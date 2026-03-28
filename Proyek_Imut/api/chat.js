export const runtime = 'edge';

export default async function handler(req) {
  // Ambil origin untuk validasi CORS (Vercel production & deployment domains)
  const origin = req.headers.get("origin");
  const allowedOrigin = (origin && origin.endsWith(".vercel.app")) ? origin : "https://elektrodict.vercel.app";
  
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  // Hanya terima method POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: { message: "Method Not Allowed" } }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Ambil API Key dari Vercel Environment Variables
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    return new Response(JSON.stringify({ error: { message: "API Key belum dimasukkan!" } }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const payload = await req.json();
    
    // Basic validation
    if (!payload.messages || !Array.isArray(payload.messages)) {
      throw new Error("Payload 'messages' tidak valid.");
    }

    // Menggunakan fetch bawaan Vercel Edge Runtime
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": allowedOrigin
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: { message: error.message } }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export const runtime = 'edge';

export default async function handler(req) {
  // LOGGING: Info request awal
  console.log(`[API] Memberima ${req.method} request ke /api/chat`);

  // CORS Headers - Mengizinkan semua origin untuk debugging Vercel
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // Hanya terima method POST
  if (req.method !== "POST") {
    console.warn(`[API] Method ${req.method} tidak diizinkan`);
    return new Response(JSON.stringify({ error: { message: "Method Not Allowed" } }), { status: 405, headers });
  }

  // Ambil API Key dari Vercel Environment Variables
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    console.error(`[API] Error: GROQ_API_KEY tidak ditemukan di Environment Variables!`);
    return new Response(JSON.stringify({ error: { message: "Konfigurasi server error: API Key tidak ditemukan di Vercel." } }), { status: 500, headers });
  }

  try {
    const payload = await req.json();
    console.log(`[API] Payload diterima, meneruskan ke Groq...`);
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(`[API] Response dari Groq: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[API] Groq Error Details: ${errorText}`);
      return new Response(errorText, { status: response.status, headers });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200, headers });

  } catch (error) {
    console.error(`[API] Runtime Error: ${error.message}`);
    return new Response(JSON.stringify({ error: { message: error.message } }), { status: 500, headers });
  }
}

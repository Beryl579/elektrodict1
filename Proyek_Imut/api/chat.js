export const runtime = 'edge';

export default async function handler(req) {
  // Ambil origin untuk validasi CORS (Vercel production & deployment domains)
  const origin = req.headers.get("origin");
  
  // Izinkan origin jika dari .vercel.app atau localhost (dev)
  const isAllowed = !origin || 
                    origin.endsWith(".vercel.app") || 
                    origin.includes("localhost") || 
                    origin.includes("127.0.0.1");

  const allowedOrigin = isAllowed ? origin : "https://elektrodict.vercel.app";
  
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // Hanya terima method POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: { message: `Method ${req.method} Not Allowed` } }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Ambil API Key dari Vercel Environment Variables
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    console.error("[Backend] Error: GROQ_API_KEY is missing.");
    return new Response(JSON.stringify({ error: { message: "API Key belum dikonfigurasi di Vercel!" } }), {
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

    // Proxy request ke Groq
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        stream: false 
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(JSON.stringify(errorData), {
        status: response.status,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": allowedOrigin || "*" }
      });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": allowedOrigin || "*"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: { message: error.message || "Internal Server Error" } }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": allowedOrigin || "*" }
    });
  }
}

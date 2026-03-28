export const runtime = 'edge';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
/** Edge fetch ke Groq — harus lebih besar dari timeout klien untuk vision */
const UPSTREAM_TIMEOUT_MS = 115000;

export default async function handler(req) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: { message: 'Method Not Allowed' } }), {
      status: 405,
      headers
    });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    console.error('[API] GROQ_API_KEY tidak ada di Environment Variables');
    return new Response(
      JSON.stringify({
        error: {
          message:
            'Konfigurasi server: set GROQ_API_KEY di Vercel → Project → Settings → Environment Variables (Production & Preview), lalu redeploy.'
        }
      }),
      { status: 500, headers }
    );
  }

  let payload;
  try {
    payload = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: { message: 'Invalid JSON body' } }), {
      status: 400,
      headers
    });
  }

  const model = payload?.model || '(missing)';
  console.log(`[API] POST /api/chat → Groq model=${model}`);

  const controller = new AbortController();
  const kill = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    const text = await response.text();
    console.log(`[API] Groq ${response.status} len=${text?.length ?? 0}`);

    if (!response.ok) {
      let msg = text?.slice(0, 500) || response.statusText;
      try {
        const j = JSON.parse(text);
        msg = j.error?.message || j.message || msg;
      } catch (_) {}
      return new Response(JSON.stringify({ error: { message: msg } }), {
        status: response.status,
        headers
      });
    }

    return new Response(text, { status: 200, headers });
  } catch (error) {
    const isAbort = error.name === 'AbortError';
    console.error(`[API] ${isAbort ? 'Timeout' : 'Error'}:`, error.message);
    return new Response(
      JSON.stringify({
        error: {
          message: isAbort
            ? 'Groq API timeout di server. Coba gambar lebih kecil atau ulangi.'
            : error.message
        }
      }),
      { status: 504, headers }
    );
  } finally {
    clearTimeout(kill);
  }
}

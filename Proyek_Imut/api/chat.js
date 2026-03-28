/**
 * Proxy Groq untuk ElektroDict.
 * Runtime: Node.js (Vercel default untuk /api/*.js) — pakai (req, res), BUKAN Web Request/Response.
 * Env: GROQ_API_KEY
 */

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const UPSTREAM_TIMEOUT_MS = 115000;

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: { message: 'Method Not Allowed' } }));
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    console.error('[API] GROQ_API_KEY kosong');
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(
      JSON.stringify({
        error: {
          message:
            'Server: GROQ_API_KEY belum terbaca. Set di Vercel → Settings → Environment Variables, lalu Redeploy.'
        }
      })
    );
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch (e) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: { message: 'Invalid JSON body' } }));
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

    if (!response.ok) {
      let msg = text?.slice(0, 500) || response.statusText;
      try {
        const j = JSON.parse(text);
        msg = j.error?.message || j.message || msg;
      } catch (_) {}
      res.statusCode = response.status;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ error: { message: msg } }));
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(text);
  } catch (error) {
    const isAbort = error.name === 'AbortError';
    console.error(`[API] ${isAbort ? 'Timeout' : 'Error'}:`, error.message);
    res.statusCode = 504;
    res.setHeader('Content-Type', 'application/json');
    return res.end(
      JSON.stringify({
        error: {
          message: isAbort
            ? 'Groq API timeout di server. Coba gambar lebih kecil atau ulangi.'
            : error.message
        }
      })
    );
  } finally {
    clearTimeout(kill);
  }
}

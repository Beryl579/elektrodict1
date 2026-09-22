/**
 * Backend route for Vision (image analysis) — Groq proxy
 * Runtime: Node.js (Vercel default untuk /api/*.js)
 * Env: GROQ_API_KEY
 * Model: qwen/qwen3.8-27b (multimodal, support vision+txt+pdf via Groq)
 */

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const UPSTREAM_TIMEOUT_MS = 120000;

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

module.exports = async function handler(req, res) {
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

  const GROQ_API_KEY = (process.env.GROQ_API_KEYS && process.env.GROQ_API_KEYS.split(',')[0].trim())
    || process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    console.error('[API] GROQ_API_KEY kosong');
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(
      JSON.stringify({
        error: {
          message: 'Server: GROQ_API_KEY belum terbaca. Set di Vercel → Settings → Environment Variables, lalu Redeploy.'
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
  console.log(`[API] POST /api/vision → Groq model=${model}, messages=${payload?.messages?.length || 0}`);

  const controller = new AbortController();
  const kill = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    // Unified qwen/qwen3.8-27b — params sesuai spec: temperature 0.6, top_p 0.95, reasoning_effort default, max_completion_tokens 2048
    const visionPayload = { ...payload };
    visionPayload.model = 'qwen/qwen3.8-27b';
    visionPayload.temperature = 0.6;
    visionPayload.top_p = 0.95;
    visionPayload.reasoning_effort = "default";
    visionPayload.stop = null;
    visionPayload.stream = false;
    if (!visionPayload.max_tokens) visionPayload.max_tokens = 2048;
    if (!visionPayload.max_completion_tokens) visionPayload.max_completion_tokens = 2048;

    const callVisionGroq = async (model) => {
      const p = { ...visionPayload, model, reasoning_effort: "default", temperature: 0.6, top_p: 0.95 };
      return await fetch(GROQ_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(p),
        signal: controller.signal
      });
    };

    let response = await callVisionGroq('qwen/qwen3.8-27b');
    if (response.status === 503 || response.status === 429 || response.status === 500) {
      // retry same unified model (key rotation sudah handled di GROQ_API_KEY split? disini single key, tetap retry)
      response = await callVisionGroq('qwen/qwen3.8-27b');
    }

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

    // ── Strip thinking sebelum kirim ke frontend ──
    try {
      const j = JSON.parse(text);
      if (j.choices) {
        for (const ch of j.choices) {
          if (ch.message) {
            if (ch.message.reasoning) delete ch.message.reasoning;
            if (typeof ch.message.content === 'string') {
              ch.message.content = ch.message.content.replace(/<think>[\s\S]*?(<\/think>|$)/gi, '').trim();
            }
          }
        }
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(j));
    } catch (_) {}
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

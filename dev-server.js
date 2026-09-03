// ═══════════════════════════════════════════════════════════
// dev-server.js — Server lokal pengganti `vercel dev`
// Static files + API routes (/api/chat, /api/vision, /api/project-gen)
// Jalankan: node dev-server.js  →  http://localhost:3000
// ═══════════════════════════════════════════════════════════
const http = require('http');
const fs = require('fs');
const path = require('path');

// Muat .env sederhana (tanpa dependensi)
(function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/.exec(line);
    if (m && !(m[1] in process.env)) {
      process.env[m[1]] = (m[2] || '').replace(/^["']|["']$/g, '');
    }
  }
})();

const chatHandler = require('./api/chat.js');
const visionHandler = require('./api/vision.js');
const projectHandler = require('./api/project-gen.js');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mpeg',
  '.txt': 'text/plain; charset=utf-8'
};

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      try { resolve(raw ? JSON.parse(raw) : {}); } catch (e) { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

// Polyfill helper res.status().json() ala Vercel untuk handler serverless
function enhanceRes(res) {
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (obj) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(obj));
    return res;
  };
  return res;
}

const CSP_VALUE = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: blob: https://i.ytimg.com https://upload.wikimedia.org https://*.wikipedia.org https://cdn.jsdelivr.net https://*.supabase.co; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://wokwi.com https://*.wokwi.com; connect-src 'self' https://api.groq.com https://newsapi.org https://id.wikipedia.org https://en.wikipedia.org https://cdnjs.cloudflare.com https://cjikzpxhqstvgnblxfpv.supabase.co https://cdn.jsdelivr.net https://script.google.com https://script.googleusercontent.com https://openrouter.ai https://*.firebaseio.com https://*.firebasedatabase.app; object-src 'none'; base-uri 'self'; form-action 'self'";

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    // Block dotfiles & sensitive paths (prevent /.env leak)
    if (/\/\.(env|git|vercel)(\/|$)/.test(urlPath) || urlPath === '/.env' || urlPath === '/.env.local' || urlPath.startsWith('/.git/') || urlPath.startsWith('/.vercel/')) {
      res.statusCode = 403;
      res.setHeader('Content-Type','text/plain; charset=utf-8');
      return res.end('Forbidden');
    }

    // ── API routes (emulasi serverless Vercel) ──
    if (urlPath === '/api/chat') {
      if (req.method === 'POST') req.body = await readBody(req);
      return chatHandler(req, enhanceRes(res));
    }
    if (urlPath === '/api/vision') {
      return visionHandler(req, enhanceRes(res)); // vision baca body sendiri
    }
    if (urlPath === '/api/project-gen') {
      if (req.method === 'POST') req.body = await readBody(req);
      return projectHandler(req, enhanceRes(res));
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.statusCode = 405;
      return res.end('Method Not Allowed');
    }

    // ── Static files ──
    let filePath = path.normalize(path.join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) {
      res.statusCode = 403;
      return res.end('Forbidden');
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    if (!fs.existsSync(filePath)) {
      filePath = path.join(ROOT, 'index.html'); // SPA fallback ala `serve`
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    // CSP parity with vercel.json for dev debugging
    res.setHeader('Content-Security-Policy', CSP_VALUE);
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    console.error('[dev-server]', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`ElektroDict dev server → http://localhost:${PORT}`);
  console.log(`API: /api/chat, /api/vision, /api/project-gen (GROQ_API_KEY: ${process.env.GROQ_API_KEY ? 'terbaca' : 'TIDAK ADA!'})`);
});

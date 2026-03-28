const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = path.join(__dirname, '..'); 

// Simple .env support
if (fs.existsSync(path.join(ROOT, '.env'))) {
    const envData = fs.readFileSync(path.join(ROOT, '.env'), 'utf8');
    envData.split('\n').forEach(line => {
        const [key, ...val] = line.split('=');
        if (key && val) process.env[key.trim()] = val.join('=').trim();
    });
}

const MIME_TYPES = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml', '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    // 1. Handle CORS Preflight & Base Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    console.log(`[Request] ${req.method} ${req.url}`);

    // 2. Handle AI API Proxy (/api/chat)
    if (req.url === '/api/chat' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const apiKey = process.env.GROQ_API_KEY;
            if (!apiKey || apiKey.includes('masukkan_key')) {
                console.error('[Error] API Key belum diisi di .env!');
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: { message: "LOKAL: API Key belum diisi di file .env!" } }));
            }

            console.log('[AI] Forwarding request to Groq...');
            const options = {
                hostname: 'api.groq.com',
                path: '/openai/v1/chat/completions',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            };

            const proxyReq = https.request(options, (proxyRes) => {
                let proxyData = '';
                proxyRes.on('data', chunk => proxyData += chunk);
                proxyRes.on('end', () => {
                    console.log(`[AI] Groq Response: ${proxyRes.statusCode}`);
                    res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
                    res.end(proxyData);
                });
            });

            proxyReq.on('error', (e) => {
                console.error('[AI] Proxy Error:', e.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: { message: "Proxy Error: " + e.message } }));
            });

            proxyReq.write(body);
            proxyReq.end();
        });
        return;
    }

    // 2. Handle Static Files
    let urlPath = req.url === '/' ? '/index.html' : req.url;
    let filePath = path.join(ROOT, urlPath);

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(error.code === 'ENOENT' ? 404 : 500);
            res.end(error.code === 'ENOENT' ? '404: Not Found' : 'Error: ' + error.code);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

});

server.listen(PORT, () => {
    console.log(`\x1b[32m[ElektroDict] Server jalan di http://localhost:${PORT}/\x1b[0m`);
    console.log(`[Info] Root Folder: ${ROOT}`);
    console.log(`[Info] API Key: ${process.env.GROQ_API_KEY ? 'Terdeteksi' : 'BUM TERDETEKSI'}`);
});

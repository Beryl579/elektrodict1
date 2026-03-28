const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = path.join(__dirname, '..'); 

// Simple .env support
if (fs.existsSync(path.join(ROOT, '.env'))) {
    const env = fs.readFileSync(path.join(ROOT, '.env'), 'utf8');
    env.split('\n').forEach(line => {
        const [key, ...val] = line.split('=');
        if (key && val) process.env[key.trim()] = val.join('=').trim();
    });
}

const MIME_TYPES = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml', '.pdf': 'application/pdf'
};

http.createServer(async (req, res) => {
    // 1. Handle AI API Proxy (Miras Vercel Function)
    if (req.url === '/api/chat' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                // Gunakan GROQ_API_KEY dari env variable lokal jika ada
                const apiKey = process.env.GROQ_API_KEY; 
                if(!apiKey) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: { message: "LOKAL: GROQ_API_KEY tidak ditemukan di environment. Jalankan dengan: '$env:GROQ_API_KEY=\"your_key\"; node server.js'" } }));
                }

                const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
                    body: body
                });
                const data = await response.json();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            } catch (e) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: { message: e.message } }));
            }
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

}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);
console.log('Project root:', ROOT);

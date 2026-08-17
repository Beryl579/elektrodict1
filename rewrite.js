const fs = require('fs');
let t = fs.readFileSync('js/app.js', 'utf8');

// 1. Remove the raw API_KEY definition completely
t = t.replace(/const API_KEY\s*=\s*["'].*?["'];/g, '');

// 2. Point API_URL to the new secure Netlify edge function
t = t.replace(/const API_URL\s*=\s*["'].*?["'];/g, 'const API_URL = "/.netlify/functions/chat";');

// 3. Strip out the 'Authorization': `Bearer ${API_KEY}` from all fetch headers
// This regex specifically matches: 'Authorization':`Bearer ${API_KEY}` (with or without surrounding commas and spaces)
t = t.replace(/,?['"]?Authorization['"]?\s*:\s*`Bearer \$\{API_KEY\}`/g, '');

fs.writeFileSync('js/app.js', t);
console.log('App.js rewritten successfully for Netlify Serverless integration');

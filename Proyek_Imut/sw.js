const CACHE_NAME = 'elektrodict-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/data.js',
  '/js/app.js',
  '/manifest.json',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  // Only intercept GET requests
  if (e.request.method !== 'GET') return;

  // Don't cache API calls
  if (e.request.url.includes('/api/')) return;
  
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch((err) => {
        if (e.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        throw err;
      });
    })
  );
});

// v61: Panduan setup Firebase di halaman Dashboard + fix 42 panah → mojibake di data.js.
// v60: Fix SW offline — match cache by path tanpa ?v= (asset diprecache ?v=58 tapi HTML load tanpa query).
// Aset diberi query ?v= agar precache selalu ambil file terbaru (mencegah
// cache.addAll melewati SW lama yang menyajikan salinan basi).
const CACHE_NAME = 'elektrodict-v66';
const ASSETS = [
  '/',
  '/index.html?v=65',
  '/css/style.css?v=65',
  '/js/data.js?v=65',
  '/js/data-materi.js?v=65',
  '/js/api.js?v=65',
  '/js/app.js?v=65',
  '/js/modules/firebase-dashboard.js?v=65',
  '/js/modules/chips.js?v=65',
  '/manifest.json',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Only intercept GET requests
  if (e.request.method !== 'GET') return;

  // Don't cache API calls
  if (e.request.url.includes('/api/')) return;

  const pathOnly = new URL(e.request.url).pathname;

  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) return response;
      // Fallback: match by path only (assets are precached with ?v= suffix
      // but index.html loads them without the query string)
      return caches.match(pathOnly).then((r) => {
        if (r) return r;
        return fetch(e.request).catch((err) => {
          if (e.request.mode === 'navigate') {
            // index.html is precached as '/' and '/index.html?v=58'
            return caches.match('/').then((r2) => r2 || caches.match('/index.html'));
          }
          throw err;
        });
      });
    })
  );
});

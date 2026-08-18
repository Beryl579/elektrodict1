// v44: Bubble chat AI kontekstual di tab Materi (konteks modul ke ElektroBot).
// Aset diberi query ?v= agar precache selalu ambil file terbaru (mencegah
// cache.addAll melewati SW lama yang menyajikan salinan basi).
const CACHE_NAME = 'elektrodict-v44';
const ASSETS = [
  '/',
  '/index.html?v=44',
  '/css/style.css?v=44',
  '/js/data.js?v=44',
  '/js/data-materi.js?v=44',
  '/js/api.js?v=44',
  '/js/app.js?v=44',
  '/js/modules/firebase-dashboard.js?v=44',
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

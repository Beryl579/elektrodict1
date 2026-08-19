// v57: Dashboard HTML mandiri (dashboard.html) untuk 10 template ESP32 Firebase.
// v56: Wikipedia di kamus: pesan inline lembut (tanpa alert), cache localStorage 7 hari, tombol cari EN.
// Aset diberi query ?v= agar precache selalu ambil file terbaru (mencegah
// cache.addAll melewati SW lama yang menyajikan salinan basi).
const CACHE_NAME = 'elektrodict-v57';
const ASSETS = [
  '/',
  '/index.html?v=56',
  '/css/style.css?v=56',
  '/js/data.js?v=57',
  '/js/data-materi.js?v=56',
  '/js/api.js?v=56',
  '/js/app.js?v=56',
  '/js/modules/firebase-dashboard.js?v=56',
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

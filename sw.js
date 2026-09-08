/* ElektroDict Service Worker — offline-first untuk materi lokal (8.5MB Asset Materi) */
const CACHE = 'elektrodict-v1.1';
const OFFLINE_URL = '/index.html';

// Precache shell minimal — aset besar (Asset Materi) di-cache on-demand (runtime)
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/style.css',
  '/js/app.js',
  '/js/data.js',
  '/js/data-materi.js',
  '/js/api.js',
  '/js/modules/dashboard.js',
  '/js/modules/kamus.js',
  '/js/modules/quiz.js',
  '/js/modules/converter.js',
  '/js/modules/calculator.js',
  '/js/modules/resistor.js',
  '/js/modules/timeline.js',
  '/js/modules/vision.js',
  '/js/modules/firebase-dashboard.js',
  '/logo.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(()=>{})).then(()=> self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=> self.clients.claim())
  );
});

// Strategy:
// - Asset Materi / icons / css / js  → Cache First, fallback network
// - API / AI / external → Network Only (jangan cache)
// - Navigasi → Network First, fallback cache
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  const isNavigate = req.mode === 'navigate';
  const isAsset = url.pathname.includes('/Asset%20Materi/') || url.pathname.includes('/Asset Materi/') || url.pathname.startsWith('/icons/') || url.pathname.startsWith('/css/') || url.pathname.startsWith('/js/');
  const isApi = url.pathname.startsWith('/api/') || url.hostname.includes('groq.com') || url.hostname.includes('supabase.co') || url.hostname.includes('firebase') || url.hostname.includes('wikipedia.org') || url.hostname.includes('newsapi.org') || url.hostname.includes('youtube.com') || url.hostname.includes('ytimg.com');

  if (isApi) return; // network only

  if (isNavigate) {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c=> c.put(req, copy));
        return r;
      }).catch(()=> caches.match(req).then(m=> m || caches.match(OFFLINE_URL)))
    );
    return;
  }

  if (isAsset) {
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(net => {
          if (net.ok) {
            const copy = net.clone();
            caches.open(CACHE).then(c=> c.put(req, copy));
          }
          return net;
        }).catch(()=> cached);
      })
    );
    return;
  }

  // default: stale-while-revalidate
  e.respondWith(
    caches.match(req).then(cached => {
      const fetched = fetch(req).then(net=>{
        if(net.ok) caches.open(CACHE).then(c=> c.put(req, net.clone()));
        return net;
      }).catch(()=> cached);
      return cached || fetched;
    })
  );
});

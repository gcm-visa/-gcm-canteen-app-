const CACHE_NAME = 'canteen-cache-v1';
const cacheFiles = [
  './',
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(cacheFiles)));
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
  }
});

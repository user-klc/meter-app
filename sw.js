const CACHE_NAME = 'meter-tracker-v2';
const ASSETS = [
  'my_meter_app2.html',
  'manifest.json',
  'hassets/MaterialIcons-Regular.woff2' 
];

// Install the service worker and cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve files from cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

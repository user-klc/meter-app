const CACHE_NAME = 'meter-tracker-v3';
const ASSETS = [
  'my_meter_app2.html',
  'manifest.json',
  'hassets/MaterialIcons-Regular.woff2' 
];

// Install the service worker and cache files
sself.addEventListener('install', (e) => {
  self.skipWaiting(); // Forces the new service worker to take over immediately
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

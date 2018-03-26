var cacheName = 'PWA-2';
var filesToCache = [
    '/',
    '/post',
    '/nav',
    '/_next/static/style.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
    'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
    'https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'http://tse4.mm.bing.net/th?id=OIP.A6zdfyorlBrvGAWFKeJ_bQHaEe&pid=Api',
    '/pwa-lighthouse.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
            if (key !== cacheName) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
            }
        }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    // Do something interesting with the fetch here
    console.log('[ServiceWorker] Fetch', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

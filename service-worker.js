const cacheName = 'PWA-5cd245e2-2709-4b46-ad5e-0fc3f0847128'
const dataCacheName = 'Data-PWA-5cd245e2-2709-4b46-ad5e-0fc3f0847128'
const filesToCache = [
    '/',
    '/post',
    '/nav',
    '/_next/static/style.css',

    '_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/page/app.js',
    '_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/page/index.js',
    '_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/page/nav.js',
    '_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/page/post.js',
    '_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/page/_error.js',

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
      if (false) {
        filesToCache.push('_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/manifest.js')
        filesToCache.push('_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/commons.js')
        filesToCache.push('_next/5cd245e2-2709-4b46-ad5e-0fc3f0847128/main.js')
      }
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetch', event.request.url);

    const dataUrl = '/posts';
    if (event.request.url.indexOf(dataUrl) > -1) {
        /*
        * When the request URL contains dataUrl, the app is asking for fresh
        * weather data. In this case, the service worker always goes to the
        * network and then caches the response. This is called the "Cache then
        * network" strategy:
        * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
        */
        event.respondWith(
            caches.open(dataCacheName)
                .then(function(cache) {
                    return fetch(event.request)
                        .then(function(response){
                            cache.put(event.request.url, response.clone());
                            return response;
                        })
                        .catch(function() {
                            return caches.match(dataUrl)
                        });
                })
        );
    } else {
        /*
        * The app is asking for app shell files. In this scenario the app uses the
        * "Cache, falling back to the network" offline strategy:
        * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
        */
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
});

self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'PWS';
    const options = {
      body: event.data.text(),
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('/')
    );
});

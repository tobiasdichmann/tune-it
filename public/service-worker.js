const CACHE_NAME = 'tune-it-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.gif',
  '/logo192.png',
  '/logo512.png'
];

// Install Event - Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('ServiceWorker removing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve from cache, fallback to network, with dynamic caching
self.addEventListener('fetch', (event) => {
  // Only cache GET requests originating from our app
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Cache successful GET responses
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch((err) => {
            // If network fails, check for navigation requests and return offline shell fallback
            if (event.request.mode === 'navigate') {
              return cache.match('/index.html');
            }
            throw err;
          });

        // Immediately return cached response if present, otherwise wait for network fetch
        return cachedResponse || fetchPromise;
      });
    })
  );
});

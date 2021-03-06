self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('pwa').then(cache => {
        return cache.addAll([
          'sw.js',
          'index.html',
        ])
        .then(() => self.skipWaiting());
      })
    )
  });

  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  
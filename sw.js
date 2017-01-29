
//
// Simple service worker to cache the index.html file and any required assets
//

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('movingtohttps-v1').then(cache => {
            // Cache the needed assets
            return cache.addAll([
                '/',
                '/images/owl.svg',
                '/css/app.css',
                '/js/app.js',
                'https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,400i,700,700i',
                'https://unpkg.com/normalize.css@5.0.0/normalize.css',
                'https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css',
                'https://unpkg.com/vue@2.1.10/dist/vue.js',
            ])
            .then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    // try network first for latest guide, else fallback to cached version
    // not perfect, but at least keeps this up to date for now.
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request, { ignoreSearch: true });
        })
    );
});

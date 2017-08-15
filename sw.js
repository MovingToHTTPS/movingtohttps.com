
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
                'https://fonts.googleapis.com/css?family=Bungee+Shade|Noto+Sans:400,400i,700,700i',
                'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js',
            ])
            .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    // try network first for latest guide, else fallback to cached version
    // not perfect, but at least keeps this up to date for now.
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request, {
                ignoreSearch: true // make sure we ignore the url params as we use these to filter data on page
            });
        })
    );
});

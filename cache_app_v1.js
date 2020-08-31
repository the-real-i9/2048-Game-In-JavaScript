/* eslint-disable no-restricted-globals */
const cacheName = 'cache_v1';
// Install
self.addEventListener('install', (ev) => {
    console.log('ServiceWorker Installed');
});

// Activate // cleanUp
self.addEventListener('activate', (ev) => {
    ev.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                }),
            )),
    );
});

// fetch
self.addEventListener('fetch', (ev) => {
    ev.respondWith(
        fetch(ev.request)
        .then((res) => {
            const resClone = res.clone();

            caches
            .open(cacheName)
            .then((cache) => {
                cache.put(ev.request, resClone);
            });
            return res;
        }).catch((err) => caches.match(ev.request).then((res) => res)),
    );
});

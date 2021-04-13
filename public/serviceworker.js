const CACHE_NAME = 'version-1';
const urlToCache = ['index.html', 'offline.html'];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('opened cache');

            return cache.addAll(urlToCache)
            })
    )
});

self.addEventListener('fetch', (event) => {
    
});

self.addEventListener('activate', (event) => {
    
});
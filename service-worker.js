const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/elementos/Poppins-Medium.ttf',
  '/style.css',
  '/script.js',
  '/elementos/logo.png',
  '/elementos/pizzahome.png',
  '/elementos/facebook (4).png',
  '/elementos/instagram (2).png',
  '/elementos/twitter (4).png',
  '/elementos/whatsapp.png',
  '/elementos/pizza (7).png'
];

// Instala o Service Worker e armazena os recursos em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Recursos em cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta as requisições e serve a partir do cache, se disponível
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

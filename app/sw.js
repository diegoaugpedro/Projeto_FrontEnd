importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('webpicture').then(function(cache) {
     return cache.addAll([
       '/',
       '../src/index.html',
       '../dist/css/styles.css',
       '../dist/js/app.js'
     ]);
   })
 );
});
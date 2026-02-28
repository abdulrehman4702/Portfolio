// No-op service worker — prevents 404 when browser or extension requests /sw.js
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function () {});

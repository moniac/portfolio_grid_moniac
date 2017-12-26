const CACHE_STATIC_NAME = 'static-v5'
const CACHE_DYNAMIC_NAME = 'dynamic-v3'

self.addEventListener('install', (event) => {
	console.log('[Service Worker] Installing Service Worker ...', event)
	event.waitUntil(caches.open(CACHE_STATIC_NAME)
		.then((cache) => {
			console.log('[Service Worker] Precaching App Shell')
			cache.addAll([
				'/',
				'/index.html',
				'/js/smoothscroll.js',
				'/css/styles1.css',
				'https://fonts.googleapis.com/css?family=Lato:400,900',
				'/img/*',
			])
		}) )
})

self.addEventListener('activate', (event) => {
	console.log('[Service Worker] Activating Service Worker ....', event)
	event.waitUntil(caches.keys()
		.then(keyList => Promise.all(keyList.map((key) => {
			if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
				console.log('[Service Worker] Removing old cache.', key)
				return caches.delete(key)
			}
		}))) )
	return self.clients.claim()
})

self.addEventListener('fetch', (event) => {
	event.respondWith(caches.match(event.request)
		.then((response) => {
			if (response) {
				return response
			}
			return fetch(event.request)
				.then(res => caches.open(CACHE_DYNAMIC_NAME)
					.then((cache) => {
						cache.put(event.request.url, res.clone())
						return res
					}))
				.catch((err) => {

				})

		}) )
})
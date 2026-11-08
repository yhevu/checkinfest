const C="checkin-v1",F=["./","index.html","manifest.json","https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js","https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{}))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "06dcd2b493e96c6a063a85bc6f4ae64f",
"index.html": "68e75ae3692b8b5b2398c77a775915d0",
"/": "68e75ae3692b8b5b2398c77a775915d0",
"main.dart.js": "2fea074cd59911720fb71559dd552e22",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66e6ad5aa7e48d9fe7e868fcfe1bbff8",
".git/config": "0a18ba5cf16f4251d7e5081ca8cb652e",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/0e/05e860d8d269b15aff6fd311b2d16014f9bdad": "0ed1dcbae711bfd5025018a2dbcc0742",
".git/objects/5a/c795119e8c65bf043aa027bc9f282fc449239a": "29c6fee47baf159e74e671dc0aad215a",
".git/objects/33/9e2485213ee7f2c5fcdd1e03ae1a58473880bb": "6d05a347d0d10d1affc65a0f4f2effe2",
".git/objects/ac/af13e7c28052ee28a35481859053d7a5f83736": "a5b5d24097e731b4c322a069b5663718",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bd/3ec993a591549aad63a13c69b2488769ea0e7f": "6d1b25086cdb8ee2b9a66002be5767e3",
".git/objects/bd/aabd5a52c240c336f7616800dc7d0f33a8e274": "102d79e1d38432d035d02a00ba707884",
".git/objects/d6/af8d7600a58d69f7df3f54fb34cfe03cdfa085": "71424174a572c1c2c1d06d31da61ee84",
".git/objects/bc/510e6f22331b9c74d4bc73c6b348c6a869f484": "4e5e2a5e5b68845fcae0319634744a5c",
".git/objects/bc/fbbf2c37c02529523de5a48e3c6d111d9d6490": "020d0009ec1b5a89e35aaf7727e21067",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e3/d86ee7af2e75651c0bf9610f6d6ff333a6a1cc": "26f206a2a3fb3dff1497a4470a9ce017",
".git/objects/e4/a8827790ba61b173d5228090942da065605457": "7d17a8c30209559d6d59822b7007c130",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/47ff6457f6272b39c0a4f4af592b91db72553f": "d3a8b1dcfc0a2ae68a89507b61739dc2",
".git/objects/2a/c3df1b57002da3bc746c4eff202e0547190be4": "2b4832d24900defa2b06371ac3853bcd",
".git/objects/2f/ff305211254f1f73143dd7631bb507ae7f607f": "0d14e1b43422400d1c25002895b3c4b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/dee037b4250f5ff9b7a58e902d176255ffc63a": "d13342211d75a406563a9af86756b733",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/ba/ea645e74f70ced5ff227e47dbad321a30c03de": "5f5050f0fcf23ded2ada580aeb7dd4fc",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f9/06c6edc7ea7e747b128aec5885640212058830": "a82758b2378d9d3c3bff0e98abf92097",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d0d0a11a5d9c76bc761cb2668835266fd7cbfd": "889e6a0e92008991750bf75b501f50a7",
".git/objects/46/fab559cf5e23e58666914634995193eb701ddd": "2e11fb33c5ec0125adca8ab0d292ca73",
".git/objects/46/e4a8af23538c751ba2749d069d8e5e2fc383a0": "ce0624cdf6741466e2e14a5b409ac8a9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/2b1f114869b51692f9b6b350826d0315bd9562": "df882cd2c576dd2b705f2de00d8ad8da",
".git/objects/8c/36979ea18c43d16f62fdcf1c3b4f469d829503": "970c87c3369c6adc731c72ad0debeeba",
".git/objects/2e/243eccbf02a32e057eefdf0f01b7ab9536d19c": "7beb80464e8857a44a1020ecf0a4df9b",
".git/objects/7a/dba7c430e20855a451fab0e294077a9f8b4c2f": "13807f9f0414f0c92bc27697b15ec37a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d542e8fe0029666e35553bf3a000f07",
".git/logs/refs/heads/main": "b0211006574b7f99348c1b9c1f28bbeb",
".git/logs/refs/remotes/origin/main": "d46a9153f61b307a423b706c768755f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "4b76c8a863012a7de215b713889838a5",
".git/refs/remotes/origin/main": "4b76c8a863012a7de215b713889838a5",
".git/index": "44b04fde91adb2d84b956e85b766abee",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "62d5b309766803222978f589168a5e54",
"assets/NOTICES": "08d9ac8e5bb3bfa42dacc8cfa5cb8fa0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

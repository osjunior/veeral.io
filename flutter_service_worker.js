'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.pt.js": "9def1ce21dcaf65755833ed21127d2f9",
"version.json": "06dcd2b493e96c6a063a85bc6f4ae64f",
"index.html": "cda44fd8f4f4ebad6ccd00bcb2a8c06e",
"/": "cda44fd8f4f4ebad6ccd00bcb2a8c06e",
"main.dart.js": "9def1ce21dcaf65755833ed21127d2f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66e6ad5aa7e48d9fe7e868fcfe1bbff8",
".git/config": "b61e8493556e31b42721719c0ed7a418",
".git/objects/92/3fae0e31cbfe5bf011e08e71dfbddaadd81e1c": "0c944bca26d5afa8113a70ca36add59d",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/0c/4b4d149ce035c103b82e6c34437d1202750b1d": "19e0315252201f3b3d62f6354aa7bbc3",
".git/objects/66/fd04d85adae3eaaf8d4d079aa32ada0848a87b": "c1bac80a5c80c52054428c9506222a67",
".git/objects/50/7c29278fd18e42ab0209c9a6674150a4e16807": "5a6f3c49c45dfed0ac9418308316ca04",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/2b47877709877809984715f1910491ebac3b36": "00421b3258f8a3a6fea848cdee215f72",
".git/objects/56/43043a14acf09640bfc4dba550e82fb8233eb2": "499c80f31bd3e12dbe1e2e406bbea43e",
".git/objects/93/00af1fff1b15db3d9323fc119c7ab309309b1f": "3c810f37dcfd60de85dc7e215820f7af",
".git/objects/5f/e69ad52feeff6b88c4883c1a024ba4495a3b2d": "94785c5154bdb8731ba8e36481d7e1e6",
".git/objects/a4/449dfec19d90112b4fd5d21755f349a177704a": "0ebecb9826e0a7340891b10667f4fa87",
".git/objects/b2/fe13e232bd8bd6ed3020f1bc6a2c1a3a3ca078": "c187bf62245008323f16afc6fe97a951",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/da/d58f9539b716a92f865223db29d022ddb5901c": "31cbe6e76e6c8c7391cfec0cfcf8db4b",
".git/objects/bd/3ec993a591549aad63a13c69b2488769ea0e7f": "6d1b25086cdb8ee2b9a66002be5767e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fe/ae90e1d4229344a42f2442ff7dce57e622ce4d": "c3b1f8a85cb26d37849377ea27dcdcbb",
".git/objects/ec/b8bc66d187d93e240b2f68087dcd26ef98597e": "958eaff608591d867f2f9137e765e6c1",
".git/objects/20/5ff9e29622bdca73ed176c226277cc3f9cbec9": "6cfd99c1938a49cd6efbfef6b358a40b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/9eacf4e5fdf7e440ac35e72896749206f09278": "7e452170cef40c64b9a5e206b740669c",
".git/objects/1a/50002f25ae029114a9e9a8a614b00bc110451e": "491bb15d06ab03af2c247c714d0820c1",
".git/objects/17/1ab97cae869c2e9da65e5ab4bbff0d486d5a38": "4335e0d1eea3a7cbc04379d09a582be0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/47ff6457f6272b39c0a4f4af592b91db72553f": "d3a8b1dcfc0a2ae68a89507b61739dc2",
".git/objects/88/cbd3fe52983d3a7642f114d8a4ccca2a745c57": "0dbf7047efbad3265a37cfec7692b1d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8195074107c160c199dd0752caeb896e03b1a3": "25def65847de431daa4a466598f5053d",
".git/objects/00/f8b30b715d1046f8314e92ac9d54c0a0e6f83d": "23583716a031224e2a925ece5e13f828",
".git/objects/00/db84b40598580c4c5ebd24914ee02ea41dacd9": "05a5476c5253cc57e7f9ade27923c674",
".git/objects/9a/2cae48f8ffa1e18f1a84b095c67b1975783eb9": "5e97c7511dc86de77beeb419d442172a",
".git/objects/5d/dee037b4250f5ff9b7a58e902d176255ffc63a": "d13342211d75a406563a9af86756b733",
".git/objects/31/c249c0c4cb8cade762c71bf9a1efa9fccb0e56": "869d61a1dd1e1de3175e65914e7c7db1",
".git/objects/62/cedd5031b9f9f72102dec255f75ee31a273ff8": "94f0699809719203a29bdab44054083a",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/06/fdc7209244e3a3446a59cb06c974978871ce6d": "36c6f57e5353d3559adb0c881ae2e942",
".git/objects/99/1781d7443aeb63e7110fb31a71497aeed327ff": "28be7a885770a24e31002e4eb8420cfa",
".git/objects/ba/23d2a9a330cc879850124f72df6c76897d081f": "918f4ee1a316b0bcef4f2a87574f5fe8",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/af/791bb4a0bc1e1e5b12b89a56d494b5339f3574": "82be935127d6c2cc9781291e0bb6d62b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/cffb7ea73dad110f1f723c26ca786fc1aac0ea": "8f96318afcd1ae4c2f5ba8b3fce5cbc2",
".git/objects/ea/303c74e16952570f2c6c2e4770ad956d60a6c2": "4fee041d14535c2dd178a65215237522",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f9/06c6edc7ea7e747b128aec5885640212058830": "a82758b2378d9d3c3bff0e98abf92097",
".git/objects/f9/2f9a5844c15f69104421a57e0ca2ca5bc44593": "abe99c49c092f1b5f8c4f590a6eed073",
".git/objects/ce/6981203458da608b1dc904e9529704ac3c6fec": "014cb401a3add966b1aee4bfd3b45e63",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d0d0a11a5d9c76bc761cb2668835266fd7cbfd": "889e6a0e92008991750bf75b501f50a7",
".git/objects/46/fab559cf5e23e58666914634995193eb701ddd": "2e11fb33c5ec0125adca8ab0d292ca73",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/293c5af528fc5e19c47499a128c0dd180b738c": "99789772c2aef88f4a2d8bbbebe51e68",
".git/objects/23/2b1f114869b51692f9b6b350826d0315bd9562": "df882cd2c576dd2b705f2de00d8ad8da",
".git/objects/8c/36979ea18c43d16f62fdcf1c3b4f469d829503": "970c87c3369c6adc731c72ad0debeeba",
".git/objects/76/d9acb8c16fd17d34128c00918e71229013e055": "7da9e2be2722c23f1c9dbe0762495113",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67421c5f509b08af46f45a06c169b7f7",
".git/logs/refs/heads/main": "1a3df419bc45e33e8828f4735548ec36",
".git/logs/refs/remotes/origin/main": "a232bd00397c0af1cd8545eb75dafb3b",
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
".git/refs/heads/main": "639bdee39edbfb812ea0123cb397aca7",
".git/refs/remotes/origin/main": "639bdee39edbfb812ea0123cb397aca7",
".git/index": "7c3b3ad89f93c2a5a2436f8e0668e6f9",
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

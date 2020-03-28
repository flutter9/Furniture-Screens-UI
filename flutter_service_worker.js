'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/card.png": "b431202a4e83086ae02a21aeddc728ca",
"/assets/assets/dresser.png": "e6505a42eceee919e8bfd6bef75e0dd3",
"/assets/assets/sofad.png": "317a47288f3c46c71799ac2245d6d758",
"/assets/assets/leftchair.jpg": "ff0d3a2139938b24ea5064edf8c9fa26",
"/assets/assets/otto3.jpg": "53f4511e293f8fc0b465be4becf10ce4",
"/assets/assets/Quicksand-Light.ttf": "c5f954788f341b22e1974433bb972ac1",
"/assets/assets/desks.png": "54e09ea63b24dbb271308b518124a397",
"/assets/assets/dressers.png": "d28f0541746df9414114454fe8811e51",
"/assets/assets/wardrobe.png": "a6e6bcf600c268f8bf9c2105ab4e92aa",
"/assets/assets/truck.png": "f808a1126a2a34f681726e5b17164ce8",
"/assets/assets/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"/assets/assets/trucks.png": "e73037384444d2122e40e4eb5915dde8",
"/assets/assets/sofas.png": "95aee130c0ab48b74d5cc9bef965f856",
"/assets/assets/Quicksand-Bold.ttf": "0c04462696ac0fd3e85e75415b483fdb",
"/assets/assets/chris.jpg": "208baeb40d9212db4833757e501a83e1",
"/assets/assets/centerchair.jpg": "f2e6ef9ba13346d246e0cf312196d8a7",
"/assets/assets/otto4.jpg": "f6a8e3a375e1b5a6d3b9ad55da787576",
"/assets/assets/otto5.jpg": "53f4511e293f8fc0b465be4becf10ce4",
"/assets/assets/desk.png": "2cd66d46d123499214c2c3286c39b3c6",
"/assets/assets/pattern.png": "2118e345efa65972d42cc9db3431b9f8",
"/assets/assets/sofa.png": "43984f3d6f59a7e65913eee46ad12581",
"/assets/assets/anotherchair.jpg": "2db08f1012c756ca83504f829dec0c45",
"/assets/assets/chair.jpg": "40c0b506432d7865a809f8dc456b37ba",
"/assets/assets/Quicksand-Regular.ttf": "f87b9b4f34bdbf75b5c0cf3a5a137508",
"/assets/assets/returnbox.png": "1b0730ec2531c2928d6c28837c5e0f50",
"/assets/assets/otto2.jpeg": "8a42de7e553fee2f116300752f4fddb5",
"/assets/assets/box.png": "ffa1aedaeeb2f6bb0befd60e35687100",
"/assets/assets/rightchair.JPG": "ce7c55a78db1e07827e35ed403f0edea",
"/assets/assets/ottoman.jpg": "34f99796df8be70d19425db7fed1ef99",
"/assets/assets/drawer.jpg": "92b26ba4dece1644ec0ef08a8dc7faaa",
"/assets/assets/Quicksand-Medium.ttf": "0c64233241ead44bffbec54eb9d1d164",
"/assets/FontManifest.json": "ba521dae2108ad062010800514806929",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "fd7582aee27c04e9235423cbd7017c87",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "69c27874a9a1c91d3511b4ba9a565d38"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

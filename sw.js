if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-b7e829be"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_fallback.01f20e56.css",revision:null},{url:"assets/_fallback.c1500d1f.js",revision:null},{url:"assets/_module.328f74c8.css",revision:null},{url:"assets/_module.87c86d45.js",revision:null},{url:"assets/_module.cf60606f.js",revision:null},{url:"assets/index.0612cebd.js",revision:null},{url:"assets/index.2716f3de.js",revision:null},{url:"assets/index.4b571427.js",revision:null},{url:"assets/index.61795c97.css",revision:null},{url:"assets/index.71f917d3.js",revision:null},{url:"assets/index.8c075e0a.css",revision:null},{url:"assets/main.49f2f519.js",revision:null},{url:"assets/settings.782d1d0e.js",revision:null},{url:"assets/sign-in.36494229.js",revision:null},{url:"assets/sign-in.3ecf4c48.css",revision:null},{url:"assets/storage.2374f6c7.js",revision:null},{url:"assets/userStore.c75462e4.js",revision:null},{url:"assets/vendor.caea49fa.js",revision:null},{url:"index.html",revision:"4f4b0cb55ac6560ebb5dc2093c1ceca0"},{url:"favicon.ico",revision:"805ef537bc275a659d9222711475641e"},{url:"favicon.svg",revision:"cd80b9e75cd55a5d359b2e174eabb983"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"311bb96241121bbb55ef2abbb0ebcc71"},{url:"pwa-192x192.png",revision:"90644a23f298b25a4e0305201ef3d579"},{url:"pwa-512x512.png",revision:"93dfee3fd1f1581da245a90691bdca80"},{url:"manifest.webmanifest",revision:"2313d3859e9b8542b67a9b6c11b99be2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

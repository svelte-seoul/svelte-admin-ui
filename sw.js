if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-b7e829be"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_fallback.01f20e56.css",revision:null},{url:"assets/_fallback.f2b1298b.js",revision:null},{url:"assets/_module.28fa61f1.js",revision:null},{url:"assets/_module.738709bf.css",revision:null},{url:"assets/_module.e6bbcb63.js",revision:null},{url:"assets/index.09cf4a69.js",revision:null},{url:"assets/index.85847004.js",revision:null},{url:"assets/index.917ab842.js",revision:null},{url:"assets/index.b6bf2276.css",revision:null},{url:"assets/index.d5f1b8de.css",revision:null},{url:"assets/index.e062c36b.js",revision:null},{url:"assets/main.5aa1970d.js",revision:null},{url:"assets/settings.08b05dfd.js",revision:null},{url:"assets/sign-in.dbf0ca37.css",revision:null},{url:"assets/sign-in.e785cceb.js",revision:null},{url:"assets/storage.944e1681.js",revision:null},{url:"assets/userStore.df883b2a.js",revision:null},{url:"assets/vendor.ff4ba28f.js",revision:null},{url:"index.html",revision:"8f777809703e735e2ee29cf2e79fb333"},{url:"favicon.ico",revision:"805ef537bc275a659d9222711475641e"},{url:"favicon.svg",revision:"cd80b9e75cd55a5d359b2e174eabb983"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"311bb96241121bbb55ef2abbb0ebcc71"},{url:"pwa-192x192.png",revision:"90644a23f298b25a4e0305201ef3d579"},{url:"pwa-512x512.png",revision:"93dfee3fd1f1581da245a90691bdca80"},{url:"manifest.webmanifest",revision:"2313d3859e9b8542b67a9b6c11b99be2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

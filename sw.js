if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2Dzov8n7YHFjDXht4sOeR/_buildManifest.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/2Dzov8n7YHFjDXht4sOeR/_middlewareManifest.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/2Dzov8n7YHFjDXht4sOeR/_ssgManifest.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/455-a1b66e60d3217a6b.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/main-bcd8b2a2f60a2269.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/pages/404-8dc4b254f3a1d7e3.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/pages/_app-cc8f1d07c6efcc35.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/pages/_error-9734db4c9fd59614.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/pages/index-9aead389ac35a354.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/chunks/webpack-5571398b22727e53.js",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/_next/static/css/add8ac541c4db51d.css",revision:"2Dzov8n7YHFjDXht4sOeR"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"8887ff5cdd8a1b8e0543e3ef7e80cb01"},{url:"/apple-touch-icon-120x120.png",revision:"8887ff5cdd8a1b8e0543e3ef7e80cb01"},{url:"/apple-touch-icon.png",revision:"1d618a226eda8e19547365066bd7cace"},{url:"/favicon.ico",revision:"6b34d4a02b9bf192b5569f92c520d413"},{url:"/manifest.json",revision:"9a64b0b338e656912d980ad85dfc94e3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

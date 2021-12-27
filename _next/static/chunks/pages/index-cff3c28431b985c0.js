(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7136:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});n(7294);var r=n(9008),s=n(5893),a=function(e){var t=e.title,n=e.description,a=e.keyword,i=e.url,c=e.noindex,o=void 0!==c&&c;return(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-title",content:"saizeriya1000"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon-120x120.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,s.jsx)("meta",{property:"og:title",content:t}),(0,s.jsx)("meta",{property:"og:description",content:n}),(0,s.jsx)("meta",{name:"keywords",content:a}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:i}),(0,s.jsx)("meta",{property:"og:image",content:"".concat(i,"/apple-touch-icon.png")}),(0,s.jsx)("meta",{property:"og:site_name",content:t}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,s.jsx)("meta",{name:"twitter:url",content:i}),(0,s.jsx)("meta",{name:"twitter:title",content:t}),(0,s.jsx)("meta",{name:"twitter:description",content:n}),(0,s.jsx)("meta",{name:"twitter:image",content:"".concat(i,"/apple-touch-icon.png")}),(0,s.jsx)("link",{rel:"canonical",href:i}),(0,s.jsx)("link",{rel:"shortcut icon",href:"".concat(i,"/favicon.ico")}),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"".concat(i,"/apple-touch-icon.png")}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@800&display=swap",rel:"stylesheet"}),o&&(0,s.jsx)("meta",{name:"robots",content:"noindex"},"robots")]})}},968:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return E}});var r=n(7136),s=n(2809),a=n(266),i=n(809),c=n.n(i),o=n(7294),l=n(1664),u=n(5893),h=function(e){var t=e.menu;return(0,u.jsxs)("div",{className:"card menu",children:[(0,u.jsx)("h3",{className:"ribbon",children:t.order_code}),t.name.length<15&&(0,u.jsx)("h2",{className:"menuName",children:t.name}),t.name.length>=15&&(0,u.jsx)("h2",{className:"menuNameSmall",children:t.name}),(0,u.jsxs)("p",{children:[t.price,"\u5186  ",t.calorie,"kcal  \u5869\u5206 ",Math.round(10*t.salt)/10," g"]})]})},p=function(e){var t=e.result;return t.length?(0,u.jsx)("div",{className:"items",children:t.map((function(e,t){return(0,u.jsx)(h,{menu:e},t)}))}):(0,u.jsx)("div",{})},d=n(1582),m=function(e){var t=e.reduce((function(e,t){return e+t.price}),0),n=e.reduce((function(e,t){return e+t.calorie}),0),r=e.reduce((function(e,t){return e+t.salt}),0);return[t,n,Math.round(10*r)/10]},j=function(e){var t=e.result;if(!t.length)return(0,u.jsx)("div",{});var n=m(t),r=(0,d.Z)(n,3),s=r[0],a=r[1],i=r[2];return(0,u.jsxs)("div",{className:"summary",children:[(0,u.jsx)("div",{className:"summary-label",children:(0,u.jsx)("h2",{children:"\u5408\u8a08"})}),(0,u.jsx)("div",{className:"summary-content",children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsxs)("span",{className:"total-price",children:[s.toLocaleString()," \u5186"]})}),(0,u.jsx)("li",{children:(0,u.jsxs)("span",{className:"total-cal",children:[a.toLocaleString()," kcal"]})}),(0,u.jsx)("li",{children:(0,u.jsxs)("span",{className:"total-solt",children:["\u5869\u5206 ",i.toLocaleString()," g"]})})]})})]})},x=n(1818),f=function(e){var t=e.result;if(!t.length)return(0,u.jsx)("div",{});var n=function(e){var t=e.reduce((function(e,t){return e+t.name+"\n"}),""),n=m(e),r=(0,d.Z)(n,3),s=r[0],a=r[1],i=r[2];return"\u30b5\u30a4\u30bc\u30ea\u30e41000\u5186\u30ac\u30c1\u30e3\u3092\u56de\u3057\u305f\u3088\uff01\n\n"+t+"\n\u8a08 "+s+"\u5186 "+a+"kcal \u5869\u5206 "+Math.round(10*i)/10+"g\n\n#\u30b5\u30a4\u30bc\u30ea\u30e4\u30ac\u30c1\u30e3"}(t);return(0,u.jsxs)("div",{className:"tweet",children:[(0,u.jsx)("div",{className:"balloon",children:"\u7d50\u679c\u3092\u30c4\u30a4\u30fc\u30c8"}),(0,u.jsx)(x.B,{url:"https://saizeriya-1000yen.marusho.io",title:n,children:(0,u.jsx)(x.Zm,{size:40,round:!0})})]})},v=function(e){var t=e.result;return t.length?(0,u.jsxs)("div",{className:"result",children:[(0,u.jsx)(p,{result:t}),(0,u.jsx)(j,{result:t}),(0,u.jsx)(f,{result:t})]}):(0,u.jsx)("div",{})},g=function(e,t){for(var n=[],r=t;r<=t;){var s=e.filter((function(e){return e.price<=r}));if(!s.length)break;var a=s[Math.floor(Math.random()*s.length)];r-=a.price,n.push(a)}return n},b=n(1607),w=function(){return(0,u.jsx)("div",{className:"spinner",children:(0,u.jsx)(b.Z,{type:"Oval",color:"#E5F2E5",height:30,width:30})})},y=n(3151),N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){return(0,u.jsx)("svg",O(O({},e),{},{children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18 18 6M6 6l12 12"})}))};_.defaultProps={xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"};var P=function(e){var t=e.menus,n=(0,o.useState)([]),r=n[0],s=n[1],i=(0,o.useState)(!1),h=i[0],p=i[1],d=(0,o.useState)(!1),m=d[0],j=d[1],x="page";r.length||(x="page page-top");var f="buttonarea";r.length&&(f="buttonarea buttonarea-fixed");var b="";h||(f="buttonarea",b="invisible");var k=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),n=g(t,1e3),e.next=4,N(200);case 4:s(n),p(!0),window.scrollTo({top:0}),j(!1),y.B({action:"click",category:"gacha",label:"1000yen"});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:x,children:[(0,u.jsxs)("div",{className:"heading",children:[(0,u.jsx)("h1",{children:"\u30b5\u30a4\u30bc\u30ea\u30e4"}),(0,u.jsx)("h1",{children:"1000\u5186\u30ac\u30c1\u30e3"})]}),(0,u.jsx)(v,{result:r}),(0,u.jsx)("div",{className:f,children:(0,u.jsxs)("div",{className:"buttonarea-container",children:[(0,u.jsx)("button",{onClick:function(){k()},className:"btn",disabled:m,children:m?(0,u.jsx)(w,{}):"\u30ac\u30c1\u30e3\u3092\u56de\u3059"}),(0,u.jsx)(_,{onClick:function(){p(!1)},className:"close-btn ".concat(b)}),(0,u.jsxs)("div",{className:"footerlink",children:[(0,u.jsx)("a",{href:"https://shop.saizeriya.co.jp/sz_restaurant/",target:"_blank",rel:"noopener noreferrer",children:"\u5e97\u8217\u691c\u7d22 (\u516c\u5f0f)"}),(0,u.jsx)("br",{}),(0,u.jsx)(l.default,{href:"/about",children:"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"})," / ",(0,u.jsx)("a",{href:"https://twitter.com/saizeriyagacha",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})]})]})}),(0,u.jsx)("div",{className:"spacer ".concat(b)})]})},S=!0,E=function(e){var t=e.menus;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.j,{title:"\u30b5\u30a4\u30bc\u30ea\u30e41000\u5186\u30ac\u30c1\u30e3",description:"\u30b5\u30a4\u30bc\u30ea\u30e4\u306e\u30e1\u30cb\u30e5\u30fc\u3092\u30ac\u30c1\u30e3\u3057\u3088\u3046\uff01",keyword:"\u30b5\u30a4\u30bc\u30ea\u30e4,1000\u5186,\u30ac\u30c1\u30e3",url:"https://saizeriya-1000yen.marusho.io"}),(0,u.jsx)(P,{menus:t})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(968)}])}},function(e){e.O(0,[996,408,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7136:function(e,n,t){"use strict";t.d(n,{j:function(){return a}});t(7294);var r=t(9008),s=t(5893),a=function(e){var n=e.title,t=e.description,a=e.keyword,i=e.url,c=e.noindex,o=void 0!==c&&c;return(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:n}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-title",content:"saizeriya1000"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon-120x120.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,s.jsx)("meta",{property:"description",content:t}),(0,s.jsx)("meta",{property:"og:title",content:n}),(0,s.jsx)("meta",{property:"og:description",content:t}),(0,s.jsx)("meta",{name:"keywords",content:a}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:i}),(0,s.jsx)("meta",{property:"og:image",content:"".concat(i,"/apple-touch-icon.png")}),(0,s.jsx)("meta",{property:"og:site_name",content:n}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,s.jsx)("meta",{name:"twitter:url",content:i}),(0,s.jsx)("meta",{name:"twitter:title",content:n}),(0,s.jsx)("meta",{name:"twitter:description",content:t}),(0,s.jsx)("meta",{name:"twitter:image",content:"".concat(i,"/apple-touch-icon.png")}),(0,s.jsx)("link",{rel:"canonical",href:i}),(0,s.jsx)("link",{rel:"shortcut icon",href:"".concat(i,"/favicon.ico")}),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"".concat(i,"/apple-touch-icon.png")}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@800&display=swap",rel:"stylesheet"}),o&&(0,s.jsx)("meta",{name:"robots",content:"noindex"},"robots")]})}},968:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return E},default:function(){return z}});var r=t(7136),s=t(2809),a=t(266),i=t(809),c=t.n(i),o=t(7294),l=t(1664),u=t(5893),h=function(e){var n=e.menu;return(0,u.jsxs)("div",{className:"card menu",children:[(0,u.jsx)("h3",{className:"ribbon",children:n.order_code}),n.name.length<15&&(0,u.jsx)("h2",{className:"menuName",children:n.name}),n.name.length>=15&&(0,u.jsx)("h2",{className:"menuNameSmall",children:n.name}),(0,u.jsxs)("p",{children:[n.price,"\u5186  ",n.calorie,"kcal  \u5869\u5206 ",Math.round(10*n.salt)/10," g"]})]})},d=function(e){var n=e.result;return n.length?(0,u.jsx)("div",{className:"items",children:n.map((function(e,n){return(0,u.jsx)(h,{menu:e},n)}))}):(0,u.jsx)("div",{})},p=t(1582),m=function(e){var n=e.reduce((function(e,n){return e+n.price}),0),t=e.reduce((function(e,n){return e+n.calorie}),0),r=e.reduce((function(e,n){return e+n.salt}),0);return[n,t,Math.round(10*r)/10]},j=function(e){var n=e.result;if(!n.length)return(0,u.jsx)("div",{});var t=m(n),r=(0,p.Z)(t,3),s=r[0],a=r[1],i=r[2];return(0,u.jsxs)("div",{className:"summary",children:[(0,u.jsx)("div",{className:"summary-label",children:(0,u.jsx)("h2",{children:"\u5408\u8a08"})}),(0,u.jsx)("div",{className:"summary-content",children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsxs)("span",{className:"total-price",children:[s.toLocaleString()," \u5186"]})}),(0,u.jsx)("li",{children:(0,u.jsxs)("span",{className:"total-cal",children:[a.toLocaleString()," kcal"]})}),(0,u.jsx)("li",{children:(0,u.jsxs)("span",{className:"total-solt",children:["\u5869\u5206 ",i.toLocaleString()," g"]})})]})})]})},x=t(1818),f=function(e){var n=e.result;if(!n.length)return(0,u.jsx)("div",{});var t=function(e){var n=e.reduce((function(e,n){return e+n.name+"\n"}),""),t=m(e),r=(0,p.Z)(t,3),s=r[0],a=r[1],i=r[2];return"\u30b5\u30a4\u30bc\u30ea\u30e41000\u5186\u30ac\u30c1\u30e3\u3092\u56de\u3057\u305f\u3088\uff01\n\n"+n+"\n\u8a08 "+s+"\u5186 "+a+"kcal \u5869\u5206 "+Math.round(10*i)/10+"g\n\n#\u30b5\u30a4\u30bc\u30ea\u30e4\u30ac\u30c1\u30e3"}(n);return(0,u.jsxs)("div",{className:"tweet",children:[(0,u.jsx)("div",{className:"balloon",children:"\u7d50\u679c\u3092\u30c4\u30a4\u30fc\u30c8"}),(0,u.jsx)(x.B,{url:"https://saizeriya-1000yen.marusho.io",title:t,children:(0,u.jsx)(x.Zm,{size:40,round:!0})})]})},v=function(e){var n=e.result;return n.length?(0,u.jsxs)("div",{className:"result",children:[(0,u.jsx)(d,{result:n}),(0,u.jsx)(j,{result:n}),(0,u.jsx)(f,{result:n})]}):(0,u.jsx)("div",{})},g=function(e,n){for(var t=[],r=n;r<=n;){var s=e.filter((function(e){return e.price<=r}));if(!s.length)break;var a=s[Math.floor(Math.random()*s.length)];r-=a.price,t.push(a)}return t},b=t(1607),w=function(){return(0,u.jsx)("div",{className:"spinner",children:(0,u.jsx)(b.Z,{type:"Oval",color:"#E5F2E5",height:30,width:30})})},y=t(3151),N=function(e){return new Promise((function(n){return setTimeout(n,e)}))},k=t(8754);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){return(0,u.jsx)("svg",O(O({},e),{},{children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18 18 6M6 6l12 12"})}))};P.defaultProps={xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"};var S=function(e){var n=e.menus,t=(0,o.useState)([]),r=t[0],s=t[1],i=(0,o.useState)(!1),h=i[0],d=i[1],p=(0,o.useState)(!1),m=p[0],j=p[1],x="page";r.length||(x="page page-top");var f="buttonarea";r.length&&(f="buttonarea buttonarea-fixed");var b="";h||(f="buttonarea",b="invisible");var _=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),t=g(n,1e3),e.next=4,N(200);case 4:s(t),d(!0),window.scrollTo({top:0}),j(!1),y.B({action:"click",category:"gacha",label:"1000yen"});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"main",children:[(0,u.jsx)("div",{className:"column-spacer"}),(0,u.jsx)(k.y7,{}),(0,u.jsxs)("div",{className:"main-content",children:[Boolean(r.length)&&(0,u.jsx)(k.rI,{}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsxs)("div",{className:"heading",children:[(0,u.jsx)("h1",{children:"\u30b5\u30a4\u30bc\u30ea\u30e4"}),(0,u.jsx)("h1",{children:"1000\u5186\u30ac\u30c1\u30e3"})]}),(0,u.jsx)(v,{result:r}),(0,u.jsx)("div",{className:f,children:(0,u.jsxs)("div",{className:"buttonarea-container",children:[(0,u.jsx)("button",{onClick:function(){_()},className:"btn",disabled:m,children:m?(0,u.jsx)(w,{}):"\u30ac\u30c1\u30e3\u3092\u56de\u3059"}),(0,u.jsx)(P,{onClick:function(){d(!1)},className:"close-btn ".concat(b)}),(0,u.jsxs)("div",{className:"footerlink",children:[(0,u.jsx)("a",{href:"https://shop.saizeriya.co.jp/sz_restaurant/",target:"_blank",rel:"noopener noreferrer",children:"\u5e97\u8217\u691c\u7d22 (\u516c\u5f0f)"}),(0,u.jsx)("br",{}),(0,u.jsx)(l.default,{href:"/about",children:"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"})," / ",(0,u.jsx)("a",{href:"https://twitter.com/saizeriyagacha",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})]})]})}),Boolean(!r.length)&&(0,u.jsx)(k.Y_,{}),(0,u.jsx)("div",{className:"spacer ".concat(b)})]})]}),(0,u.jsx)(k.y7,{})]})},E=!0,z=function(e){var n=e.menus;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.j,{title:"\u30b5\u30a4\u30bc\u30ea\u30e41000\u5186\u30ac\u30c1\u30e3",description:"\u30b5\u30a4\u30bc\u30ea\u30e4\u306e\u30e1\u30cb\u30e5\u30fc\u3067\u30ac\u30c1\u30e3\u3057\u3088\u3046\uff01",keyword:"\u30b5\u30a4\u30bc\u30ea\u30e4,1000\u5186,\u30ac\u30c1\u30e3",url:"https://saizeriya-1000yen.marusho.io"}),(0,u.jsx)(S,{menus:n})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(968)}])}},function(e){e.O(0,[996,408,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
(function(e){function t(t){for(var r,u,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89cc30ad"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2404:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),l=i.exports,s=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"})},v=[],b={name:"HelloWorld",props:{msg:String}},m=b,h=(n("5ae4"),Object(u["a"])(m,d,v,!1,null,"427e5f1c",null)),y=h.exports,g={name:"Home",components:{HelloWorld:y}},j=g,w=Object(u["a"])(j,f,p,!1,null,null,null),O=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"unix"},[n("Navbar")],1)},x=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"})},E=[],C={name:"Navbar"},H=C,S=(n("7ff4"),Object(u["a"])(H,P,E,!1,null,null,null)),$=S.exports,k={name:"index",components:{Navbar:$},data:function(){return{}}},T=k,M=(n("e8b1"),Object(u["a"])(T,_,x,!1,null,null,null)),N=M.exports;r["a"].use(s["a"]);var W=[{path:"/Home",name:"Home",component:O},{path:"/",name:"Navnar",component:N},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],A=new s["a"]({mode:"history",base:"/",routes:W}),J=A;r["a"].config.productionTip=!1,new r["a"]({router:J,render:function(e){return e(l)}}).$mount("#app")},"5ae4":function(e,t,n){"use strict";var r=n("69bc"),o=n.n(r);o.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"69bc":function(e,t,n){},"7ff4":function(e,t,n){"use strict";var r=n("2404"),o=n.n(r);o.a},"9c0c":function(e,t,n){},cffb:function(e,t,n){},e8b1:function(e,t,n){"use strict";var r=n("cffb"),o=n.n(r);o.a}});
//# sourceMappingURL=app.27318d8d.js.map
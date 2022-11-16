(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(198),t.b),u=a()(o()),d=s()(l);u.push([e.id,'* {\n    \n    text-decoration: "none";\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n\nbody{\n    background-color: black;\n}\n\nheader{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: sticky;\n    \n    padding: 1rem 5rem;\n\n    background-color: rgb(204, 8, 11);\n    color: white;\n    border-bottom: 3px solid rgb(255, 255, 255);\n    /* rgb(227, 49, 49) */\n}\nh1{\n    font-weight: bolder;\n}\nnav, nav > ul{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-shadow: 1px;\n}\nnav{\n    gap: 2rem;\n}\nnav > ul{\n    gap: 1rem;\n}\nnav > ul > li> a{\n    text-decoration: none;\n    color: white;\n}\n#delivery-btn{\n    padding: 0.6rem 1rem;\n    outline: white solid 1px;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n#home-background{\n    display: flex;\n    flex-direction: row-reverse;\n    height: 80vh;\n    background-color: black;\n    background-image: url('+d+");\n    background-size: cover;\n    background-position: center;\n}\n#home-welcome > h2{\n    font-size: 2.3rem;\n}\n#home-welcome{\n    margin: 4rem 6rem;\n    width: 650px;\n    align-self: flex-end;\n\n    color: white;\n\n}\n\n#menu{\n    background-color: white;\n}\n#menu > h2 {\n    text-align: center;\n    font-size: 3rem;\n}\n.type-container > h3{\n    font-size: 1.8rem;\n    border-bottom: 1px solid black;\n    margin-bottom: 1rem;\n}\n.menu-content{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n.menu-content > ul > li{\n\n    list-style: disc;\n    list-style-position: outside;\n    width: 800px;\n    margin-bottom: 1rem;\n}\n.menu-item-info{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.food-type-illustration{\n    /* background-image: url(img/breakfast.jpg);\n    background-size: cover; */\n    background-color: black;\n    width: 200px;\n    height: 280px;\n}\n\n#about-us{\n    display: flex;\n}\n#about-us-container{\n    display: flex;\n    flex-direction: row;\n\n    background-color: white;\n}",""]);const p=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},198:(e,n,t)=>{e.exports=t.p+"34a6da6d707ecd4daae5.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),p=t.n(d),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(){let e=document.querySelector("#content");e.textContent="";let n=function(){let e=document.createElement("section");e.id="home";let n=document.createElement("div");return n.innerHTML='\n    <div id="home-welcome">\n        <h2>Welcome to the Low Carbs Clinic!</h2>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum fuga quia cum quaerat, exercitationem, unde tempore doloribus nemo provident quibusdam pariatur velit perspiciatis assumenda eum, iusto ut quae totam!\n    </div>',n.id="home-background",e.appendChild(n),e}();e.appendChild(n)};document.querySelector("#home-btn").addEventListener("click",h),document.querySelector("#menu-btn",(()=>{alert(12)})),document.querySelector("#about-btn"),document.querySelector("#delivery-btn"),h()})()})();
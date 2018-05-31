!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,f=[],d=n(0);function u(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=g(e)),o=_.bind(null,n,a,!1),r=_.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return u(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}t&&u(p(t,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function _(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){t.exports=n.p+"1c1553bca900390a02460b544e9ed4e0.jpg"},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){var o=n(4);(t.exports=n(3)(!1)).push([t.i,"\n\nbody {\n    background: url("+o(n(2))+");\n    background-size: 100%;\n}\n.todo {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    align-items: center;\n    width: 500px;\n    background: rgba(255,255,255,0.95);\n}\n.todo__title {\n    text-align: center;\n    font-weight: 100;\n    font-family: fantasy;\n    color: rgba(251, 255, 251, 0.93);\n    font-size:4em;\n  }\n.todo__new{\n    width: 96%;\n    font-size:25px;\n    height:2em;\n    border:1px solid rgba(0,0,0,0.1);\n    font-weight: lighter;\n    padding-left: 15px;\n}\n.todo__new:focus {\n    outline: 0;\n}\n\n.todo__new::placeholder{\n    font-style: italic;\n    font-size: 25px;\n    color: rgba(0, 0, 0, 0.15);\n}\n.todo__list{\n    width: 100%;\n    font-size: 25px;\n    display: flex;\n    flex-direction: column;\n    font-weight: lighter;\n}\n.todo__container{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 15px;\n    border-bottom: inset;\n}\n.checkmark {\n    margin-left: 15px;\n}\n.todo__text {\n    font-family: 'open sans',arial,sans-serif;\n    font-size: 20px;\n    width: 85%;\n    word-wrap: break-word;\n}\n\n.strike {\n    text-decoration: line-through;\n    color: rgba(0, 0, 0, 0.22);\n}\n\n.checkmark{\n    margin-right: 10px;\n    font-size: 15px;\n    color: green;\n}\n\n.todo__container input {\n    display: none;\n}\n.todo__delete{\n    color: #ffcfae;\n    float: right;\n    font-size: 20px;\n    margin-left: 10px;\n    display: none;\n}\n.todo__container:hover .todo__delete{\n    display: block;\n}\n\n.todo__pannel{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    height: 30px;\n}\n\n.todo__left,.todo__all,.todo__active,.todo__completed{\n    padding: 3px;\n    font-size: 12px;\n}\n\n.todo__all,.todo__active,.todo__completed{\n    cursor: pointer;\n}\n\n.focus{\n    position: absolute;\n    border: 1px solid black;\n    border-radius: 10%;\n    width: 10px;\n    height: 10px;\n    background: rgba(0, 0, 0, 0.19);\n    transition: left 300ms;\n}\n\n\n\n\n\n\n\n",""])},function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";n.r(e);n(6);const o=document.querySelector(".todo__new"),r=document.querySelector(".todo__list"),i=document.querySelector(".todo__all"),a=document.querySelector(".todo__left"),s=document.querySelector(".todo__completed"),c=document.querySelector(".todo__active"),l=document.querySelector(".focus");let f=JSON.parse(localStorage.getItem("todos"))||[],d="all",u=JSON.parse(localStorage.getItem("leftItemCount"))||0;function p(){a.innerHTML=`${u} ${u>1?"items":"item"} left`,r.innerHTML=f.map((t,e)=>{var n=n=`\n                       <label class="todo__container" data-index=${e}>\n                            <span class="checkmark">${t.done?"✔️":"⬜"}</span>\n                            <input type="checkbox"><span class="todo__text ${t.done?"strike":""}">${t.text}</span>\n                            <span class='todo__delete' data-index=${e}>☓</span>\n                       </label>\n                      `;return"all"===d?n:t.done?"":n}).reverse().join(""),function(){const t="all"==d?i:c;l.style.height=`${t.clientHeight}px`,l.style.width=`${t.clientWidth}px`,l.style.top=`${t.offsetTop}px`,l.style.left=`${t.offsetLeft}px`}(),localStorage.setItem("todos",JSON.stringify(f)),localStorage.setItem("leftItemCount",JSON.stringify(u))}function h(t){d=t.target.dataset.mode,p()}o.addEventListener("keydown",function(t){if("Enter"!=t.key)return;const e=o.value;if(!e)return;const n={text:e,done:!1};u++,f.push(n),p(),this.value=""}),r.addEventListener("click",function(t){if("checkmark"!=t.target.className)return;const e=t.target.parentElement.dataset.index;f[e].done=!f[e].done,u+=f[e].done?-1:1,p()}),r.addEventListener("click",function(t){if("todo__delete"!=t.target.className)return;const e=t.target.dataset.index;u-=f[e].done?0:1,f.splice(e,1),p()}),r.addEventListener("dblclick",function(t){if(!t.target.className.includes("todo__text"))return}),i.addEventListener("click",h),c.addEventListener("click",h),s.addEventListener("click",function(t){f=f.filter(t=>!t.done),p()}),p()}]);
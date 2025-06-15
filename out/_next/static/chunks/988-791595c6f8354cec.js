"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{8954:function(e,t,n){n.d(t,{$s:function(){return C},BH:function(){return m},L:function(){return c},LL:function(){return _},ZR:function(){return I},aH:function(){return g},eu:function(){return y},hl:function(){return v},m9:function(){return D},ru:function(){return b},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let a of r){if(!i.includes(a))return!1;let r=t[a],o=n[a];if(E(r)&&E(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},zI:function(){return w}});var r=n(9079);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},a=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[c],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==l)throw new s;let c=i<<2|a>>4;if(r.push(c),64!==o){let e=a<<4&240|o>>2;if(r.push(e),64!==l){let e=o<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},c=function(e){return l(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},d=()=>("undefined"!=typeof self?self:window).__FIREBASE_DEFAULTS__,f=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||f()||h()}catch(e){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));return}},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}function b(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function v(){try{return"object"==typeof indexedDB}catch(e){return!1}}function y(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function w(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{create(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?o.replace(S,(e,t)=>{let n=i[t];return null!=n?String(n):"<".concat(t,"?>")}):"Error",l="".concat(this.serviceName,": ").concat(s," (").concat(a,").");return new I(a,l,i)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}let S=/\{\$([^}]+)}/g;function E(e){return null!==e&&"object"==typeof e}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return e&&e._delegate?e._delegate:e}},6578:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},5879:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},6227:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},9733:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},4059:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},703:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(7447),i=n.n(r)},7907:function(e,t,n){var r=n(5313);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},9079:function(e,t,n){var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(3127)},1749:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=n(6921),i=n(1884),a=n(3827),o=i._(n(4090)),s=r._(n(9542)),l=r._(n(2251)),c=n(8630),u=n(6906),d=n(337);n(6184);let f=n(6993),h=r._(n(536)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,i,a){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){let[t,n]=o.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:s,width:l,decoding:c,className:u,style:d,fetchPriority:f,placeholder:h,loading:p,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:I,setShowAltText:_,onLoad:S,onError:E,...C}=e;return(0,a.jsx)("img",{...C,...m(f),loading:p,width:l,height:s,decoding:c,"data-nimg":v?"fill":"1",className:u,style:d,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,h,y,w,I,b))},[n,h,y,w,I,E,b,t]),onLoad:e=>{g(e.currentTarget,h,y,w,I,b)},onError:e=>{_(!0),"empty"!==h&&I(!0),E&&E(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return t&&s.default.preload?(s.default.preload(n.src,r),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(f.RouterContext),r=(0,o.useContext)(d.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:s,onLoadingComplete:l}=e,g=(0,o.useRef)(s);(0,o.useEffect)(()=>{g.current=s},[s]);let m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let[y,w]=(0,o.useState)(!1),[I,_]=(0,o.useState)(!1),{props:S,meta:E}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:y,showAltText:I});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...S,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:_,ref:t}),E.priority?(0,a.jsx)(v,{isAppRouter:!n,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3127:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},5827:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(6921)._(n(4090)).default.createContext({})},3044:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8630:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(6184);let r=n(7160),i=n(6906);function a(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n;let s,l,c,{src:u,sizes:d,unoptimized:f=!1,priority:h=!1,loading:p,className:g,quality:m,width:b,height:v,fill:y=!1,style:w,onLoad:I,onLoadingComplete:_,placeholder:S="empty",blurDataURL:E,fetchPriority:C,layout:D,objectFit:O,objectPosition:A,lazyBoundary:j,lazyRoot:T,...P}=e,{imgConf:k,showAltText:M,blurComplete:x,defaultLoader:L}=t,N=k||i.imageConfigDefault;if("allSizes"in N)s=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);s={...N,allSizes:e,deviceSizes:t}}let B=P.loader||L;delete P.loader,delete P.srcSet;let z="__next_img_default"in B;if(z){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:n,...r}=t;return e(r)}}if(D){"fill"===D&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[D];t&&!d&&(d=t)}let R="",F=o(b),H=o(v);if("object"==typeof(n=u)&&(a(n)||void 0!==n.src)){let e=a(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,R=e.src,!y){if(F||H){if(F&&!H){let t=F/e.width;H=Math.round(e.height*t)}else if(!F&&H){let t=H/e.height;F=Math.round(e.width*t)}}else F=e.width,H=e.height}}let V=!h&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:R)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,V=!1),s.unoptimized&&(f=!0),z&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),h&&(C="high");let U=o(m),q=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:A}:{},M?{}:{color:"transparent"},w),W=x||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:H,blurWidth:l,blurHeight:c,blurDataURL:E||"",objectFit:q.objectFit})+'")':'url("'+S+'")',$=W?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,o),u=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,r)=>s({config:t,src:n,quality:a,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:s({config:t,src:n,quality:a,width:l[u]})}}({config:s,src:u,unoptimized:f,width:F,quality:U,sizes:d,loader:B});return{props:{...P,loading:V?"lazy":p,fetchPriority:C,width:F,height:H,decoding:"async",className:g,style:{...q,...$},sizes:Z.sizes,srcSet:Z.srcSet,src:Z.src},meta:{unoptimized:f,priority:h,placeholder:S,fill:y}}}},2251:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return g}});let r=n(6921),i=n(1884),a=n(3827),o=i._(n(4090)),s=r._(n(7392)),l=n(5827),c=n(7484),u=n(3044);function d(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6184);let h=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let a=!0,o=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){o=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}=e,s=r?40*r:t,l=i?40*i:n,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},337:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(6921)._(n(4090)),i=n(6906),a=r.default.createContext(i.imageConfigDefault)},6906:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7447:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return s},default:function(){return l}});let r=n(6921),i=n(8630),a=n(1749),o=r._(n(536)),s=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=a.Image},536:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7392:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(4090),i=r.useLayoutEffect,a=r.useEffect;function o(e){let{headManager:t,reduceComponentsToState:n}=e;function o(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4684:function(e,t,n){n.d(t,{KN:function(){return S},Mq:function(){return _},Xd:function(){return b},ZF:function(){return I},qX:function(){return v}});var r=n(9126),i=n(9858),a=n(8954),o=n(3056);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}}).filter(e=>e).join(" ")}constructor(e){this.container=e}}let l="@firebase/app",c="0.10.13",u=new i.Yd("@firebase/app"),d="[DEFAULT]",f={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},h=new Map,p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){u.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function b(e){let t=e.name;if(g.has(t))return u.debug("There were multiple attempts to register component ".concat(t,".")),!1;for(let n of(g.set(t,e),h.values()))m(n,e);for(let t of p.values())m(t,e);return!0}function v(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let y=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",()=>this,"PUBLIC"))}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw y.create("bad-app-name",{appName:String(o)});if(n||(n=(0,a.aH)()),!n)throw y.create("no-options");let s=h.get(o);if(s){if((0,a.vZ)(n,s.options)&&(0,a.vZ)(i,s.config))return s;throw y.create("duplicate-app",{appName:o})}let l=new r.H0(o);for(let e of g.values())l.addComponent(e);let c=new w(n,i,l);return h.set(o,c),c}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=h.get(e);if(!t&&e===d&&(0,a.aH)())return I();if(!t)throw y.create("no-app",{appName:e});return t}function S(e,t,n){var i;let a=null!==(i=f[e])&&void 0!==i?i:e;n&&(a+="-".concat(n));let o=a.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let e=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];o&&e.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),o&&s&&e.push("and"),s&&e.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),u.warn(e.join(" "));return}b(new r.wA("".concat(a,"-version"),()=>({library:a,version:t}),"VERSION"))}let E="firebase-heartbeat-store",C=null;function D(){return C||(C=(0,o.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(E)}catch(e){console.warn(e)}}}).catch(e=>{throw y.create("idb-open",{originalErrorMessage:e.message})})),C}async function O(e){try{let t=(await D()).transaction(E),n=await t.objectStore(E).get(j(e));return await t.done,n}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=y.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}async function A(e,t){try{let n=(await D()).transaction(E,"readwrite"),r=n.objectStore(E);await r.put(t,j(e)),await n.done}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=y.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function j(e){return"".concat(e.name,"!").concat(e.options.appId)}class T{async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=P();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){u.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=P(),{heartbeatsToSend:n,unsentEntries:r}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,a.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return u.warn(e),""}}constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new k(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}}function P(){return new Date().toISOString().substring(0,10)}class k{async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await O(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}b(new r.wA("platform-logger",e=>new s(e),"PRIVATE")),b(new r.wA("heartbeat",e=>new T(e),"PRIVATE")),S(l,c,""),S(l,c,"esm2017"),S("fire-js","")},9126:function(e,t,n){n.d(t,{H0:function(){return s},wA:function(){return i}});var r=n(8954);class i{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error("".concat(this.name,"(").concat(n,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:t===a?void 0:t,options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(e){}return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}},9858:function(e,t,n){var r,i;n.d(t,{Yd:function(){return u}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(t<e.logLevel)return;let a=new Date().toISOString(),o=l[t];if(o)console[o]("[".concat(a,"]  ").concat(e.name,":"),...r);else throw Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,a.push(this)}}},4602:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(4090),i=n(9586),a=n(3827),o=r.forwardRef((e,t)=>(0,a.jsx)(i.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var s=o},3493:function(e,t,n){let r,i,a,o;n.d(t,{IH:function(){return e_},Kz:function(){return eS}});var s=n(4684),l=n(9858),c=n(8954),u=n(9126),d=n(3056);let f="@firebase/installations",h="0.6.9",p="w:".concat(h),g="FIS_v2",m=new c.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function b(e){return e instanceof c.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){let{projectId:t}=e;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function y(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function w(e,t){let n=(await t.json()).error;return m.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function I(e){let{apiKey:t}=e;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function _(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S(e,t){let{appConfig:n,heartbeatServiceProvider:r}=e,{fid:i}=t,a=v(n),o=I(n),s=r.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}let l={method:"POST",headers:o,body:JSON.stringify({fid:i,authVersion:g,appId:n.appId,sdkVersion:p})},c=await _(()=>fetch(a,l));if(c.ok){let e=await c.json();return{fid:e.fid||i,registrationStatus:2,refreshToken:e.refreshToken,authToken:y(e.authToken)}}throw await w("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return"".concat(e.appName,"!").concat(e.appId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O=new Map;function A(e,t){let n=D(e);j(n,t),function(e,t){let n=(!T&&"BroadcastChannel"in self&&((T=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{j(e.data.key,e.data.fid)}),T);n&&n.postMessage({key:e,fid:t}),0===O.size&&T&&(T.close(),T=null)}(n,t)}function j(e,t){let n=O.get(e);if(n)for(let e of n)e(t)}let T=null,P="firebase-installations-store",k=null;function M(){return k||(k=(0,d.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(P)}})),k}async function x(e,t){let n=D(e),r=(await M()).transaction(P,"readwrite"),i=r.objectStore(P),a=await i.get(n);return await i.put(t,n),await r.done,a&&a.fid===t.fid||A(e,t.fid),t}async function L(e){let t=D(e),n=(await M()).transaction(P,"readwrite");await n.objectStore(P).delete(t),await n.done}async function N(e,t){let n=D(e),r=(await M()).transaction(P,"readwrite"),i=r.objectStore(P),a=await i.get(n),o=t(a);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&A(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){let t;let n=await N(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(m.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=z(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:R(e)}:{installationEntry:t}}(e,H(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return C.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function z(e,t){try{let n=await S(e,t);return x(e.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await L(e.appConfig):await x(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function R(e){let t=await F(e.appConfig);for(;1===t.registrationStatus;)await E(100),t=await F(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await B(e);return n||t}return t}function F(e){return N(e,e=>{if(!e)throw m.create("installation-not-found");return H(e)})}function H(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){let{appConfig:n,heartbeatServiceProvider:r}=e,i=function(e,t){let{fid:n}=t;return"".concat(v(e),"/").concat(n,"/authTokens:generate")}(n,t),a=function(e,t){let{refreshToken:n}=t,r=I(e);return r.append("Authorization","".concat(g," ").concat(n)),r}(n,t),o=r.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}let s={method:"POST",headers:a,body:JSON.stringify({installation:{sdkVersion:p,appId:n.appId}})},l=await _(()=>fetch(i,s));if(l.ok)return y(await l.json());throw await w("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e){let t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=await N(e.appConfig,r=>{var i;if(!Z(r))throw m.create("not-registered");let a=r.authToken;if(!n&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===a.requestStatus)return t=q(e,n),r;{if(!navigator.onLine)throw m.create("app-offline");let n=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return t=$(e,n),n}});return t?await t:r.authToken}async function q(e,t){let n=await W(e.appConfig);for(;1===n.authToken.requestStatus;)await E(100),n=await W(e.appConfig);let r=n.authToken;return 0===r.requestStatus?U(e,t):r}function W(e){return N(e,e=>{var t;if(!Z(e))throw m.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $(e,t){try{let n=await V(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await x(e.appConfig,r),n}catch(n){if(b(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await L(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await x(e.appConfig,n)}throw n}}function Z(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e){let{installationEntry:t,registrationPromise:n}=await B(e);return n?n.catch(console.error):U(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return await X(e),(await U(e,t)).token}async function X(e){let{registrationPromise:t}=await B(e);t&&await t}function J(e){return m.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y="installations";(0,s.Xd)(new u.wA(Y,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,s.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,s.Xd)(new u.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,s.qX)(t,Y).getImmediate();return{getId:()=>G(n),getToken:e=>K(n,e)}},"PRIVATE")),(0,s.KN)(f,h),(0,s.KN)(f,h,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q="analytics",ee="https://www.googletagmanager.com/gtag/js",et=new l.Yd("@firebase/analytics"),en=new c.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){if(!e.startsWith(ee)){let t=en.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ea(e,t,n,r,i,a){let o=r[i];try{if(o)await t[o];else{let e=(await ei(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",i,a)}async function eo(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let r=await ei(n);for(let n of e){let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)a.push(i);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(e){et.error(e)}}class es{getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}}let el=new es;async function ec(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let e="";try{let n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw en.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function eu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:el,n=arguments.length>2?arguments[2]:void 0,{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw en.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw en.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new ef;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),ed({appId:r,apiKey:i,measurementId:a},o,s,t)}async function ed(e,t,n){var r;let{throttleEndTimeMillis:i,backoffCount:a}=t,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:el,{appId:s,measurementId:l}=e;try{await new Promise((e,t)=>{let r=setTimeout(e,Math.max(i-Date.now(),0));n.addEventListener(()=>{clearTimeout(r),t(en.create("fetch-throttle",{throttleEndTimeMillis:i}))})})}catch(e){if(l)return et.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==e?void 0:e.message,"]")),{appId:s,measurementId:l};throw e}try{let t=await ec(e);return o.deleteThrottleMetadata(s),t}catch(u){if(!function(e){if(!(e instanceof c.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(o.deleteThrottleMetadata(s),l)return et.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==u?void 0:u.message,"]")),{appId:s,measurementId:l};throw u}let t=503===Number(null===(r=null==u?void 0:u.customData)||void 0===r?void 0:r.httpStatus)?(0,c.$s)(a,o.intervalMillis,30):(0,c.$s)(a,o.intervalMillis),i={throttleEndTimeMillis:Date.now()+t,backoffCount:a+1};return o.setThrottleMetadata(s,i),et.debug("Calling attemptFetch again in ".concat(t," millis")),ed(e,i,n,o)}}class ef{addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}constructor(){this.listeners=[]}}async function eh(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(){if(!(0,c.hl)())return et.warn(en.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,c.eu)()}catch(e){return et.warn(en.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function eg(e,t,n,a,o,s,l){var c;let u=eu(e);u.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn("The measurement ID in the local Firebase config (".concat(e.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(t.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(e=>et.error(e)),t.push(u);let d=ep().then(e=>e?a.getId():void 0),[f,h]=await Promise.all([u,d]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(s)&&function(e,t){let n;let r=(window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:er})),n),i=document.createElement("script"),a="".concat(ee,"?l=").concat(e,"&id=").concat(t);i.src=r?null==r?void 0:r.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}(s,f.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let p=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return p.origin="firebase",p.update=!0,null!=h&&(p.firebase_id=h),o("config",f.measurementId,p),r&&(o("set",r),r=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{_delete(){return delete eb[this.app.options.appId],Promise.resolve()}constructor(e){this.app=e}}let eb={},ev=[],ey={},ew="dataLayer",eI=!1;function e_(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.Mq)();e=(0,c.m9)(e);let t=(0,s.qX)(e,Q);return t.isInitialized()?t.getImmediate():function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,s.qX)(e,Q);if(n.isInitialized()){let e=n.getImmediate();if((0,c.vZ)(t,n.getOptions()))return e;throw en.create("already-initialized")}return n.initialize({options:t})}(e)}function eS(e,t,n,r){e=(0,c.m9)(e),eh(o,eb[e.app.options.appId],t,n,r).catch(e=>et.error(e))}let eE="@firebase/analytics",eC="0.10.8";(0,s.Xd)(new u.wA(Q,(e,t)=>{let{options:n}=t;return function(e,t,n){!function(){let e=[];if((0,c.ru)()&&e.push("This is a browser extension environment."),(0,c.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>"(".concat(t+1,") ").concat(e)).join(" "),n=en.create("invalid-analytics-context",{errorInfo:t});et.warn(n.message)}}();let r=e.options.appId;if(!r)throw en.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.');else throw en.create("no-api-key")}if(null!=eb[r])throw en.create("already-exists",{id:r});if(!eI){var i,s;let e,t;e=[],Array.isArray(window[ew])?e=window[ew]:window[ew]=e;let{wrappedGtag:n,gtagCore:r}=(i="gtag",t=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];window[ew].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(s=t,async function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];try{if("event"===e){let[e,t]=n;await eo(s,eb,ev,e,t)}else if("config"===e){let[e,t]=n;await ea(s,eb,ev,ey,e,t)}else if("consent"===e){let[e,t]=n;s("consent",e,t)}else if("get"===e){let[e,t,r]=n;s("get",e,t,r)}else if("set"===e){let[e]=n;s("set",e)}else s(e,...n)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});o=n,a=r,eI=!0}return eb[r]=eg(e,ev,ey,t,a,ew,n),new em(e)}(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)},"PUBLIC")),(0,s.Xd)(new u.wA("analytics-internal",function(e){try{let t=e.getProvider(Q).getImmediate();return{logEvent:(e,n,r)=>eS(t,e,n,r)}}catch(e){throw en.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,s.KN)(eE,eC),(0,s.KN)(eE,eC,"esm2017")},6142:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(4684);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","10.14.1","app")},3056:function(e,t,n){var r;let i,a;n.d(t,{X3:function(){return g}});let o=(e,t)=>t.some(t=>e instanceof t),s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,f={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(h(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&s.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(u.has(e))return u.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(p(this),n),h(s.get(this))}:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return h(t.apply(p(this),n))}:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];let a=t.call(p(this),e,...r);return c.set(a,e.sort?e.sort():[e]),h(a)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});l.set(e,t)}(t),o(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,f):t;return n!==e&&(u.set(e,n),d.set(n,e)),n}let p=e=>d.get(e);function g(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=indexedDB.open(e,t),s=h(o);return r&&o.addEventListener("upgradeneeded",e=>{r(h(o.result),e.oldVersion,e.newVersion,h(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}let m=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],v=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m.includes(n)))return;let a=async function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];let s=this.transaction(e,i?"readwrite":"readonly"),l=s.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&s.done]))[0]};return v.set(t,a),a}f={...r=f,get:(e,t,n)=>y(e,t)||r.get(e,t,n),has:(e,t)=>!!y(e,t)||r.has(e,t)}},158:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(4090),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,c({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:i,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,o),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,e=>t(e)):t(i)}}}]);
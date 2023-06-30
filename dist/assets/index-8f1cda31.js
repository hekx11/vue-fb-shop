(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
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
 *//**
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
 */const Em=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},XI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Em(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):XI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new JI;const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class JI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZI=function(n){const e=Em(n);return bm.encodeByteArray(e,!0)},Qa=function(n){return ZI(n).replace(/\./g,"")},Tm=function(n){try{return bm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ya(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!e0(t)||(n[t]=Ya(n[t],e[t]));return n}function e0(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function t0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const n0=()=>t0().__FIREBASE_DEFAULTS__,r0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},s0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tm(n[1]);return e&&JSON.parse(e)},Rc=()=>{try{return n0()||r0()||s0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sm=n=>{var e,t;return(t=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},i0=n=>{const e=Sm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Cm=()=>{var n;return(n=Rc())===null||n===void 0?void 0:n.config},Am=n=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class o0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function a0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Qa(JSON.stringify(t)),Qa(JSON.stringify(o)),a].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function u0(){var n;const e=(n=Rc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l0(){return typeof self=="object"&&self.self===self}function h0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function d0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f0(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function p0(){return!u0()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xm(){try{return typeof indexedDB=="object"}catch{return!1}}function g0(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const m0="FirebaseError";class _n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=m0,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?y0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _n(s,a,r)}}function y0(n,e){return n.replace(v0,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const v0=/\{\$([^}]+)}/g;/**
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
 */function kf(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function w0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Nf(i)&&Nf(o)){if(!Xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Nf(n){return n!==null&&typeof n=="object"}/**
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
 */function Fo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Dm(n,e){const t=new _0(n,e);return t.subscribe.bind(t)}class _0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");I0(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Uu),s.error===void 0&&(s.error=Uu),s.complete===void 0&&(s.complete=Uu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uu(){}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class xn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class E0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new o0;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T0(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b0(n){return n===xr?void 0:n}function T0(n){return n.instantiationMode==="EAGER"}/**
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
 */class S0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new E0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ih=[];var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const km={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},C0=ue.INFO,A0={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},x0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=A0[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=C0,this._logHandler=x0,this._userLogHandler=null,Ih.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?km[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}function D0(n){Ih.forEach(e=>{e.setLogLevel(n)})}function k0(n,e){for(const t of Ih){let r=null;e&&e.level&&(r=km[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:ue[i].toLowerCase(),message:a,args:o,type:s.name})}}}const N0=(n,e)=>e.some(t=>n instanceof t);let Rf,Pf;function R0(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P0(){return Pf||(Pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nm=new WeakMap,ml=new WeakMap,Rm=new WeakMap,Bu=new WeakMap,Eh=new WeakMap;function O0(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(er(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Nm.set(t,n)}).catch(()=>{}),Eh.set(e,n),e}function M0(n){if(ml.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ml.set(n,e)}let yl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ml.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return er(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function L0(n){yl=n(yl)}function F0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($u(this),e,...t);return Rm.set(r,e.sort?e.sort():[e]),er(r)}:P0().includes(n)?function(...e){return n.apply($u(this),e),er(Nm.get(this))}:function(...e){return er(n.apply($u(this),e))}}function V0(n){return typeof n=="function"?F0(n):(n instanceof IDBTransaction&&M0(n),N0(n,R0())?new Proxy(n,yl):n)}function er(n){if(n instanceof IDBRequest)return O0(n);if(Bu.has(n))return Bu.get(n);const e=V0(n);return e!==n&&(Bu.set(n,e),Eh.set(e,n)),e}const $u=n=>Eh.get(n);function U0(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(er(o.result),c.oldVersion,c.newVersion,er(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const B0=["get","getKey","getAll","getAllKeys","count"],$0=["put","add","delete","clear"],qu=new Map;function Of(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qu.get(e))return qu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||B0.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return qu.set(e,i),i}L0(n=>({...n,get:(e,t,r)=>Of(e,t)||n.get(e,t,r),has:(e,t)=>!!Of(e,t)||n.has(e,t)}));/**
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
 */class q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(j0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function j0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",Mf="0.9.13";/**
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
 */const Wr=new Pc("@firebase/app"),z0="@firebase/app-compat",K0="@firebase/analytics-compat",H0="@firebase/analytics",G0="@firebase/app-check-compat",W0="@firebase/app-check",Q0="@firebase/auth",Y0="@firebase/auth-compat",X0="@firebase/database",J0="@firebase/database-compat",Z0="@firebase/functions",eE="@firebase/functions-compat",tE="@firebase/installations",nE="@firebase/installations-compat",rE="@firebase/messaging",sE="@firebase/messaging-compat",iE="@firebase/performance",oE="@firebase/performance-compat",aE="@firebase/remote-config",cE="@firebase/remote-config-compat",uE="@firebase/storage",lE="@firebase/storage-compat",hE="@firebase/firestore",dE="@firebase/firestore-compat",fE="firebase",pE="9.23.0";/**
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
 */const sr="[DEFAULT]",gE={[vl]:"fire-core",[z0]:"fire-core-compat",[H0]:"fire-analytics",[K0]:"fire-analytics-compat",[W0]:"fire-app-check",[G0]:"fire-app-check-compat",[Q0]:"fire-auth",[Y0]:"fire-auth-compat",[X0]:"fire-rtdb",[J0]:"fire-rtdb-compat",[Z0]:"fire-fn",[eE]:"fire-fn-compat",[tE]:"fire-iid",[nE]:"fire-iid-compat",[rE]:"fire-fcm",[sE]:"fire-fcm-compat",[iE]:"fire-perf",[oE]:"fire-perf-compat",[aE]:"fire-rc",[cE]:"fire-rc-compat",[uE]:"fire-gcs",[lE]:"fire-gcs-compat",[hE]:"fire-fst",[dE]:"fire-fst-compat","fire-js":"fire-js",[fE]:"fire-js-all"};/**
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
 */const ir=new Map,so=new Map;function Ja(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pm(n,e){n.container.addOrOverwriteComponent(e)}function or(n){const e=n.name;if(so.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,n);for(const t of ir.values())Ja(t,n);return!0}function Vo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mE(n,e,t=sr){Vo(n,e).clearInstance(t)}function yE(){so.clear()}/**
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
 */const vE={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},An=new as("app","Firebase",vE);/**
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
 */let wE=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}};/**
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
 */const yr=pE;function Oc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw An.create("bad-app-name",{appName:String(s)});if(t||(t=Cm()),!t)throw An.create("no-options");const i=ir.get(s);if(i){if(Xa(t,i.options)&&Xa(r,i.config))return i;throw An.create("duplicate-app",{appName:s})}const o=new S0(s);for(const c of so.values())o.addComponent(c);const a=new wE(t,r,o);return ir.set(s,a),a}function bh(n=sr){const e=ir.get(n);if(!e&&n===sr&&Cm())return Oc();if(!e)throw An.create("no-app",{appName:n});return e}function _E(){return Array.from(ir.values())}async function Om(n){const e=n.name;ir.has(e)&&(ir.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Gt(n,e,t){var r;let s=(r=gE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(a.join(" "));return}or(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Mm(n,e){if(n!==null&&typeof n!="function")throw An.create("invalid-log-argument");k0(n,e)}function Lm(n){D0(n)}/**
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
 */const IE="firebase-heartbeat-database",EE=1,io="firebase-heartbeat-store";let ju=null;function Fm(){return ju||(ju=U0(IE,EE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(io)}}}).catch(n=>{throw An.create("idb-open",{originalErrorMessage:n.message})})),ju}async function bE(n){try{return await(await Fm()).transaction(io).objectStore(io).get(Vm(n))}catch(e){if(e instanceof _n)Wr.warn(e.message);else{const t=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(t.message)}}}async function Lf(n,e){try{const r=(await Fm()).transaction(io,"readwrite");await r.objectStore(io).put(e,Vm(n)),await r.done}catch(t){if(t instanceof _n)Wr.warn(t.message);else{const r=An.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(r.message)}}}function Vm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const TE=1024,SE=30*24*60*60*1e3;class CE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=SE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:t,unsentEntries:r}=AE(this._heartbeatsCache.heartbeats),s=Qa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ff(){return new Date().toISOString().substring(0,10)}function AE(n,e=TE){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xm()?g0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vf(n){return Qa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function DE(n){or(new xn("platform-logger",e=>new q0(e),"PRIVATE")),or(new xn("heartbeat",e=>new CE(e),"PRIVATE")),Gt(vl,Mf,n),Gt(vl,Mf,"esm2017"),Gt("fire-js","")}DE("");const kE=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:_n,SDK_VERSION:yr,_DEFAULT_ENTRY_NAME:sr,_addComponent:Ja,_addOrOverwriteComponent:Pm,_apps:ir,_clearComponents:yE,_components:so,_getProvider:Vo,_registerComponent:or,_removeServiceInstance:mE,deleteApp:Om,getApp:bh,getApps:_E,initializeApp:Oc,onLog:Mm,registerVersion:Gt,setLogLevel:Lm},Symbol.toStringTag,{value:"Module"}));function Th(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Um(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NE=Um,Bm=new as("auth","Firebase",Um());/**
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
 */const Za=new Pc("@firebase/auth");function RE(n,...e){Za.logLevel<=ue.WARN&&Za.warn(`Auth (${yr}): ${n}`,...e)}function Na(n,...e){Za.logLevel<=ue.ERROR&&Za.error(`Auth (${yr}): ${n}`,...e)}/**
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
 */function Xt(n,...e){throw Sh(n,...e)}function fn(n,...e){return Sh(n,...e)}function PE(n,e,t){const r=Object.assign(Object.assign({},NE()),{[e]:t});return new as("auth","Firebase",r).create(e,{appName:n.name})}function Sh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Bm.create(n,...e)}function J(n,e,...t){if(!n)throw Sh(e,...t)}function bn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Na(e),new Error(e)}function Dn(n,e){n||bn(e)}/**
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
 */function wl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function OE(){return Uf()==="http:"||Uf()==="https:"}function Uf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ME(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OE()||h0()||"connection"in navigator)?navigator.onLine:!0}function LE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dn(t>e,"Short delay should be less than long delay!"),this.isMobile=c0()||d0()}get(){return ME()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ch(n,e){Dn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $m{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VE=new Uo(3e4,6e4);function oi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function cs(n,e,t,r,s={}){return qm(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),$m.fetch()(jm(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function qm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},FE),e);try{const s=new UE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw PE(n,l,u);Xt(n,l)}}catch(s){if(s instanceof _n)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function Bo(n,e,t,r,s={}){const i=await cs(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function jm(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ch(n.config,s):`${n.config.apiScheme}://${s}`}class UE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),VE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=fn(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function BE(n,e){return cs(n,"POST","/v1/accounts:delete",e)}async function $E(n,e){return cs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qE(n,e=!1){const t=ye(n),r=await t.getIdToken(e),s=Ah(r);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zi(zu(s.auth_time)),issuedAtTime:zi(zu(s.iat)),expirationTime:zi(zu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zu(n){return Number(n)*1e3}function Ah(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tm(t);return s?JSON.parse(s):(Na("Failed to decode base64 JWT payload"),null)}catch(s){return Na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jE(n){const e=Ah(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _n&&zE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class KE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ec(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Bs(n,$E(t,{idToken:r}));J(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?WE(i.providerUserInfo):[],a=GE(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function HE(n){const e=ye(n);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function WE(n){return n.map(e=>{var{providerId:t}=e,r=Th(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QE(n,e){const t=await qm(n,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=jm(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$m.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await QE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new oo;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Vn(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qE(this,e)}reload(){return HE(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bs(this,BE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,p=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:z,isAnonymous:Q,providerData:Y,stsTokenManager:W}=t;J(D&&W,e,"internal-error");const X=oo.fromJSON(this.name,W);J(typeof D=="string",e,"internal-error"),Vn(h,e.name),Vn(d,e.name),J(typeof z=="boolean",e,"internal-error"),J(typeof Q=="boolean",e,"internal-error"),Vn(p,e.name),Vn(m,e.name),Vn(w,e.name),Vn(T,e.name),Vn(x,e.name),Vn(F,e.name);const De=new jr({uid:D,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:Q,photoURL:m,phoneNumber:p,tenantId:w,stsTokenManager:X,createdAt:x,lastLoginAt:F});return Y&&Array.isArray(Y)&&(De.providerData=Y.map(qe=>Object.assign({},qe))),T&&(De._redirectEventId=T),De}static async _fromIdTokenResponse(e,t,r=!1){const s=new oo;s.updateFromServerResponse(t);const i=new jr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ec(i),i}}/**
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
 */const Bf=new Map;function Tn(n){Dn(n instanceof Function,"Expected a class definition");let e=Bf.get(n);return e?(Dn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bf.set(n,e),e)}/**
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
 */class Km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Km.type="NONE";const $f=Km;/**
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
 */function Ra(n,e,t){return`firebase:${n}:${e}:${t}`}class ks{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ra(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ra("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ks(Tn($f),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Tn($f);const o=Ra(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=jr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ks(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ks(i,e,r))}}/**
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
 */function qf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ym(e))return"Blackberry";if(Xm(e))return"Webos";if(xh(e))return"Safari";if((e.includes("chrome/")||Gm(e))&&!e.includes("edge/"))return"Chrome";if(Qm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hm(n=Ge()){return/firefox\//i.test(n)}function xh(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gm(n=Ge()){return/crios\//i.test(n)}function Wm(n=Ge()){return/iemobile/i.test(n)}function Qm(n=Ge()){return/android/i.test(n)}function Ym(n=Ge()){return/blackberry/i.test(n)}function Xm(n=Ge()){return/webos/i.test(n)}function Mc(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function YE(n=Ge()){var e;return Mc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XE(){return f0()&&document.documentMode===10}function Jm(n=Ge()){return Mc(n)||Qm(n)||Xm(n)||Ym(n)||/windows phone/i.test(n)||Wm(n)}function JE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Zm(n,e=[]){let t;switch(n){case"Browser":t=qf(Ge());break;case"Worker":t=`${qf(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yr}/${r}`}async function ey(n,e){return cs(n,"GET","/v2/recaptchaConfig",oi(n,e))}function jf(n){return n!==void 0&&n.enterprise!==void 0}class ty{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function ZE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ny(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ZE().appendChild(r)})}function eb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tb="https://www.google.com/recaptcha/enterprise.js?render=",nb="recaptcha-enterprise",rb="NO_RECAPTCHA";class ry{constructor(e){this.type=nb,this.auth=ai(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ey(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ty(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;jf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(rb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&jf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ny(tb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function tc(n,e,t,r=!1){const s=new ry(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class sb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ib{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zf(this),this.idTokenSubscription=new zf(this),this.beforeStateQueue=new sb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ye(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}async initializeRecaptchaConfig(){const e=await ey(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ty(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ry(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tn(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Tn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&RE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ai(n){return ye(n)}class zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dm(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ob(n,e){const t=Vo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xa(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function ab(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Tn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cb(n,e,t){const r=ai(n);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=sy(e),{host:o,port:a}=ub(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lb()}function sy(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ub(n){const e=sy(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kf(o)}}}function Kf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Dh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,t){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function hb(n,e){return cs(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Ku(n,e){return Bo(n,"POST","/v1/accounts:signInWithPassword",oi(n,e))}/**
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
 */async function db(n,e){return Bo(n,"POST","/v1/accounts:signInWithEmailLink",oi(n,e))}async function fb(n,e){return Bo(n,"POST","/v1/accounts:signInWithEmailLink",oi(n,e))}/**
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
 */class ao extends Dh{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ao(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ao(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await tc(e,r,"signInWithPassword");return Ku(e,s)}else return Ku(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await tc(e,r,"signInWithPassword");return Ku(e,i)}else return Promise.reject(s)});case"emailLink":return db(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hb(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fb(e,{idToken:t,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ns(n,e){return Bo(n,"POST","/v1/accounts:signInWithIdp",oi(n,e))}/**
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
 */const pb="http://localhost";class Qr extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Th(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ns(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ns(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ns(e,t)}buildRequest(){const e={requestUri:pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fo(t)}return e}}/**
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
 */function gb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mb(n){const e=Li(Fi(n)).link,t=e?Li(Fi(e)).deep_link_id:null,r=Li(Fi(n)).deep_link_id;return(r?Li(Fi(r)).link:null)||r||t||e||n}class kh{constructor(e){var t,r,s,i,o,a;const c=Li(Fi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gb((s=c.mode)!==null&&s!==void 0?s:null);J(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=mb(e);try{return new kh(t)}catch{return null}}}/**
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
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,t){return ao._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=kh.parseLink(t);return J(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class iy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends iy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends $o{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wn.credential(t,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Qn extends $o{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends $o{constructor(){super("twitter.com")}static credential(e,t){return Qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yn.credential(t,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function Hu(n,e){return Bo(n,"POST","/v1/accounts:signUp",oi(n,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await jr._fromIdTokenResponse(e,r,s),o=Hf(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hf(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class nc extends _n{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new nc(e,t,r,s)}}function oy(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(n,i,e,r):i})}async function yb(n,e,t=!1){const r=await Bs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
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
 */async function vb(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Bs(n,oy(r,s,e,n),t);J(i.idToken,r,"internal-error");const o=Ah(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(n.uid===a,r,"user-mismatch"),Yr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function ay(n,e,t=!1){const r="signIn",s=await oy(n,r,e),i=await Yr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function wb(n,e){return ay(ai(n),e)}async function _b(n,e,t){var r;const s=ai(n),i={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await tc(s,i,"signUpPassword");o=Hu(s,u)}else o=Hu(s,i).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await tc(s,i,"signUpPassword");return Hu(s,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Yr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Ib(n,e,t){return wb(ye(n),ci.credential(e,t))}/**
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
 */async function Eb(n,e){return cs(n,"POST","/v1/accounts:update",e)}/**
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
 */async function bb(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ye(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Bs(r,Eb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Tb(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function Sb(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function Cb(n){return ye(n).signOut()}const rc="__sak";/**
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
 */class cy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ab(){const n=Ge();return xh(n)||Mc(n)}const xb=1e3,Db=10;class uy extends cy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ab()&&JE(),this.fallbackToPolling=Jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);XE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Db):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uy.type="LOCAL";const kb=uy;/**
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
 */class ly extends cy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ly.type="SESSION";const hy=ly;/**
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
 */function Nb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Nb(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
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
 */function Nh(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Rb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Nh("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function Pb(n){pn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function dy(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function Ob(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Lb(){return dy()?self:null}/**
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
 */const fy="firebaseLocalStorageDb",Fb=1,sc="firebaseLocalStorage",py="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fc(n,e){return n.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function Vb(){const n=indexedDB.deleteDatabase(fy);return new qo(n).toPromise()}function _l(){const n=indexedDB.open(fy,Fb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(sc,{keyPath:py})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(sc)?e(r):(r.close(),await Vb(),e(await _l()))})})}async function Gf(n,e,t){const r=Fc(n,!0).put({[py]:e,value:t});return new qo(r).toPromise()}async function Ub(n,e){const t=Fc(n,!1).get(e),r=await new qo(t).toPromise();return r===void 0?null:r.value}function Wf(n,e){const t=Fc(n,!0).delete(e);return new qo(t).toPromise()}const Bb=800,$b=3;class gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _l(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$b)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(Lb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ob(),!this.activeServiceWorker)return;this.sender=new Rb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _l();return await Gf(e,rc,"1"),await Wf(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ub(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fc(s,!1).getAll();return new qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gy.type="LOCAL";const qb=gy;new Uo(3e4,6e4);/**
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
 */function jb(n,e){return e?Tn(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Rh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ns(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zb(n){return ay(n.auth,new Rh(n),n.bypassAuthState)}function Kb(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),vb(t,new Rh(n),n.bypassAuthState)}async function Hb(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),yb(t,new Rh(n),n.bypassAuthState)}/**
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
 */class my{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zb;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return Kb;default:Xt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gb=new Uo(2e3,1e4);class xs extends my{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gb.get())};e()}}xs.currentPopupAction=null;/**
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
 */const Wb="pendingRedirect",Pa=new Map;class Qb extends my{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(n,e){const t=Zb(e),r=Jb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Xb(n,e){Pa.set(n._key(),e)}function Jb(n){return Tn(n._redirectPersistence)}function Zb(n){return Ra(Wb,n.config.apiKey,n.name)}async function eT(n,e,t=!1){const r=ai(n),s=jb(r,e),o=await new Qb(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tT=10*60*1e3;class nT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yy(n);default:return!1}}/**
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
 */async function sT(n,e={}){return cs(n,"GET","/v1/projects",e)}/**
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
 */const iT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oT=/^https?/;async function aT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sT(n);for(const t of e)try{if(cT(t))return}catch{}Xt(n,"unauthorized-domain")}function cT(n){const e=wl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!oT.test(t))return!1;if(iT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const uT=new Uo(3e4,6e4);function Yf(){const n=pn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lT(n){return new Promise((e,t)=>{var r,s,i;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),t(fn(n,"network-request-failed"))},timeout:uT.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const a=eb("iframefcb");return pn()[a]=()=>{gapi.load?o():t(fn(n,"network-request-failed"))},ny(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function hT(n){return Oa=Oa||lT(n),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const dT=new Uo(5e3,15e3),fT="__/auth/iframe",pT="emulator/auth/iframe",gT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yT(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ch(e,pT):`https://${n.config.authDomain}/${fT}`,r={apiKey:e.apiKey,appName:n.name,v:yr},s=mT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Fo(r).slice(1)}`}async function vT(n){const e=await hT(n),t=pn().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:yT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(n,"network-request-failed"),a=pn().setTimeout(()=>{i(o)},dT.get());function c(){pn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_T=500,IT=600,ET="_blank",bT="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TT(n,e,t,r=_T,s=IT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},wT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ge().toLowerCase();t&&(a=Gm(u)?ET:t),Hm(u)&&(e=e||bT,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(YE(u)&&a!=="_self")return ST(e||"",a),new Xf(null);const h=window.open(e||"",a,l);J(h,n,"popup-blocked");try{h.focus()}catch{}return new Xf(h)}function ST(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const CT="__/auth/handler",AT="emulator/auth/handler",xT=encodeURIComponent("fac");async function Jf(n,e,t,r,s,i){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:yr,eventId:s};if(e instanceof iy){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",w0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof $o){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${xT}=${encodeURIComponent(c)}`:"";return`${DT(n)}?${Fo(a).slice(1)}${u}`}function DT({config:n}){return n.emulator?Ch(n,AT):`https://${n.authDomain}/${CT}`}/**
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
 */const Gu="webStorageSupport";class kT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hy,this._completeRedirectFn=eT,this._overrideRedirectResult=Xb}async _openPopup(e,t,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Jf(e,t,r,wl(),s);return TT(e,o,Nh())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Jf(e,t,r,wl(),s);return Pb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await vT(e),r=new nT(e);return t.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gu,{type:Gu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gu];o!==void 0&&t(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jm()||xh()||Mc()}}const NT=kT;var Zf="@firebase/auth",ep="0.23.2";/**
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
 */class RT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OT(n){or(new xn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zm(n)},u=new ib(r,s,i,c);return ab(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),or(new xn("auth-internal",e=>{const t=ai(e.getProvider("auth").getImmediate());return(r=>new RT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Zf,ep,PT(n)),Gt(Zf,ep,"esm2017")}/**
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
 */const MT=5*60,LT=Am("authIdTokenMaxAge")||MT;let tp=null;const FT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>LT)return;const s=t==null?void 0:t.token;tp!==s&&(tp=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function VT(n=bh()){const e=Vo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ob(n,{popupRedirectResolver:NT,persistence:[qb,kb,hy]}),r=Am("authTokenSyncURL");if(r){const i=FT(r);Sb(t,i,()=>i(t.currentUser)),Tb(t,o=>i(o))}const s=Sm("auth");return s&&cb(t,`http://${s}`),t}OT("Browser");function Ph(n,e){const t=Object.create(null),r=n.split(",");for(let s=0;s<r.length;s++)t[r[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function Vc(n){if(te(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=We(r)?qT(r):Vc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(We(n))return n;if(Re(n))return n}}const UT=/;(?![^(]*\))/g,BT=/:([^]+)/,$T=/\/\*.*?\*\//gs;function qT(n){const e={};return n.replace($T,"").split(UT).forEach(t=>{if(t){const r=t.split(BT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Oh(n){let e="";if(We(n))e=n;else if(te(n))for(let t=0;t<n.length;t++){const r=Oh(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zT=Ph(jT);function vy(n){return!!n||n===""}const SP=n=>We(n)?n:n==null?"":te(n)||Re(n)&&(n.toString===Ey||!se(n.toString))?JSON.stringify(n,wy,2):String(n),wy=(n,e)=>e&&e.__v_isRef?wy(n,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s])=>(t[`${r} =>`]=s,t),{})}:_y(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!te(e)&&!by(e)?String(e):e,Te={},Rs=[],Wt=()=>{},KT=()=>!1,HT=/^on[^a-z]/,Uc=n=>HT.test(n),Mh=n=>n.startsWith("onUpdate:"),wt=Object.assign,Lh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},GT=Object.prototype.hasOwnProperty,de=(n,e)=>GT.call(n,e),te=Array.isArray,Ps=n=>Bc(n)==="[object Map]",_y=n=>Bc(n)==="[object Set]",se=n=>typeof n=="function",We=n=>typeof n=="string",Fh=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",Iy=n=>Re(n)&&se(n.then)&&se(n.catch),Ey=Object.prototype.toString,Bc=n=>Ey.call(n),WT=n=>Bc(n).slice(8,-1),by=n=>Bc(n)==="[object Object]",Vh=n=>We(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ma=Ph(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$c=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},QT=/-(\w)/g,yn=$c(n=>n.replace(QT,(e,t)=>t?t.toUpperCase():"")),YT=/\B([A-Z])/g,ui=$c(n=>n.replace(YT,"-$1").toLowerCase()),qc=$c(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wu=$c(n=>n?`on${qc(n)}`:""),co=(n,e)=>!Object.is(n,e),La=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ic=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Il=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let np;const XT=()=>np||(np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class Ty{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Nt;try{return Nt=this,e()}finally{Nt=t}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sy(n){return new Ty(n)}function JT(n,e=Nt){e&&e.active&&e.effects.push(n)}function Cy(){return Nt}function ZT(n){Nt&&Nt.cleanups.push(n)}const Uh=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Ay=n=>(n.w&ar)>0,xy=n=>(n.n&ar)>0,eS=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ar},tS=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const s=e[r];Ay(s)&&!xy(s)?s.delete(n):e[t++]=s,s.w&=~ar,s.n&=~ar}e.length=t}},oc=new WeakMap;let Vi=0,ar=1;const El=30;let zt;const zr=Symbol(""),bl=Symbol("");class Bh{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,JT(this,r)}run(){if(!this.active)return this.fn();let e=zt,t=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zt,zt=this,tr=!0,ar=1<<++Vi,Vi<=El?eS(this):rp(this),this.fn()}finally{Vi<=El&&tS(this),ar=1<<--Vi,zt=this.parent,tr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zt===this?this.deferStop=!0:this.active&&(rp(this),this.onStop&&this.onStop(),this.active=!1)}}function rp(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let tr=!0;const Dy=[];function li(){Dy.push(tr),tr=!1}function hi(){const n=Dy.pop();tr=n===void 0?!0:n}function At(n,e,t){if(tr&&zt){let r=oc.get(n);r||oc.set(n,r=new Map);let s=r.get(t);s||r.set(t,s=Uh()),ky(s)}}function ky(n,e){let t=!1;Vi<=El?xy(n)||(n.n|=ar,t=!Ay(n)):t=!n.has(zt),t&&(n.add(zt),zt.deps.push(n))}function kn(n,e,t,r,s,i){const o=oc.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&te(n)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":te(n)?Vh(t)&&a.push(o.get("length")):(a.push(o.get(zr)),Ps(n)&&a.push(o.get(bl)));break;case"delete":te(n)||(a.push(o.get(zr)),Ps(n)&&a.push(o.get(bl)));break;case"set":Ps(n)&&a.push(o.get(zr));break}if(a.length===1)a[0]&&Tl(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Tl(Uh(c))}}function Tl(n,e){const t=te(n)?n:[...n];for(const r of t)r.computed&&sp(r);for(const r of t)r.computed||sp(r)}function sp(n,e){(n!==zt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function nS(n,e){var t;return(t=oc.get(n))===null||t===void 0?void 0:t.get(e)}const rS=Ph("__proto__,__v_isRef,__isVue"),Ny=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fh)),sS=$h(),iS=$h(!1,!0),oS=$h(!0),ip=aS();function aS(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=fe(this);for(let i=0,o=this.length;i<o;i++)At(r,"get",i+"");const s=r[e](...t);return s===-1||s===!1?r[e](...t.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){li();const r=fe(this)[e].apply(this,t);return hi(),r}}),n}function cS(n){const e=fe(this);return At(e,"has",n),e.hasOwnProperty(n)}function $h(n=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(n?e?TS:Ly:e?My:Oy).get(r))return r;const o=te(r);if(!n){if(o&&de(ip,s))return Reflect.get(ip,s,i);if(s==="hasOwnProperty")return cS}const a=Reflect.get(r,s,i);return(Fh(s)?Ny.has(s):rS(s))||(n||At(r,"get",s),e)?a:Be(a)?o&&Vh(s)?a:a.value:Re(a)?n?Fy(a):di(a):a}}const uS=Ry(),lS=Ry(!0);function Ry(n=!1){return function(t,r,s,i){let o=t[r];if($s(o)&&Be(o)&&!Be(s))return!1;if(!n&&(!ac(s)&&!$s(s)&&(o=fe(o),s=fe(s)),!te(t)&&Be(o)&&!Be(s)))return o.value=s,!0;const a=te(t)&&Vh(r)?Number(r)<t.length:de(t,r),c=Reflect.set(t,r,s,i);return t===fe(i)&&(a?co(s,o)&&kn(t,"set",r,s):kn(t,"add",r,s)),c}}function hS(n,e){const t=de(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&kn(n,"delete",e,void 0),r}function dS(n,e){const t=Reflect.has(n,e);return(!Fh(e)||!Ny.has(e))&&At(n,"has",e),t}function fS(n){return At(n,"iterate",te(n)?"length":zr),Reflect.ownKeys(n)}const Py={get:sS,set:uS,deleteProperty:hS,has:dS,ownKeys:fS},pS={get:oS,set(n,e){return!0},deleteProperty(n,e){return!0}},gS=wt({},Py,{get:iS,set:lS}),qh=n=>n,jc=n=>Reflect.getPrototypeOf(n);function fa(n,e,t=!1,r=!1){n=n.__v_raw;const s=fe(n),i=fe(e);t||(e!==i&&At(s,"get",e),At(s,"get",i));const{has:o}=jc(s),a=r?qh:t?Kh:uo;if(o.call(s,e))return a(n.get(e));if(o.call(s,i))return a(n.get(i));n!==s&&n.get(e)}function pa(n,e=!1){const t=this.__v_raw,r=fe(t),s=fe(n);return e||(n!==s&&At(r,"has",n),At(r,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function ga(n,e=!1){return n=n.__v_raw,!e&&At(fe(n),"iterate",zr),Reflect.get(n,"size",n)}function op(n){n=fe(n);const e=fe(this);return jc(e).has.call(e,n)||(e.add(n),kn(e,"add",n,n)),this}function ap(n,e){e=fe(e);const t=fe(this),{has:r,get:s}=jc(t);let i=r.call(t,n);i||(n=fe(n),i=r.call(t,n));const o=s.call(t,n);return t.set(n,e),i?co(e,o)&&kn(t,"set",n,e):kn(t,"add",n,e),this}function cp(n){const e=fe(this),{has:t,get:r}=jc(e);let s=t.call(e,n);s||(n=fe(n),s=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return s&&kn(e,"delete",n,void 0),i}function up(){const n=fe(this),e=n.size!==0,t=n.clear();return e&&kn(n,"clear",void 0,void 0),t}function ma(n,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?qh:n?Kh:uo;return!n&&At(a,"iterate",zr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function ya(n,e,t){return function(...r){const s=this.__v_raw,i=fe(s),o=Ps(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),l=t?qh:e?Kh:uo;return!e&&At(i,"iterate",c?bl:zr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Un(n){return function(...e){return n==="delete"?!1:this}}function mS(){const n={get(i){return fa(this,i)},get size(){return ga(this)},has:pa,add:op,set:ap,delete:cp,clear:up,forEach:ma(!1,!1)},e={get(i){return fa(this,i,!1,!0)},get size(){return ga(this)},has:pa,add:op,set:ap,delete:cp,clear:up,forEach:ma(!1,!0)},t={get(i){return fa(this,i,!0)},get size(){return ga(this,!0)},has(i){return pa.call(this,i,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:ma(!0,!1)},r={get(i){return fa(this,i,!0,!0)},get size(){return ga(this,!0)},has(i){return pa.call(this,i,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ya(i,!1,!1),t[i]=ya(i,!0,!1),e[i]=ya(i,!1,!0),r[i]=ya(i,!0,!0)}),[n,t,e,r]}const[yS,vS,wS,_S]=mS();function jh(n,e){const t=e?n?_S:wS:n?vS:yS;return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(de(t,s)&&s in r?t:r,s,i)}const IS={get:jh(!1,!1)},ES={get:jh(!1,!0)},bS={get:jh(!0,!1)},Oy=new WeakMap,My=new WeakMap,Ly=new WeakMap,TS=new WeakMap;function SS(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function CS(n){return n.__v_skip||!Object.isExtensible(n)?0:SS(WT(n))}function di(n){return $s(n)?n:zh(n,!1,Py,IS,Oy)}function AS(n){return zh(n,!1,gS,ES,My)}function Fy(n){return zh(n,!0,pS,bS,Ly)}function zh(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const o=CS(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function nr(n){return $s(n)?nr(n.__v_raw):!!(n&&n.__v_isReactive)}function $s(n){return!!(n&&n.__v_isReadonly)}function ac(n){return!!(n&&n.__v_isShallow)}function Vy(n){return nr(n)||$s(n)}function fe(n){const e=n&&n.__v_raw;return e?fe(e):n}function qs(n){return ic(n,"__v_skip",!0),n}const uo=n=>Re(n)?di(n):n,Kh=n=>Re(n)?Fy(n):n;function Uy(n){tr&&zt&&(n=fe(n),ky(n.dep||(n.dep=Uh())))}function By(n,e){n=fe(n);const t=n.dep;t&&Tl(t)}function Be(n){return!!(n&&n.__v_isRef===!0)}function jt(n){return $y(n,!1)}function xS(n){return $y(n,!0)}function $y(n,e){return Be(n)?n:new DS(n,e)}class DS{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:fe(e),this._value=t?e:uo(e)}get value(){return Uy(this),this._value}set value(e){const t=this.__v_isShallow||ac(e)||$s(e);e=t?e:fe(e),co(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:uo(e),By(this))}}function Os(n){return Be(n)?n.value:n}const kS={get:(n,e,t)=>Os(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Be(s)&&!Be(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function qy(n){return nr(n)?n:new Proxy(n,kS)}function NS(n){const e=te(n)?new Array(n.length):{};for(const t in n)e[t]=PS(n,t);return e}class RS{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return nS(fe(this._object),this._key)}}function PS(n,e,t){const r=n[e];return Be(r)?r:new RS(n,e,t)}var jy;class OS{constructor(e,t,r,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[jy]=!1,this._dirty=!0,this.effect=new Bh(e,()=>{this._dirty||(this._dirty=!0,By(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Uy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}jy="__v_isReadonly";function MS(n,e,t=!1){let r,s;const i=se(n);return i?(r=n,s=Wt):(r=n.get,s=n.set),new OS(r,s,i||!s,t)}function rr(n,e,t,r){let s;try{s=r?n(...r):n()}catch(i){zc(i,e,t)}return s}function Qt(n,e,t,r){if(se(n)){const i=rr(n,e,t,r);return i&&Iy(i)&&i.catch(o=>{zc(o,e,t)}),i}const s=[];for(let i=0;i<n.length;i++)s.push(Qt(n[i],e,t,r));return s}function zc(n,e,t,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=t;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](n,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rr(c,null,10,[n,o,a]);return}}LS(n,t,s,r)}function LS(n,e,t,r=!0){console.error(n)}let lo=!1,Sl=!1;const lt=[];let an=0;const Ms=[];let En=null,Nr=0;const zy=Promise.resolve();let Hh=null;function Gh(n){const e=Hh||zy;return n?e.then(this?n.bind(this):n):e}function FS(n){let e=an+1,t=lt.length;for(;e<t;){const r=e+t>>>1;ho(lt[r])<n?e=r+1:t=r}return e}function Wh(n){(!lt.length||!lt.includes(n,lo&&n.allowRecurse?an+1:an))&&(n.id==null?lt.push(n):lt.splice(FS(n.id),0,n),Ky())}function Ky(){!lo&&!Sl&&(Sl=!0,Hh=zy.then(Gy))}function VS(n){const e=lt.indexOf(n);e>an&&lt.splice(e,1)}function US(n){te(n)?Ms.push(...n):(!En||!En.includes(n,n.allowRecurse?Nr+1:Nr))&&Ms.push(n),Ky()}function lp(n,e=lo?an+1:0){for(;e<lt.length;e++){const t=lt[e];t&&t.pre&&(lt.splice(e,1),e--,t())}}function Hy(n){if(Ms.length){const e=[...new Set(Ms)];if(Ms.length=0,En){En.push(...e);return}for(En=e,En.sort((t,r)=>ho(t)-ho(r)),Nr=0;Nr<En.length;Nr++)En[Nr]();En=null,Nr=0}}const ho=n=>n.id==null?1/0:n.id,BS=(n,e)=>{const t=ho(n)-ho(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Gy(n){Sl=!1,lo=!0,lt.sort(BS);const e=Wt;try{for(an=0;an<lt.length;an++){const t=lt[an];t&&t.active!==!1&&rr(t,null,14)}}finally{an=0,lt.length=0,Hy(),lo=!1,Hh=null,(lt.length||Ms.length)&&Gy()}}function $S(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Te;let s=t;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Te;d&&(s=t.map(p=>We(p)?p.trim():p)),h&&(s=t.map(Il))}let a,c=r[a=Wu(e)]||r[a=Wu(yn(e))];!c&&i&&(c=r[a=Wu(ui(e))]),c&&Qt(c,n,6,s);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qt(u,n,6,s)}}function Wy(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!se(n)){const c=u=>{const l=Wy(u,e,!0);l&&(a=!0,wt(o,l))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Re(n)&&r.set(n,null),null):(te(i)?i.forEach(c=>o[c]=null):wt(o,i),Re(n)&&r.set(n,o),o)}function Kc(n,e){return!n||!Uc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(n,e[0].toLowerCase()+e.slice(1))||de(n,ui(e))||de(n,e))}let Pt=null,Hc=null;function cc(n){const e=Pt;return Pt=n,Hc=n&&n.type.__scopeId||null,e}function qS(n){Hc=n}function jS(){Hc=null}function Fa(n,e=Pt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&wp(-1);const i=cc(e);let o;try{o=n(...s)}finally{cc(i),r._d&&wp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qu(n){const{type:e,vnode:t,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:w}=n;let T,x;const F=cc(n);try{if(t.shapeFlag&4){const z=s||r;T=on(l.call(z,z,h,i,p,d,m)),x=c}else{const z=e;T=on(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),x=e.props?c:zS(c)}}catch(z){Gi.length=0,zc(z,n,1),T=He(Xr)}let D=T;if(x&&w!==!1){const z=Object.keys(x),{shapeFlag:Q}=D;z.length&&Q&7&&(o&&z.some(Mh)&&(x=KS(x,o)),D=js(D,x))}return t.dirs&&(D=js(D),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&(D.transition=t.transition),T=D,cc(F),T}const zS=n=>{let e;for(const t in n)(t==="class"||t==="style"||Uc(t))&&((e||(e={}))[t]=n[t]);return e},KS=(n,e)=>{const t={};for(const r in n)(!Mh(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function HS(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?hp(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Kc(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hp(r,o,u):!0:!!o;return!1}function hp(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Kc(t,i))return!0}return!1}function GS({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const WS=n=>n.__isSuspense;function QS(n,e){e&&e.pendingBranch?te(n)?e.effects.push(...n):e.effects.push(n):US(n)}function Va(n,e){if(Fe){let t=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===t&&(t=Fe.provides=Object.create(r)),t[n]=e}}function Yt(n,e,t=!1){const r=Fe||Pt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&se(e)?e.call(r.proxy):e}}const va={};function Ki(n,e,t){return Qy(n,e,t)}function Qy(n,e,{immediate:t,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){const a=Cy()===(Fe==null?void 0:Fe.scope)?Fe:null;let c,u=!1,l=!1;if(Be(n)?(c=()=>n.value,u=ac(n)):nr(n)?(c=()=>n,r=!0):te(n)?(l=!0,u=n.some(D=>nr(D)||ac(D)),c=()=>n.map(D=>{if(Be(D))return D.value;if(nr(D))return Vr(D);if(se(D))return rr(D,a,2)})):se(n)?e?c=()=>rr(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Qt(n,a,3,[d])}:c=Wt,e&&r){const D=c;c=()=>Vr(D())}let h,d=D=>{h=x.onStop=()=>{rr(D,a,4)}},p;if(po)if(d=Wt,e?t&&Qt(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const D=j1();p=D.__watcherHandles||(D.__watcherHandles=[])}else return Wt;let m=l?new Array(n.length).fill(va):va;const w=()=>{if(x.active)if(e){const D=x.run();(r||u||(l?D.some((z,Q)=>co(z,m[Q])):co(D,m)))&&(h&&h(),Qt(e,a,3,[D,m===va?void 0:l&&m[0]===va?[]:m,d]),m=D)}else x.run()};w.allowRecurse=!!e;let T;s==="sync"?T=w:s==="post"?T=()=>Et(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),T=()=>Wh(w));const x=new Bh(c,T);e?t?w():m=x.run():s==="post"?Et(x.run.bind(x),a&&a.suspense):x.run();const F=()=>{x.stop(),a&&a.scope&&Lh(a.scope.effects,x)};return p&&p.push(F),F}function YS(n,e,t){const r=this.proxy,s=We(n)?n.includes(".")?Yy(r,n):()=>r[n]:n.bind(r,r);let i;se(e)?i=e:(i=e.handler,t=e);const o=Fe;zs(this);const a=Qy(s,i.bind(r),t);return o?zs(o):Kr(),a}function Yy(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}function Vr(n,e){if(!Re(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Be(n))Vr(n.value,e);else if(te(n))for(let t=0;t<n.length;t++)Vr(n[t],e);else if(_y(n)||Ps(n))n.forEach(t=>{Vr(t,e)});else if(by(n))for(const t in n)Vr(n[t],e);return n}function Gc(n){return se(n)?{setup:n,name:n.name}:n}const Ua=n=>!!n.type.__asyncLoader,Xy=n=>n.type.__isKeepAlive;function XS(n,e){Jy(n,"a",e)}function JS(n,e){Jy(n,"da",e)}function Jy(n,e,t=Fe){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Wc(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Xy(s.parent.vnode)&&ZS(r,e,t,s),s=s.parent}}function ZS(n,e,t,r){const s=Wc(e,n,r,!0);Zy(()=>{Lh(r[e],s)},t)}function Wc(n,e,t=Fe,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;li(),zs(t);const a=Qt(e,t,n,o);return Kr(),hi(),a});return r?s.unshift(i):s.push(i),i}}const Pn=n=>(e,t=Fe)=>(!po||n==="sp")&&Wc(n,(...r)=>e(...r),t),e1=Pn("bm"),t1=Pn("m"),n1=Pn("bu"),r1=Pn("u"),s1=Pn("bum"),Zy=Pn("um"),i1=Pn("sp"),o1=Pn("rtg"),a1=Pn("rtc");function c1(n,e=Fe){Wc("ec",n,e)}function Ti(n,e){const t=Pt;if(t===null)return n;const r=Xc(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Te]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Vr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function Sr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(li(),Qt(c,t,8,[n.el,a,n,e]),hi())}}const ev="components";function uc(n,e){return l1(ev,n,!0,e)||n}const u1=Symbol();function l1(n,e,t=!0,r=!1){const s=Pt||Fe;if(s){const i=s.type;if(n===ev){const a=B1(i,!1);if(a&&(a===e||a===yn(e)||a===qc(yn(e))))return i}const o=dp(s[n]||i[n],e)||dp(s.appContext[n],e);return!o&&r?i:o}}function dp(n,e){return n&&(n[e]||n[yn(e)]||n[qc(yn(e))])}function CP(n,e,t,r){let s;const i=t&&t[r];if(te(n)||We(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,i&&i[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(n[u],u,a,i&&i[a])}}else s=[];return t&&(t[r]=s),s}const Cl=n=>n?fv(n)?Xc(n)||n.proxy:Cl(n.parent):null,Hi=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cl(n.parent),$root:n=>Cl(n.root),$emit:n=>n.emit,$options:n=>Qh(n),$forceUpdate:n=>n.f||(n.f=()=>Wh(n.update)),$nextTick:n=>n.n||(n.n=Gh.bind(n.proxy)),$watch:n=>YS.bind(n)}),Yu=(n,e)=>n!==Te&&!n.__isScriptSetup&&de(n,e),h1={get({_:n},e){const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Yu(r,e))return o[e]=1,r[e];if(s!==Te&&de(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&de(u,e))return o[e]=3,i[e];if(t!==Te&&de(t,e))return o[e]=4,t[e];Al&&(o[e]=0)}}const l=Hi[e];let h,d;if(l)return e==="$attrs"&&At(n,"get",e),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Te&&de(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Yu(s,e)?(s[e]=t,!0):r!==Te&&de(r,e)?(r[e]=t,!0):de(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!t[o]||n!==Te&&de(n,o)||Yu(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(Hi,o)||de(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:de(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Al=!0;function d1(n){const e=Qh(n),t=n.proxy,r=n.ctx;Al=!1,e.beforeCreate&&fp(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:w,deactivated:T,beforeDestroy:x,beforeUnmount:F,destroyed:D,unmounted:z,render:Q,renderTracked:Y,renderTriggered:W,errorCaptured:X,serverPrefetch:De,expose:qe,inheritAttrs:_t,components:Lt,directives:Fn,filters:Dt}=e;if(u&&f1(u,r,null,n.appContext.config.unwrapInjectedRef),o)for(const Ie in o){const we=o[Ie];se(we)&&(r[Ie]=we.bind(t))}if(s){const Ie=s.call(t,t);Re(Ie)&&(n.data=di(Ie))}if(Al=!0,i)for(const Ie in i){const we=i[Ie],Bt=se(we)?we.bind(t,t):se(we.get)?we.get.bind(t,t):Wt,Tr=!se(we)&&se(we.set)?we.set.bind(t):Wt,$t=Rt({get:Bt,set:Tr});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>$t.value,set:It=>$t.value=It})}if(a)for(const Ie in a)tv(a[Ie],r,t,Ie);if(c){const Ie=se(c)?c.call(t):c;Reflect.ownKeys(Ie).forEach(we=>{Va(we,Ie[we])})}l&&fp(l,n,"c");function je(Ie,we){te(we)?we.forEach(Bt=>Ie(Bt.bind(t))):we&&Ie(we.bind(t))}if(je(e1,h),je(t1,d),je(n1,p),je(r1,m),je(XS,w),je(JS,T),je(c1,X),je(a1,Y),je(o1,W),je(s1,F),je(Zy,z),je(i1,De),te(qe))if(qe.length){const Ie=n.exposed||(n.exposed={});qe.forEach(we=>{Object.defineProperty(Ie,we,{get:()=>t[we],set:Bt=>t[we]=Bt})})}else n.exposed||(n.exposed={});Q&&n.render===Wt&&(n.render=Q),_t!=null&&(n.inheritAttrs=_t),Lt&&(n.components=Lt),Fn&&(n.directives=Fn)}function f1(n,e,t=Wt,r=!1){te(n)&&(n=xl(n));for(const s in n){const i=n[s];let o;Re(i)?"default"in i?o=Yt(i.from||s,i.default,!0):o=Yt(i.from||s):o=Yt(i),Be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function fp(n,e,t){Qt(te(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function tv(n,e,t,r){const s=r.includes(".")?Yy(t,r):()=>t[r];if(We(n)){const i=e[n];se(i)&&Ki(s,i)}else if(se(n))Ki(s,n.bind(t));else if(Re(n))if(te(n))n.forEach(i=>tv(i,e,t,r));else{const i=se(n.handler)?n.handler.bind(t):e[n.handler];se(i)&&Ki(s,i,n)}}function Qh(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>lc(c,u,o,!0)),lc(c,e,o)),Re(e)&&i.set(e,c),c}function lc(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&lc(n,i,t,!0),s&&s.forEach(o=>lc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=p1[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const p1={data:pp,props:Dr,emits:Dr,methods:Dr,computed:Dr,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Dr,directives:Dr,watch:m1,provide:pp,inject:g1};function pp(n,e){return e?n?function(){return wt(se(n)?n.call(this,this):n,se(e)?e.call(this,this):e)}:e:n}function g1(n,e){return Dr(xl(n),xl(e))}function xl(n){if(te(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Dr(n,e){return n?wt(wt(Object.create(null),n),e):e}function m1(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const r in e)t[r]=ft(n[r],e[r]);return t}function y1(n,e,t,r=!1){const s={},i={};ic(i,Yc,1),n.propsDefaults=Object.create(null),nv(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:AS(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function v1(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=fe(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=n.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Kc(n.emitsOptions,d))continue;const p=e[d];if(c)if(de(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const m=yn(d);s[m]=Dl(c,a,m,p,n,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{nv(n,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!de(e,h)&&((l=ui(h))===h||!de(e,l)))&&(c?t&&(t[h]!==void 0||t[l]!==void 0)&&(s[h]=Dl(c,a,h,void 0,n,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],u=!0)}u&&kn(n,"set","$attrs")}function nv(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ma(c))continue;const u=e[c];let l;s&&de(s,l=yn(c))?!i||!i.includes(l)?t[l]=u:(a||(a={}))[l]=u:Kc(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=fe(t),u=a||Te;for(let l=0;l<i.length;l++){const h=i[l];t[h]=Dl(s,c,h,u[h],n,!de(u,h))}}return o}function Dl(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:u}=s;t in u?r=u[t]:(zs(s),r=u[t]=c.call(null,e),Kr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ui(t))&&(r=!0))}return r}function rv(n,e,t=!1){const r=e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!se(n)){const l=h=>{c=!0;const[d,p]=rv(h,e,!0);wt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!c)return Re(n)&&r.set(n,Rs),Rs;if(te(i))for(let l=0;l<i.length;l++){const h=yn(i[l]);gp(h)&&(o[h]=Te)}else if(i)for(const l in i){const h=yn(l);if(gp(h)){const d=i[l],p=o[h]=te(d)||se(d)?{type:d}:Object.assign({},d);if(p){const m=vp(Boolean,p.type),w=vp(String,p.type);p[0]=m>-1,p[1]=w<0||m<w,(m>-1||de(p,"default"))&&a.push(h)}}}const u=[o,a];return Re(n)&&r.set(n,u),u}function gp(n){return n[0]!=="$"}function mp(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function yp(n,e){return mp(n)===mp(e)}function vp(n,e){return te(e)?e.findIndex(t=>yp(t,n)):se(e)&&yp(e,n)?0:-1}const sv=n=>n[0]==="_"||n==="$stable",Yh=n=>te(n)?n.map(on):[on(n)],w1=(n,e,t)=>{if(e._n)return e;const r=Fa((...s)=>Yh(e(...s)),t);return r._c=!1,r},iv=(n,e,t)=>{const r=n._ctx;for(const s in n){if(sv(s))continue;const i=n[s];if(se(i))e[s]=w1(s,i,r);else if(i!=null){const o=Yh(i);e[s]=()=>o}}},ov=(n,e)=>{const t=Yh(e);n.slots.default=()=>t},_1=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=fe(e),ic(e,"_",t)):iv(e,n.slots={})}else n.slots={},e&&ov(n,e);ic(n.slots,Yc,1)},I1=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:(wt(s,e),!t&&a===1&&delete s._):(i=!e.$stable,iv(e,s)),o=e}else e&&(ov(n,e),o={default:1});if(i)for(const a in s)!sv(a)&&!(a in o)&&delete s[a]};function av(){return{app:null,config:{isNativeTag:KT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E1=0;function b1(n,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!Re(s)&&(s=null);const i=av(),o=new Set;let a=!1;const c=i.app={_uid:E1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:z1,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&se(u.install)?(o.add(u),u.install(c,...l)):se(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=He(r,s);return d.appContext=i,l&&e?e(d,u):n(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Xc(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function kl(n,e,t,r,s=!1){if(te(n)){n.forEach((d,p)=>kl(d,e&&(te(e)?e[p]:e),t,r,s));return}if(Ua(r)&&!s)return;const i=r.shapeFlag&4?Xc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=n,u=e&&e.r,l=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(We(u)?(l[u]=null,de(h,u)&&(h[u]=null)):Be(u)&&(u.value=null)),se(c))rr(c,a,12,[o,l]);else{const d=We(c),p=Be(c);if(d||p){const m=()=>{if(n.f){const w=d?de(h,c)?h[c]:l[c]:c.value;s?te(w)&&Lh(w,i):te(w)?w.includes(i)||w.push(i):d?(l[c]=[i],de(h,c)&&(h[c]=l[c])):(c.value=[i],n.k&&(l[n.k]=c.value))}else d?(l[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,n.k&&(l[n.k]=o))};o?(m.id=-1,Et(m,t)):m()}}}const Et=QS;function T1(n){return S1(n)}function S1(n,e){const t=XT();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=Wt,insertStaticContent:m}=n,w=(f,g,_,I=null,S=null,N=null,V=!1,k=null,P=!!g.dynamicChildren)=>{if(f===g)return;f&&!Si(f,g)&&(I=L(f),It(f,S,N,!0),f=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:A,ref:H,shapeFlag:$}=g;switch(A){case Qc:T(f,g,_,I);break;case Xr:x(f,g,_,I);break;case Xu:f==null&&F(g,_,I,V);break;case rn:Lt(f,g,_,I,S,N,V,k,P);break;default:$&1?Q(f,g,_,I,S,N,V,k,P):$&6?Fn(f,g,_,I,S,N,V,k,P):($&64||$&128)&&A.process(f,g,_,I,S,N,V,k,P,he)}H!=null&&S&&kl(H,f&&f.ref,N,g||f,!g)},T=(f,g,_,I)=>{if(f==null)r(g.el=a(g.children),_,I);else{const S=g.el=f.el;g.children!==f.children&&u(S,g.children)}},x=(f,g,_,I)=>{f==null?r(g.el=c(g.children||""),_,I):g.el=f.el},F=(f,g,_,I)=>{[f.el,f.anchor]=m(f.children,g,_,I,f.el,f.anchor)},D=({el:f,anchor:g},_,I)=>{let S;for(;f&&f!==g;)S=d(f),r(f,_,I),f=S;r(g,_,I)},z=({el:f,anchor:g})=>{let _;for(;f&&f!==g;)_=d(f),s(f),f=_;s(g)},Q=(f,g,_,I,S,N,V,k,P)=>{V=V||g.type==="svg",f==null?Y(g,_,I,S,N,V,k,P):De(f,g,S,N,V,k,P)},Y=(f,g,_,I,S,N,V,k)=>{let P,A;const{type:H,props:$,shapeFlag:G,transition:ee,dirs:oe}=f;if(P=f.el=o(f.type,N,$&&$.is,$),G&8?l(P,f.children):G&16&&X(f.children,P,null,I,S,N&&H!=="foreignObject",V,k),oe&&Sr(f,null,I,"created"),W(P,f,f.scopeId,V,I),$){for(const _e in $)_e!=="value"&&!Ma(_e)&&i(P,_e,null,$[_e],N,f.children,I,S,B);"value"in $&&i(P,"value",null,$.value),(A=$.onVnodeBeforeMount)&&nn(A,I,f)}oe&&Sr(f,null,I,"beforeMount");const Ee=(!S||S&&!S.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(P),r(P,g,_),((A=$&&$.onVnodeMounted)||Ee||oe)&&Et(()=>{A&&nn(A,I,f),Ee&&ee.enter(P),oe&&Sr(f,null,I,"mounted")},S)},W=(f,g,_,I,S)=>{if(_&&p(f,_),I)for(let N=0;N<I.length;N++)p(f,I[N]);if(S){let N=S.subTree;if(g===N){const V=S.vnode;W(f,V,V.scopeId,V.slotScopeIds,S.parent)}}},X=(f,g,_,I,S,N,V,k,P=0)=>{for(let A=P;A<f.length;A++){const H=f[A]=k?Kn(f[A]):on(f[A]);w(null,H,g,_,I,S,N,V,k)}},De=(f,g,_,I,S,N,V)=>{const k=g.el=f.el;let{patchFlag:P,dynamicChildren:A,dirs:H}=g;P|=f.patchFlag&16;const $=f.props||Te,G=g.props||Te;let ee;_&&Cr(_,!1),(ee=G.onVnodeBeforeUpdate)&&nn(ee,_,g,f),H&&Sr(g,f,_,"beforeUpdate"),_&&Cr(_,!0);const oe=S&&g.type!=="foreignObject";if(A?qe(f.dynamicChildren,A,k,_,I,oe,N):V||we(f,g,k,null,_,I,oe,N,!1),P>0){if(P&16)_t(k,g,$,G,_,I,S);else if(P&2&&$.class!==G.class&&i(k,"class",null,G.class,S),P&4&&i(k,"style",$.style,G.style,S),P&8){const Ee=g.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const ze=Ee[_e],qt=$[ze],ms=G[ze];(ms!==qt||ze==="value")&&i(k,ze,qt,ms,S,f.children,_,I,B)}}P&1&&f.children!==g.children&&l(k,g.children)}else!V&&A==null&&_t(k,g,$,G,_,I,S);((ee=G.onVnodeUpdated)||H)&&Et(()=>{ee&&nn(ee,_,g,f),H&&Sr(g,f,_,"updated")},I)},qe=(f,g,_,I,S,N,V)=>{for(let k=0;k<g.length;k++){const P=f[k],A=g[k],H=P.el&&(P.type===rn||!Si(P,A)||P.shapeFlag&70)?h(P.el):_;w(P,A,H,null,I,S,N,V,!0)}},_t=(f,g,_,I,S,N,V)=>{if(_!==I){if(_!==Te)for(const k in _)!Ma(k)&&!(k in I)&&i(f,k,_[k],null,V,g.children,S,N,B);for(const k in I){if(Ma(k))continue;const P=I[k],A=_[k];P!==A&&k!=="value"&&i(f,k,A,P,V,g.children,S,N,B)}"value"in I&&i(f,"value",_.value,I.value)}},Lt=(f,g,_,I,S,N,V,k,P)=>{const A=g.el=f?f.el:a(""),H=g.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:G,slotScopeIds:ee}=g;ee&&(k=k?k.concat(ee):ee),f==null?(r(A,_,I),r(H,_,I),X(g.children,_,H,S,N,V,k,P)):$>0&&$&64&&G&&f.dynamicChildren?(qe(f.dynamicChildren,G,_,S,N,V,k),(g.key!=null||S&&g===S.subTree)&&cv(f,g,!0)):we(f,g,_,H,S,N,V,k,P)},Fn=(f,g,_,I,S,N,V,k,P)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?S.ctx.activate(g,_,I,V,P):Dt(g,_,I,S,N,V,P):Ye(f,g,P)},Dt=(f,g,_,I,S,N,V)=>{const k=f.component=O1(f,I,S);if(Xy(f)&&(k.ctx.renderer=he),L1(k),k.asyncDep){if(S&&S.registerDep(k,je),!f.el){const P=k.subTree=He(Xr);x(null,P,g,_)}return}je(k,f,g,_,S,N,V)},Ye=(f,g,_)=>{const I=g.component=f.component;if(HS(f,g,_))if(I.asyncDep&&!I.asyncResolved){Ie(I,g,_);return}else I.next=g,VS(I.update),I.update();else g.el=f.el,I.vnode=g},je=(f,g,_,I,S,N,V)=>{const k=()=>{if(f.isMounted){let{next:H,bu:$,u:G,parent:ee,vnode:oe}=f,Ee=H,_e;Cr(f,!1),H?(H.el=oe.el,Ie(f,H,V)):H=oe,$&&La($),(_e=H.props&&H.props.onVnodeBeforeUpdate)&&nn(_e,ee,H,oe),Cr(f,!0);const ze=Qu(f),qt=f.subTree;f.subTree=ze,w(qt,ze,h(qt.el),L(qt),f,S,N),H.el=ze.el,Ee===null&&GS(f,ze.el),G&&Et(G,S),(_e=H.props&&H.props.onVnodeUpdated)&&Et(()=>nn(_e,ee,H,oe),S)}else{let H;const{el:$,props:G}=g,{bm:ee,m:oe,parent:Ee}=f,_e=Ua(g);if(Cr(f,!1),ee&&La(ee),!_e&&(H=G&&G.onVnodeBeforeMount)&&nn(H,Ee,g),Cr(f,!0),$&&ie){const ze=()=>{f.subTree=Qu(f),ie($,f.subTree,f,S,null)};_e?g.type.__asyncLoader().then(()=>!f.isUnmounted&&ze()):ze()}else{const ze=f.subTree=Qu(f);w(null,ze,_,I,f,S,N),g.el=ze.el}if(oe&&Et(oe,S),!_e&&(H=G&&G.onVnodeMounted)){const ze=g;Et(()=>nn(H,Ee,ze),S)}(g.shapeFlag&256||Ee&&Ua(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&Et(f.a,S),f.isMounted=!0,g=_=I=null}},P=f.effect=new Bh(k,()=>Wh(A),f.scope),A=f.update=()=>P.run();A.id=f.uid,Cr(f,!0),A()},Ie=(f,g,_)=>{g.component=f;const I=f.vnode.props;f.vnode=g,f.next=null,v1(f,g.props,I,_),I1(f,g.children,_),li(),lp(),hi()},we=(f,g,_,I,S,N,V,k,P=!1)=>{const A=f&&f.children,H=f?f.shapeFlag:0,$=g.children,{patchFlag:G,shapeFlag:ee}=g;if(G>0){if(G&128){Tr(A,$,_,I,S,N,V,k,P);return}else if(G&256){Bt(A,$,_,I,S,N,V,k,P);return}}ee&8?(H&16&&B(A,S,N),$!==A&&l(_,$)):H&16?ee&16?Tr(A,$,_,I,S,N,V,k,P):B(A,S,N,!0):(H&8&&l(_,""),ee&16&&X($,_,I,S,N,V,k,P))},Bt=(f,g,_,I,S,N,V,k,P)=>{f=f||Rs,g=g||Rs;const A=f.length,H=g.length,$=Math.min(A,H);let G;for(G=0;G<$;G++){const ee=g[G]=P?Kn(g[G]):on(g[G]);w(f[G],ee,_,null,S,N,V,k,P)}A>H?B(f,S,N,!0,!1,$):X(g,_,I,S,N,V,k,P,$)},Tr=(f,g,_,I,S,N,V,k,P)=>{let A=0;const H=g.length;let $=f.length-1,G=H-1;for(;A<=$&&A<=G;){const ee=f[A],oe=g[A]=P?Kn(g[A]):on(g[A]);if(Si(ee,oe))w(ee,oe,_,null,S,N,V,k,P);else break;A++}for(;A<=$&&A<=G;){const ee=f[$],oe=g[G]=P?Kn(g[G]):on(g[G]);if(Si(ee,oe))w(ee,oe,_,null,S,N,V,k,P);else break;$--,G--}if(A>$){if(A<=G){const ee=G+1,oe=ee<H?g[ee].el:I;for(;A<=G;)w(null,g[A]=P?Kn(g[A]):on(g[A]),_,oe,S,N,V,k,P),A++}}else if(A>G)for(;A<=$;)It(f[A],S,N,!0),A++;else{const ee=A,oe=A,Ee=new Map;for(A=oe;A<=G;A++){const kt=g[A]=P?Kn(g[A]):on(g[A]);kt.key!=null&&Ee.set(kt.key,A)}let _e,ze=0;const qt=G-oe+1;let ms=!1,Af=0;const bi=new Array(qt);for(A=0;A<qt;A++)bi[A]=0;for(A=ee;A<=$;A++){const kt=f[A];if(ze>=qt){It(kt,S,N,!0);continue}let tn;if(kt.key!=null)tn=Ee.get(kt.key);else for(_e=oe;_e<=G;_e++)if(bi[_e-oe]===0&&Si(kt,g[_e])){tn=_e;break}tn===void 0?It(kt,S,N,!0):(bi[tn-oe]=A+1,tn>=Af?Af=tn:ms=!0,w(kt,g[tn],_,null,S,N,V,k,P),ze++)}const xf=ms?C1(bi):Rs;for(_e=xf.length-1,A=qt-1;A>=0;A--){const kt=oe+A,tn=g[kt],Df=kt+1<H?g[kt+1].el:I;bi[A]===0?w(null,tn,_,Df,S,N,V,k,P):ms&&(_e<0||A!==xf[_e]?$t(tn,_,Df,2):_e--)}}},$t=(f,g,_,I,S=null)=>{const{el:N,type:V,transition:k,children:P,shapeFlag:A}=f;if(A&6){$t(f.component.subTree,g,_,I);return}if(A&128){f.suspense.move(g,_,I);return}if(A&64){V.move(f,g,_,he);return}if(V===rn){r(N,g,_);for(let $=0;$<P.length;$++)$t(P[$],g,_,I);r(f.anchor,g,_);return}if(V===Xu){D(f,g,_);return}if(I!==2&&A&1&&k)if(I===0)k.beforeEnter(N),r(N,g,_),Et(()=>k.enter(N),S);else{const{leave:$,delayLeave:G,afterLeave:ee}=k,oe=()=>r(N,g,_),Ee=()=>{$(N,()=>{oe(),ee&&ee()})};G?G(N,oe,Ee):Ee()}else r(N,g,_)},It=(f,g,_,I=!1,S=!1)=>{const{type:N,props:V,ref:k,children:P,dynamicChildren:A,shapeFlag:H,patchFlag:$,dirs:G}=f;if(k!=null&&kl(k,null,_,f,!0),H&256){g.ctx.deactivate(f);return}const ee=H&1&&G,oe=!Ua(f);let Ee;if(oe&&(Ee=V&&V.onVnodeBeforeUnmount)&&nn(Ee,g,f),H&6)b(f.component,_,I);else{if(H&128){f.suspense.unmount(_,I);return}ee&&Sr(f,null,g,"beforeUnmount"),H&64?f.type.remove(f,g,_,S,he,I):A&&(N!==rn||$>0&&$&64)?B(A,g,_,!1,!0):(N===rn&&$&384||!S&&H&16)&&B(P,g,_),I&&gs(f)}(oe&&(Ee=V&&V.onVnodeUnmounted)||ee)&&Et(()=>{Ee&&nn(Ee,g,f),ee&&Sr(f,null,g,"unmounted")},_)},gs=f=>{const{type:g,el:_,anchor:I,transition:S}=f;if(g===rn){ha(_,I);return}if(g===Xu){z(f);return}const N=()=>{s(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:V,delayLeave:k}=S,P=()=>V(_,N);k?k(f.el,N,P):P()}else N()},ha=(f,g)=>{let _;for(;f!==g;)_=d(f),s(f),f=_;s(g)},b=(f,g,_)=>{const{bum:I,scope:S,update:N,subTree:V,um:k}=f;I&&La(I),S.stop(),N&&(N.active=!1,It(V,f,g,_)),k&&Et(k,g),Et(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},B=(f,g,_,I=!1,S=!1,N=0)=>{for(let V=N;V<f.length;V++)It(f[V],g,_,I,S)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),K=(f,g,_)=>{f==null?g._vnode&&It(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,_),lp(),Hy(),g._vnode=f},he={p:w,um:It,m:$t,r:gs,mt:Dt,mc:X,pc:we,pbc:qe,n:L,o:n};let Pe,ie;return e&&([Pe,ie]=e(he)),{render:K,hydrate:Pe,createApp:b1(K,Pe)}}function Cr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function cv(n,e,t=!1){const r=n.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Kn(s[i]),a.el=o.el),t||cv(o,a)),a.type===Qc&&(a.el=o.el)}}function C1(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}const A1=n=>n.__isTeleport,rn=Symbol(void 0),Qc=Symbol(void 0),Xr=Symbol(void 0),Xu=Symbol(void 0),Gi=[];let Kt=null;function Ft(n=!1){Gi.push(Kt=n?null:[])}function x1(){Gi.pop(),Kt=Gi[Gi.length-1]||null}let fo=1;function wp(n){fo+=n}function uv(n){return n.dynamicChildren=fo>0?Kt||Rs:null,x1(),fo>0&&Kt&&Kt.push(n),n}function sn(n,e,t,r,s,i){return uv(mt(n,e,t,r,s,i,!0))}function lv(n,e,t,r,s){return uv(He(n,e,t,r,s,!0))}function Nl(n){return n?n.__v_isVNode===!0:!1}function Si(n,e){return n.type===e.type&&n.key===e.key}const Yc="__vInternal",hv=({key:n})=>n??null,Ba=({ref:n,ref_key:e,ref_for:t})=>n!=null?We(n)||Be(n)||se(n)?{i:Pt,r:n,k:e,f:!!t}:n:null;function mt(n,e=null,t=null,r=0,s=null,i=n===rn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hv(e),ref:e&&Ba(e),scopeId:Hc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return a?(Xh(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=We(t)?8:16),fo>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const He=D1;function D1(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===u1)&&(n=Xr),Nl(n)){const a=js(n,e,!0);return t&&Xh(a,t),fo>0&&!i&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(n)]=a:Kt.push(a)),a.patchFlag|=-2,a}if($1(n)&&(n=n.__vccOpts),e){e=k1(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=Oh(a)),Re(c)&&(Vy(c)&&!te(c)&&(c=wt({},c)),e.style=Vc(c))}const o=We(n)?1:WS(n)?128:A1(n)?64:Re(n)?4:se(n)?2:0;return mt(n,e,t,r,s,o,i,!0)}function k1(n){return n?Vy(n)||Yc in n?wt({},n):n:null}function js(n,e,t=!1){const{props:r,ref:s,patchFlag:i,children:o}=n,a=e?N1(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&hv(a),ref:e&&e.ref?t&&s?te(s)?s.concat(Ba(e)):[s,Ba(e)]:Ba(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&js(n.ssContent),ssFallback:n.ssFallback&&js(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function dv(n=" ",e=0){return He(Qc,null,n,e)}function Es(n="",e=!1){return e?(Ft(),lv(Xr,null,n)):He(Xr,null,n)}function on(n){return n==null||typeof n=="boolean"?He(Xr):te(n)?He(rn,null,n.slice()):typeof n=="object"?Kn(n):He(Qc,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:js(n)}function Xh(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(te(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Yc in e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Pt},t=32):(e=String(e),r&64?(t=16,e=[dv(e)]):t=8);n.children=e,n.shapeFlag|=t}function N1(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Oh([e.class,r.class]));else if(s==="style")e.style=Vc([e.style,r.style]);else if(Uc(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nn(n,e,t,r=null){Qt(n,e,7,[t,r])}const R1=av();let P1=0;function O1(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||R1,i={uid:P1++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rv(r,s),emitsOptions:Wy(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$S.bind(null,i),n.ce&&n.ce(i),i}let Fe=null;const M1=()=>Fe||Pt,zs=n=>{Fe=n,n.scope.on()},Kr=()=>{Fe&&Fe.scope.off(),Fe=null};function fv(n){return n.vnode.shapeFlag&4}let po=!1;function L1(n,e=!1){po=e;const{props:t,children:r}=n.vnode,s=fv(n);y1(n,t,s,e),_1(n,r);const i=s?F1(n,e):void 0;return po=!1,i}function F1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=qs(new Proxy(n.ctx,h1));const{setup:r}=t;if(r){const s=n.setupContext=r.length>1?U1(n):null;zs(n),li();const i=rr(r,n,0,[n.props,s]);if(hi(),Kr(),Iy(i)){if(i.then(Kr,Kr),e)return i.then(o=>{_p(n,o,e)}).catch(o=>{zc(o,n,0)});n.asyncDep=i}else _p(n,i,e)}else pv(n,e)}function _p(n,e,t){se(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=qy(e)),pv(n,t)}let Ip;function pv(n,e,t){const r=n.type;if(!n.render){if(!e&&Ip&&!r.render){const s=r.template||Qh(n).template;if(s){const{isCustomElement:i,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,u=wt(wt({isCustomElement:i,delimiters:a},o),c);r.render=Ip(s,u)}}n.render=r.render||Wt}zs(n),li(),d1(n),hi(),Kr()}function V1(n){return new Proxy(n.attrs,{get(e,t){return At(n,"get","$attrs"),e[t]}})}function U1(n){const e=r=>{n.exposed=r||{}};let t;return{get attrs(){return t||(t=V1(n))},slots:n.slots,emit:n.emit,expose:e}}function Xc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(qy(qs(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Hi)return Hi[t](n)},has(e,t){return t in e||t in Hi}}))}function B1(n,e=!0){return se(n)?n.displayName||n.name:n.name||e&&n.__name}function $1(n){return se(n)&&"__vccOpts"in n}const Rt=(n,e)=>MS(n,e,po);function gv(n,e,t){const r=arguments.length;return r===2?Re(e)&&!te(e)?Nl(e)?He(n,null,[e]):He(n,e):He(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Nl(t)&&(t=[t]),He(n,e,t))}const q1=Symbol(""),j1=()=>Yt(q1),z1="3.2.47",K1="http://www.w3.org/2000/svg",Rr=typeof document<"u"?document:null,Ep=Rr&&Rr.createElement("template"),H1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e?Rr.createElementNS(K1,n):Rr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Rr.createTextNode(n),createComment:n=>Rr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Ep.innerHTML=r?`<svg>${n}</svg>`:n;const a=Ep.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function G1(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function W1(n,e,t){const r=n.style,s=We(t);if(t&&!s){if(e&&!We(e))for(const i in e)t[i]==null&&Rl(r,i,"");for(const i in t)Rl(r,i,t[i])}else{const i=r.display;s?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const bp=/\s*!important$/;function Rl(n,e,t){if(te(t))t.forEach(r=>Rl(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Q1(n,e);bp.test(t)?n.setProperty(ui(r),t.replace(bp,""),"important"):n[r]=t}}const Tp=["Webkit","Moz","ms"],Ju={};function Q1(n,e){const t=Ju[e];if(t)return t;let r=yn(e);if(r!=="filter"&&r in n)return Ju[e]=r;r=qc(r);for(let s=0;s<Tp.length;s++){const i=Tp[s]+r;if(i in n)return Ju[e]=i}return e}const Sp="http://www.w3.org/1999/xlink";function Y1(n,e,t,r,s){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Sp,e.slice(6,e.length)):n.setAttributeNS(Sp,e,t);else{const i=zT(e);t==null||i&&!vy(t)?n.removeAttribute(e):n.setAttribute(e,i?"":t)}}function X1(n,e,t,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t??"";(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=vy(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function bs(n,e,t,r){n.addEventListener(e,t,r)}function J1(n,e,t,r){n.removeEventListener(e,t,r)}function Z1(n,e,t,r,s=null){const i=n._vei||(n._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=eC(e);if(r){const u=i[e]=rC(r,s);bs(n,a,u,c)}else o&&(J1(n,a,o,c),i[e]=void 0)}}const Cp=/(?:Once|Passive|Capture)$/;function eC(n){let e;if(Cp.test(n)){e={};let r;for(;r=n.match(Cp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ui(n.slice(2)),e]}let Zu=0;const tC=Promise.resolve(),nC=()=>Zu||(tC.then(()=>Zu=0),Zu=Date.now());function rC(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Qt(sC(r,t.value),e,5,[r])};return t.value=n,t.attached=nC(),t}function sC(n,e){if(te(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ap=/^on[a-z]/,iC=(n,e,t,r,s=!1,i,o,a,c)=>{e==="class"?G1(n,r,s):e==="style"?W1(n,t,r):Uc(e)?Mh(e)||Z1(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oC(n,e,r,s))?X1(n,e,r,i,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Y1(n,e,r,s))};function oC(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Ap.test(e)&&se(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Ap.test(e)&&We(t)?!1:e in n}const xp=n=>{const e=n.props["onUpdate:modelValue"]||!1;return te(e)?t=>La(e,t):e};function aC(n){n.target.composing=!0}function Dp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ci={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n._assign=xp(s);const i=r||s.props&&s.props.type==="number";bs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Il(a)),n._assign(a)}),t&&bs(n,"change",()=>{n.value=n.value.trim()}),e||(bs(n,"compositionstart",aC),bs(n,"compositionend",Dp),bs(n,"change",Dp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:s}},i){if(n._assign=xp(i),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(s||n.type==="number")&&Il(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},cC=["ctrl","shift","alt","meta"],uC={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cC.some(t=>n[`${t}Key`]&&!e.includes(t))},kp=(n,e)=>(t,...r)=>{for(let s=0;s<e.length;s++){const i=uC[e[s]];if(i&&i(t,e))return}return n(t,...r)},lC=wt({patchProp:iC},H1);let Np;function hC(){return Np||(Np=T1(lC))}const dC=(...n)=>{const e=hC().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=fC(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function fC(n){return We(n)?document.querySelector(n):n}var pC=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let mv;const Jc=n=>mv=n,yv=Symbol();function Pl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Wi;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Wi||(Wi={}));function gC(){const n=Sy(!0),e=n.run(()=>jt({}));let t=[],r=[];const s=qs({install(i){Jc(s),s._a=i,i.provide(yv,s),i.config.globalProperties.$pinia=s,r.forEach(o=>t.push(o)),r=[]},use(i){return!this._a&&!pC?r.push(i):t.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const vv=()=>{};function Rp(n,e,t,r=vv){n.push(e);const s=()=>{const i=n.indexOf(e);i>-1&&(n.splice(i,1),r())};return!t&&Cy()&&ZT(s),s}function ys(n,...e){n.slice().forEach(t=>{t(...e)})}function Ol(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Pl(s)&&Pl(r)&&n.hasOwnProperty(t)&&!Be(r)&&!nr(r)?n[t]=Ol(s,r):n[t]=r}return n}const mC=Symbol();function yC(n){return!Pl(n)||!n.hasOwnProperty(mC)}const{assign:zn}=Object;function vC(n){return!!(Be(n)&&n.effect)}function wC(n,e,t,r){const{state:s,actions:i,getters:o}=e,a=t.state.value[n];let c;function u(){a||(t.state.value[n]=s?s():{});const l=NS(t.state.value[n]);return zn(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=qs(Rt(()=>{Jc(t);const p=t._s.get(n);return o[d].call(p,p)})),h),{}))}return c=wv(n,u,e,t,r,!0),c}function wv(n,e,t={},r,s,i){let o;const a=zn({actions:{}},t),c={deep:!0};let u,l,h=qs([]),d=qs([]),p;const m=r.state.value[n];!i&&!m&&(r.state.value[n]={}),jt({});let w;function T(W){let X;u=l=!1,typeof W=="function"?(W(r.state.value[n]),X={type:Wi.patchFunction,storeId:n,events:p}):(Ol(r.state.value[n],W),X={type:Wi.patchObject,payload:W,storeId:n,events:p});const De=w=Symbol();Gh().then(()=>{w===De&&(u=!0)}),l=!0,ys(h,X,r.state.value[n])}const x=i?function(){const{state:X}=t,De=X?X():{};this.$patch(qe=>{zn(qe,De)})}:vv;function F(){o.stop(),h=[],d=[],r._s.delete(n)}function D(W,X){return function(){Jc(r);const De=Array.from(arguments),qe=[],_t=[];function Lt(Ye){qe.push(Ye)}function Fn(Ye){_t.push(Ye)}ys(d,{args:De,name:W,store:Q,after:Lt,onError:Fn});let Dt;try{Dt=X.apply(this&&this.$id===n?this:Q,De)}catch(Ye){throw ys(_t,Ye),Ye}return Dt instanceof Promise?Dt.then(Ye=>(ys(qe,Ye),Ye)).catch(Ye=>(ys(_t,Ye),Promise.reject(Ye))):(ys(qe,Dt),Dt)}}const z={_p:r,$id:n,$onAction:Rp.bind(null,d),$patch:T,$reset:x,$subscribe(W,X={}){const De=Rp(h,W,X.detached,()=>qe()),qe=o.run(()=>Ki(()=>r.state.value[n],_t=>{(X.flush==="sync"?l:u)&&W({storeId:n,type:Wi.direct,events:p},_t)},zn({},c,X)));return De},$dispose:F},Q=di(z);r._s.set(n,Q);const Y=r._e.run(()=>(o=Sy(),o.run(()=>e())));for(const W in Y){const X=Y[W];if(Be(X)&&!vC(X)||nr(X))i||(m&&yC(X)&&(Be(X)?X.value=m[W]:Ol(X,m[W])),r.state.value[n][W]=X);else if(typeof X=="function"){const De=D(W,X);Y[W]=De,a.actions[W]=X}}return zn(Q,Y),zn(fe(Q),Y),Object.defineProperty(Q,"$state",{get:()=>r.state.value[n],set:W=>{T(X=>{zn(X,W)})}}),r._p.forEach(W=>{zn(Q,o.run(()=>W({store:Q,app:r._a,pinia:r,options:a})))}),m&&i&&t.hydrate&&t.hydrate(Q.$state,m),u=!0,l=!0,Q}function _C(n,e,t){let r,s;const i=typeof e=="function";typeof n=="string"?(r=n,s=i?t:e):(s=n,r=n.id);function o(a,c){const u=M1();return a=a||u&&Yt(yv,null),a&&Jc(a),a=mv,a._s.has(r)||(i?wv(r,e,s,a):wC(r,s,a)),a._s.get(r)}return o.$id=r,o}var IC="firebase",EC="9.23.0";/**
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
 */Gt(IC,EC,"app");/**
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
 */class bC{constructor(e,t){this._delegate=e,this.firebase=t,Ja(e,new xn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Om(this._delegate)))}_getService(e,t=sr){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=sr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ja(this._delegate,e)}_addOrOverwriteComponent(e){Pm(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const TC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Pp=new as("app-compat","Firebase",TC);/**
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
 */function SC(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:Gt,setLogLevel:Lm,onLog:Mm,apps:null,SDK_VERSION:yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:kE}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||sr,!kf(e,u))throw Pp.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=Oc(u,l);if(kf(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(or(u)&&u.type==="PUBLIC"){const d=(p=s())=>{if(typeof p[h]!="function")throw Pp.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&Ya(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function _v(){const n=SC(bC);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:_v,extendNamespace:e,createSubscribe:Dm,ErrorFactory:as,deepExtend:Ya});function e(t){Ya(n,t)}return n}const CC=_v();/**
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
 */const Op=new Pc("@firebase/app-compat"),AC="@firebase/app-compat",xC="0.2.13";/**
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
 */function DC(n){Gt(AC,xC,n)}/**
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
 */if(l0()&&self.firebase!==void 0){Op.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Op.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const kC=CC;DC();var NC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Jh=Jh||{},Z=NC||self;function Zc(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function jo(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function RC(n){return Object.prototype.hasOwnProperty.call(n,el)&&n[el]||(n[el]=++PC)}var el="closure_uid_"+(1e9*Math.random()>>>0),PC=0;function OC(n,e,t){return n.call.apply(n.bind,arguments)}function MC(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ht(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=OC:ht=MC,ht.apply(null,arguments)}function wa(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function tt(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function vr(){this.s=this.s,this.o=this.o}var LC=0;vr.prototype.s=!1;vr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),LC!=0)&&RC(this)};vr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Iv=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Zh(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Mp(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Zc(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function dt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var FC=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return n}();function go(n){return/^[\s\xa0]*$/.test(n)}function eu(){var n=Z.navigator;return n&&(n=n.userAgent)?n:""}function cn(n){return eu().indexOf(n)!=-1}function ed(n){return ed[" "](n),n}ed[" "]=function(){};function VC(n,e){var t=kA;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var UC=cn("Opera"),Ks=cn("Trident")||cn("MSIE"),Ev=cn("Edge"),Ml=Ev||Ks,bv=cn("Gecko")&&!(eu().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),BC=eu().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function Tv(){var n=Z.document;return n?n.documentMode:void 0}var Ll;e:{var tl="",nl=function(){var n=eu();if(bv)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ev)return/Edge\/([\d\.]+)/.exec(n);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(BC)return/WebKit\/(\S+)/.exec(n);if(UC)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(nl&&(tl=nl?nl[1]:""),Ks){var rl=Tv();if(rl!=null&&rl>parseFloat(tl)){Ll=String(rl);break e}}Ll=tl}var Fl;if(Z.document&&Ks){var Lp=Tv();Fl=Lp||parseInt(Ll,10)||void 0}else Fl=void 0;var $C=Fl;function mo(n,e){if(dt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(bv){e:{try{ed(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:qC[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&mo.$.h.call(this)}}tt(mo,dt);var qC={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var zo="closure_listenable_"+(1e6*Math.random()|0),jC=0;function zC(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=s,this.key=++jC,this.fa=this.ia=!1}function tu(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function td(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function KC(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Sv(n){const e={};for(const t in n)e[t]=n[t];return e}const Fp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cv(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Fp.length;i++)t=Fp[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function nu(n){this.src=n,this.g={},this.h=0}nu.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Ul(n,e,r,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new zC(e,this.src,i,!!r,s),e.ia=t,n.push(e)),e};function Vl(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Iv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(tu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ul(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==r)return s}return-1}var nd="closure_lm_"+(1e6*Math.random()|0),sl={};function Av(n,e,t,r,s){if(r&&r.once)return Dv(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Av(n,e[i],t,r,s);return null}return t=id(t),n&&n[zo]?n.O(e,t,jo(r)?!!r.capture:!!r,s):xv(n,e,t,!1,r,s)}function xv(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=jo(s)?!!s.capture:!!s,a=sd(n);if(a||(n[nd]=a=new nu(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=HC(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)FC||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Nv(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function HC(){function n(t){return e.call(n.src,n.listener,t)}const e=GC;return n}function Dv(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dv(n,e[i],t,r,s);return null}return t=id(t),n&&n[zo]?n.P(e,t,jo(r)?!!r.capture:!!r,s):xv(n,e,t,!0,r,s)}function kv(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)kv(n,e[i],t,r,s);else r=jo(r)?!!r.capture:!!r,t=id(t),n&&n[zo]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Ul(i,t,r,s),-1<t&&(tu(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=sd(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ul(e,t,r,s)),(t=-1<n?e[n]:null)&&rd(t))}function rd(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[zo])Vl(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Nv(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=sd(e))?(Vl(t,n),t.h==0&&(t.src=null,e[nd]=null)):tu(n)}}}function Nv(n){return n in sl?sl[n]:sl[n]="on"+n}function GC(n,e){if(n.fa)n=!0;else{e=new mo(e,this);var t=n.listener,r=n.la||n.src;n.ia&&rd(n),n=t.call(r,e)}return n}function sd(n){return n=n[nd],n instanceof nu?n:null}var il="__closure_events_fn_"+(1e9*Math.random()>>>0);function id(n){return typeof n=="function"?n:(n[il]||(n[il]=function(e){return n.handleEvent(e)}),n[il])}function et(){vr.call(this),this.i=new nu(this),this.S=this,this.J=null}tt(et,vr);et.prototype[zo]=!0;et.prototype.removeEventListener=function(n,e,t,r){kv(this,n,e,t,r)};function at(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new dt(e,n);else if(e instanceof dt)e.target=e.target||n;else{var s=e;e=new dt(r,n),Cv(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=_a(o,r,!0,e)&&s}if(o=e.g=n,s=_a(o,r,!0,e)&&s,s=_a(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=_a(o,r,!1,e)&&s}et.prototype.N=function(){if(et.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)tu(t[r]);delete n.g[e],n.h--}}this.J=null};et.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};et.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function _a(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Vl(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var od=Z.JSON.stringify;class WC{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function QC(){var n=ad;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class YC{constructor(){this.h=this.g=null}add(e,t){const r=Rv.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Rv=new WC(()=>new XC,n=>n.reset());class XC{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function JC(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function ZC(n){Z.setTimeout(()=>{throw n},0)}let yo,vo=!1,ad=new YC,Pv=()=>{const n=Z.Promise.resolve(void 0);yo=()=>{n.then(eA)}};var eA=()=>{for(var n;n=QC();){try{n.h.call(n.g)}catch(t){ZC(t)}var e=Rv;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}vo=!1};function ru(n,e){et.call(this),this.h=n||1,this.g=e||Z,this.j=ht(this.qb,this),this.l=Date.now()}tt(ru,et);M=ru.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(cd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cd(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}M.N=function(){ru.$.N.call(this),cd(this),delete this.g};function ud(n,e,t){if(typeof n=="function")t&&(n=ht(n,t));else if(n&&typeof n.handleEvent=="function")n=ht(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(n,e||0)}function Ov(n){n.g=ud(()=>{n.g=null,n.i&&(n.i=!1,Ov(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class tA extends vr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ov(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(n){vr.call(this),this.h=n,this.g={}}tt(wo,vr);var Vp=[];function Mv(n,e,t,r){Array.isArray(t)||(t&&(Vp[0]=t.toString()),t=Vp);for(var s=0;s<t.length;s++){var i=Av(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Lv(n){td(n.g,function(e,t){this.g.hasOwnProperty(t)&&rd(e)},n),n.g={}}wo.prototype.N=function(){wo.$.N.call(this),Lv(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function su(){this.g=!0}su.prototype.Ea=function(){this.g=!1};function nA(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function rA(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Ds(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+iA(n,t)+(r?" "+r:"")})}function sA(n,e){n.info(function(){return"TIMEOUT: "+e})}su.prototype.info=function(){};function iA(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return od(t)}catch{return e}}var us={},Up=null;function iu(){return Up=Up||new et}us.Ta="serverreachability";function Fv(n){dt.call(this,us.Ta,n)}tt(Fv,dt);function _o(n){const e=iu();at(e,new Fv(e))}us.STAT_EVENT="statevent";function Vv(n,e){dt.call(this,us.STAT_EVENT,n),this.stat=e}tt(Vv,dt);function yt(n){const e=iu();at(e,new Vv(e,n))}us.Ua="timingevent";function Uv(n,e){dt.call(this,us.Ua,n),this.size=e}tt(Uv,dt);function Ko(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){n()},e)}var ou={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Bv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ld(){}ld.prototype.h=null;function Bp(n){return n.h||(n.h=n.i())}function $v(){}var Ho={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hd(){dt.call(this,"d")}tt(hd,dt);function dd(){dt.call(this,"c")}tt(dd,dt);var Bl;function au(){}tt(au,ld);au.prototype.g=function(){return new XMLHttpRequest};au.prototype.i=function(){return{}};Bl=new au;function Go(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new wo(this),this.P=oA,n=Ml?125:void 0,this.V=new ru(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qv}function qv(){this.i=null,this.g="",this.h=!1}var oA=45e3,$l={},hc={};M=Go.prototype;M.setTimeout=function(n){this.P=n};function ql(n,e,t){n.L=1,n.v=uu(Nn(e)),n.s=t,n.S=!0,jv(n,null)}function jv(n,e){n.G=Date.now(),Wo(n),n.A=Nn(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Xv(t.i,"t",r),n.C=0,t=n.l.J,n.h=new qv,n.g=vw(n.l,t?e:null,!n.s),0<n.O&&(n.M=new tA(ht(n.Pa,n,n.g),n.O)),Mv(n.U,n.g,"readystatechange",n.nb),e=n.I?Sv(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),_o(),nA(n.j,n.u,n.A,n.m,n.W,n.s)}M.nb=function(n){n=n.target;const e=this.M;e&&un(n)==3?e.l():this.Pa(n)};M.Pa=function(n){try{if(n==this.g)e:{const l=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ml||this.g&&(this.h.h||this.g.ja()||zp(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?_o(3):_o(2)),cu(this);var t=this.g.da();this.ca=t;t:if(zv(this)){var r=zp(this.g);n="";var s=r.length,i=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),Qi(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,rA(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var u=a;break t}}u=null}if(t=u)Ds(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jl(this,t);else{this.i=!1,this.o=3,yt(12),Ur(this),Qi(this);break e}}this.S?(Kv(this,l,o),Ml&&this.i&&l==3&&(Mv(this.U,this.V,"tick",this.mb),this.V.start())):(Ds(this.j,this.m,o,null),jl(this,o)),l==4&&Ur(this),this.i&&!this.J&&(l==4?pw(this.l,this):(this.i=!1,Wo(this)))}else AA(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),Ur(this),Qi(this)}}}catch{}finally{}};function zv(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Kv(n,e,t){let r=!0,s;for(;!n.J&&n.C<t.length;)if(s=aA(n,t),s==hc){e==4&&(n.o=4,yt(14),r=!1),Ds(n.j,n.m,null,"[Incomplete Response]");break}else if(s==$l){n.o=4,yt(15),Ds(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ds(n.j,n.m,s,null),jl(n,s);zv(n)&&s!=hc&&s!=$l&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,yt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),vd(e),e.M=!0,yt(11))):(Ds(n.j,n.m,t,"[Invalid Chunked Response]"),Ur(n),Qi(n))}M.mb=function(){if(this.g){var n=un(this.g),e=this.g.ja();this.C<e.length&&(cu(this),Kv(this,n,e),this.i&&n!=4&&Wo(this))}};function aA(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?hc:(t=Number(e.substring(t,r)),isNaN(t)?$l:(r+=1,r+t>e.length?hc:(e=e.slice(r,r+t),n.C=r+t,e)))}M.cancel=function(){this.J=!0,Ur(this)};function Wo(n){n.Y=Date.now()+n.P,Hv(n,n.P)}function Hv(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ko(ht(n.lb,n),e)}function cu(n){n.B&&(Z.clearTimeout(n.B),n.B=null)}M.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(sA(this.j,this.A),this.L!=2&&(_o(),yt(17)),Ur(this),this.o=2,Qi(this)):Hv(this,this.Y-n)};function Qi(n){n.l.H==0||n.J||pw(n.l,n)}function Ur(n){cu(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,cd(n.V),Lv(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function jl(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||zl(t.i,n))){if(!n.K&&zl(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)pc(t),du(t);else break e;yd(t),yt(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=Ko(ht(t.ib,t),6e3));if(1>=ew(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Br(t,11)}else if((n.K||t.g==n)&&pc(t),!go(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(fd(i,i.h),i.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Se(r.I,r.F,w))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=yw(r,r.J?r.pa:null,r.Y),o.K){tw(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(cu(a),Wo(a)),r.g=o}else dw(r);0<t.j.length&&fu(t)}else u[0]!="stop"&&u[0]!="close"||Br(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Br(t,7):md(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}_o(4)}catch{}}function cA(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Zc(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function uA(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Zc(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Gv(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Zc(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=uA(n),r=cA(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var Wv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lA(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Hr(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Hr){this.h=n.h,dc(this,n.j),this.s=n.s,this.g=n.g,fc(this,n.m),this.l=n.l;var e=n.i,t=new Io;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),$p(this,t),this.o=n.o}else n&&(e=String(n).match(Wv))?(this.h=!1,dc(this,e[1]||"",!0),this.s=Ui(e[2]||""),this.g=Ui(e[3]||"",!0),fc(this,e[4]),this.l=Ui(e[5]||"",!0),$p(this,e[6]||"",!0),this.o=Ui(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}Hr.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Bi(e,qp,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Bi(e,qp,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Bi(t,t.charAt(0)=="/"?fA:dA,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Bi(t,gA)),n.join("")};function Nn(n){return new Hr(n)}function dc(n,e,t){n.j=t?Ui(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function fc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function $p(n,e,t){e instanceof Io?(n.i=e,mA(n.i,n.h)):(t||(e=Bi(e,pA)),n.i=new Io(e,n.h))}function Se(n,e,t){n.i.set(e,t)}function uu(n){return Se(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ui(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Bi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,hA),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function hA(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var qp=/[#\/\?@]/g,dA=/[#\?:]/g,fA=/[#\?]/g,pA=/[#\?@]/g,gA=/#/g;function Io(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function wr(n){n.g||(n.g=new Map,n.h=0,n.i&&lA(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}M=Io.prototype;M.add=function(n,e){wr(this),this.i=null,n=fi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Qv(n,e){wr(n),e=fi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Yv(n,e){return wr(n),e=fi(n,e),n.g.has(e)}M.forEach=function(n,e){wr(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};M.ta=function(){wr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};M.Z=function(n){wr(this);let e=[];if(typeof n=="string")Yv(this,n)&&(e=e.concat(this.g.get(fi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};M.set=function(n,e){return wr(this),this.i=null,n=fi(this,n),Yv(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};M.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Xv(n,e,t){Qv(n,e),0<t.length&&(n.i=null,n.g.set(fi(n,e),Zh(t)),n.h+=t.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function fi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function mA(n,e){e&&!n.j&&(wr(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Qv(this,r),Xv(this,s,t))},n)),n.j=e}var yA=class{constructor(n,e){this.g=n,this.map=e}};function Jv(n){this.l=n||vA,Z.PerformanceNavigationTiming?(n=Z.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vA=10;function Zv(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ew(n){return n.h?1:n.g?n.g.size:0}function zl(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function fd(n,e){n.g?n.g.add(e):n.h=e}function tw(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Jv.prototype.cancel=function(){if(this.i=nw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function nw(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Zh(n.i)}var wA=class{stringify(n){return Z.JSON.stringify(n,void 0)}parse(n){return Z.JSON.parse(n,void 0)}};function _A(){this.g=new wA}function IA(n,e,t){const r=t||"";try{Gv(n,function(s,i){let o=s;jo(s)&&(o=od(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function EA(n,e){const t=new su;if(Z.Image){const r=new Image;r.onload=wa(Ia,t,r,"TestLoadImage: loaded",!0,e),r.onerror=wa(Ia,t,r,"TestLoadImage: error",!1,e),r.onabort=wa(Ia,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=wa(Ia,t,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ia(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Qo(n){this.l=n.fc||null,this.j=n.ob||!1}tt(Qo,ld);Qo.prototype.g=function(){return new lu(this.l,this.j)};Qo.prototype.i=function(n){return function(){return n}}({});function lu(n,e){et.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=pd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(lu,et);var pd=0;M=lu.prototype;M.open=function(n,e){if(this.readyState!=pd)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Eo(this)};M.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=pd};M.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rw(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function rw(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}M.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Yo(this):Eo(this),this.readyState==3&&rw(this)}};M.Za=function(n){this.g&&(this.response=this.responseText=n,Yo(this))};M.Ya=function(n){this.g&&(this.response=n,Yo(this))};M.ka=function(){this.g&&Yo(this)};function Yo(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Eo(n)}M.setRequestHeader=function(n,e){this.v.append(n,e)};M.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Eo(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(lu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var bA=Z.JSON.parse;function Me(n){et.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sw,this.L=this.M=!1}tt(Me,et);var sw="",TA=/^https?$/i,SA=["POST","PUT"];M=Me.prototype;M.Oa=function(n){this.M=n};M.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bl.g(),this.C=this.u?Bp(this.u):Bp(Bl),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){jp(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=Z.FormData&&n instanceof Z.FormData,!(0<=Iv(SA,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aw(this),0<this.B&&((this.L=CA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=ud(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){jp(this,i)}};function CA(n){return Ks&&typeof n.timeout=="number"&&n.ontimeout!==void 0}M.ua=function(){typeof Jh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function jp(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,iw(n),hu(n)}function iw(n){n.F||(n.F=!0,at(n,"complete"),at(n,"error"))}M.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,at(this,"complete"),at(this,"abort"),hu(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hu(this,!0)),Me.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?ow(this):this.kb())};M.kb=function(){ow(this)};function ow(n){if(n.h&&typeof Jh<"u"&&(!n.C[1]||un(n)!=4||n.da()!=2)){if(n.v&&un(n)==4)ud(n.La,0,n);else if(at(n,"readystatechange"),un(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var s=String(n.I).match(Wv)[1]||null;!s&&Z.self&&Z.self.location&&(s=Z.self.location.protocol.slice(0,-1)),r=!TA.test(s?s.toLowerCase():"")}t=r}if(t)at(n,"complete"),at(n,"success");else{n.m=6;try{var i=2<un(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",iw(n)}}finally{hu(n)}}}}function hu(n,e){if(n.g){aw(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||at(n,"ready");try{t.onreadystatechange=r}catch{}}}function aw(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(Z.clearTimeout(n.A),n.A=null)}M.isActive=function(){return!!this.g};function un(n){return n.g?n.g.readyState:0}M.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),bA(e)}};function zp(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case sw:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function AA(n){const e={};n=(n.g&&2<=un(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(go(n[r]))continue;var t=JC(n[r]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[s]||[];e[s]=i,i.push(t)}KC(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cw(n){let e="";return td(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function gd(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=cw(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Se(n,e,t))}function Ai(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function uw(n){this.Ga=0,this.j=[],this.l=new su,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ai("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ai("baseRetryDelayMs",5e3,n),this.hb=Ai("retryDelaySeedMs",1e4,n),this.eb=Ai("forwardChannelMaxRetries",2,n),this.xa=Ai("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Jv(n&&n.concurrentRequestLimit),this.Ja=new _A,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=uw.prototype;M.ra=8;M.H=1;function md(n){if(lw(n),n.H==3){var e=n.W++,t=Nn(n.I);if(Se(t,"SID",n.K),Se(t,"RID",e),Se(t,"TYPE","terminate"),Xo(n,t),e=new Go(n,n.l,e),e.L=2,e.v=uu(Nn(t)),t=!1,Z.navigator&&Z.navigator.sendBeacon)try{t=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&Z.Image&&(new Image().src=e.v,t=!0),t||(e.g=vw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Wo(e)}mw(n)}function du(n){n.g&&(vd(n),n.g.cancel(),n.g=null)}function lw(n){du(n),n.u&&(Z.clearTimeout(n.u),n.u=null),pc(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&Z.clearTimeout(n.m),n.m=null)}function fu(n){if(!Zv(n.i)&&!n.m){n.m=!0;var e=n.Na;yo||Pv(),vo||(yo(),vo=!0),ad.add(e,n),n.C=0}}function xA(n,e){return ew(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ko(ht(n.Na,n,e),gw(n,n.C)),n.C++,!0)}M.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Go(this,this.l,n);let i=this.s;if(this.U&&(i?(i=Sv(i),Cv(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=hw(this,s,e),t=Nn(this.I),Se(t,"RID",n),Se(t,"CVER",22),this.F&&Se(t,"X-HTTP-Session-Id",this.F),Xo(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(cw(i)))+"&"+e:this.o&&gd(t,this.o,i)),fd(this.i,s),this.bb&&Se(t,"TYPE","init"),this.P?(Se(t,"$req",e),Se(t,"SID","null"),s.aa=!0,ql(s,t,null)):ql(s,t,e),this.H=2}}else this.H==3&&(n?Kp(this,n):this.j.length==0||Zv(this.i)||Kp(this))};function Kp(n,e){var t;e?t=e.m:t=n.W++;const r=Nn(n.I);Se(r,"SID",n.K),Se(r,"RID",t),Se(r,"AID",n.V),Xo(n,r),n.o&&n.s&&gd(r,n.o,n.s),t=new Go(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=hw(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),fd(n.i,t),ql(t,r,e)}function Xo(n,e){n.na&&td(n.na,function(t,r){Se(e,r,t)}),n.h&&Gv({},function(t,r){Se(e,r,t)})}function hw(n,e,t){t=Math.min(n.j.length,t);var r=n.h?ht(n.h.Va,n.h,n):null;e:{var s=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{IA(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function dw(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;yo||Pv(),vo||(yo(),vo=!0),ad.add(e,n),n.A=0}}function yd(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ko(ht(n.Ma,n),gw(n,n.A)),n.A++,!0)}M.Ma=function(){if(this.u=null,fw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ko(ht(this.jb,this),n)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),du(this),fw(this))};function vd(n){n.B!=null&&(Z.clearTimeout(n.B),n.B=null)}function fw(n){n.g=new Go(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Nn(n.wa);Se(e,"RID","rpc"),Se(e,"SID",n.K),Se(e,"AID",n.V),Se(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Se(e,"TO",n.qa),Se(e,"TYPE","xmlhttp"),Xo(n,e),n.o&&n.s&&gd(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=uu(Nn(e)),t.s=null,t.S=!0,jv(t,n)}M.ib=function(){this.v!=null&&(this.v=null,du(this),yd(this),yt(19))};function pc(n){n.v!=null&&(Z.clearTimeout(n.v),n.v=null)}function pw(n,e){var t=null;if(n.g==e){pc(n),vd(n),n.g=null;var r=2}else if(zl(n.i,e))t=e.F,tw(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;r=iu(),at(r,new Uv(r,t)),fu(n)}else dw(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&xA(n,e)||r==2&&yd(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Br(n,5);break;case 4:Br(n,10);break;case 3:Br(n,6);break;default:Br(n,2)}}}function gw(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Br(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=ht(n.pb,n);t||(t=new Hr("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||dc(t,"https"),uu(t)),EA(t.toString(),r)}else yt(2);n.H=0,n.h&&n.h.za(e),mw(n),lw(n)}M.pb=function(n){n?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function mw(n){if(n.H=0,n.ma=[],n.h){const e=nw(n.i);(e.length!=0||n.j.length!=0)&&(Mp(n.ma,e),Mp(n.ma,n.j),n.i.i.length=0,Zh(n.j),n.j.length=0),n.h.ya()}}function yw(n,e,t){var r=t instanceof Hr?Nn(t):new Hr(t);if(r.g!="")e&&(r.g=e+"."+r.g),fc(r,r.m);else{var s=Z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Hr(null);r&&dc(i,r),e&&(i.g=e),s&&fc(i,s),t&&(i.l=t),r=i}return t=n.F,e=n.Da,t&&e&&Se(r,t,e),Se(r,"VER",n.ra),Xo(n,r),r}function vw(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Me(new Qo({ob:!0})):new Me(n.va),e.Oa(n.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function ww(){}M=ww.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function gc(){if(Ks&&!(10<=Number($C)))throw Error("Environmental error: no available transport.")}gc.prototype.g=function(n,e){return new Ot(n,e)};function Ot(n,e){et.call(this),this.g=new uw(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!go(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new pi(this)}tt(Ot,et);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;yt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=yw(n,null,n.Y),fu(n)};Ot.prototype.close=function(){md(this.g)};Ot.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=od(n),n=t);e.j.push(new yA(e.fb++,n)),e.H==3&&fu(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,md(this.g),delete this.g,Ot.$.N.call(this)};function _w(n){hd.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}tt(_w,hd);function Iw(){dd.call(this),this.status=1}tt(Iw,dd);function pi(n){this.g=n}tt(pi,ww);pi.prototype.Ba=function(){at(this.g,"a")};pi.prototype.Aa=function(n){at(this.g,new _w(n))};pi.prototype.za=function(n){at(this.g,new Iw)};pi.prototype.ya=function(){at(this.g,"b")};function DA(){this.blockSize=-1}function Jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(Jt,DA);Jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ol(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)r[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var i=n.g[3],o=e+(i^t&(s^i))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(t^s))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^i)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~i))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}Jt.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=t;)ol(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){ol(this,r),s=0;break}}else for(;i<e;)if(r[s++]=n[i++],s==this.blockSize){ol(this,r),s=0;break}}this.h=s,this.i+=e};Jt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function ve(n,e){this.h=e;for(var t=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==e||(t[s]=i,r=!1)}this.g=t}var kA={};function wd(n){return-128<=n&&128>n?VC(n,function(e){return new ve([e|0],0>e?-1:0)}):new ve([n|0],0>n?-1:0)}function ln(n){if(isNaN(n)||!isFinite(n))return Ls;if(0>n)return it(ln(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Kl;return new ve(e,0)}function Ew(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return it(Ew(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ln(Math.pow(e,8)),r=Ls,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),e);8>i?(i=ln(Math.pow(e,i)),r=r.R(i).add(ln(o))):(r=r.R(t),r=r.add(ln(o)))}return r}var Kl=4294967296,Ls=wd(0),Hl=wd(1),Hp=wd(16777216);M=ve.prototype;M.ea=function(){if(Vt(this))return-it(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Kl+r)*e,e*=Kl}return n};M.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Sn(this))return"0";if(Vt(this))return"-"+it(this).toString(n);for(var e=ln(Math.pow(n,6)),t=this,r="";;){var s=yc(t,e).g;t=mc(t,s.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,Sn(t))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Sn(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Vt(n){return n.h==-1}M.X=function(n){return n=mc(this,n),Vt(n)?-1:Sn(n)?0:1};function it(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new ve(t,~n.h).add(Hl)}M.abs=function(){return Vt(this)?it(this):this};M.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,t[s]=o<<16|i}return new ve(t,t[t.length-1]&-2147483648?-1:0)};function mc(n,e){return n.add(it(e))}M.R=function(n){if(Sn(this)||Sn(n))return Ls;if(Vt(this))return Vt(n)?it(this).R(it(n)):it(it(this).R(n));if(Vt(n))return it(this.R(it(n)));if(0>this.X(Hp)&&0>n.X(Hp))return ln(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*r+2*s]+=o*c,Ea(t,2*r+2*s),t[2*r+2*s+1]+=i*c,Ea(t,2*r+2*s+1),t[2*r+2*s+1]+=o*a,Ea(t,2*r+2*s+1),t[2*r+2*s+2]+=i*a,Ea(t,2*r+2*s+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new ve(t,0)};function Ea(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function xi(n,e){this.g=n,this.h=e}function yc(n,e){if(Sn(e))throw Error("division by zero");if(Sn(n))return new xi(Ls,Ls);if(Vt(n))return e=yc(it(n),e),new xi(it(e.g),it(e.h));if(Vt(e))return e=yc(n,it(e)),new xi(it(e.g),e.h);if(30<n.g.length){if(Vt(n)||Vt(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Hl,r=e;0>=r.X(n);)t=Gp(t),r=Gp(r);var s=vs(t,1),i=vs(r,1);for(r=vs(r,2),t=vs(t,2);!Sn(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(t),i=o),r=vs(r,1),t=vs(t,1)}return e=mc(n,s.R(e)),new xi(s,e)}for(s=Ls;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ln(t),o=i.R(e);Vt(o)||0<o.X(n);)t-=r,i=ln(t),o=i.R(e);Sn(i)&&(i=Hl),s=s.add(i),n=mc(n,o)}return new xi(s,n)}M.gb=function(n){return yc(this,n).h};M.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new ve(t,this.h&n.h)};M.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new ve(t,this.h|n.h)};M.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new ve(t,this.h^n.h)};function Gp(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ve(t,n.h)}function vs(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,s=[],i=0;i<r;i++)s[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new ve(s,n.h)}gc.prototype.createWebChannel=gc.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;ou.NO_ERROR=0;ou.TIMEOUT=8;ou.HTTP_ERROR=6;Bv.COMPLETE="complete";$v.EventType=Ho;Ho.OPEN="a";Ho.CLOSE="b";Ho.ERROR="c";Ho.MESSAGE="d";et.prototype.listen=et.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;Jt.prototype.digest=Jt.prototype.l;Jt.prototype.reset=Jt.prototype.reset;Jt.prototype.update=Jt.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=ln;ve.fromString=Ew;var NA=function(){return new gc},RA=function(){return iu()},al=ou,PA=Bv,OA=us,Wp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},MA=Qo,ba=$v,LA=Me,FA=Jt,Fs=ve;const Qp="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let gi="9.23.0";/**
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
 */const cr=new Pc("@firebase/firestore");function Gl(){return cr.logLevel}function VA(n){cr.setLogLevel(n)}function C(n,...e){if(cr.logLevel<=ue.DEBUG){const t=e.map(_d);cr.debug(`Firestore (${gi}): ${n}`,...t)}}function Ve(n,...e){if(cr.logLevel<=ue.ERROR){const t=e.map(_d);cr.error(`Firestore (${gi}): ${n}`,...t)}}function Zt(n,...e){if(cr.logLevel<=ue.WARN){const t=e.map(_d);cr.warn(`Firestore (${gi}): ${n}`,...t)}}function _d(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${gi}) INTERNAL ASSERTION FAILED: `+n;throw Ve(e),new Error(e)}function j(n,e){n||U()}function UA(n,e){n||U()}function O(n,e){return n}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends _n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class bw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Je.UNAUTHENTICATED))}shutdown(){}}class $A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qA{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ze,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ze)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new bw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Je(e)}}class jA{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class zA{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new jA(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HA{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(j(typeof t.token=="string"),this.T=t.token,new KA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function GA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Tw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=GA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function Hs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Sw(n){return n+"\0"}/**
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
 */class Ne{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ne(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Ne(0,0))}static max(){return new q(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bo{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends bo{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const WA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends bo{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return WA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new E(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new E(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
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
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(le.fromString(e))}static fromName(e){return new R(le.fromString(e).popFirst(5))}static empty(){return new R(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new le(e.slice()))}}/**
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
 */class Cw{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Wl(n){return n.fields.find(e=>e.kind===2)}function kr(n){return n.fields.filter(e=>e.kind!==2)}Cw.UNKNOWN_ID=-1;class QA{constructor(e,t){this.fieldPath=e,this.kind=t}}class vc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new vc(0,Mt.min())}}function Aw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new Ne(t+1,0):new Ne(t,r));return new Mt(s,R.empty(),e)}function xw(n){return new Mt(n.readTime,n.key,-1)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(q.min(),R.empty(),-1)}static max(){return new Mt(q.max(),R.empty(),-1)}}function Id(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=R.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const Dw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _r(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==Dw)throw n;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof y?t:y.resolve(t)}catch(t){return y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):y.reject(t)}static resolve(e){return new y((t,r)=>{t(e)})}static reject(e){return new y((t,r)=>{r(e)})}static waitFor(e){return new y((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=y.resolve(!1);for(const r of e)t=t.next(s=>s?y.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new y((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new y((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */class pu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new Ze,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Yi(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const s=Ed(r.target.error);this.v.reject(new Yi(e,s))}}static open(e,t,r,s){try{return new pu(t,e.transaction(s,r))}catch(i){throw new Yi(t,i)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new XA(t)}}class Ht{constructor(e,t,r){this.name=e,this.version=t,this.V=r,Ht.S(Ge())===12.2&&Ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Pr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xm())return!1;if(Ht.C())return!0;const e=Ge(),t=Ht.S(e),r=0<t&&t<10,s=Ht.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Yi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new E(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Yi(e,o))},s.onupgradeneeded=i=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.O(o,s.transaction,i.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=pu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class YA{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Pr(this.L.delete())}}class Yi extends E{constructor(e,t){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ir(n){return n.name==="IndexedDbTransactionError"}class XA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Pr(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Pr(this.store.add(e))}get(e){return Pr(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Pr(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Pr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new y((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new y((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,t){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Z(e){const t=this.cursor({});return new y((r,s)=>{t.onerror=i=>{const o=Ed(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new y((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new YA(a),u=t(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));r.push(l)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>y.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pr(n){return new y((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Ed(r.target.error);t(s)}})}let Yp=!1;function Ed(n){const e=Ht.S(Ge());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yp||(Yp=!0,setTimeout(()=>{throw r},0)),r}}return n}class JA{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Ir(t)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await _r(t)}await this.et(6e4)})}}class ZA{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let s=t,i=!0;return y.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=xw(i);Id(o,r)>0&&(r=o)}),new Mt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Tt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Tt.ct=-1;function Jo(n){return n==null}function To(n){return n===0&&1/n==-1/0}function Nw(n){return typeof n=="number"&&Number.isInteger(n)&&!To(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function vt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xp(e)),e=ex(n.get(t),e);return Xp(e)}function ex(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Xp(n){return n+""}function hn(n){const e=n.length;if(j(e>=2),e===2)return j(n.charAt(0)===""&&n.charAt(1)===""),le.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&U(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:U()}i=o+2}return new le(r)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Jp=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
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
 */function $a(n,e){return[n,vt(e)]}function Rw(n,e,t){return[n,vt(e),t]}const tx={},nx=["prefixPath","collectionGroup","readTime","documentId"],rx=["prefixPath","collectionGroup","documentId"],sx=["collectionGroup","readTime","prefixPath","documentId"],ix=["canonicalId","targetId"],ox=["targetId","path"],ax=["path","targetId"],cx=["collectionId","parent"],ux=["indexId","uid"],lx=["uid","sequenceNumber"],hx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],dx=["indexId","uid","orderedDocumentKey"],fx=["userId","collectionPath","documentId"],px=["userId","collectionPath","largestBatchId"],gx=["userId","collectionGroup","largestBatchId"],Pw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mx=[...Pw,"documentOverlays"],Ow=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Mw=Ow,yx=[...Mw,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Ql extends kw{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function nt(n,e){const t=O(n);return Ht.M(t.ht,e)}/**
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
 */function Zp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ls(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class be{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ta(this.root,e,this.comparator,!0)}}class Ta{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new st(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(n,e,t,r,s){return this}insert(n,e,t){return new st(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eg(this.data.getIterator())}getIteratorFrom(e){return new eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ws(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class St{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new St([])}unionWith(e){let t=new Ae(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Fw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function vx(){return typeof atob<"u"}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Fw("Invalid base64 string: "+s):s}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(n){if(j(!!n),typeof n=="string"){let e=0;const t=wx.exec(n);if(j(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(n.seconds),nanos:Oe(n.nanos)}}function Oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function lr(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
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
 */function gu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bd(n){const e=n.mapValue.fields.__previous_value__;return gu(e)?bd(e):e}function So(n){const e=ur(n.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class _x{constructor(e,t,r,s,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class hr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},qa={nullValue:"NULL_VALUE"};function Jr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gu(n)?4:Vw(n)?9007199254740991:10:U()}function vn(n,e){if(n===e)return!0;const t=Jr(n);if(t!==Jr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return So(n).isEqual(So(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=ur(r.timestampValue),o=ur(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return lr(r.bytesValue).isEqual(lr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return Oe(r.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Oe(r.integerValue)===Oe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Oe(r.doubleValue),o=Oe(s.doubleValue);return i===o?To(i)===To(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Hs(n.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Zp(i)!==Zp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!vn(i[a],o[a])))return!1;return!0}(n,e);default:return U()}}function Co(n,e){return(n.values||[]).find(t=>vn(t,e))!==void 0}function dr(n,e){if(n===e)return 0;const t=Jr(n),r=Jr(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Oe(s.integerValue||s.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return tg(n.timestampValue,e.timestampValue);case 4:return tg(So(n),So(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(s,i){const o=lr(s),a=lr(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ne(o[c],a[c]);if(u!==0)return u}return ne(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ne(Oe(s.latitude),Oe(i.latitude));return o!==0?o:ne(Oe(s.longitude),Oe(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=dr(o[c],a[c]);if(u)return u}return ne(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Zn.mapValue&&i===Zn.mapValue)return 0;if(s===Zn.mapValue)return 1;if(i===Zn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ne(a[l],u[l]);if(h!==0)return h;const d=dr(o[a[l]],c[u[l]]);if(d!==0)return d}return ne(a.length,u.length)}(n.mapValue,e.mapValue);default:throw U()}}function tg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=ur(n),r=ur(e),s=ne(t.seconds,r.seconds);return s!==0?s:ne(t.nanos,r.nanos)}function Gs(n){return Yl(n)}function Yl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=ur(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?lr(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,R.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Yl(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Yl(r.fields[a])}`;return i+"}"}(n.mapValue):U();var e,t}function Zr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xl(n){return!!n&&"integerValue"in n}function Ao(n){return!!n&&"arrayValue"in n}function ng(n){return!!n&&"nullValue"in n}function rg(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ja(n){return!!n&&"mapValue"in n}function Xi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ls(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Ix(n){return"nullValue"in n?qa:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Zr(hr.empty(),R.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:U()}function Ex(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Zr(hr.empty(),R.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Zn:U()}function sg(n,e){const t=dr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ig(n,e){const t=dr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ja(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(t)}setAll(e){let t=Ue.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Xi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ja(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ls(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ot(Xi(this.value))}}function Uw(n){const e=[];return ls(n.fields,(t,r)=>{const s=new Ue([t]);if(ja(r)){const i=Uw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
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
 */class Ce{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),q.min(),ot.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,q.min(),q.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,q.min(),q.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class fr{constructor(e,t){this.position=e,this.inclusive=t}}function og(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),t.key):r=dr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ag(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function bx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Bw{}class ae extends Bw{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Tx(e,t,r):t==="array-contains"?new Ax(e,r):t==="in"?new Hw(e,r):t==="not-in"?new xx(e,r):t==="array-contains-any"?new Dx(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Sx(e,r):new Cx(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(dr(t,this.value)):t!==null&&Jr(this.value)===Jr(t)&&this.matchesComparison(dr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class me extends Bw{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new me(e,t)}matches(e){return Ws(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ws(n){return n.op==="and"}function Jl(n){return n.op==="or"}function Td(n){return $w(n)&&Ws(n)}function $w(n){for(const e of n.filters)if(e instanceof me)return!1;return!0}function Zl(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+Gs(n.value);if(Td(n))return n.filters.map(e=>Zl(e)).join(",");{const e=n.filters.map(t=>Zl(t)).join(",");return`${n.op}(${e})`}}function qw(n,e){return n instanceof ae?function(t,r){return r instanceof ae&&t.op===r.op&&t.field.isEqual(r.field)&&vn(t.value,r.value)}(n,e):n instanceof me?function(t,r){return r instanceof me&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((s,i,o)=>s&&qw(i,r.filters[o]),!0):!1}(n,e):void U()}function jw(n,e){const t=n.filters.concat(e);return me.create(t,n.op)}function zw(n){return n instanceof ae?function(e){return`${e.field.canonicalString()} ${e.op} ${Gs(e.value)}`}(n):n instanceof me?function(e){return e.op.toString()+" {"+e.getFilters().map(zw).join(" ,")+"}"}(n):"Filter"}class Tx extends ae{constructor(e,t,r){super(e,t,r),this.key=R.fromName(r.referenceValue)}matches(e){const t=R.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sx extends ae{constructor(e,t){super(e,"in",t),this.keys=Kw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cx extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Kw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>R.fromName(r.referenceValue))}class Ax extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&Co(t.arrayValue,this.value)}}class Hw extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Co(this.value.arrayValue,t)}}class xx extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Co(this.value.arrayValue,t)}}class Dx extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
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
 */class kx{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function eh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new kx(n,e,t,r,s,i,o)}function es(n){const e=O(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Gs(r)).join(",")),e.dt=t}return e.dt}function Zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ag(n.startAt,e.startAt)&&ag(n.endAt,e.endAt)}function wc(n){return R.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _c(n,e){return n.filters.filter(t=>t instanceof ae&&t.field.isEqual(e))}function cg(n,e,t){let r=qa,s=!0;for(const i of _c(n,e)){let o=qa,a=!0;switch(i.op){case"<":case"<=":o=Ix(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=qa}sg({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];sg({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function ug(n,e,t){let r=Zn,s=!0;for(const i of _c(n,e)){let o=Zn,a=!0;switch(i.op){case">=":case">":o=Ex(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Zn}ig({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];ig({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class On{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Gw(n,e,t,r,s,i,o,a){return new On(n,e,t,r,s,i,o,a)}function mi(n){return new On(n)}function lg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sd(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function mu(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Cd(n){return n.collectionGroup!==null}function Gr(n){const e=O(n);if(e.wt===null){e.wt=[];const t=mu(e),r=Sd(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Vs(t)),e.wt.push(new Vs(Ue.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Vs(Ue.keyField(),i))}}}return e.wt}function xt(n){const e=O(n);if(!e._t)if(e.limitType==="F")e._t=eh(e.path,e.collectionGroup,Gr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Gr(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Vs(i.field,o))}const r=e.endAt?new fr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new fr(e.startAt.position,e.startAt.inclusive):null;e._t=eh(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e._t}function th(n,e){e.getFirstInequalityField(),mu(n);const t=n.filters.concat([e]);return new On(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ic(n,e,t){return new On(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ea(n,e){return Zo(xt(n),xt(e))&&n.limitType===e.limitType}function Ww(n){return`${es(xt(n))}|lt:${n.limitType}`}function nh(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>zw(r)).join(", ")}]`),Jo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Gs(r)).join(",")),`Target(${t})`}(xt(n))}; limitType=${n.limitType})`}function ta(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):R.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of Gr(t))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=og(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,Gr(t),r)||t.endAt&&!function(s,i,o){const a=og(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,Gr(t),r))}(n,e)}function Qw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yw(n){return(e,t)=>{let r=!1;for(const s of Gr(n)){const i=Nx(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Nx(n,e,t){const r=n.field.isKeyField()?R.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?dr(a,c):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Lw(this.inner)}size(){return this.innerSize}}/**
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
 */const Rx=new be(R.comparator);function Ct(){return Rx}const Xw=new be(R.comparator);function $i(...n){let e=Xw;for(const t of n)e=e.insert(t.key,t);return e}function Jw(n){let e=Xw;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function dn(){return Ji()}function Zw(){return Ji()}function Ji(){return new Er(n=>n.toString(),(n,e)=>n.isEqual(e))}const Px=new be(R.comparator),Ox=new Ae(R.comparator);function re(...n){let e=Ox;for(const t of n)e=e.add(t);return e}const Mx=new Ae(ne);function Ad(){return Mx}/**
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
 */function e_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function t_(n){return{integerValue:""+n}}function n_(n,e){return Nw(e)?t_(e):e_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class yu{constructor(){this._=void 0}}function Lx(n,e,t){return n instanceof Qs?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&gu(s)&&(s=bd(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof ts?s_(n,e):n instanceof ns?i_(n,e):function(r,s){const i=r_(r,s),o=hg(i)+hg(r.gt);return Xl(i)&&Xl(r.gt)?t_(o):e_(r.serializer,o)}(n,e)}function Fx(n,e,t){return n instanceof ts?s_(n,e):n instanceof ns?i_(n,e):t}function r_(n,e){return n instanceof Ys?Xl(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Qs extends yu{}class ts extends yu{constructor(e){super(),this.elements=e}}function s_(n,e){const t=o_(e);for(const r of n.elements)t.some(s=>vn(s,r))||t.push(r);return{arrayValue:{values:t}}}class ns extends yu{constructor(e){super(),this.elements=e}}function i_(n,e){let t=o_(e);for(const r of n.elements)t=t.filter(s=>!vn(s,r));return{arrayValue:{values:t}}}class Ys extends yu{constructor(e,t){super(),this.serializer=e,this.gt=t}}function hg(n){return Oe(n.integerValue||n.doubleValue)}function o_(n){return Ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class na{constructor(e,t){this.field=e,this.transform=t}}function Vx(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof ts&&r instanceof ts||t instanceof ns&&r instanceof ns?Hs(t.elements,r.elements,vn):t instanceof Ys&&r instanceof Ys?vn(t.gt,r.gt):t instanceof Qs&&r instanceof Qs}(n.transform,e.transform)}class Ux{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vu{}function a_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vi(n.key,ke.none()):new yi(n.key,n.data,ke.none());{const t=n.data,r=ot.empty();let s=new Ae(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mn(n.key,r,new St(s.toArray()),ke.none())}}function Bx(n,e,t){n instanceof yi?function(r,s,i){const o=r.value.clone(),a=fg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Mn?function(r,s,i){if(!za(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=fg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(c_(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Zi(n,e,t,r){return n instanceof yi?function(s,i,o,a){if(!za(s.precondition,i))return o;const c=s.value.clone(),u=pg(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mn?function(s,i,o,a){if(!za(s.precondition,i))return o;const c=pg(s.fieldTransforms,a,i),u=i.data;return u.setAll(c_(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(s,i,o){return za(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function $x(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=r_(r.transform,s||null);i!=null&&(t===null&&(t=ot.empty()),t.set(r.field,i))}return t||null}function dg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Hs(t,r,(s,i)=>Vx(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yi extends vu{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mn extends vu{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function c_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function fg(n,e,t){const r=new Map;j(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Fx(o,a,t[s]))}return r}function pg(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Lx(i,o,e))}return r}class vi extends vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xd extends vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dd{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Bx(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=a_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),re())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(t,r)=>dg(t,r))&&Hs(this.baseMutations,e.baseMutations,(t,r)=>dg(t,r))}}class kd{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){j(e.mutations.length===r.length);let s=Px;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kd(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Nd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class qx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,ce;function u_(n){switch(n){default:return U();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function l_(n){if(n===void 0)return Ve("GRPC error has no .code"),v.UNKNOWN;switch(n){case Ke.OK:return v.OK;case Ke.CANCELLED:return v.CANCELLED;case Ke.UNKNOWN:return v.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return v.INTERNAL;case Ke.UNAVAILABLE:return v.UNAVAILABLE;case Ke.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ke.NOT_FOUND:return v.NOT_FOUND;case Ke.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ke.ABORTED:return v.ABORTED;case Ke.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ke.DATA_LOSS:return v.DATA_LOSS;default:return U()}}(ce=Ke||(Ke={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Rd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Sa}static getOrCreateInstance(){return Sa===null&&(Sa=new Rd),Sa}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Sa=null;/**
 * @license
 * Copyright 2023 Google LLC
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
 */function h_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const jx=new Fs([4294967295,4294967295],0);function gg(n){const e=h_().encode(n),t=new FA;return t.update(e),new Uint8Array(t.digest())}function mg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fs([t,r],0),new Fs([s,i],0)]}class Pd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qi(`Invalid padding: ${t}`);if(r<0)throw new qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qi(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Fs.fromNumber(this.It)}Et(e,t,r){let s=e.add(t.multiply(Fs.fromNumber(r)));return s.compare(jx)===1&&(s=new Fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=gg(e),[r,s]=mg(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pd(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=gg(e),[r,s]=mg(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ra{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ra(q.min(),s,new be(ne),Ct(),re())}}class sa{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new sa(r,t,re(),re(),re())}}/**
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
 */class Ka{constructor(e,t,r,s){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=s}}class d_{constructor(e,t){this.targetId=e,this.Vt=t}}class f_{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class yg{constructor(){this.St=0,this.Dt=wg(),this.Ct=Qe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=re(),t=re(),r=re();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new sa(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=wg()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class zx{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ct(),this.zt=vg(),this.Wt=new be(ne)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,s)=>{this.te(s)&&t(s)})}ne(e){var t;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(wc(o))if(s===0){const a=new R(o.path);this.Yt(r,a,Ce.newNoDocument(a,q.min()))}else j(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=Rd.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,p,m,w,T,x;const F={localCacheCount:l,existenceFilterCount:h.count},D=h.unchangedNames;return D&&(F.bloomFilter={applied:u===0,hashCount:(d=D==null?void 0:D.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(m=(p=D==null?void 0:D.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&w!==void 0?w:0,padding:(x=(T=D==null?void 0:D.bits)===null||T===void 0?void 0:T.padding)!==null&&x!==void 0?x:0}),F}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=lr(i).toUint8Array()}catch(l){if(l instanceof Fw)return Zt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Pd(c,o,a)}catch(l){return Zt(l instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:s!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const t=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&wc(a.target)){const c=new R(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ce.newNoDocument(c,e))}i.Mt&&(t.set(o,i.Ot()),i.Ft())}});let r=re();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new ra(e,t,this.Wt,this.jt,r);return this.jt=Ct(),this.zt=vg(),this.Wt=new be(ne),s}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new yg,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Ae(ne),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new yg),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function vg(){return new be(R.comparator)}function wg(){return new be(R.comparator)}const Kx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Gx=(()=>({and:"AND",or:"OR"}))();class Wx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rh(n,e){return n.useProto3Json||Jo(e)?e:{value:e}}function Xs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Qx(n,e){return Xs(n,e.toTimestamp())}function $e(n){return j(!!n),q.fromTimestamp(function(e){const t=ur(e);return new Ne(t.seconds,t.nanos)}(n))}function Od(n,e){return function(t){return new le(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function g_(n){const e=le.fromString(n);return j(T_(e)),e}function xo(n,e){return Od(n.databaseId,e.path)}function gn(n,e){const t=g_(e);if(t.get(1)!==n.databaseId.projectId)throw new E(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new R(y_(t))}function sh(n,e){return Od(n.databaseId,e)}function m_(n){const e=g_(n);return e.length===4?le.emptyPath():y_(e)}function Do(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function y_(n){return j(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _g(n,e,t){return{name:xo(n,e),fields:t.value.mapValue.fields}}function v_(n,e,t){const r=gn(n,e.name),s=$e(e.updateTime),i=e.createTime?$e(e.createTime):q.min(),o=new ot({mapValue:{fields:e.fields}}),a=Ce.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Yx(n,e){return"found"in e?function(t,r){j(!!r.found),r.found.name,r.found.updateTime;const s=gn(t,r.found.name),i=$e(r.found.updateTime),o=r.found.createTime?$e(r.found.createTime):q.min(),a=new ot({mapValue:{fields:r.found.fields}});return Ce.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){j(!!r.missing),j(!!r.readTime);const s=gn(t,r.missing),i=$e(r.readTime);return Ce.newNoDocument(s,i)}(n,e):U()}function Xx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(j(u===void 0||typeof u=="string"),Qe.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),Qe.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:l_(c.code);return new E(u,c.message||"")}(o);t=new f_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gn(n,r.document.name),i=$e(r.document.updateTime),o=r.document.createTime?$e(r.document.createTime):q.min(),a=new ot({mapValue:{fields:r.document.fields}}),c=Ce.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Ka(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gn(n,r.document),i=r.readTime?$e(r.readTime):q.min(),o=Ce.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gn(n,r.document),i=r.removedTargetIds||[];t=new Ka([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qx(s,i),a=r.targetId;t=new d_(a,o)}}return t}function ko(n,e){let t;if(e instanceof yi)t={update:_g(n,e.key,e.value)};else if(e instanceof vi)t={delete:xo(n,e.key)};else if(e instanceof Mn)t={update:_g(n,e.key,e.data),updateMask:rD(e.fieldMask)};else{if(!(e instanceof xd))return U();t={verify:xo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Qs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ts)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ns)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Qx(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(n,e.precondition)),t}function ih(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ke.updateTime($e(s.updateTime)):s.exists!==void 0?ke.exists(s.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new Qs;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ts(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new ns(u)}else"increment"in o?a=new Ys(i,o.increment):U();const c=Ue.fromServerFormat(o.fieldPath);return new na(c,a)}(n,s)):[];if(e.update){e.update.name;const s=gn(n,e.update.name),i=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new St(c.map(u=>Ue.fromServerFormat(u)))}(e.updateMask);return new Mn(s,i,o,t,r)}return new yi(s,i,t,r)}if(e.delete){const s=gn(n,e.delete);return new vi(s,t)}if(e.verify){const s=gn(n,e.verify);return new xd(s,t)}return U()}function Jx(n,e){return n&&n.length>0?(j(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?$e(r.updateTime):$e(s);return i.isEqual(q.min())&&(i=$e(s)),new Ux(i,r.transformResults||[])}(t,e))):[]}function w_(n,e){return{documents:[sh(n,e.path)]}}function __(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=sh(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=sh(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return b_(me.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ts(l.field),direction:eD(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=rh(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function I_(n){let e=m_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){j(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=E_(l);return h instanceof me&&Td(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Vs(Ss(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Jo(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new fr(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new fr(d,h)}(t.endAt)),Gw(e,s,o,i,a,"F",c,u)}function Zx(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function E_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ss(e.unaryFilter.field);return ae.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Ss(e.unaryFilter.field);return ae.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(e.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ss(e.unaryFilter.field);return ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return ae.create(Ss(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return me.create(e.compositeFilter.filters.map(t=>E_(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function eD(n){return Kx[n]}function tD(n){return Hx[n]}function nD(n){return Gx[n]}function Ts(n){return{fieldPath:n.canonicalString()}}function Ss(n){return Ue.fromServerFormat(n.fieldPath)}function b_(n){return n instanceof ae?function(e){if(e.op==="=="){if(rg(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NAN"}};if(ng(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(rg(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NAN"}};if(ng(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(e.field),op:tD(e.op),value:e.value}}}(n):n instanceof me?function(e){const t=e.getFilters().map(r=>b_(r));return t.length===1?t[0]:{compositeFilter:{op:nD(e.op),filters:t}}}(n):U()}function rD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function T_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Cn{constructor(e,t,r,s,i=q.min(),o=q.min(),a=Qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class S_{constructor(e){this.fe=e}}function sD(n,e){let t;if(e.document)t=v_(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=R.fromSegments(e.noDocument.path),s=ss(e.noDocument.readTime);t=Ce.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=R.fromSegments(e.unknownDocument.path),s=ss(e.unknownDocument.version);t=Ce.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(r){const s=new Ne(r[0],r[1]);return q.fromTimestamp(s)}(e.readTime)),t}function Ig(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ec(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:xo(s,i.key),fields:i.data.value.mapValue.fields,updateTime:Xs(s,i.version.toTimestamp()),createTime:Xs(s,i.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:rs(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:t.path.toArray(),version:rs(e.version)}}return r}function Ec(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function rs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ss(n){const e=new Ne(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function Or(n,e){const t=(e.baseMutations||[]).map(i=>ih(n.fe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>ih(n.fe,i)),s=Ne.fromMillis(e.localWriteTimeMs);return new Dd(e.batchId,s,t,r)}function ji(n){const e=ss(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ss(n.lastLimboFreeSnapshotVersion):q.min();let r;var s;return n.query.documents!==void 0?(j((s=n.query).documents.length===1),r=xt(mi(m_(s.documents[0])))):r=function(i){return xt(I_(i))}(n.query),new Cn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Qe.fromBase64String(n.resumeToken))}function C_(n,e){const t=rs(e.snapshotVersion),r=rs(e.lastLimboFreeSnapshotVersion);let s;s=wc(e.target)?w_(n.fe,e.target):__(n.fe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:es(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Md(n){const e=I_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ic(e,e.limit,"L"):e}function cl(n,e){return new Nd(e.largestBatchId,ih(n.fe,e.overlayMutation))}function Eg(n,e){const t=e.path.lastSegment();return[n,vt(e.path.popLast()),t]}function bg(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:rs(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class iD{getBundleMetadata(e,t){return Tg(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:ss(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return Tg(e).put({bundleId:(r=t).id,createTime:rs($e(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Sg(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:Md(s.bundledQuery),readTime:ss(s.readTime)};var s})}saveNamedQuery(e,t){return Sg(e).put(function(r){return{name:r.name,readTime:rs($e(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Tg(n){return nt(n,"bundles")}function Sg(n){return nt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class wu{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new wu(e,r)}getOverlay(e,t){return Di(e).get(Eg(this.userId,t)).next(r=>r?cl(this.serializer,r):null)}getOverlays(e,t){const r=dn();return y.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new Nd(t,o);s.push(this.we(e,a))}),y.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(vt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Di(e).J("collectionPathOverlayIndex",a))}),y.waitFor(i)}getOverlaysForCollection(e,t,r){const s=dn(),i=vt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Di(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=cl(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=dn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Di(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=cl(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}we(e,t){return Di(e).put(function(r,s,i){const[o,a,c]=Eg(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:ko(r.fe,i.mutation)}}(this.serializer,this.userId,t))}}function Di(n){return nt(n,"documentOverlays")}/**
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
 */class Mr{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Oe(e.integerValue));else if("doubleValue"in e){const r=Oe(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),To(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(lr(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?Vw(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):U()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const s of Object.keys(r))this.Te(s,t),this.me(r[s],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const s of r)this.me(s,t)}ve(e,t){this.ye(t,37),R.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Mr.Ve=new Mr;function oD(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Cg(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=oD(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class aD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const s=t.codePointAt(0);this.De(240|s>>>18),this.De(128|63&s>>>12),this.De(128|63&s>>>6),this.De(128|63&s)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const s=t.codePointAt(0);this.Ne(240|s>>>18),this.Ne(128|63&s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s)}}this.ke()}Oe(e){const t=this.Fe(e),r=Cg(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Le(e){const t=this.Fe(e),r=Cg(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class cD{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class uD{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class ki{constructor(){this.je=new aD,this.ze=new cD(this.je),this.We=new uD(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Lr{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Lr(this.indexId,this.documentKey,this.arrayValue,r)}}function Bn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Ag(n.arrayValue,e.arrayValue),t!==0?t:(t=Ag(n.directionalValue,e.directionalValue),t!==0?t:R.comparator(n.documentKey,e.documentKey)))}function Ag(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class lD{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){j(e.collectionGroup===this.collectionId);const t=Wl(e);if(t!==void 0&&!this.en(t))return!1;const r=kr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.en(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Ze!==void 0){if(!s.has(this.Ze.field.canonicalString())){const a=r[i];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function A_(n){var e,t;if(j(n instanceof ae||n instanceof me),n instanceof ae){if(n instanceof Hw){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ae.create(n.field,"==",i)))||[];return me.create(s,"or")}return n}const r=n.filters.map(s=>A_(s));return me.create(r,n.op)}function hD(n){if(n.getFilters().length===0)return[];const e=ch(A_(n));return j(x_(e)),oh(e)||ah(e)?[e]:e.getFilters()}function oh(n){return n instanceof ae}function ah(n){return n instanceof me&&Td(n)}function x_(n){return oh(n)||ah(n)||function(e){if(e instanceof me&&Jl(e)){for(const t of e.getFilters())if(!oh(t)&&!ah(t))return!1;return!0}return!1}(n)}function ch(n){if(j(n instanceof ae||n instanceof me),n instanceof ae)return n;if(n.filters.length===1)return ch(n.filters[0]);const e=n.filters.map(r=>ch(r));let t=me.create(e,n.op);return t=bc(t),x_(t)?t:(j(t instanceof me),j(Ws(t)),j(t.filters.length>1),t.filters.reduce((r,s)=>Ld(r,s)))}function Ld(n,e){let t;return j(n instanceof ae||n instanceof me),j(e instanceof ae||e instanceof me),t=n instanceof ae?e instanceof ae?function(r,s){return me.create([r,s],"and")}(n,e):xg(n,e):e instanceof ae?xg(e,n):function(r,s){if(j(r.filters.length>0&&s.filters.length>0),Ws(r)&&Ws(s))return jw(r,s.getFilters());const i=Jl(r)?r:s,o=Jl(r)?s:r,a=i.filters.map(c=>Ld(c,o));return me.create(a,"or")}(n,e),bc(t)}function xg(n,e){if(Ws(e))return jw(e,n.getFilters());{const t=e.filters.map(r=>Ld(n,r));return me.create(t,"or")}}function bc(n){if(j(n instanceof ae||n instanceof me),n instanceof ae)return n;const e=n.getFilters();if(e.length===1)return bc(e[0]);if($w(n))return n;const t=e.map(s=>bc(s)),r=[];return t.forEach(s=>{s instanceof ae?r.push(s):s instanceof me&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:me.create(r,n.op)}/**
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
 */class dD{constructor(){this.rn=new Fd}addToCollectionParentIndex(e,t){return this.rn.add(t),y.resolve()}getCollectionParents(e,t){return y.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return y.resolve()}deleteFieldIndex(e,t){return y.resolve()}getDocumentsMatchingTarget(e,t){return y.resolve(null)}getIndexType(e,t){return y.resolve(0)}getFieldIndexes(e,t){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,t){return y.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return y.resolve(Mt.min())}updateCollectionGroup(e,t,r){return y.resolve()}updateIndexEntries(e,t){return y.resolve()}}class Fd{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ae(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ae(le.comparator)).toArray()}}/**
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
 */const Ca=new Uint8Array(0);class fD{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Fd,this.un=new Er(r=>es(r),(r,s)=>Zo(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const i={collectionId:r,parent:vt(s)};return Dg(e).put(i)}return y.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Sw(t),""],!1,!0);return Dg(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(hn(o.parent))}return r})}addFieldIndex(e,t){const r=Aa(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Ri(e);return i.next(a=>{o.put(bg(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Aa(e),s=Ri(e),i=Ni(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Ni(e);let s=!0;const i=new Map;return y.forEach(this.cn(t),o=>this.an(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=re();const a=[];return y.forEach(i,(c,u)=>{var l;C("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`} to execute ${es(t)}`);const h=function(D,z){const Q=Wl(z);if(Q===void 0)return null;for(const Y of _c(D,Q.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(u,c),d=function(D,z){const Q=new Map;for(const Y of kr(z))for(const W of _c(D,Y.fieldPath))switch(W.op){case"==":case"in":Q.set(Y.fieldPath.canonicalString(),W.value);break;case"not-in":case"!=":return Q.set(Y.fieldPath.canonicalString(),W.value),Array.from(Q.values())}return null}(u,c),p=function(D,z){const Q=[];let Y=!0;for(const W of kr(z)){const X=W.kind===0?cg(D,W.fieldPath,D.startAt):ug(D,W.fieldPath,D.startAt);Q.push(X.value),Y&&(Y=X.inclusive)}return new fr(Q,Y)}(u,c),m=function(D,z){const Q=[];let Y=!0;for(const W of kr(z)){const X=W.kind===0?ug(D,W.fieldPath,D.endAt):cg(D,W.fieldPath,D.endAt);Q.push(X.value),Y&&(Y=X.inclusive)}return new fr(Q,Y)}(u,c),w=this.hn(c,u,p),T=this.hn(c,u,m),x=this.ln(c,u,d),F=this.fn(c.indexId,h,w,p.inclusive,T,m.inclusive,x);return y.forEach(F,D=>r.H(D,t.limit).next(z=>{z.forEach(Q=>{const Y=R.fromSegments(Q.documentKey);o.has(Y)||(o=o.add(Y),a.push(Y))})}))}).next(()=>a)}return y.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=hD(me.create(e.filters,"and")).map(r=>eh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/u]):Ca,p=this.wn(e,d,r[h%u],s),m=this._n(e,d,i[h%u],o),w=a.map(T=>this.wn(e,d,T,!0));l.push(...this.createRange(p,m,w))}return l}wn(e,t,r,s){const i=new Lr(e,R.empty(),t,r);return s?i:i.Je()}_n(e,t,r,s){const i=new Lr(e,R.empty(),t,r);return s?i.Je():i}an(e,t){const r=new lD(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.cn(t);return y.forEach(s,i=>this.an(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Ae(Ue.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(t)&&s.length>1&&r===2?1:r)}mn(e,t){const r=new ki;for(const s of kr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.He(s.kind);Mr.Ve._e(i,o)}return r.Qe()}dn(e){const t=new ki;return Mr.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new ki;return Mr.Ve._e(Zr(this.databaseId,t),r.He(function(s){const i=kr(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let s=[];s.push(new ki);let i=0;for(const o of kr(e)){const a=r[i++];for(const c of s)if(this.yn(t,o.fieldPath)&&Ao(a))s=this.pn(s,o,a);else{const u=c.He(o.kind);Mr.Ve._e(a,u)}}return this.In(s)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new ki;c.seed(a.Qe()),Mr.Ve._e(o,c.He(t.kind)),i.push(c)}return i}yn(e,t){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Aa(e),s=Ri(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(i=>{const o=[];return y.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new vc(l.sequenceNumber,new Mt(ss(l.readTime),new R(hn(l.documentKey)),l.largestBatchId)):vc.empty(),d=u.fields.map(([p,m])=>new QA(Ue.fromServerFormat(p),m));return new Cw(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ne(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Aa(e),i=Ri(e);return this.Tn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>y.forEach(a,c=>i.put(bg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return y.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),y.forEach(a,c=>this.En(e,s,c).next(u=>{const l=this.An(i,c);return u.isEqual(l)?y.resolve():this.vn(e,i,c,u,l)}))))})}Rn(e,t,r,s){return Ni(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,s){return Ni(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const s=Ni(e);let i=new Ae(Bn);return s.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{i=i.add(new Lr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}An(e,t){let r=new Ae(Bn);const s=this.mn(t,e);if(s==null)return r;const i=Wl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ao(o))for(const a of o.arrayValue.values||[])r=r.add(new Lr(t.indexId,e.key,this.dn(a),s))}else r=r.add(new Lr(t.indexId,e.key,Ca,s));return r}vn(e,t,r,s,i){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let m=ws(d),w=ws(p);for(;m||w;){let T=!1,x=!1;if(m&&w){const F=u(m,w);F<0?x=!0:F>0&&(T=!0)}else m!=null?x=!0:T=!0;T?(l(w),w=ws(p)):x?(h(m),m=ws(d)):(m=ws(d),w=ws(p))}}(s,i,Bn,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),y.waitFor(o)}Tn(e){let t=1;return Ri(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Bn(o,a)).filter((o,a,c)=>!a||Bn(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Bn(o,e),c=Bn(o,t);if(a===0)s[0]=e.Je();else if(a>0&&c<0)s.push(o),s.push(o.Je());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.bn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ca,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ca,[]];i.push(IDBKeyRange.bound(a,c))}return i}bn(e,t){return Bn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kg)}getMinOffset(e,t){return y.mapArray(this.cn(t),r=>this.an(e,r).next(s=>s||U())).next(kg)}}function Dg(n){return nt(n,"collectionParents")}function Ni(n){return nt(n,"indexEntries")}function Aa(n){return nt(n,"indexConfiguration")}function Ri(n){return nt(n,"indexState")}function kg(n){j(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Id(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Mt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function D_(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{j(a===1)}));const u=[];for(const l of t.mutations){const h=Rw(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return y.waitFor(i).next(()=>u)}function Tc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(41943040,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);class _u{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Vn={}}static de(e,t,r,s){j(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new _u(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $n(e).X({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Cs(e),o=$n(e);return o.add({}).next(a=>{j(typeof a=="number");const c=new Dd(a,t,r,s),u=function(d,p,m){const w=m.baseMutations.map(x=>ko(d.fe,x)),T=m.mutations.map(x=>ko(d.fe,x));return{userId:p,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:w,mutations:T}}(this.serializer,this.userId,c),l=[];let h=new Ae((d,p)=>ne(d.canonicalString(),p.canonicalString()));for(const d of s){const p=Rw(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,tx))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return $n(e).get(t).next(r=>r?(j(r.userId===this.userId),Or(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?y.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Vn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return $n(e).X({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(j(a.batchId>=r),i=Or(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return $n(e).X({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return $n(e).j("userMutationsIndex",t).next(r=>r.map(s=>Or(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=$a(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Cs(e).X({range:s},(o,a,c)=>{const[u,l,h]=o,d=hn(l);if(u===this.userId&&t.path.isEqual(d))return $n(e).get(h).next(p=>{if(!p)throw U();j(p.userId===this.userId),i.push(Or(this.serializer,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(ne);const s=[];return t.forEach(i=>{const o=$a(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Cs(e).X({range:a},(u,l,h)=>{const[d,p,m]=u,w=hn(p);d===this.userId&&i.path.isEqual(w)?r=r.add(m):h.done()});s.push(c)}),y.waitFor(s).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=$a(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Ae(ne);return Cs(e).X({range:o},(c,u,l)=>{const[h,d,p]=c,m=hn(d);h===this.userId&&r.isPrefixOf(m)?m.length===s&&(a=a.add(p)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],s=[];return t.forEach(i=>{s.push($n(e).get(i).next(o=>{if(o===null)throw U();j(o.userId===this.userId),r.push(Or(this.serializer,o))}))}),y.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return D_(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),y.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return y.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Cs(e).X({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=hn(i[1]);s.push(c)}else a.done()}).next(()=>{j(s.length===0)})})}containsKey(e,t){return k_(e,this.userId,t)}xn(e){return N_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function k_(n,e,t){const r=$a(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Cs(n).X({range:i,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function $n(n){return nt(n,"mutations")}function Cs(n){return nt(n,"documentMutations")}function N_(n){return nt(n,"mutationQueues")}/**
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
 */class is{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new is(0)}static Mn(){return new is(-1)}}/**
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
 */class pD{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new is(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>q.fromTimestamp(new Ne(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.On(e,s)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_s(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return _s(e).X((o,a)=>{const c=ji(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(i)).next(()=>s)}forEachTarget(e,t){return _s(e).X((r,s)=>{const i=ji(s);t(i)})}$n(e){return Rg(e).get("targetGlobalKey").next(t=>(j(t!==null),t))}On(e,t){return Rg(e).put("targetGlobalKey",t)}Fn(e,t){return _s(e).put(C_(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=es(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return _s(e).X({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=ji(a);Zo(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Xn(e);return t.forEach(o=>{const a=vt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),y.waitFor(s)}removeMatchingKeys(e,t,r){const s=Xn(e);return y.forEach(t,i=>{const o=vt(i.path);return y.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Xn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Xn(e);let i=re();return s.X({range:r,Y:!0},(o,a,c)=>{const u=hn(o[1]),l=new R(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=vt(t.path),s=IDBKeyRange.bound([r],[Sw(r)],!1,!0);let i=0;return Xn(e).X({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}le(e,t){return _s(e).get(t).next(r=>r?ji(r):null)}}function _s(n){return nt(n,"targets")}function Rg(n){return nt(n,"targetGlobal")}function Xn(n){return nt(n,"targetDocuments")}/**
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
 */function Pg([n,e],[t,r]){const s=ne(n,t);return s===0?ne(e,r):s}class gD{constructor(e){this.Ln=e,this.buffer=new Ae(Pg),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Pg(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ir(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _r(t)}await this.Qn(3e5)})}}class yD{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return y.resolve(Tt.ct);const r=new gD(t);return this.jn.forEachTarget(e,s=>r.Kn(s.sequenceNumber)).next(()=>this.jn.Wn(e,s=>r.Kn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(Ng)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ng):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Gl()<=ue.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),y.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function vD(n,e){return new yD(n,e)}/**
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
 */class wD{constructor(e,t){this.db=e,this.garbageCollector=vD(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,s)=>t(s))}addReference(e,t,r){return xa(e,r)}removeReference(e,t,r){return xa(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return xa(e,t)}Xn(e,t){return function(r,s){let i=!1;return N_(r).Z(o=>k_(r,o,s).next(a=>(a&&(i=!0),y.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),Xn(e).delete([0,vt(o.path)])))});s.push(c)}}).next(()=>y.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return xa(e,t)}Yn(e,t){const r=Xn(e);let s,i=Tt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Tt.ct&&t(new R(hn(s)),i),i=u,s=c):i=Tt.ct}).next(()=>{i!==Tt.ct&&t(new R(hn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xa(n,e){return Xn(n).put(function(t,r){return{targetId:0,path:vt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class R_{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _D{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Ar(e).put(r)}removeEntry(e,t,r){return Ar(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ec(i),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=Ce.newInvalidDocument(t);return Ar(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Pi(t))},(s,i)=>{r=this.ts(t,i)}).next(()=>r)}es(e,t){let r={size:0,document:Ce.newInvalidDocument(t)};return Ar(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Pi(t))},(s,i)=>{r={document:this.ts(t,i),size:Tc(i)}}).next(()=>r)}getEntries(e,t){let r=Ct();return this.ns(e,t,(s,i)=>{const o=this.ts(s,i);r=r.insert(s,o)}).next(()=>r)}ss(e,t){let r=Ct(),s=new be(R.comparator);return this.ns(e,t,(i,o)=>{const a=this.ts(i,o);r=r.insert(i,a),s=s.insert(i,Tc(o))}).next(()=>({documents:r,rs:s}))}ns(e,t,r){if(t.isEmpty())return y.resolve();let s=new Ae(Lg);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Pi(s.first()),Pi(s.last())),o=s.getIterator();let a=o.getNext();return Ar(e).X({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=R.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Lg(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(Pi(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),Ec(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ar(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Ct();for(const l of c){const h=this.ts(R.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(ta(t,h)||s.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,s){let i=Ct();const o=Mg(t,r),a=Mg(t,Mt.max());return Ar(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(R.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new ID(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Og(e).get("remoteDocumentGlobalKey").next(t=>(j(!!t),t))}Zn(e,t){return Og(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=sD(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return Ce.newInvalidDocument(e)}}function P_(n){return new _D(n)}class ID extends R_{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Er(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ae((i,o)=>ne(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.us.get(i);if(t.push(this.os.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Ig(this.os.serializer,o);s=s.add(i.path.popLast());const u=Tc(c);r+=u-a.size,t.push(this.os.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Ig(this.os.serializer,o.convertToNoDocument(q.min()));t.push(this.os.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.os.updateMetadata(e,r)),y.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:s})=>(s.forEach((i,o)=>{this.us.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Og(n){return nt(n,"remoteDocumentGlobal")}function Ar(n){return nt(n,"remoteDocumentsV14")}function Pi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Mg(n,e){const t=e.documentKey.path.toArray();return[n,Ec(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Lg(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ne(t[i],r[i]),s)return s;return s=ne(t.length,r.length),s||(s=ne(t[t.length-2],r[r.length-2]),s||ne(t[t.length-1],r[r.length-1]))}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class ED{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class O_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Zi(r.mutation,s,St.empty(),Ne.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,t,r=re()){const s=dn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=$i();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,re()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Ct();const o=Ji(),a=Ji();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Mn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Zi(l.mutation,u,l.mutation.getFieldMask(),Ne.now())):o.set(u.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new ED(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Ji();let s=new be((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||St.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Zw();l.forEach(d=>{if(!i.has(d)){const p=a_(t.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return R.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):y.resolve(dn());let a=-1,c=i;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,re())).next(l=>({batchId:a,changes:Jw(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new R(t)).next(r=>{let s=$i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=$i();return this.indexManager.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const c=function(u,l){return new On(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s))).next(i=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ce.newInvalidDocument(u)))});let o=$i();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&Zi(u.mutation,c,St.empty(),Ne.now()),ta(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class bD{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return y.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:$e(r.createTime)}),y.resolve()}getNamedQuery(e,t){return y.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:Md(r.bundledQuery),readTime:$e(r.readTime)}}(t)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class TD{constructor(){this.overlays=new be(R.comparator),this.ls=new Map}getOverlay(e,t){return y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dn();return y.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.we(e,t,i)}),y.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),y.resolve()}getOverlaysForCollection(e,t,r){const s=dn(),i=t.length+1,o=new R(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return y.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new be((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=dn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return y.resolve(a)}we(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nd(t,r));let i=this.ls.get(t);i===void 0&&(i=re(),this.ls.set(t,i)),this.ls.set(t,i.add(r.key))}}/**
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
 */class Vd{constructor(){this.fs=new Ae(Xe.ds),this.ws=new Ae(Xe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new Xe(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new R(new le([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new R(new le([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=re();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return R.comparator(e.key,t.key)||ne(e.As,t.As)}static _s(e,t){return ne(e.As,t.As)||R.comparator(e.key,t.key)}}/**
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
 */class SD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Ae(Xe.ds)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dd(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,t){return y.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.bs(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(ne);return t.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),y.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;R.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new R(i),0);let a=new Ae(ne);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.As)),!0)},o),y.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){j(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return y.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new Xe(t,0),s=this.Rs.firstAfterOrEqual(r);return y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class CD{constructor(e){this.Ds=e,this.docs=new be(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return y.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=Ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ct();const o=t.path,a=new R(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Id(xw(l),r)<=0||(s.has(l.key)||ta(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}Cs(e,t){return y.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new AD(this)}getSize(e){return y.resolve(this.size)}}class AD extends R_{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),y.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class xD{constructor(e){this.persistence=e,this.xs=new Er(t=>es(t),Zo),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Vd,this.targetCount=0,this.Ms=is.kn()}forEachTarget(e,t){return this.xs.forEach((r,s)=>t(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),y.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new is(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,y.resolve()}updateTargetData(e,t){return this.Fn(t),y.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return y.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),y.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return y.resolve(r)}containsKey(e,t){return y.resolve(this.ks.containsKey(t))}}/**
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
 */class M_{constructor(e,t){this.$s={},this.overlays={},this.Os=new Tt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new xD(this),this.indexManager=new dD,this.remoteDocumentCache=function(r){return new CD(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new S_(t),this.qs=new bD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new SD(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){C("MemoryPersistence","Starting transaction:",e);const s=new DD(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,t){return y.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class DD extends kw{constructor(e){super(),this.currentSequenceNumber=e}}class Iu{constructor(e){this.persistence=e,this.Qs=new Vd,this.js=null}static zs(e){return new Iu(e)}get Ws(){if(this.js)return this.js;throw U()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),y.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),y.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ws,r=>{const s=R.fromPath(r);return this.Hs(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return y.or([()=>y.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
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
 */class kD{constructor(e){this.serializer=e}O(e,t,r,s){const i=new pu("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jp,{unique:!0}),a.createObjectStore("documentMutations")}(e),Fg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=y.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Fg(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jp,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return y.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Ys(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),r<7&&s>=7&&(o=o.next(()=>this.Zs(i))),r<8&&s>=8&&(o=o.next(()=>this.ti(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ei(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:fx});c.createIndex("collectionPathOverlayIndex",px,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",gx,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:nx});c.createIndex("documentKeyIndex",rx),c.createIndex("collectionGroupIndex",sx)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.si(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:ux}).createIndex("sequenceNumberIndex",lx,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:hx}).createIndex("documentKeyIndex",dx,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,s)=>{t+=Tc(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(s=>y.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>y.forEach(a,c=>{j(c.userId===i.userId);const u=Or(this.serializer,c);return D_(e,i.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.X((o,a)=>{const c=new le(o),u=function(l){return[0,vt(l)]}(c);i.push(t.get(u).next(l=>l?y.resolve():(h=>t.put({targetId:0,path:vt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>y.waitFor(i))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:cx});const r=t.store("collectionParents"),s=new Fd,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:vt(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new le(o);return i(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=hn(a);return i(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,s)=>{const i=ji(s),o=C_(this.serializer,i);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),s=[];return r.X((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new R(le.fromString(u.document.name).popFirst(5)):u.noDocument?R.fromSegments(u.noDocument.path):u.unknownDocument?R.fromSegments(u.unknownDocument.path):U()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>y.waitFor(s))}si(e,t){const r=t.store("mutations"),s=P_(this.serializer),i=new M_(Iu.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:re();Or(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),y.forEach(a,(c,u)=>{const l=new Je(u),h=wu.de(this.serializer,l),d=i.getIndexManager(l),p=_u.de(l,this.serializer,d,i.referenceDelegate);return new O_(s,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ql(t,Tt.ct),c).next()})})}}function Fg(n){n.createObjectStore("targetDocuments",{keyPath:ox}).createIndex("documentTargetsIndex",ax,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ix,{unique:!0}),n.createObjectStore("targetGlobal")}const ul="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ud{constructor(e,t,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Ud.D())throw new E(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wD(this,s),this.di=t+"main",this.serializer=new S_(c),this.wi=new Ht(this.di,this.ui,new kD(this.serializer)),this.Bs=new pD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=P_(this.serializer),this.qs=new iD,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&Ve("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(v.FAILED_PRECONDITION,ul);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Tt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Da(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Ir(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Oi(e).get("owner").next(t=>y.resolve(this.Ri(t)))}Pi(e){return Da(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=nt(t,"clientMetadata");return r.j().next(s=>{const i=this.Si(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return y.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?y.resolve(!0):Oi(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new E(v.FAILED_PRECONDITION,ul);return!1}}return!(!this.networkEnabled||!this.inForeground)||Da(e).j().next(r=>this.Si(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ql(e,Tt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Da(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return _u.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fD(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return wu.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){C("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.ui)===15?yx:o===14?Mw:o===13?Ow:o===12?mx:o===11?Pw:void U();var o;let a;return this.wi.runTransaction(e,s,i,c=>(a=new Ql(c,this.Os?this.Os.next():Tt.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw Ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new E(v.FAILED_PRECONDITION,Dw);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return Oi(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new E(v.FAILED_PRECONDITION,ul)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Oi(e).put("owner",t)}static D(){return Ht.D()}Ai(e){const t=Oi(e);return t.get("owner").next(r=>this.Ri(r)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):y.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ve(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;p0()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ve("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ve("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Oi(n){return nt(n,"owner")}function Da(n){return nt(n,"clientMetadata")}function Bd(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class $d{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=s}static Li(e,t){let r=re(),s=re();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $d(e,t.fromCache,r,s)}}/**
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
 */class L_{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,s){return this.Ki(e,t).next(i=>i||this.Gi(e,t,s,r)).next(i=>i||this.Qi(e,t))}Ki(e,t){if(lg(t))return y.resolve(null);let r=xt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ic(t,null,"F"),r=xt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,Ic(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,s){return lg(t)||s.isEqual(q.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(t,i);return this.zi(t,o,r,s)?this.Qi(e,t):(Gl()<=ue.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nh(t)),this.Wi(e,o,t,Aw(s,-1)))})}ji(e,t){let r=new Ae(Yw(e));return t.forEach((s,i)=>{ta(e,i)&&(r=r.add(i))}),r}zi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,t){return Gl()<=ue.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",nh(t)),this.Ui.getDocumentsMatchingQuery(e,t,Mt.min())}Wi(e,t,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ND{constructor(e,t,r,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new be(ne),this.Yi=new Er(i=>es(i),Zo),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O_(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function F_(n,e,t,r){return new ND(n,e,t,r)}async function V_(n,e){const t=O(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function RD(n,e){const t=O(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const w=c.docVersions.get(p);j(w!==null),m.version.compareTo(w)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function U_(n){const e=O(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function PD(n,e){const t=O(n),r=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Qe.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(m,w,T){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,p,l)&&a.push(t.Bs.updateTargetData(i,p))});let c=Ct(),u=re();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(B_(i,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(q.min())){const l=t.Bs.getLastRemoteSnapshotVersion(i).next(h=>t.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ji=s,i))}function B_(n,e,t){let r=re(),s=re();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Ct();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:s}})}function OD(n,e){const t=O(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Js(n,e){const t=O(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Bs.getTargetData(r,e).next(i=>i?(s=i,y.resolve(s)):t.Bs.allocateTargetId(r).next(o=>(s=new Cn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Zs(n,e,t){const r=O(n),s=r.Ji.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ir(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Sc(n,e,t){const r=O(n);let s=q.min(),i=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=O(a),h=l.Yi.get(u);return h!==void 0?y.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,xt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:re())).next(a=>(j_(r,Qw(e),a),{documents:a,ir:i})))}function $_(n,e){const t=O(n),r=O(t.Bs),s=t.Ji.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.le(i,e).next(o=>o?o.target:null))}function q_(n,e){const t=O(n),r=t.Xi.get(e)||q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Zi.getAllFromCollectionGroup(s,e,Aw(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(j_(t,e,s),s))}function j_(n,e,t){let r=n.Xi.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Xi.set(e,r)}async function MD(n,e,t,r){const s=O(n);let i=re(),o=Ct();for(const u of t){const l=e.rr(u.metadata.name);u.document&&(i=i.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Zi.newChangeBuffer({trackRemovals:!0}),c=await Js(s,function(u){return xt(mi(le.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>B_(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Bs.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function LD(n,e,t=re()){const r=await Js(n,xt(Md(e.bundledQuery))),s=O(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=$e(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.qs.saveNamedQuery(i,e);const a=r.withResumeToken(Qe.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.Bs.updateTargetData(i,a).next(()=>s.Bs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Bs.addMatchingKeys(i,t,r.targetId)).next(()=>s.qs.saveNamedQuery(i,e))})}function Vg(n,e){return`firestore_clients_${n}_${e}`}function Ug(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ll(n,e){return`firestore_targets_${n}_${e}`}class Cc{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static ar(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new E(s.error.code,s.error.message))),o?new Cc(e,t,s.state,i):(Ve("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new E(r.error.code,r.error.message))),i?new eo(e,r.state,s):(Ve("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ac{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Ad();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Nw(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Ac(e,i):(Ve("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class qd{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new qd(t.clientId,t.onlineState):(Ve("SharedClientState",`Failed to parse online state: ${e}`),null)}}class uh{constructor(){this.activeTargetIds=Ad()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hl{constructor(e,t,r,s,i){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new be(ne),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Vg(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new uh),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const s=this.getItem(Vg(this.persistenceKey,r));if(s){const i=Ac.ar(r,s);i&&(this.gr=this.gr.insert(i.clientId,i))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ll(this.persistenceKey,e));if(r){const s=eo.ar(e,r);s&&(t=s.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ll(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Cr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return C("SharedClientState","READ",e,t),t}setItem(e,t){C("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(C("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(s){let i=Tt.ct;if(s!=null)try{const o=JSON.parse(s);j(typeof o=="number"),i=o}catch(o){Ve("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==Tt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Qr(s)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const s=new Cc(this.currentUser,e,t,r),i=Ug(this.persistenceKey,this.currentUser,e);this.setItem(i,s.hr())}Cr(e){const t=Ug(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const s=ll(this.persistenceKey,e),i=new eo(e,t,r);this.setItem(s,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return Ac.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Cc.ar(new Je(i),s,t)}Ur(e,t){const r=this.Ar.exec(e),s=Number(r[1]);return eo.ar(s,t)}br(e){return qd.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),s=this.Sr(this.gr),i=this.Sr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Ad();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class z_{constructor(){this.Hr=new uh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new uh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FD{Yr(e){}shutdown(){}}/**
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
 */class Bg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ka=null;function dl(){return ka===null?ka=268435456+Math.round(2147483648*Math.random()):ka++,"0x"+ka.toString(16)}/**
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
 */const VD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class UD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const ut="WebChannelConnection";class BD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,s,i){const o=dl(),a=this.To(e,t);C("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(u=>(C("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Zt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,s,i,o){return this.Io(e,t,r,s,i)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+gi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,t){const r=VD[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,s){const i=dl();return new Promise((o,a)=>{const c=new LA;c.setWithCredentials(!0),c.listenOnce(PA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case al.NO_ERROR:const l=c.getResponseJson();C(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case al.TIMEOUT:C(ut,`RPC '${e}' ${i} timed out`),a(new E(v.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const h=c.getStatus();if(C(ut,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(w){const T=w.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(T)>=0?T:v.UNKNOWN}(p.status);a(new E(m,p.message))}else a(new E(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(v.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{C(ut,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);C(ut,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const s=dl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NA(),a=RA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new MA({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");C(ut,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const m=new UD({ro:T=>{p?C(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(d||(C(ut,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),C(ut,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},oo:()=>h.close()}),w=(T,x,F)=>{T.listen(x,D=>{try{F(D)}catch(z){setTimeout(()=>{throw z},0)}})};return w(h,ba.EventType.OPEN,()=>{p||C(ut,`RPC '${e}' stream ${s} transport opened.`)}),w(h,ba.EventType.CLOSE,()=>{p||(p=!0,C(ut,`RPC '${e}' stream ${s} transport closed`),m.wo())}),w(h,ba.EventType.ERROR,T=>{p||(p=!0,Zt(ut,`RPC '${e}' stream ${s} transport errored:`,T),m.wo(new E(v.UNAVAILABLE,"The operation could not be completed")))}),w(h,ba.EventType.MESSAGE,T=>{var x;if(!p){const F=T.data[0];j(!!F);const D=F,z=D.error||((x=D[0])===null||x===void 0?void 0:x.error);if(z){C(ut,`RPC '${e}' stream ${s} received error:`,z);const Q=z.status;let Y=function(X){const De=Ke[X];if(De!==void 0)return l_(De)}(Q),W=z.message;Y===void 0&&(Y=v.INTERNAL,W="Unknown error status: "+Q+" with message "+z.message),p=!0,m.wo(new E(Y,W)),h.close()}else C(ut,`RPC '${e}' stream ${s} received:`,F),m._o(F)}}),w(a,OA.STAT_EVENT,T=>{T.stat===Wp.PROXY?C(ut,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Wp.NOPROXY&&C(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
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
 *//**
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
 */function K_(){return typeof window<"u"?window:null}function Ha(){return typeof document<"u"?document:null}/**
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
 */function ia(n){return new Wx(n,!0)}/**
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
 */class jd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-r);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class H_{constructor(e,t,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new jd(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(Ve(t.toString()),Ve("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===t&&this.Zo(r,s)},r=>{e(()=>{const s=new E(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $D extends H_{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=Xx(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?q.min():i.readTime?$e(i.readTime):q.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=Do(this.serializer),t.addTarget=function(s,i){let o;const a=i.target;if(o=wc(a)?{documents:w_(s,a)}:{query:__(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=p_(s,i.resumeToken);const c=rh(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(q.min())>0){o.readTime=Xs(s,i.snapshotVersion.toTimestamp());const c=rh(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=Zx(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=Do(this.serializer),t.removeTarget=e,this.Wo(t)}}class qD extends H_{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=Jx(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.cu(r,t)}return j(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Do(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ko(this.serializer,r))};this.Wo(t)}}/**
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
 */class jD extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new E(v.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(v.UNKNOWN,s.toString())})}vo(e,t,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(v.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class zD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ve(t),this.mu=!1):C("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class KD{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{br(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=O(a);c.vu.add(4),await wi(c),c.bu.set("Unknown"),c.vu.delete(4),await oa(c)}(this))})}),this.bu=new zD(r,s)}}async function oa(n){if(br(n))for(const e of n.Ru)await e(!0)}async function wi(n){for(const e of n.Ru)await e(!1)}function Eu(n,e){const t=O(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Hd(t)?Kd(t):Ii(t).Ko()&&zd(t,e))}function No(n,e){const t=O(n),r=Ii(t);t.Au.delete(e),r.Ko()&&G_(t,e),t.Au.size===0&&(r.Ko()?r.jo():br(t)&&t.bu.set("Unknown"))}function zd(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ii(n).su(e)}function G_(n,e){n.Vu.qt(e),Ii(n).iu(e)}function Kd(n){n.Vu=new zx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Ii(n).start(),n.bu.gu()}function Hd(n){return br(n)&&!Ii(n).Uo()&&n.Au.size>0}function br(n){return O(n).vu.size===0}function W_(n){n.Vu=void 0}async function HD(n){n.Au.forEach((e,t)=>{zd(n,e)})}async function GD(n,e){W_(n),Hd(n)?(n.bu.Iu(e),Kd(n)):n.bu.set("Unknown")}async function WD(n,e,t){if(n.bu.set("Online"),e instanceof f_&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xc(n,r)}else if(e instanceof Ka?n.Vu.Ht(e):e instanceof d_?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(q.min()))try{const r=await U_(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Au.get(c);u&&s.Au.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const u=s.Au.get(a);if(!u)return;s.Au.set(a,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),G_(s,a);const l=new Cn(u.target,a,c,u.sequenceNumber);zd(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await xc(n,r)}}async function xc(n,e,t){if(!Ir(e))throw e;n.vu.add(1),await wi(n),n.bu.set("Offline"),t||(t=()=>U_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await oa(n)})}function Q_(n,e){return e().catch(t=>xc(n,t,e))}async function _i(n){const e=O(n),t=pr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;QD(e);)try{const s=await OD(e.localStore,r);if(s===null){e.Eu.length===0&&t.jo();break}r=s.batchId,YD(e,s)}catch(s){await xc(e,s)}Y_(e)&&X_(e)}function QD(n){return br(n)&&n.Eu.length<10}function YD(n,e){n.Eu.push(e);const t=pr(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Y_(n){return br(n)&&!pr(n).Uo()&&n.Eu.length>0}function X_(n){pr(n).start()}async function XD(n){pr(n).hu()}async function JD(n){const e=pr(n);for(const t of n.Eu)e.uu(t.mutations)}async function ZD(n,e,t){const r=n.Eu.shift(),s=kd.from(r,e,t);await Q_(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await _i(n)}async function ek(n,e){e&&pr(n).ou&&await async function(t,r){if(s=r.code,u_(s)&&s!==v.ABORTED){const i=t.Eu.shift();pr(t).Qo(),await Q_(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await _i(t)}var s}(n,e),Y_(n)&&X_(n)}async function $g(n,e){const t=O(n);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=br(t);t.vu.add(3),await wi(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await oa(t)}async function lh(n,e){const t=O(n);e?(t.vu.delete(2),await oa(t)):e||(t.vu.add(2),await wi(t),t.bu.set("Unknown"))}function Ii(n){return n.Su||(n.Su=function(e,t,r){const s=O(e);return s.fu(),new $D(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{uo:HD.bind(null,n),ao:GD.bind(null,n),nu:WD.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Hd(n)?Kd(n):n.bu.set("Unknown")):(await n.Su.stop(),W_(n))})),n.Su}function pr(n){return n.Du||(n.Du=function(e,t,r){const s=O(e);return s.fu(),new qD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{uo:XD.bind(null,n),ao:ek.bind(null,n),au:JD.bind(null,n),cu:ZD.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await _i(n)):(await n.Du.stop(),n.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
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
 */class Gd{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Gd(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ei(n,e){if(Ve("AsyncQueue",`${e}: ${n}`),Ir(n))return new E(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Us{constructor(e){this.comparator=e?(t,r)=>e(t,r)||R.comparator(t.key,r.key):(t,r)=>R.comparator(t.key,r.key),this.keyedMap=$i(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class qg{constructor(){this.Cu=new be(R.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):U():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ei{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ei(e,t,Us.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class tk{constructor(){this.Nu=void 0,this.listeners=[]}}class nk{constructor(){this.queries=new Er(e=>Ww(e),ea),this.onlineState="Unknown",this.ku=new Set}}async function Wd(n,e){const t=O(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new tk),s)try{i.Nu=await t.onListen(r)}catch(o){const a=Ei(o,`Initialization of query '${nh(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Mu(t.onlineState),i.Nu&&e.$u(i.Nu)&&Yd(t)}async function Qd(n,e){const t=O(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function rk(n,e){const t=O(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&Yd(t)}function sk(n,e,t){const r=O(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Yd(n){n.ku.forEach(e=>{e.next()})}class Xd{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class ik{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
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
 */class jg{constructor(e){this.serializer=e}rr(e){return gn(this.serializer,e)}ur(e){return e.metadata.exists?v_(this.serializer,e.document,!1):Ce.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return $e(e)}}class ok{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=J_(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=le.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new jg(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.rr(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||re()).add(i);t.set(o,a)}}return t}async complete(){const e=await MD(this.localStore,new jg(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await LD(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function J_(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Z_{constructor(e){this.key=e}}class eI{constructor(e){this.key=e}}class tI{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=re(),this.mutatedKeys=re(),this.tc=Yw(e),this.ec=new Us(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new qg,s=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=ta(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;d&&p?d.data.isEqual(p.data)?m!==w&&(r.track({type:3,doc:p}),T=!0):this.rc(d,p)||(r.track({type:2,doc:p}),T=!0,(c&&this.tc(p,c)>0||u&&this.tc(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),T=!0):d&&!p&&(r.track({type:1,doc:d}),T=!0,(c||u)&&(a=!0)),T&&(p?(o=o.add(p),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((u,l)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(h)-p(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new ei(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new qg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=re(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new eI(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new Z_(r))}),t}hc(e){this.Yu=e.ir,this.Zu=re();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return ei.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ak{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ck{constructor(e){this.key=e,this.fc=!1}}class uk{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Er(a=>Ww(a),ea),this._c=new Map,this.mc=new Set,this.gc=new be(R.comparator),this.yc=new Map,this.Ic=new Vd,this.Tc={},this.Ec=new Map,this.Ac=is.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function lk(n,e){const t=nf(n);let r,s;const i=t.wc.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await Js(t.localStore,xt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Jd(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Eu(t.remoteStore,o)}return s}async function Jd(n,e,t,r,s){n.Rc=(h,d,p)=>async function(m,w,T,x){let F=w.view.sc(T);F.zi&&(F=await Sc(m.localStore,w.query,!1).then(({documents:Q})=>w.view.sc(Q,F)));const D=x&&x.targetChanges.get(w.targetId),z=w.view.applyChanges(F,m.isPrimaryClient,D);return hh(m,w.targetId,z.cc),z.snapshot}(n,h,d,p);const i=await Sc(n.localStore,e,!0),o=new tI(e,i.ir),a=o.sc(i.documents),c=sa.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);hh(n,t,u.cc);const l=new ak(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function hk(n,e){const t=O(n),r=t.wc.get(e),s=t._c.get(r.targetId);if(s.length>1)return t._c.set(r.targetId,s.filter(i=>!ea(i,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Zs(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),No(t.remoteStore,r.targetId),ti(t,r.targetId)}).catch(_r)):(ti(t,r.targetId),await Zs(t.localStore,r.targetId,!0))}async function dk(n,e,t){const r=rf(n);try{const s=await function(i,o){const a=O(i),c=Ne.now(),u=o.reduce((d,p)=>d.add(p.key),re());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ct(),m=re();return a.Zi.getEntries(d,u).next(w=>{p=w,p.forEach((T,x)=>{x.isValidDocument()||(m=m.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{l=w;const T=[];for(const x of o){const F=$x(x,l.get(x.key).overlayedDocument);F!=null&&T.push(new Mn(x.key,F,Uw(F.value.mapValue),ke.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(w=>{h=w;const T=w.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,w.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Jw(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new be(ne)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,t),await Ln(r,s.changes),await _i(r.remoteStore)}catch(s){const i=Ei(s,"Failed to persist write");t.reject(i)}}async function nI(n,e){const t=O(n);try{const r=await PD(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.yc.get(i);o&&(j(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?j(o.fc):s.removedDocuments.size>0&&(j(o.fc),o.fc=!1))}),await Ln(t,r,e)}catch(r){await _r(r)}}function zg(n,e,t){const r=O(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=O(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&Yd(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fk(n,e,t){const r=O(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new be(R.comparator);o=o.insert(i,Ce.newNoDocument(i,q.min()));const a=re().add(i),c=new ra(q.min(),new Map,new be(ne),o,a);await nI(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),tf(r)}else await Zs(r.localStore,e,!1).then(()=>ti(r,e,t)).catch(_r)}async function pk(n,e){const t=O(n),r=e.batch.batchId;try{const s=await RD(t.localStore,e);ef(t,r,null),Zd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ln(t,s)}catch(s){await _r(s)}}async function gk(n,e,t){const r=O(n);try{const s=await function(i,o){const a=O(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);ef(r,e,t),Zd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ln(r,s)}catch(s){await _r(s)}}async function mk(n,e){const t=O(n);br(t.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=O(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const s=t.Ec.get(r)||[];s.push(e),t.Ec.set(r,s)}catch(r){const s=Ei(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Zd(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function ef(n,e,t){const r=O(n);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function ti(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||rI(n,r)})}function rI(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(No(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),tf(n))}function hh(n,e,t){for(const r of t)r instanceof Z_?(n.Ic.addReference(r.key,e),yk(n,r)):r instanceof eI?(C("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||rI(n,r.key)):U()}function yk(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(C("SyncEngine","New document in limbo: "+t),n.mc.add(r),tf(n))}function tf(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new R(le.fromString(e)),r=n.Ac.next();n.yc.set(r,new ck(t)),n.gc=n.gc.insert(t,r),Eu(n.remoteStore,new Cn(xt(mi(t.path)),r,"TargetPurposeLimboResolution",Tt.ct))}}async function Ln(n,e,t){const r=O(n),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=$d.Li(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const u=O(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Ir(l))throw l;C("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,i))}async function vk(n,e){const t=O(n);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await V_(t.localStore,e);t.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new E(v.CANCELLED,i))})}),s.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ln(t,r.er)}}function wk(n,e){const t=O(n),r=t.yc.get(e);if(r&&r.fc)return re().add(r.key);{let s=re();const i=t._c.get(e);if(!i)return s;for(const o of i){const a=t.wc.get(o);s=s.unionWith(a.view.nc)}return s}}async function _k(n,e){const t=O(n),r=await Sc(t.localStore,e.query,!0),s=e.view.hc(r);return t.isPrimaryClient&&hh(t,e.targetId,s.cc),s}async function Ik(n,e){const t=O(n);return q_(t.localStore,e).then(r=>Ln(t,r))}async function Ek(n,e,t,r){const s=O(n),i=await function(o,a){const c=O(o),u=O(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):y.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await _i(s.remoteStore):t==="acknowledged"||t==="rejected"?(ef(s,e,r||null),Zd(s,e),function(o,a){O(O(o).mutationQueue).Cn(a)}(s.localStore,e)):U(),await Ln(s,i)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bk(n,e){const t=O(n);if(nf(t),rf(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Kg(t,r.toArray());t.vc=!0,await lh(t.remoteStore,!0);for(const i of s)Eu(t.remoteStore,i)}else if(e===!1&&t.vc!==!1){const r=[];let s=Promise.resolve();t._c.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(ti(t,o),Zs(t.localStore,o,!0))),No(t.remoteStore,o)}),await s,await Kg(t,r),function(i){const o=O(i);o.yc.forEach((a,c)=>{No(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new be(R.comparator)}(t),t.vc=!1,await lh(t.remoteStore,!1)}}async function Kg(n,e,t){const r=O(n),s=[],i=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Js(r.localStore,xt(c[0]));for(const u of c){const l=r.wc.get(u),h=await _k(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await $_(r.localStore,o);a=await Js(r.localStore,u),await Jd(r,sI(u),o,!1,a.resumeToken)}s.push(a)}return r.dc.nu(i),s}function sI(n){return Gw(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Tk(n){const e=O(n);return O(O(e.localStore).persistence).$i()}async function Sk(n,e,t,r){const s=O(n);if(s.vc)return void C("SyncEngine","Ignoring unexpected query state notification.");const i=s._c.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await q_(s.localStore,Qw(i[0])),a=ra.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Qe.EMPTY_BYTE_STRING);await Ln(s,o,a);break}case"rejected":await Zs(s.localStore,e,!0),ti(s,e,r);break;default:U()}}async function Ck(n,e,t){const r=nf(n);if(r.vc){for(const s of e){if(r._c.has(s)){C("SyncEngine","Adding an already active target "+s);continue}const i=await $_(r.localStore,s),o=await Js(r.localStore,i);await Jd(r,sI(i),o.targetId,!1,o.resumeToken),Eu(r.remoteStore,o)}for(const s of t)r._c.has(s)&&await Zs(r.localStore,s,!1).then(()=>{No(r.remoteStore,s),ti(r,s)}).catch(_r)}}function nf(n){const e=O(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fk.bind(null,e),e.dc.nu=rk.bind(null,e.eventManager),e.dc.Pc=sk.bind(null,e.eventManager),e}function rf(n){const e=O(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gk.bind(null,e),e}function Ak(n,e,t){const r=O(n);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const p=O(h),m=$e(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",w=>p.qs.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(m)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(J_(a));const c=new ok(a,s.localStore,i.serializer);let u=await i.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await i.bc()}const l=await c.complete();return await Ln(s,l.Ju,void 0),await function(h,d){const p=O(h);return p.persistence.runTransaction("Save bundle","readwrite",m=>p.qs.saveBundleMetadata(m,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return Zt("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class dh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ia(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return F_(this.persistence,new L_,e.initialUser,this.serializer)}createPersistence(e){return new M_(Iu.zs,this.serializer)}createSharedClientState(e){return new z_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iI extends dh{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await rf(this.Vc.syncEngine),await _i(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return F_(this.persistence,new L_,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new mD(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new ZA(t,this.persistence);return new JA(e.asyncQueue,r)}createPersistence(e){const t=Bd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Ud(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,K_(),Ha(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new z_}}class xk extends iI{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof hl&&(this.sharedClientState.syncEngine={jr:Ek.bind(null,t),zr:Sk.bind(null,t),Wr:Ck.bind(null,t),$i:Tk.bind(null,t),Qr:Ik.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await bk(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=K_();if(!hl.D(t))throw new E(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Bd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hl(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class sf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vk.bind(null,this.syncEngine),await lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nk}createDatastore(e){const t=ia(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new BD(s));var s;return function(i,o,a,c){return new jD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>zg(this.syncEngine,a,0),o=Bg.D()?new Bg:new FD,new KD(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new uk(r,s,i,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=O(e);C("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await wi(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Hg(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class bu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ve("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Dk{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new Ze,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const s=await this.$c(r);return new ik(JSON.parse(s),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class kk{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,s){const i=O(r),o=Do(i.serializer)+"/documents",a={documents:s.map(h=>xo(i.serializer,h))},c=await i.vo("BatchGetDocuments",o,a,s.length),u=new Map;c.forEach(h=>{const d=Yx(i.serializer,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());j(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new vi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=R.fromPath(r);this.mutations.push(new xd(s,this.precondition(s)))}),await async function(t,r){const s=O(t),i=Do(s.serializer)+"/documents",o={writes:r.map(a=>ko(s.serializer,a))};await s.Io("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw U();t=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new E(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?ke.exists(!1):ke.updateTime(t):ke.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new E(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(t)}return ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Nk{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Bc=r.maxAttempts,this.qo=new jd(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new kk(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Uc(s)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!Jo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!u_(t)}return!1}}/**
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
 */class Rk{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=Tw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{C("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(C("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ei(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ga(n,e){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await V_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await of(n);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>$g(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>$g(e.remoteStore,i)),n._onlineComponents=e}function oI(n){return n.name==="FirebaseError"?n.code===v.FAILED_PRECONDITION||n.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function of(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!oI(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await Ga(n,new dh)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Ga(n,new dh);return n._offlineComponents}async function Tu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await fh(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await fh(n,new sf))),n._onlineComponents}function aI(n){return of(n).then(e=>e.persistence)}function af(n){return of(n).then(e=>e.localStore)}function cI(n){return Tu(n).then(e=>e.remoteStore)}function cf(n){return Tu(n).then(e=>e.syncEngine)}function Pk(n){return Tu(n).then(e=>e.datastore)}async function ni(n){const e=await Tu(n),t=e.eventManager;return t.onListen=lk.bind(null,e.syncEngine),t.onUnlisten=hk.bind(null,e.syncEngine),t}function Ok(n){return n.asyncQueue.enqueue(async()=>{const e=await aI(n),t=await cI(n);return e.setNetworkEnabled(!0),function(r){const s=O(r);return s.vu.delete(0),oa(s)}(t)})}function Mk(n){return n.asyncQueue.enqueue(async()=>{const e=await aI(n),t=await cI(n);return e.setNetworkEnabled(!1),async function(r){const s=O(r);s.vu.add(0),await wi(s),s.bu.set("Offline")}(t)})}function Lk(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=O(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new E(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ei(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await af(n),e,t)),t.promise}function uI(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new bu({next:h=>{i.enqueueAndForget(()=>Qd(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new E(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new E(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xd(mi(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Wd(s,l)}(await ni(n),n.asyncQueue,e,t,r)),r.promise}function Fk(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await Sc(r,s,!0),a=new tI(s,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=Ei(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await af(n),e,t)),t.promise}function lI(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new bu({next:h=>{i.enqueueAndForget(()=>Qd(s,l)),h.fromCache&&a.source==="server"?c.reject(new E(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xd(o,u,{includeMetadataChanges:!0,Ku:!0});return Wd(s,l)}(await ni(n),n.asyncQueue,e,t,r)),r.promise}function Vk(n,e){const t=new bu(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,s){O(r).ku.add(s),s.next()}(await ni(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,s){O(r).ku.delete(s)}(await ni(n),t))}}function Uk(n,e,t,r){const s=function(i,o){let a;return a=typeof i=="string"?h_().encode(i):i,function(c,u){return new Dk(c,u)}(function(c,u){if(c instanceof Uint8Array)return Hg(c,u);if(c instanceof ArrayBuffer)return Hg(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ia(e));n.asyncQueue.enqueueAndForget(async()=>{Ak(await cf(n),s,r)})}function Bk(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const s=O(t);return s.persistence.runTransaction("Get named query","readonly",i=>s.qs.getNamedQuery(i,r))}(await af(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Gg=new Map;/**
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
 */function uf(n,e,t){if(!t)throw new E(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dI(n,e,t,r){if(e===!0&&r===!0)throw new E(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wg(n){if(!R.isDocumentKey(n))throw new E(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qg(n){if(R.isDocumentKey(n))throw new E(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Su(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function pe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Su(n);throw new E(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function fI(n,e){if(e<=0)throw new E(v.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Yg{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new E(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new E(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new E(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new E(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class aa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yg(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new BA;switch(t.type){case"firstParty":return new zA(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Gg.get(e);t&&(C("ComponentProvider","Removing Datastore"),Gg.delete(e),t.terminate())}(this),Promise.resolve()}}function pI(n,e,t,r={}){var s;const i=(n=pe(n,aa))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Je.MOCK_USER;else{a=a0(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new E(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Je(u)}n._authCredentials=new $A(new bw(a,c))}}/**
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
 */class xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class ct{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ct(this.firestore,e,this._query)}}class mn extends ct{constructor(e,t,r){super(e,t,mi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new R(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function lf(n,e,...t){if(n=ye(n),uf("collection","path",e),n instanceof aa){const r=le.fromString(e,...t);return Qg(r),new mn(n,null,r)}{if(!(n instanceof xe||n instanceof mn))throw new E(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Qg(r),new mn(n.firestore,null,r)}}function $k(n,e){if(n=pe(n,aa),uf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ct(n,null,function(t){return new On(le.emptyPath(),t)}(e))}function Dc(n,e,...t){if(n=ye(n),arguments.length===1&&(e=Tw.A()),uf("doc","path",e),n instanceof aa){const r=le.fromString(e,...t);return Wg(r),new xe(n,null,new R(r))}{if(!(n instanceof xe||n instanceof mn))throw new E(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Wg(r),new xe(n.firestore,n instanceof mn?n.converter:null,new R(r))}}function gI(n,e){return n=ye(n),e=ye(e),(n instanceof xe||n instanceof mn)&&(e instanceof xe||e instanceof mn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function mI(n,e){return n=ye(n),e=ye(e),n instanceof ct&&e instanceof ct&&n.firestore===e.firestore&&ea(n._query,e._query)&&n.converter===e.converter}/**
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
 */class qk{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new jd(this,"async_queue_retry"),this.Xc=()=>{const t=Ha();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ha();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ha();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Ze;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ir(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ve("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=Gd.createAndSchedule(this,e,t,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function ph(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class jk{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const zk=-1;class Le extends aa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new qk,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yI(this),this._firestoreClient.terminate()}}function Kk(n,e){const t=typeof n=="object"?n:bh(),r=typeof n=="string"?n:e||"(default)",s=Vo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=i0("firestore");i&&pI(s,...i)}return s}function rt(n){return n._firestoreClient||yI(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function yI(n){var e,t,r;const s=n._freezeSettings(),i=function(o,a,c,u){return new _x(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hI(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Rk(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function Hk(n,e){wI(n=pe(n,Le));const t=rt(n);if(t._uninitializedComponentsProvider)throw new E(v.FAILED_PRECONDITION,"SDK cache is already specified.");Zt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new sf;return vI(t,s,new iI(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Gk(n){wI(n=pe(n,Le));const e=rt(n);if(e._uninitializedComponentsProvider)throw new E(v.FAILED_PRECONDITION,"SDK cache is already specified.");Zt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new sf;return vI(e,r,new xk(r,t.cacheSizeBytes))}function vI(n,e,t){const r=new Ze;return n.asyncQueue.enqueue(async()=>{try{await Ga(n,t),await fh(n,e),r.resolve()}catch(s){const i=s;if(!oI(i))throw i;Zt("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function Wk(n){if(n._initialized&&!n._terminated)throw new E(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ze;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ht.D())return Promise.resolve();const r=t+"main";await Ht.delete(r)}(Bd(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Qk(n){return function(e){const t=new Ze;return e.asyncQueue.enqueueAndForget(async()=>mk(await cf(e),t)),t.promise}(rt(n=pe(n,Le)))}function Yk(n){return Ok(rt(n=pe(n,Le)))}function Xk(n){return Mk(rt(n=pe(n,Le)))}function Jk(n,e){const t=rt(n=pe(n,Le)),r=new jk;return Uk(t,n._databaseId,e,r),r}function Zk(n,e){return Bk(rt(n=pe(n,Le)),e).then(t=>t?new ct(n,null,t.query):null)}function wI(n){if(n._initialized||n._terminated)throw new E(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Qe.fromBase64String(e))}catch(t){throw new E(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hs{constructor(e){this._methodName=e}}/**
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
 */class Cu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const eN=/^__.*__$/;class tN{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new yi(e,this.data,t,this.fieldTransforms)}}class _I{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Mn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function II(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Au{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Au(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return kc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(II(this.ca)&&eN.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class nN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ia(e)}ya(e,t,r,s=!1){return new Au({ca:e,methodName:t,ga:r,path:Ue.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ds(n){const e=n._freezeSettings(),t=ia(n._databaseId);return new nN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xu(n,e,t,r,s,i={}){const o=n.ya(i.merge||i.mergeFields?2:0,e,t,s);pf("Data must be an object, but it was:",o,r);const a=TI(r,o);let c,u;if(i.merge)c=new St(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=gh(e,h,t);if(!o.contains(d))throw new E(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);CI(l,d)||l.push(d)}c=new St(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new tN(new ot(a),c,u)}class ca extends hs{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ca}}function EI(n,e,t){return new Au({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hf extends hs{_toFieldTransform(e){return new na(e.path,new Qs)}isEqual(e){return e instanceof hf}}class rN extends hs{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=EI(this,e,!0),r=this.pa.map(i=>fs(i,t)),s=new ts(r);return new na(e.path,s)}isEqual(e){return this===e}}class sN extends hs{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=EI(this,e,!0),r=this.pa.map(i=>fs(i,t)),s=new ns(r);return new na(e.path,s)}isEqual(e){return this===e}}class iN extends hs{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Ys(e.serializer,n_(e.serializer,this.Ia));return new na(e.path,t)}isEqual(e){return this===e}}function df(n,e,t,r){const s=n.ya(1,e,t);pf("Data must be an object, but it was:",s,r);const i=[],o=ot.empty();ls(r,(c,u)=>{const l=gf(e,c,t);u=ye(u);const h=s.da(l);if(u instanceof ca)i.push(l);else{const d=fs(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new St(i);return new _I(o,a,s.fieldTransforms)}function ff(n,e,t,r,s,i){const o=n.ya(1,e,t),a=[gh(e,r,t)],c=[s];if(i.length%2!=0)throw new E(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(gh(e,i[d])),c.push(i[d+1]);const u=[],l=ot.empty();for(let d=a.length-1;d>=0;--d)if(!CI(u,a[d])){const p=a[d];let m=c[d];m=ye(m);const w=o.da(p);if(m instanceof ca)u.push(p);else{const T=fs(m,w);T!=null&&(u.push(p),l.set(p,T))}}const h=new St(u);return new _I(l,h,o.fieldTransforms)}function bI(n,e,t,r=!1){return fs(t,n.ya(r?4:3,e))}function fs(n,e){if(SI(n=ye(n)))return pf("Unsupported field value:",e,n),TI(n,e);if(n instanceof hs)return function(t,r){if(!II(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=fs(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=ye(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return n_(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Ne.fromDate(t);return{timestampValue:Xs(r.serializer,s)}}if(t instanceof Ne){const s=new Ne(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Xs(r.serializer,s)}}if(t instanceof Cu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wn)return{bytesValue:p_(r.serializer,t._byteString)};if(t instanceof xe){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Od(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Su(t)}`)}(n,e)}function TI(n,e){const t={};return Lw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(n,(r,s)=>{const i=fs(s,e.ha(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function SI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ne||n instanceof Cu||n instanceof wn||n instanceof xe||n instanceof hs)}function pf(n,e,t){if(!SI(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Su(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function gh(n,e,t){if((e=ye(e))instanceof gr)return e._internalPath;if(typeof e=="string")return gf(n,e);throw kc("Field path arguments must be of type string or ",n,!1,void 0,t)}const oN=new RegExp("[~\\*/\\[\\]]");function gf(n,e,t){if(e.search(oN)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gr(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function kc(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(v.INVALID_ARGUMENT,a+n+c)}function CI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ro{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Du("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aN extends Ro{data(){return super.data()}}function Du(n,e){return typeof e=="string"?gf(n,e):e instanceof gr?e._internalPath:e._delegate._internalPath}/**
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
 */function AI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new E(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mf{}class ua extends mf{}function qn(n,e,...t){let r=[];e instanceof mf&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof yf).length,o=s.filter(a=>a instanceof ku).length;if(i>1||i>0&&o>0)throw new E(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ku extends ua{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ku(e,t,r)}_apply(e){const t=this._parse(e);return DI(e._query,t),new ct(e.firestore,e.converter,th(e._query,t))}_parse(e){const t=ds(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Jg(l,u);const d=[];for(const p of l)d.push(Xg(a,s,p));h={arrayValue:{values:d}}}else h=Xg(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Jg(l,u),h=bI(o,i,l,u==="in"||u==="not-in");return ae.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cN(n,e,t){const r=e,s=Du("where",n);return ku._create(s,r,t)}class yf extends mf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:me.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)DI(i,a),i=th(i,a)}(e._query,t),new ct(e.firestore,e.converter,th(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vf extends ua{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vf(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new E(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vs(s,i);return function(a,c){if(Sd(a)===null){const u=mu(a);u!==null&&kI(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new ct(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new On(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function uN(n,e="asc"){const t=e,r=Du("orderBy",n);return vf._create(r,t)}class Nu extends ua{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Nu(e,t,r)}_apply(e){return new ct(e.firestore,e.converter,Ic(e._query,this._limit,this._limitType))}}function lN(n){return fI("limit",n),Nu._create("limit",n,"F")}function hN(n){return fI("limitToLast",n),Nu._create("limitToLast",n,"L")}class Ru extends ua{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ru(e,t,r)}_apply(e){const t=xI(e,this.type,this._docOrFields,this._inclusive);return new ct(e.firestore,e.converter,function(r,s){return new On(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,t))}}function dN(...n){return Ru._create("startAt",n,!0)}function fN(...n){return Ru._create("startAfter",n,!1)}class Pu extends ua{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Pu(e,t,r)}_apply(e){const t=xI(e,this.type,this._docOrFields,this._inclusive);return new ct(e.firestore,e.converter,function(r,s){return new On(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,t))}}function pN(...n){return Pu._create("endBefore",n,!1)}function gN(...n){return Pu._create("endAt",n,!0)}function xI(n,e,t,r){if(t[0]=ye(t[0]),t[0]instanceof Ro)return function(s,i,o,a,c){if(!a)throw new E(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Gr(s))if(l.field.isKeyField())u.push(Zr(i,a.key));else{const h=a.data.field(l.field);if(gu(h))throw new E(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new E(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new fr(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=ds(n.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new E(v.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const m=u[p];if(h[p].field.isKeyField()){if(typeof m!="string")throw new E(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Cd(i)&&m.indexOf("/")!==-1)throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const w=i.path.child(le.fromString(m));if(!R.isDocumentKey(w))throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const T=new R(w);d.push(Zr(o,T))}else{const w=bI(a,c,m);d.push(w)}}return new fr(d,l)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Xg(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new E(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cd(e)&&t.indexOf("/")!==-1)throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!R.isDocumentKey(r))throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zr(n,new R(r))}if(t instanceof xe)return Zr(n,t._key);throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Su(t)}.`)}function Jg(n,e){if(!Array.isArray(n)||n.length===0)throw new E(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function DI(n,e){if(e.isInequality()){const r=mu(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new E(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Sd(n);i!==null&&kI(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new E(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function kI(n,e,t){if(!t.isEqual(e))throw new E(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class wf{convertValue(e,t="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ls(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Cu(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const t=ur(e);return new Ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);j(T_(r));const s=new hr(r.get(1),r.get(3)),i=new R(r.popFirst(5));return s.isEqual(t)||Ve(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Ou(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class mN extends wf{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}/**
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
 */class $r{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rn extends Ro{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new to(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Du("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class to extends Rn{data(e={}){return super.data(e)}}class mr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new $r(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new to(this._firestore,this._userDataWriter,r.key,r,new $r(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new to(r._firestore,r._userDataWriter,o.doc.key,o.doc,new $r(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new to(r._firestore,r._userDataWriter,o.doc.key,o.doc,new $r(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:yN(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function NI(n,e){return n instanceof Rn&&e instanceof Rn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof mr&&e instanceof mr&&n._firestore===e._firestore&&mI(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function vN(n){n=pe(n,xe);const e=pe(n.firestore,Le);return uI(rt(e),n._key).then(t=>_f(e,n,t))}class ps extends wf{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}function wN(n){n=pe(n,xe);const e=pe(n.firestore,Le),t=rt(e),r=new ps(e);return Lk(t,n._key).then(s=>new Rn(e,r,n._key,s,new $r(s!==null&&s.hasLocalMutations,!0),n.converter))}function _N(n){n=pe(n,xe);const e=pe(n.firestore,Le);return uI(rt(e),n._key,{source:"server"}).then(t=>_f(e,n,t))}function RI(n){n=pe(n,ct);const e=pe(n.firestore,Le),t=rt(e),r=new ps(e);return AI(n._query),lI(t,n._query).then(s=>new mr(e,r,n,s))}function IN(n){n=pe(n,ct);const e=pe(n.firestore,Le),t=rt(e),r=new ps(e);return Fk(t,n._query).then(s=>new mr(e,r,n,s))}function EN(n){n=pe(n,ct);const e=pe(n.firestore,Le),t=rt(e),r=new ps(e);return lI(t,n._query,{source:"server"}).then(s=>new mr(e,r,n,s))}function Zg(n,e,t){n=pe(n,xe);const r=pe(n.firestore,Le),s=Ou(n.converter,e,t);return la(r,[xu(ds(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ke.none())])}function em(n,e,t,...r){n=pe(n,xe);const s=pe(n.firestore,Le),i=ds(s);let o;return o=typeof(e=ye(e))=="string"||e instanceof gr?ff(i,"updateDoc",n._key,e,t,r):df(i,"updateDoc",n._key,e),la(s,[o.toMutation(n._key,ke.exists(!0))])}function bN(n){return la(pe(n.firestore,Le),[new vi(n._key,ke.none())])}function TN(n,e){const t=pe(n.firestore,Le),r=Dc(n),s=Ou(n.converter,e);return la(t,[xu(ds(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function PI(n,...e){var t,r,s;n=ye(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ph(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ph(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof xe)u=pe(n.firestore,Le),l=mi(n._key.path),c={next:h=>{e[o]&&e[o](_f(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=pe(n,ct);u=pe(h.firestore,Le),l=h._query;const d=new ps(u);c={next:p=>{e[o]&&e[o](new mr(u,d,h,p))},error:e[o+1],complete:e[o+2]},AI(n._query)}return function(h,d,p,m){const w=new bu(m),T=new Xd(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>Wd(await ni(h),T)),()=>{w.Dc(),h.asyncQueue.enqueueAndForget(async()=>Qd(await ni(h),T))}}(rt(u),l,a,c)}function SN(n,e){return Vk(rt(n=pe(n,Le)),ph(e)?e:{next:e})}function la(n,e){return function(t,r){const s=new Ze;return t.asyncQueue.enqueueAndForget(async()=>dk(await cf(t),r,s)),s.promise}(rt(n),e)}function _f(n,e,t){const r=t.docs.get(e._key),s=new ps(n);return new Rn(n,s,e._key,r,new $r(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const CN={maxAttempts:5};/**
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
 */class AN{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ds(e)}set(e,t,r){this._verifyNotCommitted();const s=Jn(e,this._firestore),i=Ou(s.converter,t,r),o=xu(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,ke.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Jn(e,this._firestore);let o;return o=typeof(t=ye(t))=="string"||t instanceof gr?ff(this._dataReader,"WriteBatch.update",i._key,t,r,s):df(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Jn(e,this._firestore);return this._mutations=this._mutations.concat(new vi(t._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jn(n,e){if((n=ye(n)).firestore!==e)throw new E(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 *//**
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
 */class xN extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ds(e)}get(e){const t=Jn(e,this._firestore),r=new mN(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return U();const i=s[0];if(i.isFoundDocument())return new Ro(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new Ro(this._firestore,r,t._key,null,t.converter);throw U()})}set(e,t,r){const s=Jn(e,this._firestore),i=Ou(s.converter,t,r),o=xu(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=Jn(e,this._firestore);let o;return o=typeof(t=ye(t))=="string"||t instanceof gr?ff(this._dataReader,"Transaction.update",i._key,t,r,s):df(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Jn(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Jn(e,this._firestore),r=new ps(this._firestore);return super.get(e).then(s=>new Rn(this._firestore,r,t._key,s._document,new $r(!1,!1),t.converter))}}function DN(n,e,t){n=pe(n,Le);const r=Object.assign(Object.assign({},CN),t);return function(s){if(s.maxAttempts<1)throw new E(v.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new Ze;return s.asyncQueue.enqueueAndForget(async()=>{const c=await Pk(s);new Nk(s.asyncQueue,c,o,i,a).run()}),a.promise}(rt(n),s=>e(new xN(n,s)),r)}/**
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
 */function kN(){return new ca("deleteField")}function NN(){return new hf("serverTimestamp")}function RN(...n){return new rN("arrayUnion",n)}function PN(...n){return new sN("arrayRemove",n)}function ON(n){return new iN("increment",n)}(function(n,e=!0){(function(t){gi=t})(yr),or(new xn("firestore",(t,{instanceIdentifier:r,options:s})=>{const i=t.getProvider("app").getImmediate(),o=new Le(new qA(t.getProvider("auth-internal")),new HA(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Gt(Qp,"3.13.0",n),Gt(Qp,"3.13.0","esm2017")})();const MN="@firebase/firestore-compat",LN="0.3.12";/**
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
 */function If(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function tm(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function nm(){if(!vx())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Po{constructor(e){this._delegate=e}static fromBase64String(e){return nm(),new Po(wn.fromBase64String(e))}static fromUint8Array(e){return tm(),new Po(wn.fromUint8Array(e))}toBase64(){return nm(),this._delegate.toBase64()}toUint8Array(){return tm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function mh(n){return FN(n,["next","error","complete"])}function FN(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class VN{enableIndexedDbPersistence(e,t){return Hk(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Gk(e._delegate)}clearIndexedDbPersistence(e){return Wk(e._delegate)}}class OI{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof hr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Zt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){pI(this._delegate,e,t,r)}enableNetwork(){return Yk(this._delegate)}disableNetwork(){return Xk(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,dI("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Qk(this._delegate)}onSnapshotsInSync(e){return SN(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ri(this,lf(this._delegate,e))}catch(t){throw gt(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ut(this,Dc(this._delegate,e))}catch(t){throw gt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new pt(this,$k(this._delegate,e))}catch(t){throw gt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return DN(this._delegate,t=>e(new MI(this,t)))}batch(){return rt(this._delegate),new LI(new AN(this._delegate,e=>la(this._delegate,e)))}loadBundle(e){return Jk(this._delegate,e)}namedQuery(e){return Zk(this._delegate,e).then(t=>t?new pt(this,t):null)}}class Mu extends wf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Po(new wn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ut.forKey(t,this.firestore,null)}}function UN(n){VA(n)}class MI{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Mu(e)}get(e){const t=qr(e);return this._delegate.get(t).then(r=>new Oo(this._firestore,new Rn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=qr(e);return r?(If("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=qr(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=qr(e);return this._delegate.delete(t),this}}class LI{constructor(e){this._delegate=e}set(e,t,r){const s=qr(e);return r?(If("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=qr(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=qr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class os{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new to(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Mo(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=os.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new os(e,new Mu(e),t),s.set(t,i)),i}}os.INSTANCES=new WeakMap;class Ut{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Mu(e)}static forPath(e,t,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ut(t,new xe(t._delegate,r,new R(e)))}static forKey(e,t,r){return new Ut(t,new xe(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ri(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ri(this.firestore,lf(this._delegate,e))}catch(t){throw gt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ye(e),e instanceof xe?gI(this._delegate,e):!1}set(e,t){t=If("DocumentReference.set",t);try{return t?Zg(this._delegate,e,t):Zg(this._delegate,e)}catch(r){throw gt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?em(this._delegate,e):em(this._delegate,e,t,...r)}catch(s){throw gt(s,"updateDoc()","DocumentReference.update()")}}delete(){return bN(this._delegate)}onSnapshot(...e){const t=FI(e),r=VI(e,s=>new Oo(this.firestore,new Rn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return PI(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=wN(this._delegate):(e==null?void 0:e.source)==="server"?t=_N(this._delegate):t=vN(this._delegate),t.then(r=>new Oo(this.firestore,new Rn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ut(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gt(n,e,t){return n.message=n.message.replace(e,t),n}function FI(n){for(const e of n)if(typeof e=="object"&&!mh(e))return e;return{}}function VI(n,e){var t,r;let s;return mh(n[0])?s=n[0]:mh(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Oo{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ut(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return NI(this._delegate,e._delegate)}}class Mo extends Oo{data(e){const t=this._delegate.data(e);return UA(t!==void 0),t}}class pt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Mu(e)}where(e,t,r){try{return new pt(this.firestore,qn(this._delegate,cN(e,t,r)))}catch(s){throw gt(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new pt(this.firestore,qn(this._delegate,uN(e,t)))}catch(r){throw gt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new pt(this.firestore,qn(this._delegate,lN(e)))}catch(t){throw gt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new pt(this.firestore,qn(this._delegate,hN(e)))}catch(t){throw gt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new pt(this.firestore,qn(this._delegate,dN(...e)))}catch(t){throw gt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new pt(this.firestore,qn(this._delegate,fN(...e)))}catch(t){throw gt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new pt(this.firestore,qn(this._delegate,pN(...e)))}catch(t){throw gt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new pt(this.firestore,qn(this._delegate,gN(...e)))}catch(t){throw gt(t,"endAt()","Query.endAt()")}}isEqual(e){return mI(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=IN(this._delegate):(e==null?void 0:e.source)==="server"?t=EN(this._delegate):t=RI(this._delegate),t.then(r=>new yh(this.firestore,new mr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=FI(e),r=VI(e,s=>new yh(this.firestore,new mr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return PI(this._delegate,t,r)}withConverter(e){return new pt(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class BN{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Mo(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yh{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Mo(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new BN(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Mo(this._firestore,r))})}isEqual(e){return NI(this._delegate,e._delegate)}}class ri extends pt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ut(this.firestore,e):null}doc(e){try{return e===void 0?new Ut(this.firestore,Dc(this._delegate)):new Ut(this.firestore,Dc(this._delegate,e))}catch(t){throw gt(t,"doc()","CollectionReference.doc()")}}add(e){return TN(this._delegate,e).then(t=>new Ut(this.firestore,t))}isEqual(e){return gI(this._delegate,e._delegate)}withConverter(e){return new ri(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function qr(n){return pe(n,xe)}/**
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
 */class Ef{constructor(...e){this._delegate=new gr(...e)}static documentId(){return new Ef(Ue.keyField().canonicalString())}isEqual(e){return e=ye(e),e instanceof gr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Fr{constructor(e){this._delegate=e}static serverTimestamp(){const e=NN();return e._methodName="FieldValue.serverTimestamp",new Fr(e)}static delete(){const e=kN();return e._methodName="FieldValue.delete",new Fr(e)}static arrayUnion(...e){const t=RN(...e);return t._methodName="FieldValue.arrayUnion",new Fr(t)}static arrayRemove(...e){const t=PN(...e);return t._methodName="FieldValue.arrayRemove",new Fr(t)}static increment(e){const t=ON(e);return t._methodName="FieldValue.increment",new Fr(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const $N={Firestore:OI,GeoPoint:Cu,Timestamp:Ne,Blob:Po,Transaction:MI,WriteBatch:LI,DocumentReference:Ut,DocumentSnapshot:Oo,Query:pt,QueryDocumentSnapshot:Mo,QuerySnapshot:yh,CollectionReference:ri,FieldPath:Ef,FieldValue:Fr,setLogLevel:UN,CACHE_SIZE_UNLIMITED:zk};function qN(n,e){n.INTERNAL.registerComponent(new xn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},$N)))}/**
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
 */function jN(n){qN(n,(e,t)=>new OI(e,t,new VN)),n.registerVersion(MN,LN)}jN(kC);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof window<"u";function zN(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ge=Object.assign;function fl(n,e){const t={};for(const r in e){const s=e[r];t[r]=en(s)?s.map(n):n(s)}return t}const no=()=>{},en=Array.isArray,KN=/\/$/,HN=n=>n.replace(KN,"");function pl(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=n(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=YN(r??e,t),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function GN(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function rm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function WN(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&si(e.matched[r],t.matched[s])&&UI(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function si(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function UI(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!QN(n[t],e[t]))return!1;return!0}function QN(n,e){return en(n)?sm(n,e):en(e)?sm(e,n):n===e}function sm(n,e){return en(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function YN(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/");let s=t.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Lo;(function(n){n.pop="pop",n.push="push"})(Lo||(Lo={}));var ro;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ro||(ro={}));function XN(n){if(!n)if(As){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),HN(n)}const JN=/^[^#]+#/;function ZN(n,e){return n.replace(JN,"#")+e}function eR(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Lu=()=>({left:window.pageXOffset,top:window.pageYOffset});function tR(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=eR(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function im(n,e){return(history.state?history.state.position-e:-1)+n}const vh=new Map;function nR(n,e){vh.set(n,e)}function rR(n){const e=vh.get(n);return vh.delete(n),e}let sR=()=>location.protocol+"//"+location.host;function BI(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let a=s.includes(n.slice(i))?n.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),rm(c,"")}return rm(t,n)+r+s}function iR(n,e,t,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=BI(n,location),m=t.value,w=e.value;let T=0;if(d){if(t.value=p,e.value=d,o&&o===m){o=null;return}T=w?d.position-w.position:0}else r(p);s.forEach(x=>{x(t.value,m,{delta:T,type:Lo.pop,direction:T?T>0?ro.forward:ro.back:ro.unknown})})};function c(){o=t.value}function u(d){s.push(d);const p=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Lu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function om(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?Lu():null}}function oR(n){const{history:e,location:t}=window,r={value:BI(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:sR()+n+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),t[l?"replace":"assign"](d)}}function o(c,u){const l=ge({},e.state,om(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ge({},s.value,e.state,{forward:c,scroll:Lu()});i(l.current,l,!0);const h=ge({},om(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function aR(n){n=XN(n);const e=oR(n),t=iR(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=ge({location:"",base:n,go:r,createHref:ZN.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cR(n){return typeof n=="string"||n&&typeof n=="object"}function $I(n){return typeof n=="string"||typeof n=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qI=Symbol("");var am;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(am||(am={}));function ii(n,e){return ge(new Error,{type:n,[qI]:!0},e)}function In(n,e){return n instanceof Error&&qI in n&&(e==null||!!(n.type&e))}const cm="[^/]+?",uR={sensitive:!1,strict:!1,start:!0,end:!0},lR=/[.+*?^${}()[\]/\\]/g;function hR(n,e){const t=ge({},uR,e),r=[];let s=t.start?"^":"";const i=[];for(const u of n){const l=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(lR,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:w,optional:T,regexp:x}=d;i.push({name:m,repeatable:w,optional:T});const F=x||cm;if(F!==cm){p+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+z.message)}}let D=w?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(D=T&&u.length<2?`(?:/${D})`:"/"+D),T&&(D+="?"),s+=D,p+=20,T&&(p+=-8),w&&(p+=-20),F===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of n){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:m,repeatable:w,optional:T}=p,x=m in u?u[m]:"";if(en(x)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=en(x)?x.join("/"):x;if(!F)if(T)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=F}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function dR(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fR(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=dR(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(um(r))return 1;if(um(s))return-1}return s.length-r.length}function um(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const pR={type:0,value:""},gR=/[a-zA-Z0-9_]/;function mR(n){if(!n)return[[]];if(n==="/")return[[pR]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=0,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:gR.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:t=3:l+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function yR(n,e,t){const r=hR(mR(n.path),t),s=ge(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vR(n,e){const t=[],r=new Map;e=dm({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const p=!d,m=wR(l);m.aliasOf=d&&d.record;const w=dm(e,l),T=[m];if("alias"in l){const D=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of D)T.push(ge({},m,{components:d?d.record.components:m.components,path:z,aliasOf:d?d.record:m}))}let x,F;for(const D of T){const{path:z}=D;if(h&&z[0]!=="/"){const Q=h.record.path,Y=Q[Q.length-1]==="/"?"":"/";D.path=h.record.path+(z&&Y+z)}if(x=yR(D,h,w),d?d.alias.push(x):(F=F||x,F!==x&&F.alias.push(x),p&&l.name&&!hm(x)&&o(l.name)),m.children){const Q=m.children;for(let Y=0;Y<Q.length;Y++)i(Q[Y],x,d&&d.children[Y])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return F?()=>{o(F)}:no}function o(l){if($I(l)){const h=r.get(l);h&&(r.delete(l),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(l);h>-1&&(t.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return t}function c(l){let h=0;for(;h<t.length&&fR(l,t[h])>=0&&(l.record.path!==t[h].record.path||!jI(l,t[h]));)h++;t.splice(h,0,l),l.record.name&&!hm(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},m,w;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw ii(1,{location:l});w=d.record.name,p=ge(lm(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),l.params&&lm(l.params,d.keys.map(F=>F.name))),m=d.stringify(p)}else if("path"in l)m=l.path,d=t.find(F=>F.re.test(m)),d&&(p=d.parse(m),w=d.record.name);else{if(d=h.name?r.get(h.name):t.find(F=>F.re.test(h.path)),!d)throw ii(1,{location:l,currentLocation:h});w=d.record.name,p=ge({},h.params,l.params),m=d.stringify(p)}const T=[];let x=d;for(;x;)T.unshift(x.record),x=x.parent;return{name:w,path:m,params:p,matched:T,meta:IR(T)}}return n.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function lm(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function wR(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:_R(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function _R(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function hm(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function IR(n){return n.reduce((e,t)=>ge(e,t.meta),{})}function dm(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function jI(n,e){return e.children.some(t=>t===n||jI(n,t))}const zI=/#/g,ER=/&/g,bR=/\//g,TR=/=/g,SR=/\?/g,KI=/\+/g,CR=/%5B/g,AR=/%5D/g,HI=/%5E/g,xR=/%60/g,GI=/%7B/g,DR=/%7C/g,WI=/%7D/g,kR=/%20/g;function bf(n){return encodeURI(""+n).replace(DR,"|").replace(CR,"[").replace(AR,"]")}function NR(n){return bf(n).replace(GI,"{").replace(WI,"}").replace(HI,"^")}function wh(n){return bf(n).replace(KI,"%2B").replace(kR,"+").replace(zI,"%23").replace(ER,"%26").replace(xR,"`").replace(GI,"{").replace(WI,"}").replace(HI,"^")}function RR(n){return wh(n).replace(TR,"%3D")}function PR(n){return bf(n).replace(zI,"%23").replace(SR,"%3F")}function OR(n){return n==null?"":PR(n).replace(bR,"%2F")}function Nc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function MR(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(KI," "),o=i.indexOf("="),a=Nc(o<0?i:i.slice(0,o)),c=o<0?null:Nc(i.slice(o+1));if(a in e){let u=e[a];en(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function fm(n){let e="";for(let t in n){const r=n[t];if(t=RR(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(en(r)?r.map(i=>i&&wh(i)):[r&&wh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function LR(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const FR=Symbol(""),pm=Symbol(""),Fu=Symbol(""),QI=Symbol(""),_h=Symbol("");function Mi(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Hn(n,e,t,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ii(4,{from:t,to:e})):h instanceof Error?a(h):cR(h)?a(ii(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=n.call(r&&r.instances[s],e,t,c);let l=Promise.resolve(u);n.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function gl(n,e,t,r){const s=[];for(const i of n)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(VR(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Hn(u,t,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=zN(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Hn(d,t,r,i,o)()}))}}return s}function VR(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function gm(n){const e=Yt(Fu),t=Yt(QI),r=Rt(()=>e.resolve(Os(n.to))),s=Rt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=t.matched;if(!l||!h.length)return-1;const d=h.findIndex(si.bind(null,l));if(d>-1)return d;const p=mm(c[u-2]);return u>1&&mm(l)===p&&h[h.length-1].path!==p?h.findIndex(si.bind(null,c[u-2])):d}),i=Rt(()=>s.value>-1&&qR(t.params,r.value.params)),o=Rt(()=>s.value>-1&&s.value===t.matched.length-1&&UI(t.params,r.value.params));function a(c={}){return $R(c)?e[Os(n.replace)?"replace":"push"](Os(n.to)).catch(no):Promise.resolve()}return{route:r,href:Rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const UR=Gc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gm,setup(n,{slots:e}){const t=di(gm(n)),{options:r}=Yt(Fu),s=Rt(()=>({[ym(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[ym(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&e.default(t);return n.custom?i:gv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),BR=UR;function $R(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function qR(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function mm(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ym=(n,e,t)=>n??e??t,jR=Gc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Yt(_h),s=Rt(()=>n.route||r.value),i=Yt(pm,0),o=Rt(()=>{let u=Os(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Rt(()=>s.value.matched[o.value]);Va(pm,Rt(()=>o.value+1)),Va(FR,a),Va(_h,s);const c=jt();return Ki(()=>[c.value,a.value,n.name],([u,l,h],[d,p,m])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!si(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,l=n.name,h=a.value,d=h&&h.components[l];if(!d)return vm(t.default,{Component:d,route:u});const p=h.props[l],m=p?p===!0?u.params:typeof p=="function"?p(u):p:null,T=gv(d,ge({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return vm(t.default,{Component:T,route:u})||T}}});function vm(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const YI=jR;function zR(n){const e=vR(n.routes,n),t=n.parseQuery||MR,r=n.stringifyQuery||fm,s=n.history,i=Mi(),o=Mi(),a=Mi(),c=xS(jn);let u=jn;As&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=fl.bind(null,b=>""+b),h=fl.bind(null,OR),d=fl.bind(null,Nc);function p(b,B){let L,K;return $I(b)?(L=e.getRecordMatcher(b),K=B):K=b,e.addRoute(K,L)}function m(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function w(){return e.getRoutes().map(b=>b.record)}function T(b){return!!e.getRecordMatcher(b)}function x(b,B){if(B=ge({},B||c.value),typeof b=="string"){const f=pl(t,b,B.path),g=e.resolve({path:f.path},B),_=s.createHref(f.fullPath);return ge(f,g,{params:d(g.params),hash:Nc(f.hash),redirectedFrom:void 0,href:_})}let L;if("path"in b)L=ge({},b,{path:pl(t,b.path,B.path).path});else{const f=ge({},b.params);for(const g in f)f[g]==null&&delete f[g];L=ge({},b,{params:h(b.params)}),B.params=h(B.params)}const K=e.resolve(L,B),he=b.hash||"";K.params=l(d(K.params));const Pe=GN(r,ge({},b,{hash:NR(he),path:K.path})),ie=s.createHref(Pe);return ge({fullPath:Pe,hash:he,query:r===fm?LR(b.query):b.query||{}},K,{redirectedFrom:void 0,href:ie})}function F(b){return typeof b=="string"?pl(t,b,c.value.path):ge({},b)}function D(b,B){if(u!==b)return ii(8,{from:B,to:b})}function z(b){return W(b)}function Q(b){return z(ge(F(b),{replace:!0}))}function Y(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let K=typeof L=="function"?L(b):L;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=F(K):{path:K},K.params={}),ge({query:b.query,hash:b.hash,params:"path"in K?{}:b.params},K)}}function W(b,B){const L=u=x(b),K=c.value,he=b.state,Pe=b.force,ie=b.replace===!0,f=Y(L);if(f)return W(ge(F(f),{state:typeof f=="object"?ge({},he,f.state):he,force:Pe,replace:ie}),B||L);const g=L;g.redirectedFrom=B;let _;return!Pe&&WN(r,K,L)&&(_=ii(16,{to:g,from:K}),Tr(K,K,!0,!1)),(_?Promise.resolve(_):De(g,K)).catch(I=>In(I)?In(I,2)?I:Bt(I):Ie(I,g,K)).then(I=>{if(I){if(In(I,2))return W(ge({replace:ie},F(I.to),{state:typeof I.to=="object"?ge({},he,I.to.state):he,force:Pe}),B||g)}else I=_t(g,K,!0,ie,he);return qe(g,K,I),I})}function X(b,B){const L=D(b,B);return L?Promise.reject(L):Promise.resolve()}function De(b,B){let L;const[K,he,Pe]=KR(b,B);L=gl(K.reverse(),"beforeRouteLeave",b,B);for(const f of K)f.leaveGuards.forEach(g=>{L.push(Hn(g,b,B))});const ie=X.bind(null,b,B);return L.push(ie),Is(L).then(()=>{L=[];for(const f of i.list())L.push(Hn(f,b,B));return L.push(ie),Is(L)}).then(()=>{L=gl(he,"beforeRouteUpdate",b,B);for(const f of he)f.updateGuards.forEach(g=>{L.push(Hn(g,b,B))});return L.push(ie),Is(L)}).then(()=>{L=[];for(const f of b.matched)if(f.beforeEnter&&!B.matched.includes(f))if(en(f.beforeEnter))for(const g of f.beforeEnter)L.push(Hn(g,b,B));else L.push(Hn(f.beforeEnter,b,B));return L.push(ie),Is(L)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),L=gl(Pe,"beforeRouteEnter",b,B),L.push(ie),Is(L))).then(()=>{L=[];for(const f of o.list())L.push(Hn(f,b,B));return L.push(ie),Is(L)}).catch(f=>In(f,8)?f:Promise.reject(f))}function qe(b,B,L){for(const K of a.list())K(b,B,L)}function _t(b,B,L,K,he){const Pe=D(b,B);if(Pe)return Pe;const ie=B===jn,f=As?history.state:{};L&&(K||ie?s.replace(b.fullPath,ge({scroll:ie&&f&&f.scroll},he)):s.push(b.fullPath,he)),c.value=b,Tr(b,B,L,ie),Bt()}let Lt;function Fn(){Lt||(Lt=s.listen((b,B,L)=>{if(!ha.listening)return;const K=x(b),he=Y(K);if(he){W(ge(he,{replace:!0}),K).catch(no);return}u=K;const Pe=c.value;As&&nR(im(Pe.fullPath,L.delta),Lu()),De(K,Pe).catch(ie=>In(ie,12)?ie:In(ie,2)?(W(ie.to,K).then(f=>{In(f,20)&&!L.delta&&L.type===Lo.pop&&s.go(-1,!1)}).catch(no),Promise.reject()):(L.delta&&s.go(-L.delta,!1),Ie(ie,K,Pe))).then(ie=>{ie=ie||_t(K,Pe,!1),ie&&(L.delta&&!In(ie,8)?s.go(-L.delta,!1):L.type===Lo.pop&&In(ie,20)&&s.go(-1,!1)),qe(K,Pe,ie)}).catch(no)}))}let Dt=Mi(),Ye=Mi(),je;function Ie(b,B,L){Bt(b);const K=Ye.list();return K.length?K.forEach(he=>he(b,B,L)):console.error(b),Promise.reject(b)}function we(){return je&&c.value!==jn?Promise.resolve():new Promise((b,B)=>{Dt.add([b,B])})}function Bt(b){return je||(je=!b,Fn(),Dt.list().forEach(([B,L])=>b?L(b):B()),Dt.reset()),b}function Tr(b,B,L,K){const{scrollBehavior:he}=n;if(!As||!he)return Promise.resolve();const Pe=!L&&rR(im(b.fullPath,0))||(K||!L)&&history.state&&history.state.scroll||null;return Gh().then(()=>he(b,B,Pe)).then(ie=>ie&&tR(ie)).catch(ie=>Ie(ie,b,B))}const $t=b=>s.go(b);let It;const gs=new Set,ha={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:T,getRoutes:w,resolve:x,options:n,push:z,replace:Q,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ye.add,isReady:we,install(b){const B=this;b.component("RouterLink",BR),b.component("RouterView",YI),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(c)}),As&&!It&&c.value===jn&&(It=!0,z(s.location).catch(he=>{}));const L={};for(const he in jn)L[he]=Rt(()=>c.value[he]);b.provide(Fu,B),b.provide(QI,di(L)),b.provide(_h,c);const K=b.unmount;gs.add(b),b.unmount=function(){gs.delete(b),gs.size<1&&(u=jn,Lt&&Lt(),Lt=null,c.value=jn,It=!1,je=!1),K()}}};return ha}function Is(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function KR(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>si(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>si(u,c))||s.push(c))}return[t,r,s]}function Tf(){return Yt(Fu)}const Vu=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},wm={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},HR={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:n=>["horizontal","vertical","both","none"].includes(n)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return wm[this.type]||wm.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},GR=["width","height","viewBox"],WR=["d"];function QR(n,e,t,r,s,i){return Ft(),sn("svg",{width:i.sizeValue,height:i.sizeValue,viewBox:i.viewboxValue,style:Vc(i.styles)},[mt("path",{d:t.path},null,8,WR)],12,GR)}const YR=Vu(HR,[["render",QR],["__scopeId","data-v-76aa6b74"]]);var XR="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z",AP="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z",JR="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z";const Sf=_C("items",{state:()=>({items:[],cart:[],user:{loggedIn:!1,data:null}}),getters:{cartCount:n=>n.cart.length,userState:n=>n.user},actions:{addToCart(n){this.cart.push(n)},async loadItemsFromFirebase(){try{const n=Kk(),e=lf(n,"items");(await RI(e)).forEach(r=>{const s=r.data(),i=r.id,o=s;o.id=i,this.items.push(o)})}catch(n){console.log("Error getting documents",n)}},deleteItemFromCart(n){const e=this.cart.findIndex(t=>t.id===n.id);this.cart.splice(e,1)},async register({email:n,password:e,name:t}){const r=await _b(Wa,n,e);if(r){const s=r.user;s&&(this.user.data=s,bb(s,{displayName:t}))}else throw new Error("Unable to register user")},async logIn({email:n,password:e}){const t=await Ib(Wa,n,e);if(t)this.user.data=t.user,this.user.loggedIn=!0;else throw new Error("login failed")},async logout(){await Cb(Wa),this.user.data=null,this.user.loggedIn=!1}}}),ZR={components:{SvgIcon:YR},data(){const n=Sf(),e=Tf(),t=jt(null);return{mdiCart:XR,mdiLogout:JR,Logout:async()=>{try{await n.logout(),e.push("/login")}catch(s){t.value=s.message}}}}},eP="/vue-fb-shop/assets/1-ba8725f8.png";const tP=n=>(qS("data-v-c05c96c2"),n=n(),jS(),n),nP={class:"logo"},rP=tP(()=>mt("img",{src:eP,alt:"logo"},null,-1)),sP={class:"rightSideIcons"};function iP(n,e,t,r,s,i){const o=uc("router-link"),a=uc("svg-icon");return Ft(),sn("nav",null,[mt("div",nP,[He(o,{to:"/"},{default:Fa(()=>[rP]),_:1})]),mt("h2",null,[He(o,{to:"/shop"},{default:Fa(()=>[dv("Shop")]),_:1})]),mt("div",sP,[He(o,{to:"/cart"},{default:Fa(()=>[He(a,{type:"mdi",path:s.mdiCart},null,8,["path"])]),_:1}),mt("div",{class:"iconStyle",onClick:e[0]||(e[0]=(...c)=>s.Logout&&s.Logout(...c))},[He(a,{type:"mdi",path:s.mdiLogout},null,8,["path"])])])])}const oP=Vu(ZR,[["render",iP],["__scopeId","data-v-c05c96c2"]]),aP=Gc({components:{TheNavbar:oP,RouterView:YI},created(){Sf().loadItemsFromFirebase();const n=Tf();Wa.onAuthStateChanged(function(e){e?n.push("shop"):n.push("login")})},computed:{isLogin(){return console.log(this.$route.path),this.$route.path==="/login"||this.$route.path==="/"}}});function cP(n,e,t,r,s,i){const o=uc("TheNavbar"),a=uc("RouterView");return Ft(),sn(rn,null,[n.isLogin?Es("",!0):(Ft(),lv(o,{key:0})),He(a)],64)}const uP=Vu(aP,[["render",cP]]);const lP="modulepreload",hP=function(n){return"/vue-fb-shop/"+n},_m={},Im=function(e,t,r){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=hP(i),i in _m)return;_m[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const h=s[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":lP,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},dP={setup(){const n=jt(""),e=jt(""),t=jt(""),r=jt(""),s=jt(""),i=jt(null),o=jt(!1),a=Sf(),c=Tf();return{Register:async()=>{try{await a.register({email:e.value,password:t.value,name:n.value})}catch(h){i.value=h.message}},register:o,Login:async()=>{try{console.log(r.value,s.value),await a.logIn({email:r.value,password:s.value}),c.push("/shop")}catch(h){i.value=h.message}},name:n,email:e,password:t,error:i,emailLog:r,passwordLog:s}}};const fP={id:"container"},pP={key:0,class:"form-group"},gP={key:0,type:"submit"},mP={key:1,class:"form-group"},yP={key:0,type:"submit"};function vP(n,e,t,r,s,i){return Ft(),sn("div",fP,[r.register?Es("",!0):(Ft(),sn("div",pP,[mt("form",{action:"#",onSubmit:e[3]||(e[3]=kp((...o)=>r.Login&&r.Login(...o),["prevent"]))},[Ti(mt("input",{required:"",value:"",type:"email",placeholder:"Enter your mail","onUpdate:modelValue":e[0]||(e[0]=o=>r.emailLog=o)},null,512),[[Ci,r.emailLog]]),Ti(mt("input",{required:"",type:"password",placeholder:"Enter your password","onUpdate:modelValue":e[1]||(e[1]=o=>r.passwordLog=o)},null,512),[[Ci,r.passwordLog]]),r.register?Es("",!0):(Ft(),sn("button",gP,"Log in")),r.register?Es("",!0):(Ft(),sn("button",{key:1,onClick:e[2]||(e[2]=o=>r.register=!r.register)},"Register"))],32)])),r.register?(Ft(),sn("div",mP,[mt("form",{action:"#",onSubmit:e[7]||(e[7]=kp((...o)=>r.Register&&r.Register(...o),["prevent"]))},[Ti(mt("input",{required:"",type:"text",placeholder:"Enter your mail","onUpdate:modelValue":e[4]||(e[4]=o=>r.email=o)},null,512),[[Ci,r.email]]),Ti(mt("input",{required:"",type:"text",placeholder:"Enter your name","onUpdate:modelValue":e[5]||(e[5]=o=>r.name=o)},null,512),[[Ci,r.name]]),Ti(mt("input",{required:"",type:"password",placeholder:"Enter your password","onUpdate:modelValue":e[6]||(e[6]=o=>r.password=o)},null,512),[[Ci,r.password]]),r.register?(Ft(),sn("button",yP,"Register")):Es("",!0)],32)])):Es("",!0)])}const wP=Vu(dP,[["render",vP],["__scopeId","data-v-edcd46bd"]]),_P=Gc({__name:"HomeView",setup(n){return(e,t)=>(Ft(),sn("main",null,[He(wP)]))}}),IP=zR({history:aR("/vue-fb-shop/"),routes:[{path:"/login",name:"login",component:_P},{path:"/shop",name:"shop",component:()=>Im(()=>import("./ShopView-c246c2c6.js"),["assets/ShopView-c246c2c6.js","assets/ShopView-4c0b4d75.css"])},{path:"/cart",name:"cart",component:()=>Im(()=>import("./CartView-c2737500.js"),["assets/CartView-c2737500.js","assets/CartView-0c93210c.css"])}]}),Cf=dC(uP);Cf.use(gC());const EP={apiKey:"AIzaSyCTycCwnz6-fHABSxC9kvOUq2Lf69ufYcg",authDomain:"vue-shop-3ee19.firebaseapp.com",projectId:"vue-shop-3ee19",storageBucket:"vue-shop-3ee19.appspot.com",messagingSenderId:"472574649664",appId:"1:472574649664:web:15f0071f004dff311446a"},bP=Oc(EP),Wa=VT(bP);Cf.use(IP);Cf.mount("#app");export{rn as F,YR as S,Vu as _,mt as a,jS as b,sn as c,Gc as d,uc as e,lv as f,He as g,Es as h,AP as m,Ft as o,qS as p,CP as r,SP as t,Sf as u};

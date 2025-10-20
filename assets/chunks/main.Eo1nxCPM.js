var Po=Object.defineProperty;var Cr=t=>{throw TypeError(t)};var ko=(t,e,n)=>e in t?Po(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ge=(t,e,n)=>ko(t,typeof e!="symbol"?e+"":e,n),$n=(t,e,n)=>e.has(t)||Cr("Cannot "+n);var lt=(t,e,n)=>($n(t,e,"read from private field"),n?n.call(t):e.get(t)),ot=(t,e,n)=>e.has(t)?Cr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Oe=(t,e,n,r)=>($n(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),j=(t,e,n)=>($n(t,e,"access private method"),n);import{e as To,a as Bo,i as At,E as wt,x as S,Z as Oo,T as Kr}from"./addCommonStyleSheet.CXO9DRSZ.js";import{n as X,_ as nn}from"./index.D5gLjDv7.js";import{g as Jn,c as Rt}from"./commonjsHelpers.Cpj98o6Y.js";import{f as Ue,a as En,p as jo,m as No,l as Ho}from"./toolcool-range-slider.min.CG0RIoNP.js";import{o as Io}from"./orient2d.DArCjZZA.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*rn(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}const Fo=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  height: 100%;
  overflow: hidden;
}
details {
  width: 100%;
}
`;Bo();const Zn=`
${To}
.field {
  margin-block-end: 0;
}
.field.small>:is(input,textarea,select) {
  font-size: 0.75rem;
}

:host, :root {
  --primary-color: var(--primary);
  --secondary-color: var(--secondary);
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--surface) 80%,
    transparent
  );
  --item-select-color: var(--surface-variant);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --padding-vertical: 0.25rem;
  --list-padding: 2rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
}
eox-itemfilter-results {
  flex-grow: 1;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
eox-itemfilter-results button.chip {
  pointer-events: none;
}
.list li {
  padding: 0 var(--padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--text-transform);
}
.subtitle {
  opacity: .7;
}
.image {
  object-fit: cover;
  overflow: hidden;
}
.title-container {
  display: flex;
  flex-direction: column;
}
eox-itemfilter-expandcontainer {
  max-height: 300px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--list-padding) !important;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
#container-results {
  border-radius: none;
}
.no-results {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: .5rem var(--padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
}
eox-layout-item > span {
  display: block;
  height: 100%;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item nav {
  height: 100%;
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--background-color);
}
nav.title-nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 32px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  overflow-x: auto;
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
-container-results::-webkit-scrollbar,
.inline-container::-webkit-scrollbar,
.inline-content::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li,
.multiselect li,
eox-itemfilter-results li {
  border-radius: .5rem !important;
  display: flex;
  justify-content: space-between;
  min-block-size: 32px !important;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover,
details summary:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: white;
  background: var(--item-select-color);
}
mark.highlight {
  all: inherit;
  display: inline;
  background: yellow;
  color: black;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
  max-width: 170px;
}
.select-overflow {
  max-height: calc(32px * var(--select-filter-max-items));
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
  align-items: center;
}
.chip {
  white-space: nowrap;
}
.input-container.field {
  min-width: 10rem;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: #ba1a1a !important;
  font-size: x-small;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--background-color);
}
`;var Xe,Vr;class qo extends At{constructor(){super();ot(this,Xe);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return S`
      <style>
        ${!this.unstyled&&Zn}
      </style>

      ${X(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${j(this,Xe,Vr)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||wt}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title||this.filterObject.key||"Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}Xe=new WeakSet,Vr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",qo);function Pt(t){return Array.isArray?Array.isArray(t):Zr(t)==="[object Array]"}function Uo(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Wo(t){return t==null?"":Uo(t)}function vt(t){return typeof t=="string"}function Yr(t){return typeof t=="number"}function zo(t){return t===!0||t===!1||Go(t)&&Zr(t)=="[object Boolean]"}function Jr(t){return typeof t=="object"}function Go(t){return Jr(t)&&t!==null}function ct(t){return t!=null}function _n(t){return!t.trim().length}function Zr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ko="Incorrect 'index' type",Vo=t=>`Invalid value for key ${t}`,Yo=t=>`Pattern length exceeds max of ${t}.`,Jo=t=>`Missing ${t} property in key`,Zo=t=>`Property 'weight' in key '${t}' must be a positive integer`,Sr=Object.prototype.hasOwnProperty;class Xo{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Xr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Xr(t){let e=null,n=null,r=null,i=1,s=null;if(vt(t)||Pt(t))r=t,e=Lr(t),n=Dn(t);else{if(!Sr.call(t,"name"))throw new Error(Jo("name"));const a=t.name;if(r=a,Sr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Zo(a));e=Lr(a),n=Dn(a),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Lr(t){return Pt(t)?t:t.split(".")}function Dn(t){return Pt(t)?t.join("."):t}function Qo(t,e){let n=[],r=!1;const i=(s,a,l)=>{if(ct(s))if(!a[l])n.push(s);else{let c=a[l];const u=s[c];if(!ct(u))return;if(l===a.length-1&&(vt(u)||Yr(u)||zo(u)))n.push(Wo(u));else if(Pt(u)){r=!0;for(let h=0,p=u.length;h<p;h+=1)i(u[h],a,l+1)}else a.length&&i(u,a,l+1)}};return i(t,vt(e)?e.split("."):e,0),r?n:n[0]}const ta={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ea={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},na={location:0,threshold:.6,distance:100},ra={useExtendedSearch:!1,getFn:Qo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var L={...ea,...ta,...na,...ra};const ia=/[^ ]+/g;function sa(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(ia).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class Xn{constructor({getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){this.norm=sa(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,vt(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();vt(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!ct(e)||_n(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(ct(a)){if(Pt(a)){let l=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:h}=c.pop();if(ct(h))if(vt(h)&&!_n(h)){let p={v:h,i:u,n:this.norm.get(h)};l.push(p)}else Pt(h)&&h.forEach((p,y)=>{c.push({nestedArrIndex:y,value:p})})}r.$[s]=l}else if(vt(a)&&!_n(a)){let l={v:a,n:this.norm.get(a)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Qr(t,e,{getFn:n=L.getFn,fieldNormWeight:r=L.fieldNormWeight}={}){const i=new Xn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Xr)),i.setSources(e),i.create(),i}function oa(t,{getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new Xn({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function je(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=L.distance,ignoreLocation:s=L.ignoreLocation}={}){const a=e/t.length;if(s)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function aa(t=[],e=L.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=t.length;s<a;s+=1){let l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Gt=32;function la(t,e,n,{location:r=L.location,distance:i=L.distance,threshold:s=L.threshold,findAllMatches:a=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,includeMatches:c=L.includeMatches,ignoreLocation:u=L.ignoreLocation}={}){if(e.length>Gt)throw new Error(Yo(Gt));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let d=s,v=y;const x=l>1||c,D=x?Array(p):[];let E;for(;(E=t.indexOf(e,v))>-1;){let U=je(e,{currentLocation:E,expectedLocation:y,distance:i,ignoreLocation:u});if(d=Math.min(U,d),v=E+h,x){let et=0;for(;et<h;)D[E+et]=1,et+=1}}v=-1;let N=[],T=1,H=h+p;const I=1<<h-1;for(let U=0;U<h;U+=1){let et=0,J=H;for(;et<J;)je(e,{errors:U,currentLocation:y+J,expectedLocation:y,distance:i,ignoreLocation:u})<=d?et=J:H=J,J=Math.floor((H-et)/2+et);H=J;let W=Math.max(1,y-J+1),B=a?p:Math.min(y+J,p)+h,at=Array(B+2);at[B+1]=(1<<U)-1;for(let _=B;_>=W;_-=1){let w=_-1,b=n[t.charAt(w)];if(x&&(D[w]=+!!b),at[_]=(at[_+1]<<1|1)&b,U&&(at[_]|=(N[_+1]|N[_])<<1|1|N[_+1]),at[_]&I&&(T=je(e,{errors:U,currentLocation:w,expectedLocation:y,distance:i,ignoreLocation:u}),T<=d)){if(d=T,v=w,v<=y)break;W=Math.max(1,2*y-v)}}if(je(e,{errors:U+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:u})>d)break;N=at}const Q={isMatch:v>=0,score:Math.max(.001,T)};if(x){const U=aa(D,l);U.length?c&&(Q.indices=U):Q.isMatch=!1}return Q}function ca(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const We=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class ti{constructor(e,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:s=L.includeMatches,findAllMatches:a=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:c=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h},e=c?e:e.toLowerCase(),e=u?We(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const p=(d,v)=>{this.chunks.push({pattern:d,alphabet:ca(d),startIndex:v})},y=this.pattern.length;if(y>Gt){let d=0;const v=y%Gt,x=y-v;for(;d<x;)p(this.pattern.substr(d,Gt),d),d+=Gt;if(v){const D=y-Gt;p(this.pattern.substr(D),D)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?We(e):e,this.pattern===e){let x={isMatch:!0,score:0};return i&&(x.indices=[[0,e.length-1]]),x}const{location:s,distance:a,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options;let p=[],y=0,d=!1;this.chunks.forEach(({pattern:x,alphabet:D,startIndex:E})=>{const{isMatch:N,score:T,indices:H}=la(e,x,D,{location:s+E,distance:a,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});N&&(d=!0),y+=T,N&&H&&(p=[...p,...H])});let v={isMatch:d,score:d?y/this.chunks.length:1};return d&&i&&(v.indices=p),v}}class It{constructor(e){this.pattern=e}static isMultiMatch(e){return Er(e,this.multiRegex)}static isSingleMatch(e){return Er(e,this.singleRegex)}search(){}}function Er(t,e){const n=t.match(e);return n?n[1]:null}class ua extends It{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class fa extends It{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ha extends It{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class da extends It{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class pa extends It{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ga extends It{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ei extends It{constructor(e,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:s=L.includeMatches,findAllMatches:a=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:c=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){super(e),this._bitapSearch=new ti(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ni extends It{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Rn=[ua,ni,ha,da,ga,pa,fa,ei],Dr=Rn.length,ya=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ma="|";function va(t,e={}){return t.split(ma).map(n=>{let r=n.trim().split(ya).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=r.length;s<a;s+=1){const l=r[s];let c=!1,u=-1;for(;!c&&++u<Dr;){const h=Rn[u];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),c=!0)}if(!c)for(u=-1;++u<Dr;){const h=Rn[u];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const ba=new Set([ei.type,ni.type]);class wa{constructor(e,{isCaseSensitive:n=L.isCaseSensitive,ignoreDiacritics:r=L.ignoreDiacritics,includeMatches:i=L.includeMatches,minMatchCharLength:s=L.minMatchCharLength,ignoreLocation:a=L.ignoreLocation,findAllMatches:l=L.findAllMatches,location:c=L.location,threshold:u=L.threshold,distance:h=L.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:a,location:c,threshold:u,distance:h},e=n?e:e.toLowerCase(),e=r?We(e):e,this.pattern=e,this.query=va(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;e=i?e:e.toLowerCase(),e=s?We(e):e;let a=0,l=[],c=0;for(let u=0,h=n.length;u<h;u+=1){const p=n[u];l.length=0,a=0;for(let y=0,d=p.length;y<d;y+=1){const v=p[y],{isMatch:x,indices:D,score:E}=v.search(e);if(x){if(a+=1,c+=E,r){const N=v.constructor.type;ba.has(N)?l=[...l,...D]:l.push(D)}}else{c=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:c/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const Pn=[];function xa(...t){Pn.push(...t)}function kn(t,e){for(let n=0,r=Pn.length;n<r;n+=1){let i=Pn[n];if(i.condition(t,e))return new i(t,e)}return new ti(t,e)}const ze={AND:"$and",OR:"$or"},Tn={PATH:"$path",PATTERN:"$val"},Bn=t=>!!(t[ze.AND]||t[ze.OR]),Aa=t=>!!t[Tn.PATH],$a=t=>!Pt(t)&&Jr(t)&&!Bn(t),Rr=t=>({[ze.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ri(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const a=Aa(i);if(!a&&s.length>1&&!Bn(i))return r(Rr(i));if($a(i)){const c=a?i[Tn.PATH]:s[0],u=a?i[Tn.PATTERN]:i[c];if(!vt(u))throw new Error(Vo(c));const h={keyId:Dn(c),pattern:u};return n&&(h.searcher=kn(u,e)),h}let l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];Pt(u)&&u.forEach(h=>{l.children.push(r(h))})}),l};return Bn(t)||(t=Rr(t)),r(t)}function _a(t,{ignoreFieldNorm:e=L.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),n.score=r})}function Ma(t,e){const n=t.matches;e.matches=[],ct(n)&&n.forEach(r=>{if(!ct(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let a={indices:i,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Ca(t,e){e.score=t.score}function Sa(t,e,{includeMatches:n=L.includeMatches,includeScore:r=L.includeScore}={}){const i=[];return n&&i.push(Ma),r&&i.push(Ca),t.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return i.length&&i.forEach(c=>{c(s,l)}),l})}class Ft{constructor(e,n={},r){this.options={...L,...n},this.options.useExtendedSearch,this._keyStore=new Xo(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Xn))throw new Error(Ko);this._myIndex=n||Qr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){ct(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let c=vt(e)?vt(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return _a(c,{ignoreFieldNorm:l}),s&&c.sort(a),Yr(n)&&n>-1&&(c=c.slice(0,n)),Sa(c,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=kn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:a,n:l})=>{if(!ct(s))return;const{isMatch:c,score:u,indices:h}=n.searchIn(s);c&&i.push({item:s,idx:a,matches:[{score:u,value:s,norm:l,indices:h}]})}),i}_searchLogical(e){const n=ri(e,this.options),r=(l,c,u)=>{if(!l.children){const{keyId:p,searcher:y}=l,d=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(c,p),searcher:y});return d&&d.length?[{idx:u,item:c,matches:d}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const d=l.children[p],v=r(d,c,u);if(v.length)h.push(...v);else if(l.operator===ze.AND)return[]}return h},i=this._myIndex.records,s={},a=[];return i.forEach(({$:l,i:c})=>{if(ct(l)){let u=r(n,l,c);u.length&&(s[c]||(s[c]={idx:c,item:l,matches:[]},a.push(s[c])),u.forEach(({matches:h})=>{s[c].matches.push(...h)}))}}),a}_searchObjectList(e){const n=kn(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:l})=>{if(!ct(a))return;let c=[];r.forEach((u,h)=>{c.push(...this._findMatches({key:u,value:a[h],searcher:n}))}),c.length&&s.push({idx:l,item:a,matches:c})}),s}_findMatches({key:e,value:n,searcher:r}){if(!ct(n))return[];let i=[];if(Pt(n))n.forEach(({v:s,i:a,n:l})=>{if(!ct(s))return;const{isMatch:c,score:u,indices:h}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,idx:a,norm:l,indices:h})});else{const{v:s,n:a}=n,{isMatch:l,score:c,indices:u}=r.searchIn(s);l&&i.push({score:c,key:e,value:s,norm:a,indices:u})}return i}}Ft.version="7.1.0";Ft.createIndex=Qr;Ft.parseIndex=oa;Ft.config=L;Ft.parseQuery=ri;xa(wa);function ii(t,e){const n=new Ft(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,s=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=s.includes(a)||!r?"":"none"})}function La(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const On=Math.min,re=Math.max,Ge=Math.round,Ne=Math.floor,bt=t=>({x:t,y:t});function si(t){return t.split("-")[0]}function Ea(t){return t.split("-")[1]}function Da(t){return t==="x"?"y":"x"}function Ra(t){return t==="y"?"height":"width"}const Pa=new Set(["top","bottom"]);function oi(t){return Pa.has(si(t))?"y":"x"}function ka(t){return Da(oi(t))}function ai(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Pr(t,e,n){let{reference:r,floating:i}=t;const s=oi(e),a=ka(e),l=Ra(a),c=si(e),u=s==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let d;switch(c){case"top":d={x:h,y:r.y-i.height};break;case"bottom":d={x:h,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-i.width,y:p};break;default:d={x:r.x,y:r.y}}switch(Ea(e)){case"start":d[a]-=y*(n&&u?-1:1);break;case"end":d[a]+=y*(n&&u?-1:1);break}return d}const Ta=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=Pr(u,r,c),y=r,d={},v=0;for(let x=0;x<l.length;x++){const{name:D,fn:E}=l[x],{x:N,y:T,data:H,reset:I}=await E({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:d,rects:u,platform:a,elements:{reference:t,floating:e}});h=N??h,p=T??p,d={...d,[D]:{...d[D],...H}},I&&v<=50&&(v++,typeof I=="object"&&(I.placement&&(y=I.placement),I.rects&&(u=I.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):I.rects),{x:h,y:p}=Pr(u,y,c)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:d}};function sn(){return typeof window<"u"}function ce(t){return li(t)?(t.nodeName||"").toLowerCase():"#document"}function ut(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $t(t){var e;return(e=(li(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function li(t){return sn()?t instanceof Node||t instanceof ut(t).Node:!1}function yt(t){return sn()?t instanceof Element||t instanceof ut(t).Element:!1}function xt(t){return sn()?t instanceof HTMLElement||t instanceof ut(t).HTMLElement:!1}function kr(t){return!sn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ut(t).ShadowRoot}const Ba=new Set(["inline","contents"]);function xe(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=mt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!Ba.has(i)}const Oa=new Set(["table","td","th"]);function ja(t){return Oa.has(ce(t))}const Na=[":popover-open",":modal"];function on(t){return Na.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ha=["transform","translate","scale","rotate","perspective"],Ia=["transform","translate","scale","rotate","perspective","filter"],Fa=["paint","layout","strict","content"];function Qn(t){const e=tr(),n=yt(t)?mt(t):t;return Ha.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Ia.some(r=>(n.willChange||"").includes(r))||Fa.some(r=>(n.contain||"").includes(r))}function qa(t){let e=Nt(t);for(;xt(e)&&!oe(e);){if(Qn(e))return e;if(on(e))return null;e=Nt(e)}return null}function tr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ua=new Set(["html","body","#document"]);function oe(t){return Ua.has(ce(t))}function mt(t){return ut(t).getComputedStyle(t)}function an(t){return yt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Nt(t){if(ce(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kr(t)&&t.host||$t(t);return kr(e)?e.host:e}function ci(t){const e=Nt(t);return oe(e)?t.ownerDocument?t.ownerDocument.body:t.body:xt(e)&&xe(e)?e:ci(e)}function me(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=ci(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),a=ut(i);if(s){const l=jn(a);return e.concat(a,a.visualViewport||[],xe(i)?i:[],l&&n?me(l):[])}return e.concat(i,me(i,[],n))}function jn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ui(t){const e=mt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=xt(t),s=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ge(n)!==s||Ge(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function er(t){return yt(t)?t:t.contextElement}function ie(t){const e=er(t);if(!xt(e))return bt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=ui(e);let a=(s?Ge(n.width):n.width)/r,l=(s?Ge(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Wa=bt(0);function fi(t){const e=ut(t);return!tr()||!e.visualViewport?Wa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function za(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==ut(t)?!1:e}function Vt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=er(t);let a=bt(1);e&&(r?yt(r)&&(a=ie(r)):a=ie(t));const l=za(s,n,r)?fi(s):bt(0);let c=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(s){const y=ut(s),d=r&&yt(r)?ut(r):r;let v=y,x=jn(v);for(;x&&r&&d!==v;){const D=ie(x),E=x.getBoundingClientRect(),N=mt(x),T=E.left+(x.clientLeft+parseFloat(N.paddingLeft))*D.x,H=E.top+(x.clientTop+parseFloat(N.paddingTop))*D.y;c*=D.x,u*=D.y,h*=D.x,p*=D.y,c+=T,u+=H,v=ut(x),x=jn(v)}}return ai({width:h,height:p,x:c,y:u})}function nr(t,e){const n=an(t).scrollLeft;return e?e.left+n:Vt($t(t)).left+n}function hi(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:nr(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function Ga(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",a=$t(r),l=e?on(e.floating):!1;if(r===a||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=bt(1);const h=bt(0),p=xt(r);if((p||!p&&!s)&&((ce(r)!=="body"||xe(a))&&(c=an(r)),xt(r))){const d=Vt(r);u=ie(r),h.x=d.x+r.clientLeft,h.y=d.y+r.clientTop}const y=a&&!p&&!s?hi(a,c,!0):bt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+h.x+y.x,y:n.y*u.y-c.scrollTop*u.y+h.y+y.y}}function Ka(t){return Array.from(t.getClientRects())}function Va(t){const e=$t(t),n=an(t),r=t.ownerDocument.body,i=re(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=re(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+nr(t);const l=-n.scrollTop;return mt(r).direction==="rtl"&&(a+=re(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:a,y:l}}function Ya(t,e){const n=ut(t),r=$t(t),i=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){s=i.width,a=i.height;const u=tr();(!u||u&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:a,x:l,y:c}}const Ja=new Set(["absolute","fixed"]);function Za(t,e){const n=Vt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=xt(t)?ie(t):bt(1),a=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:a,height:l,x:c,y:u}}function Tr(t,e,n){let r;if(e==="viewport")r=Ya(t,n);else if(e==="document")r=Va($t(t));else if(yt(e))r=Za(e,n);else{const i=fi(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ai(r)}function di(t,e){const n=Nt(t);return n===e||!yt(n)||oe(n)?!1:mt(n).position==="fixed"||di(n,e)}function Xa(t,e){const n=e.get(t);if(n)return n;let r=me(t,[],!1).filter(l=>yt(l)&&ce(l)!=="body"),i=null;const s=mt(t).position==="fixed";let a=s?Nt(t):t;for(;yt(a)&&!oe(a);){const l=mt(a),c=Qn(a);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&Ja.has(i.position)||xe(a)&&!c&&di(t,a))?r=r.filter(h=>h!==a):i=l,a=Nt(a)}return e.set(t,r),r}function Qa(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?on(e)?[]:Xa(e,this._c):[].concat(n),r],l=a[0],c=a.reduce((u,h)=>{const p=Tr(e,h,i);return u.top=re(p.top,u.top),u.right=On(p.right,u.right),u.bottom=On(p.bottom,u.bottom),u.left=re(p.left,u.left),u},Tr(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function tl(t){const{width:e,height:n}=ui(t);return{width:e,height:n}}function el(t,e,n){const r=xt(e),i=$t(e),s=n==="fixed",a=Vt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=bt(0);function u(){c.x=nr(i)}if(r||!r&&!s)if((ce(e)!=="body"||xe(i))&&(l=an(e)),r){const d=Vt(e,!0,s,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&u();s&&!r&&i&&u();const h=i&&!r&&!s?hi(i,l):bt(0),p=a.left+l.scrollLeft-c.x-h.x,y=a.top+l.scrollTop-c.y-h.y;return{x:p,y,width:a.width,height:a.height}}function Mn(t){return mt(t).position==="static"}function Br(t,e){if(!xt(t)||mt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return $t(t)===n&&(n=n.ownerDocument.body),n}function pi(t,e){const n=ut(t);if(on(t))return n;if(!xt(t)){let i=Nt(t);for(;i&&!oe(i);){if(yt(i)&&!Mn(i))return i;i=Nt(i)}return n}let r=Br(t,e);for(;r&&ja(r)&&Mn(r);)r=Br(r,e);return r&&oe(r)&&Mn(r)&&!Qn(r)?n:r||qa(t)||n}const nl=async function(t){const e=this.getOffsetParent||pi,n=this.getDimensions,r=await n(t.floating);return{reference:el(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function rl(t){return mt(t).direction==="rtl"}const il={convertOffsetParentRelativeRectToViewportRelativeRect:Ga,getDocumentElement:$t,getClippingRect:Qa,getOffsetParent:pi,getElementRects:nl,getClientRects:Ka,getDimensions:tl,getScale:ie,isElement:yt,isRTL:rl};function gi(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function sl(t,e){let n=null,r;const i=$t(t);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=t.getBoundingClientRect(),{left:h,top:p,width:y,height:d}=u;if(l||e(),!y||!d)return;const v=Ne(p),x=Ne(i.clientWidth-(h+y)),D=Ne(i.clientHeight-(p+d)),E=Ne(h),T={rootMargin:-v+"px "+-x+"px "+-D+"px "+-E+"px",threshold:re(0,On(1,c))||1};let H=!0;function I(Q){const U=Q[0].intersectionRatio;if(U!==c){if(!H)return a();U?a(!1,U):r=setTimeout(()=>{a(!1,1e-7)},1e3)}U===1&&!gi(u,t.getBoundingClientRect())&&a(),H=!1}try{n=new IntersectionObserver(I,{...T,root:i.ownerDocument})}catch{n=new IntersectionObserver(I,T)}n.observe(t)}return a(!0),s}function ol(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=er(t),h=i||s?[...u?me(u):[],...me(e)]:[];h.forEach(E=>{i&&E.addEventListener("scroll",n,{passive:!0}),s&&E.addEventListener("resize",n)});const p=u&&l?sl(u,n):null;let y=-1,d=null;a&&(d=new ResizeObserver(E=>{let[N]=E;N&&N.target===u&&d&&(d.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var T;(T=d)==null||T.observe(e)})),n()}),u&&!c&&d.observe(u),d.observe(e));let v,x=c?Vt(t):null;c&&D();function D(){const E=Vt(t);x&&!gi(x,E)&&n(),x=E,v=requestAnimationFrame(D)}return n(),()=>{var E;h.forEach(N=>{i&&N.removeEventListener("scroll",n),s&&N.removeEventListener("resize",n)}),p==null||p(),(E=d)==null||E.disconnect(),d=null,c&&cancelAnimationFrame(v)}}const al=(t,e,n)=>{const r=new Map,i={platform:il,...n},s={...i.platform,_c:r};return Ta(t,e,{...i,platform:s})};function ll(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return ol(e,n,()=>{n.matches(":popover-open")&&al(e,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function yi(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",ii({target:{value:""}},t)}function cl(t,e){e.inlineMode&&t.stopPropagation()}function ul(t){t.inlineMode&&(t.showDropdown=!0)}function fl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function hl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(yi(e),e.showDropdown=!1)}function dl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(yi(e),e.showDropdown=!1)}function pl(t,e){var n,r,i=0,s,a,l,c,u,h,p,y=t[0],d=t[1],v=e.length;for(n=0;n<v;n++){r=0;var x=e[n],D=x.length-1;if(h=x[0],h[0]!==x[D][0]&&h[1]!==x[D][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-d,r;r<D;r++){if(p=x[r+1],c=p[0]-y,u=p[1]-d,l===0&&u===0){if(c<=0&&a>=0||a<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=Io(a,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}h=p,l=u,a=c}}return i%2!==0}function mi(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function gl(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ae(t){return t.type==="Feature"?t.geometry:t}function pt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=mi(t),i=ae(e),s=i.type,a=e.bbox;let l=i.coordinates;if(a&&yl(r,a)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const h=pl(r,l[u]);if(h===0)return!n.ignoreBoundary;h&&(c=!0)}return c}function yl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class vi{constructor(e=[],n=ml){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const s=e-1>>1,a=n[s];if(r(i,a)>=0)break;n[e]=a,e=s}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,s=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const c=a+1;if(c<this.length&&r(n[c],l)<0&&(a=c,l=n[c]),r(l,s)>=0)break;n[e]=l,e=a}n[e]=s}}function ml(t,e){return t<e?-1:t>e?1:0}function bi(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function vl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class Or{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function bl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)jr(n[r],e)}else jr(t,e)}let He=0,Ie=0,Fe=0;function jr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let a=r[i][s][0],l=null;Ie=Ie+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const u=new Or(a,He,Ie,Fe),h=new Or(l,He,Ie,Fe+1);u.otherEvent=h,h.otherEvent=u,bi(u,h)>0?(h.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(u),e.push(h),a=l,Fe=Fe+1}}He=He+1}class wl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function xl(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,h=(u-l)*(i-n)-(c-a)*(s-r),p=(c-a)*(r-l)-(u-l)*(n-a),y=(i-n)*(r-l)-(s-r)*(n-a);if(h===0)return!1;const d=p/h,v=y/h;if(d>=0&&d<=1&&v>=0&&v<=1){const x=n+d*(i-n),D=r+d*(s-r);return[x,D]}return!1}function Al(t,e){e=e||!1;const n=[],r=new vi([],vl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const s=new wl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const c=xl(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function $l(t,e){const n=new vi([],bi);return bl(t,n),Al(n,e)}var _l=$l;function rr(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Ue(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Ue(e));const a=_l(En(s),i);let l=[];if(r){const c={};a.forEach(u=>{const h=u.join(",");c[h]||(c[h]=!0,l.push(u))})}else l=a;return En(l.map(c=>jo(c)))}function wi(t,e,n){if(t!==null)for(var r,i,s,a,l,c,u,h=0,p=0,y,d=t.type,v=d==="FeatureCollection",x=d==="Feature",D=v?t.features.length:1,E=0;E<D;E++){u=v?t.features[E].geometry:x?t.geometry:t,y=u?u.type==="GeometryCollection":!1,l=y?u.geometries.length:1;for(var N=0;N<l;N++){var T=0,H=0;if(a=y?u.geometries[N]:u,a!==null){c=a.coordinates;var I=a.type;switch(h=0,I){case null:break;case"Point":if(e(c,p,E,T,H)===!1)return!1;p++,T++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(e(c[r],p,E,T,H)===!1)return!1;p++,I==="MultiPoint"&&T++}I==="LineString"&&T++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-h;i++){if(e(c[r][i],p,E,T,H)===!1)return!1;p++}I==="MultiLineString"&&T++,I==="Polygon"&&H++}I==="Polygon"&&T++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for(H=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-h;s++){if(e(c[r][i][s],p,E,T,H)===!1)return!1;p++}H++}T++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(wi(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ml(t,e){var n,r,i,s,a,l,c,u,h,p,y=0,d=t.type==="FeatureCollection",v=t.type==="Feature",x=d?t.features.length:1;for(n=0;n<x;n++){for(l=d?t.features[n].geometry:v?t.geometry:t,u=d?t.features[n].properties:v?t.properties:{},h=d?t.features[n].bbox:v?t.bbox:void 0,p=d?t.features[n].id:v?t.id:void 0,c=l?l.type==="GeometryCollection":!1,a=c?l.geometries.length:1,i=0;i<a;i++){if(s=c?l.geometries[i]:l,s===null){if(e(null,y,u,h,p)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,y,u,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],y,u,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ke(t,e){Ml(t,function(n,r,i,s,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Ue(n,i,{bbox:s,id:a}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var h=n.coordinates[u],p={type:c,coordinates:h};if(e(Ue(p,i),r,u)===!1)return!1}})}function Nn(t,e={}){const n=ae(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return Cl(n,e);case"MultiPolygon":return Sl(n,e);default:throw new Error("invalid poly")}}function Cl(t,e={}){const r=ae(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return xi(r,i)}function Sl(t,e={}){const r=ae(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return r.forEach(a=>{s.push(xi(a,i))}),En(s)}function xi(t,e){return t.length>1?No(t,e):Ho(t[0],e)}function Ll(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ke(t,i=>{Ke(e,s=>{if(r===!1)return!1;r=El(i.geometry,s.geometry,n)})}),r}function El(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!kl(t.coordinates,e.coordinates);case"LineString":return!Nr(e,t);case"Polygon":return!pt(t,e)}break;case"LineString":switch(e.type){case"Point":return!Nr(t,e);case"LineString":return!Dl(t,e,n);case"Polygon":return!Hr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!pt(e,t);case"LineString":return!Hr(t,e,n);case"Polygon":return!Rl(e,t,n)}}return!1}function Nr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(Pl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function Dl(t,e,n){return rr(t,e,{ignoreSelfIntersections:n}).features.length>0}function Hr(t,e,n){for(const i of e.coordinates)if(pt(i,t))return!0;return rr(e,Nn(t),{ignoreSelfIntersections:n}).features.length>0}function Rl(t,e,n){for(const i of t.coordinates[0])if(pt(i,e))return!0;for(const i of e.coordinates[0])if(pt(i,t))return!0;return rr(Nn(t),Nn(e),{ignoreSelfIntersections:n}).features.length>0}function Pl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],s=e[0]-t[0],a=e[1]-t[1];return r*a-i*s!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function kl(t,e){return t[0]===e[0]&&t[1]===e[1]}function Tl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ke(t,i=>{Ke(e,s=>{if(r===!0)return!0;r=!Ll(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var Bl=Tl;function Ve(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return wi(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ye(t,e,n={}){const r=mi(t),i=gl(e);for(let s=0;s<i.length-1;s++){let a=!1;if(n.ignoreEndVertices&&(s===0&&(a="start"),s===i.length-2&&(a="end"),s===0&&s+1===i.length-1&&(a="both")),Ol(i[s],i[s+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Ol(t,e,n,r,i){const s=n[0],a=n[1],l=t[0],c=t[1],u=e[0],h=e[1],p=n[0]-l,y=n[1]-c,d=u-l,v=h-c,x=p*v-y*d;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(d)===Math.abs(v)&&Math.abs(d)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(d)>=Math.abs(v)?d>0?l<s&&s<=u:u<=s&&s<l:v>0?c<a&&a<=h:h<=a&&a<c;if(r==="end")return Math.abs(d)>=Math.abs(v)?d>0?l<=s&&s<u:u<s&&s<=l:v>0?c<=a&&a<h:h<a&&a<=c;if(r==="both")return Math.abs(d)>=Math.abs(v)?d>0?l<s&&s<u:u<s&&s<l:v>0?c<a&&a<h:h<a&&a<c}else return Math.abs(d)>=Math.abs(v)?d>0?l<=s&&s<=u:u<=s&&s<=l:v>0?c<=a&&a<=h:h<=a&&a<=c;return!1}function jl(t,e){var n=ae(t),r=ae(e),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return Nl(n,r);case"LineString":return Ye(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return pt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Hl(n,r);case"LineString":return Il(n,r);case"Polygon":case"MultiPolygon":return Fl(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return ql(n,r);case"Polygon":case"MultiPolygon":return Ul(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Wl(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Nl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if($i(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Hl(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)$i(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Il(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ye(t.coordinates[r],e))return!1;n||(n=Ye(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Fl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=pt(t.coordinates[i],e),!r){n=!1;break}r=pt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function ql(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ye(t.coordinates[n],e))return!1;return!0}function Ul(t,e){var n=Ve(e),r=Ve(t);if(!Ai(n,r))return!1;for(var i=!1,s=0;s<t.coordinates.length;s++){if(!pt(t.coordinates[s],e))return!1;if(i||(i=pt(t.coordinates[s],e,{ignoreBoundary:!0})),!i&&s<t.coordinates.length-1){var a=zl(t.coordinates[s],t.coordinates[s+1]);i=pt(a,e,{ignoreBoundary:!0})}}return i}function Wl(t,e){var n=Ve(t),r=Ve(e);if(!Ai(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!pt(t.coordinates[0][i],e))return!1;return!0}function Ai(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function $i(t,e){return t[0]===e[0]&&t[1]===e[1]}function zl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Gl=jl;const Kl=(t,e)=>e?Bl(t,e):!0,Vl=(t,e)=>e?Gl(t,e):!0;function Yl(t,e="highlight",n="title"){const r=(s,a,l)=>{const c=a.split(".");let u;for(u=0;u<c.length-1;u++)s=s[c[u]];s[c[u]]=l},i=(s,a=[])=>{let l="",c=0;return a.forEach(u=>{const h=u[1]+1;l+=[s.substring(c,u[0]),`<mark class="${e}">`,s.substring(u[0],h),"</mark>"].join(""),c=h}),l+=s.substring(c),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={...s};return a.forEach(c=>{c.key===n&&r(l,c.key,i(c.value,c.indices))}),l})}var _i={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Rt,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",a="second",l="minute",c="hour",u="day",h="week",p="month",y="quarter",d="year",v="date",x="Invalid Date",D=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(_){var w=["th","st","nd","rd"],b=_%100;return"["+_+(w[(b-20)%10]||w[b]||w[0])+"]"}},T=function(_,w,b){var C=String(_);return!C||C.length>=w?_:""+Array(w+1-C.length).join(b)+_},H={s:T,z:function(_){var w=-_.utcOffset(),b=Math.abs(w),C=Math.floor(b/60),A=b%60;return(w<=0?"+":"-")+T(C,2,"0")+":"+T(A,2,"0")},m:function _(w,b){if(w.date()<b.date())return-_(b,w);var C=12*(b.year()-w.year())+(b.month()-w.month()),A=w.clone().add(C,p),R=b-A<0,P=w.clone().add(C+(R?-1:1),p);return+(-(C+(b-A)/(R?A-P:P-A))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:p,y:d,w:h,d:u,D:v,h:c,m:l,s:a,ms:s,Q:y}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return _===void 0}},I="en",Q={};Q[I]=N;var U="$isDayjsObject",et=function(_){return _ instanceof at||!(!_||!_[U])},J=function _(w,b,C){var A;if(!w)return I;if(typeof w=="string"){var R=w.toLowerCase();Q[R]&&(A=R),b&&(Q[R]=b,A=R);var P=w.split("-");if(!A&&P.length>1)return _(P[0])}else{var F=w.name;Q[F]=w,A=F}return!C&&A&&(I=A),A||!C&&I},W=function(_,w){if(et(_))return _.clone();var b=typeof w=="object"?w:{};return b.date=_,b.args=arguments,new at(b)},B=H;B.l=J,B.i=et,B.w=function(_,w){return W(_,{locale:w.$L,utc:w.$u,x:w.$x,$offset:w.$offset})};var at=function(){function _(b){this.$L=J(b.locale,null,!0),this.parse(b),this.$x=this.$x||b.x||{},this[U]=!0}var w=_.prototype;return w.parse=function(b){this.$d=function(C){var A=C.date,R=C.utc;if(A===null)return new Date(NaN);if(B.u(A))return new Date;if(A instanceof Date)return new Date(A);if(typeof A=="string"&&!/Z$/i.test(A)){var P=A.match(D);if(P){var F=P[2]-1||0,z=(P[7]||"0").substring(0,3);return R?new Date(Date.UTC(P[1],F,P[3]||1,P[4]||0,P[5]||0,P[6]||0,z)):new Date(P[1],F,P[3]||1,P[4]||0,P[5]||0,P[6]||0,z)}}return new Date(A)}(b),this.init()},w.init=function(){var b=this.$d;this.$y=b.getFullYear(),this.$M=b.getMonth(),this.$D=b.getDate(),this.$W=b.getDay(),this.$H=b.getHours(),this.$m=b.getMinutes(),this.$s=b.getSeconds(),this.$ms=b.getMilliseconds()},w.$utils=function(){return B},w.isValid=function(){return this.$d.toString()!==x},w.isSame=function(b,C){var A=W(b);return this.startOf(C)<=A&&A<=this.endOf(C)},w.isAfter=function(b,C){return W(b)<this.startOf(C)},w.isBefore=function(b,C){return this.endOf(C)<W(b)},w.$g=function(b,C,A){return B.u(b)?this[C]:this.set(A,b)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(b,C){var A=this,R=!!B.u(C)||C,P=B.p(b),F=function(_t,G){var gt=B.w(A.$u?Date.UTC(A.$y,G,_t):new Date(A.$y,G,_t),A);return R?gt:gt.endOf(u)},z=function(_t,G){return B.w(A.toDate()[_t].apply(A.toDate("s"),(R?[0,0,0,0]:[23,59,59,999]).slice(G)),A)},Y=this.$W,Z=this.$M,rt=this.$D,kt="set"+(this.$u?"UTC":"");switch(P){case d:return R?F(1,0):F(31,11);case p:return R?F(1,Z):F(0,Z+1);case h:var O=this.$locale().weekStart||0,Tt=(Y<O?Y+7:Y)-O;return F(R?rt-Tt:rt+(6-Tt),Z);case u:case v:return z(kt+"Hours",0);case c:return z(kt+"Minutes",1);case l:return z(kt+"Seconds",2);case a:return z(kt+"Milliseconds",3);default:return this.clone()}},w.endOf=function(b){return this.startOf(b,!1)},w.$set=function(b,C){var A,R=B.p(b),P="set"+(this.$u?"UTC":""),F=(A={},A[u]=P+"Date",A[v]=P+"Date",A[p]=P+"Month",A[d]=P+"FullYear",A[c]=P+"Hours",A[l]=P+"Minutes",A[a]=P+"Seconds",A[s]=P+"Milliseconds",A)[R],z=R===u?this.$D+(C-this.$W):C;if(R===p||R===d){var Y=this.clone().set(v,1);Y.$d[F](z),Y.init(),this.$d=Y.set(v,Math.min(this.$D,Y.daysInMonth())).$d}else F&&this.$d[F](z);return this.init(),this},w.set=function(b,C){return this.clone().$set(b,C)},w.get=function(b){return this[B.p(b)]()},w.add=function(b,C){var A,R=this;b=Number(b);var P=B.p(C),F=function(Z){var rt=W(R);return B.w(rt.date(rt.date()+Math.round(Z*b)),R)};if(P===p)return this.set(p,this.$M+b);if(P===d)return this.set(d,this.$y+b);if(P===u)return F(1);if(P===h)return F(7);var z=(A={},A[l]=r,A[c]=i,A[a]=n,A)[P]||1,Y=this.$d.getTime()+b*z;return B.w(Y,this)},w.subtract=function(b,C){return this.add(-1*b,C)},w.format=function(b){var C=this,A=this.$locale();if(!this.isValid())return A.invalidDate||x;var R=b||"YYYY-MM-DDTHH:mm:ssZ",P=B.z(this),F=this.$H,z=this.$m,Y=this.$M,Z=A.weekdays,rt=A.months,kt=A.meridiem,O=function(G,gt,Bt,Qt){return G&&(G[gt]||G(C,R))||Bt[gt].slice(0,Qt)},Tt=function(G){return B.s(F%12||12,G,"0")},_t=kt||function(G,gt,Bt){var Qt=G<12?"AM":"PM";return Bt?Qt.toLowerCase():Qt};return R.replace(E,function(G,gt){return gt||function(Bt){switch(Bt){case"YY":return String(C.$y).slice(-2);case"YYYY":return B.s(C.$y,4,"0");case"M":return Y+1;case"MM":return B.s(Y+1,2,"0");case"MMM":return O(A.monthsShort,Y,rt,3);case"MMMM":return O(rt,Y);case"D":return C.$D;case"DD":return B.s(C.$D,2,"0");case"d":return String(C.$W);case"dd":return O(A.weekdaysMin,C.$W,Z,2);case"ddd":return O(A.weekdaysShort,C.$W,Z,3);case"dddd":return Z[C.$W];case"H":return String(F);case"HH":return B.s(F,2,"0");case"h":return Tt(1);case"hh":return Tt(2);case"a":return _t(F,z,!0);case"A":return _t(F,z,!1);case"m":return String(z);case"mm":return B.s(z,2,"0");case"s":return String(C.$s);case"ss":return B.s(C.$s,2,"0");case"SSS":return B.s(C.$ms,3,"0");case"Z":return P}return null}(G)||P.replace(":","")})},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(b,C,A){var R,P=this,F=B.p(C),z=W(b),Y=(z.utcOffset()-this.utcOffset())*r,Z=this-z,rt=function(){return B.m(P,z)};switch(F){case d:R=rt()/12;break;case p:R=rt();break;case y:R=rt()/3;break;case h:R=(Z-Y)/6048e5;break;case u:R=(Z-Y)/864e5;break;case c:R=Z/i;break;case l:R=Z/r;break;case a:R=Z/n;break;default:R=Z}return A?R:B.a(R)},w.daysInMonth=function(){return this.endOf(p).$D},w.$locale=function(){return Q[this.$L]},w.locale=function(b,C){if(!b)return this.$L;var A=this.clone(),R=J(b,C,!0);return R&&(A.$L=R),A},w.clone=function(){return B.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},_}(),he=at.prototype;return W.prototype=he,[["$ms",s],["$s",a],["$m",l],["$H",c],["$W",u],["$M",p],["$y",d],["$D",v]].forEach(function(_){he[_[1]]=function(w){return this.$g(w,_[0],_[1])}}),W.extend=function(_,w){return _.$i||(_(w,at,W),_.$i=!0),W},W.locale=J,W.isDayjs=et,W.unix=function(_){return W(1e3*_)},W.en=Q[I],W.Ls=Q,W.p={},W})})(_i);var Jl=_i.exports;const ve=Jn(Jl);let Mi;const Zl=(t,e)=>{Mi=new Ft(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Xl=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const h="$or",p=[],y=(d,v)=>{const x={};u.type==="text"?x[d]=`${v}`:x[c]=`="${d}"`,p.push(x)};return Object.entries(u.state).filter(([,d])=>d).forEach(([d,v])=>y(d,v)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},c=Mi.search(l);i=n.enableHighlighting?Yl(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[h,p]of Object.entries(s)){const y=v=>p.format==="date"?ve(v).unix():v,d=Kt(h,i[c]);d?Array.isArray(d)?u[h]=s[h].min<=y(d[1])&&y(d[0])<=s[h].max:y(d)>=s[h].min&&y(d)<=s[h].max?u[h]=!0:u[h]=!1:u[h]=!0}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const h of Object.keys(a)){const p=Kt(h,i[c]),y=a[h].mode||"within";p&&(y==="within"?Vl(p,a[h].geometry):Kl(p,a[h].geometry))?u[h]=!0:u[h]=!1}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}return i};function Ql(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function ln(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Ir(t,e){return t*2+e}function tc(t){return Object.keys(t).map(e=>({title:S`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function Hn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function ec(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function Ci(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Kt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var q,Si,In,Fn,Li,qn,Un,Ei,Wn,Di,Ri;class nc extends At{constructor(){super();ot(this,q);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=j(this,q,Li).bind(this),this._handleKeyDown=j(this,q,qn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&j(this,q,In).call(this)}disconnectedCallback(){this.inlineMode&&j(this,q,Fn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?j(this,q,In).call(this):j(this,q,Fn).call(this))}render(){return S`
      <style>
        ${!this.unstyled&&Zn}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${j(this,q,Un)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${tc(this.filters)}
                      .controller=${{remove:n=>j(this,q,Di).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${X(Hn(this.filters),()=>S`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":S`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>close</title>
                                  <path
                                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                  />
                                </svg>
                              </i>
                            `}
                      </button>
                    `)}
                </div>
                <div
                  class="input-container field no-margin ${Hn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${j(this,q,Un)}"
                    @focus="${j(this,q,Ei)}"
                    @input="${j(this,q,Ri)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                popover="manual"
                class="square surface-container-lowest small-elevate"
              >
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${j(this,q,qn)}"
                  @click="${j(this,q,Wn)}"
                  @focus="${j(this,q,Wn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}q=new WeakSet,Si=function(){setTimeout(()=>this._overlayCleanup=ll(this))},In=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),j(this,q,Si).call(this)},Fn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Li=function(n){dl(n,this)},qn=function(n){hl(n,this)},Un=function(n){fl(n,this)},Ei=function(){ul(this)},Wn=function(n){cl(n,this)},Di=function(n){La(n,this)},Ri=function(n){ii(n,this)};customElements.define("eox-itemfilter-container",nc);function rc(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",ln(t.filterObject),t.requestUpdate()}function ic(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const zn="ddd, D MMM YYYY HH:mm:ss";function sc(t){if(t.filterObject=ln(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function oc(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${ve.unix(n).format(zn)} - ${ve.unix(r).format(zn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function ac(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],s=r?ve.unix(i).format(zn):i;return S`<div class="range-${e}">${s}</div>`}function lc(t){cc(-1,t),ln(t.filterObject),t.requestUpdate()}function cc(t,e){e.selectedItems=[],ir(e),ki(e)}function Pi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),ir(e),ki(e)}function uc(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function fc(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Pi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function hc(t,e){(t.has("suggestions")||t.has("query"))&&ir(e)}function dc(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,s)=>i.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function ir(t){var r,i,s;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(a=>`${a}`);let n=e;t.query&&(n=new Ft(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:dc(t,n),(s=t.filterObject)!=null&&s.filterKeys&&(t.filterObject.state=e.reduce((a,l)=>(l in a||(a[l]=void 0),a),t.filterObject.state)),t.highlightedIndex=-1}function ki(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function pc(t){ln(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function gc(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Ti(t)}function yc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Ti(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&mc(t.geometry),r=Ql(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=s=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function mc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Qe;class vc extends At{constructor(){super();ot(this,Qe,()=>{ic(this)});ge(this,"debouncedInputHandler",nn(lt(this,Qe),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){rc(this)}createRenderRoot(){return this}render(){return X(this.filterObject,()=>{var n;return S`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Qe=new WeakMap;customElements.define("eox-itemfilter-text",vc);function bc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let s;return n.filters[n.config.aggregateResults]&&(s=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(s!=null&&s.length?s.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=Symbol.for(""),wc=t=>{if((t==null?void 0:t.r)===Bi)return t==null?void 0:t._$litStatic$},ne=t=>({_$litStatic$:t,r:Bi}),Fr=new Map,xc=t=>(e,...n)=>{const r=n.length;let i,s;const a=[],l=[];let c,u=0,h=!1;for(;u<r;){for(c=e[u];u<r&&(s=n[u],(i=wc(s))!==void 0);)c+=i+e[++u],h=!0;u!==r&&l.push(s),a.push(c),u++}if(u===r&&a.push(e[r]),h){const p=a.join("$$lit$$");(e=Fr.get(p))===void 0&&(a.raw=a,Fr.set(p,e=a)),n=l}return t(e,...n)},qr=xc(S);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi={CHILD:2},ji=t=>(...e)=>({_$litDirective$:t,values:e});class Ni{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ac}=Oo,Ur=()=>document.createComment(""),ye=(t,e,n)=>{var s;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const a=r.insertBefore(Ur(),i),l=r.insertBefore(Ur(),i);n=new Ac(a,l,t,t.options)}else{const a=n._$AB.nextSibling,l=n._$AM,c=l!==t;if(c){let u;(s=n._$AQ)==null||s.call(n,t),n._$AM=t,n._$AP!==void 0&&(u=t._$AU)!==l._$AU&&n._$AP(u)}if(a!==i||c){let u=n._$AA;for(;u!==a;){const h=u.nextSibling;r.insertBefore(u,i),u=h}}}return n},zt=(t,e,n=t)=>(t._$AI(e,n),t),$c={},_c=(t,e=$c)=>t._$AH=e,Mc=t=>t._$AH,Cn=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Cc=ji(class extends Ni{constructor(t){if(super(t),t.type!==Oi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],s=[];let a=0;for(const l of t)i[a]=r?r(l,a):a,s[a]=n(l,a),a++;return{values:s,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const i=Mc(t),{values:s,keys:a}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=a,s;const l=this.ut??(this.ut=[]),c=[];let u,h,p=0,y=i.length-1,d=0,v=s.length-1;for(;p<=y&&d<=v;)if(i[p]===null)p++;else if(i[y]===null)y--;else if(l[p]===a[d])c[d]=zt(i[p],s[d]),p++,d++;else if(l[y]===a[v])c[v]=zt(i[y],s[v]),y--,v--;else if(l[p]===a[v])c[v]=zt(i[p],s[v]),ye(t,c[v+1],i[p]),p++,v--;else if(l[y]===a[d])c[d]=zt(i[y],s[d]),ye(t,i[p],i[y]),y--,d++;else if(u===void 0&&(u=Wr(a,d,v),h=Wr(l,p,y)),u.has(l[p]))if(u.has(l[y])){const x=h.get(a[d]),D=x!==void 0?i[x]:null;if(D===null){const E=ye(t,i[p]);zt(E,s[d]),c[d]=E}else c[d]=zt(D,s[d]),ye(t,i[p],D),i[x]=null;d++}else Cn(i[y]),y--;else Cn(i[p]),p++;for(;d<=v;){const x=ye(t,c[v+1]);zt(x,s[d]),c[d++]=x}for(;p<=y;){const x=i[p++];x!==null&&Cn(x)}return this.ut=a,_c(t,c),Kr}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gn extends Ni{constructor(e){if(super(e),this.it=wt,e.type!==Oi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===wt||e==null)return this._t=void 0,this.it=e;if(e===Kr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Gn.directiveName="unsafeHTML",Gn.resultType=1;const qe=ji(Gn);function Sc(t,e){return S`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||wt}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${t} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${e.aggregateResults(e.results,t).length}
          </button>
        </nav>
      </summary>
      <div>
        ${Hi(e,t)}
      </div>
    </details>
  `}function Hi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,s=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":wt};return qr`
    ${t.resultType==="cards"?ne("<eox-layout fill-grid>"):ne('<ul id="results" class="list no-space" part="results">')}
      ${Cc(r,a=>a.id,a=>qr`
        ${t.resultType==="cards"?ne("<eox-layout-item"):ne("<li")}
            class="${s(a)}"
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${X(i.subTitleProperty||i.imageProperty,()=>S`
                  ${X(t.resultType==="cards",()=>Kt(i.imageProperty,a)?S`
                            <img
                              class="image"
                              src="${Kt(i.imageProperty,a)}"
                            />
                          `:S`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,()=>S`
                      <i class="small">
                        ${Kt(i.imageProperty,a)?S`
                              <img
                                class="image"
                                src="${Kt(i.imageProperty,a)}"
                              />
                            `:S`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `)}
                  <div class="title-container small-line max truncate">
                    <span class="title truncate"
                      >${qe(a[i.titleProperty])}</span
                    >
                    ${X(!!a[i.subTitleProperty],()=>S`
                        <small class="subtitle no-line truncate"
                          >${qe(a[i.subTitleProperty].toString())}</small
                        >
                      `)}
                  </div>
                `,()=>S`
                  <div class="small-line max truncate">
                    <span class="title truncate"
                      >${qe(a[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${X(t.enableResultAction,()=>S`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${qe(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?ne("</eox-layout>"):ne("</ul>")}
  `}var Jt,Kn,Ii;class Lc extends At{constructor(){super();ot(this,Jt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return bc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Ci(n,this.config,this)}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${X(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>wt)}
          ${X(this.config.aggregateResults,()=>rn(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>S`${X(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                        ${j(this,Jt,Kn).call(this,n)}
                      </div>`,()=>j(this,Jt,Ii).call(this,n))}`),()=>j(this,Jt,Kn).call(this))}
        </div>
      </section>
    `}}Jt=new WeakSet,Kn=function(n){return Hi(this,n)},Ii=function(n){return Sc(n,this)};customElements.define("eox-itemfilter-results",Lc);var Ht,qi,Ui,Wi;class Fi extends At{constructor(){super();ot(this,Ht);ge(this,"debouncedInputHandler",nn(j(this,Ht,Wi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){hc(n,this)}reset(){lc(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":wt;return S`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${X((this.filterObject.filterKeys||this.suggestions).length>=10,()=>S`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${j(this,Ht,qi)}
                @keydown=${j(this,Ht,Ui)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>S`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Ht=new WeakSet,qi=function(n){uc(n,this)},Ui=function(n){fc(n,this)},Wi=function(n){Pi(n,this)},ge(Fi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Fi);var Zt,Gi,Vn;class zi extends At{constructor(){super();ot(this,Zt);this.filterObject={},this.tabIndex=0,this.inputHandler=j(this,Zt,Gi).bind(this),this.debouncedInputHandler=nn(this.inputHandler,500,{leading:!1})}reset(){sc(this)}createRenderRoot(){return this}render(){return X(this.filterObject,()=>S`
        <div style="margin-left: var(--list-padding)">
          ${j(this,Zt,Vn).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${j(this,Zt,Vn).call(this,"max","after")}
        </div>
      `)}}Zt=new WeakSet,Gi=function(n){oc(n,this)},Vn=function(n,r){return ac(n,r,this)},ge(zi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",zi);var tn,Ki;class Ec extends At{constructor(){super();ot(this,tn);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){pc(this)}createRenderRoot(){return this}render(){return X(this.filterObject,()=>{var n;return S`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${rn(["intersects","within"],r=>S`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||wt}"
                    value="${r}"
                    @click=${()=>j(this,tn,Ki).call(this,r)}
                  />
                  <span>${r} filter geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial>
        </div>
      `})}}tn=new WeakSet,Ki=function(n){yc(n,this)};customElements.define("eox-itemfilter-spatial",Ec);var en,Vi;class Dc extends At{constructor(){super();ot(this,en);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){j(this,en,Vi).call(this)}reset(){gc(this)}render(){return S`<div id="eox-map"></div>`}}en=new WeakSet,Vi=function(){Ti(this)};customElements.define("eox-itemfilter-spatial-filter",Dc);function Rc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function Pc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&kc(n,t.target.value??"",e))}function kc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Xt,Yn,Yi;class Tc extends At{constructor(){super();ot(this,Xt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",j(this,Xt,Yn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",j(this,Xt,Yn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return S`
      <span class="chip-container">
        ${rn(this.items,n=>S`
            <span class="chip tiny-margin" @click=${j(this,Xt,Yi).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}Xt=new WeakSet,Yn=function(n){Pc(n,this)},Yi=function(n){Rc(n,this)};customElements.define("eox-itemfilter-chips",Tc);const Bc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),zr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Oc=200,sr="__lodash_hash_undefined__",jc=1/0,Nc="[object Function]",Hc="[object GeneratorFunction]",Ic=/[\\^$.*+?()[\]{}|]/g,Fc=/^\[object .+?Constructor\]$/,qc=typeof Rt=="object"&&Rt&&Rt.Object===Object&&Rt,Uc=typeof self=="object"&&self&&self.Object===Object&&self,or=qc||Uc||Function("return this")();function Wc(t,e){var n=t?t.length:0;return!!n&&Gc(t,e,0)>-1}function zc(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function Gc(t,e,n){if(e!==e)return zc(t,Kc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Kc(t){return t!==t}function Vc(t,e){return t.has(e)}function Yc(t,e){return t==null?void 0:t[e]}function Jc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Ji(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Zc=Array.prototype,Xc=Function.prototype,Zi=Object.prototype,Sn=or["__core-js_shared__"],Gr=function(){var t=/[^.]+$/.exec(Sn&&Sn.keys&&Sn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Xi=Xc.toString,ar=Zi.hasOwnProperty,Qc=Zi.toString,tu=RegExp("^"+Xi.call(ar).replace(Ic,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),eu=Zc.splice,nu=lr(or,"Map"),Ln=lr(or,"Set"),be=lr(Object,"create");function Yt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ru(){this.__data__=be?be(null):{}}function iu(t){return this.has(t)&&delete this.__data__[t]}function su(t){var e=this.__data__;if(be){var n=e[t];return n===sr?void 0:n}return ar.call(e,t)?e[t]:void 0}function ou(t){var e=this.__data__;return be?e[t]!==void 0:ar.call(e,t)}function au(t,e){var n=this.__data__;return n[t]=be&&e===void 0?sr:e,this}Yt.prototype.clear=ru;Yt.prototype.delete=iu;Yt.prototype.get=su;Yt.prototype.has=ou;Yt.prototype.set=au;function ue(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function lu(){this.__data__=[]}function cu(t){var e=this.__data__,n=cn(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():eu.call(e,n,1),!0}function uu(t){var e=this.__data__,n=cn(e,t);return n<0?void 0:e[n][1]}function fu(t){return cn(this.__data__,t)>-1}function hu(t,e){var n=this.__data__,r=cn(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}ue.prototype.clear=lu;ue.prototype.delete=cu;ue.prototype.get=uu;ue.prototype.has=fu;ue.prototype.set=hu;function fe(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function du(){this.__data__={hash:new Yt,map:new(nu||ue),string:new Yt}}function pu(t){return un(this,t).delete(t)}function gu(t){return un(this,t).get(t)}function yu(t){return un(this,t).has(t)}function mu(t,e){return un(this,t).set(t,e),this}fe.prototype.clear=du;fe.prototype.delete=pu;fe.prototype.get=gu;fe.prototype.has=yu;fe.prototype.set=mu;function Je(t){var e=-1,n=t?t.length:0;for(this.__data__=new fe;++e<n;)this.add(t[e])}function vu(t){return this.__data__.set(t,sr),this}function bu(t){return this.__data__.has(t)}Je.prototype.add=Je.prototype.push=vu;Je.prototype.has=bu;function cn(t,e){for(var n=t.length;n--;)if(Su(t[n][0],e))return n;return-1}function wu(t){if(!Qi(t)||_u(t))return!1;var e=Lu(t)||Jc(t)?tu:Fc;return e.test(Mu(t))}function xu(t,e,n){var r=-1,i=Wc,s=t.length,a=!0,l=[],c=l;if(s>=Oc){var u=Au(t);if(u)return Ji(u);a=!1,i=Vc,c=new Je}else c=l;t:for(;++r<s;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=c.length;y--;)if(c[y]===p)continue t;l.push(h)}else i(c,p,n)||(c!==l&&c.push(p),l.push(h))}return l}var Au=Ln&&1/Ji(new Ln([,-0]))[1]==jc?function(t){return new Ln(t)}:Eu;function un(t,e){var n=t.__data__;return $u(e)?n[typeof e=="string"?"string":"hash"]:n.map}function lr(t,e){var n=Yc(t,e);return wu(n)?n:void 0}function $u(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function _u(t){return!!Gr&&Gr in t}function Mu(t){if(t!=null){try{return Xi.call(t)}catch{}try{return t+""}catch{}}return""}function Cu(t){return t&&t.length?xu(t):[]}function Su(t,e){return t===e||t!==t&&e!==e}function Lu(t){var e=Qi(t)?Qc.call(t):"";return e==Nc||e==Hc}function Qi(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Eu(){}var Du=Cu;const ts=Jn(Du);var Ze={exports:{}};Ze.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,a=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",d="[object Function]",v="[object GeneratorFunction]",x="[object Map]",D="[object Number]",E="[object Object]",N="[object Promise]",T="[object RegExp]",H="[object Set]",I="[object String]",Q="[object Symbol]",U="[object WeakMap]",et="[object ArrayBuffer]",J="[object DataView]",W="[object Float32Array]",B="[object Float64Array]",at="[object Int8Array]",he="[object Int16Array]",_="[object Int32Array]",w="[object Uint8Array]",b="[object Uint8ClampedArray]",C="[object Uint16Array]",A="[object Uint32Array]",R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/,F=/^\./,z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,Z=/\\(\\)?/g,rt=/^\[object .+?Constructor\]$/,kt=/^(?:0|[1-9]\d*)$/,O={};O[W]=O[B]=O[at]=O[he]=O[_]=O[w]=O[b]=O[C]=O[A]=!0,O[c]=O[u]=O[et]=O[h]=O[J]=O[p]=O[y]=O[d]=O[x]=O[D]=O[E]=O[T]=O[H]=O[I]=O[U]=!1;var Tt=typeof Rt=="object"&&Rt&&Rt.Object===Object&&Rt,_t=typeof self=="object"&&self&&self.Object===Object&&self,G=Tt||_t||Function("return this")(),gt=e&&!e.nodeType&&e,Bt=gt&&!0&&t&&!t.nodeType&&t,Qt=Bt&&Bt.exports===gt,cr=Qt&&Tt.process,ur=function(){try{return cr&&cr.binding("util")}catch{}}(),fr=ur&&ur.isTypedArray;function is(o,f){for(var g=-1,m=o?o.length:0,M=Array(m);++g<m;)M[g]=f(o[g],g,o);return M}function ss(o,f){for(var g=-1,m=f.length,M=o.length;++g<m;)o[M+g]=f[g];return o}function os(o,f){for(var g=-1,m=o?o.length:0;++g<m;)if(f(o[g],g,o))return!0;return!1}function as(o){return function(f){return f==null?void 0:f[o]}}function ls(o,f){for(var g=-1,m=Array(o);++g<o;)m[g]=f(g);return m}function cs(o){return function(f){return o(f)}}function us(o,f){return o==null?void 0:o[f]}function fn(o){var f=!1;if(o!=null&&typeof o.toString!="function")try{f=!!(o+"")}catch{}return f}function fs(o){var f=-1,g=Array(o.size);return o.forEach(function(m,M){g[++f]=[M,m]}),g}function hs(o,f){return function(g){return o(f(g))}}function ds(o){var f=-1,g=Array(o.size);return o.forEach(function(m){g[++f]=m}),g}var ps=Array.prototype,gs=Function.prototype,Ae=Object.prototype,hn=G["__core-js_shared__"],hr=function(){var o=/[^.]+$/.exec(hn&&hn.keys&&hn.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),dr=gs.toString,Mt=Ae.hasOwnProperty,te=Ae.toString,ys=RegExp("^"+dr.call(Mt).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$e=G.Symbol,pr=G.Uint8Array,ms=Ae.propertyIsEnumerable,vs=ps.splice,gr=$e?$e.isConcatSpreadable:void 0,bs=hs(Object.keys,Object),dn=ee(G,"DataView"),de=ee(G,"Map"),pn=ee(G,"Promise"),gn=ee(G,"Set"),yn=ee(G,"WeakMap"),pe=ee(Object,"create"),ws=Ut(dn),xs=Ut(de),As=Ut(pn),$s=Ut(gn),_s=Ut(yn),_e=$e?$e.prototype:void 0,mn=_e?_e.valueOf:void 0,yr=_e?_e.toString:void 0;function qt(o){var f=-1,g=o?o.length:0;for(this.clear();++f<g;){var m=o[f];this.set(m[0],m[1])}}function Ms(){this.__data__=pe?pe(null):{}}function Cs(o){return this.has(o)&&delete this.__data__[o]}function Ss(o){var f=this.__data__;if(pe){var g=f[o];return g===i?void 0:g}return Mt.call(f,o)?f[o]:void 0}function Ls(o){var f=this.__data__;return pe?f[o]!==void 0:Mt.call(f,o)}function Es(o,f){var g=this.__data__;return g[o]=pe&&f===void 0?i:f,this}qt.prototype.clear=Ms,qt.prototype.delete=Cs,qt.prototype.get=Ss,qt.prototype.has=Ls,qt.prototype.set=Es;function Ct(o){var f=-1,g=o?o.length:0;for(this.clear();++f<g;){var m=o[f];this.set(m[0],m[1])}}function Ds(){this.__data__=[]}function Rs(o){var f=this.__data__,g=Ce(f,o);if(g<0)return!1;var m=f.length-1;return g==m?f.pop():vs.call(f,g,1),!0}function Ps(o){var f=this.__data__,g=Ce(f,o);return g<0?void 0:f[g][1]}function ks(o){return Ce(this.__data__,o)>-1}function Ts(o,f){var g=this.__data__,m=Ce(g,o);return m<0?g.push([o,f]):g[m][1]=f,this}Ct.prototype.clear=Ds,Ct.prototype.delete=Rs,Ct.prototype.get=Ps,Ct.prototype.has=ks,Ct.prototype.set=Ts;function St(o){var f=-1,g=o?o.length:0;for(this.clear();++f<g;){var m=o[f];this.set(m[0],m[1])}}function Bs(){this.__data__={hash:new qt,map:new(de||Ct),string:new qt}}function Os(o){return Se(this,o).delete(o)}function js(o){return Se(this,o).get(o)}function Ns(o){return Se(this,o).has(o)}function Hs(o,f){return Se(this,o).set(o,f),this}St.prototype.clear=Bs,St.prototype.delete=Os,St.prototype.get=js,St.prototype.has=Ns,St.prototype.set=Hs;function Me(o){var f=-1,g=o?o.length:0;for(this.__data__=new St;++f<g;)this.add(o[f])}function Is(o){return this.__data__.set(o,i),this}function Fs(o){return this.__data__.has(o)}Me.prototype.add=Me.prototype.push=Is,Me.prototype.has=Fs;function Lt(o){this.__data__=new Ct(o)}function qs(){this.__data__=new Ct}function Us(o){return this.__data__.delete(o)}function Ws(o){return this.__data__.get(o)}function zs(o){return this.__data__.has(o)}function Gs(o,f){var g=this.__data__;if(g instanceof Ct){var m=g.__data__;if(!de||m.length<n-1)return m.push([o,f]),this;g=this.__data__=new St(m)}return g.set(o,f),this}Lt.prototype.clear=qs,Lt.prototype.delete=Us,Lt.prototype.get=Ws,Lt.prototype.has=zs,Lt.prototype.set=Gs;function Ks(o,f){var g=Et(o)||wn(o)?ls(o.length,String):[],m=g.length,M=!!m;for(var $ in o)Mt.call(o,$)&&!(M&&($=="length"||wr($,m)))&&g.push($);return g}function Ce(o,f){for(var g=o.length;g--;)if($r(o[g][0],f))return g;return-1}var Vs=fo(Zs);function Ys(o,f,g,m,M){var $=-1,k=o.length;for(g||(g=vo),M||(M=[]);++$<k;){var K=o[$];g(K)?ss(M,K):M[M.length]=K}return M}var Js=ho();function Zs(o,f){return o&&Js(o,f,ke)}function mr(o,f){f=Le(f,o)?[f]:vr(f);for(var g=0,m=f.length;o!=null&&g<m;)o=o[Ee(f[g++])];return g&&g==m?o:void 0}function Xs(o){return te.call(o)}function Qs(o,f){return o!=null&&f in Object(o)}function vn(o,f,g,m,M){return o===f?!0:o==null||f==null||!Re(o)&&!Pe(f)?o!==o&&f!==f:to(o,f,vn,g,m,M)}function to(o,f,g,m,M,$){var k=Et(o),K=Et(f),V=u,tt=u;k||(V=Ot(o),V=V==c?E:V),K||(tt=Ot(f),tt=tt==c?E:tt);var it=V==E&&!fn(o),st=tt==E&&!fn(f),nt=V==tt;if(nt&&!it)return $||($=new Lt),k||Co(o)?br(o,f,g,m,M,$):po(o,f,V,g,m,M,$);if(!(M&a)){var ft=it&&Mt.call(o,"__wrapped__"),ht=st&&Mt.call(f,"__wrapped__");if(ft||ht){var jt=ft?o.value():o,Dt=ht?f.value():f;return $||($=new Lt),g(jt,Dt,m,M,$)}}return nt?($||($=new Lt),go(o,f,g,m,M,$)):!1}function eo(o,f,g,m){var M=g.length,$=M;if(o==null)return!$;for(o=Object(o);M--;){var k=g[M];if(k[2]?k[1]!==o[k[0]]:!(k[0]in o))return!1}for(;++M<$;){k=g[M];var K=k[0],V=o[K],tt=k[1];if(k[2]){if(V===void 0&&!(K in o))return!1}else{var it=new Lt,st;if(!(st===void 0?vn(tt,V,m,s|a,it):st))return!1}}return!0}function no(o){if(!Re(o)||wo(o))return!1;var f=_r(o)||fn(o)?ys:rt;return f.test(Ut(o))}function ro(o){return Pe(o)&&xn(o.length)&&!!O[te.call(o)]}function io(o){return typeof o=="function"?o:o==null?Do:typeof o=="object"?Et(o)?lo(o[0],o[1]):ao(o):Ro(o)}function so(o){if(!xo(o))return bs(o);var f=[];for(var g in Object(o))Mt.call(o,g)&&g!="constructor"&&f.push(g);return f}function oo(o,f){var g=-1,m=De(o)?Array(o.length):[];return Vs(o,function(M,$,k){m[++g]=f(M,$,k)}),m}function ao(o){var f=yo(o);return f.length==1&&f[0][2]?Ar(f[0][0],f[0][1]):function(g){return g===o||eo(g,o,f)}}function lo(o,f){return Le(o)&&xr(f)?Ar(Ee(o),f):function(g){var m=Lo(g,o);return m===void 0&&m===f?Eo(g,o):vn(f,m,void 0,s|a)}}function co(o){return function(f){return mr(f,o)}}function uo(o){if(typeof o=="string")return o;if(An(o))return yr?yr.call(o):"";var f=o+"";return f=="0"&&1/o==-1/0?"-0":f}function vr(o){return Et(o)?o:Ao(o)}function fo(o,f){return function(g,m){if(g==null)return g;if(!De(g))return o(g,m);for(var M=g.length,$=-1,k=Object(g);++$<M&&m(k[$],$,k)!==!1;);return g}}function ho(o){return function(f,g,m){for(var M=-1,$=Object(f),k=m(f),K=k.length;K--;){var V=k[++M];if(g($[V],V,$)===!1)break}return f}}function br(o,f,g,m,M,$){var k=M&a,K=o.length,V=f.length;if(K!=V&&!(k&&V>K))return!1;var tt=$.get(o);if(tt&&$.get(f))return tt==f;var it=-1,st=!0,nt=M&s?new Me:void 0;for($.set(o,f),$.set(f,o);++it<K;){var ft=o[it],ht=f[it];if(m)var jt=k?m(ht,ft,it,f,o,$):m(ft,ht,it,o,f,$);if(jt!==void 0){if(jt)continue;st=!1;break}if(nt){if(!os(f,function(Dt,Wt){if(!nt.has(Wt)&&(ft===Dt||g(ft,Dt,m,M,$)))return nt.add(Wt)})){st=!1;break}}else if(!(ft===ht||g(ft,ht,m,M,$))){st=!1;break}}return $.delete(o),$.delete(f),st}function po(o,f,g,m,M,$,k){switch(g){case J:if(o.byteLength!=f.byteLength||o.byteOffset!=f.byteOffset)return!1;o=o.buffer,f=f.buffer;case et:return!(o.byteLength!=f.byteLength||!m(new pr(o),new pr(f)));case h:case p:case D:return $r(+o,+f);case y:return o.name==f.name&&o.message==f.message;case T:case I:return o==f+"";case x:var K=fs;case H:var V=$&a;if(K||(K=ds),o.size!=f.size&&!V)return!1;var tt=k.get(o);if(tt)return tt==f;$|=s,k.set(o,f);var it=br(K(o),K(f),m,M,$,k);return k.delete(o),it;case Q:if(mn)return mn.call(o)==mn.call(f)}return!1}function go(o,f,g,m,M,$){var k=M&a,K=ke(o),V=K.length,tt=ke(f),it=tt.length;if(V!=it&&!k)return!1;for(var st=V;st--;){var nt=K[st];if(!(k?nt in f:Mt.call(f,nt)))return!1}var ft=$.get(o);if(ft&&$.get(f))return ft==f;var ht=!0;$.set(o,f),$.set(f,o);for(var jt=k;++st<V;){nt=K[st];var Dt=o[nt],Wt=f[nt];if(m)var Mr=k?m(Wt,Dt,nt,f,o,$):m(Dt,Wt,nt,o,f,$);if(!(Mr===void 0?Dt===Wt||g(Dt,Wt,m,M,$):Mr)){ht=!1;break}jt||(jt=nt=="constructor")}if(ht&&!jt){var Te=o.constructor,Be=f.constructor;Te!=Be&&"constructor"in o&&"constructor"in f&&!(typeof Te=="function"&&Te instanceof Te&&typeof Be=="function"&&Be instanceof Be)&&(ht=!1)}return $.delete(o),$.delete(f),ht}function Se(o,f){var g=o.__data__;return bo(f)?g[typeof f=="string"?"string":"hash"]:g.map}function yo(o){for(var f=ke(o),g=f.length;g--;){var m=f[g],M=o[m];f[g]=[m,M,xr(M)]}return f}function ee(o,f){var g=us(o,f);return no(g)?g:void 0}var Ot=Xs;(dn&&Ot(new dn(new ArrayBuffer(1)))!=J||de&&Ot(new de)!=x||pn&&Ot(pn.resolve())!=N||gn&&Ot(new gn)!=H||yn&&Ot(new yn)!=U)&&(Ot=function(o){var f=te.call(o),g=f==E?o.constructor:void 0,m=g?Ut(g):void 0;if(m)switch(m){case ws:return J;case xs:return x;case As:return N;case $s:return H;case _s:return U}return f});function mo(o,f,g){f=Le(f,o)?[f]:vr(f);for(var m,M=-1,k=f.length;++M<k;){var $=Ee(f[M]);if(!(m=o!=null&&g(o,$)))break;o=o[$]}if(m)return m;var k=o?o.length:0;return!!k&&xn(k)&&wr($,k)&&(Et(o)||wn(o))}function vo(o){return Et(o)||wn(o)||!!(gr&&o&&o[gr])}function wr(o,f){return f=f??l,!!f&&(typeof o=="number"||kt.test(o))&&o>-1&&o%1==0&&o<f}function Le(o,f){if(Et(o))return!1;var g=typeof o;return g=="number"||g=="symbol"||g=="boolean"||o==null||An(o)?!0:P.test(o)||!R.test(o)||f!=null&&o in Object(f)}function bo(o){var f=typeof o;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?o!=="__proto__":o===null}function wo(o){return!!hr&&hr in o}function xo(o){var f=o&&o.constructor,g=typeof f=="function"&&f.prototype||Ae;return o===g}function xr(o){return o===o&&!Re(o)}function Ar(o,f){return function(g){return g==null?!1:g[o]===f&&(f!==void 0||o in Object(g))}}var Ao=bn(function(o){o=So(o);var f=[];return F.test(o)&&f.push(""),o.replace(z,function(g,m,M,$){f.push(M?$.replace(Z,"$1"):m||g)}),f});function Ee(o){if(typeof o=="string"||An(o))return o;var f=o+"";return f=="0"&&1/o==-1/0?"-0":f}function Ut(o){if(o!=null){try{return dr.call(o)}catch{}try{return o+""}catch{}}return""}function $o(o,f){return Ys(_o(o,f))}function _o(o,f){var g=Et(o)?is:oo;return g(o,io(f))}function bn(o,f){if(typeof o!="function"||f&&typeof f!="function")throw new TypeError(r);var g=function(){var m=arguments,M=f?f.apply(this,m):m[0],$=g.cache;if($.has(M))return $.get(M);var k=o.apply(this,m);return g.cache=$.set(M,k),k};return g.cache=new(bn.Cache||St),g}bn.Cache=St;function $r(o,f){return o===f||o!==o&&f!==f}function wn(o){return Mo(o)&&Mt.call(o,"callee")&&(!ms.call(o,"callee")||te.call(o)==c)}var Et=Array.isArray;function De(o){return o!=null&&xn(o.length)&&!_r(o)}function Mo(o){return Pe(o)&&De(o)}function _r(o){var f=Re(o)?te.call(o):"";return f==d||f==v}function xn(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=l}function Re(o){var f=typeof o;return!!o&&(f=="object"||f=="function")}function Pe(o){return!!o&&typeof o=="object"}function An(o){return typeof o=="symbol"||Pe(o)&&te.call(o)==Q}var Co=fr?cs(fr):ro;function So(o){return o==null?"":uo(o)}function Lo(o,f,g){var m=o==null?void 0:mr(o,f);return m===void 0?g:m}function Eo(o,f){return o!=null&&mo(o,f,Qs)}function ke(o){return De(o)?Ks(o):so(o)}function Do(o){return o}function Ro(o){return Le(o)?as(Ee(o)):co(o)}t.exports=$o})(Ze,Ze.exports);var Ru=Ze.exports;const es=Jn(Ru);function Pu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{const a={},l=u=>s.format==="date"?ve(u).unix():parseFloat(u);e.forEach(u=>{var h,p;if(s.type==="range"){const y=Kt(s.key,u);if(Array.isArray(y)){const d=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,d[0]):d[0],a.max=a.max!==void 0?Math.max(a.max,d[1]):d[1]}else{const d=l(y);a.min=a.min!==void 0?Math.min(a.min,d):d,a.max=a.max!==void 0?Math.max(a.max,d):d}return}Array.isArray(u[s.key])?u[s.key].forEach(y=>{a[y]=void 0}):s.type==="spatial"?(a.geometry=((h=s==null?void 0:s.state)==null?void 0:h.geometry)||void 0,a.geometry&&(s.stringifiedState=a.geometry.type),a.mode=s.mode||"intersects"):(p=s.key)!=null&&p.includes(".")?ts(es(n.items,s.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[u[s.key]]=void 0});const c=s.key||s.keys.join("|");n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(u=>u):void 0,key:c},s.type==="range"?{min:a.min,max:a.max,format:s.format}:{},s),n.filters[c].state=Object.assign({},a,s.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((s,a)=>s.concat(a[t.aggregateResults]),[]))).sort((s,a)=>s.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(a=>{i.includes(a)||i.push(a)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),Zl(e,Object.assign({keys:i},t.fuseConfig)),r}async function ku(t,e,n){let r;n.externalFilter?r=await ec(e,n.filters,t):r=await Xl(e,n.filters,t),n.results=n.sortResults(r)}function Tu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return S`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${ts(es(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function Bu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function Ou(t,e,n){return S`
    ${X(t.dirty,()=>S`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":S`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function ju(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var we,se,dt,le,ns,rs;class Nu extends At{constructor(){super();ot(this,le);ot(this,we,[]);ot(this,se,[]);ot(this,dt,Bc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=nn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Oe(this,we,Pu(lt(this,dt),lt(this,se),this)),this.search()}async searchHandler(){await ku(lt(this,dt),lt(this,se),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return Bu(n,lt(this,dt))}resetFilters(){ju(this)}firstUpdated(n){var i;let r={};zr.map(s=>{r={...r,[s]:this[s]}}),Oe(this,dt,r),Oe(this,se,((i=this.items)==null?void 0:i.map((s,a)=>Object.assign({id:s[this.idProperty]||`item-${a}`},s)))||[]),this.apply()}updated(n){zr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return S`
      <style>
        ${Fo}
        ${!this.unstyled&&Zn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":wt}
        @submit="${r=>r.preventDefault()}"
      >
        ${X(this.filterProperties,()=>S`
            <div style="display: var(--filter-display);">
              <eox-itemfilter-container
                .filters=${this.filters}
                .filterProperties=${this.filterProperties}
                .inlineMode=${this.inlineMode||!1}
                @reset=${()=>this.resetFilters()}
                @filter=${()=>this.search()}
              >
                <section
                  slot="section"
                  style="height: 100%; overflow: hidden; display: flex; flex-direction: column;"
                >
                  ${X(!this.inlineMode,()=>S`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${X(!this.inlineMode&&lt(this,dt).filterProperties&&!this.inlineMode&&lt(this,dt).filterProperties&&Hn(this.filters),()=>S`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?wt:S`
                                    <i class="small">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <title>close</title>
                                        <path
                                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        />
                                      </svg>
                                    </i>
                                  `}
                              <span class="small-text">Reset all</span>
                            </button>
                          `)}
                      </nav>
                    `)}
                  <div class="scroll" style="flex: 1;">
                    <ul id="filters" class="list no-space">
                      ${rn(Object.values(this.filters),(r,i)=>S` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${s=>Ci(s,lt(this,dt),this)}
                              data-details="${r.key}"
                            >
                              ${j(this,le,rs).call(this,r,Ir(i,1))}
                              ${j(this,le,ns).call(this,r,Ir(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${X(((n=lt(this,dt))==null?void 0:n.showResults)&&this.results,()=>S`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${lt(this,dt)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${lt(this,we)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}we=new WeakMap,se=new WeakMap,dt=new WeakMap,le=new WeakSet,ns=function(n,r){return Tu(n,r,this)},rs=function(n,r){return Ou(n,r,this)};customElements.define("eox-itemfilter",Nu);export{Nu as EOxItemFilter};

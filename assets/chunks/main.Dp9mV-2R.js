var Fo=Object.defineProperty;var Pr=t=>{throw TypeError(t)};var qo=(t,e,n)=>e in t?Fo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>qo(t,typeof e!="symbol"?e+"":e,n),Ln=(t,e,n)=>e.has(t)||Pr("Cannot "+n);var ft=(t,e,n)=>(Ln(t,e,"read from private field"),n?n.call(t):e.get(t)),ut=(t,e,n)=>e.has(t)?Pr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Fe=(t,e,n,r)=>(Ln(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),U=(t,e,n)=>(Ln(t,e,"access private method"),n);import{e as Uo,a as Wo,i as Mt,E as $t,x as P,Z as zo,T as ni}from"./addCommonStyleSheet.CXO9DRSZ.js";import{n as et,_ as ln}from"./index.D5gLjDv7.js";import{g as nr,c as Tt}from"./commonjsHelpers.Cpj98o6Y.js";import{f as Ve,a as Bn,p as Go,m as Ko,l as Vo}from"./toolcool-range-slider.min.CG0RIoNP.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*cn(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}const Yo=`
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
`;Wo();const rr=`
${Uo}
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
`;var rn,ri;class Jo extends Mt{constructor(){super();ut(this,rn);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return P`
      <style>
        ${!this.unstyled&&rr}
      </style>

      ${et(this.filterObject.featured,()=>P`<slot name="filter"></slot>`,()=>P`<details
            @toggle="${U(this,rn,ri)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||$t}
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
    `}}rn=new WeakSet,ri=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Jo);function Ot(t){return Array.isArray?Array.isArray(t):oi(t)==="[object Array]"}function Zo(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Xo(t){return t==null?"":Zo(t)}function xt(t){return typeof t=="string"}function ii(t){return typeof t=="number"}function Qo(t){return t===!0||t===!1||ta(t)&&oi(t)=="[object Boolean]"}function si(t){return typeof t=="object"}function ta(t){return si(t)&&t!==null}function ht(t){return t!=null}function En(t){return!t.trim().length}function oi(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ea="Incorrect 'index' type",na=t=>`Invalid value for key ${t}`,ra=t=>`Pattern length exceeds max of ${t}.`,ia=t=>`Missing ${t} property in key`,sa=t=>`Property 'weight' in key '${t}' must be a positive integer`,kr=Object.prototype.hasOwnProperty;class oa{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=ai(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ai(t){let e=null,n=null,r=null,i=1,s=null;if(xt(t)||Ot(t))r=t,e=Tr(t),n=On(t);else{if(!kr.call(t,"name"))throw new Error(ia("name"));const a=t.name;if(r=a,kr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(sa(a));e=Tr(a),n=On(a),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Tr(t){return Ot(t)?t:t.split(".")}function On(t){return Ot(t)?t.join("."):t}function aa(t,e){let n=[],r=!1;const i=(s,a,l)=>{if(ht(s))if(!a[l])n.push(s);else{let u=a[l];const c=s[u];if(!ht(c))return;if(l===a.length-1&&(xt(c)||ii(c)||Qo(c)))n.push(Xo(c));else if(Ot(c)){r=!0;for(let d=0,h=c.length;d<h;d+=1)i(c[d],a,l+1)}else a.length&&i(c,a,l+1)}};return i(t,xt(e)?e.split("."):e,0),r?n:n[0]}const la={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ca={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ua={location:0,threshold:.6,distance:100},fa={useExtendedSearch:!1,getFn:aa,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var k={...ca,...la,...ua,...fa};const ha=/[^ ]+/g;function da(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(ha).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class ir{constructor({getFn:e=k.getFn,fieldNormWeight:n=k.fieldNormWeight}={}){this.norm=da(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,xt(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();xt(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!ht(e)||En(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(ht(a)){if(Ot(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:c,value:d}=u.pop();if(ht(d))if(xt(d)&&!En(d)){let h={v:d,i:c,n:this.norm.get(d)};l.push(h)}else Ot(d)&&d.forEach((h,g)=>{u.push({nestedArrIndex:g,value:h})})}r.$[s]=l}else if(xt(a)&&!En(a)){let l={v:a,n:this.norm.get(a)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function li(t,e,{getFn:n=k.getFn,fieldNormWeight:r=k.fieldNormWeight}={}){const i=new ir({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(ai)),i.setSources(e),i.create(),i}function pa(t,{getFn:e=k.getFn,fieldNormWeight:n=k.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new ir({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function qe(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=k.distance,ignoreLocation:s=k.ignoreLocation}={}){const a=e/t.length;if(s)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function ga(t=[],e=k.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=t.length;s<a;s+=1){let l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Jt=32;function ya(t,e,n,{location:r=k.location,distance:i=k.distance,threshold:s=k.threshold,findAllMatches:a=k.findAllMatches,minMatchCharLength:l=k.minMatchCharLength,includeMatches:u=k.includeMatches,ignoreLocation:c=k.ignoreLocation}={}){if(e.length>Jt)throw new Error(ra(Jt));const d=e.length,h=t.length,g=Math.max(0,Math.min(r,h));let p=s,m=g;const b=l>1||u,$=b?Array(h):[];let w;for(;(w=t.indexOf(e,m))>-1;){let H=qe(e,{currentLocation:w,expectedLocation:g,distance:i,ignoreLocation:c});if(p=Math.min(H,p),m=w+d,b){let W=0;for(;W<d;)$[w+W]=1,W+=1}}m=-1;let E=[],D=1,R=d+h;const B=1<<d-1;for(let H=0;H<d;H+=1){let W=0,z=R;for(;W<z;)qe(e,{errors:H,currentLocation:g+z,expectedLocation:g,distance:i,ignoreLocation:c})<=p?W=z:R=z,z=Math.floor((R-W)/2+W);R=z;let I=Math.max(1,g-z+1),T=a?h:Math.min(g+z,h)+d,V=Array(T+2);V[T+1]=(1<<H)-1;for(let C=T;C>=I;C-=1){let A=C-1,x=n[t.charAt(A)];if(b&&($[A]=+!!x),V[C]=(V[C+1]<<1|1)&x,H&&(V[C]|=(E[C+1]|E[C])<<1|1|E[C+1]),V[C]&B&&(D=qe(e,{errors:H,currentLocation:A,expectedLocation:g,distance:i,ignoreLocation:c}),D<=p)){if(p=D,m=A,m<=g)break;I=Math.max(1,2*g-m)}}if(qe(e,{errors:H+1,currentLocation:g,expectedLocation:g,distance:i,ignoreLocation:c})>p)break;E=V}const F={isMatch:m>=0,score:Math.max(.001,D)};if(b){const H=ga($,l);H.length?u&&(F.indices=H):F.isMatch=!1}return F}function ma(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const Ye=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class ci{constructor(e,{location:n=k.location,threshold:r=k.threshold,distance:i=k.distance,includeMatches:s=k.includeMatches,findAllMatches:a=k.findAllMatches,minMatchCharLength:l=k.minMatchCharLength,isCaseSensitive:u=k.isCaseSensitive,ignoreDiacritics:c=k.ignoreDiacritics,ignoreLocation:d=k.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:c,ignoreLocation:d},e=u?e:e.toLowerCase(),e=c?Ye(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const h=(p,m)=>{this.chunks.push({pattern:p,alphabet:ma(p),startIndex:m})},g=this.pattern.length;if(g>Jt){let p=0;const m=g%Jt,b=g-m;for(;p<b;)h(this.pattern.substr(p,Jt),p),p+=Jt;if(m){const $=g-Jt;h(this.pattern.substr($),$)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?Ye(e):e,this.pattern===e){let b={isMatch:!0,score:0};return i&&(b.indices=[[0,e.length-1]]),b}const{location:s,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:c,ignoreLocation:d}=this.options;let h=[],g=0,p=!1;this.chunks.forEach(({pattern:b,alphabet:$,startIndex:w})=>{const{isMatch:E,score:D,indices:R}=ya(e,b,$,{location:s+w,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:c,includeMatches:i,ignoreLocation:d});E&&(p=!0),g+=D,E&&R&&(h=[...h,...R])});let m={isMatch:p,score:p?g/this.chunks.length:1};return p&&i&&(m.indices=h),m}}class Wt{constructor(e){this.pattern=e}static isMultiMatch(e){return Br(e,this.multiRegex)}static isSingleMatch(e){return Br(e,this.singleRegex)}search(){}}function Br(t,e){const n=t.match(e);return n?n[1]:null}class ba extends Wt{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class va extends Wt{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class wa extends Wt{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class xa extends Wt{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Aa extends Wt{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class $a extends Wt{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ui extends Wt{constructor(e,{location:n=k.location,threshold:r=k.threshold,distance:i=k.distance,includeMatches:s=k.includeMatches,findAllMatches:a=k.findAllMatches,minMatchCharLength:l=k.minMatchCharLength,isCaseSensitive:u=k.isCaseSensitive,ignoreDiacritics:c=k.ignoreDiacritics,ignoreLocation:d=k.ignoreLocation}={}){super(e),this._bitapSearch=new ci(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:c,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class fi extends Wt{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const jn=[ba,fi,wa,xa,$a,Aa,va,ui],Or=jn.length,_a=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ma="|";function Ca(t,e={}){return t.split(Ma).map(n=>{let r=n.trim().split(_a).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=r.length;s<a;s+=1){const l=r[s];let u=!1,c=-1;for(;!u&&++c<Or;){const d=jn[c];let h=d.isMultiMatch(l);h&&(i.push(new d(h,e)),u=!0)}if(!u)for(c=-1;++c<Or;){const d=jn[c];let h=d.isSingleMatch(l);if(h){i.push(new d(h,e));break}}}return i})}const Sa=new Set([ui.type,fi.type]);class La{constructor(e,{isCaseSensitive:n=k.isCaseSensitive,ignoreDiacritics:r=k.ignoreDiacritics,includeMatches:i=k.includeMatches,minMatchCharLength:s=k.minMatchCharLength,ignoreLocation:a=k.ignoreLocation,findAllMatches:l=k.findAllMatches,location:u=k.location,threshold:c=k.threshold,distance:d=k.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:a,location:u,threshold:c,distance:d},e=n?e:e.toLowerCase(),e=r?Ye(e):e,this.pattern=e,this.query=Ca(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;e=i?e:e.toLowerCase(),e=s?Ye(e):e;let a=0,l=[],u=0;for(let c=0,d=n.length;c<d;c+=1){const h=n[c];l.length=0,a=0;for(let g=0,p=h.length;g<p;g+=1){const m=h[g],{isMatch:b,indices:$,score:w}=m.search(e);if(b){if(a+=1,u+=w,r){const E=m.constructor.type;Sa.has(E)?l=[...l,...$]:l.push($)}}else{u=0,a=0,l.length=0;break}}if(a){let g={isMatch:!0,score:u/a};return r&&(g.indices=l),g}}return{isMatch:!1,score:1}}}const Nn=[];function Ea(...t){Nn.push(...t)}function Hn(t,e){for(let n=0,r=Nn.length;n<r;n+=1){let i=Nn[n];if(i.condition(t,e))return new i(t,e)}return new ci(t,e)}const Je={AND:"$and",OR:"$or"},In={PATH:"$path",PATTERN:"$val"},Fn=t=>!!(t[Je.AND]||t[Je.OR]),Da=t=>!!t[In.PATH],Ra=t=>!Ot(t)&&si(t)&&!Fn(t),jr=t=>({[Je.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function hi(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const a=Da(i);if(!a&&s.length>1&&!Fn(i))return r(jr(i));if(Ra(i)){const u=a?i[In.PATH]:s[0],c=a?i[In.PATTERN]:i[u];if(!xt(c))throw new Error(na(u));const d={keyId:On(u),pattern:c};return n&&(d.searcher=Hn(c,e)),d}let l={children:[],operator:s[0]};return s.forEach(u=>{const c=i[u];Ot(c)&&c.forEach(d=>{l.children.push(r(d))})}),l};return Fn(t)||(t=jr(t)),r(t)}function Pa(t,{ignoreFieldNorm:e=k.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),n.score=r})}function ka(t,e){const n=t.matches;e.matches=[],ht(n)&&n.forEach(r=>{if(!ht(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let a={indices:i,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Ta(t,e){e.score=t.score}function Ba(t,e,{includeMatches:n=k.includeMatches,includeScore:r=k.includeScore}={}){const i=[];return n&&i.push(ka),r&&i.push(Ta),t.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(s,l)}),l})}class zt{constructor(e,n={},r){this.options={...k,...n},this.options.useExtendedSearch,this._keyStore=new oa(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ir))throw new Error(ea);this._myIndex=n||li(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){ht(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let u=xt(e)?xt(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Pa(u,{ignoreFieldNorm:l}),s&&u.sort(a),ii(n)&&n>-1&&(u=u.slice(0,n)),Ba(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Hn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:a,n:l})=>{if(!ht(s))return;const{isMatch:u,score:c,indices:d}=n.searchIn(s);u&&i.push({item:s,idx:a,matches:[{score:c,value:s,norm:l,indices:d}]})}),i}_searchLogical(e){const n=hi(e,this.options),r=(l,u,c)=>{if(!l.children){const{keyId:h,searcher:g}=l,p=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:g});return p&&p.length?[{idx:c,item:u,matches:p}]:[]}const d=[];for(let h=0,g=l.children.length;h<g;h+=1){const p=l.children[h],m=r(p,u,c);if(m.length)d.push(...m);else if(l.operator===Je.AND)return[]}return d},i=this._myIndex.records,s={},a=[];return i.forEach(({$:l,i:u})=>{if(ht(l)){let c=r(n,l,u);c.length&&(s[u]||(s[u]={idx:u,item:l,matches:[]},a.push(s[u])),c.forEach(({matches:d})=>{s[u].matches.push(...d)}))}}),a}_searchObjectList(e){const n=Hn(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:l})=>{if(!ht(a))return;let u=[];r.forEach((c,d)=>{u.push(...this._findMatches({key:c,value:a[d],searcher:n}))}),u.length&&s.push({idx:l,item:a,matches:u})}),s}_findMatches({key:e,value:n,searcher:r}){if(!ht(n))return[];let i=[];if(Ot(n))n.forEach(({v:s,i:a,n:l})=>{if(!ht(s))return;const{isMatch:u,score:c,indices:d}=r.searchIn(s);u&&i.push({score:c,key:e,value:s,idx:a,norm:l,indices:d})});else{const{v:s,n:a}=n,{isMatch:l,score:u,indices:c}=r.searchIn(s);l&&i.push({score:u,key:e,value:s,norm:a,indices:c})}return i}}zt.version="7.1.0";zt.createIndex=li;zt.parseIndex=pa;zt.config=k;zt.parseQuery=hi;Ea(La);function di(t,e){const n=new zt(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,s=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=s.includes(a)||!r?"":"none"})}function Oa(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const qn=Math.min,le=Math.max,Ze=Math.round,Ue=Math.floor,At=t=>({x:t,y:t});function pi(t){return t.split("-")[0]}function ja(t){return t.split("-")[1]}function Na(t){return t==="x"?"y":"x"}function Ha(t){return t==="y"?"height":"width"}const Ia=new Set(["top","bottom"]);function gi(t){return Ia.has(pi(t))?"y":"x"}function Fa(t){return Na(gi(t))}function yi(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Nr(t,e,n){let{reference:r,floating:i}=t;const s=gi(e),a=Fa(e),l=Ha(a),u=pi(e),c=s==="y",d=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,g=r[l]/2-i[l]/2;let p;switch(u){case"top":p={x:d,y:r.y-i.height};break;case"bottom":p={x:d,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:h};break;case"left":p={x:r.x-i.width,y:h};break;default:p={x:r.x,y:r.y}}switch(ja(e)){case"start":p[a]-=g*(n&&c?-1:1);break;case"end":p[a]+=g*(n&&c?-1:1);break}return p}const qa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:h}=Nr(c,r,u),g=r,p={},m=0;for(let b=0;b<l.length;b++){const{name:$,fn:w}=l[b],{x:E,y:D,data:R,reset:B}=await w({x:d,y:h,initialPlacement:r,placement:g,strategy:i,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});d=E??d,h=D??h,p={...p,[$]:{...p[$],...R}},B&&m<=50&&(m++,typeof B=="object"&&(B.placement&&(g=B.placement),B.rects&&(c=B.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):B.rects),{x:d,y:h}=Nr(c,g,u)),b=-1)}return{x:d,y:h,placement:g,strategy:i,middlewareData:p}};function un(){return typeof window<"u"}function pe(t){return mi(t)?(t.nodeName||"").toLowerCase():"#document"}function dt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ct(t){var e;return(e=(mi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function mi(t){return un()?t instanceof Node||t instanceof dt(t).Node:!1}function vt(t){return un()?t instanceof Element||t instanceof dt(t).Element:!1}function _t(t){return un()?t instanceof HTMLElement||t instanceof dt(t).HTMLElement:!1}function Hr(t){return!un()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof dt(t).ShadowRoot}const Ua=new Set(["inline","contents"]);function Me(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=wt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!Ua.has(i)}const Wa=new Set(["table","td","th"]);function za(t){return Wa.has(pe(t))}const Ga=[":popover-open",":modal"];function fn(t){return Ga.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ka=["transform","translate","scale","rotate","perspective"],Va=["transform","translate","scale","rotate","perspective","filter"],Ya=["paint","layout","strict","content"];function sr(t){const e=or(),n=vt(t)?wt(t):t;return Ka.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Va.some(r=>(n.willChange||"").includes(r))||Ya.some(r=>(n.contain||"").includes(r))}function Ja(t){let e=qt(t);for(;_t(e)&&!fe(e);){if(sr(e))return e;if(fn(e))return null;e=qt(e)}return null}function or(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Za=new Set(["html","body","#document"]);function fe(t){return Za.has(pe(t))}function wt(t){return dt(t).getComputedStyle(t)}function hn(t){return vt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function qt(t){if(pe(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Hr(t)&&t.host||Ct(t);return Hr(e)?e.host:e}function bi(t){const e=qt(t);return fe(e)?t.ownerDocument?t.ownerDocument.body:t.body:_t(e)&&Me(e)?e:bi(e)}function xe(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=bi(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),a=dt(i);if(s){const l=Un(a);return e.concat(a,a.visualViewport||[],Me(i)?i:[],l&&n?xe(l):[])}return e.concat(i,xe(i,[],n))}function Un(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function vi(t){const e=wt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=_t(t),s=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ze(n)!==s||Ze(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function ar(t){return vt(t)?t:t.contextElement}function ce(t){const e=ar(t);if(!_t(e))return At(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=vi(e);let a=(s?Ze(n.width):n.width)/r,l=(s?Ze(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Xa=At(0);function wi(t){const e=dt(t);return!or()||!e.visualViewport?Xa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Qa(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==dt(t)?!1:e}function Xt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ar(t);let a=At(1);e&&(r?vt(r)&&(a=ce(r)):a=ce(t));const l=Qa(s,n,r)?wi(s):At(0);let u=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,d=i.width/a.x,h=i.height/a.y;if(s){const g=dt(s),p=r&&vt(r)?dt(r):r;let m=g,b=Un(m);for(;b&&r&&p!==m;){const $=ce(b),w=b.getBoundingClientRect(),E=wt(b),D=w.left+(b.clientLeft+parseFloat(E.paddingLeft))*$.x,R=w.top+(b.clientTop+parseFloat(E.paddingTop))*$.y;u*=$.x,c*=$.y,d*=$.x,h*=$.y,u+=D,c+=R,m=dt(b),b=Un(m)}}return yi({width:d,height:h,x:u,y:c})}function lr(t,e){const n=hn(t).scrollLeft;return e?e.left+n:Xt(Ct(t)).left+n}function xi(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:lr(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function tl(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",a=Ct(r),l=e?fn(e.floating):!1;if(r===a||l&&s)return n;let u={scrollLeft:0,scrollTop:0},c=At(1);const d=At(0),h=_t(r);if((h||!h&&!s)&&((pe(r)!=="body"||Me(a))&&(u=hn(r)),_t(r))){const p=Xt(r);c=ce(r),d.x=p.x+r.clientLeft,d.y=p.y+r.clientTop}const g=a&&!h&&!s?xi(a,u,!0):At(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+d.x+g.x,y:n.y*c.y-u.scrollTop*c.y+d.y+g.y}}function el(t){return Array.from(t.getClientRects())}function nl(t){const e=Ct(t),n=hn(t),r=t.ownerDocument.body,i=le(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=le(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+lr(t);const l=-n.scrollTop;return wt(r).direction==="rtl"&&(a+=le(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:a,y:l}}function rl(t,e){const n=dt(t),r=Ct(t),i=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){s=i.width,a=i.height;const c=or();(!c||c&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:s,height:a,x:l,y:u}}const il=new Set(["absolute","fixed"]);function sl(t,e){const n=Xt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=_t(t)?ce(t):At(1),a=t.clientWidth*s.x,l=t.clientHeight*s.y,u=i*s.x,c=r*s.y;return{width:a,height:l,x:u,y:c}}function Ir(t,e,n){let r;if(e==="viewport")r=rl(t,n);else if(e==="document")r=nl(Ct(t));else if(vt(e))r=sl(e,n);else{const i=wi(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return yi(r)}function Ai(t,e){const n=qt(t);return n===e||!vt(n)||fe(n)?!1:wt(n).position==="fixed"||Ai(n,e)}function ol(t,e){const n=e.get(t);if(n)return n;let r=xe(t,[],!1).filter(l=>vt(l)&&pe(l)!=="body"),i=null;const s=wt(t).position==="fixed";let a=s?qt(t):t;for(;vt(a)&&!fe(a);){const l=wt(a),u=sr(a);!u&&l.position==="fixed"&&(i=null),(s?!u&&!i:!u&&l.position==="static"&&!!i&&il.has(i.position)||Me(a)&&!u&&Ai(t,a))?r=r.filter(d=>d!==a):i=l,a=qt(a)}return e.set(t,r),r}function al(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?fn(e)?[]:ol(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((c,d)=>{const h=Ir(e,d,i);return c.top=le(h.top,c.top),c.right=qn(h.right,c.right),c.bottom=qn(h.bottom,c.bottom),c.left=le(h.left,c.left),c},Ir(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ll(t){const{width:e,height:n}=vi(t);return{width:e,height:n}}function cl(t,e,n){const r=_t(e),i=Ct(e),s=n==="fixed",a=Xt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const u=At(0);function c(){u.x=lr(i)}if(r||!r&&!s)if((pe(e)!=="body"||Me(i))&&(l=hn(e)),r){const p=Xt(e,!0,s,e);u.x=p.x+e.clientLeft,u.y=p.y+e.clientTop}else i&&c();s&&!r&&i&&c();const d=i&&!r&&!s?xi(i,l):At(0),h=a.left+l.scrollLeft-u.x-d.x,g=a.top+l.scrollTop-u.y-d.y;return{x:h,y:g,width:a.width,height:a.height}}function Dn(t){return wt(t).position==="static"}function Fr(t,e){if(!_t(t)||wt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Ct(t)===n&&(n=n.ownerDocument.body),n}function $i(t,e){const n=dt(t);if(fn(t))return n;if(!_t(t)){let i=qt(t);for(;i&&!fe(i);){if(vt(i)&&!Dn(i))return i;i=qt(i)}return n}let r=Fr(t,e);for(;r&&za(r)&&Dn(r);)r=Fr(r,e);return r&&fe(r)&&Dn(r)&&!sr(r)?n:r||Ja(t)||n}const ul=async function(t){const e=this.getOffsetParent||$i,n=this.getDimensions,r=await n(t.floating);return{reference:cl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function fl(t){return wt(t).direction==="rtl"}const hl={convertOffsetParentRelativeRectToViewportRelativeRect:tl,getDocumentElement:Ct,getClippingRect:al,getOffsetParent:$i,getElementRects:ul,getClientRects:el,getDimensions:ll,getScale:ce,isElement:vt,isRTL:fl};function _i(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function dl(t,e){let n=null,r;const i=Ct(t);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),s();const c=t.getBoundingClientRect(),{left:d,top:h,width:g,height:p}=c;if(l||e(),!g||!p)return;const m=Ue(h),b=Ue(i.clientWidth-(d+g)),$=Ue(i.clientHeight-(h+p)),w=Ue(d),D={rootMargin:-m+"px "+-b+"px "+-$+"px "+-w+"px",threshold:le(0,qn(1,u))||1};let R=!0;function B(F){const H=F[0].intersectionRatio;if(H!==u){if(!R)return a();H?a(!1,H):r=setTimeout(()=>{a(!1,1e-7)},1e3)}H===1&&!_i(c,t.getBoundingClientRect())&&a(),R=!1}try{n=new IntersectionObserver(B,{...D,root:i.ownerDocument})}catch{n=new IntersectionObserver(B,D)}n.observe(t)}return a(!0),s}function pl(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,c=ar(t),d=i||s?[...c?xe(c):[],...xe(e)]:[];d.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),s&&w.addEventListener("resize",n)});const h=c&&l?dl(c,n):null;let g=-1,p=null;a&&(p=new ResizeObserver(w=>{let[E]=w;E&&E.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var D;(D=p)==null||D.observe(e)})),n()}),c&&!u&&p.observe(c),p.observe(e));let m,b=u?Xt(t):null;u&&$();function $(){const w=Xt(t);b&&!_i(b,w)&&n(),b=w,m=requestAnimationFrame($)}return n(),()=>{var w;d.forEach(E=>{i&&E.removeEventListener("scroll",n),s&&E.removeEventListener("resize",n)}),h==null||h(),(w=p)==null||w.disconnect(),p=null,u&&cancelAnimationFrame(m)}}const gl=(t,e,n)=>{const r=new Map,i={platform:hl,...n},s={...i.platform,_c:r};return qa(t,e,{...i,platform:s})};function yl(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return pl(e,n,()=>{n.matches(":popover-open")&&gl(e,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Mi(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",di({target:{value:""}},t)}function ml(t,e){e.inlineMode&&t.stopPropagation()}function bl(t){t.inlineMode&&(t.showDropdown=!0)}function vl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function wl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Mi(e),e.showDropdown=!1)}function xl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Mi(e),e.showDropdown=!1)}const Bt=11102230246251565e-32,rt=134217729,Al=(3+8*Bt)*Bt;function Rn(t,e,n,r,i){let s,a,l,u,c=e[0],d=r[0],h=0,g=0;d>c==d>-c?(s=c,c=e[++h]):(s=d,d=r[++g]);let p=0;if(h<t&&g<n)for(d>c==d>-c?(a=c+s,l=s-(a-c),c=e[++h]):(a=d+s,l=s-(a-d),d=r[++g]),s=a,l!==0&&(i[p++]=l);h<t&&g<n;)d>c==d>-c?(a=s+c,u=a-s,l=s-(a-u)+(c-u),c=e[++h]):(a=s+d,u=a-s,l=s-(a-u)+(d-u),d=r[++g]),s=a,l!==0&&(i[p++]=l);for(;h<t;)a=s+c,u=a-s,l=s-(a-u)+(c-u),c=e[++h],s=a,l!==0&&(i[p++]=l);for(;g<n;)a=s+d,u=a-s,l=s-(a-u)+(d-u),d=r[++g],s=a,l!==0&&(i[p++]=l);return(s!==0||p===0)&&(i[p++]=s),p}function $l(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function Ce(t){return new Float64Array(t)}const _l=(3+16*Bt)*Bt,Ml=(2+12*Bt)*Bt,Cl=(9+64*Bt)*Bt*Bt,oe=Ce(4),qr=Ce(8),Ur=Ce(12),Wr=Ce(16),ot=Ce(4);function Sl(t,e,n,r,i,s,a){let l,u,c,d,h,g,p,m,b,$,w,E,D,R,B,F,H,W;const z=t-i,I=n-i,T=e-s,V=r-s;R=z*V,g=rt*z,p=g-(g-z),m=z-p,g=rt*V,b=g-(g-V),$=V-b,B=m*$-(R-p*b-m*b-p*$),F=T*I,g=rt*T,p=g-(g-T),m=T-p,g=rt*I,b=g-(g-I),$=I-b,H=m*$-(F-p*b-m*b-p*$),w=B-H,h=B-w,oe[0]=B-(w+h)+(h-H),E=R+w,h=E-R,D=R-(E-h)+(w-h),w=D-F,h=D-w,oe[1]=D-(w+h)+(h-F),W=E+w,h=W-E,oe[2]=E-(W-h)+(w-h),oe[3]=W;let it=$l(4,oe),C=Ml*a;if(it>=C||-it>=C||(h=t-z,l=t-(z+h)+(h-i),h=n-I,c=n-(I+h)+(h-i),h=e-T,u=e-(T+h)+(h-s),h=r-V,d=r-(V+h)+(h-s),l===0&&u===0&&c===0&&d===0)||(C=Cl*a+Al*Math.abs(it),it+=z*d+V*l-(T*c+I*u),it>=C||-it>=C))return it;R=l*V,g=rt*l,p=g-(g-l),m=l-p,g=rt*V,b=g-(g-V),$=V-b,B=m*$-(R-p*b-m*b-p*$),F=u*I,g=rt*u,p=g-(g-u),m=u-p,g=rt*I,b=g-(g-I),$=I-b,H=m*$-(F-p*b-m*b-p*$),w=B-H,h=B-w,ot[0]=B-(w+h)+(h-H),E=R+w,h=E-R,D=R-(E-h)+(w-h),w=D-F,h=D-w,ot[1]=D-(w+h)+(h-F),W=E+w,h=W-E,ot[2]=E-(W-h)+(w-h),ot[3]=W;const A=Rn(4,oe,4,ot,qr);R=z*d,g=rt*z,p=g-(g-z),m=z-p,g=rt*d,b=g-(g-d),$=d-b,B=m*$-(R-p*b-m*b-p*$),F=T*c,g=rt*T,p=g-(g-T),m=T-p,g=rt*c,b=g-(g-c),$=c-b,H=m*$-(F-p*b-m*b-p*$),w=B-H,h=B-w,ot[0]=B-(w+h)+(h-H),E=R+w,h=E-R,D=R-(E-h)+(w-h),w=D-F,h=D-w,ot[1]=D-(w+h)+(h-F),W=E+w,h=W-E,ot[2]=E-(W-h)+(w-h),ot[3]=W;const x=Rn(A,qr,4,ot,Ur);R=l*d,g=rt*l,p=g-(g-l),m=l-p,g=rt*d,b=g-(g-d),$=d-b,B=m*$-(R-p*b-m*b-p*$),F=u*c,g=rt*u,p=g-(g-u),m=u-p,g=rt*c,b=g-(g-c),$=c-b,H=m*$-(F-p*b-m*b-p*$),w=B-H,h=B-w,ot[0]=B-(w+h)+(h-H),E=R+w,h=E-R,D=R-(E-h)+(w-h),w=D-F,h=D-w,ot[1]=D-(w+h)+(h-F),W=E+w,h=W-E,ot[2]=E-(W-h)+(w-h),ot[3]=W;const S=Rn(x,Ur,4,ot,Wr);return Wr[S-1]}function Ll(t,e,n,r,i,s){const a=(e-s)*(n-i),l=(t-i)*(r-s),u=a-l,c=Math.abs(a+l);return Math.abs(u)>=_l*c?u:-Sl(t,e,n,r,i,s,c)}function El(t,e){var n,r,i=0,s,a,l,u,c,d,h,g=t[0],p=t[1],m=e.length;for(n=0;n<m;n++){r=0;var b=e[n],$=b.length-1;if(d=b[0],d[0]!==b[$][0]&&d[1]!==b[$][1])throw new Error("First and last coordinates in a ring must be the same");for(a=d[0]-g,l=d[1]-p,r;r<$;r++){if(h=b[r+1],u=h[0]-g,c=h[1]-p,l===0&&c===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(c>=0&&l<=0||c<=0&&l>=0){if(s=Ll(a,u,l,c,0,0),s===0)return 0;(s>0&&c>0&&l<=0||s<0&&c<=0&&l>0)&&i++}d=h,l=c,a=u}}return i%2!==0}function Ci(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Dl(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function he(t){return t.type==="Feature"?t.geometry:t}function mt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Ci(t),i=he(e),s=i.type,a=e.bbox;let l=i.coordinates;if(a&&Rl(r,a)===!1)return!1;s==="Polygon"&&(l=[l]);let u=!1;for(var c=0;c<l.length;++c){const d=El(r,l[c]);if(d===0)return!n.ignoreBoundary;d&&(u=!0)}return u}function Rl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Si{constructor(e=[],n=Pl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const s=e-1>>1,a=n[s];if(r(i,a)>=0)break;n[e]=a,e=s}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,s=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,s)>=0)break;n[e]=l,e=a}n[e]=s}}function Pl(t,e){return t<e?-1:t>e?1:0}function Li(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function kl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class zr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Tl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)Gr(n[r],e)}else Gr(t,e)}let We=0,ze=0,Ge=0;function Gr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let a=r[i][s][0],l=null;ze=ze+1;for(let u=0;u<r[i][s].length-1;u++){l=r[i][s][u+1];const c=new zr(a,We,ze,Ge),d=new zr(l,We,ze,Ge+1);c.otherEvent=d,d.otherEvent=c,Li(c,d)>0?(d.isLeftEndpoint=!0,c.isLeftEndpoint=!1):(c.isLeftEndpoint=!0,d.isLeftEndpoint=!1),e.push(c),e.push(d),a=l,Ge=Ge+1}}We=We+1}class Bl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Ol(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,c=e.rightSweepEvent.p.y,d=(c-l)*(i-n)-(u-a)*(s-r),h=(u-a)*(r-l)-(c-l)*(n-a),g=(i-n)*(r-l)-(s-r)*(n-a);if(d===0)return!1;const p=h/d,m=g/d;if(p>=0&&p<=1&&m>=0&&m<=1){const b=n+p*(i-n),$=r+p*(s-r);return[b,$]}return!1}function jl(t,e){e=e||!1;const n=[],r=new Si([],kl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const s=new Bl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=Ol(s,l);u!==!1&&n.push(u)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function Nl(t,e){const n=new Si([],Li);return Tl(t,n),jl(n,e)}var Hl=Nl;function cr(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Ve(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Ve(e));const a=Hl(Bn(s),i);let l=[];if(r){const u={};a.forEach(c=>{const d=c.join(",");u[d]||(u[d]=!0,l.push(c))})}else l=a;return Bn(l.map(u=>Go(u)))}function Ei(t,e,n){if(t!==null)for(var r,i,s,a,l,u,c,d=0,h=0,g,p=t.type,m=p==="FeatureCollection",b=p==="Feature",$=m?t.features.length:1,w=0;w<$;w++){c=m?t.features[w].geometry:b?t.geometry:t,g=c?c.type==="GeometryCollection":!1,l=g?c.geometries.length:1;for(var E=0;E<l;E++){var D=0,R=0;if(a=g?c.geometries[E]:c,a!==null){u=a.coordinates;var B=a.type;switch(d=0,B){case null:break;case"Point":if(e(u,h,w,D,R)===!1)return!1;h++,D++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],h,w,D,R)===!1)return!1;h++,B==="MultiPoint"&&D++}B==="LineString"&&D++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-d;i++){if(e(u[r][i],h,w,D,R)===!1)return!1;h++}B==="MultiLineString"&&D++,B==="Polygon"&&R++}B==="Polygon"&&D++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(s=0;s<u[r][i].length-d;s++){if(e(u[r][i][s],h,w,D,R)===!1)return!1;h++}R++}D++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Ei(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Il(t,e){var n,r,i,s,a,l,u,c,d,h,g=0,p=t.type==="FeatureCollection",m=t.type==="Feature",b=p?t.features.length:1;for(n=0;n<b;n++){for(l=p?t.features[n].geometry:m?t.geometry:t,c=p?t.features[n].properties:m?t.properties:{},d=p?t.features[n].bbox:m?t.bbox:void 0,h=p?t.features[n].id:m?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(s=u?l.geometries[i]:l,s===null){if(e(null,g,c,d,h)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,g,c,d,h)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],g,c,d,h)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}g++}}function Xe(t,e){Il(t,function(n,r,i,s,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Ve(n,i,{bbox:s,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var c=0;c<n.coordinates.length;c++){var d=n.coordinates[c],h={type:u,coordinates:d};if(e(Ve(h,i),r,c)===!1)return!1}})}function Wn(t,e={}){const n=he(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return Fl(n,e);case"MultiPolygon":return ql(n,e);default:throw new Error("invalid poly")}}function Fl(t,e={}){const r=he(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Di(r,i)}function ql(t,e={}){const r=he(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return r.forEach(a=>{s.push(Di(a,i))}),Bn(s)}function Di(t,e){return t.length>1?Ko(t,e):Vo(t[0],e)}function Ul(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Xe(t,i=>{Xe(e,s=>{if(r===!1)return!1;r=Wl(i.geometry,s.geometry,n)})}),r}function Wl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!Vl(t.coordinates,e.coordinates);case"LineString":return!Kr(e,t);case"Polygon":return!mt(t,e)}break;case"LineString":switch(e.type){case"Point":return!Kr(t,e);case"LineString":return!zl(t,e,n);case"Polygon":return!Vr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!mt(e,t);case"LineString":return!Vr(t,e,n);case"Polygon":return!Gl(e,t,n)}}return!1}function Kr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(Kl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function zl(t,e,n){return cr(t,e,{ignoreSelfIntersections:n}).features.length>0}function Vr(t,e,n){for(const i of e.coordinates)if(mt(i,t))return!0;return cr(e,Wn(t),{ignoreSelfIntersections:n}).features.length>0}function Gl(t,e,n){for(const i of t.coordinates[0])if(mt(i,e))return!0;for(const i of e.coordinates[0])if(mt(i,t))return!0;return cr(Wn(t),Wn(e),{ignoreSelfIntersections:n}).features.length>0}function Kl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],s=e[0]-t[0],a=e[1]-t[1];return r*a-i*s!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function Vl(t,e){return t[0]===e[0]&&t[1]===e[1]}function Yl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Xe(t,i=>{Xe(e,s=>{if(r===!0)return!0;r=!Ul(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var Jl=Yl;function Qe(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Ei(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function tn(t,e,n={}){const r=Ci(t),i=Dl(e);for(let s=0;s<i.length-1;s++){let a=!1;if(n.ignoreEndVertices&&(s===0&&(a="start"),s===i.length-2&&(a="end"),s===0&&s+1===i.length-1&&(a="both")),Zl(i[s],i[s+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Zl(t,e,n,r,i){const s=n[0],a=n[1],l=t[0],u=t[1],c=e[0],d=e[1],h=n[0]-l,g=n[1]-u,p=c-l,m=d-u,b=h*m-g*p;if(i!==null){if(Math.abs(b)>i)return!1}else if(b!==0)return!1;if(Math.abs(p)===Math.abs(m)&&Math.abs(p)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(p)>=Math.abs(m)?p>0?l<s&&s<=c:c<=s&&s<l:m>0?u<a&&a<=d:d<=a&&a<u;if(r==="end")return Math.abs(p)>=Math.abs(m)?p>0?l<=s&&s<c:c<s&&s<=l:m>0?u<=a&&a<d:d<a&&a<=u;if(r==="both")return Math.abs(p)>=Math.abs(m)?p>0?l<s&&s<c:c<s&&s<l:m>0?u<a&&a<d:d<a&&a<u}else return Math.abs(p)>=Math.abs(m)?p>0?l<=s&&s<=c:c<=s&&s<=l:m>0?u<=a&&a<=d:d<=a&&a<=u;return!1}function Xl(t,e){var n=he(t),r=he(e),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return Ql(n,r);case"LineString":return tn(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return mt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return tc(n,r);case"LineString":return ec(n,r);case"Polygon":case"MultiPolygon":return nc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return rc(n,r);case"Polygon":case"MultiPolygon":return ic(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return sc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Ql(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Pi(e.coordinates[n],t.coordinates)){r=!0;break}return r}function tc(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)Pi(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function ec(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!tn(t.coordinates[r],e))return!1;n||(n=tn(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function nc(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=mt(t.coordinates[i],e),!r){n=!1;break}r=mt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function rc(t,e){for(var n=0;n<t.coordinates.length;n++)if(!tn(t.coordinates[n],e))return!1;return!0}function ic(t,e){var n=Qe(e),r=Qe(t);if(!Ri(n,r))return!1;for(var i=!1,s=0;s<t.coordinates.length;s++){if(!mt(t.coordinates[s],e))return!1;if(i||(i=mt(t.coordinates[s],e,{ignoreBoundary:!0})),!i&&s<t.coordinates.length-1){var a=oc(t.coordinates[s],t.coordinates[s+1]);i=mt(a,e,{ignoreBoundary:!0})}}return i}function sc(t,e){var n=Qe(t),r=Qe(e);if(!Ri(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!mt(t.coordinates[0][i],e))return!1;return!0}function Ri(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Pi(t,e){return t[0]===e[0]&&t[1]===e[1]}function oc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var ac=Xl;const lc=(t,e)=>e?Jl(t,e):!0,cc=(t,e)=>e?ac(t,e):!0;function uc(t,e="highlight",n="title"){const r=(s,a,l)=>{const u=a.split(".");let c;for(c=0;c<u.length-1;c++)s=s[u[c]];s[u[c]]=l},i=(s,a=[])=>{let l="",u=0;return a.forEach(c=>{const d=c[1]+1;l+=[s.substring(u,c[0]),`<mark class="${e}">`,s.substring(c[0],d),"</mark>"].join(""),u=d}),l+=s.substring(u),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={...s};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}var ki={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Tt,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",a="second",l="minute",u="hour",c="day",d="week",h="month",g="quarter",p="year",m="date",b="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var A=["th","st","nd","rd"],x=C%100;return"["+C+(A[(x-20)%10]||A[x]||A[0])+"]"}},D=function(C,A,x){var S=String(C);return!S||S.length>=A?C:""+Array(A+1-S.length).join(x)+C},R={s:D,z:function(C){var A=-C.utcOffset(),x=Math.abs(A),S=Math.floor(x/60),_=x%60;return(A<=0?"+":"-")+D(S,2,"0")+":"+D(_,2,"0")},m:function C(A,x){if(A.date()<x.date())return-C(x,A);var S=12*(x.year()-A.year())+(x.month()-A.month()),_=A.clone().add(S,h),O=x-_<0,j=A.clone().add(S+(O?-1:1),h);return+(-(S+(x-_)/(O?_-j:j-_))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:h,y:p,w:d,d:c,D:m,h:u,m:l,s:a,ms:s,Q:g}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},B="en",F={};F[B]=E;var H="$isDayjsObject",W=function(C){return C instanceof V||!(!C||!C[H])},z=function C(A,x,S){var _;if(!A)return B;if(typeof A=="string"){var O=A.toLowerCase();F[O]&&(_=O),x&&(F[O]=x,_=O);var j=A.split("-");if(!_&&j.length>1)return C(j[0])}else{var G=A.name;F[G]=A,_=G}return!S&&_&&(B=_),_||!S&&B},I=function(C,A){if(W(C))return C.clone();var x=typeof A=="object"?A:{};return x.date=C,x.args=arguments,new V(x)},T=R;T.l=z,T.i=W,T.w=function(C,A){return I(C,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var V=function(){function C(x){this.$L=z(x.locale,null,!0),this.parse(x),this.$x=this.$x||x.x||{},this[H]=!0}var A=C.prototype;return A.parse=function(x){this.$d=function(S){var _=S.date,O=S.utc;if(_===null)return new Date(NaN);if(T.u(_))return new Date;if(_ instanceof Date)return new Date(_);if(typeof _=="string"&&!/Z$/i.test(_)){var j=_.match($);if(j){var G=j[2]-1||0,Y=(j[7]||"0").substring(0,3);return O?new Date(Date.UTC(j[1],G,j[3]||1,j[4]||0,j[5]||0,j[6]||0,Y)):new Date(j[1],G,j[3]||1,j[4]||0,j[5]||0,j[6]||0,Y)}}return new Date(_)}(x),this.init()},A.init=function(){var x=this.$d;this.$y=x.getFullYear(),this.$M=x.getMonth(),this.$D=x.getDate(),this.$W=x.getDay(),this.$H=x.getHours(),this.$m=x.getMinutes(),this.$s=x.getSeconds(),this.$ms=x.getMilliseconds()},A.$utils=function(){return T},A.isValid=function(){return this.$d.toString()!==b},A.isSame=function(x,S){var _=I(x);return this.startOf(S)<=_&&_<=this.endOf(S)},A.isAfter=function(x,S){return I(x)<this.startOf(S)},A.isBefore=function(x,S){return this.endOf(S)<I(x)},A.$g=function(x,S,_){return T.u(x)?this[S]:this.set(_,x)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(x,S){var _=this,O=!!T.u(S)||S,j=T.p(x),G=function(St,J){var bt=T.w(_.$u?Date.UTC(_.$y,J,St):new Date(_.$y,J,St),_);return O?bt:bt.endOf(c)},Y=function(St,J){return T.w(_.toDate()[St].apply(_.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(J)),_)},Q=this.$W,tt=this.$M,at=this.$D,jt="set"+(this.$u?"UTC":"");switch(j){case p:return O?G(1,0):G(31,11);case h:return O?G(1,tt):G(0,tt+1);case d:var q=this.$locale().weekStart||0,Nt=(Q<q?Q+7:Q)-q;return G(O?at-Nt:at+(6-Nt),tt);case c:case m:return Y(jt+"Hours",0);case u:return Y(jt+"Minutes",1);case l:return Y(jt+"Seconds",2);case a:return Y(jt+"Milliseconds",3);default:return this.clone()}},A.endOf=function(x){return this.startOf(x,!1)},A.$set=function(x,S){var _,O=T.p(x),j="set"+(this.$u?"UTC":""),G=(_={},_[c]=j+"Date",_[m]=j+"Date",_[h]=j+"Month",_[p]=j+"FullYear",_[u]=j+"Hours",_[l]=j+"Minutes",_[a]=j+"Seconds",_[s]=j+"Milliseconds",_)[O],Y=O===c?this.$D+(S-this.$W):S;if(O===h||O===p){var Q=this.clone().set(m,1);Q.$d[G](Y),Q.init(),this.$d=Q.set(m,Math.min(this.$D,Q.daysInMonth())).$d}else G&&this.$d[G](Y);return this.init(),this},A.set=function(x,S){return this.clone().$set(x,S)},A.get=function(x){return this[T.p(x)]()},A.add=function(x,S){var _,O=this;x=Number(x);var j=T.p(S),G=function(tt){var at=I(O);return T.w(at.date(at.date()+Math.round(tt*x)),O)};if(j===h)return this.set(h,this.$M+x);if(j===p)return this.set(p,this.$y+x);if(j===c)return G(1);if(j===d)return G(7);var Y=(_={},_[l]=r,_[u]=i,_[a]=n,_)[j]||1,Q=this.$d.getTime()+x*Y;return T.w(Q,this)},A.subtract=function(x,S){return this.add(-1*x,S)},A.format=function(x){var S=this,_=this.$locale();if(!this.isValid())return _.invalidDate||b;var O=x||"YYYY-MM-DDTHH:mm:ssZ",j=T.z(this),G=this.$H,Y=this.$m,Q=this.$M,tt=_.weekdays,at=_.months,jt=_.meridiem,q=function(J,bt,Ht,re){return J&&(J[bt]||J(S,O))||Ht[bt].slice(0,re)},Nt=function(J){return T.s(G%12||12,J,"0")},St=jt||function(J,bt,Ht){var re=J<12?"AM":"PM";return Ht?re.toLowerCase():re};return O.replace(w,function(J,bt){return bt||function(Ht){switch(Ht){case"YY":return String(S.$y).slice(-2);case"YYYY":return T.s(S.$y,4,"0");case"M":return Q+1;case"MM":return T.s(Q+1,2,"0");case"MMM":return q(_.monthsShort,Q,at,3);case"MMMM":return q(at,Q);case"D":return S.$D;case"DD":return T.s(S.$D,2,"0");case"d":return String(S.$W);case"dd":return q(_.weekdaysMin,S.$W,tt,2);case"ddd":return q(_.weekdaysShort,S.$W,tt,3);case"dddd":return tt[S.$W];case"H":return String(G);case"HH":return T.s(G,2,"0");case"h":return Nt(1);case"hh":return Nt(2);case"a":return St(G,Y,!0);case"A":return St(G,Y,!1);case"m":return String(Y);case"mm":return T.s(Y,2,"0");case"s":return String(S.$s);case"ss":return T.s(S.$s,2,"0");case"SSS":return T.s(S.$ms,3,"0");case"Z":return j}return null}(J)||j.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(x,S,_){var O,j=this,G=T.p(S),Y=I(x),Q=(Y.utcOffset()-this.utcOffset())*r,tt=this-Y,at=function(){return T.m(j,Y)};switch(G){case p:O=at()/12;break;case h:O=at();break;case g:O=at()/3;break;case d:O=(tt-Q)/6048e5;break;case c:O=(tt-Q)/864e5;break;case u:O=tt/i;break;case l:O=tt/r;break;case a:O=tt/n;break;default:O=tt}return _?O:T.a(O)},A.daysInMonth=function(){return this.endOf(h).$D},A.$locale=function(){return F[this.$L]},A.locale=function(x,S){if(!x)return this.$L;var _=this.clone(),O=z(x,S,!0);return O&&(_.$L=O),_},A.clone=function(){return T.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},C}(),it=V.prototype;return I.prototype=it,[["$ms",s],["$s",a],["$m",l],["$H",u],["$W",c],["$M",h],["$y",p],["$D",m]].forEach(function(C){it[C[1]]=function(A){return this.$g(A,C[0],C[1])}}),I.extend=function(C,A){return C.$i||(C(A,V,I),C.$i=!0),I},I.locale=z,I.isDayjs=W,I.unix=function(C){return I(1e3*C)},I.en=F[B],I.Ls=F,I.p={},I})})(ki);var fc=ki.exports;const Ae=nr(fc);let Ti;const hc=(t,e)=>{Ti=new zt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},dc=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,c])=>{const d="$or",h=[],g=(p,m)=>{const b={};c.type==="text"?b[p]=`${m}`:b[u]=`="${p}"`,h.push(b)};return Object.entries(c.state).filter(([,p])=>p).forEach(([p,m])=>g(p,m)),h.length>0&&l.push({[d]:h}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=Ti.search(l);i=n.enableHighlighting?uc(u,"highlight",n.titleProperty):u.map(c=>c.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,c])=>(l[u]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(s).length>0){const l=[];for(let u=0;u<i.length;u++){const c={};for(const[d,h]of Object.entries(s)){const g=m=>h.format==="date"?Ae(m).unix():m,p=Zt(d,i[u]);p?Array.isArray(p)?c[d]=s[d].min<=g(p[1])&&g(p[0])<=s[d].max:g(p)>=s[d].min&&g(p)<=s[d].max?c[d]=!0:c[d]=!1:c[d]=!0}Object.values(c).every(d=>!!d)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,c])=>(l[u]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const c={};for(const d of Object.keys(a)){const h=Zt(d,i[u]),g=a[d].mode||"within";h&&(g==="within"?cc(h,a[d].geometry):lc(h,a[d].geometry))?c[d]=!0:c[d]=!1}Object.values(c).every(d=>!!d)&&l.push(i[u])}i=[...l]}return i};function pc(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function dn(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Yr(t,e){return t*2+e}function gc(t){return Object.keys(t).map(e=>({title:P`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function zn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function yc(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function Bi(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Zt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var K,Oi,Gn,Kn,ji,Vn,Yn,Ni,Jn,Hi,Ii;class mc extends Mt{constructor(){super();ut(this,K);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=U(this,K,ji).bind(this),this._handleKeyDown=U(this,K,Vn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&U(this,K,Gn).call(this)}disconnectedCallback(){this.inlineMode&&U(this,K,Kn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?U(this,K,Gn).call(this):U(this,K,Kn).call(this))}render(){return P`
      <style>
        ${!this.unstyled&&rr}
      </style>
      ${this.inlineMode?P`
            <div
              class="inline-container-wrapper"
              @click="${U(this,K,Yn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${gc(this.filters)}
                      .controller=${{remove:n=>U(this,K,Hi).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${et(zn(this.filters),()=>P`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":P`
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
                  class="input-container field no-margin ${zn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${U(this,K,Yn)}"
                    @focus="${U(this,K,Ni)}"
                    @input="${U(this,K,Ii)}"
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
                  @keydown="${U(this,K,Vn)}"
                  @click="${U(this,K,Jn)}"
                  @focus="${U(this,K,Jn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:P`<slot name="section"></slot>`}
    `}}K=new WeakSet,Oi=function(){setTimeout(()=>this._overlayCleanup=yl(this))},Gn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),U(this,K,Oi).call(this)},Kn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ji=function(n){xl(n,this)},Vn=function(n){wl(n,this)},Yn=function(n){vl(n,this)},Ni=function(){bl(this)},Jn=function(n){ml(n,this)},Hi=function(n){Oa(n,this)},Ii=function(n){di(n,this)};customElements.define("eox-itemfilter-container",mc);function bc(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",dn(t.filterObject),t.requestUpdate()}function vc(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Zn="ddd, D MMM YYYY HH:mm:ss";function wc(t){if(t.filterObject=dn(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function xc(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Ae.unix(n).format(Zn)} - ${Ae.unix(r).format(Zn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Ac(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],s=r?Ae.unix(i).format(Zn):i;return P`<div class="range-${e}">${s}</div>`}function $c(t){_c(-1,t),dn(t.filterObject),t.requestUpdate()}function _c(t,e){e.selectedItems=[],ur(e),qi(e)}function Fi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),ur(e),qi(e)}function Mc(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function Cc(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Fi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Sc(t,e){(t.has("suggestions")||t.has("query"))&&ur(e)}function Lc(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,s)=>i.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function ur(t){var r,i,s;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(a=>`${a}`);let n=e;t.query&&(n=new zt(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:Lc(t,n),(s=t.filterObject)!=null&&s.filterKeys&&(t.filterObject.state=e.reduce((a,l)=>(l in a||(a[l]=void 0),a),t.filterObject.state)),t.highlightedIndex=-1}function qi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Ec(t){dn(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function Dc(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Ui(t)}function Rc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Ui(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Pc(t.geometry),r=pc(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=s=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function Pc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var sn;class kc extends Mt{constructor(){super();ut(this,sn,()=>{vc(this)});ve(this,"debouncedInputHandler",ln(ft(this,sn),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){bc(this)}createRenderRoot(){return this}render(){return et(this.filterObject,()=>{var n;return P`
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
      `})}}sn=new WeakMap;customElements.define("eox-itemfilter-text",kc);function Tc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let s;return n.filters[n.config.aggregateResults]&&(s=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(s!=null&&s.length?s.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=Symbol.for(""),Bc=t=>{if((t==null?void 0:t.r)===Wi)return t==null?void 0:t._$litStatic$},ae=t=>({_$litStatic$:t,r:Wi}),Jr=new Map,Oc=t=>(e,...n)=>{const r=n.length;let i,s;const a=[],l=[];let u,c=0,d=!1;for(;c<r;){for(u=e[c];c<r&&(s=n[c],(i=Bc(s))!==void 0);)u+=i+e[++c],d=!0;c!==r&&l.push(s),a.push(u),c++}if(c===r&&a.push(e[r]),d){const h=a.join("$$lit$$");(e=Jr.get(h))===void 0&&(a.raw=a,Jr.set(h,e=a)),n=l}return t(e,...n)},Zr=Oc(P);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zi={CHILD:2},Gi=t=>(...e)=>({_$litDirective$:t,values:e});class Ki{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:jc}=zo,Xr=()=>document.createComment(""),we=(t,e,n)=>{var s;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const a=r.insertBefore(Xr(),i),l=r.insertBefore(Xr(),i);n=new jc(a,l,t,t.options)}else{const a=n._$AB.nextSibling,l=n._$AM,u=l!==t;if(u){let c;(s=n._$AQ)==null||s.call(n,t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==l._$AU&&n._$AP(c)}if(a!==i||u){let c=n._$AA;for(;c!==a;){const d=c.nextSibling;r.insertBefore(c,i),c=d}}}return n},Yt=(t,e,n=t)=>(t._$AI(e,n),t),Nc={},Hc=(t,e=Nc)=>t._$AH=e,Ic=t=>t._$AH,Pn=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Fc=Gi(class extends Ki{constructor(t){if(super(t),t.type!==zi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],s=[];let a=0;for(const l of t)i[a]=r?r(l,a):a,s[a]=n(l,a),a++;return{values:s,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const i=Ic(t),{values:s,keys:a}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=a,s;const l=this.ut??(this.ut=[]),u=[];let c,d,h=0,g=i.length-1,p=0,m=s.length-1;for(;h<=g&&p<=m;)if(i[h]===null)h++;else if(i[g]===null)g--;else if(l[h]===a[p])u[p]=Yt(i[h],s[p]),h++,p++;else if(l[g]===a[m])u[m]=Yt(i[g],s[m]),g--,m--;else if(l[h]===a[m])u[m]=Yt(i[h],s[m]),we(t,u[m+1],i[h]),h++,m--;else if(l[g]===a[p])u[p]=Yt(i[g],s[p]),we(t,i[h],i[g]),g--,p++;else if(c===void 0&&(c=Qr(a,p,m),d=Qr(l,h,g)),c.has(l[h]))if(c.has(l[g])){const b=d.get(a[p]),$=b!==void 0?i[b]:null;if($===null){const w=we(t,i[h]);Yt(w,s[p]),u[p]=w}else u[p]=Yt($,s[p]),we(t,i[h],$),i[b]=null;p++}else Pn(i[g]),g--;else Pn(i[h]),h++;for(;p<=m;){const b=we(t,u[m+1]);Yt(b,s[p]),u[p++]=b}for(;h<=g;){const b=i[h++];b!==null&&Pn(b)}return this.ut=a,Hc(t,u),ni}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xn extends Ki{constructor(e){if(super(e),this.it=$t,e.type!==zi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$t||e==null)return this._t=void 0,this.it=e;if(e===ni)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Xn.directiveName="unsafeHTML",Xn.resultType=1;const Ke=Gi(Xn);function qc(t,e){return P`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||$t}
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
        ${Vi(e,t)}
      </div>
    </details>
  `}function Vi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,s=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":$t};return Zr`
    ${t.resultType==="cards"?ae("<eox-layout fill-grid>"):ae('<ul id="results" class="list no-space" part="results">')}
      ${Fc(r,a=>a.id,a=>Zr`
        ${t.resultType==="cards"?ae("<eox-layout-item"):ae("<li")}
            class="${s(a)}"
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${et(i.subTitleProperty||i.imageProperty,()=>P`
                  ${et(t.resultType==="cards",()=>Zt(i.imageProperty,a)?P`
                            <img
                              class="image"
                              src="${Zt(i.imageProperty,a)}"
                            />
                          `:P`
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
                          `,()=>P`
                      <i class="small">
                        ${Zt(i.imageProperty,a)?P`
                              <img
                                class="image"
                                src="${Zt(i.imageProperty,a)}"
                              />
                            `:P`
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
                      >${Ke(a[i.titleProperty])}</span
                    >
                    ${et(!!a[i.subTitleProperty],()=>P`
                        <small class="subtitle no-line truncate"
                          >${Ke(a[i.subTitleProperty].toString())}</small
                        >
                      `)}
                  </div>
                `,()=>P`
                  <div class="small-line max truncate">
                    <span class="title truncate"
                      >${Ke(a[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${et(t.enableResultAction,()=>P`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${Ke(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?ae("</eox-layout>"):ae("</ul>")}
  `}var te,Qn,Yi;class Uc extends Mt{constructor(){super();ut(this,te);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return Tc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Bi(n,this.config,this)}render(){return P`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${et(this.results.length<1,()=>P`<small class="no-results">No matching items</small>`,()=>$t)}
          ${et(this.config.aggregateResults,()=>cn(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>P`${et(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>P`<div style="margin-left: -8px">
                        ${U(this,te,Qn).call(this,n)}
                      </div>`,()=>U(this,te,Yi).call(this,n))}`),()=>U(this,te,Qn).call(this))}
        </div>
      </section>
    `}}te=new WeakSet,Qn=function(n){return Vi(this,n)},Yi=function(n){return qc(n,this)};customElements.define("eox-itemfilter-results",Uc);var Ut,Zi,Xi,Qi;class Ji extends Mt{constructor(){super();ut(this,Ut);ve(this,"debouncedInputHandler",ln(U(this,Ut,Qi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Sc(n,this)}reset(){$c(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":$t;return P`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${et((this.filterObject.filterKeys||this.suggestions).length>=10,()=>P`<div class="autocomplete-container">
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
                @input=${U(this,Ut,Zi)}
                @keydown=${U(this,Ut,Xi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>P`
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
    `}}Ut=new WeakSet,Zi=function(n){Mc(n,this)},Xi=function(n){Cc(n,this)},Qi=function(n){Fi(n,this)},ve(Ji,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Ji);var ee,es,tr;class ts extends Mt{constructor(){super();ut(this,ee);this.filterObject={},this.tabIndex=0,this.inputHandler=U(this,ee,es).bind(this),this.debouncedInputHandler=ln(this.inputHandler,500,{leading:!1})}reset(){wc(this)}createRenderRoot(){return this}render(){return et(this.filterObject,()=>P`
        <div style="margin-left: var(--list-padding)">
          ${U(this,ee,tr).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${U(this,ee,tr).call(this,"max","after")}
        </div>
      `)}}ee=new WeakSet,es=function(n){xc(n,this)},tr=function(n,r){return Ac(n,r,this)},ve(ts,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",ts);var on,ns;class Wc extends Mt{constructor(){super();ut(this,on);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Ec(this)}createRenderRoot(){return this}render(){return et(this.filterObject,()=>{var n;return P`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${cn(["intersects","within"],r=>P`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||$t}"
                    value="${r}"
                    @click=${()=>U(this,on,ns).call(this,r)}
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
      `})}}on=new WeakSet,ns=function(n){Rc(n,this)};customElements.define("eox-itemfilter-spatial",Wc);var an,rs;class zc extends Mt{constructor(){super();ut(this,an);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){U(this,an,rs).call(this)}reset(){Dc(this)}render(){return P`<div id="eox-map"></div>`}}an=new WeakSet,rs=function(){Ui(this)};customElements.define("eox-itemfilter-spatial-filter",zc);function Gc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function Kc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Vc(n,t.target.value??"",e))}function Vc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var ne,er,is;class Yc extends Mt{constructor(){super();ut(this,ne);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",U(this,ne,er).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",U(this,ne,er).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return P`
      <span class="chip-container">
        ${cn(this.items,n=>P`
            <span class="chip tiny-margin" @click=${U(this,ne,is).bind(this)}>
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
    `}}ne=new WeakSet,er=function(n){Kc(n,this)},is=function(n){Gc(n,this)};customElements.define("eox-itemfilter-chips",Yc);const Jc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),ti=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Zc=200,fr="__lodash_hash_undefined__",Xc=1/0,Qc="[object Function]",tu="[object GeneratorFunction]",eu=/[\\^$.*+?()[\]{}|]/g,nu=/^\[object .+?Constructor\]$/,ru=typeof Tt=="object"&&Tt&&Tt.Object===Object&&Tt,iu=typeof self=="object"&&self&&self.Object===Object&&self,hr=ru||iu||Function("return this")();function su(t,e){var n=t?t.length:0;return!!n&&au(t,e,0)>-1}function ou(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function au(t,e,n){if(e!==e)return ou(t,lu,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function lu(t){return t!==t}function cu(t,e){return t.has(e)}function uu(t,e){return t==null?void 0:t[e]}function fu(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function ss(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var hu=Array.prototype,du=Function.prototype,os=Object.prototype,kn=hr["__core-js_shared__"],ei=function(){var t=/[^.]+$/.exec(kn&&kn.keys&&kn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),as=du.toString,dr=os.hasOwnProperty,pu=os.toString,gu=RegExp("^"+as.call(dr).replace(eu,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yu=hu.splice,mu=pr(hr,"Map"),Tn=pr(hr,"Set"),$e=pr(Object,"create");function Qt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function bu(){this.__data__=$e?$e(null):{}}function vu(t){return this.has(t)&&delete this.__data__[t]}function wu(t){var e=this.__data__;if($e){var n=e[t];return n===fr?void 0:n}return dr.call(e,t)?e[t]:void 0}function xu(t){var e=this.__data__;return $e?e[t]!==void 0:dr.call(e,t)}function Au(t,e){var n=this.__data__;return n[t]=$e&&e===void 0?fr:e,this}Qt.prototype.clear=bu;Qt.prototype.delete=vu;Qt.prototype.get=wu;Qt.prototype.has=xu;Qt.prototype.set=Au;function ge(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $u(){this.__data__=[]}function _u(t){var e=this.__data__,n=pn(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():yu.call(e,n,1),!0}function Mu(t){var e=this.__data__,n=pn(e,t);return n<0?void 0:e[n][1]}function Cu(t){return pn(this.__data__,t)>-1}function Su(t,e){var n=this.__data__,r=pn(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}ge.prototype.clear=$u;ge.prototype.delete=_u;ge.prototype.get=Mu;ge.prototype.has=Cu;ge.prototype.set=Su;function ye(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Lu(){this.__data__={hash:new Qt,map:new(mu||ge),string:new Qt}}function Eu(t){return gn(this,t).delete(t)}function Du(t){return gn(this,t).get(t)}function Ru(t){return gn(this,t).has(t)}function Pu(t,e){return gn(this,t).set(t,e),this}ye.prototype.clear=Lu;ye.prototype.delete=Eu;ye.prototype.get=Du;ye.prototype.has=Ru;ye.prototype.set=Pu;function en(t){var e=-1,n=t?t.length:0;for(this.__data__=new ye;++e<n;)this.add(t[e])}function ku(t){return this.__data__.set(t,fr),this}function Tu(t){return this.__data__.has(t)}en.prototype.add=en.prototype.push=ku;en.prototype.has=Tu;function pn(t,e){for(var n=t.length;n--;)if(qu(t[n][0],e))return n;return-1}function Bu(t){if(!ls(t)||Hu(t))return!1;var e=Uu(t)||fu(t)?gu:nu;return e.test(Iu(t))}function Ou(t,e,n){var r=-1,i=su,s=t.length,a=!0,l=[],u=l;if(s>=Zc){var c=ju(t);if(c)return ss(c);a=!1,i=cu,u=new en}else u=l;t:for(;++r<s;){var d=t[r],h=d;if(d=d!==0?d:0,a&&h===h){for(var g=u.length;g--;)if(u[g]===h)continue t;l.push(d)}else i(u,h,n)||(u!==l&&u.push(h),l.push(d))}return l}var ju=Tn&&1/ss(new Tn([,-0]))[1]==Xc?function(t){return new Tn(t)}:Wu;function gn(t,e){var n=t.__data__;return Nu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function pr(t,e){var n=uu(t,e);return Bu(n)?n:void 0}function Nu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Hu(t){return!!ei&&ei in t}function Iu(t){if(t!=null){try{return as.call(t)}catch{}try{return t+""}catch{}}return""}function Fu(t){return t&&t.length?Ou(t):[]}function qu(t,e){return t===e||t!==t&&e!==e}function Uu(t){var e=ls(t)?pu.call(t):"";return e==Qc||e==tu}function ls(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Wu(){}var zu=Fu;const cs=nr(zu);var nn={exports:{}};nn.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,a=2,l=9007199254740991,u="[object Arguments]",c="[object Array]",d="[object Boolean]",h="[object Date]",g="[object Error]",p="[object Function]",m="[object GeneratorFunction]",b="[object Map]",$="[object Number]",w="[object Object]",E="[object Promise]",D="[object RegExp]",R="[object Set]",B="[object String]",F="[object Symbol]",H="[object WeakMap]",W="[object ArrayBuffer]",z="[object DataView]",I="[object Float32Array]",T="[object Float64Array]",V="[object Int8Array]",it="[object Int16Array]",C="[object Int32Array]",A="[object Uint8Array]",x="[object Uint8ClampedArray]",S="[object Uint16Array]",_="[object Uint32Array]",O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/,G=/^\./,Y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,tt=/\\(\\)?/g,at=/^\[object .+?Constructor\]$/,jt=/^(?:0|[1-9]\d*)$/,q={};q[I]=q[T]=q[V]=q[it]=q[C]=q[A]=q[x]=q[S]=q[_]=!0,q[u]=q[c]=q[W]=q[d]=q[z]=q[h]=q[g]=q[p]=q[b]=q[$]=q[w]=q[D]=q[R]=q[B]=q[H]=!1;var Nt=typeof Tt=="object"&&Tt&&Tt.Object===Object&&Tt,St=typeof self=="object"&&self&&self.Object===Object&&self,J=Nt||St||Function("return this")(),bt=e&&!e.nodeType&&e,Ht=bt&&!0&&t&&!t.nodeType&&t,re=Ht&&Ht.exports===bt,gr=re&&Nt.process,yr=function(){try{return gr&&gr.binding("util")}catch{}}(),mr=yr&&yr.isTypedArray;function ds(o,f){for(var y=-1,v=o?o.length:0,L=Array(v);++y<v;)L[y]=f(o[y],y,o);return L}function ps(o,f){for(var y=-1,v=f.length,L=o.length;++y<v;)o[L+y]=f[y];return o}function gs(o,f){for(var y=-1,v=o?o.length:0;++y<v;)if(f(o[y],y,o))return!0;return!1}function ys(o){return function(f){return f==null?void 0:f[o]}}function ms(o,f){for(var y=-1,v=Array(o);++y<o;)v[y]=f(y);return v}function bs(o){return function(f){return o(f)}}function vs(o,f){return o==null?void 0:o[f]}function yn(o){var f=!1;if(o!=null&&typeof o.toString!="function")try{f=!!(o+"")}catch{}return f}function ws(o){var f=-1,y=Array(o.size);return o.forEach(function(v,L){y[++f]=[L,v]}),y}function xs(o,f){return function(y){return o(f(y))}}function As(o){var f=-1,y=Array(o.size);return o.forEach(function(v){y[++f]=v}),y}var $s=Array.prototype,_s=Function.prototype,Se=Object.prototype,mn=J["__core-js_shared__"],br=function(){var o=/[^.]+$/.exec(mn&&mn.keys&&mn.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),vr=_s.toString,Lt=Se.hasOwnProperty,ie=Se.toString,Ms=RegExp("^"+vr.call(Lt).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Le=J.Symbol,wr=J.Uint8Array,Cs=Se.propertyIsEnumerable,Ss=$s.splice,xr=Le?Le.isConcatSpreadable:void 0,Ls=xs(Object.keys,Object),bn=se(J,"DataView"),me=se(J,"Map"),vn=se(J,"Promise"),wn=se(J,"Set"),xn=se(J,"WeakMap"),be=se(Object,"create"),Es=Kt(bn),Ds=Kt(me),Rs=Kt(vn),Ps=Kt(wn),ks=Kt(xn),Ee=Le?Le.prototype:void 0,An=Ee?Ee.valueOf:void 0,Ar=Ee?Ee.toString:void 0;function Gt(o){var f=-1,y=o?o.length:0;for(this.clear();++f<y;){var v=o[f];this.set(v[0],v[1])}}function Ts(){this.__data__=be?be(null):{}}function Bs(o){return this.has(o)&&delete this.__data__[o]}function Os(o){var f=this.__data__;if(be){var y=f[o];return y===i?void 0:y}return Lt.call(f,o)?f[o]:void 0}function js(o){var f=this.__data__;return be?f[o]!==void 0:Lt.call(f,o)}function Ns(o,f){var y=this.__data__;return y[o]=be&&f===void 0?i:f,this}Gt.prototype.clear=Ts,Gt.prototype.delete=Bs,Gt.prototype.get=Os,Gt.prototype.has=js,Gt.prototype.set=Ns;function Et(o){var f=-1,y=o?o.length:0;for(this.clear();++f<y;){var v=o[f];this.set(v[0],v[1])}}function Hs(){this.__data__=[]}function Is(o){var f=this.__data__,y=Re(f,o);if(y<0)return!1;var v=f.length-1;return y==v?f.pop():Ss.call(f,y,1),!0}function Fs(o){var f=this.__data__,y=Re(f,o);return y<0?void 0:f[y][1]}function qs(o){return Re(this.__data__,o)>-1}function Us(o,f){var y=this.__data__,v=Re(y,o);return v<0?y.push([o,f]):y[v][1]=f,this}Et.prototype.clear=Hs,Et.prototype.delete=Is,Et.prototype.get=Fs,Et.prototype.has=qs,Et.prototype.set=Us;function Dt(o){var f=-1,y=o?o.length:0;for(this.clear();++f<y;){var v=o[f];this.set(v[0],v[1])}}function Ws(){this.__data__={hash:new Gt,map:new(me||Et),string:new Gt}}function zs(o){return Pe(this,o).delete(o)}function Gs(o){return Pe(this,o).get(o)}function Ks(o){return Pe(this,o).has(o)}function Vs(o,f){return Pe(this,o).set(o,f),this}Dt.prototype.clear=Ws,Dt.prototype.delete=zs,Dt.prototype.get=Gs,Dt.prototype.has=Ks,Dt.prototype.set=Vs;function De(o){var f=-1,y=o?o.length:0;for(this.__data__=new Dt;++f<y;)this.add(o[f])}function Ys(o){return this.__data__.set(o,i),this}function Js(o){return this.__data__.has(o)}De.prototype.add=De.prototype.push=Ys,De.prototype.has=Js;function Rt(o){this.__data__=new Et(o)}function Zs(){this.__data__=new Et}function Xs(o){return this.__data__.delete(o)}function Qs(o){return this.__data__.get(o)}function to(o){return this.__data__.has(o)}function eo(o,f){var y=this.__data__;if(y instanceof Et){var v=y.__data__;if(!me||v.length<n-1)return v.push([o,f]),this;y=this.__data__=new Dt(v)}return y.set(o,f),this}Rt.prototype.clear=Zs,Rt.prototype.delete=Xs,Rt.prototype.get=Qs,Rt.prototype.has=to,Rt.prototype.set=eo;function no(o,f){var y=Pt(o)||Mn(o)?ms(o.length,String):[],v=y.length,L=!!v;for(var M in o)Lt.call(o,M)&&!(L&&(M=="length"||Cr(M,v)))&&y.push(M);return y}function Re(o,f){for(var y=o.length;y--;)if(Er(o[y][0],f))return y;return-1}var ro=xo(oo);function io(o,f,y,v,L){var M=-1,N=o.length;for(y||(y=So),L||(L=[]);++M<N;){var Z=o[M];y(Z)?ps(L,Z):L[L.length]=Z}return L}var so=Ao();function oo(o,f){return o&&so(o,f,Ne)}function $r(o,f){f=ke(f,o)?[f]:_r(f);for(var y=0,v=f.length;o!=null&&y<v;)o=o[Te(f[y++])];return y&&y==v?o:void 0}function ao(o){return ie.call(o)}function lo(o,f){return o!=null&&f in Object(o)}function $n(o,f,y,v,L){return o===f?!0:o==null||f==null||!Oe(o)&&!je(f)?o!==o&&f!==f:co(o,f,$n,y,v,L)}function co(o,f,y,v,L,M){var N=Pt(o),Z=Pt(f),X=c,nt=c;N||(X=It(o),X=X==u?w:X),Z||(nt=It(f),nt=nt==u?w:nt);var lt=X==w&&!yn(o),ct=nt==w&&!yn(f),st=X==nt;if(st&&!lt)return M||(M=new Rt),N||Bo(o)?Mr(o,f,y,v,L,M):$o(o,f,X,y,v,L,M);if(!(L&a)){var pt=lt&&Lt.call(o,"__wrapped__"),gt=ct&&Lt.call(f,"__wrapped__");if(pt||gt){var Ft=pt?o.value():o,kt=gt?f.value():f;return M||(M=new Rt),y(Ft,kt,v,L,M)}}return st?(M||(M=new Rt),_o(o,f,y,v,L,M)):!1}function uo(o,f,y,v){var L=y.length,M=L;if(o==null)return!M;for(o=Object(o);L--;){var N=y[L];if(N[2]?N[1]!==o[N[0]]:!(N[0]in o))return!1}for(;++L<M;){N=y[L];var Z=N[0],X=o[Z],nt=N[1];if(N[2]){if(X===void 0&&!(Z in o))return!1}else{var lt=new Rt,ct;if(!(ct===void 0?$n(nt,X,v,s|a,lt):ct))return!1}}return!0}function fo(o){if(!Oe(o)||Eo(o))return!1;var f=Dr(o)||yn(o)?Ms:at;return f.test(Kt(o))}function ho(o){return je(o)&&Cn(o.length)&&!!q[ie.call(o)]}function po(o){return typeof o=="function"?o:o==null?Ho:typeof o=="object"?Pt(o)?bo(o[0],o[1]):mo(o):Io(o)}function go(o){if(!Do(o))return Ls(o);var f=[];for(var y in Object(o))Lt.call(o,y)&&y!="constructor"&&f.push(y);return f}function yo(o,f){var y=-1,v=Be(o)?Array(o.length):[];return ro(o,function(L,M,N){v[++y]=f(L,M,N)}),v}function mo(o){var f=Mo(o);return f.length==1&&f[0][2]?Lr(f[0][0],f[0][1]):function(y){return y===o||uo(y,o,f)}}function bo(o,f){return ke(o)&&Sr(f)?Lr(Te(o),f):function(y){var v=jo(y,o);return v===void 0&&v===f?No(y,o):$n(f,v,void 0,s|a)}}function vo(o){return function(f){return $r(f,o)}}function wo(o){if(typeof o=="string")return o;if(Sn(o))return Ar?Ar.call(o):"";var f=o+"";return f=="0"&&1/o==-1/0?"-0":f}function _r(o){return Pt(o)?o:Ro(o)}function xo(o,f){return function(y,v){if(y==null)return y;if(!Be(y))return o(y,v);for(var L=y.length,M=-1,N=Object(y);++M<L&&v(N[M],M,N)!==!1;);return y}}function Ao(o){return function(f,y,v){for(var L=-1,M=Object(f),N=v(f),Z=N.length;Z--;){var X=N[++L];if(y(M[X],X,M)===!1)break}return f}}function Mr(o,f,y,v,L,M){var N=L&a,Z=o.length,X=f.length;if(Z!=X&&!(N&&X>Z))return!1;var nt=M.get(o);if(nt&&M.get(f))return nt==f;var lt=-1,ct=!0,st=L&s?new De:void 0;for(M.set(o,f),M.set(f,o);++lt<Z;){var pt=o[lt],gt=f[lt];if(v)var Ft=N?v(gt,pt,lt,f,o,M):v(pt,gt,lt,o,f,M);if(Ft!==void 0){if(Ft)continue;ct=!1;break}if(st){if(!gs(f,function(kt,Vt){if(!st.has(Vt)&&(pt===kt||y(pt,kt,v,L,M)))return st.add(Vt)})){ct=!1;break}}else if(!(pt===gt||y(pt,gt,v,L,M))){ct=!1;break}}return M.delete(o),M.delete(f),ct}function $o(o,f,y,v,L,M,N){switch(y){case z:if(o.byteLength!=f.byteLength||o.byteOffset!=f.byteOffset)return!1;o=o.buffer,f=f.buffer;case W:return!(o.byteLength!=f.byteLength||!v(new wr(o),new wr(f)));case d:case h:case $:return Er(+o,+f);case g:return o.name==f.name&&o.message==f.message;case D:case B:return o==f+"";case b:var Z=ws;case R:var X=M&a;if(Z||(Z=As),o.size!=f.size&&!X)return!1;var nt=N.get(o);if(nt)return nt==f;M|=s,N.set(o,f);var lt=Mr(Z(o),Z(f),v,L,M,N);return N.delete(o),lt;case F:if(An)return An.call(o)==An.call(f)}return!1}function _o(o,f,y,v,L,M){var N=L&a,Z=Ne(o),X=Z.length,nt=Ne(f),lt=nt.length;if(X!=lt&&!N)return!1;for(var ct=X;ct--;){var st=Z[ct];if(!(N?st in f:Lt.call(f,st)))return!1}var pt=M.get(o);if(pt&&M.get(f))return pt==f;var gt=!0;M.set(o,f),M.set(f,o);for(var Ft=N;++ct<X;){st=Z[ct];var kt=o[st],Vt=f[st];if(v)var Rr=N?v(Vt,kt,st,f,o,M):v(kt,Vt,st,o,f,M);if(!(Rr===void 0?kt===Vt||y(kt,Vt,v,L,M):Rr)){gt=!1;break}Ft||(Ft=st=="constructor")}if(gt&&!Ft){var He=o.constructor,Ie=f.constructor;He!=Ie&&"constructor"in o&&"constructor"in f&&!(typeof He=="function"&&He instanceof He&&typeof Ie=="function"&&Ie instanceof Ie)&&(gt=!1)}return M.delete(o),M.delete(f),gt}function Pe(o,f){var y=o.__data__;return Lo(f)?y[typeof f=="string"?"string":"hash"]:y.map}function Mo(o){for(var f=Ne(o),y=f.length;y--;){var v=f[y],L=o[v];f[y]=[v,L,Sr(L)]}return f}function se(o,f){var y=vs(o,f);return fo(y)?y:void 0}var It=ao;(bn&&It(new bn(new ArrayBuffer(1)))!=z||me&&It(new me)!=b||vn&&It(vn.resolve())!=E||wn&&It(new wn)!=R||xn&&It(new xn)!=H)&&(It=function(o){var f=ie.call(o),y=f==w?o.constructor:void 0,v=y?Kt(y):void 0;if(v)switch(v){case Es:return z;case Ds:return b;case Rs:return E;case Ps:return R;case ks:return H}return f});function Co(o,f,y){f=ke(f,o)?[f]:_r(f);for(var v,L=-1,N=f.length;++L<N;){var M=Te(f[L]);if(!(v=o!=null&&y(o,M)))break;o=o[M]}if(v)return v;var N=o?o.length:0;return!!N&&Cn(N)&&Cr(M,N)&&(Pt(o)||Mn(o))}function So(o){return Pt(o)||Mn(o)||!!(xr&&o&&o[xr])}function Cr(o,f){return f=f??l,!!f&&(typeof o=="number"||jt.test(o))&&o>-1&&o%1==0&&o<f}function ke(o,f){if(Pt(o))return!1;var y=typeof o;return y=="number"||y=="symbol"||y=="boolean"||o==null||Sn(o)?!0:j.test(o)||!O.test(o)||f!=null&&o in Object(f)}function Lo(o){var f=typeof o;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?o!=="__proto__":o===null}function Eo(o){return!!br&&br in o}function Do(o){var f=o&&o.constructor,y=typeof f=="function"&&f.prototype||Se;return o===y}function Sr(o){return o===o&&!Oe(o)}function Lr(o,f){return function(y){return y==null?!1:y[o]===f&&(f!==void 0||o in Object(y))}}var Ro=_n(function(o){o=Oo(o);var f=[];return G.test(o)&&f.push(""),o.replace(Y,function(y,v,L,M){f.push(L?M.replace(tt,"$1"):v||y)}),f});function Te(o){if(typeof o=="string"||Sn(o))return o;var f=o+"";return f=="0"&&1/o==-1/0?"-0":f}function Kt(o){if(o!=null){try{return vr.call(o)}catch{}try{return o+""}catch{}}return""}function Po(o,f){return io(ko(o,f))}function ko(o,f){var y=Pt(o)?ds:yo;return y(o,po(f))}function _n(o,f){if(typeof o!="function"||f&&typeof f!="function")throw new TypeError(r);var y=function(){var v=arguments,L=f?f.apply(this,v):v[0],M=y.cache;if(M.has(L))return M.get(L);var N=o.apply(this,v);return y.cache=M.set(L,N),N};return y.cache=new(_n.Cache||Dt),y}_n.Cache=Dt;function Er(o,f){return o===f||o!==o&&f!==f}function Mn(o){return To(o)&&Lt.call(o,"callee")&&(!Cs.call(o,"callee")||ie.call(o)==u)}var Pt=Array.isArray;function Be(o){return o!=null&&Cn(o.length)&&!Dr(o)}function To(o){return je(o)&&Be(o)}function Dr(o){var f=Oe(o)?ie.call(o):"";return f==p||f==m}function Cn(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=l}function Oe(o){var f=typeof o;return!!o&&(f=="object"||f=="function")}function je(o){return!!o&&typeof o=="object"}function Sn(o){return typeof o=="symbol"||je(o)&&ie.call(o)==F}var Bo=mr?bs(mr):ho;function Oo(o){return o==null?"":wo(o)}function jo(o,f,y){var v=o==null?void 0:$r(o,f);return v===void 0?y:v}function No(o,f){return o!=null&&Co(o,f,lo)}function Ne(o){return Be(o)?no(o):go(o)}function Ho(o){return o}function Io(o){return ke(o)?ys(Te(o)):vo(o)}t.exports=Po})(nn,nn.exports);var Gu=nn.exports;const us=nr(Gu);function Ku(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{const a={},l=c=>s.format==="date"?Ae(c).unix():parseFloat(c);e.forEach(c=>{var d,h;if(s.type==="range"){const g=Zt(s.key,c);if(Array.isArray(g)){const p=[l(g[0]),l(g[1])];a.min=a.min!==void 0?Math.min(a.min,p[0]):p[0],a.max=a.max!==void 0?Math.max(a.max,p[1]):p[1]}else{const p=l(g);a.min=a.min!==void 0?Math.min(a.min,p):p,a.max=a.max!==void 0?Math.max(a.max,p):p}return}Array.isArray(c[s.key])?c[s.key].forEach(g=>{a[g]=void 0}):s.type==="spatial"?(a.geometry=((d=s==null?void 0:s.state)==null?void 0:d.geometry)||void 0,a.geometry&&(s.stringifiedState=a.geometry.type),a.mode=s.mode||"intersects"):(h=s.key)!=null&&h.includes(".")?cs(us(n.items,s.key)).filter(g=>g).forEach(g=>{a[g]=void 0}):a[c[s.key]]=void 0});const u=s.key||s.keys.join("|");n.filters[u]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(c=>c):void 0,key:u},s.type==="range"?{min:a.min,max:a.max,format:s.format}:{},s),n.filters[u].state=Object.assign({},a,s.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((s,a)=>s.concat(a[t.aggregateResults]),[]))).sort((s,a)=>s.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(a=>{i.includes(a)||i.push(a)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),hc(e,Object.assign({keys:i},t.fuseConfig)),r}async function Vu(t,e,n){let r;n.externalFilter?r=await yc(e,n.filters,t):r=await dc(e,n.filters,t),n.results=n.sortResults(r)}function Yu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return P`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return P`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${cs(us(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return P`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return P`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return P``}}function Ju(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function Zu(t,e,n){return P`
    ${et(t.dirty,()=>P`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":P`
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
  `}function Xu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var _e,ue,yt,de,fs,hs;class Qu extends Mt{constructor(){super();ut(this,de);ut(this,_e,[]);ut(this,ue,[]);ut(this,yt,Jc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=ln(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Fe(this,_e,Ku(ft(this,yt),ft(this,ue),this)),this.search()}async searchHandler(){await Vu(ft(this,yt),ft(this,ue),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return Ju(n,ft(this,yt))}resetFilters(){Xu(this)}firstUpdated(n){var i;let r={};ti.map(s=>{r={...r,[s]:this[s]}}),Fe(this,yt,r),Fe(this,ue,((i=this.items)==null?void 0:i.map((s,a)=>Object.assign({id:s[this.idProperty]||`item-${a}`},s)))||[]),this.apply()}updated(n){ti.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return P`
      <style>
        ${Yo}
        ${!this.unstyled&&rr}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":$t}
        @submit="${r=>r.preventDefault()}"
      >
        ${et(this.filterProperties,()=>P`
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
                  ${et(!this.inlineMode,()=>P`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${et(!this.inlineMode&&ft(this,yt).filterProperties&&!this.inlineMode&&ft(this,yt).filterProperties&&zn(this.filters),()=>P`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?$t:P`
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
                      ${cn(Object.values(this.filters),(r,i)=>P` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${s=>Bi(s,ft(this,yt),this)}
                              data-details="${r.key}"
                            >
                              ${U(this,de,hs).call(this,r,Yr(i,1))}
                              ${U(this,de,fs).call(this,r,Yr(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${et(((n=ft(this,yt))==null?void 0:n.showResults)&&this.results,()=>P`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${ft(this,yt)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${ft(this,_e)}
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
    `}}_e=new WeakMap,ue=new WeakMap,yt=new WeakMap,de=new WeakSet,fs=function(n,r){return Yu(n,r,this)},hs=function(n,r){return Zu(n,r,this)};customElements.define("eox-itemfilter",Qu);export{Qu as EOxItemFilter};

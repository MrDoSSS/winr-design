let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=(e,t,n)=>{n&&n.map(([n,l,s])=>{const c=e,r=a(t,s),i=u(n);o.ael(c,l,r,i),(t.s=t.s||[]).push(()=>o.rel(c,l,r,i))})},a=(e,t)=>n=>{256&e.t?e.o[t](n):(e.i=e.i||[]).push([t,n])},u=e=>0!=(2&e),f=new WeakMap,$=e=>"sc-"+e.u,d={},m=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!m(l))&&(l+=""),s&&o?c[c.length-1].$+=l:c.push(s?p(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const i=p(e,null);return i.m=t,c.length>0&&(i.h=c),i},p=(e,t)=>({t:0,p:e,$:t,g:null,h:null,m:null}),y={},b=(e,t,n,s,c,r)=>{if(n!==s){let i=G(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=g(n),o=g(s);t.remove(...l.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!l.includes(e)))}else if(i||"o"!==t[0]||"n"!==t[1]){const l=m(s);if((i||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):G(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},w=/\s/,g=e=>e?e.split(w):[],j=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.m||d,c=t.m||d;for(l in o)l in c||b(s,l,o[l],void 0,n,t.t);for(l in c)b(s,l,o[l],c[l],n,t.t)},v=(t,n,l)=>{let o,c,r=n.h[l],i=0;if(null!==r.$)o=r.g=s.createTextNode(r.$);else if(o=r.g=s.createElement(r.p),j(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.h)for(i=0;i<r.h.length;++i)c=v(t,r,i),c&&o.appendChild(c);return o},S=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=v(null,l,o),r&&(s[o].g=r,i.insertBefore(r,n)))},M=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.g.remove()},O=(e,t)=>e.p===t.p,k=(e,t)=>{const n=t.g=e.g,l=e.h,s=t.h,o=t.$;null===o?("slot"===t.p||j(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==$?$=l[--u]:O(i,f)?(k(i,f),i=t[++o],f=l[++c]):O(a,$)?(k(a,$),a=t[--r],$=l[--u]):O(i,$)?(k(i,$),e.insertBefore(i.g,a.g.nextSibling),i=t[++o],$=l[--u]):O(a,f)?(k(a,f),e.insertBefore(a.g,i.g),a=t[--r],f=l[++c]):(s=v(t&&t[c],n,c),f=l[++c],s&&i.g.parentNode.insertBefore(s,i.g));o>r?S(e,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&M(t,o,r)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),S(n,null,t,s,0,s.length-1)):null!==l&&M(l,0,l.length-1)):e.$!==o&&(n.data=o)},C=e=>z(e).j,P=(e,t,n)=>{const l=C(e);return{emit:e=>x(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},x=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},E=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.v=t))},L=(e,t)=>{if(e.t|=16,!(4&e.t))return E(e,e.S),le(()=>T(e,t));e.t|=512},T=(e,t)=>{const n=e.o;let l;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>U(n,e,t)),e.i=null),l=U(n,"componentWillLoad")),q(l,()=>W(e,n,t))},W=async(n,l,o)=>{const c=n.j,r=c["s-rc"];o&&(e=>{const t=e.M,n=e.j,l=t.t,o=((e,t)=>{let n=$(t),l=Q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=f.get(e=e.head||e);o||f.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.j,o=n.O||p(null,null),c=(e=>e&&e.p===y)(l)?l:h(null,null,l);t=s.tagName,c.p=null,c.t|=4,n.O=c,c.g=o.g=s.shadowRoot||s,e=s["s-sc"],k(o,c)})(n,A(n,l)),r&&(r.map(e=>e()),c["s-rc"]=void 0);{const e=c["s-p"],t=()=>H(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},A=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(e){I(e)}return t},H=e=>{const t=e.j,n=e.S;64&e.t||(e.t|=64,F(t),e.k(t),n||R()),e.C(t),e.v&&(e.v(),e.v=void 0),512&e.t&&ne(()=>L(e,!1)),e.t&=-517},R=()=>{F(s.documentElement),ne(()=>x(l,"appload",{detail:{namespace:"winr-components"}}))},U=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){I(e)}},q=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),N=(e,t,n)=>{if(t.P){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.P),s=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>z(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.T.get(t),c=s.t,r=s.o;if(n=((e,t)=>null==e||m(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.P[t][0]),!(8&c&&void 0!==o||n===o)&&(s.T.set(t,n),r)){if(l.L&&128&c){const e=l.L[t];e&&e.map(e=>{try{r[e](n,o,t)}catch(e){I(e)}})}2==(18&c)&&L(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=z(this);return n.W.then(()=>n.o[e](...t))}})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},V=(e,t={})=>{const n=[],c=t.exclude||[],a=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),d=s.createElement("style"),m=[];let h,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map(e=>e[1].map(t=>{const l={t:t[0],u:t[1],P:t[2],A:t[3]};l.P=t[2],l.A=t[3],l.L={};const s=l.u,u=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?m.push(this):o.jmp(()=>(e=>{if(0==(1&o.t)){const t=z(e),n=t.M,l=()=>{};if(1&t.t)i(e,t,n.A);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){E(t,t.S=n);break}}n.P&&Object.entries(n.P).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=K(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.L=s.watchers,N(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){I(e)}t.t&=-9,t.t|=128,e()}if(s.style){let e=s.style;const t=$(n);if(!Q.has(t)){const l=()=>{};((e,t,n)=>{let l=Q.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,c=()=>L(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this))}disconnectedCallback(){o.jmp(()=>(()=>{if(0==(1&o.t)){const e=z(this);e.s&&(e.s.map(e=>e()),e.s=void 0)}})())}componentOnReady(){return z(this).H}};l.R=e[0],c.includes(s)||a.get(s)||(n.push(s),a.define(s,N(u,l,1)))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),p=!1,m.length?m.map(e=>e.connectedCallback()):o.jmp(()=>h=setTimeout(R,30))},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.o=e,t),D=(e,t)=>{const n={t:0,j:e,M:t,T:new Map};return n.W=new Promise(e=>n.C=e),n.H=new Promise(e=>n.k=e),e["s-p"]=[],e["s-rc"]=[],i(e,n,t.A),_.set(e,n)},G=(e,t)=>t in e,I=e=>console.error(e),J=new Map,K=e=>{const t=e.u.replace(/-/g,"_"),n=e.R,l=J.get(n);return l?l[t]:import(`./${n}.entry.js`).then(e=>(J.set(n,e),e[t]),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ne(te):o.raf(te))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){I(e)}e.length=0},te=()=>{ee(X),ee(Y),(n=X.length>0)&&o.raf(te)},ne=e=>c().then(e),le=Z(Y,!0);export{y as H,V as b,P as c,C as g,h,c as p,B as r}
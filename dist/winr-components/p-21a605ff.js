let e,t,l,n=!1,o=!1,s=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},a=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),$=(e,t,l)=>{l&&l.map(([l,n,o])=>{const s=e,i=d(t,o),r=m(l);f.ael(s,n,i,r),(t.o=t.o||[]).push(()=>f.rel(s,n,i,r))})},d=(e,t)=>l=>{256&e.t?e.s[t](l):(e.i=e.i||[]).push([t,l])},m=e=>0!=(2&e),p="http://www.w3.org/1999/xlink",y=new WeakMap,h=e=>"sc-"+e.u,b={},w=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...l)=>{let n=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!w(n))&&(n+=""),i&&r?c[c.length-1].$+=n:c.push(i?g(null,n):n),r=i)};if(f(l),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=g(e,null);return a.m=t,c.length>0&&(a.p=c),a.h=o,a.k=s,a},g=(e,t)=>({t:0,g:e,$:t,v:null,p:null,m:null,h:null,k:null}),v={},j=(e,t,l,n,o,s)=>{if(l!==n){let i=se(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=M(l),s=M(n);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=w(n);if((i||r&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{let o=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(p,t):e.removeAttribute(t)):(!i||4&s||o)&&!r&&(n=!0===n?"":n,f?e.setAttributeNS(p,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):se(r,c)?c.slice(2):c[2]+t.slice(3),l&&f.rel(e,t,l,!1),n&&f.ael(e,t,n,!1)}},S=/\s/,M=e=>e?e.split(S):[],O=(e,t,l,n)=>{const o=11===t.v.nodeType&&t.v.host?t.v.host:t.v,s=e&&e.m||b,i=t.m||b;for(n in s)n in i||j(o,n,s[n],void 0,l,t.t);for(n in i)j(o,n,s[n],i[n],l,t.t)},R=(o,i,r,f)=>{let a,u,$,d=i.p[r],m=0;if(n||(s=!0,"slot"===d.g&&(e&&f.classList.add(e+"-s"),d.t|=d.p?2:1)),null!==d.$)a=d.v=c.createTextNode(d.$);else if(1&d.t)a=d.v=c.createTextNode("");else if(a=d.v=c.createElement(2&d.t?"slot-fb":d.g),O(null,d,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),d.p)for(m=0;m<d.p.length;++m)u=R(o,d,m,a),u&&a.appendChild(u);return a["s-hn"]=l,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=d.k||"",$=o&&o.p&&o.p[r],$&&$.g===d.g&&o.v&&x(o.v,!1)),a},x=(e,t)=>{f.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==l&&o["s-ol"]&&(E(o).insertBefore(o,L(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&x(o,t)}f.t&=-2},C=(e,t,n,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=R(null,n,s,e),r&&(o[s].v=r,c.insertBefore(r,L(t))))},P=(e,t,l,n,s)=>{for(;t<=l;++t)(n=e[t])&&(s=n.v,U(n),o=!0,s["s-ol"]?s["s-ol"].remove():x(s,!0),s.remove())},T=(e,t)=>e.g===t.g&&("slot"===e.g?e.k===t.k:e.h===t.h),L=e=>e&&e["s-ol"]||e,E=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,W=(e,t)=>{const l=t.v=e.v,n=e.p,o=t.p,s=t.$;let i;null===s?("slot"===t.g||O(e,t,!1),null!==n&&null!==o?((e,t,l,n)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],$=t[a],d=n.length-1,m=n[0],p=n[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==m)m=n[++r];else if(null==p)p=n[--d];else if(T(u,m))W(u,m),u=t[++i],m=n[++r];else if(T($,p))W($,p),$=t[--a],p=n[--d];else if(T(u,p))"slot"!==u.g&&"slot"!==p.g||x(u.v.parentNode,!1),W(u,p),e.insertBefore(u.v,$.v.nextSibling),u=t[++i],p=n[--d];else if(T($,m))"slot"!==u.g&&"slot"!==p.g||x($.v.parentNode,!1),W($,m),e.insertBefore($.v,u.v),$=t[--a],m=n[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===m.h){c=f;break}c>=0?(s=t[c],s.g!==m.g?o=R(t&&t[r],l,c,e):(W(s,m),t[c]=void 0,o=s.v),m=n[++r]):(o=R(t&&t[r],l,r,e),m=n[++r]),o&&E(u.v).insertBefore(o,L(u.v))}i>a?C(e,null==n[d+1]?null:n[d+1].v,l,n,r,d):r>d&&P(t,i,a)})(l,n,t,o):null!==o?(null!==e.$&&(l.textContent=""),C(l,null,t,o,0,o.length-1)):null!==n&&P(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=s:e.$!==s&&(l.data=s)},A=e=>{let t,l,n,o,s,i,r=e.childNodes;for(l=0,n=r.length;l<n;l++)if(t=r[l],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<n;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}A(t)}},D=[],H=e=>{let t,l,n,s,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"]))for(n=l.parentNode.childNodes,s=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(N(l,s)?(i=D.find(e=>e.j===l),o=!0,l["s-sn"]=l["s-sn"]||s,i?i.S=t:D.push({S:t,j:l}),l["s-sr"]&&D.map(e=>{N(e.j,l["s-sn"])&&(i=D.find(e=>e.j===l),i&&!e.S&&(e.S=i.S))})):D.some(e=>e.j===l)||D.push({j:l}));1===t.nodeType&&H(t)}},N=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,U=e=>{e.m&&e.m.ref&&e.m.ref(null),e.p&&e.p.map(U)},q=e=>le(e).M,F=(e,t,l)=>{const n=q(e);return{emit:e=>V(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},V=(e,t,l)=>{const n=f.ce(t,l);return e.dispatchEvent(n),n},_=(e,t)=>{t&&!e.O&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.O=t))},z=(e,t)=>{if(e.t|=16,!(4&e.t))return _(e,e.R),ye(()=>B(e,t));e.t|=512},B=(e,t)=>{const l=e.s;let n;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>Q(l,e,t)),e.i=null),n=Q(l,"componentWillLoad")),X(n,()=>G(e,l,t))},G=async(i,r,a)=>{const u=i.M,$=u["s-rc"];a&&(e=>{const t=e.C,l=e.M,n=t.t,o=((e,t)=>{let l=h(t),n=fe.get(l);if(e=11===e.nodeType?e:c,n)if("string"==typeof n){let t,o=y.get(e=e.head||e);o||y.set(e,o=new Set),o.has(l)||(t=c.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),o&&o.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=o,l.classList.add(o+"-h"))})(i);((i,r)=>{const a=i.M,u=i.C,$=i.P||g(null,null),d=(e=>e&&e.g===v)(r)?r:k(null,null,r);if(l=a.tagName,d.g=null,d.t|=4,i.P=d,d.v=$.v=a.shadowRoot||a,e=a["s-sc"],t=a["s-cr"],n=0!=(1&u.t),o=!1,W($,d),f.t|=1,s){let e,t,l,n,o,s;H(d.v);let i=0;for(;i<D.length;i++)e=D[i],t=e.j,t["s-ol"]||(l=c.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<D.length;i++)if(e=D[i],t=e.j,e.S){for(n=e.S.parentNode,o=e.S.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(s=l["s-nr"],s&&s["s-sn"]===t["s-sn"]&&n===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&n!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&A(d.v),f.t&=-2,D.length=0})(i,I(i,r)),$&&($.map(e=>e()),u["s-rc"]=void 0);{const e=u["s-p"],t=()=>J(i);0===e.length?t():(Promise.all(e).then(t),i.t|=4,e.length=0)}},I=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(e){ie(e)}return t},J=e=>{const t=e.M,l=e.s,n=e.R;Q(l,"componentDidRender"),64&e.t||(e.t|=64,Y(t),Q(l,"componentDidLoad"),e.T(t),n||K()),e.L(t),e.O&&(e.O(),e.O=void 0),512&e.t&&pe(()=>z(e,!1)),e.t&=-517},K=()=>{Y(c.documentElement),pe(()=>V(r,"appload",{detail:{namespace:"winr-components"}}))},Q=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){ie(e)}},X=(e,t)=>e&&e.then?e.then(t):t(),Y=e=>e.classList.add("hydrated"),Z=(e,t,l)=>{if(t.W){e.watchers&&(t.A=e.watchers);const n=Object.entries(t.W),o=e.prototype;if(n.map(([e,[n]])=>{31&n||2&l&&32&n?Object.defineProperty(o,e,{get(){return((e,t)=>le(this).D.get(t))(0,e)},set(l){((e,t,l,n)=>{const o=le(e),s=o.D.get(t),i=o.t,r=o.s;if(l=((e,t)=>null==e||w(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(l,n.W[t][0]),!(8&i&&void 0!==s||l===s)&&(o.D.set(t,l),r)){if(n.A&&128&i){const e=n.A[t];e&&e.map(e=>{try{r[e](l,s,t)}catch(e){ie(e)}})}if(2==(18&i)){if(r.componentShouldUpdate&&!1===r.componentShouldUpdate(l,s,t))return;z(o,!1)}}})(this,e,l,t)},configurable:!0,enumerable:!0}):1&l&&64&n&&Object.defineProperty(o,e,{value(...t){const l=le(this);return l.H.then(()=>l.s[e](...t))}})}),1&l){const t=new Map;o.attributeChangedCallback=function(e,l,n){f.jmp(()=>{const l=t.get(e);this[l]=(null!==n||"boolean"!=typeof this[l])&&n})},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,l])=>{const n=l[1]||e;return t.set(n,e),n})}}return e},ee=(e,t={})=>{const l=[],n=t.exclude||[],o=r.customElements,s=c.head,i=s.querySelector("meta[charset]"),a=c.createElement("style"),d=[];let m,p=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",c.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],W:t[2],N:t[3]};s.W=t[2],s.N=t[3],s.A={};const i=s.u,r=class extends HTMLElement{constructor(e){super(e),oe(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),p?d.push(this):f.jmp(()=>(e=>{if(0==(1&f.t)){const t=le(e),l=t.C,n=()=>{};if(1&t.t)$(e,t,l.N);else{t.t|=1,12&l.t&&(e=>{const t=e["s-cr"]=c.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){_(t,t.R=l);break}}l.W&&Object.entries(l.W).map(([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}}),(async(e,t,l,n,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ce(l)).then){const e=()=>{};o=await o,e()}o.isProxied||(l.A=o.watchers,Z(o,l,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){ie(e)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=h(l);if(!fe.has(t)){const n=()=>{};((e,t,l)=>{let n=fe.get(e);u&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,fe.set(e,n)})(t,e,!!(1&l.t)),n()}}}const s=t.R,i=()=>z(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,l)}n()}})(this))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const e=le(this);e.o&&(e.o.map(e=>e()),e.o=void 0)}})())}componentOnReady(){return le(this).U}};s.q=e[0],n.includes(i)||o.get(i)||(l.push(i),o.define(i,Z(r,s,1)))})),a.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",a.setAttribute("data-styles",""),s.insertBefore(a,i?i.nextSibling:s.firstChild),p=!1,d.length?d.map(e=>e.connectedCallback()):f.jmp(()=>m=setTimeout(K,30))},te=new WeakMap,le=e=>te.get(e),ne=(e,t)=>te.set(t.s=e,t),oe=(e,t)=>{const l={t:0,M:e,C:t,D:new Map};return l.H=new Promise(e=>l.L=e),l.U=new Promise(e=>l.T=e),e["s-p"]=[],e["s-rc"]=[],$(e,l,t.N),te.set(e,l)},se=(e,t)=>t in e,ie=e=>console.error(e),re=new Map,ce=e=>{const t=e.u.replace(/-/g,"_"),l=e.q,n=re.get(l);return n?n[t]:import(`./${l}.entry.js`).then(e=>(re.set(l,e),e[t]),ie)},fe=new Map,ae=[],ue=[],$e=(e,t)=>l=>{e.push(l),i||(i=!0,t&&4&f.t?pe(me):f.raf(me))},de=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ie(e)}e.length=0},me=()=>{de(ae),de(ue),(i=ae.length>0)&&f.raf(me)},pe=e=>a().then(e),ye=$e(ue,!0);export{v as H,ee as b,F as c,q as g,k as h,a as p,ne as r}
function b(){}const W=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Z)}function C(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Ht(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function _t(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Ft(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)c[s]=e.dirty[s]|r[s];return c}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,c){if(r){const o=tt(e,n,i,c);t.p(o,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){return t&&C(t.destroy)?t.destroy:b}const et=typeof window<"u";let G=et?()=>window.performance.now():()=>Date.now(),I=et?t=>requestAnimationFrame(t):b;const N=new Set;function nt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&I(nt)}function J(t){let e;return N.size===0&&I(nt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}const mt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in mt;let H=!1;function pt(){H=!0}function yt(){H=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:gt(1,r,h=>e[n[h]].claim_order,u))-1;i[l]=n[d]+1;const a=d+1;n[a]=l,r=Math.max(a,r)}const c=[],o=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);s>=l;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);c.reverse(),o.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<o.length;l++){for(;u<c.length&&o[l].claim_order>=c[u].claim_order;)u++;const d=u<c.length?c[u]:null;t.insertBefore(o[l],d)}}function xt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=st("style");return wt(it(t),e),e.sheet}function wt(t,e){return xt(t.head||t,e),e.sheet}function vt(t,e){if(H){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){H&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Ut(){return K(" ")}function Vt(){return K("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){kt(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const l=n(s);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const l=n(s);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Nt(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const c=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||c.push(s.name)}c.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Zt(t,e,n){return Nt(t,e,n,st)}function At(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function te(t){return At(t," ")}function ee(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function re(t,e){return new t(e)}const P=new Map;let R=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:$t(e),rules:{}};return P.set(t,n),n}function z(t,e,n,i,r,c,o,s=0){const l=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=l){const y=e+(n-e)*c(p);u+=p*100+`%{${o(y,1-y)}}
`}const d=u+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Ct(d)}_${s}`,h=it(t),{stylesheet:f,rules:_}=P.get(h)||Mt(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,R+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||jt())}function jt(){I(()=>{R||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),P.clear())})}let D;function T(t){D=t}function lt(){if(!D)throw new Error("Function called outside component initialization");return D}function se(t){lt().$$.on_mount.push(t)}function oe(t){lt().$$.after_update.push(t)}const k=[],X=[];let A=[];const Y=[],ct=Promise.resolve();let F=!1;function ut(){F||(F=!0,ct.then(at))}function le(){return ut(),ct}function S(t){A.push(t)}const L=new Set;let E=0;function at(){if(E!==0)return;const t=D;do{try{for(;E<k.length;){const e=k[E];E++,T(e),Tt(e.$$)}}catch(e){throw k.length=0,E=0,e}for(T(null),k.length=0,E=0;X.length;)X.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];L.has(n)||(L.add(n),n())}A.length=0}while(k.length);for(;Y.length;)Y.pop()();F=!1,L.clear(),T(t)}function Tt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Dt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let j;function Q(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function w(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const O=new Set;let g;function ce(){g={r:0,c:[],p:g}}function ue(){g.r||v(g.c),g=g.p}function qt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),g.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const U={duration:0};function fe(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,o,s,l=0;function u(){o&&B(t,o)}function d(){const{delay:h=0,duration:f=300,easing:_=W,tick:m=b,css:p}=r||U;p&&(o=z(t,0,1,f,h,_,p,l++)),m(0,1);const y=G()+h,M=y+f;s&&s.abort(),c=!0,S(()=>w(t,!0,"start")),s=J(x=>{if(c){if(x>=M)return m(1,0),w(t,!0,"end"),u(),c=!1;if(x>=y){const $=_((x-y)/f);m($,1-$)}}return c})}let a=!1;return{start(){a||(a=!0,B(t),C(r)?(r=r(i),Q().then(d)):d())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function de(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,o;const s=g;s.r+=1;function l(){const{delay:u=0,duration:d=300,easing:a=W,tick:h=b,css:f}=r||U;f&&(o=z(t,1,0,d,u,a,f));const _=G()+u,m=_+d;S(()=>w(t,!1,"start")),J(p=>{if(c){if(p>=m)return h(0,1),w(t,!1,"end"),--s.r||v(s.c),!1;if(p>=_){const y=a((p-_)/d);h(1-y,y)}}return c})}return C(r)?Q().then(()=>{r=r(i),l()}):l(),{end(u){u&&r.tick&&r.tick(1,0),c&&(o&&B(t,o),c=!1)}}}function _e(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),o=i?0:1,s=null,l=null,u=null;function d(){u&&B(t,u)}function a(f,_){const m=f.b-o;return _*=Math.abs(m),{a:o,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:p=W,tick:y=b,css:M}=c||U,x={start:G()+_,b:f};f||(x.group=g,g.r+=1),s||l?l=x:(M&&(d(),u=z(t,o,f,m,_,p,M)),f&&y(0,1),s=a(x,m),S(()=>w(t,f,"start")),J($=>{if(l&&$>l.start&&(s=a(l,m),l=null,w(t,s.b,"start"),M&&(d(),u=z(t,o,s.b,s.duration,0,p,c.css))),s){if($>=s.end)y(o=s.b,1-o),w(t,s.b,"end"),l||(s.b?d():--s.group.r||v(s.group.c)),s=null;else if($>=s.start){const ft=$-s.start;o=s.a+s.d*p(ft/s.duration),y(o,1-o)}}return!!(s||l)}))}return{run(f){C(c)?Q().then(()=>{c=c(r),h(f)}):h(f)},end(){d(),s=l=null}}}const Ot=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ot];function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||S(()=>{const o=t.$$.on_mount.map(Z).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),c.forEach(S)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Dt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,r,c,o,s=[-1]){const l=D;T(t);const u=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:V(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),d&&zt(t,a)),h}):[],u.update(),d=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){pt();const a=Et(e.target);u.fragment&&u.fragment.l(a),a.forEach(rt)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),yt(),at()}T(l)}class ye{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){if(!C(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,Rt as B,vt as C,Jt as D,Xt as E,v as F,Lt as G,Ft as H,Gt as I,It as J,Wt as K,S as L,_e as M,Ht as N,b as O,ie as P,fe as Q,de as R,ye as S,Qt as T,Ut as a,Kt as b,te as c,ae as d,Vt as e,ue as f,qt as g,rt as h,pe as i,oe as j,st as k,Zt as l,Et as m,Yt as n,se as o,ne as p,K as q,At as r,Bt as s,le as t,ee as u,ce as v,X as w,re as x,he as y,me as z};

import{S as d,i as q,s as y,k as _,a as v,q as k,l as h,c as E,m as g,r as M,h as o,n,N as w,p as u,b as i,C as z,O as x,o as H}from"../chunks/index.98b41ded.js";function O(f){let a,p,c,s,r,m,l;return{c(){a=_("img"),c=v(),s=_("h1"),r=k("HOVER ME"),m=v(),l=_("div"),this.h()},l(e){a=h(e,"IMG",{class:!0,src:!0}),c=E(e),s=h(e,"H1",{class:!0});var t=g(s);r=M(t,"HOVER ME"),t.forEach(o),m=E(e),l=h(e,"DIV",{class:!0,style:!0}),g(l).forEach(o),this.h()},h(){n(a,"class","imgBack svelte-1pzawkq"),w(a.src,p="https://i.pinimg.com/originals/fc/12/af/fc12af4fdda0c0ec5cf23ae293d11a7d.png")||n(a,"src",p),n(s,"class","title svelte-1pzawkq"),n(l,"class","cursor svelte-1pzawkq"),u(l,"top",f[1]-22+"px"),u(l,"left",f[0]-22+"px")},m(e,t){i(e,a,t),i(e,c,t),i(e,s,t),z(s,r),i(e,m,t),i(e,l,t)},p(e,[t]){t&2&&u(l,"top",e[1]-22+"px"),t&1&&u(l,"left",e[0]-22+"px")},i:x,o:x,d(e){e&&o(a),e&&o(c),e&&o(s),e&&o(m),e&&o(l)}}}function V(f,a,p){let c,s;return H(()=>{document.addEventListener("mousemove",r=>{p(0,c=r.pageX),p(1,s=r.pageY)}),document.addEventListener("mouseleave",r=>{p(0,c=r.pageX),p(1,s=r.pageY)})}),p(0,c=0),p(1,s=0),[c,s]}class I extends d{constructor(a){super(),q(this,a,V,O,y,{})}}export{I as component};

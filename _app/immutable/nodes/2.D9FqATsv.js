import{s as te,f as le,n as W,r as re}from"../chunks/scheduler.KIPEeUFd.js";import{S as ae,i as se,e as c,s as b,j as N,c as u,k as y,a as g,l as V,f as h,b as r,d as z,m as t,n as A,v as ne,w as ie,g as X,x as oe,z as Y,A as Z,t as ce,h as ue,y as de}from"../chunks/index.Dhne2eag.js";function me(o){let a,n,e,i,d,p;return{c(){a=c("div"),n=c("img"),i=b(),d=c("h1"),p=N(o[0]),this.h()},l(m){a=u(m,"DIV",{class:!0});var f=y(a);n=u(f,"IMG",{src:!0,alt:!0,class:!0}),i=g(f),d=u(f,"H1",{class:!0});var w=y(d);p=V(w,o[0]),w.forEach(h),f.forEach(h),this.h()},h(){le(n.src,e="/llama.svg")||r(n,"src",e),r(n,"alt","site logo"),r(n,"class","svelte-1bc69im"),r(d,"class","svelte-1bc69im"),r(a,"class","title svelte-1bc69im")},m(m,f){z(m,a,f),t(a,n),t(a,i),t(a,d),t(d,p)},p(m,[f]){f&1&&A(p,m[0])},i:W,o:W,d(m){m&&h(a)}}}function fe(o,a,n){let{title:e="Llama Demo"}=a;return o.$$set=i=>{"title"in i&&n(0,e=i.title)},[e]}class he extends ae{constructor(a){super(),se(this,a,fe,me,te,{title:0})}}function pe(o){let a,n,e,i,d,p,m,f,w,O='Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',B,E,M,C,P,S,v,U,_,$,j,L,I,D,q,T,G='<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul>',k,x,R;return a=new he({}),{c(){ne(a.$$.fragment),n=b(),e=c("div"),i=c("h1"),d=N(o[1]),p=b(),m=c("h1"),f=b(),w=c("p"),w.innerHTML=O,B=b(),E=c("button"),M=N(ee),C=b(),P=c("br"),S=b(),v=c("input"),U=b(),_=c("div"),$=c("input"),j=b(),L=c("div"),I=c("label"),D=N(o[0]),q=b(),T=c("div"),T.innerHTML=G,this.h()},l(l){ie(a.$$.fragment,l),n=g(l),e=u(l,"DIV",{class:!0});var s=y(e);i=u(s,"H1",{});var F=y(i);d=V(F,o[1]),F.forEach(h),p=g(s),m=u(s,"H1",{class:!0}),y(m).forEach(h),f=g(s),w=u(s,"P",{"data-svelte-h":!0}),X(w)!=="svelte-jl9sbz"&&(w.innerHTML=O),B=g(s),E=u(s,"BUTTON",{class:!0});var J=y(E);M=V(J,ee),J.forEach(h),C=g(s),P=u(s,"BR",{}),S=g(s),v=u(s,"INPUT",{class:!0,type:!0,placeholder:!0}),U=g(s),_=u(s,"DIV",{class:!0});var H=y(_);$=u(H,"INPUT",{id:!0,type:!0,class:!0}),j=g(H),L=u(H,"DIV",{class:!0});var K=y(L);I=u(K,"LABEL",{for:!0,class:!0});var Q=y(I);D=V(Q,o[0]),Q.forEach(h),K.forEach(h),q=g(H),T=u(H,"DIV",{class:!0,"data-svelte-h":!0}),X(T)!=="svelte-rnfhn8"&&(T.innerHTML=G),H.forEach(h),s.forEach(h),this.h()},h(){r(m,"class","title"),r(E,"class","btn btn-secondary"),r(v,"class","input input-bordered"),r(v,"type","text"),r(v,"placeholder","Enter your name"),r($,"id","my-drawer"),r($,"type","checkbox"),r($,"class","drawer-toggle"),r(I,"for","my-drawer"),r(I,"class","btn btn-primary drawer-button"),r(L,"class","drawer-content"),r(T,"class","drawer-side"),r(_,"class","drawer"),r(e,"class","index svelte-ffpviw")},m(l,s){oe(a,l,s),z(l,n,s),z(l,e,s),t(e,i),t(i,d),t(e,p),t(e,m),t(e,f),t(e,w),t(e,B),t(e,E),t(E,M),t(e,C),t(e,P),t(e,S),t(e,v),Y(v,o[1]),t(e,U),t(e,_),t(_,$),t(_,j),t(_,L),t(L,I),t(I,D),t(_,q),t(_,T),k=!0,x||(R=[Z(E,"click",o[2]),Z(v,"input",o[3])],x=!0)},p(l,[s]){(!k||s&2)&&A(d,l[1]),s&2&&v.value!==l[1]&&Y(v,l[1]),(!k||s&1)&&A(D,l[0])},i(l){k||(ce(a.$$.fragment,l),k=!0)},o(l){ue(a.$$.fragment,l),k=!1},d(l){l&&(h(n),h(e)),de(a,l),x=!1,re(R)}}}let ee="Button name generic";function ve(o,a,n){let e="Open drawer",i="welcome to sveltekit";const d=()=>{console.log("updateTitle"),n(1,i="welcome to the darkside"),n(0,e="Close drawer")};function p(){i=this.value,n(1,i)}return[e,i,d,p]}class ge extends ae{constructor(a){super(),se(this,a,ve,pe,te,{})}}export{ge as component};
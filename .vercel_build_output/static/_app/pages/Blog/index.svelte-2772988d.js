import{S as A,i as C,s as G,e as v,t as k,k as B,c as b,a as x,g as w,d as h,n as D,b as g,f as y,G as d,h as H,I as O,Q as L,j as M,m as N,o as Q,x as P,u as V,v as R,w as U,R as z,r as F}from"../../chunks/vendor-1f3ec47e.js";function J(u){let t,o,a,n,r=u[0].title.substring(0,15)+"",i,p,_,s,$=u[0].excerpt.substring(0,50)+"",e,c,l;return{c(){t=v("main"),o=v("a"),a=v("div"),n=v("h1"),i=k(r),p=k("..."),_=B(),s=v("p"),e=k($),c=k("..."),this.h()},l(f){t=b(f,"MAIN",{class:!0});var m=x(t);o=b(m,"A",{href:!0});var E=x(o);a=b(E,"DIV",{class:!0});var I=x(a);n=b(I,"H1",{class:!0});var S=x(n);i=w(S,r),p=w(S,"..."),S.forEach(h),_=D(I),s=b(I,"P",{class:!0});var j=x(s);e=w(j,$),c=w(j,"..."),j.forEach(h),I.forEach(h),E.forEach(h),m.forEach(h),this.h()},h(){g(n,"class","font-bold"),g(s,"class","text-sm mt-auto"),g(a,"class","my-2 mx-2"),g(o,"href",l="/Blog/"+u[0].slug),g(t,"class","card text-black border-1 border-black rounded-none h-[100%]")},m(f,m){y(f,t,m),d(t,o),d(o,a),d(a,n),d(n,i),d(n,p),d(a,_),d(a,s),d(s,e),d(s,c)},p(f,[m]){m&1&&r!==(r=f[0].title.substring(0,15)+"")&&H(i,r),m&1&&$!==($=f[0].excerpt.substring(0,50)+"")&&H(e,$),m&1&&l!==(l="/Blog/"+f[0].slug)&&g(o,"href",l)},i:O,o:O,d(f){f&&h(t)}}}function K(u,t,o){let{post:a}=t;return u.$$set=n=>{"post"in n&&o(0,a=n.post)},[a]}class W extends A{constructor(t){super();C(this,t,K,J,G,{post:0})}}function T(u,t,o){const a=u.slice();return a[1]=t[o],a}function q(u){let t,o,a,n;return o=new W({props:{post:u[1]}}),{c(){t=v("div"),M(o.$$.fragment),a=B(),this.h()},l(r){t=b(r,"DIV",{class:!0});var i=x(t);N(o.$$.fragment,i),a=D(i),i.forEach(h),this.h()},h(){g(t,"class","shadow-lg")},m(r,i){y(r,t,i),Q(o,t,null),d(t,a),n=!0},p(r,i){const p={};i&1&&(p.post=r[1]),o.$set(p)},i(r){n||(P(o.$$.fragment,r),n=!0)},o(r){V(o.$$.fragment,r),n=!1},d(r){r&&h(t),R(o)}}}function X(u){let t,o,a,n,r,i,p,_=u[0],s=[];for(let e=0;e<_.length;e+=1)s[e]=q(T(u,_,e));const $=e=>V(s[e],1,1,()=>{s[e]=null});return{c(){t=v("div"),o=v("h1"),a=k("POSTS"),n=B(),r=v("div"),i=v("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=b(e,"DIV",{class:!0});var c=x(t);o=b(c,"H1",{class:!0});var l=x(o);a=w(l,"POSTS"),l.forEach(h),c.forEach(h),n=D(e),r=b(e,"DIV",{class:!0});var f=x(r);i=b(f,"UL",{class:!0});var m=x(i);for(let E=0;E<s.length;E+=1)s[E].l(m);m.forEach(h),f.forEach(h),this.h()},h(){g(o,"class","flex justify-center col-start-1 col-end-3 text-6xl text-[#f2f2f2] py-16 font-bold"),g(t,"class","grid grid-flow-col bg-gray-900"),g(i,"class","grid grid-cols-2 gap-4 mx-4 drop-shadow-md"),g(r,"class","mt-3")},m(e,c){y(e,t,c),d(t,o),d(o,a),y(e,n,c),y(e,r,c),d(r,i);for(let l=0;l<s.length;l+=1)s[l].m(i,null);p=!0},p(e,[c]){if(c&1){_=e[0];let l;for(l=0;l<_.length;l+=1){const f=T(e,_,l);s[l]?(s[l].p(f,c),P(s[l],1)):(s[l]=q(f),s[l].c(),P(s[l],1),s[l].m(i,null))}for(F(),l=_.length;l<s.length;l+=1)$(l);U()}},i(e){if(!p){for(let c=0;c<_.length;c+=1)P(s[c]);p=!0}},o(e){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)V(s[c]);p=!1},d(e){e&&h(t),e&&h(n),e&&h(r),z(s,e)}}}async function tt(){const u=new L({url:"https://the-bugle.ghost.io",key:"8e13db450fb943017492844c64",version:"v3"});try{return{props:{posts:await u.posts.browse({limit:100,include:"tags, authors"})}}}catch(t){console.log(t)}}function Y(u,t,o){let{posts:a}=t;return console.log(a),u.$$set=n=>{"posts"in n&&o(0,a=n.posts)},[a]}class et extends A{constructor(t){super();C(this,t,Y,X,G,{posts:0})}}export{et as default,tt as load};

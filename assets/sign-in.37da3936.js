import{S as Q,i as X,s as R,l as U,e as E,A as N,B as H,a as r,D as ce,b as q,C as k,E as te,u as V,p as W,q as Y,F as J,t as z,g as j,h as L,G as me,H as w,J as ge,K as de,L as ve,M as be,f as M,N as le,O as ne,c as A,P as Z,d as B,Q as se,j as D,r as K,w as pe,x as he,X as ke,y as ye}from"./vendor.2e39e860.js";import{a as ie}from"./userStore.98d71bcc.js";import{s as Ee}from"./storage.2374f6c7.js";var we="/assets/lock.3356fc31.svg",Se="/assets/logo.c4c36fbd.svg",qe="/assets/mail.c897ed82.svg";const Le=l=>({}),ae=l=>({}),Te=l=>({}),oe=l=>({});function ze(l){let e;return{c(){e=E("div")},m(t,n){q(t,e,n)},d(t){t&&L(e)}}}function je(l){let e;return{c(){e=E("div")},m(t,n){q(t,e,n)},d(t){t&&L(e)}}}function Ne(l){let e,t,n,s,a,m,b,g,d,i,c,v;const o=l[8].leftElement,T=U(o,l,l[7],oe),p=T||ze(),C=l[8].rightElement,f=U(C,l,l[7],ae),S=f||je();return{c(){e=E("div"),t=E("div"),p&&p.c(),n=N(),s=E("input"),a=N(),S&&S.c(),m=N(),b=E("div"),g=E("span"),d=H(l[4]),r(s,"alt","alt-input"),r(s,"style",l[3]),r(s,"type",l[1]),r(s,"placeholder",l[0]),r(s,"class","svelte-1wwqp7i"),r(t,"class","container svelte-1wwqp7i"),ce(g,"margin-left","15px"),r(b,"class","errorText svelte-1wwqp7i"),r(e,"class","edit-text svelte-1wwqp7i"),r(e,"style",l[2]),r(e,"data-testid","container")},m(u,y){q(u,e,y),k(e,t),p&&p.m(t,null),k(t,n),k(t,s),k(t,a),S&&S.m(t,null),k(e,m),k(e,b),k(b,g),k(g,d),i=!0,c||(v=te(s,"input",l[5]),c=!0)},p(u,[y]){T&&T.p&&(!i||y&128)&&V(T,o,u,u[7],i?Y(o,u[7],y,Te):W(u[7]),oe),(!i||y&8)&&r(s,"style",u[3]),(!i||y&2)&&r(s,"type",u[1]),(!i||y&1)&&r(s,"placeholder",u[0]),f&&f.p&&(!i||y&128)&&V(f,C,u,u[7],i?Y(C,u[7],y,Le):W(u[7]),ae),(!i||y&16)&&J(d,u[4]),(!i||y&4)&&r(e,"style",u[2])},i(u){i||(z(p,u),z(S,u),i=!0)},o(u){j(p,u),j(S,u),i=!1},d(u){u&&L(e),p&&p.d(u),S&&S.d(u),c=!1,v()}}}function Ce(l,e,t){let{$$slots:n={},$$scope:s}=e,{placeholder:a=""}=e,{type:m="text"}=e,{containerStyle:b=""}=e,{inputStyle:g=""}=e,{errorText:d=""}=e,{value:i=""}=e;const c=me(),v=o=>{t(6,i=/^(number|range)$/.exec(m)?+o.target.value:o.target.value),c("changed",i)};return l.$$set=o=>{"placeholder"in o&&t(0,a=o.placeholder),"type"in o&&t(1,m=o.type),"containerStyle"in o&&t(2,b=o.containerStyle),"inputStyle"in o&&t(3,g=o.inputStyle),"errorText"in o&&t(4,d=o.errorText),"value"in o&&t(6,i=o.value),"$$scope"in o&&t(7,s=o.$$scope)},[a,m,b,g,d,v,i,s,n]}class fe extends Q{constructor(e){super();X(this,e,Ce,Ne,R,{placeholder:0,type:1,containerStyle:2,inputStyle:3,errorText:4,value:6})}}function Me(l){let e;const t=l[12].default,n=U(t,l,l[11],null),s=n||Be(l);return{c(){s&&s.c()},m(a,m){s&&s.m(a,m),e=!0},p(a,m){n?n.p&&(!e||m&2048)&&V(n,t,a,a[11],e?Y(t,a[11],m,null):W(a[11]),null):s&&s.p&&(!e||m&256)&&s.p(a,e?m:-1)},i(a){e||(z(s,a),e=!0)},o(a){j(s,a),e=!1},d(a){s&&s.d(a)}}}function Ae(l){let e;return{c(){e=E("div"),r(e,"class","loader svelte-dp9g4h"),r(e,"data-testid","loader")},m(t,n){q(t,e,n)},p:M,i:M,o:M,d(t){t&&L(e)}}}function re(l){let e,t;return{c(){e=E("div"),t=H(l[8]),r(e,"data-testid","text")},m(n,s){q(n,e,s),k(e,t)},p(n,s){s&256&&J(t,n[8])},d(n){n&&L(e)}}}function Be(l){let e,t=l[8]&&re(l);return{c(){t&&t.c(),e=be()},m(n,s){t&&t.m(n,s),q(n,e,s)},p(n,s){n[8]?t?t.p(n,s):(t=re(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){t&&t.d(n),n&&L(e)}}}function De(l){let e,t,n,s,a,m;const b=[Ae,Me],g=[];function d(i,c){return i[10]?0:1}return t=d(l),n=g[t]=b[t](l),{c(){e=E("button"),n.c(),r(e,"class","button svelte-dp9g4h"),r(e,"type",l[6]),r(e,"style",l[7]),e.disabled=l[9],w(e,"primary",l[0]),w(e,"secondary",l[1]),w(e,"positive",l[2]),w(e,"negative",l[3]),w(e,"transparent",l[4]),w(e,"small",l[5]==="small"),w(e,"medium",l[5]==="medium")},m(i,c){q(i,e,c),g[t].m(e,null),s=!0,a||(m=te(e,"click",l[13]),a=!0)},p(i,[c]){let v=t;t=d(i),t===v?g[t].p(i,c):(ge(),j(g[v],1,1,()=>{g[v]=null}),de(),n=g[t],n?n.p(i,c):(n=g[t]=b[t](i),n.c()),z(n,1),n.m(e,null)),(!s||c&64)&&r(e,"type",i[6]),(!s||c&128)&&r(e,"style",i[7]),(!s||c&512)&&(e.disabled=i[9]),c&1&&w(e,"primary",i[0]),c&2&&w(e,"secondary",i[1]),c&4&&w(e,"positive",i[2]),c&8&&w(e,"negative",i[3]),c&16&&w(e,"transparent",i[4]),c&32&&w(e,"small",i[5]==="small"),c&32&&w(e,"medium",i[5]==="medium")},i(i){s||(z(n),s=!0)},o(i){j(n),s=!1},d(i){i&&L(e),g[t].d(),a=!1,m()}}}function Ie(l,e,t){let{$$slots:n={},$$scope:s}=e,{primary:a=!1}=e,{secondary:m=!1}=e,{positive:b=!1}=e,{negative:g=!1}=e,{transparent:d=!1}=e,{size:i="medium"}=e,{type:c=void 0}=e,{style:v=""}=e,{text:o=""}=e,{disabled:T=!1}=e,{loading:p=!1}=e;function C(f){ve.call(this,l,f)}return l.$$set=f=>{"primary"in f&&t(0,a=f.primary),"secondary"in f&&t(1,m=f.secondary),"positive"in f&&t(2,b=f.positive),"negative"in f&&t(3,g=f.negative),"transparent"in f&&t(4,d=f.transparent),"size"in f&&t(5,i=f.size),"type"in f&&t(6,c=f.type),"style"in f&&t(7,v=f.style),"text"in f&&t(8,o=f.text),"disabled"in f&&t(9,T=f.disabled),"loading"in f&&t(10,p=f.loading),"$$scope"in f&&t(11,s=f.$$scope)},[a,m,b,g,d,i,c,v,o,T,p,s,n,C]}class x extends Q{constructor(e){super();X(this,e,Ie,De,R,{primary:0,secondary:1,positive:2,negative:3,transparent:4,size:5,type:6,style:7,text:8,disabled:9,loading:10})}}function Fe(l){let e,t;return{c(){e=E("img"),r(e,"slot","leftElement"),r(e,"class","icon svelte-1mo0081"),Z(e.src,t=qe)||r(e,"src",t),r(e,"alt","email")},m(n,s){q(n,e,s)},p:M,d(n){n&&L(e)}}}function Ge(l){let e,t;return{c(){e=E("img"),r(e,"slot","leftElement"),r(e,"class","icon svelte-1mo0081"),Z(e.src,t=we)||r(e,"src",t),r(e,"alt","lock")},m(n,s){q(n,e,s)},p:M,d(n){n&&L(e)}}}function He(l){let e,t=l[4]("sign-in.login")+"",n;return{c(){e=E("div"),n=H(t),r(e,"class","black svelte-1mo0081")},m(s,a){q(s,e,a),k(e,n)},p(s,a){a&16&&t!==(t=s[4]("sign-in.login")+"")&&J(n,t)},d(s){s&&L(e)}}}function Je(l){let e,t,n,s,a,m=l[4]("sign-in.title")+"",b,g,d,i,c,v,o,T,p,C,f,S,u,y;function ue(_){l[5](_)}let $={type:"email",placeholder:"email@email.com",$$slots:{leftElement:[Fe]},$$scope:{ctx:l}};l[2]!==void 0&&($.value=l[2]),d=new fe({props:$}),le.push(()=>ne(d,"value",ue));function _e(_){l[6](_)}let ee={type:"password",placeholder:"********",$$slots:{leftElement:[Ge]},$$scope:{ctx:l}};return l[3]!==void 0&&(ee.value=l[3]),v=new fe({props:ee}),le.push(()=>ne(v,"value",_e)),p=new x({props:{primary:!0,disabled:l[1],loading:l[1],$$slots:{default:[He]},$$scope:{ctx:l}}}),p.$on("click",l[0]),f=new x({props:{disabled:l[1],loading:l[1],text:l[4]("sign-in.sign-up")}}),f.$on("click",Ke),u=new x({props:{style:"margin-top: -2px; font-size: 14px; text-decoration: underline;",transparent:!0,disabled:l[1],loading:l[1],text:l[4]("sign-in.look-around")}}),u.$on("click",Oe),{c(){e=E("div"),t=E("img"),s=N(),a=E("h3"),b=H(m),g=N(),A(d.$$.fragment),c=N(),A(v.$$.fragment),T=N(),A(p.$$.fragment),C=N(),A(f.$$.fragment),S=N(),A(u.$$.fragment),r(t,"class","logo svelte-1mo0081"),Z(t.src,n=Se)||r(t,"src",n),r(t,"alt","logo"),r(a,"class","svelte-1mo0081"),r(e,"class","container svelte-1mo0081"),r(e,"data-testid","sign-in-container")},m(_,h){q(_,e,h),k(e,t),k(e,s),k(e,a),k(a,b),k(e,g),B(d,e,null),k(e,c),B(v,e,null),k(e,T),B(p,e,null),k(e,C),B(f,e,null),k(e,S),B(u,e,null),y=!0},p(_,[h]){(!y||h&16)&&m!==(m=_[4]("sign-in.title")+"")&&J(b,m);const O={};h&1024&&(O.$$scope={dirty:h,ctx:_}),!i&&h&4&&(i=!0,O.value=_[2],se(()=>i=!1)),d.$set(O);const P={};h&1024&&(P.$$scope={dirty:h,ctx:_}),!o&&h&8&&(o=!0,P.value=_[3],se(()=>o=!1)),v.$set(P);const I={};h&2&&(I.disabled=_[1]),h&2&&(I.loading=_[1]),h&1040&&(I.$$scope={dirty:h,ctx:_}),p.$set(I);const F={};h&2&&(F.disabled=_[1]),h&2&&(F.loading=_[1]),h&16&&(F.text=_[4]("sign-in.sign-up")),f.$set(F);const G={};h&2&&(G.disabled=_[1]),h&2&&(G.loading=_[1]),h&16&&(G.text=_[4]("sign-in.look-around")),u.$set(G)},i(_){y||(z(d.$$.fragment,_),z(v.$$.fragment,_),z(p.$$.fragment,_),z(f.$$.fragment,_),z(u.$$.fragment,_),y=!0)},o(_){j(d.$$.fragment,_),j(v.$$.fragment,_),j(p.$$.fragment,_),j(f.$$.fragment,_),j(u.$$.fragment,_),y=!1},d(_){_&&L(e),D(d),D(v),D(p),D(f),D(u)}}}const Ke=()=>{},Oe=()=>{};function Pe(l,e,t){let n,s,a,m;K(l,pe,o=>t(7,n=o)),K(l,he,o=>t(8,s=o)),K(l,ie,o=>t(9,a=o)),K(l,ke,o=>t(4,m=o));let b=!1,g,d;a&&(alert(m("already_signed_in")),s(n("/home/main")));const i=()=>{!g||!d||(t(1,b=!0),ye(ie,a={displayName:"admin",role:"MAIN"},a),Ee("token","temp token"),s(n("/home/main")))};function c(o){g=o,t(2,g)}function v(o){d=o,t(3,d)}return[i,b,g,d,m,c,v]}class Ue extends Q{constructor(e){super();X(this,e,Pe,Je,R,{handleLogin:0})}get handleLogin(){return this.$$.ctx[0]}}export{Ue as default};
import{S as Q,i as X,s as R,l as U,e as y,B as H,D as me,a as r,b as S,C as k,E as J,h as w,A as j,F as te,u as V,p as W,q as Y,t as T,g as z,G as de,H as q,J as ge,K as ve,L as be,M as he,f as M,N as le,O as ne,c as A,P as Z,d as B,Q as se,j as D,r as K,w as pe,x as ke,X as ye,y as Ee}from"./vendor.caea49fa.js";import{a as ie}from"./userStore.c75462e4.js";import{s as qe}from"./storage.2374f6c7.js";var Se="/assets/lock.3356fc31.svg",we="/assets/logo.c4c36fbd.svg",Le="/assets/mail.c897ed82.svg";const Te=l=>({}),ae=l=>({}),ze=l=>({}),oe=l=>({});function je(l){let e;return{c(){e=y("div")},m(t,s){S(t,e,s)},d(t){t&&w(e)}}}function Ne(l){let e;return{c(){e=y("div")},m(t,s){S(t,e,s)},d(t){t&&w(e)}}}function fe(l){let e,t,s;return{c(){e=y("div"),t=y("span"),s=H(l[4]),me(t,"margin-left","15px"),r(e,"class","errorText svelte-1q1fx2")},m(n,a){S(n,e,a),k(e,t),k(t,s)},p(n,a){a&16&&J(s,n[4])},d(n){n&&w(e)}}}function Ce(l){let e,t,s,n,a,c,m,g,v;const o=l[8].leftElement,_=U(o,l,l[7],oe),d=_||je(),f=l[8].rightElement,L=U(f,l,l[7],ae),b=L||Ne();let h=l[4]&&fe(l);return{c(){e=y("div"),t=y("div"),d&&d.c(),s=j(),n=y("input"),a=j(),b&&b.c(),c=j(),h&&h.c(),r(n,"alt","alt-input"),r(n,"style",l[3]),r(n,"type",l[1]),r(n,"placeholder",l[0]),r(n,"class","svelte-1q1fx2"),r(t,"class","container svelte-1q1fx2"),r(e,"class","edit-text svelte-1q1fx2"),r(e,"style",l[2]),r(e,"data-testid","container")},m(i,E){S(i,e,E),k(e,t),d&&d.m(t,null),k(t,s),k(t,n),k(t,a),b&&b.m(t,null),k(e,c),h&&h.m(e,null),m=!0,g||(v=te(n,"input",l[5]),g=!0)},p(i,[E]){_&&_.p&&(!m||E&128)&&V(_,o,i,i[7],m?Y(o,i[7],E,ze):W(i[7]),oe),(!m||E&8)&&r(n,"style",i[3]),(!m||E&2)&&r(n,"type",i[1]),(!m||E&1)&&r(n,"placeholder",i[0]),L&&L.p&&(!m||E&128)&&V(L,f,i,i[7],m?Y(f,i[7],E,Te):W(i[7]),ae),i[4]?h?h.p(i,E):(h=fe(i),h.c(),h.m(e,null)):h&&(h.d(1),h=null),(!m||E&4)&&r(e,"style",i[2])},i(i){m||(T(d,i),T(b,i),m=!0)},o(i){z(d,i),z(b,i),m=!1},d(i){i&&w(e),d&&d.d(i),b&&b.d(i),h&&h.d(),g=!1,v()}}}function Me(l,e,t){let{$$slots:s={},$$scope:n}=e,{placeholder:a=""}=e,{type:c="text"}=e,{containerStyle:m=""}=e,{inputStyle:g=""}=e,{errorText:v=""}=e,{value:o=""}=e;const _=de(),d=f=>{t(6,o=/^(number|range)$/.exec(c)?+f.target.value:f.target.value),_("changed",o)};return l.$$set=f=>{"placeholder"in f&&t(0,a=f.placeholder),"type"in f&&t(1,c=f.type),"containerStyle"in f&&t(2,m=f.containerStyle),"inputStyle"in f&&t(3,g=f.inputStyle),"errorText"in f&&t(4,v=f.errorText),"value"in f&&t(6,o=f.value),"$$scope"in f&&t(7,n=f.$$scope)},[a,c,m,g,v,d,o,n,s]}class re extends Q{constructor(e){super();X(this,e,Me,Ce,R,{placeholder:0,type:1,containerStyle:2,inputStyle:3,errorText:4,value:6})}}function Ae(l){let e;const t=l[12].default,s=U(t,l,l[11],null),n=s||De(l);return{c(){n&&n.c()},m(a,c){n&&n.m(a,c),e=!0},p(a,c){s?s.p&&(!e||c&2048)&&V(s,t,a,a[11],e?Y(t,a[11],c,null):W(a[11]),null):n&&n.p&&(!e||c&256)&&n.p(a,e?c:-1)},i(a){e||(T(n,a),e=!0)},o(a){z(n,a),e=!1},d(a){n&&n.d(a)}}}function Be(l){let e;return{c(){e=y("div"),r(e,"class","loader svelte-1ho0o"),r(e,"data-testid","loader")},m(t,s){S(t,e,s)},p:M,i:M,o:M,d(t){t&&w(e)}}}function ue(l){let e,t;return{c(){e=y("div"),t=H(l[8]),r(e,"data-testid","text")},m(s,n){S(s,e,n),k(e,t)},p(s,n){n&256&&J(t,s[8])},d(s){s&&w(e)}}}function De(l){let e,t=l[8]&&ue(l);return{c(){t&&t.c(),e=he()},m(s,n){t&&t.m(s,n),S(s,e,n)},p(s,n){s[8]?t?t.p(s,n):(t=ue(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&w(e)}}}function Ie(l){let e,t,s,n,a,c;const m=[Be,Ae],g=[];function v(o,_){return o[10]?0:1}return t=v(l),s=g[t]=m[t](l),{c(){e=y("button"),s.c(),r(e,"class","button svelte-1ho0o"),r(e,"type",l[6]),r(e,"style",l[7]),e.disabled=l[9],q(e,"primary",l[0]),q(e,"secondary",l[1]),q(e,"positive",l[2]),q(e,"negative",l[3]),q(e,"transparent",l[4]),q(e,"small",l[5]==="small"),q(e,"medium",l[5]==="medium")},m(o,_){S(o,e,_),g[t].m(e,null),n=!0,a||(c=te(e,"click",l[13]),a=!0)},p(o,[_]){let d=t;t=v(o),t===d?g[t].p(o,_):(ge(),z(g[d],1,1,()=>{g[d]=null}),ve(),s=g[t],s?s.p(o,_):(s=g[t]=m[t](o),s.c()),T(s,1),s.m(e,null)),(!n||_&64)&&r(e,"type",o[6]),(!n||_&128)&&r(e,"style",o[7]),(!n||_&512)&&(e.disabled=o[9]),_&1&&q(e,"primary",o[0]),_&2&&q(e,"secondary",o[1]),_&4&&q(e,"positive",o[2]),_&8&&q(e,"negative",o[3]),_&16&&q(e,"transparent",o[4]),_&32&&q(e,"small",o[5]==="small"),_&32&&q(e,"medium",o[5]==="medium")},i(o){n||(T(s),n=!0)},o(o){z(s),n=!1},d(o){o&&w(e),g[t].d(),a=!1,c()}}}function Fe(l,e,t){let{$$slots:s={},$$scope:n}=e,{primary:a=!1}=e,{secondary:c=!1}=e,{positive:m=!1}=e,{negative:g=!1}=e,{transparent:v=!1}=e,{size:o="medium"}=e,{type:_=void 0}=e,{style:d=""}=e,{text:f=""}=e,{disabled:L=!1}=e,{loading:b=!1}=e;function h(i){be.call(this,l,i)}return l.$$set=i=>{"primary"in i&&t(0,a=i.primary),"secondary"in i&&t(1,c=i.secondary),"positive"in i&&t(2,m=i.positive),"negative"in i&&t(3,g=i.negative),"transparent"in i&&t(4,v=i.transparent),"size"in i&&t(5,o=i.size),"type"in i&&t(6,_=i.type),"style"in i&&t(7,d=i.style),"text"in i&&t(8,f=i.text),"disabled"in i&&t(9,L=i.disabled),"loading"in i&&t(10,b=i.loading),"$$scope"in i&&t(11,n=i.$$scope)},[a,c,m,g,v,o,_,d,f,L,b,n,s,h]}class x extends Q{constructor(e){super();X(this,e,Fe,Ie,R,{primary:0,secondary:1,positive:2,negative:3,transparent:4,size:5,type:6,style:7,text:8,disabled:9,loading:10})}}function Ge(l){let e,t;return{c(){e=y("img"),r(e,"slot","leftElement"),r(e,"class","icon svelte-1586qv9"),Z(e.src,t=Le)||r(e,"src",t),r(e,"alt","email")},m(s,n){S(s,e,n)},p:M,d(s){s&&w(e)}}}function He(l){let e,t;return{c(){e=y("img"),r(e,"slot","leftElement"),r(e,"class","icon svelte-1586qv9"),Z(e.src,t=Se)||r(e,"src",t),r(e,"alt","lock")},m(s,n){S(s,e,n)},p:M,d(s){s&&w(e)}}}function Je(l){let e,t=l[4]("sign-in.login")+"",s;return{c(){e=y("div"),s=H(t),r(e,"class","text-contrast svelte-1586qv9")},m(n,a){S(n,e,a),k(e,s)},p(n,a){a&16&&t!==(t=n[4]("sign-in.login")+"")&&J(s,t)},d(n){n&&w(e)}}}function Ke(l){let e,t,s,n,a,c=l[4]("sign-in.title")+"",m,g,v,o,_,d,f,L,b,h,i,E,N,C;function _e(u){l[5](u)}let $={type:"email",placeholder:"email@email.com",$$slots:{leftElement:[Ge]},$$scope:{ctx:l}};l[2]!==void 0&&($.value=l[2]),v=new re({props:$}),le.push(()=>ne(v,"value",_e));function ce(u){l[6](u)}let ee={type:"password",placeholder:"********",$$slots:{leftElement:[He]},$$scope:{ctx:l}};return l[3]!==void 0&&(ee.value=l[3]),d=new re({props:ee}),le.push(()=>ne(d,"value",ce)),b=new x({props:{primary:!0,disabled:l[1],loading:l[1],$$slots:{default:[Je]},$$scope:{ctx:l}}}),b.$on("click",l[0]),i=new x({props:{disabled:l[1],loading:l[1],text:l[4]("sign-in.sign-up")}}),i.$on("click",Oe),N=new x({props:{style:"margin-top: -2px; font-size: 1rem; text-decoration: underline;",transparent:!0,disabled:l[1],loading:l[1],text:l[4]("sign-in.look-around")}}),N.$on("click",Pe),{c(){e=y("div"),t=y("img"),n=j(),a=y("h3"),m=H(c),g=j(),A(v.$$.fragment),_=j(),A(d.$$.fragment),L=j(),A(b.$$.fragment),h=j(),A(i.$$.fragment),E=j(),A(N.$$.fragment),r(t,"class","logo svelte-1586qv9"),Z(t.src,s=we)||r(t,"src",s),r(t,"alt","logo"),r(a,"class","svelte-1586qv9"),r(e,"class","container svelte-1586qv9"),r(e,"data-testid","sign-in-container")},m(u,p){S(u,e,p),k(e,t),k(e,n),k(e,a),k(a,m),k(e,g),B(v,e,null),k(e,_),B(d,e,null),k(e,L),B(b,e,null),k(e,h),B(i,e,null),k(e,E),B(N,e,null),C=!0},p(u,[p]){(!C||p&16)&&c!==(c=u[4]("sign-in.title")+"")&&J(m,c);const O={};p&1024&&(O.$$scope={dirty:p,ctx:u}),!o&&p&4&&(o=!0,O.value=u[2],se(()=>o=!1)),v.$set(O);const P={};p&1024&&(P.$$scope={dirty:p,ctx:u}),!f&&p&8&&(f=!0,P.value=u[3],se(()=>f=!1)),d.$set(P);const I={};p&2&&(I.disabled=u[1]),p&2&&(I.loading=u[1]),p&1040&&(I.$$scope={dirty:p,ctx:u}),b.$set(I);const F={};p&2&&(F.disabled=u[1]),p&2&&(F.loading=u[1]),p&16&&(F.text=u[4]("sign-in.sign-up")),i.$set(F);const G={};p&2&&(G.disabled=u[1]),p&2&&(G.loading=u[1]),p&16&&(G.text=u[4]("sign-in.look-around")),N.$set(G)},i(u){C||(T(v.$$.fragment,u),T(d.$$.fragment,u),T(b.$$.fragment,u),T(i.$$.fragment,u),T(N.$$.fragment,u),C=!0)},o(u){z(v.$$.fragment,u),z(d.$$.fragment,u),z(b.$$.fragment,u),z(i.$$.fragment,u),z(N.$$.fragment,u),C=!1},d(u){u&&w(e),D(v),D(d),D(b),D(i),D(N)}}}const Oe=()=>{},Pe=()=>{};function Qe(l,e,t){let s,n,a,c;K(l,pe,f=>t(7,s=f)),K(l,ke,f=>t(8,n=f)),K(l,ie,f=>t(9,a=f)),K(l,ye,f=>t(4,c=f));let m=!1,g,v;a&&(alert(c("already_signed_in")),n(s("/home/main")));const o=()=>{!g||!v||(t(1,m=!0),Ee(ie,a={displayName:"admin",role:"MAIN"},a),qe("token","temp token"),n(s("/home/main")))};function _(f){g=f,t(2,g)}function d(f){v=f,t(3,v)}return[o,m,g,v,c,_,d]}class Ve extends Q{constructor(e){super();X(this,e,Qe,Ke,R,{handleLogin:0})}get handleLogin(){return this.$$.ctx[0]}}export{Ve as default};

import{S as C,i as z,s as B,e as m,y,x as A,a as r,N as $,b as M,z as o,B as J,O as K,C as L,n as j,g as N,p as H,P as D,q as E,X as Q,k as R,c as F,d as G,u as T,l as V,o as W,t as P,f as U,h as I}from"./vendor.19208df2.js";import{d as Y}from"./storage.e6a6295b.js";function Z(e){let t,l,i,a,n,c,u,p,_,s,v,b,h,S,f,g,O=e[2]("logout")+"",q,w,X;return{c(){t=m("nav"),l=m("ul"),i=m("li"),a=m("a"),n=y("Home"),p=A(),_=m("li"),s=m("a"),v=y("Settings"),S=A(),f=m("li"),g=m("a"),q=y(O),r(a,"class",c=""+($(e[0](e[1]("/home"))?"active":"")+" svelte-gdpge1")),r(a,"href",u=e[1]("/home")),r(i,"class","svelte-gdpge1"),r(s,"class",b=""+($(e[0](e[1]("/home/settings"))?"active":"")+" svelte-gdpge1")),r(s,"href",h=e[1]("/home/settings")),r(_,"class","svelte-gdpge1"),r(g,"href",""),r(g,"class","svelte-gdpge1"),r(f,"class","svelte-gdpge1"),r(l,"class","svelte-gdpge1"),r(t,"class","svelte-gdpge1")},m(d,k){M(d,t,k),o(t,l),o(l,i),o(i,a),o(a,n),o(l,p),o(l,_),o(_,s),o(s,v),o(l,S),o(l,f),o(f,g),o(g,q),w||(X=J(g,"click",K(e[3])),w=!0)},p(d,[k]){k&3&&c!==(c=""+($(d[0](d[1]("/home"))?"active":"")+" svelte-gdpge1"))&&r(a,"class",c),k&2&&u!==(u=d[1]("/home"))&&r(a,"href",u),k&3&&b!==(b=""+($(d[0](d[1]("/home/settings"))?"active":"")+" svelte-gdpge1"))&&r(s,"class",b),k&2&&h!==(h=d[1]("/home/settings"))&&r(s,"href",h),k&4&&O!==(O=d[2]("logout")+"")&&L(q,O)},i:j,o:j,d(d){d&&N(t),w=!1,X()}}}function x(e,t,l){let i,a,n;return H(e,D,u=>l(0,i=u)),H(e,E,u=>l(1,a=u)),H(e,Q,u=>l(2,n=u)),[i,a,n,()=>{Y("token"),location.reload()}]}class ee extends C{constructor(t){super();z(this,t,x,Z,B,{})}}function te(e){let t,l,i,a,n,c,u,p,_,s,v,b,h,S;return{c(){t=m("aside"),l=m("nav"),i=m("ul"),a=m("li"),n=m("a"),c=y("Home"),_=A(),s=m("li"),v=m("a"),b=y("Users"),r(n,"class",u=""+($(e[0](e[1]("/home/main"))?"active":"")+" svelte-rtg6mv")),r(n,"href",p=e[1]("/home/main")),r(v,"class",h=""+($(e[0](e[1]("/home/users"))?"active":"")+" svelte-rtg6mv")),r(v,"href",S=e[1]("/home/users")),r(i,"class","svelte-rtg6mv"),r(t,"class","svelte-rtg6mv")},m(f,g){M(f,t,g),o(t,l),o(l,i),o(i,a),o(a,n),o(n,c),o(i,_),o(i,s),o(s,v),o(v,b)},p(f,[g]){g&3&&u!==(u=""+($(f[0](f[1]("/home/main"))?"active":"")+" svelte-rtg6mv"))&&r(n,"class",u),g&2&&p!==(p=f[1]("/home/main"))&&r(n,"href",p),g&3&&h!==(h=""+($(f[0](f[1]("/home/users"))?"active":"")+" svelte-rtg6mv"))&&r(v,"class",h),g&2&&S!==(S=f[1]("/home/users"))&&r(v,"href",S)},i:j,o:j,d(f){f&&N(t)}}}function se(e,t,l){let i,a;return H(e,D,n=>l(0,i=n)),H(e,E,n=>l(1,a=n)),[i,a]}class le extends C{constructor(t){super();z(this,t,se,te,B,{})}}function ae(e){let t,l,i,a,n,c,u;l=new ee({}),n=new le({});const p=e[1].default,_=R(p,e,e[0],null);return{c(){t=m("main"),F(l.$$.fragment),i=A(),a=m("div"),F(n.$$.fragment),c=A(),_&&_.c(),r(a,"class","content svelte-15dc954"),r(t,"class","container svelte-15dc954")},m(s,v){M(s,t,v),G(l,t,null),o(t,i),o(t,a),G(n,a,null),o(a,c),_&&_.m(a,null),u=!0},p(s,[v]){_&&_.p&&(!u||v&1)&&T(_,p,s,s[0],u?W(p,s[0],v,null):V(s[0]),null)},i(s){u||(P(l.$$.fragment,s),P(n.$$.fragment,s),P(_,s),u=!0)},o(s){U(l.$$.fragment,s),U(n.$$.fragment,s),U(_,s),u=!1},d(s){s&&N(t),I(l),I(n),_&&_.d(s)}}}function ne(e,t,l){let{$$slots:i={},$$scope:a}=t;return e.$$set=n=>{"$$scope"in n&&l(0,a=n.$$scope)},[a,i]}class ie extends C{constructor(t){super();z(this,t,ne,ae,B,{})}}export{ie as default};
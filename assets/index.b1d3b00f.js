import{m as g,$ as y,I as k,v as E,n as L,S as v,i as p,s as x,R as w,e as P,c,a as R,b as T,d as m,f as A,t as _,g as f,h as D,j as h,k as O,o as I,T as S}from"./vendor.da24f944.js";const re={},j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};j();const V={title:"Intro"},C={title:"Template"},N="Already signed in";var W={index:V,temp:C,"sign-in":{title:"User Program",login:"Login","sign-up":"Sign Up","look-around":"Look around",logout:"Logout"},already_signed_in:N};const q={title:"\uC18C\uAC1C"},B={title:"\uD15C\uD50C\uB9BF"},U="\uC774\uBBF8 \uB85C\uADF8\uC778\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";var K={index:q,temp:B,"sign-in":{title:"\uC720\uC800 \uD504\uB85C\uADF8\uB7A8",login:"\uB85C\uADF8\uC778","sign-up":"\uD68C\uC6D0\uAC00\uC785","look-around":"\uB458\uB7EC\uBCF4\uAE30",logout:"\uB85C\uADF8\uC544\uC6C3"},already_signed_in:U};g("en",W);g("ko",K);y({fallbackLocale:"en",initialLocale:k()});const F="modulepreload",b={},G="/",l=function(r,n){return!n||n.length===0?r():Promise.all(n.map(e=>{if(e=`${G}${e}`,e in b)return;b[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":F,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((d,u)=>{i.addEventListener("load",d),i.addEventListener("error",u)})})).then(()=>r())};var M={meta:{},id:"_default",module:()=>l(()=>import("./_module.caedec08.js"),["assets/_module.caedec08.js","assets/vendor.da24f944.js","assets/userStore.d1e1d00e.js","assets/storage.f9f88970.js"]),file:{path:"src/routes/_module.svelte",dir:"src/routes",base:"_module.svelte",ext:".svelte",name:"_module"},rootName:"default",routifyDir:re.url,children:[{meta:{fallback:!0},id:"_default__fallback_svelte",name:"_fallback",module:()=>l(()=>import("./_fallback.b3ec256c.js"),["assets/_fallback.b3ec256c.js","assets/_fallback.01f20e56.css","assets/vendor.da24f944.js"]),file:{path:"src/routes/_fallback.svelte",dir:"src/routes",base:"_fallback.svelte",ext:".svelte",name:"_fallback"},children:[]},{meta:{},id:"_default_auth",name:"auth",module:!1,file:{path:"src/routes/auth",dir:"src/routes",base:"auth",ext:"",name:"auth"},children:[{meta:{},id:"_default_auth_sign_in_svelte",name:"sign-in",module:()=>l(()=>import("./sign-in.ee41181d.js"),["assets/sign-in.ee41181d.js","assets/sign-in.dbf0ca37.css","assets/vendor.da24f944.js","assets/userStore.d1e1d00e.js","assets/storage.f9f88970.js"]),file:{path:"src/routes/auth/sign-in.svelte",dir:"src/routes/auth",base:"sign-in.svelte",ext:".svelte",name:"sign-in"},children:[]}]},{meta:{},id:"_default_home",name:"home",module:()=>l(()=>import("./_module.8135188c.js"),["assets/_module.8135188c.js","assets/_module.738709bf.css","assets/vendor.da24f944.js","assets/storage.f9f88970.js"]),file:{path:"src/routes/home/_module.svelte",dir:"src/routes/home",base:"_module.svelte",ext:".svelte",name:"_module"},children:[{meta:{},id:"_default_home_main_svelte",name:"main",module:()=>l(()=>import("./main.8d56a0ec.js"),["assets/main.8d56a0ec.js","assets/vendor.da24f944.js"]),file:{path:"src/routes/home/main.svelte",dir:"src/routes/home",base:"main.svelte",ext:".svelte",name:"main"},children:[]},{meta:{},id:"_default_home_settings_svelte",name:"settings",module:()=>l(()=>import("./settings.6a46a09f.js"),["assets/settings.6a46a09f.js","assets/vendor.da24f944.js"]),file:{path:"src/routes/home/settings.svelte",dir:"src/routes/home",base:"settings.svelte",ext:".svelte",name:"settings"},children:[]},{meta:{},id:"_default_home_users",name:"users",module:!1,file:{path:"src/routes/home/users",dir:"src/routes/home",base:"users",ext:"",name:"users"},children:[{meta:{dynamic:!0},id:"_default_home_users__id_",name:"[id]",module:!1,file:{path:"src/routes/home/users/[id]",dir:"src/routes/home/users",base:"[id]",ext:"",name:"[id]"},children:[{meta:{},id:"_default_home_users__id__index_svelte",name:"index",module:()=>l(()=>import("./index.ab6e93b4.js"),["assets/index.ab6e93b4.js","assets/vendor.da24f944.js"]),file:{path:"src/routes/home/users/[id]/index.svelte",dir:"src/routes/home/users/[id]",base:"index.svelte",ext:".svelte",name:"index"},children:[]}]},{meta:{},id:"_default_home_users_index_svelte",name:"index",module:()=>l(()=>import("./index.21be0373.js"),["assets/index.21be0373.js","assets/index.d5f1b8de.css","assets/vendor.da24f944.js"]),file:{path:"src/routes/home/users/index.svelte",dir:"src/routes/home/users",base:"index.svelte",ext:".svelte",name:"index"},children:[]}]}]},{meta:{},id:"_default_index_svelte",name:"index",module:()=>l(()=>import("./index.a2daa0db.js"),["assets/index.a2daa0db.js","assets/vendor.da24f944.js","assets/userStore.d1e1d00e.js"]),file:{path:"src/routes/index.svelte",dir:"src/routes",base:"index.svelte",ext:".svelte",name:"index"},children:[]}]};function z(a={}){const{immediate:r=!1,onNeedRefresh:n,onOfflineReady:e,onRegistered:t,onRegisterError:s}=a;let i,d;const u=async(o=!0)=>{o&&(i==null||i.addEventListener("controlling",$=>{$.isUpdate&&window.location.reload()})),d&&d.waiting&&await L(d.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){i=new E("/sw.js",{scope:"/"}),i.addEventListener("activated",o=>{o.isUpdate||e==null||e()});{const o=()=>{n==null||n()};i.addEventListener("waiting",o),i.addEventListener("externalwaiting",o)}i.register({immediate:r}).then(o=>{d=o,t==null||t(o)}).catch(o=>{s==null||s(o)})}return u}function H(a){let r,n,e;return n=new w({props:{routes:M}}),{c(){r=P("main"),c(n.$$.fragment),R(r,"class","svelte-yuqfrl")},m(t,s){T(t,r,s),m(n,r,null),e=!0},p:A,i(t){e||(_(n.$$.fragment,t),e=!0)},o(t){f(n.$$.fragment,t),e=!1},d(t){t&&D(r),h(n)}}}function J(a){const{changeThemeType:r}=O("svelte-theme");return(()=>{document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="."&&r()})})(),I(()=>{z({onNeedRefresh(){},onOfflineReady(){}})}),[]}class Q extends v{constructor(r){super();p(this,r,J,H,x,{})}}const X={boxShadow02:"rgba(0, 0, 0, 0.02)",boxShadow12:"rgba(0, 0, 0, 0.12)",authBackgroundLight:"#17b87c",authBackgroundDark:"#01886f",logo:"invert(1)",primary:"black",text:"#000",background:"white",textContrast:"white",border:"#D3D4D5"},Y={boxShadow02:"rgba(255, 255, 255, 0.02)",boxShadow12:"rgba(255, 255, 255, 0.06)",authBackgroundLight:"#4C4D53",authBackgroundDark:"#2A2A2A",logo:"invert(0)",primary:"white",text:"#fff",background:"#000",textContrast:"black",border:"#343536"};function Z(a){let r,n;return r=new Q({}),{c(){c(r.$$.fragment)},m(e,t){m(r,e,t),n=!0},i(e){n||(_(r.$$.fragment,e),n=!0)},o(e){f(r.$$.fragment,e),n=!1},d(e){h(r,e)}}}function ee(a){let r,n;return r=new S({props:{customTheme:{light:X,dark:Y},$$slots:{default:[Z]},$$scope:{ctx:a}}}),{c(){c(r.$$.fragment)},m(e,t){m(r,e,t),n=!0},p(e,[t]){const s={};t&1&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){n||(_(r.$$.fragment,e),n=!0)},o(e){f(r.$$.fragment,e),n=!1},d(e){h(r,e)}}}class te extends v{constructor(r){super();p(this,r,null,ee,x,{})}}new te({target:document.body});

import{f as l,h as u,p as v,j as x}from"./index.c361becf.js";const b=(s,r)=>{const t=[s,...s.ancestors],o=[r,...r.ancestors];return t.find(e=>o.includes(e))},h=(s,r)=>{const t=[s,...s.ancestors],o=[r,...r.ancestors],e=b(s,r),n=t.indexOf(e),c=n?"../".repeat(n):"",i=o.indexOf(e),p=o.slice(0,i).reverse().map(a=>a.name).join("/");return c+p},O={subscribe:(s,r)=>{const{router:t}=u;return l(N,o=>(e,n,c)=>{const i=o(e,n);t.url.push(i)}).subscribe(s,r)}},N={subscribe:(s,r)=>{const{router:t}=u,o=u.fragment.node;return l(t.activeRoute,e=>{const n=t.rootNode.traverse(o.path);return(c,i={})=>{const p=c.startsWith("/")?t.rootNode.path:"",a=n.traverse(p+c);if(!a){console.error("could not find destination node",c);return}const d=b(a,t.rootNode),g="/"+h(d,a),m={...U(a,e),...i},f=v(g,m,e);return t.getExternalUrl(f)}}).subscribe(s,r)}},U=(s,r)=>{const o=[s,...s.ancestors].reverse().map(e=>{var n;return(n=r.allFragments.find(c=>c.node===e||c.node.path===e.path))==null?void 0:n.params});return Object.assign({},...o)},j={subscribe:(s,r)=>l(u.router.params,t=>t).subscribe(s,r)},w={subscribe:(s,r)=>l(u.router.activeRoute,A).subscribe(s,r)},A=s=>S(s.url),S=s=>(r,t,o={})=>{const{recursive:e}={recursive:!0,...o};return r=x(r,t,n=>""),e&&(r=r.replace(/\/index\/?$/,"")),(s+"/").startsWith(r+"/")};export{O as g,w as i,j as p,N as u};

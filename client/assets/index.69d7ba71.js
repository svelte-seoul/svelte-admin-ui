import{f as p,h as u,p as x,j as v}from"./index.bc289d5c.js";const b=(e,s)=>{const r=[e,...e.ancestors],t=[s,...s.ancestors];return r.find(n=>t.includes(n))},h=(e,s)=>{const r=[e,...e.ancestors],t=[s,...s.ancestors],n=b(e,s),o=r.indexOf(n),c=o?"../".repeat(o):"",i=t.indexOf(n),l=t.slice(0,i).reverse().map(a=>a.name).join("/");return c+l},w={subscribe:(e,s)=>{const{router:r}=u;return p(A,t=>(n,o,c)=>{const i=t(n,o);r.url.push(i)}).subscribe(e,s)}},A={subscribe:(e,s)=>{const{router:r}=u,t=u.fragment.node;return p(r.activeRoute,n=>{const o=r.rootNode.traverse(t.path);return(c,i={})=>{const l=c.startsWith("/")?r.rootNode.path:"",a=o.traverse(l+c);if(!a){console.error("could not find destination node",c);return}const d=b(a,r.rootNode),g="/"+h(d,a),f={...N(a,n),...i},m=x(g,f,n);return r.getExternalUrl(m)}}).subscribe(e,s)}},N=(e,s)=>{const t=[e,...e.ancestors].reverse().map(n=>{var o;return(o=s.allFragments.find(c=>c.node===n||c.node.path===n.path))==null?void 0:o.params});return Object.assign({},...t)},O={subscribe:(e,s)=>p(u.router.params,r=>r).subscribe(e,s)},j={subscribe:(e,s)=>p(u.router.activeRoute,S).subscribe(e,s)},S=e=>U(e.url,e.params),U=(e,s={})=>{const r=t=>t.replace(/(\/index)?\/*$/,"");return e=e.replace(/[?#].+/,""),e=r(e),(t,n={},o={})=>{const{recursive:c}={recursive:!0,...o};for(const a of Object.keys(n))if(s[a]!==n[a])return!1;t=v(t,{...s,...n},a=>"",!0),t=r(t);const i=c?"(/|$)":"/?$";return new RegExp(`^${t}${i}`).test(e)}};export{w as g,j as i,O as p,A as u};

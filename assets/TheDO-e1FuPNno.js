import{o as r,c as _,a as e,w as n,T as v,b as h,r as T,d as a,e as l,_ as f,N,f as b,S as C,R as S,u as R,t as k}from"./index-GhYbLKtp.js";const w={class:"blank"},O={class:"toast-container toast-top-right",id:"toastContainer"},V={class:"toast"},B=a("div",{class:"toast-title"},null,-1),g=a("div",{class:"toast-message"},null,-1);function x(o,s,c,t,y,P){const i=l("NavOptions"),p=l("SelectTemplate"),d=l("navbar"),m=l("RouterView");return r(),_("div",w,[e(d,{templateName:"The DO"},{select:n(()=>[e(p,{onTemplateSelected:t.handleTemplateSelect},{default:n(()=>[e(i,{routes:t.childRoutes,"active-path":t.activePath},null,8,["routes","active-path"])]),_:1},8,["onTemplateSelected"])]),default:n(()=>[e(v,{name:"fade",appear:"",mode:"out-in"},{default:n(()=>[(r(),h(T(o.currentTemplate),{"current-template":o.currentTemplate},null,8,["current-template"]))]),_:1})]),_:1}),e(m),a("div",O,[a("div",V,[a("button",{class:"toast-close-button",type:"button",onClick:s[0]||(s[0]=(...u)=>t.toastClose&&t.toastClose(...u))},"x"),B,g])])])}const D={components:{Navbar:N,NavOptions:b,SelectTemplate:C,RouterView:S},setup(){const{handleTemplateSelect:o,childRoutes:s,activePath:c}=R("/the-do/");return{handleTemplateSelect:o,childRoutes:s,activePath:c,toastClose:k}}},j=f(D,[["render",x]]);export{j as default};

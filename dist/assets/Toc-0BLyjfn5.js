import"./markdown-dpzZz7rj.js";import{e as E}from"./useEditorFromTextArea-Vu5XOOF9.js";import{c as H,W}from"./useButtonFunctions-wh9oDudB.js";import{m as b}from"./marked.esm-KKTQJ6Gi.js";import{k as a,c as f,g as h,s as k,a as C,x as j,w as S,F as G,e as L,o as m,d as o,h as _,i as F,v as M,y as x,_ as I,m as R,l as U,z as V}from"./index-5IaAVlBv.js";import{L as z}from"./LoadingSpinner-37cEEam5.js";import{g as A}from"./useMdRendererForAffiliates-tUsb4XoE.js";import"./index-bQRmu1Dj.js";function D(){const n=a(""),e=a(!1),c=a(!1),t=a(""),d=a(""),r={testTube:"🧪",safetyGlasses:"🥽",happy:"🙂",nervous:"😬",sad:"🙁"},i=a(r.safetyGlasses);function l(){window.location.reload()}function s(){H()}return{urlToFetch:n,isLoading:e,tocMarkdown:t,haveToc:c,reset:l,copy:s,error:d,reaction:i,reactions:r}}const J={class:"row"},P={class:"col-xs-12"},q={class:"component__title",style:{display:"flex","justify-content":"space-between","align-items":"baseline"}},K={class:"small",style:{"margin-left":"8px","font-size":"20px","font-weight":"300"}},Q={style:{position:"relative",top:"2px"}},X={key:0,class:"row"},Y={class:"col-xs-12"},Z={class:"form-group"},$=o("label",{for:"urlToFetch"},"Browser version URL",-1),oo={class:"form-group clearfix"},to={key:1,class:"row"},eo={class:"col-xs-12"},so={class:"text-danger bg-danger",style:{padding:"10px"}},no={class:"row"},ao={class:"col-xs-12"},ro={class:"form-group"},io=o("label",{for:"input"},"Table of contents (in Markdown)",-1),lo={key:2,class:"row"},co={class:"col-xs-12"},uo={class:"form-group clearfix",style:{"margin-top":"40px"}},po=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),fo={class:"btn-group pull-right"},ho=o("span",{class:"glyphicon glyphicon-copy"},null,-1),mo={style:{"max-width":"590px",margin:"0 auto","background-color":"#fff"}},_o={id:"rendered"},vo=["innerHTML"];function go(n,e,c,t,d,r){const i=L("loadingSpinner"),l=L("Workspace");return m(),f(G,null,[h(C(i,null,null,512),[[k,t.isLoading]]),C(l,null,j({form:S(()=>[o("div",J,[o("div",P,[o("h1",q,[_("Table of contents"),o("span",K,[_("A little experimental "),o("span",Q,F(t.reaction),1)])])])]),t.haveToc?x("",!0):(m(),f("div",X,[o("div",Y,[o("div",Z,[$,h(o("input",{class:"form-control",id:"urlToFetch","onUpdate:modelValue":e[0]||(e[0]=s=>t.urlToFetch=s)},null,512),[[M,t.urlToFetch]])]),o("div",oo,[o("button",{class:"btn btn-sm btn-default pull-right",onClick:e[1]||(e[1]=(...s)=>t.handleSubmit&&t.handleSubmit(...s))},"Generate TOC")])])])),t.error!=""?(m(),f("div",to,[o("div",eo,[o("p",so,F(t.error),1)])])):x("",!0),h(o("div",no,[o("div",ao,[o("div",ro,[io,h(o("textarea",{class:"form-control",id:"input","onUpdate:modelValue":e[2]||(e[2]=s=>t.input=s)},null,512),[[M,t.input]])])])],512),[[k,t.haveToc]]),t.haveToc?(m(),f("div",lo,[o("div",co,[o("div",uo,[o("button",{class:"btn btn-default",id:"refresh",onClick:e[3]||(e[3]=(...s)=>t.reset&&t.reset(...s))},[po,_(" Reset")]),o("div",fo,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:e[4]||(e[4]=(...s)=>t.copy&&t.copy(...s)),"aria-label":"Copied HTML!"},[ho,_(" Copy HTML")])])])])])):x("",!0)]),_:2},[t.haveToc?{name:"render-container",fn:S(()=>[o("div",mo,[o("div",_o,[o("div",{align:"left",bgcolor:"#ffffff",innerHTML:t.output},null,8,vo)])])]),key:"0"}:void 0]),1024)],64)}const yo={components:{Workspace:W,LoadingSpinner:z},setup(){const n=a("");let e=null;const c=A({forToc:!0});b.use({renderer:c}),b.setOptions({gfm:!0,headerIds:!1});const t=R(()=>b(n.value));function d(){V(()=>{const T=document.getElementById("input");e=E(n,T,"250px")})}function r(){H()}U(d);async function i(){v.value=!0,y.value="",p.value=u.nervous;const T="https://andthatproveswhat.com/roundupper-api/toc";try{const B=await(await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:s.value})})).text();n.value=`${l}
${JSON.parse(B).data.join(`
`)}`,V(()=>{e.setValue(n.value),e.focus(),e.setCursor({line:0,ch:0})}),g.value=!0,u.value=p.testTube}catch(w){console.error(w),u.value=p.sad,g.value=!1,y.value="Error fetching TOC"}finally{v.value=!1}}const l="### Table of contents",{urlToFetch:s,isLoading:v,tocMarkdown:N,haveToc:g,reset:O,error:y,reaction:u,reactions:p}=D();return{urlToFetch:s,handleSubmit:i,isLoading:v,tocMarkdown:N,input:n,haveToc:g,output:t,reset:O,copy:r,error:y,reaction:u,reactions:p}}},Fo=I(yo,[["render",go]]);export{Fo as default};

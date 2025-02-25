import{W as z,c as D,a as H}from"./useButtonFunctions-wh9oDudB.js";import{u as M}from"./renderer-aoa-general-XCabv4nG.js";import{c as R}from"./markdown-dpzZz7rj.js";import{m as h}from"./marked.esm-KKTQJ6Gi.js";import{C as w}from"./styles-base-aoa-general-_fm_AVFK.js";import{b as W,w as U,e as B,o as l,c as i,p as L,F as u,d as t,h as _,y as g,g as m,v as b,_ as F,k as N,l as j,m as O,z as G}from"./index-5IaAVlBv.js";const K=t("h1",{class:"component__title"},"Icon list",-1),S={key:0,class:"item-group"},X=["onClick"],q={class:"form-group"},J=["for"],P=["id","onUpdate:modelValue"],Q={class:"form-group"},Y=["for"],Z=["id","onUpdate:modelValue"],$={class:"form-group"},tt=["for"],et=["id","onUpdate:modelValue"],ot={class:"form-group clearfix"},nt={class:"form-group clearfix",style:{"margin-top":"40px"}},lt=t("span",{class:"glyphicon glyphicon-refresh"},null,-1),it={class:"btn-group pull-right"},st=t("span",{class:"glyphicon glyphicon-copy"},null,-1),rt={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0"}},dt={id:"rendered"},at={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"},"data-id":"block"},ct={key:0},pt={style:{direction:"ltr","font-size":"0px",padding:"0 36px 24px 36px","text-align":"center"}},ut={class:"mj-column-per-25 mj-outlook-group-fix",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},ft={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},ht={align:"center",style:{"font-size":"0px",padding:"0 25px 10px 0","word-break":"break-word"}},_t={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},gt={style:{width:"100px"}},mt=["href"],bt=["src"],xt=["src"],yt={class:"mj-column-per-75 mj-outlook-group-fix",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},kt={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},vt={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},wt=["innerHTML"];function Ut(x,s,y,n,f,k){const a=B("Workspace");return l(),W(a,null,{form:U(()=>[K,(l(!0),i(u,null,L(n.items,(e,d)=>(l(),i(u,null,[e.enabled?(l(),i("div",S,[t("h4",null,[_("Icon list item "),n.numEnabled>1?(l(),i("span",{key:0,class:"delete pull-right",onClick:r=>n.handleDelete(e)},"✕",8,X)):g("",!0)]),t("div",q,[t("label",{for:"imageUrl-"+e.id},"Icon image URL",8,J),m(t("input",{class:"form-control",type:"text",id:"imageUrl-"+e.id,"onUpdate:modelValue":r=>e.imageUrl=r},null,8,P),[[b,e.imageUrl]])]),t("div",Q,[t("label",{for:"iconLink-"+e.id},"Icon link (optional)",8,Y),m(t("input",{class:"form-control",type:"text",id:"iconLink-"+e.id,"onUpdate:modelValue":r=>e.iconLink=r},null,8,Z),[[b,e.iconLink]])]),t("div",$,[t("label",{for:"input-"+e.id},"Text (in Markdown)",8,tt),m(t("textarea",{class:"form-control",id:"input-"+e.id,"onUpdate:modelValue":r=>e.input=r,rows:"4"},null,8,et),[[b,e.input]])])])):g("",!0)],64))),256)),t("div",ot,[t("button",{class:"btn btn-sm btn-default pull-right",onClick:s[0]||(s[0]=(...e)=>n.handleAdd&&n.handleAdd(...e))},"Add item")]),t("div",nt,[t("button",{class:"btn btn-default",id:"refresh",onClick:s[1]||(s[1]=(...e)=>n.reset&&n.reset(...e))},[lt,_(" Reset")]),t("div",it,[t("button",{class:"btn btn-primary",id:"copyHtml",onClick:s[2]||(s[2]=(...e)=>n.copy&&n.copy(...e)),"aria-label":"Copied HTML!"},[st,_(" Copy HTML")])])])]),"render-container":U(()=>[t("div",rt,[t("div",dt,[t("table",at,[t("tbody",null,[(l(!0),i(u,null,L(n.items,e=>(l(),i(u,null,[e.enabled?(l(),i("tr",ct,[t("td",pt,[t("div",ut,[t("table",ft,[t("tbody",null,[t("tr",null,[t("td",ht,[t("table",_t,[t("tbody",null,[t("tr",null,[t("td",gt,[e.iconLink!=""?(l(),i("a",{key:0,href:e.iconLink,style:{"text-decoration":"none"}},[t("img",{src:e.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:"100",height:"auto"},null,8,bt)],8,mt)):(l(),i("img",{key:1,src:e.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:"100",height:"auto"},null,8,xt))])])])])])])])])]),t("div",yt,[t("table",kt,[t("tbody",null,[t("tr",null,[t("td",vt,[t("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:e.output},null,8,wt)])])])])])])])):g("",!0)],64))),256))])])])])]),_:1})}const Lt={components:{Workspace:z},props:["currentTemplate"],setup(x){const s=w.DEFAULT_HEADER_URL,y=w.DEFAULT_TEXT_MARKDOWN,{renderer:n}=M();let f=0;function k(){const o=f;return f++,o}function a(){const o=k();return{imageUrl:s,iconLink:"",input:y,enabled:!0,id:o,get output(){return h(this.input)}}}function e(){const o=a(),p=a(),c=a();return[o,p,c]}const d=N(e());h.use({renderer:n}),h.setOptions({gfm:!0,headerIds:!1});const r=()=>{window.location.reload()};function T(){D()}function I(){H()}function v(o){const p=document.getElementById(`input-${o.id}`),c=R.fromTextArea(p,{mode:"markdown",lineWrapping:!0});return c.setSize("100%","80px"),c.on("change",()=>{o.input=c.getValue()}),c}function C(){d.value.map(v)}j(C);function E(o){o.enabled=!1}function A(){const o=a();d.value.push(o),G(()=>{const p=d.value[d.value.length-1];v(p)})}const V=O(()=>d.value.filter(o=>o.enabled===!0).length);return{items:d,props:x,reset:r,copy:T,copyTextVersion:I,handleDelete:E,handleAdd:A,numEnabled:V}}},zt=F(Lt,[["render",Ut]]);export{zt as default};

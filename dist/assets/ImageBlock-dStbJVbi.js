import{W as D,c as O,a as j}from"./useButtonFunctions-MyEgoPSf.js";import{b as q,w as N,e as J,o as S,d as e,g as v,v as V,n as X,c as I,p as G,F as K,s as M,h as W,x as A,i as R,y as P,_ as Q,k as p,m as U,q as F}from"./index-DrzaSmHg.js";import{r as Y,t as H,a as Z}from"./toNumber-vM6Efxel.js";var z=function(){return Y.Date.now()},$="Expected a function",ee=Math.max,te=Math.min;function oe(y,n,a){var o,r,c,i,t,d,m=0,s=!1,f=!1,_=!0;if(typeof y!="function")throw new TypeError($);n=H(n)||0,Z(a)&&(s=!!a.leading,f="maxWait"in a,c=f?ee(H(a.maxWait)||0,n):c,_="trailing"in a?!!a.trailing:_);function x(l){var u=o,b=r;return o=r=void 0,m=l,i=y.apply(b,u),i}function B(l){return m=l,t=setTimeout(h,n),s?x(l):i}function C(l){var u=l-d,b=l-m,E=n-u;return f?te(E,c-b):E}function k(l){var u=l-d,b=l-m;return d===void 0||u>=n||u<0||f&&b>=c}function h(){var l=z();if(k(l))return w(l);t=setTimeout(h,C(l))}function w(l){return t=void 0,_&&o?x(l):(o=r=void 0,i)}function g(){t!==void 0&&clearTimeout(t),m=0,o=d=r=t=void 0}function T(){return t===void 0?i:w(z())}function L(){var l=z(),u=k(l);if(o=arguments,r=this,d=l,u){if(t===void 0)return B(d);if(f)return clearTimeout(t),t=setTimeout(h,n),x(d)}return t===void 0&&(t=setTimeout(h,n)),i}return L.cancel=g,L.flush=T,L}const ne=e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("h1",{class:"component__title"},"Image block")])],-1),le={class:"row",slot:"form"},ie={class:"col-xs-12"},se={class:"form-group"},ae=e("label",{for:"text"},"Image URL",-1),re={class:"row"},de={class:"col-xs-6"},ce={class:"form-group"},pe=e("label",{for:"align"},"Alignment",-1),ue=["value"],me={class:"col-xs-6"},fe={class:"form-group",style:{"margin-bottom":"0"}},ge=e("label",{for:"displayWidth"},"Display width (in pixels)",-1),ve=e("p",{class:"help-block"},"Full-width: 528px",-1),he={class:"row"},_e={class:"col-xs-12"},xe={slot:"form"},be={class:"form-group"},ye=e("label",{for:"caption"},"Caption",-1),ke={class:"row"},we={class:"col-xs-12"},Te={class:"form-group"},Se={class:"checkbox-inline"},We={class:"checkbox-inline pull-right"},Ae={class:"row"},Ue={class:"col-xs-12"},Be={class:"form-group clearfix",style:{"margin-top":"40px"}},Ce={class:"btn-group pull-right"},Le=e("span",{class:"glyphicon glyphicon-copy"},null,-1),Ve={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0","box-sizing":"content-box"}},Ie={id:"rendered"},Me={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},ze={class:"mj-column-per-100 mj-outlook-group-fix",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Ee={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},Ne=["align"],Re={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},Fe=["src","width"],He={key:0},De=["align"];function Oe(y,n,a,o,r,c){const i=J("Workspace");return S(),q(i,null,{form:N(()=>[ne,e("div",le,[e("div",ie,[e("div",se,[ae,v(e("input",{class:"form-control",type:"text",id:"imageUrl","onUpdate:modelValue":n[0]||(n[0]=t=>o.imageUrl=t)},null,512),[[V,o.imageUrl]])])])]),e("div",re,[e("div",de,[e("div",ce,[pe,v(e("select",{class:"form-control",id:"align","onUpdate:modelValue":n[1]||(n[1]=t=>o.selectedAlign=t)},[(S(!0),I(K,null,G(o.alignOptions,t=>(S(),I("option",{value:t.value},R(t.text),9,ue))),256))],512),[[X,o.selectedAlign]])])]),e("div",me,[e("div",fe,[ge,v(e("input",{class:"form-control",type:"number",min:"100",max:"600",id:"displayWidth","onUpdate:modelValue":n[2]||(n[2]=t=>o.displayWidth=t)},null,512),[[V,o.displayWidth]]),ve])])]),e("div",he,[e("div",_e,[e("div",xe,[e("div",be,[ye,v(e("input",{class:"form-control",type:"text",id:"caption","onUpdate:modelValue":n[3]||(n[3]=t=>o.caption=t)},null,512),[[V,o.caption]])])])])]),e("div",ke,[e("div",we,[e("div",Te,[e("div",Se,[e("label",null,[v(e("input",{type:"checkbox",name:"spaceAbove","onUpdate:modelValue":n[4]||(n[4]=t=>o.spaceAbove=t)},null,512),[[M,o.spaceAbove]]),W("Space above")]),e("label",null,[v(e("input",{type:"checkbox",name:"spaceBelow","onUpdate:modelValue":n[5]||(n[5]=t=>o.spaceBelow=t)},null,512),[[M,o.spaceBelow]]),W("Space below")])]),e("div",We,[e("label",null,[v(e("input",{type:"checkbox",name:"bleed","onUpdate:modelValue":n[6]||(n[6]=t=>o.bleed=t)},null,512),[[M,o.bleed]]),W("Bleed")])])])])]),e("div",Ae,[e("div",Ue,[e("div",Be,[e("div",Ce,[e("button",{class:"btn btn-primary",id:"copyHtml",onClick:n[7]||(n[7]=(...t)=>o.copy&&o.copy(...t)),"aria-label":"Copied HTML!"},[Le,W(" Copy HTML")])])])])])]),"render-container":N(()=>[e("div",Ve,[e("div",Ie,[e("table",Me,[e("tbody",null,[e("tr",null,[e("td",{style:A(o.spacingStyle)},[e("div",ze,[e("table",Ee,[e("tbody",null,[e("tr",null,[e("td",{class:"pardot-region-type-image",align:o.selectedAlign,style:{"font-size":"0px",padding:"0","word-break":"break-word"}},[e("table",Re,[e("tbody",null,[e("tr",null,[e("td",{style:A({width:o.displayWidthNumber+"px"})},[e("img",{src:o.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:o.displayWidthNumber,height:"auto"},null,8,Fe)],4)])])])],8,Ne)]),o.caption!=""?(S(),I("tr",He,[e("td",{align:o.selectedAlign,style:A(o.captionTdStyle)},[e("div",{style:A(o.captionStyle)},R(o.caption),5)],12,De)])):P("",!0)])])])],4)])])])])])]),_:1})}const je={components:{Workspace:D},props:["currentTemplate"],setup(y){const n="https://resources.osteopathic.org/l/979203/2024-02-08/d3kmr/979203/1707396067as5M6Jke/ph_250sq.png",a=p(n),o=p([{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]),r=p("center"),c=p(!0),i=p(!0),t=p(!1),d=p("Lorem ipsum dolor"),m=p(""),s=p(253),f=()=>{a.value=n,r.value="center",c.value=!0,i.value=!0,d.value="Lorem ipsum dolor",s.value=253,t.value=!1};function _(){O()}function x(){j()}const B=U(()=>({paddingTop:c.value?"24px":"0",paddingRight:t.value?"0":"36px",paddingBottom:i.value?"24px":"0",paddingLeft:t.value?"0":"36px",direction:"ltr",fontSize:"0px",textAlign:"center"})),C=U(()=>({fontSize:"0px",paddingTop:"8px",paddingLeft:t.value?"36px":"0",paddingRight:t.value?"36px":"0",paddingBottom:"0",wordBreak:"break-word"})),k=U(()=>({fontFamily:"Arial, Helvetica, sans-serif",fontSize:"14px",fontWeight:"normal",lineHeight:"21px",textAlign:r.value,color:"#666666"})),h=U(()=>{const g=/(\d+)/gm,T=`${s.value}`.match(g);return T?T[0]:null});function w(g){t.value?g>600&&(s.value=600):g>528&&(s.value=528)}return F(s,oe(w,250)),F(t,g=>{t.value||s.value>528&&(s.value=528)}),{displayWidth:s,displayWidthNumber:h,bleed:t,altText:m,caption:d,spacingStyle:B,captionStyle:k,captionTdStyle:C,alignOptions:o,imageUrl:a,selectedAlign:r,spaceAbove:c,spaceBelow:i,reset:f,copy:_,copyTextVersion:x}}},Ge=Q(je,[["render",Oe]]);export{Ge as default};

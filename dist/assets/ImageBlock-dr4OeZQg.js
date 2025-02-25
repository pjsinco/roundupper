import{W as O,c as j,a as q}from"./useButtonFunctions-wh9oDudB.js";import{b as J,w as N,e as P,o as y,d as e,g as _,v as B,n as X,c as T,p as G,F as K,A as E,h as W,B as C,i as R,y as Q,_ as Y,k as u,m as I,q as F}from"./index-5IaAVlBv.js";import{r as Z,t as H,a as $}from"./toNumber-vM6Efxel.js";var z=function(){return Z.Date.now()},ee="Expected a function",te=Math.max,oe=Math.min;function ne(S,n,r){var o,d,g,i,t,c,v=0,s=!1,m=!1,k=!0;if(typeof S!="function")throw new TypeError(ee);n=H(n)||0,$(r)&&(s=!!r.leading,m="maxWait"in r,g=m?te(H(r.maxWait)||0,n):g,k="trailing"in r?!!r.trailing:k);function w(l){var p=o,h=d;return o=d=void 0,v=l,i=S.apply(h,p),i}function L(l){return v=l,t=setTimeout(b,n),s?w(l):i}function V(l){var p=l-c,h=l-v,x=n-p;return m?oe(x,g-h):x}function A(l){var p=l-c,h=l-v;return c===void 0||p>=n||p<0||m&&h>=g}function b(){var l=z();if(A(l))return U(l);t=setTimeout(b,V(l))}function U(l){return t=void 0,k&&o?w(l):(o=d=void 0,i)}function M(){t!==void 0&&clearTimeout(t),v=0,o=c=d=t=void 0}function f(){return t===void 0?i:U(z())}function a(){var l=z(),p=A(l);if(o=arguments,d=this,c=l,p){if(t===void 0)return L(c);if(m)return clearTimeout(t),t=setTimeout(b,n),w(c)}return t===void 0&&(t=setTimeout(b,n)),i}return a.cancel=M,a.flush=f,a}const le=e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("h1",{class:"component__title"},"Image block")])],-1),ie={class:"row",slot:"form"},se={class:"col-xs-12"},ae={class:"form-group"},re=e("label",{for:"text"},"Image URL",-1),de={class:"row"},ce={class:"col-xs-6"},pe={class:"form-group"},ue=e("label",{for:"align"},"Alignment",-1),ge=["value"],fe={class:"col-xs-6"},me={class:"form-group",style:{"margin-bottom":"0"}},he=e("label",{for:"displayWidth"},"Display width (in pixels)",-1),_e=e("p",{class:"help-block"},"Full-width: 528px",-1),ve={class:"row"},xe={class:"col-xs-12"},be={class:"form-group"},ye=e("label",{for:"caption"},"Caption",-1),ke={class:"row"},we={class:"col-xs-12"},Te={class:"form-group"},We=e("label",{for:"link"},"Image link (optional)",-1),Se={class:"row"},Ae={class:"col-xs-12"},Ue={class:"form-group"},Be={class:"checkbox-inline"},Ce={class:"checkbox-inline pull-right"},Ie={class:"row"},Le={class:"col-xs-12"},Ve={class:"form-group clearfix",style:{"margin-top":"40px"}},Me=e("span",{class:"glyphicon glyphicon-refresh"},null,-1),Ee={class:"btn-group pull-right"},ze=e("span",{class:"glyphicon glyphicon-copy"},null,-1),Ne={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0","box-sizing":"content-box"}},Re={id:"rendered"},Fe={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},He=e("span",{id:"mso_0"},null,-1),De={class:"mj-column-per-100 mj-outlook-group-fix",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Oe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},je=["align"],qe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},Je=["href"],Pe=["src","width"],Xe=["src","width"],Ge={key:0},Ke=["align"],Qe=e("span",{id:"mso_1"},null,-1);function Ye(S,n,r,o,d,g){const i=P("Workspace");return y(),J(i,null,{form:N(()=>[le,e("div",ie,[e("div",se,[e("div",ae,[re,_(e("input",{class:"form-control",type:"text",id:"imageUrl","onUpdate:modelValue":n[0]||(n[0]=t=>o.imageUrl=t)},null,512),[[B,o.imageUrl]])])])]),e("div",de,[e("div",ce,[e("div",pe,[ue,_(e("select",{class:"form-control",id:"align","onUpdate:modelValue":n[1]||(n[1]=t=>o.selectedAlign=t)},[(y(!0),T(K,null,G(o.alignOptions,t=>(y(),T("option",{value:t.value},R(t.text),9,ge))),256))],512),[[X,o.selectedAlign]])])]),e("div",fe,[e("div",me,[he,_(e("input",{class:"form-control",type:"number",min:"100",max:"600",id:"displayWidth","onUpdate:modelValue":n[2]||(n[2]=t=>o.displayWidth=t)},null,512),[[B,o.displayWidth]]),_e])])]),e("div",ve,[e("div",xe,[e("div",null,[e("div",be,[ye,_(e("input",{class:"form-control",type:"text",id:"caption","onUpdate:modelValue":n[3]||(n[3]=t=>o.caption=t)},null,512),[[B,o.caption]])])])])]),e("div",ke,[e("div",we,[e("div",null,[e("div",Te,[We,_(e("input",{class:"form-control",type:"text",id:"link","onUpdate:modelValue":n[4]||(n[4]=t=>o.link=t)},null,512),[[B,o.link]])])])])]),e("div",Se,[e("div",Ae,[e("div",Ue,[e("div",Be,[e("label",null,[_(e("input",{type:"checkbox",name:"spaceAbove","onUpdate:modelValue":n[5]||(n[5]=t=>o.spaceAbove=t)},null,512),[[E,o.spaceAbove]]),W("Space above")]),e("label",null,[_(e("input",{type:"checkbox",name:"spaceBelow","onUpdate:modelValue":n[6]||(n[6]=t=>o.spaceBelow=t)},null,512),[[E,o.spaceBelow]]),W("Space below")])]),e("div",Ce,[e("label",null,[_(e("input",{type:"checkbox",name:"bleed","onUpdate:modelValue":n[7]||(n[7]=t=>o.bleed=t)},null,512),[[E,o.bleed]]),W("Bleed")])])])])]),e("div",Ie,[e("div",Le,[e("div",Ve,[e("button",{class:"btn btn-default",id:"refresh",onClick:n[8]||(n[8]=(...t)=>o.reset&&o.reset(...t))},[Me,W(" Reset")]),e("div",Ee,[e("button",{class:"btn btn-primary",id:"copyHtml",onClick:n[9]||(n[9]=(...t)=>o.copy&&o.copy(...t)),"aria-label":"Copied HTML!"},[ze,W(" Copy HTML")])])])])])]),"render-container":N(()=>[e("div",Ne,[e("div",Re,[e("table",Fe,[e("tbody",null,[e("tr",null,[e("td",{style:C(o.spacingStyle)},[He,e("div",De,[e("table",Oe,[e("tbody",null,[e("tr",null,[e("td",{class:"pardot-region-type-image",align:o.selectedAlign,style:{"font-size":"0px",padding:"0","word-break":"break-word"}},[e("table",qe,[e("tbody",null,[e("tr",null,[e("td",{style:C({width:o.displayWidthNumber+"px"})},[o.link!=""?(y(),T("a",{key:0,href:o.link,style:{"text-decoration":"none"}},[e("img",{src:o.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:o.displayWidthNumber,height:"auto"},null,8,Pe)],8,Je)):(y(),T("img",{key:1,src:o.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:o.displayWidthNumber,height:"auto"},null,8,Xe))],4)])])])],8,je)]),o.caption!=""?(y(),T("tr",Ge,[e("td",{align:o.selectedAlign,style:C(o.captionTdStyle)},[e("div",{style:C(o.captionStyle)},R(o.caption),5)],12,Ke)])):Q("",!0)])])]),Qe],4)])])])])])]),_:1})}const Ze={components:{Workspace:O},props:["currentTemplate"],setup(S){const n="https://resources.osteopathic.org/l/979203/2024-02-08/d3kmr/979203/1707396067as5M6Jke/ph_250sq.png",r=u(n),o=u([{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]),d=u("center"),g=u(!0),i=u(!0),t=u(!1),c=u("Lorem ipsum dolor"),v=u(""),s=u(253),m=u(""),k=()=>{r.value=n,d.value="center",g.value=!0,i.value=!0,c.value="Lorem ipsum dolor",s.value=253,t.value=!1,m.value=""};function w(){function f(a){const l=['<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:528px;" ><![endif]-->',"<!--[if mso | IE]></td></tr></table><![endif]-->"],p=/<span.?id="mso_\d"><\/span>/gm,h=[...a.matchAll(p)];console.log(`Found ${h.length} targets for ${l.length} replacements`);for(let x=0,D=l.length;x<D;x++)a=a.replace(h[x],l[x]);return a}j(f)}function L(){q()}const V=I(()=>({paddingTop:g.value?"24px":"0",paddingRight:t.value?"0":"36px",paddingBottom:i.value?"24px":"0",paddingLeft:t.value?"0":"36px",direction:"ltr",fontSize:"0px",textAlign:"center"})),A=I(()=>({fontSize:"0px",paddingTop:"8px",paddingLeft:t.value?"36px":"0",paddingRight:t.value?"36px":"0",paddingBottom:"0",wordBreak:"break-word"})),b=I(()=>({fontFamily:"Arial, Helvetica, sans-serif",fontSize:"14px",fontWeight:"normal",lineHeight:"21px",textAlign:d.value,color:"#666666"})),U=I(()=>{const f=/(\d+)/gm,a=`${s.value}`.match(f);return a?a[0]:null});function M(f){t.value?f>600&&(s.value=600):f>528&&(s.value=528)}return F(s,ne(M,250)),F(t,f=>{t.value||s.value>528&&(s.value=528)}),{displayWidth:s,displayWidthNumber:U,bleed:t,altText:v,caption:c,spacingStyle:V,captionStyle:b,captionTdStyle:A,alignOptions:o,imageUrl:r,selectedAlign:d,spaceAbove:g,spaceBelow:i,reset:k,copy:w,copyTextVersion:L,link:m}}},ot=Y(Ze,[["render",Ye]]);export{ot as default};

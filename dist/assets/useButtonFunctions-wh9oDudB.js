import{o as l,c as p,d as c,D as d,_ as m,J as _}from"./index-5IaAVlBv.js";const u={class:"clearfix workspace",id:"workspace"},f={class:"column split-left"},R={class:"form",id:"form"},y={class:"column split-right graph-paper"},T={id:"rendered"},g=c("div",{id:"clone",style:{position:"absolute",top:"-5000px",left:"-5000px"}},null,-1);function I(e,t,o,n,s,i){return l(),p("div",u,[c("div",f,[c("div",R,[d(e.$slots,"form")])]),c("div",y,[d(e.$slots,"render-container",{},()=>[c("div",T,[d(e.$slots,"render")])])]),g])}const O={setup(){return{}}},h=m(O,[["render",I]]),a={PRIMARY_COLOR:"#7d1aba",SECONDARY_COLOR:"#1ccacd",TINT_PRIMARY:"#d8adf4",TINT_PRIMARY_LIGHT:"#fbf6fe",TINT_SECONDARY:"#b6eaed",TINT_SECONDARY_LIGHT:"#eafafb"};function r(e,t="Copied!",o="Ready to paste",n=a.PRIMARY_COLOR){const s=document.getElementById("rendered");s.classList.add("animate__animated","animate__jello"),s.addEventListener("animationend",i=>{i.target.classList.remove("animate__animated","animate__jello")},{once:!0}),_(t,o,n)}function C(e){const t=document.getElementById(e);window.getSelection()&&window.getSelection().collapse(t,0)}function E(){return document.getElementById("rendered").innerHTML}function L(e){document.getElementById("clone").innerText=e}function v(e=t=>t){C("clone");const t=E();let o=e(t);L(o);const n=new ClipboardJS("#copyHtml",{target:function(s){return document.getElementById("clone")}});n.on("success",s=>{r(document.getElementById("copyHtml"),"HTML code copied","The HTML code is copied to your clipboard. Ready to paste!",a.PRIMARY_COLOR),n.destroy()})}function H(e){const t=new ClipboardJS("#copyTextVersion",{text:o=>e});t.on("success",function(o){r(document.getElementById("copyTextVersion"),"Text version copied","The text version is copied to your clipboard. Ready to paste!",a.SECONDARY_COLOR),t.destroy()})}export{h as W,H as a,v as c};

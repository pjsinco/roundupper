import{C as h}from"./renderer-newsletter-pe51VF_h.js";import{k as g,l as f,I as y}from"./index-GhYbLKtp.js";function w(){let i=null,a=null,l=g(!1);const d={attributes:!0,childList:!0,subtree:!0};return f(async()=>{i=document.querySelector("#rendered");async function c(r){return new Promise((u,s)=>{console.log("okinsidepromise"),r.onload=n=>{u(n.currentTarget.naturalWidth)},r.onerror=s},{once:!0})}a=new MutationObserver(async(r,u)=>{r.forEach(async s=>{s.addedNodes.forEach(async n=>{if(typeof n.getElementsByTagName!="function")return;const e=n.getElementsByTagName("img");if(e.length)for(let t=0,m=e.length;t<m;t++){let o;if(e[t].displayWidth=null,e[t].complete)o=e[t].naturalWidth;else try{o=await c(e[t])}catch{l.value=!0;break}console.log("width (should always be a value that isn't 0): ",o),e[t].setAttribute("width",Math.min(o,h.Layout.liveAreaWidth))}})})}),a.observe(i,d)}),y(()=>{a.disconnect()}),{errorAddingImageAttr:l}}export{w as u};

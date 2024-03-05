function a(){return{renderer:{paragraph(t){return`
        <p style="margin: 0 0 0 0;">${t}</p>`},heading(t,e){switch(e){case 1:return`<h1 style="${["margin-bottom: 12px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 20px;","font-weight: bold;","line-height: 28px;","text-align: center","color: #000066;"].join("; ")}">${t}</h1>
`;case 2:return`<h2 style="${["margin-bottom: 12px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 16px;","font-weight: normal","text-align: center;","line-height: 24px;","color: #666666;"].join("; ")}">${t}</h1>
`;case 3:return`<h3 style="${["margin-bottom: 0px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 20px;","font-weight: bold;","line-height: 28px;","text-align: left"].join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${["margin-bottom: 0px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 18px;","font-weight: bold;","line-height: 24px;","text-align: left"].join("; ")}">${t}</h4>
`;case 5:default:return`<h5 style="${["margin-bottom: 0px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 16px;","font-weight: bold;","line-height: 24px;","text-align: left"].join("; ")}">${t}</h5>
`}},link(t,e,n){return`
        <a href="${t}" 
           style="color: #22a49c; font-weight: bold; text-decoration: none;"
           title="${e}">${n}</a>`},list(t,e){const n=["text-align: left","color: #141416","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],l=["color: #141416","margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],i=e?"ol":"ul",o=e?"1":"disc";return console.log("ordered",e),console.log("listType",i),`
        <div class="forOutlooks" pardot-region="unordered_list" style="${n.join("; ")}">
          <${i} 
            class="glist" 
            style="${l.join("; ")}" 
            align="left" 
            type="${o}"
          >
            ${t}</ol>
          <${i}></div>
`}}}}export{a as u};

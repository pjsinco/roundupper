function s(){return{paragraph(t){return`
        <p style="margin: 0 0 0 0;">${t}</p>`},heading(t,e){if(e==1)return`<h1 style="${["margin-bottom: 12px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 20px;","font-weight: bold;","line-height: 28px;","text-align: center","color: #000066;"].join("; ")}">${t}</h1>
`;if(e==2)return`<h2 style="${["margin-bottom: 12px;","margin-top: 0;","font-family: Arial, Helvetica, sans-serif;","font-size: 16px;","font-weight: normal","text-align: center;","line-height: 24px;","color: #666666;"].join("; ")}">${t}</h1>
`},link(t,e,n){return`
        <a href="${t}" 
           style="color: #22a49c; font-weight: bold; text-decoration: none;"
           title="${e}">${n}</a>`},list(t,e){const n=["text-align: left","color: #141416","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],o=["color: #141416","margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],i=e?"ol":"ul",l=e?"1":"disc";return console.log("ordered",e),console.log("listType",i),`
        <div class="forOutlooks" pardot-region="unordered_list" style="${n.join("; ")}">
          <${i} 
            class="glist" 
            style="${o.join("; ")}" 
            align="left" 
            type="${l}"
          >
            ${t}</ol>
          <${i}></div>
`}}}export{s as m};

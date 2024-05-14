function s(){return{paragraph(t){return`
          <p style="${["color: #686d75","font-family: Arial, Helvetica, sans-serif","font-size: 13px","font-weight: normal","line-height: 19.5px","margin: 0 0 0 0"].join("; ")}">${t}`},heading(t,e){const i=["margin-left: 0","margin-right: 0","margin-top: 0","margin-bottom: 6px","font-family: Arial, Helvetica, sans-serif","font-size: 22px","font-weight: normal","line-height: 33px","text-align: left","color: #235685"],n=["margin: 0px 0px 6px 0px","font-family: Arial, Helvetica, sans-serif","font-size: 18px","font-weight: normal","line-height: 24px","text-align: left","color: #235685"];return e==4?`<h4 style="${n.join("; ")}">${t}</h4>
`:`<h3 style="${i.join("; ")}">${t}</h3>
`},image(t,e,i){return`<img src="${t}" alt="${i}" class="img" />`},link(t,e,i){return`
          <a href="${t}" 
             style="color: #22a49c; font-weight: bold; text-decoration: none;"
             title="${e}">${i}</a>`},list(t,e){const i=["text-align: left","color: #141416","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],n=["color: #686d75","font-family: Arial, Helvetica, sans-serif","font-size: 13px","font-weight: normal","line-height: 19.5px","margin: 25px 0 25px 25px","padding: 0"],l=e?"ol":"ul",o=e?"1":"disc";return`
          <div class="forOutlooks" pardot-region="unordered_list" style="${i.join("; ")}">
            <${l} 
              class="glist" 
              style="${n.join("; ")}" 
              align="left" 
              type="${o}"
            >
              ${t}</ol>
            <${l}></div>
`}}}export{s as g};

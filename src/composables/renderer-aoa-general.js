export function useRendererForAoaGeneral() {
  const renderer = {
    paragraph(text) {
      //return `
      //  <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
      return `
        <p style="margin: 0 0 0 0;">${text}</p>`;
    },

    heading(text, level) {
      switch (level) {
        case 1:
          const h1Styles = [
            'margin-bottom: 12px;',
            'margin-top: 0;',
            'font-family: Arial, Helvetica, sans-serif;',
            'font-size: 20px;',
            'font-weight: bold;',
            'line-height: 28px;',
            'text-align: center',
            'color: #000066;',
          ];
          return `<h1 style="${h1Styles.join('; ')}">${text}</h1>\n`;
          break;

        case 2:
          const h2Styles = [
            'margin-bottom: 12px;',
            'margin-top: 0;',
            'font-family: Arial, Helvetica, sans-serif;',
            'font-size: 16px;',
            'font-weight: normal',
            'text-align: center;',
            'line-height: 24px;',
            'color: #666666;',
          ];
          return `<h2 style="${h2Styles.join('; ')}">${text}</h1>\n`;
          break;

        case 3:
          const h3Styles = [
            'margin-bottom: 0px;',
            'margin-top: 0;',
            'font-family: Arial, Helvetica, sans-serif;',
            'font-size: 20px;',
            'font-weight: bold;',
            'line-height: 28px;',
            'text-align: left',
          ];
          return `<h4 style="${h3Styles.join('; ')}">${text}</h4>\n`;
          break;

        case 4:
          const h4Styles = [
            'margin-bottom: 0px;',
            'margin-top: 0;',
            'font-family: Arial, Helvetica, sans-serif;',
            'font-size: 18px;',
            'font-weight: bold;',
            'line-height: 24px;',
            'text-align: left',
          ];
          return `<h4 style="${h4Styles.join('; ')}">${text}</h4>\n`;
          break;

        case 5:
        default:
          const h5Styles = [
            'margin-bottom: 0px;',
            'margin-top: 0;',
            'font-family: Arial, Helvetica, sans-serif;',
            'font-size: 16px;',
            'font-weight: bold;',
            'line-height: 24px;',
            'text-align: left',
          ];
          return `<h5 style="${h5Styles.join('; ')}">${text}</h5>\n`;
          break;
      }
    },

    link(href, title, text) {
      return `
        <a href="${href}" 
           style="color: #22a49c; font-weight: bold; text-decoration: none;"
           title="${title}">${text}</a>`;
    },

    list(body, ordered) {
      const divStyles = [
        'text-align: left',
        'color: #141416',
        'margin: 0',
        'padding: 0',
        'font-family: Arial, sans-serif',
        'font-size: 16px',
        'font-weight: normal',
        'line-height: 24px',
      ];

      const listStyles = [
        'color: #141416',
        'margin: 25px 0 25px 25px',
        'padding: 0',
        'font-family: Arial, sans-serif',
        'font-size: 16px',
        'line-height: 24p',
      ];

      const listType = ordered ? 'ol' : 'ul';
      const listStyleType = ordered ? '1' : 'disc';
      console.log('ordered', ordered);
      console.log('listType', listType);

      return `
        <div class="forOutlooks" pardot-region="unordered_list" style="${divStyles.join('; ')}">
          <${listType} 
            class="glist" 
            style="${listStyles.join('; ')}" 
            align="left" 
            type="${listStyleType}"
          >
            ${body}</ol>
          <${listType}></div>\n`;
    },
  };

  return { renderer };
}

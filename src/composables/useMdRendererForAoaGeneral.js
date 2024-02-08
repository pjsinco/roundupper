export function mdRendererForAoaGeneral() {
  const renderer = {
    paragraph(text) {
      //return `
      //  <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
      return `
        <p style="margin: 0 0 0 0;">${text}</p>`;
    },

    heading(text, level) {
      if (level == 1) {
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
      } else if (level == 2) {
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
      }

      // ignore other levels for now
      return;
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

  return renderer;
}

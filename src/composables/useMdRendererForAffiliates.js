export function getRenderer() {
  const renderer = {
    paragraph(text) {
      const pStyles = [
        'color: #686d75',
        'font-family: Arial, Helvetica, sans-serif',
        'font-size: 13px',
        'font-weight: normal',
        'line-height: 19.5px',
        'margin: 0 0 0 0',
      ];
      return `
          <p style="${pStyles.join('; ')}">${text}`;
    },

    heading(text, level) {
      const h3styles = [
        'margin-left: 0',
        'margin-right: 0',
        'margin-top: 0',
        'margin-bottom: 6px',
        'font-family: Arial, Helvetica, sans-serif',
        'font-size: 22px',
        'font-weight: normal',
        'line-height: 33px',
        'text-align: left',
        'color: #235685',
      ];

      return `<h3 style="${h3styles.join('; ')}">${text}</h3>\n`;
    },

    image(href, title, text) {
      return `<img src="${href}" alt="${text}" class="img" />`;
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
        'color: #686d75',
        'font-family: Arial, Helvetica, sans-serif',
        'font-size: 13px',
        'font-weight: normal',
        'line-height: 19.5px',
        'margin: 25px 0 25px 25px',
        'padding: 0',
      ];

      const listType = ordered ? 'ol' : 'ul';
      const listStyleType = ordered ? '1' : 'disc';

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

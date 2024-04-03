import Constants from '@/constants/newsletter';
import { useAoaGeneralRenders } from '@/composables/styles-base-aoa-general';

/**
 * Here we wrap-up (mostly) already-existing styles for
 * use in the newsletter template.
 *
 */
export function useRendererForNewsletter() {
  const { paragraph, list } = useAoaGeneralRenders();

  const renderer = {
    paragraph,
    list,

    link(href, title, text) {
      const linkStyle = Constants.Styles.LINK_STYLE;
      return `
        <a href="${href}" 
           style="${linkStyle.join('; ')}"
           title="${title}">${text}</a>`;
    },

    heading(text, level) {
      switch (level) {
        case 1:
          const h1Style = Constants.Styles.H1_STYLE;
          return `<h1 style="${h1Style.join('; ')}">${text}</h1>\n`;
          break;

        case 2:
          const h2Style = Constants.Styles.H2_STYLE;
          return `<h2 style="${h2Style.join('; ')}">${text}</h1>\n`;
          break;

        case 3:
          const h3Style = Constants.Styles.H3_STYLE;
          return `<h3 style="${h3Style.join('; ')}">${text}</h3>\n`;
          break;

        case 4:
          const h4Style = Constants.Styles.H4_STYLE;
          return `<h4 style="${h4Style.join('; ')}">${text}</h4>\n`;
          break;

        case 5:
        default:
          const h5Style = Constants.Styles.H5_STYLE;
          return `<h5 style="${h5Style.join('; ')}">${text}</h5>\n`;
          break;
      }
    },

    image(href, title, text) {
      return `
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
          <tr>
            <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                <tr>
                  <td class="td-image-parent" style="width: 100%">
                    <img src="${href}" style="max-width: 528px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" height="auto" title=${title} alt="${text}" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`;
    },
  };

  return { renderer };
}

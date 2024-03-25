import { base } from '@/constants/master-styles';
import aoaStyles from '@/constants/aoa-general/styles';
const { P_STYLE, H1_STYLE, LINK_STYLE } = aoaStyles;

const defaultHeadlineStyle = [
  'margin-bottom: 0px',
  'margin-top: 0',
  `font-family: ${base.fontFamily}`,
  'font-size: 18px',
  'font-weight: bold',
  'line-height: 25.2px',
  'text-align: left',
  `color: ${base.colors.headline}`,
];

export default {
  P_STYLE,
  H1_STYLE,
  LINK_STYLE,
  H2_STYLE: defaultHeadlineStyle,
  H3_STYLE: defaultHeadlineStyle,
  H4_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamily}`,
    'font-size: 16px',
    'font-weight: bold',
    'line-height: 24px',
    'text-align: left',
    `color: ${base.colors.headline}`,
  ],
  H5_STYLE: defaultHeadlineStyle,
};

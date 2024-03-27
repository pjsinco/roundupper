import { base } from '@/constants/master-styles';

export default {
  P_STYLE: ['margin: 0 0 0 0'],

  H1_STYLE: [
    `margin-bottom: ${base.halfLineDrop}`,
    'margin-top: 0',
    `font-family: ${base.fontFamily}`,
    'font-size: 20px',
    'font-weight: bold',
    'line-height: 28px',
    'text-align: center',
    `color: ${base.colors.headline}`,
  ],

  H2_STYLE: [
    `margin-bottom: ${base.halfLineDrop}`,
    'margin-top: 0',
    `font-family: ${base.fontFamily}`,
    'font-size: 18px',
    'font-weight: normal',
    'text-align: center',
    'line-height: 24px',
    `color: ${base.colors.text}`,
  ],

  H3_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamily}`,
    'font-size: 20px',
    'font-weight: bold',
    'line-height: 28px',
    'text-align: left',
  ],

  H4_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamily}`,
    'font-size: 18px',
    'font-weight: bold',
    'line-height: 24px',
    'text-align: left',
  ],

  H5_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamily}`,
    'font-size: 16px',
    'font-weight: bold',
    'line-height: 24px',
    'text-align: left',
  ],

  LINK_STYLE: [
    `color: ${base.colors.link}`,
    'font-weight: bold',
    'text-decoration: none',
  ],
};

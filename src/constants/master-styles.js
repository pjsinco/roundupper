const colors = {
  black: '#2a2a2a',
  navy: '#000066',
  teal: '#22a49c',
  seaSerpent: '#11c7eb',
  warm: '#f9f7f5',
  grey: '#f5f5f5',
  lightGrey: '#eee',
  lighterGrey: '#f8f8f8',
};

const spacing = {
  unit: 24,
};

//const base = {
//  lineDrop: `${spacing.unit}px`,
//  halfLineDrop: `${spacing.unit / 2}px`,
//  fontFamily: 'Arial, Helvetica, sans-serif',
//  colors: {
//    headline: colors.navy,
//    text: colors.black,
//    link: colors.teal,
//    background: colors.warm,
//  },
//};

export const base = {
  lineDrop: `${spacing.unit}px`,
  halfLineDrop: `${spacing.unit / 2}px`,
  fontFamily: 'Arial, Helvetica, sans-serif',
  layout: {
    fullWidth: 600,
    liveAreaWidth: 528,
  },
  colors: {
    headline: colors.navy,
    text: colors.black,
    link: colors.teal,
    background: colors.warm,
    primary: colors.navy,
    secondary: colors.teal,
    accent: colors.seaSerpent,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    lighterGrey: colors.lighterGrey,
  },
};

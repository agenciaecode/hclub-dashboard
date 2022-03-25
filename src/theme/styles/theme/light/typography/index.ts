import { Typography, Family, LineHeight, Size } from './types';

const family: Family = {
  default: {
    regular: {
      fontFamily: 'Raleway-Regular',
      fontWeight: 400,
      fontStyle: 'normal',
      path: '/fonts/raleway/Raleway-Regular.ttf',
    },
    medium: {
      fontFamily: 'Raleway-Medium',
      fontWeight: 500,
      fontStyle: 'normal',
      path: '/fonts/raleway/Raleway-Medium.ttf',
    },
    bold: {
      fontFamily: 'Raleway-Bold',
      fontWeight: 700,
      fontStyle: 'normal',
      path: '/fonts/raleway/Raleway-Bold.ttf',
    },
  },
};

const size: Size = {
  sm: 1.2, // 12px
  base: 1.6, // 16px
  lg: 2.0, // 20px
  xl: 2.4, // 24px
  '2xl': 3.0, // 30px
  '3xl': 3.4, // 34px
};

const lineHeight: LineHeight = {
  sm: 1.4, // 14px
  base: 1.9, // 19px
  lg: 2.3, // 23px
  xl: 2.8, // 28px
  '2xl': 3.5, // 35px
  '3xl': 4.0, // 40px
};

export const typography: Typography = {
  family,
  size,
  lineHeight,
};

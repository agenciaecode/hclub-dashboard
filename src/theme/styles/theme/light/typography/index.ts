import { Typography, Family, LineHeight, Size } from './types';

const family: Family = {
  default: {
    regular: {
      fontFamily: 'FiraSans-Regular',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    medium: {
      fontFamily: 'FiraSans-Medium',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    semiBold: {
      fontFamily: 'FiraSans-SemiBold',
      fontWeight: 600,
      fontStyle: 'normal',
    },
  },
};

const size: Size = {
  xs: 14, // 14px
  sm: 16, // 16px
  md: 18, // 18px
  lg: 22, // 22px
  xl: 28, // 28px
  '2xs': 12, // 12px
  '2sm': 16, // 16px
  '2md': 20, // 20px
};

const lineHeight: LineHeight = {
  md: 115, // 115px
  xl: 150, // 150px
  '2xs': 12, // 12px
  '2sm': 16, // 16px
  '2md': 20, // 20px
};

export const typography: Typography = {
  family,
  size,
  lineHeight,
};

export default typography;

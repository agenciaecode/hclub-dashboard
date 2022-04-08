import {
  Fonts,
  FontSizes,
  FontWeights,
  LineHeights,
  TypographySizes,
} from './types';

const fonts: Fonts = {
  defaultRegular: 'Raleway-Regular',
  defaultItalic: 'Raleway-Italic',
  defaultMedium: 'Raleway-Medium',
  defaultBold: 'Raleway-Bold',
};

const fontWeights: FontWeights = {
  defaultRegular: 400,
  defaultMedium: 500,
  defaultBold: 700,
};

const typographySizes: TypographySizes = {
  fonts: ['1.2rem', '1.6rem', '2.0rem', '2.4rem', '3.0rem', '3.4rem'],
  lineHeights: ['1.4rem', '1.9rem', '2.3rem', '2.8rem', '3.5rem', '4.0rem'],
};

const fontSizes: FontSizes = {
  sm: typographySizes.fonts[0], // 12px
  base: typographySizes.fonts[1], // 16px
  lg: typographySizes.fonts[2], // 20px
  xl: typographySizes.fonts[3], // 24px
  '2xl': typographySizes.fonts[4], // 30px
  '3xl': typographySizes.fonts[5], // 34px
};

const lineHeights: LineHeights = {
  sm: typographySizes.lineHeights[0], // 14px
  base: typographySizes.lineHeights[1], // 19px
  lg: typographySizes.lineHeights[2], // 23px
  xl: typographySizes.lineHeights[3], // 28px
  '2xl': typographySizes.lineHeights[4], // 35px
  '3xl': typographySizes.lineHeights[5], // 40px
};

export { fonts, fontWeights, fontSizes, lineHeights };

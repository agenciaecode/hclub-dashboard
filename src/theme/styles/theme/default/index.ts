import { colors } from './colors';
import { fonts, fontSizes, fontWeights, lineHeights } from './fonts';
import { DefaultTheme } from './types';

const defaultTheme: DefaultTheme = {
  colors,
  space: {},
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  radii: {
    base: '0.5rem',
  },
  shadows: {
    shadowBlack: colors.black,
    shadowGray: colors.gray,
    shadowRed: '#fe3f6133',
  },
  zIndices: {},
  transitions: {},
};

export { defaultTheme };

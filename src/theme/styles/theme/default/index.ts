import mapValues from 'lodash.mapvalues';
import { breakpoints } from './breakpoints';
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
  radii: {},
  shadows: {},
  zIndices: {},
  transitions: {},
  media: mapValues(breakpoints, breakpoint => `(min-width: ${breakpoint})`),
};

export { defaultTheme };

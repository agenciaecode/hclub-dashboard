import { breakpoints } from '@/theme/styles/theme/default/breakpoints';
import { createStitches } from '@stitches/react';
import mapValues from 'lodash.mapvalues';

import { defaultTheme } from '../../styles/theme';

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config: configTheme,
} = createStitches({
  prefix: 'hclub',
  theme: defaultTheme,
  media: mapValues(breakpoints, breakpoint => `(min-width: ${breakpoint})`),
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  configTheme,
};

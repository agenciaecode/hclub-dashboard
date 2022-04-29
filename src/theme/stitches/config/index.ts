import { createStitches } from '@stitches/react';
import mapValues from 'lodash.mapvalues';

import { defaultTheme } from '../../styles/theme';

import { utils } from '@/theme/styles/theme/default/utils';
import { breakpoints } from '@/theme/styles/theme/default/breakpoints';

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
  utils,
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

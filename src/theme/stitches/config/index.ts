import { createStitches, CSS as StitchesCSS } from '@stitches/react';
import mapValues from 'lodash.mapvalues';

import { breakpoints } from '@/theme/styles/theme/default/breakpoints';
import { utils } from '@/theme/styles/theme/default/utils';

import { defaultTheme } from '../../styles/theme';

export type CSS = StitchesCSS<typeof configTheme>;

const { mobile, ...minBreakpoints } = breakpoints;

const breakpointsMediaQueries = {
  ...mapValues(minBreakpoints, breakpoint => `(min-width: ${breakpoint})`),
  mobile: `(max-width: ${mobile})`,
};

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
  media: breakpointsMediaQueries,
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

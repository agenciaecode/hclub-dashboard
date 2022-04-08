import {
  Auxiliary,
  Background,
  Black,
  Gray,
  Green,
  Primary,
  Red,
  White,
  Text,
  Colors,
  ColorsPalette,
} from './types';

const colorsPalette: ColorsPalette = {
  blacks: ['#000000', '#00000099', '#00000066', '#00000033', '#353535'],
  whites: ['#FFFFFF', '#FAFAFA'],
  grays: ['#C4C4C4', '#E0E0E0'],
  reds: ['#FE3F61'],
  greens: ['#1DC9A0'],
};

const black: Black = {
  base: colorsPalette.blacks[0], // used in everthing everywhere
  light: colorsPalette.blacks[1], // 60% used in progressbar, 'conquistas' background
  lighter: colorsPalette.blacks[2], // 40% used in input placeholder, progressbar, inactive tab text
  scroll: colorsPalette.blacks[3], // used only in custom scrollbar
  hover: colorsPalette.blacks[4], // used only in 'disabled' button
};

const white: White = {
  base: colorsPalette.whites[0], // used in texts and backgrounds
  dark: colorsPalette.whites[1], // used in texts of outlined buttons
};

const gray: Gray = {
  base: colorsPalette.grays[0], // used in separators and progressbar
  light: colorsPalette.grays[1], // used as background of disabled inputs
};

const red: Red = {
  base: colorsPalette.reds[0], // used in input border error and error text
};

const green: Green = {
  base: colorsPalette.greens[0], // used in positive switch
};

const primary: Primary = {
  white: white.base,
  black: black.base,
};

const auxiliary: Auxiliary = {
  negative: red.base,
  positive: green.base,
};

const background: Background = {
  black: black.base,
  white: white.base,
};

const text: Text = {
  black: black.base,
  white: white.base,
};

const colors: Colors = {
  black: black.base,
  blackLight: black.light,
  blackLighter: black.lighter,
  blackScroll: black.scroll,
  blackHover: black.hover,

  white: white.base,
  whiteDark: white.dark,

  gray: gray.base,
  grayLight: gray.light,

  red: red.base,

  green: green.base,

  primaryWhite: primary.white,
  primaryBlack: primary.black,

  auxiliaryNegative: auxiliary.negative,
  auxiliaryPositive: auxiliary.positive,

  backgroundBlack: background.black,
  backgroundWhite: background.white,

  textBlack: text.black,
  textWhite: text.white,
};

export { colors };

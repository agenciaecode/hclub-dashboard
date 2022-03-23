import {
  Colors,
  Palette,
  Neutral,
  Primary,
  Gray,
  Green,
  Teal,
  White,
  Auxiliary,
} from './types';

const white: White = {
  default: '#ffffff',
};

const teal: Teal = {
  default: '#2C91AD',
  dark: '#206A7F',
  light: '#54B8D3',
  soft: '#EEF7FA',
};

const green: Green = {
  default: '#29A152',
  dark: '#1D7246',
  light: '#47D089',
  soft: '#DDF5E4',
};

const gray: Gray = {
  100: '#1D1D26',
  200: '#363A40',
  300: '#4D5766',
  400: '#828C99',
  500: '#A1A8B3',
  600: '#B8C0CC',
  700: '#CAD3E0',
  800: '#EDEFF2',
  900: '#F8FAFD',
};

const palette: Palette = {
  white,
  teal,
  green,
  gray,
};

const auxiliary: Auxiliary = {
  negative: '#E61739',
  warning: '#F27A00',
  informational: teal.default,
};

const primary: Primary = {
  teal: teal.default,
  green: green.default,
  'gray-100': gray[100],
  white: white.default,
};

const neutral: Neutral = {
  100: gray[100],
  300: gray[300],
  700: gray[700],
  900: white.default,
};

export const color: Colors = {
  palette,
  neutral,
  primary,
  auxiliary,
};

export default color;

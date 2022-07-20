import { globalCss } from '../../stitches';

const globalDefaultStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%' /* 10px */,
  },
  body: {
    fontSize: '$base',
    lineHeight: '$base',
    fontFamily: '$defaultRegular',
    color: '$textBlack',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  'ol, ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 0,
    fontSize: '$base',
    lineHeight: '$base',
    cursor: 'pointer',
  },
  '@font-face': [
    {
      fontFamily: 'Raleway-Regular',
      src: 'url("/fonts/raleway/Raleway-Regular.ttf")',
    },
    {
      fontFamily: 'Raleway-italic',
      src: 'url("/fonts/raleway/Raleway-Italic.ttf")',
    },
    {
      fontFamily: 'Raleway-Medium',
      src: 'url("/fonts/raleway/Raleway-Medium.ttf")',
    },
    {
      fontFamily: 'Raleway-Bold',
      src: 'url("/fonts/raleway/Raleway-Bold.ttf")',
    },
  ],
  [`input:-webkit-autofill,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:focus`]: {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },
  '::-webkit-scrollbar': {
    width: '0.9rem',
  },
  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 0.4rem rgba(0, 0, 0, 0.2)',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$blackScroll',
    outline: '1px solid $blackScroll',
    borderRadius: '3.7px',
  },
});

export { globalDefaultStyles };

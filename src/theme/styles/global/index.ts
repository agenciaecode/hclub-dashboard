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
});

export { globalDefaultStyles };

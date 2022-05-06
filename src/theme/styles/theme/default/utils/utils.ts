import { Property } from '@stitches/react/types/css';

export const utils = {
  displayOnlyOnMobile: (value: Property.Display) => ({
    display: value,
    '@desktop': {
      display: 'none',
    },
  }),
  displayOnlyOnDesktop: (value: Property.Display) => ({
    display: 'none',
    '@desktop': {
      display: value,
    },
  }),
};

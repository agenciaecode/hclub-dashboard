import { styled } from '@/theme';

export const Text = styled('span', {
  variants: {
    color: {
      primary: {
        color: '$textBlack',
      },
      secondary: {
        color: '$textWhite',
      },
      negative: {
        color: '$auxiliaryNegative',
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      base: {
        fontSize: '$base',
        lineHeight: '$base',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'base',
  },
});

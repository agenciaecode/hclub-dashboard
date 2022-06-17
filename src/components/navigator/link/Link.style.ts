import { styled } from '@/theme';

export const StyledAnchor = styled('a', {
  textDecoration: 'none',
  variants: {
    color: {
      dark: {
        color: '$textBlack',
      },
      light: {
        color: '$textWhite',
      },
    },
  },
  defaultVariants: { color: 'light' },
});

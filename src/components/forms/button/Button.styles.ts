import { styled } from '@/theme';

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$base',
  border: 'unset',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
  '&:focus, &:active': {
    opacity: 0.65,
  },
  variants: {
    btn: {
      primary: {
        backgroundColor: '$backgroundBlack',
        color: '$textWhite',
        border: 'solid 0.01rem $backgroundBlack',
        '&:hover': {
          opacity: 1,
          backgroundColor: '$blackHover',
          color: '$textWhite',
        },
      },
      secondary: {
        backgroundColor: '$backgroundWhite',
        color: '$textBlack',
        border: 'solid 0.01rem $backgroundBlack',
        '&:hover': {
          backgroundColor: '$backgroundBlack',
          color: '$textWhite',
        },
      },
    },
    size: {
      small: {
        padding: '1.4rem',
      },
      default: {
        padding: '1.5rem 5rem',
      },
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        '&:hover': {
          color: '$white',
        },
      },
      false: {
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
    },
    block: {
      true: {
        width: '100%',
      },
    },
    fillWidthOnMobile: {
      true: {
        width: '100%',
        '@sm': {
          width: 'unset',
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.4,
        pointerEvents: 'none',
      },
    },
  },
  compoundVariants: [
    {
      btn: 'primary',
      outlined: true,
      css: {
        background: '$backgroundBlack',
        borderColor: '$backgroundWhite',
        '&:hover': {
          backgroundColor: '$blackHover',
        },
      },
    },
  ],
  defaultVariants: { btn: 'primary', size: 'default' },
});

import { styled } from '@/theme';

export const StyledButton = styled('button', {
  padding: '1.5rem 5rem',
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
      // success: { backgroundColor: '$green', color: '$white' },
      // info: { backgroundColor: '$teal', color: '$white' },
      // warning: { backgroundColor: '$warning', color: '$white' },
      // danger: { backgroundColor: '$danger', color: '$white' },
      // link: {
      //   backgroundColor: 'transparent',
      //   color: '$teal200',
      //   '&:hover': {
      //     textDecoration: 'underline',
      //   },
      // },
    },
    size: {
      small: {
        padding: '1.4rem',
      },
      // medium: {
      //   height: 48,
      //   width: 216,
      //   fontSize: 14,
      //   fontWeight: 500,
      // },
      // large: {
      //   height: 48,
      //   width: 235,
      //   fontSize: 14,
      //   fontWeight: 500,
      // },
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
    },
    block: {
      true: {
        width: '100%',
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
    // {
    //   btn: 'success',
    //   outlined: true,
    //   css: {
    //     color: '$green',
    //     borderColor: '$green',
    //     '&:hover': {
    //       backgroundColor: '$green',
    //     },
    //   },
    // },
    // {
    //   btn: 'info',
    //   outlined: true,
    //   css: {
    //     color: '$teal',
    //     borderColor: '$teal',
    //     '&:hover': {
    //       backgroundColor: '$teal',
    //     },
    //   },
    // },
    // {
    //   btn: 'warning',
    //   outlined: true,
    //   css: {
    //     color: '$warning',
    //     borderColor: '$warning',
    //     '&:hover': {
    //       backgroundColor: '$warning',
    //     },
    //   },
    // },
    // {
    //   btn: 'danger',
    //   outlined: true,
    //   css: {
    //     color: '$danger',
    //     borderColor: '$danger',
    //     '&:hover': {
    //       backgroundColor: '$danger',
    //     },
    //   },
    // },
    // {
    //   btn: 'secondary',
    //   outlined: true,
    //   css: {
    //     color: '$gray100',
    //     borderColor: '$gray100',
    //     '&:hover': {
    //       backgroundColor: '$gray100',
    //     },
    //   },
    // },
  ],
  defaultVariants: { btn: 'primary' },
});

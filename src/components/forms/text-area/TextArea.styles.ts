import { fixAutofillTransition } from '@utils/styles/fix-autofill-transition';

import { styled } from '@/theme';

const StyledTextArea = styled('textarea', {
  backgroundColor: '$backgroundWhite',
  border: 'solid 1px $primaryBlack',
  color: '$textBlack',
  padding: '15px 16px',
  fontSize: '$base',
  lineHeight: '$base',
  borderRadius: '$base',
  boxShadow: '0 0 0 0.0rem $shadowBlack',
  transition: 'box-shadow ease-in-out 0.15s',
  resize: 'none',
  '&:-webkit-autofill': {
    transition: fixAutofillTransition('box-shadow ease-in-out 0.15s'),
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem $shadowGray',
  },
  '&:disabled, &:read-only': {
    backgroundColor: '$grayLight',
    borderColor: '$gray',
    color: '$blackLighter',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    fontFamily: '$defaultItalic',
    color: '$blackLighter',
  },
  '&::-webkit-scrollbar': {
    width: '0.4rem',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 0.4rem rgba(0, 0, 0, 0.2)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$blackScroll',
    outline: '1px solid $blackScroll',
    borderRadius: '0.37rem',
  },
  variants: {
    hasError: {
      true: {
        borderColor: '$red',
        '&:focus': {
          boxShadow: '0 0 0 0.2rem $shadowRed',
        },
      },
    },
    fill: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: { fill: true },
});

export { StyledTextArea };

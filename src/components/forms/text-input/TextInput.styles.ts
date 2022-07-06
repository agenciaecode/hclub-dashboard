import { fixAutofillTransition } from '@utils/styles/fix-autofill-transition';

import { styled } from '@/theme';

const StyledInputGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$textBlack',
  gap: '0.8rem',
  padding: '0 0.2rem',
  marginBottom: '1rem',
  '& > span:first-child': {
    fontSize: '$sm',
    lineHeight: '$sm',
  },
  '& > input': {
    backgroundColor: '$backgroundWhite',
    border: 'solid 1px $primaryBlack',
    color: '$textBlack',
    padding: '15px 16px',
    fontSize: '$base',
    lineHeight: '$base',
    borderRadius: '$base',
    boxShadow: '0 0 0 0.0rem $shadowBlack',
    transition: 'box-shadow ease-in-out 150ms, background ease-in-out 150ms',
    willChange: 'box-shadow background',
    '&:-webkit-autofill': {
      transition: fixAutofillTransition('box-shadow ease-in-out 150ms'),
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
  },
  variants: {
    hasError: {
      true: {
        '& > input': {
          borderColor: '$red',
          '&:focus': {
            boxShadow: '0 0 0 0.2rem $shadowRed',
          },
        },
      },
    },
  },
});

export { StyledInputGroup };

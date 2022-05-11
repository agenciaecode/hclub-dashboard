import { styled } from '@/theme';
import { fixAutofillTransition } from '@utils/styles/fix-autofill-transition';

const StyledInputGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$textBlack',
  gap: '0.8rem',
  padding: '0 0.2rem',
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
    transition: fixAutofillTransition('box-shadow ease-in-out 0.15s'),
    '&:focus': {
      boxShadow: '0 0 0 0.2rem $shadowGray',
    },
    '&:disabled, &:read-only': {
      backgroundColor: '$grayLight',
      borderColor: '$gray',
      color: '$blackLighter',
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

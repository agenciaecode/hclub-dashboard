import { styled } from '@/theme';

const StyledInputGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$textBlack',
  gap: '0.8rem',
  padding: '0 0.2rem',
  '& > label:first-child': {
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
    transition: 'box-shadow ease-in-out 0.15s',
    '&:focus': {
      boxShadow: '0 0 0 0.2rem $shadowGray',
    },
    '&:disabled': {
      backgroundColor: '$grayLight',
      borderColor: '$gray',
    },
    '&::placeholder': {
      fontFamily: '$defaultItalic',
      color: '$blackLighter',
    },
    '& + label': {
      color: '$red',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      '& svg path': {
        fill: '$red',
      },
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

import { styled } from '@/theme';

const StyledFormInputsSections = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.4rem',
});

const StyledForgotPasswordContainer = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  marginBottom: '2.5rem',
  '& > button': {
    fontSize: '$sm',
    lineHeight: '$sm',
    cursor: 'pointer',
  },
});

const StyledRegisterButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  '& > a, > button ': {
    textDecoration: 'none',
    color: '$textBlack',
    fontSize: '$sm',
    lineHeight: '$sm',
  },
});

export {
  StyledFormInputsSections,
  StyledRegisterButtonContainer,
  StyledForgotPasswordContainer,
};

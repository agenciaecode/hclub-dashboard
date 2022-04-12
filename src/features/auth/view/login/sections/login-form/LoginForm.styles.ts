import { styled } from '@/theme';

const StyledLoginHeader = styled('header', {
  padding: '14rem 0 6rem',
  display: 'flex',
  justifyContent: 'center',
  '@desktop': {
    display: 'block',
    padding: '4rem 4rem 0',
  },
  '& figure': {
    position: 'relative',
    width: '14rem',
    height: '14rem',
    '@desktop': {
      width: '7.5rem',
      height: '7.5rem',
    },
  },
});

const StyledLoginContentSection = styled('section', {
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  padding: '0 3.2rem',
  '@desktop': {
    padding: '0 0 0 12rem',
  },
});

const StyledLoginArticle = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '3.8rem',
});

const StyledFormHeader = styled('header', {
  display: 'none',
  '@desktop': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    '& > h1': {
      fontSize: '$2xl',
      lineHeight: '$2xl',
      fontWeight: '$defaultRegular',
    },
    '& > h3': {
      fontSize: '$base',
      lineHeight: '$base',
      fontWeight: '$defaultRegular',
    },
  },
});

const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

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
  '& > a': {
    textDecoration: 'none',
    color: '$textBlack',
    fontSize: '$sm',
    lineHeight: '$sm',
  },
});

export {
  StyledLoginHeader,
  StyledLoginContentSection,
  StyledLoginArticle,
  StyledFormHeader,
  StyledForm,
  StyledFormInputsSections,
  StyledRegisterButtonContainer,
  StyledForgotPasswordContainer,
};

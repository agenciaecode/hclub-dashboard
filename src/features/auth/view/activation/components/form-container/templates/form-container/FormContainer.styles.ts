import { styled } from '@/theme';

const StyledContentHeader = styled('header', {
  padding: '10rem 0 6rem',
  display: 'flex',
  justifyContent: 'center',
  '@desktop': {
    display: 'block',
    padding: '4rem 4rem 0',
  },
});

const StyledContentSection = styled('section', {
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  padding: '0 3.2rem 3rem',
  '@desktop': {
    padding: '0 0 3rem 12rem',
  },
});

const StyledFormArticle = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '4rem',
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
    '& > h2': {
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

export {
  StyledContentHeader,
  StyledContentSection,
  StyledFormArticle,
  StyledFormHeader,
  StyledForm,
};

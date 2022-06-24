import { styled } from '@/theme';

const StyledContentHeader = styled('header', {
  padding: '3.2rem 2rem 2rem',
  '@desktop': {
    display: 'block',
    padding: '4rem 4rem 0',
  },
});

const StyledContentSection = styled('section', {
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 3.2rem 3rem',
  '@desktop': {
    padding: '0 3.2rem 3rem',
  },
});

const StyledFormArticle = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '4rem',
  maxWidth: '60.2rem',
});

const StyledFormHeader = styled('header', {
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

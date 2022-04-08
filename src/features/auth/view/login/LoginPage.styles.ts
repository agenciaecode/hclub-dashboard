import Image from 'next/image';

import { Footer } from '@components/layout/footer';

import { styled } from '@/theme';

const StyledMain = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: '1fr auto',
  '@desktop': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
});

const StyledLoginSection = styled('section', {
  backgroundColor: '$backgroundWhite',
  color: '$textBlack',
  display: 'flex',
  flexDirection: 'column',
  '& > header': {
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
  },
  '& > section': {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    padding: '0 3.2rem',
    '@desktop': {
      padding: '0 0 0 12rem',
    },
  },
});

const StyledLoginArticle = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '3.8rem',
});

const StyledLoginHeader = styled('header', {
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

const StyledFormSection = styled('section', {
  '& > form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
    '& > section': {
      display: 'flex',
      flexDirection: 'column',
      gap: '3.4rem',
    },
  },
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

const StyledSplashSection = styled('section', {
  background:
    'linear-gradient(to right, $backgroundWhite 32%, $backgroundBlack 32%)',
  color: '$textWhite',
  display: 'none',
  gridRow: 'span 2 / span 2',
  '@desktop': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& > span': {
    maxWidth: 'min(70%, 57rem) !important',
    minWidth: '40rem',
  },
});

const StyledFooter = styled(Footer, {
  padding: '4rem',
  '@desktop': {
    padding: '4rem 0 4rem 12rem',
  },
});

const StyledImage = styled(Image, {
  transform: 'rotate(-45deg)',
});

export {
  StyledMain,
  StyledLoginSection,
  StyledLoginArticle,
  StyledLoginHeader,
  StyledFormSection,
  StyledForgotPasswordContainer,
  StyledRegisterButtonContainer,
  StyledSplashSection,
  StyledFooter,
  StyledImage,
};

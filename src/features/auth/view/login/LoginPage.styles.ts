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

const StyledContentSection = styled('section', {
  backgroundColor: '$backgroundWhite',
  color: '$textBlack',
  display: 'flex',
  flexDirection: 'column',
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
  StyledContentSection,
  StyledSplashSection,
  StyledFooter,
  StyledImage,
};

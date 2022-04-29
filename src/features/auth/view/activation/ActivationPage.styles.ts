import { Footer } from '@components/layout/footer';

import { styled } from '@/theme';

const StyledMain = styled('main', {
  maxWidth: '100vw',
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
    alignItems: 'center',
  },
  '& > span': {
    left: 'calc(32% - 12.3rem)',
  },
});

const StyledFooter = styled(Footer, {
  padding: '4rem',
  '@desktop': {
    padding: '4rem 0 4rem 12rem',
  },
});

export { StyledMain, StyledContentSection, StyledSplashSection, StyledFooter };

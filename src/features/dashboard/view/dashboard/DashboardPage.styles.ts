import { styled } from '@/theme';

const StyledWrapper = styled('div', {
  minHeight: '100vh',
  color: '$textWhite',
  display: 'grid',
  gridTemplateRows: 'fit-content(100%) auto',
});

const StyledMainContent = styled('main', {
  background: '$backgroundWhite',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@md': {
    padding: '5.4rem 8rem',
  },
});

export { StyledWrapper, StyledMainContent };

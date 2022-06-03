import { styled } from '@/theme';

const StyledWrapper = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  color: '$textWhite',
});

const StyledMainContent = styled('main', {
  background: '$backgroundWhite',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@md': {
    padding: '5.4rem 8rem',
  },
});

export { StyledWrapper, StyledMainContent };

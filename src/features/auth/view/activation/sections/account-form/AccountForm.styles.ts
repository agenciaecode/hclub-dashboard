import { styled } from '@/theme';

const StyledFormInputsSections = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '6.3rem',
  paddingBottom: '4rem',
  gap: '2rem',
  fontSize: '$2xl',
});

const HiddenOnDesktop = styled('div', {
  '@desktop': {
    display: 'none',
  },
});

export { StyledFormInputsSections, StyledHeader, HiddenOnDesktop };

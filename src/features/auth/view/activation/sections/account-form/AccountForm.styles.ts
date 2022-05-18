import { styled } from '@/theme';

const StyledFormInputsSections = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

const StyledFlexRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '0.5rem',
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

export {
  StyledFormInputsSections,
  StyledFlexRow,
  StyledHeader,
  HiddenOnDesktop,
};

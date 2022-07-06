import { styled } from '@/theme';

const StyledHeaderNavbar = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '10rem',
  color: '$black',
});

const StyledRightContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledLeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export { StyledHeaderNavbar, StyledRightContent, StyledLeftContent };

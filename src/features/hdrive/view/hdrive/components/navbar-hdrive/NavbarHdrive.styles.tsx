import { styled } from '@/theme';

const StyledNavbarHdrive = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100vw',
  height: '10rem',
  backgroundColor: '$black',
  color: '$white',
});

const StyledRightContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& button': {
    marginRight: '2rem',
  },
});

const StyledLeftContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '2rem',
  '& button': {
    marginLeft: '2rem',
  },
});

export { StyledNavbarHdrive, StyledRightContent, StyledLeftContent };

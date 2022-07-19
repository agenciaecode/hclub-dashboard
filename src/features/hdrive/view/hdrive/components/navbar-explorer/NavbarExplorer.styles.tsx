import { styled } from '@/theme';

const StyledNavbarExplorer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  width: '100%',
  height: '10rem',
  color: '$black',
  borderBottom: '1px solid rgba(196, 196, 196, 1)',
  '@mobile': {
    height: 'unset',
    borderBottom: 'unset',
    justifyContent: 'space-between',
  },
  '& form': {
    display: 'none',
  },
});

// const StyledRightContent = styled('div', {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

// const StyledLeftContent = styled('div', {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginLeft: '2rem',
//   '& button': {
//     marginLeft: '2rem',
//   },
// });

export { StyledNavbarExplorer };

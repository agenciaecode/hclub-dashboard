import { styled } from '@/theme';

const StyledExplorerFileItem = styled('tr', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '12.4rem',
  borderBottom: '1px solid rgba(196, 196, 196, 1)',
});

const StyledExplorerTd = styled('td', {
  display: 'flex',
  alignItems: 'center',
  color: 'rgba(0, 0, 0, 1)',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '2rem',
  lineHeight: '2.3rem',
  variants: {
    svgSpace: {
      right: {
        '& svg': {
          marginRight: '2.4rem',
        },
      },
      left: {
        '& svg': {
          marginLeft: '2.4rem',
        },
      },
    },
    size: {
      lg: {
        width: '400px',
      },
    },
  },
});

export { StyledExplorerFileItem, StyledExplorerTd };

import { styled } from '@/theme';

const StyledSvgIcon = styled('svg', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  width: '20px',
  height: '20px',
  variants: {
    svgSpace: {
      right: {
        marginRight: '1rem',
      },
      left: {
        marginLeft: '1rem',
      },
    },
  },
});

export { StyledSvgIcon };

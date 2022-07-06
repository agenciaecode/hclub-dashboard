import { styled } from '@/theme';

const StyledHdriveButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  cursor: 'pointer',
  fontFamily: 'Raleway-regular',
  '& svg': {
    marginRight: '2.4rem',
  },
  variants: {
    text: {
      normal: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '2.4rem',
        lineHeight: '2.8rem',
      },
      big: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '3.4rem',
        lineHeight: '4rem',
      },
    },
  },
});

export { StyledHdriveButton };

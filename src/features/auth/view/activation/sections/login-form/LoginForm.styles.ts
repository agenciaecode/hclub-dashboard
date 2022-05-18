import { styled } from '@/theme';

const StyledRegisterButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  '& > a, > button ': {
    textDecoration: 'none',
    color: '$textBlack',
    fontSize: '$sm',
    lineHeight: '$sm',
  },
});

export { StyledRegisterButtonContainer };

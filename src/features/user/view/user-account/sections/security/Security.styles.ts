import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledButton = styled(Button, {
  marginTop: '3.2rem',
  '@md': {
    marginTop: 0,
  },
});

const StyledInputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

const StyledButtonsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '4rem',
  marginTop: '1.6rem',
  '& > button:first-child': {
    fontSize: '$sm',
    lineHeight: '$sm',
    alignSelf: 'center',
  },
});

export { StyledButton, StyledInputWrapper, StyledButtonsWrapper };

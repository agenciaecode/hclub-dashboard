import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const FlexRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flexFlow: 'wrap-reverse',
});

const StyledButton = styled(Button, {
  width: '100%',
  '@sm': {
    width: 'unset',
  },
});

export { FlexRow, StyledButton };

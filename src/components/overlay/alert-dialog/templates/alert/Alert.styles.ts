import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const FlexRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledButton = styled(Button, {
  width: '100%',
  '@sm': {
    width: 'unset',
  },
});

export { FlexRow, StyledButton };

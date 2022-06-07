import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledFeedbackButton = styled(Button, {
  padding: '1.775rem 1.587rem',
});

const FlexRow = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column-reverse',
  '@sm': {
    flexDirection: 'row',
  },
});

export { StyledFeedbackButton, FlexRow };

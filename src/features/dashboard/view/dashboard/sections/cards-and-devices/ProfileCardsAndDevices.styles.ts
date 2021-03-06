import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledSwiperContainer = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(0, 1fr)',
  width: '100%',
  gap: '6rem',
});

const StyledMobileTabsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  marginBottom: '2.5rem',
  '@md': {
    display: 'none',
  },
});

const StyledTabButton = styled(Button, {
  flex: '1 1 0px',
  maxWidth: '18rem',
});

export { StyledSwiperContainer, StyledMobileTabsContainer, StyledTabButton };

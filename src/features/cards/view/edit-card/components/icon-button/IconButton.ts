import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledIconButton = styled(Button, {
  $$buttonSizing: '4.8rem',
  width: '$$buttonSizing',
  height: '$$buttonSizing',
  padding: 0,
  lineHeight: 0,
});

export { StyledIconButton as IconButton };

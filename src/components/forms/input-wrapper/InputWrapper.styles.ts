import { Label } from '@components/forms/label';

import { styled } from '@/theme';

const StyledInputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$textBlack',
  gap: '0.8rem',
  padding: '0 0.2rem',
});

const StyledLabel = styled(Label, {
  fontSize: '$sm',
  lineHeight: '$sm',
});

export { StyledInputWrapper, StyledLabel };

import { Label } from '@components/forms/label';

import { styled } from '@/theme';

export const StyledLabel = styled(Label, {
  color: '$auxiliaryNegative',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  '& svg path': {
    fill: '$auxiliaryNegative',
  },
});

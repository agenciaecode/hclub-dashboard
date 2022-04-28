import * as PrimitiveLabel from '@radix-ui/react-label';

import { styled } from '@/theme';

export * from '@radix-ui/react-label';
export const Label = styled(PrimitiveLabel.Label, {
  userSelect: 'none',
});

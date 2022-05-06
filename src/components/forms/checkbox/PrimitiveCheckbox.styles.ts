import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { styled } from '@/theme';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px $shadowGray`,
  border: 'solid 1px $blackLight',
  borderColor: '$blackLighter',
  '&:hover': { backgroundColor: '$grayLight' },
  '&:focus': { boxShadow: `0 0 0 2px $shadowGray` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$primary',
  display: 'flex',
  svg: {
    transform: 'scale(1.4)',
  },
});

export { StyledCheckbox, StyledIndicator };

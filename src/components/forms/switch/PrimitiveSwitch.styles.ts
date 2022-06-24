import * as SwitchPrimitive from '@radix-ui/react-switch';

import { styled } from '@/theme';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$green',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $blackLight`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  transition: 'background-color 100ms ease-in-out, opacity 100ms ease-in-out',
  '&:focus': { boxShadow: `0 0 0 2px $black` },
  '&[data-state="checked"]': { backgroundColor: '$gray' },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.65,
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $blackLight`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export { StyledSwitch, StyledThumb };

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { keyframes, styled } from '@/theme';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: '23.7rem',
  backgroundColor: '$backgroundWhite',
  color: '$textBlack',
  borderRadius: 5,
  border: 'solid 1px $black',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  all: 'unset',
  fontSize: '$base',
  lineHeight: '$base',
  color: '$textBlack',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  userSelect: 'none',
  padding: '1.5rem 1.6rem',
  cursor: 'pointer',
  '&[data-disabled]': {
    color: '$gray',
    pointerEvents: 'none',
  },
  '&[data-state="active"]': {
    background: '$grayLight',
  },
  '&:focus': {
    backgroundColor: '$grayLighter',
  },
});

export { StyledContent, StyledItem };

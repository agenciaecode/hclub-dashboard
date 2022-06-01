import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { keyframes, styled } from '@/theme';
import { CSS } from '@/theme/stitches';

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

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 5,
  padding: '10px 15px',
  fontSize: '$base',
  lineHeight: '$base',
  border: '1px solid transparent',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  variants: {
    // TooltipPrimitive.Content is conflicting with "color" variant name
    colors: {
      light: {
        color: '$textBlack',
        backgroundColor: '$backgroundWhite',
        borderColor: '$backgroundBlack',
      },
      dark: {
        color: '$textWhite',
        backgroundColor: '$backgroundBlack',
        borderColor: '$backgroundWhite',
      },
    },
  },
  defaultVariants: { colors: 'light' },
});

const StyledFakeArrow = styled('span', {
  width: '1rem',
  height: '1rem',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid transparent',
  transform: 'rotate(45deg) translateX(calc(-50% - 1px))',
  variants: {
    color: {
      light: {
        borderColor: '$backgroundBlack',
        background:
          'linear-gradient(135deg, transparent calc(50% - 1px), $backgroundWhite calc(50% - 1px))',
      },
      dark: {
        borderColor: '$backgroundWhite',
        background:
          'linear-gradient(135deg, transparent calc(50% - 1px), $backgroundBlack calc(50% - 1px))',
      },
    },
  },
  defaultVariants: { color: 'light' },
});

export { StyledContent, StyledFakeArrow };

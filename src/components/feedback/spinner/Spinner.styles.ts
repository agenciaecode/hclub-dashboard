import { keyframes, styled } from '@/theme';

const rotateAnimation = keyframes({
  '0%': { transform: 'rotate(0deg) scale(1.5)' },
  '100%': { transform: 'rotate(360deg) scale(1.5)' },
});

const fadeInAnimation = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

export const StyledSpinner = styled('div', {
  width: '1.9rem',
  height: '1.9rem',
  borderRadius: '50%',
  transitionProperty: 'border background',
  transitionDuration: '0.3s',
  transitionTimingFunction: 'ease-in-out',
  borderWidth: '3px',
  transform: 'translateZ(0)',
  animation: `${rotateAnimation} 750ms infinite linear, ${fadeInAnimation} 250ms linear`,
  variants: {
    color: {
      primary: {
        borderTop: 'solid $white',
        borderRight: 'solid rgba(255, 255, 255, 0.4)',
        borderBottom: 'solid rgba(255, 255, 255, 0.4)',
        borderLeft: 'solid rgba(255, 255, 255, 0.4)',
      },
      secondary: {
        borderTop: 'solid $black',
        borderRight: 'solid rgba(0, 0, 0, 0.4)',
        borderBottom: 'solid rgba(0, 0, 0, 0.4)',
        borderLeft: 'solid rgba(0, 0, 0, 0.4)',
      },
    },
  },
  defaultVariants: { color: 'primary' },
});

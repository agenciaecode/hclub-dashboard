import { keyframes, styled } from '@/theme';

import { StyledSpinner as OriginalStyledSpinner } from '../spinner/Spinner.styles';

const growCircleAnimation = keyframes({
  '0%': {
    borderWidth: '3px',
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scale(0)',
  },
  '100%': {
    borderWidth: '1px',
    transform: 'scale(1.5)',
  },
});

export const growArrowAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1.1)',
  },
});

export const StyledCheckMarkSpinner = styled(
  OriginalStyledSpinner,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > svg': {
      visibility: 'hidden',
      opacity: 0,
    },
    variants: {
      finished: {
        true: {
          animation: `${growCircleAnimation} 125ms forwards ease-in-out`,
          transitionDuration: '125ms',
          '& > svg': {
            visibility: 'visible',
            animation: `${growArrowAnimation} 250ms forwards cubic-bezier(1.000, 0.008, 0.565, 1.650)`,
          },
        },
      },
    },
  },
  {
    compoundVariants: [
      {
        color: 'primary',
        finished: true,
        css: {
          borderColor: '$white',
        },
      },
      {
        color: 'secondary',
        finished: true,
        css: {
          borderColor: '$black',
        },
      },
    ],
  },
);

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { styled } from '@/theme';

const StyledProgressBar = styled('div', {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    displayOn: {
      desktop: {
        '@desktop': {
          display: 'flex',
          flexDirection: 'column',
        },
        '@mobile': {
          display: 'none',
        },
      },
      mobile: {
        '@desktop': {
          display: 'none',
        },
        '@mobile': {
          display: 'flex',
        },
      },
      both: {
        display: 'flex',
      },
    },
  },
});

const StyledTitle = styled('div', {
  display: 'flex',
  width: '100%',
  marginBottom: '1.2rem',
  justifyContent: 'end',
  color: '$black',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
});

const StyledProgressBarHdrive = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$white',
  borderRadius: '10px',
  height: '8px',
  '@mobile': {
    width: '164px',
  },
  '@desktop': {
    width: '277px',
  },
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export {
  StyledProgressBar,
  StyledTitle,
  StyledProgressBarHdrive,
  StyledIndicator,
};

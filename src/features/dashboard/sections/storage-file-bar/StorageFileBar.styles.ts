import * as ProgressPrimitive from '@radix-ui/react-progress';

import { styled } from '@/theme';

const StyledTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: '$black',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '30px',
  lineHeight: '35px',
  marginBottom: '8px',
  '@mobile': {
    flexDirection: 'column',
  },
});

const StyledDescription = styled('div', {
  color: '$black',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  marginBottom: '24px',
});

const StyledProgressBar = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$white',
  borderRadius: '10px',
  width: '100%',
  height: '4rem',
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export { StyledTitle, StyledDescription, StyledProgressBar, StyledIndicator };

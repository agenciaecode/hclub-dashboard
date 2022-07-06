import * as ProgressPrimitive from '@radix-ui/react-progress';

import { styled } from '@/theme';

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
  width: '27.7rem',
  height: '8px',
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export { StyledTitle, StyledProgressBarHdrive, StyledIndicator };

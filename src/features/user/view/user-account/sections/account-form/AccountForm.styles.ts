import { LabelledTextArea } from '@components/forms/labelled-text-area';

import { styled } from '@/theme';

const StyledLabelledTextArea = styled(LabelledTextArea, {
  gridColumn: '1 / 1',
  '@md': {
    gridColumn: '1 / span 2',
  },
});

const StyledSwitchWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  color: '$textBlack',
  fontSize: '$sm',
  lineHeight: '$sm',
  '@sm': {
    justifyContent: 'start',
  },
});

export { StyledLabelledTextArea, StyledSwitchWrapper };

import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledCloseButton = styled(Button, {
  borderRadius: '$base',
  height: 40,
  width: 40,
  marginLeft: '1rem',
  marginBottom: '1rem',
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  float: 'right',
  '& svg path': {
    stroke: '$textBlack',
  },
  '&:hover': {
    '& svg path': {
      stroke: '$textWhite',
    },
  },
});

export { StyledCloseButton };

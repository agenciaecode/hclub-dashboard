import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledCloseButton = styled(Button, {
  borderRadius: '$base',
  height: 40,
  width: 40,
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '3.2rem',
  right: '3.2rem',
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

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes } from '@stitches/react';

import { styled } from '@/theme';

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-5px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
});

const StyledDropdownArrow = styled(DropdownMenu.Arrow, {
  fill: '$black',
});

const StyledDropdownContent = styled(DropdownMenu.Content, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid $black',
  borderRadius: '5px',
  color: '$white',
  backgroundColor: '$white',
  animation: `${scaleIn} 0.2s linear forwards`,
  '& a': {
    textDecoration: 'none',
    color: '$black',
  },
});

const StyledDropdownTrigger = styled(DropdownMenu.Trigger, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  width: '4.7rem',
  height: '4.8rem',
  border: '1px solid $black',
  borderRadius: '5px',
  variants: {
    size: {
      large: {
        padding: '1.5rem 5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '$base',
        cursor: 'pointer',
      },
    },
  },
});

export { StyledDropdownContent, StyledDropdownTrigger, StyledDropdownArrow };

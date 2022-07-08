import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@/theme';

const StyledDropdownButtonItem = styled(DropdownMenu.Item, {
  color: '$white',
  borderRadius: '5px',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  '&:hover': {
    transition: '0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export { StyledDropdownButtonItem };

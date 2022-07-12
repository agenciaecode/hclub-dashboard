import { styled } from '@/theme';

const StyledDropdownButtonItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '160px',
  height: '4.4rem',
  color: '$black',
  borderRadius: '5px',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  '& + div': {
    borderRadius: '0px',
    borderTop: '1px solid $black',
  },
});

export { StyledDropdownButtonItem };

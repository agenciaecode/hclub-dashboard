import { styled } from '@/theme';

const StyledDropdownButtonItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '160px',
  height: '4.4rem',
  color: '$black',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: '0.3s',
  '& + div': {
    borderRadius: '0px',
    borderTop: '1px solid $black',
  },
  '&:hover': {
    backgroundColor: 'rgba(100, 100, 100, 0.1)',
  },
});

export { StyledDropdownButtonItem };

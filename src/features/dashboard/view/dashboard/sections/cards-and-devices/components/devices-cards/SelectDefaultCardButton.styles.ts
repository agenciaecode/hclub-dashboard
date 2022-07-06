import { Select } from '@components/forms/select';

import { styled } from '@/theme';

const StyledSelect = styled(Select, {
  width: 'stretch',
  '@sm': {
    width: 'unset',
    minWidth: '30rem',
  },
});

export { StyledSelect };

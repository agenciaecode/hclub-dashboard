import { Checkbox } from '@components/forms/checkbox';

import { StyledFormInputsSections as OriginalStyledFormInputsSections } from '../login-form/LoginForm.styles';

import { styled } from '@/theme';

const StyledFormInputsSections = styled(OriginalStyledFormInputsSections, {
  gap: '3.2rem',
});

const StyledFlexRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '0.5rem',
});

const StyledCheckbox = styled(Checkbox, {
  border: '1px solid $gray',
  '&:focus': {
    boxShadow: '0 0 0.1rem $gray',
  },
});

const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '6.3rem',
  paddingBottom: '4rem',
  gap: '2rem',
  fontSize: '$2xl',
});

const HiddenOnDesktop = styled('div', {
  '@desktop': {
    display: 'none',
  },
});

export {
  StyledFormInputsSections,
  StyledFlexRow,
  StyledCheckbox,
  StyledHeader,
  HiddenOnDesktop,
};

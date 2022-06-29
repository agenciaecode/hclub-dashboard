import { BackButton } from '@components/others/back-button';

import { styled } from '@/theme';

const StyledMainHeader = styled('header', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const StyledBackButton = styled(BackButton, {
  lineHeight: 0,
  marginRight: '1.2rem',
  '@md': {
    marginRight: '2.4rem',
  },
  '& > svg': {
    width: '2.8rem !important',
    height: '2.8rem !important',
    '@md': {
      width: 'unset !important',
      height: 'unset !important',
    },
  },
});

const StyledTitle = styled('h1', {
  color: '$textBlack',
  fontSize: '$xl',
  lineHeight: '$xl',
  fontWeight: '$defaultRegular',
  '@md': {
    fontSize: '$3xl',
    lineHeight: '$3xl',
  },
});

const StyledSectionForm = styled('form', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: '3.2rem',
  '@md': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
});

export { StyledMainHeader, StyledBackButton, StyledTitle, StyledSectionForm };

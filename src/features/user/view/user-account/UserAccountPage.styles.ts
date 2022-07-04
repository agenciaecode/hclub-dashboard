import { styled } from '@/theme';

const StyledMainHeader = styled('header', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
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

export { StyledMainHeader, StyledTitle, StyledSectionForm };

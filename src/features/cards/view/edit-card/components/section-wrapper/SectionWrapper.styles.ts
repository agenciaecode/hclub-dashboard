import { styled } from '@/theme';

const StyledSectionWrapper = styled('section', {
  padding: '3.2rem 0',
  '&:first-child': {
    paddingTop: '0',
  },
});

const StyledFlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
});

const StyledFlexColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  flex: '1 1 auto',
});

const StyledSectionTitle = styled('h2', {
  color: '$textBlack',
  fontSize: '$2xl',
  lineHeight: '$2xl',
  fontWeight: '$defaultRegular',
});

const StyledSectionContent = styled('div', {
  paddingTop: '3.2rem',
});

export {
  StyledSectionWrapper,
  StyledSectionTitle,
  StyledFlexRow,
  StyledFlexColumn,
  StyledSectionContent,
};

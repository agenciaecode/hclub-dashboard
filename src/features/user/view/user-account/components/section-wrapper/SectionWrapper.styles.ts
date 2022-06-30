import { styled } from '@/theme';

const StyledSection = styled('section', {
  width: '100%',
  padding: '3rem 0',
  display: 'grid',
  alignItems: 'center',
  gridTemplateAreas: '"header" "content" "toolbar"',
  '@md': {
    gridTemplateAreas: '"header toolbar" "content content"',
  },
});

const StyledSectionHeader = styled('header', {
  gridArea: 'header',
  justifySelf: 'start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'start',
  gap: '1.6rem',
  fontSize: '$xl',
  lineHeight: '$xl',
  color: '$textBlack',
  '@md': {
    fontSize: '$2xl',
    lineHeight: '$2xl',
    gap: '3.2rem',
  },
});

const StyledSectionDescription = styled('span', {
  fontSize: '$base',
  lineHeight: '$base',
});

const StyledSectionContent = styled('div', {
  gridArea: 'content',
  justifySelf: 'start',
  width: '100%',
  padding: '2rem 0 3rem',
});

const StyledSectionToolbar = styled('div', {
  gridArea: 'toolbar',
  justifySelf: 'start',
  '@md': {
    justifySelf: 'end',
  },
});

export {
  StyledSection,
  StyledSectionHeader,
  StyledSectionDescription,
  StyledSectionContent,
  StyledSectionToolbar,
};

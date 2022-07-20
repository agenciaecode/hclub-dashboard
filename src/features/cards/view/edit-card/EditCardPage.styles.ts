import { styled } from '@/theme';

const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  rowGap: '4rem',
});

const FlexWrapper = styled('div', {
  display: 'flex',
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

const StyledToolbar = styled('div', {
  display: 'flex',
  gap: '1.6rem',
});

const StyledContentWrapper = styled('article', {
  display: 'flex',
  alignSelf: 'stretch',
  marginTop: '5rem',
  gap: '6rem',
});

const StyledFormsContainer = styled('section', {
  flex: 1,
});

const StyledPreviewContainer = styled('section', {
  display: 'none',
  '@lg': {
    display: 'block',
  },
});

const StyledStickyPreviewWrapper = styled('div', {
  position: 'sticky',
  // top: 'calc(62rem - 50%)',
  top: '2rem',
});

const HiddenOnMobile = styled('span', {
  display: 'none',
  whiteSpace: 'pre',
  '@md': {
    display: 'inline',
  },
});

export {
  StyledHeader,
  StyledTitle,
  StyledToolbar,
  StyledContentWrapper,
  StyledFormsContainer,
  StyledPreviewContainer,
  StyledStickyPreviewWrapper,
  FlexWrapper,
  HiddenOnMobile,
};

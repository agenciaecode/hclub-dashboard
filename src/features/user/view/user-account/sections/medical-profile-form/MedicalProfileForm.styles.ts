import { styled } from '@/theme';

const StyledProfilePrivacyWrapper = styled('div', {
  fontSize: '$lg',
  lineHeight: '$lg',
  color: '$textBlack',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '6rem',
  '@md': {
    fontSize: '$xl',
    lineHeight: '$xl',
  },
});

const StyledDummyDiv = styled('div', {
  display: 'none',
  '@md': {
    display: 'block',
  },
});

export { StyledProfilePrivacyWrapper, StyledDummyDiv };

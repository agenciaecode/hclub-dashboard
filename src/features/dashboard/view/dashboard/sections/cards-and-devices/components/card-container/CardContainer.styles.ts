import { styled } from '@/theme';

const StyledCardContainerArticle = styled('article', {
  flex: '1',
  color: '$textBlack',
  display: 'none',
  '@md': {
    display: 'block',
  },
  variants: {
    displayOnMobile: {
      true: {
        display: 'block',
      },
    },
  },
});

const StyledCardContainerHeader = styled('header', {
  fontSize: '$2xl',
  lineHeight: '$2xl',
  marginBottom: '0.9rem',
  display: 'none',
  '@md': {
    display: 'block',
  },
});

const StyledCardListContainer = styled('section', {
  display: 'flex',
  gap: '2rem',
  position: 'relative',
  minHeight: '29.7rem',
});

export {
  StyledCardContainerArticle,
  StyledCardContainerHeader,
  StyledCardListContainer,
};

import { css, styled } from '@/theme';

const StyledCardContainerArticle = styled('article', {
  flex: '1',
  color: '$textBlack',
});

const StyledCardContainerHeader = styled('header', {
  fontSize: '$2xl',
  lineHeight: '$2xl',
  marginBottom: '0.4rem',
});

const StyledCardListContainer = styled('section', {
  display: 'flex',
  gap: '2rem',
  position: 'relative',
});

export {
  StyledCardContainerArticle,
  StyledCardContainerHeader,
  StyledCardListContainer,
};

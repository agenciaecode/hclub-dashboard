import { styled } from '@/theme';

const StyledCardContainerArticle = styled('article', {
  flex: '1',
  color: '$textBlack',
});

const StyledCardContainerHeader = styled('header', {
  fontSize: '$2xl',
  lineHeight: '$2xl',
  marginBottom: '2.4rem',
});

const StyledCardListContainer = styled('section', {
  display: 'flex',
  gap: '2rem',
});

export {
  StyledCardContainerArticle,
  StyledCardContainerHeader,
  StyledCardListContainer,
};

import { CSS } from '@stitches/react';

import { configTheme, styled } from '@/theme';

const StyledFlippableCardWrapper = styled('div', {
  perspective: '1000px',
  width: '19.7rem',
  height: '28.2rem',
  '&:hover > section': {
    transform: 'rotateY(180deg)',
  },
});

const StyledFlippableCard = styled('section', {
  width: '100%',
  height: '100%',
  borderRadius: '1.4rem',
  position: 'relative',
  display: 'flex',
  color: '$textWhite',
  transition: 'all 0.5s ease-in-out',
  transformStyle: 'preserve-3d',
});

const cardFaceStyle: CSS<typeof configTheme> = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backfaceVisibility: 'hidden',
  webkitBackfaceVisibility: 'hidden',
  fontSize: '$xl',
  lineHeight: '$xl',
};

const StyledFlippableCardFront = styled(
  'div',
  {
    transform: 'rotateX(0)',
  },
  cardFaceStyle,
);

const StyledFlippableCardBack = styled('div', cardFaceStyle, {
  transform: 'rotateY(180deg)',
});

export {
  StyledFlippableCardWrapper,
  StyledFlippableCard,
  StyledFlippableCardFront,
  StyledFlippableCardBack,
};

import { css, styled } from '@/theme';

const swiperStyle = css({
  padding: '1.5rem 0',
});

const swiperSlideStyle = css({
  width: 'fit-content',
  height: 'fit-content',
});

const StyledSwiperArrow = styled('div', {
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto 0',
  height: 'fit-content',
  '&.swiper-button-disabled': {
    visibility: 'hidden',
  },
  '& .arrow-svg': {
    opacity: 1,
    transition: 'opacity 0.2s linear',
  },
  '&:hover .arrow-svg': {
    opacity: 0.6,
  },
  variants: {
    direction: {
      left: {
        left: '-1.5rem',
      },
      right: {
        right: '-1.5rem',
        transform: 'rotate(180deg)',
      },
    },
  },
});

export { StyledSwiperArrow, swiperStyle, swiperSlideStyle };

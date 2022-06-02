import { VariantProps } from '@stitches/react';
import { Navigation, A11y } from 'swiper';
import {
  SwiperSlide as OriginalSwiperSlide,
  Swiper as OriginalSwiper,
  // eslint-disable-next-line import/no-unresolved
} from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

import { useUniqueId } from '@hooks/useUniqueId';

import { WithChildren } from '@/types/with-children';

import {
  StyledSwiperArrow,
  swiperSlideStyle,
  swiperStyle,
} from './Swiper.styles';

const SwipeArrowSvg = ({
  className,
  direction,
}: Pick<HTMLElement, 'className'> & VariantProps<typeof StyledSwiperArrow>) => (
  <StyledSwiperArrow
    className={`navigation ${className}`}
    direction={direction}
  >
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-svg"
    >
      <path
        d="M11 1L1 11L11 21"
        stroke="black"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="arrow-svg-path"
      />
    </svg>
  </StyledSwiperArrow>
);

const Swiper = ({ children }: WithChildren) => {
  const uniqueId = useUniqueId();
  return (
    <>
      <OriginalSwiper
        className={swiperStyle()}
        slidesPerView="auto"
        spaceBetween={30}
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: `.swiper-button-prev-${uniqueId}`,
          nextEl: `.swiper-button-next-${uniqueId}`,
        }}
      >
        {children}
      </OriginalSwiper>
      <SwipeArrowSvg
        className={`swiper-button-prev-${uniqueId}`}
        direction="left"
      />
      <SwipeArrowSvg
        className={`swiper-button-next-${uniqueId}`}
        direction="right"
      />
    </>
  );
};

const SwiperSlide = ({ children }: WithChildren) => (
  <OriginalSwiperSlide className={swiperSlideStyle()}>
    {children}
  </OriginalSwiperSlide>
);

SwiperSlide.displayName = 'SwiperSlide';

export { Swiper, SwiperSlide };

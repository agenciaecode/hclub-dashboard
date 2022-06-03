/* eslint-disable react/jsx-props-no-spreading */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Swiper, SwiperSlide } from '../../../../components/swiper';
import { CardContainer } from '../card-container';
import { ProfileCard } from './ProfileCard';

export const ProfilesSwiper = forwardRef<
  ElementRef<typeof CardContainer>,
  Partial<ComponentPropsWithoutRef<typeof CardContainer>>
  // eslint-disable-next-line prefer-arrow-callback
>(function ProfilesSwiper(cardContainerProps, forwardedRef) {
  return (
    <CardContainer
      {...cardContainerProps}
      title="Seus Cartões"
      ref={forwardedRef}
    >
      <Swiper>
        <SwiperSlide>
          <ProfileCard title="PRO" isDefault type="pro" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileCard title="Social" type="social" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileCard title="Personal" type="personal" />
        </SwiperSlide>
      </Swiper>
    </CardContainer>
  );
});

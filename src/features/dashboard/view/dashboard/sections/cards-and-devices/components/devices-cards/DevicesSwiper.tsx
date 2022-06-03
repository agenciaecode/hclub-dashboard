/* eslint-disable react/jsx-props-no-spreading */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Swiper, SwiperSlide } from '../../../../components/swiper';
import { CardContainer } from '../card-container';
import { DeviceCard } from './DeviceCard';

export const DevicesSwiper = forwardRef<
  ElementRef<typeof CardContainer>,
  Partial<ComponentPropsWithoutRef<typeof CardContainer>>
  // eslint-disable-next-line prefer-arrow-callback
>(function DevicesSwiper(cardContainerProps, forwardedRef) {
  return (
    <CardContainer
      {...cardContainerProps}
      title="Dispositivos"
      ref={forwardedRef}
    >
      <Swiper>
        <SwiperSlide>
          <DeviceCard />
        </SwiperSlide>
        <SwiperSlide>
          <DeviceCard />
        </SwiperSlide>
        <SwiperSlide>
          <DeviceCard />
        </SwiperSlide>
      </Swiper>
    </CardContainer>
  );
});

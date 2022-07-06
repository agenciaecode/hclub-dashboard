/* eslint-disable react/jsx-props-no-spreading */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useDeviceListQuery } from '@features/devices';

import { Swiper, SwiperSlide } from '../../../../components/swiper';
import { CardContainer } from '../card-container';
import { DeviceCard } from './DeviceCard';

export const DevicesSwiper = forwardRef<
  ElementRef<typeof CardContainer>,
  Partial<ComponentPropsWithoutRef<typeof CardContainer>>
  // eslint-disable-next-line prefer-arrow-callback
>(function DevicesSwiper(cardContainerProps, forwardedRef) {
  const { data: deviceList, error: deviceListQueryError } =
    useDeviceListQuery();
  const hasOnlyOneDevice = deviceList?.length === 1;

  useHttpExceptionHandler(deviceListQueryError, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  return (
    <CardContainer
      {...cardContainerProps}
      title="Dispositivos"
      ref={forwardedRef}
    >
      <Swiper>
        {deviceList?.map(device => (
          <SwiperSlide key={device.serial_number}>
            <DeviceCard device={device} isLastDevice={hasOnlyOneDevice} />
          </SwiperSlide>
        ))}
        {deviceList?.length === 0 && (
          <SwiperSlide key={0}>
            <div>Nenhum dispositivo encontrado</div>
          </SwiperSlide>
        )}
      </Swiper>
    </CardContainer>
  );
});

/* eslint-disable react/jsx-props-no-spreading */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardListQuery } from '@features/cards';

import { Swiper, SwiperSlide } from '../../../../components/swiper';
import { CardContainer } from '../card-container';
import { ProfileCard } from './ProfileCard';

export const ProfilesSwiper = forwardRef<
  ElementRef<typeof CardContainer>,
  Partial<ComponentPropsWithoutRef<typeof CardContainer>>
  // eslint-disable-next-line prefer-arrow-callback
>(function ProfilesSwiper(cardContainerProps, forwardedRef) {
  const { data: cardList, error: cardListQueryError } = useCardListQuery();

  useHttpExceptionHandler(cardListQueryError, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  return (
    <CardContainer
      {...cardContainerProps}
      title="Seus Cartões"
      ref={forwardedRef}
    >
      <Swiper>
        {cardList?.map(card => (
          <SwiperSlide key={card.id}>
            <ProfileCard title={card.type_label} type={card.type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CardContainer>
  );
});

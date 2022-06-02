import { Swiper, SwiperSlide } from '../../components/swiper';
import { CardContainer } from './components/card-container';
import { DeviceCard } from './components/device-card';
import { ProfileCard } from './components/profile-card';
import { StyledUserProfilesAndDevicesWrapper } from './ProfileCardsAndDevices.styles';

const ProfileCardsAndDevices = () => (
  <StyledUserProfilesAndDevicesWrapper>
    <CardContainer title="Seus Cartões">
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
    <CardContainer title="Dispositivos">
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
  </StyledUserProfilesAndDevicesWrapper>
);

export { ProfileCardsAndDevices };

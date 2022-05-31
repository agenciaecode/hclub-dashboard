import { CardContainer } from './components/card-container';
import { DeviceCard } from './components/device-card';
import { ProfileCard } from './components/profile-card';
import { StyledUserProfilesAndDevicesWrapper } from './ProfileCardsAndDevices.styles';

const ProfileCardsAndDevices = () => (
  <StyledUserProfilesAndDevicesWrapper>
    <CardContainer title="Seus Cartões">
      <ProfileCard title="PRO" isDefault type="pro" />
      <ProfileCard title="Social" type="social" />
      <ProfileCard title="Personal" type="personal" />
    </CardContainer>
    <CardContainer title="Dispositivos">
      <DeviceCard />
      <DeviceCard />
    </CardContainer>
  </StyledUserProfilesAndDevicesWrapper>
);

export { ProfileCardsAndDevices };

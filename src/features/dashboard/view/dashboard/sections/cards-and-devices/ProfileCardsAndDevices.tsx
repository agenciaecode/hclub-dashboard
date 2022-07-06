import { useState } from 'react';

import { DashboardSection } from '../../components/dashboard-section';
import { DevicesSwiper } from './components/devices-cards/DevicesSwiper';
import { ProfilesSwiper } from './components/profiles-cards/ProfilesSwiper';
import {
  StyledSwiperContainer,
  StyledMobileTabsContainer,
  StyledTabButton,
} from './ProfileCardsAndDevices.styles';

type SwiperMobileTab = 'devices' | 'profiles';

const ProfileCardsAndDevices = () => {
  const [tab, setTab] = useState<SwiperMobileTab>('profiles');
  const isShowingDevicesTab = tab === 'devices';
  const isShowingProfilesTab = tab === 'profiles';

  return (
    <DashboardSection
      role="tablist"
      aria-orientation="horizontal"
      dir="ltr"
      aria-label="Cartões e Dispositivos"
    >
      <StyledMobileTabsContainer>
        <StyledTabButton
          btn={isShowingProfilesTab ? 'primary' : 'secondary'}
          onClick={() => setTab('profiles')}
          id="profiles-trigger-tab"
          role="tab"
          aria-selected={isShowingProfilesTab}
          aria-controls="profiles-content-tab"
          tabIndex={isShowingProfilesTab ? 0 : -1}
        >
          Cartões
        </StyledTabButton>
        <StyledTabButton
          btn={isShowingDevicesTab ? 'primary' : 'secondary'}
          onClick={() => setTab('devices')}
          id="devices-trigger-tab"
          role="tab"
          aria-selected={isShowingDevicesTab}
          aria-controls="devices-content-tab"
          tabIndex={isShowingDevicesTab ? 0 : -1}
        >
          Dispositivos
        </StyledTabButton>
      </StyledMobileTabsContainer>
      <StyledSwiperContainer>
        <ProfilesSwiper
          displayOnMobile={isShowingProfilesTab}
          id="profiles-content-tab"
          role="tabpanel"
          aria-labelledby="profiles-trigger-tab"
          hidden={isShowingProfilesTab}
          tabIndex={0}
        />
        <DevicesSwiper
          displayOnMobile={isShowingDevicesTab}
          id="devices-content-tab"
          role="tabpanel"
          aria-labelledby="devices-trigger-tab"
          hidden={isShowingDevicesTab}
          tabIndex={0}
        />
      </StyledSwiperContainer>
    </DashboardSection>
  );
};

export { ProfileCardsAndDevices };

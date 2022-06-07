import Head from 'next/head';

import { StyledWrapper, StyledMainContent } from './DashboardPage.styles';
import { ProfileCardsAndDevices } from './sections/cards-and-devices';
import { HeaderNavbar } from './sections/header';

const DashboardPage = () => (
  <>
    <Head>
      <title>Dashboard | HClub</title>
      <meta name="description" content="H.club dashboard" />
    </Head>
    <StyledWrapper>
      <HeaderNavbar />
      <StyledMainContent>
        <ProfileCardsAndDevices />
      </StyledMainContent>
    </StyledWrapper>
  </>
);

export { DashboardPage };

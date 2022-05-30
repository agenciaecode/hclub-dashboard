import Head from 'next/head';

import { StyledWrapper, StyledMainContent } from './DashboardPage.styles';
import { DesktopHeader } from './sections/header';

const DashboardPage = () => (
  <>
    <Head>
      <title>Dashboard | HClub</title>
      <meta name="description" content="H.club dashboard" />
    </Head>
    <StyledWrapper>
      <DesktopHeader />
      <StyledMainContent />
    </StyledWrapper>
  </>
);

export { DashboardPage };

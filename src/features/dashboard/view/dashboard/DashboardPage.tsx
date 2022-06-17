import { PageContent } from '@components/layout/page-content';

import { ProfileCardsAndDevices } from './sections/cards-and-devices';

const DashboardPage = () => (
  <PageContent title="Dashboard" description="H.club dashboard">
    <ProfileCardsAndDevices />
  </PageContent>
);

export { DashboardPage };

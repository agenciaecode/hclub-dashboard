import { PageContent } from '@components/layout/page-content';

import { ProfileCardsAndDevices } from './sections/cards-and-devices';
import { StorageFileBar } from './sections/storage-file-bar';

const DashboardPage = () => (
  <PageContent title="Dashboard" description="H.club dashboard">
    <ProfileCardsAndDevices />
    <StorageFileBar />
  </PageContent>
);

export { DashboardPage };

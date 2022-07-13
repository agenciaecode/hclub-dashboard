import { PageContent } from '@components/layout/page-content';

import { ExplorerFilesList } from './components/explorer/ExplorerFilesList';
import { HeaderNavbar } from './components/header-navbar/HeaderNavbar';
import { NavbarExplorer } from './components/navbar-explorer/NavbarExplorer';

const HdrivePage = () => (
  <PageContent title="Meus arquivos" description="Meus arquivos">
    <HeaderNavbar />
    <NavbarExplorer />
    <ExplorerFilesList />
  </PageContent>
);

export { HdrivePage };

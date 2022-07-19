import { NovoArquivoButton } from '../novo-arquivo-button/NovoArquivoButton';
import { StorageFileBarHdrive } from '../storage-file-bar-hdrive/StorageFileBarHdrive';
import { StyledNavbarExplorer } from './NavbarExplorer.styles';

const NavbarExplorer = () => (
  <StyledNavbarExplorer>
    <NovoArquivoButton />

    <StorageFileBarHdrive displayOn="mobile" />
  </StyledNavbarExplorer>
);

export { NavbarExplorer };

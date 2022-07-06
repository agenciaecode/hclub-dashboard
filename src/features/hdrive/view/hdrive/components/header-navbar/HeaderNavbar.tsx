/* eslint-disable jsx-a11y/label-has-associated-control */
import { HdriveButton } from '../hdrive-button/HdriveButton';
import { CaretLeftIcon } from '../icons/caret-left-icon/CaretLeftIcon';
import { StorageFileBarHdrive } from '../storage-file-bar-hdrive/StorageFileBarHdrive';
import {
  StyledHeaderNavbar,
  StyledRightContent,
  StyledLeftContent,
} from './HeaderNavbar.styles';

const HeaderNavbar = () => (
  <StyledHeaderNavbar>
    <StyledLeftContent>
      <HdriveButton text="big">
        <CaretLeftIcon />
        Meus arquivos
      </HdriveButton>
    </StyledLeftContent>

    <StyledRightContent>
      <StorageFileBarHdrive />
    </StyledRightContent>
  </StyledHeaderNavbar>
);

export { HeaderNavbar };

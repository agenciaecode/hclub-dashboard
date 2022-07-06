import { MouseEventHandler, ReactElement, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { CloseMenuIcon } from '../icons/close-menu-icon/CloseMenuIcon';
import {
  StyledDescription,
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogTrigger,
  StyledOverlay,
  StyledTitle,
  StyledTopBar,
} from './DialogModal.styles';

type DialogModalProps = {
  label: string | ReactElement;
  children: ReactNode;
  dialogTitle?: string;
  dialogDescription?: string;
  onClick?: MouseEventHandler;
};

const DialogModal = ({
  children,
  label,
  dialogTitle,
  dialogDescription,
  onClick,
}: DialogModalProps) => (
  <Dialog.Root>
    <StyledDialogTrigger onClick={onClick}>{label}</StyledDialogTrigger>
    <Dialog.Portal>
      <StyledOverlay>
        <StyledDialogContent>
          {dialogTitle && (
            <StyledTopBar>
              <StyledTitle>{dialogTitle}</StyledTitle>
              <StyledDialogClose>
                <CloseMenuIcon />
              </StyledDialogClose>
            </StyledTopBar>
          )}

          {dialogDescription && (
            <StyledDescription>{dialogDescription}</StyledDescription>
          )}

          {children}
        </StyledDialogContent>
      </StyledOverlay>
    </Dialog.Portal>
  </Dialog.Root>
);

DialogModal.defaultProps = {
  onClick: null,
  dialogTitle: null,
  dialogDescription: null,
};

export { DialogModal };

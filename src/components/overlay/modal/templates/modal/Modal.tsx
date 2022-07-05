/* eslint-disable react/require-default-props,react/jsx-props-no-spreading */
import { ReactElement, ReactNode } from 'react';

import * as Modal from '@radix-ui/react-dialog';

import { ModalCloseButton } from '../../components/close-button';
import { StyledContent, StyledOverlay } from '../../PrimitiveModal.styles';

type ModalProps = {
  triggerButton?: ReactElement;
  children?: ReactNode;
} & Modal.DialogProps;

const PresetModal = ({
  triggerButton,
  children,
  ...modalProps
}: ModalProps) => (
  <Modal.Root {...modalProps}>
    {triggerButton && <Modal.Trigger asChild>{triggerButton}</Modal.Trigger>}
    <Modal.Portal>
      <StyledOverlay>
        <StyledContent>
          <Modal.Close asChild>
            <ModalCloseButton />
          </Modal.Close>
          {children}
        </StyledContent>
      </StyledOverlay>
    </Modal.Portal>
  </Modal.Root>
);

export { PresetModal as Modal };
export type { ModalProps };

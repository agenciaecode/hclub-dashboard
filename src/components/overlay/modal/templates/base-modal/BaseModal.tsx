import * as Modal from '@radix-ui/react-dialog';

import { ModalCloseButton } from '../../components/close-button';
import { StyledContent, StyledOverlay } from '../../PrimitiveModal.styles';

type BaseModalProps = {
  triggerButton: React.ReactElement;
  children: React.ReactNode;
};

const BaseModal = ({ triggerButton, children }: BaseModalProps) => (
  <Modal.Root>
    <Modal.Trigger asChild>{triggerButton}</Modal.Trigger>
    <Modal.Portal>
      <StyledOverlay>
        <StyledContent>
          {children}
          <Modal.Close asChild>
            <ModalCloseButton />
          </Modal.Close>
        </StyledContent>
      </StyledOverlay>
    </Modal.Portal>
  </Modal.Root>
);

export { BaseModal };
export type { BaseModalProps };

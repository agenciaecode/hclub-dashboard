import * as Modal from '@radix-ui/react-dialog';

import { ModalCloseButton } from '../../components/close-button';
import { StyledContent, StyledOverlay } from '../../PrimitiveModal.styles';

type ModalProps = {
  triggerButton: React.ReactElement;
  children: React.ReactNode;
};

const PresetModal = ({ triggerButton, children }: ModalProps) => (
  <Modal.Root>
    <Modal.Trigger asChild>{triggerButton}</Modal.Trigger>
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

import { StyledDescription, StyledTitle } from '../../PrimitiveModal.styles';
import { Modal, ModalProps } from '../modal';

type DescriptiveModalProps = ModalProps & {
  title: string;
  description: string;
};

const DescriptiveModal = ({
  title,
  description,
  triggerButton,
  children,
}: DescriptiveModalProps) => (
  <Modal triggerButton={triggerButton}>
    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{description}</StyledDescription>
    {children}
  </Modal>
);

export { DescriptiveModal };
export type { DescriptiveModalProps };

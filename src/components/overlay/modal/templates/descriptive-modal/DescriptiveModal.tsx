import { Modal, ModalProps } from '../modal';
import { StyledDescription, StyledTitle } from '../../PrimitiveModal.styles';

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

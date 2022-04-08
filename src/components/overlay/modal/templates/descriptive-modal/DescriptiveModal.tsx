import { BaseModal, BaseModalProps } from '../base-modal';
import { StyledDescription, StyledTitle } from '../../PrimitiveModal.styles';

type DescriptiveModalProps = BaseModalProps & {
  title: string;
  description: string;
};

const DescriptiveModal = ({
  title,
  description,
  triggerButton,
  children,
}: DescriptiveModalProps) => (
  <BaseModal triggerButton={triggerButton}>
    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{description}</StyledDescription>
    {children}
  </BaseModal>
);

export { DescriptiveModal };
export type { DescriptiveModalProps };

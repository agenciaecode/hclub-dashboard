import {
  StyledDialogContentItem,
  StyledDialogContentItemLeft,
  StyledDialogContentItemRight,
} from './InfoDialogModal.styles';

type InfoDialogModalItemProps = {
  label: string;
  value: string;
};

const InfoDialogModalItem = ({ label, value }: InfoDialogModalItemProps) => (
  <StyledDialogContentItem>
    <StyledDialogContentItemLeft>{label}</StyledDialogContentItemLeft>
    <StyledDialogContentItemRight>{value}</StyledDialogContentItemRight>
  </StyledDialogContentItem>
);

export { InfoDialogModalItem };
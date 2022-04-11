import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { Button } from '@components/forms/button';

import {
  StyledAlertDialogContent,
  StyledAlertDialogDescription,
  StyledAlertDialogTitle,
  StyledOverlay,
} from '../../PrimitiveAlertDialog.styles';

import { FlexRow, StyledButton } from './Alert.styles';

type DescriptiveAlertProps = {
  title: string;
  description: string;
  confirmButtonText: string;
  triggerButton: React.ReactElement<typeof Button>;
  isOpen?: boolean;
};

const DescriptiveAlert = (alertDialogProps: DescriptiveAlertProps) => {
  const { title, description, confirmButtonText, triggerButton, isOpen } =
    alertDialogProps;
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{triggerButton}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledAlertDialogContent>
          <StyledAlertDialogTitle>{title}</StyledAlertDialogTitle>
          <StyledAlertDialogDescription>
            {description}
          </StyledAlertDialogDescription>
          <FlexRow>
            <AlertDialog.Cancel asChild>
              <StyledButton>{confirmButtonText}</StyledButton>
            </AlertDialog.Cancel>
          </FlexRow>
        </StyledAlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

DescriptiveAlert.defaultProps = {
  confirmButtonText: 'Ok',
  isOpen: false,
};

export { DescriptiveAlert };
export type { DescriptiveAlertProps };

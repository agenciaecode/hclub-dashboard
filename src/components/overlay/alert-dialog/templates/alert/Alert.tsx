import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { Button } from '@components/forms/button';

import {
  StyledAlertDialogContent,
  StyledAlertDialogDescription,
  StyledAlertDialogTitle,
  StyledOverlay,
} from '../../PrimitiveAlertDialog.styles';

import { FlexRow, StyledButton } from './Alert.styles';

type AlertProps = {
  title: string;
  description: string;
  confirmButtonText: string;
  confirmButtonAction?: () => void;
  triggerButton: React.ReactElement<typeof Button>;
  isOpen?: boolean;
};

const Alert = (alertDialogProps: AlertProps) => {
  const {
    title,
    description,
    confirmButtonText,
    triggerButton,
    confirmButtonAction,
    isOpen,
  } = alertDialogProps;
  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Trigger asChild>{triggerButton}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledAlertDialogContent>
          <StyledAlertDialogTitle>{title}</StyledAlertDialogTitle>
          <StyledAlertDialogDescription>
            {description}
          </StyledAlertDialogDescription>
          <FlexRow>
            <AlertDialog.Action asChild onClick={confirmButtonAction}>
              <StyledButton>{confirmButtonText}</StyledButton>
            </AlertDialog.Action>
          </FlexRow>
        </StyledAlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

Alert.defaultProps = {
  confirmButtonText: 'Ok',
  isOpen: false,
};

export { Alert };
export type { AlertProps };

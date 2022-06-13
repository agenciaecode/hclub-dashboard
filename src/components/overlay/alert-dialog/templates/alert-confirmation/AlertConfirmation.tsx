import type { ReactElement, ReactNode } from 'react';

import { notNullish } from '@antfu/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { Button } from '@components/forms/button';

import {
  StyledAlertDialogContent,
  StyledAlertDialogDescription,
  StyledAlertDialogTitle,
  StyledOverlay,
} from '../../PrimitiveAlertDialog.styles';
import { FlexRow, StyledButton } from './AlertConfirmation.styles';

type AlertConfirmationProps = {
  title: string;
  description: string | ReactElement;
  confirmButton?: ReactElement;
  confirmButtonText?: ReactNode;
  cancelButtonText: ReactNode;
  onOk: () => void;
  onCancel?: () => void;
  triggerButton: ReactElement<typeof Button>;
  isOpen?: boolean;
};

const AlertConfirmation = ({
  title,
  description,
  confirmButton,
  confirmButtonText,
  cancelButtonText,
  triggerButton,
  onOk,
  onCancel,
  isOpen,
}: AlertConfirmationProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AlertDialog.Root {...(notNullish(isOpen) && { open: isOpen })}>
    <AlertDialog.Trigger asChild>{triggerButton}</AlertDialog.Trigger>
    <AlertDialog.Portal>
      <StyledOverlay />
      <StyledAlertDialogContent onEscapeKeyDown={onCancel}>
        <StyledAlertDialogTitle>{title}</StyledAlertDialogTitle>
        <StyledAlertDialogDescription>
          {description}
        </StyledAlertDialogDescription>
        <FlexRow>
          <AlertDialog.Cancel asChild onClick={onCancel}>
            <StyledButton btn="secondary">{cancelButtonText}</StyledButton>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild onClick={onOk}>
            {confirmButton || <StyledButton>{confirmButtonText}</StyledButton>}
          </AlertDialog.Action>
        </FlexRow>
      </StyledAlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

AlertConfirmation.defaultProps = {
  isOpen: undefined,
  onCancel: undefined,
  confirmButton: undefined,
  confirmButtonText: 'Confirmar',
};

export { AlertConfirmation };
export type { AlertConfirmationProps };

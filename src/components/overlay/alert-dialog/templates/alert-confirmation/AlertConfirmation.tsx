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
  description: string;
  confirmButtonText: ReactNode;
  cancelButtonText: ReactNode;
  onOk: () => void;
  onCancel?: () => void;
  triggerButton: ReactElement<typeof Button>;
  isOpen?: boolean;
};

const AlertConfirmation = ({
  title,
  description,
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
          <AlertDialog.Action asChild onClick={onCancel}>
            <StyledButton btn="secondary">{cancelButtonText}</StyledButton>
          </AlertDialog.Action>
          <AlertDialog.Action asChild onClick={onOk}>
            <StyledButton>{confirmButtonText}</StyledButton>
          </AlertDialog.Action>
        </FlexRow>
      </StyledAlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

AlertConfirmation.defaultProps = {
  isOpen: undefined,
  onCancel: undefined,
};

export { AlertConfirmation };
export type { AlertConfirmationProps };

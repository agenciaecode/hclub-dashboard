import { ButtonType } from '@components/form/button/types';

export type AlertDialogProps = {
  title: string;
  description: string;
  triggerButtonName: string;
  triggerButtonType?: ButtonType;
  cancelButtonName: string;
  confirmButtonName: string;
  confirmButtonType?: ButtonType;
  cancelButtonType?: ButtonType;
  confirmCallback?: () => void;
  cancelCallback?: () => void;
};

import { toast, ToastOptions } from 'react-toastify';

export function showToastErrorMessage(message: string, options?: ToastOptions) {
  toast.error(message, options);
}

export function showToastSuccessMessage(
  message: string,
  options?: ToastOptions,
) {
  toast.success(message, options);
}

import { useEffect } from 'react';

export const useSuccessEffect = (isSuccess: boolean, onSuccess: () => void) => {
  useEffect(() => {
    if (isSuccess) {
      onSuccess();
    }
  }, [isSuccess, onSuccess]);
};

import { useMutation } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@/services/http/api-client';

type RecoverPasswordInput = {
  email: string;
};

type RecoverPasswordValidationErrors = ValidationError<RecoverPasswordInput>;

function recoverPassword(recoverPasswordInput: RecoverPasswordInput) {
  return http.post('/auth/recover-password', recoverPasswordInput);
}

const useRecoverPasswordMutation = () => useMutation(recoverPassword);

export { useRecoverPasswordMutation };
export type { RecoverPasswordInput, RecoverPasswordValidationErrors };

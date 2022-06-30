import { useMutation } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

type UpdatePasswordInput = {
  password: string;
  new_password: string;
  new_password_confirmation: string;
};

type UpdatePasswordValidationErrors = ValidationError<UpdatePasswordInput>;

function updatePassword(updatePasswordInput: UpdatePasswordInput) {
  return http.put('/auth/password', updatePasswordInput);
}

const useUpdatePasswordMutation = () => useMutation(updatePassword);

export { useUpdatePasswordMutation };
export type { UpdatePasswordInput, UpdatePasswordValidationErrors };

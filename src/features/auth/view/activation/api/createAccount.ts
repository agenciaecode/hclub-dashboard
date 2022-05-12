// eslint-disable-next-line max-classes-per-file
import { useMutation } from 'react-query';

import { http } from '@/services/http/AxiosHttpClient';
import { ValidationError } from '@/services/http/HttpException';

type CreateAccountInput = {
  serial_number: string;
  username: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  accept_link: boolean;
};

type CreateAccountOutput = {
  user_id: number;
};

type CreateAccountValidationErrors = ValidationError<CreateAccountInput>;

function createAccount(
  createUserInput: CreateAccountInput,
): Promise<CreateAccountOutput> {
  return http.post('/register-device', createUserInput);
}

const useCreateAccountMutation = () => useMutation(createAccount);

export { useCreateAccountMutation };
export type {
  CreateAccountInput,
  CreateAccountOutput,
  CreateAccountValidationErrors,
};

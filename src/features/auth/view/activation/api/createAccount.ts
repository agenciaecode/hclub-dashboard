// eslint-disable-next-line max-classes-per-file

import { useMutation } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

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

const accountErrorCodes = {
  /**
   * Device serial was not found or already registered
   * @statusCode 404
   * @see {@link https://github.com/agenciaecode/hman/tree/develop/docs/Errors#devicenotactivatednotfoundexception}
   */
  NO_DEVICE: '10250',
} as const;

export { useCreateAccountMutation, accountErrorCodes };
export type {
  CreateAccountInput,
  CreateAccountOutput,
  CreateAccountValidationErrors,
};

import { useMutation } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@/services/http/api-client';

type LoginInput = {
  email: string;
  password: string;
};

type LoginOutput = {
  user: {
    username: string;
    name: string;
    email: string;
  };
  token: string;
  token_type: string;
};

type LoginValidationErrors = ValidationError<LoginInput>;

function fetchLogin(loginInput: LoginInput): Promise<LoginOutput> {
  return http.post('/auth/login', loginInput);
}

const useLoginMutation = () => useMutation(fetchLogin);

export { useLoginMutation };
export type { LoginInput, LoginOutput, LoginValidationErrors };

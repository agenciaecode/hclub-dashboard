import { filteredErrorData } from '@libs/auth/utils/error';
import { ValidationError } from '@libs/http/HttpException';
import { apiDashboard } from '@services/app';

type LoginInput = {
  userName: string;
  password: string;
};

type LoginOutput = {
  user: {
    id: number;
    username: string;
    name: string;
    email: string;
  };
  token: string;
  token_type: string;
};

type LoginValidationErrors = ValidationError<LoginInput>;

/**
 * send request to api to login
 * @param loginInput
 * @see {@link https://github.com/agenciaecode/mont-dashboard-b2b/blob/develop/src/pages/api/%5B...auth%5D.ts#L11}
 */
function sendLoginRequest(loginInput: LoginInput) {
  return apiDashboard
    .post<LoginOutput>('/auth/login', {
      email: loginInput.userName,
      password: loginInput.password,
    })
    .then(response => {
      const {
        token,
        token_type,
        user: { id, username, name, email },
      } = response.data;
      return {
        token,
        token_type,
        id,
        username,
        name,
        email,
      };
    })
    .catch(error => {
      const { message } = filteredErrorData(error);
      throw new Error(message);
    });
}

export { sendLoginRequest };
export type { LoginInput, LoginOutput, LoginValidationErrors };

/* eslint-disable no-restricted-imports */
import { useMutation } from 'react-query';

import { signIn } from '@libs/auth/react';
import { setCookieSessionRequest } from '@services/app/utils/cookie';

import { sendLoginRequest as sendServerSideLoginRequest } from '@features/auth/api/server-side-login';

type LoginInput = {
  email: string;
  password: string;
};

async function sendLoginRequest(loginInput: LoginInput) {
  const loginResponse = await signIn<
    Awaited<ReturnType<typeof sendServerSideLoginRequest>>
  >(
    {
      userName: loginInput.email,
      password: loginInput.password,
    },
    {
      redirect: '/dashboard',
    },
  );
  if (loginResponse.data.token)
    setCookieSessionRequest(loginResponse.data.token);
}

export const useLoginMutation = () => useMutation(sendLoginRequest);
export type { LoginInput };

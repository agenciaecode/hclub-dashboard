import Router from 'next/router';

import { mutate } from 'swr';

import { SESSION, SIGN_OUT } from '../../../constants/routes';
import { filteredErrorData } from '../../../utils/error';
import { fetchApi } from '../../../utils/fetch';
import { Options, SignOutResponse } from './types';

export async function signOut(options: Options): Promise<SignOutResponse> {
  const { redirect } = options;

  if (!redirect) throw new Error();

  try {
    await fetchApi.post(SIGN_OUT);
    await mutate(SESSION);

    if (redirect) Router.replace(redirect);

    return {
      isAuthenticated: false,
      redirect,
    };
  } catch (error) {
    const { message } = filteredErrorData(error);
    throw new Error(message || 'Erro interno.');
  }
}

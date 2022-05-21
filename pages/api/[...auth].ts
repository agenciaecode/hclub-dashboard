/* eslint-disable no-restricted-imports */
import { auth } from '@libs/auth/server';

import { sendLoginRequest } from '@features/auth/api/server-side-login';

export default auth({
  authentication: {
    signIn: async credentials => sendLoginRequest(credentials),
  },
  defaultPages: {
    default: '/dashboard',
    signIn: '/login',
  },
  publicPages: {
    signIn: '/login',
    ativar: '/ativar',
  },
});

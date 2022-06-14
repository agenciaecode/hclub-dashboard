import { signOut } from '@libs/auth/react';
import { destroyCookieSessionRequest } from '@services/app/utils/cookie';

async function logout() {
  destroyCookieSessionRequest();
  await signOut({ redirect: '/login' });
}

export { logout };

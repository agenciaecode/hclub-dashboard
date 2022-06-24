import { NextApiRequest } from 'next';

import Iron from '@hapi/iron';

import { PREFIX_BASE_SESSION } from '../../../constants/session';
import { getCookie } from '../../utils/cookie/index';

const PASSWORD = process.env.AUTH_COOKIE_PASSWORD;

export async function getSession<T>(
  nameSession: string,
  req: NextApiRequest,
): Promise<T | undefined> {
  const password = PASSWORD;

  if (!password) {
    throw new Error(`auth: Bad use. AUTH_COOKIE_PASSWORD key required.`);
  }

  if (password.length < 32) {
    throw new Error(
      `auth: Bad usage. Password must be at least 32 characters long.`,
    );
  }

  const token = getCookie(`${PREFIX_BASE_SESSION}${nameSession}`, req);

  if (!token) return undefined;

  const session = await Iron.unseal(token, PASSWORD, Iron.defaults);

  return session;
}

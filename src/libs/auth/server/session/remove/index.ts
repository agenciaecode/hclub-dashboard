import { NextApiResponse } from 'next';

import { PREFIX_BASE_SESSION } from '../../../constants/session';
import { removeCookie } from '../../utils/cookie';

export function removeSession(
  nameSession: string | string[],
  response: NextApiResponse,
): NextApiResponse {
  let namesSessions = nameSession;
  if (Array.isArray(nameSession))
    namesSessions = nameSession.map(name => `${PREFIX_BASE_SESSION}${name}`);
  removeCookie(namesSessions, response);
  return response;
}

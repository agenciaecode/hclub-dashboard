import { NextApiRequest, NextApiResponse } from 'next';

import { AuthConfig } from '../../../config/types';
import { AuthSessionResponse, AuthSessionResponseError } from '../../../types';

export type SessionProps = {
  request: NextApiRequest;
  response: NextApiResponse<AuthSessionResponse | AuthSessionResponseError>;
  configAuth: AuthConfig;
  callback?: (
    req: NextApiRequest,
    res: NextApiResponse,
  ) => Promise<void> | void;
};

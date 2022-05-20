import { NextApiRequest, NextApiResponse } from 'next';

export type ResponseFetch = string[];

export type SetPermission = (
  req: NextApiRequest,
  res: NextApiResponse,
) => ResponseFetch | Promise<ResponseFetch>;

export type PermissionConfig = {
  /**
      Validate expiration has default value: true
    */
  validateExpiration: boolean;
};

export type Permission = {
  setPermission: SetPermission;
  options?: PermissionConfig;
};

export type SetPermissionProps = {
  request: NextApiRequest;
  response: NextApiResponse;
  setPermission?: SetPermission;
  options: PermissionConfig;
};

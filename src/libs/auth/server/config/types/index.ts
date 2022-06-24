import { NextApiRequest, NextApiResponse } from 'next';

import {
  Permission,
  PermissionConfig,
} from '../../actions/set-permission/types';
import {
  Authentication,
  AuthenticationConfig,
  SignInCallback,
} from '../../actions/sign-in/types';

type FunctionCallback = (
  req: NextApiRequest,
  res: NextApiResponse,
) => void | Promise<void>;

export type DefaultPages = {
  default: string;
  signIn: string;
};

export type PublicPages = {
  [key: string]: string | undefined;
  signIn?: '/login' | string | undefined;
};

export type Auth = {
  authentication: Authentication;
  permission?: Permission;
  callback?: {
    signIn?: SignInCallback;
    signOut?: FunctionCallback;
    session?: FunctionCallback;
  };
  defaultPages: DefaultPages;
  publicPages: {
    [key: string]: string | undefined;
  };
};

export type AuthConfigAuthentication = {
  options: AuthenticationConfig;
};

export type AuthConfigPermission = {
  options: PermissionConfig;
};

export type AuthConfig = {
  method: string | undefined;
  originUrl: string | undefined;
  defaultPages: DefaultPages;
  publicPages: PublicPages;
  authentication: AuthConfigAuthentication;
  permission: AuthConfigPermission;
  originHost: {
    protocol: string;
    host: string;
    origin: string;
  };
};

import { ReactNode } from 'react';

import { AuthOptions } from '../../../../next/types';
import {
  AuthSession,
  SessionPermission,
  SessionUser,
} from '../../../../server/types';

export interface AuthProviderProps {
  children: ReactNode;
  auth?: AuthOptions | undefined;
}

export interface AuthContextProps extends AuthSession {
  isAuthenticated: boolean;
  user: SessionUser | null;
  permissions: SessionPermission | null;
  hasPermission: (permission: string) => boolean;
}

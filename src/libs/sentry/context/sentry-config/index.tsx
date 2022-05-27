import React, { createContext } from 'react';

import * as Sentry from '@sentry/browser';

import { useAuth } from '@libs/auth/react';

import { AuthUser } from '@/types/AuthUser';

import { SentryProviderProps } from './types';

if (process) {
  const { APP_SENTRY_DSN, APP_SENTRY_ENVIRONMENT } = process.env;
  Sentry.init({
    dsn: APP_SENTRY_DSN,
    environment: APP_SENTRY_ENVIRONMENT,
  });
}

export const SentryContext = createContext(undefined);

export const SentryProvider = ({
  children,
}: SentryProviderProps): React.ReactElement => {
  const { user } = useAuth<AuthUser>();

  const userName = user?.data?.username;

  if (userName) Sentry.setUser({ username: userName });

  Sentry.setContext('user-data', {
    ...user,
    json: JSON.stringify(user),
  });

  return (
    <SentryContext.Provider value={undefined}>
      {children}
    </SentryContext.Provider>
  );
};

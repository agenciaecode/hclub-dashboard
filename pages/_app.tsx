import Head from 'next/head';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, Bounce } from 'react-toastify';

import { AuthAppProps } from '@libs/auth/next/types';
import { AuthProvider } from '@libs/auth/react';
import { SentryProvider } from '@libs/sentry';

import { AppThemeProvider } from '@/theme';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const App = (props: AuthAppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>HClub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SentryProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider auth={Component.auth}>
            <AppThemeProvider>
              <ToastContainer
                limit={3}
                autoClose={5000}
                transition={Bounce}
                icon
              />
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component {...pageProps} />
            </AppThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </SentryProvider>
    </>
  );
};

export default App;

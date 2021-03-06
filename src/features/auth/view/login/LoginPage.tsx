import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@libs/auth/react';

import whiteWalletImage from '../../assets/images/wallet-white-revision-1-1.png';

import { LoginForm } from '../../sections/login-form';
import {
  StyledContentSection,
  StyledFooter,
  StyledMain,
  StyledSplashSection,
} from './LoginPage.styles';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Login | HClub</title>
        <meta name="description" content="H.club login" />
      </Head>
      <StyledMain>
        <StyledContentSection>
          <LoginForm />
        </StyledContentSection>
        <StyledSplashSection>
          <Image
            src={whiteWalletImage}
            alt="Carteira Essencial Branca"
            width={368}
            height={560}
          />
        </StyledSplashSection>
        <StyledFooter />
      </StyledMain>
    </>
  );
};

export { LoginPage };

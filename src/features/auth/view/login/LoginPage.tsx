import Head from 'next/head';
import Image from 'next/image';

import { LoginForm } from '../../sections/login-form';
import whiteWalletImage from '../../assets/images/wallet-white-revision-1-1.png';

import {
  StyledContentSection,
  StyledFooter,
  StyledMain,
  StyledSplashSection,
} from './LoginPage.styles';

const LoginPage = () => (
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

export { LoginPage };

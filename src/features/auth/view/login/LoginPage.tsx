import Head from 'next/head';
import Image from 'next/image';

import {
  StyledContentSection,
  StyledFooter,
  StyledMain,
  StyledSplashSection,
} from './LoginPage.styles';

import { LoginForm } from './sections';
import whiteWalletImage from './assets/images/wallet-white-revision-1-1.png';

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

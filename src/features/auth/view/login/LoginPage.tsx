import Head from 'next/head';

import {
  StyledContentSection,
  StyledFooter,
  StyledImage,
  StyledMain,
  StyledSplashSection,
} from './LoginPage.styles';

import { LoginForm } from './sections';
import whiteWalletImage from './assets/images/wallet-white-1.png';

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
        <StyledImage src={whiteWalletImage} alt="Carteira Essencial Branca" />
      </StyledSplashSection>
      <StyledFooter />
    </StyledMain>
  </>
);

export { LoginPage };

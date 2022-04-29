import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import whiteWalletImage from '../../assets/images/wallet-white-revision-1-1.png';

import {
  StyledContentSection,
  StyledFooter,
  StyledMain,
  StyledSplashSection,
} from './ActivationPage.styles';
import { AccountForm } from './sections/account-form/AccountForm';
import { LoginForm } from './sections';

const ActivationPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  function toggleRegisterForm() {
    setIsRegistering(!isRegistering);
  }

  return (
    <>
      <Head>
        <title>Ativar Dispositivo | HClub</title>
        <meta name="description" content="H.club login" />
      </Head>
      <StyledMain>
        <StyledContentSection>
          {isRegistering ? (
            <AccountForm backToLoginForm={toggleRegisterForm} />
          ) : (
            <>
              <LoginForm openRegisterForm={toggleRegisterForm} />
              <StyledFooter />
            </>
          )}
        </StyledContentSection>
        <StyledSplashSection>
          <Image
            src={whiteWalletImage}
            alt="Carteira Essencial Branca"
            width={368}
            height={560}
          />
        </StyledSplashSection>
      </StyledMain>
    </>
  );
};

export { ActivationPage };

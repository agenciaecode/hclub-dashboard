import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

// eslint-disable-next-line import/no-cycle
import { ProductInformation } from '@features/auth';

import {
  StyledContentSection,
  StyledFooter,
  StyledMain,
  StyledMobileSplashSection,
  StyledSplashSection,
} from './ActivationPage.styles';
import { LoginForm } from './sections';
import { AccountForm } from './sections/account-form/AccountForm';

export type ActivationPageProps = {
  productInformation: ProductInformation;
};

export const ActivationPage = ({ productInformation }: ActivationPageProps) => {
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
              <StyledMobileSplashSection>
                <Image
                  src={productInformation.mobile_image.url}
                  alt={productInformation.title}
                  width={productInformation.mobile_image.width}
                  height={productInformation.mobile_image.height}
                />
              </StyledMobileSplashSection>
              <StyledFooter mobile-dark />
            </>
          )}
        </StyledContentSection>
        <StyledSplashSection>
          <Image
            src={productInformation.desktop_image.url}
            alt={productInformation.title}
            width={productInformation.desktop_image.width}
            height={productInformation.desktop_image.height}
          />
        </StyledSplashSection>
      </StyledMain>
    </>
  );
};

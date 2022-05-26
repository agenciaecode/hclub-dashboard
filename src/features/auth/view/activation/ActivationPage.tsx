import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { notNullish } from '@antfu/utils';

import type { DeviceInformation } from '@features/auth';

import logoImage from '@assets/images/logo-hman-black.svg';

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
  deviceInformation: DeviceInformation;
};

const FooterWithMobileDeviceImage = ({
  deviceInformation,
}: ActivationPageProps) => (
  <>
    <StyledMobileSplashSection>
      {deviceInformation.mobile_image && (
        <Image
          src={deviceInformation.mobile_image.url}
          alt={deviceInformation.title}
          width={deviceInformation.mobile_image.width}
          height={deviceInformation.mobile_image.height}
        />
      )}
    </StyledMobileSplashSection>
    <StyledFooter mobile-dark />
  </>
);

export const ActivationPage = ({ deviceInformation }: ActivationPageProps) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  function toggleRegisterForm() {
    setIsRegistering(!isRegistering);
  }

  return (
    <>
      <Head>
        <title>Ativar Dispositivo | HClub</title>
        <meta name="description" content="H.club | Ativar dispositivo" />
        <meta
          property="og:title"
          content={`H.club | Ativar dispositivo | ${deviceInformation.title}`}
        />
        <meta property="og:url" content={router.asPath} />
        <meta
          property="og:image"
          content={
            deviceInformation.desktop_image?.url ??
            deviceInformation.mobile_image?.url ??
            logoImage
          }
        />
        <meta
          property="og:description"
          content={`Ativar e Vincular o dispotivo ${deviceInformation.title} a sua conta do HClub`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <StyledMain>
        <StyledContentSection>
          {isRegistering ? (
            <AccountForm backToLoginForm={toggleRegisterForm} />
          ) : (
            <>
              <LoginForm openRegisterForm={toggleRegisterForm} />
              <FooterWithMobileDeviceImage
                deviceInformation={deviceInformation}
              />
            </>
          )}
        </StyledContentSection>
        <StyledSplashSection>
          {deviceInformation.desktop_image && (
            <Image
              src={deviceInformation.desktop_image.url}
              alt={deviceInformation.title}
              width={deviceInformation.desktop_image.width}
              height={deviceInformation.desktop_image.height}
            />
          )}
        </StyledSplashSection>
      </StyledMain>
    </>
  );
};

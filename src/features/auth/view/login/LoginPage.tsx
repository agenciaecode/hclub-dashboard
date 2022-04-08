import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';

import {
  StyledFooter,
  StyledForgotPasswordContainer,
  StyledFormSection,
  StyledImage,
  StyledLoginArticle,
  StyledLoginHeader,
  StyledLoginSection,
  StyledMain,
  StyledRegisterButtonContainer,
  StyledSplashSection,
} from './LoginPage.styles';

import whiteWalletImage from './assets/images/wallet-white-1.png';
import { ForgotPasswordModal } from './sections';

import logoImage from '@/assets/images/logo.png';

const LoginPage = () => (
  <>
    <Head>
      <title>Login | HClub</title>
      <meta name="description" content="H.club login" />
    </Head>
    <StyledMain>
      <StyledLoginSection>
        <header>
          <figure>
            <Image src={logoImage} alt="H.man Logo" layout="fill" />
          </figure>
        </header>
        <section>
          <StyledLoginArticle>
            <StyledLoginHeader>
              <h1>Bem vindo</h1>
              <h3>Se conecte com a sua conta</h3>
            </StyledLoginHeader>
            <StyledFormSection>
              <form action="">
                <section>
                  <TextInput
                    label="E-mail"
                    id="email"
                    name="email"
                    placeholder="Insira seu e-mail"
                    type="email"
                  />
                  <TextInput
                    label="Senha"
                    id="password"
                    name="password"
                    placeholder="Insira sua senha"
                    type="password"
                  />
                </section>
                <StyledForgotPasswordContainer>
                  <ForgotPasswordModal />
                </StyledForgotPasswordContainer>
                <Button btn="primary" type="submit">
                  Entrar
                </Button>
                <StyledRegisterButtonContainer>
                  <Link href="#TODO">Não possui uma conta? Cadastre-se</Link>
                </StyledRegisterButtonContainer>
              </form>
            </StyledFormSection>
          </StyledLoginArticle>
        </section>
      </StyledLoginSection>
      <StyledSplashSection>
        <StyledImage src={whiteWalletImage} alt="Carteira Essencial Branca" />
      </StyledSplashSection>
      <StyledFooter />
    </StyledMain>
  </>
);

export { LoginPage };

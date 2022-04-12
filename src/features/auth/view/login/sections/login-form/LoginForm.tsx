import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';

import { ForgotPasswordModal } from '../forgot-password-modal';

import {
  StyledForgotPasswordContainer,
  StyledForm,
  StyledFormHeader,
  StyledFormInputsSections,
  StyledLoginArticle,
  StyledLoginContentSection,
  StyledLoginHeader,
  StyledRegisterButtonContainer,
} from './LoginForm.styles';

import logoImage from '@/assets/images/logo.png';

const LoginForm = () => (
  <>
    <StyledLoginHeader>
      <figure>
        <Image src={logoImage} alt="H.man Logo" layout="fill" />
      </figure>
    </StyledLoginHeader>
    <StyledLoginContentSection>
      <StyledLoginArticle>
        <StyledFormHeader>
          <h1>Bem vindo</h1>
          <h3>Se conecte com a sua conta</h3>
        </StyledFormHeader>
        <StyledForm action="">
          <StyledFormInputsSections>
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
          </StyledFormInputsSections>
          <StyledForgotPasswordContainer>
            <ForgotPasswordModal />
          </StyledForgotPasswordContainer>
          <Button btn="primary" type="submit">
            Entrar
          </Button>
          <StyledRegisterButtonContainer>
            <Link href="#TODO">Não possui uma conta? Cadastre-se</Link>
          </StyledRegisterButtonContainer>
        </StyledForm>
      </StyledLoginArticle>
    </StyledLoginContentSection>
  </>
);

export { LoginForm };

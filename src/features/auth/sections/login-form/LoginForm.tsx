import React from 'react';

import Image from 'next/image';

import { TextInput } from '@components/forms/text-input';
import { LoadingButton } from '@components/forms/loading-button';

import { ForgotPasswordModal } from '../forgot-password-modal';
import { FormContainer } from '../../components/form-container';

import {
  StyledForgotPasswordContainer,
  StyledFormInputsSections,
} from './LoginForm.styles';
import { loginFormSchema } from './LoginForm.schema';

import logoImage from '@assets/images/logo-hman-black.svg';
import { WithChildren } from '@/types/with-children';
import { useFormWithSchema } from '@libs/hook-form';

const LoginForm = ({ children }: WithChildren) => {
  const {
    formState: { errors: loginFormErrors },
    ...loginForm
  } = useFormWithSchema(loginFormSchema);

  async function handleLoginSubmit() {
    // eslint-disable-next-line no-console
    console.log('Login submit', loginForm.getValues());
  }

  return (
    <FormContainer
      title="Bem vindo"
      description="Se conecte com a sua conta"
      formSubmitHandler={loginForm.handleSubmit(handleLoginSubmit)}
      headerSlot={
        <Image src={logoImage} alt="H.man Logo" width={60} height={60} />
      }
      formSlot={
        <>
          <StyledFormInputsSections>
            <TextInput
              label="E-mail"
              name="email"
              placeholder="Insira seu e-mail"
              type="email"
              errorMessage={loginFormErrors.email?.message}
              register={loginForm.register}
            />
            <TextInput
              label="Senha"
              name="password"
              placeholder="Insira sua senha"
              type="password"
              errorMessage={loginFormErrors.password?.message}
              register={loginForm.register}
            />
          </StyledFormInputsSections>
          <StyledForgotPasswordContainer>
            <ForgotPasswordModal />
          </StyledForgotPasswordContainer>
          <LoadingButton isLoading={false} isSuccess={false}>
            Entrar
          </LoadingButton>
          {children}
        </>
      }
    />
  );
};

export { LoginForm };

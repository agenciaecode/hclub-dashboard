import React, { useEffect } from 'react';

import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { useFormWithSchema } from '@libs/hook-form';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { WithChildren } from '@/types/with-children';

import { FormContainer } from '../../components/form-container';
import { HmanBlackLogo } from '../../components/hman-black-logo';
import { ForgotPasswordModal } from '../forgot-password-modal';
import { useLoginMutation } from './api/login';
import { loginFormSchema } from './LoginForm.schema';
import {
  StyledForgotPasswordContainer,
  StyledFormInputsSections,
} from './LoginForm.styles';

const LoginForm = ({ children }: WithChildren) => {
  const loginMutation = useLoginMutation();
  const {
    formState: { errors: loginFormErrors },
    ...loginForm
  } = useFormWithSchema(loginFormSchema);

  useHttpExceptionHandler(loginMutation.error, exceptionHandler =>
    exceptionHandler
      .setClientExceptionHandler(() => {
        showToastErrorMessage(
          'Credenciais informadas não correspondem com nossos registros.',
        );
        loginMutation.reset();
      })
      .executeHandler(),
  );

  useEffect(() => {
    if (loginMutation.isSuccess) {
      showToastSuccessMessage('Login realizado com sucesso!');
    }
  }, [loginMutation.isSuccess, loginMutation.data]);

  function handleLoginSubmit() {
    if (loginMutation.isLoading) return;
    loginMutation.mutate(loginForm.getValues());
  }

  return (
    <FormContainer
      title="Bem vindo"
      description="Se conecte com a sua conta"
      formSubmitHandler={loginForm.handleSubmit(handleLoginSubmit)}
      headerSlot={<HmanBlackLogo />}
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
          <LoadingButton
            isLoading={loginMutation.isLoading}
            isSuccess={loginMutation.isSuccess}
          >
            Entrar
          </LoadingButton>
          {children}
        </>
      }
    />
  );
};

export { LoginForm };

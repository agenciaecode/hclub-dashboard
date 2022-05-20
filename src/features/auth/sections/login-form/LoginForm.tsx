import Image from 'next/image';
import React from 'react';

import { StatusCodes } from 'http-status-codes';

import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { useSuccessEffect } from '@hooks/useSuccessEffect';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '@libs/toast/showToastMessage';
import { handleClientExceptionByStatus } from '@services/http/default-status-code-handlers';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { WithChildren } from '@/types/with-children';

import logoImage from '@assets/images/logo-hman-black.svg';

import { FormContainer } from '../../components/form-container';
import { ForgotPasswordModal } from '../forgot-password-modal';
import { LoginValidationErrors, useLoginMutation } from './api/login';
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
      .setValidationExceptionHandler<LoginValidationErrors>(
        setFormErrorsFromException(loginForm.setError),
      )
      .setClientExceptionHandler(
        handleClientExceptionByStatus({
          [StatusCodes.BAD_REQUEST]: () =>
            showToastErrorMessage(
              'Credenciais informadas não correspondem com nossos registros.',
            ),
        }),
      )
      .executeHandler(),
  );

  useSuccessEffect(loginMutation.isSuccess, () => {
    showToastSuccessMessage('Login realizado com sucesso!');
  });

  function handleLoginSubmit() {
    if (loginMutation.isLoading) return;
    loginMutation.mutate(loginForm.getValues());
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

import React from 'react';

import Image from 'next/image';
import { StatusCodes } from 'http-status-codes';

import { TextInput } from '@components/forms/text-input';
import { LoadingButton } from '@components/forms/loading-button';

import { useSuccessEffect } from '@hooks/useSuccessEffect';

import { ForgotPasswordModal } from '../forgot-password-modal';
import { FormContainer } from '../../components/form-container';

import { LoginValidationErrors, useLoginMutation } from './api/login';

import {
  StyledForgotPasswordContainer,
  StyledFormInputsSections,
} from './LoginForm.styles';
import { loginFormSchema } from './LoginForm.schema';

import logoImage from '@assets/images/logo-hman-black.svg';
import { WithChildren } from '@/types/with-children';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@/services/http/hooks/useHttpExceptionHandler';
import { handleClientExceptionByStatus } from '@/services/http/default-status-code-handlers';

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

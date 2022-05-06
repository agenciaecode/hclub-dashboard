import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';

// eslint-disable-next-line no-restricted-imports
import { ForgotPasswordModal } from '@features/auth/view/login/sections';

import { FormContainer } from '../../components/form-container';

import {
  StyledForgotPasswordContainer,
  StyledFormInputsSections,
  StyledLogoFigure,
  StyledRegisterButtonContainer,
} from './LoginForm.styles';
import { loginFormSchema } from './LoginForm.schema';

import logoImage from '@assets/images/logo-hman-black.svg';

type LoginFormProps = {
  openRegisterForm: () => void;
};

type loginCredentialsForm = InferType<typeof loginFormSchema>;

const LoginForm = ({ openRegisterForm }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    getValues: getFormValues,
    formState: { errors },
  } = useForm<loginCredentialsForm>({
    resolver: yupResolver(loginFormSchema),
  });

  async function handleLoginSubmit() {
    // eslint-disable-next-line no-console
    console.log('Login submit', getFormValues);
  }

  return (
    <FormContainer
      title="Bem vindo"
      description="Se conecte com a sua conta"
      formSubmitHandler={handleSubmit(handleLoginSubmit)}
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
              errorMessage={errors.email?.message}
              register={register}
            />
            <TextInput
              label="Senha"
              name="password"
              placeholder="Insira sua senha"
              type="password"
              errorMessage={errors.password?.message}
              register={register}
            />
          </StyledFormInputsSections>
          <StyledForgotPasswordContainer>
            <ForgotPasswordModal />
          </StyledForgotPasswordContainer>
          <Button type="submit">
            <span>Entrar</span>
            {/* <CheckMarkSpinner finished /> */}
          </Button>
          <StyledRegisterButtonContainer>
            <button type="button" onClick={() => openRegisterForm()}>
              Não possui uma conta? Cadastre-se
            </button>
          </StyledRegisterButtonContainer>
        </>
      }
    />
  );
};

export { LoginForm };

import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';

import { ForgotPasswordModal } from '../forgot-password-modal';
import { LoginCredentialsDTO } from '../../api/login';

import {
  StyledForgotPasswordContainer,
  StyledForm,
  StyledFormHeader,
  StyledFormInputsSections,
  StyledLoginArticle,
  StyledLoginContentSection,
  StyledLoginHeader,
} from './LoginForm.styles';
import { loginFormSchema } from './LoginForm.schema';

import logoImage from '@assets/images/logo-hman-black.svg';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    getValues: getFormValues,
    formState: { errors },
  } = useForm<LoginCredentialsDTO>({
    resolver: yupResolver(loginFormSchema),
  });

  async function handleLoginSubmit() {
    // eslint-disable-next-line no-console
    console.log('Login submit', getFormValues);
  }

  return (
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
          <StyledForm onSubmit={handleSubmit(handleLoginSubmit)}>
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
            {/* <StyledRegisterButtonContainer>
              <Link href="#TODO">Não possui uma conta? Cadastre-se</Link>
            </StyledRegisterButtonContainer> */}
          </StyledForm>
        </StyledLoginArticle>
      </StyledLoginContentSection>
    </>
  );
};

export { LoginForm };

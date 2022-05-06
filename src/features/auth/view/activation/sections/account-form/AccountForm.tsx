/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { useRouter } from 'next/router';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';
import { BackButton } from '@components/others/back-button';
import { ControlledCheckbox } from '@components/forms/checkbox';
import { Label } from '@components/forms/label';
import { ErrorLabel } from '@components/forms/error-label';
import { Navbar } from '@components/layout/navbar';

import { FormContainer } from '../../components/form-container';

import {
  HiddenOnDesktop,
  StyledFlexRow,
  StyledFormInputsSections,
  StyledHeader,
} from './AccountForm.styles';
import { accountFormSchema } from './AccountForm.schema';
import { IconUser } from './components/icon-user';

type AccountFormProps = {
  backToLoginForm: () => void;
};

type AccountForm = InferType<typeof accountFormSchema>;

const AccountForm = ({ backToLoginForm }: AccountFormProps) => {
  const router = useRouter();
  const { serial } = router.query;
  const {
    register,
    handleSubmit,
    getValues: getFormValues,
    formState: { errors },
    control,
  } = useForm<AccountForm>({
    resolver: yupResolver(accountFormSchema),
  });

  function handleAccountSubmit() {
    // eslint-disable-next-line no-console
    console.log('account form values', getFormValues());
  }

  //! TODO - restructure this code
  const Header = (
    <>
      <HiddenOnDesktop>
        <Navbar>
          <BackButton
            css={{
              path: {
                stroke: '$primaryWhite',
                '@desktop': {
                  stroke: '$primaryBlack',
                },
              },
            }}
            onClick={backToLoginForm}
          />
        </Navbar>
        <StyledHeader>
          <IconUser />
          <span>Crie a sua Conta</span>
        </StyledHeader>
      </HiddenOnDesktop>
      <BackButton
        css={{
          displayOnlyOnDesktop: 'block',
        }}
        onClick={backToLoginForm}
      />
    </>
  );

  return (
    <FormContainer
      title="Cadastro"
      description="Preencha os campos abaixo para criar sua conta"
      formSubmitHandler={handleSubmit(handleAccountSubmit)}
      headerSlot={Header}
      headerCss={{
        display: 'block',
        padding: '0',
        '@desktop': {
          display: 'block',
          padding: '4rem 4rem 0',
        },
      }}
      formHeaderCss={{ displayOnlyOnDesktop: 'flex' }}
      formSlot={
        <>
          <StyledFormInputsSections>
            <TextInput
              label="Série do Produto"
              name="serial"
              placeholder="Insira o número de série do produto"
              type="text"
              errorMessage={errors.serial?.message}
              defaultValue={serial as string}
              readOnly
              register={register}
            />
            <TextInput
              label="Usuário"
              name="username"
              placeholder="Insira o nome de usuário"
              type="text"
              errorMessage={errors.username?.message}
              register={register}
            />
            <TextInput
              label="Seu Nome"
              name="name"
              placeholder="Insira o seu nome"
              type="text"
              errorMessage={errors.name?.message}
              register={register}
            />
            <TextInput
              label="E-mail"
              name="email"
              placeholder="Insira o seu email"
              type="text"
              errorMessage={errors.email?.message}
              register={register}
            />
            <TextInput
              label="Senha"
              name="password"
              placeholder="Crie sua senha"
              type="password"
              errorMessage={errors.password?.message}
              register={register}
            />
            <TextInput
              label="Confirmar Senha"
              name="password_confirmation"
              placeholder="Confirme sua senha"
              type="password"
              errorMessage={errors.password_confirmation?.message}
              register={register}
            />
            <div>
              <StyledFlexRow>
                <ControlledCheckbox name="accept_link" control={control} />
                <Label htmlFor="accept_link">
                  Criar conta e vincular produto.
                </Label>
              </StyledFlexRow>
              <ErrorLabel
                htmlFor="accept_link"
                errorMessage={errors.accept_link?.message}
              />
            </div>
          </StyledFormInputsSections>
          <Button
            type="submit"
            css={{
              marginTop: 'calc(2.4rem - 1.6rem) !important',
            }}
          >
            <span>Criar a minha conta</span>
          </Button>
        </>
      }
    />
  );
};

export { AccountForm };

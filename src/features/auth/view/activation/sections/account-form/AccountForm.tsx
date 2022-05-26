import { useRouter } from 'next/router';

import { StatusCodes } from 'http-status-codes';

import { ControlledCheckbox } from '@components/forms/checkbox';
import { ErrorLabel } from '@components/forms/error-label';
import { Label } from '@components/forms/label';
import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { Navbar } from '@components/layout/navbar';
import { BackButton } from '@components/others/back-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { useSuccessEffect } from '@hooks/useSuccessEffect';
import { useFormWithSchema, setFormErrorsFromException } from '@libs/hook-form';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '@libs/toast/showToastMessage';
import {
  handleApiCode,
  handleClientExceptionByStatus,
} from '@services/http/default-status-code-handlers';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import type { DeviceInformation } from '@features/auth';

import { FormContainer } from '../../../../components/form-container';
import {
  accountErrorCodes,
  CreateAccountValidationErrors,
  useCreateAccountMutation,
} from '../../api/createAccount';
import { accountFormSchema } from './AccountForm.schema';
import {
  HiddenOnDesktop,
  StyledFlexRow,
  StyledFormInputsSections,
  StyledHeader,
} from './AccountForm.styles';
import { IconUser } from './components/icon-user';

type AccountFormProps = {
  backToLoginForm: () => void;
  deciveInformation: DeviceInformation;
};

const AccountForm = ({
  backToLoginForm,
  deciveInformation,
}: AccountFormProps) => {
  const router = useRouter();
  const { serial } = router.query;
  const {
    formState: { errors: accountFormErrors },
    ...accountForm
  } = useFormWithSchema(accountFormSchema);
  const createAccountMutation = useCreateAccountMutation();

  useHttpExceptionHandler(createAccountMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<CreateAccountValidationErrors>(
        setFormErrorsFromException(accountForm.setError),
      )
      .setClientExceptionHandler(
        handleClientExceptionByStatus({
          [StatusCodes.NOT_FOUND]: clientException =>
            handleApiCode(accountErrorCodes.NO_DEVICE, clientException, () =>
              showToastErrorMessage('Número de série do produto é inválido'),
            ),
        }),
      )
      .executeHandler(),
  );

  useSuccessEffect(createAccountMutation.isSuccess, () => {
    showToastSuccessMessage(
      'Conta criada com sucesso! Você já pode realizar o login.',
    );
    router.push('/login');
  });

  function handleAccountSubmit() {
    if (createAccountMutation.isLoading) return;
    createAccountMutation.mutate(accountForm.getValues());
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
      formSubmitHandler={() => undefined}
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
              name="serial_number"
              placeholder="Insira o número de série do produto"
              type="text"
              errorMessage={accountFormErrors.serial_number?.message}
              defaultValue={serial as string}
              readOnly
              register={accountForm.register}
            />
            <TextInput
              label="Usuário"
              name="username"
              placeholder="Insira o nome de usuário"
              type="text"
              errorMessage={accountFormErrors.username?.message}
              register={accountForm.register}
            />
            <TextInput
              label="Seu Nome"
              name="name"
              placeholder="Insira o seu nome"
              type="text"
              errorMessage={accountFormErrors.name?.message}
              register={accountForm.register}
            />
            <TextInput
              label="E-mail"
              name="email"
              placeholder="Insira o seu email"
              type="text"
              errorMessage={accountFormErrors.email?.message}
              register={accountForm.register}
            />
            <TextInput
              label="Senha"
              name="password"
              placeholder="Crie sua senha"
              type="password"
              errorMessage={accountFormErrors.password?.message}
              register={accountForm.register}
            />
            <TextInput
              label="Confirmar Senha"
              name="password_confirmation"
              placeholder="Confirme sua senha"
              type="password"
              errorMessage={accountFormErrors.password_confirmation?.message}
              register={accountForm.register}
            />
            <div>
              <StyledFlexRow>
                <ControlledCheckbox
                  name="accept_link"
                  control={accountForm.control}
                />
                <Label htmlFor="accept_link">
                  Criar conta e vincular produto.
                </Label>
              </StyledFlexRow>
              <ErrorLabel
                htmlFor="accept_link"
                errorMessage={accountFormErrors.accept_link?.message}
              />
            </div>
          </StyledFormInputsSections>
          <AlertConfirmation
            title="Confirmar Registro"
            description={`Você tem certeza que deseja ativar o dispositivo "${deciveInformation.title}" ao registrar sua sua conta?`}
            confirmButtonText="Confirmar"
            cancelButtonText="Cancelar"
            triggerButton={
              <LoadingButton
                css={{
                  marginTop: 'calc(2.4rem - 1.6rem) !important',
                }}
                isLoading={createAccountMutation.isLoading}
                isSuccess={createAccountMutation.isSuccess}
              >
                Criar a minha conta
              </LoadingButton>
            }
            onOk={() => accountForm.handleSubmit(handleAccountSubmit)()}
          />
        </>
      }
    />
  );
};

export { AccountForm };

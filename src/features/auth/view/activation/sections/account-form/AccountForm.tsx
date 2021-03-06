import { useRouter } from 'next/router';

import { StatusCodes } from 'http-status-codes';

import { LoadingButton } from '@components/forms/loading-button';
import { MaskedInput } from '@components/forms/masked-input';
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
  StyledFormInputsSections,
  StyledHeader,
} from './AccountForm.styles';
import { IconUser } from './components/icon-user';

type AccountFormProps = {
  backToLoginForm: () => void;
  deciveInformation: DeviceInformation;
};

function removePhoneMask(phone: string): string {
  return phone.replace(/[()]/g, '');
}

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
              showToastErrorMessage('N??mero de s??rie do produto ?? inv??lido'),
            ),
        }),
      )
      .executeHandler(),
  );

  useSuccessEffect(createAccountMutation.isSuccess, () => {
    showToastSuccessMessage(
      'Conta criada com sucesso! Voc?? j?? pode realizar o login.',
    );
    router.push('/login');
  });

  function handleAccountSubmit() {
    if (createAccountMutation.isLoading) return;
    createAccountMutation.mutate({
      ...accountForm.getValues(),
      cellphone: `+55 ${removePhoneMask(accountForm.getValues('cellphone'))}`,
    });
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
              label="S??rie do Produto"
              name="serial_number"
              placeholder="Insira o n??mero de s??rie do produto"
              type="text"
              errorMessage={accountFormErrors.serial_number?.message}
              defaultValue={serial as string}
              readOnly
              register={accountForm.register}
            />
            <TextInput
              label="Usu??rio"
              name="username"
              placeholder="Insira o nome de usu??rio"
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
            <MaskedInput
              label="N??mero de telefone"
              imaskProps={{
                mask: '(00) 00000-0000',
              }}
              name="cellphone"
              placeholder="(99) 99999-9999"
              control={accountForm.control}
              errorMessage={accountFormErrors.cellphone?.message}
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
          </StyledFormInputsSections>
          <AlertConfirmation
            title="Confirmar Registro"
            description={`Voc?? tem certeza que deseja ativar o dispositivo "${deciveInformation.title}" ao registrar sua conta?`}
            confirmButtonText="Confirmar"
            cancelButtonText="Cancelar"
            triggerButton={
              <LoadingButton
                css={{
                  marginTop: '2rem',
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

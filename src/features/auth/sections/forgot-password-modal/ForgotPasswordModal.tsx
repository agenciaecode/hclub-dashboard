import { StatusCodes } from 'http-status-codes';

import { TextInput } from '@components/forms/text-input';
import { Alert } from '@components/overlay/alert-dialog';
import { DescriptiveModal } from '@components/overlay/modal';
import { LoadingButton } from '@components/forms/loading-button';

import { forgotPasswordFormSchema } from './ForgotPasswordForm.schema';
import {
  RecoverPasswordValidationErrors,
  useRecoverPasswordMutation,
} from './api/recoverPassword';

import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { stopPropagation } from '@utils/events/stop-propagation';
import { useHttpExceptionHandler } from '@/services/http/hooks/useHttpExceptionHandler';
import { handleClientExceptionByStatus } from '@/services/http/default-status-code-handlers';

const ForgotPasswordModal = () => {
  const recoveryPasswordForm = useFormWithSchema(forgotPasswordFormSchema);
  const recoveryPasswordMutation = useRecoverPasswordMutation();

  useHttpExceptionHandler(recoveryPasswordMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<RecoverPasswordValidationErrors>(
        setFormErrorsFromException(recoveryPasswordForm.setError),
      )
      .setClientExceptionHandler(
        handleClientExceptionByStatus({
          [StatusCodes.BAD_REQUEST]: () =>
            showToastErrorMessage(
              'Seu email não foi encontrado em nossos registros.',
            ),
        }),
      )
      .executeHandler(),
  );

  function handlePasswordRecoverySubmit() {
    recoveryPasswordMutation.mutate(recoveryPasswordForm.getValues());
  }

  function handleAlertButtonConfirmClick() {
    recoveryPasswordMutation.reset();
    recoveryPasswordForm.reset();
  }

  return (
    <DescriptiveModal
      title="Esqueci minha senha"
      description="Enviaremos um e-mail com instruções para restaurar sua senha"
      triggerButton={<button type="button">Esqueci minha senha</button>}
    >
      <form
        onSubmit={stopPropagation(
          recoveryPasswordForm.handleSubmit(handlePasswordRecoverySubmit),
        )}
      >
        <TextInput
          label="E-mail"
          id="email"
          name="email"
          placeholder="Insira seu e-mail"
          type="text"
          errorMessage={recoveryPasswordForm.formState.errors.email?.message}
          register={recoveryPasswordForm.register}
        />
        <Alert
          title="Te enviamos um e-mail"
          description="Cheque sua caixa de entrada para restaurar a sua senha"
          confirmButtonText="Entendi"
          confirmButtonAction={handleAlertButtonConfirmClick}
          isOpen={recoveryPasswordMutation.isSuccess}
          triggerButton={
            <LoadingButton
              css={{ marginTop: '4rem' }}
              type="submit"
              isLoading={recoveryPasswordMutation.isLoading}
              isSuccess={recoveryPasswordMutation.isSuccess}
            >
              Enviar
            </LoadingButton>
          }
        />
      </form>
    </DescriptiveModal>
  );
};

export { ForgotPasswordModal };

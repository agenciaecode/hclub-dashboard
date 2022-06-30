import { sleep } from '@antfu/utils';
import { StatusCodes } from 'http-status-codes';

import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { DescriptiveModal } from '@components/overlay/modal';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { handleClientExceptionByStatus } from '@services/http/default-status-code-handlers';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import {
  ForgotPasswordModal,
  UpdatePasswordValidationErrors,
  useUpdatePasswordMutation,
} from '@features/auth';

import { SectionWrapper } from '../../components/section-wrapper';
import {
  StyledButton,
  StyledButtonsWrapper,
  StyledInputWrapper,
} from './Security.styles';
import { updatePasswordSchema } from './UpdatePassword.schema';

export const Security = () => {
  const {
    formState: { errors: updatePasswordFormErrors },
    ...updatePasswordForm
  } = useFormWithSchema(updatePasswordSchema);
  const updatePasswordMutation = useUpdatePasswordMutation();

  useHttpExceptionHandler(updatePasswordMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<UpdatePasswordValidationErrors>(
        setFormErrorsFromException(updatePasswordForm.setError),
      )
      .setClientExceptionHandler(
        handleClientExceptionByStatus({
          [StatusCodes.BAD_REQUEST]: () => {
            updatePasswordForm.setError('password', {
              message: 'Senha incorreta',
            });
          },
        }),
      )
      .executeHandler(),
  );

  const handleUpdatePassordFormSubmit = updatePasswordForm.handleSubmit(
    submittedFormValues => {
      if (updatePasswordMutation.isLoading) return;
      updatePasswordMutation.mutate(submittedFormValues, {
        onSuccess: () =>
          showToastSuccessMessage('Senha atualizada com sucesso'),
      });
    },
  );

  return (
    <SectionWrapper
      title="Segurança"
      description="Use sua senha para proteger sua conta"
      toolbarSlot={
        <DescriptiveModal
          triggerButton={
            <StyledButton btn="secondary">Editar senha</StyledButton>
          }
          title="Editar sua senha"
          description="Insira sua senha atual e uma nova senha para alterar"
        >
          <form onSubmit={handleUpdatePassordFormSubmit}>
            <StyledInputWrapper>
              <TextInput
                name="password"
                label="Senha atual"
                placeholder="digite sua senha atual"
                type="password"
                errorMessage={updatePasswordFormErrors.password?.message}
                register={updatePasswordForm.register}
              />
              <TextInput
                name="new_password"
                label="Nova senha"
                placeholder="nova senha"
                type="password"
                errorMessage={updatePasswordFormErrors.new_password?.message}
                register={updatePasswordForm.register}
              />
              <TextInput
                name="new_password_confirmation"
                label="Confirmar senha"
                placeholder="confirme sua nova senha"
                type="password"
                errorMessage={
                  updatePasswordFormErrors.new_password_confirmation?.message
                }
                register={updatePasswordForm.register}
              />
            </StyledInputWrapper>
            <StyledButtonsWrapper>
              <ForgotPasswordModal />
              <LoadingButton
                isLoading={updatePasswordMutation.isLoading}
                isSuccess={updatePasswordMutation.isSuccess}
                onAnimationFinished={async () => {
                  await sleep(500);
                  updatePasswordMutation.reset();
                  updatePasswordForm.reset();
                }}
              >
                Salvar
              </LoadingButton>
            </StyledButtonsWrapper>
          </form>
        </DescriptiveModal>
      }
    />
  );
};

import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';

import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { useAuthUser } from '@hooks/useAuthUser';
import { useSuccessEffect } from '@hooks/useSuccessEffect';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { handleClientExceptionByStatus } from '@services/http/default-status-code-handlers';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import type { DeviceInformation } from '@features/auth';

import { FormContainer } from '../../../../components/form-container';
import { HmanBlackLogo } from '../../../../components/hman-black-logo';
import { useActivateDeviceMutation } from '../../api/activateDevice';

type ActivateDeviceFormProps = {
  deviceInformation: DeviceInformation;
};

export const ActivateDeviceForm = ({
  deviceInformation,
}: ActivateDeviceFormProps) => {
  const activateDeviceMutation = useActivateDeviceMutation();
  const activateDeviceForm = useForm();
  const { user } = useAuthUser();
  const router = useRouter();
  const { serial } = router.query;

  useHttpExceptionHandler(activateDeviceMutation.error, exceptionHandler =>
    exceptionHandler
      .setClientExceptionHandler(handleClientExceptionByStatus({}))
      .executeHandler(),
  );

  useSuccessEffect(activateDeviceMutation.isSuccess, () => {
    showToastSuccessMessage('Dispositivo ativado com sucesso!');
    router.push('/hdrive');
  });

  function handleActivateDeviceFormSubmit() {
    if (activateDeviceMutation.isLoading) return;
    activateDeviceMutation.mutate({ serial_number: String(serial) });
  }

  return (
    <FormContainer
      title="Ativar Dispositivo"
      description={`Olá ${user?.name}, você está prestes a vincular o dispositivo "${deviceInformation.title}" a sua conta do HClub.`}
      formSubmitHandler={() => undefined}
      headerSlot={<HmanBlackLogo />}
      formSlot={
        <>
          <TextInput
            label="Número de Série do Dispositivo"
            name="serial_number"
            placeholder="Insira o número de série do dispositivo"
            type="text"
            defaultValue={serial as string}
            readOnly
            register={activateDeviceForm.register}
          />
          <AlertConfirmation
            title="Confirmar Ativação"
            description="Você tem certeza que deseja ativar este dispositivo?"
            confirmButtonText="Ativar"
            cancelButtonText="Cancelar"
            triggerButton={
              <LoadingButton
                css={{ marginTop: '0.8rem' }}
                isLoading={activateDeviceMutation.isLoading}
                isSuccess={activateDeviceMutation.isSuccess}
              >
                Ativar Dispositivo
              </LoadingButton>
            }
            onOk={handleActivateDeviceFormSubmit}
          />
        </>
      }
    />
  );
};

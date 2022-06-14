import React from 'react';

import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { useSuccessEffect } from '@hooks/useSuccessEffect';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useUnlinkDeviceMutation } from '@features/devices';

import { styled } from '@/theme';

import type { DeviceCardProps } from './DeviceCard';
import { StyledLoadingButton } from './DeviceCard.styles';

const StyledWarnLabel = styled('span', {
  color: '$auxiliaryNegative',
});

export const UnlinkDeviceButton = ({
  device,
  isLastDevice,
}: DeviceCardProps) => {
  const unlinkDeviceMutation = useUnlinkDeviceMutation();

  useHttpExceptionHandler(unlinkDeviceMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  useSuccessEffect(unlinkDeviceMutation.isSuccess, () => {
    showToastSuccessMessage('Dispositivo desvinculado com sucesso');
    unlinkDeviceMutation.reset();
  });

  function handleUnlinkDeviceConfirmation(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();
    if (unlinkDeviceMutation.isLoading) return;
    unlinkDeviceMutation.mutate(device);
  }

  return (
    <AlertConfirmation
      title="Confirmar Remoção"
      description={
        isLastDevice ? (
          <span>
            <StyledWarnLabel>
              Você está prestes a desvincular o último dispositivo da sua conta.
              Sua conta será bloqueada!
            </StyledWarnLabel>
            <br />
            Deseja realmente desvincular o seguinte dispositivo da sua conta?
            <br />
            Dispositivo: <b>{device.product_name}</b>
            <br />
            Nº de série: <b>{device.serial_number}</b>
          </span>
        ) : (
          <>
            Deseja realmente desvincular o seguinte dispositivo da sua conta?
            <br />
            Dispositivo: <b>{device.product_name}</b>
            <br />
            Nº de série: <b>{device.serial_number}</b>
          </>
        )
      }
      confirmButton={
        <LoadingButton
          isLoading={unlinkDeviceMutation.isLoading}
          isSuccess={unlinkDeviceMutation.isSuccess}
          css={{ flexGrow: 1 }}
        >
          Confirmar
        </LoadingButton>
      }
      cancelButtonText="Cancelar"
      triggerButton={
        <StyledLoadingButton>Desvincular dispositivo</StyledLoadingButton>
      }
      onOk={handleUnlinkDeviceConfirmation}
    />
  );
};

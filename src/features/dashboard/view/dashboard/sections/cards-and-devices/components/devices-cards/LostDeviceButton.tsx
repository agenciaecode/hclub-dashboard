import React from 'react';

import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { useSuccessEffect } from '@hooks/useSuccessEffect';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useToggleLostDeviceMutation } from '@features/devices';

import type { DeviceCardProps } from './DeviceCard';
import { StyledButton } from './DeviceCard.styles';

export const LostDeviceButton = ({
  device,
}: Pick<DeviceCardProps, 'device'>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleLostDeviceMutation = useToggleLostDeviceMutation();
  const isLostDevice = device.status === 'lost';

  useHttpExceptionHandler(toggleLostDeviceMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  useSuccessEffect(toggleLostDeviceMutation.isSuccess, async () => {
    showToastSuccessMessage(
      isLostDevice
        ? 'Dispositivo declarado como encontrado'
        : 'Dispositivo declarado como perdido',
    );
    setIsOpen(false);
    toggleLostDeviceMutation.reset();
  });

  function handleToggleLostDevice(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (toggleLostDeviceMutation.isLoading) return;
    toggleLostDeviceMutation.mutate({
      serial_number: device.serial_number,
      lost: !isLostDevice,
    });
  }

  return (
    <AlertConfirmation
      title="Confirmar Ação"
      description={
        isLostDevice ? (
          <>
            Deseja realmente declarar o seguinte dispositivo como encontrado?
            <br />
            Dispositivo: <b>{device.product_name}</b>
            <br />
            Nº de série: <b>{device.serial_number}</b>
          </>
        ) : (
          <>
            Deseja realmente declarar o seguinte dispositivo como perdido?
            <br />
            Dispositivo: <b>{device.product_name}</b>
            <br />
            Nº de série: <b>{device.serial_number}</b>
          </>
        )
      }
      confirmButton={
        <LoadingButton
          isLoading={toggleLostDeviceMutation.isLoading}
          isSuccess={toggleLostDeviceMutation.isSuccess}
          css={{ flexGrow: 1, '@sm': { flexGrow: 'unset' } }}
        >
          Confirmar
        </LoadingButton>
      }
      cancelButtonText="Cancelar"
      triggerButton={
        <StyledButton>
          {isLostDevice ? 'Dispositivo encontrado' : 'Marcar como perdido'}
        </StyledButton>
      }
      onOk={handleToggleLostDevice}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    />
  );
};

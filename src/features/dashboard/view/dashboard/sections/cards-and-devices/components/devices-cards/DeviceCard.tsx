import Image from 'next/image';

import { AlertConfirmation } from '@components/overlay/alert-dialog';

import deviceImage from '../../assets/device.png';

import {
  StyledDeviceInfo,
  StyledDeviceName,
  StyledDeviceOptions,
  StyledDeviceSerial,
  StyledFlippableCard,
  StyledFrontCardBody,
  StyledLoadingButton,
} from './DeviceCard.styles';

const DeviceCard = () => (
  <StyledFlippableCard
    frontContent={
      <StyledFrontCardBody>
        <Image src={deviceImage} width={117} height={117} alt="Device title" />
        <StyledDeviceInfo>
          <StyledDeviceName>Essencial 2</StyledDeviceName>
          <StyledDeviceSerial>
            Serie 8a72921c-1e29-405b-bc86-75ba8f112bba
          </StyledDeviceSerial>
        </StyledDeviceInfo>
      </StyledFrontCardBody>
    }
    backContent={
      <StyledDeviceOptions>
        <AlertConfirmation
          title="Confirmar Remoção"
          description="Deseja realmente desvincular o dispositivo da sua conta?"
          confirmButtonText="Confirmar"
          cancelButtonText="Cancelar"
          triggerButton={
            <StyledLoadingButton>Desvincular dispositivo</StyledLoadingButton>
          }
          onOk={() => undefined}
        />
        <AlertConfirmation
          title="Confirmar Ação"
          description="Deseja realmente marcar o dispositivo como perdido?"
          confirmButtonText="Confirmar"
          cancelButtonText="Cancelar"
          triggerButton={
            <StyledLoadingButton>Marcar como perdido</StyledLoadingButton>
          }
          onOk={() => undefined}
        />
        <StyledLoadingButton>Definir cartão padrão</StyledLoadingButton>
      </StyledDeviceOptions>
    }
  />
);

/**
 * #TODO
 * Botões back do device card
 *
 * desvincular dispositivo
 * marcar como perdido
 * Definir cartão padrão
 *  > Modal para selecionar cartão padrão daquele device
 *  > Abrir modal que permitirá ao usuário escolher qual cartão será o padrão
 *
 *
 * 1. Desvincular dispositivo
 * 2. Marcar como perdido
 * 3. Definir cartão padrão
 */
export { DeviceCard };

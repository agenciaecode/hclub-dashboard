import Image from 'next/image';
import React from 'react';

import { Tooltip } from '@components/overlay/tooltip';

import { Device } from '@features/devices';

import {
  StyledDeviceInfo,
  StyledDeviceName,
  StyledDeviceOptions,
  StyledDeviceSerial,
  StyledFlippableCard,
  StyledFrontCardBody,
  StyledImageWrapper,
  StyledLoadingButton,
  WrappableText,
} from './DeviceCard.styles';
import { LostDeviceButton } from './LostDeviceButton';
import { UnlinkDeviceButton } from './UnlinkDeviceButton';

export type DeviceCardProps = {
  device: Device;
  isLastDevice: boolean;
};

const DeviceCard = ({ device, isLastDevice }: DeviceCardProps) => (
  <StyledFlippableCard
    frontContent={
      <StyledFrontCardBody>
        <StyledImageWrapper>
          {(device.illustration?.mobile_image && (
            <Image
              src={device.illustration?.mobile_image.url}
              layout="fill"
              objectFit="contain"
              alt={device.product_name}
            />
          )) ||
            (device.illustration?.desktop_image && (
              <Image
                src={device.illustration?.desktop_image.url}
                layout="fill"
                objectFit="contain"
                alt={device.product_name}
              />
            ))}
        </StyledImageWrapper>
        <StyledDeviceInfo>
          <StyledDeviceName>{device.product_name}</StyledDeviceName>
          <StyledDeviceSerial>Serie {device.serial_number}</StyledDeviceSerial>
        </StyledDeviceInfo>
      </StyledFrontCardBody>
    }
    backContent={
      <Tooltip
        // open
        content={
          <WrappableText>
            Dispositivo: {device.product_name}
            <br />
            Nº de Serie: {device.serial_number}
          </WrappableText>
        }
      >
        <StyledDeviceOptions>
          <UnlinkDeviceButton device={device} isLastDevice={isLastDevice} />
          <LostDeviceButton device={device} />
          <StyledLoadingButton>Definir cartão padrão</StyledLoadingButton>
        </StyledDeviceOptions>
      </Tooltip>
    }
  />
);

export { DeviceCard };

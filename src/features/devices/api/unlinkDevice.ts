import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import { DeviceKeys } from './DeviceKeyFactory';

type UnlinkDeviceInput = {
  serial_number: string;
};

function unlinkDevice(unlinkDeviceInput: UnlinkDeviceInput) {
  return http.post('/devices/unlink', unlinkDeviceInput);
}

const useUnlinkDeviceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(unlinkDevice, {
    onSuccess() {
      queryClient.invalidateQueries(DeviceKeys.list());
    },
  });
};

export { useUnlinkDeviceMutation };

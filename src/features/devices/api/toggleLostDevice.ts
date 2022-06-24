import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import { DeviceKeys } from './DeviceKeyFactory';

type ToggleLostDeviceInput = {
  serial_number: string;
  lost: boolean;
};

function toggleLostDevice(toggleLostDeviceInput: ToggleLostDeviceInput) {
  return http.post('/devices/lost', toggleLostDeviceInput);
}

const useToggleLostDeviceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleLostDevice, {
    onSuccess() {
      queryClient.invalidateQueries(DeviceKeys.list());
    },
  });
};

export { useToggleLostDeviceMutation };

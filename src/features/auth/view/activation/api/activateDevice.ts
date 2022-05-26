import { useMutation } from 'react-query';

import { http } from '@services/http/api-client';

type ActivateDeviceInput = {
  serial_number: string;
};

function activateDevice({ serial_number }: ActivateDeviceInput) {
  return http.post(`/devices/${serial_number}`, {});
}

const useActivateDeviceMutation = () => useMutation(activateDevice);

export { useActivateDeviceMutation };
export type { ActivateDeviceInput };

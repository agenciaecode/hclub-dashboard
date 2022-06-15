import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';

import { DeviceKeys } from './DeviceKeyFactory';

type SetDeviceDefaultCardInput = {
  serial_number: string;
  card?: CardType;
};

function setDeviceDefaultCard(
  setDeviceDefaultCardInput: SetDeviceDefaultCardInput,
) {
  return http.post('/devices/default-card', setDeviceDefaultCardInput);
}

const useSetDeviceDefaultCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(setDeviceDefaultCard, {
    onSuccess(_, setDeviceDefaultCardInput) {
      queryClient.invalidateQueries(DeviceKeys.list());
      queryClient.invalidateQueries(
        DeviceKeys.show(setDeviceDefaultCardInput.serial_number),
      );
    },
  });
};

export { useSetDeviceDefaultCardMutation };

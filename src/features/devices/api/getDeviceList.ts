import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { CardType } from '@features/cards';

import { DeviceKeys } from './DeviceKeyFactory';

type Image = {
  url: string;
  width: number;
  height: number;
};

type Device = Readonly<{
  serial_number: string;
  status: 'active' | 'inactive' | 'lost';
  default_card?: CardType;
  product_name: string;
  illustration?: {
    desktop_image: Image;
    mobile_image: Image;
  };
}>;

type GetCardListOutput = {
  data: Device[];
};

async function getCardList() {
  const { data } = await http.get<GetCardListOutput>('/devices');
  return data;
}

const useDeviceListQuery = () => useQuery(DeviceKeys.list(), getCardList);

export { useDeviceListQuery };
export type { Device };

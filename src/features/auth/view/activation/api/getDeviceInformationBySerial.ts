import { apiDashboard } from '@services/app';

type ImageInfo = {
  url: string;
  width: number;
  height: number;
};

type DeviceInformation = {
  title: string;
  desktop_image?: ImageInfo;
  mobile_image?: ImageInfo;
};

async function getDeviceInformationBySerial(serial: string) {
  const { data: productInformation } =
    await apiDashboard.get<DeviceInformation>(`/devices/${serial}`);
  return productInformation;
}

export { getDeviceInformationBySerial };
export type { DeviceInformation, ImageInfo };

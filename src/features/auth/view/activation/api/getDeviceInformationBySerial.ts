import { apiDashboard } from '@services/app';

type ImageInfo = {
  url: string;
  width: number;
  height: number;
};

type ProductInformation = {
  title: string;
  desktop_image?: ImageInfo;
  mobile_image?: ImageInfo;
};

async function getDeviceInformationBySerial(serial: string) {
  const { data: productInformation } =
    await apiDashboard.get<ProductInformation>(`/devices/${serial}`);
  return productInformation;
}

export { getDeviceInformationBySerial };
export type { ProductInformation, ImageInfo };

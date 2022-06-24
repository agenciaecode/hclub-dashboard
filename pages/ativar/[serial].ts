import type { GetServerSideProps, NextPage } from 'next';

import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

import {
  ActivationPage,
  ActivationPageProps,
  getDeviceInformationBySerial,
} from '@features/auth';

const Activation: NextPage<ActivationPageProps> = ActivationPage;

export default Activation;

export const getServerSideProps: GetServerSideProps<
  ActivationPageProps,
  { serial: string }
> = async ({ params }) => {
  try {
    return {
      props: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        deviceInformation: await getDeviceInformationBySerial(params!.serial),
      },
    };
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === StatusCodes.NOT_FOUND
    ) {
      return {
        notFound: true,
      };
    }
    throw error;
  }
};

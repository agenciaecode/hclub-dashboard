import { AxiosHttpClient } from '@libs/http/AxiosHttpClient';
import { apiDashboard } from '@services/app';

export const http = new AxiosHttpClient(apiDashboard);

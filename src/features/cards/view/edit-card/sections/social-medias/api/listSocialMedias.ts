/* eslint-disable import/no-cycle */
import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { CardKeys } from '@features/cards';

import { ApiResponse } from '@/types/api-response';

import { SocialMedia } from './getCardSocialMedias';

type ListSocialMediasOutput = SocialMedia[];

async function listSocialMedias() {
  const { data } = await http.get<ApiResponse<ListSocialMediasOutput>>(
    `/social-media`,
  );
  return data;
}

const useListSocialMediasQuery = () =>
  useQuery(CardKeys.listSocialMedias(), listSocialMedias);

export { useListSocialMediasQuery };
export type { ListSocialMediasOutput };

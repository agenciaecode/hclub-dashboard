/* eslint-disable import/no-cycle */
import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { CardKeys } from '@features/cards';

import { ApiResponse } from '@/types/api-response';

type SocialMediaConfig = 'pattern' | 'label' | 'placeholder' | 'instructions';

type ListSocialMediasOutput = {
  id: number;
  name: string;
  icon_xml_svg: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
} & {
  [configKey in SocialMediaConfig]: string;
};

type SocialMedia = ListSocialMediasOutput;

async function listSocialMedias() {
  const { data } = await http.get<ApiResponse<ListSocialMediasOutput[]>>(
    `/social-media`,
  );
  return data;
}

const useListSocialMediasQuery = () =>
  useQuery(CardKeys.listSocialMedias(), listSocialMedias);

export { useListSocialMediasQuery };
export type { ListSocialMediasOutput, SocialMedia, SocialMediaConfig };

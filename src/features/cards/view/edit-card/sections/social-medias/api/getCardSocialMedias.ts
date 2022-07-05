import { notNullish } from '@antfu/utils';
import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

import { ApiResponse } from '@/types/api-response';

type GetCardSocialMediasInput = {
  card: CardType;
};

type GetCardSocialMediasOutput = {
  id: number;
  value: string;
  order: number;
  active: boolean;
  name: string;
  icon_xml_svg: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
};

type SocialMedia = GetCardSocialMediasOutput;

async function getCardSocialMedias({ card }: GetCardSocialMediasInput) {
  const { data } = await http.get<ApiResponse<GetCardSocialMediasOutput[]>>(
    `/cards/${card}/social-medias`,
  );
  return data;
}

const useCardSocialMediasQuery = (cardQuery: GetCardSocialMediasInput) =>
  useQuery(
    CardKeys.showSocialMedias(cardQuery.card),
    () => getCardSocialMedias(cardQuery),
    {
      enabled: notNullish(cardQuery.card),
    },
  );

export { useCardSocialMediasQuery };
export type {
  GetCardSocialMediasInput,
  GetCardSocialMediasOutput,
  SocialMedia,
};

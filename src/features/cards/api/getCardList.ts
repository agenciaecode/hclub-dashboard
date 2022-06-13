import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { CardKeys } from './CardKeyFactory';

type CardData = Readonly<{
  id: number;
  type: 'pro' | 'social' | 'personal';
  type_label: 'Pro' | 'Social' | 'Personal';
  default: boolean;
}>;

type GetCardListOutput = {
  data: CardData[];
};

async function getCardList() {
  const { data } = await http.get<GetCardListOutput>('/cards');
  return data;
}

const useCardListQuery = () => useQuery(CardKeys.list(), getCardList);

export { useCardListQuery };
export type { CardData };

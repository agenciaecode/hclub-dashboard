import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { CardKeys } from './CardKeyFactory';

type CardType = 'pro' | 'social' | 'personal';

type CardData = Readonly<{
  id: number;
  type: CardType;
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
export type { CardData, CardType };

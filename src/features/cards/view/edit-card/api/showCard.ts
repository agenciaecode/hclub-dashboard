import { notNullish } from '@antfu/utils';
import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type ShowCardInput = {
  card: CardType;
};

type ShowCardOutput = {
  id: number;
  type: CardType;
  bio?: string;
  theme: 'dark' | 'light';
  newsletter: boolean;
  pix: boolean;
  default: boolean;
  avatar?: {
    id: number;
    url: string;
    width: string;
    height: string;
  };
};

type Card = ShowCardOutput;

async function showCard({ card }: ShowCardInput) {
  return http.get<ShowCardOutput>(`/cards/${card}`);
}

const useShowCardQuery = (cardQuery: ShowCardInput) =>
  useQuery(CardKeys.show(cardQuery.card), () => showCard(cardQuery), {
    enabled: notNullish(cardQuery.card),
  });

export { useShowCardQuery };
export type { ShowCardInput, ShowCardOutput, Card };

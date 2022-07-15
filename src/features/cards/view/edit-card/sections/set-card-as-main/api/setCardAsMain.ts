import { useMutation } from 'react-query';

import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';

type setCardAsMainInput = {
  card: CardType;
};

function setCardAsMain({ card }: setCardAsMainInput) {
  return http.post(`/cards/${card}/default-card`, undefined);
}

const useSetCardAsMainMutation = () => useMutation(setCardAsMain);

export { useSetCardAsMainMutation };
export type { setCardAsMainInput };

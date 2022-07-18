import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';
// eslint-disable-next-line import/no-cycle
import { CardKeys } from '@features/cards';

type setCardAsMainInput = {
  card: CardType;
};

function setCardAsDefault({ card }: setCardAsMainInput) {
  return http.post(`/cards/${card}/default-card`, undefined);
}

const useSetCardAsDefaultMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(setCardAsDefault, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.show(card));
      queryClient.invalidateQueries(CardKeys.list());
    },
  });
};

export { useSetCardAsDefaultMutation };
export type { setCardAsMainInput };

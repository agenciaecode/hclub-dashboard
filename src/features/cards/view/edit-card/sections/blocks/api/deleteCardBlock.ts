import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type DeleteCardBlockInput = {
  card: CardType;
  cardBlockId: number;
};

function deleteCardBlock({ card, cardBlockId }: DeleteCardBlockInput) {
  return http.delete(`/cards/${card}/blocks/${cardBlockId}`);
}

const useDeleteCardBlockMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCardBlock, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.showBlocks(card));
    },
  });
};

export { useDeleteCardBlockMutation };
export type { DeleteCardBlockInput };

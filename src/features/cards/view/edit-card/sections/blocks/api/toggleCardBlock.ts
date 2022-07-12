import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type ToggleCardBlockInput = {
  card: CardType;
  cardBlockId: number;
  block: boolean;
};

function toggleCardBlock({ card, cardBlockId, block }: ToggleCardBlockInput) {
  return http.patch(`/cards/${card}/blocks/${cardBlockId}`, {
    block,
  });
}

const useToggleCardBlockMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleCardBlock, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.showBlocks(card));
    },
  });
};

export { useToggleCardBlockMutation };
export type { ToggleCardBlockInput };
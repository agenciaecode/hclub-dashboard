import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';
import { ReorderingSchema } from '@utils/reorder/map-to-reorder-schema';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type ReorderCardBlocksInput = {
  card: CardType;
  orderSchema: ReorderingSchema;
};

function reorderCardBlocks({ card, orderSchema }: ReorderCardBlocksInput) {
  return http.post(`/cards/${card}/blocks/reorder`, orderSchema);
}

const useReorderCardBlocksMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(reorderCardBlocks, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.showBlocks(card));
    },
  });
};

export { useReorderCardBlocksMutation };
export type { ReorderCardBlocksInput };

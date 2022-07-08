import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';
import { ReorderingSchema } from '@utils/reorder/map-to-reorder-schema';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type ReorderSocialMediasInput = {
  card: CardType;
  orderSchema: ReorderingSchema;
};

function reorderSocialMedias({ card, orderSchema }: ReorderSocialMediasInput) {
  return http.post(`/cards/${card}/social-medias/reorder`, orderSchema);
}

const useReorderSocialMediasMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(reorderSocialMedias, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.showSocialMedias(card));
    },
  });
};

export { useReorderSocialMediasMutation };
export type { ReorderSocialMediasInput };

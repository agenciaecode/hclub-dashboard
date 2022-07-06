import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type ReorderSocialMediasInput = {
  card: CardType;
  orderSchema: Array<{
    id: number;
    order: number;
  }>;
};

type ReorderSocialMediasInputValidationError = ValidationError<
  Pick<ReorderSocialMediasInput, 'orderSchema'>
>;

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
export type {
  ReorderSocialMediasInput,
  ReorderSocialMediasInputValidationError,
};

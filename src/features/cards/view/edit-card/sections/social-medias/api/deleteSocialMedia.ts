import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type DeleteCardSocialMediaInput = {
  card: CardType;
  socialMediaId: number;
};

function deleteCardSocialMedia({
  card,
  socialMediaId,
}: DeleteCardSocialMediaInput) {
  return http.delete(`/cards/${card}/social-medias/${socialMediaId}`);
}

const useDeleteCardSocialMediaMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCardSocialMedia, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.showSocialMedias(card));
    },
  });
};

export { useDeleteCardSocialMediaMutation };
export type { DeleteCardSocialMediaInput };

import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';
// eslint-disable-next-line import/no-cycle
import { CardKeys } from '@features/cards';

type DeleteCardAvatarInput = {
  card: CardType;
};

function deleteCardAvatar({ card }: DeleteCardAvatarInput) {
  return http.delete(`/cards/${card}/avatar`);
}

const useDeleteCardAvatarMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCardAvatar, {
    onSuccess(_, setCardAvatarInput) {
      queryClient.invalidateQueries(CardKeys.show(setCardAvatarInput.card));
    },
  });
};

export { useDeleteCardAvatarMutation };
export type { DeleteCardAvatarInput };

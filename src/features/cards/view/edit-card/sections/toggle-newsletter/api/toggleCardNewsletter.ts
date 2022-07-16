/* eslint-disable import/no-cycle */
import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';
import { CardKeys } from '@features/cards';

type ToggleCardNewsletterInput = {
  card: CardType;
  newsletter: boolean;
};

function toggleCardNewsletter({
  card,
  ...toggleNewsletterInput
}: ToggleCardNewsletterInput) {
  return http.patch(`/cards/${card}/newsletter`, toggleNewsletterInput);
}

const useToggleCardNewsletterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleCardNewsletter, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.show(card));
    },
  });
};

export { useToggleCardNewsletterMutation };
export type { ToggleCardNewsletterInput };

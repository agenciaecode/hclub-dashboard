import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';
// eslint-disable-next-line import/no-cycle
import { CardKeys } from '@features/cards';

type SetCardBiographyInput = {
  card: CardType;
  bio?: string;
};

type SetCardBiographyValidationError = ValidationError<SetCardBiographyInput>;

function setCardBiography({ card, bio }: SetCardBiographyInput) {
  return http.put(`/cards/${card}/bio`, {
    bio,
  });
}

const useCardBiographyMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(setCardBiography, {
    onSuccess(_, setCardAvatarInput) {
      queryClient.invalidateQueries(CardKeys.show(setCardAvatarInput.card));
    },
  });
};

export { useCardBiographyMutation };
export type { SetCardBiographyInput, SetCardBiographyValidationError };

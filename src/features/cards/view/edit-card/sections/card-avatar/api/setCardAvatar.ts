import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';
// eslint-disable-next-line import/no-cycle
import { CardKeys } from '@features/cards';

type SetCardAvatarInput = {
  card: CardType;
  avatar: File;
};

type SetCardAvatarValidationError = ValidationError<SetCardAvatarInput>;

function setCardAvatar({ card, avatar }: SetCardAvatarInput) {
  const formData = new FormData();
  formData.append('avatar', avatar);
  return http.post(`/cards/${card}/avatar`, formData);
}

const useSetCardAvatarMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(setCardAvatar, {
    onSuccess(_, setCardAvatarInput) {
      queryClient.invalidateQueries(CardKeys.show(setCardAvatarInput.card));
    },
  });
};

export { useSetCardAvatarMutation };
export type { SetCardAvatarInput, SetCardAvatarValidationError };

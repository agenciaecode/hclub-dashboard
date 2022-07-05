import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type AddSocialMediaInput = {
  card: CardType;
  social_media_id: number;
  value: string;
};

type AddSocialMediaValidationError = ValidationError<
  Omit<AddSocialMediaInput, 'card'>
>;

function addSocialMediaToCard({
  card,
  ...addSocialMediaInput
}: AddSocialMediaInput) {
  return http.post(`/cards/${card}/social-medias`, addSocialMediaInput);
}

const useAddSocialMediaMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addSocialMediaToCard, {
    onSuccess(_, addSocialMediaInput) {
      queryClient.invalidateQueries(
        CardKeys.showSocialMedias(addSocialMediaInput.card),
      );
    },
  });
};

export { useAddSocialMediaMutation };
export type { AddSocialMediaInput, AddSocialMediaValidationError };

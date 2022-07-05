import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type UpdateSocialMediaInput = {
  socialMediaId: number;
  value: string;
};

type UpdateSocialMediaInputValidationError = ValidationError<
  Pick<UpdateSocialMediaInput, 'value'>
>;

function toggleSocialMedia({ socialMediaId, value }: UpdateSocialMediaInput) {
  return http.put(`/cards/social-medias/${socialMediaId}`, {
    value,
  });
}

const useUpdateSocialMediaMutation = (card: CardType) => {
  const queryClient = useQueryClient();
  return useMutation(toggleSocialMedia, {
    onSuccess() {
      queryClient.invalidateQueries(CardKeys.showSocialMedias(card));
    },
  });
};

export { useUpdateSocialMediaMutation };
export type { UpdateSocialMediaInput, UpdateSocialMediaInputValidationError };

import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

type ToggleSocialMediaInput = {
  socialMediaId: number;
  active: boolean;
};

type ToggleSocialMediaInputValidationError = ValidationError<
  Pick<ToggleSocialMediaInput, 'active'>
>;

function toggleSocialMedia({ socialMediaId, active }: ToggleSocialMediaInput) {
  return http.patch(`/cards/social-medias/${socialMediaId}`, {
    active,
  });
}

const useToggleSocialMediaMutation = (card: CardType) => {
  const queryClient = useQueryClient();
  return useMutation(toggleSocialMedia, {
    onSuccess() {
      queryClient.invalidateQueries(CardKeys.showSocialMedias(card));
    },
  });
};

export { useToggleSocialMediaMutation };
export type { ToggleSocialMediaInput, ToggleSocialMediaInputValidationError };

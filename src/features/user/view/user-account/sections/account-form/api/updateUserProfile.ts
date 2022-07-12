import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

import { UserKeys } from '@features/user';

type UpdateUserProfileInput = {
  username: string;
  name: string;
  email: string;
  bio?: string;
  birthday?: Date;
  birthday_privacy?: 'public' | 'private';
  cellphone: string;
  city_id?: number;
};

type UpdateUserProfileValidationErrors =
  ValidationError<UpdateUserProfileInput>;

function updateUserProfile(updateUserProfileInput: UpdateUserProfileInput) {
  return http.put('/profile', updateUserProfileInput);
}

const useUpdateUserProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserProfile, {
    onSuccess() {
      queryClient.invalidateQueries(UserKeys.show());
    },
  });
};

export { useUpdateUserProfileMutation };
export type { UpdateUserProfileInput, UpdateUserProfileValidationErrors };

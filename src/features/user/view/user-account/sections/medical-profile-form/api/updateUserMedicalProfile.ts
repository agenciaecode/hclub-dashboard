import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

import { UserKeys } from '@features/user';

import { GetUserMedicalProfileOutput } from './getUserMedicalProfile';

type UpdateUserMedicalProfileInput = Partial<GetUserMedicalProfileOutput>;

type UpdateUserMedicalProfileValidationErrors =
  ValidationError<UpdateUserMedicalProfileInput>;

function updateUserMedicalProfile(
  updateUserMedicalProfileInput: UpdateUserMedicalProfileInput,
) {
  return http.put('/profile/medical', updateUserMedicalProfileInput);
}

const useUpdateUserMedicalProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserMedicalProfile, {
    onSuccess() {
      queryClient.invalidateQueries(UserKeys.showMedical());
    },
  });
};

export { useUpdateUserMedicalProfileMutation };
export type {
  UpdateUserMedicalProfileInput,
  UpdateUserMedicalProfileValidationErrors,
};

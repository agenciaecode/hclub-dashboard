import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

import { GetUserMedicalProfileOutput } from './getUserMedicalProfile';
import { UserKeys } from './UserKeyFactory';

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

import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { UserKeys } from '@features/user';

import { ApiResponse } from '@/types/api-response';
import { BloodType } from '@/types/BloodType';

type GetUserMedicalProfileOutput = {
  weight: number;
  height: number;
  blood_type: BloodType;
  diseases: string[];
  allergies: string[];
  emergency_name: string;
  emergency_contact: string;
  medical_profile_privacy: 'public' | 'private';
};

async function getUserMedicalProfile() {
  const { data } = await http.get<ApiResponse<GetUserMedicalProfileOutput>>(
    '/profile/medical',
  );
  return data;
}

const useUserMedicalProfileQuery = () =>
  useQuery(UserKeys.showMedical(), getUserMedicalProfile);

export { useUserMedicalProfileQuery };
export type { GetUserMedicalProfileOutput };

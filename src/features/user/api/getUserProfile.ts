import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { ApiResponse } from '@/types/api-response';

import { UserKeys } from './UserKeyFactory';

type GetUserProfileOutput = {
  username: string;
  name: string;
  email: string;
  cellphone: string;
  bio: string;
  birthday: string;
  birthday_privacy: string;
  status: 'active' | 'inactive' | 'block';
  avatar?: {
    id: string;
    url: string;
  };
  city?: {
    id: number;
    uf: string;
    name: string;
  };
};

type UserProfile = Readonly<GetUserProfileOutput>;

async function getUserProfile() {
  const { data } = await http.get<ApiResponse<GetUserProfileOutput>>(
    '/profile',
  );
  return data;
}

const useUserProfileQuery = () => useQuery(UserKeys.show(), getUserProfile);

export { useUserProfileQuery };
export type { UserProfile };

import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { UserKeys } from './UserKeyFactory';

type GetUserProfileOutput = {
  data: {
    username: string;
    name: string;
    email: string;
    cellphone: string;
    bio: string;
    birthdate: string;
    birthday_privacy: string;
    status: 'active' | 'inactive' | 'block';
    avatar?: {
      id: string;
      url: string;
    };
  };
};

type UserProfile = Readonly<GetUserProfileOutput['data']>;

async function getUserProfile() {
  const { data } = await http.get<GetUserProfileOutput>('/profile');
  return data;
}

const useUserProfileQuery = () => useQuery(UserKeys.show(), getUserProfile);

export { useUserProfileQuery };
export type { UserProfile };

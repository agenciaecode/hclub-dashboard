import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { ProfileKeys } from './ProfileKeyFactory';

type GetProfileOutput = {
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

type UserProfile = Readonly<GetProfileOutput['data']>;

async function getProfile() {
  const { data } = await http.get<GetProfileOutput>('/profile');
  return data;
}

const useProfileQuery = () => useQuery(ProfileKeys.show(), getProfile);

export { useProfileQuery };
export type { UserProfile };

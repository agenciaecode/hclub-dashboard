import { useAuth } from '@libs/auth/react';

import { AuthUser } from '@/types/AuthUser';

export const useAuthUser = () => {
  const { user, isAuthenticated } = useAuth<AuthUser>();
  if (!user) return { isAuthenticated };
  const { id, name, username, email } = user.data;
  return {
    user: {
      id,
      name,
      username,
      email,
    },
    isAuthenticated,
  };
};

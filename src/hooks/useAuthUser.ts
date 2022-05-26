import { useAuth } from '@libs/auth/react';

export const useAuthUser = () => {
  const { user, isAuthenticated } = useAuth<{
    id: number;
    name: string;
    username: string;
    email: string;
  }>();
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

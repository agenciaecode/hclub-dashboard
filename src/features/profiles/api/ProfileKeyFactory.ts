export const ProfileKeys = {
  all: ['profile'] as const,
  show: () => [...ProfileKeys.all, 'show'] as const,
};

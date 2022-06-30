export const UserKeys = {
  all: ['profile'] as const,
  show: () => [...UserKeys.all, 'show'] as const,
  showMedical: () => [...UserKeys.all, 'showMedical'] as const,
};

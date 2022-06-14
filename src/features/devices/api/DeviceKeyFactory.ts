export const DeviceKeys = {
  all: ['devices'] as const,
  list: () => [...DeviceKeys.all, 'list'] as const,
};

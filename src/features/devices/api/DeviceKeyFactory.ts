export const DeviceKeys = {
  all: ['devices'] as const,
  list: () => [...DeviceKeys.all, 'list'] as const,
  show: (serial: string) => [...DeviceKeys.all, 'show', serial] as const,
};

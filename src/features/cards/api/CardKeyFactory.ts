export const CardKeys = {
  all: ['cards'] as const,
  list: () => [...CardKeys.all, 'list'] as const,
  show: () => [...CardKeys.all, 'show'] as const,
};

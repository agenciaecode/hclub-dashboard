import { CardType } from '@features/cards';

export const CardKeys = {
  all: ['cards'] as const,
  list: () => [...CardKeys.all, 'list'] as const,
  show: (card: CardType) => [...CardKeys.all, 'show', card] as const,
};

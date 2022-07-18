import { CardType } from '@features/cards';

export const CardKeys = {
  all: ['cards'] as const,
  list: () => [...CardKeys.all, 'list'] as const,
  show: (card: CardType) => [...CardKeys.all, 'show', card] as const,
  listSocialMedias: () => ['social-medias'] as const,
  showSocialMedias: (card: CardType) =>
    ['show', card, ...CardKeys.listSocialMedias()] as const,
  listBlocks: () => ['blocks'] as const,
  showBlocks: (card: CardType) =>
    ['show', card, ...CardKeys.listBlocks()] as const,
};

import { useRouter } from 'next/router';

import type { CardType } from '@features/cards';

export const useCardSlug = () => {
  const router = useRouter();
  return router.query.card as CardType;
};

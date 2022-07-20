import type { CardType } from '@features/cards';

export const APP_URL = {
  HCLUB_BASE: process.env.APP_HCLUB_BASE_URL,
} as const;

function getUserUrl(username: string) {
  return `${APP_URL.HCLUB_BASE}/${username}`;
}

function getUserCardUrl(username: string, cardSlug: CardType) {
  return `${getUserUrl(username)}/${cardSlug}`;
}

export { getUserUrl, getUserCardUrl };

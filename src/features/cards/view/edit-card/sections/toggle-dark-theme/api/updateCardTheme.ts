/* eslint-disable import/no-cycle */
import { useMutation, useQueryClient } from 'react-query';

import { http } from '@services/http/api-client';

import type { CardType } from '@features/cards';
import { CardKeys } from '@features/cards';

import { Card } from '../../../api/showCard';

const CardThemes = ['dark', 'light'] as const;
type CardTheme = typeof CardThemes[number];
const [darkMode] = CardThemes;

type UpdateCardThemeInput = {
  card: CardType;
  theme: CardTheme;
};

function isCardInDarkMode(card: Card) {
  return card.theme === darkMode;
}

function updateCardTheme({ card, ...updateThemeInput }: UpdateCardThemeInput) {
  return http.put(`/cards/${card}/theme`, updateThemeInput);
}

const useUpdateCardThemeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCardTheme, {
    onSuccess(_, { card }) {
      queryClient.invalidateQueries(CardKeys.show(card));
      queryClient.invalidateQueries(CardKeys.list());
    },
  });
};

export { useUpdateCardThemeMutation, isCardInDarkMode, CardThemes };
export type { UpdateCardThemeInput, CardTheme };

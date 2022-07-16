/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';

import { Switch, SwitchThumb } from '@components/forms/switch';
import { Tooltip } from '@components/overlay/tooltip';
import { fromHttpException } from '@services/http/default-exception-handler-factory';

import { useShowCardQuery } from '../../api/showCard';
import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import {
  isCardInDarkMode,
  useUpdateCardThemeMutation,
} from './api/updateCardTheme';

export const ToggleDarkTheme = () => {
  const card = useCardSlug();
  const showCardQuery = useShowCardQuery({
    card,
  });
  const updateCardThemeMutation = useUpdateCardThemeMutation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (showCardQuery.data) {
      setIsDarkTheme(isCardInDarkMode(showCardQuery.data));
    }
  }, [showCardQuery.data]);

  function handleToggleThemeState(isDark: boolean) {
    if (updateCardThemeMutation.isLoading) return;
    setIsDarkTheme(isDark);
    updateCardThemeMutation.mutate(
      {
        card,
        theme: isDark ? 'dark' : 'light',
      },
      {
        onError: (error: unknown) => {
          fromHttpException(error).executeHandler();
        },
        onSettled: () => updateCardThemeMutation.reset(),
      },
    );
  }

  return (
    <SectionWrapper
      title="Tema escuro"
      toolbar={
        <Tooltip content={isDarkTheme ? 'Desativar' : 'Ativar'}>
          <span>
            <Switch
              checked={isDarkTheme}
              onCheckedChange={handleToggleThemeState}
              disabled={
                showCardQuery.isLoading || updateCardThemeMutation.isLoading
              }
            >
              <SwitchThumb />
            </Switch>
          </span>
        </Tooltip>
      }
    />
  );
};

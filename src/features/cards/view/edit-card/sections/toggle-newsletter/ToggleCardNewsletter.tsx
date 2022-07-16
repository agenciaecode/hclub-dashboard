/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';

import { Switch, SwitchThumb } from '@components/forms/switch';
import { Tooltip } from '@components/overlay/tooltip';
import { fromHttpException } from '@services/http/default-exception-handler-factory';

import { useShowCardQuery } from '../../api/showCard';
import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useToggleCardNewsletterMutation } from './api/toggleCardNewsletter';

// #TODO - reuse toggle-theme section component - they do the same thing - just different mutations

export const ToggleCardNewsletter = () => {
  const card = useCardSlug();
  const showCardQuery = useShowCardQuery({
    card,
  });
  const toggleCardNewsletterMutation = useToggleCardNewsletterMutation();
  const [isNewsLetterEnabled, setIsNewsLetterEnabled] = useState(false);

  useEffect(() => {
    if (showCardQuery.data) {
      setIsNewsLetterEnabled(showCardQuery.data.newsletter);
    }
  }, [showCardQuery.data]);

  function handleToggleNewsletterState(isEnabled: boolean) {
    if (toggleCardNewsletterMutation.isLoading) return;
    setIsNewsLetterEnabled(isEnabled);
    toggleCardNewsletterMutation.mutate(
      {
        card,
        newsletter: isEnabled,
      },
      {
        onError: (error: unknown) => {
          fromHttpException(error).executeHandler();
        },
        onSettled: () => toggleCardNewsletterMutation.reset(),
      },
    );
  }

  return (
    <SectionWrapper
      title="Newsletter"
      toolbar={
        <Tooltip content={isNewsLetterEnabled ? 'Ocultar' : 'Mostrar'}>
          <span>
            <Switch
              checked={isNewsLetterEnabled}
              onCheckedChange={handleToggleNewsletterState}
              disabled={
                showCardQuery.isLoading ||
                toggleCardNewsletterMutation.isLoading
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

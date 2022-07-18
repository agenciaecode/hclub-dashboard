/* eslint-disable import/no-cycle */
import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { Text } from '@components/typography/text';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { useShowCardQuery } from '../../api/showCard';
import { HiddenOnMobile } from '../../EditCardPage.styles';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useSetCardAsMainMutation } from './api/setCardAsMain';

export const SetCardAsMainButton = () => {
  const card = useCardSlug();
  const showCardQuery = useShowCardQuery({
    card,
  });
  const setCardAsMainMutation = useSetCardAsMainMutation();

  useHttpExceptionHandler(setCardAsMainMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleSetCardAsMainConfirmation() {
    if (setCardAsMainMutation.isLoading) return;
    setCardAsMainMutation.mutate(
      {
        card,
      },
      {
        onSuccess: () => {
          showToastSuccessMessage(
            'O cartão definido como principal de sua conta',
          );
        },
      },
    );
  }

  return (
    <AlertConfirmation
      title="Tornar cartão principal"
      description="Você tem certeza que deseja tornar este cartão o principal de sua conta?"
      onOk={handleSetCardAsMainConfirmation}
      triggerButton={
        <LoadingButton
          btn="secondary"
          disabled={!showCardQuery.isSuccess || showCardQuery.data.default}
          isLoading={setCardAsMainMutation.isLoading}
          isSuccess={setCardAsMainMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            setCardAsMainMutation.reset();
          }}
        >
          {showCardQuery.isSuccess &&
            (showCardQuery.data.default ? (
              'Cartão Principal'
            ) : (
              <>
                Tornar <HiddenOnMobile> cartão </HiddenOnMobile>padrão
              </>
            ))}
          {showCardQuery.isError && (
            <Text color="negative">Falha ao carregar cartão</Text>
          )}
        </LoadingButton>
      }
    />
  );
};

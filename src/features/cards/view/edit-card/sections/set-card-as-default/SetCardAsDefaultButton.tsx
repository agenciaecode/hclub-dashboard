/* eslint-disable import/no-cycle */
import { Spinner } from '@components/feedback/spinner';
import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { Text } from '@components/typography/text';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { useShowCardQuery } from '../../api/showCard';
import { HiddenOnMobile } from '../../EditCardPage.styles';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useSetCardAsDefaultMutation } from './api/setCardAsDefault';

export const SetCardAsDefaultButton = () => {
  const card = useCardSlug();
  const showCardQuery = useShowCardQuery({
    card,
  });
  const setCardAsDefaultMutation = useSetCardAsDefaultMutation();

  useHttpExceptionHandler(setCardAsDefaultMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleSetCardAsMainConfirmation() {
    if (setCardAsDefaultMutation.isLoading) return;
    setCardAsDefaultMutation.mutate(
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
      title="Tornar cartão padrão"
      description="Você tem certeza que deseja tornar este cartão o padrão da sua conta?"
      onOk={handleSetCardAsMainConfirmation}
      triggerButton={
        <LoadingButton
          btn="secondary"
          disabled={!showCardQuery.isSuccess || showCardQuery.data.default}
          isLoading={setCardAsDefaultMutation.isLoading}
          isSuccess={setCardAsDefaultMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            setCardAsDefaultMutation.reset();
          }}
          size={{
            '@initial': 'small',
            '@sm': 'default',
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
          {showCardQuery.isLoading && <Spinner color="secondary" />}
          {showCardQuery.isError && (
            <Text color="negative">Falha ao carregar cartão</Text>
          )}
        </LoadingButton>
      }
    />
  );
};

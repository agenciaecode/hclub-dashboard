import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { HiddenOnMobile } from '../../EditCardPage.styles';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useSetCardAsMainMutation } from './api/setCardAsMain';

export const SetCardAsMainButton = () => {
  const card = useCardSlug();
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
          isLoading={setCardAsMainMutation.isLoading}
          isSuccess={setCardAsMainMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            setCardAsMainMutation.reset();
          }}
        >
          Tornar <HiddenOnMobile> cartão </HiddenOnMobile>principal
        </LoadingButton>
      }
    />
  );
};

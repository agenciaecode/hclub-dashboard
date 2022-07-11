import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { animationDelay } from '@utils/animation/animation-delay';

type AsyncAlertConfirmationProps = {
  title: string;
  description: string;
  isLoading: boolean;
  isSuccess: boolean;
  onOk: () => void;
  onClose: () => void;
};

export const AsyncAlertConfirmation = ({
  title,
  description,
  isLoading,
  isSuccess,
  onOk,
  onClose,
}: AsyncAlertConfirmationProps) => (
  <AlertConfirmation
    title={title}
    description={description}
    cancelButtonText="Cancelar"
    isOpen
    onOpenChange={() => {
      if (!isLoading) onClose();
    }}
    onOk={event => {
      event.preventDefault();
      onOk();
    }}
    confirmButton={
      <LoadingButton
        fillWidthOnMobile
        isLoading={isLoading}
        isSuccess={isSuccess}
        onAnimationFinished={async () => {
          await animationDelay();
          onClose();
        }}
      >
        Confirmar
      </LoadingButton>
    }
    triggerButton={null}
  />
);

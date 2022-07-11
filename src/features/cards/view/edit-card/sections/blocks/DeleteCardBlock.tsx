/* eslint-disable import/no-cycle */

import { LoadingButton } from '@components/forms/loading-button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { useCardSlug } from '../../hooks/useCardSlug';
import { useDeleteCardBlockMutation } from './api/deleteCardBlock';
import type { WithCardBlockProp } from './CardBlocks';

const useDeleteCardBlock = (cardBlock: WithCardBlockProp['cardBlock']) => {
  const card = useCardSlug();
  const deleteCardBlockMutation = useDeleteCardBlockMutation();

  useHttpExceptionHandler(deleteCardBlockMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleDeleteCardBlock() {
    if (deleteCardBlockMutation.isLoading) return;
    deleteCardBlockMutation.mutate({
      cardBlockId: cardBlock.id,
      card,
    });
  }

  return { deleteCardBlockMutation, handleDeleteCardBlock };
};

export const DeleteCardBlockConfirmationAlert = ({
  cardBlock: deletingCard,
  closeAlert,
}: WithCardBlockProp & {
  closeAlert: () => void;
}) => {
  const { handleDeleteCardBlock, deleteCardBlockMutation } =
    useDeleteCardBlock(deletingCard);

  return (
    <AlertConfirmation
      title="Excluir bloco"
      description="Realmente deseja excluir este bloco?"
      cancelButtonText="Cancelar"
      isOpen
      onOpenChange={() => {
        if (!deleteCardBlockMutation.isLoading) closeAlert();
      }}
      onOk={event => {
        event.preventDefault();
        handleDeleteCardBlock();
      }}
      confirmButton={
        <LoadingButton
          fillWidthOnMobile
          isLoading={deleteCardBlockMutation.isLoading}
          isSuccess={deleteCardBlockMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            closeAlert();
          }}
        >
          Confirmar
        </LoadingButton>
      }
      triggerButton={null}
    />
  );
};

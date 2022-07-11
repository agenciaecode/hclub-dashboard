/* eslint-disable import/no-cycle */

import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { AsyncAlertConfirmation } from '../../components/async-alert-confirmation';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useDeleteCardBlockMutation } from './api/deleteCardBlock';
import type { WithCardBlockProp } from './CardBlocks';

export const DeleteCardBlockConfirmationAlert = ({
  cardBlock: deletingCardBlock,
  closeAlert,
}: WithCardBlockProp & {
  closeAlert: () => void;
}) => {
  const card = useCardSlug();
  const deleteCardBlockMutation = useDeleteCardBlockMutation();

  useHttpExceptionHandler(deleteCardBlockMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleDeleteCardBlock() {
    if (deleteCardBlockMutation.isLoading) return;
    deleteCardBlockMutation.mutate({
      cardBlockId: deletingCardBlock.id,
      card,
    });
  }

  return (
    <AsyncAlertConfirmation
      title="Excluir bloco"
      description="Realmente deseja excluir este bloco?"
      onOk={handleDeleteCardBlock}
      onClose={closeAlert}
      isLoading={deleteCardBlockMutation.isLoading}
      isSuccess={deleteCardBlockMutation.isSuccess}
    />
  );
};

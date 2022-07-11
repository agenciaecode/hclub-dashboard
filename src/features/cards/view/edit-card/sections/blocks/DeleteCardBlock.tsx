/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { TrashSvgIcon } from '@components/icons/trash-icon';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { fromHttpException } from '@services/http/default-exception-handler-factory';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { DeleteButton } from '../../components/delete-button';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useDeleteCardBlockMutation } from './api/deleteCardBlock';
import type { WithCardBlockProp } from './CardBlocks';

const useDeleteCardBlock = (cardBlock: WithCardBlockProp['cardBlock']) => {
  const card = useCardSlug();
  const deleteCardBlockMutation = useDeleteCardBlockMutation({
    onError: handleDeleteCardBlockMutationError,
  });

  function handleDeleteCardBlockMutationError(mutationError: unknown) {
    fromHttpException(mutationError).executeHandler();
  }

  function handleDeleteCardBlock() {
    if (deleteCardBlockMutation.isLoading) return;
    deleteCardBlockMutation.mutate(
      {
        cardBlockId: cardBlock.id,
        card,
      },
      {
        onSuccess: () => {
          deleteCardBlockMutation.reset();
        },
      },
    );
  }

  return { deleteCardBlockMutation, handleDeleteCardBlock };
};

export const DeleteCardBlockButton = ({ cardBlock }: WithCardBlockProp) => {
  const { handleDeleteCardBlock } = useDeleteCardBlock(cardBlock);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  return (
    <>
      <DeleteButton onClick={() => setIsConfirmationOpen(true)} />
      <AlertConfirmation
        title="Excluir bloco"
        description="Realmente deseja excluir este bloco?"
        cancelButtonText="Cancelar"
        isOpen={isConfirmationOpen}
        onOpenChange={setIsConfirmationOpen}
        onOk={() => {
          handleDeleteCardBlock();
          setIsConfirmationOpen(false);
        }}
        triggerButton={null}
      />
    </>
  );
};

export const DeleteteCardDropdownItem = ({ cardBlock }: WithCardBlockProp) => {
  const { handleDeleteCardBlock } = useDeleteCardBlock(cardBlock);

  return (
    <DropdownMenuItem onSelect={handleDeleteCardBlock}>
      Excluir
    </DropdownMenuItem>
  );
};

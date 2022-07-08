/* eslint-disable import/no-cycle */
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../hooks/useCardSlug';
import { StyledIconButton } from '../social-medias/CardSocialMedias.styles';
import { useDeleteCardBlockMutation } from './api/deleteCardBlock';
import { Block, BlockTypes } from './api/getCardBlocks';
import { StyledTrashIcon } from './CardBlocks.styles';

type DeleteCardBlockProps = {
  cardBlock: Block<BlockTypes>;
};

const useDeleteCardBlock = (cardBlock: DeleteCardBlockProps['cardBlock']) => {
  const card = useCardSlug();
  const deleteCardBlockMutation = useDeleteCardBlockMutation();

  useHttpExceptionHandler(deleteCardBlockMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

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

export const DeleteCardBlockButton = ({ cardBlock }: DeleteCardBlockProps) => {
  const { handleDeleteCardBlock } = useDeleteCardBlock(cardBlock);

  return (
    <Tooltip content="Excluir">
      <span>
        <AlertConfirmation
          title="Excluir bloco"
          description="Realmente deseja excluir este bloco?"
          cancelButtonText="Cancelar"
          onOk={handleDeleteCardBlock}
          triggerButton={
            <StyledIconButton btn="secondary" type="button">
              <VisuallyHidden>Excluir</VisuallyHidden>
              <StyledTrashIcon />
            </StyledIconButton>
          }
        />
      </span>
    </Tooltip>
  );
};

export const DeleteteCardDropdownItem = ({
  cardBlock,
}: DeleteCardBlockProps) => {
  const { handleDeleteCardBlock } = useDeleteCardBlock(cardBlock);

  return (
    <DropdownMenuItem onSelect={handleDeleteCardBlock}>
      Excluir
    </DropdownMenuItem>
  );
};

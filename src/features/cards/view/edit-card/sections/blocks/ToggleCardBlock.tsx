/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';

import { Switch, SwitchThumb } from '@components/forms/switch';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../hooks/useCardSlug';
import { Block, BlockTypes } from './api/getCardBlocks';
import { useToggleCardBlockMutation } from './api/toggleCardBlock';

type ToggleCardBlockProps = {
  cardBlock: Block<BlockTypes>;
};

const useToggleCardBlock = (cardBlock: ToggleCardBlockProps['cardBlock']) => {
  const card = useCardSlug();
  const toggleCardBlockMutation = useToggleCardBlockMutation();

  useHttpExceptionHandler(toggleCardBlockMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleToggleCardBlock(callbacks?: {
    onSuccess?: () => void;
    onError?: () => void;
  }) {
    if (toggleCardBlockMutation.isLoading) return;
    toggleCardBlockMutation.mutate(
      {
        cardBlockId: cardBlock.id,
        card,
      },
      {
        onSettled: () => {
          toggleCardBlockMutation.reset();
        },
        ...callbacks,
      },
    );
  }

  return { toggleCardBlockMutation, handleToggleCardBlock };
};

export const ToggleCardBlockSwitch = ({ cardBlock }: ToggleCardBlockProps) => {
  const { toggleCardBlockMutation, handleToggleCardBlock } =
    useToggleCardBlock(cardBlock);
  const [isBlockActive, setIsBlockActive] = useState(cardBlock.active);

  function handleSwitchToggleChange(checkedState: boolean) {
    setIsBlockActive(checkedState);
    handleToggleCardBlock({
      onError: () => setIsBlockActive(cardBlock.active),
    });
  }

  return (
    <Switch
      disabled={toggleCardBlockMutation.isLoading}
      checked={isBlockActive}
      onCheckedChange={handleSwitchToggleChange}
    >
      <SwitchThumb />
    </Switch>
  );
};

export const ToggleCardBlockDropdownItem = ({
  cardBlock,
}: ToggleCardBlockProps) => {
  const { toggleCardBlockMutation, handleToggleCardBlock } =
    useToggleCardBlock(cardBlock);

  return (
    <DropdownMenuItem
      disabled={toggleCardBlockMutation.isLoading}
      onSelect={() => handleToggleCardBlock()}
    >
      {cardBlock.active ? 'Desativar' : 'Ativar'}
    </DropdownMenuItem>
  );
};

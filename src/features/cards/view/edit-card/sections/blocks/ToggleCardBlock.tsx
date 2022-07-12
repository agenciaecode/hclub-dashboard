/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { CheckMarkSpinner } from '@components/feedback/checkmark-spinner';
import { Switch, SwitchThumb } from '@components/forms/switch';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { useDropdownControls } from '../../components/dropdown-with-lock';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useToggleCardBlockMutation } from './api/toggleCardBlock';
import { WithCardBlockProp } from './CardBlocks';

const useToggleCardBlock = (cardBlock: WithCardBlockProp['cardBlock']) => {
  const card = useCardSlug();
  const toggleCardBlockMutation = useToggleCardBlockMutation();

  useHttpExceptionHandler(toggleCardBlockMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleToggleCardBlock(callbacks?: { onError?: () => void }) {
    if (toggleCardBlockMutation.isLoading) return;
    toggleCardBlockMutation.mutate(
      {
        cardBlockId: cardBlock.id,
        card,
        block: !cardBlock.active,
      },
      {
        ...callbacks,
      },
    );
  }

  return { toggleCardBlockMutation, handleToggleCardBlock };
};

export const ToggleCardBlockSwitch = ({ cardBlock }: WithCardBlockProp) => {
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
    <Tooltip content={isBlockActive ? 'Desativar' : 'Ativar'}>
      <span>
        <Switch
          disabled={toggleCardBlockMutation.isLoading}
          checked={isBlockActive}
          onCheckedChange={handleSwitchToggleChange}
        >
          <SwitchThumb />
        </Switch>
      </span>
    </Tooltip>
  );
};

export const ToggleCardBlockDropdownItem = ({
  cardBlock,
}: WithCardBlockProp) => {
  const { unlockDropdown, lockDropdown } = useDropdownControls();
  const { toggleCardBlockMutation, handleToggleCardBlock } =
    useToggleCardBlock(cardBlock);
  const isBlockMutationEitherLoadingOrSuccess =
    toggleCardBlockMutation.isLoading || toggleCardBlockMutation.isSuccess;

  return (
    <DropdownMenuItem
      disabled={toggleCardBlockMutation.isLoading}
      onSelect={event => {
        event.preventDefault();
        lockDropdown();
        handleToggleCardBlock({ onError: unlockDropdown });
      }}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {isBlockMutationEitherLoadingOrSuccess ? (
        <CheckMarkSpinner
          color="secondary"
          finished={toggleCardBlockMutation.isSuccess}
          onAnimationFinish={async () => {
            await animationDelay();
            toggleCardBlockMutation.reset();
            unlockDropdown();
          }}
        />
      ) : cardBlock.active ? (
        'Desativar'
      ) : (
        'Ativar'
      )}
    </DropdownMenuItem>
  );
};

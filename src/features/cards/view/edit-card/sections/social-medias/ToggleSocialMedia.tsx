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
import { useToggleSocialMediaMutation } from './api/toggleSocialMedia';
import { WithSocialMediaProp } from './CardSocialMedias';

const useToggleSocialMedia = (
  socialMedia: WithSocialMediaProp['socialMedia'],
) => {
  const card = useCardSlug();
  const toggleSocialMediaMutation = useToggleSocialMediaMutation(card);

  useHttpExceptionHandler(toggleSocialMediaMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleToggleSocialMedia(callbacks?: { onError?: () => void }) {
    if (toggleSocialMediaMutation.isLoading) return;
    toggleSocialMediaMutation.mutate(
      {
        socialMediaId: socialMedia.id,
        active: !socialMedia.active,
      },
      {
        ...callbacks,
      },
    );
  }

  return { toggleSocialMediaMutation, handleToggleSocialMedia };
};

export const ToggleSocialMedia = ({ socialMedia }: WithSocialMediaProp) => {
  const { toggleSocialMediaMutation, handleToggleSocialMedia } =
    useToggleSocialMedia(socialMedia);
  const [isSocialMediaActive, setIsSocialMediaActive] = useState(
    socialMedia.active,
  );

  function handleSwitchToggleChange(checkedState: boolean) {
    setIsSocialMediaActive(checkedState);
    handleToggleSocialMedia({
      onError: () => setIsSocialMediaActive(socialMedia.active),
    });
  }

  return (
    <Tooltip content={isSocialMediaActive ? 'Desativar' : 'Ativar'} notAsChild>
      <Switch
        disabled={toggleSocialMediaMutation.isLoading}
        checked={isSocialMediaActive}
        onCheckedChange={handleSwitchToggleChange}
      >
        <SwitchThumb />
      </Switch>
    </Tooltip>
  );
};

export const ToggleSocialMediaDropdownItem = ({
  socialMedia,
}: WithSocialMediaProp) => {
  const { unlockDropdown, lockDropdown } = useDropdownControls();
  const { toggleSocialMediaMutation, handleToggleSocialMedia } =
    useToggleSocialMedia(socialMedia);
  const isSocialMediaMutationEitherLoadingOrSuccess =
    toggleSocialMediaMutation.isLoading || toggleSocialMediaMutation.isSuccess;

  return (
    <DropdownMenuItem
      disabled={toggleSocialMediaMutation.isLoading}
      onSelect={event => {
        event.preventDefault();
        lockDropdown();
        handleToggleSocialMedia({
          onError: unlockDropdown,
        });
      }}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {isSocialMediaMutationEitherLoadingOrSuccess ? (
        <CheckMarkSpinner
          color="secondary"
          finished={toggleSocialMediaMutation.isSuccess}
          onAnimationFinish={async () => {
            await animationDelay();
            toggleSocialMediaMutation.reset();
            unlockDropdown();
          }}
        />
      ) : socialMedia.active ? (
        'Desativar'
      ) : (
        'Ativar'
      )}
    </DropdownMenuItem>
  );
};

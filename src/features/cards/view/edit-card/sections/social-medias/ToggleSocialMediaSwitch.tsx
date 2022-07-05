/* eslint-disable import/no-cycle */
import { useEffect } from 'react';

import { ControlledSwitch } from '@components/forms/switch';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { useFormWithSchema } from '@libs/hook-form';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../hooks/useCardSlug';
import { SocialMedia } from './api/getCardSocialMedias';
import { useToggleSocialMediaMutation } from './api/toggleSocialMedia';

const toggleSocialMediaSchema = yup
  .object({
    active: yup.boolean().required(),
  })
  .required();

type ToggleSocialMediaSwitchProps = {
  socialMedia: SocialMedia;
};

export const ToggleSocialMediaSwitch = ({
  socialMedia,
}: ToggleSocialMediaSwitchProps) => {
  const cardSlug = useCardSlug();
  const toggleSocialMediaMutation = useToggleSocialMediaMutation(cardSlug);
  const toggleSocialMediaForm = useFormWithSchema(toggleSocialMediaSchema, {
    defaultValues: {
      active: socialMedia.active,
    },
  });
  const switchToggleState = toggleSocialMediaForm.watch('active');

  useHttpExceptionHandler(toggleSocialMediaMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  useEffect(() => {
    if (
      toggleSocialMediaMutation.isLoading ||
      switchToggleState === socialMedia.active
    )
      return;
    toggleSocialMediaMutation.mutate(
      {
        active: switchToggleState,
        socialMediaId: socialMedia.id,
      },
      {
        onSuccess: () => {
          toggleSocialMediaMutation.reset();
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchToggleState, socialMedia.active, socialMedia.id]);

  return (
    <Tooltip content={socialMedia.active ? 'Desativar' : 'Ativar'}>
      <span>
        <ControlledSwitch
          control={toggleSocialMediaForm.control}
          name="active"
          switchProps={{
            disabled: toggleSocialMediaMutation.isLoading,
          }}
        />
      </span>
    </Tooltip>
  );
};

type ToggleSocialMediaDropdownItemProps = ToggleSocialMediaSwitchProps;

export const ToggleSocialMediaDropdownItem = ({
  socialMedia,
}: ToggleSocialMediaDropdownItemProps) => {
  const cardSlug = useCardSlug();
  const toggleSocialMediaMutation = useToggleSocialMediaMutation(cardSlug);

  useHttpExceptionHandler(toggleSocialMediaMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleToggleSocialMediaChange() {
    if (toggleSocialMediaMutation.isLoading) return;
    toggleSocialMediaMutation.mutate(
      {
        active: !socialMedia.active,
        socialMediaId: socialMedia.id,
      },
      {
        onSuccess: () => {
          toggleSocialMediaMutation.reset();
        },
      },
    );
  }

  return (
    <DropdownMenuItem onSelect={handleToggleSocialMediaChange}>
      {socialMedia.active ? 'Desativar' : 'Ativar'}
    </DropdownMenuItem>
  );
};

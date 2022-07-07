/* eslint-disable import/no-cycle */
import { ControlledSwitch } from '@components/forms/switch';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { useFormWithSchema } from '@libs/hook-form';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../hooks/useCardSlug';
import { SocialMediaItem } from './api/getCardSocialMedias';
import { useToggleSocialMediaMutation } from './api/toggleSocialMedia';

const toggleSocialMediaSchema = yup
  .object({
    active: yup.boolean().required(),
  })
  .required();

type ToggleSocialMediaSwitchProps = {
  socialMedia: SocialMediaItem;
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
  useHttpExceptionHandler(toggleSocialMediaMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleSwitchToggleChange(checked: boolean) {
    if (toggleSocialMediaMutation.isLoading || checked === socialMedia.active)
      return;
    toggleSocialMediaForm.setValue('active', checked);
    toggleSocialMediaMutation.mutate(
      {
        active: checked,
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
    <Tooltip content={socialMedia.active ? 'Desativar' : 'Ativar'}>
      <span>
        <ControlledSwitch
          control={toggleSocialMediaForm.control}
          name="active"
          switchProps={{
            disabled: toggleSocialMediaMutation.isLoading,
            onCheckedChange: handleSwitchToggleChange,
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

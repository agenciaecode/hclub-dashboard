/* eslint-disable import/no-cycle,react/jsx-props-no-spreading */
import Image from 'next/image';

import { Button } from '@components/forms/button';
import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { Flex } from '@components/layout/flex';
import { DialogClose, Modal, ModalProps } from '@components/overlay/modal';
import { Text } from '@components/typography/text';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { styled } from '@/theme';

import { useCardSlug } from '../../hooks/useCardSlug';
import { SocialMedia } from './api/getCardSocialMedias';
import {
  UpdateSocialMediaInputValidationError,
  useUpdateSocialMediaMutation,
} from './api/updateSocialMedia';

const updateSocialMediaSchema = yup
  .object({
    value: yup.string().required(),
  })
  .required();

type EditSocialMediaModalProps = {
  socialMedia: SocialMedia;
} & ModalProps;

/**
 * Modal to edit a social media
 * Uses separated content component to lazy load form stateful logic.
 * @param socialMedia
 * @param modalProps
 * @constructor
 */
export const EditSocialMediaModal = ({
  socialMedia,
  ...modalProps
}: EditSocialMediaModalProps) => (
  <Modal {...modalProps}>
    <EditSocialMediaModalContent socialMedia={socialMedia} />
  </Modal>
);

const EditSocialMediaModalContent = ({
  socialMedia,
}: Pick<EditSocialMediaModalProps, 'socialMedia'>) => {
  const cardSlug = useCardSlug();
  const updateSocialMediaMutation = useUpdateSocialMediaMutation(cardSlug);
  const updateSocialMediaForm = useFormWithSchema(updateSocialMediaSchema, {
    defaultValues: {
      value: socialMedia.value,
    },
  });

  useHttpExceptionHandler(updateSocialMediaMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<UpdateSocialMediaInputValidationError>(
        setFormErrorsFromException(updateSocialMediaForm.setError),
      )
      .executeHandler(),
  );

  const handleUpdateSocialMediaSubmit = updateSocialMediaForm.handleSubmit(
    submittedFormValues => {
      if (updateSocialMediaMutation.isLoading) return;
      updateSocialMediaMutation.mutate(
        {
          socialMediaId: socialMedia.id,
          ...submittedFormValues,
        },
        {
          onSuccess: () =>
            showToastSuccessMessage('Rede social atualizada com sucesso!'),
        },
      );
    },
  );

  return (
    <form onSubmit={handleUpdateSocialMediaSubmit}>
      <Flex alignItems="center" gap="2rem">
        <StyledFigure>
          <Image
            src={socialMedia.icon.url}
            layout="fill"
            alt={socialMedia.name}
          />
        </StyledFigure>
        <Text size="xl">{socialMedia.name}</Text>
      </Flex>

      <TextInput
        name="value"
        label="Usuário"
        placeholder="Digite o seu usuário da rede social"
        register={updateSocialMediaForm.register}
        errorMessage={updateSocialMediaForm.formState.errors.value?.message}
        css={{ marginTop: '3.2rem', marginBottom: '6rem' }}
      />

      <Flex gap="2rem">
        <DialogClose asChild>
          <Button btn="secondary" type="reset">
            Cancelar
          </Button>
        </DialogClose>
        <LoadingButton
          isLoading={updateSocialMediaMutation.isLoading}
          isSuccess={updateSocialMediaMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            updateSocialMediaMutation.reset();
          }}
        >
          Salvar
        </LoadingButton>
      </Flex>
    </form>
  );
};

const StyledFigure = styled('figure', {
  position: 'relative',
  width: '9.2rem',
  height: '9.2rem',
  '& > svg': {
    width: '100%',
    height: '100%',
  },
});

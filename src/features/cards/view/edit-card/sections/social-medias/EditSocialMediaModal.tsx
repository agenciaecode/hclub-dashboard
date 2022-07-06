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

import { useCardSlug } from '../../hooks/useCardSlug';
import { SocialMediaItem } from './api/getCardSocialMedias';
import {
  UpdateSocialMediaInputValidationError,
  useUpdateSocialMediaMutation,
} from './api/updateSocialMedia';
import { StyledFigure } from './CardSocialMedias.styles';

const updateSocialMediaSchema = yup
  .object({
    value: yup.string().required(),
  })
  .required();

type EditSocialMediaModalProps = {
  socialMedia: SocialMediaItem;
  handleSuccesfulSubmit: () => void;
} & ModalProps;

/**
 * Modal to edit a social media
 * Uses separated content component to lazy load form stateful logic.
 * @param socialMedia
 * @param closeModal
 * @param modalProps
 */
export const EditSocialMediaModal = ({
  socialMedia,
  handleSuccesfulSubmit,
  ...modalProps
}: EditSocialMediaModalProps) => (
  <Modal {...modalProps}>
    <EditSocialMediaForm
      socialMedia={socialMedia}
      handleSuccesfulSubmit={handleSuccesfulSubmit}
    />
  </Modal>
);

type EditSocialMediaFormProps = Pick<
  EditSocialMediaModalProps,
  'socialMedia' | 'handleSuccesfulSubmit'
>;

const EditSocialMediaForm = ({
  socialMedia,
  handleSuccesfulSubmit,
}: EditSocialMediaFormProps) => {
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
            handleSuccesfulSubmit();
          }}
        >
          Salvar
        </LoadingButton>
      </Flex>
    </form>
  );
};

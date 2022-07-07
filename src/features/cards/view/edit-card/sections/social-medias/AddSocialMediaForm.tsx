/* eslint-disable react/jsx-props-no-spreading,import/no-cycle */
import Image from 'next/image';
import React from 'react';

import { Button } from '@components/forms/button';
import { LoadingButton } from '@components/forms/loading-button';
import { TextInput } from '@components/forms/text-input';
import { Flex } from '@components/layout/flex';
import { DialogClose } from '@components/overlay/modal';
import { Text } from '@components/typography/text';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { useCardSlug } from '../../hooks/useCardSlug';
import {
  AddSocialMediaValidationError,
  useAddSocialMediaMutation,
} from './api/addSocialMedia';
import { SocialMedia } from './api/listSocialMedias';
import {
  StyledFigure,
  StyledResponsiveFlex,
  StyledResponsiveSocialMediaHeader,
} from './CardSocialMedias.styles';

const addSocialMediaSchema = yup
  .object({
    social_media_id: yup.number().required(),
    value: yup.string().required('Este campo é obrigatório.'),
  })
  .required();

type AddSocialMediaFormProps = {
  addingSocialMedia: SocialMedia;
  handleSuccessfulSubmit: () => void;
};

/**
 * Decoupled form to add a social media, used as separated content component to lazy load form stateful logic.
 * @param card
 * @constructor
 */
export const AddSocialMediaForm = ({
  addingSocialMedia,
  handleSuccessfulSubmit,
}: AddSocialMediaFormProps) => {
  const card = useCardSlug();
  const addSocialMediaMutation = useAddSocialMediaMutation();
  const addSocialMediaForm = useFormWithSchema(addSocialMediaSchema, {
    defaultValues: {
      social_media_id: addingSocialMedia.id,
      value: '',
    },
  });

  useHttpExceptionHandler(addSocialMediaMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<AddSocialMediaValidationError>(
        setFormErrorsFromException(addSocialMediaForm.setError),
      )
      .executeHandler(),
  );

  const handleAddSocialMediaSubmit = addSocialMediaForm.handleSubmit(
    submittedFormValues => {
      if (addSocialMediaMutation.isLoading) return;
      addSocialMediaMutation.mutate(
        {
          ...submittedFormValues,
          card,
        },
        {
          onSuccess: () => {
            showToastSuccessMessage('Rede social adicionada com sucesso!');
          },
        },
      );
    },
  );

  return (
    <form onSubmit={handleAddSocialMediaSubmit}>
      <StyledResponsiveSocialMediaHeader alignItems="center">
        <StyledFigure>
          {addingSocialMedia.icon.url && (
            <Image
              src={addingSocialMedia.icon.url}
              layout="fill"
              alt={addingSocialMedia.name}
            />
          )}
        </StyledFigure>
        <Text size="xl">{addingSocialMedia.name}</Text>
      </StyledResponsiveSocialMediaHeader>

      {addingSocialMedia.instructions && (
        <Text size="sm">{addingSocialMedia.instructions}</Text>
      )}

      <input
        type="hidden"
        {...addSocialMediaForm.register('social_media_id')}
      />

      <TextInput
        name="value"
        label={addingSocialMedia.label || 'Usuário'}
        placeholder={
          addingSocialMedia.placeholder || 'Digite o seu usuário da rede social'
        }
        register={addSocialMediaForm.register}
        errorMessage={addSocialMediaForm.formState.errors.value?.message}
        css={{ marginTop: '3.2rem', marginBottom: '6rem' }}
      />

      <StyledResponsiveFlex>
        <DialogClose asChild>
          <Button btn="secondary" type="reset">
            Cancelar
          </Button>
        </DialogClose>
        <LoadingButton
          isLoading={addSocialMediaMutation.isLoading}
          isSuccess={addSocialMediaMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            addSocialMediaMutation.reset();
            handleSuccessfulSubmit();
          }}
        >
          Salvar
        </LoadingButton>
      </StyledResponsiveFlex>
    </form>
  );
};

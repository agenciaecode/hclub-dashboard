/* eslint-disable import/no-cycle */
import React from 'react';

import { notNullish } from '@antfu/utils';

import { InputWrapper } from '@components/forms/input-wrapper';
import { TextInput } from '@components/forms/text-input';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../../hooks/useCardSlug';
import { ImageBlock } from '../api/getCardBlocks';
import {
  BlockInputsValidationErrors,
  ImageBlockInputs,
  useSaveCardBlockMutation,
} from '../api/saveCardBlock';
import {
  BlockFormInputsProps,
  CardBlockFormSkeleton,
} from './CardBlockFormSkeleton';
import { ControlledTempImageFileInput } from './TempImageInput';

const imageBlockFormSchema = yup
  .object({
    id: yup.number().optional(),
    title: yup.string().required(),
    image_token: yup
      .string()
      .when('id', (idField, tokenSchema) =>
        idField
          ? tokenSchema.optional()
          : tokenSchema.required('A imagem de capa é obrigatória'),
      ),
  })
  .required();

export const ImageBlockForm = ({
  managingBlock,
  handleSuccessfulFormSubmit,
}: BlockFormInputsProps<ImageBlock>) => {
  const isEditMode = notNullish(managingBlock.id);

  const card = useCardSlug();
  const cardBlockMutation = useSaveCardBlockMutation<ImageBlockInputs>();
  const {
    formState: { errors: imageBlockFormErrors },
    ...imageBlockForm
  } = useFormWithSchema(imageBlockFormSchema, {
    defaultValues: {
      ...managingBlock.config,
      id: managingBlock.id,
      title: managingBlock.title,
    },
  });

  useHttpExceptionHandler(cardBlockMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<
        BlockInputsValidationErrors<ImageBlockInputs>
      >(setFormErrorsFromException(imageBlockForm.setError))
      .executeHandler(),
  );

  const handleAddDownloadBlockSubmit = imageBlockForm.handleSubmit(
    submittedFormValues => {
      if (cardBlockMutation.isLoading) return;
      cardBlockMutation.mutate({
        ...submittedFormValues,
        type: managingBlock.type,
        card,
      });
    },
  );

  return (
    <CardBlockFormSkeleton
      managingBlock={managingBlock}
      handleFormSubmit={handleAddDownloadBlockSubmit}
      handleSuccessfulFormSubmit={handleSuccessfulFormSubmit}
      isSubmitSuccessful={cardBlockMutation.isSuccess}
      isSubmitting={cardBlockMutation.isLoading}
    >
      {isEditMode && (
        //  eslint-disable-next-line react/jsx-props-no-spreading
        <input type="hidden" {...imageBlockForm.register('id')} />
      )}
      <TextInput
        name="title"
        label="Titulo"
        placeholder="Titulo do bloco"
        register={imageBlockForm.register}
        errorMessage={imageBlockFormErrors.title?.message}
      />
      <InputWrapper
        label=""
        forId="image_token"
        errorMessage={imageBlockFormErrors.image_token?.message}
      >
        <ControlledTempImageFileInput
          name="image_token"
          control={imageBlockForm.control}
          setFormError={imageBlockForm.setError}
          existingImageUrl={managingBlock?.config?.image.url}
        />
      </InputWrapper>
    </CardBlockFormSkeleton>
  );
};

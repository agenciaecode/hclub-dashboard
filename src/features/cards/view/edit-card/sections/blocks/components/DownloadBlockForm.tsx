/* eslint-disable import/no-cycle */
import React from 'react';

import { notNullish } from '@antfu/utils';

import { InputWrapper } from '@components/forms/input-wrapper';
import { TextInput } from '@components/forms/text-input';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../../hooks/useCardSlug';
import { DownloadBlock } from '../api/getCardBlocks';
import {
  BlockInputsValidationErrors,
  DownloadBlockInputs,
  useSaveCardBlockMutation,
} from '../api/saveCardBlock';
import {
  BlockFormInputsProps,
  CardBlockFormSkeleton,
} from './CardBlockFormSkeleton';
import { ControlledTempImageFileInput } from './TempImageInput';

const downloadBlockFormSchema = yup
  .object({
    id: yup.number().optional(),
    title: yup.string().required(),
    url: yup.string().url().required(),
    cover_token: yup
      .string()
      .when('id', (idField, tokenSchema) =>
        idField
          ? tokenSchema.optional()
          : tokenSchema.required('A imagem de capa é obrigatória'),
      ),
  })
  .required();

export const DownloadBlockForm = ({
  managingBlock,
  handleSuccessfulFormSubmit,
}: BlockFormInputsProps<DownloadBlock>) => {
  const isEditMode = notNullish(managingBlock.id);

  const card = useCardSlug();
  const cardBlockMutation = useSaveCardBlockMutation<DownloadBlockInputs>();
  const {
    formState: { errors: downloadBlockFormErrors },
    ...downloadBlockForm
  } = useFormWithSchema(downloadBlockFormSchema, {
    defaultValues: {
      ...managingBlock.config,
      id: managingBlock.id,
      title: managingBlock.title,
    },
  });

  useHttpExceptionHandler(cardBlockMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<
        BlockInputsValidationErrors<DownloadBlockInputs>
      >(setFormErrorsFromException(downloadBlockForm.setError))
      .executeHandler(),
  );

  const handleAddDownloadBlockSubmit = downloadBlockForm.handleSubmit(
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
        <input type="hidden" {...downloadBlockForm.register('id')} />
      )}
      <TextInput
        name="title"
        label="Titulo"
        placeholder="Titulo do bloco"
        register={downloadBlockForm.register}
        errorMessage={downloadBlockFormErrors.title?.message}
      />
      <TextInput
        name="url"
        label="Url"
        placeholder="Url do download"
        register={downloadBlockForm.register}
        errorMessage={downloadBlockFormErrors.url?.message}
      />
      <InputWrapper
        label=""
        forId="cover_token"
        errorMessage={downloadBlockFormErrors.cover_token?.message}
      >
        <ControlledTempImageFileInput
          name="cover_token"
          control={downloadBlockForm.control}
          setFormError={downloadBlockForm.setError}
          existingImageUrl={managingBlock?.config?.cover?.url}
        />
      </InputWrapper>
    </CardBlockFormSkeleton>
  );
};

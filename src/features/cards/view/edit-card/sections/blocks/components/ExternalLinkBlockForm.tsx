/* eslint-disable import/no-cycle */
import React from 'react';

import { notNullish } from '@antfu/utils';

import { TextInput } from '@components/forms/text-input';
import { useFormWithSchema } from '@libs/hook-form';
import { yup } from '@libs/yup';

import { useCardSlug } from '../../../hooks/useCardSlug';
import { ExternalLinkBlock } from '../api/getCardBlocks';
import {
  ExternalLinkBlockInputs,
  useSaveCardBlockMutation,
} from '../api/saveCardBlock';
import {
  BlockFormInputsProps,
  CardBlockFormSkeleton,
} from './CardBlockFormSkeleton';

const externalLinkFormSchema = yup
  .object({
    id: yup.number().optional(),
    title: yup.string().required(),
    url: yup.string().url().required(),
  })
  .required();

export const ExternalLinkBlockForm = ({
  managingBlock,
  handleSuccessfulFormSubmit,
}: BlockFormInputsProps<ExternalLinkBlock>) => {
  const isEditMode = notNullish(managingBlock.id);

  const card = useCardSlug();
  const cardBlockMutation = useSaveCardBlockMutation<ExternalLinkBlockInputs>();
  const {
    formState: { errors: externalLinkFormErrors },
    ...externalLinkForm
  } = useFormWithSchema(externalLinkFormSchema, {
    defaultValues: {
      id: managingBlock.id,
      title: managingBlock.title,
      ...managingBlock.config,
    },
  });

  const handleSaveExternalLinkBlockSubmit = externalLinkForm.handleSubmit(
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
      handleFormSubmit={handleSaveExternalLinkBlockSubmit}
      handleSuccessfulFormSubmit={handleSuccessfulFormSubmit}
      isSubmitSuccessful={cardBlockMutation.isSuccess}
      isSubmitting={cardBlockMutation.isLoading}
    >
      {isEditMode && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <input type="hidden" {...externalLinkForm.register('id')} />
      )}
      <TextInput
        name="title"
        label="Titulo"
        placeholder="Titulo do bloco"
        register={externalLinkForm.register}
        errorMessage={externalLinkFormErrors.title?.message}
      />
      <TextInput
        name="url"
        label="URL"
        placeholder="URL do video"
        register={externalLinkForm.register}
        errorMessage={externalLinkFormErrors.url?.message}
      />
    </CardBlockFormSkeleton>
  );
};

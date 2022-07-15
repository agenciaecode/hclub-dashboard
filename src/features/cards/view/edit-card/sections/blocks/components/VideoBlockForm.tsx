/* eslint-disable import/no-cycle */
import React from 'react';

import { notNullish } from '@antfu/utils';

import { InputWrapper } from '@components/forms/input-wrapper';
import { ControlledSelect, SelectOption } from '@components/forms/select';
import { TextInput } from '@components/forms/text-input';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { useCardSlug } from '../../../hooks/useCardSlug';
import {
  VIDEO_BLOCK_PROVIDERS,
  VideoBlock,
  VideoBlockProvider,
} from '../api/getCardBlocks';
import {
  BlockInputsValidationErrors,
  useSaveCardBlockMutation,
  VideoBlockInputs,
} from '../api/saveCardBlock';
import {
  BlockFormInputsProps,
  CardBlockFormSkeleton,
} from './CardBlockFormSkeleton';

const videoFormSchema = yup
  .object({
    id: yup.number().optional(),
    title: yup.string().required(),
    provider: yup
      .mixed<VideoBlockProvider>()
      .oneOf([...VIDEO_BLOCK_PROVIDERS])
      .required(),
    url: yup.string().url().required(),
  })
  .required();

const [defaultProviderOption] = VIDEO_BLOCK_PROVIDERS;

export const VideoBlockForm = ({
  managingBlock,
  handleSuccessfulFormSubmit,
}: BlockFormInputsProps<VideoBlock>) => {
  const isEditMode = notNullish(managingBlock.id);

  const card = useCardSlug();
  const cardBlockMutation = useSaveCardBlockMutation<VideoBlockInputs>();
  const {
    formState: { errors: videoFormErrors },
    ...videoForm
  } = useFormWithSchema(videoFormSchema, {
    defaultValues: {
      id: managingBlock.id,
      title: managingBlock.title,
      ...managingBlock.config,
    },
  });

  useHttpExceptionHandler(cardBlockMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<
        BlockInputsValidationErrors<VideoBlockInputs>
      >(setFormErrorsFromException(videoForm.setError))
      .executeHandler(),
  );

  const handleAddVideoSubmit = videoForm.handleSubmit(submittedFormValues => {
    if (cardBlockMutation.isLoading) return;
    cardBlockMutation.mutate({
      ...submittedFormValues,
      type: managingBlock.type,
      card,
    });
  });

  return (
    <CardBlockFormSkeleton
      managingBlock={managingBlock}
      handleFormSubmit={handleAddVideoSubmit}
      handleSuccessfulFormSubmit={handleSuccessfulFormSubmit}
      isSubmitSuccessful={cardBlockMutation.isSuccess}
      isSubmitting={cardBlockMutation.isLoading}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {isEditMode && <input type="hidden" {...videoForm.register('id')} />}
      <TextInput
        name="title"
        label="Titulo"
        placeholder="Titulo do bloco"
        register={videoForm.register}
        errorMessage={videoFormErrors.title?.message}
      />
      <InputWrapper
        label="Provedor"
        forId="provider"
        errorMessage={videoFormErrors.provider?.message}
      >
        <ControlledSelect
          selectProps={{
            defaultValue: defaultProviderOption,
            label: 'Provedor',
            id: 'provider',
          }}
          name="provider"
          defaultValue={defaultProviderOption}
          control={videoForm.control}
        >
          {VIDEO_BLOCK_PROVIDERS.map(provider => (
            <SelectOption value={provider} text={provider} key={provider} />
          ))}
        </ControlledSelect>
      </InputWrapper>
      <TextInput
        name="url"
        label="URL"
        placeholder="URL do video"
        register={videoForm.register}
        errorMessage={videoFormErrors.url?.message}
      />
    </CardBlockFormSkeleton>
  );
};

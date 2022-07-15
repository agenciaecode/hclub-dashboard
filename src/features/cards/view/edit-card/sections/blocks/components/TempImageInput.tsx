import React, { ChangeEvent, useRef, useState } from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { LoadingButton } from '@components/forms/loading-button';
import { Flex } from '@components/layout/flex';
import { Text } from '@components/typography/text';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { yup } from '@libs/yup';
import { fromHttpException } from '@services/http/default-exception-handler-factory';
import { animationDelay } from '@utils/animation/animation-delay';

import {
  CreateTempImageOutput,
  CreateTempImageValidationError,
  TempImage,
  useCreateTempImageMutation,
} from '../api/createTempImage';
import {
  RoundedImage,
  StyledImageInputWrapper,
  StyledPreviewFigure,
  StyledPreviewPlaceholder,
  StyledRemoveImageButton,
} from './TempImageInput.styles';

const imageFileFormatSchema = yup
  .mixed<File>()
  .test(
    'fileFormat',
    'Image only',
    value => value?.type?.startsWith('image') ?? false,
  );

type TempImageFileInputProps = {
  existingImageUrl?: string;
  onStartUpload?: () => void;
  onSuccessfulUpload: (tempImage: TempImage) => void;
  onCancelUpload: () => void;
  onError: (errorMessage: string) => void;
};

export const TempImageFileInput = ({
  existingImageUrl,
  onStartUpload,
  onSuccessfulUpload,
  onCancelUpload,
  onError,
}: TempImageFileInputProps) => {
  const createTempImageMutation = useCreateTempImageMutation();
  const imageFileInputRef = useRef<HTMLInputElement>(null);
  const [tempImage, setTempImage] = useState<TempImage>();

  function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const [selectedFile] = Array.from(event.target.files ?? []);
    // eslint-disable-next-line no-param-reassign
    event.target.value = '';
    if (selectedFile) {
      if (!imageFileFormatSchema.isValidSync(selectedFile)) {
        showToastErrorMessage('Apenas imagens são permitidas');
        return;
      }
      createTempImageMutation.mutate(
        { file: selectedFile },
        {
          onSuccess: (createdTempImage: CreateTempImageOutput) => {
            setTempImage(createdTempImage);
            onSuccessfulUpload(createdTempImage);
          },
          onError: (error: unknown) => {
            fromHttpException(error)
              .setValidationExceptionHandler<CreateTempImageValidationError>(
                validationError => {
                  onError(validationError.details.file?.join(', ') ?? '');
                },
              )
              .executeHandler();
          },
        },
      );
      onStartUpload?.();
    }
  }

  function handleFileUploadCancel() {
    onCancelUpload();
    setTempImage(undefined);
  }

  return (
    <StyledImageInputWrapper>
      <StyledPreviewFigure>
        {tempImage?.url ?? existingImageUrl ? (
          <>
            <RoundedImage
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              src={tempImage?.url ?? existingImageUrl!}
              layout="fill"
              objectFit="cover"
            />
            {tempImage?.url && (
              <StyledRemoveImageButton
                type="button"
                onClick={handleFileUploadCancel}
              >
                <Cross1Icon />
              </StyledRemoveImageButton>
            )}
          </>
        ) : (
          <StyledPreviewPlaceholder />
        )}
      </StyledPreviewFigure>
      <Flex direction="column" gap="2">
        <Text>
          {existingImageUrl
            ? 'Selecione uma nova imagem'
            : 'Selecione uma imagem'}
        </Text>
        <LoadingButton
          btn="secondary"
          type="button"
          disabled={createTempImageMutation.isLoading}
          isLoading={createTempImageMutation.isLoading}
          isSuccess={createTempImageMutation.isSuccess}
          onAnimationFinished={async () => {
            await animationDelay();
            createTempImageMutation.reset();
          }}
          onClick={() => {
            imageFileInputRef.current?.click();
          }}
        >
          Editar
        </LoadingButton>
      </Flex>
      <VisuallyHidden>
        <input
          type="file"
          id="cover_token"
          ref={imageFileInputRef}
          accept="jpg,jpeg,png,gif"
          onChange={handleFileSelection}
          tabIndex={-1}
        />
      </VisuallyHidden>
    </StyledImageInputWrapper>
  );
};

TempImageFileInput.defaultProps = {
  existingImageUrl: undefined,
  onStartUpload: undefined,
};

type ControlledTempImageFileInputProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name'
> &
  Pick<TempImageFileInputProps, 'existingImageUrl' | 'onStartUpload'> & {
    setFormError: UseFormReturn<T>['setError'];
  };

export const ControlledTempImageFileInput = <T extends FieldValues>({
  control,
  name,
  setFormError,
  ...tempImageFileInputProps
}: ControlledTempImageFileInputProps<T>) => {
  const { field: controlledField } = useController<T>({
    control,
    name,
    defaultValue: undefined,
    shouldUnregister: true,
  });

  return (
    <TempImageFileInput
      onSuccessfulUpload={tempImage =>
        controlledField.onChange(tempImage.token)
      }
      onCancelUpload={() => controlledField.onChange(undefined)}
      onError={errorMessage => {
        controlledField.onChange(undefined);
        setFormError(name, { message: errorMessage });
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...tempImageFileInputProps}
    />
  );
};

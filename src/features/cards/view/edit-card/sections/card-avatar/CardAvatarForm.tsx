/* eslint-disable import/no-cycle,react/jsx-props-no-spreading */
import React, { memo, useEffect, useRef } from 'react';

import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { ErrorLabel } from '@components/forms/error-label';
import { LoadingButton } from '@components/forms/loading-button';
import { DialogClose } from '@components/overlay/modal';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { CardType } from '@features/cards';
import { useUserProfileQuery } from '@features/user';

import defaultAvatar from '@assets/images/user-avatar.svg';

import { useShowCardQuery } from '../../api/showCard';
import {
  SetCardAvatarValidationError,
  useSetCardAvatarMutation,
} from './api/setCardAvatar';
import {
  RoundedImage,
  StyledButtonsWrapper,
  StyledFigureContainer,
  StyledFlexRow,
} from './CardAvatar.styles';
import { setCardAvatarFormSchema } from './CardAvatarForm.schema';

type CardAvatarFormProps = {
  showCardQuery: ReturnType<typeof useShowCardQuery>;
  userProfileQuery: ReturnType<typeof useUserProfileQuery>;
  cardSlug: CardType;
};

function getFirstFileFromFileList(fileList: FileList) {
  const [avatarFile] = Array.from(fileList);
  return avatarFile;
}

/**
 * Decouple modal form stateful logic from the component.
 */
export const CardAvatarForm = memo(
  ({ showCardQuery, userProfileQuery, cardSlug }: CardAvatarFormProps) => {
    const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
    const avatarFileInputRef = useRef<HTMLInputElement | null>(null);
    const cardAvatarMutation = useSetCardAvatarMutation();
    const {
      formState: { errors: setCardAvatarFormErrors },
      ...setCardAvatarForm
    } = useFormWithSchema(setCardAvatarFormSchema);
    const { ref: avatarFormRef, ...avatarFormRegister } =
      setCardAvatarForm.register('avatar');
    const avatarFormValue = setCardAvatarForm.watch('avatar');

    useHttpExceptionHandler(cardAvatarMutation.error, exceptionHandler =>
      exceptionHandler
        .setValidationExceptionHandler<SetCardAvatarValidationError>(
          setFormErrorsFromException(setCardAvatarForm.setError),
        )
        .executeHandler(),
    );

    useEffect(() => {
      if (!avatarFormValue) return undefined;
      const selectedFile = getFirstFileFromFileList(avatarFormValue);
      if (!selectedFile) {
        setPreviewUrl(null);
        return undefined;
      }
      const selectedFileGlobUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(selectedFileGlobUrl);

      return () => URL.revokeObjectURL(selectedFileGlobUrl);
    }, [avatarFormValue]);

    const handleSetAvatarFormSubmit = setCardAvatarForm.handleSubmit(
      submittedFormValues => {
        if (cardAvatarMutation.isLoading) return;
        cardAvatarMutation.mutate(
          {
            avatar: getFirstFileFromFileList(submittedFormValues.avatar),
            card: cardSlug,
          },
          {
            onSuccess: () => {
              showToastSuccessMessage('Avatar atualizado com sucesso!');
            },
          },
        );
      },
    );

    return (
      <form onSubmit={handleSetAvatarFormSubmit}>
        <StyledFlexRow>
          <StyledFigureContainer>
            {previewUrl && (
              <RoundedImage src={previewUrl} layout="fill" alt="avatar" />
            )}
            {!previewUrl &&
              (showCardQuery.isSuccess ? (
                <RoundedImage
                  src={
                    showCardQuery.data.avatar?.url ??
                    userProfileQuery.data?.avatar?.url ??
                    defaultAvatar
                  }
                  layout="fill"
                  alt="avatar"
                />
              ) : (
                <Spinner color="secondary" css={{ margin: '5rem 5rem' }} />
              ))}
          </StyledFigureContainer>
          <Button
            btn="secondary"
            type="button"
            css={{
              marginRight: 'none',
              '@sm': {
                marginRight: 'auto',
              },
            }}
            onClick={() => avatarFileInputRef.current?.click()}
          >
            Procurar imagem
          </Button>
          <VisuallyHidden>
            <input
              type="file"
              tabIndex={-1}
              {...avatarFormRegister}
              ref={ref => {
                avatarFormRef(ref);
                avatarFileInputRef.current = ref;
              }}
            />
          </VisuallyHidden>
        </StyledFlexRow>
        <ErrorLabel
          errorMessage={setCardAvatarFormErrors.avatar?.message as string}
          css={{ marginTop: '1rem' }}
        />
        <StyledButtonsWrapper>
          <DialogClose asChild>
            <Button
              btn="secondary"
              type="reset"
              onClick={() => {
                setCardAvatarForm.reset();
                setPreviewUrl(null);
              }}
            >
              Cancelar
            </Button>
          </DialogClose>
          <LoadingButton
            isLoading={cardAvatarMutation.isLoading}
            isSuccess={cardAvatarMutation.isSuccess}
            onAnimationFinished={async () => {
              await animationDelay();
              setCardAvatarForm.reset();
              cardAvatarMutation.reset();
              setPreviewUrl(null);
            }}
          >
            Salvar
          </LoadingButton>
        </StyledButtonsWrapper>
      </form>
    );
  },
);

CardAvatarForm.displayName = 'CardAvatarForm';

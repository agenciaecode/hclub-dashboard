/* eslint-disable react/jsx-props-no-spreading, import/no-cycle */
import { useEffect, useState } from 'react';

import { ErrorLabel } from '@components/forms/error-label';
import { LoadingButton } from '@components/forms/loading-button';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { yup } from '@libs/yup';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';

import { useShowCardQuery } from '../../api/showCard';
import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import {
  SetCardBiographyValidationError,
  useCardBiographyMutation,
} from './api/setCardBiography';
import { StyledTextArea } from './CardBiography.styles';

export const cardBiographySchema = yup
  .object({
    bio: yup.string().optional(),
  })
  .required();

export const CardBiography = () => {
  const [isEditing, setIsEditing] = useState(false);
  const cardSlug = useCardSlug();
  const showCardQuery = useShowCardQuery({ card: cardSlug });
  const cardBiographyMutation = useCardBiographyMutation();
  const cardBiographyForm = useFormWithSchema(cardBiographySchema);

  useHttpExceptionHandler(cardBiographyMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<SetCardBiographyValidationError>(
        setFormErrorsFromException(cardBiographyForm.setError),
      )
      .executeHandler(),
  );

  useEffect(() => {
    if (isEditing) cardBiographyForm.setFocus('bio');
  }, [isEditing, cardBiographyForm]);

  useEffect(() => {
    if (!isEditing) {
      cardBiographyForm.reset({
        bio: showCardQuery.data?.bio || '',
      });
    }
  }, [showCardQuery.data, isEditing, cardBiographyForm]);

  const handleBiographyFormSubmit = cardBiographyForm.handleSubmit(
    submittedFormValues => {
      if (cardBiographyMutation.isLoading) return;
      cardBiographyMutation.mutate(
        { card: cardSlug, ...submittedFormValues },
        {
          onSuccess: () => {
            showToastSuccessMessage('Biografia atualizada com sucesso!');
          },
        },
      );
    },
  );

  return (
    <SectionWrapper
      title="Biografia"
      description={
        <form id="bio-form" onSubmit={handleBiographyFormSubmit}>
          <StyledTextArea
            rows={4}
            disabled={!isEditing}
            placeholder="Descreva sua biografia"
            defaultValue="teste"
            {...cardBiographyForm.register('bio')}
          />
          <ErrorLabel
            errorMessage={cardBiographyForm.formState.errors.bio?.message}
          />
        </form>
      }
      toolbar={
        <LoadingButton
          btn="secondary"
          type={isEditing ? 'submit' : 'button'}
          form="bio-form"
          isLoading={cardBiographyMutation.isLoading}
          isSuccess={cardBiographyMutation.isSuccess}
          disabled={cardBiographyMutation.isLoading}
          onClick={event => {
            if (!isEditing) {
              event.preventDefault();
              setIsEditing(true);
            }
          }}
          onAnimationFinished={async () => {
            await animationDelay();
            setIsEditing(false);
            cardBiographyMutation.reset();
          }}
        >
          {isEditing ? 'Salvar' : 'Editar'}
        </LoadingButton>
      }
    />
  );
};

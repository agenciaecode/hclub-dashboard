/* eslint-disable react/jsx-props-no-spreading,import/no-cycle */
import React from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { AlertConfirmation } from '@components/overlay/alert-dialog';
import { DescriptiveModal } from '@components/overlay/modal';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import type { CardType } from '@features/cards';
import { useUserProfileQuery } from '@features/user';

import defaultAvatar from '@assets/images/user-avatar.svg';

import { useShowCardQuery } from '../../api/showCard';
import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useDeleteCardAvatarMutation } from './api/deleteCardAvatar';
import {
  RoundedImage,
  SmallerSpinner,
  StyledContentWrapper,
  StyledFigureContainer,
  StyledRemoveAvatarButton,
} from './CardAvatar.styles';
import { CardAvatarForm } from './CardAvatarForm';

export const CardAvatar = () => {
  const cardSlug = useCardSlug();
  const userProfileQuery = useUserProfileQuery();
  const showCardQuery = useShowCardQuery({
    card: cardSlug,
  });

  return (
    <SectionWrapper title="Foto de Perfil">
      <StyledContentWrapper>
        <StyledFigureContainer css={{ borderRadius: 'unset' }}>
          {showCardQuery.isSuccess ? (
            <>
              <RoundedImage
                className="avatar"
                src={
                  showCardQuery.data?.avatar?.url ??
                  userProfileQuery.data?.avatar?.url ??
                  defaultAvatar
                }
                layout="fill"
                alt="avatar"
              />
              {showCardQuery.data.avatar?.url && (
                <DeleteCardAvatarButton card={cardSlug} />
              )}
            </>
          ) : (
            <Spinner color="secondary" css={{ margin: '5rem 5rem' }} />
          )}
        </StyledFigureContainer>
        <DescriptiveModal
          triggerButton={<Button btn="secondary">Editar</Button>}
          title="Foto de perfil"
          description="Selecione uma imagem para adicionar ou alterar seu avatar"
        >
          <CardAvatarForm
            cardSlug={cardSlug}
            showCardQuery={showCardQuery}
            userProfileQuery={userProfileQuery}
          />
        </DescriptiveModal>
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const DeleteCardAvatarButton = ({ card }: { card: CardType }) => {
  const deleteCardAvatarMutation = useDeleteCardAvatarMutation();

  useHttpExceptionHandler(deleteCardAvatarMutation.error, exceptionHandler =>
    exceptionHandler.executeHandler(),
  );

  function handleDeleteCardAvatarConfirmation() {
    if (deleteCardAvatarMutation.isLoading) return;
    deleteCardAvatarMutation.mutate(
      {
        card,
      },
      {
        onSuccess: () => {
          showToastSuccessMessage('Foto do cartão removida com sucesso!');
        },
      },
    );
  }

  return (
    <AlertConfirmation
      title="Remover foto do cartão"
      description={`Você tem certeza que deseja remover a foto do cartão ${card}?`}
      triggerButton={
        <StyledRemoveAvatarButton>
          {deleteCardAvatarMutation.isLoading ||
          deleteCardAvatarMutation.isSuccess ? (
            <SmallerSpinner color="secondary" />
          ) : (
            <Cross1Icon />
          )}
        </StyledRemoveAvatarButton>
      }
      cancelButtonText="Cancelar"
      onOk={handleDeleteCardAvatarConfirmation}
    />
  );
};

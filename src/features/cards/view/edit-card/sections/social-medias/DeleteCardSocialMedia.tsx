/* eslint-disable import/no-cycle */

import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { AsyncAlertConfirmation } from '../../components/async-alert-confirmation';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useDeleteCardSocialMediaMutation } from './api/deleteSocialMedia';
import { WithSocialMediaProp } from './CardSocialMedias';

export const DeleteCardSocialMedia = ({
  socialMedia: deletingSocialMedia,
  closeAlert,
}: WithSocialMediaProp & {
  closeAlert: () => void;
}) => {
  const card = useCardSlug();
  const deleteCardSocialMediaMutation = useDeleteCardSocialMediaMutation();

  useHttpExceptionHandler(
    deleteCardSocialMediaMutation.error,
    exceptionHandler => exceptionHandler.executeHandler(),
  );

  function handleDeleteCardBlock() {
    if (deleteCardSocialMediaMutation.isLoading) return;
    deleteCardSocialMediaMutation.mutate({
      card,
      socialMediaId: deletingSocialMedia.id,
    });
  }

  return (
    <AsyncAlertConfirmation
      title="Excluir Rede Social"
      description={`Realmente deseja excluir a rede social ${deletingSocialMedia.name} - "${deletingSocialMedia.value}"?`}
      onOk={handleDeleteCardBlock}
      onClose={closeAlert}
      isLoading={deleteCardSocialMediaMutation.isLoading}
      isSuccess={deleteCardSocialMediaMutation.isSuccess}
    />
  );
};

import { useQueryClient } from 'react-query';

import {
  AlertConfirmation,
  AlertConfirmationProps,
} from '@components/overlay/alert-dialog';
import { signOut } from '@libs/auth/react';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { destroyCookieSessionRequest } from '@services/app/utils/cookie';

type LogoutConfirmationProps = {
  children: AlertConfirmationProps['triggerButton'];
};

export const LogoutConfirmation = ({ children }: LogoutConfirmationProps) => {
  const queryClient = useQueryClient();

  function handleLogoutSubmit() {
    destroyCookieSessionRequest();
    signOut({
      redirect: '/login',
    })
      .catch(() => showToastErrorMessage('Falha ao efetuar logout'))
      .finally(() => queryClient.clear());
  }

  return (
    <AlertConfirmation
      title="Você tem certeza que deseja sair?"
      description="Voce sera desconectado e tera que conectar novamente a sua conta se quiser usa-la posteriormente"
      cancelButtonText="Cancelar"
      confirmButtonText="Sim"
      onOk={handleLogoutSubmit}
      triggerButton={children}
    />
  );
};

import {
  AlertConfirmation,
  AlertConfirmationProps,
} from '@components/overlay/alert-dialog';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';

import { logout } from '@features/auth';

type LogoutConfirmationProps = {
  children: AlertConfirmationProps['triggerButton'];
};

export const LogoutConfirmation = ({ children }: LogoutConfirmationProps) => {
  function handleLogoutSubmit() {
    logout().catch(() => showToastErrorMessage('Falha ao efetuar o logout.'));
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

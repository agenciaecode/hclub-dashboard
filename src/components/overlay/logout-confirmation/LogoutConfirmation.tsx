import {
  AlertConfirmation,
  AlertConfirmationProps,
} from '@components/overlay/alert-dialog';
import { signOut } from '@libs/auth/react';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';

type LogoutConfirmationProps = {
  children: AlertConfirmationProps['triggerButton'];
};

export const LogoutConfirmation = ({ children }: LogoutConfirmationProps) => {
  function handleLogoutSubmit() {
    signOut({
      redirect: '/login',
    }).catch(() => showToastErrorMessage('Falha ao efetuar logout'));
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

// import { Button } from '@components/forms/button';
// import { AlertDialog } from '@components/overlay/alert-dialog';
import { DescriptiveModal } from '@components/overlay/modal';

import { TextInput } from '@components/forms/text-input';

import { useQuery } from '@hooks/useQuery/api/dashboard';

const ForgotPasswordModal = () => {
  const query = useQuery('/products');

  return (
    <DescriptiveModal
      title="Esqueci minha senha"
      description="Enviaremos um e-mail com instruções para restaurar sua senha"
      triggerButton={<button type="button">Esqueci minha senha</button>}
    >
      <form>
        <TextInput
          label="E-mail"
          id="email"
          name="email"
          placeholder="Insira seu e-mail"
          type="email"
        />
        {/* <AlertDialog
          title="Te enviamos um e-mail"
          description="Cheque sua caixa de entrada para restaurar a sua senha"
          confirmButtonText="Entendi"
          triggerButton={
            <Button css={{ marginTop: '4rem' }} type="button">
              Enviar
            </Button>
          }
        /> */}
      </form>
    </DescriptiveModal>
  );
};

export { ForgotPasswordModal };

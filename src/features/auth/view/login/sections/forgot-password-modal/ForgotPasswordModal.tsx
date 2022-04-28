import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';
import { Alert } from '@components/overlay/alert-dialog';
import { DescriptiveModal } from '@components/overlay/modal';

import { forgotPasswordFormSchema } from './schemas';

type RecoveryPasswordDto = {
  email: string;
};

const ForgotPasswordModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoveryPasswordDto>({
    resolver: yupResolver(forgotPasswordFormSchema),
  });

  function handlePasswordRecoverySubmit() {
    // eslint-disable-next-line no-console
    console.log('Password recovery submit');
  }

  return (
    <DescriptiveModal
      title="Esqueci minha senha"
      description="Enviaremos um e-mail com instruções para restaurar sua senha"
      triggerButton={<button type="button">Esqueci minha senha</button>}
    >
      <form onSubmit={handleSubmit(handlePasswordRecoverySubmit)}>
        <TextInput
          label="E-mail"
          id="email"
          name="email"
          placeholder="Insira seu e-mail"
          type="email"
          errorMessage={errors.email?.message}
          register={register}
        />
        <Alert
          title="Te enviamos um e-mail"
          description="Cheque sua caixa de entrada para restaurar a sua senha"
          confirmButtonText="Entendi"
          triggerButton={
            <Button css={{ marginTop: '4rem' }} type="submit">
              Enviar
            </Button>
          }
        />
      </form>
    </DescriptiveModal>
  );
};

export { ForgotPasswordModal };

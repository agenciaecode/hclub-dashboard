// eslint-disable-next-line no-restricted-imports
import { LoginForm as LoginFormComponent } from '@features/auth/sections/login-form';

import { StyledRegisterButtonContainer } from './LoginForm.styles';

type LoginFormProps = {
  openRegisterForm: () => void;
};

const LoginForm = ({ openRegisterForm }: LoginFormProps) => (
  <LoginFormComponent>
    <StyledRegisterButtonContainer>
      <button type="button" onClick={() => openRegisterForm()}>
        Não possui uma conta? Cadastre-se
      </button>
    </StyledRegisterButtonContainer>
  </LoginFormComponent>
);

export { LoginForm };

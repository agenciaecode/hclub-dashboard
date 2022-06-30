import { yup } from '@libs/yup';

export const updatePasswordSchema = yup
  .object({
    password: yup.string().required('Informar a senha atual é obrigatório'),
    new_password: yup
      .string()
      .required('Informe uma nova senha')
      .notOneOf(
        [yup.ref('password')],
        'A nova senha deve ser diferente da senha atual',
      ),
    new_password_confirmation: yup
      .string()
      .required('Confirme a nova senha')
      .oneOf([yup.ref('new_password')], 'As senhas não conferem'),
  })
  .required();

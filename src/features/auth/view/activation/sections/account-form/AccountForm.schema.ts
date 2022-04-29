/* eslint-disable no-template-curly-in-string */
import { yup } from '@/libs/yup';

export const accountFormSchema = yup
  .object({
    serial: yup.string().required('O número de série do produto é obrigatório'),
    username: yup
      .string()
      .matches(
        /^[A-Za-z0-9-]+$/,
        'O nome de usuário deve conter apenas caracteres alfanuméricos',
      )
      .required('O nome de usuário é obrigatório'),
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('E-mail inválido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve possuir ao menos ${min} caracteres')
      .required('A senha é obrigatória'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
    accept_link: yup
      .bool()
      .oneOf([true], 'Você não pode criar a conta sem vincular um produto'),
  })
  .required();

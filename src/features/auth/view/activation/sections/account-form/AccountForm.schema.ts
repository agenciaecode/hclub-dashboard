/* eslint-disable no-template-curly-in-string */
import { yup } from '@/libs/yup';

export const accountFormSchema = yup
  .object({
    serial_number: yup
      .string()
      .required('O número de série do produto é obrigatório'),
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
      .oneOf([yup.ref('password'), null], 'As senhas não conferem')
      .required('A confirmação de senha é obrigatória'),
    cellphone: yup
      .string()
      .matches(/^[0-9]{2} [0-9]{5}-[0-9]{4}$/, 'Telefone inválido')
      .required('O telefone é obrigatório'),
    accept_link: yup
      .bool()
      .oneOf([true], 'Você não pode criar a conta sem vincular um produto')
      .required('Você deve aceitar o vínculo do produto'),
  })
  .required();

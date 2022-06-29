import { yup } from '@libs/yup';

export const accountFormSchema = yup
  .object({
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
    bio: yup.string().optional(),
    birthday: yup
      .date()
      .max(new Date(), 'Não é possível incluir uma data futura')
      .default(() => undefined)
      .optional(),
    birthday_privacy: yup.boolean().optional(),
    cellphone: yup
      .string()
      .matches(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/, 'Telefone inválido')
      .required('O telefone é obrigatório'),
    city_id: yup.number().optional(),
  })
  .required();

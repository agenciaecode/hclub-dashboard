import { yup } from '@/libs/yup';

export const loginFormSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

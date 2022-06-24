import { yup } from '@/libs/yup';

export const forgotPasswordFormSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

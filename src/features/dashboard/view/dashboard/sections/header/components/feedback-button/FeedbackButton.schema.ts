import { yup } from '@libs/yup';

export const feedbackFormSchema = yup
  .object({
    feedback: yup
      .string()
      .required('Você precisa adicionar uma descrição ao feedback'),
  })
  .required();

import { yup } from '@libs/yup';

export const cardBiographySchema = yup
  .object({
    avatar: yup.string().required(),
  })
  .required();

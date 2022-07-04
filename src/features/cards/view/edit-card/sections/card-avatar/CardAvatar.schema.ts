import { yup } from '@libs/yup';

export const setCardAvatarSchema = yup
  .object({
    avatar: yup
      .mixed<FileList>()
      .test('requiredFile', 'É necessário selecionar uma imagem', fileList =>
        Boolean(fileList?.length),
      )
      .required(),
  })
  .required();

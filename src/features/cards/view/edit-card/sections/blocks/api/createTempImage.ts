import { useMutation } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

type CreateTempImageInput = {
  file: File;
};

type CreateTempImageValidationError = ValidationError<CreateTempImageInput>;

type CreateTempImageOutput = {
  token: string;
  url: string;
};

type TempImage = CreateTempImageOutput;

function createTempImage({
  file,
}: CreateTempImageInput): Promise<CreateTempImageOutput> {
  const formData = new FormData();
  formData.append('file', file);
  return http.post('/temp-upload/image', formData);
}

const useCreateTempImageMutation = () => useMutation(createTempImage);

export { useCreateTempImageMutation };
export type {
  CreateTempImageOutput,
  CreateTempImageValidationError,
  TempImage,
};

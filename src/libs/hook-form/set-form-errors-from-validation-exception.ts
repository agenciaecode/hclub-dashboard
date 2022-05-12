/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormSetError } from 'react-hook-form';
import { objectEntries } from '@antfu/utils';

import { ValidationHttpException } from '@/services/http/HttpException';

//! #TODO restrict arguments typing, instead of using any type
export function setFormErrorsFromValidationException<
  Setter extends UseFormSetError<any>,
  Error extends ValidationHttpException<any>,
>(setError: Setter, validationError: Error) {
  objectEntries(validationError.details).forEach(([key, value]) => {
    setError(key as string, { message: value?.join('\n') });
  });
}

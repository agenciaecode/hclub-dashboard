/* eslint-disable @typescript-eslint/no-explicit-any */

import { objectEntries } from '@antfu/utils';
import { UseFormSetError } from 'react-hook-form';

import { ValidationHttpException } from '@libs/http/HttpException';

//! #TODO restrict arguments typing, instead of using any type
export function setFormErrorsFromValidationException<
  Setter extends UseFormSetError<any>,
  Error extends ValidationHttpException<any>,
>(setError: Setter, validationError: Error) {
  objectEntries(validationError.details).forEach(([key, value]) => {
    setError(key as string, { message: value?.join('\n') });
  });
}

//! #TODO restrict arguments typing, instead of using any type
/**
 * Create a function that will set hook-form errors from a validation exception
 * @param setError - setError function from react-hook-form
 */
export function setFormErrorsFromException<
  Error extends ValidationHttpException<any>,
  Setter extends UseFormSetError<any>,
>(setter: Setter) {
  return (validationError: Error) => {
    setFormErrorsFromValidationException(setter, validationError);
  };
}

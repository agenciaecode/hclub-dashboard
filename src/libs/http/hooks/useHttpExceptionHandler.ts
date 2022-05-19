import { useEffect } from 'react';

import { notNullish } from '@antfu/utils';

import {
  fromHttpException,
  HttpExceptionHandlerBuilder,
} from '../HttpExceptionHandler';

export const useHttpExceptionHandler = <Error = unknown>(
  error: Error,
  effect: (exceptionHandler: HttpExceptionHandlerBuilder) => void,
  factory: (
    errorOrigin: Error,
  ) => HttpExceptionHandlerBuilder = fromHttpException,
) => {
  useEffect(() => {
    if (notNullish(error)) {
      effect(factory(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
};

import { HttpExceptionHandlerBuilder } from '@libs/http/HttpExceptionHandler';
import { fromHttpException } from '@/services/http/default-exception-handler-factory';
import { useHttpExceptionHandler } from '@libs/http/hooks/useHttpExceptionHandler';

const useHttpExceptionHandlerWithDefaults = <Error = unknown>(
  error: Error,
  effect: (exceptionHandler: HttpExceptionHandlerBuilder) => void,
) => {
  useHttpExceptionHandler(error, effect, fromHttpException);
};

export { useHttpExceptionHandlerWithDefaults as useHttpExceptionHandler };

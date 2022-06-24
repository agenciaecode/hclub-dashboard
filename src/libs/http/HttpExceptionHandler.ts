import {
  ValidationHttpException,
  ServerHttpException,
  UnpredictedException,
  ValidationObject,
  OfflineException,
  HttpException,
  ClientHttpException,
} from './HttpException';

type ExceptionHandlerCallback<Exception extends HttpException> = (
  exception: Exception,
) => void;

interface HttpExceptionHandlerBuilder {
  fromException(httpException: HttpException): this;
  setValidationExceptionHandler<ValidationShape extends ValidationObject>(
    handler: ExceptionHandlerCallback<ValidationHttpException<ValidationShape>>,
  ): this;
  setClientExceptionHandler(
    handler: ExceptionHandlerCallback<ClientHttpException>,
  ): this;
  setServerExceptionHandler(
    handler: ExceptionHandlerCallback<ServerHttpException>,
  ): this;
  setOfflineExceptionHandler(
    handler: ExceptionHandlerCallback<OfflineException>,
  ): this;
  setUnpredictedExceptionHandler(
    handler: ExceptionHandlerCallback<UnpredictedException>,
  ): this;

  /**
   * Execute the handler respectively to the exception type.
   */
  executeHandler(): void;
}

/**
 * HttpExceptionHandler
 * !#TODO
 *    - Use better typescript typing for map and exec
 *    - Infer ValidationHttpException sub type based on given exception
 */
class HttpExceptionHandler implements HttpExceptionHandlerBuilder {
  protected readonly exceptionsHandlersMap = new Map([
    [ValidationHttpException, undefined as unknown],
    [ClientHttpException, undefined as unknown],
    [ServerHttpException, undefined as unknown],
    [OfflineException, undefined as unknown],
    [UnpredictedException, undefined as unknown],
  ]);

  constructor(protected httpException: HttpException) {}

  fromException(httpException: HttpException) {
    this.httpException = httpException;
    return this;
  }

  setValidationExceptionHandler<ValidationShape extends ValidationObject>(
    handler: ExceptionHandlerCallback<ValidationHttpException<ValidationShape>>,
  ) {
    this.exceptionsHandlersMap.set(ValidationHttpException, handler);
    return this;
  }

  setClientExceptionHandler(
    handler: ExceptionHandlerCallback<ClientHttpException>,
  ) {
    this.exceptionsHandlersMap.set(ClientHttpException, handler);
    return this;
  }

  setServerExceptionHandler(
    handler: ExceptionHandlerCallback<ServerHttpException>,
  ) {
    this.exceptionsHandlersMap.set(ServerHttpException, handler);
    return this;
  }

  setOfflineExceptionHandler(
    handler: ExceptionHandlerCallback<OfflineException>,
  ) {
    this.exceptionsHandlersMap.set(OfflineException, handler);
    return this;
  }

  setUnpredictedExceptionHandler(
    handler: ExceptionHandlerCallback<UnpredictedException>,
  ) {
    this.exceptionsHandlersMap.set(UnpredictedException, handler);
    return this;
  }

  executeHandler(): void {
    this.exceptionsHandlersMap.forEach((handler, exception) => {
      if (handler && this.httpException instanceof exception) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (handler as unknown)(this.httpException);
      }
    });
  }
}

const fromHttpException = (exception: unknown) =>
  new HttpExceptionHandler(exception as HttpException);

export { fromHttpException, HttpExceptionHandler };
export type { HttpExceptionHandlerBuilder };

import { errorMessageText } from '../../utils/i18n/error-messages';

/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-void */
import {
  ValidationHttpException,
  ServerHttpException,
  UnpredictedException,
  ValidationObject,
  OfflineException,
  HttpException,
  ClientHttpException,
} from './HttpException';

import { showToastErrorMessage } from '@/libs/toast/showToastMessage';

type ExceptionHandlerCallback<Exception extends HttpException> = (
  exception: Exception,
) => void;

// # TODO apply DRY principle

class HttpExceptionHandler {
  constructor(
    protected readonly httpException: HttpException,
    protected useDefaultHandlers = true,
  ) {}

  handleValidationException<ValidationShape extends ValidationObject>(
    handler: ExceptionHandlerCallback<ValidationHttpException<ValidationShape>>,
  ) {
    if (this.httpException instanceof ValidationHttpException) {
      handler(this.httpException);
    }
    return this;
  }

  handleServerException(
    handler: ExceptionHandlerCallback<ServerHttpException>,
  ) {
    if (this.httpException instanceof ServerHttpException) {
      handler(this.httpException);
    }
    return this;
  }

  handleClientException(
    handler: ExceptionHandlerCallback<ClientHttpException>,
  ) {
    if (this.httpException instanceof ClientHttpException) {
      handler(this.httpException);
    }
    return this;
  }

  handleUnpredictedException(
    handler: ExceptionHandlerCallback<UnpredictedException>,
  ) {
    if (this.httpException instanceof UnpredictedException) {
      handler(this.httpException);
    }
    return this;
  }

  handleOfflineException(handler: ExceptionHandlerCallback<OfflineException>) {
    if (this.httpException instanceof OfflineException) {
      handler(this.httpException);
    }
    return this;
  }

  disableDefaultHandlers() {
    this.useDefaultHandlers = false;
  }

  handleDefaultExceptions() {
    if (this.useDefaultHandlers) {
      this.handleServerException(() =>
        showToastErrorMessage(errorMessageText.SERVER_ERROR),
      )
        .handleOfflineException(() =>
          showToastErrorMessage(errorMessageText.OFFLINE_ERROR),
        )
        .handleUnpredictedException(() =>
          showToastErrorMessage(errorMessageText.UNPREDICTED_ERROR),
        );
    }
  }
}

const fromHttpException = <ExceptionType extends HttpException>(
  exception: ExceptionType,
  useDefaultHandlers = true,
) => new HttpExceptionHandler(exception, useDefaultHandlers);

export { fromHttpException };

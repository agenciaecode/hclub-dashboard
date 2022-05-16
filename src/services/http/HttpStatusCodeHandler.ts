import { StatusCodes } from 'http-status-codes';

import { ClientHttpException } from './HttpException';

import { errorMessageText } from '@utils/i18n/error-messages';
import { showToastErrorMessage } from '@/libs/toast/showToastMessage';

type ExceptionHandlerCallback = (clientException: ClientHttpException) => void;

type StatusCodeHandlersMap<ClientError extends ClientHttpException> = Partial<
  Record<StatusCodes, ExceptionHandlerCallback>
> & {
  default?: (clientException: ClientError) => void;
};

const defaultStatusCodeHandler: StatusCodeHandlersMap<ClientHttpException> = {
  [StatusCodes.UNAUTHORIZED]: () =>
    showToastErrorMessage(errorMessageText[StatusCodes.UNAUTHORIZED]),
  [StatusCodes.FORBIDDEN]: () =>
    showToastErrorMessage(errorMessageText[StatusCodes.FORBIDDEN]),
  [StatusCodes.NOT_FOUND]: () =>
    showToastErrorMessage(errorMessageText[StatusCodes.NOT_FOUND]),
  [StatusCodes.TOO_MANY_REQUESTS]: () =>
    showToastErrorMessage(errorMessageText[StatusCodes.TOO_MANY_REQUESTS]),
  default: () => showToastErrorMessage(errorMessageText.CLIENT_ERROR_DEFAULT),
};

/**
 * Create a ClientHttpExceptionHandler function that call given callbacks according to the status code of the exception.
 * @example
 *  .handleClientException( handleClientExceptionByStatus({
 *    StatusCodes.NOT_FOUND: (clientError) => alert(ReasonPhrases.NOT_FOUND),
 *    StatusCodes.UNAUTHORIZED: (clientError) => alert(ReasonPhrases.UNAUTHORIZED),
 *    default: (clientError) => alert(ReasonPhrases.UNPREDICTED),
 *  })
 * @param statusCodeHandlers - A map of status code handlers
 */
export function handleClientExceptionByStatus<
  ClientError extends ClientHttpException,
>(statusCodeHandlers: StatusCodeHandlersMap<ClientError>) {
  const withDefaultHandlers = {
    ...defaultStatusCodeHandler,
    ...statusCodeHandlers,
  };
  return (clientException: ClientError) => {
    const handler =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      withDefaultHandlers[clientException.statusCode!] ||
      withDefaultHandlers.default;
    if (handler) {
      handler(clientException);
      return;
    }
    throw clientException;
  };
}

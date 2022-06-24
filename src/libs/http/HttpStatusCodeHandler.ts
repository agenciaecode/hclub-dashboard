import { StatusCodes } from 'http-status-codes';

import { ClientHttpException } from './HttpException';

type ExceptionHandlerCallback = (clientException: ClientHttpException) => void;

export type StatusCodeHandlersMap<ClientError extends ClientHttpException> =
  Partial<Record<StatusCodes, ExceptionHandlerCallback>> & {
    default?: (clientException: ClientError) => void;
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
  return (clientException: ClientError) => {
    const handler =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      statusCodeHandlers[clientException.statusCode!] ||
      statusCodeHandlers.default;
    if (handler) {
      handler(clientException);
      return;
    }
    throw clientException;
  };
}

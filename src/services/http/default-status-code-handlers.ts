import { StatusCodes } from 'http-status-codes';

import { ClientHttpException } from '@libs/http/HttpException';
import {
  handleClientExceptionByStatus,
  StatusCodeHandlersMap,
} from '@libs/http/HttpStatusCodeHandler';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { errorMessageText } from '@utils/i18n/error-messages';

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
function handleClientExceptionByStatusWithDefaults<
  ClientError extends ClientHttpException,
>(statusCodeHandlers: StatusCodeHandlersMap<ClientError>) {
  return handleClientExceptionByStatus({
    ...defaultStatusCodeHandler,
    ...statusCodeHandlers,
  });
}

function handleApiCode(
  code: string,
  clientException: ClientHttpException,
  handler: () => void,
) {
  if (code === clientException.code) {
    handler();
    return;
  }
  defaultStatusCodeHandler.default?.(clientException);
}

export {
  handleClientExceptionByStatusWithDefaults as handleClientExceptionByStatus,
  handleApiCode,
};

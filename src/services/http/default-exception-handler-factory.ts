import { HttpException } from '@libs/http/HttpException';
import { fromHttpException } from '@libs/http/HttpExceptionHandler';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { handleClientExceptionByStatus } from '@services/http/default-status-code-handlers';
import { errorMessageText } from '@utils/i18n/error-messages';

const fromHttpExceptionWithDefaultHandlers = (exception: unknown) =>
  fromHttpException(exception as HttpException)
    .setClientExceptionHandler(handleClientExceptionByStatus({}))
    .setServerExceptionHandler(() =>
      showToastErrorMessage(errorMessageText.SERVER_ERROR),
    )
    .setOfflineExceptionHandler(() =>
      showToastErrorMessage(errorMessageText.OFFLINE_ERROR),
    )
    .setUnpredictedExceptionHandler(() =>
      showToastErrorMessage(errorMessageText.UNPREDICTED_ERROR),
    );

export { fromHttpExceptionWithDefaultHandlers as fromHttpException };

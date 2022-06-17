import { useMutation } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

type SendFeedbackInput = {
  feedback: string;
  attachment?: File;
};

type SendFeedbackValidationError = ValidationError<SendFeedbackInput>;

function sendFeedback(formData: FormData) {
  return http.post('/feedback', formData);
}

const useSendFeedbackMutation = () => useMutation(sendFeedback);

export { useSendFeedbackMutation };
export type { SendFeedbackInput, SendFeedbackValidationError };

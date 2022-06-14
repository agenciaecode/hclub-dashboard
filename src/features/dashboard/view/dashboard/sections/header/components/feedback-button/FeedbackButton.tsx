/* eslint-disable react/jsx-props-no-spreading */
import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Button } from '@components/forms/button';
import { ErrorLabel } from '@components/forms/error-label';
import { LoadingButton } from '@components/forms/loading-button';
import { TextArea } from '@components/forms/text-area';
import { DescriptiveModal } from '@components/overlay/modal';
import { Tooltip } from '@components/overlay/tooltip';
import { useFormWithSchema } from '@libs/hook-form';

import { feedbackFormSchema } from './FeedbackButton.schema';
import {
  FlexRow,
  StyledFeedbackButton,
  StyledFocusableButton,
} from './FeedbackButton.styles';

const FeedbackSvgIcon = () => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2245 4.76881L9.81208 2.8985L9.80807 2.89732L2.47447 0.758341C2.28818 0.704006 2.09179 0.693792 1.90087 0.728509C1.70994 0.763225 1.52972 0.841918 1.37448 0.958355C1.21924 1.07479 1.09324 1.22578 1.00646 1.39935C0.919678 1.57292 0.874504 1.76431 0.874512 1.95837V12.7916C0.874756 13.1226 1.00602 13.44 1.2396 13.6744C1.47318 13.9088 1.79008 14.0412 2.121 14.0426C2.24067 14.0425 2.35971 14.0253 2.47455 13.9917L8.99997 12.0884V13C9.00035 13.3314 9.13217 13.6491 9.3665 13.8835C9.60084 14.1178 9.91857 14.2496 10.25 14.25H12.75C13.0814 14.2496 13.3991 14.1178 13.6334 13.8835C13.8678 13.6491 13.9996 13.3314 14 13V10.6301L16.2245 9.98128C16.4836 9.90464 16.7111 9.74649 16.8732 9.53032C17.0354 9.31415 17.1235 9.05147 17.1245 8.78126V5.96876C17.1235 5.69856 17.0354 5.4359 16.8733 5.21974C16.7111 5.00358 16.4837 4.84545 16.2245 4.76881V4.76881ZM12.75 13H10.25V11.7238L12.75 10.9947V13ZM15.8745 8.78126L13.1906 9.56404L13.1884 9.56468L10.25 10.4217V4.32825L15.8745 5.96876V8.78126Z"
      fill="white"
    />
  </svg>
);

export const FeedbackButton = () => {
  const feedbackForm = useFormWithSchema(feedbackFormSchema);

  function handleFeedbackSubmit() {
    console.warn('feedback submit', feedbackForm.getValues());
  }

  return (
    <DescriptiveModal
      title="Dar Feedback"
      description="Nos ajude a saber se estamos no caminho certo! Seu feedback é muito importante para nós."
      triggerButton={
        <StyledFocusableButton type="button">
          <Tooltip content="Enviar Feedback">
            <StyledFeedbackButton as="span" outlined>
              <FeedbackSvgIcon />
              <VisuallyHidden>Enviar Feedback</VisuallyHidden>
            </StyledFeedbackButton>
          </Tooltip>
        </StyledFocusableButton>
      }
    >
      <form onSubmit={feedbackForm.handleSubmit(handleFeedbackSubmit)}>
        <TextArea
          rows={5}
          {...feedbackForm.register('feedback')}
          placeholder="Descreva seu feedback"
        />
        {feedbackForm.formState.errors.feedback && (
          <ErrorLabel
            errorMessage={feedbackForm.formState.errors.feedback.message}
          />
        )}
        <FlexRow>
          <Button type="button" btn="secondary">
            Adicionar Anexo
          </Button>
          <LoadingButton type="submit" isLoading={false} isSuccess={false}>
            Enviar
          </LoadingButton>
        </FlexRow>
      </form>
    </DescriptiveModal>
  );
};

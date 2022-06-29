/* eslint-disable react/jsx-props-no-spreading,prefer-arrow-callback */
import { ComponentProps, ElementRef, forwardRef } from 'react';

import { ErrorLabel } from '@components/forms/error-label';
import {
  InputWrapper,
  InputWrapperProps,
} from '@components/forms/input-wrapper';
import { TextArea } from '@components/forms/text-area';

import { PickAsRequired } from '@/types/pick-as-required';

type TextAreaProps = ComponentProps<typeof TextArea>;

type LabeledTextAreaProps = Pick<InputWrapperProps, 'label' | 'errorMessage'> &
  TextAreaProps &
  PickAsRequired<TextAreaProps, 'id'>;

const LabelledTextArea = forwardRef<
  ElementRef<typeof TextArea>,
  LabeledTextAreaProps
>(function LabelledTextArea(
  { label, errorMessage, className, ...textAreaProps },
  forwardedRef,
) {
  return (
    <InputWrapper
      label={label}
      forId={textAreaProps.id}
      errorMessage={errorMessage}
      className={className}
    >
      <TextArea {...textAreaProps} ref={forwardedRef} />
    </InputWrapper>
  );
});

export { LabelledTextArea };
export type { LabeledTextAreaProps };

/* eslint-disable prefer-arrow-callback,react/jsx-props-no-spreading */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { ErrorLabel } from '@components/forms/error-label';

import { StyledInputWrapper, StyledLabel } from './InputWrapper.styles';

type WrapperProps = ComponentPropsWithoutRef<typeof StyledInputWrapper>;

export type InputWrapperProps = {
  label: string;
  forId: string;
  errorMessage?: string;
} & WrapperProps;

const InputWrapper = forwardRef<
  ElementRef<typeof StyledInputWrapper>,
  InputWrapperProps
>(function InputWrapper(
  { label, forId, errorMessage, children, ...inputWrapperProps },
  forwardedRef,
) {
  return (
    <StyledInputWrapper {...inputWrapperProps} ref={forwardedRef}>
      <StyledLabel htmlFor={forId}>{label}</StyledLabel>
      {children}
      <ErrorLabel htmlFor={forId} errorMessage={errorMessage} />
    </StyledInputWrapper>
  );
});

InputWrapper.defaultProps = {
  errorMessage: undefined,
};

export { InputWrapper };

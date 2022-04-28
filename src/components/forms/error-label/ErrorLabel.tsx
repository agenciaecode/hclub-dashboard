/* eslint-disable react/jsx-props-no-spreading */
import { LabelProps } from '@components/forms/label';
import { ErrorInfoIcon } from '@components/icons/error-info';

import { StyledLabel } from './ErrorLabel.styles';

export type ErrorLabelProps = LabelProps & {
  errorMessage?: string;
};

export const ErrorLabel = ({
  errorMessage,
  ...labelProps
}: ErrorLabelProps) => {
  if (errorMessage) {
    return (
      <StyledLabel {...labelProps}>
        <ErrorInfoIcon />
        <span>{errorMessage}</span>
      </StyledLabel>
    );
  }
  return null;
};

ErrorLabel.defaultProps = {
  errorMessage: undefined,
};

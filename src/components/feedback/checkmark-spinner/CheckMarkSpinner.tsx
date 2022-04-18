/* eslint-disable react/jsx-props-no-spreading */
import { CheckIcon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { StyledCheckMarkSpinner } from './CheckMarkSpinner.styles';

type CheckMarkSpinnerProps = React.ComponentProps<
  typeof StyledCheckMarkSpinner
> & {
  /**
   * aria screen reader text label
   */
  label?: string;
};

const CheckMarkSpinner = ({
  label,
  ...spinnerProps
}: CheckMarkSpinnerProps) => (
  <StyledCheckMarkSpinner {...spinnerProps}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <CheckIcon />
  </StyledCheckMarkSpinner>
);

CheckMarkSpinner.defaultProps = {
  label: 'Loading...',
};

export { CheckMarkSpinner };

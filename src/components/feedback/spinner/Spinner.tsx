/* eslint-disable react/jsx-props-no-spreading */
import { VisuallyHidden } from '@components/disclosure/visually-hidden';

import { StyledSpinner } from './Spinner.styles';

type SpinnerProps = React.ComponentProps<typeof StyledSpinner> & {
  /**
   * screen reader text label
   */
  label?: string;
};

const Spinner = ({ label, ...rest }: SpinnerProps) => (
  <StyledSpinner {...rest}>
    <VisuallyHidden>{label}</VisuallyHidden>
  </StyledSpinner>
);

Spinner.defaultProps = {
  label: 'Loading...',
};

export { Spinner };

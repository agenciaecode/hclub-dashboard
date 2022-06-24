/* eslint-disable react/jsx-props-no-spreading */
import type { ComponentProps } from 'react';

import { CheckIcon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {
  growArrowAnimation,
  StyledCheckMarkSpinner,
} from './CheckMarkSpinner.styles';

type CheckMarkSpinnerProps = ComponentProps<typeof StyledCheckMarkSpinner> & {
  /**
   * aria screen reader text label
   */
  label?: string;
  onAnimationFinish?: () => void;
};

const CheckMarkSpinner = ({
  label,
  onAnimationFinish,
  ...spinnerProps
}: CheckMarkSpinnerProps) => (
  <StyledCheckMarkSpinner
    {...spinnerProps}
    onAnimationEnd={event => {
      if (event.animationName === growArrowAnimation.name) {
        onAnimationFinish?.();
      }
    }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    <CheckIcon />
  </StyledCheckMarkSpinner>
);

CheckMarkSpinner.defaultProps = {
  label: 'Loading...',
  onAnimationFinish: undefined,
};

export { CheckMarkSpinner };

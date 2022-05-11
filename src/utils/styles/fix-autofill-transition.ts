import { Property } from '@stitches/react/types/css';

export function fixAutofillTransition(
  transition: Property.Transition,
): Property.Transition {
  return ['background-color 600000s 0s, color 600000s 0s', transition].join(
    ', ',
  );
}

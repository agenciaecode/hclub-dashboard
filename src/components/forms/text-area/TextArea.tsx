/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { StyledTextArea } from './TextArea.styles';

const TextArea = forwardRef<
  ElementRef<typeof StyledTextArea>,
  ComponentPropsWithoutRef<typeof StyledTextArea>
>(function TextArea(textAreaProps, forwardedRef) {
  return <StyledTextArea {...textAreaProps} ref={forwardedRef} />;
});

export { TextArea };

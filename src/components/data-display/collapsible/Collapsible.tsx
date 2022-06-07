/* eslint-disable react/jsx-props-no-spreading */
import type { ReactNode } from 'react';

import * as Primitive from '@radix-ui/react-collapsible';

export type CollapsibleProps = Primitive.CollapsibleProps & {
  trigger: ReactNode;
};

export const Collapsible = ({
  children,
  trigger,
  ...collapsibleProps
}: CollapsibleProps) => (
  <Primitive.Collapsible {...collapsibleProps}>
    <Primitive.CollapsibleTrigger asChild>
      {trigger}
    </Primitive.CollapsibleTrigger>
    <Primitive.CollapsibleContent asChild>
      {children}
    </Primitive.CollapsibleContent>
  </Primitive.Collapsible>
);

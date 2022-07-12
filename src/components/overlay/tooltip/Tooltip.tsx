/* eslint-disable react/jsx-props-no-spreading */
import type { ReactNode } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { VariantProps } from '@stitches/react';

import { StyledContent, StyledFakeArrow } from './Tooltip.styles';

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
} & TooltipPrimitive.TooltipContentProps &
  VariantProps<typeof StyledFakeArrow>;

const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  color,
  ...tooltipProps
}: TooltipProps) => (
  <TooltipPrimitive.Root
    open={open}
    defaultOpen={defaultOpen}
    onOpenChange={onOpenChange}
  >
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
    <StyledContent colors={color} side="top" align="center" {...tooltipProps}>
      {content}
      <TooltipPrimitive.Arrow offset={15} asChild>
        <StyledFakeArrow color={color} />
      </TooltipPrimitive.Arrow>
    </StyledContent>
  </TooltipPrimitive.Root>
);

Tooltip.defaultProps = {
  open: undefined,
  defaultOpen: undefined,
  onOpenChange: undefined,
};

const TooltipProvider = TooltipPrimitive.Provider;

export { Tooltip, TooltipProvider };
export type { TooltipProps };

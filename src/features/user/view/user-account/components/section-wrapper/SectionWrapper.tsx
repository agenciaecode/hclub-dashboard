import type { ReactNode } from 'react';

import { WithChildren } from '@/types/with-children';

import {
  StyledSection,
  StyledSectionContent,
  StyledSectionDescription,
  StyledSectionHeader,
  StyledSectionToolbar,
} from './SectionWrapper.styles';

export type SectionWrapperProps = WithChildren<{
  title: string;
  description?: string;
  toolbarSlot: ReactNode;
}>;

export const SectionWrapper = ({
  title,
  description,
  toolbarSlot,
  children,
}: SectionWrapperProps) => (
  <StyledSection>
    <StyledSectionHeader>
      <span>{title}</span>
      {description && (
        <StyledSectionDescription>{description}</StyledSectionDescription>
      )}
    </StyledSectionHeader>
    <StyledSectionToolbar>{toolbarSlot}</StyledSectionToolbar>
    {children && <StyledSectionContent>{children}</StyledSectionContent>}
  </StyledSection>
);

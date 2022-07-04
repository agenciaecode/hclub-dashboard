import { ReactNode } from 'react';

import { WithChildren } from '@/types/with-children';

import {
  StyledFlexColumn,
  StyledFlexRow,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionWrapper,
} from './SectionWrapper.styles';

export type SectionWrapperProps = WithChildren<{
  title: string;
  description?: ReactNode;
  toolbar?: ReactNode;
}>;

export const SectionWrapper = ({
  title,
  description,
  toolbar,
  children,
}: SectionWrapperProps) => (
  <StyledSectionWrapper>
    <StyledFlexRow>
      {description ? (
        <StyledFlexColumn>
          <StyledSectionTitle>{title}</StyledSectionTitle>
          {description}
        </StyledFlexColumn>
      ) : (
        <StyledSectionTitle>{title}</StyledSectionTitle>
      )}
      {toolbar}
    </StyledFlexRow>
    {children && <StyledSectionContent>{children}</StyledSectionContent>}
  </StyledSectionWrapper>
);

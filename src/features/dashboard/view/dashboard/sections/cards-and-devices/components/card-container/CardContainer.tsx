import { ReactNode } from 'react';

import {
  StyledCardContainerArticle,
  StyledCardContainerHeader,
  StyledCardListContainer,
} from './CardContainer.styles';

export type CardContainerProps = {
  title: string;
  children: ReactNode;
};

export const CardContainer = ({ title, children }: CardContainerProps) => (
  <StyledCardContainerArticle>
    <StyledCardContainerHeader>{title}</StyledCardContainerHeader>
    <StyledCardListContainer>{children}</StyledCardListContainer>
  </StyledCardContainerArticle>
);

import { ReactNode } from 'react';

import { StyledExplorerFileItem } from './ExplorerFileItem.styles';

type ExplorerFileItemProps = {
  children: ReactNode;
};

const ExplorerFileItem = ({ children }: ExplorerFileItemProps) => (
  <StyledExplorerFileItem>{children}</StyledExplorerFileItem>
);

export { ExplorerFileItem };

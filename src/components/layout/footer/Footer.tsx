import React from 'react';

import { StyledFooter } from './Footer.styles';

const Footer = (footerProps: React.ComponentProps<typeof StyledFooter>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledFooter {...footerProps}>H.MAN All rights reserved 2022</StyledFooter>
);

export { Footer };

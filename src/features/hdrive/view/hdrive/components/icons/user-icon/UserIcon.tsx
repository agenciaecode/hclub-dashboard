import * as React from 'react';

import { StyledSvgIcon } from '../Icons.styles';

const UserIcon = () => (
  <StyledSvgIcon
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="M2.42 16.874a8.752 8.752 0 0 1 15.159 0"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvgIcon>
);

export { UserIcon };

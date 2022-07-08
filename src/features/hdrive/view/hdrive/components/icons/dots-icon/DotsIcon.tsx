import * as React from 'react';

import { StyledSvgIcon } from '../Icons.styles';

const DotsIcon = () => (
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
      d="M8.333 15.833c0 .917.75 1.667 1.667 1.667s1.667-.75 1.667-1.667c0-.916-.75-1.666-1.667-1.666s-1.667.75-1.667 1.666ZM8.333 4.167c0 .916.75 1.666 1.667 1.666s1.667-.75 1.667-1.666c0-.917-.75-1.667-1.667-1.667s-1.667.75-1.667 1.667ZM8.333 10c0 .917.75 1.667 1.667 1.667s1.667-.75 1.667-1.667-.75-1.667-1.667-1.667-1.667.75-1.667 1.667Z"
      fill="#000"
    />
  </StyledSvgIcon>
);

export { DotsIcon };

import * as React from 'react';

import { StyledSvgIcon } from '../Icons.styles';

const TrashIcon = () => (
  <StyledSvgIcon
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.875 4.375H3.125"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.125 8.125v5M11.875 8.125v5M15.625 4.375V16.25a.624.624 0 0 1-.625.625H5a.625.625 0 0 1-.625-.625V4.375M13.125 4.375v-1.25a1.25 1.25 0 0 0-1.25-1.25h-3.75a1.25 1.25 0 0 0-1.25 1.25v1.25"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvgIcon>
);

export { TrashIcon };

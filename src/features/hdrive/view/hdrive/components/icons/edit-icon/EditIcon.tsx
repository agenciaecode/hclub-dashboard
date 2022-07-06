import * as React from 'react';

import { StyledSvgIcon } from '../Icons.styles';

const EditIcon = () => (
  <StyledSvgIcon
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 16.875H3.75a.625.625 0 0 1-.625-.625v-3.491a.625.625 0 0 1 .183-.442l9.375-9.375a.625.625 0 0 1 .884 0l3.491 3.491a.625.625 0 0 1 0 .884L7.5 16.875ZM10.625 5 15 9.375"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.875 16.875H7.5L3.165 12.54"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvgIcon>
);

export { EditIcon };

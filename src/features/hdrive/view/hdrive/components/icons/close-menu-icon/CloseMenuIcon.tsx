import * as React from 'react';

type CloseMenuIconProps = {
  stroke?: string;
};

const CloseMenuIcon = ({ stroke }: CloseMenuIconProps) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m15.625 4.375-11.25 11.25M15.625 15.625 4.375 4.375"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CloseMenuIcon.defaultProps = {
  stroke: '#000',
};

export { CloseMenuIcon };

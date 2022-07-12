import * as React from 'react';

import { StyledSvgIcon } from '../Icons.styles';

const PrivacyIcon = () => (
  <StyledSvgIcon
    svgSpace="left"
    width={18}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.125 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.386 1.313H4.74A4.739 4.739 0 0 0 0 13.05c0 .525.424.949.948.949H11.3a.948.948 0 0 0 .949-.949 4.74 4.74 0 0 0-4.739-4.739Zm5.59.437h-2.02a5.54 5.54 0 0 1 2.044 4.301c0 .35-.104.673-.273.949h3.773a.881.881 0 0 0 .875-.9c0-2.392-1.958-4.35-4.4-4.35ZM11.811 7a3.06 3.06 0 0 0 3.063-3.063A3.06 3.06 0 0 0 11.812.876c-.686 0-1.313.234-1.824.616.315.604.512 1.282.512 2.009 0 .971-.326 1.863-.864 2.59.555.56 1.323.91 2.177.91Z"
      fill="#858585"
    />
  </StyledSvgIcon>
);

PrivacyIcon.defaultProps = {
  svgSpace: undefined,
};

export { PrivacyIcon };

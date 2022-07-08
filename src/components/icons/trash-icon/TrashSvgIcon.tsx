import { SVGProps } from 'react';

export const TrashSvgIcon = (svgProps: SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...svgProps}
  >
    <path
      d="M4.39844 1.01826C4.55664 0.700625 4.88184 0.5 5.23633 0.5H8.76367C9.11816 0.5 9.44336 0.700625 9.60156 1.01826L9.8125 1.4375H12.625C13.1436 1.4375 13.5625 1.85732 13.5625 2.375C13.5625 2.89268 13.1436 3.3125 12.625 3.3125H1.375C0.857324 3.3125 0.4375 2.89268 0.4375 2.375C0.4375 1.85732 0.857324 1.4375 1.375 1.4375H4.1875L4.39844 1.01826ZM12.0039 14.1553C11.957 14.9229 11.3447 15.5 10.6006 15.5H3.39941C2.65674 15.5 2.04209 14.9229 1.9958 14.1553L1.34863 4.25H12.625L12.0039 14.1553Z"
      fill="currentColor"
    />
  </svg>
);

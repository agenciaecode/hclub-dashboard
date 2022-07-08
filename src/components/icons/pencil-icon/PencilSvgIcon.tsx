import { SVGProps } from 'react';

export const PencilSvgIcon = (svgProps: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...svgProps}
  >
    <path
      d="M11.126 1.066C11.8584 0.333633 13.0478 0.333633 13.7803 1.066L14.9346 2.22117C15.667 2.9533 15.667 4.14158 14.9346 4.874L13.5166 6.29197L9.708 2.48396L11.126 1.066ZM12.8545 6.95408L6.02245 13.7832C5.71777 14.0879 5.33984 14.3135 4.92675 14.4336L1.40146 15.4707C1.15478 15.5439 0.887884 15.4765 0.70595 15.2685C0.524011 15.1133 0.455989 14.8467 0.528587 14.5976L1.56552 11.0732C1.6874 10.6601 1.91093 10.2822 2.21591 9.97752L9.04589 3.14666L12.8545 6.95408Z"
      fill="currentColor"
    />
  </svg>
);

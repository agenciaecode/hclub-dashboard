import { forwardRef, SVGProps } from 'react';

export const EllipsisSvgIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
  // eslint-disable-next-line prefer-arrow-callback
>(function CardContainer(svgProps, forwardedRef) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...svgProps}
      ref={forwardedRef}
    >
      <path
        d="M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z"
        fill="black"
      />
      <path
        d="M15.8334 8.33325C14.9167 8.33325 14.1667 9.08325 14.1667 9.99992C14.1667 10.9166 14.9167 11.6666 15.8334 11.6666C16.7501 11.6666 17.5001 10.9166 17.5001 9.99992C17.5001 9.08325 16.7501 8.33325 15.8334 8.33325Z"
        fill="black"
      />
      <path
        d="M9.99992 8.33325C9.08325 8.33325 8.33325 9.08325 8.33325 9.99992C8.33325 10.9166 9.08325 11.6666 9.99992 11.6666C10.9166 11.6666 11.6666 10.9166 11.6666 9.99992C11.6666 9.08325 10.9166 8.33325 9.99992 8.33325Z"
        fill="black"
      />
    </svg>
  );
});

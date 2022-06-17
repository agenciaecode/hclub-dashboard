/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ComponentProps, forwardRef } from 'react';

import { StyledAnchor } from './Link.style';

type LinkProps = Omit<ComponentProps<typeof StyledAnchor>, 'href'> &
  Omit<NextLinkProps, 'as' | 'passHref' | 'children'>;

/**
 * A convenience component that wraps the 'a' anchor tag
 * @see https://next.js.org/docs/api-reference/next/link
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
      children,
      ...anchorProps
    },
    ref,
  ) => (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      prefetch={prefetch}
      passHref
    >
      <StyledAnchor ref={ref} {...anchorProps}>
        {children}
      </StyledAnchor>
    </NextLink>
  ),
);

Link.displayName = 'Link';

export { Link };
export type { LinkProps };

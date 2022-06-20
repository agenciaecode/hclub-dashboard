import Head from 'next/head';
import { ReactNode } from 'react';

import { HeaderNavbar } from '@features/header';

import { WithChildren } from '@/types/with-children';

import { StyledMainContent, StyledWrapper } from './PageContent.styles';

export type PageContentProps = WithChildren<{
  title: string;
  description: string;
  head?: ReactNode;
}>;

export const PageContent = ({
  title,
  description,
  head,
  children,
}: PageContentProps) => (
  <>
    <Head>
      <title>{title} | HClub</title>
      <meta name="description" content={description} />
      {head}
    </Head>
    <StyledWrapper>
      <HeaderNavbar />
      <StyledMainContent>{children}</StyledMainContent>
    </StyledWrapper>
  </>
);

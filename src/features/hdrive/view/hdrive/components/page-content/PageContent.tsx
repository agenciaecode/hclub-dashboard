/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Button } from '@components/forms/button';

import { WithChildren } from '@/types/with-children';

import logoWhite from '@assets/images/logo-hman-white.svg';

import { SignOutIcon } from '../icons/sign-out-icon/SignOutIcon';
import { UserIcon } from '../icons/user-icon/UserIcon';
import { NavbarHdrive } from '../navbar-hdrive/NavbarHdrive';
import {
  StyledLeftContent,
  StyledRightContent,
} from '../navbar-hdrive/NavbarHdrive.styles';
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
      <NavbarHdrive>
        <StyledLeftContent>
          <Image
            src={logoWhite}
            alt="H.man Logo image"
            width={60}
            height={60}
          />
        </StyledLeftContent>
        <StyledRightContent>
          <Button outlined>
            <UserIcon />
            <label>Meus dados</label>
          </Button>
          <Button outlined size="small">
            <SignOutIcon />
          </Button>
        </StyledRightContent>
      </NavbarHdrive>
      <StyledMainContent>{children}</StyledMainContent>
    </StyledWrapper>
  </>
);

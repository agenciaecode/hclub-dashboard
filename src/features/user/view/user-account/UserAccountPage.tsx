import { useRouter } from 'next/router';

import { Separator } from '@components/data-display/separator';
import { PageContent } from '@components/layout/page-content';
import { ResponsiveBackButton } from '@components/others/back-button';

import { AccountForm } from './sections/account-form';
import { MedicalProfileForm } from './sections/medical-profile-form';
import { Security } from './sections/security';
import { StyledMainHeader, StyledTitle } from './UserAccountPage.styles';

export const UserAccountPage = () => {
  const router = useRouter();

  return (
    <PageContent title="Meus dados" description="H.club user account">
      <StyledMainHeader>
        <ResponsiveBackButton onClick={() => router.back()} />
        <StyledTitle>Meus dados</StyledTitle>
      </StyledMainHeader>
      <AccountForm />
      <Separator />
      <MedicalProfileForm />
      <Separator />
      <Security />
    </PageContent>
  );
};

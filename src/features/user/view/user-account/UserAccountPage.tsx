import { useRouter } from 'next/router';

import { Separator } from '@components/data-display/separator';
import { PageContent } from '@components/layout/page-content';

import { AccountForm } from './sections/account-form';
import { MedicalProfileForm } from './sections/medical-profile-form';
import { Security } from './sections/security';
import {
  StyledBackButton,
  StyledMainHeader,
  StyledTitle,
} from './UserAccountPage.styles';

export const UserAccountPage = () => {
  const router = useRouter();

  return (
    <PageContent title="Meus dados" description="H.club user account">
      <StyledMainHeader>
        <StyledBackButton onClick={() => router.back()} />
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

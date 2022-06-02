import { styled } from '@/theme';

const StyledUserProfilesAndDevicesWrapper = styled('section', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  width: '100%',
  gap: '6rem',
});

export { StyledUserProfilesAndDevicesWrapper };

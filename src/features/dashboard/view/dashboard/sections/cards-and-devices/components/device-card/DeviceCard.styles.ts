import { Button } from '@components/forms/button';

import { styled } from '@/theme';
import { CSS } from '@/theme/stitches';

import { FlippableCard } from '../flippable-card';

const StyledFlippableCard = styled(FlippableCard, {
  border: '1px solid $backgroundBlack',
  background: 'transparent',
});

const StyledFrontCardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '4rem',
  height: '100%',
  width: '100%',
  color: '$textBlack',
});

const StyledDeviceInfo = styled('p', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  maxWidth: '100%',
  padding: '0 2rem',
});

const overflowingText: CSS = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '100%',
};

const StyledDeviceName = styled('span', overflowingText);

const StyledDeviceSerial = styled('span', overflowingText, {
  fontSize: '$base',
  lineHeight: '$base',
});

const StyledDeviceOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  gap: '1rem',
  height: '100%',
});

const StyledLoadingButton = styled(Button, {
  width: '100%',
  whiteSpace: 'pre-wrap',
  padding: '1rem 1.5rem',
  fontSize: '$sm',
  lineHeight: '$sm',
});

export {
  StyledFlippableCard,
  StyledFrontCardBody,
  StyledDeviceInfo,
  StyledDeviceName,
  StyledDeviceSerial,
  StyledDeviceOptions,
  StyledLoadingButton,
};

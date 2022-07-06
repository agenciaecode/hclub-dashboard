import Image from 'next/image';

import { Spinner } from '@components/feedback/spinner';

import { styled } from '@/theme';

const StyledContentWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '2rem',
  '@md': {
    gap: '5rem',
  },
});

const StyledFigureContainer = styled('figure', {
  position: 'relative',
  overflow: 'hidden',
  $$sizing: '12rem',
  width: '$$sizing',
  height: '$$sizing',
  '@md': {
    $$desktopSizing: '13.5rem',
    width: '$$desktopSizing',
    height: '$$desktopSizing',
  },
});

const StyledRemoveAvatarButton = styled('button', {
  position: 'absolute',
  right: 0,
  $$buttonSize: '3rem',
  width: '$$buttonSize',
  height: '$$buttonSize',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$backgroundWhite',
  border: 'solid 1px $black',
});

const RoundedImage = styled(Image, {
  borderRadius: '50%',
});

const StyledFlexRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  gap: '3rem',
  rowGap: '2rem',
});

const StyledButtonsWrapper = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'start',
  gap: '2rem',
  '@sm': {
    flexDirection: 'row',
  },
});

const SmallerSpinner = styled(Spinner, {
  $$size: '1rem',
  width: '$$size',
  height: '$$size',
  borderWidth: '1px !important',
});

export {
  StyledContentWrapper,
  StyledFigureContainer,
  RoundedImage,
  StyledRemoveAvatarButton,
  SmallerSpinner,
  StyledFlexRow,
  StyledButtonsWrapper,
};

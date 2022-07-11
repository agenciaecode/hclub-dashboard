import { Flex } from '@components/layout/flex';

import { styled } from '@/theme';

import { IconButton } from '../../components/icon-button';

const StyledSocialMediaItem = styled(Flex, {
  display: 'flex',
  padding: '3.2rem 0',
  borderBottom: 'solid 1px $gray',
  gap: '2.4rem',
  alignItems: 'center',
  variants: {
    grabbing: {
      true: {
        cursor: 'grabbing',
      },
    },
    isDisabled: {
      true: {
        opacity: 0.65,
        '@sm': {
          opacity: 'initial',
        },
      },
    },
    isUpdating: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

const StyledDragIconContainer = styled('div', {
  lineHeight: 0,
  cursor: 'grab',
  padding: '0.5rem',
  borderRadius: 2,
  '&:hover': {
    boxShadow: '0 0 2px 1px $shadowGray',
  },
});

const StyledSocialMediaIcon = styled(Flex, {
  position: 'relative',
  minWidth: '6rem',
  minHeight: '6rem',
  '&:hover': {
    opacity: 0.8,
  },
});

const StyledControlsWrapper = styled(Flex, {
  alignItems: 'center',
  gap: '2.4rem',
  '& > *': {
    // TODO improve selector
    display: 'none',
    '@sm': {
      display: 'block',
    },
  },
});

const StyledMobileDropdownButton = styled(IconButton, {
  display: 'block !important',
  '@sm': {
    display: 'none !important',
  },
});

const StyledFigure = styled('figure', {
  position: 'relative',
  width: '9.2rem',
  height: '9.2rem',
  '& > svg': {
    width: '100%',
    height: '100%',
  },
});

const StyledResponsiveFlex = styled(Flex, {
  gap: '2rem',
  flexDirection: 'column-reverse',
  '@sm': {
    flexDirection: 'row',
  },
});

const StyledResponsiveSocialMediaHeader = styled(Flex, {
  marginBottom: '1rem',
  gap: '1rem',
  flexDirection: 'column',
  '@xs': {
    marginBottom: 0,
    gap: '2rem',
    flexDirection: 'row',
  },
});

export {
  StyledSocialMediaItem,
  StyledDragIconContainer,
  StyledSocialMediaIcon,
  StyledControlsWrapper,
  StyledMobileDropdownButton,
  StyledFigure,
  StyledResponsiveFlex,
  StyledResponsiveSocialMediaHeader,
};

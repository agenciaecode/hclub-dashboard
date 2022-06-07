import { Link } from '@components/icons/navigator/link';

import { styled } from '@/theme';

const StyledAccountManageSection = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1.6rem',
  marginRight: '1rem',
});

const StyledAccountManageIconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
});

const StyledAccountManageTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontSize: '$sm',
  lineHeight: '$sm',
  '@desktop': {
    fontSize: '$base',
    lineHeight: '$base',
  },
  variants: {
    mobile: {
      true: {
        fontSize: '$base',
        lineHeight: '$base',
      },
    },
  },
});

const StyledAccountManageLink = styled(Link, {
  fontWeight: '$defaultRegular',
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
  textDecorationThickness: '0.1rem',
  fontSize: '$base',
  lineHeight: '$base',
  '@desktop': {
    fontSize: '$lg',
    lineHeight: '$lg',
  },
  variants: {
    mobile: {
      true: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
    },
  },
});

export {
  StyledAccountManageSection,
  StyledAccountManageIconWrapper,
  StyledAccountManageTextWrapper,
  StyledAccountManageLink,
};

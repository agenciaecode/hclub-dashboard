import * as SelectPrimitive from '@radix-ui/react-select';

import { styled } from '@/theme';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 5,
  padding: '0 1.6rem',
  fontSize: '$base',
  lineHeight: '$base',
  minHeight: '5rem',
  gap: 5,
  backgroundColor: 'white',
  color: 'black',
  border: 'solid 1px $black',
  boxShadow: `0 0 0 black`,
  minWidth: '15rem',
  '&:hover': { backgroundColor: '$grayLighter' },
  '&:focus': { boxShadow: '0 0 0 0.2rem $shadowGray' },
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$backgroundWhite',
  color: '$textBlack',
  borderRadius: 5,
  border: 'solid 1px $black',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {});

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: '$base',
  lineHeight: '$base',
  color: '$textBlack',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  padding: '1.5rem 1.6rem',
  '&[data-disabled]': {
    color: '$auxiliaryNegative',
    pointerEvents: 'none',
  },
  '&[data-state="active"]': {
    background: '$grayLight',
  },
  '&:nth-last-child(n+2)::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    width: 'calc(100% - 1.6rem * 2)',
    height: '0.1rem',
    backgroundColor: '$gray',
  },
  '&:focus': {
    backgroundColor: '$grayLighter',
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: '$lg',
  lineHeight: '$lg',
  color: '$textBlack',
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$backgroundBlack',
  margin: 5,
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$backgroundWhite',
  color: '$textBlack',
  cursor: 'default',
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles,
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles,
);

export {
  StyledTrigger,
  StyledContent,
  StyledViewport,
  StyledItem,
  StyledLabel,
  StyledSeparator,
  StyledScrollUpButton,
  StyledScrollDownButton,
};

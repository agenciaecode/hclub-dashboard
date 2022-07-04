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
  borderRadius: '50%',
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

export {
  StyledContentWrapper,
  StyledFigureContainer,
  StyledFlexRow,
  StyledButtonsWrapper,
};

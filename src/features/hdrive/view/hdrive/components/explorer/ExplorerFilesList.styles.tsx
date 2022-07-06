import { styled } from '@/theme';

const StyledNoFiles = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$black',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '2rem',
  lineHeight: '2.3rem',
});

const StyledExplorerFilesList = styled('table', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const StyledTbody = styled('tbody', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
});

export { StyledNoFiles, StyledExplorerFilesList, StyledTbody };

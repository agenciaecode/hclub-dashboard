import Image from 'next/image';

import { styled } from '@/theme';

const StyledPreviewFrameWrapper = styled('div', {
  width: 305,
  height: 616,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledPreviewPhoneFrame = styled(Image, {
  // pointerEvents: 'none',
});

const StyledPhoneNotch = styled('div', {
  position: 'absolute',
  margin: '0 auto',
  height: '27px',
  top: '12px',
  width: '141px',
  borderRadius: '0 0 90px 90px / 0 0 140px 140px',
  background: '#08060B',
});

const StyledPreviewIFrame = styled('iframe', {
  $$boxSize: 'calc(100% - 25px)',
  width: '$$boxSize',
  height: '$$boxSize',
  $$frameBorderRadius: '38px',
  borderTopLeftRadius: '34px',
  borderTopRightRadius: '$$frameBorderRadius',
  borderBottomLeftRadius: '35px',
  borderBottomRightRadius: '$$frameBorderRadius',
  position: 'absolute',
});

export {
  StyledPreviewFrameWrapper,
  StyledPreviewPhoneFrame,
  StyledPhoneNotch,
  StyledPreviewIFrame,
};

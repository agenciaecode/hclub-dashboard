import Image from 'next/image';

import { styled } from '@/theme';

const PHONE_FRAME_WIDTH = '305px';
const PHONE_FRAME_HEIGHT = '616px';

const StyledStickyPreviewWrapper = styled('div', {
  position: 'sticky',
  $$stickyOffset: `calc((100vh - ${PHONE_FRAME_HEIGHT}) / 2)`,
  top: 'max(0px, $$stickyOffset)',
});

const StyledPreviewFrameWrapper = styled('div', {
  width: PHONE_FRAME_WIDTH,
  height: PHONE_FRAME_HEIGHT,
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
  StyledStickyPreviewWrapper,
  StyledPreviewFrameWrapper,
  StyledPreviewPhoneFrame,
  StyledPhoneNotch,
  StyledPreviewIFrame,
};

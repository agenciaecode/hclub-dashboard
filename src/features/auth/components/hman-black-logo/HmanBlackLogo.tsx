import Image from 'next/image';

import logoImage from '@assets/images/logo-hman-black.svg';

export const HmanBlackLogo = () => (
  <Image src={logoImage} alt="H.man Logo" width={60} height={60} />
);

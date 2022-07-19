import { useEffect, useState } from 'react';

import { useQueryDashboard } from '@hooks/useQuery';

import {
  StyledIndicator,
  StyledProgressBar,
  StyledProgressBarHdrive,
  StyledTitle,
} from './StorageFileBarHdrive.styles';

type StorageData = {
  total: number;
  used: number;
  left: number;
};

type StorageFileBarHdriveProps = {
  displayOn: 'desktop' | 'mobile' | 'both';
};

const StorageFileBarHdrive = ({ displayOn }: StorageFileBarHdriveProps) => {
  const { data } = useQueryDashboard<StorageData>('/hdrive/properties', {
    optionsQuery: {
      refetchOnWindowFocus: false,
    },
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500);
    return () => clearTimeout(timer);
  }, [data?.total]);

  return (
    <StyledProgressBar displayOn={displayOn}>
      <StyledTitle>
        {`${data?.left && (data.left / 1024 / 1024).toFixed(1)} GB Livres`}
      </StyledTitle>
      <StyledProgressBarHdrive value={20}>
        <StyledIndicator
          style={{
            transform: `translateX(-${10 - progress}%)`,
            backgroundImage: `linear-gradient(to right, black ${
              data?.used && data.used / 1024 / 1024
            }%, gray ${data?.used && data.used / 1024 / 1024}% )`,
          }}
        />
      </StyledProgressBarHdrive>
    </StyledProgressBar>
  );
};

export { StorageFileBarHdrive };

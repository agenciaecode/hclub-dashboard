import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@components/forms/button';
import { useQueryDashboard } from '@hooks/useQuery';

import { DashboardSection } from '../../components/dashboard-section';
import {
  StyledDescription,
  StyledIndicator,
  StyledProgressBar,
  StyledTitle,
} from './StorageFileBar.styles';

type StorageData = {
  total: number;
  used: number;
  left: number;
};

const StorageFileBar = () => {
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
    <DashboardSection>
      <StyledTitle>
        Armazenamento
        <Link href="/hdrive" passHref>
          <Button btn="secondary">Ver todos meus arquivos</Button>
        </Link>
      </StyledTitle>
      <StyledDescription>
        Armazenamento usado e total disponível
      </StyledDescription>
      <StyledProgressBar value={20}>
        <StyledIndicator
          style={{
            transform: `translateX(-${10 - progress}%)`,
            backgroundImage: `linear-gradient(to right, black ${
              data?.used && data.used / 1024 / 1024
            }%, gray ${data?.used && data.used / 1024 / 1024}% )`,
          }}
        />
      </StyledProgressBar>
      <Link href="/hdrive" passHref>
        <Button
          btn="secondary"
          css={{
            width: '100%',
            marginTop: '2rem',
            '@desktop': { display: 'none' },
          }}
        >
          Ver todos meus arquivos
        </Button>
      </Link>
    </DashboardSection>
  );
};

export { StorageFileBar };

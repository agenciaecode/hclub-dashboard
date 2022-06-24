import { useCallback } from 'react';

import { debounce } from '@antfu/utils';

export const useDebounce = (
  delay: number,
  callback: () => void,
  dependencyArray: any[] = [],
) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(debounce(delay, callback), [delay, ...dependencyArray]);

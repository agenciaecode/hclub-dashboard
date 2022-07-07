import { useCallback } from 'react';

import { debounce } from '@antfu/utils';

export const useDebounce = (
  delay: number,
  callback: () => void,
  dependencyArray: unknown[] = [],
) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(debounce(delay, callback), [delay, ...dependencyArray]);

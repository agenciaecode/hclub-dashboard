import { useRef } from 'react';

import { nanoid } from 'nanoid';

/**
 * Hook to generate a unique id
 * @returns {string}
 * @see {@link https://gist.github.com/sqren/fc897c1629979e669714893df966b1b7?permalink_comment_id=3189166#gistcomment-3189166}
 */
export const useUniqueId = () => {
  const idRef = useRef<string>();
  if (idRef.current === undefined) {
    idRef.current = nanoid(10);
  }
  return idRef.current;
};

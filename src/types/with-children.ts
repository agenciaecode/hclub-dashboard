/* eslint-disable @typescript-eslint/ban-types */
import type { ReactChild, ReactPortal } from 'react';

type ReactNode =
  | ReactChild
  | ReactNode[]
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;

/**
 * @see {@link https://fettblog.eu/react-types-for-children-are-broken/}
 */
export type WithChildren<T = {}> = T & { children?: ReactNode };

/**
 * Pick given keys of an object as required properties.
 */
export type PickAsRequired<T, K extends keyof T> = Required<Pick<T, K>>;

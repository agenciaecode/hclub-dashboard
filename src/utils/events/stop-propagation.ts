import { FormEvent } from 'react';

export function stopPropagation(callback: () => void) {
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    callback();
  };
}

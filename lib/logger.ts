import { showLogger } from '@lib/env';

/**
 * A logger function that will only logs on development
 * @param object - The object to log
 * @param comment - Autogenerated with `lg` snippet
 */
export function logger(object: unknown, comment?: string): void {
  if (!showLogger) return;

  // eslint-disable-next-line no-console
  console.log(
    '%c ============== INFO LOG \n',
    'color: #22D3EE',
    `${
      (typeof window !== 'undefined' && window.location.pathname) || 'Server'
    }\n`,
    `=== ${comment ?? ''}\n`,
    object
  );
}

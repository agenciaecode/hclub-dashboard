/**
 * Custom Error class to be extended by all custom exceptions
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#examples}
 * @author @extendslcc
 */
export class Exception extends Error {
  readonly date: Date;

  constructor(message: string, previous: Error, ...params: unknown[]) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message, { cause: previous, ...params });

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }

    this.name = this.constructor.name;
    // Custom debugging information
    this.date = new Date();
  }
}

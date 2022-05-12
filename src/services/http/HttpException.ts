import { StatusCodes } from 'http-status-codes';

import { Exception } from '@utils/error/exception';

export type HttpExceptionParams<Details = unknown> = {
  statusCode?: StatusCodes;
  message: string;
  previous: Error;
  details?: Details;
};

export type DefaultExceptionResponseBody<DetailsShape = unknown> = {
  error: {
    message: string;
    code?: string;
    details?: DetailsShape;
  };
};

export abstract class HttpException<
  ExceptionDetails = unknown,
> extends Exception {
  readonly statusCode?: StatusCodes;
  readonly details?: unknown;

  constructor({
    statusCode,
    message,
    previous,
    details,
  }: HttpExceptionParams<ExceptionDetails>) {
    super(message, previous);
    this.details = details;
    this.statusCode = statusCode;
  }
}

/**
 * Unexpected exception thrown by http layer
 */
export class UnpredictedException extends HttpException {}

/**
 * Offline exception thrown by http layer
 * should throw if request failed because of offline network
 */
export class OfflineException extends HttpException {}

/**
 * ClientHttpException exception
 * should throw if request failed because of client input error
 * throws if request returned 4xx status code - except status code 422
 */
export class ClientHttpException extends HttpException {}
/**
 * ServerHttpException exception
 * should throw if request failed because of server error
 * throws if request returned 5xx status code
 */
export class ServerHttpException extends HttpException {}

export type ValidationObject = {
  [fieldName: string]: string[];
};

type ExceptionResponseBody<ValidationShape extends ValidationObject> = {
  error: {
    message: string;
    details: ValidationShape;
  };
};

export type ValidationError<InputType> = {
  [field in keyof InputType]?: string[];
};

/**
 * RequestValidationError exception
 * should throw if request failed because of validation error in user inputs
 * throws if request returned 422 status code
 */
export class ValidationHttpException<
  ValidationShape extends ValidationObject,
> extends HttpException {
  readonly details: ValidationShape;

  constructor({
    statusCode,
    message,
    previous,
    details,
  }: HttpExceptionParams<ExceptionResponseBody<ValidationShape>> & {
    details: ValidationShape;
  }) {
    super({ statusCode, message, previous });
    this.details = details.error.details;
  }
}

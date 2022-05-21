import Router from 'next/router';

import { StatusCodes } from 'http-status-codes';
import { mutate } from 'swr';

import {
  ClientHttpException,
  DefaultExceptionResponseBody,
  OfflineException,
  ServerHttpException,
  UnpredictedException,
} from '@libs/http/HttpException';
import { FilterErrorData } from '@utils/error/filter-error-data/types';

import { SIGN_IN, SESSION } from '../../../constants/routes';
import { filteredErrorData } from '../../../utils/error';
import { fetchApi } from '../../../utils/fetch';
import { signInSchema } from './schemas';
import { Options, BodyData, SignInResponse } from './types';

export async function signIn<T>(
  body: BodyData,
  options?: Options,
): Promise<SignInResponse<T>> {
  const { redirect = false } = options || {};

  try {
    const isValidDataBody = await signInSchema.isValid(body);
    if (!isValidDataBody) throw new Error();

    const response = await fetchApi.post(SIGN_IN, body);
    if (!response) throw new Error();

    mutate(SESSION);
    if (redirect) Router.replace(redirect);

    return {
      ...response,
      redirect,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const filteredError = filteredErrorData(
      error?.cause
        ? Object.assign(error, {
            response: error.cause,
          })
        : error,
    );
    throw createHttpExceptionFromFilteredError(filteredError);
  }
}

function createHttpExceptionFromFilteredError(filteredError: FilterErrorData) {
  if (
    filteredError.code >= StatusCodes.BAD_REQUEST &&
    filteredError.code < StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    return new ClientHttpException({
      statusCode: filteredError.code as StatusCodes,
      message: filteredError.message,
      details: filteredError.details as unknown as DefaultExceptionResponseBody,
      previous: filteredError,
    });
  }
  if (filteredError.code >= StatusCodes.INTERNAL_SERVER_ERROR) {
    return new ServerHttpException({
      statusCode: filteredError.code as StatusCodes,
      message: filteredError.message,
      details: filteredError.details,
      previous: filteredError,
    });
  }
  if (window?.navigator?.onLine && !window.navigator.onLine) {
    // check if property exists and is false to prevent server-side errors
    return new OfflineException({
      message: 'SignIn request failed maybe because you are offline',
      previous: filteredError as Error,
    });
  }
  return new UnpredictedException({
    message: 'Unpredicted error on SignIn request',
    previous: filteredError as Error, // high chance that error is not an instanceof Error
  });
}

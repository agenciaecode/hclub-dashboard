import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';

import { HttpClient } from './HttpClient';
import {
  ClientHttpException,
  OfflineException,
  ServerHttpException,
  UnpredictedException,
  ValidationHttpException,
} from './HttpException';

// # TODO: Apply DRY principle

/**
 * Axios HttpClient implementation, wrapping all possible errors into HttpExceptions
 * Use it to fetch http requests and get better error handling and better type inferring
 * @see {@link https://github.com/axios/axios}
 * @author @extendslcc
 */
class AxiosHttpClient implements HttpClient {
  constructor(protected readonly httpClient: AxiosInstance) {}

  get<ResponsePayload, RequestConfig = AxiosRequestConfig<unknown>>(
    url: string,
    config?: RequestConfig,
  ): Promise<ResponsePayload> {
    return this.httpClient
      .get<ResponsePayload, AxiosResponse<ResponsePayload>, RequestConfig>(
        url,
        config,
      )
      .then(response => response.data)
      .catch(error => {
        throw HttpExceptionFactory.createFrom(error);
      });
  }

  post<
    ResponsePayload,
    RequestPayload,
    RequestConfig = AxiosRequestConfig<RequestPayload>,
  >(
    url: string,
    payload: RequestPayload,
    config?: RequestConfig,
  ): Promise<ResponsePayload> {
    return this.httpClient
      .post<
        ResponsePayload,
        AxiosResponse<ResponsePayload, RequestPayload>,
        RequestPayload
      >(url, payload, config)
      .then(response => response.data)
      .catch(error => {
        throw HttpExceptionFactory.createFrom(error);
      });
  }

  put<
    ResponsePayload,
    RequestPayload,
    RequestConfig = AxiosRequestConfig<RequestPayload>,
  >(
    url: string,
    payload: RequestPayload,
    config?: RequestConfig,
  ): Promise<ResponsePayload> {
    return this.httpClient
      .put<
        ResponsePayload,
        AxiosResponse<ResponsePayload, RequestPayload>,
        RequestPayload
      >(url, payload, config)
      .then(response => response.data)
      .catch(error => {
        throw HttpExceptionFactory.createFrom(error);
      });
  }

  patch<
    ResponsePayload,
    RequestPayload,
    RequestConfig = AxiosRequestConfig<RequestPayload>,
  >(
    url: string,
    payload?: RequestPayload,
    config?: RequestConfig,
  ): Promise<ResponsePayload> {
    return this.httpClient
      .patch<
        ResponsePayload,
        AxiosResponse<ResponsePayload, RequestPayload>,
        RequestPayload
      >(url, payload, config)
      .then(response => response.data)
      .catch(error => {
        throw HttpExceptionFactory.createFrom(error);
      });
  }

  delete<ResponsePayload, RequestConfig = AxiosRequestConfig>(
    url: string,
    config?: RequestConfig,
  ): Promise<ResponsePayload> {
    return this.httpClient
      .delete<ResponsePayload, AxiosResponse<ResponsePayload>>(url, config)
      .then(response => response.data)
      .catch(error => {
        throw HttpExceptionFactory.createFrom(error);
      });
  }
}

/**
 * Create specific HttpException subclass accordingly given error data.
 * Returning error can be used for type narrowing the error that has occurred.
 * @author @extendslcc
 */
abstract class HttpExceptionFactory {
  static createFrom(error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === StatusCodes.UNPROCESSABLE_ENTITY) {
        return new ValidationHttpException({
          statusCode: error.response.status,
          message: error.response.statusText,
          details: error.response.data,
          previous: error,
        });
      }
      if (
        error.response.status >= StatusCodes.BAD_REQUEST &&
        error.response.status < StatusCodes.INTERNAL_SERVER_ERROR
      ) {
        return new ClientHttpException({
          statusCode: error.response.status,
          message: error.response.statusText,
          details: error.response.data,
          previous: error,
        });
      }
      if (error.response.status >= StatusCodes.INTERNAL_SERVER_ERROR) {
        return new ServerHttpException({
          statusCode: error.response.status,
          message: error.response.statusText,
          details: error.response.data,
          previous: error,
        });
      }
    }
    if (window?.navigator?.onLine && !window.navigator.onLine) {
      // check if property exists and is false to prevent server-side errors
      return new OfflineException({
        message: 'AxiosHttpClient request failed maybe because you are offline',
        previous: error as Error,
      });
    }
    return new UnpredictedException({
      message: 'Unpredicted error on AxiosHttpClient request',
      previous: error as Error, // high chance that error is not an instanceof Error
    });
  }
}

export { AxiosHttpClient, HttpExceptionFactory };

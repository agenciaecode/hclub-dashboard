import { StatusCodes } from 'http-status-codes';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  ClientHttpException,
  OfflineException,
  ServerHttpException,
  UnpredictedException,
  ValidationHttpException,
} from './HttpException';
import { HttpClient } from './HttpClient';

import { apiDashboard } from '@/services/app';

// # TODO: Apply DRY principle

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
    if (!window.navigator.onLine) {
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

export const http = new AxiosHttpClient(apiDashboard);

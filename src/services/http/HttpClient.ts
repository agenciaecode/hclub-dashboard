export interface HttpClient {
  get<ResponsePayload, RequestConfig = unknown>(
    url: string,
    config?: RequestConfig,
  ): Promise<ResponsePayload>;
  post<
    ResponsePayload = unknown,
    RequestPayload = unknown,
    RequestConfig = unknown,
  >(
    url: string,
    payload: RequestPayload,
    config?: RequestConfig,
  ): Promise<ResponsePayload>;
  put<
    ResponsePayload = unknown,
    RequestPayload = unknown,
    RequestConfig = unknown,
  >(
    url: string,
    payload: RequestPayload,
    config?: RequestConfig,
  ): Promise<ResponsePayload>;
  patch<
    ResponsePayload = unknown,
    RequestPayload = unknown,
    RequestConfig = unknown,
  >(
    url: string,
    payload?: RequestPayload,
    config?: RequestConfig,
  ): Promise<ResponsePayload>;
  delete<ResponsePayload = unknown, RequestConfig = unknown>(
    url: string,
    config?: RequestConfig,
  ): Promise<ResponsePayload>;
}

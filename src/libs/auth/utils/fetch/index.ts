/* eslint-disable @typescript-eslint/no-explicit-any */
import { Exception } from '@libs/exception';

const baseUrl = process.env.AUTH_APP_URL;

async function get(url: string): Promise<any> {
  if (!baseUrl) throw new Error('auth: Bad use. Required AUTH_APP_URL');
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message || null);
  }
  try {
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return undefined;
  }
}

async function post(url: string, body?: any): Promise<any> {
  if (!baseUrl) throw new Error('auth: Bad use. Required AUTH_APP_URL');
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : null),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Exception(error?.message || null, response as unknown as Error);
  }
  try {
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return undefined;
  }
}

export const fetchApi = {
  get,
  post,
};

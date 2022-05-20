import { PREFIX_BASE_PERMISSION } from '../../../constants/session';
import { filteredErrorData } from '../../../utils/error';
import { setSession } from '../../session';
import { defaultMaxAge } from '../../utils/cookie';
import { SetPermissionProps } from './types';

export async function setPermission(props: SetPermissionProps) {
  const {
    request,
    response,
    options,
    setPermission: functionSetPermission,
  } = props;

  if (!functionSetPermission) return response.status(200).end();

  try {
    if (request.method !== 'POST') throw new Error();
    const responseFetch = await functionSetPermission(request, response);

    if (!responseFetch) throw new Error();

    const { validateExpiration } = options;

    const sessionOptions = {
      maxAge: validateExpiration ? defaultMaxAge : 60 * 60 * 24 * 30, // 1 month
    };

    await setSession(
      PREFIX_BASE_PERMISSION,
      responseFetch,
      response,
      sessionOptions,
    );
    return response.status(201).end();
  } catch (error) {
    const { message } = filteredErrorData(error);
    return response.status(400).json({
      type: 'error',
      message: message || 'Invalid request',
    });
  }
}

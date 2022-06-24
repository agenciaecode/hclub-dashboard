import { StatusCodes } from 'http-status-codes';

export const errorMessageText = {
  SERVER_ERROR: 'Falha ao tentar se comunicar com o servidor.',
  OFFLINE_ERROR:
    'Falha ao tentar se comunicar com o servidor. Verifique sua conexão com a internet.',
  UNPREDICTED_ERROR:
    'Erro inesperado. Tente novamente mais tarde ou entre em contato com o suporte.',
  [StatusCodes.UNAUTHORIZED]:
    'Você não está autenticado para executar esta ação.',
  [StatusCodes.FORBIDDEN]:
    'Você não está autorizado a acessar este recurso, sua conta está bloqueada.',
  [StatusCodes.NOT_FOUND]: 'Recurso requisitado não encontrado.',
  [StatusCodes.TOO_MANY_REQUESTS]:
    'Você enviou muitas tentativas. Aguarde um momento.',
  CLIENT_ERROR_DEFAULT: 'Requisição inválida.',
};

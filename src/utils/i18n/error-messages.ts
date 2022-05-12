import { StatusCodes } from 'http-status-codes';

export const errorMessageText = {
  SERVER_ERROR: 'Falha ao tentar se comunicar com o servidor.',
  OFFLINE_ERROR:
    'Falha ao tentar se comunicar com o servidor. Verifique sua conexão com a internet.',
  UNPREDICTED_ERROR:
    'Erro inesperado. Tente novamente mais tarde ou entre em contato com o suporte.',
  [StatusCodes.TOO_MANY_REQUESTS]:
    'Você enviou muitas tentativas. Aguarde um momento.',
  CLIENT_ERROR_DEFAULT: 'Requisição inválida.',
};

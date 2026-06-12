//Function for loging in a user

// import axios, { isAxiosError } from 'axios';
// import { API_URL_LOGIN } from './apiConfig';
import {
  LoginDto,
  //   LoginErrorResponse,
  LoginSuccessResponse,
  RegisterDto,
  //   RegisterErrorResponse,
  RegisterSuccessResponse,
} from '../../features/auth/authTypes';
// import { API_URL_REGISTER } from './apiConfig';
import { mockLoginResponse, mockRegisterResponse } from './mockData';

// export const getAuthToken = async (
//   data: LoginDto,
// ): Promise<LoginSuccessResponse> => {
//   try {
//     const response = await axios.post<LoginSuccessResponse>(
//       API_URL_LOGIN,
//       data,
//     );
//     return response.data;
//   } catch (error) {
//     // Известная ошибка от сервера
//     if (isAxiosError<LoginErrorResponse>(error)) {
//       const message = error.response?.data.message ?? 'Server error';
//       throw new Error(message, { cause: error });
//     }
//     throw new Error('Unexpected error occurred', { cause: error });
//   }
// };

// TODO: [BACKEND-READY] Заменить на реальный запрос к API, когда эндпоинт /auth/login будет готов
export const getAuthToken = async (
  data: LoginDto,
): Promise<LoginSuccessResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (data.email === 'error@test.com') {
    throw new Error('Неверный логин или пароль');
  }

  return mockLoginResponse;
};

// export const registerUser = async (
//   data: RegisterDto,
// ): Promise<RegisterSuccessResponse> => {
//   try {
//     const response = await axios.post<RegisterSuccessResponse>(
//       API_URL_REGISTER,
//       data,
//     );
//     return response.data;
//   } catch (error) {
//     if (isAxiosError<RegisterErrorResponse>(error)) {
//       const message = error.response?.data.message ?? 'Server error';
//       throw new Error(message, { cause: error });
//     }
//     throw new Error('Unexpected error occurred', { cause: error });
//   }
// };

//TODO: [BACKEND-READY] Заменить на реальный запрос к API, когда эндпоинт /auth/register будет готов
export const registerUser = async (
  data: RegisterDto,
): Promise<RegisterSuccessResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (data.email === 'error@test.com') {
    throw new Error('Неверный логин или пароль');
  }

  return mockRegisterResponse;
};

//todo: добавить функции для получения задач, заметок и событий по familyId
// GET /tasks?familyId=123
// GET /notes?familyId=123
// GET /events?familyId=123

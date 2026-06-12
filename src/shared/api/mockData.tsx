import type {
  LoginErrorResponse,
  LoginSuccessResponse,
  RegisterErrorResponse,
  RegisterSuccessResponse,
} from '../../features/auth/authTypes';

export const mockLoginDto = {
  email: 'john.doe@example.com',
  password: 'password123',
};

export const mockLoginResponse: LoginSuccessResponse = {
  token: 'mockToken',
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'parent',
    family: {
      id: 'family123',
      code: 'FAMCODE',
    },
  },
};

export const mockLoginError: LoginErrorResponse = {
  status: 401,
  message: 'Invalid email or password',
};

export const mockRegisterResponse: RegisterSuccessResponse = {
  message: 'Registration successful',
  token: 'mockRegisterToken',
  user: {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'parent',
    family: {
      id: 'family123',
      code: 'FAMCODE',
    },
  },
};

export const mockRegisterError: RegisterErrorResponse = {
  status: 400,
  message: 'Email already in use',
};

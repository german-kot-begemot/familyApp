import {
  LoginSuccessResponse,
  RegisterSuccessResponse,
  User,
} from './authTypes';
import { StateCreator } from 'zustand';

export interface AuthSliceState {
  user: User | null;
  isAuth: boolean;
  token?: string;
  login: (data: LoginSuccessResponse) => void;
  logout: () => void;
  register: (data: RegisterSuccessResponse) => void;
}

export const createAuthSlice: StateCreator<AuthSliceState> = (set) => ({
  user: null,
  isAuth: false,
  token: undefined,

  login: (userData) => {
    set({
      user: userData.user,
      isAuth: true,
      token: userData.token,
    });
  },

  logout: () =>
    set({
      user: null,
      isAuth: false,
      token: undefined,
    }),

  register: (userData) => {
    set({
      user: userData.user,
      isAuth: true,
      token: userData.token,
    });
  },
});

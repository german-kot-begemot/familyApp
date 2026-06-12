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
  familyId?: string | null;
  login: (data: LoginSuccessResponse) => void;
  logout: () => void;
  register: (data: RegisterSuccessResponse) => void;
}

export const createAuthSlice: StateCreator<AuthSliceState> = (set) => ({
  user: null,
  isAuth: false,
  token: undefined,
  familyId: null,

  login: (userData) => {
    set({
      user: userData.user,
      isAuth: true,
      token: userData.token,
      familyId: userData.user.family.id || null,
    });
  },

  logout: () =>
    set({
      user: null,
      isAuth: false,
      token: undefined,
      familyId: null,
    }),

  register: (userData) => {
    set({
      user: userData.user,
      isAuth: true,
      token: userData.token,
      familyId: userData.user.family.id || null,
    });
  },
});

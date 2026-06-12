import { getAuthToken, registerUser } from '@/shared/api/api';
import { LoginDto, RegisterDto, User } from './authTypes';
import { StateCreator } from 'zustand';

export interface AuthSliceState {
  user: User | null;
  isAuthenticated: boolean;
  token?: string;
  login: (data: LoginDto) => Promise<void>;
  logout: () => void;
  register: (data: RegisterDto) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSliceState> = (set) => ({
  user: null,
  isAuthenticated: false,
  token: undefined,

  login: async (data) => {
    const userData = await getAuthToken(data);
    set({
      user: userData.user,
      isAuthenticated: true,
      token: userData.token,
    });
  },

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      token: undefined,
    }),

  register: async (data) => {
    const userData = await registerUser(data);
    set({
      user: userData.user,
      isAuthenticated: true,
      token: userData.token,
    });
  },
});

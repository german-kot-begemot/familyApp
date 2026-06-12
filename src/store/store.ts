import { createAuthSlice } from '@/features/auth/authSliceStore';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StoreState } from './typesStore';

export const useBoundStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: 'auth-storage',
      // Сохраняем ТОЛЬКО token и user, игнорируя isLoading и ошибки
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuth: state.isAuth,
      }),
    },
  ),
);

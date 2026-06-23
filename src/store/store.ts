import { createAuthSlice } from '@/features/auth/authSliceStore';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StoreState } from './typesStore';
import { createTasksSlice } from '@/pages/TasksPage/TasksSliceStore';

export const useBoundStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createTasksSlice(...a),
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

import { useBoundStore } from '@/store/store';

export const useAuth = () => {
  const login = useBoundStore((state) => state.login);
  const logout = useBoundStore((state) => state.logout);
  const user = useBoundStore((state) => state.user);
  const token = useBoundStore((state) => state.token);
  const isAuth = useBoundStore((state) => state.isAuth);

  return {
    login,
    logout,
    user,
    token,
    isAuth,
  };
};

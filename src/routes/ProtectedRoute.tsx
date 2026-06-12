import { useBoundStore } from '@/store/store';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

type ProtectedProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedProps) => {
  const isAuth = useBoundStore((state) => state.isAuth);
  console.log('isAuth', isAuth);

  // useBoundStore.persist.hasHydrated();

  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};

import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

type ProtectedProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedProps) => {
  const isAuth = false;

  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};

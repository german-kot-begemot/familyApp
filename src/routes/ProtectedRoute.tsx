import { Role } from '@/features/auth/authTypes';
import { useBoundStore } from '@/store/store';
import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';

type ProtectedProps = {
  children?: ReactNode;
  allowedRoles?: Role[];
};

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedProps) => {
  const isAuth = useBoundStore((state) => state.isAuth);
  const userRole = useBoundStore((state) => state.user?.role);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && (!userRole || !allowedRoles.includes(userRole))) {
    return <Navigate to="/forbidden" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

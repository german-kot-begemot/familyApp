import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import { TasksPage } from '../pages/TasksPage/TasksPage';
import { RewardsPage } from '../pages/RewardsPage/RewardsPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { Layout } from '../shared/ui/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { RegisterPage } from '@/pages/LoginPage/RegisterPage';
import { ParentDashboard } from '@/pages/ParentDashboard/ParentDashboard';
import { ChildDashboard } from '@/pages/ChildDashboard/ChildDashboard';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <RegisterPage />,
  },

  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/tasks',
        element: <TasksPage />,
      },
      {
        path: '/rewards',
        element: <RewardsPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/parent',
        element: <ParentDashboard />,
      },
      {
        path: '/child',
        element: <ChildDashboard />,
      },
    ],
  },
]);

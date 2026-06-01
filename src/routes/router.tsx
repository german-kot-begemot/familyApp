import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { createBrowserRouter } from 'react-router';
import { TasksPage } from '../pages/TasksPage/TasksPage';
import { RewardsPage } from '../pages/RewardsPage/RewardsPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { Layout } from '../shared/ui/Layout';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
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
        path: '/',
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
    ],
  },
]);

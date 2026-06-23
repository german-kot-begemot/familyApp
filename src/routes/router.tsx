// import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import { TasksPage } from '../pages/TasksPage/TasksPage';
// import { RewardsPage } from '../pages/RewardsPage/RewardsPage';
// import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { Layout } from '../shared/ui/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { RegisterPage } from '@/pages/LoginPage/RegisterPage';
import { ParentDashboard } from '@/pages/ParentDashboard/ParentDashboard';
import { ChildDashboard } from '@/pages/ChildDashboard/ChildDashboard';

export const router = createBrowserRouter([
  //public routes
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <RegisterPage />,
  },

  //protected routes checking only auth, without role check
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),

    children: [
      // Parent routes ONLY
      {
        path: 'parents',
        element: <ProtectedRoute allowedRoles={['parent']} />,
        children: [
          {
            index: true,
            element: <ParentDashboard />,
          },
          {
            path: 'tasks',
            element: <TasksPage />,
          },
          {
            path: 'rewards',
            // element: <ParentsRewardsPage />,
          },
        ],
      },

      // Kid routes ONLY
      {
        path: 'kids',
        element: <ProtectedRoute allowedRoles={['kid']} />,
        children: [
          {
            index: true,
            element: <ChildDashboard />,
          },
          {
            path: 'tasks',
            // element: <ChildTasksPage />,
          },
          {
            path: 'rewards',
            // element: <ChildRewardsPage />,
          },
        ],
      },
      // Страница ошибки доступа (куда перенаправляет ProtectedRoute)
      // { path: 'forbidden', element: <ForbiddenPage /> },
    ],
  },
]);

// children: [
//   {
//     path: '/kids',
//     element: <KidsPage />,
//     children: [],
//   },
//   {
//     path: '/parents',
//     element: <ParentsPage />,
//     children: [],
//   },
/////////////////////////////////////////
//   {
//     index: true,
//     element: <DashboardPage />,
//   },
//   {
//     path: '/tasks',
//     element: <TasksPage />,
//   },
//   {
//     path: '/rewards',
//     element: <RewardsPage />,
//   },
//   {
//     path: '/profile',
//     element: <ProfilePage />,
//   },
//   {
//     path: '/parent',
//     element: <ParentDashboard />,
//   },
//   {
//     path: '/child',
//     element: <ChildDashboard />,
//   },
// ],
// },

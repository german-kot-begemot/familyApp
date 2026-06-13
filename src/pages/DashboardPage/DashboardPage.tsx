// import { useBoundStore } from '@/store/store';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  // const role = useBoundStore((state) => state.user?.role);
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <ul>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/rewards">Rewards</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// export const DashboardPage = () => {
//   const role = useBoundStore((state) => state.user?.role);

//   return role === 'parent'
//     ? <ParentDashboard />
//     : <ChildDashboard />;
// };

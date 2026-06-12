import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  console.log('DashboardPage rendered');
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

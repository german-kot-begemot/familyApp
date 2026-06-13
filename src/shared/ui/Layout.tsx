import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// return (
//   <div>
//     <Header />
//     <Sidebar />

//     <main>
//       <Outlet />
//     </main>
//   </div>
// );

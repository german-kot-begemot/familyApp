import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <div className="max-w-1/4 h-full border-r bg-background/40">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

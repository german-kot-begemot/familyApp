import { useBoundStore } from '@/store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { kidMenu, parentMenu } from '../types/appTypes';

export const Sidebar = () => {
  const user = useBoundStore((s) => s.user);
  const navigate = useNavigate();
  const location = useLocation();

  const menu = user?.role === 'parent' ? parentMenu : kidMenu;

  return (
    <aside className="sidebar-container flex flex-col p-2 justify-between gap-2 items-start h-full w-full bg-background/60 backdrop-blur-md">
      <nav className="flex flex-col gap-2 w-full overflow-auto">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 text-sm font-medium p-2.5 w-full rounded-xl transition-colors text-left ${
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-transparent hover:bg-muted'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

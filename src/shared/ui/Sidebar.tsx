import { useBoundStore } from '@/store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { kidMenu, parentMenu } from '../types/appTypes';
import { Button } from '@/components/ui/button';

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
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 text-sm font-medium p-2.5 w-full rounded-md text-left
    border border-transparent transition-all duration-200 ease-out
    hover:-translate-y-px hover:border-muted-foreground/20 active:translate-y-0 active:scale-[0.99]
    ${isActive ? 'bg-(--card-bg-color) brightness-90 text-accent-foreground border-black/10' : 'bg-(--card-bg-color) hover:bg-muted'}
  `}
            >
              {item.label}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};
// --btn - bg - color;

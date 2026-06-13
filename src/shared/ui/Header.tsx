import { ThemeSwitcher } from './ThemeSwitcher';
import { UserMenu } from './UserMenu';
import logo from '@/assets/images/logo-rem.png';

export const Header = () => {
  return (
    <div className="header-container flex justify-between p-4">
      <div className="logo text-2xl font-bold">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <div className="settings-container flex gap-4 justify-between">
        <div className="notifications"> Not</div>
        <ThemeSwitcher />
        <UserMenu />
      </div>
    </div>
  );
};

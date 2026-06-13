import { ThemeSwitcher } from './ThemeSwitcher';
import { UserMenu } from './UserMenu';
import logo from '@/assets/images/logo-rem.png';

export const Header = () => {
  return (
    <div className="header-container flex justify-between p-4 items-center shadow-[10px_10px_60px_#abe2cc]">
      <div className="logo text-2xl font-bold flex items-start flex-col text-goosberry ">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <h1 className="text-[12px] font-bold text-center font-znikomit">
          Family App
        </h1>
      </div>
      <div className="settings-container flex gap-4 justify-between">
        <ThemeSwitcher />
        <UserMenu />
      </div>
    </div>
  );
};

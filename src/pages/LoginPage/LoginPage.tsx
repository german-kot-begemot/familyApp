import { LoginForm } from '@/features/auth/LoginForm';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import bg from '@/assets/images/green-aqua.png';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlecreateAcc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <main className="relative page-wrapper flex min-h-screen items-center justify-center flex-col">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="log-wrapper max-w-sm overflow-hidden flex flex-col p-10">
        <h1 className=" text-center font-goosberry text-2xl">
          {t('auth.welcome')}
        </h1>
        <h1 className=" text-5xl text-center pb-8 font-goosberry">
          {t('auth.appName')}
        </h1>
        <LoginForm />
        <h2 className="text-[#4ca] pt-5 pb-2 text-start">{t('auth.noPage')}</h2>
        <Button
          type="button"
          onClick={handlecreateAcc}
          className="w-full py-2 font-medium"
        >
          {t('auth.createAccount')}
        </Button>
      </div>
      <img
        src={bg}
        aria-hidden="true"
        className="absolute  w-full h-full object-cover bottom-0 right-0 opacity-20 pointer-events-none"
      />
    </main>
  );
};

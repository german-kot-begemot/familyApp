import { RegisterForm } from '@/features/auth/RegisterForm';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-wrapper flex min-h-screen items-center justify-center flex-col">
      <div className="btn-auth-wrapper max-w-sm overflow-hidden flex flex-col p-10">
        <h1 className=" text-5xl text-center pb-8 font-goosberry">
          {t('auth.joinTitle')}
        </h1>
        <h2 className="text-[#5E8970] pb-5">{t('auth.regTitle')}</h2>
        <RegisterForm />

        <p className="text-[#5E8970] pt-5 pb-2 text-start text-[10px]">
          {t('auth.terms')}
        </p>
        <p className="pt-5 text-center">
          {t('auth.haveAccount')}{' '}
          <Link to="/login" className=" font-bold underline decoration-solid">
            {t('auth.signIn')}
          </Link>
        </p>
      </div>
    </div>
  );
};

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { LoginFormValues } from './formFieldsTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './shemas/login.schema';
import { getAuthToken } from '@/shared/api/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const LoginForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur', // валидация при потере фокуса
    resolver: zodResolver(loginSchema), // использовать zod для валидации
  });
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const { login, isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      console.log('User is already authenticated, redirecting to home page');
      navigate('/');
    }
  }, [isAuth, navigate]);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setButtonDisabled(true);
    try {
      const loginResponse = await getAuthToken(data);
      login(loginResponse);
      console.log(loginResponse);
      navigate('/');
    } catch (error) {
      console.error(error);
      setButtonDisabled(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email-login" className="text-sm">
          {t('auth.email')}
        </label>
        <Input
          type="email"
          id="email-login"
          {...register('email')}
          autoComplete="email"
          placeholder="example@gmail.com"
          aria-invalid={!!errors.email} // добавляем атрибут для доступности
        />
        {errors.email?.message && (
          <p className="text-sm text-red-500" role="alert">
            {t(errors.email.message)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password-login" className="text-sm">
          {t('auth.password')}
        </label>
        <Input
          type="password"
          id="password-login"
          {...register('password')}
          autoComplete="current-password"
          placeholder={t('auth.password')}
          aria-invalid={!!errors.password}
        />
        {errors.password?.message && (
          <p className="text-sm text-red-500" role="alert">
            {t(errors.password.message)}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="mt-4 w-full py-2 font-medium"
        disabled={isButtonDisabled}
      >
        {t('auth.logIn')}
      </Button>
    </form>
  );
};

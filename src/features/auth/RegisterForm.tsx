import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import type { RegisterFormValues } from './formFieldsTypes';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { regSchema } from './shemas/reg.schema';
import { useState } from 'react';
import { registerUser } from '@/shared/api/api';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(regSchema),
  });
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    setButtonDisabled(true);
    try {
      const registerResponse = await registerUser(data);
      console.log(registerResponse);
      navigate('/');
    } catch (error) {
      console.error(error);
      setButtonDisabled(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name-reg" className="text-sm">
          {t('auth.name')}
        </label>
        <Input
          type="text"
          id="name-reg"
          {...register('name')}
          autoComplete="name"
          placeholder={t('auth.name')}
          aria-invalid={!!errors.name}
        />
        {errors.name?.message && (
          <p className="text-sm text-red-500" role="alert">
            {t(errors.name.message)}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2 text-sm">
          <Input
            type="radio"
            value="parent"
            className="h-6"
            {...register('role')}
          />
          <span>{t('auth.roleParent')}</span>
        </label>

        <label className="flex items-center gap-2 text-sm">
          <Input
            type="radio"
            value="kid"
            className="h-6"
            {...register('role')}
          />
          <span>{t('auth.roleKid')}</span>
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email-reg" className="text-sm">
          {t('auth.email')}
        </label>
        <Input
          type="email"
          id="email-reg"
          {...register('email')}
          autoComplete="email"
          placeholder="example@gmail.com"
          aria-invalid={!!errors.email}
        />
        {errors.email?.message && (
          <p className="text-sm text-red-500" role="alert">
            {t(errors.email.message)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password-reg" className="text-sm">
          {t('auth.password')}
        </label>
        <Input
          type="password"
          id="password-reg"
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

      <div className="flex flex-col gap-1">
        <label htmlFor="confirm-password-reg" className="text-sm">
          {t('auth.confirmPassword')}
        </label>
        <Input
          type="password"
          id="confirm-password-reg"
          {...register('confirmPassword')}
          autoComplete="new-password"
          placeholder={t('auth.confirmPassword')}
          aria-invalid={!!errors.confirmPassword}
        />
        {errors.confirmPassword?.message && (
          <p className="text-sm text-red-500" role="alert">
            {t(errors.confirmPassword.message)}
          </p>
        )}
      </div>

      <div>
        <label className="flex text-sm gap-2">
          <Input
            type="checkbox"
            className="h-6 w-auto min-w-auto"
            id="terms"
            {...register('terms')}
          />
          {t('auth.terms')}
        </label>
      </div>

      <Button
        type="submit"
        className="mt-4 w-full py-2 font-medium"
        disabled={isButtonDisabled}
      >
        {t('auth.createAccount')}
      </Button>
    </form>
  );
};

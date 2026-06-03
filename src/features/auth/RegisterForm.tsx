import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name-reg" className="text-sm">
        {t('auth.name')}
      </label>
      <Input
        type="text"
        id="name-reg"
        name="name-reg"
        autoComplete="name"
        placeholder={t('auth.name')}
        required
      />

      <label htmlFor="email-reg" className="text-sm">
        {t('auth.email')}
      </label>
      <Input
        type="email"
        id="email-reg"
        name="email-reg"
        autoComplete="email"
        placeholder="example@gmail.com"
        required
      />

      <label htmlFor="password-reg" className="text-sm">
        {t('auth.password')}
      </label>
      <Input
        type="password"
        id="password-reg"
        name="password-reg"
        autoComplete="current-password"
        placeholder={t('auth.password')}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
      />

      <label htmlFor="confirm-password-reg" className="text-sm">
        {t('auth.confirmPassword')}
      </label>
      <Input
        type="password"
        id="confirm-password-reg"
        name="confirm-password-reg"
        autoComplete="current-password"
        placeholder={t('auth.confirmPassword')}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
      />

      <Button type="submit" className="mt-4 w-full py-2 font-medium">
        {t('auth.createAccount')}
      </Button>
    </form>
  );
};

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="email-login" className="text-sm">
        Email
      </label>
      <Input
        type="email"
        id="email-login"
        name="email-login"
        autoComplete="email"
        placeholder="example@gmail.com"
        required
      />
      <label htmlFor="password-login" className="text-sm">
        Password
      </label>
      <Input
        type="password"
        id="password-login"
        name="password-login"
        autoComplete="current-password"
        placeholder="Password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
      />
      <Button type="submit" className="mt-4 w-full py-2 font-medium">
        Log in
      </Button>
    </form>
  );
};

import { LoginForm } from '@/features/auth/LoginForm';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handlecreateAcc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <main className="page-wrapper flex min-h-screen items-center justify-center flex-col">
      <div className="log-wrapper max-w-sm overflow-hidden flex flex-col p-10">
        <h1 className=" text-5xl text-center pb-8">Wellcome to Home Heroes</h1>
        <h2 className="text-[#4ca] pb-5 text-[20px]">Log in</h2>
        <LoginForm />
        <h2 className="text-[#4ca] pt-5 pb-2 text-start">
          Don't have an account?
        </h2>
        <Button
          type="button"
          onClick={handlecreateAcc}
          className="w-full py-2 font-medium"
        >
          Create account
        </Button>
      </div>
    </main>
  );
};

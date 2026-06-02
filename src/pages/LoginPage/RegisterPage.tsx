import { RegisterForm } from '@/features/auth/RegisterForm';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div className="page-wrapper flex min-h-screen items-center justify-center flex-col">
      <div className="btn-auth-wrapper max-w-sm overflow-hidden flex flex-col p-10">
        <h1 className=" text-5xl text-center pb-8">Join Home Heroes</h1>
        <h2 className="text-[#4ca] text-center pb-5 text-[20px]">
          Create your family account
        </h2>
        <RegisterForm />

        <p className="text-[#4ca] pt-5 pb-2 text-start text-[10px]">
          By signing in, you agree to our Terms of use and Privacy policy
        </p>
        <p className="pt-5 text-center">
          Already have an account?{' '}
          <Link to="/login" className=" font-bold underline decoration-solid">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

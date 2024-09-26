import SignIn from '@/components/auth/SignIn';
import SignUp from '@/components/auth/SignUp';
import { useState } from 'react';

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  return (
    <div className="flex flex-auto flex-col min-h-screen h-full">
      <div className="flex h-full flex-col justify-center items-center bg-white">
        <h3 className="text-3xl font-bold">Welcome</h3>
        <div className="mt-4">{isLoginView ? <SignIn /> : <SignUp />}</div>
        <div className="mt-4">
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="border-none hover:underline hover:text-blue-500"
          >
            {isLoginView
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

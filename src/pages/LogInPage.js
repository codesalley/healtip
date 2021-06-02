import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LogInPage = () => {
  const [userType, setType] = useState('user');
  return (
    <div className="w-screen  h-screen flex flex-col gap-2 items-center justify-center bg-gray-50">
      <div className="flex flex-col gap-2 max-w-sm w-full items-center p-2 border rounded-xl md:px-5 md:py-10 px-3 py-5 border-gray-300 shadow-2xl">
        <h2 className="text-center text-4xl font-bold text-gray-700">
          SIGN IN
        </h2>
        <p className="text-xs text-gray-600">
          New here ?
          <Link to="/signup" className="text-xs text-green-700">
            Create an account
          </Link>
        </p>
        <div className="switch w-full flex justify-evenly py-2">
          <button
            onClick={() => setType('user')}
            className={` ${
              userType === 'user'
                ? 'bg-green-500 '
                : 'bg-gray-50  text-gray-500 border-gray-400 border'
            }  "bg-green-500 focus:outline-none rounded-md px-3 py-2 text-sm text-gray-50 `}
            type="button"
          >
            Patient
          </button>
          <button
            onClick={() => setType('doctor')}
            className={` ${
              userType === 'doctor'
                ? 'bg-green-500 '
                : 'bg-gray-50 text-gray-500 border-gray-400 border'
            }  "bg-green-500 focus:outline-none rounded-md px-3 py-2 text-sm text-gray-50 `}
            type="button"
          >
            Doctor
          </button>
        </div>
        <LoginForm user={userType} />
      </div>
    </div>
  );
};

export default LogInPage;

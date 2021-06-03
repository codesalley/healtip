import { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorForm from '../components/DoctorForm';
import PatientForm from '../components/PatientForm';

const SignUpPage = () => {
  const [userType, setType] = useState('user');

  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center">
      <div className="form-area shadow max-w-sm w-full flex flex-col items-center p-2 rounded-md">
        <h2 className="text-3xl p-5 font-bold">Sign Up</h2>
        <p className="text-xs font-light text-gray-500">
          Already have an account ?
          {' '}
          <Link to="login" className="text-green-700 font-semibold">Login </Link>
        </p>
        <div className="switch w-full flex justify-evenly py-2">
          <button onClick={() => setType('user')} className={`${userType === 'user' ? 'bg-green-500 ' : 'bg-gray-50  text-gray-500 border-gray-400 border'}  "bg-green-500 focus:outline-none rounded-md px-3 py-2 text-sm text-gray-50 `} type="button">Patient</button>
          <button onClick={() => setType('doctor')} className={`${userType === 'doctor' ? 'bg-green-500 ' : 'bg-gray-50 text-gray-500 border-gray-400 border'}  "bg-green-500 focus:outline-none rounded-md px-3 py-2 text-sm text-gray-50 `} type="button">Doctor</button>
        </div>
        {userType === 'user'
          ? <PatientForm /> : <DoctorForm />}
      </div>
    </div>
  );
};

export default SignUpPage;

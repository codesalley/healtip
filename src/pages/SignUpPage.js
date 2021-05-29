import { useState } from 'react';
import PatientForm from '../components/PatientForm';

const SignUpPage = () => {
  const [userType, setType] = useState('user');

  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center">
      <div className="form-area shadow max-w-xs w-full flex flex-col items-center p-2 rounded-md">
        <h2 className="text-3xl p-5 font-bold">Sing Up</h2>
        <div className="switch w-full flex justify-evenly py-2">
          <button onClick={() => setType('user')} className="bg-green-500 focus:outline-none rounded-md px-3 py-2 text-sm text-gray-50" type="button">Patient</button>
          <button onClick={() => setType('doctor')} className="bg-gray-50 focus:outline-none  rounded-md px-3 py-2  text-sm text-gray-500" type="button">Doctor</button>
        </div>
        {userType === 'user'
          ? <PatientForm /> : null}
      </div>
    </div>
  );
};

export default SignUpPage;

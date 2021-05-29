import { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProfile } from '../actions';
import { saveToken } from '../helpers/storageHelper';

const PatientForm = ({ getProfile }) => {
  const history = useHistory();

  const fullName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const passwordConfirmation = useRef('');
  const location = useRef('');
  const age = useRef('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.current.value === passwordConfirmation.current.value
      && email.current.value !== '' && age.current.value !== '' && location.current.value !== '') {
      const response = await fetch('http://127.0.0.1:3000/api/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName.current.value,
          email: email.current.value,
          password: password.current.value,
          location: location.current.value,
          age: age.current.value,
          type: 'user',
        }),
      });
      const data = await response.json();
      if (await response.status === 200) {
        const token = saveToken(data.s_token);
        getProfile(token, 'user');
        return history.push('/');
      }
      return false;
    }
    return false;
  };

  return (
    <form className="flex flex-col gap-2 w-4/5" onSubmit={handleSignUp}>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">
          Full Name
        </p>
        <input ref={fullName} type="text" name="full_name" className="border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1" required />
      </div>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">
          Email
        </p>
        <input ref={email} type="email" name="email" className="border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1" required />
      </div>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">
          Password
        </p>
        <input ref={password} type="password" name="password" className="border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1" required />
      </div>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">
          Password Confirmation
        </p>
        <input ref={passwordConfirmation} type="password" name="password confirmation" className="border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1" required />
      </div>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">
          Location
        </p>
        <input ref={location} type="text" name="location" className="border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1" required />
      </div>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">
          Age
        </p>
        <input ref={age} minLength={1} maxLength={2} type="text" name="age" className="border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1" required />
      </div>
      <button className="bg-green-500 w-full rounded-md p-1 text-gray-50" type="submit">Sign Up</button>
    </form>
  );
};

PatientForm.propTypes = {
  getProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getProfile: (token, type) => getProfile(token, type),
};

export default connect(null, mapDispatchToProps)(PatientForm);

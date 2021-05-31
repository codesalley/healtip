import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveToken } from '../helpers/storageHelper';
import { getProfile } from '../actions';

const LoginForm = ({ user, getProfile }) => {
  const histroy = useHistory();
  const email = useRef('');
  const password = useRef('');
  const [showError, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:3000/api/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        type: user,
      }),
    });
    if (await response.ok) {
      const data = await response.json();

      const token = saveToken(data.s_token);
      await getProfile(token, user);
      return histroy.push('/');
    }
    return handleError();
  };

  return (
    <form className="flex flex-col gap-3 w-4/5" onSubmit={handleSubmit}>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">Email</p>
        <input
          ref={email}
          type="email"
          name="email"
          className={`${
            showError ? 'border-red-200' : null
          }  border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1`}
          required
        />
      </div>
      <div className="form-control">
        <p className="font-normal text-sm text-gray-500">Password</p>
        <input
          ref={password}
          type="password"
          name="password"
          className={`${
            showError ? 'border-red-200' : null
          } border-gray-300 focus:outline-none focus:border-green-500 border-2 rounded text-gray-500 text-sm w-full px-1 py-1`}
          required
        />
      </div>
      <button
        className="bg-green-500 w-full rounded-md p-1 text-gray-50"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  getProfile: (token, type) => getProfile(token, type),
};

LoginForm.propTypes = {
  user: PropTypes.string.isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);

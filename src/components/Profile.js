import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { logOut } from '../helpers/storageHelper';

const Profile = ({ profile }) => {
  const history = useHistory();
  const handleSignOut = () => {
    logOut();
    history.replace('/login');
  };
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex bg-indigo-100 rounded-full w-4/12 justify-center p-3 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person fill-indigo" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </div>
        <h3 className="text-lg">
          {profile.full_name}
        </h3>
        <small className="leading-3 text-xs font-extralight">
          {profile.email}
        </small>
        <small className="leading-1 text-xs font-extralight mb-6">
          {profile.location}
        </small>
      </div>
      <button
        onClick={() => handleSignOut()}
        type="button"
        className="text-red-400 focus:outline-none bg-red-100 px-3 py-2 rounded-lg"
      >
        LogOut
        {' '}

      </button>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    full_name: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Profile);

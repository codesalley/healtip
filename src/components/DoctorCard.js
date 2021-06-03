/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import doctorImg from '../assets/undraw_doctor_kw5l.svg';
import { headers } from '../utils/constants';
import { getProfile } from '../actions';
import { getToken } from '../helpers/storageHelper';

const DoctorCard = ({ doctor, profile, getProfile }) => {
  const history = useHistory();
  const isLiked = (id) => {
    const res = [];

    profile.favorites ? profile.favorites.map((e) => res.push(e.id)) : null;
    if (res.includes(id)) {
      return true;
    }
    return false;
  };
  const handleBookForm = (doctor) => (history.push(`/book/${doctor}`));
  const handleFavorite = async (id) => {
    const res = await fetch(`https://pacific-plateau-70387.herokuapp.com/api/fav/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers,

    });

    if (await res.ok) {
      const token = getToken();
      await getProfile(token);
    }
  };

  return (
    <>
      <div className="bg-white card-body p-2 rounded-lg shadow-lg flex flex-col justify-between">
        <img className="doc-logo w-full" src={doctorImg} alt="card logo " />
        <p className="text-lg text-gray-500 font-semibold">
          {doctor.full_name}
          {' '}
        </p>
        <p className="text-sm text-gray-400 font-light">
          {' '}
          {doctor.category}
          {' '}
        </p>
        <p className="text-xs text-gray-500 font-thin">Rating : 4.7</p>
        <div className="flex w-full justify-between">

          <button onClick={() => handleBookForm(doctor.id)} type="button" className="bg-gray-100 block text-md indi-text px-3 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-plus inline-block mr-3" viewBox="0 0 16 16">
              <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            Book
          </button>
          <button onClick={() => handleFavorite(doctor.id)} type="button" className={`${isLiked(doctor.id) ? 'text-red-500' : 'indi-text'} block text-md  bg-gray-100 px-3 py-2 rounded-md`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${isLiked(doctor.id) ? 'text-red-500' : 'text-gray-500'} bi bi-heart inline-block mx-3 `} viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            Like
          </button>
        </div>
      </div>
    </>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    age: PropTypes.string,
    full_name: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  profile: PropTypes.shape(PropTypes.object).isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = ({
  getProfile: (token, type) => getProfile(token, type),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorCard);

import PropTypes from 'prop-types';
import doctorImg from '../assets/undraw_doctor_kw5l.svg';

const DoctorCard = ({ doctor }) => (
  <div className="bg-white card-body p-2 rounded-lg shadow-lg flex flex-col justify-between">
    <img className="doc-logo w-full" src={doctorImg} alt="card logo " />
    <p className="text-lg text-gray-500 font-semibold">
      {' '}
      Drs,
      {' '}
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

      <button type="button" className="bg-gray-100 block text-md indi-text px-3 py-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-plus inline-block mr-3" viewBox="0 0 16 16">
          <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
        Book
      </button>
      <button type="button" className="block text-md indi-text bg-gray-100 px-3 py-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart inline-block mx-3" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        Like
      </button>
    </div>
  </div>
);

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    age: PropTypes.string,
    full_name: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default DoctorCard;

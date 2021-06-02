import PropTypes from 'prop-types';
import { format, parseJSON } from 'date-fns';

const AppointmentCard = ({ apt }) => (
  <div className="bg-white overflow-hidden flex justify-between max-w-sm items-center w-full rounded-md px-2 py-3 md:py-1">
    {parseJSON(apt.time) > Date.now()
      ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-exclamation-circle fill-red text-xs md:text-sm w-8" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      )
      : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-alarm fill-gray text-xs md:text-sm w-8" viewBox="0 0 16 16">
          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
        </svg>
      )}
    <div>
      <p className="tracking-wide font-normal text-xs md:text-md text-gray-500">
        {' '}
        {apt.name}
        {' '}

      </p>
      <p className="font-extralight text-xs md:text-sm text-gray-400">
        { format(parseJSON(apt.time), 'MMM YYY do hh:mm:aaa')}
        {' '}
      </p>
    </div>
    {parseJSON(apt.time) > Date.now()
      ? <p className="md:text-sm w-16  text-xs text-center font-medium text-red-300 bg-red-100 h-8 py-2 px-1 rounded-md"> Past </p>

      : <p className="md:text-sm w-16  text-xs text-center font-medium text-indigo-400 bg-indigo-100 py-2 px-1 rounded-md">Pending </p>}

  </div>
);

AppointmentCard.propTypes = {
  apt: PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default AppointmentCard;

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentCard from './AppointmentCard';
import { getAllApt } from '../actions';
import { getToken } from '../helpers/storageHelper';

const Appointments = ({ appointments, getAllAppointments }) => {
  console.log(appointments);

  const token = getToken();
  getAllAppointments(token);

  return (appointments.length > 0 ? (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row w-full justify-items-center">
      {appointments.filter((ele) => ele.pending === true).map((apt) => (
        <AppointmentCard key={apt.id} apt={apt} />

      ))}

    </div>

  ) : <h3> loading... </h3>);
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAllAppointments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appointments: state.apponitment,
});

const mapDispatchToProps = ({
  getAllAppointments: (token) => getAllApt(token),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentCard from './AppointmentCard';

const Appointments = ({ appointments }) => (appointments.length > 0 ? (

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row w-full justify-items-center">
    {appointments.filter((ele) => ele.pending === true).map((apt) => (
      <AppointmentCard key={apt.id} apt={apt} />

    ))}

  </div>

) : <h3 className="text-center"> No Appointments... </h3>);

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  appointments: state.apponitment,
});

export default connect(mapStateToProps)(Appointments);

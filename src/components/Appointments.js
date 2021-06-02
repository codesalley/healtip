/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { getAllApt } from '../actions';
import AppointmentCard from './AppointmentCard';

const Appointments = ({ appointments, allApt }) => {
  appointments.length < 1 ? allApt() : null;

  return appointments.length > 0 ? (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row w-full justify-items-center">
      {appointments.filter((ele) => ele.pending === true).map((apt) => (
        <AppointmentCard key={apt.id} apt={apt} />

      ))}

    </div>

  ) : <h3> loading... </h3>;
};

const mapStateToProps = (state) => ({
  appointments: state.apponitment,
});
const mapDispatchToProps = {
  allApt: () => getAllApt(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);

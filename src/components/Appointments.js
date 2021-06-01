/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllApt } from '../actions';
import AppointmentCard from './AppointmentCard';

const Appointments = ({ appointments, allApt }) => {
  console.log(appointments);
  console.log('appointments');
  useEffect(() => {
    allApt();
  }, []);

  return (
    <div>
      <h2> &gt; Upcoming </h2>
      <div className="flex flex-col gap-3">
        {appointments.filter((ele) => ele.pending === true).map((apt) => (
          <AppointmentCard key={apt.id} apt={apt} />

        ))}

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appointments: state.apponitment,
});
const mapDispatchToProps = {
  allApt: () => getAllApt(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);

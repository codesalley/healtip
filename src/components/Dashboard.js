/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { connect } from 'react-redux';
import { useState } from 'react';
import { getDoctors } from '../actions';
import { getToken } from '../helpers/storageHelper';
import DoctorCard from './DoctorCard';

const Dashboard = ({ getDoctor, doctors }) => {
  useState(() => {
    const token = getToken();
    getDoctor(token);
  });

  return (
    <div className="overflow-scroll flex flex-col gap-2 justify-center items-center ">
      {doctors.map((ele, index) => (
        <DoctorCard key={index.toString()} doctor={ele} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

const mapDispatchToProps = {
  getDoctor: (token) => getDoctors(token),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

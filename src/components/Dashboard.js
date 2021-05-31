/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { connect } from 'react-redux';
import { useState } from 'react';
import { getDoctors } from '../actions';
import { getToken } from '../helpers/storageHelper';

const Dashboard = ({ getDoctor, doctors }) => {
  console.log(doctors);
  useState(() => {
    const token = getToken();
    getDoctor(token);
  });

  return (
    <p>
      dashboard
    </p>
  );
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

const mapDispatchToProps = {
  getDoctor: (token) => getDoctors(token),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

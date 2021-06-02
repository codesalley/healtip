import { logOut } from '../helpers/storageHelper';
import { headers } from '../utils/constants';
import {
  GET_DOCTORS, GET_PROFILE, MAKE_APPOINTMENT, GET_APPOINTMENT,
} from '../utils/type';

export const getDoctors = (token) => async (dispatch) => {
  const response = await fetch('https://healtip.herokuapp.com/api/doctors', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      type: 'user',
      's-token': token,
    },
  });

  if (await response.ok) {
    const data = await response.json();
    return dispatch({
      type: GET_DOCTORS,
      payload: data,
    });
  }
  if (await response.status === 400) {
    logOut();
  }
  return false;
};

export const getAllApt = () => async (dispatch) => {
  const response = await fetch('https://healtip.herokuapp.com/api/appoitments', {
    mode: 'cors',
    method: 'GET',
    headers,
  });
  if (await response.ok) {
    const data = await response.json();
    return dispatch({
      type: GET_APPOINTMENT,
      payload: data,
    });
  }
  return false;
};

export const getProfile = (token, type) => async (dispatch) => {
  const profile = await fetch('https://healtip.herokuapp.com/api/me', {
    method: 'GET',
    mode: 'cors',
    headers: {
      's-token': token,
      type,
      'Content-Type': 'application/json',
    },

  });
  if (profile.ok) {
    const data = await profile.json();
    return dispatch({
      type: GET_PROFILE,
      payload: data,
    });
  }
  if (await profile.status === 400) {
    logOut();
  }
  return false;
};

export const appointment = (doctor, user, info, time, category, location) => async (dispatch) => {
  const appt = await fetch('https://healtip.herokuapp.com/api/book', {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify({
      doctor_id: doctor,
      user_id: user,
      info,
      time,
      category,
      location,
    }),
  });
  if (appt.ok) {
    const data = await appt.json();

    return dispatch({
      type: MAKE_APPOINTMENT,
      payload: data,
    });
  }
  return false;
};

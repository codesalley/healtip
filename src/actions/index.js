import { logOut } from '../helpers/storageHelper';
import { GET_DOCTORS, GET_PROFILE } from '../utils/type';

export const getDoctors = (token) => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3000/api/doctors', {
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

export const getProfile = (token, type) => async (dispatch) => {
  const profile = await fetch('http://127.0.0.1:3000/api/me', {
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

import { GET_PROFILE } from '../utils/type';

export const getDoctors = () => {};

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
  return false;
};

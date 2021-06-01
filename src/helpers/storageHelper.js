import { Redirect } from 'react-router-dom';

export const saveToken = (token) => {
  localStorage.setItem('s_token', token);
  return token;
};

export const getToken = () => {
  const token = localStorage.getItem('s_token');
  return token;
};

export const saveUser = (user) => localStorage.setItem('s_profile', JSON.stringify(user));
export const getUser = () => JSON.parse(localStorage.getItem('s_profile'));
export const logOut = () => {
  localStorage.clear();
  return <Redirect to="/signup" />;
};

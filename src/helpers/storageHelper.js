export const saveToken = (token) => {
  localStorage.setItem('s_token', token);
  return token;
};

export const getToken = () => {
  const token = localStorage.getItem('s_token');
  return token;
};

export const saveUser = (user) => localStorage.setItem('s_profile', user);
export const getUser = () => localStorage.getItem('s_profile');

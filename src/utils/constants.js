import { getToken } from '../helpers/storageHelper';

export const typeOfAppointments = [
  {
    id: 1,
    name: 'Screening and Diagnostic labs',
  },
  {
    id: 2,
    name: 'Medicare Initial Preventative Physical Exam',
  },
  {
    id: 3,
    name: 'School/Sports Physical',
  },
  {
    id: 4,
    name: 'Physical',
  },
  {
    id: 5,
    name: 'Office Visit',
  },
];
export const locationOptions = [];
const token = getToken();
export const headers = {
  'Content-Type': 'application/json',
  type: 'user',
  's-token': token,
};

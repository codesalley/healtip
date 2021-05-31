import { doctors } from '../store/initialState';
import { GET_DOCTORS } from '../utils/type';

const doctorReducer = (state = doctors, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_DOCTORS:
      return payload;
    default:
      return state;
  }
};

export default doctorReducer;

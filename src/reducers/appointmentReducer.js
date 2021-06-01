import { appointments } from '../store/initialState';
import { MAKE_APPOINTMENT } from '../utils/type';

const appointmentReducer = (state = appointments, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case MAKE_APPOINTMENT:
      return payload;
    default:
      return state;
  }
};

export default appointmentReducer;

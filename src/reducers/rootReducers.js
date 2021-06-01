import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import doctorReducer from './doctorReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  doctors: doctorReducer,
  apponitment: appointmentReducer,
});

export default rootReducer;

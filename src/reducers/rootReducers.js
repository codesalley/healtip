import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import doctorReducer from './doctorReducer';

const rootReducer = combineReducers({ profile: profileReducer, doctors: doctorReducer });

export default rootReducer;

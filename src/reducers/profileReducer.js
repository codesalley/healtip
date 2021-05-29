import { saveUser } from '../helpers/storageHelper';
import { profile } from '../store/initialState';
import { GET_PROFILE } from '../utils/type';

const profileReducer = (state = profile, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      console.log(payload);
      saveUser(payload);
      return payload;
    default:
      return state;
  }
};
export default profileReducer;

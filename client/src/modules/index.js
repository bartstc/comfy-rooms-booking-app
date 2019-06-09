import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import errorReducer from './error/errorReducer';
import profileReducer from './profile/profileReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
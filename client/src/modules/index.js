import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import errorReducer from './error/errorReducer';
import profileReducer from './profile/profileReducer';
import orderReducer from './order/orderReducer';
import roomsReducer from './rooms/roomsReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  order: orderReducer,
  rooms: roomsReducer
});
import axios from 'axios';
import setToken from '../../utils/setToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, CLEAR_ERRORS } from '../error/errorTypes';
import { SET_CURRENT_USER } from './authTypes';

// TODO
// loading before push to signin

// SIGNUP USER
export const signupUser = (userData, history) => dispatch => {
  axios
    .post('api/users/signup', userData)
    .then(() => {
      history.push('/signin');
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// SIGNIN USER - GET USER TOKEN
export const signinUser = userData => dispatch => {
  axios
    .post('api/users/signin', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token in localStorage
      localStorage.setItem('jwtToken', token);
      // Set token into Auth header
      setToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// SET LOGGED IN USER OBJECT
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// LOGOUT UER
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
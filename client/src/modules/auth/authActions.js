import axios from 'axios';
import setToken from '../../utils/setToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, CLEAR_ERRORS } from '../error/errorTypes';
import { SET_CURRENT_USER, LOADING_START, LOADING_END } from './authTypes';

export const setCurrentUser = decoded => ({ type: SET_CURRENT_USER, payload: decoded });

const loadingStart = () => ({ type: LOADING_START });

const loadingEnd = () => ({ type: LOADING_END });

// SIGNUP USER
export const signupUser = (userData, history) => async dispatch => {
  try {
    dispatch(loadingStart());
    await axios.post('api/users/signup', userData);
    dispatch(loadingEnd());

    history.push('/signin');
    dispatch(clearErrors());
  } catch (err) {
    dispatch(loadingEnd());
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  };
};

// SIGNIN USER - GET USER TOKEN
export const signinUser = userData => async dispatch => {
  try {
    dispatch(loadingStart());
    const res = await axios.post('api/users/signin', userData);
    dispatch(loadingEnd());

    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    // Set token into Auth header
    setToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
    dispatch(clearErrors());
  } catch (err) {
    dispatch(loadingEnd());
    dispatch({ type: GET_ERRORS, payload: err.response.data })
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

const clearErrors = () => ({ type: CLEAR_ERRORS });
import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './profileTypes';
import { GET_ERRORS, CLEAR_ERRORS } from '../error/errorTypes';

// Get current profile
export const getCurrentProfile = () => async dispatch => {
  try {
    dispatch(setProfileLoading());
    const res = await axios.get('/api/profiles/profile');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch(emptyProfile());
  };
};

// Create standard profile
export const createUserProfile = () => async dispatch => {
  try {
    dispatch(setProfileLoading());
    const res = await axios.post('/api/profiles/user_profile');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch(emptyProfile());
  };
};

// Ask for registration to be able to share hotel objects
export const askForRegistration = () => async dispatch => {
  try {
    dispatch(setProfileLoading());
    const res = await axios.put('/api/profiles/registration');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch(emptyProfile());
  };
};

// Accept request (register user, give permission to share hotel objects)
export const registerUser = userId => async dispatch => {
  try {
    dispatch(setProfileLoading());
    const res = await axios.put('/api/admin/register', {id: userId});
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch(emptyProfile());
  };
};

// Profile loading
export const setProfileLoading = () => ({ type: PROFILE_LOADING });

// Clear profile
export const clearCurrentProfile = () => ({ type: CLEAR_CURRENT_PROFILE });

// Empty profile
export const emptyProfile = () => ({ type: GET_PROFILE, payload: {} });

// Handle errors
export const handleErrors = () => ({ type: GET_ERRORS, payload: {} });
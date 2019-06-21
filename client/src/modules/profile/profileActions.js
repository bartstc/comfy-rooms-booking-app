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
    const res = await axios.put('/api/admin/register', { id: userId });
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch(emptyProfile());
  };
};

// Get hotels (if you are registered)
export const getHotels = () => async dispatch => {
  try {
    dispatch(setProfileLoading());
    const res = await axios.get('/api/hotels/hotels');
    dispatch({
      type: GET_PROFILE,
      payload: { hotels: res.data }
    });
  } catch (err) {
    dispatch(emptyProfile());
  };
};

// Add new hotel
export const addHotel = hotelData => async dispatch => {
  try {
    await axios.post('/api/hotels/hotel', hotelData);
    dispatch(getHotels()); // Refetch all hotels
    dispatch(clearErrors());
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data })
  };
};

// Handle payment by stripe
export const handlePayment = paymentData => async dispatch => {
  try {
    await axios.put('/api/profiles/payment', paymentData);
    dispatch(getCurrentProfile());
  } catch (err) {
    console.log(err);
  };
};

// Add opinion
export const addOpinion = opinionData => async dispatch => {
  try {
    await axios.put('/api/profiles/opinion', opinionData);
    dispatch(getCurrentProfile());
  } catch (err) {
    console.log(err);
  };
};

// Profile loading
export const setProfileLoading = () => ({ type: PROFILE_LOADING });

// Clear profile
export const clearCurrentProfile = () => ({ type: CLEAR_CURRENT_PROFILE });

// Empty profile
export const emptyProfile = () => ({ type: GET_PROFILE, payload: {} });

// Clear errors
const clearErrors = () => ({ type: CLEAR_ERRORS });
import axios from 'axios';
import { SET_ORDER } from '../order/orderTypes';
import { ROOMS_LOADING, SET_ROOMS, GET_ROOM } from './roomsTypes';

// Search for results
export const searchForRooms = (searchData, orderData) => async dispatch => {
  try {
    dispatch(setSearchLoading());
    const res = await axios.post('/api/rooms/search', searchData);
    dispatch({
      type: SET_ORDER,
      payload: orderData
    });
    dispatch({
      type: SET_ROOMS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  };
};

// Filter rooms
export const filterRooms = (filters = [], limit = 8, skip = 0, searchData, prevState = []) => async dispatch => {
  const data = { filters, limit, skip, searchData };

  try {
    dispatch(setSearchLoading());
    const res = await axios.post('/api/rooms/filter', data);
    dispatch({
      type: SET_ROOMS,
      payload: [...prevState, ...res.data]
    });
  } catch (err) {
    console.log(err);
  };
};

export const getRoom = id => async dispatch => {
  try {
    dispatch(setSearchLoading());
    const res = await axios.get(`/api/rooms/room/${id}`);
    dispatch({
      type: GET_ROOM,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  };
};

// Searching ...
export const setSearchLoading = () => ({ type: ROOMS_LOADING });
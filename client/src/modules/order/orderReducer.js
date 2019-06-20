import { SET_ORDER } from './orderTypes';

const initialState = {
  checkIn: null,
  checkOut: null,
  city: '',
  adults: '',
  children: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDER:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  };
};
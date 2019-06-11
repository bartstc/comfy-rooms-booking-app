import { SET_ROOMS, ROOMS_LOADING } from './roomsTypes';

const initialState = {
  rooms: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROOMS:
      return {
        ...state,
        rooms: payload,
        loading: false
      };

    case ROOMS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  };
};
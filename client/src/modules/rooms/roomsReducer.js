import { SET_ROOMS, ROOMS_LOADING, GET_ROOM } from './roomsTypes';

const initialState = {
  rooms: [],
  room: null,
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

    case GET_ROOM:
      return {
        ...state,
        room: payload,
        loading: false
      };

    default:
      return state;
  };
};
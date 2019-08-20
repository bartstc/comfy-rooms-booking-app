import isEmpty from '../../utils/isEmpty';
import { SET_CURRENT_USER, LOADING_START, LOADING_END } from './authTypes';

const initialState = {
  isAuth: false,
  loading: false,
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      console.log(payload)
      return {
        ...state,
        isAuth: !isEmpty(payload),
        user: payload
      };

    case LOADING_START:
      return { ...state, loading: true }

    case LOADING_END:
      return { ...state, loading: false }

    default:
      return state;
  };
};
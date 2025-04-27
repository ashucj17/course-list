import { FETCH_COURSES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    default:
      return state;
  }
};
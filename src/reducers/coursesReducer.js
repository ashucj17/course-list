import { FETCH_COURSES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    default:
      return state;
  }
};
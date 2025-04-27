import { SUBMIT_ENQUIRY, FETCH_ENQUIRIES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SUBMIT_ENQUIRY:
      return [...state, action.payload];
    case FETCH_ENQUIRIES:
      return action.payload;
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import enquiryReducer from './enquiryReducer';

export default combineReducers({
  courses: coursesReducer,
  enquiries: enquiryReducer
});
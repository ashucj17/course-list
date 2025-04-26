import axios from 'axios';

export const FETCH_COURSES = 'FETCH_COURSES';
export const SUBMIT_ENQUIRY = 'SUBMIT_ENQUIRY';
export const FETCH_ENQUIRIES = 'FETCH_ENQUIRIES';

export const fetchCourses = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/courses');
  
  dispatch({
    type: FETCH_COURSES,
    payload: response.data
  });
};

export const submitEnquiry = (enquiry) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/enquiries', enquiry);
  
  dispatch({
    type: SUBMIT_ENQUIRY,
    payload: response.data
  });
};

export const fetchEnquiries = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/enquiries');
  
  dispatch({
    type: FETCH_ENQUIRIES,
    payload: response.data
  });
};
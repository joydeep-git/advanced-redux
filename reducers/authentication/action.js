import { setIsSubmitting, setSubmitError } from './index.js';
import { PostMethod } from '../../../axios/axiosRequest.jsx';
import { Call } from '@mui/icons-material';

export const login = (userData, navigate) => async (dispatch) => {
  dispatch(setIsSubmitting(true));

  // API Call
  PostMethod(`/login`, userData)
    .then(response => {
      console.log("response", response)
      localStorage.setItem('user', JSON.stringify(response));
      localStorage.setItem('token', response.token);
      dispatch(setSubmitError(""));
      dispatch(setIsSubmitting(false));
      navigate('/');
    })
    .catch(error => {
      if (error?.response?.data?.message) dispatch(setSubmitError(error.response.data.message));
      dispatch(setIsSubmitting(false));
    });
};
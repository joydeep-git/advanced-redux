import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  isSubmitting: false,
  submitError: "",
};

// ==============================|| SLICE - AUTH ||============================== //

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSubmitting(state, action) {
      state.isSubmitting = action.payload;
    },
    setSubmitError(state, action) {
      state.submitError = action.payload;
    },
  }
});

export default auth.reducer;

export const { setIsSubmitting, setSubmitError } = auth.actions;
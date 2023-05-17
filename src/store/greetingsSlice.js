import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    setGreetings: (state, action) => ({
      ...state,
      greetings: action.payload,
    }),
  },
});

export const { setGreetings } = greetingsSlice.actions;

export default greetingsSlice.reducer;

const fetchGreetings = () => async (dispatch) => {
  try {
    const res = await fetch('//localhost:3000/api/v1/greetings');
    const data = await res.json();
    dispatch(setGreetings(data));
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchGreetings };

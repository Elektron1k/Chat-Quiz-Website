import { createSlice } from '@reduxjs/toolkit';

export const massegesSlice = createSlice({
  name: 'masseges',
  initialState: {
    masseges: [],
    isLoadingMasseges: false,
    massegeError: '',
  },
  reducers: {
    getMassegeError: (state, actions) => {
      state.massegeError = actions.payload;
    },
    getNewMassege: () => {},
    getAllMassege: (state, actions) => {
      state.masseges = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getNewMassege, getMassegeError, getAllMassege } =
  massegesSlice.actions;

export default massegesSlice.reducer;

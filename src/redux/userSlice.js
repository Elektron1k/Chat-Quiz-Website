import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoadingUser: false,
    isLogoutUser: false,
    isAuthentication: false,
    errorAuthentication: false,
    errorUsers: '',
    token: '',
  },
  reducers: {
    getAuthetication: (state) => {
      state.isLoadingUser = true;
    },
    getAuthSuccess: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.errorAuthentication = false;
      state.isAuthentication = true;
      state.isLoadingUser = false;
    },
    getAuthError: (state, actions) => {
      state.errorUsers = actions.payload.errorMessage;
      state.errorAuthentication = true;
    },
    getLogout: (state) => {
      state.isLogoutUser = true;
    },
    getLogoutSuccess: (state) => {
      state.isLogoutUser = false;
      state.user = {};
      state.token = '';
      state.errorAuthentication = false;
      state.isAuthentication = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAuthetication,
  getAuthSuccess,
  getAuthError,
  getLogout,
  getLogoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    activeUserId: '',
    isLoadingUser: false,
    isLogoutUser: false,
    isAuthentication: false,
    errorAuthentication: false,
    errorUsers: '',
    userReadiness: false,
  },
  reducers: {
    getAuthetication: (state) => {
      state.isLoadingUser = true;
    },
    getAuthSuccess: (state) => {
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
      state.errorAuthentication = false;
      state.isAuthentication = false;
    },
    getTestActiveUserSuccess: (state, actions) => {
      state.user = actions.payload;
      state.activeUserId = actions.payload.uid;
      state.isAuthentication = true;
    },
    getTestActiveUserError: (state, actions) => {
      state.activeUserId = actions.payload;
      state.user = {};
      state.isAuthentication = false;
    },
    getUserReady: (state) => {
      state.userReadiness = !state.userReadiness;
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
  getTestActiveUserSuccess,
  getTestActiveUserError,
  getUserReady,
} = userSlice.actions;

export default userSlice.reducer;

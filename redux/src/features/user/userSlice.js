import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../../services/authService';
import { notification } from 'antd';

const initialState = {
  values: authService.getCurrentUser(),
  isLoading: false,
  createdAt: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.values = { ...action.payload };
      state.isLoading = false;
      state.createdAt = Date.now();
    },
    loginFail: state => {
      state.isLoading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFail } = userSlice.actions;

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(loginRequest());
    await authService.login(email, password);
    const user = authService.getCurrentUser();
    dispatch(loginSuccess({ ...user }));

    // Refresh page to attach token to header
    window.location.href = '/';
  } catch (error) {
    dispatch(loginFail());
    notification.error({
      message: 'Login fail!',
      description: error.response.data,
    });
  }
};

export default userSlice.reducer;

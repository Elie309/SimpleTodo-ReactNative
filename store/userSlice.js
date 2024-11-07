import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    isAuth: false,
  },
  reducers: {
    setUserCredentials: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    clearUserCredentials: (state) => {
      state.email = '';
      state.password = '';
      state.isAuth = false;
    },
  },
});

export const { setUserCredentials, clearUserCredentials } = userSlice.actions;

export default userSlice.reducer;

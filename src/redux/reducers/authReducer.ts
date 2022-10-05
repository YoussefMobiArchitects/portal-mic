import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: true
  },
  reducers: {
    isLoggedAction: (state, action) => {
      state.isLogged = action.payload
    },
  },
  extraReducers: {
  }
})
export const { isLoggedAction } = authSlice.actions;
export default authSlice.reducer;